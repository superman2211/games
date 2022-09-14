(function(){var a=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||function(c){window.setTimeout(c,1000/30)};window.requestAnimationFrame=a})();(function(a){a.spool=[];a.scount=0;a.MAX_SOUNDS=8;a.sToLoad=3;a.loaded=function(b){a.scount++;if(a.scount>=a.sToLoad){a.sound.removeEventListener("canplaythrough",a.loaded,false);a.sound2.removeEventListener("canplaythrough",a.loaded,false);a.sound3.removeEventListener("canplaythrough",a.loaded,false);a.spool.push({name:"snd.wav",element:a.sound,played:false});a.spool.push({name:"snd.wav",element:a.sound2,played:false});a.spool.push({name:"snd.wav",element:a.sound3,played:false});a.v.state="start"}};a.playsound=function(f,d){var b=false;var e=0;var c;if(a.spool.length>0){while(!b&&e<a.spool.length){var g=a.spool[e];if((g.element.ended||!g.played)&&g.name==f){b=true;g.played=true}else{e++}}}if(b){c=a.spool[e].element;c.volume=d;c.play()}else{if(a.spool.length<a.MAX_SOUNDS){c=document.createElement("audio");c.setAttribute("src",f+"."+audioType);c.volume=d;c.play();a.spool.push({name:f,element:c,type:audioType,played:true})}}};a.v={state:"initapp",level:1,score:0,};a.animate=function(e){var c,d=+new Date;var b=function(f){var g;if(c!==false){requestAnimationFrame(b);f=f&&f>10000?f:+new Date;g=f-d;if(g<160){c=e(g)}d=f}};b(d)};a.setPage=function(d){var b=a.gcontainer;b.innerHTML="";b.innerHTML=d};a.canvas=null;a.updateAnnotations=function(b,c){c.innerHTML="";c.innerHTML="<span>"+b+"</span>"};a.saveToStorage=function(b){localStorage.clear();var c=JSON.stringify(b);localStorage.setItem("game",c)};a.gameStatusBuilder=function(){var b=localStorage.getItem("game");var c={};if(b){c=JSON.parse(b);game.v.level=c.level;game.v.score=c.score}else{game.v.level=1;game.v.score=0}};a.desapBalls=function(){var c;var b=document.getElementsByClassName("roundball");for(c=0;c<b.length;c++){document.body.removeChild(b[c])}}})(this.game={});

game.initapp={started:false,start:function(){game.gcontainer=document.getElementById("gcontainer");var a="<div class='container'><img src='catch.svg' /><div class='roundbutton big'><a>😸</a></div></div>";game.gameStatusBuilder();game.setPage(a);game.sound=document.createElement("audio");document.body.appendChild(game.sound);game.sound.setAttribute("src","snd.wav");game.sound.addEventListener("canplaythrough",game.loaded,false);game.sound2=document.createElement("audio");document.body.appendChild(game.sound2);game.sound2.setAttribute("src","snd.wav");game.sound2.addEventListener("canplaythrough",game.loaded,false);game.sound3=document.createElement("audio");document.body.appendChild(game.sound3);game.sound3.setAttribute("src","snd.wav");game.sound3.addEventListener("canplaythrough",game.loaded,false)},};game.start={started:false,start:function(){var a="<div class='container'><div class='roundbutton big'><img src='catch.svg' class='title'/><a>😸</a></div><div class='roundbutton right'><a href='help'>👉</a></div></div>";game.setPage(a)},};game.help={started:false,start:function(){var a;a="<h1>HELP US</h1>";a+="<p>The cat has run away from home. Tap on and help him to find his way back. Tap the other stuff to make points and to clear the sky. Please, hurry, otherwise he will be forever <b>LOST</b></p>";a+="<div class='roundbutton right'><a href='gameon'>👉</a></div>";game.setPage(a)},};game.lost={started:false,start:function(){var a;game.desapBalls();game.lost.started=true;game.gameon.started=false;game.ctx.clearRect(0,0,game.width,game.height);a="<div class='container'><h1 class='roundbutton big'> 🙀 </h1></div> ";a+="<div class='roundbutton left'><a href='gameon'> 🔄 </a></div>";game.setPage(a)},};game.win={started:false,start:function(){var a;game.desapBalls();game.win.started=true;game.gameon.started=false;game.v.level=parseInt(game.v.level)+1;game.ctx.clearRect(0,0,game.width,game.height);a="<div class='container'><h1 class='roundbutton big'> 👌 </h1></div> ";a+="<div class='roundbutton left'><a href='gameon'> 🔄 </a></div>";game.saveToStorage(game.v);game.setPage(a)},};

