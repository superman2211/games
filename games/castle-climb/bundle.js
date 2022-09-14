!function(A){function t(n){if(e[n])return e[n].exports;var i=e[n]={exports:{},id:n,loaded:!1};return A[n].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var e={};return t.m=A,t.c=e,t.p="",t(0)}([function(A,t,e){e(1),e(3),e(5),e(7),e(4),e(8),e(6),e(11),e(12),e(10),e(13),e(15),e(14),e(9),A.exports=e(2)},function(A,t,e){"use strict";e(2).Vector;t.MovementAnimation=function(A,t){var e=0,n=16,i=A.x===t.x&&A.y===t.y;this.beforeRendering=function(A){},this.afterRendering=function(A){e++},this.hasEnded=function(){return e===n},this.getPosition=function(){var o=e/(n-1),r=t.times(o).add(A.times(1-o));return i||(r=r.add(0,0,[0,.03,.07,.03][e%4])),r}},t.FightingAnimation=function(A){var t=0,e=16;this.beforeRendering=function(n){var i=Math.pow(7-Math.abs(7-t),2)/8;n.translate(A.lookingLeft?-i:i,-i),n.rotate(A.lookingLeft?-t/e/6:t/e/6)},this.afterRendering=function(A){A.rotate(0),A.pop(),t++},this.hasEnded=function(){return t===e},this.getPosition=function(){}},t.AnimatedLine=function(A){var t=0;this.render=function(e,n,i){t=t+(A-t)/12+1|0,e.drawLine("#fff",[n-t,i,n+t,i])}}},function(A,t){"use strict";function e(A,t,e){this.x=A,this.y=t,this.z=e}e.prototype.toString=function(){return""+[this.x,this.y,this.z]},e.prototype.clone=function(){return new e(this.x,this.y,this.z)},e.prototype.equals=function(A,t,e){return void 0===t?this.equals(A.x,A.y,A.z):this.x===A&&this.y===t&&this.z===e},e.prototype.add=function(A,t,n){return void 0===t?this.add(A.x,A.y,A.z):new e(this.x+A,this.y+t,this.z+n)},e.prototype.sub=function(A,t,n){return void 0===t?this.sub(A.x,A.y,A.z):new e(this.x-A,this.y-t,this.z-n)},e.prototype.diff=function(A,t,n){return void 0===t?this.diff(A.x,A.y,A.z):new e(Math.abs(this.x-A),Math.abs(this.y-t),Math.abs(this.z-n))},e.prototype.times=function(A){return new e(this.x*A,this.y*A,this.z*A)},t.Vector=e},function(A,t,e){"use strict";var n=e(4).MapContext,i=e(2).Vector;t.Cube=function(A,t,e){this.x=A,this.y=t,this.z=e,this.type="cube",this.render=function(A){this.z>0&&(A.drawPolygon3d("x",[0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0],new n(this,"x")),A.drawPolygon3d("y",[1,1,0,0,1,0,0,1,1,1,1,1],new n(this,"y"))),A.drawPolygon3d("z",[0,0,0,1,0,0,1,1,0,0,1,0],new n(this,"z"))}},t.Target=function(A,t,e){this.pos=new i(A,t,e),this.type="target",this.render=function(A){A.drawPolygon3d("rgba(137,247,254,.5)",[.2,.2,0,.8,.2,1,.8,.8,1]),A.drawPolygon3d("rgba(150,236,254,.5)",[.2,.2,0,.8,.8,1,.2,.8,1])}},t.Ramp=function(A,t,e,i){this.x=A,this.y=t,this.z=e,this.dir=i,this.type="ramp",this.render=function(A){"y"===this.dir?(A.drawPolygon3d("yz",[1,0,0,0,0,0,0,1,1,1,1,1],new n(this,"y")),A.drawPolygon3d("x",[1,0,0,1,1,1,1,0,1],new n(this,"x"))):(A.drawPolygon3d("xz",[0,1,0,0,0,0,1,0,1,1,1,1],new n(this,"x")),A.drawPolygon3d("y",[0,1,0,1,1,1,0,1,1],new n(this,"y")))}}},function(A,t){"use strict";t.MapContext=function(A,t){this.type="map",this.block=A,this.face=t},t.UnitContext=function(A){this.type="unit",this.unit=A}},function(A,t,e){"use strict";function n(A,t,e){A.translate(p.x,p.y),v&&A.rotate(v),A.beginPath(),A.moveTo(e[0],e[1]);for(var n=2;n<e.length;++n)A.lineTo(e[n],e[++n]);A.lineTo(e[n-1],e[n]),A.fillStyle=t,A.fill(),v&&A.rotate(-v),A.translate(-p.x,-p.y)}function i(A){var t;switch(A){case"x":return t=l.createRadialGradient(a/2+280-p.x,s/2+180-p.y,400,a/2+280-p.x,s/2+180-p.y,120),t.addColorStop(0,"#f5e7d3"),t.addColorStop(1,"#dfd2c0"),t;case"xz":return t=l.createRadialGradient(a/2+340-p.x,s/2-100-p.y,400,a/2+340-p.x,s/2-100-p.y,120),t.addColorStop(0,"#f9f2dc"),t.addColorStop(1,"#efe8d7"),t;case"y":return t=l.createRadialGradient(a/2-280-p.x,s/2+180-p.y,400,a/2-280-p.x,s/2+180-p.y,120),t.addColorStop(0,"#d9cbc4"),t.addColorStop(1,"#c4b8b1"),t;case"yz":return t=l.createRadialGradient(a/2-340-p.x,s/2-100-p.y,400,a/2-340-p.x,s/2-100-p.y,120),t.addColorStop(0,"#ebe4d5"),t.addColorStop(1,"#d1dbd0"),t;case"z":return t=l.createRadialGradient(a/2-p.x,s/2-200-p.y,140,a/2-p.x,s/2-200-p.y,200),t.addColorStop(0,"#fefee6"),t.addColorStop(1,"#ffffef"),t}}function o(A,t){var e=document.createElement("canvas"),n=e.getContext("2d");e.width=innerWidth,e.height=innerHeight;var i=n.createRadialGradient(innerWidth/2,innerHeight/2+100*A,1e3*A,innerWidth/2,innerHeight/2+100*A,200*A);i.addColorStop(0,"#000"),i.addColorStop(1,t?"#003a33":"#3a0033"),n.fillStyle=i,n.fillRect(0,0,innerWidth,innerHeight),document.body.style.background="url("+e.toDataURL("image/png")+")"}var r=e(6),a=1200,s=900,d=1,f=0,u=0,c=16,h=document.createElement("canvas"),l=h.getContext("2d");document.body.appendChild(h);var p,g=document.createElement("canvas"),m=g.getContext("2d"),y=[],v=0,w={},x=0;h.onclick=function(A){var t=(A.pageX-f)/d|0,e=(A.pageY-u)/d|0,n=m.getImageData(t,e,1,1).data;if(n[0]===(n[1]+n[2]&255)&&255===n[3]){var i=n[1]<<8|n[2];if(w[i]){var o={};for(var a in w[i])o[a]=w[i][a];o.event=A,r.emit("canvas-clicked",o)}}};var b=t.resize=window.onresize=function(){d=Math.min(window.innerWidth/a,window.innerHeight/s),f=(window.innerWidth-a*d)/2|0,u=(window.innerHeight-s*d)/2|0,h.style.width=(a*d|0)+"px",h.style.height=(s*d|0)+"px",h.style.left=f+"px",h.style.top=u+"px",o(d),t.drawBackground=o.bind(null,d),r.emit("canvas-resized",{width:a*d|0,height:s*d|0})};b(),t.reset=function(){h.width=g.width=a,h.height=g.height=s,w={},x=0,p={x:0,y:0}},t.drawLine=function(A,t){l.beginPath(),l.moveTo(t[0],t[1]);for(var e=2;e<t.length;++e)l.lineTo(t[e],t[++e]);l.lineTo(t[e-1],t[e]),l.strokeStyle=A,l.stroke()},t.drawPolygon=function(A,t,e){if(n(l,A,t),e){var i=x+=13;w[i]=e,A="rgb("+[(i>>8)+i&255,i>>8&255,255&i]+")",n(m,A,t)}},t.drawPolygon3d=function(A,t,e){var n=i(A);n&&(A=n);for(var o=[],r=0;r<t.length;r+=3)o.push(2*(t[r]-t[r+1])*c),o.push((t[r]+t[r+1]+2*t[r+2])*c);this.drawPolygon(A,o,e)},t.drawText=function(A,t,e,n,i){l.font=(n||24)+"px Trebuchet MS, Helvetica, sans-serif",l.fillStyle="#ccc",l.textAlign=i||"center",v&&l.rotate(v),l.fillText(A,p.x+t,p.y+e),v&&l.rotate(-v)},t.translate=function(A,t){p.x+=A,p.y+=t,y.push({x:A,y:t})},t.translate3d=function(A,t,e){return void 0===t?void this.translate3d(A.x,A.y,A.z):void this.translate(2*(A-t)*c,(A+t-2*e)*c)},t.rotate=function(A){v=A},t.pop=function(){var A=y.pop();p.x-=A.x,p.y-=A.y},t.getWidth=function(){return a},t.getHeight=function(){return s}},function(A,t){"use strict";var e={};t.on=function(A,t){e[A]||(e[A]=[]),e[A].push(t)},t.off=function(A,t){e[A]&&(e[A]=e[A].filter(function(A){return A!==t}))},t.emit=function(A,t){e[A]&&e[A].forEach(function(A){A(t)})}},function(A,t){t.units={climber:{life:18,damage:8},fighter:{life:24,damage:12,fallDamage:8},shadow:{life:24,damage:6}}},function(A,t,e){"use strict";function n(A){"N"===A.key&&(x=(x+1)%w.length)}function i(){for(var A=f.size.z;--A;)for(var t=f.size.x;t--;)l.translate3d(t,-1,A),l.drawPolygon3d("#cec1ba",[1,1,0,0,1,0,0,1,1,1,1,1],new y(new v(t,-1,A),"y")),l.pop();for(var A=f.size.z;--A;)for(var e=f.size.y;e--;)l.translate3d(-1,e,A),l.drawPolygon3d("#846076",[1,1,0,1,0,0,1,0,1,1,1,1],new y(new v(-1,e,A),"x")),l.pop()}function o(){l.reset(),l.drawText("edit mode",80,30),l.translate(80,50),w[x].render(l,f),l.pop(),l.translate(l.getWidth()/2,l.getHeight()-360),i(),f.render(l),l.pop()}function r(A){if(1===A.clipboardData.types.length&&"text/plain"===A.clipboardData.types[0]){var t=JSON.parse(A.clipboardData.getData("text/plain"));f=m.load(t.map),u=t.events,c=t.mode}}function a(A){if("unit"===A.type)return f.units=f.units.filter(function(t){return t!==A.unit}),void d();var t=A.block,e=w[x];if(event.shiftKey)return void(t.z>0&&f.isValid(t.x,t.y,t.z)&&(f.set(t.x,t.y,t.z,null),d()));var n=t.x+ +("x"===A.face),i=t.y+ +("y"===A.face),o=t.z+ +("z"===A.face);if(f.isValid(n,i,o)){var r=f.units.some(function(A){return A.pos.equals(n,i,o)});r||("cube"===e.type?f.set(n,i,o,new p.Cube(n,i,o)):"ramp"===e.type?f.set(n,i,o,new p.Ramp(n,i,o,e.dir)):"target"===e.type?f.target=new p.Target(n,i,o):["fighter","climber","shadow"].indexOf(e.type)>=0&&f.units.push(g.createUnit(e.type,n,i,o)),d())}}function s(A){z.style.width=(6*A.width/7|0)+"px",z.style.height=(A.height/4|0)+"px",z.style.right=((window.innerWidth-A.width)/2|0)+"px"}function d(){var A={map:""+f,events:u,mode:c};z.value=JSON.stringify(A)}var f,u,c,h=e(6),l=e(5),p=e(3),g=e(9),m=e(10).Map,y=e(4).MapContext,v=e(2).Vector,w=[new p.Cube(0,0,1),new p.Ramp(0,0,0,"x"),new p.Ramp(0,0,0,"y"),new g.Fighter(0,0,0),new g.Climber(0,0,0),new g.Shadow(0,0,0),new p.Target(0,0,0)],x=0,b=!1,z=document.querySelector("textarea");t.activate=function(A){f=m.load(A.map),u=A.events,c=A.mode,h.on("key-pressed",n),h.on("render",o),h.on("canvas-clicked",a),h.on("canvas-resized",s),z.style.display="block",z.onpaste=r,d(),b=!0,l.resize()},t.deactivate=function(){t.level={map:""+f,events:u,mode:c},h.off("key-pressed",n),h.off("render",o),h.off("canvas-clicked",a),h.off("canvas-resized",s),z.style.display="none",b=!1},t.isActive=function(){return b}},function(A,t,e){"use strict";var n=e(7).units,i=e(1),o=e(4).UnitContext,r=e(2).Vector,a={attack:function(A,t){var e=t.filter(function(t){var e=this.pos.diff(t.pos);if(e.x+e.y!==1)return!1;if(0===e.z)return!0;var n=e.x>0?"x":"y",i=A.get(this.pos.sub(0,0,1)),o=A.get(t.pos.sub(0,0,1));return 1===e.z&&i&&"ramp"===i.type&&i.type===n?!0:1===e.z&&o&&"ramp"===o.type&&o.type===n?!0:!1},this),n=e.filter(function(A){return"shadow"===this.type==("shadow"!==A.type)},this);if(n.length>0){n.sort(function(A,t){return A.life-t.life||A.x-t.x||A.y-t.y});var i=n.shift();return i.damageTaken+=this.damage,this.lookingLeft=this.pos.y<i.pos.y||this.pos.x>i.pos.x,!0}return!1},render:function(A,t){this.animation&&this.animation.beforeRendering(A),A.drawPolygon("rgba(141,164,182,0.5)",[-10,22,10,22,10,50,-10,50],new o(this)),A.drawPolygon("#46515a",[-12,20,12,20,12,22,-12,22]),A.drawPolygon("#46515a",[12,20,12,50,10,50,10,20]),A.drawPolygon("#46515a",[-12,20,-12,50,-10,50,-10,20]);var e=this.life/this.maxLife;A.drawPolygon(t[0],[-10,50-28*e,10,50-28*e,10,50,-10,50]),A.drawPolygon(t[1],[-10,50-20*e,10,50,-10,50]),this.lookingLeft?(A.drawPolygon(t[2],[-4,26,-4,32,-6,32,-6,26]),A.drawPolygon(t[2],[0,26,0,32,2,32,2,26])):(A.drawPolygon(t[2],[0,26,0,32,-2,32,-2,26]),A.drawPolygon(t[2],[4,26,4,32,6,32,6,26])),this.animation&&(this.animation.afterRendering(A),this.animation.hasEnded()&&(this.animation=null))}};t.Fighter=function(A,t,e){this.pos=new r(A,t,e),this.type="fighter",this.life=this.maxLife=n.fighter.life,this.damage=n.fighter.damage,this.damageTaken=0,this.fallDamageTaken=0,this.falling=!1,this.attack=a.attack,this.move=function(A,t){var e=A.get(this.pos.sub(0,0,1));if(!e)return this.animation=new i.MovementAnimation(A.getUnitRenderPosition(this.pos),A.getUnitRenderPosition(this.pos.sub(0,0,1))),this.pos=this.pos.sub(0,0,1),void(this.falling=!0);if(this.attack(A,t))return void(this.animation=new i.FightingAnimation(this));if(A.target&&!this.pos.equals(A.target.pos)){for(var n,o=A.getDirectionsForTarget(A.target.pos,!0),r=this.pos;r=o[r];)A.get(r.sub(0,0,1))&&(n=A.getDirectionsForTarget(r)[this.pos]||n);if(n){var a=t.some(function(A){return A.pos.equals(n)});a||(this.animation=new i.MovementAnimation(A.getUnitRenderPosition(this.pos),A.getUnitRenderPosition(n)),(n.x!==this.pos.x||n.y!==this.pos.y)&&(this.lookingLeft=n.x<this.pos.x||n.x>this.pos.x),this.pos=n)}}},this.render=function(A){this.falling&&A.rotate(.1),a.render.call(this,A,["#ee3796","#db0087","#000"]),this.falling&&A.rotate(0)},this.getRenderPosition=function(A){return this.animation&&this.animation.getPosition()||A.getUnitRenderPosition(this.pos)}},t.Climber=function(A,t,e){this.pos=new r(A,t,e),this.type="climber",this.life=this.maxLife=n.climber.life,this.damage=n.climber.damage,this.damageTaken=0,this.attack=a.attack,this.move=function(A,t){if(this.attack(A,t))return void(this.animation=new i.FightingAnimation(this));if(A.target&&!this.pos.equals(A.target.pos)){var e=A.getDirectionsForTarget(A.target.pos,!0),n=e[this.pos];if(n){var o=t.some(function(A){return A.pos.equals(n)});o||(this.animation=new i.MovementAnimation(A.getUnitRenderPosition(this.pos),A.getUnitRenderPosition(n)),(n.x!==this.pos.x||n.y!==this.pos.y)&&(this.lookingLeft=n.x<this.pos.x||n.x>this.pos.x),this.pos=n)}}},this.render=function(A){a.render.call(this,A,["#24ff78","#11c869","#000"])},this.getRenderPosition=function(A){return this.animation&&this.animation.getPosition()||A.getUnitRenderPosition(this.pos)}},t.Shadow=function(A,t,e){this.pos=new r(A,t,e),this.type="shadow",this.life=this.maxLife=n.shadow.life,this.damage=n.shadow.damage,this.damageTaken=0,this.attack=a.attack,this.move=function(A,t){this.attack(A,t)&&(this.animation=new i.FightingAnimation(this))},this.render=function(A){a.render.call(this,A,["#3a0033","#3a0033","#850075"])},this.getRenderPosition=function(A){return this.pos}},t.createUnit=function(A,e,n,i){var o={climber:t.Climber,fighter:t.Fighter,shadow:t.Shadow};return new o[A](e,n,i)}},function(A,t,e){"use strict";var n=e(3),i=e(9),o=e(2).Vector,r=0,a=1,s=2,d=3,f=0,u=1,c=2,h={climber:f,fighter:u,shadow:c},l=function(A){function t(A,t,n){if(!u(t)||A.equals(t))return!1;if(0===A.z||0===t.z)return!1;if(i[t.z][t.y][t.x])return!1;var o=i[A.z-1][A.y][A.x],r=i[t.z-1][t.y][t.x],a=A.x!==t.x?"x":A.y!==t.y?"y":"z";if(o&&r)return"cube"===o.type&&"ramp"===r.type?o[a]>r[a]?A.z<t.z:A.z===t.z:"ramp"===o.type&&"cube"===r.type&&a===o.dir?o[a]<r[a]?A.z>t.z:A.z===t.z:"ramp"===o.type&&"ramp"===r.type?a===o.dir&&a===r.dir:A.z===t.z;if(n){if("z"===a)return e(A.x,A.y,Math.min(A.z,t.z));if(!o&&r&&"ramp"===r.type)return a===r.dir&&A.z<t.z;if(!o&&r&&"cube"===r.type)return A.z===t.z;if(o&&"ramp"===o.type&&!r)return a===o.dir&&A.z>t.z;if(o&&"cube"===o.type&&!r)return A.z===t.z}return!1}function e(A,t,e){var n=[{x:1,y:0},{x:-1,y:0},{x:0,y:1},{x:0,y:-1}];return n.some(function(n){if(!u(A+n.x,t+n.y,e)||!u(A+n.x,t+n.y,e+1))return!1;var o=i[e][t+n.y][A+n.x];return o&&"cube"===o.type})}var i=[],f=new o(9,9,9);this.size=f,this.target=null,this.units=[],function(){A=A&&atob(A);for(var t=f.z;t--;){i[t]=[];for(var e=f.y;e--;){i[t][e]=[];for(var o=f.x;o--;)if(i[t][e][o]=null,0==t)i[t][e][o]=new n.Cube(o,e,t);else if(A){var r=((t-1)*f.y+e)*f.x+o,u=A.charCodeAt(r>>2)>>r%4*2&3;u===a?i[t][e][o]=new n.Cube(o,e,t):u===s?i[t][e][o]=new n.Ramp(o,e,t,"x"):u===d&&(i[t][e][o]=new n.Ramp(o,e,t,"y"))}}}}.call(this),this.get=function(A,t,e){return void 0===t?i[A.z]&&i[A.z][A.y]&&i[A.z][A.y][A.x]:i[e]&&i[e][t]&&i[e][t][A]},this.getTopBlockAt=function(A,t){for(var e=f.z;e--;)if(i[e][t][A])return i[e][t][A]};var u=this.isValid=function(A,t,e){return void 0===t?u(A.x,A.y,A.z):0>e||e>=f.z||0>t||t>=f.y||0>A||A>=f.x?!1:!0};this.set=function(A,t,e,n){i[e][t][A]=n},this.render=function(A,t){t=t||this.units,A.drawPolygon3d("y",[0,0,0,9,0,0,9,9,0,0,9,0]);for(var e in i)for(var n in i[e])for(var o in i[e][n])i[e][n][o]?(A.translate3d(+o,+n,+e),i[e][n][o].render(A),A.pop()):this.target&&this.target.pos.equals(+o,+n,+e)&&(A.translate3d(+o,+n,+e),this.target.render(A),A.pop()),t.forEach(function(t){var i=t.getRenderPosition(this);(i.x+.4|0)===+o&&(i.y+.4|0)===+n&&(i.z+.4|0)===+e&&(A.translate3d(i),t.render(A),A.pop())},this)},this.getDirectionsForTarget=function(A,t){var e={},n={},o=[{pos:A,distance:0}];for(e[A]=0;o.length>0;){var r=o.pop();this.getReachableNeighbors(r.pos,t).forEach(function(A){var t=r.distance+1;i[A.z][A.y][A.x]||e[A]<=t||(e[A]=t,n[A]=r.pos,o.push({pos:A,distance:t}))},this),o.sort(function(A,t){return t.distance-A.distance})}return n},this.getReachableNeighbors=function(A,e){for(var n=[],i=-1;2>i;i++)for(var o=-1;2>o;o++)for(var r=-1;2>r;r++){var a=A.add(r,o,i);0!==r&&0!==o||!t(A,a,e)||n.push(a)}return n},this.toString=function(){var A=[];for(var t in i)if(0!==+t)for(var e in i[t])for(var n in i[t][e]){var o=r;i[t][e][n]&&("cube"===i[t][e][n].type&&(o=a),"ramp"===i[t][e][n].type&&(o="x"===i[t][e][n].dir?s:d)),A.push(o)}for(var f="",u=0;u<A.length;u+=4){var c=(A[u]||0)|(A[u+1]||0)<<2|(A[u+2]||0)<<4|(A[u+3]||0)<<6;f+=String.fromCharCode(c)}var l=this.units.map(function(A){return""+[h[A.type],A.pos.x,A.pos.y,A.pos.z]},"");return[l.join(";"),this.target&&this.target.pos||"",btoa(f)].join(".")},this.getTopBlockAt=function(A,t){for(var e=f.z;e--;)if(i[e][t][A])return i[e][t][A]},this.getUnitRenderPosition=function(A){var t=this.get(A.sub(0,0,1));return t&&"ramp"===t.type?A.sub(0,0,.5):A}};l.load=function(A){var t=A.split("."),e=new l(t[2]);if(t[0]){var o=t[0].split(";");e.units=o.map(function(A){var t=A.split(",");return+t[0]===f?new i.Climber(+t[1],+t[2],+t[3]):+t[0]===u?new i.Fighter(+t[1],+t[2],+t[3]):new i.Shadow(+t[1],+t[2],+t[3])})}if(t[1]){var r=t[1].split(",");e.target=new n.Target(+r[0],+r[1],+r[2])}return e},t.Map=l},function(A,t,e){"use strict";function n(){return p?void 0:h%16===8?void i():void(h%16===0&&(z.forEach(function(A){v.emit("unit-at",A)}),l&&(r(),l=!1),z.forEach(function(A){A.life-=A.damageTaken,A.life=Math.max(A.life,0),A.damageTaken=0}),z=z.filter(function(A){return A.life<=0?(v.emit("unit-died"),!1):a(A)?!1:u.target&&A.pos.equals(u.target.pos)?(m="won",!1):!0}),z.sort(function(A,t){return A.type>t.type?-1:A.type<t.type?1:0}),z.forEach(function(A){A.move(u,z)}),m||z.some(function(A){return"shadow"!==A.type})||(m="lost"),m&&v.emit("level-"+m)))}function i(){z.forEach(function(A){A.falling&&(A.fallDamageTaken+=y.fighter.fallDamage,u.get(A.pos.sub(0,0,1))&&(A.life=Math.max(0,A.life-A.fallDamageTaken),A.fallDamageTaken=0,A.falling=!1))})}function o(){if(w.reset(),w.translate(w.getWidth()/2,w.getHeight()-360),u.render(w,z),w.pop(),p){var A=0;p.forEach(function(t){w.drawText(t,w.getWidth()/2,120+A),A+=32}),g.render(w,600,105+A),w.drawText("click to continue",w.getWidth()/2,130+A,18)}h++}function r(){var A="weird"===c?{climber:"climber",fighter:"shadow",shadow:"fighter"}:{climber:"fighter",fighter:"climber",shadow:"shadow"};z=z.map(function(t){var e=x.createUnit(A[t.type],t.pos.x,t.pos.y,t.pos.z);return e.animation=t.animation,e.life=t.life/t.maxLife*e.maxLife|0,e.lookingLeft=t.lookingLeft,e})}function a(A){return z.some(function(t){return t!==A&&t.pos.equals(A.pos)&&t.life>=A.life})}function s(A){p||" "!==A.key||(l=!0)}function d(A){p=!1}function f(A){p?p=!1:l=!0}var u,c,h,l,p,g,m,y=e(7).units,v=e(6),w=e(5),x=e(9),b=e(1),z=[];t.activate=function(A,t){m=null,u=A,c=t,h=0,l=!1,z=u.units.map(function(A){return x.createUnit(A.type,A.pos.x,A.pos.y,A.pos.z)}),v.on("key-pressed",s),v.on("clicked",d),v.on("tapped",f),v.on("update",n),v.on("render",o),v.emit("level-started")},t.deactivate=function(){v.off("key-pressed",s),v.off("clicked",d),v.off("tapped",f),v.off("update",n),v.off("render",o)},t.showMessage=function(A){g=new b.AnimatedLine(400),p=A},t.hideMessage=function(){p=null}},function(A,t,e){var n=e(13).start,i=e(15).start;window.menu?n():i()},function(A,t,e){"use strict";var n=e(5),i=e(6),o=e(3),r=e(9),a=e(14),s=e(1);t.start=function(){function A(){n.reset(),n.drawText("Castle Climb",600,100,40),t.render(n,600,115),n.drawText("by Rebecca",600,140,20),n.rotate(.55),n.drawText("Level",825,257,20),n.rotate(0),n.translate(n.getWidth()/2,n.getHeight()-360);for(var A=0;A<=a.getUnlockedLevel();A++){n.translate3d(1,1,A);var e=new o.Cube(0,A,1);e.render(n),n.drawText(A+1,-42,40,20,"right"),n.pop()}var i=r.createUnit("fighter",0,0,0);n.translate3d(1,1,A),i.render(n),n.pop(),n.pop()}var t=new s.AnimatedLine(250),e=30;!function d(){window.requestAnimationFrame(A),setTimeout(d,1e3/e)}(),i.on("canvas-clicked",function(A){a.setCurrentLevel(A.block.y),document.location.href="play.html"})}},function(A,t){"use strict";var e=localStorage.unlockedLevel||0,n=localStorage.currentLevel||0;t.getUnlockedLevel=function(){return e},t.unlockLevel=function(A){A>e&&(e=A,localStorage.unlockedLevel=A)},t.getCurrentLevel=function(){return n},t.setCurrentLevel=function(A){n=A,localStorage.currentLevel=A}},function(A,t,e){"use strict";var n=e(6),i=e(8),o=e(11),r=e(14),a=e(5);t.start=function(){function A(A){var t=d[A];if(!t)return!1;if(delete d[A],t.next)for(var e in t.next)d[e]=t.next[e];return o.showMessage(t.msg),!0}function t(){d={};for(var A in c[l].events)d[A]=c[l].events[A];f=h.load(c[l].map),u=c[l].mode||"default",a.drawBackground("weird"===u),o.activate(f,u)}function s(){o.activate(f,u)}var d,f,u,c=[{map:"1,7,7,1.2,2,3.VQFUBVAlQFUAdQEAAAAAAAAAAAAAAEAFABUAVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",events:{start:{msg:["Hi there, I’m glad you could join us but there isn’t anything for you to do right now.","Our tiny friend is perfectly capable of reaching the goal all by himself."]},"at:4,2,2":{msg:["...apart from the fact that he can’t climb walls in his current form.","Mind pressing space or tapping to help him out?"]},won:{msg:["Splendid! On to the next level."]}}},{map:"0,7,7,1;2,4,2,2.2,2,3.VQFUBVBVQlUAVQEAAAAAAAAAAAAAAEAFABUAVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",events:{start:{msg:["That guy looks dangerous but I'm sure our friend will avoid him."]},lost:{msg:["Looks like someone‘s hell-bent to fight but too weak in his current form.","Next time, press space or tap to switch back before fighting."]},won:{msg:["Right on! Remember: red is for fighting and green for climbing."]}}},{map:"2,4,2,2;2,2,5,2;0,2,7,1;2,2,2,3;1,8,3,1.0,0,4.VQVUFVBVQlUBVQVUFQADAAAAAABUAVAFQBUAVQAAAAAAAAAAAAAAAFAAQAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",events:{start:{msg:["These two have opposite colors. Pressing space reverses their roles.","Can you get one of them to the goal?"]},won:{msg:["Amazing!"]}}},{map:"2,3,0,3;2,3,3,3;2,3,7,3;2,1,8,3;2,0,2,4;2,6,8,2;2,6,5,2;2,6,2,2;0,8,7,1.0,0,4.VQlUVVBVQVUFVRVUVVBVQVUFVRVUAVAFQBUAVQBUAVAFQBUAVQCUAFAAQAEABQAUAFAAQAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",events:{start:{msg:["Sometimes it‘s best to avoid confrontation."]},lost:{msg:["Press enter or swipe to reset the level faster."]},won:{msg:["Impressive!"]}}},{map:"2,1,1,5;2,4,4,2;0,8,3,1;0,3,6,1.0,0,6.VQBUAVAFQBUAAAEAAAAAAAAAAABUAVAFQBUAVQAAAAAAAAAAAAAAAFAFQBUA1QCUAAAAAAAAAAAAAAAAQAAABAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",events:{start:{msg:["This is going to take some teamwork."]},lost:{msg:["The enemies can only attack one of ours at a time; use it to your advantage."]},won:{msg:["High five!"]}}},{map:"1,6,0,6;1,7,0,6;1,6,1,6;1,7,1,6;1,8,0,6;1,8,1,6;1,8,2,6;1,6,2,6;1,7,2,6;1,0,6,6;1,1,6,6;1,2,6,6;1,0,7,6;1,1,7,6;1,2,7,6;1,0,8,6;1,1,8,6;1,2,8,6;2,7,6,1;2,8,7,1;2,8,6,1;2,7,8,1;2,6,7,1;2,6,8,1;2,5,7,1;2,5,6,1;2,5,5,1;2,6,5,1;2,7,5,1;2,5,8,1;2,8,5,1;2,6,6,1.7,7,2.FVBVQFUBFQAAAAAAAFABQAUQFQBUQFUBVQVUAAAAAAAAQAUAFQBUAFABVQEUERABAAAAAAAAFQAUABABQAVUFVBVQAUAAAAAAABUAFABQAUAFVBVQFUBFQAAAAAAAFABQAUAFQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",events:{start:{msg:["The last one was too hard. Have some fun!"]},won:{msg:["Good times!"]}}},{map:"2,1,1,5;2,0,4,2;0,0,8,1;2,4,0,3;0,7,0,1.0,0,6.VRVUBVAVQFUAVQEMAAAAAAAAAABUFVAFQBUAVQAAAAAAAAAAAAAAAFAJQAUAFQAMAAAAAAAAAAAAAAAAQAUABQAMAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",events:{start:{msg:["I don‘t even know how to win this one."]},won:{msg:["Clever!"]}}},{map:"0,4,7,1;2,5,1,5;2,5,3,3;2,3,1,5;2,3,3,3;1,3,2,4;1,5,2,4;1,3,4,2;1,5,4,2.4,0,6.AAQAEABAAAABQAUAHQAAAAAAAAAAEABAAAABQAUAAAAAAAAAAAAAAABAAAABQAUAAAAAAAAAAAAAAAAAAEABQAUAAAAAAAAAAAAAAAAAAAAAQAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",mode:"weird",events:{start:{msg:["What‘s going on? Something‘s not right..."]},won:{msg:["o_O"]}}},{map:"0,4,7,1;1,0,2,1;1,1,2,1;1,2,0,1;1,2,1,1;2,5,0,1;2,1,4,1;2,0,5,1;2,5,1,1.0,0,6.BAAUAAAAAAAAAAAAAAAAAAAAAAAQAFAAAAAAAAAAAAAAAAAAAAAAAEAAQAEAAAAAAAAAAAAAAAAAAAAAAAEABQAAAAAAAAAAAAAAAAAAAAAABQAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",mode:"weird",events:{start:{msg:["Now these guys are blocking the way? *sigh*"]},won:{msg:["Good thinking!"]}}},{map:"2,1,4,5;2,3,4,5;2,4,1,5;2,4,3,5;1,4,2,3;1,2,4,3;0,8,8,1;2,0,5,2;2,1,5,2;2,2,5,2;2,3,5,2;2,4,5,2;2,5,5,2;2,5,4,2;2,5,3,2;2,5,2,2;2,5,1,2;2,5,0,2;1,7,4,1;1,7,2,1;1,7,0,1;1,4,7,1;1,2,7,1;1,0,7,1;0,8,5,1;1,4,4,8;1,4,2,8;1,4,0,8;1,0,4,8;1,2,4,8.2,2,7.ACUAFABQAkABVSVUFTAzAAAAAAAABAAQAEAAAAFUBQAAAAAAAAAAAAAQAEAAAAAABFAUAAAAAAAAAAAAAEAAAAEABAAQQFUAAAAAAAAAAAAAAAEAAAAQAAAAEQEAAAAAAAAAAABUBVAVQFUAVQFUBQAAAAAAAAAAABARAAAAAQEAABARAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",mode:"weird",events:{start:{msg:["Looks like this is the one. You can do it!"]},won:{msg:["You‘ve beaten all levels. Awesome!","Thank you for playing."]}}}],h=e(10).Map,l=r.getCurrentLevel(),p=!1;n.on("unit-at",function(t){A("at:"+t.pos)}),n.on("unit-died",function(t){A("death")}),n.on("level-started",function(){A("start")}),n.on("level-won",function(){if(!A("won")){if(o.deactivate(),!p){if(l++,l===c.length)return void(document.location.href="index.html");r.unlockLevel(l)}t()}}),n.on("level-lost",function(){A("lost")||(o.deactivate(),s())}),n.on("key-pressed",function(A){"E"===A.key&&(p=!0,i.isActive()?(i.deactivate(),c[l]=i.level,t()):(o.deactivate(),i.activate(c[l]))),27===A.code&&(document.location.href="index.html"),13===A.code&&(o.deactivate(),s())}),n.on("swiped",function(){o.deactivate(),s()}),t();var g=30;!function y(){n.emit("update"),window.requestAnimationFrame(function(){n.emit("render"),a.drawText("Level "+(+l+1),20,880,20,"left")}),setTimeout(y,1e3/g)}(),document.onkeydown=function(A){if(A.target===document.body){var t=String.fromCharCode(A.keyCode);n.emit("key-pressed",{key:t,code:A.keyCode})}},document.onmousedown=function(A){n.emit("clicked")};var m;document.ontouchstart=function(A){m={x:A.changedTouches.item(0).pageX,y:A.changedTouches.item(0).pageY},n.emit("tapped"),A.preventDefault()},document.ontouchend=function(A){if(A.preventDefault(),m){var t=A.changedTouches.item(0),e=Math.sqrt(Math.pow(m.x-t.pageX,2)+Math.pow(m.y-t.pageY,2));if(m=null,e>Math.min(innerWidth,innerHeight)/6)return void n.emit("swiped")}n.emit("tapped")}}}]);