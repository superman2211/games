!function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);throw new Error("Cannot find module '"+g+"'")}var j=c[g]={exports:{}};b[g][0].call(j.exports,function(a){var c=b[g][1][a];return e(c?c:a)},j,j.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b){"use strict";var c=a("../../shared/model.js"),d=a("../../shared/levels.js"),e=a("../../shared/utils/rng.js").RNG;b.exports=function(){function b(){m&&(m=!1,j.disconnect(!0))}function f(b){b.level=d[b.levelId],b.random=new e(b.seed),g=c.build(b),i=a("./../views/arena.js")(k,g,function(a){g.addArrow(b.playerId,a)&&j&&j.emit("placeArrow",a)}),i.inputMethod(l),i.gameOver(function(){h.setText("Game over!"),m=!1}),j&&(j.on("placeArrow",function(a){g.addArrow(a.playerId,a.arrow)}),j.emit("started"));var f=a("./../views/hud.js");g.registerHud(f.build(k,b))}var g,h,i,j,k,l,m=!1,n=function(c,e){if(k=document.createElement("div"),k.setAttribute("id","game"),document.body.appendChild(k),l=e,h=a("./../views/message.js").build(k),k.appendChild(h.view),c){j=io.connect("/"),m=!0,h.setText("Waiting for other players to join..."),j.on("start",function(a){m&&(h.setText(""),f(a))});var n=function(){setTimeout(function(){m&&(b(),i&&i.close(),g=null,i=null,h.setText("Connection error!"))},500)};j.on("disconnect",n),j.on("opponentDisconnect",n)}else f({playerId:0,levelId:(new Date).getTime()%d.length,totalPlayers:2,totalTime:9e4})};return{init:n}}()},{"../../shared/levels.js":15,"../../shared/model.js":16,"../../shared/utils/rng.js":21,"./../views/arena.js":10,"./../views/hud.js":11,"./../views/message.js":13}],2:[function(a,b){"use strict";b.exports=function(){function b(){}function c(a,c,d,e,f){this.x=a,this.y=c,this.direction=d,this.lastUpdate=0,this.init=b,this.update=function(a,b){Math.floor(b/e)>Math.floor(this.lastUpdate/e)&&a.critters.push(new h.Critter(this,f,b)),this.lastUpdate=b}}function d(a,c){return g.build({playerId:0,level:{width:3,height:3,sources:a,sinks:c},totalPlayers:1,totalTime:1/0,random:{spawn:b}})}function e(a){document.cookie="inputMethod="+a+"; expires=Fri, 31 Dec 9999 23:59:59 GMT"}var f=a("./../views/arena.js"),g=a("../../shared/model.js"),h=a("../../shared/sprites.js"),i=[],j={};return document.cookie||e("desktop"),j.inputMethod=document.cookie.split("=")[1]||j.inputMethod||"desktop",j.show=function(){var a=d([new c(0,1,1,1e3,h.RABBIT)],[{player:0,x:2,y:1}]);f(document.getElementById("rabbits"),a),i.push(a);var b=d([new c(1,2,0,2e3,h.FOX)],[{player:0,x:1,y:0}]);f(document.getElementById("foxes"),b),i.push(b);var g=d([new c(0,0,1,1e3,h.RABBIT)],[{player:null,x:2,y:0},{player:0,x:2,y:2}]);g.addArrow(0,{x:1,y:0,direction:2,from:0}),g.addArrow(0,{x:1,y:2,direction:1,from:0});var k=f(document.getElementById("arrows"),g,function(a){g.addArrow(0,a)});k.inputMethod(j.inputMethod),i.push(g);for(var l=document.getElementsByTagName("input"),m=function(){e(this.getAttribute("value")),j.inputMethod=this.getAttribute("value"),k.inputMethod(j.inputMethod)},n=0;n<l.length;++n)l[n].getAttribute("value")===j.inputMethod&&(l[n].checked=!0),l[n].disabled||(l[n].onclick=m);document.getElementById("settings").classList.remove("hidden")},j.hide=function(){for(;i.length;)i.pop().isRunning=!1;document.getElementById("settings").classList.add("hidden")},j}()},{"../../shared/model.js":16,"../../shared/sprites.js":17,"./../views/arena.js":10}],3:[function(a,b){"use strict";b.exports=function(b){function c(a,b){b=b||f;var c=document.createElement("canvas");c.width=b,c.height=b;var d=c.getContext("2d");return d.translate(b/2,b/2),a(d),function(a){a.drawImage(c,-b/2,-b/2)}}function d(a,b,c){return e(a,b,null,null,c)}function e(a,c,d,e,g){b.context.save(),b.context.translate(f*a+f/2,f*c+f/2),g&&(b.context.save(),g(b.context),b.context.restore()),e&&(b.context.rotate(d*Math.PI/2),e(b.context)),b.context.restore()}var f=a("./constants.js").CELL_SIZE;return CanvasRenderingContext2D.prototype.drawCircle=function(a,b,c){this.beginPath(),this.arc(a,b,c,0,2*Math.PI,!1)},CanvasRenderingContext2D.prototype.drawEllipse=function(a,b,c,d){var e=.551784,f=c/2*e,g=d/2*e,h=a-c/2,i=b-d/2,j=h+c,k=i+d,l=h+c/2,m=i+d/2;this.beginPath(),this.moveTo(h,m),this.bezierCurveTo(h,m-g,l-f,i,l,i),this.bezierCurveTo(l+f,i,j,m-g,j,m),this.bezierCurveTo(j,m+g,l+f,k,l,k),this.bezierCurveTo(l-f,k,h,m+g,h,m)},{preRender:c,render:e,renderStatic:d}}},{"./constants.js":4}],4:[function(a,b){"use strict";b.exports={CELL_SIZE:48,COLOURS:{BACKGROUND:"#000000",CELL:["#EEEEEE","#CCCCCC","#AAAAAA"],PLAYER:["#007fff","#3fb618"],ARROW:"#FFFFFF",NPC:{FRIENDLY:["#9954bb","#AD76C9"],ENEMY:["#ff7518","#E05804"]}}}},{}],5:[function(a,b){"use strict";b.exports=function(b){function c(a,b){var c="#FFFFFF",d="#000000";a.globalAlpha=.2,a.fillStyle=b?c:d,a.beginPath(),a.moveTo(-i/2,-i/2),a.lineTo(i/2,-i/2),a.lineTo(i/2,i/2),a.lineTo(-i/2,-i/2),a.fill(),a.fillStyle=b?d:c,a.beginPath(),a.moveTo(-i/2,-i/2),a.lineTo(-i/2,i/2),a.lineTo(i/2,i/2),a.lineTo(-i/2,-i/2),a.fill(),a.globalAlpha=.2,a.strokeStyle=b?c:d,a.beginPath(),a.moveTo(i/2,-i/2),a.lineTo(0,0),a.stroke(),a.closePath(),a.strokeStyle=b?d:c,a.beginPath(),a.moveTo(-i/2,i/2),a.lineTo(0,0),a.stroke(),a.closePath()}function d(a,b){h.render(b.x,b.y,b.direction,j,function(b){b.globalAlpha=.6,b.fillStyle=g.COLOURS.PLAYER[a],b.fillRect(-i/2,-i/2,i,i)})}function e(a){h.render(a.x,a.y,a.direction,l,k)}function f(a){h.renderStatic(a.x,a.y,function(b){null!==a.player?(b.drawCircle(0,0,i/3),b.strokeStyle="#FFFFFF",b.lineWidth=4,b.globalAlpha=.5,b.stroke(),b.globalAlpha=1,b.fillStyle=g.COLOURS.PLAYER[a.player],b.fill()):m(b)})}var g=a("./constants.js"),h=a("./common.js")(b),i=g.CELL_SIZE,j=h.preRender(function(a){a.fillStyle=g.COLOURS.ARROW,a.beginPath(),a.moveTo(0,-i/3),a.lineTo(i/3,0),a.lineTo(i/6,0),a.lineTo(i/6,i/3),a.lineTo(-i/6,i/3),a.lineTo(-i/6,0),a.lineTo(-i/3,0),a.lineTo(0,-i/3),a.fill()}),k=h.preRender(function(a){a.fillStyle=g.COLOURS.NPC.FRIENDLY[0],a.fillRect(-i/2,-i/2,i,i),c(a,!0)}),l=h.preRender(function(a){a.fillStyle=g.COLOURS.CELL[2],a.moveTo(-i/3,-i/2),a.lineTo(i/3,-i/2),a.lineTo(i/6,-i/3),a.lineTo(-i/6,-i/3),a.lineTo(-i/3,-i/2),a.fill(),a.fillStyle=g.COLOURS.NPC.FRIENDLY[0],a.fillRect(-i/4,-i/4,i/2,i/2)}),m=h.preRender(function(a){a.fillStyle=g.COLOURS.CELL[1],a.fillRect(-i/2,-i/2,i,i),c(a,!1),a.globalAlpha=1,a.fillStyle=g.COLOURS.BACKGROUND,a.fillRect(5*-i/12,5*-i/12,5*i/6,5*i/6)});return{drawArrow:d,drawSource:e,drawSink:f}}},{"./common.js":3,"./constants.js":4}],6:[function(a,b){"use strict";b.exports=function(b){var c=a("./constants.js"),d=b.width*c.CELL_SIZE,e=b.height*c.CELL_SIZE,f=document.createElement("canvas");f.setAttribute("width",d.toString()),f.setAttribute("height",e.toString()),f.style.backgroundImage='url("./background.png")',f.classList.add("arena");var g=f.getContext("2d"),h=function(){g.clearRect(0,0,d,e)};return{view:f,context:g,clear:h}}},{"./constants.js":4}],7:[function(a,b){"use strict";var c=a("../graphics/constants.js");b.exports.Timer=function(a,b){function d(d){g.clearRect(0,0,a,a);var e=d/1e3;g.strokeStyle=d>b/10?c.COLOURS.NPC.FRIENDLY[0]:c.COLOURS.NPC.ENEMY[0];var f=Math.ceil(e),h=e%1;if(e>0)for(var j=0;h>j;j+=.25)g.beginPath(),g.arc(a/2,a/2,21*a/48,2*(1-j-.49)*Math.PI,2*(1-j-.26)*Math.PI),g.stroke(),g.closePath();i.textContent=f.toString()}var e=document.createElement("div");e.style.position="relative",e.classList.add("timer");var f=document.createElement("canvas");f.width=a,f.height=a;var g=f.getContext("2d");g.lineWidth=3*a/24;var h=document.createElement("h3");h.setAttribute("class","time"),h.style.position="absolute",h.style.top="0px";var i=document.createTextNode("");return h.appendChild(i),e.appendChild(f),e.appendChild(h),{view:e,update:d}}},{"../graphics/constants.js":4}],8:[function(a,b){"use strict";b.exports=function(b){function c(a){e.render(a.x,a.y,a.direction,a.type.view)}var d=a("./constants.js"),e=a("./common.js")(b),f=a("../../shared/sprites.js"),g=d.CELL_SIZE;return f.RABBIT.view=e.preRender(function(a){a.fillStyle=d.COLOURS.NPC.FRIENDLY[0],a.drawEllipse(0,0,11*g/24,g/2),a.fill(),a.fillStyle=d.COLOURS.NPC.FRIENDLY[1],a.drawCircle(0,-g/12,g/6),a.fill(),a.drawEllipse(-g/12,-g/4,g/8,g/4),a.fill(),a.drawEllipse(g/12,-g/4,g/8,g/4),a.fill(),a.fillStyle="#FFFFFF",a.drawCircle(0,g/4,g/12),a.fill()}),f.FOX.view=e.preRender(function(a){a.fillStyle=d.COLOURS.NPC.ENEMY[1],a.drawEllipse(0,0,6*g/12,5*g/6),a.fill(),a.beginPath(),a.moveTo(0,2*g/3),a.lineTo(-g/8,g/6),a.lineTo(g/8,g/6),a.lineTo(0,2*g/3),a.fill(),a.fillStyle=d.COLOURS.NPC.ENEMY[0],a.beginPath(),a.moveTo(0,2*-g/3),a.lineTo(6*g/24,0),a.lineTo(6*-g/24,0),a.lineTo(0,2*-g/3),a.fill(),a.strokeStyle=a.fillStyle="#FFFFFF",a.beginPath(),a.moveTo(0,2*g/3),a.lineTo(-g/16,5*g/12),a.lineTo(g/16,5*g/12),a.lineTo(0,2*g/3),a.stroke(),a.fill()},3*g/2),{drawCritter:c}}},{"../../shared/sprites.js":17,"./common.js":3,"./constants.js":4}],9:[function(a){"use strict";function b(a,b){var c=document.getElementById(a);c.onmouseover=function(){f.setText(b)},c.onmouseout=function(){f.setText("")}}var c=!document.cookie,d=a("./controllers/game.js"),e=a("./controllers/settings.js"),f=a("./views/message.js").build(document.getElementById("container")),g=!1,h=function(){document.getElementById("menu").classList.add("hidden"),f.view.classList.add("hidden"),document.getElementById("backToMenu").classList.remove("hidden")},i=function(){document.getElementById("menu").classList.remove("hidden"),f.view.classList.remove("hidden"),document.getElementById("backToMenu").classList.add("hidden")};b("startSinglePlayer","Start a single player game: This is just a sandbox mode, as there are no AI opponents (yet!)"),b("startMultiplayer","Start a multiplayer game against a randomly chosen opponent"),b("settingsAndInstructions","View instructions and configure input options"),document.getElementById("startSinglePlayer").onclick=function(){h(),d.init(!1,e.inputMethod)},document.getElementById("startMultiplayer").onclick=function(){h(),d.init(!0,e.inputMethod)};var j=function(){h(),g=!0,e.show()};document.getElementById("settingsAndInstructions").onclick=j,c&&j(),document.getElementById("backToMenu").onclick=function(a){g&&(e.hide(),g=!1,i(),a.preventDefault())}},{"./controllers/game.js":1,"./controllers/settings.js":2,"./views/message.js":13}],10:[function(a,b){"use strict";b.exports=function(b,c,d){function e(){c.update((new Date).getTime()-n),c.isRunning||(g(),l&&l()),m&&(h.clear(),c.playerArrows.forEach(function(a,b){a.forEach(function(a){c.isArrowActive(a)&&i.drawArrow(b,a)})}),c.sources.forEach(function(a){i.drawSource(a)}),c.sinks.forEach(function(a){i.drawSink(a)}),c.critters.forEach(function(a){j.drawCritter(a)}),window.requestAnimationFrame(e))}function f(a){o&&o.unbind(),h.view.style.cursor='url("cursor-'+c.playerId+'.cur"), default',o=k[a](h.view,function(a,b,c){d&&d({x:a,y:b,direction:c,from:(new Date).getTime()-n+100})})}function g(){m=!1,h.clear(),b.removeChild(h.view)}var h=a("../graphics/grid.js")(c),i=a("../graphics/fixtures.js")(h),j=a("../graphics/sprites.js")(h),k=a("./input.js");b.appendChild(h.view);var l,m=!0,n=(new Date).getTime();window.requestAnimationFrame(e);var o;return{close:g,inputMethod:f,gameOver:function(a){l=a}}}},{"../graphics/fixtures.js":5,"../graphics/grid.js":6,"../graphics/sprites.js":8,"./input.js":12}],11:[function(a,b,c){"use strict";c.build=function(b,c){function d(a){for(var b=0;b<c.totalPlayers;++b)h[b].textContent=a.score[b].toString();f.update(a.time)}var e=a("../graphics/hud.js"),f=new e.Timer(144,c.totalTime),g=document.createElement("div");g.setAttribute("class","hud");for(var h=[],i=0;i<c.totalPlayers;++i){i===Math.floor(c.totalPlayers/2)&&g.appendChild(f.view);var j=document.createElement("h3");j.classList.add("score"),j.classList.add("player-"+i);var k=document.createTextNode("");h.push(k),j.appendChild(k),g.appendChild(j)}return b.appendChild(g),{update:d}}},{"../graphics/hud.js":7}],12:[function(a,b){"use strict";function c(a){return a&&e.hasOwnProperty(a.toString())?e[a]:null}function d(a){window.oncontextmenu=null,window.onkeydown=null,window.onkeyup=null,a.onmousedown=null,a.onmousemove=null}var e={87:0,38:0,68:1,39:1,83:2,40:2,65:3,37:3},f={},g=a("../graphics/constants.js");b.exports=f,f.desktop=function(a,b){var e,f,h;return window.oncontextmenu=function(){return!1},window.onkeydown=function(a){null!==c(a.keyCode)&&(e=a.keyCode,a.preventDefault())},window.onkeyup=function(a){a.keyCode===e&&(e=null)},a.onmousedown=function(d){if(b){var i=c(e);null!==i&&(f=f||a.offsetLeft+(a.offsetWidth-a.width)/2,h=h||a.offsetTop+(a.offsetHeight-a.height)/2,b(Math.floor((d.clientX-f)/g.CELL_SIZE),Math.floor((d.clientY-h)/g.CELL_SIZE),i))}},{unbind:function(){d(a)}}},f.laptop=function(a,b){var e,f,h={};return window.oncontextmenu=function(){return!1},a.onmousemove=function(b){e=e||a.offsetLeft+(a.offsetWidth-a.width)/2,f=f||a.offsetTop+(a.offsetHeight-a.height)/2,h.x=b.clientX-e,h.y=b.clientY-f},window.onkeydown=function(a){a.preventDefault()},window.onkeyup=function(d){var e=c(d.keyCode);null!==e&&h.x>0&&h.y>0&&h.x<a.width&&h.y<a.height&&(b(Math.floor(h.x/g.CELL_SIZE),Math.floor(h.y/g.CELL_SIZE),e),d.preventDefault())},{unbind:function(){d(a)}}}},{"../graphics/constants.js":4}],13:[function(a,b,c){"use strict";c.build=function(a){var b=document.createElement("h2"),c=document.createTextNode("");return b.appendChild(c),b.classList.add("message"),a.appendChild(b),{view:b,setText:function(a){c.textContent=a}}}},{}],14:[function(a,b){"use strict";var c=function(a,b,c){this.x=a,this.y=b,this.direction=c,this.lastUpdate=0},d=function(a,b,c){return{player:a,x:b,y:c}},e=100,f=a("./sprites.js");c.prototype.init=function(a){this.random=a},c.prototype.update=function(a,b){for(var c=this.lastUpdate+e-this.lastUpdate%e;b>=c;c+=e){var d=this.random.nextByte();d>253?a.critters.push(new f.Critter(this,f.FOX,c)):d>220&&a.critters.push(new f.Critter(this,f.RABBIT,c))}this.lastUpdate=b},b.exports.Source=c,b.exports.Sink=d},{"./sprites.js":17}],15:[function(a,b){"use strict";function c(a,b){return{width:12,height:10,sources:a,sinks:b}}var d=a("./fixtures.js"),e=d.Sink,f=d.Source,g=[];g[0]=c([new f(0,3,1),new f(11,6,3)],[new e(0,11,3),new e(1,0,6),new e(null,6,0),new e(null,5,9)]),g[1]=c([new f(5,0,2),new f(6,9,0),new f(6,0,2),new f(5,9,0)],[new e(0,1,0),new e(0,0,1),new e(null,2,0),new e(null,0,2),new e(1,11,8),new e(1,10,9),new e(null,11,7),new e(null,9,9)]),g[2]=c([new f(0,8,1),new f(11,9,3)],[new e(null,0,7),new e(null,0,0),new e(null,11,0),new e(0,2,0),new e(1,4,0),new e(0,7,0),new e(1,9,0)]),g[3]=c([new f(5,3,0),new f(6,3,1),new f(6,6,2),new f(5,6,3)],[new e(0,2,2),new e(1,9,2),new e(0,9,7),new e(1,2,7)]),b.exports=g},{"./fixtures.js":14}],16:[function(a,b,c){"use strict";c.build=function(b){function c(a,b){return b=b||s,a.from<=b&&(!a.to||a.to>b)}function d(a,d){if(!l.getAtCell(b.level.sinks,d.x,d.y)&&!l.getAtCell(b.level.sources,d.x,d.y)){var f=[],g=e(null,d.x,d.y);if(g.arrow){if(!(d.from<=g.arrow.from))return!1;f=o[g.player].splice(g.index,1);for(var h=o[g.player].length-1;h>=0;--h){var i=o[g.player][h];if(i.to===f[0].from){delete i.to,f.push(i);break}}}for(var j=o[a],m=0,p=j.length-1;p>=0;--p)if(c(j[p],d.from)&&++m===n){j[p].to=d.from;break}return j.push(d),d.from<s&&f.push(d),f.length&&r.forEach(function(a){for(var b=!1,c=0;c<f.length;++c)if(a.inRangeOf(f[c],s-d.from)){b=!0;break}b&&a.replay(k,s)}),!0}}function e(a,b,d){for(var e=!0,f=1;e;++f){e=!1;for(var g=0;g<o.length;++g)if(f<=o[g].length){e=!0;var h=o[g].length-f,i=o[g][h];if(i.x===b&&i.y===d&&c(i,a))return{arrow:i,player:g,index:h}}}return{}}function f(a,b){p[a]=b(p[a])}function g(a){t===a&&(t=++t%b.totalPlayers)}function h(a){j=a}function i(a){a>=b.totalTime&&(k.isRunning=!1,a=b.totalTime);var c=a-s;s=a,q[t]-=c,q[t]<=0&&(q[t]=0,g(t));for(var d=[];r.length;){var e=r.pop();e.update(k,a),e.inPlay&&d.push(e)}for(;d.length;)r.push(d.pop());b.level.sources.forEach(function(b){b.update(k,a)}),j&&j.update({score:p,time:b.totalTime-a})}var j,k={},l=a("./utils/grid.js"),m=a("./utils/array.js"),n=3,o=m.initialise(b.totalPlayers,function(){return[]}),p=m.initialise(b.totalPlayers,0),q=m.initialise(b.totalPlayers,9999),r=[];b.level.sources.forEach(function(a){a.init(b.random.spawn())});var s=0,t=0;return k.width=b.level.width,k.height=b.level.height,k.sources=b.level.sources,k.sinks=b.level.sinks,k.critters=r,k.playerId=b.playerId,k.playerArrows=o,k.playerTimes=q,k.registerHud=h,k.update=i,k.addArrow=d,k.getActiveArrow=e,k.modifyScore=f,k.isArrowActive=c,k.isRunning=!0,k}},{"./utils/array.js":18,"./utils/grid.js":20}],17:[function(a,b){"use strict";function c(a,b,c){this.x=a.x,this.y=a.y,this.direction=a.direction,this.inPlay=!0,this.type=b;var d=f.components(a.direction);this.x+=.5*d.x,this.y+=.5*d.y,this.lastUpdate=c,this.fromPoint={x:this.x,y:this.y,t:c,direction:a.direction}}function d(a,b){var c=b-this.lastUpdate,d=f.components(this.direction),g=this.x+c*this.type.speed*d.x,h=this.y+c*this.type.speed*d.y,i=Math.floor(this.x),j=Math.floor(this.y),k=Math.floor(g),l=Math.floor(h);if(k!==i||l!==j){var m=i>k?i:k,n=j>l?j:l,o=e.getAtCell(a.sinks,m,n);if(null!==o)this.inPlay=!1,null!==o.player&&a.modifyScore(o.player,this.type.score);else{var p=(Math.abs(this.x-m)+Math.abs(this.y-n))/this.type.speed,q=a.getActiveArrow(this.lastUpdate+p,m,n).arrow,r=this.direction;if(q&&q.direction!==this.direction)r=q.direction;else{var s=e.getAtCell(a.sources,m,n);s&&(r=s.direction)}for(var t=0;!f.isValid(f.components(r),a,m,n);)r=(r+ ++t)%4;if(r!==this.direction){this.direction=r;var u=Math.abs(c*this.type.speed)-Math.abs(this.x-m)-Math.abs(this.y-n),v=f.components(r);g=m+u*v.x,h=n+u*v.y}}}this.x=g,this.y=h,this.lastUpdate=b}b.exports.MAX_TICK=400,b.exports.RABBIT={speed:.0024,score:function(a){return a+1}},b.exports.FOX={speed:.0022,score:function(a){return Math.ceil(a/2)}};var e=a("./utils/grid.js"),f=a("./utils/direction.js");c.prototype.inRangeOf=function(a,b){var c=this.type.speed*b,d=this.x-a.x,e=this.y-a.y;return c*c>d*d+e*e},c.prototype.replay=function(a,b){this.x=this.fromPoint.x,this.y=this.fromPoint.y,this.direction=this.fromPoint.direction,this.lastUpdate=this.fromPoint.t,this.update(a,b)},c.prototype.update=function(a,c){for(;this.lastUpdate<c;)d.call(this,a,Math.min(c,this.lastUpdate+b.exports.MAX_TICK))},b.exports.Critter=c},{"./utils/direction.js":19,"./utils/grid.js":20}],18:[function(a,b){"use strict";b.exports.initialise=function(a,b){for(var c=[],d=0;a>d;++d)c[d]="function"==typeof b?b():b;return c}},{}],19:[function(a,b){"use strict";b.exports.components=function(a){var b={x:0,y:0};switch(a){case 0:b.y=-1;break;case 1:b.x=1;break;case 2:b.y+=1;break;case 3:b.x=-1}return b},b.exports.isValid=function(a,b,c,d){var e=c+a.x,f=d+a.y;return e>=0&&f>=0&&e<b.width&&f<b.height}},{}],20:[function(a,b){"use strict";b.exports.getAtCell=function(a,b,c){for(var d=0;d<a.length;++d)if(a[d].x===b&&a[d].y===c)return a[d];return null}},{}],21:[function(a,b){"use strict";function c(){for(var a=[],b=0;e>b;++b)a.push(Math.floor(256*Math.random()));return a}function d(a){this.s=new Array(256),this.i=0,this.j=0;for(var b=0;256>b;b++)this.s[b]=b;a||(a=c()),this.mix(a)}var e=16;d.prototype._swap=function(a,b){var c=this.s[a];this.s[a]=this.s[b],this.s[b]=c},d.prototype.mix=function(a){for(var b=0,c=0;c<this.s.length;c++)b+=this.s[c]+a[c%a.length],b%=256,this._swap(c,b)},d.prototype.nextByte=function(){return this.i=(this.i+1)%256,this.j=(this.j+this.s[this.i])%256,this._swap(this.i,this.j),this.s[(this.s[this.i]+this.s[this.j])%256]},d.prototype.spawn=function(){for(var a=[],b=0;e>b;++b)a.push(this.nextByte());return new d(a)},b.exports.RNG=d},{}]},{},[9]);