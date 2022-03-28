(function(){"use strict";var t={7874:function(t,e,a){var n=a(3396),r=a(9242);function o(t,e,a,r,o,i){const c=(0,n.up)("NavbarComponent"),u=(0,n.up)("router-view"),s=(0,n.up)("FooterComponent");return(0,n.wg)(),(0,n.iD)("main",null,[(0,n._)("header",null,[(0,n.Wm)(c)]),(0,n.Wm)(u),(0,n._)("footer",null,[(0,n.Wm)(s)])])}var i=a(7139),c=a(4706);const u=t=>((0,n.dD)("data-v-449d8ec6"),t=t(),(0,n.Cn)(),t),s={class:"top-nav"},l=u((()=>(0,n._)("img",{src:c,alt:""},null,-1))),d={class:"nav-icon"},f=u((()=>(0,n._)("i",{class:"fas fa-shopping-cart"},null,-1))),p={class:"cartQuantity"},m=u((()=>(0,n._)("i",{class:"fa-solid fa-user"},null,-1))),h=u((()=>(0,n._)("i",{class:"fa-solid fa-comment"},null,-1))),v={id:"nav"},g=u((()=>(0,n._)("img",{src:c,alt:""},null,-1))),b={class:"category"},y=(0,n.Uk)("全部商品"),w=(0,n.Uk)("上衣"),_=(0,n.Uk)("褲子"),S=(0,n.Uk)("裙裝");function C(t,e,a,r,o,c){const u=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",s,[(0,n.Wm)(u,{to:"/",class:"top-nav-img"},{default:(0,n.w5)((()=>[l])),_:1}),(0,n._)("div",d,[(0,n.Wm)(u,{class:(0,i.C_)({active:"Cart"===t.$router.name}),to:"/cart"},{default:(0,n.w5)((()=>[f,(0,n._)("span",p,(0,i.zw)(c.cart_total),1)])),_:1},8,["class"]),(0,n.Wm)(u,{class:(0,i.C_)(t.Sign_in),to:"/login"},{default:(0,n.w5)((()=>[m])),_:1},8,["class"]),(0,n.Wm)(u,{class:(0,i.C_)(t.Sign_in),to:"/login"},{default:(0,n.w5)((()=>[h])),_:1},8,["class"])])]),(0,n._)("div",v,[(0,n._)("div",null,[(0,n.Wm)(u,{to:"/"},{default:(0,n.w5)((()=>[g])),_:1})]),(0,n._)("div",b,[(0,n.Wm)(u,{to:"/products"},{default:(0,n.w5)((()=>[y])),_:1}),(0,n.Wm)(u,{to:"/tops"},{default:(0,n.w5)((()=>[w])),_:1}),(0,n.Wm)(u,{to:"/pants"},{default:(0,n.w5)((()=>[_])),_:1}),(0,n.Wm)(u,{to:"/dress"},{default:(0,n.w5)((()=>[S])),_:1})])])],64)}var k={computed:{cart_total(){return this.$store.getters.cartTotal}}},E=a(89);const U=(0,E.Z)(k,[["render",C],["__scopeId","data-v-449d8ec6"]]);var O=U;const T={id:"footer"},A=(0,n.uE)('<p data-v-5599aa0b>© 2021 RayRay Stephanie.</p><div class="icon" data-v-5599aa0b><div data-v-5599aa0b><a href="" data-v-5599aa0b><i class="fa-brands fa-instagram" data-v-5599aa0b></i></a></div><div data-v-5599aa0b><a href="" data-v-5599aa0b><i class="fab fa-facebook-f fa-lg" data-v-5599aa0b></i></a></div><div data-v-5599aa0b><a href="" data-v-5599aa0b><i class="fa-solid fa-store" data-v-5599aa0b></i></a></div></div>',2),R=[A];function j(t,e){return(0,n.wg)(),(0,n.iD)("div",T,R)}const I={},W=(0,E.Z)(I,[["render",j],["__scopeId","data-v-5599aa0b"]]);var F=W,N=a(9749),q={components:{NavbarComponent:O,FooterComponent:F},mounted(){this.$store.commit("updateCartFromLocalStorage")},setup(){const t=(0,N.oR)();(0,n.wF)((()=>{t.dispatch("fetchUser")}))}};const L=(0,E.Z)(q,[["render",o],["__scopeId","data-v-4a305e91"]]);var P=L,x=a(678),D=a(4275),M=a(2330);const Z={apiKey:"AIzaSyAeUX-kFewkaE3vJSoLsZgExwfvvOfijFI",authDomain:"vue-cart-fire-auth.firebaseapp.com",projectId:"vue-cart-fire-auth",storageBucket:"vue-cart-fire-auth.appspot.com",messagingSenderId:"244243796230",appId:"1:244243796230:web:826a2b036b444115258e87"},B=(0,D.ZF)(Z),H=(0,M.v0)(B),J=[{path:"/",name:"Home",component:()=>a.e(526).then(a.bind(a,1526))},{path:"/products",name:"Products",component:()=>a.e(880).then(a.bind(a,7880))},{path:"/dress",name:"Dress",component:()=>a.e(84).then(a.bind(a,9084))},{path:"/pants",name:"Pants",component:()=>a.e(354).then(a.bind(a,7354))},{path:"/tops",name:"Tops",component:()=>a.e(283).then(a.bind(a,283))},{path:"/cart",name:"Cart",component:()=>a.e(393).then(a.bind(a,4393)),meta:{requiresAuth:!0}},{path:"/products/:productId",name:"product",component:()=>a.e(851).then(a.bind(a,8851))},{path:"/login",name:"login",component:()=>a.e(128).then(a.bind(a,7128))},{path:"/register",name:"register",component:()=>a.e(304).then(a.bind(a,304))}],$=(0,x.p7)({history:(0,x.PO)("/cart-vue-practice/dist/"),routes:J});$.beforeEach(((t,e,a)=>{"/login"===t.path&&H.currentUser?a("/"):!t.matched.some((t=>t.meta.requiresAuth))||H.currentUser?a():a("/login")}));var z=$;function K(t){localStorage.setItem("cart",JSON.stringify(t))}var Q=(0,N.MT)({state:{cart:[],user:null},getters:{productQuantity:t=>e=>{const a=t.cart.find((t=>t.id===e.id));return a?a.quantity:null},cartItems:t=>t.cart,cartTotal:t=>t.cart.reduce(((t,e)=>t+e.quantity),0),priceTotal:t=>t.cart.reduce(((t,e)=>t+e.price*e.quantity),0)},mutations:{addToCart(t,e){let a=t.cart.find((t=>t.id===e.id));a?a.quantity++:t.cart.push({...e,quantity:1}),K(t.cart)},removeFromCart(t,e){let a=t.cart.find((t=>t.id===e.id));a&&(a.quantity>1?a.quantity--:t.cart=t.cart.filter((t=>t.id!==e.id))),K(t.cart)},updateCartFromLocalStorage(t){const e=localStorage.getItem("cart");e&&(t.cart=JSON.parse(e))},SET_USER(t,e){t.user=e},CLEAR_USER(t){t.user=null}},actions:{async login({commit:t},e){const{email:a,password:n}=e;try{await(0,M.e5)(H,a,n)}catch(r){switch(r.code){case"auth/user-not-found":alert("User not found");break;case"auth/wrong-password":alert("Wrong password");break;default:alert("Something went wrong")}return}t("SET_USER",H.currentUser),z.push("/")},async register({commit:t},e){const{email:a,password:n}=e;try{await(0,M.Xb)(H,a,n)}catch(r){switch(r.code){case"auth/email-already-in-use":alert("Email already in use");break;case"auth/invalid-email":alert("Invalid email");break;case"auth/operation-not-allowed":alert("Operation not allowed");break;default:alert("Something went wrong")}return}t("SET_USER",H.currentUser),z.push("/")},async logout({commit:t}){await(0,M.w7)(H),t("CLEAR_USER"),z.push("/login")},fetchUser({commit:t}){H.onAuthStateChanged((async e=>{null===e?t("CLEAR_USER"):(t("SET_USER",e),z.isReady()&&"/login"===z.currentRoute.value.path&&z.push("/"))}))}},modules:{}});a(1129),a(8052);(0,r.ri)(P).use(Q).use(z).mount("#app"),(0,n.Wm)("style",null,[(0,n.Uk)("@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Noto+Sans+TC:wght@300;400;500;700&display=swap');")])},4706:function(t,e,a){t.exports=a.p+"img/logo-circle.783c83e7.png"}},e={};function a(n){var r=e[n];if(void 0!==r)return r.exports;var o=e[n]={exports:{}};return t[n].call(o.exports,o,o.exports,a),o.exports}a.m=t,function(){var t=[];a.O=function(e,n,r,o){if(!n){var i=1/0;for(l=0;l<t.length;l++){n=t[l][0],r=t[l][1],o=t[l][2];for(var c=!0,u=0;u<n.length;u++)(!1&o||i>=o)&&Object.keys(a.O).every((function(t){return a.O[t](n[u])}))?n.splice(u--,1):(c=!1,o<i&&(i=o));if(c){t.splice(l--,1);var s=r();void 0!==s&&(e=s)}}return e}o=o||0;for(var l=t.length;l>0&&t[l-1][2]>o;l--)t[l]=t[l-1];t[l]=[n,r,o]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var n in e)a.o(e,n)&&!a.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){a.f={},a.e=function(t){return Promise.all(Object.keys(a.f).reduce((function(e,n){return a.f[n](t,e),e}),[]))}}(),function(){a.u=function(t){return"js/"+t+"."+{84:"20b4ed6d",128:"eb8fd5dd",283:"c5fb1f83",304:"b1194f5c",354:"83004e92",393:"2471c96d",526:"46a5fec3",851:"091d5a1f",880:"2bb131d9"}[t]+".js"}}(),function(){a.miniCssF=function(t){return"css/"+t+"."+{84:"7b9f9053",128:"4e9f8a4f",283:"d8ffee1d",304:"50e21ae0",354:"b01ee5ad",393:"256b1ed1",526:"700a0124",851:"77cc208e",880:"4f53e336"}[t]+".css"}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="cart:";a.l=function(n,r,o,i){if(t[n])t[n].push(r);else{var c,u;if(void 0!==o)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var d=s[l];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==e+o){c=d;break}}c||(u=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,a.nc&&c.setAttribute("nonce",a.nc),c.setAttribute("data-webpack",e+o),c.src=n),t[n]=[r];var f=function(e,a){c.onerror=c.onload=null,clearTimeout(p);var r=t[n];if(delete t[n],c.parentNode&&c.parentNode.removeChild(c),r&&r.forEach((function(t){return t(a)})),e)return e(a)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=f.bind(null,c.onerror),c.onload=f.bind(null,c.onload),u&&document.head.appendChild(c)}}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.p="/cart-vue-practice/dist/"}(),function(){var t=function(t,e,a,n){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var o=function(o){if(r.onerror=r.onload=null,"load"===o.type)a();else{var i=o&&("load"===o.type?"missing":o.type),c=o&&o.target&&o.target.href||e,u=new Error("Loading CSS chunk "+t+" failed.\n("+c+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=c,r.parentNode.removeChild(r),n(u)}};return r.onerror=r.onload=o,r.href=e,document.head.appendChild(r),r},e=function(t,e){for(var a=document.getElementsByTagName("link"),n=0;n<a.length;n++){var r=a[n],o=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(o===t||o===e))return r}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){r=i[n],o=r.getAttribute("data-href");if(o===t||o===e)return r}},n=function(n){return new Promise((function(r,o){var i=a.miniCssF(n),c=a.p+i;if(e(i,c))return r();t(n,c,r,o)}))},r={143:0};a.f.miniCss=function(t,e){var a={84:1,128:1,283:1,304:1,354:1,393:1,526:1,851:1,880:1};r[t]?e.push(r[t]):0!==r[t]&&a[t]&&e.push(r[t]=n(t).then((function(){r[t]=0}),(function(e){throw delete r[t],e})))}}(),function(){var t={143:0};a.f.j=function(e,n){var r=a.o(t,e)?t[e]:void 0;if(0!==r)if(r)n.push(r[2]);else{var o=new Promise((function(a,n){r=t[e]=[a,n]}));n.push(r[2]=o);var i=a.p+a.u(e),c=new Error,u=function(n){if(a.o(t,e)&&(r=t[e],0!==r&&(t[e]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;c.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",c.name="ChunkLoadError",c.type=o,c.request=i,r[1](c)}};a.l(i,u,"chunk-"+e,e)}},a.O.j=function(e){return 0===t[e]};var e=function(e,n){var r,o,i=n[0],c=n[1],u=n[2],s=0;if(i.some((function(e){return 0!==t[e]}))){for(r in c)a.o(c,r)&&(a.m[r]=c[r]);if(u)var l=u(a)}for(e&&e(n);s<i.length;s++)o=i[s],a.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return a.O(l)},n=self["webpackChunkcart"]=self["webpackChunkcart"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(7874)}));n=a.O(n)})();
//# sourceMappingURL=app.2f674afb.js.map