"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var Popover=_interopRequireWildcard(require("@radix-ui/react-popover"));var _clsx=_interopRequireDefault(require("clsx"));var _react=_interopRequireWildcard(require("react"));var _reactAria=require("react-aria");var _hooks=require("../../hooks/index");var _icons=require("../../icons/index");var _resetModuleCss=_interopRequireDefault(require("../../styles/reset/reset.module.css"));var _spinner=require("../Spinner/index");var _text=require("../Text/index");var _comboboxModuleCss=_interopRequireDefault(require("./combobox.module.css"));var _dialog=require("./dialog");var _iconButtonModuleCss=_interopRequireDefault(require("./icon-button.module.css"));function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})}else{obj[key]=value}return obj}function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key]}}}return target};return _extends.apply(this,arguments)}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):{};if(desc.get||desc.set){Object.defineProperty(newObj,key,desc)}else{newObj[key]=obj[key]}}}}newObj.default=obj;return newObj}}function _iterableToArray(iter){if(typeof Symbol!=="undefined"&&iter[Symbol.iterator]!=null||iter["@@iterator"]!=null)return Array.from(iter)}function _iterableToArrayLimit(arr,i){var _i=arr==null?null:typeof Symbol!=="undefined"&&arr[Symbol.iterator]||arr["@@iterator"];if(_i==null)return;var _arr=[];var _n=true;var _d=false;var _s,_e;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break}}catch(err){_d=true;_e=err}finally{try{if(!_n&&_i["return"]!=null)_i["return"]()}finally{if(_d)throw _e}}return _arr}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};var ownKeys=Object.keys(source);if(typeof Object.getOwnPropertySymbols==="function"){ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))}ownKeys.forEach(function(key){_defineProperty(target,key,source[key])})}return target}function _objectWithoutProperties(source,excluded){if(source==null)return{};var target=_objectWithoutPropertiesLoose(source,excluded);var key,i;if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++){key=sourceSymbolKeys[i];if(excluded.indexOf(key)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(source,key))continue;target[key]=source[key]}}return target}function _objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key]}return target}function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_unsupportedIterableToArray(arr,i)||_nonIterableRest()}function _throw(e){throw e}function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_unsupportedIterableToArray(arr)||_nonIterableSpread()}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(n);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}var useLayoutEffect=typeof window==="undefined"?_react.default.useEffect:_react.default.useLayoutEffect;var useListItems=function(){var listRef=(0,_react).useRef([]);var mapRef=(0,_react).useRef({});var ref=_slicedToArray((0,_react).useState(),2),force=ref[1];var ref1=(0,_react).useRef(null);useLayoutEffect(function(){if(!ref1.current)return;var items=Array.from(ref1.current.querySelectorAll("[data-descendant]"));var isOutOfSync=items.length!==listRef.current.length||!items.every(function(t,n){return listRef.current[n].element===t});if(isOutOfSync){listRef.current=items.map(function(el){var n=el.getAttribute("data-descendant");if(!n)throw Error("Descendant element must have a data-descendant key");var r=mapRef.current[n];return _objectSpread({element:el},r)});force({})}});return{ref:ref1,list:listRef,map:mapRef,force:force}};var ListContext=(0,_react).createContext({list:{current:[]},map:{current:{}},force:function(param){var param=param!==null?param:_throw(new TypeError("Cannot destructure undefined"))}});var useValue=function(context,t){var ref=_slicedToArray((0,_react).useState(-1),2),index=ref[0],setIndex=ref[1];var ref2=(0,_react).useRef(null);var ref3=(0,_react).useContext(context),list=ref3.list,map=ref3.map,force=ref3.force;var id=(0,_react).useId();map.current["asd"];useLayoutEffect(function(){if(map){map.current[id]=_objectSpread({},t,{_internalId:id})}force===null||force===void 0?void 0:force({});return function(){map===null||map===void 0?void 0:delete map.current[id];list&&(list.current=list.current.filter(function(e){return e._internalId!==id}));setIndex(-1);force===null||force===void 0?void 0:force({})}},[]);useLayoutEffect(function(){if(ref2.current){ref2.current.setAttribute("data-descendant",id);if(map===null||map===void 0?void 0:map.current[id]){map.current[id]=_objectSpread({},t,{_internalId:id})}var nextId=list?list.current.findIndex(function(e){return e._internalId===id}):-1;setIndex(nextId)}});return{index:index,ref:ref2,id:id}};var reducer=function(state,action){switch(action.type){case"OPEN":return _objectSpread({},state,{open:true,showAllResults:true,selectedIndex:0});case"CLOSE":return _objectSpread({},state,{open:false});case"CHANGE":return _objectSpread({},state,{selectedIndex:0,inputValue:action.inputValue,showAllResults:false,open:true});case"SELECT":return _objectSpread({},state,{selectedValue:action.selectedValue,inputValue:null,open:false});case"CONTINUE":return _objectSpread({},state,{selectedValue:action.selectedValue,open:true});case"NAVIGATE":return _objectSpread({},state,{selectedIndex:action.selectedIndex});case"RESET":return _objectSpread({},state,{inputValue:action.inputValue});case"CLEAR":return _objectSpread({},state,{inputValue:"",selectedValue:null});default:return state}};var ComboboxContext=(0,_react).createContext({allowTab:undefined,ariaLabel:undefined,clearSelectedValue:function clearSelectedValue(e){},clearable:true,disabled:undefined,dispatch:function(){},errored:undefined,filterList:[],footerRef:{current:null},force:function(){},inputId:"combobox-input-:R6ol8mH1:",inputRef:{current:null},inputValue:"",isMobile:false,list:{current:Array(0)},listId:"combobox-list-:R6ol8m:",listRef:{current:null},map:{current:{}},noInputPrefix:undefined,noNegativeIndex:undefined,noTextSelection:undefined,onSelect:function onSelect(e){},open:false,openWithSelection:function openWithSelection(){},placeholder:"",prefixIcon:undefined,selectedIndex:0,selectedValue:null,showMenuButton:true,showAllResults:true,size:undefined});var useComboboxContext=function(){return(0,_react).useContext(ComboboxContext)};var Combobox=(0,_react).forwardRef(function(param,forwardedRef){var children=param.children,placeholder=param.placeholder,value=param.value,onChange=param.onChange,onClear=param.onClear,_shouldContinue=param.shouldContinue,shouldContinue=_shouldContinue===void 0?false:_shouldContinue,onChangeOpen=param.onChangeOpen,noNegativeIndex=param.noNegativeIndex,disabled=param.disabled,errored=param.errored,width=param.width,size=param.size,_filter=param.filter,filter=_filter===void 0?function(items,searchTerm){if(!searchTerm)return items;return items.filter(function(item){var ref;return item.value.toLowerCase().includes(searchTerm.toLowerCase())||((ref=item.label)===null||ref===void 0?void 0:ref.toLowerCase().includes(searchTerm.toLowerCase()))})}:_filter,noTextSelection=param.noTextSelection;var handleOpenWithSelection=function handleOpenWithSelection(){if(!open){setTimeout(function(){var ref,ref6;noTextSelection||((ref=inputRef.current)===null||ref===void 0?void 0:(ref6=ref.select)===null||ref6===void 0?void 0:ref6.call(ref))},10);dispatch({type:"OPEN"})}};var id=(0,_react).useId();var inputId="combobox-input-"+id;var listId="combobox-list-"+id;var inputRef=(0,_react).useRef(null);var footerRef=(0,_react).useRef(null);var _ref=useListItems(),listRef=_ref.ref,Y=_objectWithoutProperties(_ref,["ref"]);var ref5=_slicedToArray((0,_react).useReducer(reducer,{open:false,showAllResults:true,inputValue:"",selectedValue:null,selectedIndex:0}),2),ref4=ref5[0],inputValue=ref4.inputValue,open=ref4.open,selectedIndex=ref4.selectedIndex,selectedValue=ref4.selectedValue,showAllResults=ref4.showAllResults,dispatch=ref5[1];(0,_react).useEffect(function(){onChangeOpen===null||onChangeOpen===void 0?void 0:onChangeOpen(open)},[onChangeOpen,open]);(0,_react).useImperativeHandle(forwardedRef,function(){return{setValue:function setValue(e){dispatch({type:"RESET",inputValue:e})},setSelectedValue:function setSelectedValue(e){dispatch({type:"CONTINUE",selectedValue:e})},setSelectedIndex:function setSelectedIndex(e){dispatch({type:"NAVIGATE",selectedIndex:e})},getSelectedIndex:function(){return _icons.X},clear:function clear(){dispatch({type:"CLEAR"})},close:function close(){dispatch({type:"CLOSE"})}}},[dispatch,selectedIndex]);var actualValue=value?value:selectedValue;var items1=Object.values(Y.map.current);var regularItems=[];var menuItems=[];var _iteratorNormalCompletion=true,_didIteratorError=false,_iteratorError=undefined;try{for(var _iterator=items1[Symbol.iterator](),_step;!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=true){var item1=_step.value;item1.isMenu?menuItems.push(item1):regularItems.push(item1)}}catch(err){_didIteratorError=true;_iteratorError=err}finally{try{if(!_iteratorNormalCompletion&&_iterator.return!=null){_iterator.return()}}finally{if(_didIteratorError){throw _iteratorError}}}var result=showAllResults?regularItems:filter(regularItems,inputValue);var allItems=showAllResults||result.length?_toConsumableArray(result).concat(_toConsumableArray(menuItems)):[];(0,_react).useEffect(function(){var timerId;if(!open){if(actualValue&&(items1===null||items1===void 0?void 0:items1.length)){var match=items1.find(function(e){return e.value===actualValue});if(match){if(match.displayValue){dispatch({type:"RESET",inputValue:actualValue})}else if(inputValue){timerId=K(function(){dispatch({type:"RESET",inputValue:match.label})})}else{dispatch({type:"RESET",inputValue:match.label})}}else{dispatch({type:"RESET",inputValue:actualValue})}}return function(){clearTimeout(timerId)}}},[actualValue,open,items1.length]);(0,_react).useEffect(function(){null===value&&dispatch({type:"RESET",inputValue:""})},[value,dispatch]);var isMobile=(0,_hooks).useMediaQuery("(max-width: 600px)");return _react.default.createElement(ComboboxContext.Provider,{value:{selectedIndex:selectedIndex,selectedValue:selectedValue,inputValue:inputValue,open:open,showAllResults:showAllResults,dispatch:dispatch,disabled:disabled,errored:errored,size:size,inputId:inputId,inputRef:inputRef,listId:listId,listRef:listRef,footerRef:footerRef,placeholder:placeholder,filterList:allItems,isMobile:isMobile,clearSelectedValue:function clearSelectedValue(e){var ref;e.preventDefault();onClear===null||onClear===void 0?void 0:onClear();onChange===null||onChange===void 0?void 0:onChange(null);(ref=inputRef.current)===null||ref===void 0?void 0:ref.focus(),isMobile||dispatch({type:"CLOSE"});open?K(function(){dispatch({type:"CLEAR"})}):dispatch({type:"CLEAR"})},onSelect:function onSelect(e){onChange===null||onChange===void 0?void 0:onChange(e);shouldContinue?dispatch({type:"CONTINUE",selectedValue:e}):dispatch({type:"SELECT",selectedValue:e})},noNegativeIndex:noNegativeIndex,openWithSelection:handleOpenWithSelection,list:Y.list,map:Y.map,force:Y.force}},_react.default.createElement("div",{className:_comboboxModuleCss.default.screenReaderSelect,tabIndex:0,"aria-expanded":"false","aria-haspopup":"listbox","aria-owns":listId,role:"combobox",style:{width:width}},children))});Combobox.displayName="Combobox";var Input=function(props){var ref13;var className=props.className,onChange=props.onChange,loading=props.loading,onKeyDown1=props.onKeyDown,onBlur=props.onBlur,onFocus=props.onFocus,rest=_objectWithoutProperties(props,["className","onChange","loading","onKeyDown","onBlur","onFocus"]);var ref7=useComboboxContext(),open1=ref7.open,inputValue=ref7.inputValue,dispatch1=ref7.dispatch,inputRef1=ref7.inputRef,inputId=ref7.inputId,ariaLabel=ref7.ariaLabel,placeholder=ref7.placeholder,listId=ref7.listId,list1=ref7.list,selectedIndex1=ref7.selectedIndex,size=ref7.size,errored=ref7.errored,noInputPrefix=ref7.noInputPrefix,disabled=ref7.disabled,noTextSelection1=ref7.noTextSelection,footerRef1=ref7.footerRef,allowTab1=ref7.allowTab,isMobile=ref7.isMobile,openWithSelection=ref7.openWithSelection,clearSelectedValue=ref7.clearSelectedValue;var selectedId=(ref13=list1.current[selectedIndex1])===null||ref13===void 0?void 0:ref13._internalId;var handleKeyDown=function(param){var dispatch=param.dispatch,open=param.open,selectedIndex=param.selectedIndex,inputRef=param.inputRef,footerRef=param.footerRef,list=param.list,noTextSelection=param.noTextSelection,allowTab=param.allowTab,onKeyDown=param.onKeyDown;return function(e){switch(e.key){case"Escape":e.preventDefault();if(open){dispatch({type:"CLOSE"})}break;case"Home":e.preventDefault();dispatch({type:"NAVIGATE",selectedIndex:0});break;case"End":e.preventDefault();dispatch({type:"NAVIGATE",selectedIndex:list.current.length-1});break;case"ArrowDown":{var ref;e.preventDefault();if(!open){var ref8,ref9;dispatch({type:"OPEN"});noTextSelection||((ref8=inputRef.current)===null||ref8===void 0?void 0:(ref9=ref8.select)===null||ref9===void 0?void 0:ref9.call(ref8));break}var l=(ref=footerRef.current)===null||ref===void 0?void 0:ref.querySelector("input:not([type=hidden]), select, button, textarea, a");if(selectedIndex===list.current.length-1&&l){l.focus();dispatch({type:"NAVIGATE",selectedIndex:-1});break}if(list.current.length>0){var e1=P(selectedIndex,list.current);for(;e1!==selectedIndex&&list.current[e1].disabled;)e1=P(e1,list.current);dispatch({type:"NAVIGATE",selectedIndex:e1})}break}case"ArrowUp":{var ref10;e.preventDefault();if(!open){var ref11;dispatch({type:"OPEN",selectedIndex:list.current.length-1});(ref11=inputRef.current)===null||ref11===void 0?void 0:ref11.select();break}var a=(ref10=footerRef.current)===null||ref10===void 0?void 0:ref10.querySelector("input:not([type=hidden]), select, button, textarea, a");if(0===selectedIndex&&a){a.focus();dispatch({type:"NAVIGATE",selectedIndex:-1});break}if(list.current.length>0){var e2=L(selectedIndex,list.current);for(;e2!==selectedIndex&&list.current[e2].disabled;)e2=L(e2,list.current);dispatch({type:"NAVIGATE",selectedIndex:e2})}break}case"Tab":case"Enter":{var ref12;if("Tab"===e.key&&!allowTab)break;e.preventDefault();var n=(ref12=list.current[selectedIndex])===null||ref12===void 0?void 0:ref12.callback;if(!n){dispatch({type:"CLOSE"});break}n()}}onKeyDown&&onKeyDown(e)}}({open:open1,noTextSelection:noTextSelection1,list:list1,selectedIndex:selectedIndex1,dispatch:dispatch1,inputRef:inputRef1,footerRef:footerRef1,allowTab:allowTab1,onKeyDown:onKeyDown1});var _obj,_obj1;return _react.default.createElement("div",{className:(0,_clsx).default(_comboboxModuleCss.default.container,(_obj={},_defineProperty(_obj,_comboboxModuleCss.default.small,size==="small"),_defineProperty(_obj,_comboboxModuleCss.default.large,size==="large"),_obj))},_react.default.createElement("div",{"aria-hidden":"true",className:_comboboxModuleCss.default.prefix},loading?_react.default.createElement(_spinner.Spinner,{size:18}):_react.default.createElement(_icons.Search,{size:18})),_react.default.createElement("input",_extends({},rest,{id:inputId,ref:inputRef1,"aria-activedescendant":open1?selectedId:undefined,"aria-autocomplete":"list","aria-controls":listId,"aria-label":ariaLabel||placeholder,autoComplete:"off",className:(0,_clsx).default(className,_comboboxModuleCss.default.input,_comboboxModuleCss.default.truncate,(_obj1={},_defineProperty(_obj1,_comboboxModuleCss.default.errored,errored),_defineProperty(_obj1,_comboboxModuleCss.default.noPrefix,noInputPrefix),_obj1)),disabled:disabled,placeholder:placeholder,role:"searchbox",spellCheck:"false",type:"text",value:inputValue,onBlur:function(e){var t=e.relatedTarget;for(;null!==t&&("FOOTER"!==t.tagName||!t.dataset.listFooter);){t=t.parentElement}onBlur===null||onBlur===void 0?void 0:onBlur(e);isMobile||t||dispatch1({type:"CLOSE"})},onChange:function(e){dispatch1({type:"CHANGE",inputValue:e.target.value});onChange===null||onChange===void 0?void 0:onChange(e)},onFocus:function(e){var ref;onFocus===null||onFocus===void 0?void 0:onFocus(e);isMobile?(ref=inputRef1.current)===null||ref===void 0?void 0:ref.select():openWithSelection()},onKeyDown:handleKeyDown,onMouseDown:openWithSelection,onTouchEnd:function(e){inputRef1.current&&e.preventDefault();inputRef1.current.style.transform="translateY(-10000px)";inputRef1.current.focus();setTimeout(function(){inputRef1.current.style.transform=""},50)}})),_react.default.createElement(ClearButton,{open:open1,onClick:function(e){return clearSelectedValue(e)},style:inputValue?undefined:{display:"none"}}),!inputValue?_react.default.createElement("button",{"aria-label":open1?"Close menu":"Open menu",className:(0,_clsx).default(_iconButtonModuleCss.default.iconButton,_comboboxModuleCss.default.iconButton,_resetModuleCss.default.reset),"data-open":open1,tabIndex:-1,type:"button",onPointerDown:function(){open1?dispatch1({type:"CLOSE"}):dispatch1({type:"OPEN"})}},_react.default.createElement(_icons.ChevronDown,{size:18,className:_iconButtonModuleCss.default.chevron})):null)};Input.displayName="Combobox.Input";var List=function(props){var ref16;var children=props.children,className=props.className,_emptyMessage=props.emptyMessage,emptyMessage=_emptyMessage===void 0?"No results":_emptyMessage,ListFooterComponent=props.ListFooterComponent,_align=props.align,align=_align===void 0?"center":_align,_side=props.side,side=_side===void 0?"bottom":_side,alignOffset=props.alignOffset,width=props.width,_avoidCollisions=props.avoidCollisions,avoidCollisions=_avoidCollisions===void 0?true:_avoidCollisions,rest=_objectWithoutProperties(props,["children","className","emptyMessage","ListFooterComponent","align","side","alignOffset","width","avoidCollisions"]);var ref14=useComboboxContext(),listId=ref14.listId,listRef=ref14.listRef,footerRef=ref14.footerRef,map=ref14.map,list=ref14.list,force=ref14.force,inputRef=ref14.inputRef,open=ref14.open,isMobile=ref14.isMobile,selectedIndex=ref14.selectedIndex,dispatch=ref14.dispatch;var ref15=_slicedToArray((0,_react).useState(0),2),_width=ref15[0],setWidth=ref15[1];(0,_react).useEffect(function(){width&&setWidth(width)},[width]);(0,_react).useEffect(function(){var e=inputRef.current;if(!e)return;var t1=new window.ResizeObserver(function(){if(!width){var ref=e.getBoundingClientRect(),t=ref.width;setWidth(t)}});return t1.observe(e),function(){t1.disconnect()}},[]);(0,_react).useEffect(function(){if(!listRef.current)return;var e3=new Map();var items=Array.from(listRef.current.querySelectorAll("[data-descendant]"));items.sort(function(e,t){return Number(e.getAttribute("data-order"))-Number(t.getAttribute("data-order"))}).forEach(function(t){if(t.parentElement){var ref;t.parentElement.appendChild(t);var n=t.closest("[data-geist-combobox-list] > *");!n||n===t||n===listRef.current||e3.has(n)||((ref=listRef.current)===null||ref===void 0?void 0:ref.appendChild(n),e3.set(n,!0))}})});var P1=(0,_react).useMemo(function(){return{list:list,map:map,force:force}},[list,map,force]);var message=!((ref16=list.current)===null||ref16===void 0?void 0:ref16.length)?_react.default.createElement(_text.Text,{color:"geist-secondary",className:_comboboxModuleCss.default.empty,align:"center",style:{lineHeight:"initial"}},emptyMessage):null;var M=null;if(ListFooterComponent){M=_react.default.isValidElement(ListFooterComponent)?ListFooterComponent:_react.default.createElement(ListFooterComponent,null)}var listChildren=_react.default.createElement(ListContext.Provider,{value:P1},children);var footer=M?_react.default.createElement("footer",{"data-list-footer":true,ref:footerRef},M):null;if(isMobile){return _react.default.createElement(_dialog.Dialog,{active:open,className:_comboboxModuleCss.default.drawer,onClickOutside:function(){dispatch({type:"CLOSE"})}},_react.default.createElement(Input,null),_react.default.createElement("ul",_extends({className:(0,_clsx).default(_comboboxModuleCss.default.list,_comboboxModuleCss.default.mobileList),"data-geist-combobox-list":"",id:listId,ref:listRef,role:"listbox"},rest),listChildren,message),footer)}var itemHeight=function(e){var ref;var t=(ref=e.current)===null||ref===void 0?void 0:ref.querySelector("[data-descendant]");if(t)return t.offsetHeight}(listRef)||36;var maxHeight=5*itemHeight+16+2+itemHeight/2;var height=0===list.current.length?itemHeight+16+2:list.current.length*itemHeight+16+2;var _obj;return _react.default.createElement(Popover.Root,{open:open},_react.default.createElement(Popover.Anchor,null),_react.default.createElement(Popover.Portal,null,_react.default.createElement(Popover.Content,{align:align,alignOffset:8,avoidCollisions:true,className:(0,_clsx).default(_comboboxModuleCss.default.list,(_obj={},_defineProperty(_obj,_comboboxModuleCss.default.open,open),_defineProperty(_obj,_comboboxModuleCss.default.hidden,!open),_obj)),onCloseAutoFocus:function(e){e.preventDefault()},onMouseDown:function(e){e.preventDefault();e.stopPropagation()},onOpenAutoFocus:function(e){e.preventDefault()},side:side,sideOffset:8,style:{outline:0,overflowY:height>maxHeight?"auto":"hidden",height:height,width:_width,maxHeight:maxHeight},tabIndex:-1},_react.default.createElement("ul",_extends({ref:listRef},rest,{"data-geist-combobox-list":"",id:listId,role:"listbox"}),listChildren,message),footer)),!open?_react.default.createElement("ul",{"aria-hidden":"true",id:listId,style:{display:"none"}},listChildren):_react.default.createElement("div",{"aria-live":"polite",className:"geist-sr-only",role:"status"},list.current.length>0?"".concat(list.current.length," result").concat(list.current.length>1?"s":""," available"):null,0===list.current.length?"string"==typeof emptyMessage?emptyMessage:"No results":null))};List.displayName="Combobox.List";var Option=function(param){var children=param.children,className=param.className,value=param.value,prefix=param.prefix,suffix=param.suffix,truncatePrefix=param.truncatePrefix,truncateSuffix=param.truncateSuffix,displayValue=param.displayValue,isMenu=param.isMenu,disabled=param.disabled,ignoreDefaultHeight=param.ignoreDefaultHeight;var S=function S(){onSelect(value)};var ref19=useComboboxContext(),selectedIndex=ref19.selectedIndex,selectedValue=ref19.selectedValue,filterList=ref19.filterList,map=ref19.map,onSelect=ref19.onSelect,size=ref19.size,listRef=ref19.listRef,open=ref19.open,dispatch=ref19.dispatch,inputRef=ref19.inputRef,isMobile=ref19.isMobile,noNegativeIndex=ref19.noNegativeIndex;var ref17=useValue(ListContext,{callback:S,label:"string"==typeof children?children:value,value:value,prefix:prefix,displayValue:displayValue,isMenu:isMenu,disabled:disabled}),index=ref17.index,ref18=ref17.ref,id=ref17.id;var isInMap=Boolean(map.current[id]);var shouldHighlight=-1!==index&&selectedIndex===index&&open||0===index&&selectedIndex===(noNegativeIndex?index:-1)&&open;var shouldBold=selectedValue===value&&open;var handleMouseMove=(0,_react).useCallback(function(){dispatch({type:"NAVIGATE",selectedIndex:index})},[index]);(0,_react).useEffect(function(){shouldHighlight&&ref18.current&&!isMobile&&ref18.current.scrollIntoView({block:"nearest"})},[shouldHighlight,isMobile]);var order=filterList&&isInMap?filterList.findIndex(function(e){var t=e._internalId;return t===id}):undefined;var _obj;return-1===order?null:_react.default.createElement("li",{ref:ref18,className:(0,_clsx).default(_comboboxModuleCss.default.option,(_obj={},_defineProperty(_obj,_comboboxModuleCss.default.small,size==="small"),_defineProperty(_obj,_comboboxModuleCss.default.large,size==="large"),_defineProperty(_obj,_comboboxModuleCss.default.optionDisabled,disabled),_obj)),id:id,"aria-selected":shouldHighlight,"data-highlighted":shouldBold,"data-descendant":id,"data-order":order,role:"option",style:{height:ignoreDefaultHeight?undefined:36},onMouseMove:handleMouseMove,onMouseUp:function(e){e.preventDefault();S()},onPointerOver:function(){var ref;isMobile&&((ref=inputRef.current)===null||ref===void 0?void 0:ref.blur())}},prefix?_react.default.createElement("span",{"data-geist-combobox-option-prefix":"true"},prefix):null,_react.default.createElement("span",{className:_comboboxModuleCss.default.truncate},children),suffix?_react.default.createElement("span",{"data-geist-combobox-option-suffix":"true"},suffix):null)};Option.displayName="Combobox.Option";var _default=Object.assign(Combobox,{Input:Input,List:List,Option:Option});exports.default=_default;var ClearButton=function(param){var style=param.style,onClick=param.onClick,open=param.open;var ref=(0,_reactAria).useFocusRing(),focusProps=ref.focusProps,isFocusVisible=ref.isFocusVisible;return _react.default.createElement("button",_extends({},focusProps,{"aria-label":"Clear selected value",className:(0,_clsx).default(_iconButtonModuleCss.default.iconButton,_comboboxModuleCss.default.iconButton,_comboboxModuleCss.default.clearButton,_resetModuleCss.default.reset,_defineProperty({},"focus-visible",isFocusVisible)),onClick:onClick,"data-open":open,tabIndex:0,type:"button",style:style}),_react.default.createElement(_icons.X,{size:18,className:_iconButtonModuleCss.default.cross}))};function P(e,t){return 0===t.length?e:(e+1)%t.length}function L(e,t){return 0===t.length?e:(e-1+t.length)%t.length}function K(e){return window.setTimeout(e,150)}