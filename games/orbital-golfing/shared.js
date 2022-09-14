console.shared=new class{G_G=667428e-16;G_AU=1496e8;G_SCALE=75/1496e8;G_FRAME_MS=13.333;G_MASS_MIN=5*10**30;G_MASS_MAX=100*10**30;G_R_LOBBY_CREATE="lc";G_R_LOBBY_JOIN="lj";G_R_LOBBY_LEAVE="ll";G_R_LOBBY_START="ls";G_R_GAME_SET_ANGLE="ga";G_R_GAME_SHOOT="gs";G_R_GAME_PREV="gp";G_S_CONNECTED="1";G_S_LOBBIES_UPDATED="2";G_S_GAME_STARTED="3";G_S_GAME_COMPLETED="4";G_S_GAME_UPDATED="5";G_S_GAME_COLLISIONS="6";G_S_GAME_SET_ACTIVE_STATE="7";G_S_GAME_ROUND_COMPLETED="8";G_S_GAME_ROUND_STARTED="9";G_S_GAME_PLAYER_DISCONNECTED="10";normalize(t,s,_,i,e){return i+(t-s)*(e-i)/(_-s)}dist(t,s){return Math.sqrt(t**2+s**2)}collidesCir(t,s,_,i){return this.dist(t,s)<=_+i}toRadians(t){return Math.PI*t/180}createCollision(t,s){return[t.id,s?.id??""]}isInBounds(t,s,_,i,e){const{width:r,height:a}=e;return t-_>=-r&&t+_<=r&&s-i>=-a&&s+i<=a}getEntity(t,s){return t.entityMap[s]}getHeadingTowards(t,s,_,i){let e=i-s,r=_-t;const{sqrt:a,asin:l}=Math;let n=a(r*r+e*e),E=0;return E=i>=s&&_>=t?180*l(e/n)/Math.PI+90:i>=s&&_<t?180*l(e/-n)/Math.PI-90:i<s&&_>t?180*l(e/n)/Math.PI+90:180*l(-e/n)/Math.PI-90,E>=360&&(E=360-E),E<0&&(E=360+E),isNaN(E)?0:E}fromPx(t){return t/this.G_SCALE}applyGravity(t,s,_,i){const e=(t,s)=>{let{x:i,y:e,mass:r,r:a}=t,{x:l,y:n,mass:E,r:G}=s,o=l-i,h=n-e,M=Math.max(this.dist(o,h),.001),A=!!_&&this.collidesCir(o,h,a,G),S=this.G_G*r*E/M**2,c=Math.atan2(h,o);return{fx:Math.cos(c)*S,fy:Math.sin(c)*S,c:A}};let r=[],a=172800*i/this.G_FRAME_MS;for(let l=0;l<t.length;l++){let n=t[l];n.mark=!0;let E=0,G=0;for(let t=0;t<s.length;t++){let _=s[t];if(n===_)continue;let{fx:i,fy:a,c:l}=e(n,_);if(l){const t=this.createCollision(n,_);r.push(t)}else E+=i,G+=a}if(_)for(let t=0;t<_.length;t++){let s=_[t],{x:i,y:e,r:a,removed:l}=s;if(!l&&this.collidesCir(i-n.x,e-n.y,a,n.r)){const t=this.createCollision(n,s);r.push(t)}}n.vx+=E/n.mass*a+n.ax*i/this.G_FRAME_MS,n.vy+=G/n.mass*a+n.ay*i/this.G_FRAME_MS,n.x+=n.vx*a,n.y+=n.vy*a}return r}simulate(t,{nowDt:s}){let _=t;const i=t.players.map((s=>this.getEntity(t,s))).filter((t=>t.active)),e=t.planets.map((s=>this.getEntity(t,s))),r=t.flags.concat(t.coins).map((s=>this.getEntity(t,s)));t.collisions=this.applyGravity(i,e,r,s),i.forEach((s=>{if(!this.isInBounds(s.x,s.y,s.r,s.r,_)){const _=this.createCollision(s,"");t.collisions.push(_)}}))}};