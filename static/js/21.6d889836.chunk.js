(this.webpackJsonpdispetcher=this.webpackJsonpdispetcher||[]).push([[21],{309:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r,i=n(0),a=["title","titleId"];function o(){return(o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function c(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}function u(t,e){var n=t.title,u=t.titleId,l=c(t,a);return i.createElement("svg",o({width:31,height:24,viewBox:"0 0 31 24",xmlns:"http://www.w3.org/2000/svg",fill:"#7E7070",ref:e,"aria-labelledby":u},l),n?i.createElement("title",{id:u},n):null,r||(r=i.createElement("path",{d:"M10.5254 17.4302L4.4849 11.3897L4.13134 11.0362L3.77779 11.3897L1.64645 13.5211L1.29289 13.8746L1.64645 14.2282L10.1718 22.7536L10.5254 23.1071L10.8789 22.7536L29.1476 4.4849L29.5011 4.13134L29.1476 3.77779L27.0162 1.64645L26.6627 1.29289L26.3091 1.64645L10.5254 17.4302Z",stroke:"#7E7070"})))}var l=i.forwardRef(u);n.p},311:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r,i=n(0),a=["title","titleId"];function o(){return(o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function c(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}function u(t,e){var n=t.title,u=t.titleId,l=c(t,a);return i.createElement("svg",o({width:30,height:20,viewBox:"0 0 30 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":u},l),n?i.createElement("title",{id:u},n):null,r||(r=i.createElement("path",{d:"M30 8.33333H6.38333L12.35 2.35L10 0L0 10L10 20L12.35 17.65L6.38333 11.6667H30V8.33333Z",fill:"#7E7070"})))}var l=i.forwardRef(u);n.p},315:function(t,e,n){"use strict";n.d(e,"i",(function(){return a})),n.d(e,"h",(function(){return o})),n.d(e,"f",(function(){return u})),n.d(e,"j",(function(){return l})),n.d(e,"c",(function(){return p})),n.d(e,"b",(function(){return s})),n.d(e,"e",(function(){return d})),n.d(e,"d",(function(){return f})),n.d(e,"a",(function(){return b})),n.d(e,"g",(function(){return j}));var r=n(12),i=n(94),a=function(t){return t.trips.trips},o=function(t){return t.trips.trip},c=function(t){return t.trips.period},u=function(t){return t.trips.route},l=function(t){return t.trips.typeTrip},p=function(t){return t.trips.loader},s=function(t){return t.trips.error},d=Object(i.a)(c,(function(t){if(t)return t.find((function(t){return t.hasOwnProperty("times")}))})),f=Object(i.a)(c,(function(t){if(t)return t.find((function(t){return t.hasOwnProperty("days")}))})),b=Object(i.a)(u,(function(t){return t.trips.currentStop}),(function(t,e){var n;return e||(null===(n=t[0])||void 0===n?void 0:n.locality.parent.id)})),j=Object(i.a)(u,(function(t){return t.trips.tariff}),(function(t,e){return t.length>0?t.reduce((function(n,i){var a=t.reduce((function(n,r,a){return i.locality.parent.id!==r.locality.parent.id&&(e.some((function(e){return e.fromId===i.locality.parent.id&&e.toId===t[a].locality.parent.id}))||t.findIndex((function(t){return t.locality.parent.id===i.locality.parent.id}))<=a&&n.push({fromId:i.locality.parent.id,toId:t[a].locality.parent.id,value:""})),n}),[]);return n.push.apply(n,Object(r.a)(a)),n}),Object(r.a)(e)):[]}))},319:function(t,e,n){"use strict";var r,i,a=n(5),o=(n(0),n(4)),c=n(31),u=n(91),l=n(311),p=n(1);e.a=function(t){var e=t.onGoBack,n=t.name,r=void 0===n?null:n;return Object(p.jsxs)(s,{children:[Object(p.jsxs)("div",{children:[e&&Object(p.jsx)(l.a,{onClick:e,style:{cursor:"pointer"}}),Object(p.jsxs)(d,{children:["\u0420\u0435\u0439\u0441 ",r]})]}),Object(p.jsx)(c.b,{to:"/trips",children:Object(p.jsx)(u.a,{})})]})};var s=o.b.div(r||(r=Object(a.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: ",";\n  padding: 12.4px 24px;\n  & div {\n    display: flex;\n    align-items: center;\n  }\n"])),(function(t){return t.theme.mainColor})),d=o.b.p(i||(i=Object(a.a)(["\n  font-size: 24px;\n  padding-left: 12px;\n"])))},430:function(t,e,n){"use strict";n.r(e);var r,i,a,o,c,u,l=n(5),p=n(70),s=n.n(p),d=n(96),f=n(89),b=n(27),j=n(0),h=n(21),O=n(13),v=n(4),x=n(88),g=n(309),m=n(319),y=n(93),w=n(315),k=n(379),L=n(1),I={width:"100%",height:"100vh"},M={lat:50.459464553226276,lng:30.508677308652825},S=["places"],C={disableDefaultUI:!0,fullscreenControl:!0},z=function(t){var e=t.markerLocality,n=t.addMarker,r=t.markerStop,i=function(t){n(null)},a=function(t){n({lat:t.latLng.lat(),lng:t.latLng.lng()})},o=Object(k.c)({googleMapsApiKey:"AIzaSyAtgS0WZuGagfU_EcB3040McorR8fOxaMo",libraries:S}),c=o.isLoaded;return o.loadError?Object(L.jsx)("div",{children:"Map cannot be loaded right now, sorry."}):c&&Object(L.jsxs)(k.a,{options:C,mapContainerStyle:I,zoom:10,center:e||M,onClick:a,children:[Object(L.jsx)(k.b,{position:e,icon:{path:"M15 11V5l-3-3-3 3v2H3v14h18V11h-6zm-8 8H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V9h2v2zm6 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm6 12h-2v-2h2v2zm0-4h-2v-2h2v2z",fillColor:"red",scale:1.5,strokeColor:"#910101",strokeWeight:1}}),Object(L.jsx)(k.b,{position:r,draggable:!0,onDragEnd:a,onClick:i})]})},E=n(29),P=n(321),A=n.n(P),H=n(421),B=n(420),R=n(90),V=n(42),T=function(t){var e=t.chooseLocality,n=t.time,r=t.onChangeTime,i=t.onChangeStop,a=t.stop,o=Object(h.d)(V.a),c=Object(j.useState)({text:"",description:""}),u=Object(b.a)(c,2),l=u[0],p=u[1],d=Object(j.useState)([]),O=Object(b.a)(d,2),v=O[0],x=O[1],g=function(){var t=Object(f.a)(s.a.mark((function t(e){var n,r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(x([]),null!==e.value&&void 0!==e.value){t.next=3;break}return t.abrupt("return");case 3:if(!(e.value.length>=3)){t.next=14;break}return t.prev=4,t.next=7,Object(R.p)(e.value,o);case 7:n=t.sent,r=n.data,x(r),t.next=14;break;case 12:t.prev=12,t.t0=t.catch(4);case 14:case"end":return t.stop()}}),t,null,[[4,12]])})));return function(e){return t.apply(this,arguments)}}();return Object(L.jsxs)(F,{children:[Object(L.jsxs)(G,{children:[Object(L.jsx)(N,{mask:"99:99",type:"text",name:"time",value:n,onChange:r,placeholder:"\u0412\u0440\u0435\u043c\u044f"}),Object(L.jsx)(H.a,{id:"from",options:v,noOptionsText:"\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043c\u0438\u043d\u0438\u043c\u0443\u043c 3 \u0441\u0438\u043c\u0432\u043e\u043b\u0430",autoHighlight:!0,value:l,blurOnSelect:!0,getOptionLabel:function(t){return t.text},getOptionSelected:function(t,e){return t!==e},onChange:function(t,n){n&&(p(n),e(n))},renderOption:function(t){return Object(L.jsxs)("div",{children:[Object(L.jsx)("span",{className:"acMainOption",children:t.text}),Object(L.jsxs)("span",{children:[" - ",t.description]})]})},renderInput:function(t){return Object(L.jsx)(U,Object(E.a)(Object(E.a)({},t),{},{onFocus:function(t){var e=t.target;g(e)},onChange:function(t){var e=t.target;g(e)},variant:"outlined",placeholder:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0433\u043e\u0440\u043e\u0434"}))}})]}),Object(L.jsx)(Z,{type:"text",name:"stop",value:a,onChange:i,placeholder:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438"})]})},F=v.b.form(r||(r=Object(l.a)(["\n  padding: 10px 20px;\n"]))),N=Object(v.b)(A.a)(i||(i=Object(l.a)(["\n  padding: 6px 6px;\n  width: 70px;\n  text-align: center;\n  border-radius: 4px;\n  border: 1px solid #000;\n  margin-right: 6px;\n"]))),U=Object(v.b)(B.a)(a||(a=Object(l.a)(["\n  label {\n    color: #000;\n  }\n  label.Mui-focused {\n    color: #000;\n  }\n  .MuiOutlinedInput-root {\n    fieldset {\n      border: 1px solid #000;\n    }\n    &:hover fieldset {\n      border: 1px solid #000;\n    }\n    &.Mui-focused fieldset {\n      border: 1px solid #000;\n    }\n  }\n\n  .MuiInputBase-input {\n    color: #000;\n    font-family: 'HelveticaNeueCyr';\n    font-size: 18px;\n    font-weight: 500;\n    cursor: pointer;\n  }\n  .MuiOutlinedInput-input {\n    padding: 0;\n  }\n  .MuiAutocomplete-hasPopupIcon.MuiAutocomplete-hasClearIcon\n    .MuiAutocomplete-inputRoot[class*='MuiOutlinedInput-root'] {\n    padding-right: 10px;\n  }\n  .MuiAutocomplete-inputRoot[class*='MuiOutlinedInput-root'] .MuiAutocomplete-input {\n    padding: 0;\n  }\n  .MuiIconButton-root {\n    color: red;\n    display: none;\n  }\n  .MuiAutocomplete-popupIndicator {\n    display: none;\n  }\n  .MuiFormControl-marginNormal {\n    margin: 0;\n  }\n  .MuiFormLabel-root {\n    font-family: 'HelveticaNeueCyr';\n  }\n"]))),G=v.b.div(o||(o=Object(l.a)(["\n  display: flex;\n  margin-bottom: 6px;\n"]))),Z=v.b.input(c||(c=Object(l.a)(["\n  padding: 6px 12px;\n  width: 100%;\n  border-radius: 4px;\n  border: 1px solid #000;\n  font-size: 18px;\n"]))),D=(e.default=function(){var t=Object(h.c)(),e=Object(O.g)(),n=new URLSearchParams(Object(O.h)().search).get("tripId"),r=Object(h.d)(w.h),i=Object(h.d)(w.j),a=Object(j.useState)(null),o=Object(b.a)(a,2),c=o[0],u=o[1],l=Object(j.useState)(null),p=Object(b.a)(l,2),v=p[0],k=p[1],I=Object(j.useState)(""),M=Object(b.a)(I,2),S=M[0],C=M[1],E=Object(j.useState)(""),P=Object(b.a)(E,2),A=P[0],H=P[1],B=Object(j.useState)(""),R=Object(b.a)(B,2),V=R[0],F=R[1],N=Object(j.useState)(null),U=Object(b.a)(N,2),G=U[0],Z=U[1],J=function(){var r=Object(f.a)(s.a.mark((function r(){var a;return s.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(Z(null),a={locality:{parent:{id:"",name:""},address:{}}},!S){r.next=6;break}a.departureTime=S,r.next=8;break;case 6:return Z("\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0432\u0440\u0435\u043c\u044f \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f"),r.abrupt("return");case 8:if(!V){r.next=13;break}a.locality.parent.id=V.value,a.locality.parent.name=Object(d.a)({},V.text.split(":")[0],V.text.split(":")[1]),r.next=15;break;case 13:return Z("\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0433\u043e\u0440\u043e\u0434 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f"),r.abrupt("return");case 15:if(!A){r.next=19;break}a.locality.address={RU:A},r.next=21;break;case 19:return Z("\u041e\u043f\u0438\u0448\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438"),r.abrupt("return");case 21:if(!v){r.next=26;break}a.locality.latitude=v.lat,a.locality.longitude=v.lng,r.next=28;break;case 26:return Z("\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043c\u0435\u0441\u0442\u043e \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043d\u0430 \u043a\u0430\u0440\u0442\u0435"),r.abrupt("return");case 28:t(Object(y.a)(a)),e.push({pathname:"/trip-route",search:"?tripId=".concat(n),state:{from:"edit"===i?"/trip-edit?tripId=".concat(n):"/trip-periods?tripId=".concat(n)}});case 30:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}();return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(m.a,{onGoBack:function(){e.push({pathname:"/trip-route",search:"?tripId=".concat(n),state:{from:"edit"===i?"/trip-edit?tripId=".concat(n):"/trip-periods?tripId=".concat(n)}})},name:r.name}),Object(L.jsx)(D,{children:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u043c\u0435\u0441\u0442\u043e \u0438 \u0432\u0440\u0435\u043c\u044f \u043f\u043e\u0441\u0430\u0434\u043a\u0438/\u0432\u044b\u0441\u0430\u0434\u043a\u0438"}),Object(L.jsx)(T,{time:S,address:A,onChangeTime:function(t){var e=t.target;return C(e.value)},chooseLocality:function(t){u({lat:t.latitude,lng:t.longitude}),k(null),F(t)},onChangeStop:function(t){var e=t.target;return H(e.value)}}),G&&Object(L.jsx)(x.d,{children:G}),Object(L.jsx)(z,{markerLocality:c,addMarker:function(t){return k(t)},markerStop:v}),Object(L.jsx)(x.c,{type:"submit",onClick:J,children:Object(L.jsx)(g.a,{})})]})},v.b.h2(u||(u=Object(l.a)(["\n  font-size: 24px;\n  text-align: center;\n  font-weight: 400;\n  padding-top: 10px;\n"]))))}}]);
//# sourceMappingURL=21.6d889836.chunk.js.map