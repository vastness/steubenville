(function(){"use strict";var e=typeof window!="undefined"?window:global;if(typeof e.require=="function")return;var t={},n={},r=function(e,t){return{}.hasOwnProperty.call(e,t)},i=function(e,t){var n=[],r,i;/^\.\.?(\/|$)/.test(t)?r=[e,t].join("/").split("/"):r=t.split("/");for(var s=0,o=r.length;s<o;s++)i=r[s],i===".."?n.pop():i!=="."&&i!==""&&n.push(i);return n.join("/")},s=function(e){return e.split("/").slice(0,-1).join("/")},o=function(t){return function(n){var r=s(t),o=i(r,n);return e.require(o)}},u=function(e,t){var r={id:e,exports:{}};t(r.exports,o(e),r);var i=n[e]=r.exports;return i},a=function(e){var s=i(e,".");if(r(n,s))return n[s];if(r(t,s))return u(s,t[s]);var o=i(s,"./index");if(r(n,o))return n[o];if(r(t,o))return u(o,t[o]);throw new Error('Cannot find module "'+e+'"')},f=function(e,n){if(typeof e=="object")for(var i in e)r(e,i)&&(t[i]=e[i]);else t[e]=n};e.require=a,e.require.define=f,e.require.register=f,e.require.brunch=!0})(),window.require.register("app",function(e,t,n){var r,i;i=t("views/layout"),n.exports=r=function(){function e(){_.extend(this,Backbone.Events),this.grabTweets()}return e.prototype.name="streubenville",e.prototype.root="streubenville",e.prototype.views={},e.prototype.routers={},e.prototype.events={},e.prototype.tweets=[],e.prototype.grabTweets=function(){var e,t=this;return e="s_reps",$.ajax({type:"GET",dataType:"jsonp",url:"http://api.twitter.com/1/statuses/user_timeline.json",data:{screen_name:"s_reps",include_rts:1},success:function(e){var n,r,i;n=e[0].text;for(r=0,i=e.length;r<i;r++)n=e[r],t.tweets.push(n);return t.trigger("got-tweets")}})},e.prototype.init=function(){return this.chrome()},e.prototype.chrome=function(){return this.layout=new i({el:$("#application")})},e}()}),window.require.register("index.static",function(exports,require,module){module.exports=function anonymous(locals,attrs,escape,rethrow,merge){attrs=attrs||jade.attrs,escape=escape||jade.escape,rethrow=rethrow||jade.rethrow,merge=merge||jade.merge;var buf=[];with(locals||{}){var interp;buf.push('<!DOCTYPE html><html><head><meta charset="utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"><title>');var __val__=app.name;buf.push(escape(null==__val__?"":__val__)),buf.push('</title><meta name="description" content="Reply to the people who send vicious tweets"><meta name="viewport" content="width=device-width,initial-scale=1.0"><meta property="og:title" content="steubenvillereplies.com"><meta property="og:type" content="website"><meta property="og:url" content="http://steubenvillereplies.com/"><meta property="og:site_name" content="steubenvillereplies.com"><link rel="shortcut icon" href="favicon.ico"><link rel="stylesheet" href="stylesheets/app.css"><link rel="stylesheet" href="stylesheets/vendor.css"><script>window.brunch = window.brunch || {};\nwindow.brunch[\'auto-reload\'] = {enabled: true};\n\nWebFontConfig = { fontdeck: { id: \'31058\' } };\n\n(function() {\n  var wf = document.createElement(\'script\');\n  wf.src = (\'https:\' == document.location.protocol ? \'https\' : \'http\') +\n  \'://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js\';\n  wf.type = \'text/javascript\';\n  wf.async = \'true\';\n  var s = document.getElementsByTagName(\'script\')[0];\n  s.parentNode.insertBefore(wf, s);\n})();\n</script><script src="javascripts/vendor.js"></script><script src="javascripts/app.js"></script><script>require(\'initialize\')\n</script></head><body id="application"><div id="content" class="container"></div><div class="screenreader"><header><h1><span class="title">');var __val__=app.name;buf.push(escape(null==__val__?"":__val__)),buf.push('</span></h1></header><article><p>August 11–12, 2012, a young girl in Steubenville, Ohio was raped. </p>\n<p>On March 17, 2013, two young men were convicted for the horrible crime. As \n<a href="http://news.yahoo.com/blogs/lookout/cnn-steubenville-rape-poppy-harlow-144458279.html" target="_blank">this blog post details</a>, CNN took charge in <a href="http://gawker.com/5991003/cnn-reports-on-the-promising-future-of-the-steubenville-rapists-who-are-very-good-students" target="_blank">&quot;publicly worry[ing] about the &#39;promising future&#39; of the convicted rapists&quot;</a>, not giving the victim much thought at all.</p>\n<p>But it was not – is not – limited to mainstream media. This sort of behaviour thrives on Twitter. And is often unchallenged. Until now. We&#39;ve gathered and will continue to gather atrocious tweets that deserve to be replied to; to be challenged – to show that we are many that will not tolerate this kind of behaviour, or the culture that supports it. </p>\n<div class="text-center"><button>Read the tweets and respond</button></div></article></div><footer class="gray"><ul><li>Recommended reading:</li><li> <a href="http://www.newstatesman.com/laurie-penny/2013/03/steubenville-rape-cultures-abu-ghraib-moment" target="_blank">“Steubenville: this is rape culture\'s Abu Ghraib moment”</a></li><li class="right">Fonts by <a href="http://lettersfromsweden.se" target="_blank">Letters from Sweden</a></li></ul></footer></body></html>')}return buf.join("")}}),window.require.register("initialize",function(e,t,n){var r;r=t("./app"),$(function(){return app.init(),app.trigger("page:render","index")}),this.app=new r}),window.require.register("models/collection",function(e,t,n){n.exports=Backbone.Collection.extend({})}),window.require.register("models/model",function(e,t,n){n.exports=Backbone.Model.extend({})}),window.require.register("settings",function(e,t,n){n.exports={locals:{app:{name:"Steubenville Replies"}}}}),window.require.register("views/index",function(e,t,n){var r,i,s,o={}.hasOwnProperty,u=function(e,t){function r(){this.constructor=e}for(var n in t)o.call(t,n)&&(e[n]=t[n]);return r.prototype=t.prototype,e.prototype=new r,e.__super__=t.prototype,e};i=t("./view"),n.exports=r=function(e){function n(){return s=n.__super__.constructor.apply(this,arguments),s}return u(n,e),n.prototype.template=t("./templates/index"),n.prototype.parts={},n.prototype.className="page index",n.prototype.events={click:"gotoTweets"},n.prototype.gotoTweets=function(e){if($(e.target).attr("href")!==void 0)return;return e.preventDefault(),app.trigger("page:render","tweets")},n}(i)}),window.require.register("views/layout",function(e,t,n){var r,i,s,o={}.hasOwnProperty,u=function(e,t){function r(){this.constructor=e}for(var n in t)o.call(t,n)&&(e[n]=t[n]);return r.prototype=t.prototype,e.prototype=new r,e.__super__=t.prototype,e};i=t("./view"),n.exports=r=function(e){function n(){return s=n.__super__.constructor.apply(this,arguments),s}return u(n,e),n.prototype.tagName="body",n.prototype.current=null,n.prototype.started=!1,n.prototype.bootstrap=function(){return this.listenTo(app,"page:render",function(e){var n,r,s=this;return n=new(i=t("views/"+e)),(r=this.current)!=null&&r.$el.addClass("slide-away"),setTimeout(function(){s.$page.html(n.render().el),s.current=n;if(!s.started)return s.start()},200)}),this.$page=this.$("#content")},n.prototype.start=function(){return this.$el.addClass("ready"),this.started=!0,window.scrollTo(0,1)},n.prototype.initialize=function(e){return this.setElement(e.el),n.__super__.initialize.call(this)},n}(i)}),window.require.register("views/templates/index",function(exports,require,module){module.exports=function anonymous(locals,attrs,escape,rethrow,merge){attrs=attrs||jade.attrs,escape=escape||jade.escape,rethrow=rethrow||jade.rethrow,merge=merge||jade.merge;var buf=[];with(locals||{}){var interp;buf.push('<header><h1><span class="title">');var __val__=app.name;buf.push(escape(null==__val__?"":__val__)),buf.push('</span></h1></header><article><p>August 11–12, 2012, a young girl in Steubenville, Ohio was raped. </p>\n<p>On March 17, 2013, two young men were convicted for the horrible crime. As \n<a href="http://news.yahoo.com/blogs/lookout/cnn-steubenville-rape-poppy-harlow-144458279.html" target="_blank">this blog post details</a>, CNN took charge in <a href="http://gawker.com/5991003/cnn-reports-on-the-promising-future-of-the-steubenville-rapists-who-are-very-good-students" target="_blank">&quot;publicly worry[ing] about the &#39;promising future&#39; of the convicted rapists&quot;</a>, not giving the victim much thought at all.</p>\n<p>But it was not – is not – limited to mainstream media. This sort of behaviour thrives on Twitter. And is often unchallenged. Until now. We&#39;ve gathered and will continue to gather atrocious tweets that deserve to be replied to; to be challenged – to show that we are many that will not tolerate this kind of behaviour, or the culture that supports it. </p>\n<div class="text-center"><button>Read the tweets and respond</button></div></article>')}return buf.join("")}}),window.require.register("views/templates/tweets",function(exports,require,module){module.exports=function anonymous(locals,attrs,escape,rethrow,merge){attrs=attrs||jade.attrs,escape=escape||jade.escape,rethrow=rethrow||jade.rethrow,merge=merge||jade.merge;var buf=[];with(locals||{}){var interp;buf.push('<p class="action"><span class="name"></span><a href="#" target="_blank" class="username"></a> tweeted</p><div class="tweet">Shouldn\'t they charge someone for something?</div><p><a href="#" target="_blank" class="respond button">Write a response</a></p><p><a href="#more" class="more">Show me another tweet</a></p>')}return buf.join("")}}),window.require.register("views/tweets",function(e,t,n){var r,i,s,o={}.hasOwnProperty,u=function(e,t){function r(){this.constructor=e}for(var n in t)o.call(t,n)&&(e[n]=t[n]);return r.prototype=t.prototype,e.prototype=new r,e.__super__=t.prototype,e};i=t("./view"),n.exports=r=function(e){function n(){return s=n.__super__.constructor.apply(this,arguments),s}return u(n,e),n.prototype.template=t("./templates/tweets"),n.prototype.id="tweets",n.prototype.className="page",n.prototype.events={"click .more":"showTweet","click .tweet":"showTweet"},n.prototype.isReady=!1,n.prototype.tweets=[],n.prototype.current=0,n.prototype.bootstrap=function(){var e;return e=_.once(this.showTweet),this.listenTo(app,"got-tweets",function(){return this.showTweet()}),this.on(""+this.cid+":render:after",function(){var e=this;return this.$tweet=this.$(".tweet"),setTimeout(function(){return e.showTweet(),window.scrollTo(0,1)},150)})},n.prototype.showTweet=function(){var e,t,n,r,i,s,o,u,a,f=this;if(app.tweets.length===0)return;return o=app.tweets[this.current%app.tweets.length],i=o.retweeted_status.user.name,a=o.retweeted_status.user.screen_name,s=o.retweeted_status.text,t="I think you should read this article – http://www.newstatesman.com/laurie-penny/2013/03/steubenville-rape-cultures-abu-ghraib-moment",r="https://twitter.com/intent/tweet?text="+encodeURI(t)+"&in_reply_to="+o.retweeted_status.id_str,u="https://twitter.com/"+i+"/status/"+o.retweeted_status.id_str,s.replace('"',"”"),this.$tweet.removeClass("show").html("<div>"+s+"</div>"),e=this.$tweet.find("div"),n=$(window).width()>960?$(window).height()-350:240,e.css({width:"100%",height:n}),e.textFit({alignVert:!0,alignHoriz:!0}),setTimeout(function(){return f.$tweet.addClass("show")},100),this.$(".name").text(i),this.$(".username").text(" @"+a).attr("href","http://twitter.com/"+a),this.$(".respond").attr("href",r),this.isReady||this.ready(),this.current++},n.prototype.ready=function(){return this.$el.addClass("ready"),this.isReady=!0},n}(i)}),window.require.register("views/view",function(e,t,n){var r,i,s,o={}.hasOwnProperty,u=function(e,t){function r(){this.constructor=e}for(var n in t)o.call(t,n)&&(e[n]=t[n]);return r.prototype=t.prototype,e.prototype=new r,e.__super__=t.prototype,e};i=t("settings"),n.exports=r=function(e){function t(){return s=t.__super__.constructor.apply(this,arguments),s}return u(t,e),t.prototype.debug=!1,t.prototype.startDebugging=function(){return this.on(""+this.cid+":initialize",function(){return console.debug("Initialized "+this.name,this)}),this.on(""+this.cid+":render",function(){return console.debug("Rendered "+this.name,this)}),this.on(""+this.cid+":update",function(){return console.debug("Updated "+this.name,this)}),this.on(""+this.cid+":destroy",function(){return console.debug("Destroyed "+this.name,this)})},t.prototype.type="view",t.prototype.name=null,t.prototype.autoRender=!1,t.prototype.rendered=!1,t.prototype.template=function(){return""},t.prototype.html=function(e){return this.$el.html(e),this.trigger(""+this.cid+":"+(this.rendered?"update":"render"),this),this.$el},t.prototype.append=function(e){return this.$el.append(e),this.trigger(""+this.cid+":"+(this.rendered?"update":"render"),this),this.$el},t.prototype.prepend=function(e){return this.$el.prepend(e),this.trigger(""+this.cid+":"+(this.rendered?"update":"render"),this),this.$el},t.prototype.after=function(e){return this.$el.after(e),this.trigger(""+this.cid+":update",this),this.$el},t.prototype.before=function(e){return this.$el.after(e),this.trigger(""+this.cid+":update",this),this.$el},t.prototype.css=function(e){return this.$el.css(e),this.trigger(""+this.cid+":update",this),this.$el},t.prototype.find=function(e){return this.$el.find(e)},t.prototype.delegate=function(e,t,n){return arguments.length===2&&(n=t),n=n.bind(this),arguments.length===2?this.$el.on(e,n):this.$el.on(e,t,n)},t.prototype.bootstrap=function(){},t.prototype.initialize=function(){return this.bootstrap(),this.name=this.name||this.constructor.name,this.debug===!0&&this.startDebugging(),this.autoRender===!0&&this.render(),this.trigger(""+this.cid+":initialize",this)},t.prototype.getRenderData=function(){var e,t;return e=((t=this.model)!=null?t.toJSON():void 0)||{},_.extend(e,i.locals)},t.prototype.render=function(){return this.trigger(""+this.cid+":render:before",this),this.$el.attr("data-cid",this.cid),this.html(this.template(this.getRenderData())),this.rendered=!0,this.trigger(""+this.cid+":render:after",this),this},t.prototype.destroy=function(e){var t;return e==null&&(e=!1),this.trigger(""+this.cid+":destroy:before",this),e?this.dispose():this.remove(),(t=this.model)!=null&&t.destroy(),this.trigger(""+this.cid+":destroy:after",this)},t}(Backbone.View)})