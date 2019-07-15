// Compiled by ClojureScript 1.10.520 {}
goog.provide('dommy.utils');
goog.require('cljs.core');
/**
 * Dissociate this keyseq from m, removing any empty maps created as a result
 * (including at the top-level).
 */
dommy.utils.dissoc_in = (function dommy$utils$dissoc_in(m,p__39817){
var vec__39818 = p__39817;
var seq__39819 = cljs.core.seq.call(null,vec__39818);
var first__39820 = cljs.core.first.call(null,seq__39819);
var seq__39819__$1 = cljs.core.next.call(null,seq__39819);
var k = first__39820;
var ks = seq__39819__$1;
if(cljs.core.truth_(m)){
var temp__5733__auto__ = (function (){var and__4120__auto__ = ks;
if(and__4120__auto__){
return dommy.utils.dissoc_in.call(null,m.call(null,k),ks);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var res = temp__5733__auto__;
return cljs.core.assoc.call(null,m,k,res);
} else {
var res = cljs.core.dissoc.call(null,m,k);
if(cljs.core.empty_QMARK_.call(null,res)){
return null;
} else {
return res;
}
}
} else {
return null;
}
});
dommy.utils.__GT_Array = (function dommy$utils$__GT_Array(array_like){
return Array.prototype.slice.call(array_like);
});
/**
 * Coerces strings and keywords to strings, while preserving namespace of
 * namespaced keywords
 */
dommy.utils.as_str = (function dommy$utils$as_str(s){
if((s instanceof cljs.core.Keyword)){
return [(function (){var G__39822 = cljs.core.namespace.call(null,s);
if((G__39822 == null)){
return null;
} else {
return [G__39822,"/"].join('');
}
})(),cljs.core.name.call(null,s)].join('');
} else {
return s;
}
});
/**
 * Does `class-name` string have class starting at index idx.
 * only will be used when Element::classList doesn't exist
 */
dommy.utils.class_match_QMARK_ = (function dommy$utils$class_match_QMARK_(class_name,class$,idx){
var and__4120__auto__ = (((idx === (0))) || ((" " === class_name.charAt((idx - (1))))));
if(and__4120__auto__){
var total_len = class_name.length;
var stop = (idx + class$.length);
if((stop <= total_len)){
return (((stop === total_len)) || ((" " === class_name.charAt(stop))));
} else {
return null;
}
} else {
return and__4120__auto__;
}
});
/**
 * Finds the index of class in a space-delimited class-name
 *  only will be used when Element::classList doesn't exist
 */
dommy.utils.class_index = (function dommy$utils$class_index(class_name,class$){
var start_from = (0);
while(true){
var i = class_name.indexOf(class$,start_from);
if((i >= (0))){
if(dommy.utils.class_match_QMARK_.call(null,class_name,class$,i)){
return i;
} else {
var G__39823 = (i + class$.length);
start_from = G__39823;
continue;
}
} else {
return null;
}
break;
}
});
dommy.utils.remove_class_str = (function dommy$utils$remove_class_str(init_class_name,class$){
var class_name = init_class_name;
while(true){
var class_len = class_name.length;
var temp__5733__auto__ = dommy.utils.class_index.call(null,class_name,class$);
if(cljs.core.truth_(temp__5733__auto__)){
var i = temp__5733__auto__;
var G__39824 = (function (){var end = (i + class$.length);
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((((end < class_len))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name.substring((0),i)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name.substr((end + (1))))].join(''):class_name.substring((0),(i - (1)))));
})();
class_name = G__39824;
continue;
} else {
return class_name;
}
break;
}
});

//# sourceMappingURL=utils.js.map?rel=1563183874061
