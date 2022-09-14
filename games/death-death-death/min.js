// Senya Pugach — https://upisfr.ee
let EPS=.01,PI2=Math.PI/2,PI=Math.PI,{sin:sin,cos:cos,tan:tan,sqrt:sqrt,min:min,max:max,abs:abs,sign:sign,random:random,pow:pow,round:round}=Math;function step(e,t){return t<e?0:1}const clamp=(e,t,n)=>Math.min(Math.max(e,t),n);let EPSILON=.001;function DotProduct(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function Length(e){return sqrt(DotProduct(e,e))}function MultiplySV(e,t){return[e*t[0],e*t[1],e*t[2]]}function MultiplyMV(e,t){let n=[0,0,0];for(let a=0;a<3;a++)for(let o=0;o<3;o++)n[a]+=t[o]*e[a][o];return n}function Add(e,t){return[e[0]+t[0],e[1]+t[1],e[2]+t[2]]}function Subtract(e,t){return[e[0]-t[0],e[1]-t[1],e[2]-t[2]]}function Clamp(e){return[min(255,max(0,e[0])),min(255,max(0,e[1])),min(255,max(0,e[2]))]}function ReflectRay(e,t){return Subtract(MultiplySV(2*DotProduct(e,t),t),e)}function InvertDirection(e){return[1/e[0],1/e[1],1/e[2]]}function isCollision(e,t){return!(t.max[0]<e.min[0]||t.min[0]>e.max[0]||t.max[1]<e.min[1]||t.min[1]>e.max[1]||t.max[2]<e.min[2]||t.min[2]>e.max[2])}let Box=function(e,t,n,a,o,i=!0,l=null){this.min=e,this.max=t,this.bounds=[e,t],this.color=n,this.specular=a,this.reflective=o,this.collider=i,this.onCollide=l,this.update()};Box.prototype.update=function(){this.bounds=[this.min,this.max],this.center=MultiplySV(.5,Add(this.max,this.min)),this.normalSize=MultiplySV(.5,Subtract(this.max,this.min)),this.mapSize=Subtract(this.max,this.min)},Box.prototype.movePlayer=function(e){this.min=Add(e,[-.3,0,-.3]),this.min[1]=-.9,this.max=Add(e,[.3,.7,.3]),this.update()},Box.prototype.moveProj=function(e){this.min=Add(e,[0,0,0]),this.max=Add(e,[.1,.1,.3]),this.update()};let Light=function(e,t,n){this.ltype=e,this.intensity=t,this.position=n};Light.AMBIENT=0,Light.POINT=1,Light.DIRECTIONAL=2;let _wallColor=128,wallColor=[_wallColor,_wallColor,_wallColor],wallSpec=1e3,wallRefl=.25;function generateMap(){for(let e=-10;e<10;e++)for(let t=-10;t<10;t++)(t>1||t<-1)&&(e>1||e<-1)&&random()<.1&&addWall(t,e);let e=new Box([-12*wallSize,-1,-12*wallSize],[-12*wallSize+wallSize,1,12*wallSize+wallSize],wallColor,wallSpec,wallRefl),t=new Box([12*wallSize,-1,-12*wallSize],[12*wallSize+wallSize,1,12*wallSize+wallSize],wallColor,wallSpec,wallRefl),n=new Box([-12*wallSize,-1,12*wallSize],[12*wallSize+wallSize,1,12*wallSize+wallSize],wallColor,wallSpec,wallRefl),a=new Box([-12*wallSize,-1,-12*wallSize],[12*wallSize+wallSize,1,-12*wallSize+wallSize],wallColor,wallSpec,wallRefl);e.isWall=!0,t.isWall=!0,n.isWall=!0,a.isWall=!0,boxes.push(e,t,n,a),walls.push(e,t,n,a)}function addWall(e,t){let n=new Box([e*wallSize,-1,t*wallSize],[e*wallSize+wallSize,1,t*wallSize+wallSize],wallColor,wallSpec,wallRefl);return n.isWall=!0,boxes.push(n),walls.push(n),n}function getBackgroundColor(){return random()>(isGameEnded?.99:.99998)?[0,0,0]:fogColor}let canvas=document.getElementById("canvas"),gl=canvas.getContext("2d"),canvasUI=document.getElementById("ui"),glUI=canvasUI.getContext("2d"),canvas_buffer=gl.getImageData(0,0,canvas.width,canvas.height),canvas_pitch=4*canvas_buffer.width;function PutPixel(e,t,n){if(e=canvas.width/2+e,t=canvas.height/2-t-1,e<0||e>=canvas.width||t<0||t>=canvas.height)return;let a=4*e+canvas_pitch*t;canvas_buffer.data[a++]=n[0],canvas_buffer.data[a++]=n[1],canvas_buffer.data[a++]=n[2],canvas_buffer.data[a++]=255}function UpdateCanvas(){gl.putImageData(canvas_buffer,0,0)}function CanvasToViewport(e){return[e[0]*viewport_size/canvas.width,e[1]*viewport_size/canvas.height,projection_plane_z]}function IntersectRayBox(e,t,n){let a,o,i,l,r,s,c=n.bounds,p=InvertDirection(t),d=[+(p[0]<0),+(p[1]<0),+(p[2]<0)];if(a=(c[d[0]][0]-e[0])*p[0],o=(c[1-d[0]][0]-e[0])*p[0],i=(c[d[1]][1]-e[1])*p[1],l=(c[1-d[1]][1]-e[1])*p[1],!(a>l||i>o||(i>a&&(a=i),l<o&&(o=l),r=(c[d[2]][2]-e[2])*p[2],s=(c[1-d[2]][2]-e[2])*p[2],a>s||r>o)))return r>a&&(a=r),s<o&&(o=s),a>o?1/0:a<0?o:a}function ComputeLighting(e,t,n,a,o){let i=0,l=Length(t),r=Length(n);for(let s=0;s<lights.length;s++){let c=lights[s];if(c.ltype==Light.AMBIENT)i+=c.intensity;else{let s,p;if(c.ltype==Light.POINT?(s=Subtract(c.position,e),p=1):(s=c.position,p=1/0),!o){if(ClosestIntersection(e,s,EPSILON,p))continue}let d=DotProduct(t,s);if(d>0&&(i+=c.intensity*d/(l*Length(s))),-1!=a){let e=ReflectRay(s,t),o=DotProduct(e,n);o>0&&(i+=c.intensity*pow(o/(Length(e)*r),a))}}}return i}function ClosestIntersection(e,t,n,a){let o=1/0,i=null;for(let l=0;l<boxes.length;l++){let r=IntersectRayBox(e,t,boxes[l]);r<o&&n<r&&r<a&&(o=r,i=boxes[l])}return i?[i,o]:null}function NormalBox(e,t){let n=Subtract(e,t.center),a=[sign(n[0])*step(abs(abs(n[0])-t.normalSize[0]),EPS),sign(n[1])*step(abs(abs(n[1])-t.normalSize[1]),EPS),sign(n[2])*step(abs(abs(n[2])-t.normalSize[2]),EPS)];return MultiplySV(1/Length(a),a)}function GetColorFromMap(e,t,n){let{data:a,width:o,height:i}=e.map,l=e.mapSize,r=(e.max[0]-t[0])/l[0];0!==n[0]&&(r=(e.max[2]-t[2])/l[2]);let s=(e.max[1]-t[1])/l[1];0!==n[1]&&(s=(e.max[2]-t[2])/l[2]);let c=round(r*o),p=round(s*i)*(4*o)+4*c;return[a[p],a[p+1],a[p+2]]}function TraceRay(e,t,n,a,o){let i=ClosestIntersection(e,t,n,a);if(!i)return getBackgroundColor();let l,r=i[0],s=i[1],c=Add(e,MultiplySV(s,t)),p=NormalBox(c,r),d=walls.includes(r),u=MultiplySV(-1,t),m=ComputeLighting(c,p,u,r.specular,d);if(r.map){let e=GetColorFromMap(r,c,p);e=Add(e,r.color),l=MultiplySV(m,e)}else l=MultiplySV(m,r.color);if(r.reflective<=0||o<=0)return l;let f=TraceRay(c,ReflectRay(u,p),EPS,maxRenderDistance,o-1),h=Add(MultiplySV(1-r.reflective,l),MultiplySV(r.reflective,f)),x=s/a;return Add([fogColor[0]*x,fogColor[1]*x,fogColor[2]*x],h)}function printText(e,t,n,a,o,i=!0){glUI.font=(i?"italic ":"")+t+"px sans-serif",glUI.fillStyle=n,glUI.fillText(e,a,o)}function printShadowedText(e,t,n,a,o=!0){printText(e,t,"#000",n+1,a+1,o),printText(e,t,"#fff",n,a,o)}function renderUI(){glUI.clearRect(0,0,canvasUI.width,canvasUI.height),isGameStarted||isGameEnded?isGameStarted&&!isGameEnded?renderInGameUI():isGameStarted&&isGameEnded&&renderEndUI():renderStartUI()}function renderStartUI(){printShadowedText("➰➰➰➰➰",11,15,20,!1),printShadowedText("☠️️",16,40,20,!1),printShadowedText("DEATH  DEATH  DEATH",8,5,36),printText("KILL  EVERYBODY",9,"#000",10,48,!0),printText("YOU  LOVE",9,"#000",24,56,!0),printText("WASD & MOUSE",9,"#000",13,67,!0),printText("CLICK  TO  START",9,"#000",10,75,!0),printText("A GAME BY SENYA PUGACH",7,"#000",2,96,!0)}function renderInGameUI(){printShadowedText("❤️",7,4,11,!1),printShadowedText(`${round(100*playerHealth)}`.split("").join(1!==playerHealth?" ":""),10,16,12,!0),printShadowedText("💀",7,4,23,!1),printShadowedText(getNumberWithSpaces(score),10,16,24,!0)}function renderEndUI(){glUI.fillStyle="rgba(0, 0, 0, 0.5)",glUI.fillRect(0,0,canvas.width,canvas.height),printShadowedText("➰➰➰➰➰",11,15,20,!1),printShadowedText("☠️️",16,40,20,!1),printShadowedText(getNumberWithSpaces(score)+" DEATHS",9,5,40),printShadowedText("ON YOUR HANDS",9,5,50),printShadowedText("ARE YOU HAPPY?",9,5,60),printShadowedText("REFRESH TO RESTART",8,4,78,!0),printText("A GAME BY SENYA PUGACH",7,"#000",2,96,!0)}function getNumberWithSpaces(e){return`${e}`.split("").join(" ")}let keys={};function updateKeyboard(){for(const e in keys)e&&("KeyW"==e&&movePlayer([0,0,1]),"KeyS"==e&&movePlayer([0,0,-1]),"KeyA"==e&&movePlayer([-1,0,0]),"KeyD"==e&&movePlayer([1,0,0]))}function movePlayer(e){let t=MultiplySV(moveSpeed,MultiplyMV(camera_rotation,e));t[1]=0,boxes.forEach((e=>{if(!e.collider)return;let n=playerBox,a=e;if(isCollision(n,a)){if(e.onCollide&&(e.onCollide(),!e.collider))return;a.max[0]>n.min[0]+t[0]&&a.min[0]<n.max[0]+t[0]&&(t[0]=0),a.max[2]>n.min[2]+t[2]&&a.min[2]<n.max[2]+t[2]&&(t[2]=0)}})),camera_position=Add(camera_position,t),camera_position[1]+=cos(Date.now()/100)/100,abs(camera_position[1])>.1&&(camera_position[1]*=1e-4),playerBox.movePlayer(camera_position),playerLight1.position=Add(camera_position,[0,0,1]),zzfxP(stepSound)}window.onkeydown=e=>{keys[e.code]=!0},window.onkeyup=e=>{delete keys[e.code]},canvas.onclick=()=>{canvas.requestPointerLock()},document.addEventListener("mousemove",updateMouse),document.addEventListener("mousedown",mouseDown),document.addEventListener("mouseup",mouseUp);let zzfx,zzfxP,zzfxG,zzfxV,zzfxR,zzfxX,zzfxM,mouseSpeed=.002,moveSpeed=.2,isMousePressed=!1,mouseRot={x:0,y:0};function updateMouse(e){if(document.pointerLockElement===canvas&&!isGameEnded){let t=e.movementX*mouseSpeed,n=e.movementY*mouseSpeed,a=PI2-.01,o=mouseRot.x,i=mouseRot.y;mouseRot.x=o+t,mouseRot.y=clamp(i+n,-a,a);let l=mouseRot.x;mouseRot.y;camera_rotation=[[cos(l),0,sin(l)],[0,1,0],[-sin(l),0,cos(l)]]}}function mouseDown(){null===document.pointerLockElement||isGameEnded||(isGameStarted||start(),isMousePressed=!0,newProjectile(camera_position,[sin(mouseRot.x),0,cos(mouseRot.x)],"player"))}function mouseUp(){isMousePressed=!1}const bgMusicData=[[[3,0,100,,,,,,,,,,,.5],[,0,360,,,1,,,,,,,100,.4]],[[[,-1,13,,5,,1,.02,22,,1,,5,,1,,22,,1,,5,,1,,22,,1,,5,,1,,22,,1,,5,,1,,22,,1,,5,,1,,22,,1,,5,,1,,22,,1,,5,,1,,22,,],[1,-1,,,1,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,1,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],[1,1,,,,,2,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,2,,,,,,,,,,,,,,,,,,,,,,,,,,,,]]],[0],150,{title:"js13kb",instruments:["Bass","synth"],patterns:["Pattern 0"]}];let bgMusicNode,bgMusicBuffer;const stepData=[.1,,,,,.001,1];let stepSound;const playerHitData=[1.08,,60,.02,.08,.13,3,1.81,,,,,.03,.4,-21,,.01,.97,.04];let playerHitSound;const playerDeathData=[1.16,,290,.07,.29,.22,2,.78,,.5,-70,.07,.13,,,,,.71,.12,.11];let playerDeathSound;const npcHitData=[1.18,,164,,.08,.06,1,2.25,-2.8,,,,,1.1,,.2,,.78,.02,.17];let npcHitSound;const npcDeathData=[2.91,0,65.40639,,.43,.18,3,.2,,,,,,.4,,,.04,.37];let npcDeathSound;function initAudio(){zzfx=(...e)=>zzfxP(zzfxG(...e)),zzfxP=(...e)=>{let t=zzfxX.createBufferSource(),n=zzfxX.createBuffer(e.length,e[0].length,zzfxR);return e.map(((e,t)=>n.getChannelData(t).set(e))),t.buffer=n,t.connect(zzfxX.destination),t.start(),t},zzfxG=(e=1,t=.05,n=220,a=0,o=0,i=.1,l=0,r=1,s=0,c=0,p=0,d=0,u=0,m=0,f=0,h=0,x=0,S=1,w=0,z=0)=>{let g,y,P=2*Math.PI,C=s*=500*P/zzfxR**2,v=(0<f?1:-1)*P/4,b=n*=(1+2*t*Math.random()-t)*P/zzfxR,M=[],R=0,D=0,I=0,E=1,T=0,_=0,A=0;for(c*=500*P/zzfxR**3,f*=P/zzfxR,p*=P/zzfxR,d*=zzfxR,u=zzfxR*u|0,y=(a=99+zzfxR*a)+(w*=zzfxR)+(o*=zzfxR)+(i*=zzfxR)+(x*=zzfxR)|0;I<y;M[I++]=A)++_%(100*h|0)||(A=l?1<l?2<l?3<l?Math.sin((R%P)**3):Math.max(Math.min(Math.tan(R),1),-1):1-(2*R/P%2+2)%2:1-4*Math.abs(Math.round(R/P)-R/P):Math.sin(R),A=(u?1-z+z*Math.sin(2*Math.PI*I/u):1)*(0<A?1:-1)*Math.abs(A)**r*e*zzfxV*(I<a?I/a:I<a+w?1-(I-a)/w*(1-S):I<a+w+o?S:I<y-x?(y-I-x)/i*S:0),A=x?A/2+(x>I?0:(I<y-x?1:(y-I)/x)*M[I-x|0]/2):A),g=(n+=s+=c)*Math.sin(D*f-v),R+=g-g*m*(1-1e9*(Math.sin(I)+1)%2),D+=g-g*m*(1-1e9*(Math.sin(I)**2+1)%2),E&&++E>d&&(n+=p,b+=p,E=0),!u||++T%u||(n=b,s=C,E=E||1);return M},zzfxV=.3,zzfxR=44100,zzfxX=new(window.AudioContext||webkitAudioContext),zzfxM=(e,t,n,a=125)=>{let o,i,l,r,s,c,p,d,u,m,f,h,x,S,w,z=0,g=[],y=[],P=[],C=0,v=0,b=1,M={},R=zzfxR/a*60>>2;for(;b;C++)g=[b=d=f=x=0],n.map(((a,f)=>{for(p=t[a][C]||[0,0,0],b|=!!t[a][C],w=x+(t[a][0].length-2-!d)*R,S=f==n.length-1,i=2,r=x;i<p.length+S;d=++i){for(s=p[i],u=i==p.length+S-1&&S||m!=(p[0]||0)|s|0,l=0;l<R&&d;l++>R-99&&u?h+=(h<1)/99:0)c=(1-h)*g[z++]/2||0,y[r]=(y[r]||0)-c*v+c,P[r]=(P[r++]||0)+c*v+c;s&&(h=s%1,v=p[1]||0,(s|=0)&&(g=M[[m=p[z=0]||0,s]]=M[[m,s]]||(o=[...e[m]],o[2]*=2**((s-12)/12),s>0?zzfxG(...o):[])))}x=w}));return[y,P]}}function startAudio(){initAudio(),bgMusicBuffer=zzfxM(...bgMusicData),bgMusicNode=zzfxP(...bgMusicBuffer),bgMusicNode.loop=!0,stepSound=zzfxG(...stepData),playerHitSound=zzfxG(...playerHitData),playerDeathSound=zzfxG(...playerDeathData),npcHitSound=zzfxG(...npcHitData),npcDeathSound=zzfxG(...npcDeathData),zzfxX.resume()}let projectiles=[],projSpeed=.5;function newProjectile(e,t,n){let a={pos:Add(e,[0,0,0]),dir:t,box:new Box([0,0,0],[.1,.1,.1],[255,63,49],500,0),author:n};projectiles.push(a),boxes.push(a.box)}function updateProjectiles(){projectiles.forEach(updateProj)}function updateProj(e){let t=MultiplySV(projSpeed,e.dir);e.pos=Add(e.pos,t),e.pos[1]=-.1,e.box.moveProj(e.pos),[playerBox,...npcs,...walls].some(((t,n)=>{if(0===n)isCollision(t,e.box)&&"player"!==e.author&&(playerHealth-=npcProjDamage,removeProj(e,!0),isGameEnded||zzfxP(playerHitSound),playerHealth<=0&&(isGameEnded||(zzfxP(playerDeathSound),bgMusicNode.stop()),death()));else{if(!t.box&&isCollision(t,e.box)&&t.isWall)return void removeProj(e,!0);t.box&&isCollision(t.box,e.box)&&e.author!==t&&(t.health-=playerDamage,isGameEnded||zzfxP(npcHitSound),t.health<=0&&(removeNPC(t,!0),isGameEnded||zzfxP(npcDeathSound),"player"===e.author&&(playerHealth+=playerHeal,score++)),removeProj(e,!0))}})),removeProj(e)}function removeProj(e,t=!1){(t||e.pos[0]>30||e.pos[0]<-30||e.pos[2]>30||e.pos[2]<-30)&&(projectiles=projectiles.filter((t=>t!==e)),boxes=boxes.filter((t=>t!==e.box)))}let npcs=[],npcSpeed=.11,npcProjSpeed=.1,npcProjDamage=.05,npcFireRate=.0035,npcSpawnChance=.006,npcDespawnTime=6e4,_npcCanvas=document.createElement("canvas");_npcCanvas.width=35,_npcCanvas.height=100;let _npcContext=_npcCanvas.getContext("2d"),_npcTextureBuffer=_npcContext.createImageData(_npcCanvas.width,_npcCanvas.height);function getPos(){let e=10*random(),t=10*random();return e*=random()>.5?1:-1,t*=random()>.5?1:-1,[e,0,t]}const emojies=["🧍🏻","🧍🏼","🧍🏽","🕴🏻","🕺🏻"];function getNPCTexture(e){return _npcContext.clearRect(0,0,_npcCanvas.width,_npcCanvas.height),_npcContext.font="120px sans-serif",_npcContext.fillStyle="#ff0000",_npcContext.fillText(e,-42,102),_npcContext.getImageData(0,0,_npcCanvas.width,_npcCanvas.height)}function newNPC(){let e={pos:getPos(),dir:0,box:new Box([0,-.9,0],[1,1,1],[0,0,0],500,0,!0,onNPCAndPlayerCollide),start:Date.now(),health:1};e.box.map=getNPCTexture(emojies[Math.floor(random()*emojies.length)]),npcs.push(e),boxes.push(e.box)}function onNPCAndPlayerCollide(){}function updateNPCs(){random()<npcSpawnChance&&newNPC(),npcs.forEach(updateNPC)}function updateNPC(e){walls.forEach((t=>{isCollision(t,e.box)&&(e.dir+=PI/4*random())}));let t=[cos(e.dir)*npcSpeed,0,sin(e.dir)*npcSpeed];e.pos=Add(e.pos,t),e.box.movePlayer(e.pos),random()<npcFireRate&&fireNPC(e),removeNPC(e)}function removeNPC(e,t=!1){if(Date.now()-e.start>npcDespawnTime||t)return npcs=npcs.filter((t=>t!==e)),void(boxes=boxes.filter((t=>t!==e.box)))}function fireNPC(e){let t=MultiplySV(npcProjSpeed,Subtract(camera_position,e.pos));newProjectile(e.pos,t,e)}function render(){for(let e=-canvas.width/2;e<canvas.width/2;e++)for(let t=-canvas.height/2;t<canvas.height/2;t++){if(random()<.5)continue;let n=CanvasToViewport([e,t]);n=MultiplyMV(camera_rotation,n),PutPixel(e,t,Clamp(TraceRay(camera_position,n,minRenderDistance,maxRenderDistance,recursion_depth)))}UpdateCanvas(),renderUI()}function loop(){requestAnimationFrame(loop),isGameEnded||updateKeyboard(),updateProjectiles(),updateNPCs(),Date.now()%2==0&&render()}function death(){isGameEnded=!0,document.body.classList.add("ended")}function start(){isGameStarted=!0,generateMap(),newNPC(),newNPC(),startAudio(),loop(),setTimeout((()=>{npcSpawnChance=.008}),6e4)}let playerBox=new Box([0,-.9,0],[1,1,1],[0,0,0],500,0,!1),playerLight1=new Light(Light.POINT,.7,[0,0,1.2]),playerHealth=1,playerHeal=.05,playerDamage=.25,score=0,isGameStarted=!1,isGameEnded=!1;playerBox.map=getNPCTexture("👺");let boxes=[new Box([-5e3,-2,-5e3],[5e3,-1,5e3],wallColor,wallSpec,wallRefl,!1),playerBox],walls=[],wallSize=2,lights=[new Light(Light.AMBIENT,.2),playerLight1,new Light(Light.DIRECTIONAL,.5,[-5,10,-5])],viewport_size=1,projection_plane_z=1,camera_position=[0,0,0],camera_rotation=[[1,0,0],[0,1,0],[0,0,1]],recursion_depth=2,minRenderDistance=1,maxRenderDistance=50,fogColor=[220,220,220];renderStartUI();