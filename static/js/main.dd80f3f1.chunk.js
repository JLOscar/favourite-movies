(this["webpackJsonpfavourite-movies"]=this["webpackJsonpfavourite-movies"]||[]).push([[0],{77:function(e,t,n){},78:function(e,t,n){},85:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(26),o=n.n(c),l=(n(77),n(78),n(134)),r=n(15),s=n(40),d=n(10),j=n(142),u=n(146),b=n(145),h=n(141),O=n(143),f=n(144),g=n(140),p=n(135),v=n(137),x=n(133),m=n(2),C=Object(l.a)({container:{display:"flex",flexDirection:"column",justifyContent:"flex-start",minWidth:600,minHeight:400,maxWidth:"auto",maxHeight:"auto",backgroundColor:"white",position:"relative"},close:{position:"absolute",top:10,left:10},dataContainer:{height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-around",marginTop:60,padding:20},input:{marginBottom:5}}),y=function(e){var t=C(),n=e.open,i=e.setDisplayAddMovie,c=e.addMovie,o=Object(a.useState)(""),l=Object(d.a)(o,2),r=l[0],s=l[1],j=Object(a.useState)(0),u=Object(d.a)(j,2),b=u[0],h=u[1],O=Object(a.useState)(0),f=Object(d.a)(O,2),g=f[0],y=f[1],N=Object(a.useState)(""),S=Object(d.a)(N,2),k=S[0],w=S[1],D=Object(a.useState)(0),M=Object(d.a)(D,2),B=M[0],T=M[1];return Object(m.jsx)(v.a,{open:n,children:Object(m.jsxs)("div",{className:t.container,children:[Object(m.jsx)("div",{className:t.close,children:Object(m.jsx)(p.a,{onClick:function(){i(!1)},children:"X"})}),Object(m.jsxs)("div",{className:t.dataContainer,children:[Object(m.jsx)(x.a,{className:t.input,placeholder:"Title",onChange:function(e){return s(e.target.value)}}),Object(m.jsx)(x.a,{className:t.input,placeholder:"Year",onChange:function(e){return h(+e.target.value)}}),Object(m.jsx)(x.a,{className:t.input,placeholder:"Rating",onChange:function(e){return y(e.target.value)}}),Object(m.jsx)(x.a,{className:t.input,placeholder:"Actor",onChange:function(e){return w(e.target.value)}})]}),Object(m.jsx)(p.a,{onClick:function(){console.log({title:r,year:b,rating:g,actor:k});var e=null;console.log({errStr:e}),c({id:B,title:r,year:b,rating:g,actor:k}),T(B+1),i(!1)},children:"Add"})]})})},N=Object(l.a)({container:{display:"flex",flexDirection:"column",justifyContent:"flex-start",minWidth:600,minHeight:400,maxWidth:"auto",maxHeight:"auto",backgroundColor:"white",position:"relative"},close:{position:"absolute",top:10,left:10},dataContainer:{height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-around",marginTop:60,padding:20},input:{marginBottom:5}}),S=function(e){var t=N(),n=e.open,i=e.setDisplayEditMovie,c=e.movie,o=e.updateMovies,l=Object(a.useState)(null),r=Object(d.a)(l,2),s=r[0],j=r[1],u=Object(a.useState)(null===s||void 0===s?void 0:s.title),b=Object(d.a)(u,2),h=b[0],O=b[1],f=Object(a.useState)(null===s||void 0===s?void 0:s.year),g=Object(d.a)(f,2),C=g[0],y=g[1],S=Object(a.useState)(null===s||void 0===s?void 0:s.rating),k=Object(d.a)(S,2),w=k[0],D=k[1],M=Object(a.useState)(null),B=Object(d.a)(M,2),T=B[0],A=B[1];Object(a.useEffect)((function(){j(c)}),[c]),Object(a.useEffect)((function(){s&&(O(s.title),y(s.year),D(s.rating),A(s.actor))}),[s,n]);var E=function(){i(!1)};return c?Object(m.jsx)(v.a,{open:n,children:Object(m.jsxs)("div",{className:t.container,children:[Object(m.jsx)("div",{className:t.close,children:Object(m.jsx)(p.a,{onClick:E,children:"X"})}),Object(m.jsxs)("div",{className:t.dataContainer,children:[Object(m.jsx)(x.a,{className:t.input,placeholder:"Title",value:h,onChange:function(e){return O(e.target.value)}}),Object(m.jsx)(x.a,{className:t.input,placeholder:"Year",value:C,onChange:function(e){return y(+e.target.value)}}),Object(m.jsx)(x.a,{className:t.input,placeholder:"Rating",value:w,onChange:function(e){return D(e.target.value)}}),Object(m.jsx)(x.a,{className:t.input,placeholder:"Actor",value:T,onChange:function(e){return A(e.target.value)}})]}),Object(m.jsx)(p.a,{onClick:function(){o({id:s.id,title:h,year:C,rating:w,actor:T}),E()},children:"Confirm"})]})}):null},k=Object(l.a)({container:{display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"center",width:"100%",margin:"auto 40px"},row:{},rowBtns:{display:"flex",justifyContent:"space-around"},addBtn:{marginTop:20,width:200},addBtnWrapper:{marginTop:20}}),w=function(e){var t=k(),n=Object(a.useState)([]),i=Object(d.a)(n,2),c=i[0],o=i[1],l=Object(a.useState)(!1),v=Object(d.a)(l,2),x=v[0],C=v[1],N=Object(a.useState)(!1),w=Object(d.a)(N,2),D=w[0],M=w[1],B=Object(a.useState)(null),T=Object(d.a)(B,2),A=T[0],E=T[1];Object(a.useEffect)((function(){o()}),[]);return Object(m.jsxs)("div",{className:t.container,children:[Object(m.jsx)(y,{open:x,setDisplayAddMovie:C,addMovie:function(e){(null===c||void 0===c?void 0:c.length)?o([].concat(Object(r.a)(c),[e])):o([e])}}),Object(m.jsx)(S,{open:D,setDisplayEditMovie:M,updateMovies:function(e){console.log({updatedMovie:e});var t,n=[],a=Object(s.a)(c);try{for(a.s();!(t=a.n()).done;){var i=t.value;console.log("movie.id",i.id),console.log(e),i.id===e.id?n.push(e):n.push(i)}}catch(l){a.e(l)}finally{a.f()}console.log(n),o(n)},movie:A}),c?Object(m.jsx)(h.a,{component:g.a,children:Object(m.jsxs)(j.a,{sx:{minWidth:650},"aria-label":"simple table",children:[Object(m.jsx)(O.a,{children:Object(m.jsxs)(f.a,{children:[Object(m.jsx)(b.a,{children:"Title"}),Object(m.jsx)(b.a,{align:"right",children:"Year"}),Object(m.jsx)(b.a,{align:"right",children:"Rating (1-10)"}),Object(m.jsx)(b.a,{align:"right",children:"Actor"})]})}),Object(m.jsx)(u.a,{children:c.map((function(e,n){return Object(m.jsxs)(f.a,{className:t.row,sx:{"&:last-child td, &:last-child th":{border:0}},children:[Object(m.jsx)(b.a,{component:"th",scope:"row",children:e.title}),Object(m.jsx)(b.a,{align:"right",children:e.year}),Object(m.jsx)(b.a,{align:"right",children:e.rating}),Object(m.jsx)(b.a,{align:"right",children:e.actor}),Object(m.jsx)(b.a,{align:"right",children:Object(m.jsxs)("div",{className:t.rowBtns,children:[Object(m.jsx)(p.a,{variant:"contained",onClick:function(){return function(e){var t,n=Object(s.a)(c);try{for(n.s();!(t=n.n()).done;){var a=t.value;a.id===e&&(E(a),M(!0))}}catch(i){n.e(i)}finally{n.f()}}(e.id)},children:"Edit"}),Object(m.jsx)(p.a,{style:{backgroundColor:"red"},variant:"contained",onClick:function(){return function(e){var t,n=[],a=Object(s.a)(c);try{for(a.s();!(t=a.n()).done;){var i=t.value;i.id!==e&&n.push(i)}}catch(l){a.e(l)}finally{a.f()}o(n)}(e.id)},children:"X"})]})})]},e.id)}))})]})}):Object(m.jsx)("div",{children:'Det finns inga filmer i databasen, l\xe4gg till via knappen "Add Movie"'}),Object(m.jsx)("div",{className:t.addBtnWrapper,children:Object(m.jsx)(p.a,{className:t.addBtn,variant:"contained",onClick:function(){return C(!0)},children:"Add movie"})})]})},D=Object(l.a)({root:{position:"absolute",top:0,bottom:0,left:0,right:0,padding:20,display:"flex",alignItems:"center",justifyContent:"center",overflowY:"hidden"}});var M=function(){var e=D();return Object(m.jsx)("div",{className:e.root,children:Object(m.jsx)(w,{})})},B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,148)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),i(e),c(e),o(e)}))};o.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(M,{})}),document.getElementById("root")),B()}},[[85,1,2]]]);
//# sourceMappingURL=main.dd80f3f1.chunk.js.map