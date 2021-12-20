(this.webpackJsonptextutil=this.webpackJsonptextutil||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(5),s=n.n(r),l=(n(10),n(2)),o=(n(11),n(0));var i=n(4),b=n.n(i);function d(e){return Object(o.jsx)("div",{children:Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)("a",{className:"navbar-brand",href:"#",children:e.title}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarText",children:[Object(o.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})})}),Object(o.jsxs)("div",{className:"form-check form-switch text-".concat("dark"===e.mode?"light":"dark"),children:[Object(o.jsx)("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),Object(o.jsx)("label",{className:"form-check-label ",htmlFor:"flexSwitchCheckDefault",children:"Dark Mode"})]})]})]})})})}function j(e){var t=Object(a.useState)(""),n=Object(l.a)(t,2),c=n[0],r=n[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h1",{children:e.heading}),Object(o.jsx)("div",{className:"mb-3",children:Object(o.jsx)("textarea",{className:"form-control",value:c,onChange:function(e){r(e.target.value)},style:{backgroundColor:"dark"===e.mode?"#102542":"white",color:"dark"===e.mode?"white":"black"},id:"myBox",rows:"8"})}),Object(o.jsx)("button",{className:"btn btn-primary m-1",onClick:function(){var e=c.toUpperCase();r(e)},children:"Convert to uppercase"}),Object(o.jsx)("button",{className:"btn btn-warning m-1",onClick:function(){var e=c.toLowerCase();r(e)},children:"Convert to lowercase"}),Object(o.jsx)("button",{className:"btn btn-info m-1",onClick:function(){for(var e=c.split(" "),t=0;t<e.length;t++)e[t]=e[t].charAt(0).toUpperCase()+e[t].slice(1);var n=e.join(" ");r(n)},children:"Convert to Capitalize"}),Object(o.jsx)("button",{className:"btn btn-info m-1",onClick:function(){var e=document.getElementById("myBox");e.select(),navigator.clipboard.writeText(e.value)},children:"Copy Text"}),Object(o.jsx)("button",{className:"btn btn-info m-1",onClick:function(){var e=c.split(/[ ]+/);r(e.join(" "))},children:"Remove Extra spaces"}),Object(o.jsx)("button",{className:"btn btn-danger m-1",onClick:function(){r("")},children:"clear"})]}),Object(o.jsxs)("div",{className:"container my-4",children:[Object(o.jsx)("h2",{children:"Your Text Summary"}),Object(o.jsxs)("p",{children:[c.split(/\s+/).filter((function(e){return 0!==e.length})).length," words and ",c.length," characters"]}),Object(o.jsxs)("p",{children:[.008*c.split(" ").length," Minutes Read"]}),Object(o.jsx)("h2",{children:"Preview"}),Object(o.jsx)("p",{children:c.length>0?c:"Enter something in the textbox above to preview here"})]})]})}function h(e){return e.alert&&Object(o.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(o.jsxs)("strong",{children:[function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type),":"]})," ",e.alert.msg]})}d.prototype={title:b.a.string.isRequired,aboutText:b.a.string.isRequired},d.defaultProps={title:"Israil's code",aboutText:"About Us"};var u=function(){var e=Object(a.useState)("light"),t=Object(l.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(null),s=Object(l.a)(r,2),i=s[0],b=s[1],u=function(e,t){b({msg:e,type:t}),setTimeout((function(){b(null)}),1800)},m=function(){"dark"===n?(c("light"),document.body.style.backgroundColor="white",document.body.style.color="black",u("Light mode has been enabled","success"),document.title="TextUtils - light mode"):(c("dark"),document.body.style.backgroundColor="#102542",document.body.style.color="white",u("Dark mode has been enabled","success"),document.title="TextUtils - Dark mode")};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(d,{title:"TextUtils",mode:n,toggleMode:m}),Object(o.jsx)(h,{alert:i}),Object(o.jsx)("div",{className:"container my-3",children:Object(o.jsx)(j,{showAlert:u,heading:"Enter the text to analyze",mode:n,toggleMode:m})})]})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(u,{})}),document.getElementById("root")),m()}},[[15,1,2]]]);
//# sourceMappingURL=main.1c715a65.chunk.js.map