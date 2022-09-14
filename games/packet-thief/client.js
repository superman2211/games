"use strict";window.requestAnimFrame=(function(e){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimaitonFrame||function(e){window.setTimeout(e,16.666666666666668)}})(),!function(){let e,t,n,r,i,o,a,s,c,l=[0,0],u,d,g;var p,f;function m(e){a.innerHTML=`<h2>${e}</h2>`}function w(e,t){s.innerHTML=`<h2 class='${t}'>${e}</h2>`}function y(){c.innerHTML=["<h2>The score</h2>","<span class='blue'>Blue: "+l[d]+"</span>","<span> -- </span>","<span class='red'>Red: "+l[(d+1)%NUM_PLAYERS]+"</span>","<br>"].join("")}function h(){t.style.display="block"}function F(){t.style.display="none"}function A(){n.style.display="block"}function x(){n.style.display="none"}function b(){let e=new AudioContext,t=[14,12,9,10,9],n=e.createGain();for(let r in t){let i=e.createOscillator();t[r]&&(i.connect(n),n.connect(e.destination),i.start(r*.1),i.frequency.setValueAtTime(440*1.06**(13-t[r]),r*.1),n.gain.value=.25,n.gain.setValueAtTime(1,r*.1),n.gain.setTargetAtTime(1e-4,r*.1+.08,.005),i.stop(r*.1+.09))}}function I(){let e=new AudioContext,t=[16,void 0,19,void 0,22],n=e.createGain();for(let r in t){let i=e.createOscillator();t[r]&&(i.connect(n),n.connect(e.destination),i.start(r*.1),i.frequency.setValueAtTime(440*1.06**(13-t[r]),r*.1),n.gain.value=.25,n.gain.setValueAtTime(1,r*.1),n.gain.setTargetAtTime(1e-4,r*.1+.08,.005),i.stop(r*.1+.09))}}function v(){let e=new AudioContext,t=[14,void 0,12,void 0,14],n=e.createGain();for(let r in t){let i=e.createOscillator();t[r]&&(i.connect(n),n.connect(e.destination),i.start(r*.1),i.frequency.setValueAtTime(440*1.06**(13-t[r]),r*.1),n.gain.value=.25,n.gain.setValueAtTime(1,r*.1),n.gain.setTargetAtTime(1e-4,r*.1+.08,.005),i.stop(r*.1+.09))}}function T(){e.on("start",(e,t)=>{p=e,d=t,A(),F(),w("Game Start!"),g.start()});e.on("turn",(t,n,r)=>{p=t,f=r,l=n,f.length>0?w("Your turn!","zoom blue"):(w("You passed!"),e.emit("pass")),y()});e.on("wait",(e,t)=>{p=e,f=[],l=t,w("Opponents turn!","red"),y()});e.on("win",()=>{w("You win!","zoom blue"),y(),b()});e.on("lose",()=>{w("You lose!","red"),y(),I()});e.on("draw",()=>{w("Draw!"),y(),v()});e.on("end",()=>{x(),h(),m("Waiting for opponent...")});e.on("connect",()=>{x(),h(),m("Connected to server.")});e.on("disconnect",()=>{x(),h(),m("Connection lost!")});e.on("error",()=>{x(),h(),m("Connection error!")});r.addEventListener("click",function(t){m("Waiting for opponent...");e.emit("find-human")},!1);i.addEventListener("click",function(t){e.emit("start-basic-ai")},!1);o.addEventListener("click",function(t){e.emit("start-better-ai")},!1)}function S(){e=io({upgrade:!1,transports:["websocket"]});t=document.getElementById("intro-wrapper");n=document.getElementById("game-wrapper");r=document.getElementById("find-human");i=document.getElementById("start-basic-ai");o=document.getElementById("start-better-ai");a=document.getElementById("status");s=document.getElementById("message");c=document.getElementById("score");u=document.getElementById("game");g=C(320,400,u);p=void 0;T()}window.addEventListener("load",S,!1);function C(e,t,n){let r=new Y(e,t,n),i=new O(e,t);r.setStage(i);r.setStageTransition(()=>{if(r.stage instanceof O){let n=new z(e,t);r.setStage(n)}});return r}function B(e,t,n){let r=parseInt(e.replace(/#/g,''),16),i=r>>16,o=r>>8&255,a=r&255,s=parseInt(t.replace(/#/g,''),16),c=s>>16,l=s>>8&255,u=s&255,d=i+n*(c-i),g=o+n*(l-o),p=a+n*(u-a);return'#'+(16777216+(d<<16)+(g<<8)+p|0).toString(16).slice(1)}class E{constructor(e,t){this.x=e;this.y=t}}function k(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function L(e,t){let n=e.getBoundingClientRect();return new E(t.clientX-n.left,t.clientY-n.top)}function P(e,t){let n=e.getBoundingClientRect();return new E(t.touches[0].clientX-n.left,t.touches[0].clientY-n.top)}class R{constructor(){if(R.instance){return R.instance}this.numOfImages=0;this.numComplete=0;this.images={};R.instance=this}loadImage(e,t){this.numOfImages++;let n=new Image;n.onload=()=>{R.instance.images[e]=n,R.instance.numComplete++};n.src=t}getImage(e){let t=this.images[e];if(t instanceof Image){return t}throw new Error(e+' is not a valid key')}getProgress(){return this.numComplete/this.numOfImages}loadingIsCompleted(){if(this.numOfImages===0){return!0}return this.getProgress()===1}}class Y{constructor(e,t,n){this.w=e;this.h=t;this.canvas=n;this.canvas.width=this.w;this.canvas.height=this.h;this.ctx=this.canvas.getContext('2d');this.stage=void 0}setStage(e){this.stage=e;this.stage.ctx=this.ctx;this.stage.init()}setStageTransition(e){this.transitionFun=e}start(){this.running=!0;let e=this;function t(){let n=Date.now(),r=n-e.currentTime;e.currentTime=n;e.running&&e.update(r/1e3);e.render();window.requestAnimFrame(t)}window.requestAnimFrame(t)}stop(){this.running=!1}update(e){this.stage.finished&&this.transitionFun!==void 0&&this.transitionFun();this.stage!==void 0&&this.stage.update(e)}render(){this.ctx.save();this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);this.ctx.restore();this.stage!==void 0&&this.stage.render()}}class q{constructor(e,t){this.w=e;this.h=t;this.ctx=void 0;this.finished=!1;this.actors=[]}addActor(e){e.stage=this;e.init();this.actors.push(e)}init(){this.finished=!1}update(e){this.actors=this.actors.filter(e=>!e.remove);this.sortActorsByLayer();for(let t of this.actors)t.update(e)}render(){for(let e of this.actors)e.render()}sortActorsByLayer(){this.actors.sort((e,t)=>{return e.layer-t.layer})}}class O extends q{constructor(e,t){super(e,t);this.assetLoader=new R;this.progress=this.assetLoader.getProgress()}update(e){super.update(e);this.progress=this.assetLoader.getProgress();this.assetLoader.loadingIsCompleted()&&(this.finished=!0)}render(){super.render();this.ctx.save();this.drawProgress();this.ctx.restore()}drawProgress(){let e=20,t=this.w-e*2,n=50,r=t*this.progress;this.ctx.strokeRect(e,this.h/2-n/2,t,n);this.ctx.fillRect(e,this.h/2-n/2,r,n)}}class G{constructor(e,t){this.pos=e;this.layer=t.layer?t.layer:0;this.stage=t.stage?t.stage:void 0;this.debugColour=t.debugColour?t.debugColour:'#000000';this.remove=!1}init(){}update(e){}render(){this.debugDraw()}debugDraw(){}}class X extends G{constructor(e,t,n){super(e,n);this.r=t}debugDraw(){let e=this.stage.ctx;e.beginPath();e.fillStyle=this.debugColour;e.arc(this.pos.x,this.pos.y,this.r,0,2*Math.PI);e.fill()}}class z extends q{constructor(e,t){super(e,t);this.mesh=[];this.tileSize=20;this.gap=50;this.paddingX=this.tileSize+2;this.paddingY=this.tileSize+8}init(){super.init();for(let e=0;e<p.r;e++){for(let t=0;t<p.c;t++){if(p.tiles[e][t]===null){continue}let n=p.tiles[e][t],r=n.c*this.gap+this.paddingX+this.gap/2*(e%2),i=n.r*this.gap+this.paddingY;this.addActor(new V(new E(r,i),this.tileSize,n))}}u.addEventListener("mousedown",t=>{let n=L(u,t),r=this.actors.filter(e=>e instanceof V).filter(e=>e.doesIntersect(n));if(r[0]!==void 0){let t=r[0].tile;e.emit("move",{r:t.r,c:t.c})}});u.addEventListener("touchstart",t=>{let n=P(u,t),r=this.actors.filter(e=>e instanceof V).filter(e=>e.doesIntersect(n));if(r[0]!==void 0){let t=r[0].tile;e.emit("move",{r:t.r,c:t.c})}});for(let e=0;e<p.r;e++){for(let t=0;t<p.c;t++){if(p.tiles[e][t]===null){continue}let n=p.tiles[e][t],r=new BoardTile(n.r,n.c);r.getSiblings().filter(e=>p.tiles[e.r]!==void 0).map(e=>p.tiles[e.r][e.c]).filter(e=>e).forEach(t=>{let r=n.c*this.gap+this.paddingX+this.gap/2*(e%2),i=n.r*this.gap+this.paddingY,o=t.c*this.gap+this.paddingX+this.gap/2*(t.r%2),a=t.r*this.gap+this.paddingY;this.mesh.push({from:new E(r,i),to:new E(o,a)})})}}}update(e){super.update(e)}render(){let e=this.ctx;for(let t of this.mesh){let n=t.from,r=t.to;e.strokeStyle="#000000";e.lineWidth=2;e.beginPath();e.moveTo(n.x,n.y);e.lineTo(r.x,r.y);e.stroke()}super.render()}}class V extends X{constructor(e,t,n){super(e,t,{layer:n.y});this.tile=n;this.alphaAccum=0;this.lerpAccum=1}doesIntersect(e){return k(e,this.pos)<this.r}update(e){let t=this.tile.owner;this.tile=p.tiles[this.tile.r][this.tile.c];t!==void 0&&t!==this.tile.owner&&(this.lerpAccum=0);this.lerpAccum+=e*2;this.lerpAccum>1&&(this.lerpAccum=1);this.alphaAccum=(this.alphaAccum+e)%Math.PI}render(){let e=this.stage.ctx,t;this.tile.owner===d?(t=e.createRadialGradient(this.pos.x-10,this.pos.y-10,0,this.pos.x,this.pos.y,100),t.addColorStop(.2,B("#FF0000","#0000FF",this.lerpAccum)),t.addColorStop(0,"#FFFFFF")):this.tile.owner!==void 0?(t=e.createRadialGradient(this.pos.x-10,this.pos.y-10,0,this.pos.x,this.pos.y,100),t.addColorStop(.2,B("#0000FF","#FF0000",this.lerpAccum)),t.addColorStop(0,"#FFFFFF")):(t="#000000");e.save();e.beginPath();e.fillStyle=t;e.strokeStyle="#000000";e.lineWidth=3;e.arc(this.pos.x,this.pos.y,this.r,0,2*Math.PI);e.fill();e.stroke();e.restore();this.tile.score>1&&(e.fillStyle="#FFFF00",e.font="bold 20px Arial",e.globalAlpha=1-Math.sin(this.alphaAccum)/2,e.fillText("+"+this.tile.score,this.pos.x-10,this.pos.y+5),e.globalAlpha=1);f.filter(e=>e.r===this.tile.r&&e.c===this.tile.c).length>0&&(e.strokeStyle="#FFFFFF",e.lineWidth=5,e.globalAlpha=1-Math.sin(this.alphaAccum)/2,e.beginPath(),e.arc(this.pos.x,this.pos.y,this.r-3,0,2*Math.PI),e.stroke(),e.globalAlpha=1)}}}()