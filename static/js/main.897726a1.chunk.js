(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],[,,,,,,,,,,function(e,n,t){e.exports=t(21)},,,,,function(e,n,t){},,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(4),c=t.n(o),s=(t(15),t(2)),l=t.n(s),i=t(5),u=t(6),h=t(7),m=t(1),d=t(9),f=t(8),p=(t(17),t(18),function(e){return r.a.createElement("div",{className:"card-container"},r.a.createElement("img",{alt:"monster",src:"https://robohash.org/".concat(e.monster.id,"?set=set2&size=180x180")}),r.a.createElement("h2",null,e.monster.name),r.a.createElement("p",null,e.monster.email))}),v=function(e){return console.log(e),r.a.createElement("div",{className:"card-list"},e.monsters.map((function(e,n){return r.a.createElement(p,{key:n,monster:e})})))},g=(t(19),function(e){var n=e.placeholder,t=e.handleChange;return r.a.createElement("input",{className:"search",type:"search",placeholder:n,onChange:t})}),E=(t(20),function(e){Object(d.a)(t,e);var n=Object(f.a)(t);function t(){var e;return Object(u.a)(this,t),(e=n.call(this)).handleChange=function(n){e.setState({searchField:n.target.value})},e.state={monsters:[],searchField:""},e.handleChange=e.handleChange.bind(Object(m.a)(e)),e}return Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=Object(i.a)(l.a.mark((function e(){var n=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){return n.setState({monsters:e})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,n=e.monsters,t=e.searchField,a=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Monsters Rolodex"),r.a.createElement(g,{placeholder:"search monster",handleChange:this.handleChange}),r.a.createElement(v,{monsters:a}))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.897726a1.chunk.js.map