(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{12:function(e,t,n){e.exports={taskContainer:"App_taskContainer__1PP0D",taskContainer__title:"App_taskContainer__title__3wr7g"}},2:function(e,t,n){e.exports={listItem:"ListItem_listItem__3ekZK",listItem__text:"ListItem_listItem__text__1td51",listItem__timer:"ListItem_listItem__timer__2jcki",listItem__btn:"ListItem_listItem__btn__1o-9e",listItem__btn_start:"ListItem_listItem__btn_start__z0lrI",listItem__btn_pause:"ListItem_listItem__btn_pause__1qKvu",listItem__btn_delete:"ListItem_listItem__btn_delete__2Y7hZ"}},24:function(e,t,n){e.exports=n(49)},35:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),l=n(7),i=n.n(l),c=n(3),o=n(18),s=(n(35),n(22)),u={ADD_TASK:"ADD_TASK",DELETE_TASK:"DELETE_TASK",START_TRACKER:"START_TRACKER",PAUSE_TRACKER:"PAUSE_TRACKER"},m=n(19),f=n.n(m),_=function(e){return{type:u.ADD_TASK,payload:{task:e,id:f.a.generate(),startTime:Date.now(),currentTime:0,isPaused:!1}}},p=function(e){return{type:u.DELETE_TASK,payload:{id:e}}},b=function(e){return{type:u.START_TRACKER,payload:{id:e}}},v=function(e,t){return{type:u.PAUSE_TRACKER,payload:{id:e,currentTime:t}}},E=n(5),d=n.n(E);function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function h(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var O=a.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),g=a.a.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"}),T=function(e){var t=e.svgRef,n=e.title,r=h(e,["svgRef","title"]);return a.a.createElement("svg",y({height:24,viewBox:"0 0 24 24",width:24,ref:t},r),n?a.a.createElement("title",null,n):null,O,g)},j=a.a.forwardRef((function(e,t){return a.a.createElement(T,y({svgRef:t},e))})),R=(n.p,function(){var e=Object(c.b)(),t=Object(r.useState)(""),n=Object(s.a)(t,2),l=n[0],i=n[1];return a.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e(_(l)),i("")},className:d.a.form},a.a.createElement("input",{type:"text",placeholder:"tracker name",onChange:function(e){i(e.target.value)},value:l,className:d.a.form__input}),a.a.createElement("button",{type:"submit",className:d.a.form__btn},a.a.createElement(j,{className:d.a.form__icon})))}),I=n(4),w=n.n(I);function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function A(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var k=a.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),P=a.a.createElement("path",{d:"M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),C=function(e){var t=e.svgRef,n=e.title,r=A(e,["svgRef","title"]);return a.a.createElement("svg",S({height:24,viewBox:"0 0 24 24",width:24,ref:t},r),n?a.a.createElement("title",null,n):null,k,P)},x=a.a.forwardRef((function(e,t){return a.a.createElement(C,S({svgRef:t},e))}));n.p;function D(){return(D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function K(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var z=a.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),N=a.a.createElement("path",{d:"M9 16h2V8H9v8zm3-14C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-4h2V8h-2v8z"}),L=function(e){var t=e.svgRef,n=e.title,r=K(e,["svgRef","title"]);return a.a.createElement("svg",D({height:24,viewBox:"0 0 24 24",width:24,ref:t},r),n?a.a.createElement("title",null,n):null,z,N)},M=a.a.forwardRef((function(e,t){return a.a.createElement(L,D({svgRef:t},e))}));n.p;function H(){return(H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function B(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var F=a.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),U=a.a.createElement("path",{d:"M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),J=function(e){var t=e.svgRef,n=e.title,r=B(e,["svgRef","title"]);return a.a.createElement("svg",H({height:24,viewBox:"0 0 24 24",width:24,ref:t},r),n?a.a.createElement("title",null,n):null,F,U)},V=a.a.forwardRef((function(e,t){return a.a.createElement(J,H({svgRef:t},e))})),Z=(n.p,n(2)),q=n.n(Z),G=function(e){var t=e.task,n=e.id,r=e.startTime,l=e.currentTime,i=e.isPaused,o=(e.deleteTask,0),s=Object(c.b)(),u=function(){s(p(n))};return i&&l?o=l:l?o=Date.now()-r+l:i||l||(o=Date.now()-r),a.a.createElement("li",{className:q.a.listItem},a.a.createElement("p",{className:q.a.listItem__text},t),a.a.createElement(w.a,{initialTime:o,startImmediately:!i},(function(e){var t=e.start,r=e.pause,l=e.getTime;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:q.a.listItem__timer},a.a.createElement(w.a.Days,null)," :",a.a.createElement(w.a.Hours,null)," :",a.a.createElement(w.a.Minutes,null)," :",a.a.createElement(w.a.Seconds,null)),a.a.createElement("div",null,i&&a.a.createElement("button",{onClick:function(){t(),s(b(n))},className:q.a.listItem__btn},a.a.createElement(x,{className:q.a.listItem__btn_start})),!i&&a.a.createElement("button",{onClick:function(){r(),s(v(n,l()))},className:q.a.listItem__btn},a.a.createElement(M,{className:q.a.listItem__btn_pause})),a.a.createElement("button",{type:"button",onClick:u,className:q.a.listItem__btn},a.a.createElement(V,{className:q.a.listItem__btn_delete}))))})))},W=function(e){return e.tasks},Y=function(){var e=Object(c.c)(W),t=Object(r.useMemo)((function(){return e.map((function(e){return a.a.createElement(G,{key:e.id,id:e.id,task:e.task,startTime:e.startTime,currentTime:e.currentTime,isPaused:e.isPaused})}))}),[e]);return a.a.createElement("ul",null,t)},Q=n(12),X=n.n(Q),$=function(){return a.a.createElement("div",{className:X.a.taskContainer},a.a.createElement("h1",{className:X.a.taskContainer__title},"tracker"),a.a.createElement(R,null),a.a.createElement(Y,null))},ee=n(1),te=n(20),ne=n(13),re=n(21),ae=n.n(re),le=n(14),ie=n(23),ce=Object(ee.combineReducers)({tasks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case u.ADD_TASK:return[].concat(Object(ie.a)(e),[r]);case u.DELETE_TASK:return e.filter((function(e){return e.id!==r.id}));case u.START_TRACKER:return e.map((function(e){return e.id===r.id?Object(le.a)({},e,{startTime:Date.now(),isPaused:!1}):e}));case u.PAUSE_TRACKER:return e.map((function(e){return e.id===r.id?Object(le.a)({},e,{currentTime:r.currentTime,isPaused:!0}):e}));default:return e}}}),oe=Object(te.composeWithDevTools)(),se={key:"tasks",storage:ae.a},ue=Object(ne.a)(se,ce),me=Object(ee.createStore)(ue,oe),fe=Object(ne.b)(me);i.a.render(a.a.createElement(c.a,{store:me},a.a.createElement(o.a,{persistor:fe},a.a.createElement($,null))),document.getElementById("root"))},5:function(e,t,n){e.exports={form:"Form_form__2nnPT",form__input:"Form_form__input__DGR09",form__btn:"Form_form__btn__1wUb9",form__icon:"Form_form__icon__1xjiB"}}},[[24,1,2]]]);
//# sourceMappingURL=main.53d7dd33.chunk.js.map