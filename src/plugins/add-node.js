/**
 * @module: Tree
 * @author: crossjs <liwenfu@crossjs.com> - 2015-4-22 13:05:11
 */

'use strict';

var $ = require('jquery');

var Alert = require('nd-alert');
var FormExtra = require('nd-form-extra');

var treeNode = require('../modules/treenode');

module.exports = function() {
  var plugin = this,
    host = plugin.host,
    options = plugin.options || {};

  function makeForm(data) {
    return new FormExtra($.extend(true, {
      name: 'tree-add-node',
      // action: '',
      method: 'POST',
      formData: data,
      proxy: host.get('proxy'),
      parentNode: host.get('parentNode')
    }, options))
    .on('formCancel', function() {
      plugin.trigger('hide', this);
    })
    .on('formSubmit', function() {
      // 调用队列
      this.submit(function(data) {
        plugin.trigger('submit', data);
      });
    });
  }

  host.addNodeAction($.extend({
    'role': 'add-node',
    'text': '增加子节点'
  }, options.button), 0);

  // 移除参数
  delete options.button;

  host.delegateEvents({
    'click [data-role="add-node"]': function(e) {
      if (!plugin.exports) {
        var parentTreeNode = treeNode($(e.currentTarget).closest('li'));
        plugin.exports = makeForm({
          'parent_id': parentTreeNode.get('id'),
          'parent_name': parentTreeNode.get('name')
        }).render();
      }

      plugin.trigger('show', plugin.exports);
    }
  });

  host.before('destroy', function() {
    plugin.exports && plugin.exports.destroy();
  });

  plugin.on('show', function(form) {
    // 通知就绪
    // plugin.ready();

    host.element.hide();
    form.element.show();
  });

  plugin.on('hide', function(form) {
    host.element.show();
    form.destroy();
    delete plugin.exports;
  });

  plugin.on('submit', function(data) {
    host.POST({
        data: data
      })
      .done(function(data) {
        // 成功，插入节点
        host.insertNode(data);

        // 隐藏
        plugin.trigger('hide', plugin.exports);
      })
      .fail(function(error) {
        Alert.show(error);
      });
  });

  // 通知就绪
  this.ready();
};
