var t,e;(t=window.document).getElementById("livereloadscript")||((e=t.createElement("script")).async=1,e.src="//"+(window.location.host||"localhost").split(":")[0]+":35729/livereload.js?snipver=1",e.id="livereloadscript",t.getElementsByTagName("head")[0].appendChild(e));let s,i,n={};function h(t,e){n[t]=n[t]||[],n[t].push(e)}function r(t,...e){(n[t]||[]).map(t=>t(...e))}function a(){return s}function o(){return i}function c(t){if(s=document.getElementById(t)||t||document.querySelector("canvas"),!s)throw Error("You must provide a canvas element for the game");return i=s.getContext("2d"),i.imageSmoothingEnabled=!1,r("init"),{canvas:s,context:i}}function l(t,e){return Math.atan2(e.y-t.y,e.x-t.x)+Math.PI/2}function d(t,e,s){return(s-t)/(e-t)}function u(t,e,s){return Math.min(Math.max(t,s),e)}function p(t,e){return t.rotation||e.rotation?null:([t,e]=[t,e].map(t=>f(t)),t.x<e.x+e.width&&t.x+t.width>e.x&&t.y<e.y+e.height&&t.y+t.height>e.y)}function f(t){let{x:e,y:s,width:i,height:n}=t.world||t;return t.anchor&&(e-=i*t.anchor.x,s-=n*t.anchor.y),i<0&&(e+=i,i*=-1),n<0&&(s+=n,n*=-1),{x:e,y:s,width:i,height:n}}class x{constructor(t=0,e=0,s={}){this.x=t,this.y=e,s._c&&(this.clamp(s._a,s._b,s._d,s._e),this.x=t,this.y=e)}add(t){return new x(this.x+t.x,this.y+t.y,this)}subtract(t){return new x(this.x-t.x,this.y-t.y,this)}scale(t){return new x(this.x*t,this.y*t)}normalize(t=this.length()){return new x(this.x/t,this.y/t)}dot(t){return this.x*t.x+this.y*t.y}length(){return Math.hypot(this.x,this.y)}distance(t){return Math.hypot(this.x-t.x,this.y-t.y)}angle(t){return Math.acos(this.dot(t)/(this.length()*t.length()))}clamp(t,e,s,i){this._c=!0,this._a=t,this._b=e,this._d=s,this._e=i}get x(){return this._x}get y(){return this._y}set x(t){this._x=this._c?u(this._a,this._d,t):t}set y(t){this._y=this._c?u(this._b,this._e,t):t}}function y(){return new x(...arguments)}y.prototype=x.prototype,y.class=x;const m=()=>{};function w(t,e){let s=e.parentNode;if(t.setAttribute("data-kontra",""),s){let i=s.querySelector("[data-kontra]:last-of-type")||e;s.insertBefore(t,i.nextSibling)}else document.body.appendChild(t)}class g extends class{constructor(t){return this.init(t)}init(t={}){this.position=y(),this.velocity=y(),this.acceleration=y(),this.ttl=1/0,Object.assign(this,t)}update(t){this.advance(t)}advance(t){let e=this.acceleration;t&&(e=e.scale(t)),this.velocity=this.velocity.add(e);let s=this.velocity;t&&(s=s.scale(t)),this.position=this.position.add(s),this._pc(),this.ttl--}get dx(){return this.velocity.x}get dy(){return this.velocity.y}set dx(t){this.velocity.x=t}set dy(t){this.velocity.y=t}get ddx(){return this.acceleration.x}get ddy(){return this.acceleration.y}set ddx(t){this.acceleration.x=t}set ddy(t){this.acceleration.y=t}isAlive(){return this.ttl>0}_pc(){}}{init({width:t=0,height:e=0,context:s=o(),render:i=this.draw,update:n=this.advance,children:h=[],anchor:r={x:0,y:0},sx:a=0,sy:c=0,opacity:l=1,rotation:d=0,scaleX:u=1,scaleY:p=1,...f}={}){this.children=[],super.init({width:t,height:e,context:s,anchor:r,sx:a,sy:c,opacity:l,rotation:d,scaleX:u,scaleY:p,...f}),this._di=!0,this._uw(),h.map(t=>this.addChild(t)),this._rf=i,this._uf=n}update(t){this._uf(t),this.children.map(t=>t.update&&t.update())}render(t){let e=this.context;e.save(),(this.x||this.y)&&e.translate(this.x,this.y),this.rotation&&e.rotate(this.rotation),(this.sx||this.sy)&&e.translate(-this.sx,-this.sy),1==this.scaleX&&1==this.scaleY||e.scale(this.scaleX,this.scaleY);let s=-this.width*this.anchor.x,i=-this.height*this.anchor.y;(s||i)&&e.translate(s,i),this.context.globalAlpha=this.opacity,this._rf(),(s||i)&&e.translate(-s,-i);let n=this.children;t&&(n=n.filter(t)),n.map(t=>t.render&&t.render()),e.restore()}draw(){}_pc(t,e){this._uw(),this.children.map(t=>t._pc())}get x(){return this.position.x}get y(){return this.position.y}set x(t){this.position.x=t,this._pc()}set y(t){this.position.y=t,this._pc()}get width(){return this._w}set width(t){this._w=t,this._pc()}get height(){return this._h}set height(t){this._h=t,this._pc()}_uw(){if(!this._di)return;let{_wx:t=0,_wy:e=0,_wo:s=1,_wr:i=0,_wsx:n=1,_wsy:h=1}=this.parent||{};this._wx=this.x,this._wy=this.y,this._ww=this.width,this._wh=this.height,this._wo=s*this.opacity,this._wr=i+this.rotation;let{x:r,y:a}=function(t,e){let s=Math.sin(e),i=Math.cos(e);return{x:t.x*i-t.y*s,y:t.x*s+t.y*i}}({x:this.x,y:this.y},i);this._wx=r,this._wy=a,this._wsx=n*this.scaleX,this._wsy=h*this.scaleY,this._wx=this.x*n,this._wy=this.y*h,this._ww=this.width*this._wsx,this._wh=this.height*this._wsy,this._wx+=t,this._wy+=e}get world(){return{x:this._wx,y:this._wy,width:this._ww,height:this._wh,opacity:this._wo,rotation:this._wr,scaleX:this._wsx,scaleY:this._wsy}}addChild(t,{absolute:e=!1}={}){this.children.push(t),t.parent=this,t._pc=t._pc||m,t._pc()}removeChild(t){let e=this.children.indexOf(t);-1!==e&&(this.children.splice(e,1),t.parent=null,t._pc())}get opacity(){return this._opa}set opacity(t){this._opa=t,this._pc()}get rotation(){return this._rot}set rotation(t){this._rot=t,this._pc()}setScale(t,e=t){this.scaleX=t,this.scaleY=e}get scaleX(){return this._scx}set scaleX(t){this._scx=t,this._pc()}get scaleY(){return this._scy}set scaleY(t){this._scy=t,this._pc()}}function _(){return new g(...arguments)}_.prototype=g.prototype,_.class=g;let v=new WeakMap,M={},S={},z={0:"left",1:"middle",2:"right"};function b(t,e){let{x:s,y:i,width:n,height:h}=f(t);do{s-=t.sx||0,i-=t.sy||0}while(t=t.parent);let r=e.x-Math.max(s,Math.min(e.x,s+n)),a=e.y-Math.max(i,Math.min(e.y,i+h));return r*r+a*a<e.radius*e.radius}function F(t){let e=t._lf.length?t._lf:t._cf;for(let s=e.length-1;s>=0;s--){let i=e[s];if(i.collidesWithPointer?i.collidesWithPointer(t):b(i,t))return i}}function C(t,e){return parseFloat(t.getPropertyValue(e))||0}function X(t){let e=void 0!==t.button?z[t.button]:"left";S[e]=!0,Y(t,"onDown")}function k(t){let e=void 0!==t.button?z[t.button]:"left";S[e]=!1,Y(t,"onUp")}function j(t){Y(t,"onOver")}function R(t){v.get(t.target)._oo=null,S={}}function Y(t,e){t.preventDefault();let s=t.target,i=v.get(s),{scaleX:n,scaleY:h,offsetX:r,offsetY:a}=function(t){let{canvas:e,_s:s}=t,i=e.getBoundingClientRect(),n="none"!==s.transform?s.transform.replace("matrix(","").split(","):[1,1,1,1],h=parseFloat(n[0]),r=parseFloat(n[3]),a=(C(s,"border-left-width")+C(s,"border-right-width"))*h,o=(C(s,"border-top-width")+C(s,"border-bottom-width"))*r,c=(C(s,"padding-left")+C(s,"padding-right"))*h,l=(C(s,"padding-top")+C(s,"padding-bottom"))*r;return{scaleX:(i.width-a-c)/e.width,scaleY:(i.height-o-l)/e.height,offsetX:i.left+(C(s,"border-left-width")+C(s,"padding-left"))*h,offsetY:i.top+(C(s,"border-top-width")+C(s,"padding-top"))*r}}(i);if(-1!==["touchstart","touchmove","touchend"].indexOf(t.type)){i.touches={};for(var o=0;o<t.touches.length;o++)i.touches[t.touches[o].identifier]={id:t.touches[o].identifier,x:(t.touches[o].clientX-r)/n,y:(t.touches[o].clientY-a)/h,changed:!1};for(o=t.changedTouches.length;o--;){const s=t.changedTouches[o].identifier;void 0!==i.touches[s]&&(i.touches[s].changed=!0);let c=t.changedTouches[o].clientX,l=t.changedTouches[o].clientY;i.x=(c-r)/n,i.y=(l-a)/h;let d=F(i);d&&d[e]&&d[e](t),M[e]&&M[e](t,d)}}else{i.x=(t.clientX-r)/n,i.y=(t.clientY-a)/h;let s=F(i);s&&s[e]&&s[e](t),M[e]&&M[e](t,s),"onOver"==e&&(s!=i._oo&&i._oo&&i._oo.onOut&&i._oo.onOut(t),i._oo=s)}}function A(t=a()){let e=v.get(t);if(!e){let s=window.getComputedStyle(t);e={x:0,y:0,radius:5,touches:{},canvas:t,_cf:[],_lf:[],_o:[],_oo:null,_s:s},v.set(t,e)}return t.addEventListener("mousedown",X),t.addEventListener("touchstart",X),t.addEventListener("mouseup",k),t.addEventListener("touchend",k),t.addEventListener("touchcancel",k),t.addEventListener("blur",R),t.addEventListener("mousemove",j),t.addEventListener("touchmove",j),e._t||(e._t=!0,h("tick",()=>{e._lf.length=0,e._cf.map(t=>{e._lf.push(t)}),e._cf.length=0})),e}function E(t){let e=t.canvas;t.clearRect(0,0,e.width,e.height)}function I(t){let e=[];return t._dn?e.push(t._dn):t.children&&t.children.map(t=>{e=e.concat(I(t))}),e}class T extends _.class{init({id:t,name:e=t,cullObjects:s=!0,cullFunction:i=p,...n}){const h=this._dn=document.createElement("section");h.tabIndex=-1,h.style="position:absolute;left:-9999px",h.id=t,h.setAttribute("aria-label",e),super.init({id:t,name:e,cullObjects:s,cullFunction:i,...n}),w(h,this.context.canvas);let r=this.context.canvas;this.camera=_({x:r.width/2,y:r.height/2,width:r.width,height:r.height,anchor:{x:.5,y:.5}}),this.camera._pc=()=>{super._pc.call(this.camera),this.context.canvas,this.camera._wx=this.camera.x*this.scaleX,this.camera._wy=this.camera.y*this.scaleY}}show(){this.hidden=this._dn.hidden=!1;let t=this.children.find(t=>t.focus);t?t.focus():this._dn.focus(),this.onShow()}hide(){this.hidden=this._dn.hidden=!0,this.onHide()}addChild(t,e){super.addChild(t,e),I(t).map(t=>{this._dn.appendChild(t)})}removeChild(t){super.removeChild(t),I(t).map(t=>{w(t,this.context.canvas)})}destroy(){this._dn.remove(),this.children.map(t=>t.destroy&&t.destroy())}update(t){this.hidden||super.update(t)}lookAt(t){let e=(t=t.world||t).x,s=t.y;t.scaleX&&(e/=t.scaleX,s/=t.scaleY),this.camera.x=e,this.camera.y=s,this._pc()}_pc(){super._pc(),this.camera&&this.camera._pc()}render(){let{x:t,y:e,width:s,height:i}=this.camera;this.sx=t*this.scaleX-s/2,this.sy=e*this.scaleY-i/2,this.hidden||super.render(t=>!this.cullObjects||this.cullFunction(t,this.camera))}onShow(){}onHide(){}}function P(){return new T(...arguments)}function D(t,e,s,i,n){let h=new Path2D(e);t.strokeStyle=s,t.fillStyle=i,t.lineWidth=n,s&&t.stroke(h),i&&t.fill(h)}function O(t,e,s,i,n,h,r){let a=new Path2D;a.ellipse(e,s,i,i,Math.PI/4,0,2*Math.PI),t.strokeStyle=n,t.fillStyle=h,t.lineWidth=r,n&&t.stroke(a),h&&t.fill(a)}function B(t,e,s,i,n,h,r,a){let o=new Path2D;o.rect(e,s,i,n),t.strokeStyle=h,t.fillStyle=r,t.lineWidth=a,h&&t.stroke(o),r&&t.fill(o)}P.prototype=T.prototype,P.class=T;const W=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","5 0 5 9 M5 12 5 14","","","0 11 0 15 3 15 0 0 9 2 11 15 8 15 8 11","1 5 1 2 4 2 4 5Z M2 15 9 0 M7 10 10 10 10 13 7 13Z","","6 0 4 3","","","","","6 12 4 15","3 6 8 6","6 15 6 14","2 15 8 0","6 0 11 7 6 14 1 7Z M6 6 6 8","2 4 6 1 6 14","0 4 6 0 10 4 1 13 11 13","2 0 10 3 6 7 10 11 2 13","6 1 1 11 10 11 M6 7 6 15","10 1 3 1 1 7 10 7 8 13 0 13","11 1 6 1 1 13 10 13 10 7 4 7","3 1 11 1 6 14","2 4 6 0 10 4 2 10 6 14 10 10Z","1 13 6 13 11 1 2 1 2 7 9 7","","","10 4 2 8 10 12","2 6 10 6 M2 10 10 10","2 4 10 8 2 12","","","1 14 5 2 10 14 M3 9 8 9","3 13 3 0 10 3 4 7 10 10Z","9 1 5 1 3 3 3 11 5 13 9 13","3 13 3 1 7 1 9 4 9 10 7 13Z","9 13 3 13 3 1 9 1 M3 7 7 7","3 14 3 1 9 1 M3 7 7 7","7 1 2 4 2 11 6 13 9 9 5 9","2 14 2 0 M9 14 9 0 M2 8 9 8","3 13 9 13 M3 1 9 1 M6 13 6 1","2 11 6 14 9 11 9 1 4 1","3 14 3 0 M9 2 4 8 9 14","4 0 4 13 9 13","2 14 2 2 6 6 10 2 10 14","2 14 2 2 9 12 9 0","6 0 11 7 6 14 1 7Z","3 14 3 1 10 1 9 7 3 7","5 1 10 7 5 13 0 7Z M9 13 5 8","3 14 3 1 10 1 9 7 4 7 10 13","10 1 3 1 1 7 10 7 8 13 0 13","6 14 6 1 M2 1 10 1","3 0 3 12 6 14 9 12 9 0","3 1 3 7 6 13 9 7 9 1","1 0 3 12 6 5 9 12 11 0","2 0 10 14 M10 0 2 14","6 14 6 8 M2 1 6 8 10 1","1 1 9 1 2 13 10 13","8 0 4 0 4 14 8 14","8 15 2 0","3 0 7 0 7 14 3 14"].map(t=>new Path2D("M"+t));function L(t,e,s,i,n,h,r,a){t.save(),1==a&&(s-=13*e.length*n),2==a&&(s-=13*e.length*n/2),t.translate(s,i),t.scale(n,n),t.strokeStyle=h,t.lineWidth=r,[...e].forEach((e,s)=>{let i=W[e.toUpperCase().charCodeAt(0)];i&&t.stroke(i),t.translate(13,0)}),t.restore()}function q(t,e,s,i,n,h,r,a){L(t,e,s+2,i+2,n,"#000",r,a),L(t,e,s,i,n,h,r,a)}var Z=sounds={presets:{pickup:[,0,1755,,.11,.41,,.8,,,550,.06,,,,,,.8,.09],pickup2:[,0,483,,.02,.11,2,.1,,,364,.06,,,,,,.96],follower_hit:[.5,,298,,,.31,3,2.58,,,,,,2,,.4,.12,.62,.04],player_hit:[,0,73,,,.35,1,.37,.2,,,,,1.8,,,.14,.66,.01],follower_pickup:[,0,1,.2,.3,.21,,2.7,,1.5,550,.06,.1,,,,,.5]},play(t){zzfx&&zzfx(...this.presets[t])}};class H extends _.class{constructor(t){const{onClick:e,text:s}=t;super(t),this.onClick=e,this.text=s,this.width=13*s.length*2+40,this.height=70,this.state=0,this.anchor={x:.5,y:.5},this.scale=1,this.scaleFrom=1,this.scaleTo=1,this.frame=0,this.frames=100,function(...t){t.map(t=>{let e=t.context?t.context.canvas:a(),s=v.get(e);if(!s)throw new ReferenceError("Pointer events not initialized for the objects canvas");t._r||(t._r=t.render,t.render=function(){s._cf.push(this),this._r()},s._o.push(t))})}(this)}update(){var t,e,s,i;this.frame<this.frames&&(this.scale=(i={to:this.scaleTo,from:this.scaleFrom,frame:this.frame,frames:this.frames},t=i.frame,e=i.from,s=i.to-i.from,(t/=i.frames/2)<=1?s/2*t*t+e:s/2*-1*(--t*(t-2)-1)+e),this.setScale(this.scale),this.frame++)}setSmoothScale(t){this.frame=0,this.frames=10,this.scaleFrom=this.scale,this.scaleTo=t}onDown(){this.setSmoothScale(1.2)}onUp(){this.setSmoothScale(1),this.onClick()}onOver(){1!=this.state&&(this.setSmoothScale(1.2),Z.play("pickup2")),this.state=1}onOut(){0!=this.state&&this.setSmoothScale(1),this.state=0}draw(){B(this.context,2,2,this.width,this.height,"#000",null,5),B(this.context,0,0,this.width,this.height,"#fff",null,5),q(this.context,this.text,this.width/2,20,2,"#fff",3,2)}}function U(t,e){return[t,e]=[t,e].map(t=>function(t){let e=t.world||t,s=e.x,i=e.y,n=Math.abs(e.width),h=Math.abs(e.height);return t.anchor&&(s-=n*t.anchor.x,i-=h*t.anchor.y),t.bound&&(s+=n*t.bound,i+=h*t.bound,n-=n*t.bound*2,h-=h*t.bound*2),{x:s,y:i,width:n,height:h}}(t)),t.x<e.x+e.width&&t.x+t.width>e.x&&t.y<e.y+e.height&&t.y+t.height>e.y}const G=function(t,e,s){var i=s.pow(256,6),n=s.pow(2,52),h=2*n;function r(r,d,u){var p=[],f=c(function t(e,s){var i,n=[],h=typeof e;if(s&&"object"==h)for(i in e)try{n.push(t(e[i],s-1))}catch(t){}return n.length?n:"string"==h?e:e+"\0"}((d=1==d?{entropy:!0}:d||{}).entropy?[r,l(e)]:null==r?function(){try{var s;return s=new Uint8Array(256),(t.crypto||t.msCrypto).getRandomValues(s),l(s)}catch(s){var i=t.navigator,n=i&&i.plugins;return[+new Date,t,n,t.screen,l(e)]}}():r,3),p),x=new a(p),y=function(){for(var t=x.g(6),e=i,s=0;t<n;)t=256*(t+s),e*=256,s=x.g(1);for(;t>=h;)t/=2,e/=2,s>>>=1;return(t+s)/e};return y.int32=function(){return 0|x.g(4)},y.quick=function(){return x.g(4)/4294967296},y.double=y,c(l(x.S),e),(d.pass||u||function(t,e,i,n){return n&&(n.S&&o(n,x),t.state=function(){return o(x,{})}),i?(s.random=t,e):t})(y,f,"global"in d?d.global:this==s,d.state)}function a(t){var e,s=t.length,i=this,n=0,h=i.i=i.j=0,r=i.S=[];for(s||(t=[s++]);n<256;)r[n]=n++;for(n=0;n<256;n++)r[n]=r[h=255&h+t[n%s]+(e=r[n])],r[h]=e;(i.g=function(t){for(var e,s=0,n=i.i,h=i.j,r=i.S;t--;)e=r[n=255&n+1],s=256*s+r[255&(r[n]=r[h=255&h+e])+(r[h]=e)];return i.i=n,i.j=h,s})(256)}function o(t,e){return e.i=t.i,e.j=t.j,e.S=t.S.slice(),e}function c(t,e){for(var s,i=t+"",n=0;n<i.length;)e[255&n]=255&(s^=19*e[255&n])+i.charCodeAt(n++);return l(e)}function l(t){return String.fromCharCode.apply(0,t)}return c(s.random(),e),s.seedrandom=r,r}(window,[],Math)("js13k");function V(t,e){return parseInt(t+G()*e)}class N extends _.class{constructor(t){super(t)}update(){super.update(),this.x+=this.dx,this.x<-350&&(this.x=this.context.canvas.width+100*V(0,2),this.y=100*V(0,2))}draw(){const{context:t}=this;D(t,"M177 46s8-52-37-41c-27 6-30 17-27 25-7-10-21-23-44-18-26 5-15 26-8 34-6-6-20-17-41-8-28 12 8 29 8 29S11 62 4 78c-8 17 38 22 38 22h142s74 0 53-33-60-21-60-21z",null,"#fff",5)}}class J extends _.class{constructor(t){super(t)}update(){super.update(),this.x+=this.dx,this.x<-150&&(this.x=0)}draw(){const{context:t}=this;t.beginPath(),t.moveTo(0,this.height),t.lineTo(0,0);for(let e=0;e<10;e++)t.bezierCurveTo(50+150*e,this.height,100+150*e,-this.height,150+150*e,0);t.lineTo(1500,this.height),t.lineTo(0,this.height),t.fillStyle=this.color,t.fill()}}var K=t=>{const e=[];for(let t=0;t<5;t++)e.push(new N({x:100*V(2,10),y:100*V(1,2),dx:-V(3,7)/10})),e[t].setScale(2*e[t].dx*(0==V(0,1)?-1:1),2*-e[t].dx),e[t].opacity=.3-e[t].dx,e[t].width=-e[t].width;const s=[];return s.push(new J({x:0,y:580,dx:-.5,height:25,color:"#009"})),s.push(new J({x:0,y:590,dx:-.75,height:20,color:"#00c"})),P({...t,update(){e.map(t=>t.update()),s.map((t,e)=>{t.y=this.context.canvas.height-20+5*e,t.update()})},render(){const{context:t}=this,i=t.createLinearGradient(0,0,0,t.canvas.height);i.addColorStop(0,"#00ccff"),i.addColorStop(.75,"#cc99ff"),t.fillStyle=i,t.fillRect(0,0,t.canvas.width,t.canvas.height),e.map(t=>t.render()),s.map(t=>t.render())}})};class Q extends _.class{constructor(t){super(t);const{color:e,speed:s,type:i,dx:n,dy:h,bound:r}=t,a=this;a.width=205,a.height=142,a.anchor={x:.5,y:.5},a.currentFrame=0,a.counter=0,a.speed=s||10,a.color=e||"#3FAEFF",a.type=i||0,a.hitten=!1,a.hitFrame=0,a.dx=n||-1.5,a.dy=h||0,a.collected=!1,a.bound=r||.15}moveTo(t){this.targetX=t.x,this.targetY=t.y}collect(){this.collected||(this.collected=!0)}hit(){this.hitFrame=0,this.hitten=!0}update(t){super.update(t);const e=this;e.counter++,e.hitFrame++,e.counter%6==0&&e.currentFrame++,e.currentFrame>5&&(e.currentFrame=0),0==e.type?(function(t,e){let s=0,i=0,n=0,h=0;if(i=t.targetX-t.x,n=t.targetY-t.y,s=Math.sqrt(i*i+n*n),t.targetR=l(t,{x:t.targetX,y:t.targetY}),t.targetR>2.2&&(t.targetR=2.2),t.targetR<.88&&(t.targetR=.88),s<100&&(t.targetR=1.57),s>1&&(t.x+=parseInt(i/t.speed),t.y+=parseInt(n/t.speed)),void(h=t.targetR-t.rotation)){let e=l(t,void 0);e<.88&&(e=.88),e>2.2&&(e=2.2),t.rotation=e}else t.rotation+=h/t.speed||20}(this),e.dy=0):2==e.type||1==e.type&&(e.x+=e.dx),e.hitFrame>60&&(e.hitten=!1)}draw(){const{context:t,currentFrame:e,width:s,height:i,type:n,counter:h,hitten:r,color:a}=this;let o=0;0==e&&(o=0),1==e&&(o=2),2==e&&(o=4),3==e&&(o=7),4==e&&(o=4),5==e&&(o=2),t.translate(s/2,i/2),t.rotate(-90*Math.PI/180),t.translate(-s/2,-i/2+o),D(t,"M79 117s-2 9-10 12m0 0s-7 3-15 3m15-3c1 2 0 3-7 11","#FFA63D",null,5),D(t,"M97 117s-2 9-9 12m0 0s-8 3-15 3m15-3c0 2-1 3-8 11","#FFA63D",null,5),t.save(),2==n&&h%20<10&&t.rotate(-5*Math.PI/180),0==n&&r&&t.rotate(1*Math.PI/180),D(t,"M189 99l-17 8 5-13 12 5z","#000","#FFA63D",10),2==n&&h%20<10&&t.rotate(10*Math.PI/180),0==n&&r&&t.rotate(-4*Math.PI/180),D(t,"M198 89l-21-16 1 18 20-2z","#000","#FFA63D",10),t.restore(),D(t,"M126 25s-8-19-6-19 11 8 18 18 4 10 4 10l-21-2s-17-13-16-14 13 7 13 7-8-12-5-13c2 0 13 13 13 13z","#000","#000",5),D(t,"M40 77S7 73 7 75c-1 2 13 10 30 14 17 5 16 3 16 3l1-22S33 55 31 57c-2 1 10 11 10 11s-20-5-21-2c-2 3 20 11 20 11z","#000","#000",5),D(t,"M166 47c-14-21-86-16-103 0-16 17-11 51 0 64 12 12 89 10 103 0 14-11 15-43 0-64z","#000",a,15),D(t,"M124 99c-16-6-68-13-68-13s0 7 4 14c4 8 4 9 9 12 5 2 15 4 28 5 19 1 40-1 40-1s3-12-13-17z",null,"#fff",null),O(t,143.6,75.6,19.1,"#000","#fff",10),O(t,148.6,75.6,8.2,null,"#000",null),O(t,150.9,72.8,2.9,null,"#fff",null),D(t,"M152 48l-23-2-1 7 21-1 3-4z",null,"#000",null),0==e&&t.scale(1,1),1==e&&(t.translate(0,40),t.scale(1,.5)),2==e&&(t.translate(0,130),t.scale(1,-.5)),3==e&&(t.translate(0,160),t.scale(1,-1)),4==e&&(t.translate(0,130),t.scale(1,-.5)),5==e&&(t.translate(0,40),t.scale(1,.5)),D(t,"M93 82s8 4-4 17c-12 14-26 24-28 23-3-1 13-28 13-28s-18 17-21 15 10-18 10-18-17 8-18 6 25-17 25-17","#000",null,10),D(t,"M74 94s-16 27-13 28c2 1 16-9 28-23s4-17 4-17l-23-2S44 95 45 97s18-6 18-6-13 16-10 18 21-15 21-15z",null,a,null),t.setTransform(1,0,0,1,0,0)}}class $ extends Q{constructor(t){super(t),this.type=0}render(){const{hitten:t,hitFrame:e}=this;t&&e%4>=0&&e%4<2||super.render()}}class tt extends Q{render(){const{hitten:t,hitFrame:e}=this;t&&e%4>=0&&e%4<2||super.render()}}class et extends Q{constructor(t){super(t),this.type=2}update(t){super.update(t),this.dy=1.5*Math.sin(this.counter/40);let e=l(this,{x:this.x+this.dx,y:this.y+this.dy});this.rotation=2.88+e,this.y+=this.dy,this.x+=this.dx}}class st extends _.class{constructor(t){super(t);const{color:e,speed:s,type:i,dx:n,dy:h,bound:r}=t;this.width=205,this.height=142,this.anchor={x:.5,y:.5},this.currentFrame=0,this.counter=0,this.speed=s||10,this.color=e||"#3FAEFF",this.type=i||0,this.dx=n||-1.5,this.dy=h||0,this.bound=r||.15,this.jumping=!1,this.jumpingFrame=0}moveTo(t){this.targetX=t.x,this.targetY=t.y}jump(){this.jumping=!0,this.jumpingFrame=0}update(t){super.update(t),this.counter++,this.counter%6==0&&this.currentFrame++,this.currentFrame>5&&(this.currentFrame=0),this.jumping&&(this.jumpingFrame++,this.dy=3.5*Math.sin((this.jumpingFrame-90)/40)),this.jumping&&this.jumpingFrame>200&&(this.jumping=!1,this.jumpingFrame=0,this.dy=0,this.ttl=0);let e=l(this,{x:this.x+this.dx,y:this.y+this.dy});this.rotation=2.88+e,this.y+=this.dy,this.x+=this.dx}render(){super.render()}draw(){const{context:t}=this;t.translate(this.width/2,this.height/2),t.rotate(-90*Math.PI/180),t.translate(-this.width/2,-this.height/2),D(t,"M109 123l4-6-1-1-46-7v5l3-3 3 5 3-4 2 6 3-5 3 6 4-5 2 7 4-6 3 6 4-5 2 6 4-5 3 6z","#000","#fff"),D(t,"M112 122l5 5v2l-44 16-1-6 4 3 1-6 4 4 1-6 4 4 2-7 5 4v-7l5 5 2-7 5 5 1-7 5 4 1-6z","#000","#fff"),D(t,"M260 74c136 35 209-97 178-38-14 26-43 46-42 61 9 18 79 44 0 29-79-14-90-22-136-11-107 61-168 48-188 35-17-11 70-19 37-35-49-6-130-15-99-28 36-15 110-30 120-31 10-2 63-53 80-53 18 0-21 54 0 60 22 5 32 6 50 11z","#000","#3FAEFF",5),D(t,"M255 115c1-7-116-3-138 11-23 14-41 12-45 20-3 9 36 16 67 13 36-4 115-36 116-44z",null,"#fff"),D(t,"M84 92c0 9 7 16 16 16s17-7 17-16-8-16-17-16-16 7-16 16z","#000","#fff",5),O(t,96,92,7.1,null,"#000"),O(t,94,90,2.5,null,"#fff"),D(t,"M71 77l42-25 9 11-42 19-9-5z",null,"#000"),D(t,"M247 147c-27-6-82-33-82-33l52-14s57 52 30 47z","#000",null,6),D(t,"M247 147c-27-6-90-38-90-38l47-18s70 61 43 56z",null,"#3FAEFF"),t.setTransform(1,0,0,1,0,0)}}class it extends _.class{constructor(t){super(t);const{dx:e,bound:s}=t;this.width=106,this.height=87,this.oX=0,this.oY=0,this.anchor={x:.5,y:.5},this.dx=e||-1.8,this.timer=0,this.colliding=!1,this.bound=s||.15}update(t){if(super.update(t),this.collected){var e=100-this.x,s=40-this.y;Math.sqrt(e*e+s*s)>1&&(this.x+=e/20,this.y+=s/20),this.opacity=d(40,this.oX,this.x),this.setScale(d(40,Math.abs(this.oX),Math.abs(this.x)))}else this.dy=1.5*Math.sin(this.timer/20),this.setScale((Math.sin(this.timer/10)+1)/10+.3),this.x+=this.dx,this.y+=this.dy;this.timer++}collect(){this.collected||(Z.play("pickup"),this.timer=0,this.collected=!0,this.oX=this.x,this.oY=this.y,this.ttl=60,this.setScale(1))}draw(){const{context:t}=this;D(t,"M53 28S53 3 28 3C2 3-2 22 8 38c9 16 45 45 45 45s36-27 47-45c11-19-7-35-22-35S53 28 53 28z","#000","#F00",5),t.setTransform(1,0,0,1,0,0)}render(){super.render()}}var nt=t=>{const e=new $({speed:15,type:0});e.setScale(.4);let s=[],i=[],n=[],h=[],o=[],c=0,l=100,d=0,u=35;return P({...t,init(){d=0,c=0,l=100,n=[],h=[],o=[],s=[],i=[]},update(){d++;const t=function(t=a()){return v.get(t)}(),{context:p}=this;e.moveTo(t),e.update(),l-=.02,u+=.05,u>70&&(u=70),u<15&&(u=15),s.map((t,i)=>{const r=0==i?e:s[i-1],a=u;r&&(t.moveTo({x:r.x-a,y:r.y}),t.update()),t.x<0&&!t.hitten&&(t.ttl=1,l-=2,t.hit()),n.map(e=>{U(e,t)&&!t.hitten&&(Z.play("follower_hit"),l-=2,t.hit(),t.ttl=5,u+=15)}),h.map(e=>{U(e,t)&&!t.hitten&&(Z.play("follower_hit"),l-=2,t.hit(),t.ttl=5,u+=15)})}),i.map((t,i)=>{t.update(),U(e,t)&&(t.ttl=0,u=15,l+=3,c+=5,s.push(new tt({x:t.x,y:t.y,type:0,color:t.color})),s[s.length-1].setScale(.2),t.collect(),Z.play("follower_pickup")),t.x<-50&&(t.ttl=0)}),n.map((t,s)=>{t.update(),U(e,t)&&!e.hitten&&(l-=5,Z.play("player_hit"),e.hit()),t.x<-50&&(t.ttl=0)}),h.map((t,s)=>{t.x<-50&&(t.ttl=0),!t.jumping&&t.x-100<e.x&&t.jump(),U(e,t)&&!e.hitten&&(l=0,Z.play("player_hit"),e.hit()),t.update()}),o.map((t,i)=>{t.update(),U(e,t)&&!t.collected&&(t.collect(),c+=1+s.length,l++,u--),t.x<-50&&(t.ttl=0)}),0==V(0,100)&&s.length<10&&(i.push(new tt({x:p.canvas.width,y:V(20,p.canvas.height/3),type:1,rotation:1.57,color:["#f0f","#ff0","#0f0"][V(0,2)]})),i[i.length-1].setScale(.2,-.2)),0==V(0,300)&&h.length<2&&d/60>30&&(h.push(new st({x:p.canvas.width+200,y:p.canvas.height+30,color:"#f00",dx:-1.5})),h[h.length-1].setScale(.5)),n.length<parseInt(1+d/600)&&d/60>10&&(console.log("frequency",parseInt(3+d/600)),n.push(new et({x:p.canvas.width+100,y:V(-50,p.canvas.height/2),rotation:1.57,color:"#f00",dx:-V(1,3)})),n[n.length-1].setScale(.4,-.3)),0==V(0,50)&&(o.push(new it({x:p.canvas.width,y:V(40,p.canvas.height-40),collected:!1})),o[o.length-1].setScale(.2)),o=o.filter(t=>t.isAlive()),n=n.filter(t=>t.isAlive()),i=i.filter(t=>t.isAlive()),s=s.filter(t=>t.isAlive()),h=h.filter(t=>t.isAlive()),l>100&&(l=100),l<0&&r("game-over",c)},render(){const{context:t}=this;s.map(t=>t.render()),i.map(t=>t.render()),n.map(t=>t.render()),o.map(t=>t.render()),h.map(t=>t.render()),e.render(),l<50&&d%20>=0&&d%20<10||(q(t,"Reputation",5,10,1,"#fff",3),B(t,7,42,204,20,"#000",null,4),B(t,5,40,204,20,"#fff",null,4),B(t,7,42,2*l,16,null,"#f00",null)),q(t,"Score "+c,245,20,2,"#fff",3),d/60<5&&q(t,"Move mouse or drag to move Barry",t.canvas.width/2,t.canvas.height-20,1,"#fff",3,2),d/60>5&&d/60<10&&q(t,"Here comes the hater-birds... watch out!",t.canvas.width/2,t.canvas.height-20,1,"#fff",3,2),d/60>25&&d/60<30&&q(t,"Hater-sharks spotted! Those are really dangerous! ",t.canvas.width/2,t.canvas.height-20,1,"#fff",3,2),d/60>30&&d/60<35&&q(t,"One bite, and you're dead",t.canvas.width/2,t.canvas.height-20,1,"#fff",3,2)}})};class ht extends _.class{constructor(t){super(t),this.anchor={x:.5,y:.5}}draw(){if(!this.show)return;const{context:t}=this;B(t,0,0,300,340,"#000","#fff",5),B(t,20,20,260,260,"#000","#eef",5),this.photo()}}class rt extends _.class{constructor(t){super(t);const{slides:e}=t;e.map(t=>this.addChild(new ht({...t,anchor:{x:.5,y:.5},show:!1})))}update(){super.update();const{timer:t,children:e}=this;this.timer++,e.map((e,s)=>{e.show=!1,t/60>5*s&&(e.show=!0)}),t/60>5*e.length+5&&(this.timer=0)}render(){super.render()}draw(){const{context:t,timer:e,children:s}=this;s.map((s,i)=>{e/60>5*i+1&&e/60<5*i+5&&s.text.map((e,s)=>{q(t,e,this.width/2,500+30*s,1.5,"#fff",2,2)})})}}var at=t=>{const e=new Q({speed:15,x:130,y:140,dx:0,type:0,rotation:1.17,hit:!0});e.setScale(1.1);const s=new it({x:100,y:100,dx:0});s.setScale(1.1);const i=new Q({speed:15,x:160,y:140,dx:0,type:0,rotation:1.17,hit:!0,color:"#f0f"});i.setScale(.7);const n=new Q({speed:15,x:130,y:220,dx:0,type:0,rotation:1.27,hit:!0,color:"#ff0"});n.setScale(.7,-.7);const h=new Q({speed:15,x:130,y:70,dx:0,type:0,rotation:1.27,hit:!0,color:"#f00"});h.setScale(.8,-.7);const r=new st({speed:15,x:195,y:190,dx:0,type:0,rotation:1.67,hit:!0,color:"#f00"});r.setScale(.5,-.5);const a=new rt({x:200,y:100,anchor:{x:.5,y:.5},timer:0,slides:[{x:0,rotation:.2,text:["Barry the bird, a social","influencer wannabe"],photo(){e.render()}},{x:-200,y:60,rotation:-.2,text:["must collect likes and","followers as many as he can"],photo(){s.render(),i.render(),n.render()}},{x:-80,y:130,rotation:.1,text:["But avoid haters or","you'll loose reputation"],photo(){h.render(),r.render()}},{x:-260,y:30,rotation:-.3,text:["Without reputation","you'll be 404ed"],photo(){const{context:t}=this;t.save(),t.translate(150,60),q(t,"404",0,0,4,"#f00",2,2),q(t,"User",0,100,2,"#000",2,2),q(t,"not found",0,150,2,"#000",2,2),t.restore()}}]});return a.setScale(.7,.7),P({...t,reset(){a.timer=0},update(){polaroid_scale=this.context.canvas.width/1200,polaroid_scale*=.7,a.setScale(polaroid_scale,polaroid_scale),a.x=this.context.canvas.width-this.context.canvas.width/4,a.update()},render(){a.render()}})},ot=t=>{const e=at(),s=new H({text:"Start Game",y:190,scaleTo:1,scaleFrom:1,onClick(){r("menu-click")}});return P({...t,reset(){e.reset()},update(){s.x=this.context.canvas.width/4,s.y=this.context.canvas.height/2,s.update(),e.update()},render(){const{context:t}=this,i=this.context.canvas.width/1200;q(t,"Barry",t.canvas.width/4,50,5*i,"#FF0",3,2),q(t,"The Bird",t.canvas.width/4,110+30*i,3*i,"#FF0",3,2),s.render(),e.render()}})},ct=t=>{var e;return A(),e=function(t,e){r("menu-scene")},M.onDown=e,P({...t,update(){},render(){const{context:t}=this,e=this.context.canvas.width/1200,s=localStorage.getItem("score");q(t,"Game Over",t.canvas.width/2,50,5*e,"#F00",3,2),q(t,"Score: "+s,t.canvas.width/2,50+100*e,4*e,"#FF0",3,2)}})};zzfxV=.3,zzfx=(t=1,e=.05,s=220,i=0,n=0,h=.1,r=0,a=1,o=0,c=0,l=0,d=0,u=0,p=0,f=0,x=0,y=0,m=1,w=0,g=0)=>{let _,v,M=2*Math.PI,S=o*=500*M/zzfxR**2,z=(0<f?1:-1)*M/4,b=s*=(1+2*e*Math.random()-e)*M/zzfxR,F=[],C=0,X=0,k=0,j=1,R=0,Y=0,A=0;for(i=99+zzfxR*i,w*=zzfxR,n*=zzfxR,h*=zzfxR,y*=zzfxR,c*=500*M/zzfxR**3,f*=M/zzfxR,l*=M/zzfxR,d*=zzfxR,u=zzfxR*u|0,v=i+w+n+h+y|0;k<v;F[k++]=A)++Y%(100*x|0)||(A=r?1<r?2<r?3<r?Math.sin((C%M)**3):Math.max(Math.min(Math.tan(C),1),-1):1-(2*C/M%2+2)%2:1-4*Math.abs(Math.round(C/M)-C/M):Math.sin(C),A=(u?1-g+g*Math.sin(2*Math.PI*k/u):1)*(0<A?1:-1)*Math.abs(A)**a*t*.3*(k<i?k/i:k<i+w?1-(k-i)/w*(1-m):k<i+w+n?m:k<v-y?(v-k-y)/h*m:0),A=y?A/2+(y>k?0:(k<v-y?1:(v-k)/y)*F[k-y|0]/2):A),_=(s+=o+=c)*Math.sin(X*f-z),C+=_-_*p*(1-1e9*(Math.sin(k)+1)%2),X+=_-_*p*(1-1e9*(Math.sin(k)**2+1)%2),j&&++j>d&&(s+=l,b+=l,j=0),!u||++R%u||(s=b,o=S,j=j||1);return(t=zzfxX.createBuffer(1,v,zzfxR)).getChannelData(0).set(F),(s=zzfxX.createBufferSource()).buffer=t,s.connect(zzfxX.destination),s.start(),s},zzfxX=new(window.AudioContext||webkitAudioContext),zzfxR=44100,(async()=>{let{canvas:t,context:e}=c("c");e.imageSmoothingEnabled=!1,A();const s=nt(),i=ot(),n=K(),a=ct(),l=[i,s,a];let d=0;function u(){r("resize"),t.width=window.innerWidth>1200?1200:window.innerWidth<600?600:window.innerWidth,t.height=window.innerHeight>600?600:window.innerHeight<300?300:window.innerHeight,e.imageSmoothingEnabled=!1}h("menu-click",()=>d=1),h("game-over",t=>{localStorage.setItem("score",t),t>localStorage.getItem("high_score")&&localStorage.setItem("high_score",t),s.init(),i.reset(),d=2}),h("menu-scene",()=>{2==d&&(s.init(),i.reset(),d=0)}),h("toggle-music",()=>{startMusic()}),window.addEventListener("resize",u,!1),u(),function({fps:t=60,clearCanvas:e=!0,update:s=m,render:i,context:n=o()}={}){if(!i)throw Error("You must provide a render() function");let h,a,c,l,d,u=0,p=1e3/t,f=1/t,x=e?E:m;function y(){if(a=requestAnimationFrame(y),c=performance.now(),l=c-h,h=c,!(l>1e3)){for(r("tick"),u+=l;u>=p;)d.update(f),u-=p;x(n),d.render()}}return d={update:s,render:i,isStopped:!0,start(){h=performance.now(),this.isStopped=!1,requestAnimationFrame(y)},stop(){this.isStopped=!0,cancelAnimationFrame(a)},_frame:y,set _last(t){h=t}},d}({update:function(t){n.update(),l[d].update()},render:function(){n.render(),l[d].render()}}).start()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZS5qcyIsInNvdXJjZXMiOltdLCJzb3VyY2VzQ29udGVudCI6W10sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIifQ==
