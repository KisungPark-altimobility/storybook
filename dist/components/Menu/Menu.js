import{Portal}from"@radix-ui/react-portal";import clsx from"clsx";import React,{useEffect,useId,useRef,useState}from"react";import{FocusScope,usePopover}from"react-aria";import useMediaQuery from"../../hooks/useMediaQuery";import Drawer from"../Drawer/index";import classes from"./Menu.module.css";import MenuContext,{useMenu}from"./menu-context";function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})}else{obj[key]=value}return obj}function _iterableToArrayLimit(arr,i){var _i=arr==null?null:typeof Symbol!=="undefined"&&arr[Symbol.iterator]||arr["@@iterator"];if(_i==null)return;var _arr=[];var _n=true;var _d=false;var _s,_e;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break}}catch(err){_d=true;_e=err}finally{try{if(!_n&&_i["return"]!=null)_i["return"]()}finally{if(_d)throw _e}}return _arr}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_unsupportedIterableToArray(arr,i)||_nonIterableRest()}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(n);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}export var MenuWrapper=function(param){var children=param.children;var ref=_slicedToArray(useState(null),2),listElement=ref[0],setListElement=ref[1];var buttonRef=useRef(null);var popperRef=useRef();var ref1=_slicedToArray(useState(-1),2),selected=ref1[0],setSelected=ref1[1];var ref2=_slicedToArray(useState(false),2),open=ref2[0],setOpen=ref2[1];var menuId="menu-"+useId();var buttonId="menu-button-"+useId();return React.createElement(MenuContext.Provider,{value:{popperRef:popperRef,buttonRef:buttonRef,listElement:listElement,setListElement:setListElement,menuId:menuId,buttonId:buttonId,open:open,setOpen:setOpen,selected:selected,setSelected:setSelected,typeahead:"",afterSelect:function(){},closeAndRestoreFocus:function(){setOpen(false)},handleKey:function(){},selectFirstNonDisabled:function(){}}},children)};var MenuInner=function(param){var divide=param.divide,width=param.width,children=param.children;var ref=useMenu(),menuId=ref.menuId,setListElement=ref.setListElement,buttonId=ref.buttonId;return React.createElement(FocusScope,{contain:true,restoreFocus:true,autoFocus:true},React.createElement("ul",{ref:setListElement,"aria-labelledby":buttonId,id:menuId,"data-geist-menu":"",role:"menu",tabIndex:-1,className:clsx(classes.menu,_defineProperty({},classes.divide,divide)),style:{width:width}},children))};export var Menu=function(param){var children=param.children,_width=param.width,width=_width===void 0?150:_width,divide=param.divide;var ref3=useMenu(),open=ref3.open,listElement=ref3.listElement,setOpen=ref3.setOpen,buttonRef=ref3.buttonRef,selected=ref3.selected,setSelected=ref3.setSelected;var isSmall=useMediaQuery("(max-width:600px)");useEffect(function(){var ref4;if(!buttonRef.current)return;var handleKeyDown=function(e){switch(e.key){case"ArrowUp":case"ArrowDown":e.preventDefault();if(!open)setOpen(true);break}};(ref4=buttonRef.current)===null||ref4===void 0?void 0:ref4.addEventListener("keydown",handleKeyDown);return function(){var ref;(ref=buttonRef.current)===null||ref===void 0?void 0:ref.removeEventListener("keydown",handleKeyDown)}},[open,buttonRef.current]);useEffect(function(){if(!listElement)return;var handleKeyDown=function(e){switch(e.key){case"Enter":case" ":var ref,ref5,ref6;e.preventDefault();(ref=React.Children.toArray(children)[selected])===null||ref===void 0?void 0:(ref5=ref.props)===null||ref5===void 0?void 0:(ref6=ref5.onClick)===null||ref6===void 0?void 0:ref6.call(ref5);setOpen(false);setSelected(0);break;case"ArrowUp":{var ref7,ref8;e.preventDefault();var siblings=React.Children.toArray(children);var step=1;var curr=selected;if(curr<=0)return;while((ref7=siblings[curr-step])===null||ref7===void 0?void 0:(ref8=ref7.props)===null||ref8===void 0?void 0:ref8.disabled){step++}if(curr-step<0)break;setSelected(curr-step);break}case"ArrowDown":{var ref9,ref10;e.preventDefault();var siblings1=React.Children.toArray(children);var step1=1;var curr1=selected;var len=siblings1.length;if(curr1>=len-1)return;while((ref9=siblings1[curr1+step1])===null||ref9===void 0?void 0:(ref10=ref9.props)===null||ref10===void 0?void 0:ref10.disabled){step1++}if(curr1+step1>=len)break;setSelected(curr1+step1);break}}};listElement.addEventListener("keydown",handleKeyDown);return function(){listElement.removeEventListener("keydown",handleKeyDown)}},[open,listElement,selected]);return isSmall?React.createElement(Drawer,{show:open,onDismiss:function(){setOpen(false)}},React.createElement(MenuInner,{width:width,divide:divide},children)):open?React.createElement(Portal,null,React.createElement(Popper,null,React.createElement(MenuInner,{width:width,divide:divide},children))):null};var Popper=function(param){var children=param.children;var ref=useMenu(),popperRef=ref.popperRef,open=ref.open,setOpen=ref.setOpen,buttonRef=ref.buttonRef;var ref11=usePopover({isNonModal:false,popoverRef:popperRef,triggerRef:buttonRef,placement:"bottom start",offset:10},{isOpen:open,setOpen:function(val){setOpen(val)},close:function(){setOpen(false)},open:function(){setOpen(true)},toggle:function(){setOpen(!open)}}),arrowProps=ref11.arrowProps,placement=ref11.placement,popoverProps=ref11.popoverProps;return React.createElement(React.Fragment,null,React.createElement("div",{ref:popperRef,className:classes.wrapper,style:popoverProps.style,onFocus:popoverProps.onFocus,onKeyDown:popoverProps.onKeyDown,"data-popper-reference-hidden":!open,"data-popper-escaped":false,"data-popper-placement":placement},React.createElement("div",{className:classes.arrow,style:arrowProps.style}),children))}