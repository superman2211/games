(function(){var ah=1,ab=2,aX=4,I=8,az=16,a6=32,at=64;var f=1,k=2,aH=3,aC=4;var n=ah+ab+aX,B=I+az+a6;window.scrollTo(0,1);requestAnimFrame=(function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(b){window.setTimeout(b,1000/60)}})();if(window.performance&&window.performance.webkitNow){timestamp=function(){return performance.webkitNow()}}else{timestamp=Date.now}var aU=(("ontouchstart" in window)||window.DocumentTouch&&document instanceof DocumentTouch);if(aU){document.body.className="touch"}if(aU&&window.innerHeight<600){var L=document.querySelector('meta[name="viewport"]');L.content=L.content.replace(/1/g,"0.45")}var aq=new SfxrSynth();var y={shoot:"1,,0.14,,0.25,0.9927,0.6662,-0.2093,,,,,,0.715,-0.5504,,,,1,,,0.2751,,0.5",pickup:"1,,0.0454,,0.4952,0.35,,0.1773,,,,,,,,,,,1,,,,,0.5",splode1:"3,,0.2792,0.2599,0.28,0.0464,,0.26,,,,,,,,,0.4555,-0.055,1,,,,,0.5",splode2:"1,,0.1926,,0.066,0.6888,0.0064,-0.36,,,,,,0.3733,0.0696,,,,1,,,,,0.5",shieldHit:"0,,0.13,,0.2599,0.4721,,0.4366,,,,,,0.3465,,0.7747,,,1,,,,,0.5",newPickup:"1,,0.143,,0.3098,0.4283,,0.2087,,0.5804,0.45,,,,,,,,1,,,,,0.5",pulse:"0,0.08,0.44,0.0793,0.2657,0.5097,0.2913,-0.1914,0.0154,0.0193,0.0164,-0.0147,0.0216,0.7922,-0.2077,0.0809,-0.1022,0.0799,1,-0.0031,,0.0954,0.075,0.5",eggDrop:"0,,0.0809,,0.2607,0.651,,-0.3547,,,,,,0.568,,0.7,,,1,,,0.0417,,0.5",seeker:"1,0.64,0.12,,0.27,0.79,,0.3032,,,,,,,,0.765,,,1,,,,,0.5",levelIn:"0,0.61,0.51,,0.84,0.37,,0.3523,,,,,,0.2821,,0.2,,,1,,,,,0.5",levelOut:"0,0.61,0.51,,0.84,0.18,,0.3523,,,,,,0.2821,,0.35,,,1,,,,,0.5"};var u=function(){this[++this.current%this.length].play()};var T;try{for(T in y){var O=aq.getWave(y[T]);var ag=[];ag.current=0;ag.play=u;for(var Y=0;Y<3;Y++){var aO=new Audio();aO.src=O;ag[Y]=aO}y[T]=ag}}catch(aa){var ae=function(){};for(T in y){y[T]={play:ae}}}var ao=Math.PI,P=2*ao,au=600,A=au/2,a3=document.getElementById("c"),ad=a3.getContext("2d"),ap=360,S=P/ap,R=true,aA=null,a2=null,aj=0,aB=2,g=timestamp(),F=0,C=0,aI=0,ar=0.04,K=0,aN,aT=1,o,q,U=0,aS=document.getElementById("s"),aF=document.getElementById("u"),a0=document.getElementById("i"),aD=document.getElementById("over"),ak=document.getElementById("pause"),z=0,m=2,j=6000,aK,aJ=0,G,aG=document.createElement("canvas");aG.width=a3.width;aG.height=a3.height;ad.translate(305,305);ad.lineWidth=2;var av={collidable:true,prevSprite:null,nextSprite:null,outside:function(){return this.x>A||this.x<-A||this.y>A||this.y<-A},updateSpriteCartesian:function(){if(this.angle!==undefined){this.x=Math.cos(aI+this.angle)*this.dist;this.y=Math.sin(aI+this.angle)*this.dist}},add:function(){this.alive=true;this.link()},remove:function(){this.alive=false;this.derezz()},link:function(){this.prevSprite=null;this.nextSprite=null;if(aA){aA.nextSprite=this;this.prevSprite=aA}else{a2=this}aA=this},unlink:function(){if(this.prevSprite){this.prevSprite.nextSprite=this.nextSprite}else{a2=this.nextSprite}if(this.nextSprite){this.nextSprite.prevSprite=this.prevSprite}else{aA=this.prevSprite}},distance:function(b){return Math.sqrt(Math.pow(this.x-b.x,2)+Math.pow(this.y-b.y,2))},collide:function(b){},derezz:function(b){}};var p=function(b){for(var c in av){if(av.hasOwnProperty(c)&&!b.prototype[c]){b.prototype[c]=av[c]}}};var aZ=function(b){this.group=b;this.ani=0;this.dist=0;this.scale=0.1;this.collidable=false};aZ.prototype={tick:function(c){this.ani+=c/100;this.ani%=5;var b=this.group.dir*c/10000;if(this.scale<1){this.scale+=c/3000}else{if(this.scale>1){this.scale=1;this.collidable=true}}this.angle=aL(this.angle+b);this.dist=aN.f(this.angle);this.segment=aV(this.angle);this.rot=this.segment.tangent;this.updateSpriteCartesian()},render:function(b){b.translate(this.x,this.y);b.rotate(aI+this.rot);b.scale(this.scale,this.scale);b.beginPath();b.strokeStyle=(this.scale<1)?"#2A4580":"#06276F";b.lineWidth=3/this.scale;b.moveTo(-10+this.ani,0);b.lineTo(0,-8-this.ani);b.lineTo(10-this.ani,0);b.lineTo(0,8+this.ani);b.closePath();b.stroke()},collide:function(b){y.splode2.play();M(b.type===ah?25:50);this.remove();var c=new aR(5,this);c.add()},derezz:function(){if(--this.group.count===0){o--;D()}},halfWidth:5,type:I,collidesWith:n};p(aZ);var v=function(){this.x=Math.floor(au*Math.random())-A;this.y=Math.floor(au*Math.random())-A;this.scale=0;this.dir=ao/2;this.rot=0;this.collidable=false;y.seeker.play()};v.prototype={tick:function(i){if(this.scale<1){this.scale+=i/1500}else{if(this.scale>1){this.scale=1;this.collidable=true}else{var e=i/100;var c=Math.atan2(q.y-this.y,q.x-this.x);var b=aM(c-this.dir);this.dir+=(b<0)?-e:e;this.dir=aL(this.dir);this.x+=Math.cos(this.dir)*i/10;this.y+=Math.sin(this.dir)*i/10}}this.rot-=i/100;this.rot=aL(this.rot)},render:function(b){b.translate(this.x,this.y);b.scale(this.scale,this.scale);b.rotate(this.rot);b.globalAlpha=this.scale;b.drawImage(v.canvas,-25,-25)},collide:function(b){y.splode2.play();M(b.type===ah?250:500);this.remove();var c=new aR(5,this);c.add()},derezz:function(){o--;D()},halfWidth:20,type:az,collidesWith:n};p(v);(function(){v.canvas=document.createElement("canvas");v.canvas.width=50;v.canvas.height=50;var c=v.canvas.getContext("2d");c.translate(25,25);c.lineWidth=2;c.beginPath();c.moveTo(0,0);var e=0;while(e<P*3){var b=Math.pow(e,0.5)*4;c.lineTo(Math.cos(e)*b,Math.sin(e)*b);e+=S}c.strokeStyle="#06276F";c.stroke()})();var W=function(b){this.ani=0;this.dist=0;this.scale=0;this.dir=1;this.size=b||3;this.egg=false;this.collidable=false};W.range=Math.pow(A+100,2);W.eggDirections=[-ao/4,-3*ao/4,ao/4,3*ao/4];W.prototype={tick:function(a8){if(this.egg){if(this.x*this.x+this.y*this.y>W.range&&this.x*this.velX+this.y*this.velY>=0){this.velX=-this.x/Math.abs(this.x);this.velY=-this.y/Math.abs(this.y)}this.scale=this.size/3;this.x+=this.velX*a8;this.y+=this.velY*a8;this.hatchTime-=a8;this.angle=Math.atan2(this.y,this.x)-aI;this.dist=aN.f(this.angle);var s=Math.sqrt(this.x*this.x+this.y*this.y);if(this.hatchTime<0){if(Math.abs(s-this.dist)<this.halfWidth*2){this.egg=false;y.eggDrop.play()}}var i=this.angle;if(s>this.dist){i+=ao}var a7=a8/500,b=Math.atan2(this.velY,this.velX),e=aM(i-b);b+=(e<0)?-a7:a7;this.velX=Math.cos(b)*a8/50;this.velY=Math.sin(b)*a8/50}if(!this.egg){this.ani+=a8/200;this.ani%=P;this.angleVel=this.dir/5;var c=0.2+0.8*this.size/3;if(this.scale<c){this.scale+=a8/1000}else{if(this.scale>c){this.scale=c;this.collidable=true}}this.angle=aL(this.angle+this.angleVel*(a8/1000));this.dist=aN.f(this.angle);this.segment=aV(this.angle);this.rot=this.segment.tangent;this.updateSpriteCartesian();this.index=Z(this.angle)}},render:function(b){b.strokeStyle="#06276F";b.fillStyle="#06276F";b.translate(this.x,this.y);b.rotate(aI+this.rot);b.scale(this.scale,this.scale);if(!this.egg){this.renderLeg(b,1,1,0);this.renderLeg(b,-1,1,ao);this.renderLeg(b,1,-1,3*ao/2);this.renderLeg(b,-1,-1,ao/2)}b.beginPath();b.arc(0,0,10,0,P);b.closePath();b.fill()},renderLeg:function(bc,bb,ba,bh){bc.save();var a7=10*Math.sin(this.ani+bh),bi=30+a7,bd=0,a9=this.index;while(bd<bi){a9+=ba;a9=a9%ap;if(a9<0){a9=ap-1}bd+=aN.segments[a9].length}bi=bd;var e=a9*S,bg=aN.f(e),bf=Math.cos(aI+e)*bg,be=Math.sin(aI+e)*bg,a8=Math.atan2(be-this.y,bf-this.x),s=bi/2,b=Math.sqrt(30*30-s*s);if(ba===-1){a8+=ao}bc.rotate(a8-this.rot-aI);bc.beginPath();bc.moveTo(0,0);bc.lineTo(ba*s,b*bb);bc.lineTo(ba*bi,0);bc.stroke();bc.restore()},collide:function(a8){y.splode2.play();var c=this.egg?4-this.size:this.size,bc=this.size-1;M((a8.type===ah?50:100)*c);this.remove();if(!this.egg&&bc>0){var a9=this.segment.tangent,ba=Math.floor(Math.random()*4),bb,e;for(var a7=0;a7<aN.eggCount+aJ;a7++){bb=new W(bc);e=a9+W.eggDirections[(ba+a7)%4];bb.egg=true;bb.hatchTime=500;bb.x=this.x;bb.y=this.y;bb.scale=1;bb.velX=Math.cos(e)/20;bb.velY=Math.sin(e)/20;bb.add();o++}}else{var b=new aR(5,this);b.add()}},derezz:function(){o--;D()},halfWidth:10,type:a6,collidesWith:n};p(W);var r=function(){this.ani=0;this.spawnTimeout=0;this.setPosition()};r.range=Math.pow(A+200,2);r.prototype={setPosition:function(){this.rot=Math.random()*P;this.x=Math.cos(this.rot)*(A+200);this.y=Math.sin(this.rot)*(A+200);this.curve=Math.random()<0.5?1:-1;this.rot=this.rot-ao-this.curve/3},tick:function(e){this.ani+=e/500;this.ani%=P;this.push=(1+Math.sin(this.ani*2))/2;this.rot+=this.curve*e/12000;var b=this.push+0.4;this.velX=Math.cos(this.rot)*b/20;this.velY=Math.sin(this.rot)*b/20;this.x+=this.velX*e;this.y+=this.velY*e;if(this.spawnTimeout<0){this.angle=Math.atan2(this.y,this.x)-aI;this.dist=aN.f(this.angle);var c=Math.sqrt(this.x*this.x+this.y*this.y);if(Math.abs(c-this.dist)<1){this.spawn();this.spawnTimeout=1000}}else{this.spawnTimeout-=e}if(this.x*this.x+this.y*this.y>r.range&&this.x*this.velX+this.y*this.velY>=0){this.setPosition()}},render:function(s){s.translate(this.x,this.y);s.rotate(this.rot+ao/2);for(var b=0;b<4;b++){var e=Math.cos(this.ani+b);s.save();s.translate(-10+b*7,0);s.lineWidth=3;s.lineCap="round";s.strokeStyle="#06276F";s.beginPath();s.moveTo(0,0);s.bezierCurveTo(-10*e,20,20*e,40,0,30+20*this.push);s.stroke();s.restore()}s.scale(1-this.push/10,0.5+this.push/6);s.drawImage(r.body,-20,-40)},collide:function(b){y.splode2.play();M(b.type===ah?250:500);this.remove();var c=new aR(5,this);c.add()},derezz:function(){o--;D()},spawn:function(){o++;var b=Q(this.angle,1),c=new aR(5,b,true,true,"#06276F");c.add()},halfWidth:20,type:at,collidesWith:n};p(r);(function(){var b=document.createElement("canvas");r.body=b;b.width=40;b.height=60;var c=b.getContext("2d");c.fillStyle="#06276F";c.beginPath();c.arc(20,20,15,0,P);c.fillRect(5,20,30,30);c.closePath();c.fill()})();var t=function(){this.angle=0;this.rot=0;this.x=0;this.y=0;this.flash=0;this.newGuyTimeout=t.newGuyTimeoutMax;this.collidable=false;this.upgrades={};this.hitTimeout=0};t.newGuyTimeoutMax=4000;t.prototype={tick:function(b){this.dist=aN.f(this.angle);this.angle=aI;this.segment=aV(this.angle);this.rot=this.segment.tangent;this.updateSpriteCartesian();if(this.flash>0){this.flash-=b}if(this.newGuyTimeout>0){this.newGuyTimeout-=b;if(this.newGuyTimeout<=0){this.collidable=true}}if(this.hitTimeout>0){this.hitTimeout-=b;if(this.hitTimeout<=0){this.collidable=true}}if(this.newShieldTimeout>0){this.newShieldTimeout-=b;if(this.newShieldTimeout<0){this.newShieldTimeout=0}}},render:function(a8){var b=1;if(!this.collidable){var s=this.newGuyTimeout/t.newGuyTimeoutMax;b=(1+Math.cos(s*80*Math.sin(s)))/2}a8.globalAlpha=b;a8.translate(this.x,this.y);a8.rotate(aI+this.rot);a8.drawImage(t.canvas,-15,-10);if(this.upgrades.shield&&this.upgrades.shieldStrength>0){var e=this.upgrades.shieldStrength+2;var a7=1+this.newShieldTimeout/300;if(b<1){a8.globalAlpha=b}else{if(a7>1){var i=1.5-a7;a8.globalAlpha=(i<0)?0:i}else{a8.globalAlpha=this.upgrades.shieldStrength/3}}a8.save();a8.scale(a7,a7);a8.beginPath();a8.arc(0,0,20,0,P);a8.lineWidth=e;a8.strokeStyle="#A66E00";a8.stroke();a8.lineWidth=1;a8.strokeStyle="#FFBE40";a8.stroke();if(this.flash>0||a7>1){a8.lineWidth=e;a8.globalCompositeOperation="lighter";a8.globalAlpha=this.flash/800;a8.stroke()}a8.restore()}else{if(this.flash>0){if(a7>1){foo=0}a8.globalCompositeOperation="lighter";a8.globalAlpha=this.flash/800;a8.drawImage(t.canvas,-15,-10)}}},collide:function(b){var c;if(b.type&B){if(this.upgrades.shieldStrength>0){y.shieldHit.play();this.upgrades.shieldStrength--;if(this.upgrades.shieldStrength>0){this.flash=800}else{c=new aR(5,this);c.add()}this.hitTimeout=300;this.collidable=false}else{y.splode1.play();this.flash=800;c=new aR(10,this);c.add();this.remove()}}},fire:function(){if(l.freeBolts.length){y.shoot.play()}if(this.upgrades.doubleGuns){q.fireLaser(aH,f);q.fireLaser(aH,k);q.fireLaser(aC,f);q.fireLaser(aC,k)}else{q.fireLaser(aH);q.fireLaser(aC)}},fireLaser:function(c,b){if(l.freeBolts.length){var i=l.freeBolts.pop(),e=this.rot+aI;i.x=this.x;i.y=this.y;if(c===aH){e-=ao/2}else{e-=3*ao/2}if(b===f){i.x+=Math.sin(e)*10;i.y-=Math.cos(e)*10}else{if(b===k){i.x-=Math.sin(e)*10;i.y+=Math.cos(e)*10}}i.rot=this.rot+aI;i.velX=Math.cos(e)*3;i.velY=Math.sin(e)*3;i.add()}},shield:function(){this.upgrades.shield=true;this.upgrades.shieldStrength=3;this.newShieldTimeout=200},doubleGuns:function(){this.upgrades.doubleGuns=true},halfWidth:10,type:ah,collidesWith:B};p(t);(function(){var s=[-15,0,-10,-8,-5,-8,-2,-10,-2,-8,2,-8,2,-10,5,-8,10,-8,15,0,10,8,5,8,2,10,2,8,-2,8,-2,10,-5,8,-10,8,-15,0];var e=document.createElement("canvas");e.width=30;e.height=20;t.canvas=e;var b=t.canvas.getContext("2d");b.translate(15,10);b.beginPath();b.moveTo(s[0],s[1]);for(var c=1;c<s.length;c++){b.lineTo(s[2*c],s[2*c+1])}b.closePath();b.fillStyle="#A66E00";b.fill();b.strokeStyle="#FFA900";b.stroke();b.fillStyle="#FFCF73";b.fillRect(-10,-7,20,14);b.fillStyle="#FFBE40";b.fillRect(-10,-5,20,10);b.fillStyle="#FFCF73";b.fillRect(-10,-3,20,6)})();var l=function(){this.rot=0};l.size=160;l.BOLT_FIRE_TIMEOUT=150;l.currentBoltFireTimeout=0;l.freeBolts=[];l.prototype={tick:function(b){this.x+=this.velX*b;this.y+=this.velY*b;if(this.outside()){this.remove()}},render:function(b){b.translate(this.x,this.y);b.rotate(this.rot);b.drawImage(l.canvas,-5,-l.size/2)},derezz:function(){l.freeBolts.push(this)},collide:function(b){this.remove()},halfWidth:20,type:ab,collidesWith:B};p(l);(function(){l.canvas=document.createElement("canvas");l.canvas.width=10;l.canvas.height=l.size;var b=l.canvas.getContext("2d");b.lineWidth=2;b.lineCap="round";b.beginPath();b.moveTo(5,5);b.lineTo(5,l.size-5);b.closePath();b.shadowBlur="10";b.shadowColor="#FFCF73";b.strokeStyle="#6C8DD5";b.stroke()})();for(var Y=0;Y<6;Y++){l.freeBolts.push(new l())}var V=function(c,b){this.angle=c;this.dir=b;this.life=V.MAX_LIFE};V.MAX_LIFE=1000;V.prototype={tick:function(c){this.life-=c;if(this.life<=0){this.remove()}var b=this.life/V.MAX_LIFE;this.angleVel=this.dir*6*(1-b);this.angle=aL(this.angle+this.angleVel*c/1000);this.dist=aN.f(this.angle);this.segment=aV(this.angle);this.updateSpriteCartesian()},render:function(b){b.translate(this.x,this.y);b.drawImage(V.canvas,-40,-40)},derezz:function(){var b=new aR(3,this);b.add()},halfWidth:5,type:aX,collidesWidth:B};p(V);(function(){var c=document.createElement("canvas");V.canvas=c;c.width=80;c.height=80;var b=c.getContext("2d");b.beginPath();b.fillStyle="#FFBE40";b.shadowColor="#FFCF73";b.shadowBlur="30";b.arc(40,40,10,0,P);b.closePath();b.fill()})();var aR=function(a9,e,a7,b,c,ba){this.x=e.x;this.y=e.y;this.origin=e;this.life=0;this.reverse=a7;this.follow=b;this.color=c||"#FFCF73";this.callback=ba;this.particleDirections=[];for(var a8=0;a8<a9;a8++){var s=Math.random()*P;this.particleDirections.push(Math.cos(s),Math.sin(s))}};aR.prototype={tick:function(b){this.life+=b;if(this.life>500){this.remove();if(this.callback){this.callback()}}if(this.follow){this.x=this.origin.x;this.y=this.origin.y}},render:function(a9){var a7=(this.reverse)?(500-this.life)/8:this.life/8,s=this.particleDirections.length;a9.translate(this.x,this.y);a9.fillStyle=this.color;for(var e=0;e<s;e+=2){var b=this.particleDirections[e];var a8=this.particleDirections[e+1];a9.fillRect(b*a7,a8*a7,2,2)}}};p(aR);var J=function(){this.angle=Math.floor(Math.random()*P);this.segment=aV(this.angle);this.life=J.maxLife;this.flavor=Math.random()<0.5?"shield":"doubleGuns";y.newPickup.play()};J.maxLife=12000;J.prototype={tick:function(b){this.dist=aN.f(this.angle);this.updateSpriteCartesian();this.life-=b;if(this.life<0){this.remove()}else{if(q.alive&&this.distance(q)<this.halfWidth+q.halfWidth){this.collide()}}},render:function(i){i.translate(this.x,this.y);var b=this.life/J.maxLife;var e=(3+Math.sin(P*b*10))/2;if(b<0.25){i.globalAlpha=(1+Math.cos(P*b*30))/2}i.scale(e,e);i.drawImage(J[this.flavor],-40,-40)},collide:function(b){y.pickup.play();this.remove();q[this.flavor]()},derezz:function(){o--},halfWidth:5};p(J);(function(){function b(c){c.beginPath();c.fillStyle="#FFBE40";c.shadowColor="#FFCF73";c.shadowBlur="30";c.arc(40,40,10,0,P);c.fill()}can=document.createElement("canvas");J.doubleGuns=can;can.width=80;can.height=80;con=can.getContext("2d");b(con);con.scale(0.6,0.4);con.drawImage(l.canvas,56.5,80,10,40);con.drawImage(l.canvas,66.5,80,10,40);document.getElementById("doub").appendChild(can);can=document.createElement("canvas");J.shield=can;can.width=80;can.height=80;con=can.getContext("2d");b(con);con.beginPath();con.arc(40,40,6,0,P);con.shadowBlur="10";con.shadowColor="#06276F";con.strokeStyle="#06276F";con.stroke();document.getElementById("shield").appendChild(can)})();var d={13:"enter",32:"space",37:"left",38:"up",39:"right",40:"down",88:"x"};var aW={};var E=false;window.addEventListener("keydown",function(b){aW[d[b.keyCode]]=true;E=true;if(b.keyCode===80||b.keyCode===27){ai()}},false);window.addEventListener("keyup",function(b){aW[d[b.keyCode]]=false;E=false},false);function h(b){aK=window.innerWidth/2;window.scrollTo(0,1)}h();function aQ(a7){a7.preventDefault();if(a7.type!=="touchend"){aW.left=false;aW.right=false;aW.x=false;aW.space=false}var s=a7.type==="touchend"?a7.changedTouches:a7.touches;for(var c=0;c<s.length;c++){var b=a7.type!=="touchend";if(s[c].pageX<aK){aW.left=b}else{aW.right=b}aW.x=b;if(a7.type==="touchstart"&&s[c].pageY<100){aW.space=true}}if(aW.left&&aW.right){aW.left=false;aW.right=false}E=aW.x}window.addEventListener("touchstart",aQ);window.addEventListener("touchmove",aQ);window.addEventListener("touchend",aQ);window.addEventListener("orientationchange",h);document.getElementById("start").addEventListener("click",function(b){x=a4.begin});function an(ba,a9){var s=-ba.velY,i=ba.velX,a8=ba.x*s+ba.y*i,a7=a9.x*s+a9.y*i,e=a9.x-ba.x,b=a9.y-ba.y,c=e*ba.velX+b*ba.velY;return Math.abs(a8-a7)<ba.halfWidth+a9.halfWidth&&Math.abs(c)<l.size}function a5(b,i){if(!b.alive){return}var c=a2;while(c){if(c.type&b.collidesWith&&c.collidable&&b.collidable&&c.alive&&b.alive){var e=false;if(c.type===ab){e=an(c,b)}else{if(b.type===ab){e=an(b,c)}else{e=(c.distance(b)<c.halfWidth+b.halfWidth)}}if(e){c.collide(b);b.collide(c);if(!b.alive){return}}}c=c.nextSprite}}function ai(){if(x!==a4.waitToBegin){R=!R;if(R){ay()}ak.style.display=R?"none":"block"}}function ac(){var b=Z(aI),e=(aN.segments)?aN.segments[b].length:1,c=4*ar/e;C+=F;if(Math.abs(C)>c){C=c*Math.abs(C)/C}aI+=C;aI=aL(aI);F=0;C*=0.99}function H(c){if(c.segments){return}var a9=[],bb=c.f,bc=aB,s,ba=0,a8=0,bh=bb(0,bc),e=Math.cos(0)*bh,bg=Math.sin(0)*bh,a7=S,b,be,bf,bd;while(a7<=P){bh=bb(a7,bc);b=Math.cos(a7)*bh;be=Math.sin(a7)*bh;bf=b-e;bd=be-bg;s=Math.sqrt(bf*bf+bd*bd);a9[a8]={length:s,position:ba,tangent:Math.atan2(bd,bf)};ba+=s;e=b;bg=be;a8++;a7+=S}c.totalLength=ba;c.segments=a9}function af(ba,a8,a9,e){ba.save();var a7=aj/aB;ba.scale(a7,a7);ba.lineWidth=3/a7;ba.rotate(e);var s=0;ba.beginPath();ba.moveTo(a8(0,a9),0);while(s<P){var b=a8(s,a9);ba.lineTo(Math.cos(s)*b,Math.sin(s)*b);s+=S}ba.strokeStyle="#FFBE40";ba.shadowColor="#FFCF73";ba.shadowBlur="30";ba.stroke();ba.restore()}function aw(c,e,b){if(aj===aB){if(!G){G=aG.getContext("2d");G.clearRect(0,0,610,610);G.save();G.translate(305,305);af(G,c,e,0);G.restore()}ad.save();ad.rotate(b);ad.drawImage(aG,-305,-305);ad.restore()}else{G=null;af(ad,c,e,b)}}function aL(c){var b=c%P;if(b<0){b+=P}return b}function aM(c){var b=c%P;if(b<-ao){b+=P}else{if(b>ao){b-=P}}return b}function aV(c){var b=Z(c);return aN.segments[b]}function Z(b){return Math.floor(ap*aL(b)/P)}function Q(b,s){var c;var a7={dir:(Math.random()>0.5)?1:-1,count:s};for(var e=0;e<s;e++){c=new aZ(a7);c.angle=b+e/20;c.ani=e;c.add()}return c}function w(){var bb=20,b=Math.round(aN.totalLength/bb),e=[],ba=a2;while(ba){if(ba.angle!==undefined){var a8=aN.segments[Z(ba.angle)].position;e[Math.floor(a8/b)]=true}ba=ba.nextSprite}var c=Math.floor(Math.random()*bb);var a9=0;while(e[c]&&a9<bb){c=(c+7)%bb;a9++}if(a9>bb){return false}var s=0;var a7=(c+0.5)*b;while(a7>0){a7-=aN.segments[s].length;s++}return P*s/ap}var aY={renderTitle:function(e){var b=false;if(z<-60){var c=Math.cos(-(z+60)*ao/120);if(c>0.01){z-=c*e/10;aF.style.opacity=1-c;aF.style.bottom=(1-c)*60}else{b=true}}else{z-=e/10}ad.save();ad.translate(10,z);ad.strokeStyle="#FFA900";ad.shadowOffsetX=4;ad.shadowOffsetY=2;ad.shadowColor="#BF8F30";ad.lineJoin="round";ad.translate(-140,-100);ad.scale(2,2);ad.beginPath();ad.moveTo(24,0);ad.bezierCurveTo(-40,0,70,100,0,100);ad.stroke();ad.translate(34,0);ad.beginPath();ad.moveTo(0,100);ad.lineTo(0,0);ad.bezierCurveTo(30,0,30,50,0,50);ad.stroke();ad.translate(32,0);ad.beginPath();ad.moveTo(0,0);ad.lineTo(0,100);ad.stroke();ad.translate(12,0);ad.beginPath();ad.moveTo(0,100);ad.lineTo(0,0);ad.bezierCurveTo(30,0,30,50,0,50);ad.lineTo(20,100);ad.stroke();ad.translate(30,0);ad.beginPath();ad.moveTo(10,0);ad.bezierCurveTo(-4,0,-4,100,10,100);ad.bezierCurveTo(24,100,24,0,10,0);ad.stroke();ad.restore();return b},renderInstructions:function(a8){var e=a0.children;var s=0;for(var c=0;c<e.length;c++){var a7=e[c];var b=parseFloat(a7.style.opacity,10)||0;s+=b;if(s<(c+1)){a7.style.opacity=b+a8/1000;return false}}return true}};function a(b){if(aW.left){F=-b/10000}if(aW.right){F=b/10000}if(aW.space){if(aT-->0){y.pulse.play();(new V(q.angle,1)).add();(new V(q.angle,-1)).add()}}if(aW.x){l.currentBoltFireTimeout-=b;if(l.currentBoltFireTimeout<0){l.currentBoltFireTimeout=l.BOLT_FIRE_TIMEOUT;q.fire()}}}function ax(b){var c=a2;while(c){if(c.alive){c.tick((aj===aB)?b:0);ad.save();c.render(ad);ad.restore();a5(c,b)}c=c.nextSprite}c=a2;while(c){if(!c.alive){c.unlink()}c=c.nextSprite}}function D(){if(aN.nextBaddie<aN.baddies.length){var b=aN.baddies[aN.nextBaddie];var e=w();if(e===false){return}if(b===aZ){Q(e,aN.badaSize)}else{var c=new b();c.add();c.angle=e}aN.nextBaddie++;o++}}function aP(e){y.levelIn.play();var c=aA;while(c){c.unlink();c=aA}var s=q&&q.upgrades;q=new t();if(s){q.upgrades=s}q.add();currentLevelNumber=(e===undefined)?currentLevelNumber+1:e;if(currentLevelNumber>=am.length){currentLevelNumber=0;aJ++}aN=am[currentLevelNumber];aN.nextBaddie=0;o=0;aj=aB;H(aN);for(var b=0;b<aN.spawnStart;b++){D()}aj=0}function M(b){U+=b;aS.innerHTML=U}function al(){aS.innerHTML=U;aS.style.display="block"}function X(){if(m>0){a1()}if(aT>0){aE()}}function a1(){ad.save();ad.translate(A,A-30);ad.rotate(ao/2);for(var b=0;b<m;b++){ad.drawImage(t.canvas,0,0);ad.translate(0,q.halfWidth*3)}ad.restore()}function aE(){ad.save();ad.translate(-20-A,A-70);ad.drawImage(V.canvas,0,0);ad.drawImage(V.canvas,10,0);ad.drawImage(V.canvas,5,10);ad.restore()}function N(c){var b=j-K;if(b>1000){b=1000}aD.style.opacity=b/1000}var am=[{f:function(b){return A*Math.cos(Math.sin(b*aj))-20},spawnStart:3,badaSize:2,eggCount:1,baddies:[W,aZ,aZ,J,aZ,aZ]},{f:function(b){return A*Math.cos(Math.sin(2*b*aj))-20},spawnStart:3,badaSize:3,eggCount:1,baddies:[r,W,aZ,J,aZ,aZ]},{f:function(b){return Math.sin(b*aj)*A},spawnStart:3,badaSize:3,eggCount:1,baddies:[r,W,aZ,J,aZ,aZ]},{f:function(b){return(aj*A/3.4*(1+Math.sin(b)))-100},spawnStart:2,badaSize:3,eggCount:1,baddies:[v,W,W,aZ,J,aZ,aZ]},{f:function(b){return(Math.cos(b/aj)-Math.sin(b))*A},spawnStart:6,badaSize:3,eggCount:1,baddies:[r,r,r,r,r,r,J,r,r,r,r]},{f:function(b){return(aj*A/4.2*(1+Math.cos(b)))},spawnStart:3,badaSize:3,eggCount:2,baddies:[r,W,aZ,aZ,J,aZ,aZ,v]},{f:function(b){return A*Math.sin(b+b*aj)},spawnStart:3,badaSize:2,eggCount:2,baddies:[v,v,v,v,v,v,v,v]},{f:function(b){return Math.sin(2*b+b*aj)*A},spawnStart:3,badaSize:4,eggCount:2,baddies:[r,W,aZ,aZ,aZ,J,aZ]},{f:function(b){return A*Math.cos(3*Math.sin(b*aj))},spawnStart:3,badaSize:3,eggCount:2,baddies:[r,W,aZ,aZ,J,aZ,aZ]},{f:function(b){return A*Math.cos(Math.sin(b/aj))-20},spawnStart:4,badaSize:4,eggCount:2,baddies:[r,W,aZ,J,aZ,aZ,aZ,v,aZ,v]},{f:function(b){return A*Math.cos(2*Math.sin(b*aj))},spawnStart:4,badaSize:3,eggCount:2,baddies:[r,r,W,aZ,aZ,J,aZ,aZ,v,v]}];var a4={waitToBegin:function(b){aF.style.display="block";a0.style.display="block";aY.renderTitle(b)&&aY.renderInstructions(b);if(aW.space||aW.x||aW.enter){x=a4.begin}},begin:function(){U=0;m=2;aJ=0;aF.style.display="none";a0.style.display="none";aj=0;q=null;al();aP(0);x=a4.startLevel},startLevel:function(b){if(aj<aB){aj+=b/800}else{aj=aB;aT=1;x=a4.runLevel}ac();aw(aN.f,aj,aI);X()},runLevel:function(b){if(o===0){K=1500;x=a4.runOutLevel}if(!q.alive){x=a4.guyDie}a(b);ac();aw(aN.f,aj,aI);ax(b);X()},runOutLevel:function(b){if(K>0){K-=b;a(b);ac();aw(aN.f,aj,aI);ax(b);X()}else{x=a4.finishLevel;y.levelOut.play()}},finishLevel:function(b){if(aj<aB*2){aj+=b/800}else{aP();x=a4.startLevel}ac();aw(aN.f,aj,aI);X()},guyDie:function(b){if(m>0){K=3000;x=a4.waitToRestart}else{K=j;aD.style.opacity=0;aD.style.display="block";x=a4.gameOver}},waitToRestart:function(b){if(K>0){K-=b}else{m--;q=new t();q.tick(b);q.add();x=a4.runLevel}ac();aw(aN.f,aj,aI);ax(b);X()},gameOver:function(b){if(K>0){K-=b}else{aD.style.display="none";x=a4.waitToBegin}ac();aw(aN.f,aj,aI);ax(b);N(b)}};var x=a4.waitToBegin;function ay(){var c=timestamp(),b=c-g;g=c;if(b>100){b=100}ad.clearRect(-305,-305,610,610);x(b);if(R){requestAnimFrame(ay,a3)}}ay()})();