AFRAME.registerComponent("follow",{schema:{target:{type:"selector"},speed:{type:"number"}},init:function(){this.directionVec3=new THREE.Vector3},tick:function(a,b){let c=this.directionVec3,f=this.data.target.object3D.position,g=this.el.object3D.position;c.copy(f).sub(g);let h=c.length();if(!(5>h)){let j=this.data.speed/h;["x","y","z"].forEach(function(k){c[k]*=j*(b/1e3)}),this.el.setAttribute("position",{x:g.x+c.x,y:g.y,z:g.z+c.z})}}});AFRAME.registerComponent("grow-add",{init:function(){this.el.setAttribute("scale","0 0 0")},tick:function(a,b){const f=this.el.getAttribute("scale"),g=f.x+b/1e3;1>g?this.el.setAttribute("scale",{x:g,y:g,z:g}):(this.el.setAttribute("scale","1 1 1"),this.el.removeAttribute("grow-add"))}});AFRAME.registerComponent("hit-handler",{schema:{emitEvent:{default:"hit"}},init:function(){this.onHit=this.onHit.bind(this),this.el.addEventListener("stateadded",a=>{"collided"===a.detail.state&&this.onHit()})},onHit:function(){this.el.emit(this.data.emitEvent,{el:this.el})}});const DELAYMIN=300,SPEEDUP=50,DELAYMAX=1200,FOLLOWMIN=0.5,FOLLOWMAX=4,BONUSSCORE=14;AFRAME.registerComponent("initializer",{init:function(){this.score=0;const a=this.el,b=document.querySelector("#headObj");b.setAttribute("plane-collider",!0),a.speed=DELAYMAX,a.setAttribute("snake-controller",{head:b}),a.setAttribute("wasd-relative",!0),a.addEventListener("bad-collision",()=>{const c=document.querySelector("#sky");c.setAttribute("color","red"),a.setAttribute("fog","type: exponential; color: #AAA; density: .00");const f=document.querySelector("#camera");f.removeAttribute("follow")}),a.addEventListener("gobbled-apple",this.handleGobble.bind(this))},handleGobble(a){this.el.isPlaying&&(function(h){h.detail.el.classList.contains("apple")&&h.detail.el.parentNode.removeChild(h.detail.el)}(a),this.score=function(h){h+=1;const j=document.querySelector("#scoreOutput");return j.innerText=h,j.classList.remove("score-animation"),void j.offsetWidth,j.classList.add("score-animation"),h}(this.score),this.score>=BONUSSCORE&&function(h){var j=document.createElement("a-entity");j.setAttribute("mixin","apple"),j.setAttribute("class","apple collidable"),j.setAttribute("random-position","fixedY: 1.25"),h.appendChild(j)}(this.el.sceneEl),this.el.speed-=SPEEDUP,this.el.speed<DELAYMIN&&(this.el.speed=DELAYMIN),function(h){const j=document.querySelector("#camera");j.setAttribute("follow","speed",(h-DELAYMAX)*(FOLLOWMAX-FOLLOWMIN)/(DELAYMIN-DELAYMAX)+FOLLOWMIN)}(this.el.speed))}});AFRAME.registerComponent("plane-collider",{schema:{objects:{default:".collidable"},state:{default:"collided"}},init:function(){this.els=[],this.elMax=new THREE.Vector3,this.elMin=new THREE.Vector3,this.observer=null,this.tick=AFRAME.utils.throttleTick(this.throttledTick,50,this),this.handleHit=this.handleHit.bind(this)},remove:function(){this.pause()},play:function(){var a=this.el.sceneEl;this.data.watch&&(this.observer=new MutationObserver(this.update.bind(this,null)),this.observer.observe(a,{childList:!0,subtree:!0}))},pause:function(){this.observer&&(this.observer.disconnect(),this.observer=null)},update:function(){var a=this.data,b;b=a.objects?this.el.sceneEl.querySelectorAll(a.objects):this.el.sceneEl.children,this.els=Array.prototype.slice.call(b)},handleHit:function(a){a.emit("hit"),a.addState(this.data.state),this.el.emit("hit",{el:a})},throttledTick:function(){let a=new THREE.Box3;return function(){const b=()=>{a.setFromObject(f),this.elMin.copy(a.min),this.elMax.copy(a.max)},c=(h,j,k)=>{let l=[];return k.forEach(m=>{if(m.isEntity){let n=m.getObject3D("mesh");if(n){a.setFromObject(n);let o=a.min,p=a.max,q=h.x<=p.x&&j.x>=o.x&&h.z<=p.z&&j.z>=o.z;q&&l.push(m)}}}),l};var f=this.el.getObject3D("mesh");if(f){this.update(),b();let g=c(this.elMin,this.elMax,this.els);g.forEach(this.handleHit)}}}()});AFRAME.registerComponent("slither-once",{schema:{animDuration:{default:100,type:"number"},targetPos:{type:"vec3"}},init:function(){this.lastMoveLocation=this.el.object3D.position,this.target=new THREE.Vector3,this.update()},update:function(a){if(a&&this.data.targetPos!=a.targetPos){this.lastMoveTime=this.el.sceneEl.time,this.lastMoveLocation.copy(this.el.object3D.position);const b=this.data.targetPos;this.target.set(b.x,b.y,b.z)}},tick:function(a){const b=(c,f)=>1-Math.pow(1-c/f,4);if(a-this.lastMoveTime<=this.data.animDuration){const c=this.lastMoveLocation,f=a-this.lastMoveTime,g=b(f,this.data.animDuration);let h={};["x","y","z"].forEach(j=>{h[j]=(this.target[j]-c[j])*g}),this.el.setAttribute("position",{x:c.x+h.x,y:c.y+h.y,z:c.z+h.z})}else this.el.setAttribute("position",{x:this.target.x,y:this.target.y,z:this.target.z})}});const SLITHERFACTOR=2,calcRotationY=function(a,b){const c=Math.atan2(a.z,a.x),f=Math.atan2(b.z,b.x),g=f>c?1:-1,h=f-c,j=2*(-g*Math.PI),k=Math.abs(j+h)<Math.abs(h)?j+h:h;return-k*(180/Math.PI)};AFRAME.registerComponent("snake-controller",{schema:{head:{type:"selector"},radius:{default:2.5,type:"number"},numStartingBodies:{default:2,type:"number"}},init:function(){this.beginDelay=this.el.sceneEl.time,this.notDead=!0,this.dirMomentum=new THREE.Vector3(0,0,0),this.nextMomentum=this.dirMomentum.clone(),this.headOrientation=0,this.nextOrientation=0;const a=this.data.head.object3D.position;this.balls=[{el:this.data.head,posTarget:a.clone()}];for(let b=0;b<this.data.numStartingBodies;b++)this.generateAndAddBall();this.changeNextMomentumHandler=this.changeNextMomentumHandler.bind(this),this.generateAndAddBall=this.generateAndAddBall.bind(this),this.el.addEventListener("changemomentum",this.changeNextMomentumHandler),this.el.addEventListener("gobbled-apple",()=>{this.generateAndAddBall("collidable"),this.data.head.emit("blob")}),this.el.addEventListener("bad-collision",()=>{this.notDead=!1,this.balls.forEach(b=>{b.el.removeAttribute("slither-once")})})},pause:function(){this.notDead=!1},generateAndAddBall:function(a){const b=this.balls[this.balls.length-1].el.object3D.position,c=document.createElement("a-entity");return c.setAttribute("mixin","body"),c.setAttribute("hit-handler",{emitEvent:"bad-collision"}),c.setAttribute("position",b),this.balls.push({el:c,posTarget:b.clone()}),a&&c.classList.add(a),this.el.appendChild(c),c},changeNextMomentumHandler:function(a){const b=a.detail;this.nextMomentum.set(b.x,b.y,b.z),this.nextOrientation=this.headOrientation+calcRotationY(this.dirMomentum,this.nextMomentum)},tick:function(a){if(this.notDead&&a-this.beginDelay>=this.el.sceneEl.speed){this.beginDelay=a;let b=this.balls;for(let f=b.length-1;0<f;f--)b[f].posTarget.copy(b[f-1].posTarget);const c=b[0];c.posTarget.add(this.nextMomentum),this.dirMomentum.copy(this.nextMomentum),this.nextOrientation!==this.headOrientation&&(AFRAME.utils.entity.setComponentProperty(c.el,"rotation.y",this.nextOrientation),this.headOrientation=this.nextOrientation),b.forEach(f=>{f.el.setAttribute("slither-once",{targetPos:f.posTarget,animDuration:this.el.sceneEl.speed*SLITHERFACTOR})})}}});const getRandomCoordString=(a,b,c,f)=>{var g=f===void 0?Math.floor(Math.random()*((a.y-b.y)/c))*c+b.y:f,h=Math.floor(Math.random()*((a.x-b.x)/c))*c+b.x,j=Math.floor(Math.random()*((a.z-b.z)/c))*c+b.z;return`${h} ${g} ${j}`};AFRAME.registerComponent("random-position",{schema:{min:{default:{x:-20,y:1.25,z:-20},type:"vec3"},max:{default:{x:20,y:1.25,z:20},type:"vec3"},step:{default:2.5,type:"number"},fixedY:{type:"number"}},init:function(){const a=this.data,b=getRandomCoordString(a.max,a.min,a.step,a.fixedY);this.el.setAttribute("position",b)}}),AFRAME.registerComponent("random-position-entities",{schema:{mixin:{default:""},num:{default:15},classList:{default:""},min:{default:{x:-20,y:1.25,z:-20},type:"vec3"},max:{default:{x:20,y:1.25,z:20},type:"vec3"},step:{default:2.5,type:"number"},fixedY:{type:"number"},protectedArea:{default:"0 1.25 0"}},init:function(){let a=this.getRandomUniquePositions();for(var c,b=0;b<this.data.num;b++)c=document.createElement("a-entity"),c.setAttribute("mixin",this.data.mixin),c.setAttribute("class",this.data.mixin+" "+this.data.classList),c.setAttribute("position",a[b]),this.el.appendChild(c)},getRandomUniquePositions(){const a=this.data,b=f=>{const g=f.split(" ").map(k=>+k),h=a.protectedArea.split(" ").map(k=>+k),j=a.step;return g[0]>=h[0]-j&&g[0]<=h[0]+j&&g[1]>=h[1]-j&&g[1]<=h[1]+j&&g[2]>=h[2]-j&&g[2]<=h[2]+j};let c=[];for(let f=0;f<a.num;f++){let g="",h=!1;for(;!h;)g=getRandomCoordString(a.max,a.min,a.step,a.fixedY),c.includes(g)||b(g)||(h=!0);c.push(g)}return c}});AFRAME.registerComponent("wasd-relative",{schema:{speed:{default:2.5,type:"number"}},dependencies:["snake-controller"],init:function(){this.newVelocity=new THREE.Vector3(this.data.speed,0,0),this.down=!1,window.addEventListener("keydown",this.onKeyDown.bind(this),!1),window.addEventListener("keyup",this.onKeyUp.bind(this),!1),this.el.sceneEl.emit("changemomentum",this.newVelocity)},onKeyDown:function(a){if(!this.down){this.down=!0;const b=function(f,g){const h=f.x*Math.cos(g)-f.z*Math.sin(g),j=f.x*Math.sin(g)+f.z*Math.cos(g);return{x:h,y:f.y,z:j}};let c={};switch(a.keyCode){case 37:case 65:c=b(this.newVelocity,-Math.PI/2);break;case 39:case 68:c=b(this.newVelocity,Math.PI/2);break;default:return;}this.newVelocity.set(c.x,c.y,c.z),this.el.sceneEl.emit("changemomentum",this.newVelocity)}},onKeyUp:function(){this.down=!1}});
