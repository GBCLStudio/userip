(()=>{var t={n:o=>{var e=o&&o.__esModule?()=>o.default:()=>o;return t.d(e,{a:e}),e},d:(o,e)=>{for(var r in e)t.o(e,r)&&!t.o(o,r)&&Object.defineProperty(o,r,{enumerable:!0,get:e[r]})},o:(t,o)=>Object.prototype.hasOwnProperty.call(t,o),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},o={};(()=>{"use strict";t.r(o),t.d(o,{extend:()=>C});const e=flarum.core.compat["forum/app"];var r=t.n(e);const n=flarum.core.compat["common/extend"],i=flarum.core.compat["forum/components/CommentPost"];var a=t.n(i);const c=flarum.core.compat["common/Model"];var s=t.n(c),u=function(){function t(t){this.data=void 0,this.data={countryCode:t.countryCode(),region:t.region(),isp:t.isp(),city:t.city(),province:t.province(),backboneIsp:t.backboneIsp(),areaCode:t.areaCode(),district:t.district()}}return t.prototype.process=function(t){for(var o={},e=r().forum.attribute("BadgeOptions"),n=0,i=Object.entries(this.data);n<i.length;n++){var a=i[n],c=a[0],s=a[1];if(null==e)return!1;o[c]=s||t}return o},t}();function p(t,o){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,o){return t.__proto__=o,t},p(t,o)}function d(t,o){t.prototype=Object.create(o.prototype),t.prototype.constructor=t,p(t,o)}const f=flarum.core.compat["common/Component"];var l=t.n(f);const b=flarum.core.compat["common/components/Tooltip"];var v=t.n(b),y=function(t){function o(){return t.apply(this,arguments)||this}d(o,t);var e=o.prototype;return e.view=function(){var t=this.getOptions("HoverOptions"),o=this.getOptions("BadgeOptions");return t?m(v(),{text:t},m("div",{className:"userIp-container"},m("div",{className:"ip-locate",id:"info-country"},o))):m("div",{className:"userIp-container"},m("div",{className:"ip-locate",id:"info-country"},o))},e.getOptions=function(t){var o=this.attrs.elements,e=r().forum.attribute(t);return!!e&&e.split("|").map((function(t){return""+o[t]})).join(" | ")},o}(l());const O=flarum.core.compat["common/extenders"];var g=t.n(O);const h=flarum.core.compat["common/models/Post"];var I=t.n(h),_=function(t){function o(){for(var o,e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return(o=t.call.apply(t,[this].concat(r))||this).countryCode=s().attribute("countryCode"),o.region=s().attribute("region"),o.isp=s().attribute("isp"),o.city=s().attribute("city"),o.province=s().attribute("province"),o.backboneIsp=s().attribute("backboneIsp"),o.areaCode=s().attribute("areaCode"),o.district=s().attribute("district"),o}return d(o,t),o}(s());const C=[new(g().Model)(I()).hasOne("userip_info").attribute("userIpInfo"),(new(g().Store)).add("userip_info",_)];r().initializers.add("gbcl/userip",(function(){var t=r().translator.trans("gbcl-userip.forum.unknownNotice");r().store.models.posts.prototype.userIpInfo=s().hasOne("userip_info"),(0,n.extend)(a().prototype,"footerItems",(function(o){var e=this.attrs.post.userIpInfo();if(e){var r=new u(e).process(t);r&&o.add("userIp",m(y,{elements:r}))}}))}))})(),module.exports=o})();
//# sourceMappingURL=forum.js.map