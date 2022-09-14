class t{constructor(t,e){this.x=t,this.y=e}dot(t){return this.x*t.x+this.y*t.y}tangent(){return new t(this.y,-this.x)}subtract(e){return new t(this.x-e.x,this.y-e.y)}length(){return Math.sqrt(this.x**2+this.y**2)}multiply(e){return new t(this.x*e,this.y*e)}normal(){return this.multiply(1/this.length())}add(e){return new t(this.x+e.x,this.y+e.y)}rotate(e,n,i=new t(0,0)){return new t(e*(this.x-i.x)-n*(this.y-i.y)+i.x,n*(this.x-i.x)+e*(this.y-i.y)+i.y)}static z(){return new t(0,0)}}var e=(t,e)=>{let n=[];for(e=0;e<t.length;e++)n[e]=t[(e+1)%t.length].subtract(t[e]).normal().tangent();return n};class n{axes=[];vertices=[];constructor(n,i){this.velocity=t.z(),this.invMass=0===n?0:1/n,this.pos=function(e){const n=e[0].x,i=e[0].y;let s=0,r=0,o=0,l=e[e.length-1];for(const t of e){const e=l.x-n,a=l.y-i,c=t.x-n,h=t.y-i,u=e*h-c*a;o+=u,s+=(e+c)*u,r+=(a+h)*u,l=t}const a=3*o;return s/=a,r/=a,new t(s+n,r+i)}(i),this.vertices=i.map((t=>t.subtract(this.pos))),this.axes=e(this.getVertices()),this.field=t.z(),this.bounciness=1,this.drag=.05,this.staticFrictionCoefficient=1,this.dynamicFrictionCoefficient=1,this.restThreshold=2,this.onCollision=(t,e)=>{},this.render=t=>{},this._restFrames=0}applyField(t){this.field=this.field.add(t)}project(t){return this.getVertices().reduce(((e,n)=>{const i=n.dot(t);return i<e.min&&(e.min=i),i>e.max&&(e.max=i),e}),{min:1/0,max:-1/0})}rotate(t,n){const i=Math.cos(n),s=Math.sin(n);this.vertices=this.vertices.map((e=>e.rotate(i,s,t))),this.axes=e(this.getVertices())}translate(t){this.pos=this.pos.add(t),this.axes=e(this.getVertices())}getVertices(){return this.vertices.map((t=>t.add(this.pos)))}isResting(){return 268435455==(268435455&this._restFrames)}update(t){this.velocity=this.velocity.add(this.field.multiply(this.invMass*t)),this.translate(this.velocity.multiply(t)),this.velocity=this.velocity.multiply(1/(1+this.drag*t)),this._restFrames<<=1,this.velocity.length()<this.restThreshold&&(this._restFrames+=1)}}function i(t,e){if(t.max<e.min||e.max<t.min)return null;const n=Math.max(t.min,e.min),i=Math.min(t.max,e.max);let s=Math.sign(t.min-e.min);return 0==s&&(s=Math.sign(t.max-e.max)),s*(i-n)}function s(t,e){const[n,s]=function(t,e){const n=t.axes.concat(e.axes);let s=null,r=-1/0;for(let o of n){const n=i(t.project(o),e.project(o));if(null==n)return[];Math.abs(n)<Math.abs(r)&&(r=n,s=o)}return-1===Math.sign(r)&&(r*=-1,s=s.multiply(-1)),[s,r]}(t,e);if(null!=n){const[i,r]=function(t,e,n,i){const s=(n=n.multiply(-1)).multiply(Math.max(i-.01,0)/(t.invMass+e.invMass)*.8),r={translate:s.multiply(-t.invMass)},o={translate:s.multiply(e.invMass)};let l=e.velocity.subtract(t.velocity);const a=l.dot(n);if(a>0)return[r,o];const c=-(1+Math.min(t.bounciness,e.bounciness))*a/(t.invMass+e.invMass);let h=n.multiply(c);r.impulse=h.multiply(-t.invMass),o.impulse=h.multiply(e.invMass);const u=t.velocity.add(r.impulse);l=e.velocity.add(o.impulse).subtract(u);const m=l.subtract(n.multiply(l.dot(n)));if(m.length()){const n=m.normal();let i=l.dot(n)/(t.invMass+e.invMass);i>=c*Math.min(t.staticFrictionCoefficient,e.staticFrictionCoefficient)&&(i=c*Math.min(t.dynamicFrictionCoefficient,e.dynamicFrictionCoefficient)),h=n.multiply(-i),r.impulse=r.impulse.add(h.multiply(-t.invMass)),o.impulse=o.impulse.add(h.multiply(e.invMass))}return[r,o]}(t,e,n,s);t.translate(i.translate),e.translate(r.translate),(i.impulse||r.impulse)&&(t.velocity=t.velocity.add(i.impulse),e.velocity=e.velocity.add(r.impulse),t.onCollision(e,s))}}function r(t,e,n){var i=e.x,s=e.y,r=n.x-i,o=n.y-s;if(0!==r||0!==o){var l=((t.x-i)*r+(t.y-s)*o)/(r*r+o*o);l>1?(i=n.x,s=n.y):l>0&&(i+=r*l,s+=o*l)}return(r=t.x-i)*r+(o=t.y-s)*o}function o(t,e,n,i,s){for(var l,a=i,c=e+1;c<n;c++){var h=r(t[c],t[e],t[n]);h>a&&(l=c,a=h)}a>i&&(l-e>1&&o(t,e,l,i,s),s.push(t[l]),n-l>1&&o(t,l,n,i,s))}function l(t,e){var n=t.length-1,i=[t[0]];return o(t,0,n,e,i),i.push(t[n]),i}function a(t,e=1,n=!1){if(t.length<=2)return t;var i=e*e;return t=n?t:function(t,e){for(var n,i,s,r,o,l=t[0],a=[l],c=1,h=t.length;c<h;c++)n=t[c],s=l,r=void 0,o=void 0,r=(i=n).x-s.x,o=i.y-s.y,r*r+o*o>e&&(a.push(n),l=n);return l!==n&&a.push(n),a}(t,i),t=l(t,i)}function c(t,e,n,i){var s=e[0]-t[0],r=e[1]-t[1],o=i[0]-n[0],l=i[1]-n[1];if(o*r-l*s==0)return!1;var a=(s*(n[1]-t[1])+r*(t[0]-n[0]))/(o*r-l*s),c=(o*(t[1]-n[1])+l*(n[0]-t[0]))/(l*s-o*r);return a>=0&&a<=1&&c>=0&&c<=1}function h(t,e,n){return(e[0]-t[0])*(n[1]-t[1])-(n[0]-t[0])*(e[1]-t[1])}function u(t,e,n){return h(t,e,n)>0}function m(t,e,n){return h(t,e,n)<0}function d(t,e,n){return h(t,e,n)<=0}function y(t,e){var n=e[0]-t[0],i=e[1]-t[1];return n*n+i*i}function f(t,e){var n=t.length;return t[e<0?e%n+n:e%n]}function p(t,e,n,i){for(var s=n;s<i;s++)t.push(e[s])}function v(t,e){return m(f(t,e-1),f(t,e),f(t,e+1))}function g(t,e,n){for(var i=0;i!==t.length;++i)if(i!==e&&i!==n&&(i+1)%t.length!==e&&(i+1)%t.length!==n&&c(f(t,e),f(t,n),f(t,i),f(t,i+1)))return!1;return!0}function x(t,e,n,i,s=0){var r,o,l,a=e[1]-t[1],c=t[0]-e[0],h=a*t[0]+c*t[1],u=i[1]-n[1],m=n[0]-i[0],d=u*n[0]+m*n[1],y=a*m-u*c;return r=y,o=0,l=(l=s)||0,Math.abs(r-o)<=l?[0,0]:[(m*h-c*d)/y,(a*d-u*h)/y]}function w(t,e=[],n=[],i=[],s=25,r=500,o=0){var l,a,c,M=[0,0],b=[0,0],F=[0,0],k=0,A=0,C=0,P=0,T=0,R=0,V=0,q=[],_=[],j=t,L=t;if(L.length<3)return e;if(++o>r)return console.warn("quickDecomp: max level ("+r+") reached."),e;for(var $=0;$<t.length;++$)if(v(j,$)){n.push(j[$]),k=A=Number.MAX_VALUE;for(var z=0;z<t.length;++z)u(f(j,$-1),f(j,$),f(j,z))&&d(f(j,$-1),f(j,$),f(j,z-1))&&(F=x(f(j,$-1),f(j,$),f(j,z),f(j,z-1)),m(f(j,$+1),f(j,$),F)&&(C=y(j[$],F))<A&&(A=C,b=F,R=z)),u(f(j,$+1),f(j,$),f(j,z+1))&&d(f(j,$+1),f(j,$),f(j,z))&&(F=x(f(j,$+1),f(j,$),f(j,z),f(j,z+1)),u(f(j,$-1),f(j,$),F)&&(C=y(j[$],F))<k&&(k=C,M=F,T=z));if(R===(T+1)%t.length)F[0]=(b[0]+M[0])/2,F[1]=(b[1]+M[1])/2,i.push(F),$<T?(p(q,j,$,T+1),q.push(F),_.push(F),0!==R&&p(_,j,R,j.length),p(_,j,0,$+1)):(0!==$&&p(q,j,$,j.length),p(q,j,0,T+1),q.push(F),_.push(F),p(_,j,R,$+1));else{if(R>T&&(T+=t.length),P=Number.MAX_VALUE,T<R)return e;for(z=R;z<=T;++z)l=f(j,$-1),a=f(j,$),c=f(j,z),h(l,a,c)>=0&&d(f(j,$+1),f(j,$),f(j,z))&&(C=y(f(j,$),f(j,z)))<P&&g(j,$,z)&&(P=C,V=z%t.length);$<V?(p(q,j,$,V+1),0!==V&&p(_,j,V,L.length),p(_,j,0,$+1)):(0!==$&&p(q,j,$,L.length),p(q,j,0,V+1),p(_,j,V,$+1))}return q.length<_.length?(w(q,e,n,i,s,r,o),w(_,e,n,i,s,r,o)):(w(_,e,n,i,s,r,o),w(q,e,n,i,s,r,o)),e}return e.push(t),e}const M=window.a;var b={},F={};onkeydown=t=>t.repeat||(b[t.key]=t.type[5]),onkeyup=t=>F[t.key]=t.type[5];let k=new t(0,0),A=new t(0,0);const C=e=>{var n=M.getBoundingClientRect();return new t((e.clientX-n.left)/(n.right-n.left)*M.width,(e.clientY-n.top)/(n.bottom-n.top)*M.height)};M.onmousemove=t=>{k=C(t)},M.onmousedown=t=>{A=C(t),b.drag=!0},M.onmouseup=t=>{F.drag=!0};const P=M.getContext("2d"),T=()=>{var t=window.innerWidth,e=window.innerHeight;M.width=t*window.devicePixelRatio,M.height=e*window.devicePixelRatio,M.style.width=t+"px",M.style.height=e+"px",P.scale(window.devicePixelRatio,window.devicePixelRatio)};function R(t){t.beginPath();let e=this.getVertices();t.moveTo(e[0].x,e[0].y);for(let n=1;n<e.length;n++)t.lineTo(e[n].x,e[n].y);t.closePath(),t.stroke()}function V(t){t.beginPath();let e=this.getVertices();t.moveTo(e[0].x,e[0].y);for(let n=1;n<e.length;n++)t.lineTo(e[n].x,e[n].y);t.closePath(),t.fill(),t.stroke()}T(),window.addEventListener("resize",T);const q=new n(20,[...Array(32)].map(((e,n)=>(e=2*-n*Math.PI/32,new t(0,5).rotate(Math.cos(e),Math.sin(e))))));function _(e){return w(a([...Array(Math.ceil(e.getTotalLength()))].map(((t,n)=>e.getPointAtLength(n))),1/window.devicePixelRatio).map((({x:t,y:e})=>[t,e]))).map((e=>{const i=new n(0,e.map((([e,n])=>new t(e,n))));return i.bounciness=3,i.render=V,i.kind="convex-decomp",i}))}q.onCollision=t=>{"holeDetector"===t.kind&&console.log("collided with hole")},q.render=R,q.pos=new t(140,40),q.velocity=new t(100,0),q.bounciness=.3,q.applyField(new t(0,980/q.invMass)),q.staticFrictionCoefficient=.3,q.dynamicFrictionCoefficient=.2,q.kind="player";let j=!1,L=0;let $=new t(0,0);let z=0;const E=[...(Array.from(document.querySelectorAll("svg > *")).map((t=>{switch(t.dataset.kind){case"ball":console.log("ball");break;case"hole":console.log("hole");break;default:console.log("default"),_(t)}})),{player:void 0,objects:Array.from(document.querySelectorAll("svg > *")).flatMap((t=>_(t)))}).objects];var S=0,X=performance.now();const D=e=>{for(requestAnimationFrame(D),b.drag&&q.isResting()&&(j=!0),b.k&&(q.velocity=new t(0,-500)),j&&(q.isResting()?(()=>{$=A.subtract(k);const t=Math.min($.length(),220);z=t<20?0:t/200*800+20})():j=!1),F.drag&&j&&(j=!1,z&&(L++,q.velocity=$.normal().multiply(z))),S+=e-X,X=e;S>1;){S-=1,q.update(.001);for(let t=E.length;t--;)s(q,E[t])}var n;(n=P).save(),n.setTransform(1,0,0,1,0,0),n.clearRect(0,0,M.width,M.height),n.restore(),P.save(),P.translate(.5,.5),P.save(),q.render(P),P.restore();for(let t=E.length;t--;)P.save(),E[t].render(P),P.restore();if(j){const t=$.normal().multiply(z);P.save(),P.translate(q.pos.x,q.pos.y),P.beginPath(),P.moveTo(0,0),P.lineTo(t.x,t.y),P.closePath(),P.stroke(),P.restore()}P.save(),P.font="28px sans",q.isResting()&&P.fillText("resting",10,20),P.fillText(`shots: ${L}`,10,50),j&&P.fillText(`drag: ${k.x} ${k.y}, dragStart: ${A.x} ${A.y}`,10,80),P.restore(),P.restore(),b={},F={}};requestAnimationFrame(D);
//# sourceMappingURL=index.dbb3446c.js.map