game.init=function(){var d=window.getComputedStyle(document.body);var a=parseInt(d.getPropertyValue("width"),10);var b=parseInt(d.getPropertyValue("height"),10);var e=window.devicePixelRatio;game.canvas=document.createElement("canvas");game.canvas.setAttribute("width",a*e);game.canvas.setAttribute("height",b*e);game.canvas.style.width=a;game.canvas.style.height=b;game.ctx=game.canvas.getContext("2d");game.width=a;game.height=b;document.body.appendChild(game.canvas)};game.gameon={started:false,opacity:1,rPos:function(){var a,d,b;a=Math.floor(game.width*Math.random());d=Math.floor(game.height*Math.random());b=[a,d];return b},start:function(){game.createBalls=function(){var d=["😸","🍼","🍔","🍞","🍏","🏤","⚾","⚽","💡"];var a=[10,8,7,6,5,4,3,2,1];var g,b,e,f;for(b=0;b<d.length;b++){e=game.gameon.rPos();g=document.createElement("div");g.style.left=e[0]+"px";g.style.top=e[1]+"px";g.innerHTML=""+d[b];g.setAttribute("class","roundball");g.setAttribute("data-val",""+a[b]);game.gameon.list.push(g);document.body.appendChild(g)}};game.gameon.fill=0;game.gameon.hits=4+parseInt(game.v.level);game.gameon.c=0;game.gameon.c1=0;game.gameon.list=[];game.gameon.score=0;c="<div id='stage' class='container'><div id='score' class='annotations right'><span >";c+=game.v.score+"</span></div>";c+="<div id='hits'  class='annotations left'><span>";c+=game.gameon.hits+"</span></div>";c+="<div class='roundbutton big faded'> 🏤 </div></div>";game.setPage(c);!game.canvas&&game.init();game.createBalls();game.stage=document.getElementById("stage");game.score=document.getElementById("score");game.hits=document.getElementById("hits")},update:function(){var a=function(){var d;var b=document.getElementsByClassName("roundball");for(d=0;d<b.length;d++){b[d].style.opacity=1-game.gameon.fill}};game.gameon.c1++;game.ctx.clearRect(0,0,game.width,game.height);if(game.gameon.hits===0){game.v.score+=game.gameon.score;game.gameon.score=0;game.v.state="win"}else{if(game.gameon.fill>=1){game.desapBalls();game.v.state="lost"}}game.gameon.fill+=0.005;game.ctx.fillStyle="rgba(0,0,0,"+game.gameon.fill+")";a();game.ctx.fillRect(0,0,game.canvas.width,game.canvas.height);if(game.gameon.c1>50){game.gameon.c1=0;game.desapBalls();game.createBalls()}},event:function(b){var a=parseInt(b.target.getAttribute("data-val"));if(a){game.gameon.score=parseInt(game.gameon.score)+a;game.playsound("snd.wav",0.8);if(game.gameon.fill>0.5){game.gameon.fill=0.5}game.updateAnnotations(""+parseInt(game.v.score+game.gameon.score),game.score);if(a===10){game.gameon.hits-=1;game.updateAnnotations(""+game.gameon.hits,game.hits)}}},};

window.onload=function(){var a=function(c){var b=c.target.getAttribute("href");c.preventDefault();c.stopPropagation();if(b){game[game.v.state].started=false;game.v.state=b}else{if("event" in game[game.v.state]){game[game.v.state].event(c)}}};game.animate(function(){if("start" in game[game.v.state]&&!game[game.v.state].started){game[game.v.state].start();game[game.v.state].started=true}else{if("update" in game[game.v.state]){game[game.v.state].update()}}});document.body.addEventListener("touchstart",a,false);document.body.addEventListener("click",a,false)};