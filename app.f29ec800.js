(function(t){function e(e){for(var n,r,a=e[0],c=e[1],u=e[2],d=0,h=[];d<a.length;d++)r=a[d],o[r]&&h.push(o[r][0]),o[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(h.length)h.shift()();return i.push.apply(i,u||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],n=!0,a=1;a<s.length;a++){var c=s[a];0!==o[c]&&(n=!1)}n&&(i.splice(e--,1),t=r(r.s=s[0]))}return t}var n={},o={1:0},i=[];function r(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=n,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(s,n,function(e){return t[e]}.bind(null,n));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var u=0;u<a.length;u++)e(a[u]);var l=c;i.push([6,0]),s()})({"0Fx7":function(t,e,s){"use strict";var n=s("S0QO"),o=s.n(n);o.a},6:function(t,e,s){t.exports=s("Vtdi")},"7YDJ":function(t,e,s){"use strict";var n=s("Y4m4"),o=s.n(n);o.a},EDI0:function(t,e,s){},Eewq:function(t,e,s){t.exports=s.p+"img/logo-disclaimer.ae136ec1.png"},N3S8:function(t,e,s){"use strict";var n=s("QbTD"),o=s.n(n);o.a},QbTD:function(t,e,s){},S0QO:function(t,e,s){},Vtdi:function(t,e,s){"use strict";s.r(e);s("VRzm");var n=s("Kw5r"),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},i=[],r=s("L2JU"),a={languages:[{id:"ru",name:"Русский"}],questions:["Каким тебе нужно быть, чтобы достичь цели?","Какой урок стоит пройти ради своей цели?","Как ты поймешь, что ты уже на пути к цели?","Какое напутствие ты себе хочешь дать прежде чем начать движение к своей цели?","Как называется эта страна?"],disclaimer:["Подумай о своём желании/идее/цели.","Неважно где ты сейчас: только мысль появилась в твоей голове или ты уже на пол пути к финалу.","Ты можешь себе задать несколько вопросов из этой колоды и сделать шаг навстречу результату.","Удачи!","Катерина Костюкова Профессиональный сертифицированный коуч (PCC)"],todos:[],history:[]},c={languages:function(t){return t.languages},questions:function(t){return t.questions},disclaimer:function(t){return t.disclaimer},todos:function(t){return t.todos},history:function(t){return t.history}},u={languages:function(t,e){t.languages=e},questions:function(t,e){t.questions=e},disclaimer:function(t,e){t.disclaimer=e},todos:function(t,e){t.todos=e},pushHistory:function(t,e){t.history.push(e)},clearHistory:function(t){t.history=[]}},l=(s("ls82"),s("MECJ")),d=s("vDqi"),h=s.n(d),f={getQuestions:function(){var t=Object(l["a"])(regeneratorRuntime.mark(function t(e,s){var n,o,i,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,o="http://localhost:3000/questions",t.next=4,h.a.get(o);case 4:i=t.sent,r=i.data,n("questions",r);case 7:case"end":return t.stop()}},t,this)}));return function(e,s){return t.apply(this,arguments)}}(),getDisclaimer:function(){var t=Object(l["a"])(regeneratorRuntime.mark(function t(e,s){var n,o,i,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,o="http://localhost:3000/disclaimer",t.next=4,h.a.get(o);case 4:i=t.sent,r=i.data,n("disclaimer",r);case 7:case"end":return t.stop()}},t,this)}));return function(e,s){return t.apply(this,arguments)}}(),getLanguages:function(){var t=Object(l["a"])(regeneratorRuntime.mark(function t(e){var s,n,o,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return s=e.commit,n="http://localhost:3000/languages",t.next=4,h.a.get(n);case 4:o=t.sent,i=o.data,s("languages",i);case 7:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()};n["a"].use(r["a"]);var p=new r["a"].Store({state:a,getters:c,mutations:u,actions:f}),m={mounted:function(){p.dispatch("getDisclaimer"),p.dispatch("getQuestions"),p.dispatch("getLanguages"),localStorage.getItem("Lan-gua-ge")?this.$router.push("disclaimer"):this.$router.push("start")}},g=m,v=(s("ZL7j"),s("KHd+")),w=Object(v["a"])(g,o,i,!1,null,null,null),C=w.exports,y=s("jE9Z"),_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-touch",{on:{swipeleft:t.goToCard}},[n("div",{staticClass:"card"},[n("span",{staticClass:"hashtag"},[t._v("#50вопросов_исток")]),n("span",{staticClass:"bullets"},[t._v("• • • ")]),n("div",{staticClass:"text-wrapper"},[n("p",{staticClass:"text"},[t._v("\r\n        "+t._s(t.disclaimer[0])+"\r\n      ")]),n("p",{staticClass:"text"},[t._v("\r\n        "+t._s(t.disclaimer[1])+"\r\n      ")]),n("p",{staticClass:"text"},[t._v("\r\n        "+t._s(t.disclaimer[2])+"\r\n      ")]),n("p",{staticClass:"text"},[t._v("\r\n        "+t._s(t.disclaimer[3])+"        \r\n      ")]),n("em",{staticClass:"text em"},[t._v("\r\n        "+t._s(t.disclaimer[4])+"        \r\n      ")])]),n("div",{staticClass:"logo"},[n("img",{staticClass:"logo-img",attrs:{src:s("Eewq"),alt:"Тренинг центр - Исток"}})])])])},b=[],x={name:"Disclaimer",store:p,computed:Object(r["b"])({disclaimer:function(t){return t.disclaimer}}),methods:{goToCard:function(){this.$router.push("card")}}},T=x,k=(s("j472"),Object(v["a"])(T,_,b,!1,null,"f671bdde",null)),A=k.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-touch",{attrs:{"swipe-options":{direction:"horizontal"}},on:{swipeleft:t.setNextQuestion,swiperight:t.setPrevQuestion}},[n("div",{staticClass:"card"},[n("a",{staticClass:"to-todos",on:{click:t.toTodos}}),n("a",{staticClass:"reload",on:{click:t.reload}}),n("div",{staticClass:"question-wrapper"},[n("p",{staticClass:"question"},[n("span",{staticClass:"bullets"},[t._v("\n          • • •\n        ")]),t._v("\n          "+t._s(t.currentQuestion)+" \n        "),n("button",{staticClass:"toggle-answer",on:{click:function(e){t.showAnswer=!t.showAnswer}}},[t._v(t._s(t.showAnswer?"Скрыть ответ":"Показать ответ"))]),n("span",{directives:[{name:"show",rawName:"v-show",value:t.showAnswer,expression:"showAnswer"}],staticClass:"edit-wrapper"},[n("label",{staticClass:"label-edit",on:{click:t.editAnswer,tap:t.editAnswer}},[t._v("\n            "+t._s(t.currentAnswer)+"\n          ")]),n("input",{directives:[{name:"show",rawName:"v-show",value:t.editingAnswer,expression:"editingAnswer"},{name:"model",rawName:"v-model",value:t.currentAnswer,expression:"currentAnswer"}],ref:"input",staticClass:"edit",attrs:{type:"text"},domProps:{value:t.currentAnswer},on:{blur:t.doneEditAnswer,keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.doneEditAnswer(e):null},input:function(e){e.target.composing||(t.currentAnswer=e.target.value)}}})])])]),n("div",{staticClass:"logo"},[n("img",{staticClass:"logo-img",attrs:{src:s("zwU1"),alt:"Тренинг центр - Исток"}})])])])},$=[],O=(s("Z2Ku"),s("L9s1"),s("ypVT")),j=s.n(O);n["a"].use(j.a);var I="q-history",S={fetch:function(){var t=JSON.parse(localStorage.getItem(I)||'{"history":[],"answers":[],"currentHistoryIndex":0}');return t},save:function(t){localStorage.setItem(I,JSON.stringify(t))}},q={name:"Card",data:function(){return{answer:null,state:S.fetch(),currentQuestion:"Loading...",currentAnswer:"Кликните, чтобы ответить",showAnswer:!1,editingAnswer:!1}},watch:{state:{handler:function(t){S.save(t)},deep:!0}},computed:Object(r["b"])(["questions"]),methods:{setInit:function(){var t=this.questions.length-1,e=this.getRandomInt(0,t);this.pushToHistory(e),this.$data.currentQuestion=this.questions[e],this.setAnswer()},setNextQuestion:function(){this.$data.currentQuestion=this.getNextQuestion(),this.setAnswer()},setPrevQuestion:function(){this.$data.currentQuestion=this.getPrevQuestion(),this.setAnswer()},setAnswer:function(){this.$data.currentAnswer=this.getAnswer()},getAnswer:function(){return this.state.answers[this.state.currentHistoryIndex]||"Нажмите, чтобы ответить"},doneEditAnswer:function(){this.editingAnswer=!1,this.state.answers[this.state.currentHistoryIndex]=this.currentAnswer},editAnswer:function(){var t=this;this.editingAnswer=!0,this.$nextTick(function(){t.$refs.input.focus(),t.$refs.input.value=""})},getRandomInt:function(t,e){return Math.floor(Math.random()*(e-t+1))+t},getNextQuestion:function(){var t=this.getHistory();if(4==this.state.currentHistoryIndex){var e=t[this.state.currentHistoryIndex];return this.questions[e]}if(this.state.currentHistoryIndex==t.length-1){var s,n=this.questions.length-1;do{s=this.getRandomInt(0,n)}while(t.includes(s));return this.pushToHistory(s),this.state.currentHistoryIndex++,this.questions[s]}return this.state.currentHistoryIndex++,this.questions[t[this.state.currentHistoryIndex]]},getPrevQuestion:function(){var t=this.getHistory();0!==this.state.currentHistoryIndex&&this.state.currentHistoryIndex--;var e=t[this.state.currentHistoryIndex];return this.questions[e]},pushToHistory:function(t){this.state.history.push(t)},getHistory:function(){return this.state.history},toTodos:function(){this.$router.push("todo")},reload:function(){localStorage.clear(),location.reload()}},mounted:function(){0==this.state.history.length?this.setInit():(this.setNextQuestion(),this.setPrevQuestion())}},N=q,H=(s("N3S8"),Object(v["a"])(N,E,$,!1,null,"c9ec1948",null)),Q=H.exports,L=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"start"},[s("div",{staticClass:"start-wrapper"},[t._m(0),s("p",{staticClass:"choose"},[t._v("Выберите язык:")]),s("ul",{staticClass:"languages"},t._l(t.languages,function(e){return s("li",{key:e.id,staticClass:"language"},[s("a",{staticClass:"language-btn",on:{click:function(){return t.saveLanguageAndGo(e.id)}}},[t._v("\n          "+t._s(e.name||"Loading...")+"\n        ")])])}))]),t._m(1)])},P=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h1",{staticClass:"greet"},[t._v("Добро "),s("br"),t._v(" пожаловать!")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"logo"},[n("img",{staticClass:"logo-img",attrs:{src:s("zwU1"),alt:"Тренинг центр - Исток"}})])}],D={name:"Start",store:p,computed:Object(r["b"])({languages:function(t){return t.languages}}),methods:{saveLanguageAndGo:function(t){localStorage.setItem("Lan-gua-ge",t),this.$router.push("login")}}},J=D,R=(s("pS+1"),Object(v["a"])(J,L,P,!1,null,"eb00fe66",null)),z=R.exports,M=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"todoapp"},[s("div",{staticClass:"wrapper"},[s("header",{staticClass:"header"},[s("h1",{staticClass:"heading"},[t._v("Список задач")]),s("a",{staticClass:"to-cards",on:{click:t.toCards}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newTodo,expression:"newTodo"}],staticClass:"new-todo",attrs:{autofocus:"",autocomplete:"off",placeholder:"Что должно быть сделано?"},domProps:{value:t.newTodo},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.addTodo(e):null},blur:t.addTodo,input:function(e){e.target.composing||(t.newTodo=e.target.value)}}})]),s("section",{directives:[{name:"show",rawName:"v-show",value:t.todos.length,expression:"todos.length"}],staticClass:"main"},[s("ul",{staticClass:"todo-list"},t._l(t.filteredTodos,function(e){return s("li",{key:e.id,staticClass:"todo",class:{completed:e.completed,editing:e==t.editedTodo}},[s("div",{staticClass:"view",on:{click:function(s){t.toggleTodoCotrols(e)}}},[s("label",{staticClass:"checkbox-label"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.completed,expression:"todo.completed"}],staticClass:"toggle",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.completed)?t._i(e.completed,null)>-1:e.completed},on:{change:function(s){var n=e.completed,o=s.target,i=!!o.checked;if(Array.isArray(n)){var r=null,a=t._i(n,r);o.checked?a<0&&t.$set(e,"completed",n.concat([r])):a>-1&&t.$set(e,"completed",n.slice(0,a).concat(n.slice(a+1)))}else t.$set(e,"completed",i)}}}),s("span",{staticClass:"toggle-checkbox"})]),s("label",{staticClass:"label-edit"},[t._v(t._s(e.title))]),s("button",{directives:[{name:"show",rawName:"v-show",value:e==t.selectedTodo,expression:"todo == selectedTodo"}],staticClass:"edit-btn",on:{click:function(s){t.editTodo(e)}}}),s("button",{directives:[{name:"show",rawName:"v-show",value:e==t.selectedTodo,expression:"todo == selectedTodo"}],staticClass:"destroy",on:{click:function(s){t.removeTodo(e)}}})]),s("input",{directives:[{name:"show",rawName:"v-show",value:e==t.editedTodo,expression:"todo == editedTodo"},{name:"model",rawName:"v-model",value:e.title,expression:"todo.title"},{name:"todo-focus",rawName:"v-todo-focus",value:e==t.editedTodo,expression:"todo == editedTodo"}],staticClass:"edit",attrs:{type:"text"},domProps:{value:e.title},on:{blur:function(s){t.doneEdit(e)},keyup:[function(s){if(!("button"in s)&&t._k(s.keyCode,"enter",13,s.key,"Enter"))return null;t.doneEdit(e)},function(s){if(!("button"in s)&&t._k(s.keyCode,"esc",27,s.key,"Escape"))return null;t.cancelEdit(e)}],input:function(s){s.target.composing||t.$set(e,"title",s.target.value)}}})])}))])])])},K=[],U=(s("rGqo"),"todos-vuejs-2.0"),V={fetch:function(){var t=JSON.parse(localStorage.getItem(U)||"[]");return t.forEach(function(t,e){t.id=e}),V.uid=t.length,t},save:function(t){localStorage.setItem(U,JSON.stringify(t))}},G={name:"Todo",store:p,data:function(){return{todos:V.fetch(),newTodo:"",editedTodo:null,selectedTodo:null,visibility:"all"}},watch:{todos:{handler:function(t){V.save(t)},deep:!0}},computed:{filteredTodos:function(){return Y[this.visibility](this.todos)},remaining:function(){return Y.active(this.todos).length},allDone:{get:function(){return 0===this.remaining},set:function(t){this.todos.forEach(function(e){e.completed=t})}}},filters:{pluralize:function(t){return 1===t?"item":"items"}},methods:{addTodo:function(){var t=this.newTodo&&this.newTodo.trim();t&&(this.todos.unshift({id:V.uid++,title:t,completed:!1}),this.newTodo="")},removeTodo:function(t){this.todos.splice(this.todos.indexOf(t),1)},editTodo:function(t){this.beforeEditCache=t.title,this.editedTodo=t},toggleTodoCotrols:function(t){this.selectedTodo?this.selectedTodo=null:this.selectedTodo=t},doneEdit:function(t){this.editedTodo&&(this.editedTodo=null,t.title=t.title.trim(),t.title||this.removeTodo(t))},cancelEdit:function(t){this.editedTodo=null,t.title=this.beforeEditCache},removeCompleted:function(){this.todos=Y.active(this.todos)},toCards:function(){this.$router.push("card")}},directives:{"todo-focus":function(t,e){e.value&&t.focus()}}},Y={all:function(t){return t},active:function(t){return t.filter(function(t){return!t.completed})},completed:function(t){return t.filter(function(t){return t.completed})}},Z=G,F=(s("0Fx7"),Object(v["a"])(Z,M,K,!1,null,"47166eca",null)),X=F.exports,B=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login"},[s("a",{staticClass:"skip",on:{click:t.goToDisclamer}},[t._v("Пропустить")]),t._m(0),s("span",{staticClass:"line"},[t._v("Или")]),t._m(1),t._m(2)])},W=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("form",{staticClass:"login-form",attrs:{action:""}},[s("div",{staticClass:"field-wrapper"},[s("label",{attrs:{for:"login"}},[t._v("Имя пользователя")]),s("input",{attrs:{type:"text",name:"login",id:"login"}})]),s("div",{staticClass:"field-wrapper"},[s("label",{attrs:{for:"password"}},[t._v("Пароль")]),s("input",{attrs:{type:"password",name:"password",id:"password"}})]),s("button",{staticClass:"login-btn",attrs:{type:"submit"}},[t._v("Войти")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"or"},[s("ul",{staticClass:"socials"},[s("li",{staticClass:"social"},[s("a",{staticClass:"social-link vk",attrs:{href:"#"}},[t._v("\r\n          VK\r\n        ")])]),s("li",{staticClass:"social"},[s("a",{staticClass:"social-link google",attrs:{href:"#"}},[t._v("\r\n          Google\r\n        ")])]),s("li",{staticClass:"social"},[s("a",{staticClass:"social-link facebook",attrs:{href:"#"}},[t._v("\r\n          Facebook\r\n        ")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"logo"},[n("img",{staticClass:"logo-img",attrs:{src:s("zwU1"),alt:"Тренинг центр - Исток"}})])}],tt={name:"Login",methods:{goToDisclamer:function(){this.$router.push("disclaimer")}},mounted:function(){}},et=tt,st=(s("7YDJ"),Object(v["a"])(et,B,W,!1,null,"6b2ef7a6",null)),nt=st.exports;n["a"].use(y["a"]);var ot=new y["a"]({routes:[{path:"/disclaimer",name:"Disclaimer",component:A},{path:"/card",name:"Card",component:Q},{path:"/start",name:"Start",component:z},{path:"/todo",name:"Todo",component:X},{path:"/login",name:"Login",component:nt}]});n["a"].config.productionTip=!1,new n["a"]({store:p,router:ot,render:function(t){return t(C)}}).$mount("#app")},XhcK:function(t,e,s){},Y4m4:function(t,e,s){},ZL7j:function(t,e,s){"use strict";var n=s("EDI0"),o=s.n(n);o.a},j472:function(t,e,s){"use strict";var n=s("qL2t"),o=s.n(n);o.a},"pS+1":function(t,e,s){"use strict";var n=s("XhcK"),o=s.n(n);o.a},qL2t:function(t,e,s){},zwU1:function(t,e,s){t.exports=s.p+"img/logo.5a61ed16.png"}});
//# sourceMappingURL=app.f29ec800.js.map