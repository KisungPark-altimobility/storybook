"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _clsx=_interopRequireDefault(require("clsx"));var _react=_interopRequireWildcard(require("react"));var _disabledContext=require("../../contexts/DisabledContext");var _text=require("../Text/index");var _fieldsetModuleCss=_interopRequireDefault(require("./Fieldset.module.css"));function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})}else{obj[key]=value}return obj}function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key]}}}return target};return _extends.apply(this,arguments)}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):{};if(desc.get||desc.set){Object.defineProperty(newObj,key,desc)}else{newObj[key]=obj[key]}}}}newObj.default=obj;return newObj}}function _iterableToArrayLimit(arr,i){var _i=arr==null?null:typeof Symbol!=="undefined"&&arr[Symbol.iterator]||arr["@@iterator"];if(_i==null)return;var _arr=[];var _n=true;var _d=false;var _s,_e;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break}}catch(err){_d=true;_e=err}finally{try{if(!_n&&_i["return"]!=null)_i["return"]()}finally{if(_d)throw _e}}return _arr}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _objectWithoutProperties(source,excluded){if(source==null)return{};var target=_objectWithoutPropertiesLoose(source,excluded);var key,i;if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++){key=sourceSymbolKeys[i];if(excluded.indexOf(key)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(source,key))continue;target[key]=source[key]}}return target}function _objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key]}return target}function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_unsupportedIterableToArray(arr,i)||_nonIterableRest()}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(n);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}var Status=function(param){var children=param.children;return _react.default.createElement("div",{className:_fieldsetModuleCss.default.status},children)};var Actions=function(param){var children=param.children;return _react.default.createElement("div",{className:_fieldsetModuleCss.default.actions},_react.default.createElement("div",null,children))};var Footer=function(param){var children=param.children,style=param.style,disabled=param.disabled,highlight=param.highlight;var ctxDisabled=(0,_react).useContext(_disabledContext.DisabledContext);var isDisabled=disabled!==null&&disabled!==void 0?disabled:ctxDisabled;var _obj;return _react.default.createElement(_disabledContext.DisabledContext.Provider,{value:isDisabled},_react.default.createElement("footer",{className:(0,_clsx).default(_fieldsetModuleCss.default.footer,(_obj={},_defineProperty(_obj,_fieldsetModuleCss.default.highlight,highlight),_defineProperty(_obj,_fieldsetModuleCss.default.disabled,isDisabled),_defineProperty(_obj,"geist-disabled",isDisabled),_obj)),style:style},isDisabled&&_react.default.createElement("div",{className:"geist-disabled-wall"}),children))};Footer.Status=Status;Footer.Actions=Actions;var Tabs=function(_param){var children=_param.children,tabs=_param.tabs,props=_objectWithoutProperties(_param,["children","tabs"]);var ref=_slicedToArray((0,_react).useState(0),2),activeIndex=ref[0],setActiveIndex=ref[1];return _react.default.createElement("div",_extends({className:_fieldsetModuleCss.default.tabs},props),_react.default.createElement("div",{className:_fieldsetModuleCss.default.tabsRow},tabs.map(function(e,i){return _react.default.createElement("button",{className:_fieldsetModuleCss.default.tab,key:i,disabled:activeIndex===i,onClick:function(){return setActiveIndex(i)}},e)})),_react.Children.toArray(children)[activeIndex])};var ErrorText=function(param){var children=param.children;return _react.default.createElement("span",{className:_fieldsetModuleCss.default.error},children)};var fs={Tabs:Tabs,Fieldset:function(_param){var className=_param.className,disabled=_param.disabled,props=_objectWithoutProperties(_param,["className","disabled"]);return _react.default.createElement(_disabledContext.DisabledContext.Provider,{value:disabled},_react.default.createElement("div",_extends({},props,{className:(0,_clsx).default(_fieldsetModuleCss.default.fieldset,className)})))},Content:function(_param){var className=_param.className,children=_param.children,disabled=_param.disabled,props=_objectWithoutProperties(_param,["className","children","disabled"]);var ctxDisabled=(0,_react).useContext(_disabledContext.DisabledContext);var isDisabled=disabled!==null&&disabled!==void 0?disabled:ctxDisabled;var _obj;return _react.default.createElement(_disabledContext.DisabledContext.Provider,{value:isDisabled},_react.default.createElement("div",_extends({className:(0,_clsx).default(_fieldsetModuleCss.default.content,className,(_obj={},_defineProperty(_obj,_fieldsetModuleCss.default.disabled,isDisabled),_defineProperty(_obj,"geist-disabled",isDisabled),_obj))},props),isDisabled&&_react.default.createElement("div",{className:"geist-disabled-wall"}),children))},Title:function(_param){var children=_param.children,props=_objectWithoutProperties(_param,["children"]);return _react.default.createElement(_text.Text,_extends({as:"h4",size:20},props,{className:_fieldsetModuleCss.default.title}),children)},Subtitle:function(_param){var children=_param.children,props=_objectWithoutProperties(_param,["children"]);return _react.default.createElement(_text.Text,_extends({},props,{size:14,style:{margin:"var(--geist-gap-half) 0"}}),children)},ErrorText:ErrorText,Footer:Footer};var _default=fs;exports.default=_default