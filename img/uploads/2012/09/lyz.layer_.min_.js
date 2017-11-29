/*
* Summary: lyz.layer 1.0
*/
jQuery.extend({alert:function(a){Prompt("alert","",a)},right:function(a){Prompt("right","\u64cd\u4f5c\u6210\u529f\uff01",a)},error:function(a){Prompt("error","\u5f88\u62b1\u6b49\uff0c\u672a\u80fd\u5b8c\u6210\u64cd\u4f5c\uff01",a)},confirm:function(a){Prompt("confirm","\u60a8\u786e\u5b9a\u8981\u6267\u884c\u5417\uff1f",a)},container:function(a){if(!(a===undefined||$(a.targetId).length===0)){a=jQuery.extend({content:$(a.targetId).prop("innerHTML"),type:"container"},a||{});CreateLayer(a)}},frame:function(a){if(!(a===
undefined||a.pageUrl===undefined||a.pageUrl==="")){a=jQuery.extend({content:"<iframe width='100%' frameBorder='0'></iframe>",type:"frame"},a||{});CreateLayer(a)}},custom:function(a){a=jQuery.extend({type:"custom"},a||{});CreateLayer(a)}});
function Prompt(a,d,c){c=jQuery.extend({title:"\u6e29\u99a8\u63d0\u793a",content:"<div class='layer_msg "+a+"_icon'><p>"+(c===undefined||c.msg===undefined?d:c.msg)+"</p><div class='but'><button id='btnSure' type='button'>\u786e\u5b9a</button>"+(a=="confirm"?"<button id='btnCancel' type='button'>\u53d6\u6d88</button>":"")+"</div></div>",width:340,height:96,drag:true,type:a,callback:function(){}},c||{});CreateLayer(c)}
function CreateLayer(a){a=jQuery.extend({icon:"",title:"",content:"",width:0,height:0,background:"#000",opacity:0.5,duration:"normal",showTitle:true,escClose:true,masksClose:false,drag:false,dragOpacity:1,type:"custom"},a||{});$(".wait").remove();$(".masks").empty().remove();$(".popMain").empty().remove();$("body").append("<div class='masks'></div>");var d=$(".masks");d.css({"background-color":a.background,filter:"alpha(opacity="+a.opacity*100+")","-moz-opacity":a.opacity,opacity:a.opacity});a.masksClose&&
d.bind("click",function(){CloseLayer()});a.escClose&&$(document).bind("keyup",function(e){try{e.keyCode==27&&CloseLayer()}catch(f){CloseLayer()}});if($.browser.msie&&$.browser.version=="6.0"){d.height($(document).height());d.width(document.documentElement.clientWidth);$(window).resize(function(){d.height($(document).height());d.width(document.documentElement.clientWidth)})}d.fadeIn(a.duration);var c="<div class='popMain'>";c+="<div class='popTitle'>"+(a.icon!==undefined&&a.icon!==""?"<img class='icon' src='"+
a.icon+"' />":"")+"<span class='text'>"+a.title+"</span><a class='close'></a></div>";c+="<div class='popContent'>"+a.content+"</div>";c+="</div>";$("body").append(c);var b=$(".popMain");c=$(".popTitle");var g=$(".popContent");a.showTitle?c.show():c.hide();a.width!==0&&c.width(a.width);$(".popTitle .close").bind("click",function(){$(".wait").hide();d.fadeOut(a.duration);b.fadeOut(a.duration);b.attr("isClose","1");a.type=="container"&&$(a.targetId).empty().append(a.content);if(!($.browser.msie&&$.browser.version==
"6.0")){$(document).unbind("keyup");$(document).unbind("mousemove");$(document).unbind("mouseup")}});a.width!==0&&g.width(a.width);a.height!==0&&g.height(a.height);if($.browser.msie&&$.browser.version=="6.0"){b.show();b.css({top:"50%",left:"50%",marginTop:document.documentElement.scrollTop-b.prop("offsetHeight")/2+"px",marginLeft:document.documentElement.scrollLeft-b.prop("offsetWidth")/2+"px"});b.hide()}else{b.css({left:$(window).width()/2-b.width()/2+"px",top:$(window).height()/2-b.height()/2+"px"});
$(window).resize(function(){b.css({left:$(window).width()/2-b.width()/2+"px",top:$(window).height()/2-b.height()/2+"px"})});a.drag&&Drag(a.drag,a.dragOpacity)}switch(a.type){case "alert":case "right":case "error":b.fadeIn(a.duration,function(){b.attr("style",b.attr("style").replace("FILTER:",""))});$("#btnSure").bind("click",function(){a.callback();CloseLayer()});break;case "confirm":b.fadeIn(a.duration,function(){b.attr("style",b.attr("style").replace("FILTER:",""))});$("#btnSure").bind("click",
function(){a.callback(true);CloseLayer()});$("#btnCancel").bind("click",function(){a.callback(false);CloseLayer()});break;case "container":$(a.targetId).empty();b.fadeIn(a.duration,function(){b.attr("style",b.attr("style").replace("FILTER:",""))});break;case "frame":$(".popContent iframe").height(a.height);$(".popContent iframe").prop("src",a.pageUrl);$("body").append("<span class='wait'></span>");if($.browser.msie&&$.browser.version=="6.0"){$(".wait").show();$(".wait").css({top:"50%",left:"50%",
marginTop:document.documentElement.scrollTop-$(".wait").prop("offsetHeight")/2+"px",marginLeft:document.documentElement.scrollLeft-$(".wait").prop("offsetWidth")/2+"px"});$(window).bind("scroll",function(){$(".wait").show();$(".wait").css({top:"50%",left:"50%",marginTop:document.documentElement.scrollTop-$(".wait").prop("offsetHeight")/2+"px",marginLeft:document.documentElement.scrollLeft-$(".wait").prop("offsetWidth")/2+"px"})})}$(".popContent iframe").bind("load",function(){if(b.attr("isClose")!=
"1"){$(".wait").hide();b.fadeIn(a.duration,function(){b.attr("style",b.attr("style").replace("FILTER:",""))})}$.browser.msie&&$.browser.version=="6.0"&&$(window).unbind("scroll").bind("scroll",function(){if(b.attr("isClose")!="1"){b.show();b.css({top:"50%",left:"50%",marginTop:document.documentElement.scrollTop-b.prop("offsetHeight")/2+"px",marginLeft:document.documentElement.scrollLeft-b.prop("offsetWidth")/2+"px"})}})});break;default:b.fadeIn(a.duration,function(){b.attr("style",b.attr("style").replace("FILTER:",
""))});break}}function CloseLayer(){$(".popTitle .close").triggerHandler("click")}
function Drag(a,d){var c=false,b,g;$(".popTitle").bind("mousedown",function(e){if($(".popMain:visible").length>0){c=true;b=e.pageX-parseInt($(".popMain").css("left"),10);g=e.pageY-parseInt($(".popMain").css("top"),10);$(".popTitle").css({cursor:"move"})}});$(document).bind("mousemove",function(e){if(c&&$(".popMain:visible").length>0&&a){d!=1&&$(".popMain").fadeTo(0,d);var f=e.pageX-b;e=e.pageY-g;if(f<0)f=0;if(f>$(window).width()-$(".popMain").width())f=$(window).width()-$(".popMain").width()-2;if(e<
0)e=0;if(e>$(window).height()-$(".popMain").height())e=$(window).height()-$(".popMain").height()-2;$(".popMain").css({top:e,left:f})}}).bind("mouseup",function(){if($(".popMain:visible").length>0&&a){c=false;d!=1&&$(".popMain").fadeTo(0,1);$(".popTitle").css({cursor:"auto"})}})};
