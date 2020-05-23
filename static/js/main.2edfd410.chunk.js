(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],{11:function(e,t,a){e.exports={form:"TaskEditor_form__2pZit",label:"TaskEditor_label__-hzU0",input:"TaskEditor_input__4Vo8e"}},14:function(e,t,a){e.exports={list:"TaskList_list__1UxwT"}},15:function(e,t,a){e.exports={input:"TaskFilter_input__3MB5O"}},17:function(e,t,a){e.exports=a(33)},32:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(13),o=a.n(i),s=a(16),c=a(2),l=a(7),u=a(8),p=a(10),d=a(9),m=a(3),f=a.n(m),h=a(6),k=a(1),y=a.n(k),v=function(e){var t=e.options,a=e.value,n=e.onChange;return r.a.createElement("select",{name:"priority",value:a,onChange:n},t.map((function(e){return r.a.createElement("option",{key:e,value:e},e)})))};v.protoTypes={options:y.a.arrayOf(y.a.string.isRequired).isRequired,value:y.a.string.isRequired,onChange:y.a.func.isRequired};var g=v,b=a(11),_=Object.freeze({LOW:"low",NORMAL:"normal",HIGH:"high"}),O=Object.values(_),C=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={text:"",priority:_.NORMAL},e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(h.a)({},n,r))},e.handleSubmit=function(t){t.preventDefault(),(0,e.props.onAddTask)(Object(c.a)({},e.state)),e.setState({text:"",priority:_.NORMAL})},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.state,t=e.text,a=e.priority;return r.a.createElement("form",{className:b.form},r.a.createElement("input",{className:b.input,type:"text",name:"text",value:t,onChange:this.handleChange,placeholder:"Enter task content..."}),r.a.createElement("label",{className:b.label},"Select task priority:",r.a.createElement(g,{options:O,value:a,onChange:this.handleChange})),r.a.createElement("button",{type:"submit",onClick:this.handleSubmit},"Create"))}}]),a}(n.Component),E=a(4),T=a.n(E),x=Object.values(_),j=function(e){var t=e.id,a=e.text,n=e.priority,i=e.completed,o=e.onDeleteTask,s=e.onUpdateCompleted,c=e.onUpdatePriority;return r.a.createElement("div",{className:"".concat(T.a.task," ").concat(T.a["".concat(n,"Priority")])},r.a.createElement("p",{className:T.a.text},a),r.a.createElement("hr",null),r.a.createElement("div",{className:T.a.actions},r.a.createElement("button",{type:"button",onClick:o},"Delete"),r.a.createElement(g,{options:x,value:n,onChange:function(e){var a=e.target.value;return c(t,a)}}),r.a.createElement("label",null,"Completed:",r.a.createElement("input",{type:"checkbox",checked:i,onChange:s}))))};j.protoTypes={id:y.a.string.isRequired,text:y.a.string.isRequired,priopity:y.a.string.isRequired,completed:y.a.bool.isRequired,onDeleteTask:y.a.func.isRequired,onUpdateCompleted:y.a.func.isRequired,onUpdatePriority:y.a.func.isRequired};var R=j,S=a(14),N=function(e){var t=e.items,a=e.onDeleteTask,n=e.onUpdateCompleted,i=e.onUpdatePriority;return t.length>0&&r.a.createElement("ul",{className:S.list},t.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(R,Object.assign({},e,{onDeleteTask:function(){return a(e.id)},onUpdateCompleted:function(){return n(e.id)},onUpdatePriority:i})))})))},U=a(15),P=function(e){var t=e.value,a=e.onChangeFilter;return r.a.createElement("input",{type:"text",className:U.input,value:t,onChange:a,placeholder:"Type to filter tasks..."})},q={maxWidth:1200,minWidth:800,marginLeft:"auto",marginRight:"auto"},w=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={tasks:[{id:f.a.generate(),text:"My job",completed:!1,priority:_.LOW},{id:f.a.generate(),text:"hobby",completed:!1,priority:_.HIGH},{id:f.a.generate(),text:"rest",completed:!1,priority:_.NORMAL}],filter:""},e.changeFilter=function(t){var a=t.target.value;e.setState({filter:a})},e.addTask=function(t){var a=Object(c.a)(Object(c.a)({},t),{},{id:f.a.generate(),completed:!1});e.setState((function(e){return{tasks:[].concat(Object(s.a)(e.tasks),[a])}}))},e.deleteTask=function(t){e.setState((function(e){return{tasks:e.tasks.filter((function(e){return e.id!==t}))}}))},e.updateComleted=function(t){e.setState((function(e){return{tasks:e.tasks.map((function(e){return e.id===t?Object(c.a)(Object(c.a)({},e),{},{completed:!e.completed}):e}))}}))},e.updatePriority=function(t,a){e.setState((function(e){return{tasks:e.tasks.map((function(e){return e.id===t?Object(c.a)(Object(c.a)({},e),{},{priority:a}):e}))}}))},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("tasks");if(e){var t=JSON.parse(e);this.setState({tasks:t})}}},{key:"componentDidUpdate",value:function(e,t){var a=this.state.tasks;t.tasks!==a&&localStorage.setItem("tasks",JSON.stringify(a))}},{key:"render",value:function(){var e=this.state,t=e.tasks,a=e.filter,n=function(e,t){return e.filter((function(e){return e.text.toLowerCase().includes(t.toLowerCase())}))}(t,a);return r.a.createElement("div",{style:q},r.a.createElement(C,{onAddTask:this.addTask}),r.a.createElement("hr",null),r.a.createElement(P,{value:a,onChangeFilter:this.changeFilter}),r.a.createElement(N,{items:n,onDeleteTask:this.deleteTask,onUpdateCompleted:this.updateComleted,onUpdatePriority:this.updatePriority}))}}]),a}(n.Component);a(32);o.a.render(r.a.createElement(w,null),document.querySelector("#root"))},4:function(e,t,a){e.exports={task:"Task_task__2Kd94",lowPriority:"Task_lowPriority__2XR1C",normalPriority:"Task_normalPriority__1O1TG",highPriority:"Task_highPriority__k6UGN",text:"Task_text__3UTcp",actions:"Task_actions__29VXd"}}},[[17,1,2]]]);
//# sourceMappingURL=main.2edfd410.chunk.js.map