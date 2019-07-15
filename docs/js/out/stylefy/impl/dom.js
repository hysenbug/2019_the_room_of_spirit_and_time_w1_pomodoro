// Compiled by ClojureScript 1.10.520 {}
goog.provide('stylefy.impl.dom');
goog.require('cljs.core');
goog.require('dommy.core');
goog.require('reagent.core');
goog.require('garden.core');
goog.require('cljs.core.async');
goog.require('stylefy.impl.cache');
goog.require('stylefy.impl.utils');
goog.require('stylefy.impl.conversion');
goog.require('garden.stylesheet');
goog.require('clojure.set');
stylefy.impl.dom.stylefy_initialised_QMARK_ = cljs.core.atom.call(null,false);
stylefy.impl.dom.styles_in_dom = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
stylefy.impl.dom.dom_update_requested_QMARK_ = cljs.core.atom.call(null,false);
stylefy.impl.dom.styles_as_css = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
stylefy.impl.dom.keyframes_in_use = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
stylefy.impl.dom.font_faces_in_use = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
stylefy.impl.dom.custom_tags_in_use = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
stylefy.impl.dom.custom_classes_in_use = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
stylefy.impl.dom.stylefy_node_id = "#_stylefy-styles_";
stylefy.impl.dom.stylefy_constant_node_id = "#_stylefy-constant-styles_";
stylefy.impl.dom.stylefy_base_node = cljs.core.atom.call(null,null);
stylefy.impl.dom.stylefy_instance_id = cljs.core.atom.call(null,null);
stylefy.impl.dom.style_by_hash = (function stylefy$impl$dom$style_by_hash(style_hash){
if(cljs.core.truth_(style_hash)){
return cljs.core.get.call(null,cljs.core.deref.call(null,stylefy.impl.dom.styles_as_css),style_hash);
} else {
return null;
}
});
stylefy.impl.dom.update_style_tags_BANG_ = (function stylefy$impl$dom$update_style_tags_BANG_(node_stylefy,node_stylefy_constant){
var styles_in_css = cljs.core.map.call(null,cljs.core.comp.call(null,new cljs.core.Keyword("stylefy.impl.dom","css","stylefy.impl.dom/css",915861061),stylefy.impl.dom.style_by_hash),cljs.core.keys.call(null,cljs.core.deref.call(null,stylefy.impl.dom.styles_as_css)));
var keyframes_in_css = cljs.core.vals.call(null,cljs.core.deref.call(null,stylefy.impl.dom.keyframes_in_use));
var font_faces_in_use = cljs.core.map.call(null,new cljs.core.Keyword("stylefy.impl.dom","css","stylefy.impl.dom/css",915861061),cljs.core.deref.call(null,stylefy.impl.dom.font_faces_in_use));
var custom_tags_in_use = cljs.core.map.call(null,new cljs.core.Keyword("stylefy.impl.dom","css","stylefy.impl.dom/css",915861061),cljs.core.deref.call(null,stylefy.impl.dom.custom_tags_in_use));
var custom_classes_in_use = cljs.core.map.call(null,new cljs.core.Keyword("stylefy.impl.dom","css","stylefy.impl.dom/css",915861061),cljs.core.deref.call(null,stylefy.impl.dom.custom_classes_in_use));
var new_style_constant_css = cljs.core.apply.call(null,cljs.core.str,cljs.core.concat.call(null,font_faces_in_use,keyframes_in_css,custom_tags_in_use,custom_classes_in_use));
var new_style_css = cljs.core.apply.call(null,cljs.core.str,styles_in_css);
if(cljs.core._EQ_.call(null,dommy.core.text.call(null,node_stylefy_constant),new_style_constant_css)){
} else {
dommy.core.set_text_BANG_.call(null,node_stylefy_constant,new_style_constant_css);
}

return dommy.core.set_text_BANG_.call(null,node_stylefy,new_style_css);
});
stylefy.impl.dom.mark_all_styles_added_in_dom_BANG_ = (function stylefy$impl$dom$mark_all_styles_added_in_dom_BANG_(){
var seq__47498 = cljs.core.seq.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,stylefy.impl.dom.styles_in_dom)));
var chunk__47499 = null;
var count__47500 = (0);
var i__47501 = (0);
while(true){
if((i__47501 < count__47500)){
var style_hash = cljs.core._nth.call(null,chunk__47499,i__47501);
cljs.core.reset_BANG_.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,stylefy.impl.dom.styles_in_dom),style_hash),true);


