!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=0)}([function(e,t){(()=>{const e=document.querySelector("body"),t=document.createElement("canvas"),n="AHUK38569903MVCUdfdgdfgsopjerkcvblwepopzcx{}@#%$%^&*(^%$#";e.style.margin="0px",e.style.padding="0px",e.style.overflow="hidden",t.width="3000",t.height="3000",t.style.position="absolute",t.style.display="block",t.style.zIndex=-2,e.appendChild(t);const{width:o,height:r}=getComputedStyle(t),l=t.getContext("2d");l.imageSmoothingEnabled=!1,l.rect(0,0,parseInt(o),parseInt(r)),l.fillStyle="#000",l.fill();const i=parseInt(document.documentElement.clientWidth),u=parseInt(document.documentElement.clientHeight),c=[];for(let e=0;e<Math.floor(i/20);e++)c[e]=1;setInterval((function(){l.fillStyle="rgba(0, 0, 0, 0.04)",l.rect(0,0,i,u),l.fill(),l.fillStyle="#39ff14",l.font="20px",c.forEach((e,t)=>{l.fillText(n[Math.round(Math.random()*(n.length-1))],20*t,20*e),20*e>u&&Math.random()>.9&&(c[t]=0),c[t]++})}),40)})()}]);