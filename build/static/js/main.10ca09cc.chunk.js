(this.webpackJsonpmushrooms=this.webpackJsonpmushrooms||[]).push([[0],{26:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/forest.5ddfa80b.jpg"},46:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/mushroom.5d335269.jpg"},51:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var a=n(2),s=n(13),o=n.n(s),c=n(9),r=n(14),i=n(7),l=n(17),b=n(0),u=n(24),j=n.n(u),p=n(28),d="predict_loading",h="predict_result",x="predict_error",O="predict_clear",m=Object.freeze({PREDICT:"http://127.0.0.1:8000/mushrooms/api/predict"}),f=n(55),g=n(29),v=n(56),w=n(57),_=n(15),y=n(25),k=n(30),N=n(58),S=n(53),C=n(54),V=function(e){return e.toLowerCase().split(" ").map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join(" ")},D=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},R=(n(46),function(e){var t=e.submitDisabled,n=e.label,s=e.targetName,o=e.options,r=e.onChange,i=e.onClick,l=e.onSubmit,b=e.inputs,u=e.viewport,j=Object(c.c)((function(e){return e.prediction})),p=j.loading,d=j.predictResult,h=j.error;return Object(a.jsxs)(N.a,{className:"form",onSubmit:function(e){return l(e)},children:[Object(a.jsxs)(N.a.Group,{controlId:"formBasicMushrooms",children:[Object(a.jsx)(N.a.Label,{className:"form__label",children:V(n)}),Object(a.jsxs)(N.a.Control,{className:"form__control",as:"select",name:s,value:b[s]||"",onChange:function(e){return r(e)},children:[Object(a.jsx)("option",{className:"form__option",disabled:!0,value:"",children:V("choose one option")}),o.optionValues.map((function(e,t){var n=o.optionShortcuts[t];return Object(a.jsx)("option",{className:"form__option",value:n||"",children:D(e)},t)}))]})]}),(0===d.length||h.length>0)&&Object(a.jsx)(S.a,{className:"form__btn",disabled:t,type:"submit",variant:"outline-dark",children:Object(a.jsxs)("div",{className:"form__btn-wrap",children:[p&&(u>900&&u<=1024?Object(a.jsx)(C.a,{as:"span",animation:"border",role:"status","aria-hidden":"true"}):Object(a.jsx)(C.a,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"})),p?Object(a.jsx)("span",{className:"form__btn-content",children:D("predicting ...")}):Object(a.jsx)("span",{className:"form__btn-content",children:D("predict")})]})}),Object(a.jsx)("div",{className:"form__error",children:h.length>0&&Object(a.jsx)("span",{className:"form__error-content",children:h})}),d.length>0&&0===h.length&&Object(a.jsx)(S.a,{className:"form__btn",onClick:function(e){return i(e)},variant:"dark",children:"Reset"})]})}),I=(n(48),function(e){var t=e.blocked,n=e.icon,s=e.onClick;return Object(a.jsx)("div",{className:"icon",onClick:function(e){return s(e)},children:Object(a.jsx)(_.a,{className:"icon-ico ".concat(t&&"icon-ico--blocked"),icon:n})})}),P=[{label:"cap surface",option:{optionValues:["fibrous","grooves","scaly","smooth"],optionShortcuts:["f","g","y","s"]}},{label:"bruises",option:{optionValues:["bruises","no"],optionShortcuts:["t","f"]}},{label:"gill spacing",option:{optionValues:["close","crowded"],optionShortcuts:["c","w"]}},{label:"gill size",option:{optionValues:["broad","narrow"],optionShortcuts:["b","n"]}},{label:"gill color",option:{optionValues:["black","brown","buff","chocolate","gray","green","orange","pink","purple","red","white","yellow"],optionShortcuts:["k","n","b","h","g","r","o","p","u","e","w","y"]}},{label:"stalk surface above ring",option:{optionValues:["fibrous","scaly","silky","smooth"],optionShortcuts:["f","y","k","s"]}},{label:"stalk surface below ring",option:{optionValues:["fibrous","scaly","silky","smooth"],optionShortcuts:["f","y","k","s"]}},{label:"stalk color above ring",option:{optionValues:["brown","buff","cinamon","gray","orange","pink","red","white","yellow"],optionShortcuts:["n","b","c","g","o","p","e","w","y"]}},{label:"ring type",option:{optionValues:["evanescent","flaring","large","none","pendant"],optionShortcuts:["e","f","l","n","p"]}},{label:"spore print color",option:{optionValues:["black","brown","buff","chocolate","green","orange","purple","white","yellow"],optionShortcuts:["k","n","b","h","r","o","u","w","y"]}},{label:"population",option:{optionValues:["abundant","clustered","numerous","scattered","several","solitary"],optionShortcuts:["a","c","n","s","v","y"]}},{label:"habitat",option:{optionValues:["grasses","leaves","meadows","paths","urban","waste","woods"],optionShortcuts:["g","l","m","p","u","w","d"]}}],z=["cupSurface","bruises","gillSpacing","gillSize","gillColor","stalkSurfaceAboveRing","stalkSurfaceBelowRing","stalkColorAboveRing","ringType","sporePrintColor","population","habitat"],A=(n(49),function(){var e=Object(c.b)(),t=Object(b.useState)(0),s=Object(l.a)(t,2),o=s[0],u=s[1],N=Object(b.useState)({}),S=Object(l.a)(N,2),C=S[0],V=S[1],A=Object(b.useState)(0),E=Object(l.a)(A,2),T=E[0],B=E[1],J=Object(c.c)((function(e){return e.prediction})).predictResult;return Object(b.useEffect)((function(){B(window.innerWidth)}),[]),Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(f.a,{className:"mt-4"}),Object(a.jsxs)(f.a,{children:[Object(a.jsx)(g.a,{xl:2}),Object(a.jsx)(g.a,{xl:8,children:Object(a.jsxs)("div",{className:"banner",children:[Object(a.jsx)("span",{className:"banner__title",children:"Can I eat this"}),Object(a.jsx)(v.a,{className:"banner__image",src:n(50).default}),Object(a.jsx)("span",{className:"banner__title",children:"?"})]})}),Object(a.jsx)(g.a,{xl:2})]}),Object(a.jsx)(f.a,{className:"mt-5"}),Object(a.jsxs)(f.a,{children:[Object(a.jsx)(g.a,{xs:2}),Object(a.jsx)(g.a,{xs:2,children:Object(a.jsx)(I,{blocked:0===o,icon:y.a,onClick:function(e){e.preventDefault(),o>0&&u((function(e){return--e}))}})}),Object(a.jsx)(g.a,{xs:4,children:Object(a.jsxs)("span",{className:"counter",children:[o+1," / ",z.length]})}),Object(a.jsx)(g.a,{xs:2,children:Object(a.jsx)(I,{blocked:o===z.length-1||void 0===C[z[o]],icon:y.b,onClick:function(e){e.preventDefault(),o<z.length-1&&void 0!==C[z[o]]&&u((function(e){return++e}))}})}),Object(a.jsx)(g.a,{xs:2})]}),Object(a.jsx)(f.a,{className:"mt-3"}),Object(a.jsxs)(f.a,{children:[Object(a.jsx)(g.a,{xl:4,xs:3}),Object(a.jsx)(g.a,{xl:4,xs:6,children:Object(a.jsx)(R,{submitDisabled:Object.values(C).length!==z.length,label:P[o].label,targetName:z[o],options:P[o].option,onChange:function(e){e.persist(),V((function(t){return Object(i.a)(Object(i.a)({},t),{},Object(r.a)({},e.target.name,e.target.value))}))},onClick:function(t){t.preventDefault(),u(0),V({}),e((function(e){e({type:O})}))},onSubmit:function(t){var n;t.preventDefault(),e((n=C,function(){var e=Object(p.a)(j.a.mark((function e(t){var a,s,o;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:d,payload:!0}),e.prev=1,e.next=4,fetch(m.PREDICT,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 4:return a=e.sent,e.next=7,a.json();case 7:s=e.sent,(o=s.result)&&t({type:h,payload:o}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),e.t0&&t({type:x,payload:"network error, please try again"});case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}()))},inputs:C,viewport:T})}),Object(a.jsx)(g.a,{xl:4,xs:3})]}),Object(a.jsxs)(f.a,{children:[Object(a.jsx)(g.a,{xl:5,xs:4}),Object(a.jsx)(g.a,{xl:2,xs:4,children:Object(a.jsx)("div",{className:"result",children:J.length>0&&Object(a.jsx)("span",{className:"result-content ".concat({edible:"result-content--edible",poisonous:"result-content--poisonous"}[J]),children:D(J)})})}),Object(a.jsx)(g.a,{xl:5,xs:4})]}),Object(a.jsx)("div",{className:"container__space"}),Object(a.jsxs)(f.a,{children:[Object(a.jsx)(g.a,{xs:2}),Object(a.jsx)(g.a,{xs:8,children:Object(a.jsxs)("div",{className:"image",children:[Object(a.jsx)(v.a,{className:"image-img",src:n(26).default}),Object(a.jsx)(v.a,{className:"image-img",src:n(26).default})]})}),Object(a.jsx)(g.a,{xs:2})]}),Object(a.jsx)(f.a,{className:"mt-3"}),Object(a.jsxs)(f.a,{children:[Object(a.jsx)(g.a,{xl:7,xs:4}),Object(a.jsx)(g.a,{xl:3,xs:7,children:Object(a.jsxs)("div",{className:"footer",children:[Object(a.jsxs)("span",{className:"footer__content",children:["\xa9 ",(new Date).getFullYear()," Pawe\u0142 Del Priore"]}),Object(a.jsx)(w.a.Link,{href:"http://www.linkedin.com/in/pawe%C5%82-del-priore-b55bbb1a8",target:"_blank",children:Object(a.jsx)(_.a,{className:"footer__icon",icon:k.a})})]})}),Object(a.jsx)(g.a,{xl:2,xs:1})]})]})}),E=n(8),T={loading:!1,predictResult:"",error:""},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(i.a)(Object(i.a)({},e),{},{loading:t.payload});case h:return Object(i.a)(Object(i.a)(Object(i.a)({},e),T),{},{predictResult:t.payload});case x:return Object(i.a)(Object(i.a)({},e),{},{loading:!1,error:t.payload});case O:return T;default:return e}},J=Object(E.c)({prediction:B}),L=n(31),U=Object(E.d)(J,Object(E.a)(L.a));n(51);o.a.render(Object(a.jsx)(c.a,{store:U,children:Object(a.jsx)(A,{})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.10ca09cc.chunk.js.map