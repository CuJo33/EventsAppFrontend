(this.webpackJsonpeventsapp=this.webpackJsonpeventsapp||[]).push([[0],{23:function(e,t,n){},25:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(11),i=n.n(c),s=(n(23),n(6)),u=n(9),o=n(12),j=n(0);var d=function(e){var t,n,r,c,i,d,l,b,v,O,h,m,x=Object(a.useState)(!1),p=Object(s.a)(x,2),g=p[0],f=p[1],w=Object(a.useState)((null===(t=e.currentEvent)||void 0===t?void 0:t.eventName)||""),k=Object(s.a)(w,2),E=k[0],S=k[1],y=Object(a.useState)((null===(n=e.currentEvent)||void 0===n?void 0:n.location)||""),C=Object(s.a)(y,2),N=C[0],D=C[1],L=Object(a.useState)((null===(r=e.currentEvent)||void 0===r?void 0:r.description)||""),I=Object(s.a)(L,2),F=I[0],P=I[1],T=Object(a.useState)((null===(c=e.currentEvent)||void 0===c?void 0:c.imagelink)||""),U=Object(s.a)(T,2),_=U[0],A=U[1],B=Object(a.useState)((null===(i=e.currentEvent)||void 0===i?void 0:i.date)||""),H=Object(s.a)(B,2),J=H[0],M=H[1],Y=Object(a.useState)((null===(d=e.currentEvent)||void 0===d?void 0:d.time)||""),q=Object(s.a)(Y,2),z=q[0],G=q[1],K=function(e,t){e.preventDefault(),t(e.target.value)};return Object(j.jsxs)(j.Fragment,{children:[e.currentEvent?"Update event":"Add New Event",Object(j.jsx)("br",{}),Object(j.jsxs)(o.a,{autocomplete:"off",onSubmit:function(t){return function(t){t.preventDefault(),f(!0),(e.currentEvent?e.client.updateEvent(e.currentEvent._id,t.target.eventName.value,t.target.location.value,t.target.description.value,t.target.imageLink.value,t.target.date.value,t.target.time.value):e.client.addEvent(t.target.eventName.value,t.target.location.value,t.target.description.value,t.target.imageLink.value,t.target.date.value,t.target.time.value)).then((function(){f(!1),S(""),D(""),P(""),A(""),M(""),G(""),e.refreshList()})).catch((function(){alert("an error occured, please try again"),f(!1)}))}(t)},id:"addForm",children:["Name: ",Object(j.jsx)("br",{}),Object(j.jsx)("input",{onChange:function(e){return K(e,S)},type:"text",value:(null===(l=e.currentEvent)||void 0===l?void 0:l.eventName)||E,name:"eventName",disabled:g}),Object(j.jsx)("br",{}),"Location:",Object(j.jsx)("br",{}),Object(j.jsx)("input",{onChange:function(e){return K(e,D)},type:"text",value:(null===(b=e.currentEvent)||void 0===b?void 0:b.location)||N,name:"location",disabled:g}),Object(j.jsx)("br",{}),"Description:",Object(j.jsx)("br",{}),Object(j.jsx)("input",{onChange:function(e){return K(e,P)},type:"text",value:(null===(v=e.currentEvent)||void 0===v?void 0:v.description)||F,name:"description",disabled:g}),Object(j.jsx)("br",{}),"Image Link (https://somelinkhere):",Object(j.jsx)("br",{}),Object(j.jsx)("input",{onChange:function(e){return K(e,A)},type:"text",value:(null===(O=e.currentEvent)||void 0===O?void 0:O.imageLink)||_,name:"imageLink",disabled:g}),Object(j.jsx)("br",{}),"Date:",Object(j.jsx)("br",{}),Object(j.jsx)("input",{onChange:function(e){return K(e,M)},type:"date",value:(null===(h=e.currentEvent)||void 0===h?void 0:h.date)||J,name:"date",disabled:g}),Object(j.jsx)("br",{}),"Time 24h:",Object(j.jsx)("br",{}),Object(j.jsx)("input",{onChange:function(e){return K(e,G)},type:"time",value:(null===(m=e.currentEvent)||void 0===m?void 0:m.time)||z,name:"time",disabled:g}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsxs)(u.a,{className:"btn btn-success",type:"submit",disabled:g,children:[" ","Submit"," "]})]})]})},l=(n(25),n(34));var b=function(e){var t=Object(a.useState)([]),n=Object(s.a)(t,2),r=n[0],c=n[1],i=Object(a.useState)(void 0),o=Object(s.a)(i,2),b=o[0],v=o[1],O=function(){e.client.getEvents().then((function(e){return c(e.data)}))};return Object(a.useEffect)((function(){O()}),[]),Object(j.jsxs)(j.Fragment,{children:["Dashboard",Object(j.jsx)("br",{}),Object(j.jsxs)(l.a,{children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Event Name"}),Object(j.jsx)("th",{children:"Location"}),Object(j.jsx)("th",{children:"Description"}),Object(j.jsx)("th",{children:"Image"}),Object(j.jsx)("th",{children:"Date"}),Object(j.jsx)("th",{children:"Time 24h"})]})}),Object(j.jsx)("tbody",{children:r.map((function(t){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:t.eventName}),Object(j.jsx)("td",{children:t.location}),Object(j.jsx)("td",{children:t.description}),Object(j.jsx)("td",{children:Object(j.jsx)("img",{id:"image",src:t.imageLink})}),Object(j.jsx)("td",{children:"".concat(new Date(t.date).getUTCDate(),"/").concat(new Date(t.date).getUTCMonth()+1,"/").concat(new Date(t.date).getFullYear())}),Object(j.jsx)("td",{children:t.time}),Object(j.jsxs)("td",{children:[Object(j.jsxs)(u.a,{id:"update-button",className:"btn btn-warning",onClick:function(){v(t)},children:[" ","update"]}),Object(j.jsxs)(u.a,{id:"remove-button",className:"btn btn-danger",onClick:function(){return n=t._id,void e.client.removeEvent(n).then((function(){return O()}));var n},children:[" ","remove"]})]})]},t._id)}))})]}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)(d,{client:e.client,refreshList:function(){O(),v(void 0)},currentEvent:b})]})},v=n(14),O=n.n(v),h=n(21),m=n(35),x=n(36),p=n(16),g=n.n(p),f="https://eventsapp123.herokuapp.com/",w=function(){function e(t,n){Object(m.a)(this,e),this.tokenProvider=t,this.logoutHandler=n}return Object(x.a)(e,[{key:"apiCall",value:function(e,t,n){var a=this;return g()({method:e,url:t,headers:{auth:this.tokenProvider()},data:n}).catch((function(e){if(403===e.response.status)return a.logoutHandler(),Promise.reject();throw e}))}},{key:"getEvents",value:function(){return this.apiCall("get",f)}},{key:"addEvent",value:function(e,t,n,a,r,c){return console.log(c),this.apiCall("post",f,{eventName:e,location:t,description:n,imageLink:a,date:r,time:c})}},{key:"removeEvent",value:function(e){return this.apiCall("delete","".concat(f).concat(e))}},{key:"updateEvent",value:function(e,t,n,a,r,c,i){return this.apiCall("put","".concat(f).concat(e),{eventName:t,location:n,description:a,imageLink:r,date:c,time:i})}},{key:"login",value:function(){var e=Object(h.a)(O.a.mark((function e(t,n){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g()({method:"POST",url:"".concat(f,"auth"),data:{username:t,password:n}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"signUp",value:function(){var e=Object(h.a)(O.a.mark((function e(t,n){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g()({method:"POST",url:"".concat(f,"user"),data:{username:t,password:n}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}]),e}();var k=function(e){var t=Object(a.useState)(!1),n=Object(s.a)(t,2),r=n[0],c=n[1],i=Object(a.useState)(""),d=Object(s.a)(i,2),l=d[0],b=d[1],v=Object(a.useState)(""),O=Object(s.a)(v,2),h=O[0],m=O[1],x=function(e,t){e.preventDefault(),t(e.target.value)};return Object(j.jsxs)(j.Fragment,{children:["Login",Object(j.jsx)("br",{}),Object(j.jsxs)(o.a,{onSubmit:function(t){return function(t){t.preventDefault(),c(!0),e.client.login(t.target.username.value,t.target.password.value).then((function(t){if(401===t.data.status||403===t.data.status)throw new Error(t.data.message);c(!1),e.loggedIn(t.data.token)})).catch((function(e){alert(e),c(!1)}))}(t)},children:["username",Object(j.jsx)("br",{}),Object(j.jsx)("input",{onChange:function(e){return x(e,b)},type:"text",name:"username",value:l,disabled:r}),Object(j.jsx)("br",{}),"password",Object(j.jsx)("br",{}),Object(j.jsx)("input",{onChange:function(e){return x(e,m)},type:"password",name:"password",value:h,disabled:r}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsxs)(u.a,{type:"submit",disabled:r,children:[" ","Submit"," "]})]})]})};var E=function(e){var t=Object(a.useState)(!1),n=Object(s.a)(t,2),r=n[0],c=n[1],i=Object(a.useState)(""),d=Object(s.a)(i,2),l=d[0],b=d[1],v=Object(a.useState)(""),O=Object(s.a)(v,2),h=O[0],m=O[1],x=function(e,t){e.preventDefault(),t(e.target.value)};return Object(j.jsxs)(j.Fragment,{children:["Sign Up",Object(j.jsx)("br",{}),Object(j.jsxs)(o.a,{onSubmit:function(t){return function(t){t.preventDefault(),c(!0),e.client.signUp(t.target.username.value,t.target.password.value).then((function(e){if(404===e.data.status)throw new Error(e.data.message);200===e.data.status&&alert(e.data.message+" Please now login"),c(!1)})).catch((function(e){alert(e),console.log(e),c(!1)}))}(t)},children:["username",Object(j.jsx)("br",{}),Object(j.jsx)("input",{onChange:function(e){return x(e,b)},type:"text",name:"username",value:l,disabled:r}),Object(j.jsx)("br",{}),"password",Object(j.jsx)("br",{}),Object(j.jsx)("input",{onChange:function(e){return x(e,m)},type:"password",name:"password",value:h,disabled:r}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsxs)(u.a,{type:"submit",disabled:r,children:[" ","Submit"," "]})]})]})},S=(n(65),n(22)),y=n(17),C=n.p+"static/media/cujo_head.88802575.jpg",N=n(13),D=n(37);var L=function(){var e=Object(a.useState)(window.localStorage.getItem("token")),t=Object(s.a)(e,2),n=t[0],r=t[1],c=new w((function(){return n}),(function(){return i()})),i=function(){window.localStorage.removeItem("token")};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)(S.a,{id:"navbar",bg:"info",variant:"dark",children:[Object(j.jsx)("img",{className:"ml-3",id:"logo",src:C,alt:"Creator avatar",width:"100",height:"100"}),Object(j.jsx)(S.a.Brand,{className:"ml-3",id:"branding-header",children:"presents..."})]}),Object(j.jsx)(y.a,{id:"container-name",children:Object(j.jsx)("h2",{children:"An Event List"})}),Object(j.jsxs)(y.a,{className:"mt-3",id:"container-box",children:[Object(j.jsx)("br",{}),n?Object(j.jsx)(b,{client:c}):Object(j.jsx)(y.a,{children:Object(j.jsxs)(D.a,{children:[Object(j.jsx)(N.a,{children:Object(j.jsx)(k,{loggedIn:function(e){return function(e){window.localStorage.setItem("token",e),r(e)}(e)},client:c})}),Object(j.jsx)(N.a,{children:Object(j.jsx)(E,{client:c})})]})}),Object(j.jsx)("br",{})]})]})};i.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(L,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.3e0cbef1.chunk.js.map