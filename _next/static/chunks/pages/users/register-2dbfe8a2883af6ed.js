(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1342],{2711:function(e){e.exports=function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="dist/",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=(o(n(1)),n(6)),i=o(a),s=o(n(7)),c=o(n(8)),l=o(n(9)),u=o(n(10)),d=o(n(11)),f=o(n(14)),m=[],p=!1,b={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},v=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e&&(p=!0),p)return m=(0,d.default)(m,b),(0,u.default)(m,b.once),m},h=function(){m=(0,f.default)(),v()},g=function(){m.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")})};e.exports={init:function(e){b=r(b,e),m=(0,f.default)();var t,n=document.all&&!window.atob;return!0===(t=b.disable)||"mobile"===t&&l.default.mobile()||"phone"===t&&l.default.phone()||"tablet"===t&&l.default.tablet()||"function"==typeof t&&!0===t()||n?g():(b.disableMutationObserver||c.default.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),b.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",b.easing),document.querySelector("body").setAttribute("data-aos-duration",b.duration),document.querySelector("body").setAttribute("data-aos-delay",b.delay),"DOMContentLoaded"===b.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?v(!0):"load"===b.startEvent?window.addEventListener(b.startEvent,function(){v(!0)}):document.addEventListener(b.startEvent,function(){v(!0)}),window.addEventListener("resize",(0,s.default)(v,b.debounceDelay,!0)),window.addEventListener("orientationchange",(0,s.default)(v,b.debounceDelay,!0)),window.addEventListener("scroll",(0,i.default)(function(){(0,u.default)(m,b.once)},b.throttleDelay)),b.disableMutationObserver||c.default.ready("[data-aos]",h),m)},refresh:v,refreshHard:h}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function n(e){var t=void 0===e?"undefined":r(e);return!!e&&("object"==t||"function"==t)}function o(e){if("number"==typeof e)return e;if("symbol"==(void 0===(t=e)?"undefined":r(t))||t&&"object"==(void 0===t?"undefined":r(t))&&v.call(t)==s)return i;if(n(e)){var t,o="function"==typeof e.valueOf?e.valueOf():e;e=n(o)?o+"":o}if("string"!=typeof e)return 0===e?e:+e;var a=u.test(e=e.replace(c,""));return a||d.test(e)?f(e.slice(2),a?2:8):l.test(e)?i:+e}var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a="Expected a function",i=NaN,s="[object Symbol]",c=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,d=/^0o[0-7]+$/i,f=parseInt,m="object"==(void 0===t?"undefined":r(t))&&t&&t.Object===Object&&t,p="object"==("undefined"==typeof self?"undefined":r(self))&&self&&self.Object===Object&&self,b=m||p||Function("return this")(),v=Object.prototype.toString,h=Math.max,g=Math.min,y=function(){return b.Date.now()};e.exports=function(e,t,r){var i=!0,s=!0;if("function"!=typeof e)throw TypeError(a);return n(r)&&(i="leading"in r?!!r.leading:i,s="trailing"in r?!!r.trailing:s),function(e,t,r){function i(t){var n=d,o=f;return d=f=void 0,w=t,p=e.apply(o,n)}function s(e){var n=e-v,o=e-w;return void 0===v||n>=t||n<0||j&&o>=m}function c(){var e,n,o,r=y();return s(r)?l(r):void(b=setTimeout(c,(e=r-v,n=r-w,o=t-e,j?g(o,m-n):o)))}function l(e){return b=void 0,k&&d?i(e):(d=f=void 0,p)}function u(){var e,n=y(),o=s(n);if(d=arguments,f=this,v=n,o){if(void 0===b)return w=e=v,b=setTimeout(c,t),x?i(e):p;if(j)return b=setTimeout(c,t),i(v)}return void 0===b&&(b=setTimeout(c,t)),p}var d,f,m,p,b,v,w=0,x=!1,j=!1,k=!0;if("function"!=typeof e)throw TypeError(a);return t=o(t)||0,n(r)&&(x=!!r.leading,m=(j="maxWait"in r)?h(o(r.maxWait)||0,t):m,k="trailing"in r?!!r.trailing:k),u.cancel=function(){void 0!==b&&clearTimeout(b),w=0,d=v=f=b=void 0},u.flush=function(){return void 0===b?p:l(y())},u}(e,t,{leading:i,maxWait:t,trailing:s})}}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function n(e){var t=void 0===e?"undefined":r(e);return!!e&&("object"==t||"function"==t)}function o(e){if("number"==typeof e)return e;if("symbol"==(void 0===(t=e)?"undefined":r(t))||t&&"object"==(void 0===t?"undefined":r(t))&&b.call(t)==i)return a;if(n(e)){var t,o="function"==typeof e.valueOf?e.valueOf():e;e=n(o)?o+"":o}if("string"!=typeof e)return 0===e?e:+e;var f=l.test(e=e.replace(s,""));return f||u.test(e)?d(e.slice(2),f?2:8):c.test(e)?a:+e}var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=NaN,i="[object Symbol]",s=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,u=/^0o[0-7]+$/i,d=parseInt,f="object"==(void 0===t?"undefined":r(t))&&t&&t.Object===Object&&t,m="object"==("undefined"==typeof self?"undefined":r(self))&&self&&self.Object===Object&&self,p=f||m||Function("return this")(),b=Object.prototype.toString,v=Math.max,h=Math.min,g=function(){return p.Date.now()};e.exports=function(e,t,r){function a(t){var n=u,o=d;return u=d=void 0,y=t,m=e.apply(o,n)}function i(e){var n=e-b,o=e-y;return void 0===b||n>=t||n<0||x&&o>=f}function s(){var e,n,o,r=g();return i(r)?c(r):void(p=setTimeout(s,(e=r-b,n=r-y,o=t-e,x?h(o,f-n):o)))}function c(e){return p=void 0,j&&u?a(e):(u=d=void 0,m)}function l(){var e,n=g(),o=i(n);if(u=arguments,d=this,b=n,o){if(void 0===p)return y=e=b,p=setTimeout(s,t),w?a(e):m;if(x)return p=setTimeout(s,t),a(b)}return void 0===p&&(p=setTimeout(s,t)),m}var u,d,f,m,p,b,y=0,w=!1,x=!1,j=!0;if("function"!=typeof e)throw TypeError("Expected a function");return t=o(t)||0,n(r)&&(w=!!r.leading,f=(x="maxWait"in r)?v(o(r.maxWait)||0,t):f,j="trailing"in r?!!r.trailing:j),l.cancel=function(){void 0!==p&&clearTimeout(p),y=0,u=b=d=p=void 0},l.flush=function(){return void 0===p?m:c(g())},l}}).call(t,function(){return this}())},function(e,t){"use strict";function n(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function o(e){e&&e.forEach(function(e){var t=Array.prototype.slice.call(e.addedNodes),n=Array.prototype.slice.call(e.removedNodes);if(function e(t){var n=void 0,o=void 0;for(n=0;n<t.length;n+=1)if((o=t[n]).dataset&&o.dataset.aos||o.children&&e(o.children))return!0;return!1}(t.concat(n)))return r()})}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){};t.default={isSupported:function(){return!!n()},ready:function(e,t){var a=window.document,i=new(n())(o);r=t,i.observe(a.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}}},function(e,t){"use strict";function n(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,a=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,i=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,s=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,c=function(){function e(){!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,e)}return o(e,[{key:"phone",value:function(){var e=n();return!(!r.test(e)&&!a.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=n();return!(!i.test(e)&&!s.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new c},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,n){var o=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):void 0===o||"false"!==o&&(n||"true"===o)||e.node.classList.remove("aos-animate")};t.default=function(e,t){var o=window.pageYOffset,r=window.innerHeight;e.forEach(function(e,a){n(e,r+o,t)})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=(o=n(12))&&o.__esModule?o:{default:o};t.default=function(e,t){return e.forEach(function(e,n){e.node.classList.add("aos-init"),e.position=(0,r.default)(e.node,t.offset)}),e}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=(o=n(13))&&o.__esModule?o:{default:o};t.default=function(e,t){var n=0,o=0,a=window.innerHeight,i={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(i.offset&&!isNaN(i.offset)&&(o=parseInt(i.offset)),i.anchor&&document.querySelectorAll(i.anchor)&&(e=document.querySelectorAll(i.anchor)[0]),n=(0,r.default)(e).top,i.anchorPlacement){case"top-bottom":break;case"center-bottom":n+=e.offsetHeight/2;break;case"bottom-bottom":n+=e.offsetHeight;break;case"top-center":n+=a/2;break;case"bottom-center":n+=a/2+e.offsetHeight;break;case"center-center":n+=a/2+e.offsetHeight/2;break;case"top-top":n+=a;break;case"bottom-top":n+=e.offsetHeight+a;break;case"center-top":n+=e.offsetHeight/2+a}return i.anchorPlacement||i.offset||isNaN(t)||(o=t),n+o}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,function(e){return{node:e}})}}])},75068:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/users/register",function(){return n(90061)}])},90061:function(e,t,n){"use strict";n.r(t);var o=n(85893),r=n(67294),a=n(28738),i=n(41664),s=n.n(i),c=n(99811),l=n(45007),u=n(89387),d=n(11163);function f(){let[e,t]=(0,r.useState)(""),[n,i]=(0,r.useState)(""),[l,u]=(0,r.useState)(""),[f,m]=(0,r.useState)(""),[p,b]=(0,r.useState)(""),[v,h]=(0,r.useState)(1);(0,d.useRouter)();let g=async t=>{if(t.preventDefault(),(await c.Z.fetch("*[_type == 'user' && (username == $username || phonenumber == $phoneNumber)]",{username:e,phoneNumber:l})).length>0){alert("Username or phone number already exists. Please use a different one.");return}let o=await c.Z.fetch("*[_type == 'order' && phone == $phoneNumber]",{phoneNumber:l});if(o.length>0){let{username:t,email:r,phone:a,location:i,longitude:s,latitude:u}=o[0];try{await c.Z.create({_type:"user",username:e,email:n,password:p,phonenumber:l,username:t,email:r,password:p,phonenumber:a,locations:[{_key:new Date().toISOString(),title:i,locationname:i,latitude:u,longitude:s}]}),alert("User Created")}catch(e){throw console.error("Error creating user:",e),Error("Failed to create user")}}else alert("No Order found relevent to that number you hava to register first")},y=()=>{"0000"==f?h(3):alert("OTP incorrect ")};return(0,o.jsx)(a.Z,{children:(0,o.jsx)("div",{className:"content",children:(0,o.jsx)("div",{className:"container",children:(0,o.jsx)("div",{className:"row",children:(0,o.jsx)("div",{className:"col-md-6 col-lg-6 mx-auto",children:(0,o.jsxs)("div",{className:"login-wrap",children:[(0,o.jsx)("div",{className:"login-header",children:(0,o.jsx)("h3",{children:"User Signup"})}),(()=>{switch(v){case 1:return(0,o.jsxs)("form",{onSubmit:e=>{e.preventDefault(),h(2)},children:[(0,o.jsxs)("div",{className:"form-group",children:[(0,o.jsx)("label",{className:"col-form-label",children:"Phone Number"}),(0,o.jsx)("div",{className:"form-group",children:(0,o.jsx)("input",{type:"text",className:"form-control form-control-lg group_formcontrol",id:"phone",name:"phone",placeholder:"(256) 789-6253",onChange:e=>u(e.target.value)})})]}),(0,o.jsx)("button",{className:"btn btn-primary w-100 login-btn",type:"submit",children:"Get OTP"}),(0,o.jsxs)("div",{className:"login-or",children:[(0,o.jsx)("span",{className:"or-line"}),(0,o.jsx)("span",{className:"span-or",children:"Or, log in with your email"})]}),(0,o.jsxs)("p",{className:"no-acc",children:["Already have an account ? ",(0,o.jsx)(s(),{href:"/users/signin",children:" Sign In"})]})]});case 2:return(0,o.jsxs)("form",{onSubmit:e=>{e.preventDefault(),y()},children:[(0,o.jsxs)("div",{className:"form-group",children:[(0,o.jsx)("label",{className:"col-form-label",children:"Enter your OTP"}),(0,o.jsx)("div",{className:"form-group",children:(0,o.jsx)("input",{type:"number",className:"form-control form-control-lg group_formcontrol",id:"otp",name:"otp",placeholder:"Enter OTP",onChange:e=>m(e.target.value)})})]}),(0,o.jsx)("button",{className:"btn btn-primary w-100 login-btn",type:"submit",children:"Signup"}),(0,o.jsxs)("div",{className:"login-or",children:[(0,o.jsx)("span",{className:"or-line"}),(0,o.jsx)("span",{className:"span-or",children:"Or, log in with your email"})]}),(0,o.jsxs)("p",{className:"no-acc",children:["Already have an account ? ",(0,o.jsx)(s(),{href:"/users/signin",children:" Sign In"})]})]});case 3:return(0,o.jsxs)("form",{onSubmit:g,children:[(0,o.jsxs)("div",{className:"form-group",children:[(0,o.jsxs)("label",{className:"col-form-label d-block",children:["Password",(0,o.jsx)("span",{className:"brief-bio float-end",children:"Must be 8 Characters at Least"})]}),(0,o.jsxs)("div",{className:"pass-group",children:[(0,o.jsx)("input",{type:"password",className:"form-control pass-input",placeholder:"*************",onChange:e=>b(e.target.value)}),(0,o.jsx)("span",{className:"toggle-password feather-eye-off"})]})]}),(0,o.jsx)("button",{className:"btn btn-primary w-100 login-btn",type:"submit",children:"Signup"}),(0,o.jsxs)("div",{className:"login-or",children:[(0,o.jsx)("span",{className:"or-line"}),(0,o.jsx)("span",{className:"span-or",children:"Or, log in with your email"})]}),(0,o.jsxs)("p",{className:"no-acc",children:["Already have an account ? ",(0,o.jsx)(s(),{href:"/users/signin",children:" Sign In"})]})]});default:return null}})()]})})})})})})}t.default=()=>(0,o.jsx)(l.zt,{store:u.Z,children:(0,o.jsx)(f,{})})},90305:function(){},35280:function(){},56776:function(){},9008:function(e,t,n){e.exports=n(13709)},11163:function(e,t,n){e.exports=n(94546)}},function(e){e.O(0,[8764,5675,9668,4440,1664,433,2010,8738,2888,9774,179],function(){return e(e.s=75068)}),_N_E=e.O()}]);