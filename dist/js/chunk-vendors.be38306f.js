(self["webpackChunkcart"]=self["webpackChunkcart"]||[]).push([[998],{9662:function(e,t,c){var n=c(7854),C=c(614),r=c(6330),i=n.TypeError;e.exports=function(e){if(C(e))return e;throw i(r(e)+" is not a function")}},6077:function(e,t,c){var n=c(7854),C=c(614),r=n.String,i=n.TypeError;e.exports=function(e){if("object"==typeof e||C(e))return e;throw i("Can't set "+r(e)+" as a prototype")}},5787:function(e,t,c){var n=c(7854),C=c(7976),r=n.TypeError;e.exports=function(e,t){if(C(t,e))return e;throw r("Incorrect invocation")}},9670:function(e,t,c){var n=c(7854),C=c(111),r=n.String,i=n.TypeError;e.exports=function(e){if(C(e))return e;throw i(r(e)+" is not an object")}},1318:function(e,t,c){var n=c(5656),C=c(1400),r=c(6244),i=function(e){return function(t,c,i){var s,a=n(t),o=r(a),l=C(i,o);if(e&&c!=c){while(o>l)if(s=a[l++],s!=s)return!0}else for(;o>l;l++)if((e||l in a)&&a[l]===c)return e||l||0;return!e&&-1}};e.exports={includes:i(!0),indexOf:i(!1)}},4326:function(e,t,c){var n=c(1702),C=n({}.toString),r=n("".slice);e.exports=function(e){return r(C(e),8,-1)}},648:function(e,t,c){var n=c(7854),C=c(1694),r=c(614),i=c(4326),s=c(5112),a=s("toStringTag"),o=n.Object,l="Arguments"==i(function(){return arguments}()),h=function(e,t){try{return e[t]}catch(c){}};e.exports=C?i:function(e){var t,c,n;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(c=h(t=o(e),a))?c:l?i(t):"Object"==(n=i(t))&&r(t.callee)?"Arguments":n}},7741:function(e,t,c){var n=c(1702),C=n("".replace),r=function(e){return String(Error(e).stack)}("zxcasd"),i=/\n\s*at [^:]*:[^\n]*/,s=i.test(r);e.exports=function(e,t){if(s&&"string"==typeof e)while(t--)e=C(e,i,"");return e}},9920:function(e,t,c){var n=c(2597),C=c(3887),r=c(1236),i=c(3070);e.exports=function(e,t,c){for(var s=C(t),a=i.f,o=r.f,l=0;l<s.length;l++){var h=s[l];n(e,h)||c&&n(c,h)||a(e,h,o(t,h))}}},8880:function(e,t,c){var n=c(9781),C=c(3070),r=c(9114);e.exports=n?function(e,t,c){return C.f(e,t,r(1,c))}:function(e,t,c){return e[t]=c,e}},9114:function(e){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},9781:function(e,t,c){var n=c(7293);e.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(e,t,c){var n=c(7854),C=c(111),r=n.document,i=C(r)&&C(r.createElement);e.exports=function(e){return i?r.createElement(e):{}}},3678:function(e){e.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},8113:function(e,t,c){var n=c(5005);e.exports=n("navigator","userAgent")||""},7392:function(e,t,c){var n,C,r=c(7854),i=c(8113),s=r.process,a=r.Deno,o=s&&s.versions||a&&a.version,l=o&&o.v8;l&&(n=l.split("."),C=n[0]>0&&n[0]<4?1:+(n[0]+n[1])),!C&&i&&(n=i.match(/Edge\/(\d+)/),(!n||n[1]>=74)&&(n=i.match(/Chrome\/(\d+)/),n&&(C=+n[1]))),e.exports=C},748:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2914:function(e,t,c){var n=c(7293),C=c(9114);e.exports=!n((function(){var e=Error("a");return!("stack"in e)||(Object.defineProperty(e,"stack",C(1,7)),7!==e.stack)}))},2109:function(e,t,c){var n=c(7854),C=c(1236).f,r=c(8880),i=c(1320),s=c(3505),a=c(9920),o=c(4705);e.exports=function(e,t){var c,l,h,u,f,z,d=e.target,M=e.global,v=e.stat;if(l=M?n:v?n[d]||s(d,{}):(n[d]||{}).prototype,l)for(h in t){if(f=t[h],e.noTargetGet?(z=C(l,h),u=z&&z.value):u=l[h],c=o(M?h:d+(v?".":"#")+h,e.forced),!c&&void 0!==u){if(typeof f==typeof u)continue;a(f,u)}(e.sham||u&&u.sham)&&r(f,"sham",!0),i(l,h,f,e)}}},7293:function(e){e.exports=function(e){try{return!!e()}catch(t){return!0}}},2104:function(e,t,c){var n=c(4374),C=Function.prototype,r=C.apply,i=C.call;e.exports="object"==typeof Reflect&&Reflect.apply||(n?i.bind(r):function(){return i.apply(r,arguments)})},4374:function(e,t,c){var n=c(7293);e.exports=!n((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},6916:function(e,t,c){var n=c(4374),C=Function.prototype.call;e.exports=n?C.bind(C):function(){return C.apply(C,arguments)}},6530:function(e,t,c){var n=c(9781),C=c(2597),r=Function.prototype,i=n&&Object.getOwnPropertyDescriptor,s=C(r,"name"),a=s&&"something"===function(){}.name,o=s&&(!n||n&&i(r,"name").configurable);e.exports={EXISTS:s,PROPER:a,CONFIGURABLE:o}},1702:function(e,t,c){var n=c(4374),C=Function.prototype,r=C.bind,i=C.call,s=n&&r.bind(i,i);e.exports=n?function(e){return e&&s(e)}:function(e){return e&&function(){return i.apply(e,arguments)}}},5005:function(e,t,c){var n=c(7854),C=c(614),r=function(e){return C(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?r(n[e]):n[e]&&n[e][t]}},8173:function(e,t,c){var n=c(9662);e.exports=function(e,t){var c=e[t];return null==c?void 0:n(c)}},7854:function(e,t,c){var n=function(e){return e&&e.Math==Math&&e};e.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof c.g&&c.g)||function(){return this}()||Function("return this")()},2597:function(e,t,c){var n=c(1702),C=c(7908),r=n({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return r(C(e),t)}},3501:function(e){e.exports={}},4664:function(e,t,c){var n=c(9781),C=c(7293),r=c(317);e.exports=!n&&!C((function(){return 7!=Object.defineProperty(r("div"),"a",{get:function(){return 7}}).a}))},8361:function(e,t,c){var n=c(7854),C=c(1702),r=c(7293),i=c(4326),s=n.Object,a=C("".split);e.exports=r((function(){return!s("z").propertyIsEnumerable(0)}))?function(e){return"String"==i(e)?a(e,""):s(e)}:s},9587:function(e,t,c){var n=c(614),C=c(111),r=c(7674);e.exports=function(e,t,c){var i,s;return r&&n(i=t.constructor)&&i!==c&&C(s=i.prototype)&&s!==c.prototype&&r(e,s),e}},2788:function(e,t,c){var n=c(1702),C=c(614),r=c(5465),i=n(Function.toString);C(r.inspectSource)||(r.inspectSource=function(e){return i(e)}),e.exports=r.inspectSource},8340:function(e,t,c){var n=c(111),C=c(8880);e.exports=function(e,t){n(t)&&"cause"in t&&C(e,"cause",t.cause)}},9909:function(e,t,c){var n,C,r,i=c(8536),s=c(7854),a=c(1702),o=c(111),l=c(8880),h=c(2597),u=c(5465),f=c(6200),z=c(3501),d="Object already initialized",M=s.TypeError,v=s.WeakMap,m=function(e){return r(e)?C(e):n(e,{})},p=function(e){return function(t){var c;if(!o(t)||(c=C(t)).type!==e)throw M("Incompatible receiver, "+e+" required");return c}};if(i||u.state){var L=u.state||(u.state=new v),H=a(L.get),V=a(L.has),g=a(L.set);n=function(e,t){if(V(L,e))throw new M(d);return t.facade=e,g(L,e,t),t},C=function(e){return H(L,e)||{}},r=function(e){return V(L,e)}}else{var b=f("state");z[b]=!0,n=function(e,t){if(h(e,b))throw new M(d);return t.facade=e,l(e,b,t),t},C=function(e){return h(e,b)?e[b]:{}},r=function(e){return h(e,b)}}e.exports={set:n,get:C,has:r,enforce:m,getterFor:p}},614:function(e){e.exports=function(e){return"function"==typeof e}},4705:function(e,t,c){var n=c(7293),C=c(614),r=/#|\.prototype\./,i=function(e,t){var c=a[s(e)];return c==l||c!=o&&(C(t)?n(t):!!t)},s=i.normalize=function(e){return String(e).replace(r,".").toLowerCase()},a=i.data={},o=i.NATIVE="N",l=i.POLYFILL="P";e.exports=i},111:function(e,t,c){var n=c(614);e.exports=function(e){return"object"==typeof e?null!==e:n(e)}},1913:function(e){e.exports=!1},2190:function(e,t,c){var n=c(7854),C=c(5005),r=c(614),i=c(7976),s=c(3307),a=n.Object;e.exports=s?function(e){return"symbol"==typeof e}:function(e){var t=C("Symbol");return r(t)&&i(t.prototype,a(e))}},6244:function(e,t,c){var n=c(7466);e.exports=function(e){return n(e.length)}},133:function(e,t,c){var n=c(7392),C=c(7293);e.exports=!!Object.getOwnPropertySymbols&&!C((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&n&&n<41}))},8536:function(e,t,c){var n=c(7854),C=c(614),r=c(2788),i=n.WeakMap;e.exports=C(i)&&/native code/.test(r(i))},6277:function(e,t,c){var n=c(1340);e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:n(e)}},3070:function(e,t,c){var n=c(7854),C=c(9781),r=c(4664),i=c(3353),s=c(9670),a=c(4948),o=n.TypeError,l=Object.defineProperty,h=Object.getOwnPropertyDescriptor,u="enumerable",f="configurable",z="writable";t.f=C?i?function(e,t,c){if(s(e),t=a(t),s(c),"function"===typeof e&&"prototype"===t&&"value"in c&&z in c&&!c[z]){var n=h(e,t);n&&n[z]&&(e[t]=c.value,c={configurable:f in c?c[f]:n[f],enumerable:u in c?c[u]:n[u],writable:!1})}return l(e,t,c)}:l:function(e,t,c){if(s(e),t=a(t),s(c),r)try{return l(e,t,c)}catch(n){}if("get"in c||"set"in c)throw o("Accessors not supported");return"value"in c&&(e[t]=c.value),e}},1236:function(e,t,c){var n=c(9781),C=c(6916),r=c(5296),i=c(9114),s=c(5656),a=c(4948),o=c(2597),l=c(4664),h=Object.getOwnPropertyDescriptor;t.f=n?h:function(e,t){if(e=s(e),t=a(t),l)try{return h(e,t)}catch(c){}if(o(e,t))return i(!C(r.f,e,t),e[t])}},8006:function(e,t,c){var n=c(6324),C=c(748),r=C.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return n(e,r)}},5181:function(e,t){t.f=Object.getOwnPropertySymbols},7976:function(e,t,c){var n=c(1702);e.exports=n({}.isPrototypeOf)},6324:function(e,t,c){var n=c(1702),C=c(2597),r=c(5656),i=c(1318).indexOf,s=c(3501),a=n([].push);e.exports=function(e,t){var c,n=r(e),o=0,l=[];for(c in n)!C(s,c)&&C(n,c)&&a(l,c);while(t.length>o)C(n,c=t[o++])&&(~i(l,c)||a(l,c));return l}},5296:function(e,t){"use strict";var c={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,C=n&&!c.call({1:2},1);t.f=C?function(e){var t=n(this,e);return!!t&&t.enumerable}:c},7674:function(e,t,c){var n=c(1702),C=c(9670),r=c(6077);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,c={};try{e=n(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),e(c,[]),t=c instanceof Array}catch(i){}return function(c,n){return C(c),r(n),t?e(c,n):c.__proto__=n,c}}():void 0)},2140:function(e,t,c){var n=c(7854),C=c(6916),r=c(614),i=c(111),s=n.TypeError;e.exports=function(e,t){var c,n;if("string"===t&&r(c=e.toString)&&!i(n=C(c,e)))return n;if(r(c=e.valueOf)&&!i(n=C(c,e)))return n;if("string"!==t&&r(c=e.toString)&&!i(n=C(c,e)))return n;throw s("Can't convert object to primitive value")}},3887:function(e,t,c){var n=c(5005),C=c(1702),r=c(8006),i=c(5181),s=c(9670),a=C([].concat);e.exports=n("Reflect","ownKeys")||function(e){var t=r.f(s(e)),c=i.f;return c?a(t,c(e)):t}},1320:function(e,t,c){var n=c(7854),C=c(614),r=c(2597),i=c(8880),s=c(3505),a=c(2788),o=c(9909),l=c(6530).CONFIGURABLE,h=o.get,u=o.enforce,f=String(String).split("String");(e.exports=function(e,t,c,a){var o,h=!!a&&!!a.unsafe,z=!!a&&!!a.enumerable,d=!!a&&!!a.noTargetGet,M=a&&void 0!==a.name?a.name:t;C(c)&&("Symbol("===String(M).slice(0,7)&&(M="["+String(M).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!r(c,"name")||l&&c.name!==M)&&i(c,"name",M),o=u(c),o.source||(o.source=f.join("string"==typeof M?M:""))),e!==n?(h?!d&&e[t]&&(z=!0):delete e[t],z?e[t]=c:i(e,t,c)):z?e[t]=c:s(t,c)})(Function.prototype,"toString",(function(){return C(this)&&h(this).source||a(this)}))},4488:function(e,t,c){var n=c(7854),C=n.TypeError;e.exports=function(e){if(void 0==e)throw C("Can't call method on "+e);return e}},3505:function(e,t,c){var n=c(7854),C=Object.defineProperty;e.exports=function(e,t){try{C(n,e,{value:t,configurable:!0,writable:!0})}catch(c){n[e]=t}return t}},6200:function(e,t,c){var n=c(2309),C=c(9711),r=n("keys");e.exports=function(e){return r[e]||(r[e]=C(e))}},5465:function(e,t,c){var n=c(7854),C=c(3505),r="__core-js_shared__",i=n[r]||C(r,{});e.exports=i},2309:function(e,t,c){var n=c(1913),C=c(5465);(e.exports=function(e,t){return C[e]||(C[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.21.1",mode:n?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.21.1/LICENSE",source:"https://github.com/zloirock/core-js"})},1400:function(e,t,c){var n=c(9303),C=Math.max,r=Math.min;e.exports=function(e,t){var c=n(e);return c<0?C(c+t,0):r(c,t)}},5656:function(e,t,c){var n=c(8361),C=c(4488);e.exports=function(e){return n(C(e))}},9303:function(e){var t=Math.ceil,c=Math.floor;e.exports=function(e){var n=+e;return n!==n||0===n?0:(n>0?c:t)(n)}},7466:function(e,t,c){var n=c(9303),C=Math.min;e.exports=function(e){return e>0?C(n(e),9007199254740991):0}},7908:function(e,t,c){var n=c(7854),C=c(4488),r=n.Object;e.exports=function(e){return r(C(e))}},7593:function(e,t,c){var n=c(7854),C=c(6916),r=c(111),i=c(2190),s=c(8173),a=c(2140),o=c(5112),l=n.TypeError,h=o("toPrimitive");e.exports=function(e,t){if(!r(e)||i(e))return e;var c,n=s(e,h);if(n){if(void 0===t&&(t="default"),c=C(n,e,t),!r(c)||i(c))return c;throw l("Can't convert object to primitive value")}return void 0===t&&(t="number"),a(e,t)}},4948:function(e,t,c){var n=c(7593),C=c(2190);e.exports=function(e){var t=n(e,"string");return C(t)?t:t+""}},1694:function(e,t,c){var n=c(5112),C=n("toStringTag"),r={};r[C]="z",e.exports="[object z]"===String(r)},1340:function(e,t,c){var n=c(7854),C=c(648),r=n.String;e.exports=function(e){if("Symbol"===C(e))throw TypeError("Cannot convert a Symbol value to a string");return r(e)}},6330:function(e,t,c){var n=c(7854),C=n.String;e.exports=function(e){try{return C(e)}catch(t){return"Object"}}},9711:function(e,t,c){var n=c(1702),C=0,r=Math.random(),i=n(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+i(++C+r,36)}},3307:function(e,t,c){var n=c(133);e.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(e,t,c){var n=c(9781),C=c(7293);e.exports=n&&C((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},5112:function(e,t,c){var n=c(7854),C=c(2309),r=c(2597),i=c(9711),s=c(133),a=c(3307),o=C("wks"),l=n.Symbol,h=l&&l["for"],u=a?l:l&&l.withoutSetter||i;e.exports=function(e){if(!r(o,e)||!s&&"string"!=typeof o[e]){var t="Symbol."+e;s&&r(l,e)?o[e]=l[e]:o[e]=a&&h?h(t):u(t)}return o[e]}},9191:function(e,t,c){"use strict";var n=c(5005),C=c(2597),r=c(8880),i=c(7976),s=c(7674),a=c(9920),o=c(9587),l=c(6277),h=c(8340),u=c(7741),f=c(2914),z=c(1913);e.exports=function(e,t,c,d){var M=d?2:1,v=e.split("."),m=v[v.length-1],p=n.apply(null,v);if(p){var L=p.prototype;if(!z&&C(L,"cause")&&delete L.cause,!c)return p;var H=n("Error"),V=t((function(e,t){var c=l(d?t:e,void 0),n=d?new p(e):new p;return void 0!==c&&r(n,"message",c),f&&r(n,"stack",u(n.stack,2)),this&&i(L,this)&&o(n,this,V),arguments.length>M&&h(n,arguments[M]),n}));if(V.prototype=L,"Error"!==m&&(s?s(V,H):a(V,H,{name:!0})),a(V,p),!z)try{L.name!==m&&r(L,"name",m),L.constructor=V}catch(g){}return V}}},1703:function(e,t,c){var n=c(2109),C=c(7854),r=c(2104),i=c(9191),s="WebAssembly",a=C[s],o=7!==Error("e",{cause:7}).cause,l=function(e,t){var c={};c[e]=i(e,t,o),n({global:!0,forced:o},c)},h=function(e,t){if(a&&a[e]){var c={};c[e]=i(s+"."+e,t,o),n({target:s,stat:!0,forced:o},c)}};l("Error",(function(e){return function(t){return r(e,this,arguments)}})),l("EvalError",(function(e){return function(t){return r(e,this,arguments)}})),l("RangeError",(function(e){return function(t){return r(e,this,arguments)}})),l("ReferenceError",(function(e){return function(t){return r(e,this,arguments)}})),l("SyntaxError",(function(e){return function(t){return r(e,this,arguments)}})),l("TypeError",(function(e){return function(t){return r(e,this,arguments)}})),l("URIError",(function(e){return function(t){return r(e,this,arguments)}})),h("CompileError",(function(e){return function(t){return r(e,this,arguments)}})),h("LinkError",(function(e){return function(t){return r(e,this,arguments)}})),h("RuntimeError",(function(e){return function(t){return r(e,this,arguments)}}))},2801:function(e,t,c){"use strict";var n=c(2109),C=c(5005),r=c(9114),i=c(3070).f,s=c(2597),a=c(5787),o=c(9587),l=c(6277),h=c(3678),u=c(7741),f=c(1913),z="DOMException",d=C("Error"),M=C(z),v=function(){a(this,m);var e=arguments.length,t=l(e<1?void 0:arguments[0]),c=l(e<2?void 0:arguments[1],"Error"),n=new M(t,c),C=d(t);return C.name=z,i(n,"stack",r(1,u(C.stack,1))),o(n,this,v),n},m=v.prototype=M.prototype,p="stack"in d(z),L="stack"in new M(1,2),H=p&&!L;n({global:!0,forced:f||H},{DOMException:H?v:M});var V=C(z),g=V.prototype;if(g.constructor!==V)for(var b in f||i(g,"constructor",r(1,V)),h)if(s(h,b)){var y=h[b],_=y.s;s(V,_)||i(V,_,r(6,y.c))}},223:function(e,t,c){"use strict";c.d(t,{BH:function(){return o},L:function(){return s},LL:function(){return p},X3:function(){return N},ZR:function(){return m},b$:function(){return f},eu:function(){return M},hl:function(){return d},m9:function(){return O},ne:function(){return w},pd:function(){return S},ru:function(){return u},tV:function(){return a},uI:function(){return h},vZ:function(){return g},w1:function(){return z},xO:function(){return y},xb:function(){return V},z$:function(){return l},zd:function(){return _}});c(1703),c(2801);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const n=function(e){const t=[];let c=0;for(let n=0;n<e.length;n++){let C=e.charCodeAt(n);C<128?t[c++]=C:C<2048?(t[c++]=C>>6|192,t[c++]=63&C|128):55296===(64512&C)&&n+1<e.length&&56320===(64512&e.charCodeAt(n+1))?(C=65536+((1023&C)<<10)+(1023&e.charCodeAt(++n)),t[c++]=C>>18|240,t[c++]=C>>12&63|128,t[c++]=C>>6&63|128,t[c++]=63&C|128):(t[c++]=C>>12|224,t[c++]=C>>6&63|128,t[c++]=63&C|128)}return t},C=function(e){const t=[];let c=0,n=0;while(c<e.length){const C=e[c++];if(C<128)t[n++]=String.fromCharCode(C);else if(C>191&&C<224){const r=e[c++];t[n++]=String.fromCharCode((31&C)<<6|63&r)}else if(C>239&&C<365){const r=e[c++],i=e[c++],s=e[c++],a=((7&C)<<18|(63&r)<<12|(63&i)<<6|63&s)-65536;t[n++]=String.fromCharCode(55296+(a>>10)),t[n++]=String.fromCharCode(56320+(1023&a))}else{const r=e[c++],i=e[c++];t[n++]=String.fromCharCode((15&C)<<12|(63&r)<<6|63&i)}}return t.join("")},r={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const c=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let C=0;C<e.length;C+=3){const t=e[C],r=C+1<e.length,i=r?e[C+1]:0,s=C+2<e.length,a=s?e[C+2]:0,o=t>>2,l=(3&t)<<4|i>>4;let h=(15&i)<<2|a>>6,u=63&a;s||(u=64,r||(h=64)),n.push(c[o],c[l],c[h],c[u])}return n.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(n(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):C(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const c=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let C=0;C<e.length;){const t=c[e.charAt(C++)],r=C<e.length,i=r?c[e.charAt(C)]:0;++C;const s=C<e.length,a=s?c[e.charAt(C)]:64;++C;const o=C<e.length,l=o?c[e.charAt(C)]:64;if(++C,null==t||null==i||null==a||null==l)throw Error();const h=t<<2|i>>4;if(n.push(h),64!==a){const e=i<<4&240|a>>2;if(n.push(e),64!==l){const e=a<<6&192|l;n.push(e)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},i=function(e){const t=n(e);return r.encodeByteArray(t,!0)},s=function(e){return i(e).replace(/\./g,"")},a=function(e){try{return r.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class o{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,c)=>{t?this.reject(t):this.resolve(c),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,c))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function l(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function h(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(l())}function u(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function f(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function z(){const e=l();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function d(){return"object"===typeof indexedDB}function M(){return new Promise(((e,t)=>{try{let c=!0;const n="validate-browser-context-for-indexeddb-analytics-module",C=self.indexedDB.open(n);C.onsuccess=()=>{C.result.close(),c||self.indexedDB.deleteDatabase(n),e(!0)},C.onupgradeneeded=()=>{c=!1},C.onerror=()=>{var e;t((null===(e=C.error)||void 0===e?void 0:e.message)||"")}}catch(c){t(c)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const v="FirebaseError";class m extends Error{constructor(e,t,c){super(t),this.code=e,this.customData=c,this.name=v,Object.setPrototypeOf(this,m.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,p.prototype.create)}}class p{constructor(e,t,c){this.service=e,this.serviceName=t,this.errors=c}create(e,...t){const c=t[0]||{},n=`${this.service}/${e}`,C=this.errors[e],r=C?L(C,c):"Error",i=`${this.serviceName}: ${r} (${n}).`,s=new m(n,i,c);return s}}function L(e,t){return e.replace(H,((e,c)=>{const n=t[c];return null!=n?String(n):`<${c}?>`}))}const H=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function g(e,t){if(e===t)return!0;const c=Object.keys(e),n=Object.keys(t);for(const C of c){if(!n.includes(C))return!1;const c=e[C],r=t[C];if(b(c)&&b(r)){if(!g(c,r))return!1}else if(c!==r)return!1}for(const C of n)if(!c.includes(C))return!1;return!0}function b(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y(e){const t=[];for(const[c,n]of Object.entries(e))Array.isArray(n)?n.forEach((e=>{t.push(encodeURIComponent(c)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(c)+"="+encodeURIComponent(n));return t.length?"&"+t.join("&"):""}function _(e){const t={},c=e.replace(/^\?/,"").split("&");return c.forEach((e=>{if(e){const[c,n]=e.split("=");t[decodeURIComponent(c)]=decodeURIComponent(n)}})),t}function S(e){const t=e.indexOf("?");if(!t)return"";const c=e.indexOf("#",t);return e.substring(t,c>0?c:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(e,t){const c=new k(e,t);return c.subscribe.bind(c)}class k{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,c){let n;if(void 0===e&&void 0===t&&void 0===c)throw new Error("Missing Observer.");n=E(e,["next","error","complete"])?e:{next:e,error:t,complete:c},void 0===n.next&&(n.next=A),void 0===n.error&&(n.error=A),void 0===n.complete&&(n.complete=A);const C=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch(e){}})),this.observers.push(n),C}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(c){"undefined"!==typeof console&&console.error&&console.error(c)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function E(e,t){if("object"!==typeof e||null===e)return!1;for(const c of t)if(c in e&&"function"===typeof e[c])return!0;return!1}function A(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function O(e){return e&&e._delegate?e._delegate:e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(e,t){return new Promise(((c,n)=>{e.onsuccess=e=>{c(e.target.result)},e.onerror=e=>{var c;n(`${t}: ${null===(c=e.target.error)||void 0===c?void 0:c.message}`)}}))}class I{constructor(e){this._db=e,this.objectStoreNames=this._db.objectStoreNames}transaction(e,t){return new T(this._db.transaction.call(this._db,e,t))}createObjectStore(e,t){return new P(this._db.createObjectStore(e,t))}close(){this._db.close()}}class T{constructor(e){this._transaction=e,this.complete=new Promise(((e,t)=>{this._transaction.oncomplete=function(){e()},this._transaction.onerror=()=>{t(this._transaction.error)},this._transaction.onabort=()=>{t(this._transaction.error)}}))}objectStore(e){return new P(this._transaction.objectStore(e))}}class P{constructor(e){this._store=e}index(e){return new R(this._store.index(e))}createIndex(e,t,c){return new R(this._store.createIndex(e,t,c))}get(e){const t=this._store.get(e);return x(t,"Error reading from IndexedDB")}put(e,t){const c=this._store.put(e,t);return x(c,"Error writing to IndexedDB")}delete(e){const t=this._store.delete(e);return x(t,"Error deleting from IndexedDB")}clear(){const e=this._store.clear();return x(e,"Error clearing IndexedDB object store")}}class R{constructor(e){this._index=e}get(e){const t=this._index.get(e);return x(t,"Error reading from IndexedDB")}}function N(e,t,c){return new Promise(((n,C)=>{try{const r=indexedDB.open(e,t);r.onsuccess=e=>{n(new I(e.target.result))},r.onerror=e=>{var t;C(`Error opening indexedDB: ${null===(t=e.target.error)||void 0===t?void 0:t.message}`)},r.onupgradeneeded=e=>{c(new I(r.result),e.oldVersion,e.newVersion,new T(r.transaction))}}catch(r){C(`Error opening indexedDB: ${r.message}`)}}))}},1129:function(e,t,c){c(1703),
/*!
 * Font Awesome Free 6.0.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */
/*!
  * Bootstrap v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
function(t,n){e.exports=n(c(1448))}(0,(function(e){"use strict";function t(e){if(e&&e.__esModule)return e;const t=Object.create(null);if(e)for(const c in e)if("default"!==c){const n=Object.getOwnPropertyDescriptor(e,c);Object.defineProperty(t,c,n.get?n:{enumerable:!0,get:()=>e[c]})}return t.default=e,Object.freeze(t)}const c=t(e),n=1e6,C=1e3,r="transitionend",i=e=>null===e||void 0===e?`${e}`:{}.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(),s=e=>{do{e+=Math.floor(Math.random()*n)}while(document.getElementById(e));return e},a=e=>{let t=e.getAttribute("data-bs-target");if(!t||"#"===t){let c=e.getAttribute("href");if(!c||!c.includes("#")&&!c.startsWith("."))return null;c.includes("#")&&!c.startsWith("#")&&(c=`#${c.split("#")[1]}`),t=c&&"#"!==c?c.trim():null}return t},o=e=>{const t=a(e);return t&&document.querySelector(t)?t:null},l=e=>{const t=a(e);return t?document.querySelector(t):null},h=e=>{if(!e)return 0;let{transitionDuration:t,transitionDelay:c}=window.getComputedStyle(e);const n=Number.parseFloat(t),r=Number.parseFloat(c);return n||r?(t=t.split(",")[0],c=c.split(",")[0],(Number.parseFloat(t)+Number.parseFloat(c))*C):0},u=e=>{e.dispatchEvent(new Event(r))},f=e=>!(!e||"object"!==typeof e)&&("undefined"!==typeof e.jquery&&(e=e[0]),"undefined"!==typeof e.nodeType),z=e=>f(e)?e.jquery?e[0]:e:"string"===typeof e&&e.length>0?document.querySelector(e):null,d=(e,t,c)=>{Object.keys(c).forEach((n=>{const C=c[n],r=t[n],s=r&&f(r)?"element":i(r);if(!new RegExp(C).test(s))throw new TypeError(`${e.toUpperCase()}: Option "${n}" provided type "${s}" but expected type "${C}".`)}))},M=e=>!(!f(e)||0===e.getClientRects().length)&&"visible"===getComputedStyle(e).getPropertyValue("visibility"),v=e=>!e||e.nodeType!==Node.ELEMENT_NODE||(!!e.classList.contains("disabled")||("undefined"!==typeof e.disabled?e.disabled:e.hasAttribute("disabled")&&"false"!==e.getAttribute("disabled"))),m=e=>{if(!document.documentElement.attachShadow)return null;if("function"===typeof e.getRootNode){const t=e.getRootNode();return t instanceof ShadowRoot?t:null}return e instanceof ShadowRoot?e:e.parentNode?m(e.parentNode):null},p=()=>{},L=e=>{e.offsetHeight},H=()=>{const{jQuery:e}=window;return e&&!document.body.hasAttribute("data-bs-no-jquery")?e:null},V=[],g=e=>{"loading"===document.readyState?(V.length||document.addEventListener("DOMContentLoaded",(()=>{V.forEach((e=>e()))})),V.push(e)):e()},b=()=>"rtl"===document.documentElement.dir,y=e=>{g((()=>{const t=H();if(t){const c=e.NAME,n=t.fn[c];t.fn[c]=e.jQueryInterface,t.fn[c].Constructor=e,t.fn[c].noConflict=()=>(t.fn[c]=n,e.jQueryInterface)}}))},_=e=>{"function"===typeof e&&e()},S=(e,t,c=!0)=>{if(!c)return void _(e);const n=5,C=h(t)+n;let i=!1;const s=({target:c})=>{c===t&&(i=!0,t.removeEventListener(r,s),_(e))};t.addEventListener(r,s),setTimeout((()=>{i||u(t)}),C)},w=(e,t,c,n)=>{let C=e.indexOf(t);if(-1===C)return e[!c&&n?e.length-1:0];const r=e.length;return C+=c?1:-1,n&&(C=(C+r)%r),e[Math.max(0,Math.min(C,r-1))]},k=/[^.]*(?=\..*)\.|.*/,E=/\..*/,A=/::\d+$/,O={};let x=1;const I={mouseenter:"mouseover",mouseleave:"mouseout"},T=/^(mouseenter|mouseleave)/i,P=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function R(e,t){return t&&`${t}::${x++}`||e.uidEvent||x++}function N(e){const t=R(e);return e.uidEvent=t,O[t]=O[t]||{},O[t]}function D(e,t){return function c(n){return n.delegateTarget=e,c.oneOff&&G.off(e,n.type,t),t.apply(e,[n])}}function j(e,t,c){return function n(C){const r=e.querySelectorAll(t);for(let{target:i}=C;i&&i!==this;i=i.parentNode)for(let s=r.length;s--;)if(r[s]===i)return C.delegateTarget=i,n.oneOff&&G.off(e,C.type,t,c),c.apply(i,[C]);return null}}function $(e,t,c=null){const n=Object.keys(e);for(let C=0,r=n.length;C<r;C++){const r=e[n[C]];if(r.originalHandler===t&&r.delegationSelector===c)return r}return null}function q(e,t,c){const n="string"===typeof t,C=n?c:t;let r=W(e);const i=P.has(r);return i||(r=e),[n,C,r]}function U(e,t,c,n,C){if("string"!==typeof t||!e)return;if(c||(c=n,n=null),T.test(t)){const e=e=>function(t){if(!t.relatedTarget||t.relatedTarget!==t.delegateTarget&&!t.delegateTarget.contains(t.relatedTarget))return e.call(this,t)};n?n=e(n):c=e(c)}const[r,i,s]=q(t,c,n),a=N(e),o=a[s]||(a[s]={}),l=$(o,i,r?c:null);if(l)return void(l.oneOff=l.oneOff&&C);const h=R(i,t.replace(k,"")),u=r?j(e,c,n):D(e,c);u.delegationSelector=r?c:null,u.originalHandler=i,u.oneOff=C,u.uidEvent=h,o[h]=u,e.addEventListener(s,u,r)}function F(e,t,c,n,C){const r=$(t[c],n,C);r&&(e.removeEventListener(c,r,Boolean(C)),delete t[c][r.uidEvent])}function B(e,t,c,n){const C=t[c]||{};Object.keys(C).forEach((r=>{if(r.includes(n)){const n=C[r];F(e,t,c,n.originalHandler,n.delegationSelector)}}))}function W(e){return e=e.replace(E,""),I[e]||e}const G={on(e,t,c,n){U(e,t,c,n,!1)},one(e,t,c,n){U(e,t,c,n,!0)},off(e,t,c,n){if("string"!==typeof t||!e)return;const[C,r,i]=q(t,c,n),s=i!==t,a=N(e),o=t.startsWith(".");if("undefined"!==typeof r){if(!a||!a[i])return;return void F(e,a,i,r,C?c:null)}o&&Object.keys(a).forEach((c=>{B(e,a,c,t.slice(1))}));const l=a[i]||{};Object.keys(l).forEach((c=>{const n=c.replace(A,"");if(!s||t.includes(n)){const t=l[c];F(e,a,i,t.originalHandler,t.delegationSelector)}}))},trigger(e,t,c){if("string"!==typeof t||!e)return null;const n=H(),C=W(t),r=t!==C,i=P.has(C);let s,a=!0,o=!0,l=!1,h=null;return r&&n&&(s=n.Event(t,c),n(e).trigger(s),a=!s.isPropagationStopped(),o=!s.isImmediatePropagationStopped(),l=s.isDefaultPrevented()),i?(h=document.createEvent("HTMLEvents"),h.initEvent(C,a,!0)):h=new CustomEvent(t,{bubbles:a,cancelable:!0}),"undefined"!==typeof c&&Object.keys(c).forEach((e=>{Object.defineProperty(h,e,{get(){return c[e]}})})),l&&h.preventDefault(),o&&e.dispatchEvent(h),h.defaultPrevented&&"undefined"!==typeof s&&s.preventDefault(),h}},K=new Map,Y={set(e,t,c){K.has(e)||K.set(e,new Map);const n=K.get(e);n.has(t)||0===n.size?n.set(t,c):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`)},get(e,t){return K.has(e)&&K.get(e).get(t)||null},remove(e,t){if(!K.has(e))return;const c=K.get(e);c.delete(t),0===c.size&&K.delete(e)}},J="5.1.3";class X{constructor(e){e=z(e),e&&(this._element=e,Y.set(this._element,this.constructor.DATA_KEY,this))}dispose(){Y.remove(this._element,this.constructor.DATA_KEY),G.off(this._element,this.constructor.EVENT_KEY),Object.getOwnPropertyNames(this).forEach((e=>{this[e]=null}))}_queueCallback(e,t,c=!0){S(e,t,c)}static getInstance(e){return Y.get(z(e),this.DATA_KEY)}static getOrCreateInstance(e,t={}){return this.getInstance(e)||new this(e,"object"===typeof t?t:null)}static get VERSION(){return J}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}}const Q=(e,t="hide")=>{const c=`click.dismiss${e.EVENT_KEY}`,n=e.NAME;G.on(document,c,`[data-bs-dismiss="${n}"]`,(function(c){if(["A","AREA"].includes(this.tagName)&&c.preventDefault(),v(this))return;const C=l(this)||this.closest(`.${n}`),r=e.getOrCreateInstance(C);r[t]()}))},Z="alert",ee="bs.alert",te=`.${ee}`,ce=`close${te}`,ne=`closed${te}`,Ce="fade",re="show";class ie extends X{static get NAME(){return Z}close(){const e=G.trigger(this._element,ce);if(e.defaultPrevented)return;this._element.classList.remove(re);const t=this._element.classList.contains(Ce);this._queueCallback((()=>this._destroyElement()),this._element,t)}_destroyElement(){this._element.remove(),G.trigger(this._element,ne),this.dispose()}static jQueryInterface(e){return this.each((function(){const t=ie.getOrCreateInstance(this);if("string"===typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e](this)}}))}}Q(ie,"close"),y(ie);const se="button",ae="bs.button",oe=`.${ae}`,le=".data-api",he="active",ue='[data-bs-toggle="button"]',fe=`click${oe}${le}`;class ze extends X{static get NAME(){return se}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(he))}static jQueryInterface(e){return this.each((function(){const t=ze.getOrCreateInstance(this);"toggle"===e&&t[e]()}))}}function de(e){return"true"===e||"false"!==e&&(e===Number(e).toString()?Number(e):""===e||"null"===e?null:e)}function Me(e){return e.replace(/[A-Z]/g,(e=>`-${e.toLowerCase()}`))}G.on(document,fe,ue,(e=>{e.preventDefault();const t=e.target.closest(ue),c=ze.getOrCreateInstance(t);c.toggle()})),y(ze);const ve={setDataAttribute(e,t,c){e.setAttribute(`data-bs-${Me(t)}`,c)},removeDataAttribute(e,t){e.removeAttribute(`data-bs-${Me(t)}`)},getDataAttributes(e){if(!e)return{};const t={};return Object.keys(e.dataset).filter((e=>e.startsWith("bs"))).forEach((c=>{let n=c.replace(/^bs/,"");n=n.charAt(0).toLowerCase()+n.slice(1,n.length),t[n]=de(e.dataset[c])})),t},getDataAttribute(e,t){return de(e.getAttribute(`data-bs-${Me(t)}`))},offset(e){const t=e.getBoundingClientRect();return{top:t.top+window.pageYOffset,left:t.left+window.pageXOffset}},position(e){return{top:e.offsetTop,left:e.offsetLeft}}},me=3,pe={find(e,t=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(t,e))},findOne(e,t=document.documentElement){return Element.prototype.querySelector.call(t,e)},children(e,t){return[].concat(...e.children).filter((e=>e.matches(t)))},parents(e,t){const c=[];let n=e.parentNode;while(n&&n.nodeType===Node.ELEMENT_NODE&&n.nodeType!==me)n.matches(t)&&c.push(n),n=n.parentNode;return c},prev(e,t){let c=e.previousElementSibling;while(c){if(c.matches(t))return[c];c=c.previousElementSibling}return[]},next(e,t){let c=e.nextElementSibling;while(c){if(c.matches(t))return[c];c=c.nextElementSibling}return[]},focusableChildren(e){const t=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map((e=>`${e}:not([tabindex^="-"])`)).join(", ");return this.find(t,e).filter((e=>!v(e)&&M(e)))}},Le="carousel",He="bs.carousel",Ve=`.${He}`,ge=".data-api",be="ArrowLeft",ye="ArrowRight",_e=500,Se=40,we={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},ke={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},Ee="next",Ae="prev",Oe="left",xe="right",Ie={[be]:xe,[ye]:Oe},Te=`slide${Ve}`,Pe=`slid${Ve}`,Re=`keydown${Ve}`,Ne=`mouseenter${Ve}`,De=`mouseleave${Ve}`,je=`touchstart${Ve}`,$e=`touchmove${Ve}`,qe=`touchend${Ve}`,Ue=`pointerdown${Ve}`,Fe=`pointerup${Ve}`,Be=`dragstart${Ve}`,We=`load${Ve}${ge}`,Ge=`click${Ve}${ge}`,Ke="carousel",Ye="active",Je="slide",Xe="carousel-item-end",Qe="carousel-item-start",Ze="carousel-item-next",et="carousel-item-prev",tt="pointer-event",ct=".active",nt=".active.carousel-item",Ct=".carousel-item",rt=".carousel-item img",it=".carousel-item-next, .carousel-item-prev",st=".carousel-indicators",at="[data-bs-target]",ot="[data-bs-slide], [data-bs-slide-to]",lt='[data-bs-ride="carousel"]',ht="touch",ut="pen";class ft extends X{constructor(e,t){super(e),this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(t),this._indicatorsElement=pe.findOne(st,this._element),this._touchSupported="ontouchstart"in document.documentElement||navigator.maxTouchPoints>0,this._pointerEvent=Boolean(window.PointerEvent),this._addEventListeners()}static get Default(){return we}static get NAME(){return Le}next(){this._slide(Ee)}nextWhenVisible(){!document.hidden&&M(this._element)&&this.next()}prev(){this._slide(Ae)}pause(e){e||(this._isPaused=!0),pe.findOne(it,this._element)&&(u(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null}cycle(e){e||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config&&this._config.interval&&!this._isPaused&&(this._updateInterval(),this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))}to(e){this._activeElement=pe.findOne(nt,this._element);const t=this._getItemIndex(this._activeElement);if(e>this._items.length-1||e<0)return;if(this._isSliding)return void G.one(this._element,Pe,(()=>this.to(e)));if(t===e)return this.pause(),void this.cycle();const c=e>t?Ee:Ae;this._slide(c,this._items[e])}_getConfig(e){return e={...we,...ve.getDataAttributes(this._element),..."object"===typeof e?e:{}},d(Le,e,ke),e}_handleSwipe(){const e=Math.abs(this.touchDeltaX);if(e<=Se)return;const t=e/this.touchDeltaX;this.touchDeltaX=0,t&&this._slide(t>0?xe:Oe)}_addEventListeners(){this._config.keyboard&&G.on(this._element,Re,(e=>this._keydown(e))),"hover"===this._config.pause&&(G.on(this._element,Ne,(e=>this.pause(e))),G.on(this._element,De,(e=>this.cycle(e)))),this._config.touch&&this._touchSupported&&this._addTouchEventListeners()}_addTouchEventListeners(){const e=e=>this._pointerEvent&&(e.pointerType===ut||e.pointerType===ht),t=t=>{e(t)?this.touchStartX=t.clientX:this._pointerEvent||(this.touchStartX=t.touches[0].clientX)},c=e=>{this.touchDeltaX=e.touches&&e.touches.length>1?0:e.touches[0].clientX-this.touchStartX},n=t=>{e(t)&&(this.touchDeltaX=t.clientX-this.touchStartX),this._handleSwipe(),"hover"===this._config.pause&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout((e=>this.cycle(e)),_e+this._config.interval))};pe.find(rt,this._element).forEach((e=>{G.on(e,Be,(e=>e.preventDefault()))})),this._pointerEvent?(G.on(this._element,Ue,(e=>t(e))),G.on(this._element,Fe,(e=>n(e))),this._element.classList.add(tt)):(G.on(this._element,je,(e=>t(e))),G.on(this._element,$e,(e=>c(e))),G.on(this._element,qe,(e=>n(e))))}_keydown(e){if(/input|textarea/i.test(e.target.tagName))return;const t=Ie[e.key];t&&(e.preventDefault(),this._slide(t))}_getItemIndex(e){return this._items=e&&e.parentNode?pe.find(Ct,e.parentNode):[],this._items.indexOf(e)}_getItemByOrder(e,t){const c=e===Ee;return w(this._items,t,c,this._config.wrap)}_triggerSlideEvent(e,t){const c=this._getItemIndex(e),n=this._getItemIndex(pe.findOne(nt,this._element));return G.trigger(this._element,Te,{relatedTarget:e,direction:t,from:n,to:c})}_setActiveIndicatorElement(e){if(this._indicatorsElement){const t=pe.findOne(ct,this._indicatorsElement);t.classList.remove(Ye),t.removeAttribute("aria-current");const c=pe.find(at,this._indicatorsElement);for(let n=0;n<c.length;n++)if(Number.parseInt(c[n].getAttribute("data-bs-slide-to"),10)===this._getItemIndex(e)){c[n].classList.add(Ye),c[n].setAttribute("aria-current","true");break}}}_updateInterval(){const e=this._activeElement||pe.findOne(nt,this._element);if(!e)return;const t=Number.parseInt(e.getAttribute("data-bs-interval"),10);t?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,this._config.interval=t):this._config.interval=this._config.defaultInterval||this._config.interval}_slide(e,t){const c=this._directionToOrder(e),n=pe.findOne(nt,this._element),C=this._getItemIndex(n),r=t||this._getItemByOrder(c,n),i=this._getItemIndex(r),s=Boolean(this._interval),a=c===Ee,o=a?Qe:Xe,l=a?Ze:et,h=this._orderToDirection(c);if(r&&r.classList.contains(Ye))return void(this._isSliding=!1);if(this._isSliding)return;const u=this._triggerSlideEvent(r,h);if(u.defaultPrevented)return;if(!n||!r)return;this._isSliding=!0,s&&this.pause(),this._setActiveIndicatorElement(r),this._activeElement=r;const f=()=>{G.trigger(this._element,Pe,{relatedTarget:r,direction:h,from:C,to:i})};if(this._element.classList.contains(Je)){r.classList.add(l),L(r),n.classList.add(o),r.classList.add(o);const e=()=>{r.classList.remove(o,l),r.classList.add(Ye),n.classList.remove(Ye,l,o),this._isSliding=!1,setTimeout(f,0)};this._queueCallback(e,n,!0)}else n.classList.remove(Ye),r.classList.add(Ye),this._isSliding=!1,f();s&&this.cycle()}_directionToOrder(e){return[xe,Oe].includes(e)?b()?e===Oe?Ae:Ee:e===Oe?Ee:Ae:e}_orderToDirection(e){return[Ee,Ae].includes(e)?b()?e===Ae?Oe:xe:e===Ae?xe:Oe:e}static carouselInterface(e,t){const c=ft.getOrCreateInstance(e,t);let{_config:n}=c;"object"===typeof t&&(n={...n,...t});const C="string"===typeof t?t:n.slide;if("number"===typeof t)c.to(t);else if("string"===typeof C){if("undefined"===typeof c[C])throw new TypeError(`No method named "${C}"`);c[C]()}else n.interval&&n.ride&&(c.pause(),c.cycle())}static jQueryInterface(e){return this.each((function(){ft.carouselInterface(this,e)}))}static dataApiClickHandler(e){const t=l(this);if(!t||!t.classList.contains(Ke))return;const c={...ve.getDataAttributes(t),...ve.getDataAttributes(this)},n=this.getAttribute("data-bs-slide-to");n&&(c.interval=!1),ft.carouselInterface(t,c),n&&ft.getInstance(t).to(n),e.preventDefault()}}G.on(document,Ge,ot,ft.dataApiClickHandler),G.on(window,We,(()=>{const e=pe.find(lt);for(let t=0,c=e.length;t<c;t++)ft.carouselInterface(e[t],ft.getInstance(e[t]))})),y(ft);const zt="collapse",dt="bs.collapse",Mt=`.${dt}`,vt=".data-api",mt={toggle:!0,parent:null},pt={toggle:"boolean",parent:"(null|element)"},Lt=`show${Mt}`,Ht=`shown${Mt}`,Vt=`hide${Mt}`,gt=`hidden${Mt}`,bt=`click${Mt}${vt}`,yt="show",_t="collapse",St="collapsing",wt="collapsed",kt=`:scope .${_t} .${_t}`,Et="collapse-horizontal",At="width",Ot="height",xt=".collapse.show, .collapse.collapsing",It='[data-bs-toggle="collapse"]';class Tt extends X{constructor(e,t){super(e),this._isTransitioning=!1,this._config=this._getConfig(t),this._triggerArray=[];const c=pe.find(It);for(let n=0,C=c.length;n<C;n++){const e=c[n],t=o(e),C=pe.find(t).filter((e=>e===this._element));null!==t&&C.length&&(this._selector=t,this._triggerArray.push(e))}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return mt}static get NAME(){return zt}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let e,t=[];if(this._config.parent){const e=pe.find(kt,this._config.parent);t=pe.find(xt,this._config.parent).filter((t=>!e.includes(t)))}const c=pe.findOne(this._selector);if(t.length){const n=t.find((e=>c!==e));if(e=n?Tt.getInstance(n):null,e&&e._isTransitioning)return}const n=G.trigger(this._element,Lt);if(n.defaultPrevented)return;t.forEach((t=>{c!==t&&Tt.getOrCreateInstance(t,{toggle:!1}).hide(),e||Y.set(t,dt,null)}));const C=this._getDimension();this._element.classList.remove(_t),this._element.classList.add(St),this._element.style[C]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const r=()=>{this._isTransitioning=!1,this._element.classList.remove(St),this._element.classList.add(_t,yt),this._element.style[C]="",G.trigger(this._element,Ht)},i=C[0].toUpperCase()+C.slice(1),s=`scroll${i}`;this._queueCallback(r,this._element,!0),this._element.style[C]=`${this._element[s]}px`}hide(){if(this._isTransitioning||!this._isShown())return;const e=G.trigger(this._element,Vt);if(e.defaultPrevented)return;const t=this._getDimension();this._element.style[t]=`${this._element.getBoundingClientRect()[t]}px`,L(this._element),this._element.classList.add(St),this._element.classList.remove(_t,yt);const c=this._triggerArray.length;for(let C=0;C<c;C++){const e=this._triggerArray[C],t=l(e);t&&!this._isShown(t)&&this._addAriaAndCollapsedClass([e],!1)}this._isTransitioning=!0;const n=()=>{this._isTransitioning=!1,this._element.classList.remove(St),this._element.classList.add(_t),G.trigger(this._element,gt)};this._element.style[t]="",this._queueCallback(n,this._element,!0)}_isShown(e=this._element){return e.classList.contains(yt)}_getConfig(e){return e={...mt,...ve.getDataAttributes(this._element),...e},e.toggle=Boolean(e.toggle),e.parent=z(e.parent),d(zt,e,pt),e}_getDimension(){return this._element.classList.contains(Et)?At:Ot}_initializeChildren(){if(!this._config.parent)return;const e=pe.find(kt,this._config.parent);pe.find(It,this._config.parent).filter((t=>!e.includes(t))).forEach((e=>{const t=l(e);t&&this._addAriaAndCollapsedClass([e],this._isShown(t))}))}_addAriaAndCollapsedClass(e,t){e.length&&e.forEach((e=>{t?e.classList.remove(wt):e.classList.add(wt),e.setAttribute("aria-expanded",t)}))}static jQueryInterface(e){return this.each((function(){const t={};"string"===typeof e&&/show|hide/.test(e)&&(t.toggle=!1);const c=Tt.getOrCreateInstance(this,t);if("string"===typeof e){if("undefined"===typeof c[e])throw new TypeError(`No method named "${e}"`);c[e]()}}))}}G.on(document,bt,It,(function(e){("A"===e.target.tagName||e.delegateTarget&&"A"===e.delegateTarget.tagName)&&e.preventDefault();const t=o(this),c=pe.find(t);c.forEach((e=>{Tt.getOrCreateInstance(e,{toggle:!1}).toggle()}))})),y(Tt);const Pt="dropdown",Rt="bs.dropdown",Nt=`.${Rt}`,Dt=".data-api",jt="Escape",$t="Space",qt="Tab",Ut="ArrowUp",Ft="ArrowDown",Bt=2,Wt=new RegExp(`${Ut}|${Ft}|${jt}`),Gt=`hide${Nt}`,Kt=`hidden${Nt}`,Yt=`show${Nt}`,Jt=`shown${Nt}`,Xt=`click${Nt}${Dt}`,Qt=`keydown${Nt}${Dt}`,Zt=`keyup${Nt}${Dt}`,ec="show",tc="dropup",cc="dropend",nc="dropstart",Cc="navbar",rc='[data-bs-toggle="dropdown"]',ic=".dropdown-menu",sc=".navbar-nav",ac=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",oc=b()?"top-end":"top-start",lc=b()?"top-start":"top-end",hc=b()?"bottom-end":"bottom-start",uc=b()?"bottom-start":"bottom-end",fc=b()?"left-start":"right-start",zc=b()?"right-start":"left-start",dc={offset:[0,2],boundary:"clippingParents",reference:"toggle",display:"dynamic",popperConfig:null,autoClose:!0},Mc={offset:"(array|string|function)",boundary:"(string|element)",reference:"(string|element|object)",display:"string",popperConfig:"(null|object|function)",autoClose:"(boolean|string)"};class vc extends X{constructor(e,t){super(e),this._popper=null,this._config=this._getConfig(t),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar()}static get Default(){return dc}static get DefaultType(){return Mc}static get NAME(){return Pt}toggle(){return this._isShown()?this.hide():this.show()}show(){if(v(this._element)||this._isShown(this._menu))return;const e={relatedTarget:this._element},t=G.trigger(this._element,Yt,e);if(t.defaultPrevented)return;const c=vc.getParentFromElement(this._element);this._inNavbar?ve.setDataAttribute(this._menu,"popper","none"):this._createPopper(c),"ontouchstart"in document.documentElement&&!c.closest(sc)&&[].concat(...document.body.children).forEach((e=>G.on(e,"mouseover",p))),this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(ec),this._element.classList.add(ec),G.trigger(this._element,Jt,e)}hide(){if(v(this._element)||!this._isShown(this._menu))return;const e={relatedTarget:this._element};this._completeHide(e)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(e){const t=G.trigger(this._element,Gt,e);t.defaultPrevented||("ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach((e=>G.off(e,"mouseover",p))),this._popper&&this._popper.destroy(),this._menu.classList.remove(ec),this._element.classList.remove(ec),this._element.setAttribute("aria-expanded","false"),ve.removeDataAttribute(this._menu,"popper"),G.trigger(this._element,Kt,e))}_getConfig(e){if(e={...this.constructor.Default,...ve.getDataAttributes(this._element),...e},d(Pt,e,this.constructor.DefaultType),"object"===typeof e.reference&&!f(e.reference)&&"function"!==typeof e.reference.getBoundingClientRect)throw new TypeError(`${Pt.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return e}_createPopper(e){if("undefined"===typeof c)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let t=this._element;"parent"===this._config.reference?t=e:f(this._config.reference)?t=z(this._config.reference):"object"===typeof this._config.reference&&(t=this._config.reference);const n=this._getPopperConfig(),C=n.modifiers.find((e=>"applyStyles"===e.name&&!1===e.enabled));this._popper=c.createPopper(t,this._menu,n),C&&ve.setDataAttribute(this._menu,"popper","static")}_isShown(e=this._element){return e.classList.contains(ec)}_getMenuElement(){return pe.next(this._element,ic)[0]}_getPlacement(){const e=this._element.parentNode;if(e.classList.contains(cc))return fc;if(e.classList.contains(nc))return zc;const t="end"===getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();return e.classList.contains(tc)?t?lc:oc:t?uc:hc}_detectNavbar(){return null!==this._element.closest(`.${Cc}`)}_getOffset(){const{offset:e}=this._config;return"string"===typeof e?e.split(",").map((e=>Number.parseInt(e,10))):"function"===typeof e?t=>e(t,this._element):e}_getPopperConfig(){const e={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return"static"===this._config.display&&(e.modifiers=[{name:"applyStyles",enabled:!1}]),{...e,..."function"===typeof this._config.popperConfig?this._config.popperConfig(e):this._config.popperConfig}}_selectMenuItem({key:e,target:t}){const c=pe.find(ac,this._menu).filter(M);c.length&&w(c,t,e===Ft,!c.includes(t)).focus()}static jQueryInterface(e){return this.each((function(){const t=vc.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}static clearMenus(e){if(e&&(e.button===Bt||"keyup"===e.type&&e.key!==qt))return;const t=pe.find(rc);for(let c=0,n=t.length;c<n;c++){const n=vc.getInstance(t[c]);if(!n||!1===n._config.autoClose)continue;if(!n._isShown())continue;const C={relatedTarget:n._element};if(e){const t=e.composedPath(),c=t.includes(n._menu);if(t.includes(n._element)||"inside"===n._config.autoClose&&!c||"outside"===n._config.autoClose&&c)continue;if(n._menu.contains(e.target)&&("keyup"===e.type&&e.key===qt||/input|select|option|textarea|form/i.test(e.target.tagName)))continue;"click"===e.type&&(C.clickEvent=e)}n._completeHide(C)}}static getParentFromElement(e){return l(e)||e.parentNode}static dataApiKeydownHandler(e){if(/input|textarea/i.test(e.target.tagName)?e.key===$t||e.key!==jt&&(e.key!==Ft&&e.key!==Ut||e.target.closest(ic)):!Wt.test(e.key))return;const t=this.classList.contains(ec);if(!t&&e.key===jt)return;if(e.preventDefault(),e.stopPropagation(),v(this))return;const c=this.matches(rc)?this:pe.prev(this,rc)[0],n=vc.getOrCreateInstance(c);if(e.key!==jt)return e.key===Ut||e.key===Ft?(t||n.show(),void n._selectMenuItem(e)):void(t&&e.key!==$t||vc.clearMenus());n.hide()}}G.on(document,Qt,rc,vc.dataApiKeydownHandler),G.on(document,Qt,ic,vc.dataApiKeydownHandler),G.on(document,Xt,vc.clearMenus),G.on(document,Zt,vc.clearMenus),G.on(document,Xt,rc,(function(e){e.preventDefault(),vc.getOrCreateInstance(this).toggle()})),y(vc);const mc=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",pc=".sticky-top";class Lc{constructor(){this._element=document.body}getWidth(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}hide(){const e=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,"paddingRight",(t=>t+e)),this._setElementAttributes(mc,"paddingRight",(t=>t+e)),this._setElementAttributes(pc,"marginRight",(t=>t-e))}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(e,t,c){const n=this.getWidth(),C=e=>{if(e!==this._element&&window.innerWidth>e.clientWidth+n)return;this._saveInitialAttribute(e,t);const C=window.getComputedStyle(e)[t];e.style[t]=`${c(Number.parseFloat(C))}px`};this._applyManipulationCallback(e,C)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,"paddingRight"),this._resetElementAttributes(mc,"paddingRight"),this._resetElementAttributes(pc,"marginRight")}_saveInitialAttribute(e,t){const c=e.style[t];c&&ve.setDataAttribute(e,t,c)}_resetElementAttributes(e,t){const c=e=>{const c=ve.getDataAttribute(e,t);"undefined"===typeof c?e.style.removeProperty(t):(ve.removeDataAttribute(e,t),e.style[t]=c)};this._applyManipulationCallback(e,c)}_applyManipulationCallback(e,t){f(e)?t(e):pe.find(e,this._element).forEach(t)}isOverflowing(){return this.getWidth()>0}}const Hc={className:"modal-backdrop",isVisible:!0,isAnimated:!1,rootElement:"body",clickCallback:null},Vc={className:"string",isVisible:"boolean",isAnimated:"boolean",rootElement:"(element|string)",clickCallback:"(function|null)"},gc="backdrop",bc="fade",yc="show",_c=`mousedown.bs.${gc}`;class Sc{constructor(e){this._config=this._getConfig(e),this._isAppended=!1,this._element=null}show(e){this._config.isVisible?(this._append(),this._config.isAnimated&&L(this._getElement()),this._getElement().classList.add(yc),this._emulateAnimation((()=>{_(e)}))):_(e)}hide(e){this._config.isVisible?(this._getElement().classList.remove(yc),this._emulateAnimation((()=>{this.dispose(),_(e)}))):_(e)}_getElement(){if(!this._element){const e=document.createElement("div");e.className=this._config.className,this._config.isAnimated&&e.classList.add(bc),this._element=e}return this._element}_getConfig(e){return e={...Hc,..."object"===typeof e?e:{}},e.rootElement=z(e.rootElement),d(gc,e,Vc),e}_append(){this._isAppended||(this._config.rootElement.append(this._getElement()),G.on(this._getElement(),_c,(()=>{_(this._config.clickCallback)})),this._isAppended=!0)}dispose(){this._isAppended&&(G.off(this._element,_c),this._element.remove(),this._isAppended=!1)}_emulateAnimation(e){S(e,this._getElement(),this._config.isAnimated)}}const wc={trapElement:null,autofocus:!0},kc={trapElement:"element",autofocus:"boolean"},Ec="focustrap",Ac="bs.focustrap",Oc=`.${Ac}`,xc=`focusin${Oc}`,Ic=`keydown.tab${Oc}`,Tc="Tab",Pc="forward",Rc="backward";class Nc{constructor(e){this._config=this._getConfig(e),this._isActive=!1,this._lastTabNavDirection=null}activate(){const{trapElement:e,autofocus:t}=this._config;this._isActive||(t&&e.focus(),G.off(document,Oc),G.on(document,xc,(e=>this._handleFocusin(e))),G.on(document,Ic,(e=>this._handleKeydown(e))),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,G.off(document,Oc))}_handleFocusin(e){const{target:t}=e,{trapElement:c}=this._config;if(t===document||t===c||c.contains(t))return;const n=pe.focusableChildren(c);0===n.length?c.focus():this._lastTabNavDirection===Rc?n[n.length-1].focus():n[0].focus()}_handleKeydown(e){e.key===Tc&&(this._lastTabNavDirection=e.shiftKey?Rc:Pc)}_getConfig(e){return e={...wc,..."object"===typeof e?e:{}},d(Ec,e,kc),e}}const Dc="modal",jc="bs.modal",$c=`.${jc}`,qc=".data-api",Uc="Escape",Fc={backdrop:!0,keyboard:!0,focus:!0},Bc={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean"},Wc=`hide${$c}`,Gc=`hidePrevented${$c}`,Kc=`hidden${$c}`,Yc=`show${$c}`,Jc=`shown${$c}`,Xc=`resize${$c}`,Qc=`click.dismiss${$c}`,Zc=`keydown.dismiss${$c}`,en=`mouseup.dismiss${$c}`,tn=`mousedown.dismiss${$c}`,cn=`click${$c}${qc}`,nn="modal-open",Cn="fade",rn="show",sn="modal-static",an=".modal.show",on=".modal-dialog",ln=".modal-body",hn='[data-bs-toggle="modal"]';class un extends X{constructor(e,t){super(e),this._config=this._getConfig(t),this._dialog=pe.findOne(on,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollBar=new Lc}static get Default(){return Fc}static get NAME(){return Dc}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){if(this._isShown||this._isTransitioning)return;const t=G.trigger(this._element,Yc,{relatedTarget:e});t.defaultPrevented||(this._isShown=!0,this._isAnimated()&&(this._isTransitioning=!0),this._scrollBar.hide(),document.body.classList.add(nn),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),G.on(this._dialog,tn,(()=>{G.one(this._element,en,(e=>{e.target===this._element&&(this._ignoreBackdropClick=!0)}))})),this._showBackdrop((()=>this._showElement(e))))}hide(){if(!this._isShown||this._isTransitioning)return;const e=G.trigger(this._element,Wc);if(e.defaultPrevented)return;this._isShown=!1;const t=this._isAnimated();t&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),this._focustrap.deactivate(),this._element.classList.remove(rn),G.off(this._element,Qc),G.off(this._dialog,tn),this._queueCallback((()=>this._hideModal()),this._element,t)}dispose(){[window,this._dialog].forEach((e=>G.off(e,$c))),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new Sc({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Nc({trapElement:this._element})}_getConfig(e){return e={...Fc,...ve.getDataAttributes(this._element),..."object"===typeof e?e:{}},d(Dc,e,Bc),e}_showElement(e){const t=this._isAnimated(),c=pe.findOne(ln,this._dialog);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0,c&&(c.scrollTop=0),t&&L(this._element),this._element.classList.add(rn);const n=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,G.trigger(this._element,Jc,{relatedTarget:e})};this._queueCallback(n,this._dialog,t)}_setEscapeEvent(){this._isShown?G.on(this._element,Zc,(e=>{this._config.keyboard&&e.key===Uc?(e.preventDefault(),this.hide()):this._config.keyboard||e.key!==Uc||this._triggerBackdropTransition()})):G.off(this._element,Zc)}_setResizeEvent(){this._isShown?G.on(window,Xc,(()=>this._adjustDialog())):G.off(window,Xc)}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide((()=>{document.body.classList.remove(nn),this._resetAdjustments(),this._scrollBar.reset(),G.trigger(this._element,Kc)}))}_showBackdrop(e){G.on(this._element,Qc,(e=>{this._ignoreBackdropClick?this._ignoreBackdropClick=!1:e.target===e.currentTarget&&(!0===this._config.backdrop?this.hide():"static"===this._config.backdrop&&this._triggerBackdropTransition())})),this._backdrop.show(e)}_isAnimated(){return this._element.classList.contains(Cn)}_triggerBackdropTransition(){const e=G.trigger(this._element,Gc);if(e.defaultPrevented)return;const{classList:t,scrollHeight:c,style:n}=this._element,C=c>document.documentElement.clientHeight;!C&&"hidden"===n.overflowY||t.contains(sn)||(C||(n.overflowY="hidden"),t.add(sn),this._queueCallback((()=>{t.remove(sn),C||this._queueCallback((()=>{n.overflowY=""}),this._dialog)}),this._dialog),this._element.focus())}_adjustDialog(){const e=this._element.scrollHeight>document.documentElement.clientHeight,t=this._scrollBar.getWidth(),c=t>0;(!c&&e&&!b()||c&&!e&&b())&&(this._element.style.paddingLeft=`${t}px`),(c&&!e&&!b()||!c&&e&&b())&&(this._element.style.paddingRight=`${t}px`)}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(e,t){return this.each((function(){const c=un.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof c[e])throw new TypeError(`No method named "${e}"`);c[e](t)}}))}}G.on(document,cn,hn,(function(e){const t=l(this);["A","AREA"].includes(this.tagName)&&e.preventDefault(),G.one(t,Yc,(e=>{e.defaultPrevented||G.one(t,Kc,(()=>{M(this)&&this.focus()}))}));const c=pe.findOne(an);c&&un.getInstance(c).hide();const n=un.getOrCreateInstance(t);n.toggle(this)})),Q(un),y(un);const fn="offcanvas",zn="bs.offcanvas",dn=`.${zn}`,Mn=".data-api",vn=`load${dn}${Mn}`,mn="Escape",pn={backdrop:!0,keyboard:!0,scroll:!1},Ln={backdrop:"boolean",keyboard:"boolean",scroll:"boolean"},Hn="show",Vn="offcanvas-backdrop",gn=".offcanvas.show",bn=`show${dn}`,yn=`shown${dn}`,_n=`hide${dn}`,Sn=`hidden${dn}`,wn=`click${dn}${Mn}`,kn=`keydown.dismiss${dn}`,En='[data-bs-toggle="offcanvas"]';class An extends X{constructor(e,t){super(e),this._config=this._getConfig(t),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get NAME(){return fn}static get Default(){return pn}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){if(this._isShown)return;const t=G.trigger(this._element,bn,{relatedTarget:e});if(t.defaultPrevented)return;this._isShown=!0,this._element.style.visibility="visible",this._backdrop.show(),this._config.scroll||(new Lc).hide(),this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(Hn);const c=()=>{this._config.scroll||this._focustrap.activate(),G.trigger(this._element,yn,{relatedTarget:e})};this._queueCallback(c,this._element,!0)}hide(){if(!this._isShown)return;const e=G.trigger(this._element,_n);if(e.defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.remove(Hn),this._backdrop.hide();const t=()=>{this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._element.style.visibility="hidden",this._config.scroll||(new Lc).reset(),G.trigger(this._element,Sn)};this._queueCallback(t,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_getConfig(e){return e={...pn,...ve.getDataAttributes(this._element),..."object"===typeof e?e:{}},d(fn,e,Ln),e}_initializeBackDrop(){return new Sc({className:Vn,isVisible:this._config.backdrop,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:()=>this.hide()})}_initializeFocusTrap(){return new Nc({trapElement:this._element})}_addEventListeners(){G.on(this._element,kn,(e=>{this._config.keyboard&&e.key===mn&&this.hide()}))}static jQueryInterface(e){return this.each((function(){const t=An.getOrCreateInstance(this,e);if("string"===typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e](this)}}))}}G.on(document,wn,En,(function(e){const t=l(this);if(["A","AREA"].includes(this.tagName)&&e.preventDefault(),v(this))return;G.one(t,Sn,(()=>{M(this)&&this.focus()}));const c=pe.findOne(gn);c&&c!==t&&An.getInstance(c).hide();const n=An.getOrCreateInstance(t);n.toggle(this)})),G.on(window,vn,(()=>pe.find(gn).forEach((e=>An.getOrCreateInstance(e).show())))),Q(An),y(An);const On=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),xn=/^aria-[\w-]*$/i,In=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,Tn=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,Pn=(e,t)=>{const c=e.nodeName.toLowerCase();if(t.includes(c))return!On.has(c)||Boolean(In.test(e.nodeValue)||Tn.test(e.nodeValue));const n=t.filter((e=>e instanceof RegExp));for(let C=0,r=n.length;C<r;C++)if(n[C].test(c))return!0;return!1},Rn={"*":["class","dir","id","lang","role",xn],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]};function Nn(e,t,c){if(!e.length)return e;if(c&&"function"===typeof c)return c(e);const n=new window.DOMParser,C=n.parseFromString(e,"text/html"),r=[].concat(...C.body.querySelectorAll("*"));for(let i=0,s=r.length;i<s;i++){const e=r[i],c=e.nodeName.toLowerCase();if(!Object.keys(t).includes(c)){e.remove();continue}const n=[].concat(...e.attributes),C=[].concat(t["*"]||[],t[c]||[]);n.forEach((t=>{Pn(t,C)||e.removeAttribute(t.nodeName)}))}return C.body.innerHTML}const Dn="tooltip",jn="bs.tooltip",$n=`.${jn}`,qn="bs-tooltip",Un=new Set(["sanitize","allowList","sanitizeFn"]),Fn={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(array|string|function)",container:"(string|element|boolean)",fallbackPlacements:"array",boundary:"(string|element)",customClass:"(string|function)",sanitize:"boolean",sanitizeFn:"(null|function)",allowList:"object",popperConfig:"(null|object|function)"},Bn={AUTO:"auto",TOP:"top",RIGHT:b()?"left":"right",BOTTOM:"bottom",LEFT:b()?"right":"left"},Wn={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:[0,0],container:!1,fallbackPlacements:["top","right","bottom","left"],boundary:"clippingParents",customClass:"",sanitize:!0,sanitizeFn:null,allowList:Rn,popperConfig:null},Gn={HIDE:`hide${$n}`,HIDDEN:`hidden${$n}`,SHOW:`show${$n}`,SHOWN:`shown${$n}`,INSERTED:`inserted${$n}`,CLICK:`click${$n}`,FOCUSIN:`focusin${$n}`,FOCUSOUT:`focusout${$n}`,MOUSEENTER:`mouseenter${$n}`,MOUSELEAVE:`mouseleave${$n}`},Kn="fade",Yn="modal",Jn="show",Xn="show",Qn="out",Zn=".tooltip-inner",eC=`.${Yn}`,tC="hide.bs.modal",cC="hover",nC="focus",CC="click",rC="manual";class iC extends X{constructor(e,t){if("undefined"===typeof c)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(e),this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this._config=this._getConfig(t),this.tip=null,this._setListeners()}static get Default(){return Wn}static get NAME(){return Dn}static get Event(){return Gn}static get DefaultType(){return Fn}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(e){if(this._isEnabled)if(e){const t=this._initializeOnDelegatedTarget(e);t._activeTrigger.click=!t._activeTrigger.click,t._isWithActiveTrigger()?t._enter(null,t):t._leave(null,t)}else{if(this.getTipElement().classList.contains(Jn))return void this._leave(null,this);this._enter(null,this)}}dispose(){clearTimeout(this._timeout),G.off(this._element.closest(eC),tC,this._hideModalHandler),this.tip&&this.tip.remove(),this._disposePopper(),super.dispose()}show(){if("none"===this._element.style.display)throw new Error("Please use show on visible elements");if(!this.isWithContent()||!this._isEnabled)return;const e=G.trigger(this._element,this.constructor.Event.SHOW),t=m(this._element),n=null===t?this._element.ownerDocument.documentElement.contains(this._element):t.contains(this._element);if(e.defaultPrevented||!n)return;"tooltip"===this.constructor.NAME&&this.tip&&this.getTitle()!==this.tip.querySelector(Zn).innerHTML&&(this._disposePopper(),this.tip.remove(),this.tip=null);const C=this.getTipElement(),r=s(this.constructor.NAME);C.setAttribute("id",r),this._element.setAttribute("aria-describedby",r),this._config.animation&&C.classList.add(Kn);const i="function"===typeof this._config.placement?this._config.placement.call(this,C,this._element):this._config.placement,a=this._getAttachment(i);this._addAttachmentClass(a);const{container:o}=this._config;Y.set(C,this.constructor.DATA_KEY,this),this._element.ownerDocument.documentElement.contains(this.tip)||(o.append(C),G.trigger(this._element,this.constructor.Event.INSERTED)),this._popper?this._popper.update():this._popper=c.createPopper(this._element,C,this._getPopperConfig(a)),C.classList.add(Jn);const l=this._resolvePossibleFunction(this._config.customClass);l&&C.classList.add(...l.split(" ")),"ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach((e=>{G.on(e,"mouseover",p)}));const h=()=>{const e=this._hoverState;this._hoverState=null,G.trigger(this._element,this.constructor.Event.SHOWN),e===Qn&&this._leave(null,this)},u=this.tip.classList.contains(Kn);this._queueCallback(h,this.tip,u)}hide(){if(!this._popper)return;const e=this.getTipElement(),t=()=>{this._isWithActiveTrigger()||(this._hoverState!==Xn&&e.remove(),this._cleanTipClass(),this._element.removeAttribute("aria-describedby"),G.trigger(this._element,this.constructor.Event.HIDDEN),this._disposePopper())},c=G.trigger(this._element,this.constructor.Event.HIDE);if(c.defaultPrevented)return;e.classList.remove(Jn),"ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach((e=>G.off(e,"mouseover",p))),this._activeTrigger[CC]=!1,this._activeTrigger[nC]=!1,this._activeTrigger[cC]=!1;const n=this.tip.classList.contains(Kn);this._queueCallback(t,this.tip,n),this._hoverState=""}update(){null!==this._popper&&this._popper.update()}isWithContent(){return Boolean(this.getTitle())}getTipElement(){if(this.tip)return this.tip;const e=document.createElement("div");e.innerHTML=this._config.template;const t=e.children[0];return this.setContent(t),t.classList.remove(Kn,Jn),this.tip=t,this.tip}setContent(e){this._sanitizeAndSetContent(e,this.getTitle(),Zn)}_sanitizeAndSetContent(e,t,c){const n=pe.findOne(c,e);t||!n?this.setElementContent(n,t):n.remove()}setElementContent(e,t){if(null!==e)return f(t)?(t=z(t),void(this._config.html?t.parentNode!==e&&(e.innerHTML="",e.append(t)):e.textContent=t.textContent)):void(this._config.html?(this._config.sanitize&&(t=Nn(t,this._config.allowList,this._config.sanitizeFn)),e.innerHTML=t):e.textContent=t)}getTitle(){const e=this._element.getAttribute("data-bs-original-title")||this._config.title;return this._resolvePossibleFunction(e)}updateAttachment(e){return"right"===e?"end":"left"===e?"start":e}_initializeOnDelegatedTarget(e,t){return t||this.constructor.getOrCreateInstance(e.delegateTarget,this._getDelegateConfig())}_getOffset(){const{offset:e}=this._config;return"string"===typeof e?e.split(",").map((e=>Number.parseInt(e,10))):"function"===typeof e?t=>e(t,this._element):e}_resolvePossibleFunction(e){return"function"===typeof e?e.call(this._element):e}_getPopperConfig(e){const t={placement:e,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"onChange",enabled:!0,phase:"afterWrite",fn:e=>this._handlePopperPlacementChange(e)}],onFirstUpdate:e=>{e.options.placement!==e.placement&&this._handlePopperPlacementChange(e)}};return{...t,..."function"===typeof this._config.popperConfig?this._config.popperConfig(t):this._config.popperConfig}}_addAttachmentClass(e){this.getTipElement().classList.add(`${this._getBasicClassPrefix()}-${this.updateAttachment(e)}`)}_getAttachment(e){return Bn[e.toUpperCase()]}_setListeners(){const e=this._config.trigger.split(" ");e.forEach((e=>{if("click"===e)G.on(this._element,this.constructor.Event.CLICK,this._config.selector,(e=>this.toggle(e)));else if(e!==rC){const t=e===cC?this.constructor.Event.MOUSEENTER:this.constructor.Event.FOCUSIN,c=e===cC?this.constructor.Event.MOUSELEAVE:this.constructor.Event.FOCUSOUT;G.on(this._element,t,this._config.selector,(e=>this._enter(e))),G.on(this._element,c,this._config.selector,(e=>this._leave(e)))}})),this._hideModalHandler=()=>{this._element&&this.hide()},G.on(this._element.closest(eC),tC,this._hideModalHandler),this._config.selector?this._config={...this._config,trigger:"manual",selector:""}:this._fixTitle()}_fixTitle(){const e=this._element.getAttribute("title"),t=typeof this._element.getAttribute("data-bs-original-title");(e||"string"!==t)&&(this._element.setAttribute("data-bs-original-title",e||""),!e||this._element.getAttribute("aria-label")||this._element.textContent||this._element.setAttribute("aria-label",e),this._element.setAttribute("title",""))}_enter(e,t){t=this._initializeOnDelegatedTarget(e,t),e&&(t._activeTrigger["focusin"===e.type?nC:cC]=!0),t.getTipElement().classList.contains(Jn)||t._hoverState===Xn?t._hoverState=Xn:(clearTimeout(t._timeout),t._hoverState=Xn,t._config.delay&&t._config.delay.show?t._timeout=setTimeout((()=>{t._hoverState===Xn&&t.show()}),t._config.delay.show):t.show())}_leave(e,t){t=this._initializeOnDelegatedTarget(e,t),e&&(t._activeTrigger["focusout"===e.type?nC:cC]=t._element.contains(e.relatedTarget)),t._isWithActiveTrigger()||(clearTimeout(t._timeout),t._hoverState=Qn,t._config.delay&&t._config.delay.hide?t._timeout=setTimeout((()=>{t._hoverState===Qn&&t.hide()}),t._config.delay.hide):t.hide())}_isWithActiveTrigger(){for(const e in this._activeTrigger)if(this._activeTrigger[e])return!0;return!1}_getConfig(e){const t=ve.getDataAttributes(this._element);return Object.keys(t).forEach((e=>{Un.has(e)&&delete t[e]})),e={...this.constructor.Default,...t,..."object"===typeof e&&e?e:{}},e.container=!1===e.container?document.body:z(e.container),"number"===typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),"number"===typeof e.title&&(e.title=e.title.toString()),"number"===typeof e.content&&(e.content=e.content.toString()),d(Dn,e,this.constructor.DefaultType),e.sanitize&&(e.template=Nn(e.template,e.allowList,e.sanitizeFn)),e}_getDelegateConfig(){const e={};for(const t in this._config)this.constructor.Default[t]!==this._config[t]&&(e[t]=this._config[t]);return e}_cleanTipClass(){const e=this.getTipElement(),t=new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`,"g"),c=e.getAttribute("class").match(t);null!==c&&c.length>0&&c.map((e=>e.trim())).forEach((t=>e.classList.remove(t)))}_getBasicClassPrefix(){return qn}_handlePopperPlacementChange(e){const{state:t}=e;t&&(this.tip=t.elements.popper,this._cleanTipClass(),this._addAttachmentClass(this._getAttachment(t.placement)))}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null)}static jQueryInterface(e){return this.each((function(){const t=iC.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}}y(iC);const sC="popover",aC="bs.popover",oC=`.${aC}`,lC="bs-popover",hC={...iC.Default,placement:"right",offset:[0,8],trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'},uC={...iC.DefaultType,content:"(string|element|function)"},fC={HIDE:`hide${oC}`,HIDDEN:`hidden${oC}`,SHOW:`show${oC}`,SHOWN:`shown${oC}`,INSERTED:`inserted${oC}`,CLICK:`click${oC}`,FOCUSIN:`focusin${oC}`,FOCUSOUT:`focusout${oC}`,MOUSEENTER:`mouseenter${oC}`,MOUSELEAVE:`mouseleave${oC}`},zC=".popover-header",dC=".popover-body";class MC extends iC{static get Default(){return hC}static get NAME(){return sC}static get Event(){return fC}static get DefaultType(){return uC}isWithContent(){return this.getTitle()||this._getContent()}setContent(e){this._sanitizeAndSetContent(e,this.getTitle(),zC),this._sanitizeAndSetContent(e,this._getContent(),dC)}_getContent(){return this._resolvePossibleFunction(this._config.content)}_getBasicClassPrefix(){return lC}static jQueryInterface(e){return this.each((function(){const t=MC.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}}y(MC);const vC="scrollspy",mC="bs.scrollspy",pC=`.${mC}`,LC=".data-api",HC={offset:10,method:"auto",target:""},VC={offset:"number",method:"string",target:"(string|element)"},gC=`activate${pC}`,bC=`scroll${pC}`,yC=`load${pC}${LC}`,_C="dropdown-item",SC="active",wC='[data-bs-spy="scroll"]',kC=".nav, .list-group",EC=".nav-link",AC=".nav-item",OC=".list-group-item",xC=`${EC}, ${OC}, .${_C}`,IC=".dropdown",TC=".dropdown-toggle",PC="offset",RC="position";class NC extends X{constructor(e,t){super(e),this._scrollElement="BODY"===this._element.tagName?window:this._element,this._config=this._getConfig(t),this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,G.on(this._scrollElement,bC,(()=>this._process())),this.refresh(),this._process()}static get Default(){return HC}static get NAME(){return vC}refresh(){const e=this._scrollElement===this._scrollElement.window?PC:RC,t="auto"===this._config.method?e:this._config.method,c=t===RC?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight();const n=pe.find(xC,this._config.target);n.map((e=>{const n=o(e),C=n?pe.findOne(n):null;if(C){const e=C.getBoundingClientRect();if(e.width||e.height)return[ve[t](C).top+c,n]}return null})).filter((e=>e)).sort(((e,t)=>e[0]-t[0])).forEach((e=>{this._offsets.push(e[0]),this._targets.push(e[1])}))}dispose(){G.off(this._scrollElement,pC),super.dispose()}_getConfig(e){return e={...HC,...ve.getDataAttributes(this._element),..."object"===typeof e&&e?e:{}},e.target=z(e.target)||document.documentElement,d(vC,e,VC),e}_getScrollTop(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop}_getScrollHeight(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)}_getOffsetHeight(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height}_process(){const e=this._getScrollTop()+this._config.offset,t=this._getScrollHeight(),c=this._config.offset+t-this._getOffsetHeight();if(this._scrollHeight!==t&&this.refresh(),e>=c){const e=this._targets[this._targets.length-1];this._activeTarget!==e&&this._activate(e)}else{if(this._activeTarget&&e<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear();for(let t=this._offsets.length;t--;){const c=this._activeTarget!==this._targets[t]&&e>=this._offsets[t]&&("undefined"===typeof this._offsets[t+1]||e<this._offsets[t+1]);c&&this._activate(this._targets[t])}}}_activate(e){this._activeTarget=e,this._clear();const t=xC.split(",").map((t=>`${t}[data-bs-target="${e}"],${t}[href="${e}"]`)),c=pe.findOne(t.join(","),this._config.target);c.classList.add(SC),c.classList.contains(_C)?pe.findOne(TC,c.closest(IC)).classList.add(SC):pe.parents(c,kC).forEach((e=>{pe.prev(e,`${EC}, ${OC}`).forEach((e=>e.classList.add(SC))),pe.prev(e,AC).forEach((e=>{pe.children(e,EC).forEach((e=>e.classList.add(SC)))}))})),G.trigger(this._scrollElement,gC,{relatedTarget:e})}_clear(){pe.find(xC,this._config.target).filter((e=>e.classList.contains(SC))).forEach((e=>e.classList.remove(SC)))}static jQueryInterface(e){return this.each((function(){const t=NC.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}}G.on(window,yC,(()=>{pe.find(wC).forEach((e=>new NC(e)))})),y(NC);const DC="tab",jC="bs.tab",$C=`.${jC}`,qC=".data-api",UC=`hide${$C}`,FC=`hidden${$C}`,BC=`show${$C}`,WC=`shown${$C}`,GC=`click${$C}${qC}`,KC="dropdown-menu",YC="active",JC="fade",XC="show",QC=".dropdown",ZC=".nav, .list-group",er=".active",tr=":scope > li > .active",cr='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',nr=".dropdown-toggle",Cr=":scope > .dropdown-menu .active";class rr extends X{static get NAME(){return DC}show(){if(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&this._element.classList.contains(YC))return;let e;const t=l(this._element),c=this._element.closest(ZC);if(c){const t="UL"===c.nodeName||"OL"===c.nodeName?tr:er;e=pe.find(t,c),e=e[e.length-1]}const n=e?G.trigger(e,UC,{relatedTarget:this._element}):null,C=G.trigger(this._element,BC,{relatedTarget:e});if(C.defaultPrevented||null!==n&&n.defaultPrevented)return;this._activate(this._element,c);const r=()=>{G.trigger(e,FC,{relatedTarget:this._element}),G.trigger(this._element,WC,{relatedTarget:e})};t?this._activate(t,t.parentNode,r):r()}_activate(e,t,c){const n=!t||"UL"!==t.nodeName&&"OL"!==t.nodeName?pe.children(t,er):pe.find(tr,t),C=n[0],r=c&&C&&C.classList.contains(JC),i=()=>this._transitionComplete(e,C,c);C&&r?(C.classList.remove(XC),this._queueCallback(i,e,!0)):i()}_transitionComplete(e,t,c){if(t){t.classList.remove(YC);const e=pe.findOne(Cr,t.parentNode);e&&e.classList.remove(YC),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!1)}e.classList.add(YC),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!0),L(e),e.classList.contains(JC)&&e.classList.add(XC);let n=e.parentNode;if(n&&"LI"===n.nodeName&&(n=n.parentNode),n&&n.classList.contains(KC)){const t=e.closest(QC);t&&pe.find(nr,t).forEach((e=>e.classList.add(YC))),e.setAttribute("aria-expanded",!0)}c&&c()}static jQueryInterface(e){return this.each((function(){const t=rr.getOrCreateInstance(this);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}}G.on(document,GC,cr,(function(e){if(["A","AREA"].includes(this.tagName)&&e.preventDefault(),v(this))return;const t=rr.getOrCreateInstance(this);t.show()})),y(rr);const ir="toast",sr="bs.toast",ar=`.${sr}`,or=`mouseover${ar}`,lr=`mouseout${ar}`,hr=`focusin${ar}`,ur=`focusout${ar}`,fr=`hide${ar}`,zr=`hidden${ar}`,dr=`show${ar}`,Mr=`shown${ar}`,vr="fade",mr="hide",pr="show",Lr="showing",Hr={animation:"boolean",autohide:"boolean",delay:"number"},Vr={animation:!0,autohide:!0,delay:5e3};class gr extends X{constructor(e,t){super(e),this._config=this._getConfig(t),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get DefaultType(){return Hr}static get Default(){return Vr}static get NAME(){return ir}show(){const e=G.trigger(this._element,dr);if(e.defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(vr);const t=()=>{this._element.classList.remove(Lr),G.trigger(this._element,Mr),this._maybeScheduleHide()};this._element.classList.remove(mr),L(this._element),this._element.classList.add(pr),this._element.classList.add(Lr),this._queueCallback(t,this._element,this._config.animation)}hide(){if(!this._element.classList.contains(pr))return;const e=G.trigger(this._element,fr);if(e.defaultPrevented)return;const t=()=>{this._element.classList.add(mr),this._element.classList.remove(Lr),this._element.classList.remove(pr),G.trigger(this._element,zr)};this._element.classList.add(Lr),this._queueCallback(t,this._element,this._config.animation)}dispose(){this._clearTimeout(),this._element.classList.contains(pr)&&this._element.classList.remove(pr),super.dispose()}_getConfig(e){return e={...Vr,...ve.getDataAttributes(this._element),..."object"===typeof e&&e?e:{}},d(ir,e,this.constructor.DefaultType),e}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout((()=>{this.hide()}),this._config.delay)))}_onInteraction(e,t){switch(e.type){case"mouseover":case"mouseout":this._hasMouseInteraction=t;break;case"focusin":case"focusout":this._hasKeyboardInteraction=t;break}if(t)return void this._clearTimeout();const c=e.relatedTarget;this._element===c||this._element.contains(c)||this._maybeScheduleHide()}_setListeners(){G.on(this._element,or,(e=>this._onInteraction(e,!0))),G.on(this._element,lr,(e=>this._onInteraction(e,!1))),G.on(this._element,hr,(e=>this._onInteraction(e,!0))),G.on(this._element,ur,(e=>this._onInteraction(e,!1)))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(e){return this.each((function(){const t=gr.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e](this)}}))}}Q(gr),y(gr);const br={Alert:ie,Button:ze,Carousel:ft,Collapse:Tt,Dropdown:vc,Modal:un,Offcanvas:An,Popover:MC,ScrollSpy:NC,Tab:rr,Toast:gr,Tooltip:iC};return br}))},4275:function(e,t,c){"use strict";c.d(t,{ZF:function(){return n.ZF}});var n=c(9684),C="firebase",r="9.6.9";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,n.KN)(C,r,"app")},2330:function(e,t,c){"use strict";c.d(t,{Xb:function(){return st},v0:function(){return sn},e5:function(){return at},w7:function(){return ot}});c(1703);var n=c(223),C=c(9684);function r(e,t){var c={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(c[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var C=0;for(n=Object.getOwnPropertySymbols(e);C<n.length;C++)t.indexOf(n[C])<0&&Object.prototype.propertyIsEnumerable.call(e,n[C])&&(c[n[C]]=e[n[C]])}return c}Object.create;Object.create;var i=c(5168),s=c(7142);function a(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const o=a,l=new n.LL("auth","Firebase",a()),h=new i.Yd("@firebase/auth");function u(e,...t){h.logLevel<=i["in"].ERROR&&h.error(`Auth (${C.Jn}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(e,...t){throw M(e,...t)}function z(e,...t){return M(e,...t)}function d(e,t,c){const C=Object.assign(Object.assign({},o()),{[t]:c}),r=new n.LL("auth","Firebase",C);return r.create(t,{appName:e.name})}function M(e,...t){if("string"!==typeof e){const c=t[0],n=[...t.slice(1)];return n[0]&&(n[0].appName=e.name),e._errorFactory.create(c,...n)}return l.create(e,...t)}function v(e,t,...c){if(!e)throw M(t,...c)}function m(e){const t="INTERNAL ASSERTION FAILED: "+e;throw u(t),new Error(t)}function p(e,t){e||m(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L=new Map;function H(e){p(e instanceof Function,"Expected a class definition");let t=L.get(e);return t?(p(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,L.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(e,t){const c=(0,C.qX)(e,"auth");if(c.isInitialized()){const e=c.getImmediate(),C=c.getOptions();if((0,n.vZ)(C,null!==t&&void 0!==t?t:{}))return e;f(e,"already-initialized")}const r=c.initialize({options:t});return r}function g(e,t){const c=(null===t||void 0===t?void 0:t.persistence)||[],n=(Array.isArray(c)?c:[c]).map(H);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(n,null===t||void 0===t?void 0:t.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function y(){return"http:"===_()||"https:"===_()}function _(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(y()||(0,n.ru)()||"connection"in navigator))||navigator.onLine}function w(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(e,t){this.shortDelay=e,this.longDelay=t,p(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,n.uI)()||(0,n.b$)()}get(){return S()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(e,t){p(e.emulator,"Emulator should always be set here");const{url:c}=e.emulator;return t?`${c}${t.startsWith("/")?t.slice(1):t}`:c}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{static initialize(e,t,c){this.fetchImpl=e,t&&(this.headersImpl=t),c&&(this.responseImpl=c)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void m("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void m("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void m("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},x=new k(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function T(e,t,c,C,r={}){return P(e,r,(async()=>{let r={},i={};C&&("GET"===t?i=C:r={body:JSON.stringify(C)});const s=(0,n.xO)(Object.assign({key:e.config.apiKey},i)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),A.fetch()(N(e,e.config.apiHost,c,s),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},r))}))}async function P(e,t,c){e._canInitEmulator=!1;const C=Object.assign(Object.assign({},O),t);try{const t=new D(e),n=await Promise.race([c(),t.promise]);t.clearNetworkTimeout();const r=await n.json();if("needConfirmation"in r)throw j(e,"account-exists-with-different-credential",r);if(n.ok&&!("errorMessage"in r))return r;{const t=n.ok?r.errorMessage:r.error.message,[c,i]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===c)throw j(e,"credential-already-in-use",r);if("EMAIL_EXISTS"===c)throw j(e,"email-already-in-use",r);const s=C[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(i)throw d(e,s,i);f(e,s)}}catch(r){if(r instanceof n.ZR)throw r;f(e,"network-request-failed")}}async function R(e,t,c,n,C={}){const r=await T(e,t,c,n,C);return"mfaPendingCredential"in r&&f(e,"multi-factor-auth-required",{_serverResponse:r}),r}function N(e,t,c,n){const C=`${t}${c}?${n}`;return e.config.emulator?E(e.config,C):`${e.config.apiScheme}://${C}`}class D{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(z(this.auth,"network-request-failed"))),x.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function j(e,t,c){const n={appName:e.name};c.email&&(n.email=c.email),c.phoneNumber&&(n.phoneNumber=c.phoneNumber);const C=z(e,t,n);return C.customData._tokenResponse=c,C}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $(e,t){return T(e,"POST","/v1/accounts:delete",t)}async function q(e,t){return T(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function F(e,t=!1){const c=(0,n.m9)(e),C=await c.getIdToken(t),r=W(C);v(r&&r.exp&&r.auth_time&&r.iat,c.auth,"internal-error");const i="object"===typeof r.firebase?r.firebase:void 0,s=null===i||void 0===i?void 0:i["sign_in_provider"];return{claims:r,token:C,authTime:U(B(r.auth_time)),issuedAtTime:U(B(r.iat)),expirationTime:U(B(r.exp)),signInProvider:s||null,signInSecondFactor:(null===i||void 0===i?void 0:i["sign_in_second_factor"])||null}}function B(e){return 1e3*Number(e)}function W(e){const[t,c,C]=e.split(".");if(void 0===t||void 0===c||void 0===C)return u("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,n.tV)(c);return e?JSON.parse(e):(u("Failed to decode base64 JWT payload"),null)}catch(r){return u("Caught error parsing JWT payload as JSON",r),null}}function G(e){const t=W(e);return v(t,"internal-error"),v("undefined"!==typeof t.exp,"internal-error"),v("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K(e,t,c=!1){if(c)return t;try{return await t}catch(C){throw C instanceof n.ZR&&Y(C)&&e.auth.currentUser===e&&await e.auth.signOut(),C}}function Y({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,c=e-Date.now()-3e5;return Math.max(0,c)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=U(this.lastLoginAt),this.creationTime=U(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q(e){var t;const c=e.auth,n=await e.getIdToken(),C=await K(e,q(c,{idToken:n}));v(null===C||void 0===C?void 0:C.users.length,c,"internal-error");const r=C.users[0];e._notifyReloadListener(r);const i=(null===(t=r.providerUserInfo)||void 0===t?void 0:t.length)?te(r.providerUserInfo):[],s=ee(e.providerData,i),a=e.isAnonymous,o=!(e.email&&r.passwordHash)&&!(null===s||void 0===s?void 0:s.length),l=!!a&&o,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:s,metadata:new X(r.createdAt,r.lastLoginAt),isAnonymous:l};Object.assign(e,h)}async function Z(e){const t=(0,n.m9)(e);await Q(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function ee(e,t){const c=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...c,...t]}function te(e){return e.map((e=>{var{providerId:t}=e,c=r(e,["providerId"]);return{providerId:t,uid:c.rawId||"",displayName:c.displayName||null,email:c.email||null,phoneNumber:c.phoneNumber||null,photoURL:c.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ce(e,t){const c=await P(e,{},(async()=>{const c=(0,n.xO)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:C,apiKey:r}=e.config,i=N(e,C,"/v1/token",`key=${r}`),s=await e._getAdditionalHeaders();return s["Content-Type"]="application/x-www-form-urlencoded",A.fetch()(i,{method:"POST",headers:s,body:c})}));return{accessToken:c.access_token,expiresIn:c.expires_in,refreshToken:c.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){v(e.idToken,"internal-error"),v("undefined"!==typeof e.idToken,"internal-error"),v("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):G(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return v(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:c,refreshToken:n,expiresIn:C}=await ce(e,t);this.updateTokensAndExpiration(c,n,Number(C))}updateTokensAndExpiration(e,t,c){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*c}static fromJSON(e,t){const{refreshToken:c,accessToken:n,expirationTime:C}=t,r=new ne;return c&&(v("string"===typeof c,"internal-error",{appName:e}),r.refreshToken=c),n&&(v("string"===typeof n,"internal-error",{appName:e}),r.accessToken=n),C&&(v("number"===typeof C,"internal-error",{appName:e}),r.expirationTime=C),r}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ne,this.toJSON())}_performRefresh(){return m("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(e,t){v("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class re{constructor(e){var{uid:t,auth:c,stsTokenManager:n}=e,C=r(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new J(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=c,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=C.displayName||null,this.email=C.email||null,this.emailVerified=C.emailVerified||!1,this.phoneNumber=C.phoneNumber||null,this.photoURL=C.photoURL||null,this.isAnonymous=C.isAnonymous||!1,this.tenantId=C.tenantId||null,this.providerData=C.providerData?[...C.providerData]:[],this.metadata=new X(C.createdAt||void 0,C.lastLoginAt||void 0)}async getIdToken(e){const t=await K(this,this.stsTokenManager.getToken(this.auth,e));return v(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return F(this,e)}reload(){return Z(this)}_assign(e){this!==e&&(v(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new re(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){v(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let c=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),c=!0),t&&await Q(this),await this.auth._persistUserIfCurrent(this),c&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await K(this,$(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var c,n,C,r,i,s,a,o;const l=null!==(c=t.displayName)&&void 0!==c?c:void 0,h=null!==(n=t.email)&&void 0!==n?n:void 0,u=null!==(C=t.phoneNumber)&&void 0!==C?C:void 0,f=null!==(r=t.photoURL)&&void 0!==r?r:void 0,z=null!==(i=t.tenantId)&&void 0!==i?i:void 0,d=null!==(s=t._redirectEventId)&&void 0!==s?s:void 0,M=null!==(a=t.createdAt)&&void 0!==a?a:void 0,m=null!==(o=t.lastLoginAt)&&void 0!==o?o:void 0,{uid:p,emailVerified:L,isAnonymous:H,providerData:V,stsTokenManager:g}=t;v(p&&g,e,"internal-error");const b=ne.fromJSON(this.name,g);v("string"===typeof p,e,"internal-error"),Ce(l,e.name),Ce(h,e.name),v("boolean"===typeof L,e,"internal-error"),v("boolean"===typeof H,e,"internal-error"),Ce(u,e.name),Ce(f,e.name),Ce(z,e.name),Ce(d,e.name),Ce(M,e.name),Ce(m,e.name);const y=new re({uid:p,auth:e,email:h,emailVerified:L,displayName:l,isAnonymous:H,photoURL:f,phoneNumber:u,tenantId:z,stsTokenManager:b,createdAt:M,lastLoginAt:m});return V&&Array.isArray(V)&&(y.providerData=V.map((e=>Object.assign({},e)))),d&&(y._redirectEventId=d),y}static async _fromIdTokenResponse(e,t,c=!1){const n=new ne;n.updateFromServerResponse(t);const C=new re({uid:t.localId,auth:e,stsTokenManager:n,isAnonymous:c});return await Q(C),C}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ie.type="NONE";const se=ie;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(e,t,c){return`firebase:${e}:${t}:${c}`}class oe{constructor(e,t,c){this.persistence=e,this.auth=t,this.userKey=c;const{config:n,name:C}=this.auth;this.fullUserKey=ae(this.userKey,n.apiKey,C),this.fullPersistenceKey=ae("persistence",n.apiKey,C),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?re._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,c="authUser"){if(!t.length)return new oe(H(se),e,c);const n=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let C=n[0]||H(se);const r=ae(c,e.config.apiKey,e.name);let i=null;for(const o of t)try{const t=await o._get(r);if(t){const c=re._fromJSON(e,t);o!==C&&(i=c),C=o;break}}catch(a){}const s=n.filter((e=>e._shouldAllowMigration));return C._shouldAllowMigration&&s.length?(C=s[0],i&&await C._set(r,i.toJSON()),await Promise.all(t.map((async e=>{if(e!==C)try{await e._remove(r)}catch(a){}}))),new oe(C,e,c)):new oe(C,e,c)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(ze(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(he(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Me(t))return"Blackberry";if(ve(t))return"Webos";if(ue(t))return"Safari";if((t.includes("chrome/")||fe(t))&&!t.includes("edge/"))return"Chrome";if(de(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,c=e.match(t);if(2===(null===c||void 0===c?void 0:c.length))return c[1]}return"Other"}function he(e=(0,n.z$)()){return/firefox\//i.test(e)}function ue(e=(0,n.z$)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function fe(e=(0,n.z$)()){return/crios\//i.test(e)}function ze(e=(0,n.z$)()){return/iemobile/i.test(e)}function de(e=(0,n.z$)()){return/android/i.test(e)}function Me(e=(0,n.z$)()){return/blackberry/i.test(e)}function ve(e=(0,n.z$)()){return/webos/i.test(e)}function me(e=(0,n.z$)()){return/iphone|ipad|ipod/i.test(e)}function pe(e=(0,n.z$)()){var t;return me(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function Le(){return(0,n.w1)()&&10===document.documentMode}function He(e=(0,n.z$)()){return me(e)||de(e)||ve(e)||Me(e)||/windows phone/i.test(e)||ze(e)}function Ve(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(e,t=[]){let c;switch(e){case"Browser":c=le((0,n.z$)());break;case"Worker":c=`${le((0,n.z$)())}-${e}`;break;default:c=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${c}/JsCore/${C.Jn}/${r}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e,t,c){this.app=e,this.heartbeatServiceProvider=t,this.config=c,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new _e(this),this.idTokenSubscription=new _e(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=l,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=c.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=H(t)),this._initializationPromise=this.queue((async()=>{var c,n;if(!this._deleted&&(this.persistenceManager=await oe.create(this,e),!this._deleted)){if(null===(c=this._popupRedirectResolver)||void 0===c?void 0:c._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(C){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(n=this.currentUser)||void 0===n?void 0:n.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e):void 0}async initializeCurrentUser(e){var t;let c=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,C=null===c||void 0===c?void 0:c._redirectEventId,r=await this.tryRedirectSignIn(e);n&&n!==C||!(null===r||void 0===r?void 0:r.user)||(c=r.user)}return c?c._redirectEventId?(v(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===c._redirectEventId?this.directlySetCurrentUser(c):this.reloadAndSetCurrentUserOrClear(c)):this.reloadAndSetCurrentUserOrClear(c):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(c){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Q(e)}catch(t){if("auth/network-request-failed"!==t.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=w()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?(0,n.m9)(e):null;return t&&v(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&v(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(H(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new n.LL("auth","Firebase",e())}onAuthStateChanged(e,t,c){return this.registerStateListener(this.authStateSubscription,e,t,c)}onIdTokenChanged(e,t,c){return this.registerStateListener(this.idTokenSubscription,e,t,c)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const c=await this.getOrInitRedirectPersistenceManager(t);return null===e?c.removeCurrentUser():c.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&H(e)||this._popupRedirectResolver;v(t,this,"argument-error"),this.redirectPersistenceManager=await oe.create(this,[H(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,c;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(c=this.redirectUser)||void 0===c?void 0:c._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const c=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==c&&(this.lastNotifiedUid=c,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,c,n){if(this._deleted)return()=>{};const C="function"===typeof t?t:t.next.bind(t),r=this._isInitialized?Promise.resolve():this._initializationPromise;return v(r,this,"internal-error"),r.then((()=>C(this.currentUser))),"function"===typeof t?e.addObserver(t,c,n):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return v(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ge(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const c=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return c&&(t["X-Firebase-Client"]=c),t}}function ye(e){return(0,n.m9)(e)}class _e{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,n.ne)((e=>this.observer=e))}get next(){return v(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Se{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return m("not implemented")}_getIdTokenResponse(e){return m("not implemented")}_linkToIdToken(e,t){return m("not implemented")}_getReauthenticationResolver(e){return m("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function we(e,t){return T(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ke(e,t){return R(e,"POST","/v1/accounts:signInWithPassword",I(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ee(e,t){return R(e,"POST","/v1/accounts:signInWithEmailLink",I(e,t))}async function Ae(e,t){return R(e,"POST","/v1/accounts:signInWithEmailLink",I(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe extends Se{constructor(e,t,c,n=null){super("password",c),this._email=e,this._password=t,this._tenantId=n}static _fromEmailAndPassword(e,t){return new Oe(e,t,"password")}static _fromEmailAndCode(e,t,c=null){return new Oe(e,t,"emailLink",c)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return ke(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ee(e,{email:this._email,oobCode:this._password});default:f(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return we(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ae(e,{idToken:t,email:this._email,oobCode:this._password});default:f(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xe(e,t){return R(e,"POST","/v1/accounts:signInWithIdp",I(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ie="http://localhost";class Te extends Se{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Te(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):f("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:c,signInMethod:n}=t,C=r(t,["providerId","signInMethod"]);if(!c||!n)return null;const i=new Te(c,n);return i.idToken=C.idToken||void 0,i.accessToken=C.accessToken||void 0,i.secret=C.secret,i.nonce=C.nonce,i.pendingToken=C.pendingToken||null,i}_getIdTokenResponse(e){const t=this.buildRequest();return xe(e,t)}_linkToIdToken(e,t){const c=this.buildRequest();return c.idToken=t,xe(e,c)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,xe(e,t)}buildRequest(){const e={requestUri:Ie,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=(0,n.xO)(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pe(e,t){return T(e,"POST","/v1/accounts:sendVerificationCode",I(e,t))}async function Re(e,t){return R(e,"POST","/v1/accounts:signInWithPhoneNumber",I(e,t))}async function Ne(e,t){const c=await R(e,"POST","/v1/accounts:signInWithPhoneNumber",I(e,t));if(c.temporaryProof)throw j(e,"account-exists-with-different-credential",c);return c}const De={["USER_NOT_FOUND"]:"user-not-found"};async function je(e,t){const c=Object.assign(Object.assign({},t),{operation:"REAUTH"});return R(e,"POST","/v1/accounts:signInWithPhoneNumber",I(e,c),De)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e extends Se{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new $e({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new $e({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return Re(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return Ne(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return je(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:c,verificationCode:n}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:c,code:n}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:c,phoneNumber:n,temporaryProof:C}=e;return c||t||n||C?new $e({verificationId:t,verificationCode:c,phoneNumber:n,temporaryProof:C}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ue(e){const t=(0,n.zd)((0,n.pd)(e))["link"],c=t?(0,n.zd)((0,n.pd)(t))["deep_link_id"]:null,C=(0,n.zd)((0,n.pd)(e))["deep_link_id"],r=C?(0,n.zd)((0,n.pd)(C))["link"]:null;return r||C||c||t||e}class Fe{constructor(e){var t,c,C,r,i,s;const a=(0,n.zd)((0,n.pd)(e)),o=null!==(t=a["apiKey"])&&void 0!==t?t:null,l=null!==(c=a["oobCode"])&&void 0!==c?c:null,h=qe(null!==(C=a["mode"])&&void 0!==C?C:null);v(o&&l&&h,"argument-error"),this.apiKey=o,this.operation=h,this.code=l,this.continueUrl=null!==(r=a["continueUrl"])&&void 0!==r?r:null,this.languageCode=null!==(i=a["languageCode"])&&void 0!==i?i:null,this.tenantId=null!==(s=a["tenantId"])&&void 0!==s?s:null}static parseLink(e){const t=Ue(e);try{return new Fe(t)}catch(c){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Be{constructor(){this.providerId=Be.PROVIDER_ID}static credential(e,t){return Oe._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const c=Fe.parseLink(t);return v(c,"argument-error"),Oe._fromEmailAndCode(e,c.code,c.tenantId)}}Be.PROVIDER_ID="password",Be.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Be.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class We{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge extends We{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ke extends Ge{constructor(){super("facebook.com")}static credential(e){return Te._fromParams({providerId:Ke.PROVIDER_ID,signInMethod:Ke.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ke.credentialFromTaggedObject(e)}static credentialFromError(e){return Ke.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Ke.credential(e.oauthAccessToken)}catch(t){return null}}}Ke.FACEBOOK_SIGN_IN_METHOD="facebook.com",Ke.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ye extends Ge{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Te._fromParams({providerId:Ye.PROVIDER_ID,signInMethod:Ye.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ye.credentialFromTaggedObject(e)}static credentialFromError(e){return Ye.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:c}=e;if(!t&&!c)return null;try{return Ye.credential(t,c)}catch(n){return null}}}Ye.GOOGLE_SIGN_IN_METHOD="google.com",Ye.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Je extends Ge{constructor(){super("github.com")}static credential(e){return Te._fromParams({providerId:Je.PROVIDER_ID,signInMethod:Je.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Je.credentialFromTaggedObject(e)}static credentialFromError(e){return Je.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Je.credential(e.oauthAccessToken)}catch(t){return null}}}Je.GITHUB_SIGN_IN_METHOD="github.com",Je.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xe extends Ge{constructor(){super("twitter.com")}static credential(e,t){return Te._fromParams({providerId:Xe.PROVIDER_ID,signInMethod:Xe.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Xe.credentialFromTaggedObject(e)}static credentialFromError(e){return Xe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:c}=e;if(!t||!c)return null;try{return Xe.credential(t,c)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Qe(e,t){return R(e,"POST","/v1/accounts:signUp",I(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xe.TWITTER_SIGN_IN_METHOD="twitter.com",Xe.PROVIDER_ID="twitter.com";class Ze{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,c,n=!1){const C=await re._fromIdTokenResponse(e,c,n),r=et(c),i=new Ze({user:C,providerId:r,_tokenResponse:c,operationType:t});return i}static async _forOperation(e,t,c){await e._updateTokensIfNecessary(c,!0);const n=et(c);return new Ze({user:e,providerId:n,_tokenResponse:c,operationType:t})}}function et(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tt extends n.ZR{constructor(e,t,c,n){var C;super(t.code,t.message),this.operationType=c,this.user=n,Object.setPrototypeOf(this,tt.prototype),this.customData={appName:e.name,tenantId:null!==(C=e.tenantId)&&void 0!==C?C:void 0,_serverResponse:t.customData._serverResponse,operationType:c}}static _fromErrorAndOperation(e,t,c,n){return new tt(e,t,c,n)}}function ct(e,t,c,n){const C="reauthenticate"===t?c._getReauthenticationResolver(e):c._getIdTokenResponse(e);return C.catch((c=>{if("auth/multi-factor-auth-required"===c.code)throw tt._fromErrorAndOperation(e,c,t,n);throw c}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nt(e,t,c=!1){const n=await K(e,t._linkToIdToken(e.auth,await e.getIdToken()),c);return Ze._forOperation(e,"link",n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ct(e,t,c=!1){const{auth:n}=e,C="reauthenticate";try{const r=await K(e,ct(n,C,t,e),c);v(r.idToken,n,"internal-error");const i=W(r.idToken);v(i,n,"internal-error");const{sub:s}=i;return v(e.uid===s,n,"user-mismatch"),Ze._forOperation(e,C,r)}catch(r){throw"auth/user-not-found"===(null===r||void 0===r?void 0:r.code)&&f(n,"user-mismatch"),r}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rt(e,t,c=!1){const n="signIn",C=await ct(e,n,t),r=await Ze._fromIdTokenResponse(e,n,C);return c||await e._updateCurrentUser(r.user),r}async function it(e,t){return rt(ye(e),t)}async function st(e,t,c){const n=ye(e),C=await Qe(n,{returnSecureToken:!0,email:t,password:c}),r=await Ze._fromIdTokenResponse(n,"signIn",C);return await n._updateCurrentUser(r.user),r}function at(e,t,c){return it((0,n.m9)(e),Be.credential(t,c))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(e){return(0,n.m9)(e).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function lt(e,t){return T(e,"POST","/v2/accounts/mfaEnrollment:start",I(e,t))}function ht(e,t){return T(e,"POST","/v2/accounts/mfaEnrollment:finalize",I(e,t))}new WeakMap;const ut="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ut,"1"),this.storage.removeItem(ut),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(){const e=(0,n.z$)();return ue(e)||me(e)}const dt=1e3,Mt=10;class vt extends ft{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=zt()&&Ve(),this.fallbackToPolling=He(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const c=this.storage.getItem(t),n=this.localCache[t];c!==n&&e(t,n,c)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,c)=>{this.notifyListeners(e,c)}));const c=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const n=this.storage.getItem(c);if(e.newValue!==n)null!==e.newValue?this.storage.setItem(c,e.newValue):this.storage.removeItem(c);else if(this.localCache[c]===e.newValue&&!t)return}const n=()=>{const e=this.storage.getItem(c);(t||this.localCache[c]!==e)&&this.notifyListeners(c,e)},C=this.storage.getItem(c);Le()&&C!==e.newValue&&e.newValue!==e.oldValue?setTimeout(n,Mt):n()}notifyListeners(e,t){this.localCache[e]=t;const c=this.listeners[e];if(c)for(const n of Array.from(c))n(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,c)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:c}),!0)}))}),dt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}vt.type="LOCAL";const mt=vt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt extends ft{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}pt.type="SESSION";const Lt=pt;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(e){return Promise.all(e.map((async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const c=new Vt(e);return this.receivers.push(c),c}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:c,eventType:n,data:C}=t.data,r=this.handlersMap[n];if(!(null===r||void 0===r?void 0:r.size))return;t.ports[0].postMessage({status:"ack",eventId:c,eventType:n});const i=Array.from(r).map((async e=>e(t.origin,C))),s=await Ht(i);t.ports[0].postMessage({status:"done",eventId:c,eventType:n,response:s})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function gt(e="",t=10){let c="";for(let n=0;n<t;n++)c+=Math.floor(10*Math.random());return e+c}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Vt.receivers=[];class bt{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,c=50){const n="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!n)throw new Error("connection_unavailable");let C,r;return new Promise(((i,s)=>{const a=gt("",20);n.port1.start();const o=setTimeout((()=>{s(new Error("unsupported_event"))}),c);r={messageChannel:n,onMessage(e){const t=e;if(t.data.eventId===a)switch(t.data.status){case"ack":clearTimeout(o),C=setTimeout((()=>{s(new Error("timeout"))}),3e3);break;case"done":clearTimeout(C),i(t.data.response);break;default:clearTimeout(o),clearTimeout(C),s(new Error("invalid_response"));break}}},this.handlers.add(r),n.port1.addEventListener("message",r.onMessage),this.target.postMessage({eventType:e,eventId:a,data:t},[n.port2])})).finally((()=>{r&&this.removeMessageHandler(r)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(){return window}function _t(e){yt().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(){return"undefined"!==typeof yt()["WorkerGlobalScope"]&&"function"===typeof yt()["importScripts"]}async function wt(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function kt(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function Et(){return St()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const At="firebaseLocalStorageDb",Ot=1,xt="firebaseLocalStorage",It="fbase_key";class Tt{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function Pt(e,t){return e.transaction([xt],t?"readwrite":"readonly").objectStore(xt)}function Rt(){const e=indexedDB.deleteDatabase(At);return new Tt(e).toPromise()}function Nt(){const e=indexedDB.open(At,Ot);return new Promise(((t,c)=>{e.addEventListener("error",(()=>{c(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(xt,{keyPath:It})}catch(n){c(n)}})),e.addEventListener("success",(async()=>{const c=e.result;c.objectStoreNames.contains(xt)?t(c):(c.close(),await Rt(),t(await Nt()))}))}))}async function Dt(e,t,c){const n=Pt(e,!0).put({[It]:t,value:c});return new Tt(n).toPromise()}async function jt(e,t){const c=Pt(e,!1).get(t),n=await new Tt(c).toPromise();return void 0===n?null:n.value}function $t(e,t){const c=Pt(e,!0).delete(t);return new Tt(c).toPromise()}const qt=800,Ut=3;class Ft{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Nt()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(c){if(t++>Ut)throw c;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return St()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Vt._getInstance(Et()),this.receiver._subscribe("keyChanged",(async(e,t)=>{const c=await this._poll();return{keyProcessed:c.includes(t.key)}})),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await wt(),!this.activeServiceWorker)return;this.sender=new bt(this.activeServiceWorker);const c=await this.sender._send("ping",{},800);c&&(null===(e=c[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=c[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&kt()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Nt();return await Dt(e,ut,"1"),await $t(e,ut),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((c=>Dt(c,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>jt(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>$t(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Pt(e,!1).getAll();return new Tt(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],c=new Set;for(const{fbase_key:n,value:C}of e)c.add(n),JSON.stringify(this.localCache[n])!==JSON.stringify(C)&&(this.notifyListeners(n,C),t.push(n));for(const n of Object.keys(this.localCache))this.localCache[n]&&!c.has(n)&&(this.notifyListeners(n,null),t.push(n));return t}notifyListeners(e,t){this.localCache[e]=t;const c=this.listeners[e];if(c)for(const n of Array.from(c))n(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),qt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Ft.type="LOCAL";const Bt=Ft;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(e,t){return T(e,"POST","/v2/accounts/mfaSignIn:start",I(e,t))}function Gt(e,t){return T(e,"POST","/v2/accounts/mfaSignIn:finalize",I(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Kt(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function Yt(e){return new Promise(((t,c)=>{const n=document.createElement("script");n.setAttribute("src",e),n.onload=t,n.onerror=e=>{const t=z("internal-error");t.customData=e,c(t)},n.type="text/javascript",n.charset="UTF-8",Kt().appendChild(n)}))}function Jt(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Jt("rcb"),new k(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Xt="recaptcha";async function Qt(e,t,c){var n;const C=await c.verify();try{let r;if(v("string"===typeof C,e,"argument-error"),v(c.type===Xt,e,"argument-error"),r="string"===typeof t?{phoneNumber:t}:t,"session"in r){const t=r.session;if("phoneNumber"in r){v("enroll"===t.type,e,"internal-error");const c=await lt(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:r.phoneNumber,recaptchaToken:C}});return c.phoneSessionInfo.sessionInfo}{v("signin"===t.type,e,"internal-error");const c=(null===(n=r.multiFactorHint)||void 0===n?void 0:n.uid)||r.multiFactorUid;v(c,e,"missing-multi-factor-info");const i=await Wt(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:c,phoneSignInInfo:{recaptchaToken:C}});return i.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await Pe(e,{phoneNumber:r.phoneNumber,recaptchaToken:C});return t}}finally{c._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zt{constructor(e){this.providerId=Zt.PROVIDER_ID,this.auth=ye(e)}verifyPhoneNumber(e,t){return Qt(this.auth,e,(0,n.m9)(t))}static credential(e,t){return $e._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Zt.credentialFromTaggedObject(t)}static credentialFromError(e){return Zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:c}=e;return t&&c?$e._fromTokenResponse(t,c):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ec(e,t){return t?H(t):(v(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Zt.PROVIDER_ID="phone",Zt.PHONE_SIGN_IN_METHOD="phone";class tc extends Se{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return xe(e,this._buildIdpRequest())}_linkToIdToken(e,t){return xe(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return xe(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function cc(e){return rt(e.auth,new tc(e),e.bypassAuthState)}function nc(e){const{auth:t,user:c}=e;return v(c,t,"internal-error"),Ct(c,new tc(e),e.bypassAuthState)}async function Cc(e){const{auth:t,user:c}=e;return v(c,t,"internal-error"),nt(c,new tc(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(e,t,c,n,C=!1){this.auth=e,this.resolver=c,this.user=n,this.bypassAuthState=C,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(c){this.reject(c)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:c,postBody:n,tenantId:C,error:r,type:i}=e;if(r)return void this.reject(r);const s={auth:this.auth,requestUri:t,sessionId:c,tenantId:C||void 0,postBody:n||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(i)(s))}catch(a){this.reject(a)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return cc;case"linkViaPopup":case"linkViaRedirect":return Cc;case"reauthViaPopup":case"reauthViaRedirect":return nc;default:f(this.auth,"internal-error")}}resolve(e){p(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){p(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ic=new k(2e3,1e4);class sc extends rc{constructor(e,t,c,n,C){super(e,t,n,C),this.provider=c,this.authWindow=null,this.pollId=null,sc.currentPopupAction&&sc.currentPopupAction.cancel(),sc.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return v(e,this.auth,"internal-error"),e}async onExecution(){p(1===this.filter.length,"Popup operations only handle one event");const e=gt();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(z(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(z(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,sc.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,c;(null===(c=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===c?void 0:c.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(z(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,ic.get())};e()}}sc.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ac="pendingRedirect",oc=new Map;class lc extends rc{constructor(e,t,c=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,c),this.eventId=null}async execute(){let e=oc.get(this.auth._key());if(!e){try{const t=await hc(this.resolver,this.auth),c=t?await super.execute():null;e=()=>Promise.resolve(c)}catch(t){e=()=>Promise.reject(t)}oc.set(this.auth._key(),e)}return this.bypassAuthState||oc.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function hc(e,t){const c=fc(t),n=uc(e);if(!await n._isAvailable())return!1;const C="true"===await n._get(c);return await n._remove(c),C}function uc(e){return H(e._redirectPersistence)}function fc(e){return ae(ac,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zc(e,t,c=!1){const n=ye(e),C=ec(n,t),r=new lc(n,C,c),i=await r.execute();return i&&!c&&(delete i.user._redirectEventId,await n._persistUserIfCurrent(i.user),await n._setRedirectUser(null,t)),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const dc=6e5;class Mc{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((c=>{this.isEventForConsumer(e,c)&&(t=!0,this.sendToConsumer(e,c),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!pc(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var c;if(e.error&&!mc(e)){const n=(null===(c=e.error.code)||void 0===c?void 0:c.split("auth/")[1])||"internal-error";t.onError(z(this.auth,n))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const c=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&c}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=dc&&this.cachedEventUids.clear(),this.cachedEventUids.has(vc(e))}saveEventToCache(e){this.cachedEventUids.add(vc(e)),this.lastProcessedEventTime=Date.now()}}function vc(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function mc({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function pc(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return mc(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lc(e,t={}){return T(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hc=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Vc=/^https?/;async function gc(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Lc(e);for(const n of t)try{if(bc(n))return}catch(c){}f(e,"unauthorized-domain")}function bc(e){const t=b(),{protocol:c,hostname:n}=new URL(t);if(e.startsWith("chrome-extension://")){const C=new URL(e);return""===C.hostname&&""===n?"chrome-extension:"===c&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===c&&C.hostname===n}if(!Vc.test(c))return!1;if(Hc.test(e))return n===e;const C=e.replace(/\./g,"\\."),r=new RegExp("^(.+\\."+C+"|"+C+")$","i");return r.test(n)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yc=new k(3e4,6e4);function _c(){const e=yt().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let c=0;c<e.CP.length;c++)e.CP[c]=null}function Sc(e){return new Promise(((t,c)=>{var n,C,r;function i(){_c(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{_c(),c(z(e,"network-request-failed"))},timeout:yc.get()})}if(null===(C=null===(n=yt().gapi)||void 0===n?void 0:n.iframes)||void 0===C?void 0:C.Iframe)t(gapi.iframes.getContext());else{if(!(null===(r=yt().gapi)||void 0===r?void 0:r.load)){const t=Jt("iframefcb");return yt()[t]=()=>{gapi.load?i():c(z(e,"network-request-failed"))},Yt(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>c(e)))}i()}})).catch((e=>{throw wc=null,e}))}let wc=null;function kc(e){return wc=wc||Sc(e),wc}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ec=new k(5e3,15e3),Ac="__/auth/iframe",Oc="emulator/auth/iframe",xc={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ic=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Tc(e){const t=e.config;v(t.authDomain,e,"auth-domain-config-required");const c=t.emulator?E(t,Oc):`https://${e.config.authDomain}/${Ac}`,r={apiKey:t.apiKey,appName:e.name,v:C.Jn},i=Ic.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${c}?${(0,n.xO)(r).slice(1)}`}async function Pc(e){const t=await kc(e),c=yt().gapi;return v(c,e,"internal-error"),t.open({where:document.body,url:Tc(e),messageHandlersFilter:c.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:xc,dontclear:!0},(t=>new Promise((async(c,n)=>{await t.restyle({setHideOnLeave:!1});const C=z(e,"network-request-failed"),r=yt().setTimeout((()=>{n(C)}),Ec.get());function i(){yt().clearTimeout(r),c(t)}t.ping(i).then(i,(()=>{n(C)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rc={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Nc=500,Dc=600,jc="_blank",$c="http://localhost";class qc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Uc(e,t,c,C=Nc,r=Dc){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),s=Math.max((window.screen.availWidth-C)/2,0).toString();let a="";const o=Object.assign(Object.assign({},Rc),{width:C.toString(),height:r.toString(),top:i,left:s}),l=(0,n.z$)().toLowerCase();c&&(a=fe(l)?jc:c),he(l)&&(t=t||$c,o.scrollbars="yes");const h=Object.entries(o).reduce(((e,[t,c])=>`${e}${t}=${c},`),"");if(pe(l)&&"_self"!==a)return Fc(t||"",a),new qc(null);const u=window.open(t||"",a,h);v(u,e,"popup-blocked");try{u.focus()}catch(f){}return new qc(u)}function Fc(e,t){const c=document.createElement("a");c.href=e,c.target=t;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),c.dispatchEvent(n)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bc="__/auth/handler",Wc="emulator/auth/handler";function Gc(e,t,c,r,i,s){v(e.config.authDomain,e,"auth-domain-config-required"),v(e.config.apiKey,e,"invalid-api-key");const a={apiKey:e.config.apiKey,appName:e.name,authType:c,redirectUrl:r,v:C.Jn,eventId:i};if(t instanceof We){t.setDefaultLanguage(e.languageCode),a.providerId=t.providerId||"",(0,n.xb)(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))a[e]=t}if(t instanceof Ge){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(a.scopes=e.join(","))}e.tenantId&&(a.tid=e.tenantId);const o=a;for(const n of Object.keys(o))void 0===o[n]&&delete o[n];return`${Kc(e)}?${(0,n.xO)(o).slice(1)}`}function Kc({config:e}){return e.emulator?E(e,Wc):`https://${e.authDomain}/${Bc}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yc="webStorageSupport";class Jc{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Lt,this._completeRedirectFn=zc}async _openPopup(e,t,c,n){var C;p(null===(C=this.eventManagers[e._key()])||void 0===C?void 0:C.manager,"_initialize() not called before _openPopup()");const r=Gc(e,t,c,b(),n);return Uc(e,r,gt())}async _openRedirect(e,t,c,n){return await this._originValidation(e),_t(Gc(e,t,c,b(),n)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:c}=this.eventManagers[t];return e?Promise.resolve(e):(p(c,"If manager is not set, promise should be"),c)}const c=this.initAndGetManager(e);return this.eventManagers[t]={promise:c},c.catch((()=>{delete this.eventManagers[t]})),c}async initAndGetManager(e){const t=await Pc(e),c=new Mc(e);return t.register("authEvent",(t=>{v(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const n=c.onEvent(t.authEvent);return{status:n?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:c},this.iframes[e._key()]=t,c}_isIframeWebStorageSupported(e,t){const c=this.iframes[e._key()];c.send(Yc,{type:Yc},(c=>{var n;const C=null===(n=null===c||void 0===c?void 0:c[0])||void 0===n?void 0:n[Yc];void 0!==C&&t(!!C),f(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=gc(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return He()||ue()||me()}}const Xc=Jc;class Qc{constructor(e){this.factorId=e}_process(e,t,c){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,c);case"signin":return this._finalizeSignIn(e,t.credential);default:return m("unexpected MultiFactorSessionType")}}}class Zc extends Qc{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Zc(e)}_finalizeEnroll(e,t,c){return ht(e,{idToken:t,displayName:c,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return Gt(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class en{constructor(){}static assertion(e){return Zc._fromCredential(e)}}en.FACTOR_ID="phone";var tn="@firebase/auth",cn="0.19.10";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nn{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var c;e((null===(c=t)||void 0===c?void 0:c.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){v(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function rn(e){(0,C.Xd)(new s.wA("auth",((t,{options:c})=>{const n=t.getProvider("app").getImmediate(),C=t.getProvider("heartbeat"),{apiKey:r,authDomain:i}=n.options;return((t,n)=>{v(r&&!r.includes(":"),"invalid-api-key",{appName:t.name}),v(!(null===i||void 0===i?void 0:i.includes(":")),"argument-error",{appName:t.name});const C={apiKey:r,authDomain:i,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ge(e)},s=new be(t,n,C);return g(s,c),s})(n,C)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,c)=>{const n=e.getProvider("auth-internal");n.initialize()}))),(0,C.Xd)(new s.wA("auth-internal",(e=>{const t=ye(e.getProvider("auth").getImmediate());return(e=>new nn(e))(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,C.KN)(tn,cn,Cn(e)),(0,C.KN)(tn,cn,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(e=(0,C.Mq)()){const t=(0,C.qX)(e,"auth");return t.isInitialized()?t.getImmediate():V(e,{popupRedirectResolver:Xc,persistence:[Bt,mt,Lt]})}rn("Browser")},89:function(e,t){"use strict";t.Z=(e,t)=>{const c=e.__vccOpts||e;for(const[n,C]of t)c[n]=C;return c}},678:function(e,t,c){"use strict";c.d(t,{PO:function(){return B},p7:function(){return tt}});c(1703);var n=c(3396),C=c(4870);
/*!
  * vue-router v4.0.13
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
const r="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag,i=e=>r?Symbol(e):"_vr_"+e,s=i("rvlm"),a=i("rvd"),o=i("r"),l=i("rl"),h=i("rvl"),u="undefined"!==typeof window;function f(e){return e.__esModule||r&&"Module"===e[Symbol.toStringTag]}const z=Object.assign;function d(e,t){const c={};for(const n in t){const C=t[n];c[n]=Array.isArray(C)?C.map(e):e(C)}return c}const M=()=>{};const v=/\/$/,m=e=>e.replace(v,"");function p(e,t,c="/"){let n,C={},r="",i="";const s=t.indexOf("?"),a=t.indexOf("#",s>-1?s:0);return s>-1&&(n=t.slice(0,s),r=t.slice(s+1,a>-1?a:t.length),C=e(r)),a>-1&&(n=n||t.slice(0,a),i=t.slice(a,t.length)),n=S(null!=n?n:t,c),{fullPath:n+(r&&"?")+r+i,path:n,query:C,hash:i}}function L(e,t){const c=t.query?e(t.query):"";return t.path+(c&&"?")+c+(t.hash||"")}function H(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function V(e,t,c){const n=t.matched.length-1,C=c.matched.length-1;return n>-1&&n===C&&g(t.matched[n],c.matched[C])&&b(t.params,c.params)&&e(t.query)===e(c.query)&&t.hash===c.hash}function g(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function b(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const c in e)if(!y(e[c],t[c]))return!1;return!0}function y(e,t){return Array.isArray(e)?_(e,t):Array.isArray(t)?_(t,e):e===t}function _(e,t){return Array.isArray(t)?e.length===t.length&&e.every(((e,c)=>e===t[c])):1===e.length&&e[0]===t}function S(e,t){if(e.startsWith("/"))return e;if(!e)return t;const c=t.split("/"),n=e.split("/");let C,r,i=c.length-1;for(C=0;C<n.length;C++)if(r=n[C],1!==i&&"."!==r){if(".."!==r)break;i--}return c.slice(0,i).join("/")+"/"+n.slice(C-(C===n.length?1:0)).join("/")}var w,k;(function(e){e["pop"]="pop",e["push"]="push"})(w||(w={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(k||(k={}));function E(e){if(!e)if(u){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),m(e)}const A=/^[^#]+#/;function O(e,t){return e.replace(A,"#")+t}function x(e,t){const c=document.documentElement.getBoundingClientRect(),n=e.getBoundingClientRect();return{behavior:t.behavior,left:n.left-c.left-(t.left||0),top:n.top-c.top-(t.top||0)}}const I=()=>({left:window.pageXOffset,top:window.pageYOffset});function T(e){let t;if("el"in e){const c=e.el,n="string"===typeof c&&c.startsWith("#");0;const C="string"===typeof c?n?document.getElementById(c.slice(1)):document.querySelector(c):c;if(!C)return;t=x(C,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function P(e,t){const c=history.state?history.state.position-t:-1;return c+e}const R=new Map;function N(e,t){R.set(e,t)}function D(e){const t=R.get(e);return R.delete(e),t}let j=()=>location.protocol+"//"+location.host;function $(e,t){const{pathname:c,search:n,hash:C}=t,r=e.indexOf("#");if(r>-1){let t=C.includes(e.slice(r))?e.slice(r).length:1,c=C.slice(t);return"/"!==c[0]&&(c="/"+c),H(c,"")}const i=H(c,e);return i+n+C}function q(e,t,c,n){let C=[],r=[],i=null;const s=({state:r})=>{const s=$(e,location),a=c.value,o=t.value;let l=0;if(r){if(c.value=s,t.value=r,i&&i===a)return void(i=null);l=o?r.position-o.position:0}else n(s);C.forEach((e=>{e(c.value,a,{delta:l,type:w.pop,direction:l?l>0?k.forward:k.back:k.unknown})}))};function a(){i=c.value}function o(e){C.push(e);const t=()=>{const t=C.indexOf(e);t>-1&&C.splice(t,1)};return r.push(t),t}function l(){const{history:e}=window;e.state&&e.replaceState(z({},e.state,{scroll:I()}),"")}function h(){for(const e of r)e();r=[],window.removeEventListener("popstate",s),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",s),window.addEventListener("beforeunload",l),{pauseListeners:a,listen:o,destroy:h}}function U(e,t,c,n=!1,C=!1){return{back:e,current:t,forward:c,replaced:n,position:window.history.length,scroll:C?I():null}}function F(e){const{history:t,location:c}=window,n={value:$(e,c)},C={value:t.state};function r(n,r,i){const s=e.indexOf("#"),a=s>-1?(c.host&&document.querySelector("base")?e:e.slice(s))+n:j()+e+n;try{t[i?"replaceState":"pushState"](r,"",a),C.value=r}catch(o){console.error(o),c[i?"replace":"assign"](a)}}function i(e,c){const i=z({},t.state,U(C.value.back,e,C.value.forward,!0),c,{position:C.value.position});r(e,i,!0),n.value=e}function s(e,c){const i=z({},C.value,t.state,{forward:e,scroll:I()});r(i.current,i,!0);const s=z({},U(n.value,e,null),{position:i.position+1},c);r(e,s,!1),n.value=e}return C.value||r(n.value,{back:null,current:n.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:n,state:C,push:s,replace:i}}function B(e){e=E(e);const t=F(e),c=q(e,t.state,t.location,t.replace);function n(e,t=!0){t||c.pauseListeners(),history.go(e)}const C=z({location:"",base:e,go:n,createHref:O.bind(null,e)},t,c);return Object.defineProperty(C,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(C,"state",{enumerable:!0,get:()=>t.state.value}),C}function W(e){return"string"===typeof e||e&&"object"===typeof e}function G(e){return"string"===typeof e||"symbol"===typeof e}const K={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Y=i("nf");var J;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(J||(J={}));function X(e,t){return z(new Error,{type:e,[Y]:!0},t)}function Q(e,t){return e instanceof Error&&Y in e&&(null==t||!!(e.type&t))}const Z="[^/]+?",ee={sensitive:!1,strict:!1,start:!0,end:!0},te=/[.+*?^${}()[\]/\\]/g;function ce(e,t){const c=z({},ee,t),n=[];let C=c.start?"^":"";const r=[];for(const l of e){const e=l.length?[]:[90];c.strict&&!l.length&&(C+="/");for(let t=0;t<l.length;t++){const n=l[t];let i=40+(c.sensitive?.25:0);if(0===n.type)t||(C+="/"),C+=n.value.replace(te,"\\$&"),i+=40;else if(1===n.type){const{value:e,repeatable:c,optional:s,regexp:a}=n;r.push({name:e,repeatable:c,optional:s});const h=a||Z;if(h!==Z){i+=10;try{new RegExp(`(${h})`)}catch(o){throw new Error(`Invalid custom RegExp for param "${e}" (${h}): `+o.message)}}let u=c?`((?:${h})(?:/(?:${h}))*)`:`(${h})`;t||(u=s&&l.length<2?`(?:/${u})`:"/"+u),s&&(u+="?"),C+=u,i+=20,s&&(i+=-8),c&&(i+=-20),".*"===h&&(i+=-50)}e.push(i)}n.push(e)}if(c.strict&&c.end){const e=n.length-1;n[e][n[e].length-1]+=.7000000000000001}c.strict||(C+="/?"),c.end?C+="$":c.strict&&(C+="(?:/|$)");const i=new RegExp(C,c.sensitive?"":"i");function s(e){const t=e.match(i),c={};if(!t)return null;for(let n=1;n<t.length;n++){const e=t[n]||"",C=r[n-1];c[C.name]=e&&C.repeatable?e.split("/"):e}return c}function a(t){let c="",n=!1;for(const C of e){n&&c.endsWith("/")||(c+="/"),n=!1;for(const e of C)if(0===e.type)c+=e.value;else if(1===e.type){const{value:r,repeatable:i,optional:s}=e,a=r in t?t[r]:"";if(Array.isArray(a)&&!i)throw new Error(`Provided param "${r}" is an array but it is not repeatable (* or + modifiers)`);const o=Array.isArray(a)?a.join("/"):a;if(!o){if(!s)throw new Error(`Missing required param "${r}"`);C.length<2&&(c.endsWith("/")?c=c.slice(0,-1):n=!0)}c+=o}}return c}return{re:i,score:n,keys:r,parse:s,stringify:a}}function ne(e,t){let c=0;while(c<e.length&&c<t.length){const n=t[c]-e[c];if(n)return n;c++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function Ce(e,t){let c=0;const n=e.score,C=t.score;while(c<n.length&&c<C.length){const e=ne(n[c],C[c]);if(e)return e;c++}return C.length-n.length}const re={type:0,value:""},ie=/[a-zA-Z0-9_]/;function se(e){if(!e)return[[]];if("/"===e)return[[re]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${c})/"${o}": ${e}`)}let c=0,n=c;const C=[];let r;function i(){r&&C.push(r),r=[]}let s,a=0,o="",l="";function h(){o&&(0===c?r.push({type:0,value:o}):1===c||2===c||3===c?(r.length>1&&("*"===s||"+"===s)&&t(`A repeatable param (${o}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:o,regexp:l,repeatable:"*"===s||"+"===s,optional:"*"===s||"?"===s})):t("Invalid state to consume buffer"),o="")}function u(){o+=s}while(a<e.length)if(s=e[a++],"\\"!==s||2===c)switch(c){case 0:"/"===s?(o&&h(),i()):":"===s?(h(),c=1):u();break;case 4:u(),c=n;break;case 1:"("===s?c=2:ie.test(s)?u():(h(),c=0,"*"!==s&&"?"!==s&&"+"!==s&&a--);break;case 2:")"===s?"\\"==l[l.length-1]?l=l.slice(0,-1)+s:c=3:l+=s;break;case 3:h(),c=0,"*"!==s&&"?"!==s&&"+"!==s&&a--,l="";break;default:t("Unknown state");break}else n=c,c=4;return 2===c&&t(`Unfinished custom RegExp for param "${o}"`),h(),i(),C}function ae(e,t,c){const n=ce(se(e.path),c);const C=z(n,{record:e,parent:t,children:[],alias:[]});return t&&!C.record.aliasOf===!t.record.aliasOf&&t.children.push(C),C}function oe(e,t){const c=[],n=new Map;function C(e){return n.get(e)}function r(e,c,n){const C=!n,s=he(e);s.aliasOf=n&&n.record;const o=de(t,e),l=[s];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)l.push(z({},s,{components:n?n.record.components:s.components,path:e,aliasOf:n?n.record:s}))}let h,u;for(const t of l){const{path:l}=t;if(c&&"/"!==l[0]){const e=c.record.path,n="/"===e[e.length-1]?"":"/";t.path=c.record.path+(l&&n+l)}if(h=ae(t,c,o),n?n.alias.push(h):(u=u||h,u!==h&&u.alias.push(h),C&&e.name&&!fe(h)&&i(e.name)),"children"in s){const e=s.children;for(let t=0;t<e.length;t++)r(e[t],h,n&&n.children[t])}n=n||h,a(h)}return u?()=>{i(u)}:M}function i(e){if(G(e)){const t=n.get(e);t&&(n.delete(e),c.splice(c.indexOf(t),1),t.children.forEach(i),t.alias.forEach(i))}else{const t=c.indexOf(e);t>-1&&(c.splice(t,1),e.record.name&&n.delete(e.record.name),e.children.forEach(i),e.alias.forEach(i))}}function s(){return c}function a(e){let t=0;while(t<c.length&&Ce(e,c[t])>=0&&(e.record.path!==c[t].record.path||!Me(e,c[t])))t++;c.splice(t,0,e),e.record.name&&!fe(e)&&n.set(e.record.name,e)}function o(e,t){let C,r,i,s={};if("name"in e&&e.name){if(C=n.get(e.name),!C)throw X(1,{location:e});i=C.record.name,s=z(le(t.params,C.keys.filter((e=>!e.optional)).map((e=>e.name))),e.params),r=C.stringify(s)}else if("path"in e)r=e.path,C=c.find((e=>e.re.test(r))),C&&(s=C.parse(r),i=C.record.name);else{if(C=t.name?n.get(t.name):c.find((e=>e.re.test(t.path))),!C)throw X(1,{location:e,currentLocation:t});i=C.record.name,s=z({},t.params,e.params),r=C.stringify(s)}const a=[];let o=C;while(o)a.unshift(o.record),o=o.parent;return{name:i,path:r,params:s,matched:a,meta:ze(a)}}return t=de({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>r(e))),{addRoute:r,resolve:o,removeRoute:i,getRoutes:s,getRecordMatcher:C}}function le(e,t){const c={};for(const n of t)n in e&&(c[n]=e[n]);return c}function he(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:ue(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function ue(e){const t={},c=e.props||!1;if("component"in e)t.default=c;else for(const n in e.components)t[n]="boolean"===typeof c?c:c[n];return t}function fe(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function ze(e){return e.reduce(((e,t)=>z(e,t.meta)),{})}function de(e,t){const c={};for(const n in e)c[n]=n in t?t[n]:e[n];return c}function Me(e,t){return t.children.some((t=>t===e||Me(e,t)))}const ve=/#/g,me=/&/g,pe=/\//g,Le=/=/g,He=/\?/g,Ve=/\+/g,ge=/%5B/g,be=/%5D/g,ye=/%5E/g,_e=/%60/g,Se=/%7B/g,we=/%7C/g,ke=/%7D/g,Ee=/%20/g;function Ae(e){return encodeURI(""+e).replace(we,"|").replace(ge,"[").replace(be,"]")}function Oe(e){return Ae(e).replace(Se,"{").replace(ke,"}").replace(ye,"^")}function xe(e){return Ae(e).replace(Ve,"%2B").replace(Ee,"+").replace(ve,"%23").replace(me,"%26").replace(_e,"`").replace(Se,"{").replace(ke,"}").replace(ye,"^")}function Ie(e){return xe(e).replace(Le,"%3D")}function Te(e){return Ae(e).replace(ve,"%23").replace(He,"%3F")}function Pe(e){return null==e?"":Te(e).replace(pe,"%2F")}function Re(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function Ne(e){const t={};if(""===e||"?"===e)return t;const c="?"===e[0],n=(c?e.slice(1):e).split("&");for(let C=0;C<n.length;++C){const e=n[C].replace(Ve," "),c=e.indexOf("="),r=Re(c<0?e:e.slice(0,c)),i=c<0?null:Re(e.slice(c+1));if(r in t){let e=t[r];Array.isArray(e)||(e=t[r]=[e]),e.push(i)}else t[r]=i}return t}function De(e){let t="";for(let c in e){const n=e[c];if(c=Ie(c),null==n){void 0!==n&&(t+=(t.length?"&":"")+c);continue}const C=Array.isArray(n)?n.map((e=>e&&xe(e))):[n&&xe(n)];C.forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+c,null!=e&&(t+="="+e))}))}return t}function je(e){const t={};for(const c in e){const n=e[c];void 0!==n&&(t[c]=Array.isArray(n)?n.map((e=>null==e?null:""+e)):null==n?n:""+n)}return t}function $e(){let e=[];function t(t){return e.push(t),()=>{const c=e.indexOf(t);c>-1&&e.splice(c,1)}}function c(){e=[]}return{add:t,list:()=>e,reset:c}}function qe(e,t,c,n,C){const r=n&&(n.enterCallbacks[C]=n.enterCallbacks[C]||[]);return()=>new Promise(((i,s)=>{const a=e=>{!1===e?s(X(4,{from:c,to:t})):e instanceof Error?s(e):W(e)?s(X(2,{from:t,to:e})):(r&&n.enterCallbacks[C]===r&&"function"===typeof e&&r.push(e),i())},o=e.call(n&&n.instances[C],t,c,a);let l=Promise.resolve(o);e.length<3&&(l=l.then(a)),l.catch((e=>s(e)))}))}function Ue(e,t,c,n){const C=[];for(const r of e)for(const e in r.components){let i=r.components[e];if("beforeRouteEnter"===t||r.instances[e])if(Fe(i)){const s=i.__vccOpts||i,a=s[t];a&&C.push(qe(a,c,n,r,e))}else{let s=i();0,C.push((()=>s.then((C=>{if(!C)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${r.path}"`));const i=f(C)?C.default:C;r.components[e]=i;const s=i.__vccOpts||i,a=s[t];return a&&qe(a,c,n,r,e)()}))))}}return C}function Fe(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function Be(e){const t=(0,n.f3)(o),c=(0,n.f3)(l),r=(0,n.Fl)((()=>t.resolve((0,C.SU)(e.to)))),i=(0,n.Fl)((()=>{const{matched:e}=r.value,{length:t}=e,n=e[t-1],C=c.matched;if(!n||!C.length)return-1;const i=C.findIndex(g.bind(null,n));if(i>-1)return i;const s=Je(e[t-2]);return t>1&&Je(n)===s&&C[C.length-1].path!==s?C.findIndex(g.bind(null,e[t-2])):i})),s=(0,n.Fl)((()=>i.value>-1&&Ye(c.params,r.value.params))),a=(0,n.Fl)((()=>i.value>-1&&i.value===c.matched.length-1&&b(c.params,r.value.params)));function h(c={}){return Ke(c)?t[(0,C.SU)(e.replace)?"replace":"push"]((0,C.SU)(e.to)).catch(M):Promise.resolve()}return{route:r,href:(0,n.Fl)((()=>r.value.href)),isActive:s,isExactActive:a,navigate:h}}const We=(0,n.aZ)({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Be,setup(e,{slots:t}){const c=(0,C.qj)(Be(e)),{options:r}=(0,n.f3)(o),i=(0,n.Fl)((()=>({[Xe(e.activeClass,r.linkActiveClass,"router-link-active")]:c.isActive,[Xe(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:c.isExactActive})));return()=>{const C=t.default&&t.default(c);return e.custom?C:(0,n.h)("a",{"aria-current":c.isExactActive?e.ariaCurrentValue:null,href:c.href,onClick:c.navigate,class:i.value},C)}}}),Ge=We;function Ke(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Ye(e,t){for(const c in t){const n=t[c],C=e[c];if("string"===typeof n){if(n!==C)return!1}else if(!Array.isArray(C)||C.length!==n.length||n.some(((e,t)=>e!==C[t])))return!1}return!0}function Je(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Xe=(e,t,c)=>null!=e?e:null!=t?t:c,Qe=(0,n.aZ)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:t,slots:c}){const r=(0,n.f3)(h),i=(0,n.Fl)((()=>e.route||r.value)),o=(0,n.f3)(a,0),l=(0,n.Fl)((()=>i.value.matched[o]));(0,n.JJ)(a,o+1),(0,n.JJ)(s,l),(0,n.JJ)(h,i);const u=(0,C.iH)();return(0,n.YP)((()=>[u.value,l.value,e.name]),(([e,t,c],[n,C,r])=>{t&&(t.instances[c]=e,C&&C!==t&&e&&e===n&&(t.leaveGuards.size||(t.leaveGuards=C.leaveGuards),t.updateGuards.size||(t.updateGuards=C.updateGuards))),!e||!t||C&&g(t,C)&&n||(t.enterCallbacks[c]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const C=i.value,r=l.value,s=r&&r.components[e.name],a=e.name;if(!s)return Ze(c.default,{Component:s,route:C});const o=r.props[e.name],h=o?!0===o?C.params:"function"===typeof o?o(C):o:null,f=e=>{e.component.isUnmounted&&(r.instances[a]=null)},d=(0,n.h)(s,z({},h,t,{onVnodeUnmounted:f,ref:u}));return Ze(c.default,{Component:d,route:C})||d}}});function Ze(e,t){if(!e)return null;const c=e(t);return 1===c.length?c[0]:c}const et=Qe;function tt(e){const t=oe(e.routes,e),c=e.parseQuery||Ne,r=e.stringifyQuery||De,i=e.history;const s=$e(),a=$e(),f=$e(),v=(0,C.XI)(K);let m=K;u&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const H=d.bind(null,(e=>""+e)),g=d.bind(null,Pe),b=d.bind(null,Re);function y(e,c){let n,C;return G(e)?(n=t.getRecordMatcher(e),C=c):C=e,t.addRoute(C,n)}function _(e){const c=t.getRecordMatcher(e);c&&t.removeRoute(c)}function S(){return t.getRoutes().map((e=>e.record))}function k(e){return!!t.getRecordMatcher(e)}function E(e,n){if(n=z({},n||v.value),"string"===typeof e){const C=p(c,e,n.path),r=t.resolve({path:C.path},n),s=i.createHref(C.fullPath);return z(C,r,{params:b(r.params),hash:Re(C.hash),redirectedFrom:void 0,href:s})}let C;if("path"in e)C=z({},e,{path:p(c,e.path,n.path).path});else{const t=z({},e.params);for(const e in t)null==t[e]&&delete t[e];C=z({},e,{params:g(e.params)}),n.params=g(n.params)}const s=t.resolve(C,n),a=e.hash||"";s.params=H(b(s.params));const o=L(r,z({},e,{hash:Oe(a),path:s.path})),l=i.createHref(o);return z({fullPath:o,hash:a,query:r===De?je(e.query):e.query||{}},s,{redirectedFrom:void 0,href:l})}function A(e){return"string"===typeof e?p(c,e,v.value.path):z({},e)}function O(e,t){if(m!==e)return X(8,{from:t,to:e})}function x(e){return $(e)}function R(e){return x(z(A(e),{replace:!0}))}function j(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:c}=t;let n="function"===typeof c?c(e):c;return"string"===typeof n&&(n=n.includes("?")||n.includes("#")?n=A(n):{path:n},n.params={}),z({query:e.query,hash:e.hash,params:e.params},n)}}function $(e,t){const c=m=E(e),n=v.value,C=e.state,i=e.force,s=!0===e.replace,a=j(c);if(a)return $(z(A(a),{state:C,force:i,replace:s}),t||c);const o=c;let l;return o.redirectedFrom=t,!i&&V(r,n,c)&&(l=X(16,{to:o,from:n}),Ce(n,n,!0,!1)),(l?Promise.resolve(l):U(o,n)).catch((e=>Q(e)?Q(e,2)?e:ne(e):te(e,o,n))).then((e=>{if(e){if(Q(e,2))return $(z(A(e.to),{state:C,force:i,replace:s}),t||o)}else e=B(o,n,!0,s,C);return F(o,n,e),e}))}function q(e,t){const c=O(e,t);return c?Promise.reject(c):Promise.resolve()}function U(e,t){let c;const[n,C,r]=nt(e,t);c=Ue(n.reverse(),"beforeRouteLeave",e,t);for(const s of n)s.leaveGuards.forEach((n=>{c.push(qe(n,e,t))}));const i=q.bind(null,e,t);return c.push(i),ct(c).then((()=>{c=[];for(const n of s.list())c.push(qe(n,e,t));return c.push(i),ct(c)})).then((()=>{c=Ue(C,"beforeRouteUpdate",e,t);for(const n of C)n.updateGuards.forEach((n=>{c.push(qe(n,e,t))}));return c.push(i),ct(c)})).then((()=>{c=[];for(const n of e.matched)if(n.beforeEnter&&!t.matched.includes(n))if(Array.isArray(n.beforeEnter))for(const C of n.beforeEnter)c.push(qe(C,e,t));else c.push(qe(n.beforeEnter,e,t));return c.push(i),ct(c)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),c=Ue(r,"beforeRouteEnter",e,t),c.push(i),ct(c)))).then((()=>{c=[];for(const n of a.list())c.push(qe(n,e,t));return c.push(i),ct(c)})).catch((e=>Q(e,8)?e:Promise.reject(e)))}function F(e,t,c){for(const n of f.list())n(e,t,c)}function B(e,t,c,n,C){const r=O(e,t);if(r)return r;const s=t===K,a=u?history.state:{};c&&(n||s?i.replace(e.fullPath,z({scroll:s&&a&&a.scroll},C)):i.push(e.fullPath,C)),v.value=e,Ce(e,t,c,s),ne()}let W;function Y(){W=i.listen(((e,t,c)=>{const n=E(e),C=j(n);if(C)return void $(z(C,{replace:!0}),n).catch(M);m=n;const r=v.value;u&&N(P(r.fullPath,c.delta),I()),U(n,r).catch((e=>Q(e,12)?e:Q(e,2)?($(e.to,n).then((e=>{Q(e,20)&&!c.delta&&c.type===w.pop&&i.go(-1,!1)})).catch(M),Promise.reject()):(c.delta&&i.go(-c.delta,!1),te(e,n,r)))).then((e=>{e=e||B(n,r,!1),e&&(c.delta?i.go(-c.delta,!1):c.type===w.pop&&Q(e,20)&&i.go(-1,!1)),F(n,r,e)})).catch(M)}))}let J,Z=$e(),ee=$e();function te(e,t,c){ne(e);const n=ee.list();return n.length?n.forEach((n=>n(e,t,c))):console.error(e),Promise.reject(e)}function ce(){return J&&v.value!==K?Promise.resolve():new Promise(((e,t)=>{Z.add([e,t])}))}function ne(e){return J||(J=!e,Y(),Z.list().forEach((([t,c])=>e?c(e):t())),Z.reset()),e}function Ce(t,c,C,r){const{scrollBehavior:i}=e;if(!u||!i)return Promise.resolve();const s=!C&&D(P(t.fullPath,0))||(r||!C)&&history.state&&history.state.scroll||null;return(0,n.Y3)().then((()=>i(t,c,s))).then((e=>e&&T(e))).catch((e=>te(e,t,c)))}const re=e=>i.go(e);let ie;const se=new Set,ae={currentRoute:v,addRoute:y,removeRoute:_,hasRoute:k,getRoutes:S,resolve:E,options:e,push:x,replace:R,go:re,back:()=>re(-1),forward:()=>re(1),beforeEach:s.add,beforeResolve:a.add,afterEach:f.add,onError:ee.add,isReady:ce,install(e){const t=this;e.component("RouterLink",Ge),e.component("RouterView",et),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,C.SU)(v)}),u&&!ie&&v.value===K&&(ie=!0,x(i.location).catch((e=>{0})));const c={};for(const C in K)c[C]=(0,n.Fl)((()=>v.value[C]));e.provide(o,t),e.provide(l,(0,C.qj)(c)),e.provide(h,v);const r=e.unmount;se.add(e),e.unmount=function(){se.delete(e),se.size<1&&(m=K,W&&W(),v.value=K,ie=!1,J=!1),r()}}};return ae}function ct(e){return e.reduce(((e,t)=>e.then((()=>t()))),Promise.resolve())}function nt(e,t){const c=[],n=[],C=[],r=Math.max(t.matched.length,e.matched.length);for(let i=0;i<r;i++){const r=t.matched[i];r&&(e.matched.find((e=>g(e,r)))?n.push(r):c.push(r));const s=e.matched[i];s&&(t.matched.find((e=>g(e,s)))||C.push(s))}return[c,n,C]}},9749:function(e,t,c){"use strict";c.d(t,{MT:function(){return X},oR:function(){return f}});c(1703);var n=c(3396),C=c(4870);function r(){return i().__VUE_DEVTOOLS_GLOBAL_HOOK__}function i(){return"undefined"!==typeof navigator&&"undefined"!==typeof window?window:"undefined"!==typeof c.g?c.g:{}}const s="function"===typeof Proxy,a="devtools-plugin:setup",o="plugin:settings:set";class l{constructor(e,t){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=t;const c={};if(e.settings)for(const i in e.settings){const t=e.settings[i];c[i]=t.defaultValue}const n=`__vue-devtools-plugin-settings__${e.id}`;let C=Object.assign({},c);try{const e=localStorage.getItem(n),t=JSON.parse(e);Object.assign(C,t)}catch(r){}this.fallbacks={getSettings(){return C},setSettings(e){try{localStorage.setItem(n,JSON.stringify(e))}catch(r){}C=e}},t&&t.on(o,((e,t)=>{e===this.plugin.id&&this.fallbacks.setSettings(t)})),this.proxiedOn=new Proxy({},{get:(e,t)=>this.target?this.target.on[t]:(...e)=>{this.onQueue.push({method:t,args:e})}}),this.proxiedTarget=new Proxy({},{get:(e,t)=>this.target?this.target[t]:"on"===t?this.proxiedOn:Object.keys(this.fallbacks).includes(t)?(...e)=>(this.targetQueue.push({method:t,args:e,resolve:()=>{}}),this.fallbacks[t](...e)):(...e)=>new Promise((c=>{this.targetQueue.push({method:t,args:e,resolve:c})}))})}async setRealTarget(e){this.target=e;for(const t of this.onQueue)this.target.on[t.method](...t.args);for(const t of this.targetQueue)t.resolve(await this.target[t.method](...t.args))}}function h(e,t){const c=e,n=i(),C=r(),o=s&&c.enableEarlyProxy;if(!C||!n.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__&&o){const e=o?new l(c,C):null,r=n.__VUE_DEVTOOLS_PLUGINS__=n.__VUE_DEVTOOLS_PLUGINS__||[];r.push({pluginDescriptor:c,setupFn:t,proxy:e}),e&&t(e.proxiedTarget)}else C.emit(a,e,t)}
/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */
var u="store";function f(e){return void 0===e&&(e=null),(0,n.f3)(null!==e?e:u)}function z(e,t){Object.keys(e).forEach((function(c){return t(e[c],c)}))}function d(e){return null!==e&&"object"===typeof e}function M(e){return e&&"function"===typeof e.then}function v(e,t){return function(){return e(t)}}function m(e,t,c){return t.indexOf(e)<0&&(c&&c.prepend?t.unshift(e):t.push(e)),function(){var c=t.indexOf(e);c>-1&&t.splice(c,1)}}function p(e,t){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var c=e.state;H(e,c,[],e._modules.root,!0),L(e,c,t)}function L(e,t,c){var n=e._state;e.getters={},e._makeLocalGettersCache=Object.create(null);var r=e._wrappedGetters,i={};z(r,(function(t,c){i[c]=v(t,e),Object.defineProperty(e.getters,c,{get:function(){return i[c]()},enumerable:!0})})),e._state=(0,C.qj)({data:t}),e.strict&&S(e),n&&c&&e._withCommit((function(){n.data=null}))}function H(e,t,c,n,C){var r=!c.length,i=e._modules.getNamespace(c);if(n.namespaced&&(e._modulesNamespaceMap[i],e._modulesNamespaceMap[i]=n),!r&&!C){var s=w(t,c.slice(0,-1)),a=c[c.length-1];e._withCommit((function(){s[a]=n.state}))}var o=n.context=V(e,i,c);n.forEachMutation((function(t,c){var n=i+c;b(e,n,t,o)})),n.forEachAction((function(t,c){var n=t.root?c:i+c,C=t.handler||t;y(e,n,C,o)})),n.forEachGetter((function(t,c){var n=i+c;_(e,n,t,o)})),n.forEachChild((function(n,r){H(e,t,c.concat(r),n,C)}))}function V(e,t,c){var n=""===t,C={dispatch:n?e.dispatch:function(c,n,C){var r=k(c,n,C),i=r.payload,s=r.options,a=r.type;return s&&s.root||(a=t+a),e.dispatch(a,i)},commit:n?e.commit:function(c,n,C){var r=k(c,n,C),i=r.payload,s=r.options,a=r.type;s&&s.root||(a=t+a),e.commit(a,i,s)}};return Object.defineProperties(C,{getters:{get:n?function(){return e.getters}:function(){return g(e,t)}},state:{get:function(){return w(e.state,c)}}}),C}function g(e,t){if(!e._makeLocalGettersCache[t]){var c={},n=t.length;Object.keys(e.getters).forEach((function(C){if(C.slice(0,n)===t){var r=C.slice(n);Object.defineProperty(c,r,{get:function(){return e.getters[C]},enumerable:!0})}})),e._makeLocalGettersCache[t]=c}return e._makeLocalGettersCache[t]}function b(e,t,c,n){var C=e._mutations[t]||(e._mutations[t]=[]);C.push((function(t){c.call(e,n.state,t)}))}function y(e,t,c,n){var C=e._actions[t]||(e._actions[t]=[]);C.push((function(t){var C=c.call(e,{dispatch:n.dispatch,commit:n.commit,getters:n.getters,state:n.state,rootGetters:e.getters,rootState:e.state},t);return M(C)||(C=Promise.resolve(C)),e._devtoolHook?C.catch((function(t){throw e._devtoolHook.emit("vuex:error",t),t})):C}))}function _(e,t,c,n){e._wrappedGetters[t]||(e._wrappedGetters[t]=function(e){return c(n.state,n.getters,e.state,e.getters)})}function S(e){(0,n.YP)((function(){return e._state.data}),(function(){0}),{deep:!0,flush:"sync"})}function w(e,t){return t.reduce((function(e,t){return e[t]}),e)}function k(e,t,c){return d(e)&&e.type&&(c=t,t=e,e=e.type),{type:e,payload:t,options:c}}var E="vuex bindings",A="vuex:mutations",O="vuex:actions",x="vuex",I=0;function T(e,t){h({id:"org.vuejs.vuex",app:e,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[E]},(function(c){c.addTimelineLayer({id:A,label:"Vuex Mutations",color:P}),c.addTimelineLayer({id:O,label:"Vuex Actions",color:P}),c.addInspector({id:x,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),c.on.getInspectorTree((function(c){if(c.app===e&&c.inspectorId===x)if(c.filter){var n=[];q(n,t._modules.root,c.filter,""),c.rootNodes=n}else c.rootNodes=[$(t._modules.root,"")]})),c.on.getInspectorState((function(c){if(c.app===e&&c.inspectorId===x){var n=c.nodeId;g(t,n),c.state=U(B(t._modules,n),"root"===n?t.getters:t._makeLocalGettersCache,n)}})),c.on.editInspectorState((function(c){if(c.app===e&&c.inspectorId===x){var n=c.nodeId,C=c.path;"root"!==n&&(C=n.split("/").filter(Boolean).concat(C)),t._withCommit((function(){c.set(t._state.data,C,c.state.value)}))}})),t.subscribe((function(e,t){var n={};e.payload&&(n.payload=e.payload),n.state=t,c.notifyComponentUpdate(),c.sendInspectorTree(x),c.sendInspectorState(x),c.addTimelineEvent({layerId:A,event:{time:Date.now(),title:e.type,data:n}})})),t.subscribeAction({before:function(e,t){var n={};e.payload&&(n.payload=e.payload),e._id=I++,e._time=Date.now(),n.state=t,c.addTimelineEvent({layerId:O,event:{time:e._time,title:e.type,groupId:e._id,subtitle:"start",data:n}})},after:function(e,t){var n={},C=Date.now()-e._time;n.duration={_custom:{type:"duration",display:C+"ms",tooltip:"Action duration",value:C}},e.payload&&(n.payload=e.payload),n.state=t,c.addTimelineEvent({layerId:O,event:{time:Date.now(),title:e.type,groupId:e._id,subtitle:"end",data:n}})}})}))}var P=8702998,R=6710886,N=16777215,D={label:"namespaced",textColor:N,backgroundColor:R};function j(e){return e&&"root"!==e?e.split("/").slice(-2,-1)[0]:"Root"}function $(e,t){return{id:t||"root",label:j(t),tags:e.namespaced?[D]:[],children:Object.keys(e._children).map((function(c){return $(e._children[c],t+c+"/")}))}}function q(e,t,c,n){n.includes(c)&&e.push({id:n||"root",label:n.endsWith("/")?n.slice(0,n.length-1):n||"Root",tags:t.namespaced?[D]:[]}),Object.keys(t._children).forEach((function(C){q(e,t._children[C],c,n+C+"/")}))}function U(e,t,c){t="root"===c?t:t[c];var n=Object.keys(t),C={state:Object.keys(e.state).map((function(t){return{key:t,editable:!0,value:e.state[t]}}))};if(n.length){var r=F(t);C.getters=Object.keys(r).map((function(e){return{key:e.endsWith("/")?j(e):e,editable:!1,value:W((function(){return r[e]}))}}))}return C}function F(e){var t={};return Object.keys(e).forEach((function(c){var n=c.split("/");if(n.length>1){var C=t,r=n.pop();n.forEach((function(e){C[e]||(C[e]={_custom:{value:{},display:e,tooltip:"Module",abstract:!0}}),C=C[e]._custom.value})),C[r]=W((function(){return e[c]}))}else t[c]=W((function(){return e[c]}))})),t}function B(e,t){var c=t.split("/").filter((function(e){return e}));return c.reduce((function(e,n,C){var r=e[n];if(!r)throw new Error('Missing module "'+n+'" for path "'+t+'".');return C===c.length-1?r:r._children}),"root"===t?e:e.root._children)}function W(e){try{return e()}catch(t){return t}}var G=function(e,t){this.runtime=t,this._children=Object.create(null),this._rawModule=e;var c=e.state;this.state=("function"===typeof c?c():c)||{}},K={namespaced:{configurable:!0}};K.namespaced.get=function(){return!!this._rawModule.namespaced},G.prototype.addChild=function(e,t){this._children[e]=t},G.prototype.removeChild=function(e){delete this._children[e]},G.prototype.getChild=function(e){return this._children[e]},G.prototype.hasChild=function(e){return e in this._children},G.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)},G.prototype.forEachChild=function(e){z(this._children,e)},G.prototype.forEachGetter=function(e){this._rawModule.getters&&z(this._rawModule.getters,e)},G.prototype.forEachAction=function(e){this._rawModule.actions&&z(this._rawModule.actions,e)},G.prototype.forEachMutation=function(e){this._rawModule.mutations&&z(this._rawModule.mutations,e)},Object.defineProperties(G.prototype,K);var Y=function(e){this.register([],e,!1)};function J(e,t,c){if(t.update(c),c.modules)for(var n in c.modules){if(!t.getChild(n))return void 0;J(e.concat(n),t.getChild(n),c.modules[n])}}Y.prototype.get=function(e){return e.reduce((function(e,t){return e.getChild(t)}),this.root)},Y.prototype.getNamespace=function(e){var t=this.root;return e.reduce((function(e,c){return t=t.getChild(c),e+(t.namespaced?c+"/":"")}),"")},Y.prototype.update=function(e){J([],this.root,e)},Y.prototype.register=function(e,t,c){var n=this;void 0===c&&(c=!0);var C=new G(t,c);if(0===e.length)this.root=C;else{var r=this.get(e.slice(0,-1));r.addChild(e[e.length-1],C)}t.modules&&z(t.modules,(function(t,C){n.register(e.concat(C),t,c)}))},Y.prototype.unregister=function(e){var t=this.get(e.slice(0,-1)),c=e[e.length-1],n=t.getChild(c);n&&n.runtime&&t.removeChild(c)},Y.prototype.isRegistered=function(e){var t=this.get(e.slice(0,-1)),c=e[e.length-1];return!!t&&t.hasChild(c)};function X(e){return new Q(e)}var Q=function(e){var t=this;void 0===e&&(e={});var c=e.plugins;void 0===c&&(c=[]);var n=e.strict;void 0===n&&(n=!1);var C=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new Y(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=C;var r=this,i=this,s=i.dispatch,a=i.commit;this.dispatch=function(e,t){return s.call(r,e,t)},this.commit=function(e,t,c){return a.call(r,e,t,c)},this.strict=n;var o=this._modules.root.state;H(this,o,[],this._modules.root),L(this,o),c.forEach((function(e){return e(t)}))},Z={state:{configurable:!0}};Q.prototype.install=function(e,t){e.provide(t||u,this),e.config.globalProperties.$store=this;var c=void 0!==this._devtools&&this._devtools;c&&T(e,this)},Z.state.get=function(){return this._state.data},Z.state.set=function(e){0},Q.prototype.commit=function(e,t,c){var n=this,C=k(e,t,c),r=C.type,i=C.payload,s=(C.options,{type:r,payload:i}),a=this._mutations[r];a&&(this._withCommit((function(){a.forEach((function(e){e(i)}))})),this._subscribers.slice().forEach((function(e){return e(s,n.state)})))},Q.prototype.dispatch=function(e,t){var c=this,n=k(e,t),C=n.type,r=n.payload,i={type:C,payload:r},s=this._actions[C];if(s){try{this._actionSubscribers.slice().filter((function(e){return e.before})).forEach((function(e){return e.before(i,c.state)}))}catch(o){0}var a=s.length>1?Promise.all(s.map((function(e){return e(r)}))):s[0](r);return new Promise((function(e,t){a.then((function(t){try{c._actionSubscribers.filter((function(e){return e.after})).forEach((function(e){return e.after(i,c.state)}))}catch(o){0}e(t)}),(function(e){try{c._actionSubscribers.filter((function(e){return e.error})).forEach((function(t){return t.error(i,c.state,e)}))}catch(o){0}t(e)}))}))}},Q.prototype.subscribe=function(e,t){return m(e,this._subscribers,t)},Q.prototype.subscribeAction=function(e,t){var c="function"===typeof e?{before:e}:e;return m(c,this._actionSubscribers,t)},Q.prototype.watch=function(e,t,c){var C=this;return(0,n.YP)((function(){return e(C.state,C.getters)}),t,Object.assign({},c))},Q.prototype.replaceState=function(e){var t=this;this._withCommit((function(){t._state.data=e}))},Q.prototype.registerModule=function(e,t,c){void 0===c&&(c={}),"string"===typeof e&&(e=[e]),this._modules.register(e,t),H(this,this.state,e,this._modules.get(e),c.preserveState),L(this,this.state)},Q.prototype.unregisterModule=function(e){var t=this;"string"===typeof e&&(e=[e]),this._modules.unregister(e),this._withCommit((function(){var c=w(t.state,e.slice(0,-1));delete c[e[e.length-1]]})),p(this)},Q.prototype.hasModule=function(e){return"string"===typeof e&&(e=[e]),this._modules.isRegistered(e)},Q.prototype.hotUpdate=function(e){this._modules.update(e),p(this,!0)},Q.prototype._withCommit=function(e){var t=this._committing;this._committing=!0,e(),this._committing=t},Object.defineProperties(Q.prototype,Z);ce((function(e,t){var c={};return ee(t).forEach((function(t){var n=t.key,C=t.val;c[n]=function(){var t=this.$store.state,c=this.$store.getters;if(e){var n=ne(this.$store,"mapState",e);if(!n)return;t=n.context.state,c=n.context.getters}return"function"===typeof C?C.call(this,t,c):t[C]},c[n].vuex=!0})),c})),ce((function(e,t){var c={};return ee(t).forEach((function(t){var n=t.key,C=t.val;c[n]=function(){var t=[],c=arguments.length;while(c--)t[c]=arguments[c];var n=this.$store.commit;if(e){var r=ne(this.$store,"mapMutations",e);if(!r)return;n=r.context.commit}return"function"===typeof C?C.apply(this,[n].concat(t)):n.apply(this.$store,[C].concat(t))}})),c})),ce((function(e,t){var c={};return ee(t).forEach((function(t){var n=t.key,C=t.val;C=e+C,c[n]=function(){if(!e||ne(this.$store,"mapGetters",e))return this.$store.getters[C]},c[n].vuex=!0})),c})),ce((function(e,t){var c={};return ee(t).forEach((function(t){var n=t.key,C=t.val;c[n]=function(){var t=[],c=arguments.length;while(c--)t[c]=arguments[c];var n=this.$store.dispatch;if(e){var r=ne(this.$store,"mapActions",e);if(!r)return;n=r.context.dispatch}return"function"===typeof C?C.apply(this,[n].concat(t)):n.apply(this.$store,[C].concat(t))}})),c}));function ee(e){return te(e)?Array.isArray(e)?e.map((function(e){return{key:e,val:e}})):Object.keys(e).map((function(t){return{key:t,val:e[t]}})):[]}function te(e){return Array.isArray(e)||d(e)}function ce(e){return function(t,c){return"string"!==typeof t?(c=t,t=""):"/"!==t.charAt(t.length-1)&&(t+="/"),e(t,c)}}function ne(e,t,c){var n=e._modulesNamespaceMap[c];return n}},9684:function(e,t,c){"use strict";c.d(t,{Jn:function(){return W},KN:function(){return Y},Mq:function(){return K},Xd:function(){return $},ZF:function(){return G},qX:function(){return q}});var n=c(7142),C=c(5168),r=c(223);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class i{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(s(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function s(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const a="@firebase/app",o="0.7.19",l=new C.Yd("@firebase/app"),h="@firebase/app-compat",u="@firebase/analytics-compat",f="@firebase/analytics",z="@firebase/app-check-compat",d="@firebase/app-check",M="@firebase/auth",v="@firebase/auth-compat",m="@firebase/database",p="@firebase/database-compat",L="@firebase/functions",H="@firebase/functions-compat",V="@firebase/installations",g="@firebase/installations-compat",b="@firebase/messaging",y="@firebase/messaging-compat",_="@firebase/performance",S="@firebase/performance-compat",w="@firebase/remote-config",k="@firebase/remote-config-compat",E="@firebase/storage",A="@firebase/storage-compat",O="@firebase/firestore",x="@firebase/firestore-compat",I="firebase",T="9.6.9",P="[DEFAULT]",R={[a]:"fire-core",[h]:"fire-core-compat",[f]:"fire-analytics",[u]:"fire-analytics-compat",[d]:"fire-app-check",[z]:"fire-app-check-compat",[M]:"fire-auth",[v]:"fire-auth-compat",[m]:"fire-rtdb",[p]:"fire-rtdb-compat",[L]:"fire-fn",[H]:"fire-fn-compat",[V]:"fire-iid",[g]:"fire-iid-compat",[b]:"fire-fcm",[y]:"fire-fcm-compat",[_]:"fire-perf",[S]:"fire-perf-compat",[w]:"fire-rc",[k]:"fire-rc-compat",[E]:"fire-gcs",[A]:"fire-gcs-compat",[O]:"fire-fst",[x]:"fire-fst-compat","fire-js":"fire-js",[I]:"fire-js-all"},N=new Map,D=new Map;function j(e,t){try{e.container.addComponent(t)}catch(c){l.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,c)}}function $(e){const t=e.name;if(D.has(t))return l.debug(`There were multiple attempts to register component ${t}.`),!1;D.set(t,e);for(const c of N.values())j(c,e);return!0}function q(e,t){const c=e.container.getProvider("heartbeat").getImmediate({optional:!0});return c&&c.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const U={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},F=new r.LL("app","Firebase",U);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class B{constructor(e,t,c){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=c,this.container.addComponent(new n.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw F.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W=T;function G(e,t={}){if("object"!==typeof t){const e=t;t={name:e}}const c=Object.assign({name:P,automaticDataCollectionEnabled:!1},t),C=c.name;if("string"!==typeof C||!C)throw F.create("bad-app-name",{appName:String(C)});const i=N.get(C);if(i){if((0,r.vZ)(e,i.options)&&(0,r.vZ)(c,i.config))return i;throw F.create("duplicate-app",{appName:C})}const s=new n.H0(C);for(const n of D.values())s.addComponent(n);const a=new B(e,c,s);return N.set(C,a),a}function K(e=P){const t=N.get(e);if(!t)throw F.create("no-app",{appName:e});return t}function Y(e,t,c){var C;let r=null!==(C=R[e])&&void 0!==C?C:e;c&&(r+=`-${c}`);const i=r.match(/\s|\//),s=t.match(/\s|\//);if(i||s){const e=[`Unable to register library "${r}" with version "${t}":`];return i&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&e.push("and"),s&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void l.warn(e.join(" "))}$(new n.wA(`${r}-version`,(()=>({library:r,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const J="firebase-heartbeat-database",X=1,Q="firebase-heartbeat-store";let Z=null;function ee(){return Z||(Z=(0,r.X3)(J,X,((e,t)=>{switch(t){case 0:e.createObjectStore(Q)}})).catch((e=>{throw F.create("storage-open",{originalErrorMessage:e.message})}))),Z}async function te(e){try{const t=await ee();return t.transaction(Q).objectStore(Q).get(ne(e))}catch(t){throw F.create("storage-get",{originalErrorMessage:t.message})}}async function ce(e,t){try{const c=await ee(),n=c.transaction(Q,"readwrite"),C=n.objectStore(Q);return await C.put(t,ne(e)),n.complete}catch(c){throw F.create("storage-set",{originalErrorMessage:c.message})}}function ne(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ce=1024,re=2592e6;class ie{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new oe(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),c=se();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==c&&!this._heartbeatsCache.heartbeats.some((e=>e.date===c)))return this._heartbeatsCache.heartbeats.push({date:c,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),c=Date.now();return c-t<=re})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=se(),{heartbeatsToSend:t,unsentEntries:c}=ae(this._heartbeatsCache.heartbeats),n=(0,r.L)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,c.length>0?(this._heartbeatsCache.heartbeats=c,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),n}}function se(){const e=new Date;return e.toISOString().substring(0,10)}function ae(e,t=Ce){const c=[];let n=e.slice();for(const C of e){const e=c.find((e=>e.agent===C.agent));if(e){if(e.dates.push(C.date),le(c)>t){e.dates.pop();break}}else if(c.push({agent:C.agent,dates:[C.date]}),le(c)>t){c.pop();break}n=n.slice(1)}return{heartbeatsToSend:c,unsentEntries:n}}class oe{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,r.hl)()&&(0,r.eu)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await te(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const c=await this._canUseIndexedDBPromise;if(c){const c=await this.read();return ce(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:c.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const c=await this._canUseIndexedDBPromise;if(c){const c=await this.read();return ce(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:c.lastSentHeartbeatDate,heartbeats:[...c.heartbeats,...e.heartbeats]})}}}function le(e){return(0,r.L)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(e){$(new n.wA("platform-logger",(e=>new i(e)),"PRIVATE")),$(new n.wA("heartbeat",(e=>new ie(e)),"PRIVATE")),Y(a,o,e),Y(a,o,"esm2017"),Y("fire-js","")}he("")},7142:function(e,t,c){"use strict";c.d(t,{H0:function(){return o},wA:function(){return C}});c(1703);var n=c(223);class C{constructor(e,t,c){this.name=e,this.instanceFactory=t,this.type=c,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new n.BH;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const c=this.getOrInitializeService({instanceIdentifier:t});c&&e.resolve(c)}catch(c){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const c=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),n=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(c)&&!this.shouldAutoInitialize()){if(n)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:c})}catch(C){if(n)return null;throw C}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(a(e))try{this.getOrInitializeService({instanceIdentifier:r})}catch(t){}for(const[e,c]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});c.resolve(e)}catch(t){}}}}clearInstance(e=r){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=r){return this.instances.has(e)}getOptions(e=r){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,c=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(c))throw Error(`${this.name}(${c}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const n=this.getOrInitializeService({instanceIdentifier:c,options:t});for(const[C,r]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(C);c===e&&r.resolve(n)}return n}onInit(e,t){var c;const n=this.normalizeInstanceIdentifier(t),C=null!==(c=this.onInitCallbacks.get(n))&&void 0!==c?c:new Set;C.add(e),this.onInitCallbacks.set(n,C);const r=this.instances.get(n);return r&&e(r,n),()=>{C.delete(e)}}invokeOnInitCallbacks(e,t){const c=this.onInitCallbacks.get(t);if(c)for(const C of c)try{C(e,t)}catch(n){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let c=this.instances.get(e);if(!c&&this.component&&(c=this.component.instanceFactory(this.container,{instanceIdentifier:s(e),options:t}),this.instances.set(e,c),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(c,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,c)}catch(n){}return c||null}normalizeInstanceIdentifier(e=r){return this.component?this.component.multipleInstances?e:r:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function s(e){return e===r?void 0:e}function a(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new i(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},5168:function(e,t,c){"use strict";c.d(t,{Yd:function(){return o},in:function(){return C}});c(1703);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n=[];var C;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(C||(C={}));const r={debug:C.DEBUG,verbose:C.VERBOSE,info:C.INFO,warn:C.WARN,error:C.ERROR,silent:C.SILENT},i=C.INFO,s={[C.DEBUG]:"log",[C.VERBOSE]:"log",[C.INFO]:"info",[C.WARN]:"warn",[C.ERROR]:"error"},a=(e,t,...c)=>{if(t<e.logLevel)return;const n=(new Date).toISOString(),C=s[t];if(!C)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[C](`[${n}]  ${e.name}:`,...c)};class o{constructor(e){this.name=e,this._logLevel=i,this._logHandler=a,this._userLogHandler=null,n.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in C))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?r[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,C.DEBUG,...e),this._logHandler(this,C.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,C.VERBOSE,...e),this._logHandler(this,C.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,C.INFO,...e),this._logHandler(this,C.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,C.WARN,...e),this._logHandler(this,C.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,C.ERROR,...e),this._logHandler(this,C.ERROR,...e)}}}}]);
//# sourceMappingURL=chunk-vendors.be38306f.js.map