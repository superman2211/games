/*! timelapse 2013-09-13 */
!function(){function a(a){console.warn?console.warn(m+a):console.log&&console.log(m+("WARN "+a))}function b(a){console.error?console.error(m+a):console.log&&console.log(m+("ERR "+a))}function c(a,b){if(a.getContext)for(var c=["webgl","experimental-webgl"],d=0;d<c.length;++d)try{var e=a.getContext(c[d],b);if(e)return e}catch(f){}}var d,e=["fragment","canvas","variables"],f={bool:"1i","int":"1i","float":"1f",vec2:"2f",ivec2:"2i",bvec2:"2b",vec3:"3f",ivec3:"3i",bvec3:"3b",vec4:"4f",ivec4:"4i",bvec4:"4b",mat2:"Matrix2fv",mat3:"Matrix3fv",mat4:"Matrix4fv"},g=/uniform\s+([a-z]+\s+)?([A-Za-z0-9]+)\s+([a-zA-Z_0-9]+)\s*(\[\s*(.+)\s*\])?/,h=/struct\s+\w+\s*{[^}]+}\s*;/g,i=/struct\s+(\w+)\s*{([^}]+)}\s*;/,j=/[^;]+;/g,k=/\s*([a-z]+\s+)?([A-Za-z0-9]+)\s+([a-zA-Z_0-9]+)\s*(\[\s*(.+)\s*\])?\s*;/,l=/#define\s+([a-zA-Z_0-9]+)\s+(.*)/,m="Glsl: ",n=0;d=function(){return++n},this.Glsl=function(b){if(!(this instanceof arguments.callee))return new arguments.callee(b);if(!b)throw Error("Glsl: {"+e+"} are required.");for(var c=0;c<e.length;c++)if(!(e[c]in b))throw Error("Glsl: '"+e[c]+"' is required.");if(this.canvas=b.canvas,this.variables=b.variables,this.init=b.init||function(){},this.update=b.update||function(){},this.ready=b.ready||function(){},this.prog=new Glsl.Program("attribute vec2 position; void main() { gl_Position = vec4(2.0*position-1.0, 0.0, 1.0);}",b.fragment),this.defines=this.prog.defines,!this.prog.uniformTypes.resolution)throw Error("Glsl: You must use a 'vec2 resolution' in your shader.");for(var d in this.prog.uniformTypes)!(d in this.variables)&&"resolution"!=d&&a("variable '"+d+"' not initialized");this.initGL(b.contextArgs),this.load(),this.syncAll(),this.init(),this.update(0,0),this.render(),this.ready()},Glsl.supported=function(){return!!c(document.createElement("canvas"))},Glsl.Program=function(a,b){this.gl=null,this.vertex=a,this.fragment=b;var c=a+"\n"+b;this.parseDefines(c),this.parseStructs(c),this.parseUniforms(c)},Glsl.Program.prototype={defines:null,syncVariable:function(a,b){this.recSyncVariable(a,b,this.uniformTypes[a],a)},parseDefines:function(a){this.defines={},a=a.split("\n");for(var b=0;b<a.length;++b){var c=a[b].match(l);c&&3==c.length&&(this.defines[c[1]]=c[2])}},parseStructs:function(a){if(this.structTypes={},a=a.match(h))for(var b=0;b<a.length;++b){for(var c=a[b].match(i),d=c[1],c=c[2].match(j),e={},g=0;g<c.length;++g){var l=c[g].match(k),m=l[2],n=l[3],l=l[4],m=f[m]||m;l&&(l in this.defines&&(l=this.defines[l]),m=[m,parseInt(l,10)]),e[n]=m}this.structTypes[d]=e}},parseUniforms:function(a){this.uniformTypes={},a=a.split("\n");for(var b=0;b<a.length;++b){var c=a[b].match(g);if(c){var d=c[2],e=c[3],c=c[5],d=f[d]||d;c&&(c in this.defines&&(c=this.defines[c]),d=[d,parseInt(c,10)]),this.uniformTypes[e]=d}}},recSyncVariable:function(c,d,e,f){var g=this.gl;if(e){c=e instanceof Array;var h;c&&(h=e[1],e=e[0]);var i=this.locations[f];if(e in this.structTypes)if(g=this.structTypes[e],c)for(c=0;h>c&&c<d.length;++c){var j,i=f+"["+c+"].",k=d[c];for(j in g){if(!(j in k)){a("variable '"+f+"["+c+"]' ("+e+") has no field '"+j+"'");break}var l=g[j];this.recSyncVariable(j,k[j],l,i+j)}}else for(j in i=f+".",g){if(!(j in d)){a("variable '"+f+"' ("+e+") has no field '"+j+"'");break}l=g[j],this.recSyncVariable(j,d[j],l,i+j)}else switch(h=e,c&&(h+="v"),j="uniform"+h,h){case"2f":case"2i":"length"in d?g[j].call(g,i,d[0],d[1]):"x"in d&&"y"in d?g[j].call(g,i,d.x,d.y):"s"in d&&"t"in d?g[j].call(g,i,d.s,d.t):b("variable '"+f+"' is not valid for binding to vec2(). Use an Array, a {x,y} or a {s,t}.");break;case"3f":case"3i":"length"in d?g[j].call(g,i,d[0],d[1],d[2]):"x"in d&&"y"in d&&"z"in d?g[j].call(g,i,d.x,d.y,d.z):"s"in d&&"t"in d&&"p"in d?g[j].call(g,i,d.s,d.t,d.p):"r"in d&&"g"in d&&"b"in d?g[j].call(g,i,d.r,d.g,d.b):b("variable '"+f+"' is not valid for binding to vec3(). Use an Array, a {x,y,z}, a {r,g,b} or a {s,t,p}.");break;case"4f":case"4i":"length"in d?g[j].call(g,i,d[0],d[1],d[2],d[3]):"x"in d&&"y"in d&&"z"in d&&"w"in d?g[j].call(g,i,d.x,d.y,d.z,d.w):"s"in d&&"t"in d&&"p"in d&&"q"in d?g[j].call(g,i,d.s,d.t,d.p,d.q):"r"in d&&"g"in d&&"b"in d&&"a"in d?g[j].call(g,i,d.r,d.g,d.b,d.a):b("variable '"+f+"' is not valid for binding to vec4(). Use an Array, a {x,y,z,w}, a {r,g,b,a} or a {s,t,p,q}.");break;case"sampler2D":this.syncTexture(g,i,d,f);break;default:j in g?g[j].call(g,i,d):b("type '"+e+"' not found.")}}else a("variable '"+c+"' not found in your GLSL.")},syncTexture:function(a,b,c,d){var e=this.textureUnitForNames[d];e||(e=this.allocTexture(d)),a.activeTexture(a.TEXTURE0+e),(d=this.textureForTextureUnit[e])?a.texImage2D(a.TEXTURE_2D,0,a.RGBA,a.RGBA,a.UNSIGNED_BYTE,c):(d=a.createTexture(),a.bindTexture(a.TEXTURE_2D,d),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,!0),a.texImage2D(a.TEXTURE_2D,0,a.RGBA,a.RGBA,a.UNSIGNED_BYTE,c),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MAG_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE),a.uniform1i(b,e),this.textureForTextureUnit[e]=d)},allocTexture:function(a){var b=this.textureUnitCounter;return this.textureUnitForNames[a]=b,this.textureUnitCounter++,b},initUniformLocations:function(){this.locations={};for(var a in this.uniformTypes)this.recBindLocations(a,this.uniformTypes[a],a)},recBindLocations:function(a,b,c){a=b instanceof Array;var d;if(a&&(d=b[1],b=b[0]),b in this.structTypes)if(b=this.structTypes[b],a)for(a=0;d>a;++a){var e,f=c+"["+a+"].";for(e in b)this.recBindLocations(e,b[e],f+e)}else for(e in f=c+".",b)this.recBindLocations(e,b[e],f+e);else this.locations[c]=this.gl.getUniformLocation(this.program,c)},load:function(){var a=this.gl;this.program&&(a.deleteProgram(this.program),this.program=null),this.program=this.loadProgram([this.loadShader(this.vertex,a.VERTEX_SHADER),this.loadShader(this.fragment,a.FRAGMENT_SHADER)]),a.useProgram(this.program),this.initUniformLocations(),this.textureUnitForNames={},this.textureForTextureUnit={},this.textureUnitCounter=0},loadProgram:function(a){var b=this.gl,c=b.createProgram();if(a.forEach(function(a){b.attachShader(c,a)}),b.linkProgram(c),!b.getProgramParameter(c,b.LINK_STATUS))throw b.deleteProgram(c),Error(c+" "+b.getProgramInfoLog(c));return c},loadShader:function(a,c){var d=this.gl,e=d.createShader(c);if(d.shaderSource(e,a),d.compileShader(e),!d.getShaderParameter(e,d.COMPILE_STATUS)){var f=d.getShaderInfoLog(e),g=f.split(":"),h=parseInt(g[1],10),g=parseInt(g[2],10),i="";if(!isNaN(h)){for(var i="",j=0;h>j;++j)i+=" ";i="\n"+i+"^"}throw b(f+"\n"+a.split("\n")[g-1]+i),d.deleteShader(e),Error(e+" "+f)}return e}},Glsl.prototype={defines:null,start:function(){var a=this;if(a._stop=!1,a._running)return a;var b=a._running=d(),c=Date.now(),e=a._stopTime||0;return requestAnimationFrame(function f(){var d=Date.now()-c+(a._stopTime||0);if(a._stop||a._running!==b)a._running=0,a._stopTime=d;else{requestAnimationFrame(f,a.canvas);var g=d-e;e=d,a.update(d,g),a.render()}},a.canvas),a},stop:function(){return this._stop=!0,this},sync:function(){for(var a=0;a<arguments.length;++a)this.syncVariable(arguments[a]);return this},syncAll:function(){for(var a in this.variables)this.syncVariable(a);return this},set:function(a,b){return this.variables[a]=b,this.sync(a),this},setSize:function(a,b){this.canvas.width=a,this.canvas.height=b,this.syncResolution()},initGL:function(a){var b=this;this.canvas.addEventListener("webglcontextlost",function(a){a.preventDefault()},!1),this.canvas.addEventListener("webglcontextrestored",function(){b.running&&b.syncAll(),b.load()},!1),this.gl=this.prog.gl=this.getWebGLContext(this.canvas,a)},render:function(){this.gl.drawArrays(this.gl.TRIANGLES,0,6)},getWebGLContext:function(a,b){return c(a,b)},syncVariable:function(a){return this.prog.syncVariable(a,this.variables[a])},load:function(){var a=this.gl;this.prog.load();var b=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,b),b=a.getAttribLocation(this.prog.program,"position"),a.enableVertexAttribArray(b),a.vertexAttribPointer(b,2,a.FLOAT,!1,0,0),this.syncResolution()},syncResolution:function(){var a=this.gl,b=this.canvas.width,c=this.canvas.height;a.viewport(0,0,b,c),a.uniform2f(this.prog.locations.resolution,b,c),a.bufferData(a.ARRAY_BUFFER,new Float32Array([0,0,b,0,0,c,0,c,b,0,b,c]),a.STATIC_DRAW)}};for(var o=0,p=["ms","moz","webkit","o"],q=0;q<p.length&&!window.requestAnimationFrame;++q)window.requestAnimationFrame=window[p[q]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[p[q]+"CancelAnimationFrame"]||window[p[q]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(a){var b=(new Date).getTime(),c=Math.max(0,16-(b-o)),d=window.setTimeout(function(){a(b+c)},c);return o=b+c,d}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(a){clearTimeout(a)})}(),function(){function $(a){return document.getElementById(a)}function getScoresFromLocalStorage(){var a,b=localStorage.getItem("timelapse1");if(b)try{a=JSON.parse(b)}catch(c){}return a||(a=[]),a}function updateHighscores(){var a=getScoresFromLocalStorage();$scores.innerHTML="";for(var b=0;b<a.length;++b){var c=document.createElement("li");c.innerHTML=a[b],$scores.appendChild(c)}}function triggerFeedbackMessage(a,b,c){var d=document.createElement("div");$gf.appendChild(d),d.innerHTML=a,d.style.top=Math.floor(160-100*(Math.random()-.5))+"px",d.style.left=Math.floor(100*(Math.random()-.5))+"px",d.style.color=b,d.style.fontSize=Math.floor(10*c)/10+"em",setTimeout(function(){d.className="release"},500),setTimeout(function(){$gf.removeChild(d)},1500)}function displayRemainingTime(a){10>a&&($time.className="hl");var b=Math.floor(a/60),c=a%60;$time.innerHTML=(9>=b?"0":"")+b+":"+(9>=c?"0":"")+c}function incrScore(a){$score.className="incr",score+=a,$score.innerHTML=score,lastScoreChange=getGameTime()}function decrScore(a){$score.className="decr",score-=a,$score.innerHTML=score,lastScoreChange=getGameTime()}function updateScore(){var a=getGameTime(),b=smoothstep(.3,0,a-lastScoreChange);0===b&&($score.className="")}function clamp(a,b,c){return Math.min(Math.max(a,b),c)}function smoothstep(a,b,c){return c=clamp((c-a)/(b-a),0,1),c*c*(3-2*c)}function mix(a,b,c){return a*(1-c)+b*c}function getAbsoluteTime(){return audio.ctx.currentTime}function getGameTime(a){return(a||getAbsoluteTime())-pauseDuration}function getKickPercent(){var a=getGameTime(),b=audio.getCurrentKickTime(),c=audio.getKickInterval(),d=a-b,e=d-c;-c/2>e&&(e+=c);var f=2*e/c;return f}function action(){var a=getGameTime(),b=getKickPercent();Math.abs(b);var c=0,d=vars.bpm;if(INF>b)E.pub("bpmChange",-bpmScaleOnFailure),d*=1+bpmScaleOnFailure,c=0,triggerFeedbackMessage("TOO FAST...","#F00",1.6),decrScore(100);else if(b>SUP)E.pub("bpmChange",+bpmScaleOnFailure),d*=1-bpmScaleOnFailure,c=0,triggerFeedbackMessage("Miss","#F00",2.5),decrScore(100);else{var e=.5*d*b;d-=e,E.pub("bpmChange",-e),c=0>b?Math.max(0,1-b/INF):Math.max(0,1-b/SUP);for(var f=Math.floor(20*smoothstep(BPM_MIN,BPM_MAX,d)+80*Math.pow(c,2)),g=-1;g<scores.length&&scores[g+1]<f;)g++;f=Math.round(Math.pow(f,1.3)/2),-1!=g&&triggerFeedbackMessage(Math.random()<.2?scoreMsgs[g]:"+"+f,scoreColors[g],scoreSize[g]),incrScore(f)}d=Math.min(200,d),audio.kick(getAbsoluteTime(),1-c),glsl.set("successState",c),glsl.set("bpm",d),glsl.set("useraction",a),lastAction=a}function getTextForDeltaTick(a){if(a=Math.round(a),Math.random()*a<1)return null;var b=deltaticks.length-1;return a>b?deltaticks[b]:deltaticks[a]}function spaceup(){if(null!==dubstepEntered){var a,b,c,d=audio.getFloatTick(),e=d-dubstepEntered,f=smoothstep(dubstepStartAtTick,dubstepEndAtTick,d),g=10+40*f;if(e>1){var h=e-1;g+=100+100*Math.pow(h,.9),a=getTextForDeltaTick(h),b=scoreColors[Math.floor(h)]||"#F0F",c=Math.min(4,2+h/4)}else b="#000",c=2+2*f;g*=vars.bpm/100,g=Math.round(g),g>0&&(triggerFeedbackMessage(a||"+"+g,b,c),incrScore(g)),dubstepEntered=null,glsl.set("dubstepAction",!1),audio.setRepeater(audio.ctx.currentTime,0)}}function spacedown(){if(!intro&&!end)if(null===dubstepStartAtTick)action();else{var a=audio.getFloatTick();dubstepEntered=a,glsl.set("dubstepAction",!0),glsl.set("successState",1),audio.setRepeater(audio.ctx.currentTime,1)}}function introMessage(a){var b=Math.floor(a);currentI!==b&&(currentI=b,0==b?(overlay.className="v intro",message.innerHTML="Ready?"):4==b?(overlay.className="",message.innerHTML="",intro=!1,gameStartAt=getGameTime()):(3==b&&(overlay.className="v intro fadeout"),message.innerHTML=""+(4-b)))}function levelUp(){vars.lvl++,bpmScaleOnFailure=Math.min(.7,.1+vars.lvl/20)}function tickUpdate(a,b){intro&&0==a%4&&(introMessage(Math.floor(a/4)),audio.kick(b,0)),hasDubStep&&0==a%4&&audio.kick(b,0),a>0&&0==a%128&&levelUp()}function update(){if(glsl){var a=getAbsoluteTime(),b=getGameTime(a);if(audio.update(a,b),this.set("time",b),pulseOpeningStartTime&&(this.set("pulseOpenFrom",0),this.set("pulseOpenTo",smoothstep(pulseOpeningStartTime,pulseOpeningEndTime,b))),pulseClosingStartTime&&(this.set("pulseOpenFrom",smoothstep(pulseClosingStartTime,pulseClosingEndTime,b)),this.set("pulseOpenTo",1)),!end){getKickPercent(),audio.getCurrentKickTime();var c=audio.getKickInterval();if(!intro){null===dubstepStartAtTick&&b>vars.kick+c+c*SUP&&action(),null!==dubstepEntered&&null===dubstepStartAtTick&&(dubstepEntered=null,glsl.set("dubstepAction",!1));var d=TOTAL_TIME-Math.ceil(b-gameStartAt);d!==lastRemainingTime&&(lastRemainingTime=d,displayRemainingTime(d)),(vars.bpm<BPM_MIN||vars.bpm>BPM_MAX||0>=d)&&E.pub("gameover",0>=d)}}}}function start(){end||(overlay.className="",firstStart?(pauseDuration=audio.ctx.currentTime,firstStart=!1,audio.fadeIn(2)):audio.start(),glsl.start(),null!==stopAt&&(pauseDuration+=audio.ctx.currentTime-stopAt,stopAt=null))}function stop(){glsl.stop(),end||(message.innerHTML="Game Paused",overlay.className="v",audio.fadeOut(.5),stopAt=audio.ctx.currentTime,spaceIsDown&&(spaceup(),spaceIsDown=!1))}function init(){glsl=Glsl({canvas:canvas,fragment:frag,variables:vars,update:update}),window.onblur=stop,window.onfocus=start,E.sub("kick",function(a){glsl.set("kick",getGameTime(a))}),E.sub("tick",function(a){tickUpdate.apply(this,a)})}function onkeyup(a){32===a.which&&(a.preventDefault(),spaceIsDown&&!end&&spaceup(),spaceIsDown=!1)}function onkeydown(a){32===a.which&&(a.preventDefault(),spaceIsDown||!end&&spacedown(),spaceIsDown=!0)}function bindDoc(a,b){document.addEventListener(a,b)}function getCurrentTouch(a){for(var b=0;b<a.changedTouches.length;++b)if(a.changedTouches[b].identifier===identifier)return a.changedTouches[b]}function ontouchstart(a){if(a.preventDefault(),null===identifier){var b=a.changedTouches[0];identifier=b.identifier,spaceIsDown=!0,!end&&spacedown()}}function ontouchend(a){if(null!==identifier){var b=getCurrentTouch(a);b&&(identifier=null,spaceIsDown=!1,!end&&spaceup())}}function ontouchcancel(a){if(null!==identifier){var b=getCurrentTouch(a);b&&(identifier=null,spaceIsDown=!1,!end&&spaceup())}}function onPlay(a){playClicked||(playClicked=!0,a&&a.preventDefault(),$intro.style.display="none",init(),start())}var overlay=$("o"),message=$("m"),$score=$("s"),$gf=$("gf"),$time=$("t"),$play=$("p"),$intro=$("i"),$scores=$("hs");updateHighscores();var bpmScaleOnFailure=.1,BPM_MIN=30,BPM_MAX=160,TOTAL_TIME=60;displayRemainingTime(TOTAL_TIME);var glsl,gameStartAt,pulseOpeningStartTime,pulseOpeningEndTime,pulseClosingStartTime,pulseClosingEndTime,intro=!0,end=!1,score=0,dubstepStartAtTick=null,dubstepEndAtTick=null,hasDubStep=!1,vars={lvl:1,time:0,dubstepAction:!1,useraction:-1/0,kick:-1/0,kickSpeed:.2,bpm:50,successState:0,dubphase:!1,dubloading:0,pulseOpenFrom:0,pulseOpenTo:0},lastScoreChange=0;setInterval(updateScore,100);var E=function(a){return{pub:function(b,c,d,e){for(e=-1,d=[].concat(a[b]);d[++e];)d[e](c)},sub:function(b,c){(a[b]||(a[b]=[])).push(c)}}}({}),NOTES=function(){function a(a){return 440*Math.pow(2,(a-69)/12)}for(var b={},c="CcDdEFfGgAaB",d=0;8>d;++d)for(var e=0;12>e;++e)b[c[e]+d]=a(12*d+e);return b}(),audio=function(){function createGain(){return ctx.createGain()}function createOscillator(){return ctx.createOscillator()}function cancelScheduledValues(a,b){a.cancelScheduledValues(b)}function setValueAtTime(a,b,c){a.setValueAtTime(b,c)}function linearRampToValueAtTime(a,b,c){a.linearRampToValueAtTime(b,c)}function startNode(a,b,c,d){b=b||ctx.currentTime,c=c||0,d?a.start(b,c,d):a.start(b,c)}function envelope(a,b,c,d,e,f,g,h){var i=a.gain;cancelScheduledValues(i,0),setValueAtTime(i,0,b),linearRampToValueAtTime(i,c,b+e),linearRampToValueAtTime(i,c*g,b+e+f),setValueAtTime(i,c*g,b+e+f+d),linearRampToValueAtTime(i,0,b+e+f+d+h)}function OscGain(a){this.osc=createOscillator(),a&&(this.osc.type=a),this.out=this.gain=createGain(),this.osc.connect(this.gain)}function FM(){OscGain.call(this),this.mod=new OscGain,this.mod.out.connect(this.osc.frequency)}function Repeater(a,b,c){var d=createGain(),e=ctx.createDelay(c||2);e.delayTime.value=a||.1,d.connect(e);var f=createGain();f.gain.value=b||0,e.connect(f),f.connect(d),this.gain=d,this.delay=e,this.repeater=f,this.inp=this.out=d}function CrazyWob(){function a(a,b){d.push([a,b])}function b(a,b){e.push([a,b])}function c(a,b){f.push([a,b])}var d=this._fw=[],e=this._sw=[],f=this._vw=[],g=createGain(),h=createGain();h.gain.value=0,c(h.gain,1);var i=new OscGain("triangle");i.gain.gain.value=0,c(i.gain.gain,1),a(i.osc.frequency,1);var j=new OscGain("square");a(j.osc.frequency,2.03),a(j.gain.gain,1/3);var k=new OscGain("sawtooth");a(k.osc.frequency,.501),a(k.gain.gain,1);var l=new OscGain("sine");a(l.osc.frequency,.251),a(l.gain.gain,1),j.osc.detune.value=-7,k.osc.detune.value=-10,l.osc.detune.value=3,j.out.connect(k.gain.gain),k.out.connect(l.gain.gain),l.out.connect(i.osc.frequency);var m=ctx.createBiquadFilter();m.Q.value=2,m.frequency.value=500;var n=new OscGain("sine");b(n.osc.frequency,1),n.out.connect(m.frequency);var o=ctx.createBiquadFilter();o.type="highpass",o.Q.value=3,o.frequency.value=3e3;var p=new OscGain("sawtooth");p.gain.gain.value=3e3,b(p.osc.frequency,.5),p.out.connect(o.frequency),i.out.connect(h),h.connect(o),h.connect(m);var q=new OscGain("sine");b(q.osc.frequency,1),q.out.connect(h.gain),o.connect(g),m.connect(g),i.start(0),j.start(0),k.start(0),l.start(0),n.start(0),p.start(0),q.start(0),this.volume=h,this.osc=i,this.out=g}function Reverb(a){function b(a){for(var b=ctx.sampleRate,c=b*a,d=!1,e=2,f=ctx.createBuffer(2,c,b),h=f.getChannelData(0),i=f.getChannelData(1),j=0;c>j;j++){var k=d?c-j:j;h[j]=(2*Math.random()-1)*Math.pow(1-k/c,e),i[j]=(2*Math.random()-1)*Math.pow(1-k/c,e)}g.buffer=f}var c=createGain(),d=createGain(),e=createGain(),f=createGain(),g=ctx.createConvolver();g.connect(f),c.connect(g),c.connect(e),e.connect(d),f.connect(d),this.dry=e,this.wet=f,this.inp=c,this.out=d,b(a||1),this.mix(0)}function Kicker(a,b,c,d){OscGain.call(this),this.gain.gain.value=0,this.osc.frequency.value=a,this.freq=a||50,this.fall=d||0,this.attack=b||0,this.duration=c||0,this.volume=1}function Snare(a,b,c){var d=new Noise;d.filter.type="lowpass",d.filter.Q.value=5,d.gain.gain.value=0,this.noise=d,this.out=d.out,this.volume=a||1,this.freqFrom=b||800,this.freqTo=c||1e3,this.release=.3}function HiHat(a,b){var c=new Noise;c.filter.type="highpass",c.filter.frequency.value=15e3,c.filter.Q.value=10,c.gain.gain.value=0,this.hihat=c,this.out=this.hihat.out,this.volume=a||1,this.duration=b||0}function Noise(){for(var a=2*ctx.sampleRate,b=ctx.createBuffer(1,a,ctx.sampleRate),c=b.getChannelData(0),d=0;a>d;d++)c[d]=2*Math.random()-1;var e=ctx.createBufferSource();e.buffer=b,e.loop=!0;var f=createGain();e.connect(f);var g=ctx.createBiquadFilter();f.connect(g),g.type="lowpass",this.white=e,this.gain=f,this.out=this.filter=g}function Stereo(a,b){var c=ctx.createChannelMerger();if(a.inp&&b.inp){var d=createGain();d.connect(a.inp),d.connect(b.inp),this.inp=d}(a.out||a).connect(c,0,0),(b.out||b).connect(c,0,1),this.left=a,this.right=b,this.out=c}function applyArpeggio(a,b,c,d,e,f){f||(f=DELTAS);var g=f.length;cancelScheduledValues(a,0);for(var h=0,i=0;d>=h;h+=e,i=(i+1)%g)setValueAtTime(a,b*f[i],c+h)}function meloNote(a,b,c,d){var e=new FM,f=.3,g=.1;e.osc.type="triangle",e.osc.frequency.value=4*a,e.mod.osc.frequency.value=3*a,e.mod.osc.type="sine",e.out.connect(meloOut.inp),setTimeout(function(){e.out.disconnect(meloOut.inp)},1e3),startNode(e,b,0,1),c&&applyArpeggio(e.osc.frequency,4*a,b,f+g,.025),envelope(e.gain,b,.5,f,.01,.02,.6,.2),envelope(e.mod.gain,b,4*a*d,f,.05,.1,.6,.2)}function dubStepAnnounce(a,b,c){var d=createGain();d.connect(out);var e=createOscillator();e.frequency.value=10,e.connect(d.gain);var f=new FM,g=.3,h=200,i=150,j=100,k=80;f.osc.type="square",envelope(f.gain,a,.5,c,.03,.05,.3,.2),setValueAtTime(f.osc.frequency,h-b*i,a),linearRampToValueAtTime(f.osc.frequency,h+b*i,a+c),setValueAtTime(f.mod.osc.frequency,j-b*k,a),linearRampToValueAtTime(f.mod.osc.frequency,j+b*k,a+c-.2),setValueAtTime(f.mod.gain.gain,j+k,a),linearRampToValueAtTime(f.mod.gain.gain,j-k,a+c-.2),f.mod.osc.type="sine",f.out.connect(d),setTimeout(function(){f.out.disconnect(d)},Math.ceil(1e3*(c+g+.2))),startNode(f,a,0,1)}function tick(a,b){E.pub("tick",[a,b]),getGameTime(b);var c=risk();glsl.set("dubloading",smoothstep(74,90,a%128)),hasDubStep=null!==dubstepStartAtTick&&a>=dubstepStartAtTick;var d=87==a%128,e=127==a%128,f=!hasDubStep&&a>64&&32>a%64,g=64>a%128,h=null===dubstepStartAtTick,i=hasDubStep||a>16,j=null===dubstepStartAtTick&&2==a%4,k=!1,l=!1;if(d&&(dubstepStartAtTick=a+3,dubstepEndAtTick=a+40+3,pulseOpeningStartTime=getGameTime(b),pulseOpeningEndTime=pulseOpeningStartTime+3*getTickSpeed(),dubStepAnnounce(b,1,4*getTickSpeed()),k=!0,l=!0,glsl.set("dubphase",!0),triggerFeedbackMessage("FREESTYLE!","#FFF",3)),e&&(pulseClosingStartTime=getGameTime(b),pulseClosingEndTime=pulseClosingStartTime+3*getTickSpeed(),dubStepAnnounce(b,-1,4*getTickSpeed())),a===dubstepStartAtTick&&(wob.setVolume(b,1),wob.setSpeed(b,vars.bpm/60),wob.setNoteFreq(b,NOTES.C4),setValueAtTime(wobRepeater.repeater.gain,0,b),linearRampToValueAtTime(meloOut.gain.gain,0,b+1),pulseOpeningStartTime=pulseOpeningEndTime=null,glsl.set("pulseOpenFrom",0),glsl.set("pulseOpenTo",1)),a===dubstepEndAtTick&&(dubstepStartAtTick=null,wob.setVolume(b,0),audio.setRepeater(b,0),linearRampToValueAtTime(meloOut.gain.gain,meloVolume,b+2),glsl.set("dubphase",!1),pulseClosingStartTime=pulseClosingEndTime=null,glsl.set("pulseOpenFrom",0),glsl.set("pulseOpenTo",0)),hasDubStep&&(wob.setSpeed(b,Math.pow(2,1+Math.floor(a/4)%3)*vars.bpm/60),wob.setNoteFreq(b,(8>a%16?4:2)*dubMelo[Math.floor(a/2)%dubMelo.length]),k=0==a%2,l=!0),k){var m=new Kicker(200,.01,.2,.2);m.volume=.4,m.osc.type="square";var n=ctx.createBiquadFilter();n.frequency.value=300,n.Q.value=10,m.out.connect(n),n.connect(fatOut),setTimeout(function(){n.disconnect(fatOut.inp)},1e3),m.trigger(b)}if(l){var o=new Snare(.6,2e3,1e3);o.release=0,o.out.connect(fatOut),setTimeout(function(){o.out.disconnect(fatOut)},1e3),o.trigger(b)}if(h){bassFilter.frequency.value=3e3*smoothstep(16,48,a);var p=bassMelo[Math.floor(a/4)%4];bass.osc.frequency.value=2*p,bass.mod.osc.frequency.value=.5*p,bass.mod.gain.gain.value=.5*p+.5*c}if(f){var q=.4*c+.3*smoothstep(-1,1,Math.cos(Math.PI*a/16)),r=8>a%16?melo1:melo2,s=16>a%32?0:1,t=r[a%8]*(1<<s);meloNote(t,b,g,q)}if(i){var u=new HiHat(.2,.02*vars.bpm/100);u.out.connect(drumOut.inp),setTimeout(function(){u.out.disconnect(drumOut.inp)},1e3),u.trigger(b)}if(j){var o=new Snare(1,1e3,1400);o.out.connect(drumOut.inp),setTimeout(function(){o.out.disconnect(drumOut.inp)},1e3),o.trigger(b)}}function risk(){return smoothstep(1.2*BPM_MIN,BPM_MIN,vars.bpm)+smoothstep(.8*BPM_MAX,BPM_MAX,vars.bpm)}function update(a,b){for(var c,d=getTickSpeed();(c=lastTickTime+d)<b+scheduleAheadTime;){var e=c+(a-b);currentTick++,lastTickTime=c,tick(currentTick,e)}var f=risk();meloOut.repeater.gain.value=.1+.3*f,noise.gain.gain.value=1.2*f,reverb.mix(.3+.4*f)}function getFloatTick(){return currentTick+(getGameTime()-lastTickTime)/getTickSpeed()}function getTickSpeed(){return 60/(ticksPerBeat*vars.bpm)}function getCurrentKickTime(){return vars.kick}function getKickInterval(){return 4*getTickSpeed()}var ctx;ctx=new(window.AudioContext||window.webkitAudioContext);var ticksPerBeat=4,scheduleAheadTime=.1,lastTickTime=-60/(ticksPerBeat*vars.bpm),currentTick=-1;OscGain.prototype={start:function(a,b){startNode(this.osc,a,0,b)}},FM.prototype={start:function(a,b){startNode(this.osc,a,0,b),this.mod.start(a,b)}},CrazyWob.prototype={setVolume:function(a,b){this._vw.forEach(function(c){cancelScheduledValues(c[0],0),setValueAtTime(c[0],b*c[1],a)})},setSpeed:function(a,b){this._sw.forEach(function(c){cancelScheduledValues(c[0],0),setValueAtTime(c[0],b*c[1],a)})},setNoteFreq:function(a,b){this._fw.forEach(function(c){cancelScheduledValues(c[0],0),setValueAtTime(c[0],b*c[1],a)})}},Reverb.prototype={mix:function(a){this.wet.gain.value=a,this.dry.gain.value=1-a}},Kicker.prototype={start:function(a,b){startNode(this.osc,a,0,b)},trigger:function(a){var b=this.attack,c=this.attack+.06,d=.8,e=.1;this.start(a,this.duration+1),envelope(this.gain,a,this.volume,this.duration,b,c,d,e),setValueAtTime(this.osc.frequency,this.freq,a),linearRampToValueAtTime(this.osc.frequency,0,a+this.fall)}},Snare.prototype={trigger:function(a){this.noise.start(a,1),envelope(this.noise.gain,a,this.volume,.05,.01,.03,.25,this.release);var b=this.noise.filter.frequency;setValueAtTime(b,this.freqFrom,a),linearRampToValueAtTime(b,this.freqTo,a+.1)}},HiHat.prototype={trigger:function(a){this.hihat.start(a,1),envelope(this.hihat.gain,a,this.volume,this.duration,.01,.015,.2,this.duration)}},Noise.prototype={start:function(a,b){startNode(this.white,a,0,b)}};var out=createGain(),outCompressor=ctx.createDynamicsCompressor(),reverb=new Reverb(.5);out.gain.value=0,out.connect(reverb.inp),reverb.out.connect(outCompressor),outCompressor.connect(ctx.destination);var bassFilter=ctx.createBiquadFilter();bassFilter.frequency=0,bassFilter.connect(out);var bass=function(){var a=new FM;a.gain.gain.value=.3;var b=new Repeater(.08,.3);b.gain.gain.value=.5;var c=new Repeater(.05,.3);c.gain.gain.value=.8,a.out.connect(b.inp),a.out.connect(c.inp);var d=new Stereo(b,c);return d.out.connect(bassFilter),a}();bass.start(0);var wobRepeater=new Repeater;wobRepeater.out.connect(out);var wob=function(){var a=new CrazyWob,b=ctx.createDelay(.5);b.delayTime.value=.01,a.out.connect(b);var c=new Stereo(a,b);return c.out.connect(wobRepeater.inp),a}(),fatOut=createGain();fatOut.connect(out),fatOut.connect(wobRepeater.inp);var bpmOsc2mult=3,bpmNoiseMult=10,noiseBpmGain=createGain();noiseBpmGain.connect(out);var noiseBpm=new Noise;noiseBpm.out.connect(noiseBpmGain),noiseBpm.start(0),noiseBpm.gain.gain.value=.2,noiseBpm.filter.type="bandpass",noiseBpm.filter.Q.value=20,noiseBpm.filter.frequency.value=0;var bpmNoiseLfoMult=.05,bpmNoiseLfoPow=1.3,lfoBpm=createOscillator();lfoBpm.start(0);var lfoBpmGain=createGain();lfoBpmGain.gain.value=.8,lfoBpm.connect(lfoBpmGain),lfoBpmGain.connect(noiseBpmGain.gain);var osc2=new OscGain;osc2.type="sawtooth",osc2.osc.frequency.value=vars.bpm*bpmOsc2mult,osc2.osc.detune.value=5,osc2.gain.gain.value=.1,osc2.out.connect(out),osc2.start(0);var onBpmChange=function(a){var b=ctx.currentTime;setValueAtTime(bass.osc.detune,-200*a,b),linearRampToValueAtTime(bass.osc.detune,0,b+.2),setValueAtTime(osc2.osc.detune,-1e3*a,b),linearRampToValueAtTime(osc2.osc.detune,0,b+.2),setValueAtTime(osc2.osc.frequency,bpmOsc2mult*vars.bpm,b),setValueAtTime(osc2.osc.frequency,bpmOsc2mult*vars.bpm,b+getKickInterval()),setValueAtTime(noiseBpm.filter.frequency,bpmNoiseMult*vars.bpm,b),setValueAtTime(lfoBpm.frequency,Math.pow(bpmNoiseLfoMult*vars.bpm,bpmNoiseLfoPow),b)};E.sub("bpmChange",onBpmChange),onBpmChange(0);var noise=new Noise;noise.filter.frequency.value=180,noise.filter.Q.value=20,noise.gain.gain.value=0,noise.out.connect(out),noise.start(0);var drumOut=function(){var a=new Repeater(.05,.2),b=new Repeater(.08,.4);return b.gain.gain.value=.8,new Stereo(a,b)}();drumOut.out.connect(out);var meloOut=new Repeater,meloVolume=.5;meloOut.gain.gain.value=meloVolume,meloOut.delay.delayTime.value=.3,meloOut.out.connect(out);var melo1,melo2,bassMelo,dubMelo;with(NOTES)melo1=[E3,G3,D3,G3,E3,A3,C3,G3],melo2=[E3,B3,D3,G3,E3,C4,C3,D3],bassMelo=[G4,D4,F4,C4],dubMelo=[E3,G3,A3,E3,G3,a3,A3,E3,G3,A3,G3,E3];var DELTAS=[Math.pow(2,0),Math.pow(2,1),Math.pow(2,2)];return{ctx:ctx,update:update,getFloatTick:getFloatTick,getTickSpeed:getTickSpeed,getCurrentKickTime:getCurrentKickTime,getKickInterval:getKickInterval,kick:function(a,b){b=b*b*b;var c=mix(100,120,b),d=100*mix(.2,.3,b)/vars.bpm,e=new Kicker(c,.01,d,d);e.volume=1.5,e.osc.type="sine";var f=ctx.createBiquadFilter();f.frequency.value=mix(200,300,b),f.Q.value=10+10*b,e.out.connect(f),f.connect(drumOut.inp),setTimeout(function(){f.disconnect(drumOut.inp)},1e3),e.trigger(a);var g=new Snare(.5,1e3,10);g.out.connect(drumOut.inp),setTimeout(function(){g.out.disconnect(drumOut.inp)},1e3),g.trigger(a),E.pub("kick",a)},start:function(){var a=out.gain;cancelScheduledValues(a,0),setValueAtTime(a,1,ctx.currentTime)},stop:function(){var a=out.gain;cancelScheduledValues(a,0),setValueAtTime(a,0,ctx.currentTime)},fadeIn:function(a){var b=ctx.currentTime,c=out.gain;cancelScheduledValues(c,0),setValueAtTime(c,0,b),linearRampToValueAtTime(c,1,b+a)},fadeOut:function(a){var b=ctx.currentTime,c=out.gain;cancelScheduledValues(c,0),setValueAtTime(c,1,b),linearRampToValueAtTime(c,0,b+a)},setRepeater:function(a,b){setValueAtTime(wobRepeater.repeater.gain,0,a),setValueAtTime(wobRepeater.delay.delayTime,.5*Math.random()*Math.random(),a),linearRampToValueAtTime(wobRepeater.repeater.gain,.98*b,a+.01)}}}();A=audio;var pauseDuration=0,INF=-.4,SUP=.3,scores=[0,30,50,65,80],scoreSize=[1.5,2,2.5,3,3.5,6],scoreColors=["#f90","#fe0","#0df","#3f0","#f0f"],scoreMsgs=["Ok.","Nice.","Great!","Awesome!!","Marvelous!!!"],lastAction=0,dubstepEntered=null,deltaticks=["Awesome Solo!","Nice Shred!","Gnarly Groove!","Killer Riff!!","Wicked Shredding!!!"],currentI=-1,lastRemainingTime=null,frag=$("sh").innerHTML,canvas=$("v"),dpr=window.devicePixelRatio||1,w=canvas.width,h=canvas.height;canvas.width=dpr*w,canvas.height=dpr*h,canvas.style.width=w+"px",canvas.style.height=h+"px";var stopAt=null,firstStart=!0;E.sub("gameover",function(a){if(end=!0,overlay.className="v over",message.innerHTML=a?"Congratulations":"Game Over",$("fm").innerHTML="Your final score: "+score+'<br/><a href="./?skip">Restart</a>',setTimeout(stop,5e3),audio.fadeOut(5),score>0){var b=getScoresFromLocalStorage();b.push(score),b.sort(function(a,b){return b>a}),b=b.slice(0,5),localStorage.setItem("timelapse1",JSON.stringify(b)),updateHighscores()}});var spaceIsDown=!1;bindDoc("keyup",onkeyup),bindDoc("keydown",onkeydown);var identifier=null;bindDoc("touchstart",ontouchstart),bindDoc("touchend",ontouchend),bindDoc("touchcancel",ontouchcancel);var playClicked=!1;$play.addEventListener("click",onPlay,!1),$play.addEventListener("touchend",onPlay,!1),location.href.indexOf("skip")>-1?onPlay():$intro.style.display="block",message.innerHTML=""}();