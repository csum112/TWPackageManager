!function(n){var t={};function e(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return n[o].call(i.exports,i,i.exports,e),i.l=!0,i.exports}e.m=n,e.c=t,e.d=function(n,t,o){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:o})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var i in n)e.d(o,i,function(t){return n[t]}.bind(null,i));return o},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=15)}([function(n,t,e){"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e=function(n,t){var e=n[1]||"",o=n[3];if(!o)return e;if(t&&"function"==typeof btoa){var i=(a=o,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(l," */")),r=o.sources.map((function(n){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(n," */")}));return[e].concat(r).concat([i]).join("\n")}var a,s,l;return[e].join("\n")}(t,n);return t[2]?"@media ".concat(t[2]," {").concat(e,"}"):e})).join("")},t.i=function(n,e,o){"string"==typeof n&&(n=[[null,n,""]]);var i={};if(o)for(var r=0;r<this.length;r++){var a=this[r][0];null!=a&&(i[a]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);o&&i[l[0]]||(e&&(l[2]?l[2]="".concat(e," and ").concat(l[2]):l[2]=e),t.push(l))}},t}},function(n,t){n.exports='<div class=page-content> <h1>Welcome</h1> <h3>Pick your flavour.</h3> <ul> <li><a onclick=\'window.distroService.setDistro("brew")\' id=brew><img src=/assets/png/brew_logo.png alt="Brew logo" width=250 height=116></a></li> <li><a onclick=\'window.distroService.setDistro("debian")\'><img src=/assets/png/debian_logo.png alt="Debian logo" width=200 height=100></a></li> <li><a onclick=\'window.distroService.setDistro("arch")\'><img src=/assets/png/arch_logo.png alt="Archlinux logo" width=200 height=60></a></li> <li><a onclick=\'window.distroService.setDistro("centos")\'><img src=/assets/png/centos_logo.png alt="CentOS logo" width=200 height=67></a></li> </ul> </div>'},function(n,t,e){var o=e(10);n.exports="string"==typeof o?o:o.toString()},function(n,t){n.exports='<main> <div class="force golden-bigger"> <div class=header id=toolbar> <a href=/nav> <div class=logo> DEmI </div> </a> <div class=header-mobile-wrapper> <button class=menu-fab onclick=\'window.router.navigateTo("/filters")\'> <i class="fas fa-bars fa-2x"></i> </button> <div class=searchbox-wrapper> <div class=searchbox> <input id=searchbox type=text placeholder="Search package name"/> </div> </div> </div> </div> <div class=content> <slot name=left></slot> </div> </div> <div class="menu force golden-smaller" id=menu> <slot name=right></slot> </div> </main> <button class="mobile-fab clip-button" id=mobile-fab> <i class="fas fa-shopping-cart fa-2x"></i> </button>'},function(n,t,e){var o=e(11);n.exports="string"==typeof o?o:o.toString()},function(n,t){n.exports='<div class=thumbnail> <div class=card> <span class=app-name>{{bothLeters}}</span> <span class="watermark left">{{firstLetter}}</span> <span class="watermark right">{{secondLetter}}</span> </div> <div class=name>{{packageName}}</div> </div>'},function(n,t,e){var o=e(12);n.exports="string"==typeof o?o:o.toString()},function(n,t,e){var o=e(13);n.exports="string"==typeof o?o:o.toString()},function(n,t){n.exports='<link href=/assets/fontawesome/css/all.css rel=stylesheet> <div class=wrapper> <button class=back-button id=back-button> <i class="fas fa-angle-left fa-3x"></i> </button> <slot name=inner-content></slot> <button class="mobile-fab clip-button" id=mobile-fab> <i class="fas fa-shopping-cart fa-2x"></i> </button> </div>'},function(n,t,e){var o=e(14);n.exports="string"==typeof o?o:o.toString()},function(n,t,e){(t=e(0)(!1)).push([n.i,".page-content {\n    margin-top: 2rem;\n    margin-bottom: 5rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-evenly;\n}\n\na:link, a:visited {\n    text-decoration: none;\n}\n\nh1, h3 {\n    font-family: 'Roboto', sans-serif;\n    font-style: normal;\n    font-weight: lighter;\n}\n\nh1 {\n    color: #fff;\n    border-bottom: 2px solid #894EC6;\n}\n\nh3 {\n    color: #894EC6;\n}\n\nul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    height: 50vh;\n    width: 80vw;\n    display: flex;\n    position: relative;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    overflow-y: auto;\n}\n\nul::-webkit-scrollbar {\n    display: none;\n}\n\nimg {\n    padding: 1.5rem;\n}\n\n@media (max-width: 720px) and (orientation: portrait) {\n\n    ul {\n        flex-direction: column;\n    }\n\n    img {\n        padding-top: 2rem;\n        padding-bottom: 2rem;\n    }\n\n}",""]),n.exports=t},function(n,t,e){(t=e(0)(!1)).push([n.i,"      .logo {user-select: none;}\n\n      .searchbox {\n        background: #3B3F54;\n        border-radius: 16px;\n        height: 48px;\n        display: flex;\n        justify-content: center;\n        margin-bottom: 2rem;\n        width: 100%;\n        margin-right: 32px;\n    }\n\n    .menu-fab{\n        margin-left: 32px;\n        margin-right: 16px;\n        height: 50px;\n        color: #3B3F54;\n        z-index: 11;\n        background: none;\n        border: none;\n    }\n\n    .header-mobile-wrapper {\n        display: flex;\n        flex-direction: row;\n        width: 100%;\n        justify-content: center;\n    }\n    \n    .searchbox > input {\n        background: none;\n        border: none;\n        height: 100%;\n        width: 100%;\n        font-family: 'Roboto', sans-serif;\n        font-style: normal;\n        font-weight: lighter;\n        font-size: 18px;\n        line-height: 21px;\n        color: #CACCDB;\n        margin-left: 2rem;\n    }\n\n          \n    .searchbox > input:focus {\n        outline: none;\n    }\n\n      @media (min-width: 720px) and (orientation:landscape) {\n      main {\n          top: 32px;\n          position: relative;\n          height: calc(100vh - 64px);\n          width: calc((100vh - 64px) * 1.61);\n          max-width: 90vw;\n          box-sizing: border-box;\n          display: flex;\n          flex-wrap: nowrap;\n          justify-content: center;\n      }\n      \n      .force {\n          padding: 0px 0px;\n          margin: 0px 0px;\n          box-sizing: border-box;\n          max-height: 100vh;\n      }\n      \n      .golden-bigger {\n          width: 61%;\n          display: flex;\n          flex-direction: column;\n          justify-content: space-between;\n      }\n      \n      .content::-webkit-scrollbar\n      {\n          visibility: hidden;\n      \n      }\n      \n      .golden-smaller {\n          width: 39%;\n          min-width: calc(100vh * 0.39);\n      }\n      \n      .content {\n          overflow-y: auto;\n          height: 90%;\n      }\n      \n      .menu {\n          background: #ffffff;\n          box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.04),\n              0px 2px 6px rgba(0, 0, 0, 0.04),\n              0px 10px 20px rgba(0, 0, 0, 0.04);\n          border-radius: 16px;\n      }\n\n      .mobile-fab {\n          display: none;\n      }\n\n      .logo {\n        position: relative;\n        width: 162px;\n        height: 77px;\n        left: 32px;\n        font-family: Zilla Slab Highlight;\n        font-style: normal;\n        font-weight: bold;\n        font-size: 48px;\n        color: rgba(202, 204, 219, 0.3);\n        text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.06);\n    }\n    }\n\n    @media (max-width: 720px),(orientation:portrait){\n\n        @keyframes go-up {\n            from {\n                transform: translateY(0);\n            }\n            to {\n                transform: translateY(-128px);\n            }\n        }\n\n        .header {\n            transition: height 2s;\n        }\n\n        .scrolled-header .logo{\n            animation: go-up 100ms forwards;\n        }\n\n\n\n        .scrolled-header {\n            background-color: #252a41;\n            height: 70px;\n        }\n\n        .scrolled-header .header-mobile-wrapper {\n            position: fixed;\n            top: 16px;\n\n        }\n\n\n        .header {\n            position: fixed;\n            top: 0%;\n            left: 0%;\n            width: 100vw;\n            z-index: 10;\n        }\n        .golden-bigger {\n            padding-top: 7rem;\n            width: 100%;\n            display: flex;\n            flex-direction: column;\n            justify-content: center;\n        }\n\n        .content {\n            overflow-y: auto;\n        }\n\n        div.menu.golden-smaller {\n            display: none;\n        }\n        div.menu.golden-smaller.open {\n            display: block;\n            background-color: #fff;\n            width: 100vw;\n            height: 100vh;\n            z-index: 100;\n            margin: 0 0;\n            position: fixed;\n            overflow-y: scroll;\n            top: 0px;\n            left: 0px;\n        }\n\n        .logo {\n            position: relative;\n            text-align: center;\n            font-family: Zilla Slab Highlight;\n            font-style: normal;\n            font-weight: bold;\n            font-size: 36px;\n            line-height: 77px;\n            color: rgba(202, 204, 219, 0.3);\n            text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.06);\n        }\n    }\n    \n    .searchbox-wrapper {\n        height: 50px;\n        width: 100%;\n        display: flex;\n        justify-content: center;\n    }\n\n    .mobile-fab {\n        position: fixed;\n        bottom: 2rem;\n        right: 2rem;\n        height: 4rem;\n        width: 4rem;\n    }\n\n    .mobile-fab:focus {\n        outline: none;\n        box-shadow: none;\n      }\n\n    .clip-button {\n      color: #fff;\n      background: #894EC6;\n      padding: 1rem 1rem;\n      border-radius: 1rem;\n      border: none;\n      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.06);\n    }",""]),n.exports=t},function(n,t,e){(t=e(0)(!1)).push([n.i,"  .thumbnail {\n      user-select: none;\n      animation: ease-out 300m;\n  }\n  .card {\n    margin-left: 1rem;\n    margin-top: 0.8rem;\n    position: relative;\n    /* background: linear-gradient(180deg, ${this._getColor()} 0%, ${this._getColor()} 100%); */\n    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.06);\n    border-radius: 1rem;\n    overflow: hidden;\n    width: 5rem;\n    height: 5rem;\n    text-align:center;\n  }\n\n  .app-name {\n    position: relative;\n    width: 100%;\n    font-family: 'Roboto', sans-serif;\n    font-style: normal;\n    font-weight: lighter;\n    font-size: 2.4rem;\n    line-height: 4.5rem;\n    color: #FFFFFF;\n    text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 10px 20px rgba(0, 0, 0, 0.04);\n  }\n\n  .watermark {\n    font-family: 'Roboto', sans-serif;\n    font-style: normal;\n    font-weight: lighter;\n    font-size: 1rem;\n    line-height: 1rem;\n    color: #FFFFFF;\n    opacity: 0.13;\n  }\n\n  .right {\n    position: absolute;\n    font-size: 2.7rem;\n    left: calc(50% + 8px);\n    top: calc(50%);\n  }\n\n  .left {\n    font-size: 2.7rem;\n    position: absolute;\n    left: calc(50% - 36px);\n    top: calc(50% - 18px);\n  }\n\n  div.name{\n    position: relative;\n    width: 100%;\n    font-family: 'Roboto', sans-serif;\n    font-style: normal;\n    font-weight: lighter;\n    font-size: 0.8rem;\n    line-height: 1rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    color: #CACCDB;\n    text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.06);\n  }\n\n  :host(:hover) > div.thumbnail{\n     transform: scale(1.1);\n  }\n  :host(:hover) > div.thumbnail > div.card {\n    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);\n  }",""]),n.exports=t},function(n,t,e){(t=e(0)(!1)).push([n.i,"\t\t\tul {\n\t\t\t\tlist-style: none;\n\t\t\t\tdisplay: flex;\n\t\t\t\tpadding-top: 16px;\n\t\t\t\tmargin: 0;\n\t\t\t\tpadding-left: 0;\n\t\t\t\tjustify-content: center;\n\t\t\t\talign-content: flex-start;\n\t\t\t\tflex-flow: row wrap;\n\t\t\t\toverflow-y: auto;\n\t\t\t\twidth: 100%;\n\t\t\t}\n\n\t\t\tli {\n\t\t\t\tbox-sizing: content-box;\n\t\t\t}",""]),n.exports=t},function(n,t,e){(t=e(0)(!1)).push([n.i,".wrapper {\n    position: relative;\n    margin: 0px;\n    padding: 0px;\n    height: 90vh;\n}\n\n.back-button {\n    position: absolute;\n    top: 2rem;\n    left: 2rem;\n    z-index: 1000;\n    background: none;\n    border: none;\n    color: #894EC6;\n}\n\n.mobile-fab {\n    position: absolute;\n    bottom: 2rem;\n    right: 2rem;\n    height: 4rem;\n    width: 4rem;\n}\n\n.mobile-fab:focus {\n    outline: none;\n    box-shadow: none;\n}\n\n.clip-button {\n    color: #fff;\n    background: #894EC6;\n    padding: 1rem 1rem;\n    border-radius: 1rem;\n    border: none;\n    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.06);\n}\n\n@media (max-width: 720px), (orientation:portrait) {\n\n    .wrapper {\n        height: 100vh;\n    }\n\n}",""]),n.exports=t},function(n,t,e){"use strict";function o(n,t){let e=n.name+"Final",o=class extends HTMLElement{constructor(){super();const e=this.attachShadow({mode:"open"}),o=t.template,i=t.style,r=new n(this);Object.assign(this,r),e.innerHTML=`<style>${i}</style>`+this.replaceInTemplates(o),this.onViewLoad&&this.onViewLoad()}replaceInTemplates(n){const t=n.matchAll(/{{(([A-z]|[0-9])+)}}/gm);return Array.from(t).forEach(t=>{n=n.replace(t[0],this[t[1]])}),n}};window[e]=o,customElements.define(t.selector,window[e])}e.r(t);class i{constructor(n){}}var r=e(1),a=e.n(r),s=e(2),l=e.n(s);class p{constructor(n){}}var c=e(3),d=e.n(c),h=e(4),f=e.n(h);class g{constructor(n){n.addEventListener("app_list_updated",()=>{this._resetList(),this._pullListFromService()}),n.onViewLoad=()=>{this._nodeList=document.createElement("ul"),n.shadowRoot.appendChild(this._nodeList),this._pullListFromService()}}_addPackage(n){const t=document.createElement("li");t.innerHTML=`<thumbnail-component packageName='${n}'></thumbnail-component>`,this._nodeList.appendChild(t)}_resetList(){for(;null!=this._nodeList.firstChild;)this._nodeList.removeChild(this._nodeList.firstChild)}_pullListFromService(){["python","hello","world"].forEach(n=>{this._addPackage(n)})}}class m{_getColor(){return"hsl("+360*Math.random()+","+(25+70*Math.random())+"%,"+(65+10*Math.random())+"%)"}constructor(n){this.packageName=n.getAttribute("packageName"),this.packageName.length>1&&(this.firstLetter=this.packageName[0].toUpperCase(),this.secondLetter=this.packageName[1].toUpperCase(),this.bothLeters=this.firstLetter+this.secondLetter),n.onViewLoad=()=>{this.initColor(n)}}initColor(n){n.shadowRoot.querySelector(".card").style.background=`linear-gradient(180deg, ${this._getColor()} 0%, ${this._getColor()} 100%)`}}var x=e(5),u=e.n(x),b=e(6),w=e.n(b);var v=e(7),y=e.n(v);class k{constructor(){}}var _=e(8),L=e.n(_),C=e(9),S=e.n(C);o(i,{template:a.a,style:l.a,selector:"welcome-component"}),o(m,{template:u.a,style:w.a,selector:"thumbnail-component"}),o(g,{template:"",style:y.a,selector:"app-list-component"}),o(p,{template:d.a,style:f.a,selector:"shell-component"}),o(k,{template:L.a,style:S.a,selector:"default-component"})}]);