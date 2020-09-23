(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{20:function(e,t,a){e.exports=a(52)},25:function(e,t,a){},26:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(18),r=a.n(c),o=(a(25),a(26),a(27),a(1)),i=a(4),s=a(3),m=a.n(s),u=(a(51),function(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),c=a[0],r=a[1];return Object(n.useEffect)((function(){m.a.get("http://localhost:8000/api/pets").then((function(e){return r(e.data.results)})).catch((function(e){return console.log(e)}))}),[]),l.a.createElement("div",null,l.a.createElement("h3",null,"These pets are looking for a good home"),l.a.createElement(o.a,{to:"/new"},"Add a pet to the Shelter"),l.a.createElement("table",{className:"col-6 mx-auto"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Type"),l.a.createElement("th",null,"Actions"))),l.a.createElement("tbody",null,c.map((function(e,t){return l.a.createElement("tr",{key:t},l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.type),l.a.createElement("td",null,l.a.createElement(o.a,{to:"/pet/".concat(e._id)},"Details")," | ",l.a.createElement(o.a,{to:"/edit/".concat(e._id)},"Edit")))})))))}),p=a(5),h=a(7),d=function(e){var t=e.inputs,a=e.handleInputs,n=e.handleSubmit,c=e.errors,r=e.submitValue,o=t.name,i=t.type,s=t.description,m=t.skillOne,u=t.skillTwo,p=t.skillThree;return l.a.createElement("div",null,l.a.createElement("form",{className:"col-5 mx-auto bg-light p-4 rounded",onSubmit:n},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"name"},"Pet Name:"),l.a.createElement("input",{className:"form-control",type:"text",name:"name",id:"name",onChange:a,value:o}),l.a.createElement("span",{className:"text-danger"},c.name?c.name.message:"")),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"type"},"Pet Type:"),l.a.createElement("input",{className:"form-control",type:"text",name:"type",id:"type",onChange:a,value:i}),l.a.createElement("span",{className:"text-danger"},c.type?c.type.message:"")),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"description"},"Pet Description:"),l.a.createElement("input",{className:"form-control",type:"text",name:"description",id:"description",onChange:a,value:s}),l.a.createElement("span",{className:"text-danger"},c.description?c.description.message:"")),l.a.createElement("h6",null,"Skills (Optional):"),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"skillOne"},"skill One:"),l.a.createElement("input",{className:"form-control",type:"text",name:"skillOne",id:"skillOne",onChange:a,value:m})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"skillTwo"},"skill Two:"),l.a.createElement("input",{className:"form-control",type:"text",name:"skillTwo",id:"skillTwo",onChange:a,value:u})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"skillThree"},"skill Three:"),l.a.createElement("input",{className:"form-control",type:"text",name:"skillThree",id:"skillThree",onChange:a,value:p})),l.a.createElement("input",{className:"btn btn-success",type:"submit",value:r})))},E=function(e){var t={name:"",type:"",description:"",skillOne:"",skillTwo:"",skillThree:""},a={name:"",type:"",description:"",skillOne:"",skillTwo:"",skillThree:""},c=Object(n.useState)(t),r=Object(i.a)(c,2),s=r[0],u=r[1],E=Object(n.useState)(a),f=Object(i.a)(E,2),b=f[0],g=f[1];return l.a.createElement("div",null,l.a.createElement("h2",null,"Know a pet needing a home?"),l.a.createElement(o.a,{to:"/"},"Back to home"),l.a.createElement(d,{inputs:s,handleInputs:function(e){u(Object(h.a)(Object(h.a)({},s),{},Object(p.a)({},e.target.name,e.target.value)))},handleSubmit:function(e){e.preventDefault(),g(a),m.a.post("http://localhost:8000/api/create/pet",s).then((function(e){e.data.results?(u(t),Object(o.c)("/")):(console.log(e.data),g(e.data))})).catch((function(e){return console.log(e)}))},errors:b,submitValue:"Add Pet"}))},f=function(e){var t=Object(n.useState)({name:"",type:"",description:"",skillOne:"",skillTwo:"",skillThree:""}),a=Object(i.a)(t,2),c=a[0],r=a[1];Object(n.useEffect)((function(){m.a.get("http://localhost:8000/api/pet/".concat(e.id)).then((function(e){return r(e.data.results)})).catch((function(e){return console.log(e)}))}),[e]);return l.a.createElement("div",null,l.a.createElement("h2",null,"Details about: ",c.name),l.a.createElement(o.a,{to:"/"},"Back to home"),l.a.createElement("div",{className:"col-4 mx-auto p-5"},l.a.createElement("h4",null,"Pet Type: ",c.type),l.a.createElement("h4",null,"Description: ",c.description),l.a.createElement("h4",null,"Skills:"),l.a.createElement("ul",{className:"list-group"},l.a.createElement("li",{className:"list-group-item"},c.skillOne),l.a.createElement("li",{className:"list-group-item"},c.skillTwo),l.a.createElement("li",{className:"list-group-item"},c.skillThree)),l.a.createElement("br",null),l.a.createElement("button",{className:"btn btn-warning btn-outline-success",onClick:function(){m.a.delete("http://localhost:8000/api/delete/pet/".concat(e.id)).then((function(e){return Object(o.c)("/")})).catch((function(e){return console.log(e)}))}},"Adopt ",c.name)))},b=function(e){var t={name:"",type:"",description:"",skillOne:"",skillTwo:"",skillThree:""},a={name:"",type:"",description:"",skillOne:"",skillTwo:"",skillThree:""},c=Object(n.useState)(t),r=Object(i.a)(c,2),s=r[0],u=r[1],E=Object(n.useState)(a),f=Object(i.a)(E,2),b=f[0],g=f[1];return Object(n.useEffect)((function(){m.a.get("http://localhost:8000/api/pet/".concat(e.id)).then((function(e){return u(e.data.results)})).catch((function(e){return console.log(e)}))}),[e]),l.a.createElement("div",null,l.a.createElement("h2",null,"Edit ",s.name),l.a.createElement(o.a,{to:"/"},"Back to home"),l.a.createElement(d,{inputs:s,handleInputs:function(e){u(Object(h.a)(Object(h.a)({},s),{},Object(p.a)({},e.target.name,e.target.value)))},handleSubmit:function(n){n.preventDefault(),g(a),m.a.put("http://localhost:8000/api/update/pet/".concat(e.id),s).then((function(a){a.data.results?(u(t),Object(o.c)("/pet/".concat(e.id))):(console.log(a.data),g(a.data))})).catch((function(e){return console.log(e)}))},errors:b,submitValue:"Edit Pet"}))};var g=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("h1",null,"Pet Shelter"),l.a.createElement(o.b,null,l.a.createElement(u,{path:"/"}),l.a.createElement(E,{path:"/new"}),l.a.createElement(f,{path:"/pet/:id"}),l.a.createElement(b,{path:"/edit/:id"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.1c58446e.chunk.js.map