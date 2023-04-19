import React from"react";import styles from"./capacity.module.css";var CYAN="var(--geist-cyan-light)";var WARNING="var(--geist-warning)";var RED="var(--geist-error-dark)";function clamp(val,min,max){return Math.min(Math.max(val,min),max)}var Capacity=function(param){var value=param.value,limit=param.limit,color=param.color;var percentage=value/limit;var width=clamp(percentage*50,8,50);if(!color){color=percentage>=0.66?RED:percentage>=0.33?WARNING:CYAN}return React.createElement("div",{className:styles.background,"data-geist-capacity-background":"",style:{"--width":"50px","--height":"10px"}},React.createElement("div",{className:styles.progress,"data-geist-capacity-progress":"",style:{"--progress-color":color,"--progress-width":"".concat(width,"px")}}))};export default Capacity