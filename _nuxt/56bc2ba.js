(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{356:function(e,t,r){var content=r(370);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(54).default)("d37f8acc",content,!0,{sourceMap:!1})},369:function(e,t,r){"use strict";r(356)},370:function(e,t,r){var o=r(53)((function(i){return i[1]}));o.push([e.i,'h2[data-v-80b1e47e]{color:#b69928;font-family:"Roboto",sans-serif;font-weight:700;text-shadow:2px 2px 4px rgba(0,0,0,.1)}.progress-ring[data-v-80b1e47e]{border-radius:50%;box-shadow:0 4px 12px rgba(0,0,0,.1);display:inline-block;height:120px;margin:20px;position:relative;transition:transform .3s ease,box-shadow .3s ease,filter .3s ease;width:120px}.progress-ring[data-v-80b1e47e]:hover{box-shadow:0 8px 16px rgba(0,0,0,.2);filter:brightness(1.1);transform:translateY(-10px) rotateY(15deg) rotateX(15deg)}.circle-background[data-v-80b1e47e]{fill:none;stroke:#6c8eaf}.circle-progress[data-v-80b1e47e]{fill:none;stroke-linecap:round;stroke:#bcc0c5;transition:stroke-dashoffset 1s ease}.percentage[data-v-80b1e47e]{color:#fff;font-size:1.5rem;font-weight:700;left:50%;opacity:.9;position:absolute;top:50%;transform:translate(-50%,-50%);transition:opacity .3s ease,transform .3s ease}.skill-name[data-v-80b1e47e]{color:#333;font-size:1.2rem;font-weight:600;margin-top:10px;transition:color .3s ease,transform .3s ease}.progress-ring:hover .skill-name[data-v-80b1e47e]{color:#6c8eaf;transform:translateY(-5px)}.skill-icon[data-v-80b1e47e]{font-size:2rem;transition:color .3s ease,transform .3s ease}.progress-ring:hover .skill-icon[data-v-80b1e47e]{color:#6c8eaf;transform:scale(1.1)}',""]),o.locals={},e.exports=o},378:function(e,t,r){"use strict";r.r(t);r(25);var o={name:"SkillsSection",props:{skills:Array},data:function(){return{hoveredSkill:null}},methods:{startAnimation:function(e){this.hoveredSkill=e.name},resetAnimation:function(e){this.hoveredSkill=null}}},n=(r(369),r(47)),component=Object(n.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"container my-5"},[t("h2",{staticClass:"text-center mb-5"},[e._v("My Skills")]),e._v(" "),t("div",{staticClass:"row text-center"},e._l(e.skills,(function(r){return t("div",{key:r.name,staticClass:"col-md-3"},[t("div",{staticClass:"progress-ring",on:{mouseenter:function(t){return e.startAnimation(r)},mouseleave:function(t){return e.resetAnimation(r)}}},[t("svg",{staticClass:"circle",attrs:{viewBox:"0 0 120 120"}},[t("circle",{staticClass:"circle-background",attrs:{cx:"60",cy:"60",r:"54","stroke-width":"12"}}),e._v(" "),t("circle",{staticClass:"circle-progress",attrs:{cx:"60",cy:"60",r:"54","stroke-width":"12",stroke:"#6c8eaf"}})]),e._v(" "),t("div",{staticClass:"percentage"},[e._v(e._s(r.percent)+"%")])]),e._v(" "),t("i",{class:["mb-3",r.icon,"skill-icon"]}),e._v(" "),t("h5",{staticClass:"skill-name text-primary"},[e._v(e._s(r.name))]),e._v(" "),t("p",[e._v(e._s(r.level))])])})),0)])}),[],!1,null,"80b1e47e",null);t.default=component.exports}}]);