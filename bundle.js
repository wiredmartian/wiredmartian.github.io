!function(t){function e(r){if(n[r])return n[r].exports;var s=n[r]={i:r,l:!1,exports:{}};return t[r].call(s.exports,s,s.exports,e),s.l=!0,s.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=5)}([function(t,e,n){"use strict";(function(t){var n,r,s,i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};/*!
 * 
 *   typed.js - A JavaScript Typing Animation Library
 *   Author: Matt Boldt <me@mattboldt.com>
 *   Version: v2.0.9
 *   Url: https://github.com/mattboldt/typed.js
 *   License(s): MIT
 * 
 */
!function(o,a){"object"===i(e)&&"object"===i(t)?t.exports=a():(r=[],n=a,void 0!==(s="function"==typeof n?n.apply(e,r):n)&&(t.exports=s))}(0,function(){return function(t){function e(r){if(n[r])return n[r].exports;var s=n[r]={exports:{},id:r,loaded:!1};return t[r].call(s.exports,s,s.exports,e),s.loaded=!0,s.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=n(1),o=n(3),a=function(){function t(e,n){r(this,t),i.initializer.load(this,n,e),this.begin()}return s(t,[{key:"toggle",value:function(){this.pause.status?this.start():this.stop()}},{key:"stop",value:function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))}},{key:"start",value:function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))}},{key:"destroy",value:function(){this.reset(!1),this.options.onDestroy(this)}},{key:"reset",value:function(){var t=arguments.length<=0||void 0===arguments[0]||arguments[0];clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,t&&(this.insertCursor(),this.options.onReset(this),this.begin())}},{key:"begin",value:function(){var t=this;this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){t.currentElContent&&0!==t.currentElContent.length?t.backspace(t.currentElContent,t.currentElContent.length):t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos)},this.startDelay)}},{key:"typewrite",value:function(t,e){var n=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var r=this.humanizer(this.typeSpeed),s=1;if(!0===this.pause.status)return void this.setPauseStatus(t,e,!0);this.timeout=setTimeout(function(){e=o.htmlParser.typeHtmlChars(t,e,n);var r=0,i=t.substr(e);if("^"===i.charAt(0)&&/^\^\d+/.test(i)){var a=1;i=/\d+/.exec(i)[0],a+=i.length,r=parseInt(i),n.temporaryPause=!0,n.options.onTypingPaused(n.arrayPos,n),t=t.substring(0,e)+t.substring(e+a),n.toggleBlinking(!0)}if("`"===i.charAt(0)){for(;"`"!==t.substr(e+s).charAt(0)&&(s++,!(e+s>t.length)););var u=t.substring(0,e),l=t.substring(u.length+1,e+s),c=t.substring(e+s+1);t=u+l+c,s--}n.timeout=setTimeout(function(){n.toggleBlinking(!1),e===t.length?n.doneTyping(t,e):n.keepTyping(t,e,s),n.temporaryPause&&(n.temporaryPause=!1,n.options.onTypingResumed(n.arrayPos,n))},r)},r)}},{key:"keepTyping",value:function(t,e,n){0===e&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this)),e+=n;var r=t.substr(0,e);this.replaceText(r),this.typewrite(t,e)}},{key:"doneTyping",value:function(t,e){var n=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),!1===this.loop||this.curLoop===this.loopCount)||(this.timeout=setTimeout(function(){n.backspace(t,e)},this.backDelay))}},{key:"backspace",value:function(t,e){var n=this;if(!0===this.pause.status)return void this.setPauseStatus(t,e,!0);if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var r=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){e=o.htmlParser.backSpaceHtmlChars(t,e,n);var r=t.substr(0,e);if(n.replaceText(r),n.smartBackspace){var s=n.strings[n.arrayPos+1];s&&r===s.substr(0,e)?n.stopNum=e:n.stopNum=0}e>n.stopNum?(e--,n.backspace(t,e)):e<=n.stopNum&&(n.arrayPos++,n.arrayPos===n.strings.length?(n.arrayPos=0,n.options.onLastStringBackspaced(),n.shuffleStringsIfNeeded(),n.begin()):n.typewrite(n.strings[n.sequence[n.arrayPos]],e))},r)}},{key:"complete",value:function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0}},{key:"setPauseStatus",value:function(t,e,n){this.pause.typewrite=n,this.pause.curString=t,this.pause.curStrPos=e}},{key:"toggleBlinking",value:function(t){this.cursor&&(this.pause.status||this.cursorBlinking!==t&&(this.cursorBlinking=t,t?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))}},{key:"humanizer",value:function(t){return Math.round(Math.random()*t/2)+t}},{key:"shuffleStringsIfNeeded",value:function(){this.shuffle&&(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))}},{key:"initFadeOut",value:function(){var t=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout(function(){t.arrayPos++,t.replaceText(""),t.strings.length>t.arrayPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],0):(t.typewrite(t.strings[0],0),t.arrayPos=0)},this.fadeOutDelay)}},{key:"replaceText",value:function(t){this.attr?this.el.setAttribute(this.attr,t):this.isInput?this.el.value=t:"html"===this.contentType?this.el.innerHTML=t:this.el.textContent=t}},{key:"bindFocusEvents",value:function(){var t=this;this.isInput&&(this.el.addEventListener("focus",function(e){t.stop()}),this.el.addEventListener("blur",function(e){t.el.value&&0!==t.el.value.length||t.start()}))}},{key:"insertCursor",value:function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))}}]),t}();e.default=a,t.exports=e.default},function(t,e,n){function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=n(2),a=function(t){return t&&t.__esModule?t:{default:t}}(o),u=function(){function t(){r(this,t)}return i(t,[{key:"load",value:function(t,e,n){if(t.el="string"==typeof n?document.querySelector(n):n,t.options=s({},a.default,e),t.isInput="input"===t.el.tagName.toLowerCase(),t.attr=t.options.attr,t.bindInputFocusEvents=t.options.bindInputFocusEvents,t.showCursor=!t.isInput&&t.options.showCursor,t.cursorChar=t.options.cursorChar,t.cursorBlinking=!0,t.elContent=t.attr?t.el.getAttribute(t.attr):t.el.textContent,t.contentType=t.options.contentType,t.typeSpeed=t.options.typeSpeed,t.startDelay=t.options.startDelay,t.backSpeed=t.options.backSpeed,t.smartBackspace=t.options.smartBackspace,t.backDelay=t.options.backDelay,t.fadeOut=t.options.fadeOut,t.fadeOutClass=t.options.fadeOutClass,t.fadeOutDelay=t.options.fadeOutDelay,t.isPaused=!1,t.strings=t.options.strings.map(function(t){return t.trim()}),"string"==typeof t.options.stringsElement?t.stringsElement=document.querySelector(t.options.stringsElement):t.stringsElement=t.options.stringsElement,t.stringsElement){t.strings=[],t.stringsElement.style.display="none";var r=Array.prototype.slice.apply(t.stringsElement.children),i=r.length;if(i)for(var o=0;o<i;o+=1){var u=r[o];t.strings.push(u.innerHTML.trim())}}t.strPos=0,t.arrayPos=0,t.stopNum=0,t.loop=t.options.loop,t.loopCount=t.options.loopCount,t.curLoop=0,t.shuffle=t.options.shuffle,t.sequence=[],t.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},t.typingComplete=!1;for(var o in t.strings)t.sequence[o]=o;t.currentElContent=this.getCurrentElContent(t),t.autoInsertCss=t.options.autoInsertCss,this.appendAnimationCss(t)}},{key:"getCurrentElContent",value:function(t){return t.attr?t.el.getAttribute(t.attr):t.isInput?t.el.value:"html"===t.contentType?t.el.innerHTML:t.el.textContent}},{key:"appendAnimationCss",value:function(t){if(t.autoInsertCss&&(t.showCursor||t.fadeOut)&&!document.querySelector("[data-typed-js-css]")){var e=document.createElement("style");e.type="text/css",e.setAttribute("data-typed-js-css",!0);var n="";t.showCursor&&(n+="\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "),t.fadeOut&&(n+="\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      "),0!==e.length&&(e.innerHTML=n,document.body.appendChild(e))}}}]),t}();e.default=u;var l=new u;e.initializer=l},function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var n={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onComplete:function(t){},preStringTyped:function(t,e){},onStringTyped:function(t,e){},onLastStringBackspaced:function(t){},onTypingPaused:function(t,e){},onTypingResumed:function(t,e){},onReset:function(t){},onStop:function(t,e){},onStart:function(t,e){},onDestroy:function(t){}};e.default=n,t.exports=e.default},function(t,e){function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),s=function(){function t(){n(this,t)}return r(t,[{key:"typeHtmlChars",value:function(t,e,n){if("html"!==n.contentType)return e;var r=t.substr(e).charAt(0);if("<"===r||"&"===r){var s="";for(s="<"===r?">":";";t.substr(e+1).charAt(0)!==s&&!(++e+1>t.length););e++}return e}},{key:"backSpaceHtmlChars",value:function(t,e,n){if("html"!==n.contentType)return e;var r=t.substr(e).charAt(0);if(">"===r||";"===r){var s="";for(s=">"===r?"<":"&";t.substr(e-1).charAt(0)!==s&&!(--e<0););e--}return e}}]),t}();e.default=s;var i=new s;e.htmlParser=i}])})}).call(e,n(4)(t))},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.terminalcommands=[{contact:"<br><b>Email:</b> solomzi.jikani@gmail.com <br/><b>Mobile:</b> 071 786 2455 <br/>"},{experience:"<br><br> <b>Izingcweti Digital Advisory (Feb 2017 - Dec 2017):</b> <span class='prefix-root'>Full-stack developer (part-time internship)</span>\n        <br> <b>Nologo Studios (March 2018 - April 2019):</b> <span class='prefix-root'>Front-end developer full-time</span>\n        <br> <b>Mytelnet (August 2019 - Present):</b> <span class='prefix-root'>Full-stack developer full-time</b>"},{languages:"<br/><br/><b> --- Programming languages --- </b><br/><br/> Nodejs (Fastify, Express & Restify)<br/> C# (MVC5, Web API2 & .NET Core 3.x)<br/> GoLang<br/> TypeScript/JavaScript<br/> HTML/CSS<br/><br/><b>  --- Frontend Frameworks --- </b><br/> Vuejs 2+<br/> Angular 2+<br/><br/><b> --- Mobile --- </b><br/> NativeScript<br/> Ionic<br/><br/><b> --- Databases --- </b><br/> MSSQL<br/> MySQL<br/> MongoDB<br/> PostgreSQL"},{about:"<br><br>My name is Solomzi Jikani, a <b>qualified full-stack software developer</b> based in Durban, South Africa. I am also a <b>YouTuber</b>, a minimalist, and I'm passionate about `all-things-high-performance`. I am originally from Port St Johns , Eastern Cape. I ended up in KZN as it is where I did my tertiary education. I understand 4 languages, and can speak 2 fluently.  <b>I can write in 4 programming languages</b>, and I hope one day to write in C. I have an <b>imposter syndrome</b>, it is my greatest strength , and my greatest weakness. My weekends are mostly hikes, or hanging with friends for some football games."},{sourcecode:"The source code for this website is available on my <a href='https://github.com/wiredmartian/root-terminal' target='_blank'>github</a> :)"}]},function(t,e){},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=n.p+"Solomzi_Jikani_-_Software_Developer.pdf"},function(t,e,n){"use strict";t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function s(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function i(t,e){function n(){if("string"==typeof L.element){var t=document.querySelector(L.element);if(t){"small"===t.localName&&(L.element=t,t.focus(),L.element.addEventListener("keydown",r),P(),E())}else console.error("The element "+L.element+" was not found")}else console.error(L.element+" unexpected element")}function r(t){if("Enter"===t.key&&13===t.which&&!t.shiftKey){t.preventDefault();var e="";if(t.innerHTML===t.innerText&&(e=L.element.innerText),e){var n=void 0;if("clear"===(e=e.toLocaleLowerCase())||"clear()"===e)return void i();n="help"===e?w():g(e),x(),l(n)}else console.error("You have entered an invalid input")}}function i(){var t=document.querySelector(".lines"),e=Array.from(document.querySelectorAll(".line"));e.forEach(function(n,r){e.length-1!==r&&t.removeChild(e[r])}),document.querySelector("#typewriter").classList.add("hidden"),document.querySelector("span.typed-cursor").classList.add("hidden"),L.element.innerText="",L.element.innerHTML=""}function a(t){return/<[a-z][\s\S]*>/.test(t)}function l(t){var e=c(),n=e.cloneNode(!0),r=n.querySelector("#commandInput");r&&(r.parentElement.firstElementChild.innerText=L.options.root,r.parentElement.firstElementChild.classList.add("prefix-root"),"string"!=typeof t?t.then(function(t){r.innerHTML=t}):a(t)?r.innerHTML=t:r.innerText=t),e.after(n),p(e,function(){var t=c(),e=t.cloneNode(!0),n=e.querySelector("#commandInput");n&&(n.parentElement.firstElementChild.innerText=L.options.guest,n.parentElement.firstElementChild.classList.remove("prefix-root"),n.innerHTML="",n.innerText="",t.after(e),p(t,null)),L.element=n,d(n),P(),E()})}function c(){var t=Array.from(document.querySelectorAll(".line"));return t[t.length-1]}function p(t,e){var n=t.querySelector("#commandInput");n&&(f(n),n.removeAttribute("contenteditable"),n.removeAttribute("id"),n.disabled=!0),e&&e()}function f(t){t.removeEventListener("keydown",r,!1)}function d(t){t.addEventListener("keydown",r)}function m(t){var e=new Object({root:"wiredmartian@user:~ $",guest:"guest@user:~ $",intro:"",source:"local",prefix:"wm",commands:[{os:"Linux"}]});Object.assign(e,t),L.options=e,t.commands||t.source&&(L.options.commands=o.terminalcommands)}function h(t){return t.toString().toLowerCase().trim()===L.options.prefix}function y(t){return t.toString().trim().split(" ")[0].trim()}function b(){var t=[];return[].concat(s(L.options.commands)).map(function(e){var n=Object.keys(e),r=[].concat(s(n));t.push(r)}),t}function g(t){var e=b(),n="";if(0!==e.length&&t){if(!h(y(t)))return"<span style='color:red'>\""+t+"\" is not recognized as an internal or external command, operable program or batch file.</span><br><img class='git-image' src="+img+"/>";if(t=t.split(" "),!t[1])return n=w();t=t[1].toString().trim();for(var r=0;r<e.length;r++)if(e[r].toString().includes(t.toLocaleLowerCase())){n=Object.values(L.options.commands[r])[0];break}}if(n)return n;return"<span style='color:red'>\""+t+'" is not recognized as an internal or external command, operable program or batch file.\n        </span><br><img alt="" class=\'git-image\' src="https://www.memesmonkey.com/images/memesmonkey/ba/ba8153b6def991d0ac72155dc915dea7.jpeg">'}function v(t){var e="<div class='window-title-bar'>wiredmartian:~</div>\n<div id='window' class='terminal'>\n    <div class='typewriter-container'><span id='typewriter'></span></div>\n    <div class='lines'>\n        <div class='line'>\n            <span class='prefix'>guest@user:~ $ </span>\n            <span></span>\n            <small id='commandInput' class='caret' contenteditable='true' spellcheck='false'></small>\n        </div>\n    </div>\n</div>",n=document.querySelector("#terminal-container");n&&a(e)?(n.innerHTML=e,k(),t(!0)):t()}function k(){var t=["<small>Terminal is a simple javascript mini library that mimics the standard terminal (win + linux). ^1000Use the <span class='prefix-root'>$ help</span> command to view all the available commands. ^1000Use <span class='prefix-root'>$ clear()</span> to clear this message</small>"];void 0!==L.options.intro&&""!==L.options.intro&&(t=L.options.intro),S(t)}function w(){var t="<br><strong>Use the commands below to query info: </strong><br>",e=L.options.prefix;return Array.from(L.options.commands).map(function(n){var r=Object.keys(n);t+='<span class="prefix-root">'+e+" "+r+"</span><br>"}),t+="<strong>To clear the terminal, use <b>clear</b></strong>"}function C(){var t=L.options.intro;if(t&&L.options.intro.constructor===Array)return t}function S(t){var e=C();t=e||Array.from(t),T({strings:t,startDelay:1e3,typeSpeed:50,backSpeed:20,cursorChar:"_"})}function T(t){new u.default("#typewriter",t)}function P(){L.element.addEventListener("click",function(){L.element.classList.add("active")})}function x(){L.element.classList.remove("active")}function E(){L.element.addEventListener("blur",function(){L.element.classList.remove("active")})}var L=this;L.options=e,L.element=t,function(){v(function(t){t&&(n(),m(L.options))})}()}var o=n(1),a=n(0),u=r(a);n(2),new i("#commandInput",{root:"root@mars:~ $",guest:"guest@mars:~ $",intro:["<small>Hi, my name is <b>Solomzi Jikani, a software developer</b> based in Durban.^500<br/> \n    I am a minimalist, and this is my minimal website. It is a <span class='prefix-root'>terminal-like</span> webpage, and it uses commands to view information.^500 <br/>To view available commands, type in <span class='prefix-root'>help</span> or <span class='prefix-root'>wm</span> and click enter. ^800 <br/>Type <span class='prefix-root'>clear()</span> to clear all previous information</small> <br/><br/> ^500Alternatively, you can click here <b><a href=\""+r(n(3)).default+'" target="_blank">To Download My Resume</a></b><br/> Thanks for visiting :)'],source:"local",prefix:"wm"})}]);