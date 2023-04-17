"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _clsx=_interopRequireDefault(require("clsx"));var _react=_interopRequireWildcard(require("react"));var _textModuleCss=_interopRequireDefault(require("./text.module.css"));function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})}else{obj[key]=value}return obj}function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key]}}}return target};return _extends.apply(this,arguments)}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):{};if(desc.get||desc.set){Object.defineProperty(newObj,key,desc)}else{newObj[key]=obj[key]}}}}newObj.default=obj;return newObj}}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};var ownKeys=Object.keys(source);if(typeof Object.getOwnPropertySymbols==="function"){ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))}ownKeys.forEach(function(key){_defineProperty(target,key,source[key])})}return target}function _objectWithoutProperties(source,excluded){if(source==null)return{};var target=_objectWithoutPropertiesLoose(source,excluded);var key,i;if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++){key=sourceSymbolKeys[i];if(excluded.indexOf(key)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(source,key))continue;target[key]=source[key]}}return target}function _objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key]}return target}var Text=(0,_react).forwardRef(function(_param,ref){var children=_param.children,_as=_param.as,as=_as===void 0?"p":_as,_size=_param.size,size=_size===void 0?14:_size,lineHeight=_param.lineHeight,weight=_param.weight,transform=_param.transform,align=_param.align,_color=_param.color,color=_color===void 0?"geist-foreground":_color,truncate=_param.truncate,className=_param.className,_style=_param.style,style=_style===void 0?{}:_style,title=_param.title,wrap=_param.wrap,monospace=_param.monospace,dangerouslySetInnerHTML=_param.dangerouslySetInnerHTML,rest=_objectWithoutProperties(_param,["children","as","size","lineHeight","weight","transform","align","color","truncate","className","style","title","wrap","monospace","dangerouslySetInnerHTML"]);var Tag=as;var s="s-".concat(size);var w="w-".concat(weight);var lh="lh-".concat(lineHeight);var _obj;return _react.default.createElement(Tag,_extends({},{ref:ref},{align:align},{title:title},{dangerouslySetInnerHTML:dangerouslySetInnerHTML},{className:(0,_clsx).default(className,_textModuleCss.default.wrapper,_textModuleCss.default[s],(_obj={},_defineProperty(_obj,_textModuleCss.default[w],!!weight),_defineProperty(_obj,_textModuleCss.default[lh],!!lh),_defineProperty(_obj,_textModuleCss.default.truncate,truncate===true),_defineProperty(_obj,_textModuleCss.default.clamp,typeof truncate==="number"),_defineProperty(_obj,_textModuleCss.default[transform],!!transform),_defineProperty(_obj,_textModuleCss.default.nowrap,wrap===false),_defineProperty(_obj,_textModuleCss.default.monospace,!!monospace),_obj)),style:_objectSpread({},style,{"--color":"var(--".concat(color,")"),"--clamp":typeof truncate==="number"?truncate:undefined})},rest),children)});var _default=Text;exports.default=_default