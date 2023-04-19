import clsx from"clsx";import React from"react";import styles from"./Switch.module.css";function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})}else{obj[key]=value}return obj}var Switch=function(param){var items=param.items,onChange=param.onChange,active=param.active,size=param.size,icon=param.icon;var _obj;return React.createElement("div",{className:clsx(styles.switch,(_obj={},_defineProperty(_obj,styles[size],!!size),_defineProperty(_obj,styles.icon,!!icon),_obj)),role:"radiogroup"},items.map(function(e){var isActive=active===e.value;var disabled=e.disabled;return React.createElement("button",{className:clsx(styles.button,_defineProperty({},styles.active,isActive)),"aria-checked":isActive,role:"radio",type:"button",key:e.value,onClick:function(){onChange(e.value)},style:{minWidth:icon?undefined:e.width},disabled:disabled,"aria-label":icon?e.ariaLabel||"Switch to ".concat(e.value):undefined},React.createElement("span",null,e.name))}))};export default Switch