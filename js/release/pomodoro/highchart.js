// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pomodoro.highchart');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
pomodoro.highchart.home_render = (function pomodoro$highchart$home_render(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$min_DASH_width,"310px",cljs.core.cst$kw$max_DASH_width,"800px",cljs.core.cst$kw$height,"400px",cljs.core.cst$kw$margin,"0 auto"], null)], null)], null);
});
pomodoro.highchart.chart_config = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$series,cljs.core.cst$kw$legend,cljs.core.cst$kw$plotOptions,cljs.core.cst$kw$title,cljs.core.cst$kw$chart,cljs.core.cst$kw$yAxis,cljs.core.cst$kw$credits,cljs.core.cst$kw$subtitle,cljs.core.cst$kw$xAxis,cljs.core.cst$kw$tooltip],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Year 1800",cljs.core.cst$kw$data,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(107),(31),(635),(203),(2)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Year 1900",cljs.core.cst$kw$data,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(133),(156),(947),(408),(6)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Year 2008",cljs.core.cst$kw$data,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(973),(914),(4054),(732),(34)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$layout,"vertical",cljs.core.cst$kw$align,"right",cljs.core.cst$kw$verticalAlign,"top",cljs.core.cst$kw$x,(-40),cljs.core.cst$kw$y,(100),cljs.core.cst$kw$floating,true,cljs.core.cst$kw$borderWidth,(1),cljs.core.cst$kw$shadow,true], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$bar,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dataLabels,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$enabled,true], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text,"Historic World Population by Region"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,"bar"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$min,(0),cljs.core.cst$kw$title,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$text,"Population (millions)",cljs.core.cst$kw$align,"high"], null),cljs.core.cst$kw$labels,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$overflow,"justify"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$enabled,false], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text,"Source: Wikipedia.org"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$categories,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Africa","America","Asia","Europe","Oceania"], null),cljs.core.cst$kw$title,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text,null], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$valueSuffix," millions"], null)]);
pomodoro.highchart.home_did_mount = (function pomodoro$highchart$home_did_mount(this$){
return (new Highcharts.Chart(reagent.core.dom_node(this$),cljs.core.clj__GT_js(pomodoro.highchart.chart_config)));
});
pomodoro.highchart.home = (function pomodoro$highchart$home(){
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reagent_DASH_render,pomodoro.highchart.home_render,cljs.core.cst$kw$component_DASH_did_DASH_mount,pomodoro.highchart.home_did_mount], null));
});
