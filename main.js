(()=>{"use strict";var e={208:(e,n,t)=>{t.d(n,{A:()=>a});var o=t(601),r=t.n(o),i=t(314),d=t.n(i)()(r());d.push([e.id,"body{\n    margin:0;\n    padding:0;\n    display: grid;\n    grid-template-columns: auto 5fr;\n    grid-template-rows: auto 1fr;\n    height: 100vh;\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\n.errorMessages {\n    color: red;\n    margin-top: 5px;\n    font-size: small;\n}\n.task{\n    display: grid;\n    grid-template-columns: auto 1fr auto auto auto;\n    margin: 20px;\n    gap:10px;\n    background-color: white;\n    padding: 10px;\n    font-size: 1.2em;\n    align-items: center;\n}\n#header{\n    grid-column: 1/3;\n    text-align: center;\n    background-color: dimgray;\n    font-size: 36px;\n    color: white;\n    font-weight: 800;\n}\n\n#list{\n    background-color: #c4cfec;\n}\n\nbody>*{\n    padding: 10px;\n}\n\n#todo form{\n    display: grid;\n    grid-template-columns: auto auto;\n}\n\nform > *{\n    padding: 2px 2px;\n    margin: 10px 5px;\n}\n\n#todo form label, #project form label{\n    text-align: right;\n}\n\n#todo{\n    border-style: none;\n    border-radius: 5px;\n    box-shadow: 2px 2px 5px grey;\n    text-align: right;\n    padding-top: 0px;\n    padding-right: 0px;\n    \n}\n\n#todo>form>div{\n    text-align: left;\n}\n\n#sidebar{\n    padding: 0 0 0 0;\n    font-size: 24px;\n    color: white;\n    min-width: 200px;\n    text-align: center;\n}\n#sidebar>div{\n    padding: 10px 20px;\n    text-align: left;\n    font-weight: 700;\n    display: grid;\n    grid-template-columns: 1fr auto;\n    gap: 10px;\n    align-items: center;\n}\n\n\n\n#sidebar>div>div:nth-child(odd){\n    background-color: rgb(109, 108, 108) ;\n    padding: 10px 20px;\n    border-radius: 5px;\n}\n#sidebar>div>div:nth-child(even){\n    color: black;\n}\n\n#sidebar>div>div:nth-child(even):hover{\n    color: red;\n}\n\n#sidebar>div>div:nth-child(odd):hover{\n    background-color: rgb(8, 253, 172);\n    cursor: pointer;\n}\n\n\n\nbutton{\n    background-color: green;\n    color: white;\n    border-radius: 5px;\n    border-style: none;\n    font-size: 1.2em;\n\n}\n\nbutton:hover{\n    cursor: pointer;\n}\n\n#newproject{\n    margin-bottom: 10px;\n    margin-top: 10px;\n}\n\n#currentproject{\n    text-align: center;\n    font-size: 1.5em;\n}\n\n#confirm,#confirm_project,.save{\n    background-color: rgb(4, 148, 35);\n}\n\n#close,#close_project{\n    background-color: #f13709;\n    width: 1.5em;\n    height: 1.5em;\n}\n\n\n\n.low{\n    border:1px solid yellow;\n}\n\n.medium{\n    border:1px solid orange;\n}\n\n.high{\n    border:1px solid red;\n}\n\n#project{\n    border-style: none;\n    border-radius: 5px;\n    box-shadow: 2px 2px 5px grey;\n    text-align: right;\n    padding-top: 0px;\n    padding-right: 0px;\n}\n\n.done{\n    background-color: rgb(174, 235, 174);\n    border: solid 1px green;\n    text-decoration: line-through;\n}\n\n.save{\n    margin: 10px;\n}\n\n.removetodo:hover{\n    color: #f13709;\n    cursor: pointer;\n}\n\n.edit:hover{\n    color:green;\n    cursor: pointer;\n}",""]);const a=d},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var d={};if(o)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(d[c]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);o&&d[s[0]]||(void 0!==i&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=i),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),r&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=r):s[4]="".concat(r)),n.push(s))}},n}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var i={},d=[],a=0;a<e.length;a++){var c=e[a],l=o.base?c[0]+o.base:c[0],s=i[l]||0,u="".concat(l," ").concat(s);i[l]=s+1;var p=t(u),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var g=r(m,o);o.byIndex=a,n.splice(a,0,{identifier:u,updater:g,references:1})}d.push(u)}return d}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var d=0;d<i.length;d++){var a=t(i[d]);n[a].references--}for(var c=o(e,r),l=0;l<i.length;l++){var s=t(i[l]);0===n[s].references&&(n[s].updater(),n.splice(s,1))}i=c}}},659:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={id:o,exports:{}};return e[o](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0;var o=t(72),r=t.n(o),i=t(825),d=t.n(i),a=t(659),c=t.n(a),l=t(56),s=t.n(l),u=t(540),p=t.n(u),m=t(113),g=t.n(m),h=t(208),v={};v.styleTagTransform=g(),v.setAttributes=s(),v.insert=c().bind(null,"head"),v.domAPI=d(),v.insertStyleElement=p(),r()(h.A,v),h.A&&h.A.locals&&h.A.locals;class f{constructor(e){this.name=e,this.projectlist=[],this.isDefault=!1}}class x{constructor(e,n,t,o){this.title=e,this.description=t,this.dueDate=n,this.priority=o,this.done=!1}}function y(e){const n=JSON.stringify(e);localStorage.setItem("applist",n)}function w(){const e=localStorage.getItem("applist"),n=JSON.parse(e);return console.log(n),n}function b(e){const n=JSON.stringify(e);localStorage.setItem("current_project",n)}const L=document.getElementById("currentproject"),E=document.getElementById("newproject"),k=document.getElementById("project"),C=document.getElementById("close_project"),T=document.getElementById("confirm_project"),M=document.getElementById("project_name"),j=document.getElementById("sidebar"),I=document.querySelector("#task"),H=document.querySelector("#newtask");let B,S,D;function q(e){e.projectlist.forEach((n=>{U(I,n,e)}))}function A(e,n){let t=e.name;const o=document.createElement("div"),r=document.createElement("div");if(r.addEventListener("click",(()=>{I.innerHTML="",q(e),D=e,b(D),L.innerText=`${D.name}`})),r.innerText=t,o.appendChild(r),!e.isDefault){const t=document.createElement("div"),r='<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.2em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m19.5 5.5l-.62 10.025c-.158 2.561-.237 3.842-.88 4.763a4 4 0 0 1-1.2 1.128c-.957.584-2.24.584-4.806.584c-2.57 0-3.855 0-4.814-.585a4 4 0 0 1-1.2-1.13c-.642-.922-.72-2.205-.874-4.77L4.5 5.5M3 5.5h18m-4.944 0l-.683-1.408c-.453-.936-.68-1.403-1.071-1.695a2 2 0 0 0-.275-.172C13.594 2 13.074 2 12.035 2c-1.066 0-1.599 0-2.04.234a2 2 0 0 0-.278.18c-.395.303-.616.788-1.058 1.757L8.053 5.5" color="currentColor"/></svg>';t.innerHTML=r,t.classList.add("removeProject"),t.addEventListener("click",(()=>{!function(e){S.splice(S.findIndex((n=>n===e)),1),console.log(D===e),y(S)}(e),n.removeChild(o),D===e&&(D=B,b(D),console.log(D),L.innerText=`${D.name}`,I.innerHTML="",q(B))})),o.appendChild(t)}n.appendChild(o)}null==w()?(B=new f("Default"),B.isDefault=!0,S=[B],y(S),A(B,j),D=B,b(D)):(S=w(),B=S[0],S.forEach((e=>{A(e,j)})),D=function(){const e=localStorage.getItem("current_project");return JSON.parse(e)}(),q(D)),L.innerText=`${D.name}`,E.addEventListener("click",(()=>{k.showModal()})),C.addEventListener("click",(()=>{k.close()})),T.addEventListener("click",(e=>{const n=document.getElementById("errorMessages");if(e.preventDefault(),n.innerHTML="",""==M.value.trim()){const e=document.createElement("p");e.textContent="Project Name is required.",n.appendChild(e)}else!function(e){console.log(S);let n=new f(e);S.push(n),A(n,j),console.log(S),y(S)}(M.value),k.close()}));const N=document.getElementById("todo"),_=document.getElementById("title"),z=document.getElementById("description"),O=document.getElementById("date"),$=document.getElementById("priority"),P=document.querySelector("#confirm"),J=document.querySelector("#close"),F=document.querySelector("#close-div"),R=document.querySelector("#todo-form");function U(e,n,t){const o=document.createElement("div");function r(e,n){"low"===e.priority?(n.classList.remove("medium"),n.classList.remove("high"),n.classList.add("low")):"medium"===e.priority?(n.classList.remove("low"),n.classList.remove("high"),n.classList.add("medium")):(n.classList.remove("low"),n.classList.remove("medium"),n.classList.add("high"))}o.classList.add("task"),r(n,o);const i=document.createElement("div"),d='<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><rect width="24" height="24" fill="none" stroke="green"  stroke-width="5"/>',a='<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><rect width="24" height="24" fill="none" stroke="green"  stroke-width="5"/><path fill="#1bda3b" d="m10 15.586l-3.293-3.293l-1.414 1.414L10 18.414l9.707-9.707l-1.414-1.414z"/></svg>';n.done?(i.innerHTML=a,o.classList.add("done")):(i.innerHTML=d,o.classList.remove("done"));const c=document.createElement("div");c.innerText=`${n.title}`;const l=document.createElement("div");l.innerText=`Due: ${n.dueDate}`;const s=document.createElement("div");s.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><rect width="24" height="24" fill="none"/><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"/></g></svg>',s.classList.add("edit");const u=document.createElement("div");u.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m19.5 5.5l-.62 10.025c-.158 2.561-.237 3.842-.88 4.763a4 4 0 0 1-1.2 1.128c-.957.584-2.24.584-4.806.584c-2.57 0-3.855 0-4.814-.585a4 4 0 0 1-1.2-1.13c-.642-.922-.72-2.205-.874-4.77L4.5 5.5M3 5.5h18m-4.944 0l-.683-1.408c-.453-.936-.68-1.403-1.071-1.695a2 2 0 0 0-.275-.172C13.594 2 13.074 2 12.035 2c-1.066 0-1.599 0-2.04.234a2 2 0 0 0-.278.18c-.395.303-.616.788-1.058 1.757L8.053 5.5" color="currentColor"/></svg>',u.classList.add("removetodo"),u.addEventListener("click",(()=>{e.removeChild(u.parentNode),t.projectlist.splice(t.projectlist.findIndex((e=>e===n)),1),y(S),b(D)})),i.addEventListener("click",(()=>{n.done?(i.innerHTML=d,o.classList.remove("done"),n.done=!1,y(S)):(i.innerHTML=a,o.classList.add("done"),n.done=!0,y(S)),b(D)})),s.addEventListener("click",(()=>{_.value=n.title,O.value=n.dueDate,z.value=n.description,$.value=n.priority,R.removeChild(P),F.removeChild(J);const e=document.createElement("button");e.classList.add("save"),e.innerText="save",N.appendChild(e),N.showModal(),e.addEventListener("click",(()=>{n.title=_.value,n.description=z.value,n.dueDate=O.value,n.priority=$.value,N.close(),R.appendChild(P),N.removeChild(e),F.prepend(J),c.innerText=`${n.title}`,l.innerText=`Due: ${n.dueDate}`,r(n,o),y(S),b(D)}))})),o.appendChild(i),o.appendChild(c),o.appendChild(l),o.appendChild(s),o.appendChild(u),e.appendChild(o)}H.addEventListener("click",(()=>{N.showModal()})),P.addEventListener("click",(e=>{e.preventDefault();const n=document.getElementById("errortitle"),t=document.getElementById("errordescription"),o=document.getElementById("errordate");if(n.innerHTML,t.innerHTML,o.innerHTML="",""===_.value.trim()){const e=document.createElement("p");e.textContent="title is required.",n.appendChild(e)}else if(""===z.value.trim()){n.innerHTML="";const e=document.createElement("p");e.textContent="description is required.",t.appendChild(e)}else if(""===O.value.trim()){n.innerHTML="",t.innerHTML="";const e=document.createElement("p");e.textContent="date is required.",o.appendChild(e)}else n.innerHTML="",n.innerHTML="",t.innerHTML="",function(){let e=new x(_.value,O.value,z.value,$.value);D.projectlist.push(e),console.log(D),U(I,e,D),y(S),b(D)}(),N.close()})),J.addEventListener("click",(()=>{N.close()}))})();