var G__47502 = seq__47498;
var G__47503 = chunk__47499;
var G__47504 = count__47500;
var G__47505 = (i__47501 + (1));
seq__47498 = G__47502;
chunk__47499 = G__47503;
count__47500 = G__47504;
i__47501 = G__47505;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__47498);
if(temp__5735__auto__){
var seq__47498__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47498__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__47498__$1);
var G__47506 = cljs.core.chunk_rest.call(null,seq__47498__$1);
var G__47507 = c__4550__auto__;
var G__47508 = cljs.core.count.call(null,c__4550__auto__);
var G__47509 = (0);
seq__47498 = G__47506;
chunk__47499 = G__47507;
count__47500 = G__47508;
i__47501 = G__47509;
continue;
} else {
var style_hash = cljs.core.first.call(null,seq__47498__$1);
cljs.core.reset_BANG_.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,stylefy.impl.dom.styles_in_dom),style_hash),true);


var G__47510 = cljs.core.next.call(null,seq__47498__$1);
var G__47511 = null;
var G__47512 = (0);
var G__47513 = (0);
seq__47498 = G__47510;
chunk__47499 = G__47511;
count__47500 = G__47512;
i__47501 = G__47513;
continue;
}
} else {
return null;
}
}
break;
}
});
stylefy.impl.dom.get_stylefy_node = (function stylefy$impl$dom$get_stylefy_node(id,base_node,instance_id){
var final_id = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),(cljs.core.truth_(instance_id)?cljs.core.str.cljs$core$IFn$_invoke$arity$1(instance_id):null)].join('');
if((base_node == null)){
return document.querySelector(dommy.core.selector.call(null,final_id));
} else {
return base_node.querySelector(dommy.core.selector.call(null,final_id));
}
});
stylefy.impl.dom.update_dom = (function stylefy$impl$dom$update_dom(){
var node_stylefy = stylefy.impl.dom.get_stylefy_node.call(null,stylefy.impl.dom.stylefy_node_id,cljs.core.deref.call(null,stylefy.impl.dom.stylefy_base_node),cljs.core.deref.call(null,stylefy.impl.dom.stylefy_instance_id));
var node_stylefy_constant = stylefy.impl.dom.get_stylefy_node.call(null,stylefy.impl.dom.stylefy_constant_node_id,cljs.core.deref.call(null,stylefy.impl.dom.stylefy_base_node),cljs.core.deref.call(null,stylefy.impl.dom.stylefy_instance_id));
if(cljs.core.truth_((function (){var and__4120__auto__ = node_stylefy;
if(cljs.core.truth_(and__4120__auto__)){
return node_stylefy_constant;
} else {
return and__4120__auto__;
}
})())){
stylefy.impl.dom.update_style_tags_BANG_.call(null,node_stylefy,node_stylefy_constant);

cljs.core.reset_BANG_.call(null,stylefy.impl.dom.dom_update_requested_QMARK_,false);

try{stylefy.impl.cache.cache_styles.call(null,cljs.core.deref.call(null,stylefy.impl.dom.styles_as_css),cljs.core.deref.call(null,stylefy.impl.dom.stylefy_instance_id));
}catch (e47514){var e_47515 = e47514;
console.warn(["Unable to cache styles, error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_47515)].join(''));

stylefy.impl.cache.clear_styles.call(null,cljs.core.deref.call(null,stylefy.impl.dom.stylefy_instance_id));

}
return stylefy.impl.dom.mark_all_styles_added_in_dom_BANG_.call(null);
} else {
return console.error("stylefy is unable to find the required <style> tags!");
}
});
stylefy.impl.dom.update_dom_if_requested = (function stylefy$impl$dom$update_dom_if_requested(){
if(cljs.core.truth_(cljs.core.deref.call(null,stylefy.impl.dom.dom_update_requested_QMARK_))){
return stylefy.impl.dom.update_dom.call(null);
} else {
return null;
}
});
stylefy.impl.dom.request_asynchronous_dom_update = (function stylefy$impl$dom$request_asynchronous_dom_update(){
if(cljs.core.truth_(cljs.core.deref.call(null,stylefy.impl.dom.stylefy_initialised_QMARK_))){
if(cljs.core.truth_(cljs.core.deref.call(null,stylefy.impl.dom.dom_update_requested_QMARK_))){
return null;
} else {
cljs.core.reset_BANG_.call(null,stylefy.impl.dom.dom_update_requested_QMARK_,true);

var c__37202__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37202__auto__){
return (function (){
var f__37203__auto__ = (function (){var switch__37035__auto__ = ((function (c__37202__auto__){
return (function (state_47518){
var state_val_47519 = (state_47518[(1)]);
if((state_val_47519 === (1))){
var inst_47516 = stylefy.impl.dom.update_dom.call(null);
var state_47518__$1 = state_47518;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47518__$1,inst_47516);
} else {
return null;
}
});})(c__37202__auto__))
;
return ((function (switch__37035__auto__,c__37202__auto__){
return (function() {
var stylefy$impl$dom$request_asynchronous_dom_update_$_state_machine__37036__auto__ = null;
var stylefy$impl$dom$request_asynchronous_dom_update_$_state_machine__37036__auto____0 = (function (){
var statearr_47520 = [null,null,null,null,null,null,null];
(statearr_47520[(0)] = stylefy$impl$dom$request_asynchronous_dom_update_$_state_machine__37036__auto__);

(statearr_47520[(1)] = (1));

return statearr_47520;
});
var stylefy$impl$dom$request_asynchronous_dom_update_$_state_machine__37036__auto____1 = (function (state_47518){
while(true){
var ret_value__37037__auto__ = (function (){try{while(true){
var result__37038__auto__ = switch__37035__auto__.call(null,state_47518);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37038__auto__;
}
break;
}
}catch (e47521){if((e47521 instanceof Object)){
var ex__37039__auto__ = e47521;
var statearr_47522_47524 = state_47518;
(statearr_47522_47524[(5)] = ex__37039__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47518);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47521;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47525 = state_47518;
state_47518 = G__47525;
continue;
} else {
return ret_value__37037__auto__;
}
break;
}
});
stylefy$impl$dom$request_asynchronous_dom_update_$_state_machine__37036__auto__ = function(state_47518){
switch(arguments.length){
case 0:
return stylefy$impl$dom$request_asynchronous_dom_update_$_state_machine__37036__auto____0.call(this);
case 1:
return stylefy$impl$dom$request_asynchronous_dom_update_$_state_machine__37036__auto____1.call(this,state_47518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
stylefy$impl$dom$request_asynchronous_dom_update_$_state_machine__37036__auto__.cljs$core$IFn$_invoke$arity$0 = stylefy$impl$dom$request_asynchronous_dom_update_$_state_machine__37036__auto____0;
stylefy$impl$dom$request_asynchronous_dom_update_$_state_machine__37036__auto__.cljs$core$IFn$_invoke$arity$1 = stylefy$impl$dom$request_asynchronous_dom_update_$_state_machine__37036__auto____1;
return stylefy$impl$dom$request_asynchronous_dom_update_$_state_machine__37036__auto__;
})()
;})(switch__37035__auto__,c__37202__auto__))
})();
var state__37204__auto__ = (function (){var statearr_47523 = f__37203__auto__.call(null);
(statearr_47523[(6)] = c__37202__auto__);

return statearr_47523;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37204__auto__);
});})(c__37202__auto__))
);

return c__37202__auto__;
}
} else {
return null;
}
});
stylefy.impl.dom.check_stylefy_initialisation = (function stylefy$impl$dom$check_stylefy_initialisation(){
if(cljs.core.truth_(cljs.core.deref.call(null,stylefy.impl.dom.stylefy_initialised_QMARK_))){
return null;
} else {
return console.warn("use-style called before stylefy was initialised!");
}
});
stylefy.impl.dom.init_multi_instance = (function stylefy$impl$dom$init_multi_instance(p__47526){
var map__47527 = p__47526;
var map__47527__$1 = (((((!((map__47527 == null))))?(((((map__47527.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47527.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47527):map__47527);
var options = map__47527__$1;
var multi_instance = cljs.core.get.call(null,map__47527__$1,new cljs.core.Keyword(null,"multi-instance","multi-instance",-1525956512));
var base_node = new cljs.core.Keyword(null,"base-node","base-node",-275497090).cljs$core$IFn$_invoke$arity$1(multi_instance);
var instance_id = new cljs.core.Keyword(null,"instance-id","instance-id",951361263).cljs$core$IFn$_invoke$arity$1(multi_instance);
if((((instance_id == null)) || (typeof instance_id === 'string'))){
} else {
throw (new Error(["Assert failed: ",["instance-id must be string. Got: ",cljs.core.pr_str.call(null,base_node,instance_id)].join(''),"\n","(or (nil? instance-id) (string? instance-id))"].join('')));
}

cljs.core.reset_BANG_.call(null,stylefy.impl.dom.stylefy_base_node,base_node);

return cljs.core.reset_BANG_.call(null,stylefy.impl.dom.stylefy_instance_id,instance_id);
});
stylefy.impl.dom.init_cache = (function stylefy$impl$dom$init_cache(options){
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"use-caching?","use-caching?",427588313).cljs$core$IFn$_invoke$arity$1(options),false)){
stylefy.impl.cache.use_caching_BANG_.call(null,new cljs.core.Keyword(null,"cache-options","cache-options",1443503739).cljs$core$IFn$_invoke$arity$1(options),cljs.core.deref.call(null,stylefy.impl.dom.stylefy_instance_id));

var temp__5735__auto__ = stylefy.impl.cache.read_cache_value.call(null,stylefy.impl.cache.cache_key_styles.call(null,cljs.core.deref.call(null,stylefy.impl.dom.stylefy_instance_id)));
if(cljs.core.truth_(temp__5735__auto__)){
var cached_styles = temp__5735__auto__;
cljs.core.reset_BANG_.call(null,stylefy.impl.dom.styles_as_css,(function (){var or__4131__auto__ = cached_styles;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());

return cljs.core.reset_BANG_.call(null,stylefy.impl.dom.styles_in_dom,cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,((function (cached_styles,temp__5735__auto__){
return (function (p1__47529_SHARP_){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([p1__47529_SHARP_,reagent.core.atom.call(null,false)]);
});})(cached_styles,temp__5735__auto__))
,cljs.core.keys.call(null,cached_styles))));
} else {
return null;
}
} else {
return null;
}
});
/**
 * Stores the style in an atom. The style is going to be added into the DOM soon.
 */
stylefy.impl.dom.save_style_BANG_ = (function stylefy$impl$dom$save_style_BANG_(p__47530){
var map__47531 = p__47530;
var map__47531__$1 = (((((!((map__47531 == null))))?(((((map__47531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47531.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47531):map__47531);
var style = map__47531__$1;
var props = cljs.core.get.call(null,map__47531__$1,new cljs.core.Keyword(null,"props","props",453281727));
var hash = cljs.core.get.call(null,map__47531__$1,new cljs.core.Keyword(null,"hash","hash",-13781596));
if(cljs.core.truth_(props)){
} else {
throw (new Error(["Assert failed: ","Unable to save empty style!","\n","props"].join('')));
}

if(cljs.core.truth_(hash)){
} else {
throw (new Error(["Assert failed: ","Unable to save style without hash!","\n","hash"].join('')));
}

var style_css = stylefy.impl.conversion.style__GT_css.call(null,style);
var style_to_be_saved = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("stylefy.impl.dom","css","stylefy.impl.dom/css",915861061),style_css], null);
cljs.core.swap_BANG_.call(null,stylefy.impl.dom.styles_as_css,cljs.core.assoc,hash,style_to_be_saved);

cljs.core.swap_BANG_.call(null,stylefy.impl.dom.styles_in_dom,cljs.core.assoc,hash,reagent.core.atom.call(null,false));

return stylefy.impl.dom.request_asynchronous_dom_update.call(null);
});
stylefy.impl.dom.style_in_dom_QMARK_ = (function stylefy$impl$dom$style_in_dom_QMARK_(style_hash){
return cljs.core.boolean$.call(null,cljs.core.deref.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,stylefy.impl.dom.styles_in_dom),style_hash)));
});
stylefy.impl.dom.add_keyframes = (function stylefy$impl$dom$add_keyframes(var_args){
var args__4736__auto__ = [];
var len__4730__auto___47535 = arguments.length;
var i__4731__auto___47536 = (0);
while(true){
if((i__4731__auto___47536 < len__4730__auto___47535)){
args__4736__auto__.push((arguments[i__4731__auto___47536]));

var G__47537 = (i__4731__auto___47536 + (1));
i__4731__auto___47536 = G__47537;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return stylefy.impl.dom.add_keyframes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

stylefy.impl.dom.add_keyframes.cljs$core$IFn$_invoke$arity$variadic = (function (identifier,frames){
var garden_definition = cljs.core.apply.call(null,garden.stylesheet.at_keyframes,identifier,frames);
cljs.core.swap_BANG_.call(null,stylefy.impl.dom.keyframes_in_use,cljs.core.assoc,identifier,garden.core.css.call(null,garden_definition));

stylefy.impl.dom.request_asynchronous_dom_update.call(null);

return garden_definition;
});

stylefy.impl.dom.add_keyframes.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
stylefy.impl.dom.add_keyframes.cljs$lang$applyTo = (function (seq47533){
var G__47534 = cljs.core.first.call(null,seq47533);
var seq47533__$1 = cljs.core.next.call(null,seq47533);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47534,seq47533__$1);
});

stylefy.impl.dom.add_font_face = (function stylefy$impl$dom$add_font_face(properties){
var garden_definition = garden.stylesheet.at_font_face.call(null,properties);
cljs.core.swap_BANG_.call(null,stylefy.impl.dom.font_faces_in_use,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("stylefy.impl.dom","css","stylefy.impl.dom/css",915861061),garden.core.css.call(null,garden_definition)], null));

stylefy.impl.dom.request_asynchronous_dom_update.call(null);

return garden_definition;
});
stylefy.impl.dom.add_tag = (function stylefy$impl$dom$add_tag(name,properties){
var custom_tag_definition = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("stylefy.impl.dom","tag-name","stylefy.impl.dom/tag-name",-639357087),name,new cljs.core.Keyword("stylefy.impl.dom","tag-properties","stylefy.impl.dom/tag-properties",327168703),properties], null);
cljs.core.swap_BANG_.call(null,stylefy.impl.dom.custom_tags_in_use,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("stylefy.impl.dom","css","stylefy.impl.dom/css",915861061),stylefy.impl.conversion.style__GT_css.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword("stylefy.impl.dom","tag-properties","stylefy.impl.dom/tag-properties",327168703).cljs$core$IFn$_invoke$arity$1(custom_tag_definition),new cljs.core.Keyword(null,"custom-selector","custom-selector",-474556277),new cljs.core.Keyword("stylefy.impl.dom","tag-name","stylefy.impl.dom/tag-name",-639357087).cljs$core$IFn$_invoke$arity$1(custom_tag_definition)], null))], null));

stylefy.impl.dom.request_asynchronous_dom_update.call(null);

return custom_tag_definition;
});
stylefy.impl.dom.add_class = (function stylefy$impl$dom$add_class(name,properties){
var custom_class_definition = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("stylefy.impl.dom","class-name","stylefy.impl.dom/class-name",1864711126),name,new cljs.core.Keyword("stylefy.impl.dom","class-properties","stylefy.impl.dom/class-properties",-2034606216),properties], null);
cljs.core.swap_BANG_.call(null,stylefy.impl.dom.custom_classes_in_use,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("stylefy.impl.dom","css","stylefy.impl.dom/css",915861061),stylefy.impl.conversion.style__GT_css.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword("stylefy.impl.dom","class-properties","stylefy.impl.dom/class-properties",-2034606216).cljs$core$IFn$_invoke$arity$1(custom_class_definition),new cljs.core.Keyword(null,"custom-selector","custom-selector",-474556277),stylefy.impl.conversion.class_selector.call(null,new cljs.core.Keyword("stylefy.impl.dom","class-name","stylefy.impl.dom/class-name",1864711126).cljs$core$IFn$_invoke$arity$1(custom_class_definition))], null))], null));

stylefy.impl.dom.request_asynchronous_dom_update.call(null);

return custom_class_definition;
});

//# sourceMappingURL=dom.js.map?rel=1562998564693