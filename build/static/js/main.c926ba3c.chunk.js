(this.webpackJsonppart3=this.webpackJsonppart3||[]).push([[0],{24:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),s=n(18),r=n.n(s),i=(n(24),n(0)),o=function(){return Object(i.jsxs)("nav",{className:"navbar navbar-expand-md bg-dark navbar-dark",children:[Object(i.jsxs)("a",{className:"navbar-brand mr-lg-auto",href:"https://polar-mountain-74733.herokuapp.com/",children:[Object(i.jsx)("img",{src:"https://static.thenounproject.com/png/215839-200.png",alt:"logo",style:{width:"50px",height:"40px"}}),"  ",Object(i.jsx)("span",{children:"ShareIdea"})]}),Object(i.jsxs)("ul",{className:"nav nav-tabs",role:"tablist",children:[Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)("a",{className:"nav-link active","data-toggle":"tab",href:"#home",children:"Home"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)("a",{className:"nav-link","data-toggle":"tab",href:"#menu1",children:"About"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)("a",{className:"nav-link","data-toggle":"tab",href:"#menu2",children:"Contact Us"})})]})]})},l=n(9),d=n(3),b=n(8),h=n(5),j=n.n(h),m="/api/blogs",u=function(){return j.a.get(m).then((function(e){return e.data}))},p=function(e){return j.a.post(m,e).then((function(e){return e.data}))},f=function(e,t){return j.a.put("".concat(m,"/").concat(e),t).then((function(e){return e.data}))},O=function(e){var t=e.blog,n=e.setBlog,a=e.bSet,c=e.bSetter,s=function(e){var a=e.target.name,c=e.target.value;n(Object(b.a)(Object(b.a)({},t),{},Object(d.a)({},a,c)))};return Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==t.author&&""!==t.title&&""!==t.description?p(t).then((function(e){c(a.concat(e)),n({author:"",title:"",description:"",like:0})})).catch((function(e){return console.log(e.response.data)})):console.log("missing content")},children:[Object(i.jsxs)("div",{className:"form-row",children:[Object(i.jsxs)("div",{className:"col",children:[Object(i.jsx)("label",{htmlFor:"blogger",className:"mr-sm-2",children:"Name:"}),Object(i.jsx)("input",{type:"text",value:t.author,onChange:s,className:"form-control",id:"blogger",placeholder:"Enter your name",name:"author"})]}),Object(i.jsxs)("div",{className:"col",children:[Object(i.jsx)("label",{htmlFor:"title",className:"mr-sm-2",children:"Title:"}),Object(i.jsx)("input",{type:"text",value:t.title,onChange:s,className:"form-control",placeholder:"Enter title",id:"title",name:"title"})]})]}),Object(i.jsx)("label",{htmlFor:"comment",className:"mb-2 mr-sm-2",children:"Description:"}),Object(i.jsx)("textarea",{onChange:s,value:t.description,className:"form-control mb-2 mr-sm-2",rows:"5",id:"comment",name:"description"}),Object(i.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]})},x=n(19),g=function(e){var t=e.blog,n=e.setBlogArray;return Object(i.jsx)("div",{className:"mt-3",children:t.map((function(e,a){return Object(i.jsxs)("div",{className:"bg-secondary rounded mb-3",children:[Object(i.jsx)("div",{className:"toast-header",children:Object(i.jsxs)("h3",{className:"mr-auto text-primary",children:[" ",Object(i.jsxs)("strong",{children:[" ",e.author," "]})," "]})}),Object(i.jsxs)("div",{className:"toast-body pt-0",children:[Object(i.jsxs)("h4",{children:[" ",e.title," "]}),Object(i.jsx)("div",{className:"pb-2",children:e.description}),Object(i.jsxs)("span",{className:"badge badge-pill badge-info",onClick:function(){return function(e){var a,c,s=t.filter((function(t){return t.id===e})),r=Object(x.a)(s.values());try{for(r.s();!(c=r.n()).done;)a=c.value}catch(i){r.e(i)}finally{r.f()}f(e,a).then((function(a){n(t.filter((function(t){return t.id!==e?t:a})))})).catch((function(e){return console.log(e.response.data)}))}(e.id)},children:[Object(i.jsx)("i",{className:"fas fa-thumbs-up"}),"  ",e.like,"   "]})]})]},a)}))})},v=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)({author:"",title:"",description:"",like:0}),r=Object(l.a)(s,2),o=r[0],d=r[1];return Object(a.useEffect)((function(){u().then((function(e){return c(e)}))}),[]),Object(i.jsxs)("div",{className:"tab-content",children:[Object(i.jsxs)("div",{id:"home",className:"container tab-pane active",children:[Object(i.jsx)(O,{blog:o,setBlog:d,bSet:n,bSetter:c}),Object(i.jsx)(g,{blog:n,setBlogArray:c})]}),Object(i.jsx)("div",{id:"menu1",className:"container tab-pane fade",children:Object(i.jsx)("p",{children:"ShareIdea\u2019s mission is to share and grow the world\u2019s knowledge. Not all knowledge can be written down, but much of that which can be, still isn't. It remains in people\u2019s heads or only accessible if you know the right people. We want to connect the people who have knowledge to the people who need it, to bring together people with different perspectives so they can understand each other better, and to empower everyone to share their knowledge for the benefit of the rest of the world."})}),Object(i.jsxs)("div",{id:"menu2",className:"container tab-pane fade",children:[Object(i.jsx)("p",{children:"email: akashsharma.zak@gmail.com "}),Object(i.jsx)("p",{children:"contact: 9625703834"})]})]})},N=function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)(o,{}),Object(i.jsx)(v,{})]})};r.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(N,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.c926ba3c.chunk.js.map