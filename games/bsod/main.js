(()=>{const e=document,t=375;let r=1;var a,l,o,s,i,n;window.onload=function(){r=navigator.userAgent.match(/iPhone|Android.+Mobile/)?1:5,function(){var a=e.querySelector("h1").style;a.fontSize=2*r*22.5+"px",a.lineHeight=2*r*30+"px",a.width=2*r*30+"px",a.borderRadius=2*r*30+"px "+2*r*30+"px",a.left=2*r*10+"px",a.top=2*r*12.5+"px",e.querySelector("#title").style.height=2*r*65+"px",e.querySelector("#title").style.padding=2*r*40+"px "+2*r*20+"px "+2*r*20+"px ",e.querySelector("#title p").style.fontSize=2*r*5+"px",e.querySelector("#frame").style.width=t*r+"px";let l=e.querySelector("#space").style;l.width=10*p.width*r+"px",l.height=2.5*p.width*r+"px",l.perspective=10*p.width*r+"px",l.margin=5*p.width*r+"px auto",e.querySelectorAll("#field li").forEach((function(e){e.style.width=10*p.width*r+"px"})),e.querySelectorAll("#field .wall").forEach((function(e){e.style.height=2.5*p.width*r+"px",e.style.lineHeight=2.5*p.width*r+"px"})),e.querySelector("#field .east").style.transform="translateX("+5*p.width*r+"px) rotateY(270deg)",e.querySelector("#field .west").style.transform="translateX("+5*p.width*r*-1+"px) rotateY(90deg)",e.querySelector("#field .south").style.transform="translateZ("+5*p.width*r+"px) rotateY(180deg)",e.querySelector("#field .north").style.transform="translateZ("+5*p.width*r*-1+"px)",e.querySelector("#space .enemy").style.width=p.width*r+"px",e.querySelector("#space .enemy").style.height=p.width*r+"px",e.querySelector("#space .enemy div").style.lineHeight=p.width*r+"px",e.querySelector("#space .enemy div").style.borderRadius=p.width*r+"px",e.querySelector("#space .enemy div").style.fontSize=.75*p.width*r+"px",e.querySelector("#space .obj").style.width=p.width*r+"px",e.querySelectorAll("#space .obj li").forEach((function(e){e.style.width=p.width*r+"px",e.style.height=p.width*r+"px",e.style.lineHeight=p.width*r+"px",e.style.fontSize=2*r+"px",e.style.lineHeight=2*r+"px"})),e.querySelectorAll("#space .obj .east").forEach((function(e){e.style.transform="translateX("+p.width*r/2+"px) rotateY(90deg)"})),e.querySelectorAll("#space .obj .west").forEach((function(e){e.style.transform="translateX("+p.width*r/2*-1+"px) rotateY(270deg)"})),e.querySelectorAll("#space .obj .south").forEach((function(e){e.style.transform="translateZ("+p.width*r/2+"px)"})),e.querySelectorAll("#space .obj .north").forEach((function(e){e.style.transform="translateZ("+p.width*r/2*-1+"px) rotateY(180deg)"})),e.querySelectorAll("#space .obj .top").forEach((function(e){e.style.transform="translateY("+p.width*r/2*-1+"px) rotateX(90deg)"}));let o=e.querySelector("#judge").style;o.width=t*r+"px",o.height=9.5*p.width*r+"px",o.padding=1.5*p.width*r+"px 0",e.querySelectorAll("#judge > .pl, #judge > .em").forEach((e=>{e.style.width=(t-5*p.width)/2*r+"px",e.style.marginBottom=p.width*r+"px"})),e.querySelectorAll("#judge .wall").forEach((e=>{e.style.width=5*p.width*r+"px",e.style.height=5*p.width*r+"px"})),e.querySelectorAll("#judge .name").forEach((e=>e.style.fontSize=.75*p.width*r+"px")),e.querySelector("#judge .result").style.margin="0 "+p.width*r+"px";let s=e.querySelector("#judge .result .msg").style;s.width=t-2*p.width+"px",s.fontSize=1*p.width+"px",e.querySelectorAll("#judge .result .rate").forEach((e=>e.style.fontSize=1*p.width*r+"px")),e.querySelector("#map").style.width=5*p.width*r+"px",e.querySelector("#map").style.height=5*p.width*r+"px"}(),void 0===window.ontouchstart?(e.querySelector("#forward .plus").addEventListener("mousedown",(()=>{a=setInterval((()=>{S()}),20)})),e.querySelector("#forward .plus").addEventListener("mouseup",(()=>{clearInterval(a)})),e.querySelector("#forward .plus").addEventListener("mouseleave",(()=>{clearInterval(a)})),e.querySelector("#rotateY .plus").addEventListener("mousedown",(()=>{l=setInterval((()=>{v()}),10)})),e.querySelector("#rotateY .plus").addEventListener("mouseup",(()=>{clearInterval(l)})),e.querySelector("#rotateY .plus").addEventListener("mouseleave",(()=>{clearInterval(l)})),e.querySelector("#rotateY .minus").addEventListener("mousedown",(()=>{o=setInterval((()=>{w()}),10)})),e.querySelector("#rotateY .minus").addEventListener("mouseup",(()=>{clearInterval(o)})),e.querySelector("#rotateY .minus").addEventListener("mouseleave",(()=>{clearInterval(o)}))):(e.querySelector("#forward .plus").addEventListener("touchstart",(()=>{a=setInterval((()=>{S()}),20)})),e.querySelector("#forward .plus").addEventListener("touchend",(()=>{clearInterval(a)})),e.querySelector("#forward .plus").addEventListener("touchleave",(()=>{clearInterval(a)})),e.querySelector("#rotateY .plus").addEventListener("touchstart",(e=>{l=setInterval((()=>{v()}),10)})),e.querySelector("#rotateY .plus").addEventListener("touchend",(()=>{clearInterval(l)})),e.querySelector("#rotateY .plus").addEventListener("touchleave",(()=>{clearInterval(l)})),e.querySelector("#rotateY .minus").addEventListener("touchstart",(()=>{o=setInterval((()=>{w()}),10)})),e.querySelector("#rotateY .minus").addEventListener("touchend",(()=>{clearInterval(o)})),e.querySelector("#rotateY .minus").addEventListener("touchleave",(()=>{clearInterval(o)}))),e.querySelector("#start input").addEventListener("click",(()=>{e.querySelector("h1").style.animation="h1 1s",setTimeout((()=>{e.querySelector("h1").style.background="red",e.querySelector("#title").classList.add("hide"),e.querySelector("#frame").classList.remove("hide"),e.querySelector("#chkdsk").classList.remove("hide"),f.show(),e.querySelector("h1").style.transform="translateX("+137.5*r+"px) translateY(65px) scale(0.3, 0.3)",e.querySelector("h1").style.opacity=0,u()}),1e3)})),e.querySelector("#translateY .jmp").addEventListener("click",(()=>{s||function(){let e=!0;s=setInterval((()=>{e&&c.translateY<20?c.translateY++:e&&20==c.translateY?e=!1:!e&&c.translateY>-20?c.translateY--:(clearInterval(s),s=null),q()}),10)}()}))};const c={rotateY:135,deg:0,viewX:0,viewZ:0,moveX:-90,moveZ:90,translateY:-20,init:function(){this.deg=135,this.rotateY=this.deg,this.viewX=0,this.viewZ=0,this.moveX=-90,this.moveZ=90,this.translateY=-20}},d={hide:function(){e.querySelector("#judge").classList.add("hide")},show:function(){e.querySelector("#judge .pl .wall").innerText=p.msg,e.querySelector("#judge .em .wall").style.background='url("wall.jpg") bottom / cover',e.querySelector("#judge").classList.remove("hide")},exec:function(){let t=p.getScore(),a=Math.round(t.player/(t.player+t.enemy)*100),l=100-a;e.querySelector("#judge .result .pl .point").innerText=t.player+"p",e.querySelector("#judge .result .em .point").innerText=t.enemy+"p",this.show(),e.querySelector("#judge .result .pl .rate").innerText=a+"%",e.querySelector("#judge .result .em .rate").innerText=l+"%",e.querySelector("#judge .result .pl").style.width=a+"%",e.querySelector("#judge .result .em").style.width=l+"%";let o=e.querySelector("h1");o.style.transform="translateX("+137.5*r+"px) translateY("+5*p.width*r+"px) scale(0.6, 0.6)",o.style.opacity=1,a<l?(o.innerText=":)",e.querySelector("#judge .result p a").innerText="You lose!"):e.querySelector("#judge .result p a").innerText=a>l?"You win!":"Draw..."}},h={timeLimit:100,timer:function(){let t=0,r=setInterval((()=>{t>=this.timeLimit?(clearInterval(r),m.stop(),f.hide(),d.exec()):(t++,e.querySelector("#chkdsk .percent").innerText=t)}),1e3)}};function u(){i=Date.now(),n=0,c.init(),p.init(),x.setWall(),h.timer(),x.getFloorCount()<100-p.data.length?u():(m.move(),y.init(),q())}const y={data:[],init:function(){this.data=[];for(let e=0;e<x.table.length;e++)for(let t=0;t<x.table[e].length;t++)if(0==x.table[e][t]){let r=0;(0!=e&&1==x.table[e-1][t]||0==e)&&r++,(9!=t&&1==x.table[e][t+1]||9==t)&&r++,(9!=e&&1==x.table[e+1][t]||9==e)&&r++,(0!=t&&1==x.table[e][t-1]||0==t)&&r++,3==r&&this.data.push({x:x.c2x(t),z:x.r2z(e),weight:x.c2x(t)+-1*x.r2z(e)})}this.data=this.data.sort(((e,t)=>e.weight>t.weight?-1:e.weight<t.weight?1:0)),this.drawMap()},drawMap:function(){e.querySelectorAll(".item:not(.origin)").forEach((e=>e.remove()));for(let t=0;t<this.data.length;t++){let r=e.querySelector("#map .item.origin").cloneNode(!0);r.classList.add("item"+t),r.classList.remove("origin"),r.style.transform="translateX("+(this.data[t].x/2+50-5)+"px) translateY("+(this.data[t].z/-2+50-5)+"px)",r.innerText=t}}},p={data:[],stateDefault:0,statePlayer:1,stateEnemy:2,maxNum:40,width:20,msg:"A problem has been detected and Windows has been shut down to prevent damage to your computer.",exist:function(e,t){return this.data.some((r=>r.x==e&&r.z==t))},init:function(){this.data=[];for(let e=0;e<this.maxNum;e++){let e=20*z(-5,4)+10,t=20*z(-5,4)+10;this.isPlaceable(e,t)&&this.data.push({x:e,z:t,r:x.z2r(t),c:x.x2c(e),state:this.stateDefault})}this.draw()},isPlaceable:function(e,t){return!(-90==e&&t>0||e>0&&-90==t||90==e&&t<0||e<0&&90==t||this.data.some((r=>r.x==e&&r.z==t)))},draw:function(){e.querySelectorAll(".obj:not(.origin)").forEach((e=>e.remove()));for(let t=0;t<this.data.length;t++){let a=e.querySelector("#space .obj.origin").cloneNode(!0);a.classList.add("obj"+t),a.classList.remove("origin");let l="translateX("+Math.round(100*(this.data[t].x+90))*r/100+"px) ";l+="translateY("+30*r+"px) ",l+="translateZ("+Math.round(100*this.data[t].z*-1)*r/100+"px) ",a.style.transform=l,e.querySelector("#container").appendChild(a);let o=e.querySelector("#map .obj.origin").cloneNode(!0);o.classList.add("obj"+t),o.classList.remove("origin"),o.style.transform="translateX("+(this.data[t].x/2+50-5)+"px) translateY("+(this.data[t].z/-2+50-5)+"px)",e.querySelector("#map").appendChild(o)}},changeState:function(t,r){this.data[t].state=r,e.querySelector("#space .obj"+t).classList.remove("p","e"),e.querySelector("#map .obj"+t).classList.remove("p","e");let a="",l="";r==this.statePlayer?(a="p",l=this.msg):r==this.stateEnemy&&(a="e"),e.querySelector("#space .obj"+t).classList.add(a),e.querySelectorAll("#space .obj"+t+" .wall").forEach((function(e){e.innerText=l})),e.querySelector("#map .obj"+t).classList.add(a),this.getScore()},getScore:function(){return{player:this.data.filter((e=>e.state==this.statePlayer)).length,enemy:this.data.filter((e=>e.state==this.stateEnemy)).length}}},x={table:[],floors:[],floorExist:function(e,t){return this.floors.some((r=>r.c==e&&r.r==t))},setWall:function(){this.table=Array(10).fill().map((()=>[0,0,0,0,0,0,0,0,0,0]));for(const e of p.data)this.table[e.r][e.c]=1},z2r:e=>(-1*e+90)/20,x2c:e=>(e+90)/20,r2z:e=>-20*e+90,c2x:e=>20*e-90,getFloorCount:function(){return this.crawl(),this.drawFloor(),this.floors.length},crawl:function(){this.floors=[{c:0,r:0,checked:!1}];for(let e=0;e<100;e++){let e=this.floors.find((e=>0==e.checked));if(void 0===e)return;this._canMove(e.c,e.r-1)&&this.floors.push({c:e.c,r:e.r-1,checked:!1}),this._canMove(e.c+1,e.r)&&this.floors.push({c:e.c+1,r:e.r,checked:!1}),this._canMove(e.c,e.r+1)&&this.floors.push({c:e.c,r:e.r+1,checked:!1}),this._canMove(e.c-1,e.r)&&this.floors.push({c:e.c-1,r:e.r,checked:!1}),e.checked=!0}},_canMove:function(e,t){return!(e<0||e>9||t<0||t>9||p.exist(this.c2x(e),this.r2z(t))||this.floorExist(e,t))},drawFloor:function(){for(let t=0;t<this.floors.length;t++){let r=e.querySelector("#map .obj.origin").cloneNode(!0);r.classList.add("objb"+t,"objb"),r.classList.remove("origin"),r.style.transform="translateX("+10*this.floors[t].c+"px) translateY("+10*this.floors[t].r+"px)",e.querySelector("#map").appendChild(r)}}},m={x:90,z:-90,_intervalId:0,stop:function(){clearInterval(this._intervalId)},init:function(){this.x=90,this.z=-90},msg:"Cleaning up",isFound:function(){let e=p.width/2,t={x:this.x,y:this.z},r={x:c.moveX,y:c.moveZ},a=p.data;for(let l=0;l<a.length;l++){let o=[[{x:a[l].x-e,y:a[l].z+e},{x:a[l].x+e,y:a[l].z+e}],[{x:a[l].x+e,y:a[l].z+e},{x:a[l].x+e,y:a[l].z-e}],[{x:a[l].x-e,y:a[l].z-e},{x:a[l].x+e,y:a[l].z-e}],[{x:a[l].x-e,y:a[l].z+e},{x:a[l].x-e,y:a[l].z-e}]];for(let e=0;e<o.length;e++)if(Y(t,r,o[e][0],o[e][1]))return!1}return!0},move:function(){this._intervalId=setInterval((()=>{""==e.querySelector("#space .enemy").style.transition&&(e.querySelector("#space .enemy").style.transition="transform 2s linear");let t=Math.abs(this.x-c.moveX),r=Math.abs(this.z-c.moveZ);if(t<p.width&&r<p.width)return alert(this.msg),this.init(),c.init(),void q();let a=0,l=this.getMovableCoords();if(this.isFound()){let e=this.getPlayersDirection(t,r);a=l.findIndex((t=>{if(e==t.direction)return!0})),-1===a&&(a=0)}else a=z(0,l.length-1);this.x=l[a].x,this.z=l[a].z,this.changeWall(),q()}),2e3)},changeWall:function(){let e=[];e.push(p.data.findIndex((e=>e.x==this.x&&e.z==this.z+p.width))),e.push(p.data.findIndex((e=>e.x==this.x+p.width&&e.z==this.z))),e.push(p.data.findIndex((e=>e.x==this.x&&e.z==this.z-p.width))),e.push(p.data.findIndex((e=>e.x==this.x-p.width&&e.z==this.z))),e.forEach((e=>{-1!==e&&p.changeState(e,p.stateEnemy)}))},getPlayersDirection:function(e,t){return e>t?this.x>c.moveX?"w":"e":this.z>c.moveZ?"s":"n"},getMovableCoords:function(){let e=[];this.z<90&&e.push({direction:"n",x:this.x,z:this.z+p.width}),this.x<90&&e.push({direction:"e",x:this.x+p.width,z:this.z}),this.z>-90&&e.push({direction:"s",x:this.x,z:this.z-p.width}),this.x>-90&&e.push({direction:"w",x:this.x-p.width,z:this.z});let t=[];return e.forEach((e=>{-1==p.data.findIndex((function(t){if(e.x==t.x&&e.z==t.z)return!0}))&&t.push(e)})),t}},f={hide:function(){e.querySelector("#ctrl").classList.add("hide")},show:function(){e.querySelector("#ctrl").classList.remove("hide")}};function v(){let e=Date.now();n=e-i,i=e,c.rotateY+=1,c.deg=c.rotateY%360,q()}function w(){let e=Date.now();n=e-i,i=e,c.rotateY-=1,c.deg=c.rotateY%360,q()}function S(){let e=Math.round(100*(c.moveX+1*Math.sin(g(c.deg))))/100,t=Math.round(100*(c.moveZ+1*Math.cos(g(c.deg))))/100,r=!0,a=!0;for(let l=0;l<p.data.length;l++){let o=p.data[l].x-19,s=p.data[l].x+19,i=p.data[l].z-19,n=p.data[l].z+19;if(e>o&&e<s&&t>i&&t<n){if(c.moveX==o&&c.moveZ==i||c.moveX==o&&c.moveZ==n||c.moveX==s&&c.moveZ==i||c.moveX==s&&c.moveZ==n)continue;let e=!1;c.moveX<=o?(c.moveX=o,r=!1,e=!0):c.moveX>=s?(c.moveX=s,r=!1,e=!0):c.moveZ<=i?(c.moveZ=i,a=!1,e=!0):c.moveZ>=n&&(c.moveZ=n,a=!1,e=!0),e&&1!=p.data[l].state&&p.changeState(l,p.statePlayer)}}r&&(c.moveX=e>90?90:e<-90?-90:e),a&&(c.moveZ=t>90?90:t<-90?-90:t),q()}function g(e){return e*Math.PI/180}function q(){c.viewX=200*Math.sin(g(c.deg)),c.viewZ=200*Math.cos(g(c.deg)),transformField="rotateY("+c.rotateY+"deg) translateX("+Math.round(-1*(c.viewX+c.moveX)*100)/100*r+"px) translateY("+c.translateY*r+"px) translateZ("+Math.round(100*(c.viewZ+c.moveZ))/100*r+"px) ",e.querySelector("#container").style.transform=transformField,e.querySelector("#space .enemy").style.transform="translateX("+(m.x+90)*r+"px) translateY("+30*r+"px) translateZ("+-1*m.z*r+"px)",e.querySelector("#space .enemy div").style.transform="rotateY("+(180-c.rotateY)+"deg)",e.querySelector("#map .pl").style.transform="translateX("+(c.moveX/2+50-5)+"px) translateY("+(c.moveZ/-2+50-5)+"px) rotateZ("+c.rotateY+"deg)",e.querySelector("#map .em").style.transform="translateX("+(m.x/2+50-5)+"px) translateY("+(m.z/-2+50-5)+"px)",e.querySelector("#deg span").innerText=deg+"°, "+n+"ms",e.querySelector("#transform span").innerText=transformField,e.querySelector("#pl .moveX").innerText=c.moveX,e.querySelector("#pl .moveZ").innerText=c.moveZ,e.querySelector("#enemy span").innerText="x: "+m.x+", z: "+m.z}function z(e,t){return Math.floor(Math.random()*(t+1-e))+e}function Y(e,t,r,a){let l=(e.x-t.x)*(r.y-e.y)-(e.y-t.y)*(r.x-e.x),o=(e.x-t.x)*(a.y-e.y)-(e.y-t.y)*(a.x-e.x);return!(l*o>0||(l=(r.x-a.x)*(e.y-r.y)-(r.y-a.y)*(e.x-r.x),o=(r.x-a.x)*(t.y-r.y)-(r.y-a.y)*(t.x-r.x),l*o>0))}})();