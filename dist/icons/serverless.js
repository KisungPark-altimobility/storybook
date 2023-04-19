import React from"react";import{useIconSize}from"../contexts/IconSizeContext/index";function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key]}}}return target};return _extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(source==null)return{};var target=_objectWithoutPropertiesLoose(source,excluded);var key,i;if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++){key=sourceSymbolKeys[i];if(excluded.indexOf(key)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(source,key))continue;target[key]=source[key]}}return target}function _objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key]}return target}export default function Serverless(_param){var _color=_param.color,color=_color===void 0?"currentcolor":_color,size=_param.size,props=_objectWithoutProperties(_param,["color","size"]);var iconSize=useIconSize();return React.createElement("svg",_extends({},props,{fill:"none",height:size||iconSize.size,shapeRendering:"geometricPrecision",viewBox:"0 0 20 20",width:size||iconSize.size,xmlns:"http://www.w3.org/2000/svg"}),React.createElement("defs",null,React.createElement("mask",{id:":R5lb0humol8m:"},React.createElement("path",{d:"M9.97057 2.28339L2.94116 6.50103V15.4853L6.8107 13.2091L9.34061 13.6481L4 16.5L10.4392 18.2167L17 14.4677V5.92525L12.3137 8.20145L9.18767 7.74902L16.5 4L9.97057 2.28339Z",fill:"white"}))),React.createElement("path",{d:"M5.61475 15.0264L9.31978 16.264C9.80366 16.4256 10.3332 16.3768 10.7794 16.1296L15.1719 13.6953C15.7509 13.3744 16.1102 12.7646 16.1102 12.1026V7.38195L4.0481 13.1753V8.00905C4.0481 7.34706 4.40736 6.73721 4.98638 6.41632L9.2517 4.05254C9.77041 3.76508 10.3966 3.74822 10.93 4.00734L13.8437 5.42274",mask:"url(#:R5lb0humol8m:)",stroke:"var(--geist-foreground)",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5"}))}