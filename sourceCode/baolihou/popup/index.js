!function(e){function t(t){for(var s,a,r=t[0],c=t[1],l=t[2],d=0,m=[];d<r.length;d++)a=r[d],i[a]&&m.push(i[a][0]),i[a]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);for(u&&u(t);m.length;)m.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],s=!0,r=1;r<n.length;r++){var c=n[r];0!==i[c]&&(s=!1)}s&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var s={},i={6:0},o=[];function a(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=s,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)a.d(n,s,function(t){return e[t]}.bind(null,s));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var r=window.webpackJsonp=window.webpackJsonp||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var u=c;o.push([204,0]),n()}({200:function(e,t,n){"use strict";var s=n(44);n.n(s).a},204:function(e,t,n){"use strict";n.r(t);var s=n(13),i=n(0),o=n(26),a=n(22),r=(n(68),n(7)),c=n.n(r),l=n(17),u=n.n(l),d=n(2),m=n(10),p={scripts:[],commands:[],domain:""},b={isApplied:d.a.get("isApplied")};d.a.hook(function(e){"isApplied"in e&&(b.isApplied=e.isApplied)});var f={components:{Icon:m.a,Tooltip:u.a},data:()=>({store:p,options:b,activeMenu:"scripts",message:null}),computed:{commands(){return this.store.commands.map(function(e){var t=c()(e,2),n=t[0];return{name:t[1],key:n}})},scripts(){return this.store.scripts.map(function(e){return{name:e.custom.name||Object(i.f)(e.meta,"name"),data:e}})}},methods:{toggleMenu(e){this.activeMenu=this.activeMenu===e?null:e},getSymbolCheck:e=>`toggle-${e?"on":"off"}`,onToggle(){d.a.set("isApplied",!this.options.isApplied),this.checkReload()},onManage(){browser.runtime.openOptionsPage(),window.close()},onVisitWebsite(){browser.tabs.create({url:"https://violentmonkey.github.io/"}),window.close()},onEditScript(e){browser.tabs.create({url:browser.runtime.getURL(`/options/index.html#scripts/${e.data.props.id}`)}),window.close()},onFindSameDomainScripts(){browser.tabs.create({url:`https://greasyfork.org/scripts/by-site/${encodeURIComponent(this.store.domain)}`})},onCommand(e){browser.tabs.sendMessage(this.store.currentTab.id,{cmd:"Command",data:e.key})},onToggleScript(e){var t=this,n=e.data,s=!n.config.enabled;Object(i.p)({cmd:"UpdateScriptInfo",data:{id:n.props.id,config:{enabled:s}}}).then(function(){n.config.enabled=s,t.checkReload()})},checkReload(){d.a.get("autoReload")&&browser.tabs.reload(this.store.currentTab.id)},onCreateScript(){var e=this.store,t=e.currentTab;(e.domain?Object(i.p)({cmd:"CacheNewScript",data:{url:t.url.split("#")[0].split("?")[0]}}):Promise.resolve()).then(function(e){var t=["scripts","_new",e].filter(Boolean).join("/");browser.tabs.create({url:browser.runtime.getURL(`/options/index.html#${t}`)}),window.close()})}}},v=(n(200),n(3)),g=Object(v.a)(f,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page-popup"},[n("div",{staticClass:"flex menu-buttons"},[n("div",{staticClass:"logo",class:{disabled:!e.options.isApplied}},[n("img",{attrs:{src:"/public/images/icon128.png"}})]),n("div",{staticClass:"flex-1 ml-1 ext-name",class:{disabled:!e.options.isApplied},domProps:{textContent:e._s(e.i18n("extName"))}}),n("tooltip",{staticClass:"menu-area",class:{disabled:!e.options.isApplied},attrs:{content:e.options.isApplied?e.i18n("menuScriptEnabled"):e.i18n("menuScriptDisabled"),placement:"bottom",align:"end"},nativeOn:{click:function(t){return e.onToggle(t)}}},[n("icon",{attrs:{name:e.getSymbolCheck(e.options.isApplied)}})],1),n("tooltip",{staticClass:"menu-area",attrs:{content:e.i18n("menuDashboard"),placement:"bottom",align:"end"},nativeOn:{click:function(t){return e.onManage(t)}}},[n("icon",{attrs:{name:"cog"}})],1),n("tooltip",{staticClass:"menu-area",attrs:{content:e.i18n("menuNewScript"),placement:"bottom",align:"end"},nativeOn:{click:function(t){return e.onCreateScript(t)}}},[n("icon",{attrs:{name:"plus"}})],1)],1),n("div",{directives:[{name:"show",rawName:"v-show",value:e.store.domain,expression:"store.domain"}],staticClass:"menu"},[n("div",{staticClass:"menu-item menu-area",on:{click:e.onFindSameDomainScripts}},[n("icon",{attrs:{name:"search"}}),n("div",{staticClass:"flex-1",domProps:{textContent:e._s(e.i18n("menuFindScripts"))}})],1)]),n("div",{directives:[{name:"show",rawName:"v-show",value:e.commands.length,expression:"commands.length"}],staticClass:"menu menu-commands",class:{expand:"commands"===e.activeMenu}},[n("div",{staticClass:"menu-item menu-area",on:{click:function(t){return e.toggleMenu("commands")}}},[n("div",{staticClass:"flex-auto",domProps:{textContent:e._s(e.i18n("menuCommands"))}}),n("icon",{staticClass:"icon-collapse",attrs:{name:"arrow"}})],1),n("div",{staticClass:"submenu"},e._l(e.commands,function(t,s){return n("div",{key:s,staticClass:"menu-item menu-area",on:{click:function(n){return e.onCommand(t)}}},[n("span",{domProps:{textContent:e._s(t.name)}})])}),0)]),n("div",{directives:[{name:"show",rawName:"v-show",value:e.scripts.length,expression:"scripts.length"}],staticClass:"menu menu-scripts",class:{expand:"scripts"===e.activeMenu}},[n("div",{staticClass:"menu-item menu-area",on:{click:function(t){return e.toggleMenu("scripts")}}},[n("div",{staticClass:"flex-auto",domProps:{textContent:e._s(e.i18n("menuMatchedScripts"))}}),n("icon",{staticClass:"icon-collapse",attrs:{name:"arrow"}})],1),n("div",{staticClass:"submenu"},e._l(e.scripts,function(t,s){return n("div",{key:s,on:{mouseenter:function(n){e.message=t.name},mouseleave:function(t){e.message=""}}},[n("div",{staticClass:"menu-item menu-area",class:{disabled:!t.data.config.enabled},on:{click:function(n){return e.onToggleScript(t)}}},[n("icon",{attrs:{name:e.getSymbolCheck(t.data.config.enabled)}}),n("div",{staticClass:"flex-auto ellipsis",domProps:{textContent:e._s(t.name)}})],1),n("div",{staticClass:"submenu-buttons"},[n("div",{staticClass:"submenu-button",on:{click:function(n){return e.onEditScript(t)}}},[n("icon",{attrs:{name:"code"}})],1)])])}),0)]),n("footer",[n("span",{domProps:{textContent:e._s(e.i18n("visitWebsite"))},on:{click:e.onVisitWebsite}})]),e.message?n("div",{staticClass:"message"},[n("div",{domProps:{textContent:e._s(e.message)}})]):e._e()])},[],!1,null,null,null).exports;a.c(),s.default.prototype.i18n=i.i;var h=document.createElement("div");document.body.appendChild(h),new s.default({render:function(e){return e(g)}}).$mount(h),Object.assign(o.a,{SetPopup(e,t){p.currentTab.id===t.tab.id&&(p.commands=e.menus,Object(i.p)({cmd:"GetMetas",data:e.ids}).then(function(e){p.scripts=e}))}}),browser.tabs.query({currentWindow:!0,active:!0}).then(function(e){var t={id:e[0].id,url:e[0].url};if(p.currentTab=t,browser.tabs.sendMessage(t.id,{cmd:"GetPopup"}),/^https?:\/\//i.test(t.url)){var n=t.url.match(/:\/\/([^\/]*)/)[1];p.domain=a.a(n)||n}})},44:function(e,t,n){}});