(this.webpackJsonpdispetcher=this.webpackJsonpdispetcher||[]).push([[25],{337:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return a}));var r=function(e){return e.reports.reports},c=function(e){return e.reports.loader},a=function(e){return e.reports.errror}},348:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r,c=n(0),a=["title","titleId"];function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function l(e,t){var n=e.title,l=e.titleId,u=o(e,a);return c.createElement("svg",i({width:30,height:40,viewBox:"0 -5 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":l},u),n?c.createElement("title",{id:l},n):null,r||(r=c.createElement("path",{d:"M20.8333 18.3333H19.5167L19.05 17.8833C20.6833 15.9833 21.6667 13.5167 21.6667 10.8333C21.6667 4.85 16.8167 0 10.8333 0C4.85 0 0 4.85 0 10.8333C0 16.8167 4.85 21.6667 10.8333 21.6667C13.5167 21.6667 15.9833 20.6833 17.8833 19.05L18.3333 19.5167V20.8333L26.6667 29.15L29.15 26.6667L20.8333 18.3333ZM10.8333 18.3333C6.68333 18.3333 3.33333 14.9833 3.33333 10.8333C3.33333 6.68333 6.68333 3.33333 10.8333 3.33333C14.9833 3.33333 18.3333 6.68333 18.3333 10.8333C18.3333 14.9833 14.9833 18.3333 10.8333 18.3333Z",fill:"#7E7070"})))}var u=c.forwardRef(l);n.p},349:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var r=n(29),c=n(27),a=n(54),i=(n(0),n(53)),o=n(371),l=n.n(o),u=(n(370),n(88)),b=n(1),s=["label"],j=function(e){var t=e.label,n=Object(a.a)(e,s),o=Object(i.d)().setFieldValue,j=Object(i.c)(n),d=Object(c.a)(j,2),O=d[0],p=d[1];return Object(b.jsxs)(u.f,{children:[Object(b.jsx)("label",{htmlFor:n.id||n.name,children:t}),Object(b.jsx)(l.a,Object(r.a)(Object(r.a)(Object(r.a)({},O),n),{},{autoComplete:"off",dateFormat:"yyyy-MM-dd",selected:O.value&&new Date(O.value)||null,onChange:function(e){o(O.name,e)}})),p.touched&&p.error?Object(b.jsx)(u.d,{children:p.error}):null]})}},366:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return i}));var r=n(2),c=function(e){return{type:r.a.GET_REPORTS,payload:e}},a=function(){return{type:r.a.REPORTS_LOADER_START}},i=function(e){return{type:r.a.REPORTS_ERROR,payload:e}}},523:function(e,t,n){"use strict";n.r(t);var r,c,a,i,o=n(5),l=n(70),u=n.n(l),b=n(89),s=n(27),j=n(0),d=n(21),O=n(53),p=n(55),f=n(4),h=n(88),x=n(17),m=n(348),v=n(43),y=n(91),g=n(315),w=n.n(g),R=n(29),C=n(54),E=n(1),S=["label"],M=function(e){var t=e.label,n=Object(C.a)(e,S),r=Object(O.c)(n),c=Object(s.a)(r,2),a=c[0],i=c[1];return Object(E.jsxs)(Y,{error:i.touched&&i.error,children:[Object(E.jsx)("div",{children:Object(E.jsx)("input",Object(R.a)(Object(R.a)({},a),n))}),Object(E.jsx)("label",{htmlFor:n.id||n.name,children:t})]})},Y=f.b.div(r||(r=Object(o.a)(["\n  display: flex;\n  margin-bottom: 12px;\n  /* & label {\n    order: 0;\n  }\n  & div {\n    order: 1;\n  } */\n  & input {\n    width: 16px;\n    height: 16px;\n    margin-right: 6px;\n  }\n"]))),D=n(349),F=n(90),L=n(366),T=n(13),P=n(337),k=(t.default=function(){var e=Object(d.c)(),t=Object(T.g)(),n=Object(d.d)(v.a),r=Object(d.d)(P.b),c=Object(d.d)(P.a),a=Object(j.useState)(""),i=Object(s.a)(a,2),o=i[0],l=i[1];return Object(E.jsxs)(k,{children:[Object(E.jsx)(_,{children:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u043f\u0435\u0440\u0438\u043e\u0434 \u043e\u0442\u0447\u0435\u0442\u0430"}),Object(E.jsx)(O.b,{initialValues:{from:"",to:"",type:"false"},validationSchema:p.c({from:p.a().required("\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0430\u0442\u0443"),to:p.a().required("\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0430\u0442\u0443")}),onSubmit:function(){var r=Object(b.a)(u.a.mark((function r(c){var a,i,o,b,s,j,d;return u.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a=c.from,i=c.to,o=c.type,b=w()(a).format("YYYY-MM-DD"),s=w()(i).format("YYYY-MM-DD"),e(Object(L.c)()),l(""),r.prev=5,r.next=8,Object(F.r)(b,s,o,n);case 8:j=r.sent,d=j.data,e(Object(L.b)(d)),d?t.push("/reports/result?from=".concat(b,"&to=").concat(s,"&isSale=").concat(o)):l("\u041f\u043e \u0412\u0430\u0448\u0435\u043c\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0443 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"),r.next=17;break;case 14:r.prev=14,r.t0=r.catch(5),e(Object(L.a)(r.t0));case 17:case"end":return r.stop()}}),r,null,[[5,14]])})));return function(e){return r.apply(this,arguments)}}(),children:Object(E.jsx)(O.a,{children:Object(E.jsxs)(I,{children:[Object(E.jsx)(D.a,{label:"\u0414\u0430\u0442\u0430 \u0421",name:"from"}),Object(E.jsx)(D.a,{label:"\u0414\u0430\u0442\u0430 \u041f\u041e",name:"to"}),Object(E.jsx)(M,{label:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u043f\u043e \u0434\u0430\u0442\u0435 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f",type:"radio",name:"type",value:"false"}),Object(E.jsx)(M,{label:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u043f\u043e \u0434\u0430\u0442\u0435 \u043f\u0440\u043e\u0434\u0430\u0436\u0438",type:"radio",name:"type",value:"true"}),c&&Object(E.jsx)(h.d,{children:c.message}),o&&Object(E.jsx)(h.d,{children:o}),Object(E.jsx)(h.c,{type:"submit",children:r?Object(E.jsx)(y.a,{type:"ThreeDots",color:"#00BFFF",height:15,width:40}):Object(E.jsx)(m.a,{})})]})})})]})},f.b.div(c||(c=Object(o.a)(["\n  padding: 20px 10px 80px;\n\n  @media "," {\n    width: 410px;\n    margin: 0 auto;\n  }\n"])),x.a.mobileL)),_=f.b.p(a||(a=Object(o.a)(["\n  font-size: 24px;\n  text-align: center;\n"]))),I=f.b.div(i||(i=Object(o.a)(["\n  /* padding: 20px; */\n"])))}}]);
//# sourceMappingURL=25.b1dad082.chunk.js.map