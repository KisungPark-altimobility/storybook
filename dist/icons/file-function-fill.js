import React from"react";import{useIconSize}from"../contexts/IconSizeContext/index";function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})}else{obj[key]=value}return obj}function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key]}}}return target};return _extends.apply(this,arguments)}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};var ownKeys=Object.keys(source);if(typeof Object.getOwnPropertySymbols==="function"){ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))}ownKeys.forEach(function(key){_defineProperty(target,key,source[key])})}return target}function _objectWithoutProperties(source,excluded){if(source==null)return{};var target=_objectWithoutPropertiesLoose(source,excluded);var key,i;if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++){key=sourceSymbolKeys[i];if(excluded.indexOf(key)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(source,key))continue;target[key]=source[key]}}return target}function _objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key]}return target}export default function FileFunctionFill(_param){var _color=_param.color,color=_color===void 0?"currentcolor":_color,size=_param.size,props=_objectWithoutProperties(_param,["color","size"]);var iconSize=useIconSize();return React.createElement("svg",_extends({},props,{height:size||iconSize.size,shapeRendering:"geometricPrecision",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",viewBox:"0 0 24 24",width:size||iconSize.size,style:_objectSpread({},props.style,{color:color,"--geist-fill":"currentColor","--geist-stroke":"var(--geist-background)"})}),React.createElement("path",{d:"M4.055 2.055A2.75 2.75 0 016 1.25h12A2.75 2.75 0 0120.75 4v16A2.75 2.75 0 0118 22.75H6A2.75 2.75 0 013.25 20V4c0-.73.29-1.429.805-1.945zM15.116 5.31c-1.237-.194-2.29.086-3.02.83-.709.722-.998 1.758-.998 2.844v1.502H9a.75.75 0 100 1.5h2.098v3.22c0 .78-.197 1.257-.48 1.543-.283.284-.773.501-1.618.501a.75.75 0 000 1.5c1.088 0 2.023-.281 2.681-.944.658-.662.918-1.582.918-2.6v-3.22h2.062a.75.75 0 000-1.5h-2.063V8.984c0-.851.229-1.447.567-1.792.315-.32.838-.538 1.719-.4a.75.75 0 00.232-1.482z",fill:"var(--geist-fill)",stroke:"none"}))}