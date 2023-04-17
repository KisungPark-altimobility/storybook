"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _clsx=_interopRequireDefault(require("clsx"));var _react=_interopRequireDefault(require("react"));var _kbdModuleCss=_interopRequireDefault(require("./kbd.module.css"));function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})}else{obj[key]=value}return obj}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var KBD=function(param){var meta=param.meta,shift=param.shift,alt=param.alt,ctrl=param.ctrl,small=param.small,children=param.children;return _react.default.createElement("kbd",{className:(0,_clsx).default(_kbdModuleCss.default.kbd,_defineProperty({},_kbdModuleCss.default.small,small))},meta&&_react.default.createElement("span",null,"⌘"),ctrl&&_react.default.createElement("span",null,"⌃"),shift&&_react.default.createElement("span",null,"⇧"),alt&&_react.default.createElement("span",null,"⌥"),children&&_react.default.createElement("span",null,children))};var _default=KBD;exports.default=_default