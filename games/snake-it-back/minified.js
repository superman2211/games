!function(){function n(e,i,t){for(var a=0;a<i.length;++a){var o=g(i[a]);"function"==typeof t?t(o[0],o[1],$.gridSize):e.fillRect(o[0],o[1],$.gridSize,$.gridSize)}}function m(t,e,i){var a=i?$.colorSnakeDead:$.colorSnake;n(t,e,function(e,i){t.fillStyle=a,t.fillRect(e,i,$.gridSize,$.gridSize),t.fillStyle=$.colorGrass;t.fillRect(e+2,i+2,$.gridSize-4,$.gridSize-4),t.fillStyle=a,t.fillRect(e+4,i+4,$.gridSize-8,$.gridSize-8)})}function t(e,i){e.fillStyle=$.colorFood;!function(e,i,t,a,o,r){t=g(t);for(var n=$.gridSize*a,m=0;m<i.length;++m)e.fillRect(t[0]+i[m][0]*n+o*a,t[1]+i[m][1]*n+r*a,n,n)}(e,[[2,0],[3,0],[4,0],[8,0],[9,0],[10,0],[1,1],[5,1],[7,1],[11,1],[0,2],[3,2],[6,2],[9,2],[12,2],[0,3],[2,3],[3,3],[4,3],[8,3],[9,3],[10,3],[12,3],[0,4],[3,4],[4,4],[5,4],[7,4],[8,4],[9,4],[12,4],[1,5],[4,5],[5,5],[6,5],[7,5],[8,5],[11,5],[2,6],[5,6],[6,6],[7,6],[10,6],[3,7],[6,7],[9,7],[4,8],[8,8],[5,9],[7,9],[6,10]],i,1/12,0,1/12)}function g(e){return[(e[0]+$.marginGrids)*$.gridSize,(e[1]+$.marginGrids)*$.gridSize]}function a(e,i,t,a){this.body=[];for(var o=0;o<t;++o)this.body.push([20<e?e+o:e-t+1-o,i]);this.direction=e>$.insideGridWidth/2?0:2,this._growNextTick=!1,this._skippedFrames=0,this._skipFramePeriod=1/a,this.totalFrames=0,this.food=null,this.heart=null,this.history={}}function o(){document.getElementById("score").innerHTML=$.gameScore+$.roundScore,document.getElementById("heart").innerHTML=$.heartScore}function i(){this.audioCtx=new(window.AudioContext||window.webkitAudioContext),this.notePlayHandlers=[]}a.prototype.tick=function(){if(++this.totalFrames,++this._skippedFrames,this._skippedFrames<this._skipFramePeriod)return!1;var e,i=this.body[0],t=this.food;return $.demo&&(i[0]!==t[0]?i[0]<t[0]&&0!==this.direction?this.direction=2:i[0]>t[0]&&2!=this.direction?this.direction=0:this.direction=3:i[1]!==t[1]&&(i[1]<t[1]&&1!==this.direction?this.direction=3:i[1]>t[1]&&3!=this.direction?this.direction=1:this.direction=0)),1===this.direction&&(e=[i[0],i[1]-1]),2===this.direction&&(e=[i[0]+1,i[1]]),3===this.direction&&(e=[i[0],i[1]+1]),0===this.direction&&(e=[i[0]-1,i[1]]),this.body.splice(0,0,e),this._growNextTick||this.body.splice(this.body.length-1,1),this._growNextTick=!1,this._recordHistory(),!(this._skippedFrames=0)},a.prototype.render=function(e){(1===$.status||2===$.status&&Math.floor(this.totalFrames/10)%2==0)&&m(e,this.body,!1),e.fillStyle=$.colorFood;var i=[(this.food[0]+.5+$.marginGrids)*$.gridSize,(this.food[1]+.5+$.marginGrids)*$.gridSize];e.fillRect(i[0]-2,i[1]-6,4,4),e.fillRect(i[0]-2,i[1]+2,4,4),e.fillRect(i[0]-6,i[1]-2,4,4),e.fillRect(i[0]+2,i[1]-2,4,4),e.fillStyle=$.colorGrass;e.fillRect(i[0]-6,i[1]-.5,12,1),e.fillRect(i[0]-.5,i[1]-6,1,12),this.heart&&(300<this.heartTimeout||Math.floor(this.totalFrames/10)%2==0)&&t(e,this.heart)},a.prototype.checkScore=function(e){if(!e)return!1;var i=this.body[0];return i[0]===e[0]&&i[1]==e[1]&&(this._growNextTick=!0)},a.prototype.checkCollision=function(){var e=this.body[0];if(e[0]<0||e[0]>=$.insideGridWidth||e[1]<0||e[1]>=$.insideGridHeight)return!0;for(var i=1;i<this.body.length;++i)if(this.body[i][0]===e[0]&&this.body[i][1]===e[1])return!0;for(var t=0;t<$.historySnakes.length;++t){var a=$.historySnakes[t].items[this.totalFrames];if(a)for(i=0;i<a.length;++i)if(a[i][0]===e[0]&&a[i][1]===e[1])return!0}return!1},a.prototype.speedUp=function(e){this._skipFramePeriod*=.75},a.prototype._recordHistory=function(){this.history[this.totalFrames]=this.body.slice()},a.prototype.getHistory=function(){return{keys:Object.keys(this.history).map(function(e){return parseInt(e)}),items:this.history}},i.prototype.playNote=function(e,i,t,a){var o=this.audioCtx.createOscillator();o.type="square";var r=function(e){return{b4:493.88,c4:261.63,d4:293.66,e4:329.63,f4:349.23,g4:392,a4:440,x:1e3,y:800}[e]}(e);o.frequency.setValueAtTime(r,this.audioCtx.currentTime),o.connect(this.audioCtx.destination);var n=setTimeout(function(){o.start(),setTimeout(function(){o.stop(),"function"==typeof a&&a()},1e3*t)},1e3*i);this.notePlayHandlers.push(n)},i.prototype.playChord=function(e,i,t,a){var o=t/4,r=function(e){return{c:["c4","e4","g4"],f:["c4","f4","a4"],g:["b4","d4","g4"]}[e]}(e);this.playNote(r[0],i,o),this.playNote(r[2],i+o,o),this.playNote(r[1],i+2*o,o),this.playNote(r[2],i+3*o,o,a)};var e={round:0,snake:null,historySnakes:[],roundScore:0,gameScore:0,heartScore:5,maxHeartScore:20};function r(){Object.assign($,e),$.historySnakes=[],$.status=1,s()}function s(){++$.round,$.roundScore=0,$.roundFrames=0,o();var e=f(5),i=$.demo?.3:.1;$.snake=new a(e[0],e[1],3,i,$),u(!0),$.status=1,d()}function d(){if(1===$.status){if(null!==$.snake.heartTimeout&&(--$.snake.heartTimeout,0===$.snake.heartTimeout&&($.snake.heart=null,$.snake.heartTimeout=null)),$.snake.tick(),$.snake.checkCollision()){if($.status=2,$.gameScore+=$.roundScore,$.roundScore=0,--$.heartScore,o(),$.demo){if($.heartScore<=0){$.demoReady=!0,$.startEl.style.display="block";var e=$.historySnakes;return r(),$.heartScore=0,void($.historySnakes=e)}}else{if(0===$.heartScore)return void setTimeout(function(){$.scoreEl.style.visibility="hidden",$.startEl.style.display="block",$.demo=!0;var e=$.historySnakes;r(),$.historySnakes=e},1500);!function(){var e=document.getElementById("count-down");e.innerHTML="3",setTimeout(function(){e.innerHTML="2"},1e3),setTimeout(function(){e.innerHTML="1"},2e3),setTimeout(function(){e.innerHTML=""},3e3)}()}return $.historySnakes.push($.snake.getHistory()),void($.demo?s():setTimeout(function(){s()},3e3))}$.snake.checkScore($.snake.food)?($.isMuted||!$.audio||$.demo||($.audio.playNote("x",0,.1),$.audio.playNote("y",.1,.2)),$.roundScore=0<$.roundScore?2*$.roundScore:1,o(),$.snake.speedUp(),u(!1)):$.snake.checkScore($.snake.heart)&&($.isMuted||!$.audio||$.demo||($.audio.playNote("x",0,.1),$.audio.playNote("y",.1,.1),$.audio.playNote("x",.2,.1),$.audio.playNote("y",.3,.2)),$.heartScore=Math.min($.heartScore+1,$.maxHeartScore),$.snake.heart=null,o()),!$.demo||$.demoReady?(function(){var e=$.ctx;e.clearRect(0,0,$.width,$.height),e.fillStyle=$.colorGrass,e.fillRect($.marginGrids*$.gridSize,$.marginGrids*$.gridSize,$.insideWidth,$.insideHeight),function(){$.ctx;for(var e=$.snake.totalFrames,i=0;i<$.historySnakes.length;++i){for(var t,a=$.historySnakes[i],o=a.keys,r=1;r<o.length;++r)if(o[r]>e){t=a.items[o[r-1]];break}t&&m($.ctx,t,!0)}}(),$.snake.render(e),$.demo&&function(){var e=[68,10],a=.5,i=($.insideGridWidth-e[0]*a)/2/a,t=($.insideGridHeight-e[1]*a)/2/a-5,o=[[4,1],[3,0],[2,0],[1,0],[0,1],[0,2],[0,3],[0,4],[0,5],[1,6],[2,6],[3,6],[4,7],[4,8],[3,9],[2,9],[1,9],[0,8],[6,9],[6,8],[6,7],[6,6],[6,5],[6,4],[6,3],[6,2],[6,1],[6,0],[7,1],[8,2],[9,3],[10,0],[10,1],[10,2],[10,3],[10,4],[10,5],[10,6],[10,7],[10,8],[10,9],[12,9],[12,8],[12,7],[12,6],[12,5],[12,4],[12,3],[12,2],[12,1],[13,0],[14,0],[15,0],[16,1],[16,2],[16,3],[16,4],[16,5],[16,6],[16,7],[16,8],[16,9],[13,6],[14,6],[15,6],[18,0],[18,1],[18,2],[18,3],[18,4],[18,5],[18,6],[18,7],[18,8],[18,9],[19,6],[22,0],[22,1],[21,2],[21,3],[20,4],[20,5],[19,6],[20,7],[21,8],[22,9],[25,0],[26,0],[27,0],[28,0],[24,1],[24,2],[24,3],[24,4],[24,5],[24,6],[24,7],[24,8],[24,9],[25,0],[26,0],[27,0],[28,0],[25,6],[26,6],[27,6],[28,6],[25,9],[26,9],[27,9],[28,9],[34,0],[34,1],[34,2],[34,3],[34,4],[34,5],[34,6],[34,7],[34,8],[34,9],[36,0],[37,0],[38,0],[39,0],[40,0],[38,1],[38,2],[38,3],[38,4],[38,5],[38,6],[38,7],[38,8],[38,9],[45,0],[45,1],[45,2],[45,3],[45,4],[45,5],[45,6],[45,7],[45,8],[45,9],[46,0],[47,0],[48,0],[49,1],[49,2],[49,3],[49,4],[49,5],[48,6],[47,6],[46,6],[49,7],[49,8],[48,9],[47,9],[46,9],[51,9],[51,8],[51,7],[51,6],[51,5],[51,4],[51,3],[51,2],[51,1],[52,0],[53,0],[54,0],[55,1],[55,2],[55,3],[55,4],[55,5],[55,6],[55,7],[55,8],[55,9],[52,6],[53,6],[54,6],[61,1],[60,0],[59,0],[58,0],[57,1],[57,2],[57,3],[57,4],[57,5],[57,6],[57,7],[57,8],[58,9],[59,9],[60,9],[61,8],[63,0],[63,1],[63,2],[63,3],[63,4],[63,5],[63,6],[63,7],[63,8],[63,9],[67,0],[67,1],[66,2],[66,3],[65,4],[65,5],[64,6],[65,7],[66,8],[67,9]].map(function(e){return[e[0]+i,e[1]+t]}),r=$.ctx;n(r,o,function(e,i){e*=a,i*=a;var t=$.gridSize*a;r.fillStyle=$.colorSnake,r.fillRect(e,i,t,t),r.fillStyle=$.colorGrass;r.fillRect(e+1,i+1,t-2,t-2),r.fillStyle=$.colorSnake,r.fillRect(e+2,i+2,t-4,t-4)})}()}(),requestAnimationFrame(d)):d()}}function c(e){var i;$.demo?32!==e.keyCode&&13!==e.keyCode||l():(36<e.keyCode&&e.keyCode<41?i=e.keyCode-37:65===e.keyCode?i=0:87===e.keyCode?i=1:68===e.keyCode?i=2:83===e.keyCode&&(i=3),null!=i&&2!==Math.abs(i-$.snake.direction)&&($.snake.direction=i))}function l(){$.demo=!1,$.scoreEl.style.visibility="visible",$.startEl.style.display="none",r()}function h(){var e=$.chordId;++$.chordId,$.chordId===$.chords.length&&($.chordId=0),$.audio.playChord($.chords[e],0,2,function(){$.isMuted||h()})}function u(e){$.snake.food=f(),8<=$.roundScore&&.6<Math.random()&&(e||!$.snake.heart)?($.snake.heart=f(),$.snake.heartTimeout=60*(16<$.roundScore?8:20)):e&&($.snake.heart=null,$.snake.heartTimeout=null)}function f(e){return[(e=e||0)+Math.floor(Math.random()*($.insideGridWidth-2*e)),e+Math.floor(Math.random()*($.insideGridHeight-2*e))]}window.$=Object.assign({demo:!0,demoReady:!1,status:0,ctx:null,width:600,height:420,gridSize:15,marginGrids:0,roundFrames:0,colorGrass:"#d1c4af",colorSnake:"#786f69",colorSnakeDead:"#b2a699",colorFood:"#504a4b",mainEl:document.getElementById("main"),startEl:document.getElementById("start"),scoreEl:document.getElementById("score-panel"),audio:null,isMuted:!1,chords:["c","f","g","c","c","g","f","c"],chordId:0},e),$.gridWidth=$.width/$.gridSize,$.gridHeight=$.height/$.gridSize,$.insideWidth=$.width-$.marginGrids*$.gridSize*2,$.insideHeight=$.height-$.marginGrids*$.gridSize*2,$.insideGridWidth=$.insideWidth/$.gridSize,$.insideGridHeight=$.insideHeight/$.gridSize,function(){var e=document.getElementById("main");e.width=$.width,e.height=$.height,$.ctx=e.getContext("2d"),$.ctx.fillStyle=$.colorGrass,$.ctx.fillRect($.marginGrids*$.gridSize,$.marginGrids*$.gridSize,$.insideWidth,$.insideHeight),document.addEventListener("keydown",c),$.startEl.addEventListener("click",l),$.audio||($.audio=new i,h());r()}(),window.m=function(){$.isMuted=!$.isMuted,$.isMuted||h(),document.getElementById("m").innerHTML=$.isMuted?"Unmute":"Mute"}}();