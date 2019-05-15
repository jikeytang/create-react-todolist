(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){e.exports=n(25)},25:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(12),s=n.n(i),l=(n(9),n(1)),r=n(2),c=n(4),d=n(3),u=n(5),h=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"handleNewTodo",value:function(e){if(13===e.keyCode){var t=e.target.value;if(!t)return!1;e.target.value="",this.props.addTodo({title:t,completed:!1})}}},{key:"render",value:function(){return o.a.createElement("header",{className:"header"},o.a.createElement("h1",null,"todos"),o.a.createElement("input",{type:"text",onKeyUp:this.handleNewTodo.bind(this),placeholder:"\u8bf7\u8f93\u5165\u5f85\u529e\u4e8b\u9879",className:"new-todo",autoFocus:!0}))}}]),t}(a.Component),m=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=function(t){return e.props.current===t?"selected":""};return o.a.createElement("footer",{className:"footer"},o.a.createElement("span",{className:"todo-count"},o.a.createElement("strong",null,this.props.remaining)," \u9879"),o.a.createElement("ul",{className:"filters"},o.a.createElement("li",null,o.a.createElement("a",{href:"#/",className:t("all")},"\u5168\u90e8")),o.a.createElement("li",null,o.a.createElement("a",{href:"#/active",className:t("active")},"\u8fdb\u884c\u4e2d")),o.a.createElement("li",null,o.a.createElement("a",{href:"#/completed",className:t("completed")},"\u5df2\u5b8c\u6210"))),o.a.createElement("button",{className:"clear-completed",onClick:this.props.onRemoveCompleted.bind(this)},"\u6e05\u9664"))}}]),t}(a.Component),p=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(c.a)(this,Object(d.a)(t).call(this,e))).state={editText:e.title,editing:null},n}return Object(u.a)(t,e),Object(r.a)(t,[{key:"handleDestroy",value:function(){this.props.onDestroy(this.props.index)}},{key:"handleEdit",value:function(){this.props.onEdit(this.props),this.setState({editing:!0})}},{key:"handleToggle",value:function(){this.props.onToggle(this.props.title,!this.props.completed)}},{key:"handleSubmit",value:function(){var e=this.state.editText.trim();e?(this.props.onSave(this.props.index,e),this.setState({editing:null})):this.props.onDestroy()}},{key:"handleKeyDown",value:function(e){27===e.which?this.setState({editText:this.props.title}):13===e.which&&this.handleSubmit(e)}},{key:"handleChange",value:function(e){this.state.editing&&this.setState({editText:e.target.value})}},{key:"render",value:function(){var e=this.props.completed,t=[e?"completed":"",this.state.editing?"editing":""].join(" ");return o.a.createElement("li",{className:t},o.a.createElement("div",{className:"view"},o.a.createElement("input",{type:"checkbox",className:"toggle",checked:e,onChange:this.handleToggle.bind(this)}),o.a.createElement("label",{onDoubleClick:this.handleEdit.bind(this)},this.props.title),o.a.createElement("button",{className:"destroy",onClick:this.handleDestroy.bind(this)})),o.a.createElement("input",{type:"text",className:"edit",value:this.state.editText,onBlur:this.handleSubmit.bind(this),onChange:this.handleChange.bind(this),onKeyDown:this.handleKeyDown.bind(this)}))}}]),t}(a.Component),v=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("ul",{className:"todo-list"},this.props.todos.map(function(t,n){return o.a.createElement(p,Object.assign({key:n,index:n},t,e.props))}))}}]),t}(a.Component),f=n(13),b=n.n(f),g="create-react-cli-todos",y={all:function(e){return e},active:function(e){return e.filter(function(e){return!e.completed})},completed:function(e){return e.filter(function(e){return e.completed})},fetch:function(){return JSON.parse(localStorage.getItem(g)||"[]")},save:function(e){localStorage.setItem(g,JSON.stringify(e))}},E=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(c.a)(this,Object(d.a)(t).call(this,e))).state={todos:y.fetch()||[],filteredTodos:[],current:"all",remaining:0},n}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;(new b.a).state("/",function(){e.setState({current:"all"}),e.updateTodos()}).state("active",function(){e.setState({current:this.name}),e.updateTodos()}).state("completed",function(){e.setState({current:this.name}),e.updateTodos()}).start(),e.updateTodos()}},{key:"updateTodos",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y[this.state.current](this.state.todos);this.setState({filteredTodos:e})}},{key:"_save",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.state.todos;this.setState({todos:e}),this.updateTodos(e),y.save(e)}},{key:"addTodo",value:function(e){this.state.todos.push(e),this._save()}},{key:"destroy",value:function(e){this.state.todos.splice(e,1),this._save()}},{key:"edit",value:function(e){e.index;var t=e.text;this.beforeEditCache=t}},{key:"toggle",value:function(e,t){var n=this.state.todos.map(function(n,a){return e===n.title&&(n.completed=t),n});this._save(n)}},{key:"save",value:function(e,t){var n=this.state.todos;n[e].title=t,this._save(n)}},{key:"toggleAll",value:function(e){var t=this.state.todos.map(function(e){return Object.assign({},e,{completed:!0})});this._save(t)}},{key:"removeCompleted",value:function(){var e=y.active(this.state.todos);this._save(e)}},{key:"render",value:function(){return o.a.createElement("div",{className:"todoapp"},o.a.createElement(h,{addTodo:this.addTodo.bind(this)}),o.a.createElement("section",{className:"main"},o.a.createElement("input",{id:"toggle-all",className:"toggle-all",type:"checkbox",onChange:this.toggleAll.bind(this)}),o.a.createElement("label",{htmlFor:"toggle-all"}),o.a.createElement(v,{todos:this.state.filteredTodos,onDestroy:this.destroy.bind(this),onEdit:this.edit.bind(this),onToggle:this.toggle.bind(this),onSave:this.save.bind(this)})),o.a.createElement(m,{current:this.state.current,remaining:y.all(this.state.todos).length,onRemoveCompleted:this.removeCompleted.bind(this)}))}}]),t}(a.Component);var k=function(){return o.a.createElement(E,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(23),n(24);s.a.render(o.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){}},[[14,1,2]]]);
//# sourceMappingURL=main.ac492443.chunk.js.map