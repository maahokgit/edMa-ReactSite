(this["webpackJsonpedma-website"]=this["webpackJsonpedma-website"]||[]).push([[5],{103:function(e,t,n){"use strict";var i=n(2),a=n(5),r=n(1),o=(n(3),n(17));var s=n(80),c=n(37),l=n(48),d=n(24),u=n(29);function b(e,t){var n=function(e,t){var n,i=t.getBoundingClientRect();if(t.fakeTransform)n=t.fakeTransform;else{var a=window.getComputedStyle(t);n=a.getPropertyValue("-webkit-transform")||a.getPropertyValue("transform")}var r=0,o=0;if(n&&"none"!==n&&"string"===typeof n){var s=n.split("(")[1].split(")")[0].split(",");r=parseInt(s[4],10),o=parseInt(s[5],10)}return"left"===e?"translateX(".concat(window.innerWidth,"px) translateX(").concat(r-i.left,"px)"):"right"===e?"translateX(-".concat(i.left+i.width-r,"px)"):"up"===e?"translateY(".concat(window.innerHeight,"px) translateY(").concat(o-i.top,"px)"):"translateY(-".concat(i.top+i.height-o,"px)")}(e,t);n&&(t.style.webkitTransform=n,t.style.transform=n)}var j={enter:d.b.enteringScreen,exit:d.b.leavingScreen},m=r.forwardRef((function(e,t){var n=e.children,d=e.direction,m=void 0===d?"down":d,h=e.in,x=e.onEnter,f=e.onEntered,p=e.onEntering,g=e.onExit,O=e.onExited,w=e.onExiting,y=e.style,v=e.timeout,E=void 0===v?j:v,_=e.TransitionComponent,M=void 0===_?s.a:_,N=Object(a.a)(e,["children","direction","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),A=Object(l.a)(),C=r.useRef(null),P=r.useCallback((function(e){C.current=o.findDOMNode(e)}),[]),k=Object(c.a)(n.ref,P),T=Object(c.a)(k,t),z=function(e){return function(t){e&&(void 0===t?e(C.current):e(C.current,t))}},I=z((function(e,t){b(m,e),Object(u.b)(e),x&&x(e,t)})),S=z((function(e,t){var n=Object(u.a)({timeout:E,style:y},{mode:"enter"});e.style.webkitTransition=A.transitions.create("-webkit-transform",Object(i.a)({},n,{easing:A.transitions.easing.easeOut})),e.style.transition=A.transitions.create("transform",Object(i.a)({},n,{easing:A.transitions.easing.easeOut})),e.style.webkitTransform="none",e.style.transform="none",p&&p(e,t)})),F=z(f),R=z(w),B=z((function(e){var t=Object(u.a)({timeout:E,style:y},{mode:"exit"});e.style.webkitTransition=A.transitions.create("-webkit-transform",Object(i.a)({},t,{easing:A.transitions.easing.sharp})),e.style.transition=A.transitions.create("transform",Object(i.a)({},t,{easing:A.transitions.easing.sharp})),b(m,e),g&&g(e)})),H=z((function(e){e.style.webkitTransition="",e.style.transition="",O&&O(e)})),J=r.useCallback((function(){C.current&&b(m,C.current)}),[m]);return r.useEffect((function(){if(!h&&"down"!==m&&"right"!==m){var e=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:166;function i(){for(var i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];var o=this,s=function(){e.apply(o,a)};clearTimeout(t),t=setTimeout(s,n)}return i.clear=function(){clearTimeout(t)},i}((function(){C.current&&b(m,C.current)}));return window.addEventListener("resize",e),function(){e.clear(),window.removeEventListener("resize",e)}}}),[m,h]),r.useEffect((function(){h||J()}),[h,J]),r.createElement(M,Object(i.a)({nodeRef:C,onEnter:I,onEntered:F,onEntering:S,onExit:B,onExited:H,onExiting:R,appear:!0,in:h,timeout:E},N),(function(e,t){return r.cloneElement(n,Object(i.a)({ref:T,style:Object(i.a)({visibility:"exited"!==e||h?void 0:"hidden"},y,n.props.style)},t))}))}));t.a=m},106:function(e,t,n){e.exports={Container:"AboutPage_Container__2vs4H",selfie:"AboutPage_selfie__NMWIn",iconCenter:"AboutPage_iconCenter__2iQjF",AboutMe:"AboutPage_AboutMe__2gPuy",MoreAboutMe:"AboutPage_MoreAboutMe__2rfC_",row:"AboutPage_row__2M93j",Picture:"AboutPage_Picture__1BEnt",MoreAboutMePic:"AboutPage_MoreAboutMePic__1-ys0"}},125:function(e,t,n){"use strict";n.r(t);var i=n(1),a=n(95),r=n(103),o=n(106),s=n.n(o),c=n.p+"static/media/selfie.1e30c650.jpg",l=n(8),d=n(19),u=n(15),b=n(52),j=n.p+"static/media/mstj.ab49c849.jpeg",m=n(0);t.default=function(){return Object(i.useEffect)((function(){document.title="About Me | Edward Ma, MStJ"}),[]),Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(a.a,{container:!0,spacing:5,className:s.a.row,children:[Object(m.jsx)(r.a,{direction:"down",in:!0,mountOnEnter:!0,unmountOnExit:!0,children:Object(m.jsx)(a.a,{item:!0,md:4,xs:12,className:s.a.Picture,children:Object(m.jsx)("img",{src:c,alt:"i need a better pic",className:s.a.selfie})})}),Object(m.jsx)(r.a,{direction:"up",in:!0,mountOnEnter:!0,unmountOnExit:!0,children:Object(m.jsxs)(a.a,{item:!0,md:8,xs:12,className:s.a.AboutMe,children:[Object(m.jsxs)("h1",{children:["Hi. I'm Edward, a web and database developer based out of beautiful"," ",Object(m.jsx)("a",{href:"https://www.google.ca/maps/place/Nova+Scotia/",target:"_blank",rel:"noreferrer",children:"Nova Scotia, Canada"}),"."]}),Object(m.jsx)("h2",{children:"I am more than a Developer."}),Object(m.jsxs)(a.a,{container:!0,xs:12,spacing:5,style:{marginTop:20},children:[Object(m.jsx)(a.a,{item:!0,xs:3,className:s.a.iconCenter,children:Object(m.jsx)(l.a,{icon:d.d,color:"white",size:"3x"})}),Object(m.jsx)(a.a,{item:!0,xs:3,className:s.a.iconCenter,children:Object(m.jsx)(l.a,{icon:d.f,color:"white",size:"3x"})}),Object(m.jsx)(a.a,{item:!0,xs:3,className:s.a.iconCenter,children:Object(m.jsx)(l.a,{icon:d.e,color:"white",size:"3x"})}),Object(m.jsx)(a.a,{item:!0,xs:3,className:s.a.iconCenter,children:Object(m.jsx)(l.a,{icon:d.h,color:"white",size:"3x"})}),Object(m.jsx)(a.a,{item:!0,xs:3,className:s.a.iconCenter,children:Object(m.jsx)(l.a,{icon:u.d,color:"white",size:"3x"})}),Object(m.jsx)(a.a,{item:!0,xs:3,className:s.a.iconCenter,children:Object(m.jsx)(l.a,{icon:d.j,color:"white",size:"3x"})}),Object(m.jsx)(a.a,{item:!0,xs:3,className:s.a.iconCenter,children:Object(m.jsx)(l.a,{icon:d.a,color:"white",size:"3x"})}),Object(m.jsx)(a.a,{item:!0,xs:3,className:s.a.iconCenter,children:Object(m.jsx)(l.a,{icon:d.i,color:"white",size:"3x"})})]})]})}),Object(m.jsxs)(a.a,{container:!0,spacing:5,style:{marginTop:150,padding:"0 20px"},children:[Object(m.jsxs)(a.a,{item:!0,md:6,xs:12,className:s.a.MoreAboutMe,children:[Object(m.jsxs)("h3",{children:["I am the Co-Founder & CTO of ",Object(m.jsx)("a",{href:"https://Bursity.org",target:"_blank",rel:"noreferrer",children:"Bursity.org"}),"."]}),Object(m.jsx)("p",{children:"Where I am responsible for setting out which technological resources meet the company's short and long-term business goals and staying in touch with technology trends and development that would benefit the company."})]}),Object(m.jsx)(a.a,{item:!0,md:6,xs:12,className:s.a.Picture,children:Object(m.jsx)("img",{src:b.a,alt:"winning volta cohort",className:s.a.MoreAboutMePic})})]}),Object(m.jsxs)(a.a,{container:!0,spacing:5,style:{marginTop:150,padding:"0 20px"},children:[Object(m.jsx)(a.a,{item:!0,md:6,xs:12,className:s.a.Picture,children:Object(m.jsx)("img",{src:j,alt:"acceptance into the order of st. john",className:s.a.MoreAboutMePic})}),Object(m.jsxs)(a.a,{item:!0,md:6,xs:12,className:s.a.MoreAboutMe,children:[Object(m.jsx)("p",{children:"These days I spent my time expanding my knowledge of web and database development or anything tech and startup related."}),Object(m.jsxs)("p",{children:["Outside of that, you will find me serving my community with"," ",Object(m.jsx)("a",{href:"http://www.ns.sjaresponder.ca/",target:"_blank",rel:"noreferrer",children:"St. John Ambulance NS/PEI"})," ","as a Volunteer First Responder and other non-profit organizations, such as the"," ",Object(m.jsx)("a",{href:"https://www.mentalhealthns.ca/",target:"_blank",rel:"noreferrer",children:"Mental Health Foundation of Nova Scotia"}),"."]})]})]})]})})}}}]);
//# sourceMappingURL=5.fbd8a1b7.chunk.js.map