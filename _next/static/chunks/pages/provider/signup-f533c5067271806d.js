(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3387],{2711:function(e){e.exports=function(e){function t(n){if(o[n])return o[n].exports;var a=o[n]={exports:{},id:n,loaded:!1};return e[n].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var o={};return t.m=e,t.c=o,t.p="dist/",t(0)}([function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},i=(n(o(1)),o(6)),r=n(i),s=n(o(7)),c=n(o(8)),l=n(o(9)),u=n(o(10)),d=n(o(11)),f=n(o(14)),m=[],p=!1,b={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},v=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e&&(p=!0),p)return m=(0,d.default)(m,b),(0,u.default)(m,b.once),m},h=function(){m=(0,f.default)(),v()},g=function(){m.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")})};e.exports={init:function(e){b=a(b,e),m=(0,f.default)();var t,o=document.all&&!window.atob;return!0===(t=b.disable)||"mobile"===t&&l.default.mobile()||"phone"===t&&l.default.phone()||"tablet"===t&&l.default.tablet()||"function"==typeof t&&!0===t()||o?g():(b.disableMutationObserver||c.default.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),b.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",b.easing),document.querySelector("body").setAttribute("data-aos-duration",b.duration),document.querySelector("body").setAttribute("data-aos-delay",b.delay),"DOMContentLoaded"===b.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?v(!0):"load"===b.startEvent?window.addEventListener(b.startEvent,function(){v(!0)}):document.addEventListener(b.startEvent,function(){v(!0)}),window.addEventListener("resize",(0,s.default)(v,b.debounceDelay,!0)),window.addEventListener("orientationchange",(0,s.default)(v,b.debounceDelay,!0)),window.addEventListener("scroll",(0,r.default)(function(){(0,u.default)(m,b.once)},b.throttleDelay)),b.disableMutationObserver||c.default.ready("[data-aos]",h),m)},refresh:v,refreshHard:h}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function o(e){var t=void 0===e?"undefined":a(e);return!!e&&("object"==t||"function"==t)}function n(e){if("number"==typeof e)return e;if("symbol"==(void 0===(t=e)?"undefined":a(t))||t&&"object"==(void 0===t?"undefined":a(t))&&v.call(t)==s)return r;if(o(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=o(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;var i=u.test(e=e.replace(c,""));return i||d.test(e)?f(e.slice(2),i?2:8):l.test(e)?r:+e}var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i="Expected a function",r=NaN,s="[object Symbol]",c=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,d=/^0o[0-7]+$/i,f=parseInt,m="object"==(void 0===t?"undefined":a(t))&&t&&t.Object===Object&&t,p="object"==("undefined"==typeof self?"undefined":a(self))&&self&&self.Object===Object&&self,b=m||p||Function("return this")(),v=Object.prototype.toString,h=Math.max,g=Math.min,y=function(){return b.Date.now()};e.exports=function(e,t,a){var r=!0,s=!0;if("function"!=typeof e)throw TypeError(i);return o(a)&&(r="leading"in a?!!a.leading:r,s="trailing"in a?!!a.trailing:s),function(e,t,a){function r(t){var o=d,n=f;return d=f=void 0,w=t,p=e.apply(n,o)}function s(e){var o=e-v,n=e-w;return void 0===v||o>=t||o<0||j&&n>=m}function c(){var e,o,n,a=y();return s(a)?l(a):void(b=setTimeout(c,(e=a-v,o=a-w,n=t-e,j?g(n,m-o):n)))}function l(e){return b=void 0,k&&d?r(e):(d=f=void 0,p)}function u(){var e,o=y(),n=s(o);if(d=arguments,f=this,v=o,n){if(void 0===b)return w=e=v,b=setTimeout(c,t),x?r(e):p;if(j)return b=setTimeout(c,t),r(v)}return void 0===b&&(b=setTimeout(c,t)),p}var d,f,m,p,b,v,w=0,x=!1,j=!1,k=!0;if("function"!=typeof e)throw TypeError(i);return t=n(t)||0,o(a)&&(x=!!a.leading,m=(j="maxWait"in a)?h(n(a.maxWait)||0,t):m,k="trailing"in a?!!a.trailing:k),u.cancel=function(){void 0!==b&&clearTimeout(b),w=0,d=v=f=b=void 0},u.flush=function(){return void 0===b?p:l(y())},u}(e,t,{leading:r,maxWait:t,trailing:s})}}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function o(e){var t=void 0===e?"undefined":a(e);return!!e&&("object"==t||"function"==t)}function n(e){if("number"==typeof e)return e;if("symbol"==(void 0===(t=e)?"undefined":a(t))||t&&"object"==(void 0===t?"undefined":a(t))&&b.call(t)==r)return i;if(o(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=o(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;var f=l.test(e=e.replace(s,""));return f||u.test(e)?d(e.slice(2),f?2:8):c.test(e)?i:+e}var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=NaN,r="[object Symbol]",s=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,u=/^0o[0-7]+$/i,d=parseInt,f="object"==(void 0===t?"undefined":a(t))&&t&&t.Object===Object&&t,m="object"==("undefined"==typeof self?"undefined":a(self))&&self&&self.Object===Object&&self,p=f||m||Function("return this")(),b=Object.prototype.toString,v=Math.max,h=Math.min,g=function(){return p.Date.now()};e.exports=function(e,t,a){function i(t){var o=u,n=d;return u=d=void 0,y=t,m=e.apply(n,o)}function r(e){var o=e-b,n=e-y;return void 0===b||o>=t||o<0||x&&n>=f}function s(){var e,o,n,a=g();return r(a)?c(a):void(p=setTimeout(s,(e=a-b,o=a-y,n=t-e,x?h(n,f-o):n)))}function c(e){return p=void 0,j&&u?i(e):(u=d=void 0,m)}function l(){var e,o=g(),n=r(o);if(u=arguments,d=this,b=o,n){if(void 0===p)return y=e=b,p=setTimeout(s,t),w?i(e):m;if(x)return p=setTimeout(s,t),i(b)}return void 0===p&&(p=setTimeout(s,t)),m}var u,d,f,m,p,b,y=0,w=!1,x=!1,j=!0;if("function"!=typeof e)throw TypeError("Expected a function");return t=n(t)||0,o(a)&&(w=!!a.leading,f=(x="maxWait"in a)?v(n(a.maxWait)||0,t):f,j="trailing"in a?!!a.trailing:j),l.cancel=function(){void 0!==p&&clearTimeout(p),y=0,u=b=d=p=void 0},l.flush=function(){return void 0===p?m:c(g())},l}}).call(t,function(){return this}())},function(e,t){"use strict";function o(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function n(e){e&&e.forEach(function(e){var t=Array.prototype.slice.call(e.addedNodes),o=Array.prototype.slice.call(e.removedNodes);if(function e(t){var o=void 0,n=void 0;for(o=0;o<t.length;o+=1)if((n=t[o]).dataset&&n.dataset.aos||n.children&&e(n.children))return!0;return!1}(t.concat(o)))return a()})}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){};t.default={isSupported:function(){return!!o()},ready:function(e,t){var i=window.document,r=new(o())(n);a=t,r.observe(i.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}}},function(e,t){"use strict";function o(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),a=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,i=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,r=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,s=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,c=function(){function e(){!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,e)}return n(e,[{key:"phone",value:function(){var e=o();return!(!a.test(e)&&!i.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=o();return!(!r.test(e)&&!s.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new c},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e,t,o){var n=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):void 0===n||"false"!==n&&(o||"true"===n)||e.node.classList.remove("aos-animate")};t.default=function(e,t){var n=window.pageYOffset,a=window.innerHeight;e.forEach(function(e,i){o(e,a+n,t)})}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,a=(n=o(12))&&n.__esModule?n:{default:n};t.default=function(e,t){return e.forEach(function(e,o){e.node.classList.add("aos-init"),e.position=(0,a.default)(e.node,t.offset)}),e}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,a=(n=o(13))&&n.__esModule?n:{default:n};t.default=function(e,t){var o=0,n=0,i=window.innerHeight,r={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(r.offset&&!isNaN(r.offset)&&(n=parseInt(r.offset)),r.anchor&&document.querySelectorAll(r.anchor)&&(e=document.querySelectorAll(r.anchor)[0]),o=(0,a.default)(e).top,r.anchorPlacement){case"top-bottom":break;case"center-bottom":o+=e.offsetHeight/2;break;case"bottom-bottom":o+=e.offsetHeight;break;case"top-center":o+=i/2;break;case"bottom-center":o+=i/2+e.offsetHeight;break;case"center-center":o+=i/2+e.offsetHeight/2;break;case"top-top":o+=i;break;case"bottom-top":o+=e.offsetHeight+i;break;case"center-top":o+=e.offsetHeight/2+i}return r.anchorPlacement||r.offset||isNaN(t)||(n=t),o+n}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){for(var t=0,o=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),o+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:o,left:t}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,function(e){return{node:e}})}}])},99074:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/provider/signup",function(){return o(2686)}])},2686:function(e,t,o){"use strict";o.r(t);var n=o(85893),a=o(67294),i=o(28738),r=o(25675),s=o.n(r),c=o(41664),l=o.n(c),u=o(99811),d=o(45007),f=o(89387),m=o(11163);function p(){let[e,t]=(0,a.useState)(""),[o,r]=(0,a.useState)(""),[c,d]=(0,a.useState)(""),[f,p]=(0,a.useState)(""),b=(0,m.useRouter)(),v=async t=>{if(t.preventDefault(),!e||!o||!f||!c){alert("Please fill in all fields");return}let n=await u.Z.fetch("*[_type == 'provider' && email == $email]",{email:o}),a=await u.Z.fetch("*[_type == 'provider' && username == $username]",{username:e}),i=await u.Z.fetch("*[_type == 'provider' && phonenumber == $phoneNumber]",{phoneNumber:c});if(n.length>0){alert("Email already exists. Please use a different email.");return}if(a.length>0){alert("Username already exists. Please use a different username.");return}if(i.length>0){alert("Phone number already exists. Please use a different phone number.");return}try{await u.Z.create({_type:"provider",name:e,email:o,password:f,phone:c}),alert("Provider Created Successfully"),b.push("/provider/login")}catch(e){throw console.error("Error creating user:",e),Error("Failed to create user")}};return(0,n.jsx)(i.Z,{children:(0,n.jsx)("div",{className:"content",children:(0,n.jsx)("div",{className:"container",children:(0,n.jsx)("div",{className:"row",children:(0,n.jsx)("div",{className:"col-md-6 col-lg-6 mx-auto",children:(0,n.jsxs)("div",{className:"login-wrap",children:[(0,n.jsx)("div",{className:"login-header",children:(0,n.jsx)("h3",{children:"User Signup"})}),(0,n.jsxs)("form",{onSubmit:v,children:[(0,n.jsxs)("div",{className:"form-group",children:[(0,n.jsx)("label",{className:"col-form-label",children:"Name"}),(0,n.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter your name",onChange:e=>t(e.target.value)})]}),(0,n.jsxs)("div",{className:"form-group",children:[(0,n.jsx)("label",{className:"col-form-label",children:"Email"}),(0,n.jsx)("input",{type:"email",className:"form-control",placeholder:"johndoe@example.com",onChange:e=>r(e.target.value)})]}),(0,n.jsx)("div",{className:"row",children:(0,n.jsxs)("div",{className:"col-md-12",children:[(0,n.jsx)("label",{className:"col-form-label",children:"Phone Number"}),(0,n.jsx)("div",{className:"form-group",children:(0,n.jsx)("input",{type:"text",className:"form-control form-control-lg group_formcontrol",id:"phone",name:"phone",placeholder:"(256) 789-6253",onChange:e=>d(e.target.value)})})]})}),(0,n.jsxs)("div",{className:"form-group",children:[(0,n.jsxs)("label",{className:"col-form-label d-block",children:["Password",(0,n.jsx)("span",{className:"brief-bio float-end",children:"Must be 8 Characters at Least"})]}),(0,n.jsxs)("div",{className:"pass-group",children:[(0,n.jsx)("input",{type:"password",className:"form-control pass-input",placeholder:"*************",onChange:e=>p(e.target.value)}),(0,n.jsx)("span",{className:"toggle-password feather-eye-off"})]})]}),(0,n.jsx)("button",{className:"btn btn-primary w-100 login-btn",type:"submit",children:"Signup"}),(0,n.jsxs)("div",{className:"login-or",children:[(0,n.jsx)("span",{className:"or-line"}),(0,n.jsx)("span",{className:"span-or",children:"Or, log in with your email"})]}),(0,n.jsxs)("div",{className:"social-login",children:[(0,n.jsxs)("a",{href:"#",className:"btn btn-google w-100",children:[(0,n.jsx)(s(),{width:30,height:30,src:"/assets/img/icons/google.svg",className:"me-2",alt:"img"}),"Log in with Google"]}),(0,n.jsxs)("a",{href:"#",className:"btn btn-google w-100",children:[(0,n.jsx)(s(),{width:30,height:30,src:"/assets/img/icons/fb.svg",className:"me-2",alt:"img"}),"Log in with Facebook"]})]}),(0,n.jsxs)("p",{className:"no-acc",children:["Already have an account ? ",(0,n.jsx)(l(),{href:"/provider/login",children:" Sign In"})]})]})]})})})})})})}t.default=()=>(0,n.jsx)(d.zt,{store:f.Z,children:(0,n.jsx)(p,{})})},90305:function(){},35280:function(){},56776:function(){},9008:function(e,t,o){e.exports=o(13709)},11163:function(e,t,o){e.exports=o(94546)}},function(e){e.O(0,[8764,5675,9668,4440,1664,433,2010,8738,2888,9774,179],function(){return e(e.s=99074)}),_N_E=e.O()}]);