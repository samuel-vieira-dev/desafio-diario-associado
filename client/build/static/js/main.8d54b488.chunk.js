(this["webpackJsonpinsatgram-clone"]=this["webpackJsonpinsatgram-clone"]||[]).push([[0],{102:function(e,t,c){},103:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),r=c(18),s=c.n(r),o=c(67),i=c(8),l=c(9),j=c(15),u=c(7),b=c(45),d=c(1),p=c(137).a.create({withCredentials:!0}),h=(c(96),c(2));function x(){var e=Object(n.useState)(null),t=Object(u.a)(e,2),c=t[0],a=t[1];Object(n.useEffect)((function(){Object(j.a)(Object(l.a)().mark((function e(){var t;return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.get("//localhost:5000/@me");case 3:t=e.sent,a(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Not authenticated");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}),[]);var r=function(){var e=Object(j.a)(Object(l.a)().mark((function e(){return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.post("//localhost:5000/logout");case 2:window.location.reload();case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s="Di\xe1rios Associados";return null!=c&&(s="Ol\xe1, ".concat(c.username)),Object(h.jsx)("header",{className:"header",children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("h2",{children:s}),Object(h.jsxs)("div",{className:"menu-icons",children:[Object(h.jsx)(d.b.Provider,{value:{size:"26px"},children:Object(h.jsx)("div",{children:Object(h.jsx)("button",{onClick:function(){return r()},children:Object(h.jsx)(b.b,{})})})}),Object(h.jsx)("img",{className:"img-user",src:"https://consumersiteimages.trustpilot.net/business-units/4d42dbb300006400050e7f5d-198x149-1x.jpg"})]})]})})}c(98),c(99);function O(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){fetch("http://127.0.0.1:5000/feed").then((function(e){return e.json()})).then((function(e){a(e)})).catch((function(e){throw new Error(e)}))}),[]),Object(h.jsx)(h.Fragment,{children:c.map((function(e,t){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"post",children:[Object(h.jsxs)("header",{className:"header-post",children:[Object(h.jsxs)("div",{className:"infos-post",children:[Object(h.jsx)("img",{className:"img-header-post",src:"https://consumersiteimages.trustpilot.net/business-units/4d42dbb300006400050e7f5d-198x149-1x.jpg"}),Object(h.jsx)("span",{children:e.username})]}),Object(h.jsx)(b.a,{onClick:function(t){return c=e,void(window.location.href="/update-post/".concat(c.id));var c},style:{color:"#1976d2",cursor:"pointer"}},t),Object(h.jsx)(b.c,{onClick:function(t){return c=e,p.delete("http://127.0.0.1:5000/delete-post",{headers:{"Content-Type":"application/json"},data:{id:c.id}}),void window.location.reload();var c},style:{color:"red",cursor:"pointer"}},t)]}),Object(h.jsx)("div",{className:"img-post",children:Object(h.jsx)("img",{src:e.thumbnail})}),Object(h.jsxs)("div",{className:"footer-post",children:[Object(h.jsx)("div",{className:"legend",children:Object(h.jsxs)("p",{children:[Object(h.jsx)("span",{children:e.username})," ",e.title]})}),Object(h.jsx)("div",{className:"time-post",children:Object(h.jsxs)("time",{children:[e.hour,"h"]})})]})]})})}))})}var m=c(141),f=c(139),v=c(142),g=c(138),w={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #dbdbdb",borderRadius:"5%",boxShadow:20,p:4,textAlign:"center",padding:"35px"};function C(){var e=n.useState(!0),t=Object(u.a)(e,2),c=t[0],a=t[1];return Object(h.jsx)("div",{onLoad:function(){return a(!0)},children:Object(h.jsx)(g.a,{open:c,onClose:function(){return a(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(h.jsxs)(m.a,{sx:w,children:[Object(h.jsx)(v.a,{id:"modal-modal-title",variant:"h6",component:"h2",children:"Voc\xea precisa fazer login para acessar essa p\xe1gina."}),Object(h.jsxs)(v.a,{id:"modal-modal-description",sx:{mt:2},children:[Object(h.jsx)(f.a,{children:Object(h.jsx)("a",{href:"/login",children:"Fazer Login"})}),Object(h.jsx)(f.a,{children:Object(h.jsx)("a",{href:"/login",children:"Criar conta"})})]})]})})})}var N=function(){var e=Object(n.useState)(),t=Object(u.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){Object(j.a)(Object(l.a)().mark((function e(){var t;return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.get("//localhost:5000/@me");case 3:t=e.sent,a(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Not authenticated");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}),[]),null!=c?Object(h.jsxs)("div",{className:"app",children:[Object(h.jsx)(x,{}),Object(h.jsxs)("div",{className:"MainGrid",children:[Object(h.jsx)("div",{className:"first-column",style:{gridArea:"firstColumn"},children:Object(h.jsx)(O,{})}),Object(h.jsx)("div",{className:"createPostButton",children:Object(h.jsx)(f.a,{variant:"contained",onClick:function(){window.location.href="/create-post"},children:"Criar Publica\xe7\xe3o"})})]})]}):Object(h.jsxs)("div",{className:"app",style:{filter:"blur(3px)"},children:[Object(h.jsx)(C,{}),Object(h.jsx)(x,{}),Object(h.jsxs)("div",{className:"MainGrid",children:[Object(h.jsx)("div",{className:"first-column",style:{gridArea:"firstColumn"},children:Object(h.jsx)(O,{})}),Object(h.jsx)("div",{className:"createPostButton",children:Object(h.jsx)(f.a,{variant:"contained",onClick:function(){window.location.href="/create-post"},children:"Criar Publica\xe7\xe3o"})})]})]})},y=(c(63),c(64),c(12));var k=function(){var e=Object(n.useState)("tab1"),t=Object(u.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(""),s=Object(u.a)(r,2),o=s[0],i=s[1],b=Object(n.useState)(""),d=Object(u.a)(b,2),x=d[0],O=d[1],m=function(){var e=Object(j.a)(Object(l.a)().mark((function e(){var t;return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(o,x),e.prev=1,e.next=4,p.post("//localhost:5000/login",{username:o,password:x});case 4:t=e.sent,console.log(t),window.location.href="/",e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),401===e.t0.response.status&&alert("Invalid credentials");case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(j.a)(Object(l.a)().mark((function e(){var t;return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.post("//localhost:5000/register",{username:o,password:x},{withCredentials:!1});case 3:t=e.sent,console.log(t),window.location.reload(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),401===e.t0.response.status?alert("Invalid credentials"):409===e.t0.response.status&&alert("Esse usu\xe1rio j\xe1 existe.");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),v=function(e){e!==c&&a(e)};return Object(h.jsxs)(y.d,{className:"p-3 my-5 d-flex flex-column w-50",children:[Object(h.jsx)("h1",{children:"Seja Bem-vindo!"}),Object(h.jsx)("br",{}),Object(h.jsxs)(y.g,{pills:!0,justify:!0,className:"mb-3 d-flex flex-row justify-content-between",children:[Object(h.jsx)(y.i,{children:Object(h.jsx)(y.j,{style:{border:"1px solid #bdbdbd"},onClick:function(){return v("tab1")},active:"tab1"===c,children:"Fazer Login"})}),Object(h.jsx)(y.i,{children:Object(h.jsx)(y.j,{style:{border:"1px solid #bdbdbd"},onClick:function(){return v("tab2")},active:"tab2"===c,children:"Criar Conta"})})]}),Object(h.jsxs)(y.h,{children:[Object(h.jsxs)(y.k,{show:"tab1"===c,children:[Object(h.jsx)(y.e,{wrapperClass:"mb-4",label:"username",id:"form1",type:"username",value:o,onChange:function(e){return i(e.target.value)}}),Object(h.jsx)(y.e,{wrapperClass:"mb-4",label:"password",id:"form2",type:"password",value:x,onChange:function(e){return O(e.target.value)}}),Object(h.jsx)(y.a,{className:"mb-4 w-100",onClick:function(){return m()},children:"Fazer Login"})]}),Object(h.jsxs)(y.k,{show:"tab2"===c,children:[Object(h.jsx)(y.e,{wrapperClass:"mb-4",label:"Username",id:"form1",type:"text",value:o,onChange:function(e){return i(e.target.value)}}),Object(h.jsx)(y.e,{wrapperClass:"mb-4",label:"Password",id:"form1",type:"password",value:x,onChange:function(e){return O(e.target.value)}}),Object(h.jsx)("div",{className:"d-flex justify-content-center mb-4",children:Object(h.jsx)(y.b,{name:"flexCheck",id:"flexCheckDefault",label:"Eu concordo que li e aceito os termos de uso."})}),Object(h.jsx)(y.a,{className:"mb-4 w-100",onClick:function(){return f()},children:"Criar conta"})]})]})]})};var S=function(){var e=Object(n.useState)(),t=Object(u.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(),s=Object(u.a)(r,2),o=s[0],i=s[1],b=Object(n.useState)(),d=Object(u.a)(b,2),O=d[0],m=d[1],v=function(){var e=Object(j.a)(Object(l.a)().mark((function e(){var t;return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(c,o),e.prev=1,e.next=4,p.post("//localhost:5000/create-post",{title:c,hour:o,thumbnail:O});case 4:t=e.sent,console.log(t),window.location.href="/",e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),401===e.t0.response.status&&alert("Erro na cria\xe7\xe3o do post");case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"app",children:[Object(h.jsx)(x,{}),Object(h.jsxs)(y.d,{className:"p-3 my-5 d-flex flex-column w-50",children:[Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsxs)(y.f,{children:[Object(h.jsx)(y.c,{col:"6",children:Object(h.jsx)(y.e,{wrapperClass:"mb-4",label:"T\xedtulo da Publica\xe7\xe3o",id:"title",type:"text",value:c,onChange:function(e){return a(e.target.value)}})}),Object(h.jsx)(y.c,{col:"6",children:Object(h.jsx)(y.e,{wrapperClass:"mb-4",label:"Hor\xe1rio",id:"hour",type:"text",value:o,onChange:function(e){return i(e.target.value)}})})]}),Object(h.jsx)(y.f,{children:Object(h.jsx)(y.c,{col:"12",children:Object(h.jsx)(y.e,{wrapperClass:"mb-4",label:"Caminho da Imagem j\xe1 hospedada. (Ex.: https://aws.dominio.com/imagens/exemplo.jpg)",id:"thumbnail",type:"text",value:O,onChange:function(e){return m(e.target.value)}})})}),Object(h.jsx)("div",{className:"createPostButton",children:Object(h.jsx)(f.a,{variant:"contained",onClick:function(){return v()},children:"Criar Publica\xe7\xe3o"})})]})]})};var E=function(){var e=Object(n.useState)(),t=Object(u.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(),s=Object(u.a)(r,2),o=s[0],b=s[1],d=Object(n.useState)(),O=Object(u.a)(d,2),m=O[0],v=O[1],g=Object(i.n)().id;console.log(g);var w=function(){var e=Object(j.a)(Object(l.a)().mark((function e(){var t;return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(c,o),e.prev=1,e.next=4,p.put("//localhost:5000/update-post",{id:g,title:c,hour:o,thumbnail:m});case 4:t=e.sent,console.log(t),window.location.href="/",e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),200!==e.t0.response.status&&alert("Erro na atualiza\xe7\xe3o do post");case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"app",children:[Object(h.jsx)(x,{}),Object(h.jsxs)(y.d,{className:"p-3 my-5 d-flex flex-column w-50",children:[Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsxs)(y.f,{children:[Object(h.jsx)(y.c,{col:"6",children:Object(h.jsx)(y.e,{wrapperClass:"mb-4",label:"T\xedtulo da Publica\xe7\xe3o",id:"title",type:"text",value:c,onChange:function(e){return a(e.target.value)}})}),Object(h.jsx)(y.c,{col:"6",children:Object(h.jsx)(y.e,{wrapperClass:"mb-4",label:"Hor\xe1rio (Ex.: 15:45)",id:"hour",type:"text",value:o,onChange:function(e){return b(e.target.value)}})})]}),Object(h.jsx)(y.f,{children:Object(h.jsx)(y.c,{col:"12",children:Object(h.jsx)(y.e,{wrapperClass:"mb-4",label:"Caminho da Imagem j\xe1 hospedada. (Ex.: https://aws.dominio.com/imagens/exemplo.jpg)",id:"thumbnail",type:"text",value:m,onChange:function(e){return v(e.target.value)}})})}),Object(h.jsx)("div",{className:"UpdatePostButton",children:Object(h.jsx)(f.a,{variant:"contained",onClick:function(){return w()},children:"Atualizar Publica\xe7\xe3o"})})]})]})};c(102);var P=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(o.a,{children:Object(h.jsxs)(i.c,{children:[Object(h.jsx)(i.a,{path:"/",element:Object(h.jsx)(N,{})}),Object(h.jsx)(i.a,{path:"/login",element:Object(h.jsx)(k,{})}),Object(h.jsx)(i.a,{path:"/create-post",element:Object(h.jsx)(S,{})}),Object(h.jsx)(i.a,{path:"/update-post/:id",element:Object(h.jsx)(E,{})})]})})})};s.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(P,{})}),document.getElementById("root"))},96:function(e,t,c){},98:function(e,t,c){},99:function(e,t,c){}},[[103,1,2]]]);
//# sourceMappingURL=main.8d54b488.chunk.js.map