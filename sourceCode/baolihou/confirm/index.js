!function(t){function e(e){for(var r,s,i=e[0],l=e[1],c=e[2],f=0,d=[];f<i.length;f++)s=i[f],a[s]&&d.push(a[s][0]),a[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);for(u&&u(e);d.length;)d.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,i=1;i<n.length;i++){var l=n[i];0!==a[l]&&(r=!1)}r&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={3:0},o=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window.webpackJsonp=window.webpackJsonp||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=l;o.push([205,0]),n()}({198:function(t,e,n){"use strict";var r=n(43);n.n(r).a},199:function(t,e,n){},205:function(t,e,n){"use strict";n.r(e);var r=n(13),a=n(0),o=(n(26),n(2)),s=(n(68),n(47)),i=n.n(s),l=n(45),c=n(48),u=n(15),f=n(21),d=Object(l.a)({}),h={components:{Dropdown:i.a,VmCode:c.a,SettingCheck:u.a},data(){return{installable:!1,dependencyOK:!1,closeAfterInstall:o.a.get("closeAfterInstall"),message:"",code:"",commands:{close:this.close},info:{}}},computed:{isLocal(){return!Object(a.k)(this.info.url)}},mounted(){var t=this;this.message=this.i18n("msgLoadingData"),this.loadInfo().then(function(){var e=f.a.paths[0];t.guard=setInterval(function(){Object(a.p)({cmd:"CacheHit",data:{key:`confirm-${e}`}})},5e3)},function(){return t.close(),Promise.reject()}).then(this.loadData).then(this.parseMeta)},beforeDestroy(){this.guard&&(clearInterval(this.guard),this.guard=null)},methods:{loadInfo(){var t=this,e=f.a.paths[0];return Object(a.p)({cmd:"CacheLoad",data:`confirm-${e}`}).then(function(e){if(!e)return Promise.reject();t.info=e})},loadData(t){var e=this;this.installable=!1;var n=this.code;return this.getScript(this.info.url).then(function(r){if(t&&n===r)return Promise.reject();e.code=r})},parseMeta(){var t=this;return Object(a.p)({cmd:"ParseMeta",data:this.code}).then(function(e){var n=Object.keys(e.resources).map(function(t){return e.resources[t]}),r=e.require.length+n.length;if(r){var o=0,s=[],i=function(){t.message=t.i18n("msgLoadingDependency",[o,r])};i(),t.require={},t.resources={};var l=e.require.map(function(e){var n=Object(a.e)(e,t.info.url);return t.getFile(n,{useCache:!0}).then(function(e){t.require[n]=e})}).concat(n.map(function(e){var n=Object(a.e)(e,t.info.url);return t.getFile(n,{isBlob:!0,useCache:!0}).then(function(e){t.resources[n]=e})})).map(function(t){return t.then(function(){o+=1,i()},function(t){s.push(t)})});return Promise.all(l).then(function(){if(s.length)return Promise.reject(s.join("\n"));t.dependencyOK=!0})}}).then(function(){t.message=t.i18n("msgLoadedData"),t.installable=!0},function(e){return t.message=t.i18n("msgErrorLoadingDependency",[e]),Promise.reject()})},close(){Object(a.p)({cmd:"TabClose"})},getFile(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.isBlob,r=e.useCache,o=n?`blob+${t}`:`text+${t}`;return r&&d.has(o)?Promise.resolve(d.get(o)):Object(a.o)(t,{responseType:n?"arraybuffer":null}).then(function(t){var e=t.data;return n?window.btoa(Object(a.a)(e)):e}).then(function(t){return r&&d.put(o,t),t})},getScript(t){var e=this;return Object(a.p)({cmd:"CacheLoad",data:t}).then(function(t){return t||Promise.reject()}).catch(function(){return e.getFile(t)}).catch(function(){throw e.message=e.i18n("msgErrorLoadingData"),t})},getTimeString(){var t=new Date;return`${Object(a.l)(t.getHours(),2)}:${Object(a.l)(t.getMinutes(),2)}:${Object(a.l)(t.getSeconds(),2)}`},installScript(){var t=this;this.installable=!1,Object(a.p)({cmd:"ParseScript",data:{code:this.code,url:this.info.url,from:this.info.from,require:this.require,resources:this.resources}}).then(function(e){t.message=`${e.update.message}[${t.getTimeString()}]`,t.closeAfterInstall?t.close():t.isLocal&&o.a.get("trackLocalFile")&&t.trackLocalFile()},function(e){t.message=`${e}`,t.installable=!0})},trackLocalFile(){var t=this;new Promise(function(t){setTimeout(t,2e3)}).then(function(){return t.loadData(!0)}).then(this.parseMeta).then(function(){o.a.get("trackLocalFile")&&t.installScript()},function(){t.trackLocalFile()})},checkClose(t){this.closeAfterInstall=t,t&&o.a.set("trackLocalFile",!1)}}},p=(n(198),n(3)),m=Object(p.a)(h,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-confirm frame flex flex-col h-100"},[n("div",{staticClass:"frame-block"},[n("div",{staticClass:"flex"},[n("h1",{staticClass:"hidden-sm"},[n("span",{domProps:{textContent:t._s(t.i18n("labelInstall"))}}),t._v(" - "),n("span",{domProps:{textContent:t._s(t.i18n("extName"))}})]),n("div",{staticClass:"flex-auto"}),n("div",[n("dropdown",{staticClass:"confirm-options",attrs:{align:"right"}},[n("button",{attrs:{slot:"toggle"},domProps:{textContent:t._s(t.i18n("buttonInstallOptions"))},slot:"toggle"}),n("label",[n("setting-check",{attrs:{name:"closeAfterInstall"},on:{change:t.checkClose}}),n("span",{staticClass:"ml-1",domProps:{textContent:t._s(t.i18n("installOptionClose"))}})],1),n("label",[n("setting-check",{attrs:{name:"trackLocalFile",disabled:t.closeAfterInstall}}),n("span",{staticClass:"ml-1",domProps:{textContent:t._s(t.i18n("installOptionTrack"))}})],1)]),n("button",{attrs:{disabled:!t.installable},domProps:{textContent:t._s(t.i18n("buttonConfirmInstallation"))},on:{click:t.installScript}}),n("button",{domProps:{textContent:t._s(t.i18n("buttonClose"))},on:{click:t.close}})],1)]),n("div",{staticClass:"flex"},[n("div",{staticClass:"ellipsis flex-auto mr-2",attrs:{title:t.info.url},domProps:{textContent:t._s(t.info.url)}}),n("div",{domProps:{textContent:t._s(t.message)}})])]),n("div",{staticClass:"frame-block flex-auto pos-rel"},[n("vm-code",{staticClass:"abs-full",attrs:{readonly:"",value:t.code,commands:t.commands}})],1)])},[],!1,null,null,null).exports;n(199);r.default.prototype.i18n=a.i,document.title=`${Object(a.i)("labelInstall")} - ${Object(a.i)("extName")}`,o.a.ready(function(){var t=document.createElement("div");document.body.appendChild(t),new r.default({render:function(t){return t(m)}}).$mount(t)})},43:function(t,e,n){}});