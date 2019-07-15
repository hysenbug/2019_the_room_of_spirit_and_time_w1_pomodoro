// Compiled by ClojureScript 1.10.520 {}
goog.provide('pomodoro.highchart');
goog.require('cljs.core');
goog.require('reagent.core');
pomodoro.highchart.home_render = (function pomodoro$highchart$home_render(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"min-width","min-width",1926193728),"310px",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"800px",new cljs.core.Keyword(null,"height","height",1025178622),"400px",new cljs.core.Keyword(null,"margin","margin",-995903681),"0 auto"], null)], null)], null);
});
pomodoro.highchart.chart_config = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"series","series",600710694),new cljs.core.Keyword(null,"legend","legend",-1027192245),new cljs.core.Keyword(null,"plotOptions","plotOptions",-1622538002),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"chart","chart",1173225425),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),new cljs.core.Keyword(null,"credits","credits",785860820),new cljs.core.Keyword(null,"subtitle","subtitle",-1614524363),new cljs.core.Keyword(null,"xAxis","xAxis",1266196059),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058)],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Year 1800",new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(107),(31),(635),(203),(2)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Year 1900",new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(133),(156),(947),(408),(6)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Year 2008",new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(973),(914),(4054),(732),(34)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"layout","layout",-2120940921),"vertical",new cljs.core.Keyword(null,"align","align",1964212802),"right",new cljs.core.Keyword(null,"verticalAlign","verticalAlign",465597462),"top",new cljs.core.Keyword(null,"x","x",2099068185),(-40),new cljs.core.Keyword(null,"y","y",-1757859776),(100),new cljs.core.Keyword(null,"floating","floating",-1978091029),true,new cljs.core.Keyword(null,"borderWidth","borderWidth",1775770350),(1),new cljs.core.Keyword(null,"shadow","shadow",873231803),true], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bar","bar",-1386246584),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dataLabels","dataLabels",63731124),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enabled","enabled",1195909756),true], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Historic World Population by Region"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"bar"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"Population (millions)",new cljs.core.Keyword(null,"align","align",1964212802),"high"], null),new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"overflow","overflow",2058931880),"justify"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enabled","enabled",1195909756),false], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Source: Wikipedia.org"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"categories","categories",178386610),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Africa","America","Asia","Europe","Oceania"], null),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),null], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"valueSuffix","valueSuffix",844437722)," millions"], null)]);
pomodoro.highchart.home_did_mount = (function pomodoro$highchart$home_did_mount(this$){
return (new Highcharts.Chart(reagent.core.dom_node.call(null,this$),cljs.core.clj__GT_js.call(null,pomodoro.highchart.chart_config)));
});
pomodoro.highchart.home = (function pomodoro$highchart$home(){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),pomodoro.highchart.home_render,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),pomodoro.highchart.home_did_mount], null));
});

//# sourceMappingURL=highchart.js.map?rel=1563204854923
