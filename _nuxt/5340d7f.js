(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{355:function(t,e,o){var content=o(367);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(54).default)("60947c7a",content,!0,{sourceMap:!1})},366:function(t,e,o){"use strict";o(355)},367:function(t,e,o){var r=o(53)((function(i){return i[1]}));r.push([t.i,'.contact-form-container[data-v-dcbe9ca6]{align-items:center;display:flex;justify-content:center;padding:40px}.contact-form[data-v-dcbe9ca6]{background:#fff;border-radius:12px;box-shadow:0 4px 20px rgba(0,0,0,.1);max-width:500px;transition:transform .3s ease,box-shadow .3s ease;width:100%}.contact-form[data-v-dcbe9ca6]:hover{box-shadow:0 8px 30px rgba(0,0,0,.15);transform:translateY(-4px)}.form-title[data-v-dcbe9ca6]{color:#333;font-family:"Poppins",sans-serif;font-size:2rem;margin-bottom:20px;position:relative;text-align:center}.form-title[data-v-dcbe9ca6]:after{background-color:#2575fc;border-radius:2px;content:"";display:block;height:4px;margin:10px auto 0;width:60px}.form-group[data-v-dcbe9ca6]{margin-bottom:1.5rem}.form-group label[data-v-dcbe9ca6]{color:#555;display:block;font-weight:700;margin-bottom:.5rem}.form-control[data-v-dcbe9ca6]{border:1px solid #ddd;border-radius:8px;padding:.75rem;transition:border-color .3s ease;width:100%}.form-control[data-v-dcbe9ca6]:focus{border-color:#2575fc;box-shadow:0 0 5px rgba(37,117,252,.3);outline:none}.submit-button[data-v-dcbe9ca6]{background:linear-gradient(90deg,#6a11cb,#2575fc);border:none;border-radius:8px;color:#fff;cursor:pointer;font-size:1.1rem;font-weight:700;padding:.75rem;transition:background .3s ease,transform .3s ease;width:100%}.submit-button[data-v-dcbe9ca6]:hover{background:linear-gradient(90deg,#5a0ecb,#1e63fc);transform:translateY(-2px)}.submit-button[data-v-dcbe9ca6]:focus{box-shadow:0 0 5px rgba(37,117,252,.3);outline:none}',""]),r.locals={},t.exports=r},377:function(t,e,o){"use strict";o.r(e);o(25);var r={name:"ContactForm",data:function(){return{form:{name:"",email:"",message:""}}},methods:{submitForm:function(){alert("Thank you, ".concat(this.form.name,"! Your message has been sent.")),this.form.name="",this.form.email="",this.form.message=""}}},n=(o(366),o(47)),component=Object(n.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"contact-form-container my-5"},[e("h2",{staticClass:"text-center form-title"},[t._v("Contact Me")]),t._v(" "),e("form",{staticClass:"contact-form p-4",on:{submit:function(e){return e.preventDefault(),t.submitForm.apply(null,arguments)}}},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"name"}},[t._v("Name")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control",attrs:{type:"text",id:"name",required:""},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"email"}},[t._v("Email")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control",attrs:{type:"email",id:"email",required:""},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"message"}},[t._v("Message")]),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.message,expression:"form.message"}],staticClass:"form-control",attrs:{id:"message",rows:"4",required:""},domProps:{value:t.form.message},on:{input:function(e){e.target.composing||t.$set(t.form,"message",e.target.value)}}})]),t._v(" "),e("button",{staticClass:"btn submit-button",attrs:{type:"submit"}},[t._v("Send Message")])])])}),[],!1,null,"dcbe9ca6",null);e.default=component.exports}}]);