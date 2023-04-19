import clsx from"clsx";import React from"react";import code from"./code.module.css";import syntaxTheme from"./syntax-theme.module.css";function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})}else{obj[key]=value}return obj}var Code=function(param){var children=param.children,syntax=param.syntax,lite=param.lite,style=param.style;return React.createElement("pre",{className:clsx(code.pre,syntax,_defineProperty({},code.lite,!!lite)),style:style},React.createElement("code",{className:clsx(syntaxTheme.code)},children))};export var OldCode=function(param){var children=param.children,noWrap=param.noWrap,noTicks=param.noTicks,_fontSize=param.fontSize,fontSize=_fontSize===void 0?14:_fontSize;var _obj;return React.createElement("code",{className:clsx(code.code,(_obj={},_defineProperty(_obj,code["no-wrap"],!!noWrap),_defineProperty(_obj,code["no-ticks"],!!noTicks),_obj)),style:{fontSize:fontSize}},children)};export default Code