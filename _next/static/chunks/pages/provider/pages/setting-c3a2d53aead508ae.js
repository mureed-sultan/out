(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1592],{2711:function(e){e.exports=function(e){function t(n){if(a[n])return a[n].exports;var i=a[n]={exports:{},id:n,loaded:!1};return e[n].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var a={};return t.m=e,t.c=a,t.p="dist/",t(0)}([function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o=(n(a(1)),a(6)),r=n(o),s=n(a(7)),l=n(a(8)),c=n(a(9)),d=n(a(10)),u=n(a(11)),m=n(a(14)),f=[],p=!1,h={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},b=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e&&(p=!0),p)return f=(0,u.default)(f,h),(0,d.default)(f,h.once),f},v=function(){f=(0,m.default)(),b()},g=function(){f.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")})};e.exports={init:function(e){h=i(h,e),f=(0,m.default)();var t,a=document.all&&!window.atob;return!0===(t=h.disable)||"mobile"===t&&c.default.mobile()||"phone"===t&&c.default.phone()||"tablet"===t&&c.default.tablet()||"function"==typeof t&&!0===t()||a?g():(h.disableMutationObserver||l.default.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),h.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",h.easing),document.querySelector("body").setAttribute("data-aos-duration",h.duration),document.querySelector("body").setAttribute("data-aos-delay",h.delay),"DOMContentLoaded"===h.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?b(!0):"load"===h.startEvent?window.addEventListener(h.startEvent,function(){b(!0)}):document.addEventListener(h.startEvent,function(){b(!0)}),window.addEventListener("resize",(0,s.default)(b,h.debounceDelay,!0)),window.addEventListener("orientationchange",(0,s.default)(b,h.debounceDelay,!0)),window.addEventListener("scroll",(0,r.default)(function(){(0,d.default)(f,h.once)},h.throttleDelay)),h.disableMutationObserver||l.default.ready("[data-aos]",v),f)},refresh:b,refreshHard:v}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function a(e){var t=void 0===e?"undefined":i(e);return!!e&&("object"==t||"function"==t)}function n(e){if("number"==typeof e)return e;if("symbol"==(void 0===(t=e)?"undefined":i(t))||t&&"object"==(void 0===t?"undefined":i(t))&&b.call(t)==s)return r;if(a(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=a(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;var o=d.test(e=e.replace(l,""));return o||u.test(e)?m(e.slice(2),o?2:8):c.test(e)?r:+e}var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o="Expected a function",r=NaN,s="[object Symbol]",l=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,d=/^0b[01]+$/i,u=/^0o[0-7]+$/i,m=parseInt,f="object"==(void 0===t?"undefined":i(t))&&t&&t.Object===Object&&t,p="object"==("undefined"==typeof self?"undefined":i(self))&&self&&self.Object===Object&&self,h=f||p||Function("return this")(),b=Object.prototype.toString,v=Math.max,g=Math.min,y=function(){return h.Date.now()};e.exports=function(e,t,i){var r=!0,s=!0;if("function"!=typeof e)throw TypeError(o);return a(i)&&(r="leading"in i?!!i.leading:r,s="trailing"in i?!!i.trailing:s),function(e,t,i){function r(t){var a=u,n=m;return u=m=void 0,x=t,p=e.apply(n,a)}function s(e){var a=e-b,n=e-x;return void 0===b||a>=t||a<0||j&&n>=f}function l(){var e,a,n,i=y();return s(i)?c(i):void(h=setTimeout(l,(e=i-b,a=i-x,n=t-e,j?g(n,f-a):n)))}function c(e){return h=void 0,k&&u?r(e):(u=m=void 0,p)}function d(){var e,a=y(),n=s(a);if(u=arguments,m=this,b=a,n){if(void 0===h)return x=e=b,h=setTimeout(l,t),w?r(e):p;if(j)return h=setTimeout(l,t),r(b)}return void 0===h&&(h=setTimeout(l,t)),p}var u,m,f,p,h,b,x=0,w=!1,j=!1,k=!0;if("function"!=typeof e)throw TypeError(o);return t=n(t)||0,a(i)&&(w=!!i.leading,f=(j="maxWait"in i)?v(n(i.maxWait)||0,t):f,k="trailing"in i?!!i.trailing:k),d.cancel=function(){void 0!==h&&clearTimeout(h),x=0,u=b=m=h=void 0},d.flush=function(){return void 0===h?p:c(y())},d}(e,t,{leading:r,maxWait:t,trailing:s})}}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function a(e){var t=void 0===e?"undefined":i(e);return!!e&&("object"==t||"function"==t)}function n(e){if("number"==typeof e)return e;if("symbol"==(void 0===(t=e)?"undefined":i(t))||t&&"object"==(void 0===t?"undefined":i(t))&&h.call(t)==r)return o;if(a(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=a(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;var m=c.test(e=e.replace(s,""));return m||d.test(e)?u(e.slice(2),m?2:8):l.test(e)?o:+e}var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=NaN,r="[object Symbol]",s=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,d=/^0o[0-7]+$/i,u=parseInt,m="object"==(void 0===t?"undefined":i(t))&&t&&t.Object===Object&&t,f="object"==("undefined"==typeof self?"undefined":i(self))&&self&&self.Object===Object&&self,p=m||f||Function("return this")(),h=Object.prototype.toString,b=Math.max,v=Math.min,g=function(){return p.Date.now()};e.exports=function(e,t,i){function o(t){var a=d,n=u;return d=u=void 0,y=t,f=e.apply(n,a)}function r(e){var a=e-h,n=e-y;return void 0===h||a>=t||a<0||w&&n>=m}function s(){var e,a,n,i=g();return r(i)?l(i):void(p=setTimeout(s,(e=i-h,a=i-y,n=t-e,w?v(n,m-a):n)))}function l(e){return p=void 0,j&&d?o(e):(d=u=void 0,f)}function c(){var e,a=g(),n=r(a);if(d=arguments,u=this,h=a,n){if(void 0===p)return y=e=h,p=setTimeout(s,t),x?o(e):f;if(w)return p=setTimeout(s,t),o(h)}return void 0===p&&(p=setTimeout(s,t)),f}var d,u,m,f,p,h,y=0,x=!1,w=!1,j=!0;if("function"!=typeof e)throw TypeError("Expected a function");return t=n(t)||0,a(i)&&(x=!!i.leading,m=(w="maxWait"in i)?b(n(i.maxWait)||0,t):m,j="trailing"in i?!!i.trailing:j),c.cancel=function(){void 0!==p&&clearTimeout(p),y=0,d=h=u=p=void 0},c.flush=function(){return void 0===p?f:l(g())},c}}).call(t,function(){return this}())},function(e,t){"use strict";function a(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function n(e){e&&e.forEach(function(e){var t=Array.prototype.slice.call(e.addedNodes),a=Array.prototype.slice.call(e.removedNodes);if(function e(t){var a=void 0,n=void 0;for(a=0;a<t.length;a+=1)if((n=t[a]).dataset&&n.dataset.aos||n.children&&e(n.children))return!0;return!1}(t.concat(a)))return i()})}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){};t.default={isSupported:function(){return!!a()},ready:function(e,t){var o=window.document,r=new(a())(n);i=t,r.observe(o.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}}},function(e,t){"use strict";function a(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),i=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,o=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,r=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,s=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,l=function(){function e(){!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,e)}return n(e,[{key:"phone",value:function(){var e=a();return!(!i.test(e)&&!o.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=a();return!(!r.test(e)&&!s.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new l},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(e,t,a){var n=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):void 0===n||"false"!==n&&(a||"true"===n)||e.node.classList.remove("aos-animate")};t.default=function(e,t){var n=window.pageYOffset,i=window.innerHeight;e.forEach(function(e,o){a(e,i+n,t)})}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,i=(n=a(12))&&n.__esModule?n:{default:n};t.default=function(e,t){return e.forEach(function(e,a){e.node.classList.add("aos-init"),e.position=(0,i.default)(e.node,t.offset)}),e}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,i=(n=a(13))&&n.__esModule?n:{default:n};t.default=function(e,t){var a=0,n=0,o=window.innerHeight,r={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(r.offset&&!isNaN(r.offset)&&(n=parseInt(r.offset)),r.anchor&&document.querySelectorAll(r.anchor)&&(e=document.querySelectorAll(r.anchor)[0]),a=(0,i.default)(e).top,r.anchorPlacement){case"top-bottom":break;case"center-bottom":a+=e.offsetHeight/2;break;case"bottom-bottom":a+=e.offsetHeight;break;case"top-center":a+=o/2;break;case"bottom-center":a+=o/2+e.offsetHeight;break;case"center-center":a+=o/2+e.offsetHeight/2;break;case"top-top":a+=o;break;case"bottom-top":a+=e.offsetHeight+o;break;case"center-top":a+=e.offsetHeight/2+o}return r.anchorPlacement||r.offset||isNaN(t)||(n=t),a+n}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){for(var t=0,a=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),a+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:a,left:t}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,function(e){return{node:e}})}}])},80152:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/provider/pages/setting",function(){return a(45316)}])},45316:function(e,t,a){"use strict";a.r(t);var n=a(85893),i=a(67294),o=a(90859),r=a(99811),s=a(45007),l=a(89387),c=a(25675),d=a.n(c);function u(){let[e,t]=(0,i.useState)({name:"",password:"",email:"",phone:"",gender:"",dob:"",bio:"",address:"",tradeLicense:null,emiratesIDUrlemiratesID:null,bankDetails:null,dualSignedContract:null,profileImage:"",emiratesIDUrl:"",bankDetailsUrl:"",tradeLicenseUrl:"",dualSignedContractUrl:"",additional:""}),[a,l]=(0,i.useState)({tradeLicense:null,emiratesID:null,bankDetails:null,dualSignedContract:null,profilePicture:null}),[c,u]=(0,i.useState)(null),m=(0,s.v9)(e=>e.provider);(0,i.useEffect)(()=>{f()},[m.name]);let f=async()=>{try{let e=await r.Z.fetch('*[_type == "provider" && name == "'.concat(m.name,'"]{\n                ...,\n                "profileImage": image.asset->url,\n                "emiratesIDUrl":emiratesID.asset->url,\n                "dualSignedContractUrl":dualSignedContract.asset->url,\n                "tradeLicenseUrl":tradeLicense.asset->url,\n                "bankDetailsUrl":bankDetails.asset->url,\n            }[0]'));e&&(t(e),u(e))}catch(e){console.error("Error fetching data from Sanity:",e.message)}},p=a=>{let{name:n,value:i}=a.target;t({...e,[n]:i})},h=e=>{let t=e.target.name,a=e.target.files&&e.target.files[0];a&&l(e=>({...e,[t]:a}))},b=async t=>{t.preventDefault();try{let t=[];if(a.profilePicture){let e=await r.Z.assets.upload("image",a.profilePicture,{filename:a.profilePicture.name}),n=r.Z.patch(c._id).set({image:{asset:{_ref:e._id}}}).commit();t.push(n.then(()=>void 0))}if(a.tradeLicense){let e=await r.Z.assets.upload("image",a.tradeLicense,{filename:a.tradeLicense.name}),n=r.Z.patch(c._id).set({tradeLicense:{asset:{_ref:e._id}}}).commit();t.push(n.then(()=>void 0))}if(a.emiratesID){let e=await r.Z.assets.upload("image",a.emiratesID,{filename:a.emiratesID.name}),n=r.Z.patch(c._id).set({emiratesID:{asset:{_ref:e._id}}}).commit();t.push(n.then(()=>void 0))}if(a.bankDetails){let e=await r.Z.assets.upload("image",a.bankDetails,{filename:a.bankDetails.name}),n=r.Z.patch(c._id).set({bankDetails:{asset:{_ref:e._id}}}).commit();t.push(n.then(()=>void 0))}if(a.dualSignedContract){let e=await r.Z.assets.upload("image",a.dualSignedContract,{filename:a.dualSignedContract.name}),n=r.Z.patch(c._id).set({dualSignedContract:{asset:{_ref:e._id}}}).commit();t.push(n.then(()=>void 0))}let n={name:e.name,password:e.password,email:e.email,phone:e.phone,additional:e.additional?e.additional:"",address:e.address?e.address:""},i=r.Z.patch(c._id).set(n).commit();t.push(i.then(()=>void 0)),await Promise.all(t),l(e=>({tradeLicense:null,emiratesID:null,bankDetails:null,dualSignedContract:null,profilePicture:null})),alert("Your information is updated")}catch(e){console.error("Error updating user data:",e)}};return(0,n.jsx)(o.default,{children:(0,n.jsx)("div",{className:"page-wrapper",children:(0,n.jsx)("div",{className:"content container-fluid",children:(0,n.jsx)("div",{className:"row",children:(0,n.jsxs)("div",{className:"col-md-12",children:[(0,n.jsx)("div",{className:"widget-title",children:(0,n.jsx)("h4",{children:"Account Settings"})}),(0,n.jsx)("h6",{className:"user-title",children:"Profile Picture"}),(0,n.jsxs)("div",{className:"pro-picture",children:[(0,n.jsx)("div",{className:"pro-img",children:(0,n.jsx)(d(),{width:100,height:100,src:e.profileImage?e.profileImage:"/assets/img/profiles/avatar-02.jpg",alt:"user"})}),(0,n.jsxs)("div",{className:"pro-info",children:[(0,n.jsxs)("div",{className:"d-flex",children:[(0,n.jsxs)("div",{className:"img-upload",children:[(0,n.jsx)("i",{className:"feather-upload-cloud me-1"}),"Upload",(0,n.jsx)("input",{type:"file",name:"profilePicture",onChange:h})]}),(0,n.jsx)("a",{href:"#",className:"btn btn-remove",children:"Remove"})]}),(0,n.jsx)("p",{children:"*image size should be at least 320px big,and less then 500kb. Allowed files .png and .jpg."})]})]}),(0,n.jsx)("h6",{className:"user-title",children:"General Information"}),(0,n.jsx)("div",{className:"general-info",children:(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("div",{className:"col-md-6",children:(0,n.jsxs)("div",{className:"form-group",children:[(0,n.jsxs)("label",{className:"col-form-label",children:["Name ",(0,n.jsx)("span",{className:"text-danger",children:"*"})]}),(0,n.jsx)("input",{type:"text",className:"form-control",name:"name",value:e.name,onChange:p,placeholder:"Enter your name",readOnly:!0})]})}),(0,n.jsx)("div",{className:"col-md-6",children:(0,n.jsxs)("div",{className:"form-group",children:[(0,n.jsx)("label",{className:"col-form-label",children:"Password"}),(0,n.jsx)("input",{type:"text",className:"form-control",name:"password",value:e.password,onChange:p,placeholder:"Enter your password"})]})}),(0,n.jsx)("div",{className:"col-md-6",children:(0,n.jsxs)("div",{className:"form-group",children:[(0,n.jsxs)("label",{className:"col-form-label",children:["Email ",(0,n.jsx)("span",{className:"text-danger",children:"*"})]}),(0,n.jsx)("input",{type:"email",className:"form-control",name:"email",value:e.email,onChange:p,placeholder:"Enter Email Address"})]})}),(0,n.jsx)("div",{className:"col-md-6",children:(0,n.jsxs)("div",{className:"form-group",children:[(0,n.jsxs)("label",{className:"col-form-label",children:["Mobile Number ",(0,n.jsx)("span",{className:"text-danger",children:"*"})]}),(0,n.jsx)("input",{type:"text",className:"form-control",name:"phone",value:e.phone,onChange:p,placeholder:"Enter Mobile Number"})]})})]})}),(0,n.jsx)("h6",{className:"user-title",children:"Address "}),(0,n.jsx)("input",{className:"form-control",placeholder:"Additional Notes.",value:e.address,onChange:p}),(0,n.jsx)("h6",{className:"user-title",children:"Notes "}),(0,n.jsx)("input",{className:"form-control",placeholder:"Additional Notes.",value:e.additional,onChange:p}),(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("div",{className:"col-md-6",children:(0,n.jsxs)("div",{className:"form-group",children:[(0,n.jsx)("label",{className:"col-form-label",children:"Trade License"}),(0,n.jsx)("input",{type:"file",name:"tradeLicense",onChange:h}),e.tradeLicenseUrl?(0,n.jsx)("a",{href:e.tradeLicenseUrl,target:"_blank",children:(0,n.jsx)(d(),{width:100,height:100,src:e.tradeLicenseUrl,alt:"DEMO"})}):(0,n.jsx)(n.Fragment,{})]})}),(0,n.jsx)("div",{className:"col-md-6",children:(0,n.jsxs)("div",{className:"form-group",children:[(0,n.jsx)("label",{className:"col-form-label",children:"Emirate ID"}),(0,n.jsx)("input",{type:"file",name:"emiratesID",onChange:h}),e.emiratesIDUrl?(0,n.jsx)("a",{href:e.emiratesIDUrl,target:"_blank",children:(0,n.jsx)(d(),{width:100,height:100,src:e.emiratesIDUrl,alt:"DEMO"})}):(0,n.jsx)(n.Fragment,{})]})}),(0,n.jsx)("div",{className:"col-md-6",children:(0,n.jsxs)("div",{className:"form-group",children:[(0,n.jsx)("label",{className:"col-form-label",children:"Bank Details"}),(0,n.jsx)("input",{type:"file",name:"bankDetails",onChange:h}),e.bankDetailsUrl?(0,n.jsx)("a",{href:e.bankDetailsUrl,target:"_blank",children:(0,n.jsx)(d(),{width:100,height:100,src:e.bankDetailsUrl,alt:"DEMO"})}):(0,n.jsx)(n.Fragment,{})]})}),(0,n.jsx)("div",{className:"col-md-6",children:(0,n.jsxs)("div",{className:"form-group",children:[(0,n.jsx)("label",{className:"col-form-label",children:"Duly Signed Contract"}),(0,n.jsx)("input",{type:"file",name:"dualSignedContract",onChange:h}),e.dualSignedContractUrl?(0,n.jsx)("a",{href:e.dualSignedContractUrl,target:"_blank",children:(0,n.jsx)(d(),{width:100,height:100,src:e.dualSignedContractUrl,alt:"DEMO"})}):(0,n.jsx)(n.Fragment,{})]})})]}),(0,n.jsxs)("div",{className:"acc-submit",children:[(0,n.jsx)("a",{href:"#",className:"btn btn-secondary",children:"Cancel"}),(0,n.jsx)("a",{href:"#",onClick:b,className:"btn btn-primary",children:"Save Changes"})]})]})})})})})}t.default=()=>(0,n.jsx)(s.zt,{store:l.Z,children:(0,n.jsx)(u,{})})},90305:function(){},35280:function(){},56776:function(){},9008:function(e,t,a){e.exports=a(13709)},11163:function(e,t,a){e.exports=a(94546)}},function(e){e.O(0,[8764,5675,9668,4440,1664,433,2010,8738,859,2888,9774,179],function(){return e(e.s=80152)}),_N_E=e.O()}]);