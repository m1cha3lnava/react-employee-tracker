(this["webpackJsonpreact-employee-tracker"]=this["webpackJsonpreact-employee-tracker"]||[]).push([[0],{17:function(e,t,a){e.exports=a(40)},22:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(11),c=a.n(r),o=a(12),s=a(13),i=a(16),m=a(15),u=(a(22),function(e){var t=e.image,a=e.id,n=e.firstName,r=e.lastName,c=e.city,o=e.country,s=e.email,i=e.phone;return l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"img-container"},l.a.createElement("img",{alt:a,src:t})),l.a.createElement("div",{className:"content"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("strong",null,"Name:")," ",n," ",r),l.a.createElement("li",null,l.a.createElement("strong",null,"Location:")," ",c,", ",o),l.a.createElement("li",null,l.a.createElement("strong",null,"Phone:")," ",i),l.a.createElement("li",null,l.a.createElement("strong",null,"Email:")," ",s))))}),d=a(14),h=a.n(d),E=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={employees:[],value:""},e.handleOnChange=function(t){e.setState({value:t.target.value}),e.handleSearch()},e.handleSearch=function(){var t=e.state.employees.filter((function(t){return t.name.last.includes(e.state.value)}));e.setState({employees:t})},e.handleClear=function(){e.setState({value:""}),console.log(e.state.employees),e.componentDidMount()},e.handleSort=function(t){var a=e.state.employees.sort((function(e,a){return"ascending"===t?e.name.last.localeCompare(a.name.last):a.name.last.localeCompare(e.name.last)}));e.setState({employees:a})},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;h.a.get("https://randomuser.me/api/?results=50").then((function(t){e.setState({employees:t.data.results})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"container bg-light"},l.a.createElement("div",{className:"col-12 bg-dark text-white",id:"title"},l.a.createElement("h1",{className:"text-center"},"Employee Tracker")),l.a.createElement("div",{className:"row bg-light"},l.a.createElement("div",{className:"col-l"},l.a.createElement("div",{className:"row"}),l.a.createElement("h5",null,"Sort by Last Name"),l.a.createElement("button",{className:"btn btn-info my-2 my-sm-0",onClick:function(){return e.handleSort("ascending")}},"Ascending"),l.a.createElement("button",{className:"btn btn-info",onClick:function(){return e.handleSort("descending")}},"Descending")),l.a.createElement("div",{className:"col text-center"},l.a.createElement("br",null)),l.a.createElement("div",{className:"col-l"},l.a.createElement("h5",null,"Search by Last Name"),l.a.createElement("input",{className:"input-group",value:this.state.value,onChange:this.handleOnChange,type:"text",placeholder:"Last Name"}),l.a.createElement("button",{onClick:function(){return e.handleClear()}},"Clear"))),l.a.createElement("div",{className:"row"}),l.a.createElement("div",{className:"row"},this.state.employees.map((function(e){return l.a.createElement(u,{key:e.login.uuid,image:e.picture.medium,id:e.id.value,firstName:e.name.first,lastName:e.name.last,city:e.location.city,country:e.location.country,email:e.email,phone:e.phone})}))))}}]),a}(n.Component);var v=function(){return l.a.createElement("div",null,l.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.6a318fb9.chunk.js.map