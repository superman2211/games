function run(){ctx.clearRect(0,0,canvasW,canvasH);var t=ctx.createLinearGradient(0,0,0,canvasH);if(t.addColorStop(0,"#000000"),t.addColorStop(1,"#101010"),ctx.fillStyle=t,ctx.fillRect(0,0,canvasW,canvasH),0==level)drawLightning(),playStars(),ctx.fillStyle="#00FF00",ctx.font="60px Arial",offsetWon>0?ctx.fillText(" The END of the WOR",50,100):ctx.fillText("The END of the WORL",50,100),drawPg(),ctx.fillStyle="#FFFFFF",ctx.font="20px Arial",Kpressed[68]&&(pg.ay=.5,pg.ax=-.3),30>progressLevel%40&&0==pg.ay&&ctx.fillText("press D to start",300,400),ctx.font="10px Arial",ctx.fillText("Made for JS13KGames competition",620,590),progressLevel++,pg.py>canvasH&&levelUp();else if(1==level){for(drawLightning(),1e3>progressLevel&&drawRain(),ctx.fillStyle="#7B7B7B",ctx.font="30px Courier",string="WALL",i=0;i<=canvasH/25+string.length;i++)ctx.fillText(string[i%string.length],2,25*i-offsetY),ctx.fillText(string[(i+2)%string.length],canvasW-20,25*i-offsetY);for((offsetY+=8)<25*string.length||(offsetY-=25*string.length),i=0;i<ostacoli.length;i++)ostacoli[i].draw(),pg.py+pg.height>ostacoli[i].py&&pg.py<ostacoli[i].py+ostacoli[i].height&&pg.px+pg.width>ostacoli[i].px&&pg.px<ostacoli[i].px+ostacoli[i].width&&gameover();pg.px<15&&pg.dx<0&&(pg.dx=.6*-pg.dx,hurtParticle(pg.px,pg.py+pg.height/2,"#00FF00")),pg.px>canvasW-55&&pg.dx>0&&(pg.dx=.6*-pg.dx,hurtParticle(pg.px+pg.width,pg.py+pg.height/2,"#00FF00")),pg.ax=Kpressed[68]?.8:-.8,pg.dy=pg.py<100?2:0,1e3>progressLevel||(pg.dy=4),drawPg(),progressLevel++,1130>progressLevel||levelUp()}else if(2==level){for(ctx.fillStyle="#7B7B7B",ctx.font="30px Courier",string="WALL",i=0;i<=canvasH/25+string.length;i++)ctx.fillText(string[i%string.length],2,25*i),ctx.fillText(string[(i+2)%string.length],canvasW-20,25*i);for(drawPg(),ctx.fillStyle="#00FF00",ctx.font="60px Arial",ctx.fillText("L",303,445),ctx.save(),ctx.globalAlpha=.8,ctx.fillStyle="#007eff",ctx.font="30px Courier",string="WATER",k=0;10>k;k++)ctx.globalAlpha-=.06,acqua=(string+string+string+string+string+string+string+string+string+string+string+string).substring(k),ctx.fillText(acqua,0,450+18*k);if(ctx.fillRect(0,430,canvasW,170),ctx.restore(),Math.abs(pg.py-400)<1&&Math.abs(pg.dy)<2)return pg.ay=0,pg.dy=0,void levelUp();pg.py>400?(pg.dy>2&&(pg.dy=pg.dy-2),pg.ay=-.2,pg.ax=0,pg.dx=0,hurtParticle(pg.px+pg.width/2,pg.py+pg.height,"#007eff")):0==pg.ax&&pg.py<400&&(pg.ay=.5)}else if(3==level){for(ctx.save(),++progressLevel<30&&ctx.translate(rand(-1,2),rand(-2,2)),ostacoli.length>2&&drawCalcinacci(),ctx.fillStyle="#7B7B7B",ctx.font="30px Courier",string="WALL",i=0;i<=canvasH/25+string.length;i++)ctx.fillText(string[i%string.length],2,25*i),ctx.fillText(string[(i+2)%string.length],canvasW-20,25*i);for(pg.ax=Kpressed[76]?-.2:Kpressed[68]?.2:0,pg.px<15&&pg.dx<0&&(pg.dx=.6*-pg.dx,hurtParticle(pg.px,pg.py+pg.height/2,"#00FF00")),pg.px>canvasW-90&&pg.dx>0&&(pg.dx=.6*-pg.dx,hurtParticle(pg.px+pg.width,pg.py+pg.height/2,"#00FF00")),drawPg(),i=0;i<ostacoli.length;i++){if(ostacoli[i].draw(),pg.py+pg.height>ostacoli[i].py&&pg.py<ostacoli[i].py+ostacoli[i].height&&pg.px+pg.width>ostacoli[i].px&&pg.px<ostacoli[i].px+ostacoli[i].width){if(2!=ostacoli[i].dy)return void gameover();2==ostacoli[i].dy&&pg.dx>0&&pg.px<ostacoli[i].px?pg.dx=0:2==ostacoli[i].dy&&pg.dx<0&&pg.px>ostacoli[i].px&&(pg.dx=0)}ostacoli[i].py>370&&ostacoli[i].py<380&&(ostacoli[i].dy=2,hurtParticle(ostacoli[i].px+ostacoli[i].width/2,ostacoli[i].py+ostacoli[i].height,"#007eff")),ostacoli[i].py>620&&ostacoli.splice(i,1)}for(ctx.restore(),ctx.save(),ctx.globalAlpha=.8,ctx.fillStyle="#007eff",ctx.font="30px Courier",string="WATER",k=0;10>k;k++)ctx.globalAlpha-=.06,acqua=(string+string+string+string+string+string+string+string+string+string+string+string).substring(k),ctx.fillText(acqua,0,450+18*k);ctx.fillRect(0,430,canvasW,170),ctx.restore(),ostacoli.length>0||levelUp()}else if(4==level){for(ctx.fillStyle="#7B7B7B",ctx.font="30px Courier",string="WALL",i=0;i<=canvasH/25+string.length+5;i++)ctx.fillText(string[i%string.length],2,25*i+progressLevel-200),ctx.fillText(string[(i+2)%string.length],canvasW-20,25*i+progressLevel-200);for(drawPg(),ctx.fillStyle="#00FF00",ctx.font="60px Arial",155>progressLevel?ctx.fillText("R",pg.px-42,canvasH+156-77.5-progressLevel/2):ctx.fillText("R",pg.px-42,canvasH-1),ctx.save(),ctx.globalAlpha=.8,ctx.fillStyle="#007eff",ctx.font="30px Courier",string="WATER",k=0;10>k;k++)ctx.globalAlpha-=.06,acqua=(string+string+string+string+string+string+string+string+string+string+string+string).substring(k),ctx.fillText(acqua,0,450+18*k+progressLevel);if(ctx.fillRect(0,430+progressLevel,canvasW,170),ctx.restore(),progressLevel>170)return void levelUp();progressLevel+=2,155>progressLevel&&(pg.py+=2)}else if(5==level){for(drawLightning(),drawShootingstar(),ctx.fillStyle="#7B7B7B",ctx.font="30px Courier",string="ALLW",i=0;i<=canvasH/25+string.length+5;i++)ctx.fillText(string[i%string.length],2,25*i-200),ctx.fillText(string[(i+2)%string.length],canvasW-20,25*i-200);for(Kpressed[82]?pg.ax=-.5:Kpressed[68]?pg.ax=.5:(pg.ax=0,pg.dx=pg.dx/1.1),Math.abs(pg.dx)>5&&(pg.dx=5*pg.dx/Math.abs(pg.dx)),pg.px<15&&pg.dx<0&&(pg.dx=.6*-pg.dx),pg.px>canvasW-132&&pg.dx>0&&(pg.dx=.6*-pg.dx),ctx.fillStyle="#FFFFFF",ctx.font="55px Courier",aliens.px=999,aliens.width=-999,i=0;i<aliens.length;i++)if(ctx.fillText(aliens[i].txt,aliens[i].px,aliens[i].py),aliens[i].px+=aliens.dx,bullet.py+5>aliens[i].py-35&&bullet.py<aliens[i].py+aliens[i].height-35&&bullet.px+3>aliens[i].px&&bullet.px<aliens[i].px+aliens[i].width)hurtParticle(aliens[i].px+aliens[i].width/2,aliens[i].py-aliens[i].height/2,"FFFFFF"),hurtParticle(aliens[i].px+aliens[i].width/2,aliens[i].py-aliens[i].height/2,"FFFFFF"),aliens.splice(i,1),bullet.px=-100,shooting=!1,i-=1;else{if(pg.py+pg.height>aliens[i].py-35&&pg.py<aliens[i].py+aliens[i].height-35&&pg.px+pg.width>aliens[i].px&&pg.px<aliens[i].px+aliens[i].width)return void gameover();aliens.px>aliens[i].px&&(aliens.px=aliens[i].px),aliens.px+aliens.width<aliens[i].px+aliens[i].width&&(aliens.width=aliens[i].px+aliens[i].width-aliens.px)}if(aliens.px<20&&aliens.dx<0)for(aliens.dx=-aliens.dx,i=0;i<aliens.length;i++)aliens[i].py+=35;else if(aliens.px+aliens.width>780&&aliens.dx>0)for(aliens.dx=-aliens.dx,i=0;i<aliens.length;i++)aliens[i].py+=35;!shooting&&Kpressed[76]?(shooting=!0,bullet.px=pg.px+48,bullet.py=555,bullet.dy=-12):shooting&&(ctx.fillStyle="#FFFFFF",ctx.fillRect(bullet.px,bullet.py,3,5),bullet.py+=bullet.dy,bullet.py<-10&&(shooting=!1)),drawPg(),0==aliens.length&&levelUp()}else if(6==level){for(drawLightning(),ctx.save(),100>progressLevel&&ctx.translate(rand(-1,2),rand(-2,2)),progressLevel>200&&ctx.translate(rand(-4,4),rand(-4,4)),ctx.fillStyle="#7B7B7B",ctx.font="30px Courier",string="ALLW",i=0;i<=canvasH/25+string.length+5;i++)ctx.fillText(string[i%string.length],2,25*i-200+10*progressLevel),200>progressLevel?ctx.fillText(string[(i+2)%string.length],canvasW-20,25*i-200):200==progressLevel&&hurtParticle(canvasW-10,25*i-200,"#7B7B7B");if(drawPg(),progressLevel>100)for(ctx.font="50px Courier",string="FIREWALL",k=0;5>k;k++)for(i=0;canvasH/35>i;i++)r=rand(0,4),ctx.fillStyle=0==r?"#ff0000":1==r?"#ffcc00":2==r?"#ff4400":3==r?"#ff8800":"#ffaa00",ctx.fillText(string[(i+3*k)%string.length],progressLevel-140-30*k,35*i+35);progressLevel>150&&(ctx.fillStyle="#00FF00",ctx.font="60px Arial",ctx.fillText("O",15*(progressLevel-150)-200,pg.py+45),15*(progressLevel-150)-150>pg.px&&(pg.px+=15,pg.py-=4)),ctx.restore(),progressLevel++,progressLevel>230&&levelUp()}else if(7==level){for(drawLightning(),playStars(),ctx.fillStyle="#00FF00",ctx.font="60px Arial",ctx.fillText("The END of the W____",850-progressLevel/2,100),speed=5,pg.dx=Kpressed[79]?-speed:Kpressed[68]?+speed:0,pg.dy=Kpressed[82]?-speed:Kpressed[76]?+speed:0,pg.px>640&&pg.dx>0&&(pg.dx=0),pg.py>555&&pg.dy>0&&(pg.dy=0),pg.py<0&&pg.dy<0&&(pg.dy=0),i=0;i<ostacoli.length;i++)pg.px+pg.width>ostacoli[i].px&&pg.px<ostacoli[i].px+ostacoli[i].width&&pg.py+pg.height>ostacoli[i].py&&pg.py<ostacoli[i].py+ostacoli[i].height&&(pg.dx=ostacoli[i].dx,hurtParticle(ostacoli[i].px,ostacoli[i].py+ostacoli[i].height/2,"#7B7B7B")),ostacoli[i].draw(),ostacoli[i].px<-100&&(ostacoli.splice(i,1),i-=1);for(drawPg(),ctx.font="50px Courier",string="FIREWALL",k=0;20>k;k++)for(i=0;canvasH/35>i;i++)r=rand(0,4),ctx.fillStyle=0==r?"#ff0000":1==r?"#ffcc00":2==r?"#ff4400":3==r?"#ff8800":"#ffaa00",ctx.fillText(string[(i+7*k)%string.length],progressLevel/5-30-30*k,35*i+35);pg.px+20<progressLevel/5&&gameover(),progressLevel++,progressLevel>1350&&pg.py>35&&pg.py<70&&pg.px>620-progressLevel/2+700&&pg.px<660-progressLevel/2+700&&(offsetWon=progressLevel,levelUp())}else if(8==level){for(playStars(),ctx.fillStyle="#00FF00",ctx.font="60px Arial",ctx.fillText("The END of the WORLD",850-offsetWon/2-progressLevel/8,100),ctx.font="50px Courier",string="FIREWALL",k=0;20>k;k++)for(i=0;canvasH/35>i;i++)r=rand(0,4),ctx.fillStyle=0==r?"#ff0000":1==r?"#ffcc00":2==r?"#ff4400":3==r?"#ff8800":"#ffaa00",ctx.fillText(string[(i+7*k)%string.length],offsetWon/5-30-30*k-3*progressLevel,35*i+35);progressLevel>250&&(ctx.save(),ctx.fillStyle="#FFFFFF",ctx.font="50px Arial",ctx.globalAlpha=progressLevel>400?(500-progressLevel)/100:(progressLevel-250)/200,progressLevel>500&&(ctx.globalAlpha=0),ctx.fillText("A game by Infernet89",130,400),ctx.restore()),progressLevel++,progressLevel>600&&(level=-1,levelUp())}drawParticle()}function gameover(){nGameOvers++,level--,levelUp()}function levelUp(){for(;particles.length>0;)particles.pop();if(progressLevel=0,level++,1==level){for(pg.px=400,pg.py=-90,pg.ax=0,pg.ay=0,pg.dx=10,pg.dy=0,pg.width=40,pg.height=45,offsetY=0,progressLevel=0;ostacoli.length>0;)ostacoli.pop();for(quanti=rand(3,15)-nGameOvers,i=0;quanti>i;i++)t=new ostacoloObj(2),t.px=15,t.py=rand(800,8e3),t.dy=-8,ostacoli.push(t);for(quanti=rand(2,10)-nGameOvers,i=0;quanti>i;i++)t=new ostacoloObj(2),t.px=canvasW-80,t.py=rand(800,8e3),t.dy=-8,ostacoli.push(t);for(quanti=rand(10,30)-nGameOvers,i=0;quanti>i;i++)t=new ostacoloObj(1),t.px=rand(75,canvasW-180),t.dy=rand(-3,-6),t.py=rand(100*-t.dy+300,1e3*-t.dy),ostacoli.push(t)}else if(2==level){for(;ostacoli.length>0;)ostacoli.pop();pg.py=-190,pg.px=400,pg.dy=8,pg.dx=0,pg.ax=-.1,pg.ay=.5}else if(3==level){for(;ostacoli.length>0;)ostacoli.pop();for(pg.px=303,pg.py=400,pg.dx=0,pg.dy=0,pg.ax=0,pg.ay=0,pg.width=75,quanti=rand(20,40)-nGameOvers,i=0;quanti>i;i++)t=new ostacoloObj(2),t.px=rand(20,canvasW-85),t.py=rand(-100,-1e4),t.dy=rand(6,8),ostacoli.push(t)}else if(4==level)pg.ax=0,pg.dx=0,pg.px<62&&(pg.px=62);else if(5==level){for(;aliens.length>0;)aliens.pop();for(pg.px=pg.px-42,pg.width=115,pg.px<62&&(pg.px=62),pg.py=canvasH-46,shooting=!1,bullet={},string="ALIENS",k=0;3>k;k++)for(i=0;12>i;i++)t={},t.txt=string[i%string.length],t.px=40*i+20,t.py=35*k-72+18,t.width=35,t.height=35,aliens.push(t);aliens.px=20,aliens.dx=3-nGameOvers/10,aliens.dx<1&&(aliens.dx=1),aliens.width=470}else if(7==level){for(;ostacoli.length>0;)ostacoli.pop();for(pg.px=300,pg.py=300,pg.dx=0,pg.dy=0,pg.ax=0,pg.ay=0,pg.width=160,quanti=rand(25,50)-nGameOvers,i=0;quanti>i;i++)t=new ostacoloObj(2),t.px=rand(1e3,14e3),t.py=rand(0,canvasH-75),t.dx=-rand(7,14),ostacoli.push(t)}}function drawFire(t,i){for(ctx.save(),ctx.translate(0,30),ctx.font="50px Courier",string="FIRE",fi=0;4>fi;fi++)r=rand(0,4),ctx.fillStyle=0==r?"#ff0000":1==r?"#ffcc00":2==r?"#ff4400":3==r?"#ff8800":"#ffaa00",ctx.fillText(string[fi],t+25*fi,i);ctx.restore()}function drawRock(t,i){ctx.save(),ctx.translate(0,38),ctx.font="60px Courier",ctx.fillStyle="#7B7B7B",ctx.fillText("R",t,i),ctx.fillStyle="#8B8B8B",ctx.fillText("O",t+28,i),ctx.fillStyle="#707070",ctx.fillText("C",t,i+35),ctx.fillStyle="#858585",ctx.fillText("K",t+28,i+35),ctx.restore()}function drawPg(){ctx.save(),ctx.translate(0,45),level>2?level>4?level>6?7==level&&(ctx.font="60px Arial",ctx.translate(pg.px,pg.py),ctx.fillStyle=Kpressed[79]?"#FF0000":"#00FF00",ctx.fillText("O",0,0),ctx.fillStyle=Kpressed[82]?"#FF0000":"#00FF00",ctx.fillText("R",44,0),ctx.globalAlpha=.2,ctx.fillText("▲",34,0),ctx.globalAlpha=1,ctx.fillStyle=Kpressed[76]?"#FF0000":"#00FF00",ctx.fillText("L",86,0),ctx.globalAlpha=.2,ctx.fillText("▼",76,0),ctx.globalAlpha=1,ctx.fillStyle=Kpressed[68]?"#FF0000":"#00FF00",ctx.fillText("D",120,0)):(ctx.font="60px Arial",ctx.translate(pg.px,pg.py),ctx.fillStyle=Kpressed[82]?"#FF0000":"#00FF00",ctx.fillText("R",0,0),ctx.fillStyle=Kpressed[76]?"#FF0000":"#00FF00",ctx.fillText("L",42,0),ctx.fillStyle=Kpressed[68]?"#FF0000":"#00FF00",ctx.fillText("D",76,0)):(ctx.font="60px Arial",ctx.translate(pg.px,pg.py),ctx.fillStyle=Kpressed[76]?"#FF0000":"#00FF00",ctx.fillText("L",0,0),ctx.fillStyle=Kpressed[68]?"#FF0000":"#00FF00",ctx.fillText("D",34,0)):(ctx.fillStyle=Kpressed[68]?"#FF0000":"#00FF00",ctx.font="60px Arial",ctx.translate(pg.px+20,pg.py-25),ctx.rotate(pg.dx*TO_RADIANS),ctx.translate(-20,25),ctx.fillText("D",0,0)),ctx.restore(),pg.px+=pg.dx,pg.py+=pg.dy,pg.dx+=pg.ax,pg.dy+=pg.ay}function keyDown(t){Kpressed[t.keyCode]=!0}function keyUp(t){Kpressed[t.keyCode]=!1}function rand(t,i){return t>i?rand(i,t):(i+=1,Math.floor(Math.random()*(i-t)+t))}function ostacoloObj(t){this.tipo=t,this.px=0,this.py=0,this.dx=0,this.dy=0,this.ax=0,this.ay=0,1==t?(this.width=100,this.height=30):2==t&&(this.width=60,this.height=75),this.draw=function(){1==this.tipo?drawFire(this.px,this.py):2==this.tipo&&drawRock(this.px,this.py),this.px+=this.dx,this.py+=this.dy,this.dx+=this.ax,this.dy+=this.ay}}function playStars(){if(stars.length<=0){for(;stars.length>0;)stars.pop();for(quanti=rand(50,100),i=0;quanti>i;i++)t={},t.px=rand(0,2*canvasW),t.py=rand(0,canvasH),t.dx=-rand(20,22),stars.push(t)}for(ctx.save(),ctx.fillStyle="#FFFFFF",ctx.globalAlpha=.7,i=0;i<stars.length;i++)ctx.fillRect(stars[i].px,stars[i].py,1,1),stars[i].px+=stars[i].dx,stars[i].px<0&&(stars[i].px+=2*canvasW);ctx.restore()}function hurtParticle(i,e,l){for(ip=0;10>ip;ip++)t={},t.px=i,t.py=e,t.dx=rand(-3,3),t.dy=rand(-3,3),t.color=l,t.ttl=rand(5,20),particles.push(t)}function drawParticle(){for(ctx.save(),ipd=0;ipd<particles.length;ipd++)ctx.fillStyle=particles[ipd].color,ctx.fillRect(particles[ipd].px,particles[ipd].py,1,1),particles[ipd].px+=particles[ipd].dx,particles[ipd].py+=particles[ipd].dy,particles[ipd].ttl--,particles[ipd].ttl>0||(particles.splice(ipd,1),ipd-=1);ctx.restore()}function drawLightning(){if(ctx.restore(),--lightningDelay<=0){for(0==lightningDelay&&(lightningstartx=rand(0,canvasW)),-5>lightningDelay&&(lightningDelay=rand(200,600)),ctx.save(),ctx.globalAlpha=.5,ctx.translate(rand(-1,2),rand(-2,2)),ctx.fillStyle="#f4ff7d",ctx.font="10px Arial",string="LIGHTNING",lightningoffset=0,il=0;canvasH>=10*il;il++)ctx.fillText(string[il%string.length],lightningstartx-2*il+10*lightningoffset,10*il),rand(1,10)>7&&lightningoffset++;ctx.globalAlpha=1}}function drawRain(){for(ip=0;5>ip;ip++)t={},t.px=rand(0,canvasW+150),t.py=0,t.dx=-2,t.dy=rand(3,6),t.color="#7dcdff",t.ttl=rand(50,200),particles.push(t)}function drawCalcinacci(){for(ip=0;1>ip;ip++)t={},t.px=rand(0,canvasW+150),t.py=0,t.dx=0,t.dy=rand(12,14),t.color="#7B7B7B",t.ttl=rand(50,200),particles.push(t)}function drawShootingstar(){--shootingStardelay>0||(shootingStardelay=rand(10,50),t={},t.px=rand(0,canvasW),t.py=0,t.dx=7*rand(-4,4),t.dy=rand(32,34),t.color="#BBBBBB",t.ttl=15,particles.push(t),st={},st.px=t.px+1,st.py=-1,st.dx=t.dx,st.dy=t.dy,st.color="#BBBBBB",st.ttl=12,particles.push(st),st={},st.px=t.px-1,st.py=-1,st.dx=t.dx,st.dy=t.dy,st.color="#BBBBBB",st.ttl=12,particles.push(st),st={},st.px=t.px,st.py=-1,st.dx=t.dx,st.dy=t.dy,st.color="#BBBBBB",st.ttl=12,particles.push(st))}var TO_RADIANS=Math.PI/180,canvas,ctx,canvasW=800,canvasH=600,activeTask,level=0,pg,Kpressed=[],string,offsetY=0,ostacoli=[],progressLevel=0,shooting,bullet,aliens=[],offsetWon=0,stars=[],particles=[],lightningDelay=100,nGameOvers=0,shootingStardelay;canvas=document.getElementById("g"),ctx=canvas.getContext("2d"),pg={},pg.px=660,pg.py=55,pg.dx=0,pg.dy=0,pg.ax=0,pg.ay=0,window.addEventListener("keydown",keyDown,!1),window.addEventListener("keyup",keyUp,!1),activeTask=setInterval(run,33);