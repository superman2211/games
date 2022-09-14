var Tetris=function(t){var e={};function s(i){if(e[i])return e[i].exports;var n=e[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,s),n.l=!0,n.exports}return s.m=t,s.c=e,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(i,n,function(e){return t[e]}.bind(null,n));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=0)}([function(t,e,s){t.exports=s(1)},function(t,e,s){s(2),s(3);const i=s(4);t.exports=i.app},function(t,e,s){},function(t,e){var s,i,n,a,r,h,o,c;"currentTransform"in CanvasRenderingContext2D.prototype||("mozCurrentTransform"in CanvasRenderingContext2D.prototype?Object.defineProperty(CanvasRenderingContext2D.prototype,"currentTransform",{get:function(){var t=this.mozCurrentTransform;return{a:t[0],b:t[1],c:t[2],d:t[3],e:t[4],f:t[5]}},set:function(t){this.mozCurrentTransform=[t.a,t.b,t.c,t.d,t.e,t.f]},enumerable:!0,configurable:!1}):"webkitCurrentTransform"in CanvasRenderingContext2D.prototype?Object.defineProperty(CanvasRenderingContext2D.prototype,"currentTransform",{get:function(){return this.webkitCurrentTransform},set:function(t){this.webkitCurrentTransform=t},enumerable:!0,configurable:!1}):(Object.defineProperty(CanvasRenderingContext2D.prototype,"currentTransform",{get:function(){return this._t2stack&&this._t2stack[this._t2stack.length-1]||{a:1,b:0,c:0,d:1,e:0,f:0}},set:function(t){this._t2stack||(this._t2stack=[{}]),this._t2stack[this._t2stack.length-1]={a:t.a,b:t.b,c:t.c,d:t.d,e:t.e,f:t.f}},enumerable:!0,configurable:!1}),CanvasRenderingContext2D.prototype.save=(c=CanvasRenderingContext2D.prototype.save,function(){this._t2stack||(this._t2stack=[{a:1,b:0,c:0,d:1,e:0,f:0}]);var t=this._t2stack[this._t2stack.length-1];this._t2stack.push(t&&{a:t.a,b:t.b,c:t.c,d:t.d,e:t.e,f:t.f}),c.call(this)}),CanvasRenderingContext2D.prototype.restore=(o=CanvasRenderingContext2D.prototype.restore,function(){this._t2stack&&this._t2stack.pop(),o.call(this)}),CanvasRenderingContext2D.prototype.transform=(h=CanvasRenderingContext2D.prototype.transform,function(t,e,s,i,n,a){this._t2stack||(this._t2stack=[{a:1,b:0,c:0,d:1,e:0,f:0}]);var r=this._t2stack[this._t2stack.length-1],o=r.a*t+r.c*e,c=r.b*t+r.d*e,l=r.a*s+r.c*i,u=r.b*s+r.d*i,p=r.e+r.a*n+r.c*a,f=r.f+r.b*n+r.d*a;r.a=o,r.b=c,r.c=l,r.d=u,r.e=p,r.f=f,h.call(this,t,e,s,i,n,a)}),CanvasRenderingContext2D.prototype.setTransform=(r=CanvasRenderingContext2D.prototype.setTransform,function(t,e,s,i,n,a){this._t2stack||(this._t2stack=[{}]),this._t2stack[this._t2stack.length-1]={a:t,b:e,c:s,d:i,e:n,f:a},r.call(this,t,e,s,i,n,a)}),CanvasRenderingContext2D.prototype.resetTransform=(a=CanvasRenderingContext2D.prototype.resetTransform,function(){this._t2stack||(this._t2stack=[{}]),this._t2stack[this._t2stack.length-1]={a:1,b:0,c:0,d:1,e:0,f:0},a&&a.call(this)}),CanvasRenderingContext2D.prototype.scale=(n=CanvasRenderingContext2D.prototype.scale,function(t,e){this._t2stack||(this._t2stack=[{a:1,b:0,c:0,d:1,e:0,f:0}]);var s=this._t2stack[this._t2stack.length-1];t=t||1,e=e||t,s.a*=t,s.c*=e,s.b*=t,s.d*=e,n.call(this,t,e)}),CanvasRenderingContext2D.prototype.rotate=(i=CanvasRenderingContext2D.prototype.rotate,function(t){this._t2stack||(this._t2stack=[{a:1,b:0,c:0,d:1,e:0,f:0}]);var e=this._t2stack[this._t2stack.length-1],s=Math.cos(-t),n=Math.sin(-t),a=e.a*s-e.c*n,r=e.b*s-e.d*n,h=e.c*s+e.a*n,o=e.d*s+e.b*n;return e.a=a,e.b=r,e.c=h,e.d=o,i.call(this,t)}),CanvasRenderingContext2D.prototype.translate=(s=CanvasRenderingContext2D.prototype.translate,function(t,e){this._t2stack||(this._t2stack=[{a:1,b:0,c:0,d:1,e:0,f:0}]);var i=this._t2stack[this._t2stack.length-1];return i.e+=t*i.a+e*i.c,i.f+=t*i.b+e*i.d,s.call(this,t,e)})))},function(t,e,s){"use strict";s.r(e);var i={};s.r(i),s.d(i,"vec3",function(){return Y}),s.d(i,"add",function(){return Z}),s.d(i,"scale",function(){return tt}),s.d(i,"inverse",function(){return et}),s.d(i,"addScale",function(){return st}),s.d(i,"copy",function(){return it});const n={Over:"over",Play:"play"},a=Math.PI,r=2*a;function h(t,e){return Math.random()*(e-t)+t}function o(t,e){return Math.floor(h(t,e))}function c(t,e,s){return Math.min(Math.max(s,t),e)}function l(t){return(Math.sin(t)+1)/2}function u(){return Date.now()}function p(){}function f(t,e=t){return{interpolate(s){t=function(t,e,s=.2){return t+(e-t)*s}(t,e,s)},target(t){e=t},set(e){t=e},get:()=>t}}const d=(t,e,s=1e3)=>{u()-t>s&&e()},g=(t,e,s)=>{let i=0;return n=>{(i+=n)>=e?(t(),i=0):s&&s(i/e)}};function y(t,e){const s={highscore:0,width:t,height:e,ratio:e/t,tileWidth:.031*t};return{state:n.Over,game:s}}function m(t,e){Object.keys(t).forEach(s=>e(s,t[s]))}function w(t,e){return Object.keys(t).reduce((s,i)=>({[i]:e(i,t[i]),...s}),{})}function _(t){const e={};Object.keys(t).length;let s=0;this.progress=()=>s,this.get=t=>e[t],this.start=()=>Promise.all(Object.values(w(t,(t,i)=>new Promise(t=>{let e=new Image;e.onload=()=>{t(e)},e.src=i}).then(i=>{e[t]=i,s++})))).then(t=>e)}function v(t,e){const{width:s,height:i}=t.game;this.noop=t=>{},this.buffers={Screen:e,Collision:document.createElement("canvas").getContext("2d")},this.renderTarget=this.buffers.Screen,this.raw=t=>t(this.renderTarget),this.draw=(t,e,s)=>{let i=this.renderTarget.currentTransform;return s?i=s(this.renderTarget,t,e):t(this.renderTarget,e),e?function(t,e){return{x:e.e+t.x*e.a,y:e.f+t.y*e.d,width:t.width*e.a,height:t.height*e.d}}(e,i):null},this.stroke=t=>this.raw(e=>{e.strokeStyle=t}),this.path=({path:t,x:e,y:s,width:i,height:n,transform:a},r)=>this.draw(e=>{e.fillStyle=r,e.fill(t)},{x:e,y:s,width:i,height:n},a),this.rect=({x:t,y:e,width:s,height:i,transform:n},a)=>this.draw(n=>{n.fillStyle=a,n.fillRect(t,e,s,i)},{x:t,y:e,width:s,height:i},n),this.image=({image:t,sx:e,sy:s,sWidth:i,sHeight:n,dx:a,dy:r,dWidth:h,dHeight:o,transform:c})=>this.draw(c=>{c.drawImage(t,e,s,i,n,a,r,h,o)},{x:a,y:r,width:h,height:o},c)}const b={Blue:4278190335,SwanWhite:4294439395,CrocTooth:4291939520,SummerSky:4281642208,GreyPorc:4286873978,Pumpkin:4294932799,CelGreen:4281588146,FluRed:4294922834,Mandarin:4294947138,LuckyP:4281085012,ChileanFire:4291649843},x=t=>{return[(16711680&t)>>>16,(65280&t)>>>8,255&t,(4278190080&t)>>>24]},k=t=>{const[e,s,i,n]=x(t),[a,r,h]=function(t,e,s){t/=255,e/=255,s/=255;var i,n,a=Math.max(t,e,s),r=Math.min(t,e,s),h=(a+r)/2;if(a==r)i=n=0;else{var o=a-r;switch(n=h>.5?o/(2-a-r):o/(a+r),a){case t:i=(e-s)/o+(e<s?6:0);break;case e:i=(s-t)/o+2;break;case s:i=(t-e)/o+4}i/=6}return[i,n,h]}(e,s,i);return[a,r,h,n]},C=(t,e,s,i)=>{const[n,a,r]=function(t,e,s){var i,n,a;if(0==e)i=n=a=s;else{function r(t,e,s){return s<0&&(s+=1),s>1&&(s-=1),s<1/6?t+6*(e-t)*s:s<.5?e:s<2/3?t+(e-t)*(2/3-s)*6:t}var h=s<.5?s*(1+e):s+e-s*e,o=2*s-h;i=r(o,h,t+1/3),n=r(o,h,t),a=r(o,h,t-1/3)}return[255*i,255*n,255*a]}(t,e,s);return(([t,e,s,i])=>(i<<24>>>0|t<<16>>>0|e<<8>>>0|s)>>>0)([n,a,r,i])};function M(t){let[e,s,i,n]=k(t);const a=[e,s,i,n];function r(t,e){let s=t+e;return 1===s?1:s%1}const h=t=>(...e)=>(t(...e),this);this.reset=h(t=>{e=a[0],s=a[1],i=a[2],n=a[3]}),this.hue=h(t=>e=r(e,t)),this.sat=h(t=>s=r(s,t)),this.lum=h(t=>i=r(i,t)),this.alp=h(t=>n=255*r(n/255,t)),this.rgba=()=>C(e,s,i,n),this.css=()=>(function(t,e,s,i){return`hsla(${360*t}, ${100*e}%, ${100*s}%, ${i/255})`})(e,s,i,n)}function T(t,{text:e,x:s,y:i,font:n="20px Arial",color:a="black"}){t.draw(t=>{t.fillStyle=a,t.font=n,t.fillText(e,s,i)})}function D(t,e,s){let i=s.material(),{view:n,lines:a,faces:r,faceIndexes:h}=s.geometry();e.draw(t=>{m(h,(e,s)=>{t.fillStyle=i[e]||"rgba(0, 0, 0, 0)";let a=r[s];t.beginPath();let h=n[a[0]];t.moveTo(h[0],h[1]),a.slice(1,a.length).map(t=>n[t]).forEach(e=>{t.lineTo(e[0],e[1])}),t.fill()}),t.strokeStyle=i.stroke||"rgba(0, 0, 0, 0)",a.forEach(e=>{t.beginPath();let s=n[e[0]],i=n[e[1]];t.moveTo(s[0],s[1]),t.lineTo(i[0],i[1]),t.stroke()})})}function S(t,e,s){const{width:i,height:n,tilesWidth:a}=t.data.game;this.render=t=>{const s=t.play;s.tiles.each(t=>(function(t,s){D(0,e,s.mesh)})(0,t)),s.blocks.each(t=>(function(t,s){D(0,e,s.mesh)})(0,t)),s.explosions.each(t=>(function(t,s){s.particles.each(t=>D(0,e,t.mesh))})(0,t)),function(t,s){D(0,e,s.mesh),s.bullets.each(t=>D(0,e,t.mesh))}(0,s.hero),function(t,s){if(!s.data)return;const[i,n]=s.view();T(e,{text:"G",font:"40px Arial",color:s.material(),x:i,y:n})}(0,s.goal)}}function z(t,e){const{width:s,height:i}=t.data.game;e.draw(t=>{t.font="30px Arial",t.textAlign="center"});const a=t=>{(t=>{t.play.data&&t.play.data.goal&&T(e,{text:"Nice you hit the goal!",font:"40px Arial",x:.5*s,y:.4*i})})(t),(t=>{const n=.6*i,a=.05*i;T(e,{text:"Left/Right arrows to move",x:.5*s,y:n+a}),T(e,{text:"Down arrow to limit jump, when released you get a jump boost",x:.5*s,y:n+2*a}),T(e,{text:"Up arrow to change gravity, works on highlighted areas",x:.5*s,y:n+3*a}),T(e,{text:"Avoid spikes, reach the goal",x:.5*s,y:n+4*a})})(),T(e,{text:"Press UP to play",x:.5*s,y:.5*i,font:"40px Arial"})};this.render=t=>{t.data.state===n.Over&&a(t)}}function R(t,e,s){const{width:i,height:n}=t.data.game,a=new S(t,e),r=new z(t,e),h=new M(b.Mandarin);this.render=t=>{e.draw(t=>{t.clearRect(0,0,i,n),t.fillStyle=h.css(),t.fillRect(0,0,i,n)},{x:0,y:0,width:i,height:n}),a.render(t,e),r.render(t,e)}}function P(t,e){e={name:"pool",warnLeak:400,...e};const s=(()=>{let t=0;return()=>t++})();let i=[],n=[];this.name=()=>e.name,this.alives=()=>i.length,this.total=()=>n.length+i.length,this.warnLeak=()=>e.warnLeak,this.toString=()=>`[${this.name()} alives: ${this.alives()} deads: ${n.length}]`,this.acquire=(e=(()=>{}))=>{let a;return this.total()>this.warnLeak()?(console.warn(`possible pool leak at ${this.name()}.`),null):(e(a=n.length>0?n.pop():t(s())),i.push(a),a)},this.acquireLimit=(t,e)=>{for(;this.alives()<e;)this.acquire(t)},this.release=t=>{let e=i.indexOf(t);e>-1&&n.push(i.splice(e,1)[0])},this.releaseAll=()=>{n=[...n,...i],i=[]},this.releaseIf=(t,e=(()=>{}))=>{let s=[],a=[];i.forEach(i=>{t(i)?(e(i),s.push(i)):a.push(i)}),i=a,n=[...s,...n]},this.each=t=>{i.forEach(t)},this.find=t=>i.find(t)}function j(t){const{width:e,height:s}=t.data.game;let i=.8*e,n=.5*e,a=.5*s,r=n,o=a,c=n,l=a;this.width=e,this.height=s,this.far=.5*-e,this.near=.78*-e,this.project=t=>{let e=i/(i+t[2]);return[t[0]*e+n,t[1]*e+a]};const u=g(()=>{c=h(.3*e,.7*e),l=h(.3*s,.7*s)},3e3);this.update=e=>{const{tick:s}=t.data;r=O(r,c),o=O(o,l),n=O(n,r),a=O(a,o),u(e)}}function O(t,e){return t+.01*(e-t)}const A=30,E=20;!function(){const t=[];for(var e=0;e<E;e++)for(var s=0;s<A;s++)t.push([e,s])}();function L(t){return t[0]+"."+t[1]}const I={" ":"space",".":"gravity","{":"leftwall","}":"rightwall",_:"topwall",V:"downspike",v:"upspike"},q={space:{},gravity:{gravity:!0},leftwall:{facing:"right",block:!0},rightwall:{facing:"left",block:!0},topwall:{facing:"top",block:!0},downspike:{kill:!0},upspike:{kill:!0}},F=["\n ____________________________\n{.........vvvvv..............}\n{............................}\n{..._.................____...}\n{............................}\n{.._........VV...............}\n{                            }\n{_                           }\n{                            }\n{                            }\n{                            }\n{______VV   V___________vvv  }\n{                           _}\n{              ______________}\n{                            }\n{          ____              }\n{  ___                       }\n{     _____      ____        }\n{            _         V     }\n{____________________________}\n"],U=function(){let t=1;return function(e,s){const i=I[e];return{id:++t,key:s,role:i,...q[i]}}}(),K=()=>(t=>{const e=t.split("\n");e.splice(0,1),e.splice(-1);for(;e.length<E;)e.unshift("                    ");let s={};return e.forEach((t,e)=>{for(t=t.split("");t.length<A;)t.push(" ");t.forEach((t,i)=>{let n=[e,i];s[L(n)]={role:U(t,L(n))}})}),s})(F[0]);function W(t,e){var s=t[0],i=t[1],n=t[2],a=t[3],r=t[4],h=t[5],o=t[6],c=t[7],l=t[8],u=t[9],p=t[10],f=t[11],d=t[12],g=t[13],y=t[14],m=t[15],w=e[0],_=e[1],v=e[2],b=e[3],x=e[4],k=e[5],C=e[6],M=e[7],T=e[8],D=e[9],S=e[10],z=e[11],R=e[12],P=e[13],j=e[14],O=e[15];return[w*s+_*r+v*l+b*d,w*i+_*h+v*u+b*g,w*n+_*o+v*p+b*y,w*a+_*c+v*f+b*m,x*s+k*r+C*l+M*d,x*i+k*h+C*u+M*g,x*n+k*o+C*p+M*y,x*a+k*c+C*f+M*m,T*s+D*r+S*l+z*d,T*i+D*h+S*u+z*g,T*n+D*o+S*p+z*y,T*a+D*c+S*f+z*m,R*s+P*r+j*l+O*d,R*i+P*h+j*u+O*g,R*n+P*o+j*p+O*y,R*a+P*c+j*f+O*m]}function $(t,e,s){return[1,0,0,0,0,1,0,0,0,0,1,0,t,e,s,1]}function G(t,e,s,i){return W(t,$(e,s,i))}function V(t,e){return W(t,function(t){var e=Math.cos(t),s=Math.sin(t);return[e,0,-s,0,0,1,0,0,s,0,e,0,0,0,0,1]}(e))}function H(t,e){return W(t,function(t){var e=Math.cos(t),s=Math.sin(t);return[e,s,0,0,-s,e,0,0,0,0,1,0,0,0,0,1]}(e))}function B(t,e,s){s={x:0,y:0,z:0,width:10,height:10,scale:1,theta:[0,0,0],...s},this.width=s.width,this.height=s.height;let i=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],n={};this.material=()=>n,this.paint=(t,e)=>{n[t]=e},this.geometry=()=>{let{vertices:s,lines:n,faces:a,faceIndexes:r}=e;return{view:s.map(t=>(function(t,e){let s=[];for(let i=0;i<4;i++){let n=0;for(let s=0;s<4;s++)n+=t[4*s+i]*e[s];s[i]=n}return s})(i,[...t,1])).map(e=>t.project(e)),lines:n,faces:a,faceIndexes:r}},this.updateModel=(t={})=>{s={...s,...t};const{x:e,y:n,z:a,width:r,height:h,scale:o,theta:c}=s;i=G(i=$(e,n,a),.5*-r,.5*-h,.5*-r),i=H(i=G(i,.5*r,.5*h,.5*r),c[0]),i=G(i=function(t,e,s,i){return W(t,function(t,e,s){return[t,0,0,0,0,e,0,0,0,0,s,0,0,0,0,1]}(e,s,i))}(i=H(i=V(i,c[1]),c[2]),o,o,o),.5*-r,.5*-h,.5*-r)},this.updateModel()}function N(t,e=r,s=10){const i=[],n=[],h=[];let o=[],c=0,l=0;for(let r=0;r<e;r+=a/s){let e=Math.cos(r)*t,s=Math.sin(r)*t;i.push([e,s,0]),o.push(l++),c++%2==0&&n.push([c,c-1])}h.push([...o,0]);return{vertices:i,lines:n,faces:h,faceIndexes:{front:0}}}function J(t,e=t){const s=[],i=[],n=[];s.push([0,0,0]),s.push([0,e,0]),s.push([t,e,0]),s.push([t,0,0]),i.push([0,1]),i.push([1,2]),i.push([2,3]),i.push([3,0]),n.push([0,1,2,3,0]);return{vertices:s,lines:i,faces:n,faceIndexes:{front:0}}}function Q(t,e=t,s=t){const i=[],n=[],a=[];i.push([0,0,0]),i.push([0,e,0]),i.push([t,e,0]),i.push([t,0,0]),i.push([0,0,s]),i.push([0,e,s]),i.push([t,e,s]),i.push([t,0,s]),n.push([0,1]),n.push([1,2]),n.push([2,3]),n.push([3,0]),n.push([0,4]),n.push([1,5]),n.push([2,6]),n.push([3,7]),n.push([4,5]),n.push([5,6]),n.push([6,7]),n.push([7,4]),a.push([0,1,2,3,0]),a.push([4,5,6,7,4]),a.push([0,4,5,1,0]),a.push([3,7,6,2,3]),a.push([0,4,7,3,0]),a.push([1,5,6,2,1]);return{vertices:i,lines:n,faces:a,faceIndexes:{front:0,back:1,left:2,right:3,top:4,bottom:5}}}function X(t,e=10){const s=[],i=[],n=[];s.push([0,0,0]),s.push([.5*t,t,0]),s.push([t,0,0]),s.push([0,0,e]),s.push([.5*t,t,e]),s.push([t,0,e]),i.push([0,1]),i.push([1,2]),i.push([2,0]),i.push([0,3]),i.push([1,4]),i.push([2,5]),i.push([3,4]),i.push([4,5]),i.push([5,3]),n.push([0,1,2,0]);return{vertices:s,lines:i,faces:n,faceIndexes:{front:0}}}function Y(t,e=t,s=t){return[t,e,s]}function Z(t,e){return[t[0]+e[0],t[1]+e[1],t[2]+e[2]]}function tt(t,e){return[t[0]*e,t[1]*e,t[2]*e]}function et(t){return tt(t,-1)}function st(t,e,s){return Z(t,tt(e,s))}function it(t){return[t[0],t[1],t[2]]}const{vec3:nt}=i;function at(t){t={pos:nt(0),vel:nt(0),acc:nt(0),theta:nt(0),vTh:nt(0),gravity:nt(0,10,0),...t};let{pos:e,vel:s,acc:i,theta:n,vTh:a,gravity:r}=t;this.jump=(t,e,s)=>{let i=nt(t,e,s);i=tt(i,-.6),this.vel({x:i[0],y:i[1],z:i[2]})},this.jump2=t=>{let e=-1*Math.sign(r[1])*Math.sqrt(Math.abs(2*r[1]*t));this.vel({x:0,y:e,z:0})},this.move=(t,e)=>{let s=t[0],i=2*s,n=20*s;this.acc({x:i}),this.vel({x:n})},this.pos=({x:t=e[0],y:s=e[1],z:i=e[2]})=>{e=nt(t,s,i)},this.vel=({x:t=s[0],y:e=s[1],z:i=s[2]})=>{s=nt(t,e,i)},this.acc=({x:t=i[0],y:e=i[1],z:s=i[2]})=>{i=nt(t,e,s)},this.rot=({x:t=n[0],y:e=n[1],z:s=n[2]})=>{n=nt(t,e,s)},this.vrot=({x:t=a[0],y:e=a[1],z:s=a[2]})=>{a=nt(t,e,s)},this.grav=t=>{r[1]=t},this.gravity=()=>r[1],this.falling=()=>r[1]>0,this.flying=()=>r[1]<0,this.values=(t=e,s=n)=>({x:t[0],y:t[1],z:t[2],theta:[s[0],s[1],s[2]]}),this.calculateUpdate=(t,h={})=>{const o=.01*t;let c=st(n,a,o),l=st(s,i,o);return l=st(l,r,o),(h.top&&l[1]<0||h.bottom&&l[1]>0)&&(l[1]=0),(h.left&&l[0]<0||h.right&&l[0]>0)&&(l[0]=0),{theta:c,vel:l,pos:st(e,l,o)}},this.applyUpdate=t=>{n=t.theta,s=t.vel,e=t.pos},this.update=t=>{this.applyUpdate(this.calculateUpdate(t))}}function rt(t=(()=>{}),e){let s=(e={life:3,...e}).life;this.init=()=>{s=e.life},this.alpha=()=>s/e.life,this.update=e=>{(s-=.001*e)<0&&t()}}const{vec3:ht}=i;function ot(t,e,s,i,n=ht(0,10,0)){const{camera:a}=t,{width:r,height:h}=t.data.game,o=new at({width:e.width,height:e.height,gravity:n});let c=new rt(s,{life:i}),l=this.physics=o;this.life=c,this.init=t=>{this.data={...t}},this.dimensions=t=>{const s=l.values(),i=this.calculatePhysics(t);return{before:ct(s,e.width),after:ct(i,e.height)}},this.calculatePhysics=t=>{let{pos:e,theta:s}=l.calculateUpdate(t);return l.values(e,s)},this.applyPhysics=(t,e)=>{let s=l.calculateUpdate(t,e);e.bottom?this.grounded=!0:this.grounded=!1,e.top?this.groundedTop=!0:this.groundedTop=!1,l.applyUpdate(s)};this.update=t=>{(t=>{e.updateModel(o.values())})(),c.update(t)}}const ct=(t,e,s=e)=>({left:t.x,top:t.y,right:t.x+e,bottom:t.y+s,front:t.z});function lt(t,e){const{camera:s}=t,{width:i,height:n}=t.data.game;let r;const h=new M(b.LuckyP);let o,c=new f(.1),l=new f(.1),u=new f(0),p=new f(.5);this.init=t=>{this.data={size:30,theta:0,...t},r=new M(b.ChileanFire);const e=this.data.size;let i;switch(u.target(0),p.target(.5),this.data.role){case"space":p=new f(.1),u=new f(.2),i=J(e);break;case"gravity":r=new M(b.CelGreen),p=new f(.8),u=new f(0),i=J(e);break;case"leftwall":o="right",i=Q(e);break;case"rightwall":o="left",i=Q(e);break;case"topwall":o="top",i=Q(e);break;case"downspike":r=new M(b.SwanWhite),i=X(e),this.data.theta=a;break;case"upspike":r=new M(b.SwanWhite),i=X(e);break;default:throw new Error("Bad tile role "+this.data.role)}this.mesh=new B(s,i,{width:e,height:e})},this.heroStep=t=>{"bottom"===t?l.set(.9):c.set(.6)},this.bulletStep=t=>{"space"===this.data.role?(u.set(.4),p.set(.3)):u.set(.2)};const d=t=>{u.interpolate(),p.interpolate(),c.interpolate(),l.interpolate(),this.mesh.paint("bottom",h.reset().alp(l.get()).css()),this.mesh.paint(o,h.reset().lum(c.get()).css()),this.mesh.paint("front",r.reset().alp(p.get()).hue(u.get()).css())},g=t=>{this.mesh.updateModel({x:this.data.x,y:this.data.y,z:0,theta:[0,0,this.data.theta]})};this.update=t=>{g(),d()}}function ut(t,e,s){const{camera:i}=t,{width:n,height:a}=t.data.game,h=new M(b.SummerSky);this.init=t=>{this.data={...t};let s=function(t,e=10){const s=[],i=[],n=[];return s.push([0,0,0]),s.push([0,t,0]),s.push([t,0,0]),s.push([0,0,e]),s.push([0,t,e]),s.push([t,0,e]),i.push([0,1]),i.push([1,2]),i.push([2,0]),i.push([0,3]),i.push([1,4]),i.push([2,5]),i.push([3,4]),i.push([4,5]),i.push([5,3]),n.push([0,1,2,0]),{vertices:s,lines:i,faces:n,faceIndexes:{front:0}}}(20);this.mesh=new B(i,s,{width:20,height:20}),this.life=new rt(()=>{e.blocks.release(this)})};const o=e=>{const{tick:i}=t.data;let n=(.001*i+s)%r,a=1+.2*Math.sin(this.life.alpha()*r);this.mesh.paint("front",h.reset().lum(.3*Math.sin(n)).css()),this.mesh.updateModel({x:this.data.x+4*l(Math.cos(n)),y:this.data.y+4*Math.cos(l(n)),z:0,scale:a,theta:[0,n,0]})};this.update=t=>{o(),this.life.update(t)}}const{vec3:pt}=i;function ft(t){const{camera:e}=t,{width:s,height:i}=t.data.game;let n=N(10,r,4);this.mesh=new B(e,n,{width:10,height:10}),this.entity=new ot(t,this.mesh,()=>{},0);let h=this.entity.physics;this.entity.life;this.bullets=new P(e=>new dt(t,this));const o=new M(b.GreyPorc),c=new f(0),l=new f(.9);let u,p,d,y,m=[0,0];this.init=t=>{this.data={...t},p=!0,d=!1,y=1,h.grav(10),u=!1,c.target(0),l.target(.9);let{x:e,y:s}=this.data;h.pos({x:e,y:s})},this.facing=()=>m[0],this.move=t=>{u||(0!==t[0]&&(m[0]=t[0]),0!==t[1]&&(m[1]=t[1]))},this.stop=t=>{m[0]===t[0]&&(m[0]=0),m[1]===t[1]&&(d=!1,m[1]=0)},this.hitSpike=()=>{l.target(0),u=!0},this.hitGravity=t=>{p=t};const w=t=>{h.move(m,this.entity.grounded),0!==m[0]&&c.set(.05*a*m[0]),c.interpolate(.1),h.rot({y:c.get()}),p&&-1===m[1]&&!d&&(d=!0,h.grav(-1*h.gravity())),(this.entity.grounded&&h.falling()||this.entity.groundedTop&&h.flying())&&(1!==m[1]?(h.jump2(6*y*10),y=1):(h.jump2(15),y=2))},_=t=>{l.interpolate(),this.mesh.paint("front",o.reset().alp(l.get()).lum(Math.abs(.5*c.get())).css())},v=g(t=>{if(0===m[0])return;let{x:e,y:s}=h.values();this.bullets.acquire(t=>t.init({x:e,y:s})),this.bullets.acquire(t=>t.init({x:e,y:s,vDispense:pt(0,5,5)})),this.bullets.acquire(t=>t.init({x:e,y:s,vDispense:pt(0,-5,-5)}))},100);this.update=t=>{this.entity.update(t),_(),w(),v(t),this.bullets.each(e=>e.update(t))}}function dt(t,e){const{camera:s}=t,{width:i,height:n}=t.data.game;let a=N(7);this.mesh=new B(s,a,{width:7,height:7});const r=new M(b.FluRed);this.mesh.paint("front",r.css()),this.entity=new ot(t,this.mesh,()=>{e.bullets.release(this)},.5,pt(0,0,20));let h=this.entity.physics,o=this.entity.life;this.init=t=>{this.data={x:0,y:0,vDispense:pt(0),...t},o.init();let{x:s,y:i,vDispense:n}=this.data,a=e.facing();s+=10*a*-1,h.pos({x:s,y:i,z:0}),h.acc({y:0,x:10*a,z:0}),h.vel({x:100*a*-1,y:n[1],z:n[2]})},this.update=t=>{this.entity.update(t),h.update(t)}}function gt(t){const{camera:e}=t;let s;this.init=t=>{s="black",this.data={...t}},this.hit=()=>{s="white"},this.material=()=>s,this.view=()=>e.project([this.data.x,this.data.y,0]),this.update=t=>{}}function yt(t,e){this.particles=new P(e=>new mt(t,this));let s=new rt(()=>{this.particles.releaseAll(),e.explosions.release(this)},{life:1});this.init=t=>{this.data={...t},s.init();let{x:e,y:i,z:n}=this.data;for(let t=0;t<10;t++)this.particles.acquire(t=>t.init({x:e,y:i,z:n}))},this.update=t=>{s.update(t),this.particles.each(e=>e.update(t))}}function mt(t,e){const{camera:s}=t,{width:i,height:n}=t.data.game;let a=Q(20);this.mesh=new B(s,a,{width:20,height:20}),this.entity=new ot(t,this.mesh,()=>{e.particles.release(this)},.4);let o=this.entity.physics,c=this.life=this.entity.life,l=new M(b.ChileanFire),u=new f(0),p=new f(.5);this.init=t=>{this.data={x:0,y:0,z:0,...t},c.init();let{x:e,y:s,z:n}=this.data;o.pos({x:e,y:s,z:n}),o.vel({x:0,y:0,z:0}),o.acc({x:0,y:0,z:0});let a=.05*i;o.jump(h(-a,a),h(0,a),h(-a,a)),o.vrot({x:h(0,r),y:h(0,r),z:h(0,r)}),u.set(.5),p.set(1)};const d=t=>{u.interpolate(),p.interpolate(),this.mesh.paint("front",l.reset().alp(p.get()).lum(u.get()).css())};this.update=t=>{d(),this.entity.update(t),o.update(t)}}function wt(t,e){const{width:s,height:i,tileWidth:a}=t.data.game;this.tiles=new P(e=>new lt(t),{warnLeak:1e3}),this.hero=new ft(t),this.blocks=new P(e=>new ut(t,this,e)),this.explosions=new P(e=>new yt(t,this)),this.goal=new gt(t);const r=t=>({x:.45*-s+t[1]*a,y:.44*-i+t[0]*a});let h=[E-2,A-2],l=[2,A-6],f=L(l);this.init=t=>{this.data={gameover:0,goal:!1,tiles:K(),...t},this.tiles.releaseAll(),this.hero.init({...r(h)}),this.goal.init({...r(l)}),m(this.data.tiles,(t,e)=>{const s=function(t){return t.split(".").map(t=>parseInt(t))}(t);e.ctrl=this.tiles.acquire(t=>t.init({...r(s),...e.role}))})};const y=t=>{return w({lefttop:[t.left,t.top],leftbottom:[t.left,t.bottom],righttop:[t.right,t.top],rightbottom:[t.right,t.bottom]},(t,e)=>L((t=>[c(0,E-1,Math.floor((t.y+.44*i)/a)),c(0,A-1,Math.floor((t.x+.45*s)/a))])({x:e[0],y:e[1]})))},_=t=>e=>{let s=w(e,(e,s)=>{let i=this.data.tiles[s];return t(i)});return{left:s.lefttop&&s.leftbottom,top:s.lefttop&&s.righttop,right:s.righttop&&s.rightbottom,bottom:s.rightbottom&&s.leftbottom}},v=_(t=>t.role.block),b=(_(t=>"space"===t.role.role),_(t=>t.role.kill)),x=_(t=>t.role.gravity),k=_(t=>t.role.key===f),C=_(t=>!0),M=({bottomF:t=p,topF:e=p})=>(s,i)=>{i.bottom&&[s.rightbottom,s.leftbottom].map(t=>this.data.tiles[t].ctrl).forEach(t),i.top&&[s.righttop,s.lefttop].map(t=>this.data.tiles[t].ctrl).forEach(e)},T=M({bottomF:t=>t.heroStep(),topF:t=>t.heroStep("bottom")}),D=M({bottomF:t=>t.bulletStep()}),S=t=>{const{before:e,after:s}=this.hero.entity.dimensions(t),i=y(s);let n=v(i);T(i,n),this.hero.entity.applyPhysics(t,n);let a=k(i);Object.keys(function(t,e){const s={};for(let i of Object.keys(t))e(i,t[i])&&(s[i]=t[i]);return s}(a,(t,e)=>e)).length>0&&(this.goal.hit(),this.data.goal=!0,0===this.data.gameover&&(this.data.gameover=u()));let r=x(i);this.hero.hitGravity(r.top);let h=b(i);(h.top||h.bottom)&&(this.explosions.acquireLimit(t=>t.init({x:s.left,y:s.top,z:0}),3),this.hero.hitSpike(),0===this.data.gameover&&(this.data.gameover=u()))},z=t=>{this.hero.bullets.each(e=>{const{after:i}=e.entity.dimensions(t);if(i.front>.1*s){const t=y(i);let e=C(t);D(t,e)}})},R=g(t=>{this.blocks.acquire(t=>t.init({...r([o(0,E),o(0,A)])}))},1e3),j=e=>{this.data.gameover>0&&d(this.data.gameover,()=>{this.data.gameover=0,t.data.state=n.Over},600)};this.update=t=>{R(t),j(),this.tiles.each(e=>e.update(t)),this.blocks.each(e=>e.update(t)),this.explosions.each(e=>e.update(t)),S(t),z(t),this.hero.update(t)}}function _t(t){this.update=t=>{}}function vt(t,e){this.data={tick:0,draggable:{},...t},this.camera=new j(this),this.play=new wt(this),this.over=new _t(this);let s=this.play.hero;this.pressKey=t=>{"up"===t?this.data.state===n.Play?s.move([0,-1]):(this.play.init(this),this.data.state=n.Play):"down"===t?s.move([0,1]):"left"===t?s.move([-1,0]):"right"===t&&s.move([1,0])},this.releaseKey=t=>{"up"===t?s.stop([0,-1]):"down"===t?s.stop([0,1]):"left"===t?s.stop([-1,0]):"right"===t&&s.stop([1,0])};const i=t=>{this.data.state===n.Play&&this.play.update(t)},a=t=>{this.data.state===n.Over&&this.over.update(t)};this.update=t=>{this.data.tick+=t,i(t),a(t)}}const bt=void 0!==window.performance?window.performance:Date,xt=()=>bt.now(),kt=window.requestAnimationFrame;function Ct(t,e=60){let s=!1,i=xt(),n=0,a=1e3/e,r=0;this.start=()=>s?this:(s=!0,i=xt(),n=kt(h),this),this.stop=()=>(s=!1,0!=n&&kt.cancel(n),n=0,this);const h=()=>{n=kt(h);const e=xt(),s=e-i;(r+=s)>=a&&(t(s),r=0),i=e}}function Mt(t,e,s){return t.addEventListener(e,s),()=>t.removeEventListener(e,s)}function Tt(t,e){const s=document.createElement("canvas"),i=s.getContext("2d");t.append(s);const n=s.clientWidth,a=s.clientHeight;s.width=n,s.height=a,new _({font:"assets/font_10.png"}).start().then(t=>{const e={...y(n,a)};let s=new v(e,i),r=new vt(e,s),h=new R(r,s,t);new Ct(t=>{r.update(t),r.data.views=h.render(r)},60).start(),function(t,e){const s=[],i=function(t){return function(e){switch(e.code){case"Space":t.spaceHit();break;case"ArrowUp":t.pressKey("up");break;case"ArrowDown":t.pressKey("down");break;case"ArrowLeft":t.pressKey("left");break;case"ArrowRight":t.pressKey("right");break;default:return}e.preventDefault()}}(t),n=function(t){return function(e){switch(e.code){case"ArrowUp":t.releaseKey("up");break;case"ArrowDown":t.releaseKey("down");break;case"ArrowLeft":t.releaseKey("left");break;case"ArrowRight":t.releaseKey("right")}}}(t);s.push(Mt(document,"keydown",i)),s.push(Mt(document,"keyup",n))}(r)})}s.d(e,"app",function(){return Tt})}]);