(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7a85a70c"],{1276:function(t,e,i){"use strict";var n=i("d784"),a=i("44e7"),s=i("825a"),o=i("1d80"),r=i("4840"),c=i("8aa5"),l=i("50c4"),u=i("14c3"),m=i("9263"),p=i("d039"),h=[].push,v=Math.min,d=4294967295,f=!p((function(){return!RegExp(d,"y")}));n("split",2,(function(t,e,i){var n;return n="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,i){var n=String(o(this)),s=void 0===i?d:i>>>0;if(0===s)return[];if(void 0===t)return[n];if(!a(t))return e.call(n,t,s);var r,c,l,u=[],p=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),v=0,f=new RegExp(t.source,p+"g");while(r=m.call(f,n)){if(c=f.lastIndex,c>v&&(u.push(n.slice(v,r.index)),r.length>1&&r.index<n.length&&h.apply(u,r.slice(1)),l=r[0].length,v=c,u.length>=s))break;f.lastIndex===r.index&&f.lastIndex++}return v===n.length?!l&&f.test("")||u.push(""):u.push(n.slice(v)),u.length>s?u.slice(0,s):u}:"0".split(void 0,0).length?function(t,i){return void 0===t&&0===i?[]:e.call(this,t,i)}:e,[function(e,i){var a=o(this),s=void 0==e?void 0:e[t];return void 0!==s?s.call(e,a,i):n.call(String(a),e,i)},function(t,a){var o=i(n,t,this,a,n!==e);if(o.done)return o.value;var m=s(t),p=String(this),h=r(m,RegExp),g=m.unicode,b=(m.ignoreCase?"i":"")+(m.multiline?"m":"")+(m.unicode?"u":"")+(f?"y":"g"),x=new h(f?m:"^(?:"+m.source+")",b),w=void 0===a?d:a>>>0;if(0===w)return[];if(0===p.length)return null===u(x,p)?[p]:[];var y=0,k=0,_=[];while(k<p.length){x.lastIndex=f?k:0;var C,N=u(x,f?p:p.slice(k));if(null===N||(C=v(l(x.lastIndex+(f?0:k)),p.length))===y)k=c(p,k,g);else{if(_.push(p.slice(y,k)),_.length===w)return _;for(var P=1;P<=N.length-1;P++)if(_.push(N[P]),_.length===w)return _;k=y=C}}return _.push(p.slice(y)),_}]}),!f)},"371a":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("form",{attrs:{action:""},on:{submit:t.checkForm}},[i("h3",[t._v("Kontakt")]),t.notifications.length>0?i("ul",{staticClass:"notifications"},t._l(t.notifications,(function(e){return i("li",{key:e.name},[t._v(t._s(e))])})),0):t._e(),i("small",[t._v("*Pflichtfeld")]),i("label",{attrs:{for:"name"}},[t._v("Wie heißt euer Geschäft?*")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",name:"name"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),i("label",{attrs:{for:"description"}},[t._v("Was bietet ihr an?*")]),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],attrs:{name:"description"},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}}),i("h3",[t._v("Wie können Menschen mit euch in Kontakt treten?")]),i("div",{staticClass:"contact"},[i("div",{staticClass:"column"},[i("label",{attrs:{for:"email"}},[t._v("E-Mail*")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"text",name:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),i("div",{staticClass:"column"},[i("label",{attrs:{for:"phone"}},[t._v("Telefon-Nummer")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],attrs:{type:"text",name:"phone"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}})]),i("div",{staticClass:"column"},[i("label",{attrs:{for:"street"}},[t._v("Straße")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.street,expression:"street"}],attrs:{type:"text",name:"street"},domProps:{value:t.street},on:{input:function(e){e.target.composing||(t.street=e.target.value)}}})]),i("div",{staticClass:"column"},[i("label",{attrs:{for:"city"}},[t._v("PLZ & Stadt")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.city,expression:"city"}],attrs:{type:"text",name:"city"},domProps:{value:t.city},on:{input:function(e){e.target.composing||(t.city=e.target.value)}}})]),i("div",{staticClass:"column"},[i("label",{attrs:{for:"website"}},[t._v("Website")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.website,expression:"website"}],attrs:{type:"text",name:"website"},domProps:{value:t.website},on:{input:function(e){e.target.composing||(t.website=e.target.value)}}})]),i("div",{staticClass:"column"},[i("label",{attrs:{for:"facebook"}},[t._v("facebook")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.facebook,expression:"facebook"}],attrs:{type:"text",name:"facebook"},domProps:{value:t.facebook},on:{input:function(e){e.target.composing||(t.facebook=e.target.value)}}})]),i("div",{staticClass:"column"},[i("label",{attrs:{for:"instagram"}},[t._v("Instagram")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.instagram,expression:"instagram"}],attrs:{type:"text",name:"instagram"},domProps:{value:t.instagram},on:{input:function(e){e.target.composing||(t.instagram=e.target.value)}}})]),t._m(0)])])])},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"column"},[i("input",{attrs:{type:"submit",value:"absenden"}})])}],s=(i("a4d3"),i("e01a"),i("b0c0"),i("ac1f"),i("1276"),i("f6fd")),o={name:"Contact",components:{},data:function(){return{notifications:[],name:"",website:"",email:"",phone:"",facebook:"",instagram:"",description:"",street:"",city:"",categories:"",image:""}},computed:{putTogetherLocation:function(){return{name:this.name,website:this.website,email:this.email,phone:this.phone,facebook:this.facebook,instagram:this.instagram,description:this.description,street:this.street,city:this.city,categories:this.categories.split(","),image:this.image}}},methods:{putDataToFirestore:function(t){t.preventDefault(),s["a"].collection("contacts").doc(this.putTogetherLocation.email).set(this.putTogetherLocation).then((function(){console.log("Document successfully written!")}))},checkForm:function(t){t.preventDefault(),this.notifications=[],this.name||this.notifications.push("Bitte sag uns euren Namen."),this.description||this.notifications.push("Bitte schreib uns was ihr anbietet."),this.email||this.notifications.push("Bitte nenne uns eure E-Mail."),this.name&&this.description&&this.email&&(this.putDataToFirestore(t),this.notifications.push("Vielen Dank, wir prüfen Deine Daten so schnell wie möglich."),this.name="",this.website="",this.email="",this.phone="",this.facebook="",this.instagram="",this.description="",this.street="",this.city="")}}},r=o,c=(i("46c0"),i("2877")),l=Object(c["a"])(r,n,a,!1,null,"6243b3ba",null);e["default"]=l.exports},"44e7":function(t,e,i){var n=i("861d"),a=i("c6b6"),s=i("b622"),o=s("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==a(t))}},"46c0":function(t,e,i){"use strict";var n=i("7ca2"),a=i.n(n);a.a},6547:function(t,e,i){var n=i("a691"),a=i("1d80"),s=function(t){return function(e,i){var s,o,r=String(a(e)),c=n(i),l=r.length;return c<0||c>=l?t?"":void 0:(s=r.charCodeAt(c),s<55296||s>56319||c+1===l||(o=r.charCodeAt(c+1))<56320||o>57343?t?r.charAt(c):s:t?r.slice(c,c+2):o-56320+(s-55296<<10)+65536)}};t.exports={codeAt:s(!1),charAt:s(!0)}},"7ca2":function(t,e,i){},"8aa5":function(t,e,i){"use strict";var n=i("6547").charAt;t.exports=function(t,e,i){return e+(i?n(t,e).length:1)}}}]);
//# sourceMappingURL=chunk-7a85a70c.50ad0438.js.map