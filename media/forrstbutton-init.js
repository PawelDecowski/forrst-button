// Generated by CoffeeScript 1.4.0
(function(){var e,t;t=function(){var t,n;n=$("#username").val().length?$("#username").val():"forrst";t="http://"+window.location.hostname+"/"+n;$("#count").is(":not(:checked)")&&(t+="?count=false");$("#preview iframe").attr("src",t);$("textarea").text('<iframe src="'+t+'" width="240" height="20">');return clearTimeout(e)};e=null;$(function(){$("input:checkbox").on("change",t);$("input:text").on("change",t);$("input:text").on("input keyup",function(){clearTimeout(e);return e=setTimeout(t,500)});$("textarea").click(function(){return $(this).select()});return t()})}).call(this);