(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{37:function(e,n,t){e.exports=t(66)},47:function(e,n,t){},66:function(e,n,t){"use strict";t.r(n);var r={};t.r(r),t.d(r,"auth",(function(){return p}));var a=t(0),c=t.n(a),o=t(13),u=t.n(o),l=t(8),i=t(11),s=(t(46),t(47),t(2)),m=t(20),h=t(17),d=t.n(h),g={currentUser:null};function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case"UPDATE_USER":return Object(m.a)(Object(m.a)({},e),{},{currentUser:n.user});default:return e}}function f(){var e=Object(l.c)(),n=Object(l.d)((function(e){return e.auth.currentUser}));return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"Welcome to Home Page"),c.a.createElement("p",null,"You are logged in as ",n.email),c.a.createElement("button",{className:"btn btn-outline-danger",onClick:function(){e((function(e){return d.a.get("/api/v1/log_out.json",{withCredentials:!0}).then((function(){window.location.replace("/users/sign_in")})).catch((function(){window.location.replace("/users/sign_in")}))}))}},"Log Out"),c.a.createElement("a",{href:"/admin",className:"btn btn-warning"},"Go to ActiveAdmin dashboard"))}function b(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"Public Page"),c.a.createElement("p",null,"Can be accessed by anyone without logging in"),c.a.createElement(i.b,{to:"/",className:"btn btn-primary"},"Enter App"))}var v=t(32),E=t(33),w=t(36),j=t(35),O=function(e){Object(w.a)(t,e);var n=Object(j.a)(t);function t(){return Object(v.a)(this,t),n.apply(this,arguments)}return Object(E.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,n=e.currentUser,t=e.checkCurrentUser;console.log(n),n||t()}},{key:"render",value:function(){var e=this.props,n=e.currentUser,t=e.children;return n?c.a.createElement(s.c,null,t):null}}]),t}(c.a.Component),U=Object(l.b)((function(e){return{currentUser:e.auth.currentUser}}),(function(e){return{checkCurrentUser:function(){return e((function(e){return d.a.get("/api/v1/current_user.json",{withCredentials:!0}).then((function(n){console.log("current_user from server: ",n.data.user),e({type:"UPDATE_USER",user:n.data.user})})).catch((function(e){console.log(e),window.location.replace("/users/sign_in")}))}))}}}))(O);var y=function(){return c.a.createElement(s.c,null,c.a.createElement(s.a,{exact:!0,path:"/welcome",component:b}),c.a.createElement(U,null,c.a.createElement(s.a,{exact:!0,path:"/",component:f})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var k=t(9),_=t(34);console.log(r);var C=Object(k.c)(r);u.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(l.a,{store:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(k.d)(C,e,Object(k.a)(_.a))}()},c.a.createElement(i.a,null,c.a.createElement(y,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.3f17c60c.chunk.js.map