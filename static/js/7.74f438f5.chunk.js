(this.webpackJsonpsocialweb=this.webpackJsonpsocialweb||[]).push([[7],{226:function(t,e,c){"use strict";c.d(e,"c",(function(){return n})),c.d(e,"a",(function(){return r})),c.d(e,"b",(function(){return a}));var n=function(t){if(!t)return"error message"},r=function(t){return function(e){if(e&&e.length>t)return"Max length is ".concat(t," symbols")}},a=function(t){return function(e){if(e&&e.length<t)return"Max length is ".concat(t," symbols")}}},227:function(t,e,c){"use strict";c.d(e,"c",(function(){return o})),c.d(e,"b",(function(){return s})),c.d(e,"a",(function(){return b}));var n=c(3),r=c(233),a=c(0),i=(c(1),c(228),function(t){t.input;var e=t.meta,c=(t.child,Object(r.a)(t,["input","meta","child"])),n=e.touched&&e.error;return Object(a.jsxs)("div",{className:"formControl"+(n?" error":""),children:[Object(a.jsx)("div",{children:c.children}),n&&Object(a.jsxs)("span",{children:['"',e.error,'"']})]})}),o=function(t){var e=t.input,c=(t.meta,t.child,Object(r.a)(t,["input","meta","child"]));return Object(a.jsx)(i,Object(n.a)(Object(n.a)({},t),{},{children:Object(a.jsx)("textarea",Object(n.a)(Object(n.a)({},e),c))}))},s=function(t){var e=t.input,c=(t.meta,t.child,Object(r.a)(t,["input","meta","child"]));return Object(a.jsx)(i,Object(n.a)(Object(n.a)({},t),{},{children:Object(a.jsx)("input",Object(n.a)(Object(n.a)({},e),c))}))},b=function(t){var e=t.input,c=(t.meta,t.child,Object(r.a)(t,["input","meta","child"]));return Object(a.jsx)(i,Object(n.a)(Object(n.a)({},t),{},{children:Object(a.jsx)("input",Object(n.a)(Object(n.a)({type:"checkbox"},e),c))}))}},228:function(t,e,c){},300:function(t,e,c){"use strict";c.r(e);var n=c(19),r=c(25),a=c(0),i=(c(1),c(7)),o=c(105),s=c(106),b=c(226),j=c(227),u=Object(b.a)(20),l=Object(b.b)(4),d=Object(s.a)({form:"login"})((function(t){var e=t.handleSubmit,c=t.error,n=t.captchaUrl;return Object(a.jsxs)("form",{onSubmit:e,children:[Object(a.jsx)("div",{children:Object(a.jsx)(o.a,{name:"email",placeholder:"Email",component:j.b,validate:[b.c,u]})}),Object(a.jsx)("div",{children:Object(a.jsx)(o.a,{name:"password",type:"password",placeholder:"Password",component:j.b,validate:[b.c,u,l]})}),n&&Object(a.jsx)("img",{src:n,alt:"captcha"}),n&&Object(a.jsx)(o.a,{name:"captcha",placeholder:"Symbols in captcha",component:j.b,validate:[b.c]}),c&&Object(a.jsx)("div",{className:"formSummaryError",children:c}),Object(a.jsxs)("div",{children:[Object(a.jsx)(o.a,{name:"rememberMe",type:"checkbox",component:j.b})," Remember me"]}),Object(a.jsx)("div",{children:Object(a.jsx)("button",{className:"btn btn-warning btn-block",children:"Login"})})]})})),h=function(t){var e=t.loginThunkCreator,c=t.isAuth,n=t.captchaUrl;return c?Object(a.jsx)(i.a,{to:"/profile"}):Object(a.jsx)("div",{className:"d-flex justify-content-end",children:Object(a.jsxs)("div",{className:"m-2 card p-2 text-center",children:[Object(a.jsx)("h1",{children:"Login"}),Object(a.jsx)(d,{onSubmit:function(t){e(t.email,t.password,t.rememberMe,t.captcha)},captchaUrl:n})]})})},m={loginThunkCreator:r.c,logoutThunkCreator:r.d};e.default=Object(n.b)((function(t){return{isAuth:t.auth.isAuth,captchaUrl:t.auth.captchaUrl}}),m)(h)}}]);
//# sourceMappingURL=7.74f438f5.chunk.js.map