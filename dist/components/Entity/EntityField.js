import clsx from"clsx";import{useContext}from"react";import{Container}from"../Container/index";import Skeleton from"../Skeleton/index";import MoreVertical from"../../icons/more-vertical";import reset from"../../styles/reset/reset.module.css";import button from"../Button/button.module.css";import{Spacer}from"../Spacer/index";import styles from"./Entity.module.css";import dotsMenu from"./dots-menu.module.css";import{PlaceHolderContext}from"./index";function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})}else{obj[key]=value}return obj}function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key]}}}return target};return _extends.apply(this,arguments)}var EntityField=function(param){var thumbnail=param.thumbnail,_thumbnailSize=param.thumbnailSize,thumbnailSize=_thumbnailSize===void 0?36:_thumbnailSize,thumbnailWrapOnMobile=param.thumbnailWrapOnMobile,actions=param.actions,active=param.active,description=param.description,label=param.label,right=param.right,title=param.title,width=param.width,isLastItem=param.isLastItem,isFirstItem=param.isFirstItem,avatar=param.avatar,menuItems=param.menuItems,checkbox=param.checkbox,titleSkeletonWidth=param.titleSkeletonWidth,descriptionSkeletonWidth=param.descriptionSkeletonWidth;var placeholder=useContext(PlaceHolderContext);var _description=React.createElement("p",{className:clsx(styles.description,"geist-text","geist-themed","geist-ellipsis","geist-secondary","geist-text-no-margin","body-2")},description);var _obj,_obj1,_obj2;return React.createElement(Container,{gap:2/3,row:true,vcenter:true,className:clsx(styles.field,(_obj={},_defineProperty(_obj,styles.last,isLastItem),_defineProperty(_obj,styles.first,isFirstItem),_defineProperty(_obj,styles.avatarWrap,thumbnailWrapOnMobile),_obj)),style:width&&{flexShrink:0,flexGrow:0,flexBasis:width}},checkbox&&React.createElement("div",{className:styles.checkbox},placeholder?React.createElement(Skeleton,_extends({},{vcenter:true,height:16,width:16})):checkbox),thumbnail,React.createElement(Container,{className:clsx(styles.content,_defineProperty({},styles.rightAligned,right)),style:undefined,vcenter:true},title&&(placeholder?React.createElement(Skeleton,{vcenter:true,height:16,boxHeight:20,width:titleSkeletonWidth||"40%"}):React.createElement("p",{className:clsx("geist-text","geist-themed",(_obj1={},_defineProperty(_obj1,"geist-default",!label&&active!==false),_defineProperty(_obj1,"geist-secondary",label||active===false),_obj1),"geist-ellipsis","geist-text-no-margin","body-2",label?"label":"w-600",(_obj2={},_defineProperty(_obj2,styles.title,!label),_defineProperty(_obj2,styles.label,label),_obj2))},title)),description&&(placeholder?React.createElement(Skeleton,{vcenter:true,height:16,boxHeight:20,width:descriptionSkeletonWidth||"60%"}):avatar?React.createElement("div",{className:clsx(styles.descriptionWithAvatar)},_description,React.createElement(Spacer,{x:0.5}),avatar):_description)),menuItems&&React.createElement("div",{className:styles.menu},placeholder?React.createElement(Skeleton,{width:20,height:20}):React.createElement("button",{className:clsx([button.base,reset.reset,dotsMenu.button]),onClick:function(){return alert("TODO: implement me")}},React.createElement("span",{className:button.content},React.createElement("span",{className:dotsMenu.container},React.createElement("span",{className:dotsMenu.menu},React.createElement(MoreVertical,{size:18})))))),actions&&React.createElement("div",{className:styles.actions},placeholder?React.createElement(Skeleton,{show:true},actions):actions))};export default EntityField