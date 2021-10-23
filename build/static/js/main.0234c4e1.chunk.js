(this.webpackJsonppart3=this.webpackJsonppart3||[]).push([[0],{24:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),r=n(18),s=n.n(r),o=(n(24),n(0)),i=function(){return Object(o.jsxs)("nav",{className:"navbar navbar-expand-md bg-dark navbar-dark",children:[Object(o.jsxs)("a",{className:"navbar-brand mr-lg-auto",href:"https://polar-mountain-74733.herokuapp.com/",children:[Object(o.jsx)("img",{src:"https://static.thenounproject.com/png/215839-200.png",alt:"logo",style:{width:"50px",height:"40px"}}),"  ",Object(o.jsx)("span",{children:"ShareIdea"})]}),Object(o.jsxs)("ul",{className:"nav nav-tabs",role:"tablist",children:[Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link active","data-toggle":"tab",href:"#home",children:"Home"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link","data-toggle":"tab",href:"#menu1",children:"About"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link","data-toggle":"tab",href:"#menu2",children:"Contact Us"})})]})]})},l=n(9),d=n(4),b=n(8),h=n(3),u=n.n(h),j="/api/blogs",m=function(){return u.a.get(j).then((function(e){return e.data}))},p=function(e){return u.a.post(j,e).then((function(e){return e.data}))},f=function(e,t){return u.a.put("".concat(j,"/").concat(e),t).then((function(e){return e.data}))},O=function(e){return u.a.delete("".concat(j,"/").concat(e)).then((function(e){return e.data}))},g=function(e){var t=e.blog,n=e.setBlog,a=e.bSet,c=e.bSetter,r=function(e){var a=e.target.name,c=e.target.value;n(Object(b.a)(Object(b.a)({},t),{},Object(d.a)({},a,c)))};return Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==t.author&&""!==t.title&&""!==t.description?p(t).then((function(e){c(a.concat(e)),n({author:"",title:"",description:"",like:0})})).catch((function(e){return console.log(e.response.data)})):console.log("missing content")},children:[Object(o.jsxs)("div",{className:"form-row",children:[Object(o.jsxs)("div",{className:"col",children:[Object(o.jsx)("label",{htmlFor:"blogger",className:"mr-sm-2",children:"Name:"}),Object(o.jsx)("input",{type:"text",value:t.author,onChange:r,className:"form-control",id:"blogger",placeholder:"Enter your name",name:"author"})]}),Object(o.jsxs)("div",{className:"col",children:[Object(o.jsx)("label",{htmlFor:"title",className:"mr-sm-2",children:"Title:"}),Object(o.jsx)("input",{type:"text",value:t.title,onChange:r,className:"form-control",placeholder:"Enter title",id:"title",name:"title"})]})]}),Object(o.jsx)("label",{htmlFor:"comment",className:"mb-2 mr-sm-2",children:"Description:"}),Object(o.jsx)("textarea",{onChange:r,value:t.description,className:"form-control mb-2 mr-sm-2",rows:"5",id:"comment",name:"description"}),Object(o.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]})},x=n(19),v=function(e){var t=e.blog,n=e.setBlogArray;return Object(o.jsx)("div",{className:"mt-3",children:t.map((function(e,a){return Object(o.jsxs)("div",{className:"bg-secondary rounded mb-3",children:[Object(o.jsxs)("div",{className:"toast-header",children:[Object(o.jsxs)("h3",{className:"mr-auto text-primary",children:[" ",Object(o.jsxs)("strong",{children:[" ",e.author," "]})," "]}),Object(o.jsx)("button",{className:"close",onClick:function(){return function(e){var a=window.confirm("Are you sure you want to remove it?");console.log("return true if",a),!0===a&&O(e).then((function(a){var c=t.filter((function(t){return t.id!==e}));console.log("check",e),n(c)})).catch((function(e){return console.log(e.response.data)}))}(e.id)},children:"\xd7"})]}),Object(o.jsxs)("div",{className:"toast-body pt-0",children:[Object(o.jsxs)("h4",{children:[" ",e.title," "]}),Object(o.jsx)("div",{className:"pb-2",children:e.description}),Object(o.jsxs)("span",{className:"badge badge-pill badge-info",onClick:function(){return function(e){var a,c,r=t.filter((function(t){return t.id===e})),s=Object(x.a)(r.values());try{for(s.s();!(c=s.n()).done;)a=c.value}catch(o){s.e(o)}finally{s.f()}a.like+=1,f(e,a).then((function(a){n(t.filter((function(t){return t.id!==e?t:a})))})).catch((function(e){return console.log(e.response.data)}))}(e.id)},children:[Object(o.jsx)("i",{className:"fas fa-thumbs-up"}),"  ",e.like,"   "]})]})]},a)}))})},N=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)({author:"",title:"",description:"",like:0}),s=Object(l.a)(r,2),i=s[0],d=s[1];return Object(a.useEffect)((function(){m().then((function(e){return c(e)}))}),[]),Object(o.jsxs)("div",{className:"tab-content",children:[Object(o.jsxs)("div",{id:"home",className:"container tab-pane active",children:[Object(o.jsx)(g,{blog:i,setBlog:d,bSet:n,bSetter:c}),Object(o.jsx)(v,{blog:n,setBlogArray:c})]}),Object(o.jsx)("div",{id:"menu1",className:"container tab-pane fade",children:Object(o.jsx)("p",{children:"ShareIdea\u2019s mission is to share and grow the world\u2019s knowledge. Not all knowledge can be written down, but much of that which can be, still isn't. It remains in people\u2019s heads or only accessible if you know the right people. We want to connect the people who have knowledge to the people who need it, to bring together people with different perspectives so they can understand each other better, and to empower everyone to share their knowledge for the benefit of the rest of the world."})}),Object(o.jsxs)("div",{id:"menu2",className:"container tab-pane fade",children:[Object(o.jsx)("p",{children:"email: akashsharma.zak@gmail.com "}),Object(o.jsx)("p",{children:"contact: 9625703834"})]})]})},w=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)(i,{}),Object(o.jsx)(N,{})]})};s.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(w,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.0234c4e1.chunk.js.map