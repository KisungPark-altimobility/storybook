import clsx from"clsx";import React,{useState}from"react";import{useFocus}from"react-aria";import CopyIcon from"../../icons/copy";import{useToasts}from"../Toast/index";import styles from"./Snippet.module.css";function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})}else{obj[key]=value}return obj}function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key]}}}return target};return _extends.apply(this,arguments)}function _iterableToArrayLimit(arr,i){var _i=arr==null?null:typeof Symbol!=="undefined"&&arr[Symbol.iterator]||arr["@@iterator"];if(_i==null)return;var _arr=[];var _n=true;var _d=false;var _s,_e;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break}}catch(err){_d=true;_e=err}finally{try{if(!_n&&_i["return"]!=null)_i["return"]()}finally{if(_d)throw _e}}return _arr}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_unsupportedIterableToArray(arr,i)||_nonIterableRest()}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(n);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}var Snippet=function(param){var _prompt=param.prompt,prompt=_prompt===void 0?true:_prompt,width=param.width,text=param.text,type=param.type,fill=param.fill;var toasts=useToasts();var ref1=_slicedToArray(useState(false),2),focused=ref1[0],setFocused=ref1[1];var focusProps=useFocus({onFocusChange:setFocused}).focusProps;var _obj;return React.createElement("div",{className:clsx(styles.snippet,(_obj={},_defineProperty(_obj,styles.prompt,prompt),_defineProperty(_obj,"geist-themed",!!type),_defineProperty(_obj,"geist-".concat(type),!!type),_defineProperty(_obj,"geist-".concat(type,"-fill"),!!type&&!!fill),_obj)),style:{width:width}},Array.isArray(text)?text.map(function(e,i){var key="".concat(e,"-").concat(i);return React.createElement("pre",{key:key,className:"geist-overflow-scroll-y"},e)}):React.createElement("pre",{className:"geist-overflow-scroll-y"},text),React.createElement("button",_extends({},focusProps,{"aria-label":"Copy text to clipboard",className:clsx("geist-reset",styles.copy,_defineProperty({},"focus-visible",focused)),"data-focus-visible-added":focused?"":undefined,onClick:function(){var ref;navigator.clipboard.writeText(Array.isArray(text)?text.join("\n"):text);(ref=toasts.current)===null||ref===void 0?void 0:ref.message({text:"Copied to clipboard!"})}}),React.createElement(CopyIcon,{size:22})))};export default Snippet