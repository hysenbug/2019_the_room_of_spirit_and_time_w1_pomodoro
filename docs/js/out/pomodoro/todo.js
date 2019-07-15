// Compiled by ClojureScript 1.10.520 {}
goog.provide('pomodoro.todo');
goog.require('cljs.core');
goog.require('reagent.core');
if((typeof pomodoro !== 'undefined') && (typeof pomodoro.todo !== 'undefined') && (typeof pomodoro.todo.todos !== 'undefined')){
} else {
pomodoro.todo.todos = reagent.core.atom.call(null,cljs.core.sorted_map.call(null));
}
if((typeof pomodoro !== 'undefined') && (typeof pomodoro.todo !== 'undefined') && (typeof pomodoro.todo.counter !== 'undefined')){
} else {
pomodoro.todo.counter = reagent.core.atom.call(null,(0));
}
pomodoro.todo.add_todo = (function pomodoro$todo$add_todo(text){
var id = cljs.core.swap_BANG_.call(null,pomodoro.todo.counter,cljs.core.inc);
return cljs.core.swap_BANG_.call(null,pomodoro.todo.todos,cljs.core.assoc,id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"title","title",636505583),text,new cljs.core.Keyword(null,"done","done",-889844188),false], null));
});
pomodoro.todo.toggle = (function pomodoro$todo$toggle(id){
return cljs.core.swap_BANG_.call(null,pomodoro.todo.todos,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"done","done",-889844188)], null),cljs.core.not);
});
pomodoro.todo.save = (function pomodoro$todo$save(id,title){
return cljs.core.swap_BANG_.call(null,pomodoro.todo.todos,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"title","title",636505583)], null),title);
});
pomodoro.todo.delete$ = (function pomodoro$todo$delete(id){
return cljs.core.swap_BANG_.call(null,pomodoro.todo.todos,cljs.core.dissoc,id);
});
pomodoro.todo.mmap = (function pomodoro$todo$mmap(m,f,a){
return cljs.core.into.call(null,cljs.core.empty.call(null,m),f.call(null,a,m));
});
pomodoro.todo.complete_all = (function pomodoro$todo$complete_all(v){
return cljs.core.swap_BANG_.call(null,pomodoro.todo.todos,pomodoro.todo.mmap,cljs.core.map,(function (p1__46174_SHARP_){
return cljs.core.assoc_in.call(null,p1__46174_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"done","done",-889844188)], null),v);
}));
});
pomodoro.todo.clear_done = (function pomodoro$todo$clear_done(){
return cljs.core.swap_BANG_.call(null,pomodoro.todo.todos,pomodoro.todo.mmap,cljs.core.remove,(function (p1__46175_SHARP_){
return cljs.core.get_in.call(null,p1__46175_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"done","done",-889844188)], null));
}));
});
if((typeof pomodoro !== 'undefined') && (typeof pomodoro.todo !== 'undefined') && (typeof pomodoro.todo.init !== 'undefined')){
} else {
pomodoro.todo.init = (function (){
pomodoro.todo.add_todo.call(null,"Rename Cloact to Reagent");

pomodoro.todo.add_todo.call(null,"Add undo demo");

pomodoro.todo.add_todo.call(null,"Make all rendering async");

pomodoro.todo.add_todo.call(null,"Allow any arguments to component functions");

return pomodoro.todo.complete_all.call(null,true);
})()
;
}
pomodoro.todo.todo_input = (function pomodoro$todo$todo_input(p__46178){
var map__46179 = p__46178;
var map__46179__$1 = (((((!((map__46179 == null))))?(((((map__46179.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46179.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46179):map__46179);
var title = cljs.core.get.call(null,map__46179__$1,new cljs.core.Keyword(null,"title","title",636505583));
var on_save = cljs.core.get.call(null,map__46179__$1,new cljs.core.Keyword(null,"on-save","on-save",1618176266));
var on_stop = cljs.core.get.call(null,map__46179__$1,new cljs.core.Keyword(null,"on-stop","on-stop",1520114515));
var val = reagent.core.atom.call(null,title);
var stop = ((function (val,map__46179,map__46179__$1,title,on_save,on_stop){
return (function (){
cljs.core.reset_BANG_.call(null,val,"");

if(cljs.core.truth_(on_stop)){
return on_stop.call(null);
} else {
return null;
}
});})(val,map__46179,map__46179__$1,title,on_save,on_stop))
;
var save = ((function (val,stop,map__46179,map__46179__$1,title,on_save,on_stop){
return (function (){
var v = clojure.string.trim.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,val)));
if((!(cljs.core.empty_QMARK_.call(null,v)))){
on_save.call(null,v);
} else {
}

return stop.call(null);
});})(val,stop,map__46179,map__46179__$1,title,on_save,on_stop))
;
return ((function (val,stop,save,map__46179,map__46179__$1,title,on_save,on_stop){
return (function (props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),cljs.core.merge.call(null,props,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,val),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),save,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (val,stop,save,map__46179,map__46179__$1,title,on_save,on_stop){
return (function (p1__46176_SHARP_){
return cljs.core.reset_BANG_.call(null,val,p1__46176_SHARP_.target.value);
});})(val,stop,save,map__46179,map__46179__$1,title,on_save,on_stop))
,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (val,stop,save,map__46179,map__46179__$1,title,on_save,on_stop){
return (function (p1__46177_SHARP_){
var G__46181 = p1__46177_SHARP_.which;
switch (G__46181) {
case (13):
return save.call(null);

break;
case (27):
return stop.call(null);

break;
default:
return null;

}
});})(val,stop,save,map__46179,map__46179__$1,title,on_save,on_stop))
], null))], null);
});
;})(val,stop,save,map__46179,map__46179__$1,title,on_save,on_stop))
});
pomodoro.todo.todo_edit = cljs.core.with_meta.call(null,pomodoro.todo.todo_input,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (p1__46183_SHARP_){
return reagent.core.dom_node.call(null,p1__46183_SHARP_).focus();
})], null));
pomodoro.todo.todo_stats = (function pomodoro$todo$todo_stats(p__46184){
var map__46185 = p__46184;
var map__46185__$1 = (((((!((map__46185 == null))))?(((((map__46185.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46185.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46185):map__46185);
var filt = cljs.core.get.call(null,map__46185__$1,new cljs.core.Keyword(null,"filt","filt",169229082));
var active = cljs.core.get.call(null,map__46185__$1,new cljs.core.Keyword(null,"active","active",1895962068));
var done = cljs.core.get.call(null,map__46185__$1,new cljs.core.Keyword(null,"done","done",-889844188));
var props_for = ((function (map__46185,map__46185__$1,filt,active,done){
return (function (name){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,name,cljs.core.deref.call(null,filt)))?"selected":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__46185,map__46185__$1,filt,active,done){
return (function (){
return cljs.core.reset_BANG_.call(null,filt,name);
});})(map__46185,map__46185__$1,filt,active,done))
], null);
});})(map__46185,map__46185__$1,filt,active,done))
;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span#todo-count","span#todo-count",-1116128108),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),active], null)," ",(function (){var G__46187 = active;
switch (G__46187) {
case (1):
return "item";

break;
default:
return "items";

}
})()," left"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul#filters","ul#filters",-899831395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),props_for.call(null,new cljs.core.Keyword(null,"all","all",892129742)),"All"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),props_for.call(null,new cljs.core.Keyword(null,"active","active",1895962068)),"Active"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),props_for.call(null,new cljs.core.Keyword(null,"done","done",-889844188)),"Completed"], null)], null)], null),(((done > (0)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#clear-completed","button#clear-completed",-1698725142),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),pomodoro.todo.clear_done], null),"Clear completed ",done], null):null)], null);
});
pomodoro.todo.todo_item = (function pomodoro$todo$todo_item(){
var editing = reagent.core.atom.call(null,false);
return ((function (editing){
return (function (p__46190){
var map__46191 = p__46190;
var map__46191__$1 = (((((!((map__46191 == null))))?(((((map__46191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46191.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46191):map__46191);
var id = cljs.core.get.call(null,map__46191__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var done = cljs.core.get.call(null,map__46191__$1,new cljs.core.Keyword(null,"done","done",-889844188));
var title = cljs.core.get.call(null,map__46191__$1,new cljs.core.Keyword(null,"title","title",636505583));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[(cljs.core.truth_(done)?"completed ":null),(cljs.core.truth_(cljs.core.deref.call(null,editing))?"editing":null)].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.view","div.view",-1680900976),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.toggle","input.toggle",-519545942),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),done,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__46191,map__46191__$1,id,done,title,editing){
return (function (){
return pomodoro.todo.toggle.call(null,id);
});})(map__46191,map__46191__$1,id,done,title,editing))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-double-click","on-double-click",1434856980),((function (map__46191,map__46191__$1,id,done,title,editing){
return (function (){
return cljs.core.reset_BANG_.call(null,editing,true);
});})(map__46191,map__46191__$1,id,done,title,editing))
], null),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.destroy","button.destroy",1044866871),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__46191,map__46191__$1,id,done,title,editing){
return (function (){
return pomodoro.todo.delete$.call(null,id);
});})(map__46191,map__46191__$1,id,done,title,editing))
], null)], null)], null),(cljs.core.truth_(cljs.core.deref.call(null,editing))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pomodoro.todo.todo_edit,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"edit",new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"on-save","on-save",1618176266),((function (map__46191,map__46191__$1,id,done,title,editing){
return (function (p1__46189_SHARP_){
return pomodoro.todo.save.call(null,id,p1__46189_SHARP_);
});})(map__46191,map__46191__$1,id,done,title,editing))
,new cljs.core.Keyword(null,"on-stop","on-stop",1520114515),((function (map__46191,map__46191__$1,id,done,title,editing){
return (function (){
return cljs.core.reset_BANG_.call(null,editing,false);
});})(map__46191,map__46191__$1,id,done,title,editing))
], null)], null):null)], null);
});
;})(editing))
});
pomodoro.todo.todo_app = (function pomodoro$todo$todo_app(props){
var filt = reagent.core.atom.call(null,new cljs.core.Keyword(null,"all","all",892129742));
return ((function (filt){
return (function (){
var items = cljs.core.vals.call(null,cljs.core.deref.call(null,pomodoro.todo.todos));
var done = cljs.core.count.call(null,cljs.core.filter.call(null,new cljs.core.Keyword(null,"done","done",-889844188),items));
var active = (cljs.core.count.call(null,items) - done);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section#todoapp","section#todoapp",41606040),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header#header","header#header",1650878621),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"todos"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pomodoro.todo.todo_input,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"new-todo",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"What needs to be done?",new cljs.core.Keyword(null,"on-save","on-save",1618176266),pomodoro.todo.add_todo], null)], null)], null),(((cljs.core.count.call(null,items) > (0)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section#main","section#main",559170339),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#toggle-all","input#toggle-all",-512330812),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),(active === (0)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (items,done,active,filt){
return (function (){
return pomodoro.todo.complete_all.call(null,(active > (0)));
});})(items,done,active,filt))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"toggle-all"], null),"Mark all as complete"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul#todo-list","ul#todo-list",-1648361723),(function (){var iter__4523__auto__ = ((function (items,done,active,filt){
return (function pomodoro$todo$todo_app_$_iter__46193(s__46194){
return (new cljs.core.LazySeq(null,((function (items,done,active,filt){
return (function (){
var s__46194__$1 = s__46194;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__46194__$1);
if(temp__5735__auto__){
var s__46194__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__46194__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__46194__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__46196 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__46195 = (0);
while(true){
if((i__46195 < size__4522__auto__)){
var todo = cljs.core._nth.call(null,c__4521__auto__,i__46195);
cljs.core.chunk_append.call(null,b__46196,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pomodoro.todo.todo_item,todo], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(todo)], null)));

var G__46198 = (i__46195 + (1));
i__46195 = G__46198;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46196),pomodoro$todo$todo_app_$_iter__46193.call(null,cljs.core.chunk_rest.call(null,s__46194__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46196),null);
}
} else {
var todo = cljs.core.first.call(null,s__46194__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pomodoro.todo.todo_item,todo], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(todo)], null)),pomodoro$todo$todo_app_$_iter__46193.call(null,cljs.core.rest.call(null,s__46194__$2)));
}
} else {
return null;
}
break;
}
});})(items,done,active,filt))
,null,null));
});})(items,done,active,filt))
;
return iter__4523__auto__.call(null,cljs.core.filter.call(null,(function (){var G__46197 = cljs.core.deref.call(null,filt);
var G__46197__$1 = (((G__46197 instanceof cljs.core.Keyword))?G__46197.fqn:null);
switch (G__46197__$1) {
case "active":
return cljs.core.complement.call(null,new cljs.core.Keyword(null,"done","done",-889844188));

break;
case "done":
return new cljs.core.Keyword(null,"done","done",-889844188);

break;
case "all":
return cljs.core.identity;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46197__$1)].join('')));

}
})(),items));
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer#footer","footer#footer",-1164052935),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pomodoro.todo.todo_stats,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"active","active",1895962068),active,new cljs.core.Keyword(null,"done","done",-889844188),done,new cljs.core.Keyword(null,"filt","filt",169229082),filt], null)], null)], null)], null):null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer#info","footer#info",1634811413),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Double-click to edit a todo"], null)], null)], null);
});
;})(filt))
});

//# sourceMappingURL=todo.js.map?rel=1562993775849