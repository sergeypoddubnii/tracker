(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(e,t,n){e.exports={taskContainer:"App_taskContainer__10QzB",taskContainer__title:"App_taskContainer__title__3fBmG"}},2:function(e,t,n){e.exports={listItem:"ListItem_listItem__1Sbqd",listItem__text:"ListItem_listItem__text__oJrNm",listItem__timer:"ListItem_listItem__timer__2Ojm1",listItem__btn:"ListItem_listItem__btn__2wyjw",listItem__btn_start:"ListItem_listItem__btn_start__p2o7o",listItem__btn_pause:"ListItem_listItem__btn_pause__AC9bK",listItem__btn_delete:"ListItem_listItem__btn_delete__cDH8P"}},24:function(e,t,n){e.exports=n(49)},35:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),l=n(7),i=n.n(l),c=n(3),s=n(19),o=(n(35),n(22)),u={ADD_TASK:"ADD_TASK",DELETE_TASK:"DELETE_TASK",START_TRACKER:"START_TRACKER",PAUSE_TRACKER:"PAUSE_TRACKER"},m=n(12),f=n.n(m),_=function(e){var t=new Date,n="".concat(t.getHours(),":").concat(t.getMinutes()," ").concat(t.getFullYear(),".").concat(t.getMonth());return e.trim()?{type:u.ADD_TASK,payload:{task:e,id:f.a.generate(),startTime:Date.now(),currentTime:0,isPaused:!1}}:{type:u.ADD_TASK,payload:{task:n,id:f.a.generate(),startTime:Date.now(),currentTime:0,isPaused:!1}}},p=function(e){return{type:u.DELETE_TASK,payload:{id:e}}},b=function(e){return{type:u.START_TRACKER,payload:{id:e}}},v=function(e,t){return{type:u.PAUSE_TRACKER,payload:{id:e,currentTime:t}}},E=n(5),d=n.n(E);function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function T(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var g=a.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),h=a.a.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"}),O=function(e){var t=e.svgRef,n=e.title,r=T(e,["svgRef","title"]);return a.a.createElement("svg",y({height:24,viewBox:"0 0 24 24",width:24,ref:t},r),n?a.a.createElement("title",null,n):null,g,h)},k=a.a.forwardRef((function(e,t){return a.a.createElement(O,y({svgRef:t},e))})),j=(n.p,Object(c.b)(null,(function(e){return{addTask:function(t){return e(_(t))}}}))((function(e){var t=e.addTask,n=Object(r.useState)(""),l=Object(o.a)(n,2),i=l[0],c=l[1];return a.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(i),c("")},className:d.a.form},a.a.createElement("input",{type:"text",placeholder:"tracker name",onChange:function(e){c(e.target.value)},value:i,className:d.a.form__input}),a.a.createElement("button",{type:"submit",className:d.a.form__btn},a.a.createElement(k,{className:d.a.form__icon})))}))),R=n(4),I=n.n(R);function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function S(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var A=a.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),D=a.a.createElement("path",{d:"M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),P=function(e){var t=e.svgRef,n=e.title,r=S(e,["svgRef","title"]);return a.a.createElement("svg",w({height:24,viewBox:"0 0 24 24",width:24,ref:t},r),n?a.a.createElement("title",null,n):null,A,D)},C=a.a.forwardRef((function(e,t){return a.a.createElement(P,w({svgRef:t},e))}));n.p;function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function K(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var z=a.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),N=a.a.createElement("path",{d:"M9 16h2V8H9v8zm3-14C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-4h2V8h-2v8z"}),M=function(e){var t=e.svgRef,n=e.title,r=K(e,["svgRef","title"]);return a.a.createElement("svg",x({height:24,viewBox:"0 0 24 24",width:24,ref:t},r),n?a.a.createElement("title",null,n):null,z,N)},L=a.a.forwardRef((function(e,t){return a.a.createElement(M,x({svgRef:t},e))}));n.p;function H(){return(H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function B(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var F=a.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),J=a.a.createElement("path",{d:"M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),U=function(e){var t=e.svgRef,n=e.title,r=B(e,["svgRef","title"]);return a.a.createElement("svg",H({height:24,viewBox:"0 0 24 24",width:24,ref:t},r),n?a.a.createElement("title",null,n):null,F,J)},q=a.a.forwardRef((function(e,t){return a.a.createElement(U,H({svgRef:t},e))})),Q=(n.p,n(2)),V=n.n(Q),G=function(e){var t=e.task,n=e.id,r=e.startTime,l=e.currentTime,i=e.isPaused,c=e.startTracker,s=e.pauseTracker,o=e.deleteTask,u=0;return i&&l?u=l:l?u=Date.now()-r+l:i||l||(u=Date.now()-r),a.a.createElement("li",{className:V.a.listItem},a.a.createElement("p",{className:V.a.listItem__text},t),a.a.createElement(I.a,{initialTime:u,startImmediately:!i},(function(e){var t=e.start,r=e.pause,l=e.getTime;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:V.a.listItem__timer},a.a.createElement(I.a.Days,null)," :",a.a.createElement(I.a.Hours,null)," :",a.a.createElement(I.a.Minutes,null)," :",a.a.createElement(I.a.Seconds,null)),a.a.createElement("div",null,i&&a.a.createElement("button",{onClick:function(){t(),c(n)},className:V.a.listItem__btn},a.a.createElement(C,{className:V.a.listItem__btn_start})),!i&&a.a.createElement("button",{onClick:function(){r(),s(n,l())},className:V.a.listItem__btn},a.a.createElement(L,{className:V.a.listItem__btn_pause})),a.a.createElement("button",{type:"button",onClick:function(){return o(n)},className:V.a.listItem__btn},a.a.createElement(q,{className:V.a.listItem__btn_delete}))))})))},W=function(e){return e.tasks},X=Object(c.b)((function(e){return{tasks:W(e)}}),(function(e){return{deleteTask:function(t){return e(p(t))},startTracker:function(t){return e(b(t))},pauseTracker:function(t,n){return e(v(t,n))}}}))((function(e){var t=e.tasks,n=e.deleteTask,r=e.startTracker,l=e.pauseTracker;console.log(t);var i=t.map((function(e){return a.a.createElement(G,{key:e.id,id:e.id,task:e.task,startTime:e.startTime,currentTime:e.currentTime,isPaused:e.isPaused,deleteTask:n,startTracker:r,pauseTracker:l})}));return a.a.createElement("ul",null,i)})),Y=n(13),Z=n.n(Y),$=function(){return a.a.createElement("div",{className:Z.a.taskContainer},a.a.createElement("h1",{className:Z.a.taskContainer__title},"tracker"),a.a.createElement(j,null),a.a.createElement(X,null))},ee=n(1),te=n(20),ne=n(14),re=n(21),ae=n.n(re),le=n(15),ie=n(23),ce=Object(ee.combineReducers)({tasks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case u.ADD_TASK:return[].concat(Object(ie.a)(e),[r]);case u.DELETE_TASK:return e.filter((function(e){return e.id!==r.id}));case u.START_TRACKER:return e.map((function(e){return e.id===r.id?Object(le.a)({},e,{startTime:Date.now(),isPaused:!1}):e}));case u.PAUSE_TRACKER:return e.map((function(e){return e.id===r.id?Object(le.a)({},e,{currentTime:r.currentTime,isPaused:!0}):e}));default:return e}}}),se=Object(te.composeWithDevTools)(),oe={key:"tasks",storage:ae.a},ue=Object(ne.a)(oe,ce),me=Object(ee.createStore)(ue,se),fe=Object(ne.b)(me);i.a.render(a.a.createElement(c.a,{store:me},a.a.createElement(s.a,{persistor:fe},a.a.createElement($,null))),document.getElementById("root"))},5:function(e,t,n){e.exports={form:"Form_form__3xJjx",form__input:"Form_form__input__7s-qO",form__btn:"Form_form__btn__29FNi",form__icon:"Form_form__icon__pRXKQ"}}},[[24,1,2]]]);
//# sourceMappingURL=main.57c51635.chunk.js.map