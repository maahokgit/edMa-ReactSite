(this["webpackJsonpedma-website"]=this["webpackJsonpedma-website"]||[]).push([[6],{112:function(e,t,n){"use strict";n.r(t);var s=n(25),a=n(79),i=n.n(a),r=n(1),o=n(113),c=n.p+"static/media/fbavie.6ee3c2e4.jpg",l=n(82),u=n.n(l),d=n(0);t.default=function(){Object(r.useEffect)((function(){document.title="Let's Chat | Edward Ma, MStJ"}),[]);var e=Object(r.useState)(!1),t=Object(s.a)(e,2),n=t[0],a=t[1],l=Object(r.useState)(""),m=Object(s.a)(l,2),p=m[0],j=m[1],f=Object(r.useState)(!1),b=Object(s.a)(f,2),h=b[0],O=b[1],v=Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("label",{children:"Name"}),Object(d.jsx)("input",{type:"text",name:"from_name",placeholder:"Your Name"}),Object(d.jsx)("label",{children:"Email"}),Object(d.jsx)("input",{type:"email",name:"reply_to",placeholder:"Your Email",onChange:function(e){/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e.target.value)?(a(!0),j("")):(a(!1),j("Please enter a valid email"))}}),""!==p?Object(d.jsx)("span",{children:p}):null,Object(d.jsx)("label",{children:"Message"}),Object(d.jsx)("textarea",{name:"message",placeholder:"How can I help?"}),Object(d.jsx)("button",{disabled:!n,children:"Submit"})]});return Object(d.jsx)("div",{className:u.a.ContactPage,children:Object(d.jsxs)("div",{className:u.a.formContainer,children:[Object(d.jsx)(o.a,{direction:"right",in:!0,mountOnEnter:!0,unmountOnExit:!0,children:Object(d.jsxs)("form",{className:u.a.ContactForm,onSubmit:function(e){e.preventDefault(),i.a.sendForm("service_57no3jr","template_zhjpluj",e.target,"user_MceZzD95BQypnbSgcsBR0").then((function(e){e&&O(!0)}),(function(e){console.log(e.text)}))},children:[Object(d.jsx)("h1",{children:"Let's Chat. Drop me a line!"}),h?Object(d.jsxs)("h3",{children:["Message Sent! Thank you! ",Object(d.jsx)("br",{})," ",Object(d.jsx)("br",{}),"I will get back to you as soon as I see it!"]}):v]})}),Object(d.jsx)(o.a,{direction:"left",in:!0,mountOnEnter:!0,unmountOnExit:!0,children:Object(d.jsx)("img",{src:c,alt:"funko avi",style:{maxWidth:410}})})]})})}},79:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EmailJSResponseStatus=t.sendForm=t.send=t.init=void 0;var s=n(80);Object.defineProperty(t,"EmailJSResponseStatus",{enumerable:!0,get:function(){return s.EmailJSResponseStatus}});var a=n(81),i=null,r="https://api.emailjs.com";function o(e,t,n){return void 0===n&&(n={}),new Promise((function(a,i){var r=new XMLHttpRequest;for(var o in r.addEventListener("load",(function(e){var t=new s.EmailJSResponseStatus(e.target);200===t.status||"OK"===t.text?a(t):i(t)})),r.addEventListener("error",(function(e){i(new s.EmailJSResponseStatus(e.target))})),r.open("POST",e,!0),n)r.setRequestHeader(o,n[o]);r.send(t)}))}function c(e){var t=document&&document.getElementById("g-recaptcha-response");return t&&t.value&&(e["g-recaptcha-response"]=t.value),t=null,e}function l(e,t){i=e,r=t||"https://api.emailjs.com"}function u(e,t,n,s){var a={lib_version:"2.6.4",user_id:s||i,service_id:e,template_id:t,template_params:c(n)};return o(r+"/api/v1.0/email/send",JSON.stringify(a),{"Content-type":"application/json"})}function d(e,t,n,s){var c;if("string"===typeof n&&(n=document.querySelector("#"!==(c=n)[0]&&"."!==c[0]?"#"+c:c)),!n||"FORM"!==n.nodeName)throw"Expected the HTML form element or the style selector of form";a.UI.progressState(n);var l=new FormData(n);return l.append("lib_version","2.6.4"),l.append("service_id",e),l.append("template_id",t),l.append("user_id",s||i),o(r+"/api/v1.0/email/send-form",l).then((function(e){return a.UI.successState(n),e}),(function(e){return a.UI.errorState(n),Promise.reject(e)}))}t.init=l,t.send=u,t.sendForm=d,t.default={init:l,send:u,sendForm:d}},80:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EmailJSResponseStatus=void 0;var s=function(e){this.status=e.status,this.text=e.responseText};t.EmailJSResponseStatus=s},81:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.UI=void 0;var s=function(){function e(){}return e.clearAll=function(e){e.classList.remove(this.PROGRESS),e.classList.remove(this.DONE),e.classList.remove(this.ERROR)},e.progressState=function(e){this.clearAll(e),e.classList.add(this.PROGRESS)},e.successState=function(e){e.classList.remove(this.PROGRESS),e.classList.add(this.DONE)},e.errorState=function(e){e.classList.remove(this.PROGRESS),e.classList.add(this.ERROR)},e.PROGRESS="emailjs-sending",e.DONE="emailjs-success",e.ERROR="emailjs-error",e}();t.UI=s},82:function(e,t,n){e.exports={ContactForm:"ContactPage_ContactForm__Q0Jup",formContainer:"ContactPage_formContainer__3KDqd",ContactPage:"ContactPage_ContactPage__3cg7v"}}}]);
//# sourceMappingURL=6.643775f2.chunk.js.map