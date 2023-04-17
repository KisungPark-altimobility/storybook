"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.File=exports.Folder=exports.Tree=void 0;var _clsx=_interopRequireDefault(require("clsx"));var _react=_interopRequireWildcard(require("react"));var _icons=require("../../icons/index");var _depthContext=require("./DepthContext");var _fileTreeModuleCss=_interopRequireDefault(require("./file-tree.module.css"));function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})}else{obj[key]=value}return obj}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):{};if(desc.get||desc.set){Object.defineProperty(newObj,key,desc)}else{newObj[key]=obj[key]}}}}newObj.default=obj;return newObj}}function _iterableToArrayLimit(arr,i){var _i=arr==null?null:typeof Symbol!=="undefined"&&arr[Symbol.iterator]||arr["@@iterator"];if(_i==null)return;var _arr=[];var _n=true;var _d=false;var _s,_e;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break}}catch(err){_d=true;_e=err}finally{try{if(!_n&&_i["return"]!=null)_i["return"]()}finally{if(_d)throw _e}}return _arr}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_unsupportedIterableToArray(arr,i)||_nonIterableRest()}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(n);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}var Tree=function(param){var children=param.children,style=param.style;return _react.default.createElement("div",{className:_fileTreeModuleCss.default.tree,style:style},children)};exports.Tree=Tree;var Folder=(0,_react).memo(function(param){var children=param.children,name=param.name,open=param.open,style=param.style,_defaultOpen=param.defaultOpen,defaultOpen=_defaultOpen===void 0?false:_defaultOpen;var depth=(0,_depthContext).useDepth();var ref=_slicedToArray((0,_react).useState(defaultOpen),2),isOpen=ref[0],setIsOpen=ref[1];return _react.default.createElement(_depthContext.DepthContextProvider,{value:1+depth},_react.default.createElement("li",{className:(0,_clsx).default(_fileTreeModuleCss.default.folder,{open:isOpen||open})},_react.default.createElement("a",{title:name,onClick:function(){return setIsOpen(function(s){return!s})},style:style},Array.from(Array(depth)).map(function(_e,i){return _react.default.createElement("span",{key:i,"data-tree-indent":""})}),_react.default.createElement("span",{className:_fileTreeModuleCss.default.status},open||isOpen?_react.default.createElement(_icons.MinusSquare,{size:12}):_react.default.createElement(_icons.PlusSquare,{size:12})),_react.default.createElement("span",{className:_fileTreeModuleCss.default.icon},_react.default.createElement(_icons.Folder,{size:22})),_react.default.createElement("span",{className:_fileTreeModuleCss.default.name},name)),(open||isOpen)&&_react.default.createElement("ul",null,children)))});exports.Folder=Folder;var File=(0,_react).memo(function(param){var name=param.name,style=param.style,active=param.active,type=param.type;var depth=(0,_depthContext).useDepth();return _react.default.createElement("li",{className:(0,_clsx).default(_fileTreeModuleCss.default.file,_defineProperty({},_fileTreeModuleCss.default.active,active))},_react.default.createElement("a",{style:style},Array.from(Array(depth)).map(function(_e,i){return _react.default.createElement("span",{key:i,"data-tree-indent":""})}),_react.default.createElement("span",{className:_fileTreeModuleCss.default.icon},type==="lambda"?_react.default.createElement(_icons.FileLambda,{size:22}):_react.default.createElement(_icons.File,{size:22})),_react.default.createElement("span",{className:_fileTreeModuleCss.default.name},name)))});exports.File=File