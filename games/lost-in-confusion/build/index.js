!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:11,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;console.log(G());var n=e>51?51:e;Y=1===t?0:Y,document.getElementById("moves").innerHTML=Y,document.getElementById("level").innerHTML=t,O.clear(),W.clear(),j=(0,m.default)(n,S),z=(0,p.default)(j),C=(0,b.default)(j,z.walls),B.followPuppet.apply(B,o(j.getVirtPos(C.getPos()))),L&&(B.setTrainOfThoughtAndAppear(["Welcome to my confused mind!","I have to find a way out of here!","Use the arrow keys to move me around...","left click to rotate my brain barriers...","and right click to move the rotation point...","of a brain barrier.","Press any key to suppress my thought bubble...","Be careful not to squash me!"]),L=!1),(0,T.initGameEvents)(z,C,j,R,A,x,B,function(){return i(function(){return a()})},function(){return i(function(){H(t,Y),a(n+2,t+1)})},function(){document.getElementById("moves").innerHTML=++Y})}function i(e){C=null,z.walls=[],e()}var u=n(1),l=r(u),f=n(2),c=r(f),s=n(3),h=r(s),d=n(4),g=r(d),v=n(5),p=r(v),y=n(7),m=r(y),w=n(8),b=r(w),M=n(9),P=r(M),T=n(10),S=1e3,I=1e3,x=document.getElementById("foo-layer"),A=document.getElementById("bar-layer"),E=document.getElementById("baz-layer"),k=document.getElementById("scores"),O=(0,l.default)(x.getContext("2d"),x),_=(0,l.default)(A.getContext("2d"),A),W=(0,l.default)(E.getContext("2d"),A),R=(0,g.default)(),j=void 0,z={walls:[]},C=null,B=(0,P.default)(S),L=!0,Y=0,G=function(){return JSON.parse(localStorage.getItem("high-scores")||"[]")},H=function(e,t){localStorage.setItem("high-scores",JSON.stringify(G().concat([{level:e,moves:t}]).sort(function(e,t){return e.level>t.level?-1:e.level<t.level?1:e.moves<t.moves?-1:1}).filter(function(e,t){return t<10})))};(0,h.default)(S,I,(0,c.default)([x,A,E],R.onResize,O.onResize,_.onResize,W.onResize,function(){return[C].filter(function(e){return null!==e}).concat(B).concat(z.walls).forEach(function(e){return e.forceUpdate()})},function(e,t,n){var r=window,o=r.innerWidth,a=r.innerHeight;o>=a?(k.style.left=t,k.style.width=o-t,k.style.height=n,k.style.top=0):(k.style.width=t,k.style.top=n,k.style.height=a-n,k.style.left=0)})),setInterval(function(){return z.walls.forEach(function(e){return e.animateRotation(W.clear)})},2),a();var X=function e(){O.render([C].filter(function(e){return null!==e}).concat(z.walls.filter(function(e){return!e.isAnimating()}))),_.render([B]),W.render(z.walls.filter(function(e){return e.isAnimating()})),requestAnimationFrame(e)};X()},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=void 0,r=!1;return{onResize:function(e){n=e},clear:function(){r=!0},render:function(o){r?(e.clearRect(0,0,t.width,t.height),r=!1):o.filter(function(e){return e.updated()}).forEach(function(t){return t.clear(e,n)}),o.filter(function(e){return e.updated()}).forEach(function(t){return t.draw(e,n)})}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(t,n,r){e.forEach(function(e){e.width=n,e.height=r})}for(var n=arguments.length,r=Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return[t].concat(r)}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){function r(e,t,r){n.forEach(function(n){return n(r,e,t)})}function o(){var t=window,n=t.innerWidth,o=t.innerHeight;n*a>o?r(parseInt(Math.floor(o/a),10),o,o/a/e):r(n,parseInt(Math.floor(n*a),10),n/e)}var a=t/e;o(),window.addEventListener("resize",o)}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=void 0,t=[];return{onResize:function(t){e=t},add:function(n,r){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:window,a=function(t){return r(t,e)};t.push({elem:o,eventName:n,fn:a}),o.addEventListener(n,a)},clear:function(){t.forEach(function(e){var t=e.elem,n=e.eventName,r=e.fn;return t.removeEventListener(n,r)})}}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.initGrid,n=e.Types,r=e.getP,o=e.getY,i=e.SIZE,u=(0,a.default)(e),l=u.makeWall,f=t();f[r((i-1)/2,(i-1)/2)]=n.ClosedSpace;for(var c=[],s=0;s<i*i;s+=Math.floor(3*Math.random())+1){var h=s+o(s)%2;if(f[h]!==n.ClosedSpace){var d=l(h,f,0===Math.floor(2.5*Math.random())?3:2);null!==d&&c.push(d)}}return{walls:c,complexity:c.length}};var o=n(6),a=r(o)},function(e,t){"use strict";function n(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{!r&&u.return&&u.return()}finally{if(o)throw a}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();t.default=function(e){var t=e.getOpen,o=e.Types,a=e.getScreenPos,i=e.getGridSize,u=e.getRect,l=e.getX,f=e.getY,c=e.getP,s=function(e){var t=e,o=Math.floor(Math.random()*e.length),s=t[o],h=!0,d=0,g=function(){return{x:l(s),y:f(s)}},v=function(e,t,n){return{x:e.x+Math.round(t.x*Math.cos(n)-t.y*Math.sin(n)),y:e.y+Math.round(t.x*Math.sin(n)+t.y*Math.cos(n))}},p=function(e,t,n,r){return e.map(function(e,o){return v(t,n[o],r)}).map(function(e){var t=e.x,n=e.y;return c(t,n)})},y=function(){for(var t=g(),n=e.map(function(e){return{x:l(e),y:f(e)}}),r=n.map(function(e){return{x:t.x-e.x,y:t.y-e.y}}),o=0;o<4;o++){var a=90*o*(Math.PI/180),i=p(n,t,r,a);if(i.filter(function(t,n){return t===e[n]}).length===e.length)return o}return 0},m=function(e,r,o){var u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;e.save();var l=a(s,r);e.translate.apply(e,n(l)),e.rotate(d*Math.PI/180),e.beginPath(),e.lineCap="round",e.strokeStyle=o,e.lineWidth=Math.floor(i(r)-2*u),t.forEach(function(t,o){0===o?e.moveTo.apply(e,n(a(t,r).map(function(e,t){return e-l[t]}).map(function(e){return e-u}))):e.lineTo.apply(e,n(a(t,r).map(function(e,t){return e-l[t]}).map(function(e){return e-u})))}),e.stroke(),e.restore()},w=function(e,t){e.save(),e.beginPath(),e.fillStyle="rgb(96, 0, 0)",e.translate.apply(e,n(a(s,t))),e.arc(-1,-1,i(t)/10,0,2*Math.PI,!1),e.fill(),e.beginPath(),e.strokeStyle="rgb(196, 96, 96)";var r=i(t);e.lineWidth=Math.round(r/14),e.moveTo(-1,-1),e.lineTo(-3*t,-.4*r*t),e.stroke(),e.restore()},b=y();return{movePivot:function(){o=o<t.length-1?o+1:0,s=t[o],e=t,b=y(),h=!0},getSpaces:function(){return t},isAt:function(e,n,o){for(var u=i(o)/2,l=0;l<t.length;l++){var f=a(t[l],o),c=r(f,2),s=c[0],h=c[1];if(h-u<n&&h+u>n&&s-u<e&&s+u>e)return!0}return!1},rotate:function(n){var r=g(),o=e.map(function(e){return{x:l(e),y:f(e)}}),a=o.map(function(e){return{x:r.x-e.x,y:r.y-e.y}}),i=b;do{b=3===b?0:b+1;var u=90*b*(Math.PI/180),c=p(o,r,a,u);if(c.indexOf(-1)<0&&0===c.filter(function(e){return!n(e)}).length){t=c;break}}while(b!==i);return d=i<b?Math.abs(i-b)*-90:i>b?Math.abs(i-4-b)*-90:0,h=!0,b},isAnimating:function(){return 0!==d},animateRotation:function(e){d<0&&(d++,0===d&&e(),h=!0)},draw:function(e,t){m(e,t,"rgba(96, 0, 0, 0.6)",0),m(e,t,"rgba(128, 0, 0, 0.8)",1),m(e,t,"rgb(196, 0, 0)",2),w(e,t),h=!1},clear:function(e,r){0!==d&&e.clearRect(0,0,e.canvas.width,e.canvas.height),t.forEach(function(t){e.clearRect.apply(e,n(u(t,r).map(function(e,t){return t<2?e-1:e+1})))})},forceUpdate:function(){h=!0},updated:function(){return h}}},h=function e(n,r){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];r[n]=o.ClosedSpace;var u=t(n,r);return 0===u.length||1===a?i.length<1?null:s(i.concat(n)):e(u[parseInt(Math.random()*u.length,10)],r,a-1,i.concat(n))};return{makeWall:h}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n={OpenSpace:0,PathSpace:1,ClosedSpace:2},r=t/e,o=function(t){return t%e},a=function(t){return(t-t%e)/e},i=function(t,n){return t>=0&&t<e&&n>=0&&n<e?t+n*e:-1},u=function(t,n){return[n>0?i(t,n-1):null,n<e-1?i(t,n+1):null,t>0?i(t-1,n):null,t<e-1?i(t+1,n):null]},l=function(e,t){return[o(e)*r*t+r*t*.5,a(e)*r*t+r*t*.5]},f=function(e,t){return[o(e)*r*t,a(e)*r*t,r*t,r*t]},c=function(e){return r*e},s=function(e){return[o(e)*r+r/2,a(e)*r+r/2]},h=function(e,t){return t[e]===n.OpenSpace},d=function(e,t){return u(o(e),a(e)).filter(function(e){return h(e,t)})},g=function(){for(var t=[],r=0;r<e;r++)for(var o=0;o<e;o++)t[i(o,r)]=n.OpenSpace;return t},v=function(e,t){return function(n){return e.filter(function(e,n){return n!==t}).map(function(e){return e.getSpaces()}).reduce(function(e,t){return e.concat(t)},[]).indexOf(n)<0}};return{SIZE:e,getRect:f,getScreenPos:l,getGridSize:c,getVirtPos:s,getX:o,getY:a,getP:i,getOpen:d,Types:n,initGrid:g,gridSpaceIsFree:v}}},function(e,t){"use strict";function n(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var r=e.getP,o=e.getScreenPos,a=e.getGridSize,i=e.SIZE,u=e.getRect,l=e.getX,f=e.getY,c=r((i-1)/2,(i-1)/2),s=c,h=!0;return{getPos:function(){return c},move:function(n,o){var a=r(l(c)+n,f(c)+o);s=c,a>-1&&e.gridSpaceIsFree(t,-1)(a)&&(c=a),h=!0},draw:function(e,t){e.beginPath(),e.fillStyle="rgb(128,128,255)",e.arc.apply(e,n(o(c,t)).concat([a(t)/3,0,2*Math.PI,!1])),e.fill(),e.fillStyle="black",e.font="normal "+.75*a(t)+"px sans-serif",e.save(),e.translate(-(a(t)/4),a(t)/10),e.fillText.apply(e,["∞"].concat(n(o(c,t)))),e.restore(),h=!1},clear:function(e,t){e.clearRect.apply(e,n(u(s,t)))},forceUpdate:function(){h=!0},updated:function(){return h}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t={x:0,y:0},n=!0,r=!1,o="...",a=[],i=function(){a.forEach(function(e){return clearTimeout(e)}),r=!1,n=!0,o="..."};return{isVisible:function(){return r},followPuppet:function(e,r){t={x:e,y:r},n=!0},disappear:i,setTrainOfThoughtAndAppear:function(e){var t=2500;o=e.shift(),a.forEach(function(e){return clearTimeout(e)}),e.forEach(function(e,r){a.push(setTimeout(function(){o=e,n=!0},t*(r+1)))}),a.push(setTimeout(i,(e.length+1)*t)),r=!0,n=!0},draw:function(a,i){if(r){var u=t.y>250?150:450,l=e/2;a.fillStyle="rgba(255,255,255,1)",a.strokeStyle="black",a.lineWidth=1*i,a.save(),a.translate(l*i,u*i),a.scale(3,1),a.beginPath(),a.arc(0,0,150*i,2*Math.PI,!1),a.fill(),a.stroke(),a.restore();for(var f=Math.atan2(u-t.y,l/2-t.x),c=f-1.5,s=Math.sqrt(Math.pow(l/2-t.x,2)+Math.pow(u-t.y,2)),h=t.x-10,d=t.y,g=0;g<10;g++)c+=.2,h+=Math.cos(c)*(s*(g/70)),d+=Math.sin(c)*(s*(g/70)),a.beginPath(),a.arc(h*i,d*i,(g+1)*i,2*Math.PI,!1),a.fill();a.font="bold "+28*i+"px sans-serif",a.fillStyle="black",a.fillText(o,l*i-a.measureText(o).width/2,(14+u)*i),n=!1}},clear:function(e){e.clearRect(0,0,e.canvas.width,e.canvas.height)},forceUpdate:function(){n=!0},updated:function(){return n}}}},function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e,t,n,o,i,u,l,f,c,s){var h=0,d=setInterval(function(){h++,h>=10&&!l.isVisible()&&(l.setTrainOfThoughtAndAppear((0,a.strayThought)()),h=0)},1e3);o.add("click",function(r,i){return e.walls.filter(function(e){return e.isAnimating()}).length>0?r.preventDefault():(e.walls.map(function(e,t){return{w:e,wIdx:t}}).filter(function(e){var t=e.w;return t.isAt(r.clientX-r.target.offsetLeft,r.clientY-r.target.offsetTop,i)}).forEach(function(t){var r=t.w,o=t.wIdx;r.clear(u.getContext("2d"),i),r.rotate(n.gridSpaceIsFree(e.walls,o))}),s(),void(n.gridSpaceIsFree(e.walls,-1)(t.getPos())||(l.setTrainOfThoughtAndAppear([(0,a.gameOverThought)()]),clearInterval(d),o.clear(),window.setTimeout(f,2500))))},i),o.add("contextmenu",function(t,n){return e.walls.filter(function(e){return e.isAnimating()}).length>0?t.preventDefault():(e.walls.filter(function(e){return e.isAt(t.clientX-t.target.offsetLeft,t.clientY-t.target.offsetTop,n)}).forEach(function(e){return e.movePivot()}),s(),t.preventDefault())}),o.add("keydown",function(e,i){switch(h=0,l.disappear(),e.keyCode){case 37:t.move(-1,0),s();break;case 38:t.move(0,-1),s();break;case 39:t.move(1,0),s();break;case 40:t.move(0,1),s()}l.followPuppet.apply(l,r(n.getVirtPos(t.getPos()))),0!==n.getX(t.getPos())&&0!==n.getY(t.getPos())&&n.getX(t.getPos())!==n.SIZE-1&&n.getY(t.getPos())!==n.SIZE-1||(clearInterval(d),o.clear(),l.setTrainOfThoughtAndAppear([(0,a.salvationThought)()]),window.setTimeout(c,1e3))})}Object.defineProperty(t,"__esModule",{value:!0}),t.initGameEvents=void 0;var a=n(11);t.initGameEvents=o},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=["Noooo!!","The agony!","Why?!","What did you do?","The pain!","The anguish!"],r=["Thank you!","Bless you!","Salvation!","Freedom!","Joy!","Hurray!"],o=[["Where did I put my keys?","I must have left them somewhere..."],["What are you waiting for?","I'm going crazy in here!"],["What were the four noble truths again?","Suffering...","...the origin of suffering...","...the cessation of suffering...","...the noble 8-fold path."],["Stuck in the wheel of becoming..."],["3.14","3.141","3.1415","3.14159","3.141592..."],["These games always involve Pi...","...but never 42...","...or do they?"],["window.setInterval(() => thoughtCloud.setThought(strayThought()), 10000)"],["You think this game sucks?","What about me, huh?","I'm the one stuck in here!"],["We should e-mail the author of this game.","Tell him what he did!","Lost in confusion...","...he must be insane."],["Just focus on following your breath"],["How much idle time do you think you have...","...before I start yapping again?"],["What is the capital of Slovakia?","What is the point of this game anyway?"]],a=function(e){return e[Math.floor(Math.random()*e.length)]},i=function(){return a(n)},u=function(){return a(r)},l=function(){return a(o).slice()};t.gameOverThought=i,t.salvationThought=u,t.strayThought=l}]);