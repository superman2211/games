var app=function(t){"use strict";function e(t,e){const i=document.createElement("canvas");return i.width=t,i.height=e,i}function i(t,i){const s=e(...t),a=s.getContext("2d");return a.lineWidth=1,a.strokeStyle="#000",i(a),s}function s(t,e){return Math.floor(t/e)}function a(t,e,i=1){return[t[0]+e[0]*i,t[1]+e[1]*i]}function h(t,e){return[t[0]-e[0],t[1]-e[1]]}function n(t){return Math.sqrt(t[0]*t[0]+t[1]*t[1])}function r(t,e){return n([t[0]-e[0],t[1]-e[1]])}function l(t,e,i){return[t[0]*(1-i)+i*e[0],t[1]*(1-i)+i*e[1]]}function o(t,e,i,s){return new(i||(i=Promise))(function(a,h){function n(t){try{l(s.next(t))}catch(t){h(t)}}function r(t){try{l(s.throw(t))}catch(t){h(t)}}function l(t){t.done?a(t.value):new i(function(e){e(t.value)}).then(n,r)}l((s=s.apply(t,e||[])).next())})}class c{constructor(t){this.damageOptimalRange=[1,20],this.damage=[4,5],this.damagePenaltyPerCell=100,this.accuracyPenaltyMax=20,this.accuracy=60,this.accuracyOptimalRange=[1,1],this.accuracyPenaltyPerCell=1,this.damagePenaltyMax=2,this.breach=0,this.name="Gun",t&&Object.assign(this,t)}damagePenalty(t){let e=0;return t<this.damageOptimalRange[0]&&(e=this.damageOptimalRange[0]-t),t>this.damageOptimalRange[1]&&(e=t-this.damageOptimalRange[1]),Math.min(this.damagePenaltyMax,this.damagePenaltyPerCell*e)}accuracyPenalty(t){let e=0;return t<this.accuracyOptimalRange[0]&&(e=this.accuracyOptimalRange[0]-t),t>this.accuracyOptimalRange[1]&&(e=t-this.accuracyOptimalRange[1]),Math.min(this.accuracyPenaltyMax,this.accuracyPenaltyPerCell*e)}averageDamage(t,e){let i=.5*(this.damage[1]+this.damage[0]);return i-=Math.max(0,e.armor-this.breach),i-=this.damagePenalty(t.dist(e)),Math.max(0,Math.round(10*i)/10)}damageRoll(t,e,i){let s=i()*(this.damage[1]-this.damage[0])+this.damage[0];return s-=Math.max(0,e.armor-this.breach),s-=this.damagePenalty(t.dist(e)),Math.max(0,Math.round(s))}}c.SNIPER=new c({name:"Sniper",damageOptimalRange:[1,30],damagePenaltyPerCell:.1,accuracyOptimalRange:[10,30],accuracyPenaltyPerCell:1,breach:1}),c.SHOTGUN=new c({name:"Shotgun",damage:[6,7],damageOptimalRange:[1,1],damagePenaltyMax:4,damagePenaltyPerCell:.3,accuracy:80,accuracyOptimalRange:[1,1],accuracyPenaltyPerCell:5,accuracyPenaltyMax:40});const d=24;var f=Object.freeze({sniper:"\nHits accurately and hard at long range, regardless of target's armor.\nHas extra defence, making him nearly untouchable when in cover. \nPretty helpess up close and has low HP.\n",assault:"\nPsycho with a shotgun. \nFast and even has a bit of armor to survive close quater fight a bit longer.\nCan deal a lot of damage, but only up close.\n",gunner:"\nEffective in any range and has extra hp.\nQuite slow.\n"});class u{constructor(t,e,i,s,a=new c){switch(this.terrain=t,this.kind=e,this.faction=i,this.cind=s,this.gun=a,this.move=5,this.maxHP=10,this.hp=this.maxHP,this.ap=2,this.armor=0,this.sight=20,this.def=0,e!=u.EYE&&t.chars.push(this),e){case u.GUNNER:this.move=4,this.hp=14;break;case u.ASSAULT:this.move=6,this.armor=1,this.gun=c.SHOTGUN;break;case u.SNIPER:this.hp=7,this.def=10,this.gun=c.SNIPER}this.maxHP=this.hp}static from(t,e,i){let s=u.letters.indexOf(e);return s>=0?new u(t,s,u.RED,i):(s=u.letters.indexOf(e.toLowerCase()))>=0?new u(t,s,u.BLUE,i):void 0}renderBody(t){let e=0,i=this.terrain.eye;if(i&&i.cell.fov&&i.faction!=this.faction){e=i.cell.fov.has(this.cind)||this.faction==i.faction?(0==this.cover(i)?1:0)+(0==i.cover(this)?2:0):4}this.terrain.hoveredTile||(e=0),t.fillStyle=["#fff","#faa","#afa","#ffa","#ccc"][e],t.strokeStyle=this.strokeColor,t.shadowColor="#444",t.shadowOffsetX=1,t.shadowOffsetY=1,t.shadowBlur=4,t.beginPath(),t.arc(.5*d,.5*d,.4*d,0,2*Math.PI),t.fill(),t.shadowColor="rgba(0,0,0,0)",t.lineWidth=2;for(let e=0;e<this.hp;e++){let i=Math.PI*(1-e/(this.maxHP-1)),a=(s=i,[Math.cos(s),Math.sin(s)]);t.beginPath(),t.moveTo((.5+.4*a[0])*d,(.5+.4*a[1])*d),t.lineTo((.5+.5*a[0])*d,(.5+.5*a[1])*d),t.stroke()}var s;t.lineWidth=1,t.fillStyle=this.strokeColor,t.textAlign="center",t.font=`bold ${d/2}pt Courier`,t.fillText(u.letters[this.kind].toUpperCase(),.5*d,.66*d),t.stroke()}get friend(){return 1==this.faction}render(t){if(this.animatedShot){t.lineWidth=4,t.beginPath();let i=function(t,e=1){let i=n(t)||1;return[t[0]/i*e,t[1]/i*e]}(h(this.animatedShot[1],this.animatedShot[0]),-20),s=l(this.animatedShot[0],this.animatedShot[1],this.animationStage),r=a(s,i);var e=t.createLinearGradient(r[0],r[1],s[0],s[1]);e.addColorStop(0,"rgba(0,0,0,0)"),e.addColorStop(1,"rgba(0,0,0,1)"),t.strokeStyle=e,t.moveTo(...r),t.lineTo(...s),t.stroke(),t.lineWidth=1,t.strokeStyle="#000"}t.save(),t.translate(...this.screenPos()),this.renderBody(t),this.ap>0&&(t.fillStyle=this.strokeColor,t.beginPath(),t.moveTo(1,1),t.lineTo(6,1),t.lineTo(1,6),t.closePath(),t.fill(),this.ap>1&&(t.beginPath(),t.moveTo(d-1,1),t.lineTo(d-6,1),t.lineTo(+d-1,6),t.closePath(),t.fill())),this.selected&&this.outline(t,Math.sin((new Date).getTime()/100)+1),this.hovered&&this.outline(t,1.5),t.restore()}pathTo(t){let e=[t];for(;!((t=this.dists[t][1])<0);)e.push(t);return e.reverse()}get strokeColor(){return this.friend?"#00a":"#a00"}outline(t,e=2){t.save(),t.shadowColor="rgba(0,0,0,0)",t.strokeStyle=this.strokeColor,t.lineWidth=e,t.beginPath(),t.arc(d/2,d/2,.4*d,0,2*Math.PI),t.stroke(),t.restore()}get hovered(){return this.terrain.hoveredChar==this}get selected(){return this.terrain.chosen==this}get x(){return this.cind%this.terrain.w}get y(){return s(this.cind,this.terrain.w)}to(t){return!(t==this.cind||!t)&&(this.animateWalk(t),delete this.cell.char,this.cind=t,this.cell.char=this,this.ap-=this.apCost(t),this.cell.goody&&(this.hp=this.maxHP,this.cell.goody=0),this.calculate(),this.cell.calculate(),!0)}animateWalk(t){this.animatedPath=this.pathTo(t),this.animationStage=.01}get cell(){return this.terrain.cells[this.cind]}reachable(t){return this.apCost(t)<=this.ap}calculateDists(){this.dists=this.terrain.calcDists(this.cind)}calculate(){this.calculateDists()}cover(t){return this.terrain.cover(this.cell,t.cell)}get at(){return this.terrain.fromCind(this.cind)}apCost(t){if(!this.dists)return Number.MAX_VALUE;let e=this.dists[t][0];return Math.ceil(e/this.move)}canFire(){return this.ap>0}hitChance(t){let e=this.cover(t);if(-1==e)return 0;let i=this.gun.accuracy,s=t.def;return Math.round(i-20*e-s-this.gun.accuracyPenalty(this.dist(t)))}die(){this.terrain.chars=this.terrain.chars.filter(t=>t.hp>0),delete this.cell.char,0==this.team.chars.length&&this.terrain.declareVictory(1-this.faction)}takeDamage(t){this.hp=Math.max(0,this.hp-t),this.hp<=0&&this.die(),this.terrain.resetCanvasCache(),this.terrain.game.updateInfo(this.terrain.hoveredChar?this.terrain.hoveredChar.info():null)}get team(){return this.terrain.teams[this.faction]}fire(t){if(!t)return!1;let e=t.char;if(!e)return!1;let i=this.hitChance(e);if(0==i)return!1;let s=this.terrain.game.rni()%100<i;this.ap=0;let a="MISS";if(s){let t=this.gun.damageRoll(this,e,this.terrain.game.rnf);e.takeDamage(t),e.hp<=0&&this.team.calculate(),a=`-${t}`}return this.shotText=a,this.animateShot(e.cind),!0}animateShot(t){this.animationStage=.01,this.animatedShot=[this.cind,t].map(t=>this.terrain.cindToCenter(t))}canDamage(t){return t&&this.faction!=t.faction&&this.cell.fov.has(t.cind)&&this.canFire()}bestPosition(){let t=this.terrain.teams[this.faction];this.calculate();let e,i=-100;for(let a in this.dists){let h=this.dists[a][0];if(h>this.move*this.ap)continue;let n=t.strength[a]-t.weakness[a]-.5*s(h,this.move)-.001*h;this.kind==u.ASSAULT&&(n-=.1*t.distance[a]),this.kind==u.SNIPER&&(n+=.1*t.distance[a]),n>i&&(i=n,e=Number(a))}return e}bestTarget(){let t=-100,e=null;for(let i of this.terrain.chars){if(i.faction==this.faction||i.hp<=0)continue;let s=this.hitChance(i)*this.gun.averageDamage(this,i);s>t&&(t=s,e=i.cell)}return e}think(){return o(this,void 0,void 0,function*(){this.to(this.bestPosition())&&(yield this.terrain.game.waitForAnim()),this.ap>0&&this.fire(this.bestTarget())&&(yield this.terrain.game.waitForAnim())})}update(t){this.animationStage&&(this.animatedPath&&(this.animationStage+=15*t*this.terrain.animationSpeed,this.animationStage>this.animatedPath.length&&this.endAnimation()),this.animatedShot&&(this.animationStage+=t*Math.min(10,1e3/r(...this.animatedShot)*this.terrain.animationSpeed),this.animationStage>1&&(this.terrain.game.text(this.animatedShot[1],this.shotText),this.endAnimation())))}endAnimation(){this.animationStage=0,delete this.animatedPath,delete this.animatedShot,this.terrain.game.blockingAnimationEnd&&(this.terrain.game.blockingAnimationEnd(),delete this.terrain.game.blockingAnimationEnd)}screenPos(){return this.animatedPath&&this.animatedPath[Math.floor(this.animationStage)+1]?l(this.terrain.cindToScreen(this.animatedPath[Math.floor(this.animationStage)]),this.terrain.cindToScreen(this.animatedPath[Math.floor(this.animationStage)+1]),this.animationStage-Math.floor(this.animationStage)):this.terrain.cindToScreen(this.cind)}dist(t){return r(this.at,t.at)}info(){let t=[,"gunner","assault","sniper"][this.kind];return`${t.toUpperCase()} <b>${this.hp}HP</b> ${f[t]}`}}u.EYE=-1,u.GUNNER=1,u.ASSAULT=2,u.SNIPER=3,u.RECON=4,u.MEDIC=5,u.HEAVY=6,u.COMMANDER=7,u.RED=0,u.BLUE=1,u.letters="`gasrmhc".split("");class m{constructor(t,e,i,s){this.terrain=t,this.cind=e,this.obstacle=i,this.char=s,this.fov=new Set,this.povs=new Set,this.peeked=new Set}renderThreats(t){let e=this.terrain,i=this.cind;t.strokeStyle="#080",t.lineWidth=4==e.teams[u.RED].strength[i]?3:1,t.beginPath(),t.moveTo(3.5,3.5),t.lineTo(3.5,3.5+3*e.teams[u.RED].strength[i]),t.stroke(),t.strokeStyle="#800",t.lineWidth=4==e.teams[u.RED].weakness[i]?3:1,t.beginPath(),t.moveTo(3.5,3.5),t.lineTo(3.5+3*e.teams[u.RED].weakness[i],3.5),t.stroke()}render(t){let e=this.terrain,i=this.cind,s=[,m.lowTile,m.highTile][this.obstacle],a=e.chosen,h=e.cells[e.hoveredTile];if(t.save(),t.shadowColor="rgba(0,0,0,0)",t.strokeStyle="#000",t.lineWidth=2,h&&h.fov&&!h.fov.has(i)&&e.hoveredTile&&(t.fillStyle="rgba(0,0,0,0.08)",t.fillRect(0,0,d,d)),a&&a.dists){t.lineWidth=1;let s=e.chosen.apCost(i);if(s>0&&s<=e.chosen.ap){let e=[,m.ap1Sprite,m.ap2Sprite][Math.floor(s)];e&&t.drawImage(e,0,0)}}t.restore(),this.goody&&(t.fillStyle="#080",t.fillRect(.35*d,0,.3*d,d),t.fillRect(0,.35*d,d,.3*d)),s&&t.drawImage(s,0,0)}calculatePovAnCover(){this.obstacle||(this.cover=this.terrain.obstacles(this.cind),this.povs=this.terrain.peekSides(this.cind))}calculateFov(){this.fov.clear();for(let t of this.povs)for(let e of this.terrain.calculateFov(t))this.fov.add(e)}calculate(){this.calculatePovAnCover(),this.calculateFov()}get at(){return this.terrain.fromCind(this.cind)}dist(t){return r(this.at,t.at)}seal(){this.obstacle=2,delete this.char,this.goody=0}}m.dashInterval=4,m.ap1Sprite=i([d,d],t=>{t.strokeStyle="#555",t.strokeRect(4.5,4.5,d-8,d-8)}),m.ap2Sprite=i([d,d],t=>{t.strokeStyle="#bbb",t.strokeRect(4.5,4.5,d-8,d-8)}),m.hiddenSprite=i([d,d],t=>{t.fillStyle="rgba(0,0,0,0.12)",t.fillRect(0,0,d,d)}),m.dashPattern=i([m.dashInterval,m.dashInterval],t=>{for(let e=0;e<m.dashInterval;e++)t.fillRect(e,e,1,1)}),m.crossPattern=i([3,3],t=>{for(let e=0;e<m.dashInterval;e++)t.fillRect(m.dashInterval-e-1,e,1,1),t.fillRect(e,e,1,1)}),m.highTile=i([d,d],t=>{t.fillStyle="#000",t.fillRect(0,0,d,d)}),m.lowTile=i([d,d],t=>{t.fillStyle="#fff",t.fillRect(0,0,d,d),t.fillStyle=t.createPattern(m.dashPattern,"repeat"),t.fillRect(0,0,d,d)}),m.emptyTile=i([1,1],t=>{});class g{constructor(t,e){this.terrain=t,this.faction=e,this.fov=new Set}calculate(){this.strength=[],this.weakness=[],this.distance=[];let t=this.terrain;this.fov.clear();for(let t of this.chars)for(let e of t.cell.fov)this.fov.add(e);let e=this.terrain.teams[1-this.faction];for(let i of this.fov){let s=this.terrain.cells[i];for(let a of e.chars){let e=a.cell,h=(4-t.cover(s,e))%5;this.strength[i]>h||(this.strength[i]=h);let n=(4-t.cover(e,s))%5;if(this.weakness[i]>n||(this.weakness[i]=n),h>0||n>0){let t=s.dist(e);this.distance[i]<=t||(this.distance[i]=t)}}}}think(){return o(this,void 0,void 0,function*(){this.calculate();for(let t of this.terrain.chars)t.faction==this.faction&&(yield t.think())})}get chars(){return this.terrain.chars.filter(t=>t.faction==this.faction)}}const v=0,p=1,y=2;class S{constructor(t,e){this.game=t,this.terrainString=e,this.canvasCacheOutdated=!1,this.mode=v,this.init(e)}init(t){let e=t.split("\n").map(t=>t.trim()).filter(t=>t.length>0);this.h=e.length,this.w=Math.max(...e.map(t=>t.length)),this.cells=[],this.chars=[],this.teams=[];for(let t=0;t<this.h;t++){this.victor=-1;let i=e[t];for(let e=0;e<this.w;e++){let s=e+t*this.w,a=i[e]||" ",h=new m(this,s,["+","#"].indexOf(a)+1,u.from(this,a,this.cind(e,t)));"*"==a&&(h.goody=1),this.cells[s]=h}}for(let t=0;t<this.w;t++)this.seal(t,0),this.seal(t,this.h-1);for(let t=0;t<this.h;t++)this.seal(0,t),this.seal(this.w-1,t);this.dir8Deltas=S.dirs8.map(t=>t[0]+t[1]*this.w),this.eye=new u(this,u.EYE,u.BLUE,0);for(let t of this.cells)t.obstacle||t.calculatePovAnCover();for(let t of this.cells)t.obstacle||t.calculate();for(let t=0;t<2;t++){let e=new g(this,t);this.teams[t]=e}this.updateCanvasCache()}seal(t,e){this.cells[this.cind(t,e)].seal()}update(t){for(let e of this.chars)e.update(t)}render(t){this.canvasCache&&!this.canvasCacheOutdated||this.updateCanvasCache(),t.clearRect(0,0,this.w*d,this.h*d),t.drawImage(this.canvasCache,0,0),this.renderPath(this.hoveredTile);for(let e of this.chars)e.render(t)}renderHovered(t){let e=this.cindToScreen(this.hoveredTile);t.strokeStyle="#888",t.lineWidth=1,t.strokeRect(e[0]+.5,e[1]+.5,d,d)}calcDists(t,e){isNaN(+t)&&(t=this.chosen.cind);let i=isNaN(+e)?t:this.cind(t,e),s=this.cells.map(t=>[Number.MAX_VALUE,-1]);s[i]=[0,-1];let a=[i];for(;a.length>0;){let t=a.shift(),e=s[t][0];for(let i=0;i<8;i++){let h=i%2,n=this.dir8Deltas[i]+t,r=!(!this.cells[n].obstacle&&!this.cells[n].char);if(h&&(this.cells[t+this.dir8Deltas[(i+1)%8]].obstacle||this.cells[t+this.dir8Deltas[(i+7)%8]].obstacle)&&(r=!0),!r){let i=h?1.414:1;s[n][0]>e+i&&(s[n]=[e+i,t],a.push(n))}}}return s}cind(t,e){return t+e*this.w}cindScreen(t,e){return this.cind(s(t,d),s(e,d))}cellAt(t,e){return this.cells[this.cind(t,e)]}cellAtScreen(t,e){return this.cells[this.cindScreen(t,e)]}click(t,e){let i=this.cindScreen(t,e);this.clickCell(i),this.resetCanvasCache()}canPlayAs(t){return t.faction==u.BLUE||this.mode!=v}clickCell(t){let e=this.cells[t];if(e){if(e.char){if(this.chosen&&this.chosen.faction==e.char.faction&&this.canPlayAs(e.char))return this.chosen=e.char,void this.chosen.calculate();if(this.chosen&&this.chosen.canDamage(e.char))return void this.chosen.fire(e);this.chosen==e.char?this.cancel():this.canPlayAs(e.char)&&(this.chosen=e.char),this.chosen&&this.chosen.calculate()}!e.char&&this.chosen&&this.chosen.reachable(t)&&(this.chosen.to(t),this.teams[u.RED].calculate()),this.eye.faction=this.chosen?this.chosen.faction:u.BLUE,this.resetCanvasCache()}}hover(t,e){let i=this.cindScreen(t,e);if(this.hoveredTile!=i){this.hoveredTile=i;let t=this.cells[i];if(!t)return;let e="default";(this.chosen&&this.chosen.reachable(i)||t.char)&&(e="pointer"),t.char?this.game.updateInfo(t.char.info()):this.game.updateInfo(),this.chosen&&this.chosen.canDamage(t.char)?(e="crosshair",this.game.updateTooltip(this.cindToCenter(t.cind),`${this.chosen.hitChance(t.char)}% ${this.chosen.gun.averageDamage(this.chosen,t.char).toFixed(1)}`)):this.game.updateTooltip(),document.body.style.cursor=e,0==t.obstacle&&(this.eye.cind=i,this.eye.calculate(),t?this.hoveredChar=t.char:delete this.hoveredChar,this.resetCanvasCache())}}fromCind(t){return[t%this.w,s(t,this.w)]}renderPath(t){let e=this.chosen,i=e?e.cell:null;if(isNaN(+t)||!e||!i||!e.dists||!e.dists[t]||-1==e.dists[t][1])return;if(!e.reachable(t))return;let s=this.game.ctx,a=this.cindToCenter(t);s.beginPath(),e.reachable(t)?s.arc(a[0],a[1],d/4,0,2*Math.PI):(s.moveTo(a[0]-d/4,a[1]-d/4),s.lineTo(a[0]+d/4,a[1]+d/4),s.stroke(),s.beginPath(),s.moveTo(a[0]-d/4,a[1]+d/4),s.lineTo(a[0]+d/4,a[1]-d/4)),s.stroke();let h=e.pathTo(t);s.beginPath(),s.moveTo(...this.cindToCenter(h[0]));for(let t of h)s.lineTo(...this.cindToCenter(t));s.stroke()}cindToScreen(t){return this.fromCind(t).map(t=>t*d)}cindToCenter(t){return this.fromCind(t).map(t=>(t+.5)*d)}calculateFov(t){let[e,i]=this.fromCind(t),s=new Set;return function(t,e,i,s){var a=function(h,n,r,l){if(!(n>=r)){for(var o=Math.round((h-.5)*n),c=Math.ceil((h+.5)*r-.5),d=o;d<=c;d++){var f=t+l.xx*d+l.xy*h,u=e+l.yx*d+l.yy*h;if(i(f,u))d>=h*n&&d<=h*r&&s(f,u);else if(d>=(h-.5)*n&&d-.5<=h*r&&s(f,u),a(h+1,n,(d-.5)/h,l),(n=(d+.5)/h)>=r)return}a(h+1,n,r,l)}},h=[{xx:1,xy:0,yx:0,yy:1},{xx:1,xy:0,yx:0,yy:-1},{xx:-1,xy:0,yx:0,yy:1},{xx:-1,xy:0,yx:0,yy:-1},{xx:0,xy:1,yx:1,yy:0},{xx:0,xy:1,yx:-1,yy:0},{xx:0,xy:-1,yx:1,yy:0},{xx:0,xy:-1,yx:-1,yy:0}];s(t,e);for(var n=0;n<8;n++)a(1,0,1,h[n])}(e,i,(t,e)=>this.cellAt(t,e).obstacle<2,(t,e)=>{for(let i of this.cells[this.cind(t,e)].peeked)s.add(i)}),s}resetCanvasCache(){this.canvasCacheOutdated=!0}updateCanvasCache(){this.canvasCache||(this.canvasCache=e(this.w*d,this.h*d));let t=this.canvasCache.getContext("2d");t.save(),t.clearRect(0,0,this.w*d,this.h*d),t.shadowBlur=4,t.shadowOffsetX=1,t.shadowOffsetY=1,t.shadowColor="#444";for(let e=0;e<this.cells.length;e++){let i=this.cells[e];t.save(),t.translate(...this.cindToScreen(e)),i.render(t),t.restore()}t.restore(),this.canvasCacheOutdated=!1}cancel(){delete this.chosen,this.resetCanvasCache()}peekSides(t){let e=new Set;for(let i=0;i<8;i+=2){let s=t+this.dir8Deltas[i];if(!this.cells[s].obstacle)continue;let a=[t+this.dir8Deltas[(i+6)%8],t+this.dir8Deltas[(i+7)%8]],h=[t+this.dir8Deltas[(i+2)%8],t+this.dir8Deltas[(i+1)%8]];for(let t of[a,h]){0==this.cells[t[0]].obstacle&&this.cells[t[1]].obstacle<=1&&e.add(t[0])}}e.add(t);for(let i of e)this.cells[i].peeked.add(t);return e}obstacles(t){let e=[];for(let i=0;i<8;i+=2){let s=t+this.dir8Deltas[i];e.push(this.cells[s].obstacle)}return e}cover(t,e){if(!t.fov.has(e.cind))return-1;let i=2;for(let n of t.povs){let t=0,r=h(e.at,this.fromCind(n));for(let i=0;i<4;i++){let h=e.cover[i];h<=t||(s=S.dirs8[2*i],a=r,s[0]*a[0]+s[1]*a[1])<-.001&&(t=h)}t<i&&(i=t)}var s,a;return i}endTurn(){return o(this,void 0,void 0,function*(){delete this.chosen,this.game.busy=!0,this.updateCanvasCache(),this.mode==y&&(yield this.teams[u.BLUE].think()),this.mode!=p&&(yield this.teams[u.RED].think());for(let t of this.chars)t.ap=2;this.updateCanvasCache(),this.game.busy=!1})}toggleMode(){return this.mode=(this.mode+1)%3,["[P+AI] 2P 2AI","P+AI [2P] 2AI","P+AI 2P [2AI]"][this.mode]}setMode(t){this.mode=t}get animationSpeed(){return this.game.busy?.5:1.5}declareVictory(t){this.victor=t}}S.dirs8=[[0,-1],[1,-1],[1,0],[1,1],[0,1],[-1,1],[-1,0],[-1,-1]];class C{constructor(t){this.game=t,t.fx.push(this)}update(t){return!1}render(t){}}class b extends C{constructor(t,e,i,s,a,h=[0,0]){super(t),this.text=e,this.color=i,this.lifeTime=s,this.at=a,this.vel=h,this.time=0}update(t){return this.time+=t,this.at=a(this.at,this.vel,t),this.time<this.lifeTime}render(t){t.save(),t.fillStyle=this.color,t.shadowColor="black",t.shadowBlur=1,t.shadowOffsetX=1,t.shadowOffsetY=1,t.font='12pt "Courier"',t.textAlign="center";let e=0,i=0;for(let s of this.text.split("|"))t.fillText(s.trim().substr(0,Math.floor(70*this.time)-i),this.at[0],this.at[1]+e),i+=s.length,e+=20;t.restore()}}class P{constructor(t,e,i){var s;this.canvas=t,this.updateUI=e,this.time=0,this.fx=[],this.busy=!1,this.rni=(s=1,(s%=2147483647)<=0&&(s+=2147483646),()=>s=16807*s%2147483647),this.rnf=(()=>this.rni()%1e9/1e9),this.ctx=t.getContext("2d"),this.ctx.imageSmoothingEnabled=!1,this.tooltip=document.getElementById("tooltip"),this.info=document.getElementById("info"),i||(i="\n      ##################################################\n      #      #  a      ++++# + #    ++#  s             #\n      # #    #  +         +#   #    ++#  ++++++++      #\n      #      +  +         +#   #    ++#  ++++++++      #\n      #S#    +  +         +# * #      #                #\n      #      #  +          #   #      #                #\n      # #    #             #   #     a#                #\n      #      #  +          ## ## ######                #\n      #             *                                  #\n      #                                                #\n      #A#    #             #s         #a               #\n      #      #  +          #          #                #\n      #A#    #  #      #a  #  ###    ++                #\n      #      #  #      #   #  #      ++       *        #\n      #G#    #  ########   #  #      +#                #\n      #      #             #          #                #\n      # #    ######  ###########  #####                #\n      #      #++++      ++ # +        #                #\n      #S#    #+            # +   ++   +                #\n      #      #            +#          #                #\n      #         ######g    #       +  #                #\n      #         ######g    #####  #####                #\n      #                    #   g      #      #        +#\n      #      #          +  #                         ++#\n      #G#    #+    *       #+++    +++#   #     #    ++#\n      #      #++      +    #          #g               #\n      # #    ######++###########++##########    ########\n      #                 S+                             #\n      #         +              A+                      #\n      ##################################################\n      "),this.terrain=new S(this,i),this.width=this.canvas.clientWidth,this.height=this.canvas.clientHeight,this.canvas.height=this.height,this.canvas.width=this.width}over(){return!1}update(t){this.lastLoopTimeStamp||(this.lastLoopTimeStamp=t-.001);let e=Math.min(.02,(t-this.lastLoopTimeStamp)/1e3);this.lastLoopTimeStamp=t,this.time+=e,this.terrain.update(e),this.fx=this.fx.filter(t=>t.update(e)),this.render(),this.over()&&this.updateUI()}render(){let t=this.ctx;t.clearRect(0,0,this.width,this.height),this.terrain.render(t);for(let e of this.fx)e.render(t)}text(t,e){let i=a(t,[0,-10]);console.log(i),new b(this,e,"#f00",3,i,[0,-10])}waitForAnim(){return new Promise(t=>{this.blockingAnimationEnd=(()=>t())})}updateTooltip(t,e){this.tooltip.style.display=t?"block":"none",t&&(this.tooltip.style.left=(t[0]+30+this.canvas.offsetLeft).toString(),this.tooltip.style.top=t[1].toString(),this.tooltip.innerHTML=e)}updateInfo(t){this.info.innerHTML=t||(this.terrain.victor>=0?`<H3 style="background:${["RED","BLUE"][this.terrain.victor]}">${["RED","BLUE"][this.terrain.victor]} side victorious</H3>`:"")}}let x,w,T,k,E,R,M,A=0,I=0;function D(t){(w=t)||x.getContext("2d").clearRect(0,0,1200,1200)}function L(){D(w)}function O(){for(let t=0;t<3;t++)t==I?k[t].classList.add("pressed"):k[t].classList.remove("pressed");for(let t=0;t<3;t++)t==A?(T[t].classList.add("pressed"),E[t].style.display="block"):(T[t].classList.remove("pressed"),E[t].style.display="none");M.innerHTML=0==A?"End Turn":"Apply",M.style.visibility=1==A?"hidden":"visible"}return window.onload=function(){x=document.getElementById("main"),M=document.getElementById("endb"),E=["main","help","editor"].map(t=>document.getElementById(t)),T=["playb","helpb","editb"].map(t=>document.getElementById(t));for(let t=0;t<3;t++)T[t].onclick=(e=>{A=t,O()});k=["pai","pp","aiai"].map(t=>document.getElementById(t));for(let t=0;t<3;t++)k[t].onclick=(e=>{I=t,w.terrain.setMode(I),O()});O(),D(new P(x,L)),M.onclick=(t=>{0==A&&w.terrain.endTurn(),2==A&&(w.terrain.init(R.value),A=0,O())}),R=document.getElementById("edit-area"),x.addEventListener("mousedown",t=>{2==t.button?(console.log(w.terrain),w.terrain.cancel()):w.terrain.click(t.offsetX,t.offsetY)}),x.addEventListener("mousemove",t=>{w.terrain.hover(t.offsetX,t.offsetY)}),x.addEventListener("mouseleave",t=>{delete w.terrain.hoveredTile,w.terrain.updateCanvasCache()}),x.addEventListener("mouseenter",t=>{}),x.addEventListener("contextmenu",function(t){t.preventDefault()},!1),document.addEventListener("keyup",t=>{}),document.addEventListener("keydown",t=>{}),function t(e){requestAnimationFrame(i=>{e(i),t(e)})}(t=>{w&&!w.over()&&w.update(t),0==A&&(M.style.visibility=w.busy?"hidden":"visible")}),D(w),console.log(w.terrain.terrainString),R.value=w.terrain.terrainString},t.mouseAt=void 0,t}({});
