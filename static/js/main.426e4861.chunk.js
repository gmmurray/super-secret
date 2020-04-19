(this["webpackJsonpsuper-secret"]=this["webpackJsonpsuper-secret"]||[]).push([[0],{28:function(e,t,a){e.exports=a(55)},55:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(23),s=a.n(c),l=(a(33),a(57)),o=a(58),u=a(9),m=a(11),p=a(6),i=a.n(p),h=a(7),b=a(8),d=a(59),f=a(26),w=a(60),E=a(56),g=a(24),y=a.n(g),v=function(e,t,a){return{jsonrpc:"2.0",method:"generateStrings",params:{apiKey:"13ff0ba2-19bd-4000-90da-c832f4287153",n:1,length:e,characters:t,replacement:a},id:"24"}},k=function(){var e=Object(h.a)(i.a.mark((function e(t){var a,r,n,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.length,r=t.characters,n=t.replacement,e.prev=1,e.next=4,y.a.post("https://api.random.org/json-rpc/2/invoke",v(a,r,n));case 4:c=e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),c=void 0;case 10:return e.abrupt("return",c);case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(h.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={length:t.length,characters:O(x(t)),replacement:t.replacement},e.next=3,k(a);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(e){var t="";return e.filter((function(e){return e.enabled})).map((function(e){return t+=e.characters})),t},x=function(e){return[{enabled:e.lowercase,characters:"abcdefghijklmnopqrstuvwxyz"},{enabled:e.uppercase,characters:"ABCDEFGHIJKLMNOPQRSTUVWXYZ"},{enabled:e.numbers,characters:"0123456789"},{enabled:e.symbols,characters:"!#$%&*"}]},C={lowercase:!0,uppercase:!1,numbers:!1,symbols:!1,length:6,replacement:!0},S=function(){var e=Object(r.useState)("Choose options below..."),t=Object(b.a)(e,2),a=t[0],c=t[1],s=Object(r.useState)(!1),l=Object(b.a)(s,2),o=l[0],p=l[1],g=Object(r.useState)(C),y=Object(b.a)(g,2),v=y[0],k=y[1],O=Object(r.useState)(!0),x=Object(b.a)(O,2),S=x[0],N=x[1];Object(r.useEffect)((function(){v.lowercase||v.uppercase||v.numbers||v.symbols?N(!0):N(!1)}),[v.lowercase,v.uppercase,v.numbers,v.symbols]);var G=function(){var e=Object(h.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),e.next=3,j(v);case 3:t=e.sent,c(t.data.result.random.data[0]),p(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(e,t){k(Object(m.a)({},v,Object(u.a)({},t,e.target.checked)))};return n.a.createElement(d.a,{onSubmit:function(e){e.preventDefault(),S&&G()}},n.a.createElement(d.a.Row,null,n.a.createElement(d.a.Group,{as:f.a,md:"12",controlId:"formPassword",className:"font-weight-bold"},n.a.createElement(d.a.Label,null,"Your password is:"),n.a.createElement(d.a.Control,{type:"text",value:a,readOnly:!0,focus:!0}))),n.a.createElement(d.a.Row,null,n.a.createElement(d.a.Group,{as:f.a,controlId:"formCharacters"},n.a.createElement(d.a.Label,null,"What kind of characters would you like?"),n.a.createElement(d.a.Check,{custom:!0,type:"switch",label:"Lowercase letters",name:"lowercase",id:"lowercase",checked:v.lowercase,onChange:function(e){return L(e,"lowercase")}}),n.a.createElement(d.a.Check,{custom:!0,type:"switch",label:"Uppercase letters",name:"uppercase",id:"uppercase",checked:v.uppercase,onChange:function(e){return L(e,"uppercase")}}),n.a.createElement(d.a.Check,{custom:!0,type:"switch",label:"Numbers",name:"numbers",id:"numbers",checked:v.numbers,onChange:function(e){return L(e,"numbers")}}),n.a.createElement(d.a.Check,{custom:!0,type:"switch",label:"Symbols",name:"symbols",id:"symbols",checked:v.symbols,onChange:function(e){return L(e,"symbols")}}),S?"":n.a.createElement(d.a.Text,{className:"text-danger"},"Please choose at least one character type"),n.a.createElement(d.a.Check,{custom:!0,type:"switch",label:"Repeating characters allowed",name:"replacement",id:"replacement",checked:v.replacement,onChange:function(e){return L(e,"replacement")}})),n.a.createElement(d.a.Group,{as:f.a,controlId:"formLength"},n.a.createElement(d.a.Label,null,"How long would you like the password to be?"),n.a.createElement(d.a.Control,{custom:!0,type:"range",min:"5",max:"20",value:v.length,onChange:function(e){k(Object(m.a)({},v,{length:e.target.value}))}}),n.a.createElement(d.a.Text,{className:"text-muted"},v.length," characters long"))),n.a.createElement(d.a.Row,null,n.a.createElement(w.a,{type:"submit",variant:"success",disabled:o,className:"mx-auto"},"Generate"," ",o?n.a.createElement(E.a,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"}):"")))};var N=function(){return n.a.createElement(l.a,null,n.a.createElement(o.a,{className:"mt-2"},n.a.createElement("h1",null,"Super Secret Password Generator"),n.a.createElement("p",null,"Fill out the simple form below to generate something a little better than password123")),n.a.createElement(S,null))};s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(N,null)),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.426e4861.chunk.js.map