(function(e){function t(t){for(var o,i,c=t[0],s=t[1],l=t[2],p=0,d=[];p<c.length;p++)i=c[p],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);u&&u(t);while(d.length)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,c=1;c<n.length;c++){var s=n[c];0!==r[s]&&(o=!1)}o&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={app:0},a=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},1:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("video-player",{attrs:{options:e.videoOptions}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.mName,expression:"mName"}],attrs:{type:"text"},domProps:{value:e.mName},on:{input:function(t){t.target.composing||(e.mName=t.target.value)}}}),n("button",{on:{click:e.search}},[e._v("Search")]),n("button",{on:{click:e.download}},[e._v("Download")]),this.showFrame?n("iframe",{attrs:{src:e.vSrc,height:"528",width:"850"}}):n("span",[e._v(" Search ")])],1)},a=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("video",{ref:"videoPlayer",staticClass:"video-js"})])},c=[],s=n("f0e2"),l={name:"VideoPlayer",props:{options:{type:Object,default:function(){return{}}}},data:function(){return{player:null}},mounted:function(){this.player=Object(s["a"])(this.$refs.videoPlayer,this.options,(function(){console.log("onPlayerReady",this)}))},beforeDestroy:function(){this.player&&this.player.dispose()}},u=l,p=n("2877"),d=Object(p["a"])(u,i,c,!1,null,null,null),f=d.exports,m=(n("fda2"),{name:"App",components:{VideoPlayer:f},data:function(){return{mName:null,showFrame:!1,vSrc:null,videoOptions:{autoplay:!1,controls:!0,sources:[{src:"https://edge267.stream.highwebmedia.com/live-hls/amlst:emilia_bailey-sd-5dd59c2bbf56ce7bcbf2741cd9d76cf09668fedea400eb484ce580559510d422_trns_h264/chunklist_w745435110_b1148000_t64RlBTOjMwLjA=.m3u8",type:"application/x-mpegURL"}]}}},methods:{download:function(){var e="https://edge267.stream.highwebmedia.com/live-hls/amlst:emilia_bailey-sd-5dd59c2bbf56ce7bcbf2741cd9d76cf09668fedea400eb484ce580559510d422_trns_h264/chunklist_w745435110_b1148000_t64RlBTOjMwLjA=.m3u8";this.axios.get(e).then((function(e){console.log(e.data)}))},search:function(){this.showFrame=!1,this.vSrc="https://chaturbate.com/in/?tour=9oGW&amp;campaign=WQeC8&amp;&amp;room="+this.mName+"&amp;bgcolor=transparent&disable_sound=1&embed_video_only=1",this.showFrame=!0}}}),h=m,b=(n("034f"),Object(p["a"])(h,r,a,!1,null,null,null)),v=b.exports,y=n("bc3a"),_=n.n(y),g=n("2106"),w=n.n(g);o["a"].config.productionTip=!1,o["a"].use(w.a,_.a),new o["a"]({render:function(e){return e(v)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.45f74928.js.map