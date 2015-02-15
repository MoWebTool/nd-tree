'use strict';


//const
var _const = {
  events: {
    CREATE: 'nd_tree_create',
    CLICK: 'nd_tree_click',
    EXPAND: 'nd_tree_expand',
    COLLAPSE: 'nd_tree_collapse',
    CHECK: 'nd_tree_check',
    REMOVE: 'nd_tree_remove'
  },
  id: {
    ON: 'on',
    BEFORE: 'before',
    AFTER: 'after'
  },
  defaultEvents: {},
  expandList: ['none', 'all', 'first', 'last'],
  switchTheme: ['switch', 'arrow', 'custom', 'hollow'],
  switchType: ['Expand', 'Collapse'],
  check: {
    Type: ['radio', 'checkbox'],
    radioSettings: {
      level: ['level', 'all']
    },
    checkboxSettings: {}
  }


};
//settings
var _settings = {
  containerId: '',//容器
  expandIndex: 'none',//默认展开某个节点，取值'2','none','first','last',具体的数字
  defaultDataFormat: true,//支持的数据格式，false代表的是[ {id: 11, pId: 1, name: "父节点11 - 折叠"}],否则默认true是[{id:1,pId:'1',name:'节点','children':[{id:1,pId:'1',name:'节点','children':[]}]}]
  closeSiblings: true,//展开一个节点的时候，是否关闭兄弟节点，默认true关闭兄弟节点
  dblClickExpand: true,//双击展开父节点，默认是响应双击。
  expandSpeed: 'fast',//展开收缩的动画效果
  defaultSwitchTheme: 'switch',//两种样式，箭头或者常见的+-;取值'arrow','switch','custom','hollow'默认switch
  showParentIcon: false,//是否显示父节点前面的图标,默认不显示
//events
  events: {},
//keys
  keys: {
    idKey: 'id',
    pIdKey: 'pId',
    nameKey: 'name',
    childKey: 'children'
  },
//回调
  callbacks: {
    beforeClick: null,
    onClick: null,
    afterClick: null,
    beforeCreate: null,
    onCreate: null,
    afterCreate: null,
    beforeExpand: null,
    onExpand: null,
    afterExpand: null,
    beforeCollapase: null,
    onCollapase: null,
    afterCollapase: null,
    beforeRemove: null,
    onRemove: null,
    afterRemove: null,
    beforeCheck: null,
    onCheck: null,
    afterCheck: null,
    beforeMouseOver: null,
    onMouseOver: null,
    afterMouseOver: null,
    beforeMouseOut: null,
    onMouseOut: null,
    afterMouseOut: null,
    beforeMouseDown: null,
    onMouseDown: null,
    afterMouseDown: null,
    beforeMouseUp: null,
    onMouseUp: null,
    afterMouseUp: null,
    beforeContextMenu: null,
    onContextMenu: null,
    afterContextMenu: null,
    beforeDblClick: null,
    onDblClick: null,
    afterDblClick: null
  },
  //单选多选
  check: {
    enable: true,
    chkStyle: _const.check.Type[0],//默认是单选
    radioSettings: {
      level: _const.check.radioSettings.level[1]//默认的分组级别在all级
    },
    checkboxSettings: {
      selected: {
        changeChild: true,
        changeParent:true
      },
      unSelected: {
        changeChild: true,
        changeParent:true
      }
    }
  },
//启用编辑
  edit: {
    enable: true,
    showRemoveBtn: true
  },
//样式
  classes: {
    levelClsName: '',//根节点的样式，level级别的
    parentTxtClsName: '',//父节点的样式
    //展开收缩的样式
    expandCollapse: {
      customExpand: 'expandIcon',
      customCollapse: 'collapseIcon',
      switchExpand: 'icon icon-switch-open',
      switchCollapse: 'icon icon-switch-close',
      arrowExpand: ' icon-arrow-open',
      arrowCollapse: ' icon-arrow-close',
      hollowExpand: 'hollowExpand',
      hollowCollapse: 'hollowCollapse'
    },
    //单选框和复选框的图标
    check: {
      radio: {
        checked: 'icon icon-radiocheck',//选中时候的样式图标
        unchecked: 'icon icon-unradiocheck'//没被选中时候的样式图标
      },
      checkbox: {
        checked: 'icon icon-checkbox',//选中时候的样式图标
        unchecked: 'icon icon-uncheckbox'//没被选中时候的样式图标
      }
    },
    //每个节点前面的图标
    nodeIcon: {
      expand: 'icon icon-node-open',
      collapse: 'icon icon-node-close'
    }
  },
//节点的模板
  templates: {
    nodeTpl: ''//节点的模板
  }

};

module.exports = {
  _const: _const,
  _settings: _settings
};