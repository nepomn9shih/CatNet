(this.webpackJsonpsocialweb=this.webpackJsonpsocialweb||[]).push([[4],{226:function(e,t,c){"use strict";c.d(t,"c",(function(){return n})),c.d(t,"a",(function(){return s})),c.d(t,"b",(function(){return a}));var n=function(e){if(!e)return"error message"},s=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e," symbols")}},a=function(e){return function(t){if(t&&t.length<e)return"Max length is ".concat(e," symbols")}}},227:function(e,t,c){"use strict";c.d(t,"c",(function(){return i})),c.d(t,"b",(function(){return u})),c.d(t,"a",(function(){return j}));var n=c(3),s=c(233),a=c(0),r=(c(1),c(228),function(e){e.input;var t=e.meta,c=(e.child,Object(s.a)(e,["input","meta","child"])),n=t.touched&&t.error;return Object(a.jsxs)("div",{className:"formControl"+(n?" error":""),children:[Object(a.jsx)("div",{children:c.children}),n&&Object(a.jsxs)("span",{children:['"',t.error,'"']})]})}),i=function(e){var t=e.input,c=(e.meta,e.child,Object(s.a)(e,["input","meta","child"]));return Object(a.jsx)(r,Object(n.a)(Object(n.a)({},e),{},{children:Object(a.jsx)("textarea",Object(n.a)(Object(n.a)({},t),c))}))},u=function(e){var t=e.input,c=(e.meta,e.child,Object(s.a)(e,["input","meta","child"]));return Object(a.jsx)(r,Object(n.a)(Object(n.a)({},e),{},{children:Object(a.jsx)("input",Object(n.a)(Object(n.a)({},t),c))}))},j=function(e){var t=e.input,c=(e.meta,e.child,Object(s.a)(e,["input","meta","child"]));return Object(a.jsx)(r,Object(n.a)(Object(n.a)({},e),{},{children:Object(a.jsx)("input",Object(n.a)(Object(n.a)({type:"checkbox"},t),c))}))}},228:function(e,t,c){},232:function(e,t,c){"use strict";c.d(t,"a",(function(){return m}));var n=c(3),s=c(33),a=c(34),r=c(36),i=c(35),u=c(0),j=c(1),b=c.n(j),l=c(19),o=c(7),d=function(e){return{isAuth:e.auth.isAuth}},m=function(e){var t=function(t){Object(r.a)(j,t);var c=Object(i.a)(j);function j(){return Object(s.a)(this,j),c.apply(this,arguments)}return Object(a.a)(j,[{key:"render",value:function(){return this.props.isAuth?Object(u.jsx)(e,Object(n.a)({},this.props)):Object(u.jsx)(o.a,{to:"/login"})}}]),j}(b.a.Component);return Object(l.b)(d)(t)}},254:function(e,t,c){},255:function(e,t,c){},256:function(e,t,c){},298:function(e,t,c){"use strict";c.r(t);var n=c(19),s=c(18),a=c(232),r=c(73),i=c(0),u=(c(1),c(8)),j=(c(254),function(e){var t=e.name,c=e.id,n=e.userAvatar;return Object(i.jsx)("div",{className:"dialog mb-2",children:Object(i.jsx)(u.b,{to:"/dialogs/"+c,children:Object(i.jsx)("div",{className:"card bg-light",children:Object(i.jsxs)("div",{className:"d-flex justify-content-around flex-wrap",children:[Object(i.jsx)("div",{className:"",children:Object(i.jsx)("img",{className:"w-100 rounded",src:n,alt:"userAvatar"})}),Object(i.jsx)("div",{className:"p-2",children:t})]})})})})}),b=(c(255),c(256),function(e){var t=e.text;return Object(i.jsx)("div",{className:"m-1 overflowHack",children:t})}),l=c(104),o=c(105),d=c(226),m=c(227),O=Object(d.a)(100),h=Object(o.a)({form:"message"})((function(e){return Object(i.jsx)("div",{className:"list-group-item bg-light",children:Object(i.jsx)("form",{onSubmit:e.handleSubmit,children:Object(i.jsx)("div",{className:"raw",children:Object(i.jsxs)("div",{className:"col-12 col-md-9",children:[Object(i.jsx)(l.a,{name:"message",component:m.c,className:"form-control",placeholder:"\u041d\u0430\u043f\u0438\u0448\u0438 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435",validate:[d.c,O]}),Object(i.jsx)("div",{className:"mt-1",children:Object(i.jsx)("button",{className:"btn btn-sm btn-warning btn-block",children:Object(i.jsx)("b",{children:"ADD MESSAGE"})})})]})})})})})),f=function(e){return Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)("div",{className:"col-4 col-md-3",children:Object(i.jsxs)("div",{className:"card bg-dark p-2 m-2",children:[e.messagesPage.dialogs.map((function(e){return Object(i.jsx)(j,{name:e.name,id:e.id,userAvatar:e.userAvatar},e.id)})),Object(i.jsx)("button",{className:"btn btn-warning btn-sm",children:"***"})]})}),Object(i.jsx)("div",{className:"col",children:Object(i.jsxs)("div",{className:"list-group m-2",children:[Object(i.jsx)("div",{className:"list-group-item",children:e.messagesPage.messages.map((function(e){return Object(i.jsx)(b,{text:e.message},e.id)}))}),Object(i.jsx)(h,{onSubmit:function(t){e.sendMessage(t.message)}})]})})]})};t.default=Object(s.d)(Object(n.b)((function(e){return{messagesPage:e.messagesPage}}),(function(e){return{sendMessage:function(t){e(Object(r.b)(t))}}})),a.a)(f)}}]);
//# sourceMappingURL=4.7458f463.chunk.js.map