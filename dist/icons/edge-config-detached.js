"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=EdgeConfigDetached;var _react=_interopRequireDefault(require("react"));var _iconSizeContext=require("../contexts/IconSizeContext/index");function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})}else{obj[key]=value}return obj}function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key]}}}return target};return _extends.apply(this,arguments)}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};var ownKeys=Object.keys(source);if(typeof Object.getOwnPropertySymbols==="function"){ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))}ownKeys.forEach(function(key){_defineProperty(target,key,source[key])})}return target}function _objectWithoutProperties(source,excluded){if(source==null)return{};var target=_objectWithoutPropertiesLoose(source,excluded);var key,i;if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++){key=sourceSymbolKeys[i];if(excluded.indexOf(key)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(source,key))continue;target[key]=source[key]}}return target}function _objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key]}return target}function EdgeConfigDetached(_param){var _color=_param.color,color=_color===void 0?"currentcolor":_color,size=_param.size,props=_objectWithoutProperties(_param,["color","size"]);var iconSize=(0,_iconSizeContext).useIconSize();return _react.default.createElement("svg",_extends({},props,{fill:"none",height:size||iconSize.size,shapeRendering:"geometricPrecision",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1",viewBox:"0 0 24 24",width:size||iconSize.size,style:_objectSpread({},props.style,{color:color})}),_react.default.createElement("circle",{cx:"12",cy:"12",r:"11.4",stroke:"currentColor",strokeWidth:"1.2"}),_react.default.createElement("path",{d:"M5.48315 11.9049V11.2625C5.85176 11.2625 6.10744 11.189 6.2502 11.0419C6.39296 10.8949 6.46433 10.6573 6.46433 10.3292V9.6229C6.46433 9.22873 6.51867 8.91339 6.62733 8.67688C6.73813 8.43824 6.89154 8.2582 7.08756 8.13675C7.28571 8.0153 7.52009 7.93434 7.79068 7.89385C8.06128 7.85337 8.35744 7.83313 8.67918 7.83313V8.84947C8.42776 8.84947 8.236 8.88249 8.10389 8.94854C7.97392 9.01246 7.8855 9.1126 7.83862 9.24897C7.79175 9.3832 7.76831 9.55366 7.76831 9.76033V10.6936C7.76831 10.8555 7.73848 11.01 7.67882 11.157C7.61916 11.3019 7.50837 11.4308 7.34644 11.5437C7.1845 11.6545 6.95332 11.7429 6.6529 11.809C6.35247 11.8729 5.96256 11.9049 5.48315 11.9049ZM8.67918 15.9223C8.35744 15.9223 8.06128 15.902 7.79068 15.8615C7.52009 15.8211 7.28571 15.7401 7.08756 15.6186C6.89154 15.4972 6.73813 15.3171 6.62733 15.0785C6.51867 14.842 6.46433 14.5267 6.46433 14.1325V13.423C6.46433 13.0948 6.39296 12.8573 6.2502 12.7103C6.10744 12.5632 5.85176 12.4897 5.48315 12.4897V11.8473C5.96256 11.8473 6.35247 11.8804 6.6529 11.9464C6.95332 12.0103 7.1845 12.0988 7.34644 12.2117C7.50837 12.3225 7.61916 12.4514 7.67882 12.5984C7.73848 12.7433 7.76831 12.8978 7.76831 13.0618V13.9951C7.76831 14.1996 7.79175 14.369 7.83862 14.5032C7.8855 14.6396 7.97392 14.7397 8.10389 14.8037C8.236 14.8697 8.42776 14.9027 8.67918 14.9027V15.9223ZM5.48315 12.4897V11.2625H6.63053V12.4897H5.48315Z",fill:"currentColor"}),_react.default.createElement("path",{d:"M12.9108 13.6051L12.8756 13.9567C12.8479 14.238 12.7947 14.5181 12.7158 14.7973C12.6391 15.0785 12.5582 15.3331 12.4729 15.5611C12.3898 15.7891 12.3227 15.9681 12.2716 16.098H11.3895C11.4215 15.9723 11.4651 15.7966 11.5205 15.5707C11.5759 15.347 11.6281 15.0956 11.6771 14.8164C11.7261 14.5373 11.757 14.2529 11.7698 13.9631L11.7858 13.6051H12.9108ZM12.3419 11.1442C12.131 11.1442 11.9499 11.0696 11.7986 10.9205C11.6494 10.7713 11.5749 10.5902 11.5749 10.3772C11.5749 10.1684 11.6494 9.99045 11.7986 9.84343C11.9499 9.69428 12.131 9.61971 12.3419 9.61971C12.5465 9.61971 12.7254 9.69428 12.8788 9.84343C13.0322 9.99045 13.109 10.1684 13.109 10.3772C13.109 10.5199 13.0727 10.6499 13.0003 10.7671C12.93 10.8821 12.8373 10.9738 12.7222 11.0419C12.6072 11.1101 12.4804 11.1442 12.3419 11.1442Z",fill:"currentColor"}),_react.default.createElement("path",{d:"M19.0161 11.8473V12.4897C18.6496 12.4897 18.3939 12.5632 18.249 12.7103C18.1063 12.8573 18.0349 13.0948 18.0349 13.423V14.1325C18.0349 14.5267 17.9795 14.842 17.8687 15.0785C17.7601 15.3171 17.6066 15.4972 17.4085 15.6186C17.2125 15.7401 16.9792 15.8211 16.7086 15.8615C16.4401 15.902 16.1439 15.9223 15.8201 15.9223V14.9027C16.0715 14.9027 16.2622 14.8697 16.3922 14.8037C16.5243 14.7397 16.6137 14.6396 16.6606 14.5032C16.7075 14.369 16.7309 14.1996 16.7309 13.9951V13.0618C16.7309 12.8978 16.7608 12.7433 16.8204 12.5984C16.8801 12.4514 16.9909 12.3225 17.1528 12.2117C17.3147 12.0988 17.5459 12.0103 17.8463 11.9464C18.1468 11.8804 18.5367 11.8473 19.0161 11.8473ZM15.8201 7.83313C16.1439 7.83313 16.4401 7.85337 16.7086 7.89385C16.9792 7.93434 17.2125 8.0153 17.4085 8.13675C17.6066 8.2582 17.7601 8.43824 17.8687 8.67688C17.9795 8.91339 18.0349 9.22873 18.0349 9.6229V10.3292C18.0349 10.6573 18.1063 10.8949 18.249 11.0419C18.3939 11.189 18.6496 11.2625 19.0161 11.2625V11.9049C18.5367 11.9049 18.1468 11.8729 17.8463 11.809C17.5459 11.7429 17.3147 11.6545 17.1528 11.5437C16.9909 11.4308 16.8801 11.3019 16.8204 11.157C16.7608 11.01 16.7309 10.8555 16.7309 10.6936V9.76033C16.7309 9.55366 16.7075 9.3832 16.6606 9.24897C16.6137 9.1126 16.5243 9.01246 16.3922 8.94854C16.2622 8.88249 16.0715 8.84947 15.8201 8.84947V7.83313ZM19.0161 11.2625V12.4897H17.8687V11.2625H19.0161Z",fill:"currentColor"}))}