(()=>{var t={n:e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},d:(e,r)=>{for(var i in r)t.o(r,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:r[i]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};(()=>{"use strict";t.r(e);const r=flarum.core.compat["admin/app"];var i=t.n(r);function n(){return n=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},n.apply(this,arguments)}function o(t,e){return o=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},o(t,e)}function a(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,o(t,e)}const s=flarum.core.compat["admin/components/ExtensionPage"];var c=t.n(s);const l=flarum.core.compat["common/utils/extractText"];var p=t.n(l),u=/(?:https?:)?\/\/(?:(?:[\w-]+\.)+[\w/#@~.-]*)(?:\?(?:[\w&=.!,;$#%-]+)?)?/gi;const b=flarum.core.compat["common/Model"];var d=t.n(b),g=function(t){function e(){for(var e,r=arguments.length,i=new Array(r),n=0;n<r;n++)i[n]=arguments[n];return(e=t.call.apply(t,[this].concat(i))||this).countryCode=d().attribute("countryCode"),e.region=d().attribute("region"),e.isp=d().attribute("isp"),e.city=d().attribute("city"),e.province=d().attribute("province"),e.backboneIsp=d().attribute("backboneisp"),e.areaCode=d().attribute("areaCode"),e.district=d().attribute("district"),e}return a(e,t),e}(d()),v=function(t){function e(){return t.apply(this,arguments)||this}a(e,t);var r=e.prototype;return r.oninit=function(e){t.prototype.oninit.call(this,e)},r.content=function(){var t,e=this.setting("gbcl-userip.service")(),r=Object.keys(new g).slice(4),o=i().data["gbcl-userip.services"].reduce((function(t,e){var r;return n({},t,((r={})[e.name]=i().translator.trans("gbcl-userip.admin.service."+e.name+".label"),r))}),{});return m("div",{className:"container"},m("div",{className:"selectGeoipApi"},m("div",{className:"Form-group"},this.buildSettingComponent({type:"select",setting:"gbcl-userip.service",label:i().translator.trans("gbcl-userip.admin.service.label"),options:o,required:!0,help:e&&m.trust((t=p()(i().translator.trans("gbcl-userip.admin.service."+e+".description")),t.replace(u,(function(t){return'<a href="'+t+'" title="LINK">'+t+"</a>"}))))})),m("div",{className:"Form-group"},this.buildSettingComponent({type:"text",setting:"gbcl-userip.service.badgeOptions",label:i().translator.trans("gbcl-userip.admin.service.badgeOptionsLabel"),help:"Use '|' to split. Available Options: "+r.toString()}),this.buildSettingComponent({type:"text",setting:"gbcl-userip.service.hoverOptions",label:i().translator.trans("gbcl-userip.admin.service.hoverOptionsLabel"),help:"Use '|' to split. Available Options: "+r.toString()})),this.submitButton()))},e}(c());i().initializers.add("gbcl/userip",(function(){i().extensionData.for("gbcl-userip").registerPage(v).registerPermission({icon:"fas fa-map-marked-alt",label:i().translator.trans("gbcl-userip.admin.permissions.view_ip_info_label"),permission:"discussion.viewIpInfo",allowGuest:!0},"view")}))})(),module.exports=e})();
//# sourceMappingURL=admin.js.map