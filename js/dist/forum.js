(()=>{var o={n:t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},d:(t,e)=>{for(var r in e)o.o(e,r)&&!o.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},o:(o,t)=>Object.prototype.hasOwnProperty.call(o,t),r:o=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})}},t={};(()=>{"use strict";o.r(t);const e=flarum.core.compat["forum/app"];var r=o.n(e);const n=flarum.core.compat["common/extend"],i=flarum.core.compat["forum/components/CommentPost"];var a=o.n(i);function c(o,t){return c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,t){return o.__proto__=t,o},c(o,t)}const u=flarum.core.compat["common/Model"];var p=o.n(u);const s=flarum.core.compat["common/utils/mixin"];var l=function(o){var t,e;function r(){return o.apply(this,arguments)||this}return e=o,(t=r).prototype=Object.create(e.prototype),t.prototype.constructor=t,c(t,e),r}(o.n(s)()(p(),{countryCode:p().attribute("countryCode"),region:p().attribute("region"),isp:p().attribute("isp")}));r().initializers.add("gbcl/userip",(function(){var o=r().translator.trans("gbcl-userip.forum.unknownNotice");r().store.models.userip_info=l,r().store.models.posts.prototype.ipInfo=p().hasOne("userip_info"),(0,n.extend)(a().prototype,"footerItems",(function(t){var e=this.attrs.post.ipInfo();if(e){var r=function(o){return{region:o.region(),countryCode:o.countryCode(),isp:o.isp()}}(e),n=r.region,i=r.countryCode,a=r.isp,c=0;[n,i,a].forEach((function(t){"null"!==t&&t!==o&&null!=t||c++})),c>=2||t.add("userIp",m("div",{className:"userIp-container"},m("div",{className:"ip-locate",id:"info"},n+", "+i+" | "+a)))}}))}))})(),module.exports=t})();
//# sourceMappingURL=forum.js.map