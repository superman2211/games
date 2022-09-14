!function(){"use strict";function t(t,e){let n=-1;for(;++n<t.length;)e(t[n],n,t);return t}function e(t,e,n){let o=-1;for(;++o<t.length;)n=e(n,t[o],o,t);return n}function n(t,e=8){const n=Math.pow(10,e);return Math.round(t*n)/n}function o(t,e){const o=Math.sin(e),i=Math.cos(e);return[n(t[0]*i-t[1]*o),n(t[0]*o+t[1]*i)]}function i(t,e){const o=Math.sin(e),i=Math.cos(e),a=t[0];return t[0]=n(t[0]*i-t[1]*o),t[1]=n(a*o+t[1]*i),t}function a(t,e,n){return t[0]=e,t[1]=n,t}function s(t){const e=[Math.round(t[0]),Math.round(t[1]),Math.round(t[2])],n=[Math.abs(e[0]-t[0]),Math.abs(e[1]-t[1]),Math.abs(e[2]-t[2])];return n[0]>n[1]&&n[0]>n[2]?e[0]=-e[1]-e[2]:n[1]>n[2]?e[1]=-e[0]-e[2]:e[2]=-e[0]-e[1],e}function r(t,e){if(t.length<2)return t;const n=Math.floor(t.length/2);return rn(r(t.slice(0,n),e),r(t.slice(n),e),e)}function*l(t,e){let n=-1;for(;++n<e.length;){const o=bn(e[n]),i=Pn(t,o,500);for(;!i();)a(We,...q(un,t)),yield}}function*c(t){let e=null;for(se.target=null,I(fn),fn.push(...t);!e;){Ne();const{click:n,mousePosition:o}=Gt;1===n&&(se.target=Mn(o),j(t,se.target)&&(e=se.target)),yield}return I(fn),e}function*h(t){const e=Pn(We,q(un,t),2e3);for(;!e();)yield}function*d(t,e,n){const o=t(e,n);if(!o.length)return null;const i=yield*c(o);return Hn(i)}function*u([{abilities:{attack:{damage:t,range:e}}},,n]){const o=yield*d(En(Cn),n,e);if(!o)return yield*m(arguments[0]);Vn(o,t),yield*h(o[2])}function*g([{abilities:{defend:{range:t,duration:e,percentage:n}}},,o]){An(o,t).forEach(([,,,t])=>t.push({type:`shield`,duration:e,percentage:n})),yield}function*f([{type:t,abilities:{magic:{effect:e,range:n}}},,o]){const i=yield*d(En(Dn(null)),o,n);if(!i)return yield*m(arguments[0]);const[{type:a},,s,r]=i;r.push({type:t===a?`heal`:`damage`,effect:e}),yield*h(s)}function*p(t){const[{abilities:{attack:e,defend:n,magic:o}}]=t;let i=null;const a=[e.count&&[`Abuse (${e.count})`,()=>{--e.count,i=u}],n.count&&[`Pretend (${n.count})`,()=>{--n.count,i=g}],o.count&&[`Critique (${o.count})`,()=>{--o.count,i=f}]].filter(t=>t),s=Le.push(Qe(a))-1;for(;!i;)yield;Le.splice(s,1),yield*i(t)}function*m([{abilities:{move:{range:t}}},,e]){const n=wn(e),o=yield*c(xn(n,t));yield*h(e),yield*l(e,vn(n,o))}function*y(t,e){const[{abilities:{aiAttack:{damage:n}}}]=t,o=r(e,([,t])=>t)[0];Vn(o,n),yield*h(o[2]),yield}function*w(t,e){const[{abilities:{aiDefend:{duration:n,percentage:o}}}]=t,i=r(e,([,t])=>-t)[0],[,,a,s]=i;yield*h(a),s.push({type:`shield`,duration:n,percentage:o}),yield*h(i[2]),yield}function*M(t,e){const[{type:n,abilities:{aiMagic:{effect:o}}}]=t,i=r(e,([,t])=>-t)[0],[a,,s,l]=i;yield*h(s),l.push({type:n===a.type?`heal`:`damage`,effect:o}),yield*h(i[2]),yield}function*b([{abilities:{aiMove:{range:t,type:e}}},,n]){yield*h(n);const o=r(An(n,100),([,,t])=>e?Cn(t,1).length:An(t,1).length);o[0]&&(yield*l(n,Qn(n,o[0][2],t)))}function*v(t){const[{abilities:{aiAttack:{range:e}}},,n]=t,o=An(n,e);o.length?yield*y(t,o):yield*b(t),yield}function*k(t){const[{abilities:{aiMagic:{range:e}}},,n]=t,o=An(n,e);o.length?yield*M(t,o):yield*b(t),yield}function*x(t){const[{abilities:{aiAttack:{range:e}}},,n]=t,o=An(n,e),i=Cn(n,e);0===o.length?yield*b(t):i.length>o.length?yield*w(t,i):yield*y(t,o),yield}function*D(t){const[{abilities:{aiAttack:{range:e}}},,n]=t,o=An(n,e);0===o.length?yield*b(t):yield*y(t,o),yield}function*E(t){const[{abilities:{aiAttack:{range:e},aiMagic:{range:n}}},,o]=t,i=An(o,e),a=Cn(o,e),s=[...An(o,n),...Cn(o,n)];i.length>1?yield*y(t,i):a.length>2?yield*w(t,a):s.length>2?yield*M(t,[...i,...a]):yield*b(t),yield}function*A(t){const[{abilities:{aiAttack:{range:e}}},,n]=t,o=An(n,e).filter(([,,,t])=>t.find(({type:t})=>t===`damage`));o.length&&(yield*y(t,o)),yield}function*C(t){let e=0;for(;;){const n=t[e%t.length];++e;const[,o]=n;o>0&&(yield n)}}function H(t,e,n,o){function*i(){const{value:t}=c.next(),[e,,n]=t;se.target=wn(n);const o=Pn(We,q(Zn,n),2e3);for(;!o();)yield;if(r=null,e.type){let t;switch(e.name){case`Persecutor`:t=[l.move,l.item];break;default:t=Object.keys(e.abilities).map(t=>l[t])}const n=Le.push(Qe(t));for(;!r;)yield;Le.splice(n-1,1)}else r=l[e.name.toLowerCase()];yield*r(t),Kn(t);const i=!pn.find(([t,e])=>!t.type&&e>0),a=!pn.find(([t,e])=>t.type&&e>0);return i?1:a?2:0}const a=no(t,e,n,o);mn(a);let s=null,r=null;const l={move:[`Move`,()=>r=m],attack:[`Avenge`,()=>r=u],defend:[`Protect`,()=>r=g],magic:[`Forget`,()=>r=f],item:[`Use`,()=>r=p],swarmer:v,vamp:k,skeli:x,resentment:D,doubt:A,deceit:E,harm:E},c=C(pn);return{init:()=>{We[2]=340,Le.push(Nn,Bn),s=i(),se.logic=(()=>{const{value:a,done:r}=s.next();r&&0===a?s=i():r&&1===a?Oe(No):r&&2===a&&Oe(H(t,e,n,o))})},dismiss:()=>{}}}const P=(t,n)=>e(t,(t,e,o,i)=>S(t,n(e,o,i)),[]),B=(t,n=(t=>!!t))=>e(t,(t,e,o,i)=>n(e,o,i)?S(t,e):t,[]),j=(t,e)=>-1!==t.indexOf(e),L=t=>t.slice(0),I=t=>{for(;t.length;)t.pop();return t},S=(t,e,n=0)=>{const o=L(t);return o.splice(n,0,e),o},F=t=>t>0?1:t<0?-1:0,O=t=>t*t,T=t=>t&&"number"==typeof t,R=t=>t&&T(t[0])&&T(t[1]),q=(t,e)=>[t[0]+e[0],t[1]+e[1]],z=(t,e)=>(t[0]+=e[0],t[1]+=e[1],t),$=(t,e)=>[t[0]-e[0],t[1]-e[1]],_=(t,e)=>(t[0]-=e[0],t[1]-=e[1],t),W=(t,e)=>[t[0]*e,t[1]*e],U=(t,e)=>(t[0]*=e,t[1]*=e,t),X=t=>O(t[0])+O(t[1]),Y=t=>Math.sqrt(X(t)),G=t=>0===t[0]&&0===t[1]?[0,0]:U(t,1/Y(t)),N=(t,e)=>U(G(t),e),V=t=>{const e=[0,0];for(let n=t.length-1;n>=0;--n)z(e,t[n]);return e},J=(t,e)=>{const n=[];for(let o=0,i=t.length;o<i;o+=2)n[o]=t[o]+e[0],n[o+1]=t[o+1]+e[1];return n},K=(t,e)=>{for(let n=0,o=t.length;n<o;n+=2)t[n]+=e[0],t[n+1]+=e[1];return t},Q=(t,e)=>{const n=[];for(let o=0,i=t.length;o<i;o+=2)n[o]=t[o]-e[0],n[o+1]=t[o+1]-e[1];return n},Z=(t,e)=>{const n=[];for(let o=0,i=t.length;o<i;o+=2)n[o]=t[o]*e,n[o+1]=t[o+1]*e;return n},tt=(t,e)=>{const o=[],i=Math.sin(e),a=Math.cos(e);for(let e=0,s=t.length;e<s;e+=2)o[e]=n(t[e]*a-t[e+1]*i),o[e+1]=n(t[e]*i+t[e+1]*a);return o},et=(t,e,n)=>J(tt(Q(t,e),n),e),nt=(t,e)=>{for(let n=0;n<t.length;n+=2)e([t[n],t[n+1]],n/2,t)},ot=(t,e)=>{const n=[];for(let o=0;o<t.length;o+=2)n.push(...e([t[o],t[o+1]],o/2,t));return n},it=(t,e)=>{for(let n=0;n<t.length;n+=2)t.splice(n,2,...e([t[n],t[n+1]],n/2));return t},at=(t=(t=>!!t))=>e=>t(e),st=(at(t=>"Point"===t.shape),at(t=>"Circle"===t.shape),at(t=>"Rectangle"===t.shape),at(t=>"Polygon"===t.shape),(t,e)=>[-t/2,+e/2,-t/2,-e/2,+t/2,-e/2,+t/2,+e/2]),rt=(t,e=0,n=1,o=1,i="")=>({shape:"Rectangle",label:i,position:t,rotation:e,width:n,height:o,points:st(n,o)});let lt=document.createElement("canvas"),ct=lt.getContext("2d");const ht=(t,e)=>{lt=t;const n=t.getContext("2d",e);n&&(ct=n)},dt=[0,0],ut=t=>ct.translate(n(t[0],0),n(t[1],0)),gt=t=>ct.rotate(t),ft=(t,e,o)=>ct.clearRect(n(t[0],0),n(t[1],0),n(e,0),n(o,0)),pt=()=>ft(dt,lt.width,lt.height),mt=t=>ct.moveTo(n(t[0],0),n(t[1],0)),yt=t=>ct.lineTo(n(t[0],0),n(t[1],0)),wt=(t,e)=>ct.quadraticCurveTo(n(e[0],0),n(e[1],0),n(t[0],0),n(t[1],0)),Mt=(t,e,o,i,a)=>ct.arc(n(t[0],0),n(t[1],0),e,o,i,a),bt=(t,e,o)=>ct.rect(n(t[0],0),n(t[1],0),n(e,0),n(o,0)),vt=(t,e=0)=>{const n=[t[0],t[1]],o=Q(t,n);ct.save(),ut(n),gt(e),mt(dt),nt(o,yt),ct.restore()},kt=(t,e,n=0)=>{const o=[e[e.length-2],e[e.length-1]];ct.save(),ut(t),gt(n),mt(o),nt(e,yt),ct.restore()},xt=(t,e,n=0)=>{const o=ot(e,(t,e,n)=>U(z(n[2*e-2]?[n[2*e-2],n[2*e-1]]:[n[n.length-2],n[n.length-1]],t),.5));ct.save(),ut(t),gt(n),mt([o[0],o[1]]);let i=0;for(;(i+=2)<=9;)wt(o[i]?[o[i],o[i+1]]:[o[0],o[1]],[e[i-2],e[i-1]]);ct.restore()},Dt=(t,e,o,i=0)=>{ct.save(),ut(t),gt(i),bt([-e/2,-o/2],n(e,0),n(o,0)),ct.restore()},Et=(t,e=100,n=0,o=0,i=2*Math.PI,a=!1)=>{ct.save(),ut(t),gt(n),Mt(dt,e,o,i,a),ct.restore()},At=t=>(e,...n)=>{ct.save(),ct.beginPath(),ct.fillStyle=e,t(...n),ct.fill(),ct.restore()},Ct=t=>(e,...n)=>{ct.save(),ct.beginPath(),ct.strokeStyle=e.style||"",ct.lineWidth=e.thickness||1,t(...n),ct.stroke(),ct.restore()},Ht=At(kt),Pt=At(xt),Bt=At(Dt),jt=(At(vt),At(Et),Ct(kt),Ct(xt)),Lt=Ct(Dt),It=(Ct(vt),Ct(Et),(t,e,o,i=0)=>{if(ct.save(),ct.fillStyle=t.style||"",ct.font=t.font||ct.font,ct.textAlign=t.textAlign||ct.textAlign,ct.textBaseline=t.textBaseline||ct.textBaseline,gt(i),t.horizontalAlign){const{width:t}=ct.measureText(o);ut([-t/2,0])}ct.fillText(o,n(e[0],0),n(e[1],0),t.maxWidth),ct.restore()}),St=document.querySelector(`canvas`);ht(St,{alpha:!1}),ct.imageSmoothingEnabled=!1;const Ft=160,Ot=192;let Tt=St.offsetWidth,Rt=St.offsetHeight,qt=1,zt=1;St.width=Ft,St.height=Ot;const $t=()=>{const{top:t,left:e,width:n,height:o}=St.getBoundingClientRect();Tt=e,Rt=t,qt=Ft/n,zt=Ot/o};$t(),document.addEventListener(`DOMContentLoaded`,$t),window.addEventListener(`resize`,$t);`👩🏼‍🌾`,`👮🏿‍`,`🕵🏽`,`👨🏻‍🎤`,`👺`,`🌬️`,`🎭`,`🐉`,`🦂`,`🦇`,`👻`,`☠️`,`🌲`,`🌳`,`☁️`,`⛰️`,`🌷`;const _t=`👉🏻`,Wt=(`🍵`,`💎`),Ut=`🖤`,Xt=`💗`,Yt=(`🌱`,{38:`up`,40:`down`,37:`left`,39:`right`,87:`w`,65:`a`,83:`s`,68:`d`,32:`space`,13:`return`}),Gt={up:0,down:0,left:0,right:0,w:0,a:0,s:0,d:0,space:0,return:0,mousePosition:null,click:null},Nt=(t,e=1)=>{const n=Yt[t];return!n||0!==e&&2===Gt[n]||(Gt[n]=e),Gt[n]};document.body.onkeyup=(({keyCode:t})=>Nt(t,0)),document.body.onkeydown=(({keyCode:t})=>Nt(t,1));const Vt=()=>{const t=Object.keys(Gt);let e=-1;for(;++e<t.length;)1===Gt[t[e]]?Gt[t[e]]=2:Gt[t[e]]=Gt[t[e]]};document.body.onmousedown=(()=>Gt.click=1),document.body.onmouseup=(()=>Gt.click=0);const Jt=({clientX:t,clientY:e,touches:n})=>n?[n[0].clientX,n[0].clientY]:[t,e];document.body.onmousemove=(t=>{const e=_(Jt(t),[Tt,Rt]);e[0]*=qt,e[1]*=zt,Gt.mousePosition=e});const Kt=t=>()=>{const e=[0,0];return(Gt.up||Gt.w)&&++e[1],(Gt.down||Gt.s)&&--e[1],(Gt.left||Gt.a)&&--e[0],(Gt.right||Gt.d)&&++e[0],N(e,t)},Qt=`#fff`,Zt=(`#00f`,`Arial Black, Gadget, sans-serif`,`"Lucida Console", Monaco, monospace`,`24px Arial Black, Gadget, sans-serif`,`12px "Lucida Console", Monaco, monospace`),te={font:`6px mono`},ee={style:Qt,font:`10px mono`},ne={style:Qt},oe={style:Qt,thickness:2},ie=[0,-1],ae=(t,e,n,o=0)=>{Bt("#00f",q(t,ie),e,n*(12*1.1)+o),Lt(oe,q(t,ie),e,n*(12*1.1)+o)},se={dialog:[],position:[-545,700],target:null,logic:null,miasma:-550},re=t=>t&&"number"==typeof t,le=[0,0];class ce{constructor(){this.apply=(t=>Object.assign(Object.create(null),t,{position:[...this.position],rotation:this.rotation})),this.position=le,this.rotation=0,this.saved_positions=[],this.saved_rotations=[]}save(){this.saved_positions.push([this.position[0],this.position[1]]),this.saved_rotations.push(this.rotation)}restore(){if(this.saved_positions.length>0){const t=this.saved_positions.pop();R(t)&&(this.position[0]=t[0],this.position[1]=t[1]);const e=this.saved_rotations.pop();re(e)&&(this.rotation=e)}}}const he=(t,e)=>F((e[2]-e[0])*(t[1]-e[1])-(e[3]-e[1])*(t[0]-e[0])),de=(t,e,n)=>X($(t,e))<=O(n),ue=(t,e,n,o)=>Math.abs(t[0]-e[0])<=n/2&&Math.abs(t[1]-e[1])<=o/2,ge=(t,e)=>{let n=0,o=e.length,i=0,a=0;for(;;){if(i=n===o-2?0:n+2,-1===(a=he(t,[e[n],e[n+1],e[i],e[i+1]])))return!1;if((n+=2)>o-2)break}return!0},fe=(t,e,n,o,i)=>ue(t,n,o,i)||de(n,t,e)||O(t[0]-Math.max(n[0],Math.min(t[0],n[0]+o)))+O(t[1]-Math.max(n[1],Math.min(t[1],n[1]+i)))<O(e),pe=(t,e,n,o,i,a)=>!(Math.abs(o[0]-t[0])>e/2+i/2||Math.abs(o[1]-t[1])>n/2+a/2),me=(t,e,n,o)=>{if(ge(t,o)||ge(n,e))return!0;const i=Math.max(e.length,o.length);for(let t=0;t<i;t+=2)if(t<e.length&&ge([e[t],e[t+1]],o)||t<o.length&&ge([o[t],o[t+1]],e))return!0;return!1},ye=new Map,we=new Map,Me=new Map;let be=rt([0,0],0,window.innerWidth,window.innerHeight,"window");window.onresize=(()=>Object.assign(be,rt([0,0],0,window.innerWidth,window.innerHeight,"window")));const ve=((t=be)=>e=>{const{geometry:n={shape:null}}=e;switch(n.shape){case"Circle":return fe(n.position,n.radius,t.position,t.width,t.height);case"Rectangle":return pe(n.position,n.width,n.height,t.position,t.width,t.height);case"Polygon":return me(n.position,K(et(n.points,[0,0],n.rotation),n.position),t.position,K(et(t.points,[0,0],t.rotation),t.position));default:return!0}})(be),ke=e=>n=>{const{geometry:i,children:a,render:s,interact:r}=n;ct.save(),e.save(),i&&(ut(i.position),z(e.position,o(i.position,e.rotation)),gt(i.rotation),e.rotation+=i.rotation),ct.save(),s&&(!i||ve(e.apply(i)))&&s(n),ct.restore(),a&&t(a,ke(e)),r&&(r.onMouseDown?ye.set(n,[n,i&&e.apply(i),r.onMouseDown]):ye.delete(n),r.onMouseMove?we.set(n,[n,i&&e.apply(i),r.onMouseMove]):we.delete(n),r.onMouseUp?Me.set(n,[n,i&&e.apply(i),r.onMouseUp]):Me.delete(n)),ct.restore(),e.restore()},xe="ontouchstart"in window,De=t=>at(t=>!!t.clientX)(t)?[t.clientX,t.clientY]:[t.touches[0].clientX,t.touches[0].clientY],Ee=t=>e=>{switch(e.shape){case"Circle":return de(t,e.position,e.radius);case"Rectangle":return ue(t,e.position,e.width,e.height);case"Polygon":return ge(t,K(et(e.points,[0,0],e.rotation),e.position));default:return!1}};let Ae=0,Ce=0,He=1,Pe=1;const Be=()=>{const{top:t,left:e,width:n,height:o}=lt.getBoundingClientRect();Ae=e,Ce=t,He=lt.width/n,Pe=lt.height/o};Be(),document.addEventListener("DOMContentLoaded",Be),window.addEventListener("resize",Be);const je=e=>n=>{if(e.size){const o=_(De(n),[Ae,Ce]);o[0]*=He,o[1]*=Pe;const i=Ee(o);t(B([...e.values()],([t,e])=>i(e)),([t,e,n])=>n(t,o))}},Le=[],Ie=()=>{for(;Le.length;)Le.pop()},Se=((t,e)=>(ht(t),t.addEventListener(xe?"ontouchstart":"mousedown",je(ye)),t.addEventListener(xe?"ontouchmove":"mousemove",je(we)),t.addEventListener(xe?"ontouchend":"mouseup",je(Me)),()=>{ye.clear(),we.clear(),Me.clear(),ke(new ce)(e)}))(St,{geometry:rt([St.width/2,St.height/2],0,St.width,St.height),children:Le,render({geometry:t}){t.position[0]=St.width/2,t.position[1]=St.height/2,t.width=St.width,t.height=St.height,t.points=st(t.width,t.height)}});let Fe;const Oe=t=>{Ie(),t.init(),Fe&&Fe.dismiss(),Fe=t};let Te=null,Re=0;const qe=Ft-2,ze=qe-8,$e=(t,e,n)=>{const o=[];e=e.toUpperCase(),t.textBaseline=`top`,t.font=`12px monospace`;const i=e.split(` `);let a=``,s=0,r=0;for(const[e,l]of i.entries()){const i=`${a+l} `,c=t.measureText(i).width;if(r+i.length>n)return c>ze?(o.push([-ze/2,-29+s,a]),r+=a.length,o.push([-ze/2,-29+s+12*1.1,l.substr(0,n-r)])):o.push([-ze/2,-29+s,i.substr(0,n-r)]),o;c>ze&&e>0?(o.push([-ze/2,-29+s,a]),r+=a.length,a=`${l} `,s+=12*1.1):a=i}return o.push([-ze/2,-29+s,a]),o},_e={geometry:rt([0,Ot/2-33],0,qe,66),render:({geometry:t})=>{const[e]=se.dialog;if(!e)return;if(typeof e==`function`)return se.dialog.shift()();Te||(Te=Date.now()),Re=(Date.now()-Te)/50|0,ae([0,0],t.width,0,t.height);const[n,o]=e,i=$e(ct,n,Re);let a=0;if(o){const[t,e]=o,{width:n}=ct.measureText(e),i=n+16+8,s=-qe/2+n;ae([s,-37],i,1,8),ct.font=`12px monospace`,It(ne,[s-6+8-i/2,-45.6],t),It(ne,[s-6+8-i/2+16,-45.6],e),a=12*1.1*.33}i.forEach(([t,e,n])=>{It(ne,[t,e+a],n)}),1!==Gt.space&&1!==Gt.click||(Re<n.length?Te=1:(se.dialog.shift(),Te=null))}},We=[0,0,240],Ue=t=>{const[e,n]=$(t,We),o=We[2],i=n+500;let a,s=e+n*-e/(n+500)+Ft/2;return i<0?(a=Ot+o*n/i,s=e):i>0?a=Ot-o*n/i:(a=Ot,s=e),[s,a,Math.pow(500+n,2)+Math.pow(-e,2)]},Xe=t=>Ue(t).slice(0,2),Ye=([t,e])=>{const n=500/(-We[2]/(e-Ot)-1);return z([-(Ft*n+500*Ft+-2*t*n+-2*t*500)/1e3,n],We)},Ge=Kt(3),Ne=()=>z(We,Ge()),Ve=[];let Je=-1,Ke=-1;for(;++Je<9;){const t=Math.abs(Je-4),e=9-t;for(;++Ke<e;)((t,e)=>{const n=st(2*e,2*e),o=J(n,t);Ve.push({position:t,radius:e,getBase:()=>ot(o,Xe),getShoreLine:e=>it(K(Z(n,e),t),Xe),collision:(n,o=1)=>de(n,t,e*o)})})([100*(Je-5),1e3+100*(t/2+Ke-5)],75+50*Math.random());Ke=0}const Qe=t=>{let e=Ft/3;const n=12*1.1*t.length+4;let o=Ft/2-e/2-1;const i=Ot/2-n/2;let a=0;const s=[];for(const[o,[i,r]]of t.entries()){const t=i.toUpperCase(),{width:l}=ct.measureText(t);e=Math.max(e,l+8),s.push({geometry:rt([-e/2+4,-n/2+12*1.1+o*(12*1.1)-2],0,e,12*1.1),render(){It(ne,[0,0],t),a===o&&It({},[-13,0],_t)},interact:{onMouseDown:r,onMouseMove(){a=o}}})}for(const t of s)t.geometry.position[0]=-e/2+4;return o=Ft/2-e/2-1,{geometry:rt([o,i],0,e,n),children:s,render(){ae([0,0],e,0,n),1===Gt.down&&a<t.length-1?a++:1===Gt.up&&a>0&&a--,1!==Gt.space&&1!==Gt.return||t[a][1]()}}},Ze=[[0,1,-1],[1,0,-1],[1,-1,0],[-1,1,0],[0,-1,1],[-1,0,1]],tn=t=>([e,n])=>{const o=(t.length-1)/2,i=n+o,a=e+o+Math.min(0,i-o);return t[i]?t[i][a]:null},en=t=>[Math.sqrt(3)*(t[0]+t[1]/2),1.5*t[1]],nn=t=>{const[e,n]=t,o=[0,0,0];return o[0]=e*Math.sqrt(3)/3-n/3,o[1]=2*n/3,o[2]=-(o[0]+o[1]),s(o)},on=t=>[t[0],t[1],-t[0]-t[1]],an=(t,e)=>(Math.abs(t[0]-e[0])+Math.abs(t[1]-e[1])+Math.abs(t[2]-e[2]))/2,sn=t=>e=>n=>tn(t)([e[0]+n[0],e[1]+n[1]]),rn=(t,e,n)=>{const o=[];for(;t.length&&e.length;)(n(t[0])||0)<=(n(e[0])||0)?o.push(t.shift()||t[0]):o.push(e.shift()||e[0]);for(;t.length;)o.push(t.shift()||t[0]);for(;e.length;)o.push(e.shift()||e[0]);return o},ln=(t,e=Date.now()%t)=>()=>Math.min((Date.now()+e)%t/t,1),cn=(t,e)=>{const n=Date.now();let o=0;const i=ln(t,e);return()=>Date.now()-n<t?o=Math.max(o,i()):1},hn=t=>t<.5?8*t*t*t*t:1-8*--t*t*t*t;var dn={child:{name:`Child`,emoji:"👩🏼‍🌾",type:!0,maxHealth:40,abilities:{move:{range:3},magic:{range:4,effect:20,duration:3}}},avenger:{name:`Avenger`,emoji:"👨🏻‍🎤",type:!0,maxHealth:80,abilities:{move:{range:3},attack:{name:`Avenge`,range:1,damage:25}}},protector:{name:`Protector`,emoji:"👮🏿‍",type:!0,maxHealth:100,abilities:{move:{range:2},defend:{range:1,duration:1,percentage:.8}}},persecutor:{name:`Persecutor`,emoji:"🕵🏽",type:!0,maxHealth:60,abilities:{move:{range:5},attack:{count:10,range:4,damage:30},defend:{count:10,range:3,percentage:.5,duration:3},magic:{count:10,range:1,effect:50,duration:1},reset:{count:3}}},swarmer:{name:`Swarmer`,emoji:"🦂",type:!1,maxHealth:20,abilities:{aiMove:{type:!0,range:3},aiAttack:{range:1,damage:5}}},vamp:{name:`Vamp`,emoji:"🦇",type:!1,maxHealth:20,abilities:{aiMove:{type:!1,range:5},aiMagic:{range:1,duration:1,effect:5}}},skeli:{name:`Skeli`,emoji:"☠️",type:!1,maxHealth:30,abilities:{aiMove:{type:!1,range:5},aiAttack:{range:1,damage:10},aiDefend:{range:1,duration:1,percentage:.25}}},resentment:{name:`Resentment`,emoji:"👺",isBoss:!0,type:!1,maxHealth:60,abilities:{aiMove:{type:!1,range:5},aiAttack:{range:1,damage:40}}},doubt:{name:`Doubt`,emoji:"🌬️",isBoss:!0,type:!1,maxHealth:60,abilities:{aiAttack:{range:10,damage:10}}},deceit:{name:`Deceit`,emoji:"🎭",isBoss:!0,type:!1,maxHealth:60,abilities:{aiMove:{type:!0,range:3},aiAttack:{range:1,damage:10},aiMagic:{range:3,effect:10,duration:3},aiDefend:{range:2,duration:2,percentage:.25}}},harm:{name:`Harm`,emoji:"🐉",isBoss:!0,type:!1,maxHealth:120,abilities:{aiMove:{type:!0,range:3},aiAttack:{range:3,damage:10},aiMagic:{range:3,effect:10,duration:3},aiDefend:{range:2,duration:2,percentage:.25}}}};const un=[0,-150],gn=(t=>{let e=2*t+1;const n=[];for(let o=0;o<e;++o){const e=o<=t?t+1+o:3*t+1-o;for(let i=0;i<e;++i)n[o]||(n[o]=[]),n[o][i]=on([-t-Math.min(0,o-t)+i,o-t])}return n})(5),fn=[],pn=[],mn=t=>{I(pn),pn.push(...t.map(([t,e])=>[dn[t],dn[t].maxHealth,U(en(e),20),[]]))},yn=(t=>e=>tn(t)(nn(e)))(gn),wn=t=>yn(W(t,.05)),Mn=t=>wn(Ye(t)),bn=t=>U(en(t),20),vn=((e,n,o,i=1/0)=>(a,s)=>{let l=[[a,o(s,a)]];const c=new Map,h=new Map;c.set(a,null),h.set(a,0);let d=a;for(;l.length;){const[a]=l.shift(),d=h.get(a);if(a===s)break;if(d>=i)return null;t(e(a),t=>{const e=d+n(a,t),i=h.get(t);if(!i||e<i){h.set(t,e);const n=e+o(s,t);l.push([t,n]),c.set(t,a)}}),l=r(l,([,t])=>t)}const u=[];for(d=s;d!==a;)u.unshift(d),d=c.get(d);return u})((t=>e=>B(P(Ze,sn(t)(e))))(gn),(t,e)=>Hn(e)?40:1,(t,e)=>an(t,e),1e3),kn=(t=>(e,n)=>{const o=[];for(let i=-n;i<=n;++i){const a=Math.min(n,-i+n);for(let s=Math.max(-n,-i-n);s<=a;++s)o.push(tn(t)([i+e[0],-i-s+e[1]]))}return B(o)})(gn),xn=(t,e)=>kn(t,e).filter(t=>!pn.find(([,e,n])=>wn(n)===t&&e>0)),Dn=t=>(e,n)=>pn.filter(([o,i,a])=>(null===t||o.type===t)&&i>0&&an(wn(e),wn(a))<=n),En=t=>(e,n)=>t(e,n).map(([,,t])=>wn(t)),An=Dn(!0),Cn=Dn(!1),Hn=t=>pn.find(([,e,n])=>wn(n)===t&&e>0),Pn=(t,e,n)=>{const o=[...t],i=_([...e],o),s=cn(n);return()=>{const e=hn(s());return a(t,...z(W(i,e),o)),1===e}},Bn={geometry:rt([0,-Ot/2+12*1.2/2],0,Ft,12*1.2),render(){const t=Hn(se.target);if(!t)return;const[e,n]=t,{maxHealth:o,name:i}=e;let a=Math.ceil(o/10)+1,s=Math.ceil(n/10)+1;for(;--a>=0;)It(te,[Ft/2-11-8*a,2],Ut);for(;--s>=0;)It(te,[Ft/2-11-8*s,2],Xt);It(ee,[-Ft/2,2],i)}},jn=(t,e)=>(n,o,i,a=!0)=>{const s=500*Math.random()|0,r=1800+(1e3*Math.random()|0),l=12*n,c=st(2*n,2*n),h=J(c,o);let d;const u={display:a},g=t=>e=>X($(e,o))<=t*t;return{propCollision:g(2*n),collision:g(.5*n),test:t=>{u.display&&i&&g(n)(t)&&(i(),i=null)},render:()=>{if(d=ot(h,Xe),!u.display)return;Pt(t,[0,0],d);const n=(Date.now()+s)%r/l;jt({style:e,thickness:1},[0,0],ot(K(Z(c,n>1?0:n),o),Xe)),jt({style:e,thickness:2},[0,0],d)},toggle:u}},Ln=jn(`#F9CDAD`,`#FE4365`),In=jn(`#EDE574`,`#F9D423`),Sn=jn(`#69D2E7`,`#E0E4CC`),Fn=jn(`#CFF09E`,`#3B8686`),On=jn(`#EDEDF2`,`#CFD5E1`),Tn=jn(`#4F364C`,`#8F9E6F`),Rn=(`#8f9e6f`,st(15,15)),qn=(t,e=1)=>it(J(1===e?Rn:st(15*e,15*e),U(en(t),20)),Xe),zn=t=>{t&&(se.target===t?jt({style:"#8f9e6f"},[0,0],qn(t,Math.min(Date.now()%2e3/1e3))):jt({style:"#8f9e6f"},[0,0],qn(t)))},$n=({name:t,isBoss:e})=>({horizontalAlign:!0,font:`${e?t===`Harm`?30:20:12}px mono`}),_n=(t,e)=>!!t.find(({type:t})=>t===e),Wn=(t,e,n,o)=>(i,a)=>_n(a,t)?It({style:e,font:`6px mono`},[i[0]+o,i[1]+5],n):null,Un=[Wn(`shield`,`#0064fa`,`S`,-5),Wn(`heal`,`#32fa00`,`H`,0),Wn(`damage`,`#fa3200`,`D`,5)],Xn=([t,e,n,o])=>{if(e>0){const e=Xe(n);It($n(t),e,t.emoji),Un.forEach(t=>t(e,o))}},Yn=ct.createLinearGradient(0,0,100,100);Yn.addColorStop(0,`#F07241`),Yn.addColorStop(1,`#601848`);const Gn=Tn(200,[0,0]);var Nn={geometry:rt([-Ft/2,-Ot/2],0,Ft,Ot),render(){Bt(Yn,[0,0],2*Ft,2*Ot,0),Gn.render(),[...fn,se.target].forEach(zn),r([...pn],([,,[,t]])=>-t).forEach(Xn)}};const Vn=(t,e)=>{const[,,,n]=t,o=n.find(({type:t})=>t===`shield`);o&&(e*=1-o.percentage),t[1]-=e},Jn=(t,e)=>t[1]=Math.min(t[1]+e,t[0].maxHealth),Kn=t=>{const[,,,e]=t;t[3]=e.map(t=>!(--t.duration<0)&&t).filter(t=>t),e.forEach(e=>{switch(e.type){case`damage`:Vn(t,e.effect);break;case`heal`:Jn(t,e.effect)}})},Qn=(t,e,n)=>{const o=vn(wn(t),wn(e)).splice(0,n);return o.pop(),o},Zn=[0,-150],to=[[`avenger`,[0,0,0]],[`child`,[1,0,-1]],[`protector`,[-1,1,0]],[`persecutor`,[-1,0,1]]],eo=()=>wn(i(U([0,1],60+100*Math.random()),Math.random()*Math.PI)),no=(t,e,n,o)=>{const i=[...to];let a=-1;const s=Math.max(t,e,n);for(;++a<s;)a<t&&i.push([`swarmer`,eo()]),a<e&&i.push([`vamp`,eo()]),a<n&&i.push([`skeli`,eo()]);return o&&i.push([o,eo()]),i},oo=(t,e=1)=>([n,o],i=0)=>[n,o,i,t,e],io=oo("🌲",2),ao=oo("🌳",2),so=oo("👩🏼‍🌾"),ro=oo("👮🏿‍"),lo=oo("🕵🏽"),co=oo("👨🏻‍🎤"),ho=(oo("☁️"),oo("⛰️",4)),uo=oo("🌷",.5),go=oo("🌱",.25),fo=(oo("👻"),oo("🍵"),oo(Wt)),po=(t,e,n,o,i,a)=>{const s=Math.max(...i.map(t=>t[1][t[1].length-1][0])),r=(t,e)=>{const{width:n,height:o}=ct.measureText(t);return{geometry:rt([0,0],0,n,o),render(){It(e,[0,0],t)}}},l=i.map(t=>{let e=t[0];const{fontOptions:n={},x:o,y:i,rotation:a}=t[1][0][1];return typeof e==`string`&&(e=r(e,n)),e.geometry.position=[o,i],e.geometry.rotation=a,e});let c=!1;const h=Date.now();return{geometry:rt([t,e],0,n,o),children:l.map((t,e)=>0!==i[e][1][0][0]?{}:t).reverse(),render({children:t}){const e=Date.now()-h;if(e>s)a&&!c&&(a(),c=!0);else for(const[a,s]of i.entries()){const i=s[1];let c={};for(const[s,[h,d]]of i.entries()){if(e>h){if(0===s&&(t[t.length-1-a]=l[a]),d.remove){t[t.length-1-a]={};break}c={time:h,keyframe:d};continue}if(0===s)break;0===s&&(c={time:h,keyframe:d});let i=(e-c.time)/(h-c.time);i>.995&&(i=1);for(const t in c.keyframe){const e=c.keyframe[t];typeof e==`function`&&(c.keyframe[t]=e(1))}d.symbol?(typeof d.symbol==`string`&&(d.symbol=r(d.symbol,d.fontOptions)),t[t.length-1-a]=d.symbol):t[t.length-1-a]=l[a];const u=d.symbol?Object.assign({},l[a],d.symbol):l[a],{x:g,y:f,rotation:p}=c.keyframe,{x:m,y:y,rotation:w}=d,{geometry:M}=u,{position:b}=M;typeof m==`function`?b[0]=m(i,g,f,p,n,o):void 0!==m&&(b[0]=g+(m-g)*i),typeof y==`function`?b[1]=y(i,g,f,p,n,o):void 0!==y&&(b[1]=f+(y-f)*i),typeof w==`function`?M.rotation=w(i,g,f,p,n,o):void 0!==w&&(M.rotation=p+(w-p)*i);break}}}}},mo=["👨🏻‍🎤","👮🏿‍","🕵🏽","👩🏼‍🌾",Wt].map((t,e)=>[t,[[2e3+800*e,{x:Ft/4,y:Ot/2}],[2e3+800*e+2e3,{x:0,y:0}],[2e3+800*e+2800,{x:0,y:0}],[2e3+800*e+3800,{x:0,y:-Ot}]]]),yo=[...mo,[`~ fin  RL, BB`,[[14e3,{fontOptions:{style:`#000`},x:-Ft/2+2,y:Ot/2-4}],[6e3+800*mo.length+4900,{}]]],[{geometry:rt([0,0],0,Ft,Ot),render(){Bt(`#fff`,[0,0],Ft,Ot,0)}},[[0,{x:0,y:0,rotation:0}]]]];var wo={init:()=>{se.logic=null,Le.push(po(0,0,Ft,Ot,yo))},dismiss:()=>{}};let Mo=[];const bo=it(K(st(1e4,1600),[0,800]),Xe),vo=(t=>U(V(t),1/t.length))(Ve.map(({position:t})=>t)),ko=Math.max(...Ve.map(({position:t})=>Y($(t,vo))))+200,xo=co([...se.position],0),Do=ro(z([0,10],se.position),0),Eo=so(z([-10,0],se.position),0),Ao=lo(z([10,0],se.position),0),Co=fo(z([0,-10],se.position),0);Mo.push(xo,Do,Eo,Ao,Co);const Ho=t=>{se.miasma+=50*t,Mo=Mo.filter(([t,,,e])=>"🌷"!==e||t>se.miasma)};let Po=!1;const Bo=[xo[3],`Avenger`],jo=[Ao[3],`Persecutor`],Lo=[Do[3],`Protector`],Io=[Eo[3],`Child`],So=[Co[3],`Origin`],Fo=[],Oo=[[Ln,[[`No more running, I'm coming for him.`,Bo]]],[In,[[`Why isn't she returning my calls, it's not like her.`,Io]]],[Fn,[[`She broke up with me, of course.`,jo]]],[Sn,[[`It takes so much effort at times, but we're worth all of it.`,Lo]]],[Tn,[[`I saw him again, after all these years.`,So],[`He greeted me like we were old friends.`,So],()=>{Ho(5),Oe(H(6,0,0,`deceit`))}]],[In,[[`I can't believe it she said YES!`,Io]]],[Sn,[[`One or two bar fights later,`,Lo],[`people didn't mess with me anymore.`,Lo]]],[Fn,[[`She will never say yes to someone like us.`,jo]]],[Tn,[[`People pushed me around in college,`,So],[`I couldn't take it anymore.`,So],()=>{Ho(4),Oe(H(6,4,0,`resentment`))}]],[Fn,[[`It hurt, but its worth it.`,jo]]],[In,[[`My daddy yelled at me, for playing with my toys.`,Io]]],[Tn,[[`I think it was at highschool graduation.`,So],[`It was all my fault.`,So],()=>{Ho(2),Oe(H(0,4,2,`doubt`))}]],[In,[[`I stayed close behind the older kids.`,Io],[`They threw cupcake and candy wrappers right on the sidewalk.`,Io],[`He didn't talk to me, when I was with them.`,Io]]],[Tn,[[`It hurt he told you it wasn't meant to, but it did.`,So],()=>{Ho(100),Oe(H(6,4,2,`harm`))}]],[On,[()=>{Mo=[],Fo.splice(0,Fo.length-1),Po=!0}]]];{const t=Oo.length+4;let e=-1;for(;++e<t;){const[t,n]=Oo.shift();Fo.push(((t,e,n)=>t(25,n,()=>se.dialog.push(...e)))(t,n,[50*e-550,650+400*Math.random()|0])),t===Tn&&++e}}const To=[[io,50],[ao,50],[ho,10],[uo,500],[go,300]],Ro=()=>z(U(i([0,1],2*Math.random()*Math.PI),ko*Math.random()),vo),qo=t=>de(t,vo,ko)&&!!Ve.find(({collision:e})=>e(t)),zo=t=>qo(t)&&!Fo.find(({propCollision:e})=>e(t)),$o=Math.max(...To.map(([,t])=>t));let _o=-1;for(;++_o<$o;)for(const[t,e]of To)_o<e&&Mo.push(t((()=>{let t=Ro();for(;!zo(t);)t=Ro();return t})(),0));Ho(5);const Wo=()=>{Bt(`#90b4ec`,[0,0],2*Ft,2*Ot,0),Ht(`#69D2E7`,[0,0],bo);const t=1.2-Math.abs(Date.now()%7200/3600-1)/10;Ve.forEach(({getShoreLine:e})=>jt({style:`#fff`,thickness:4},[0,0],e(t))),Ve.forEach(({getShoreLine:e})=>Pt(`#fafac8`,[0,0],e(t))),Ve.forEach(({getBase:t})=>Pt(`#00c864`,[0,0],t())),Po&&Oe(wo);for(const t of Fo)t.render(),t.test(se.position);Mo.map(t=>[...Ue(t),t[2],t[3],t[4]]).sort((t,e)=>e[2]-t[2]).forEach(([t,e,n,o,i,a])=>It({font:`${12*a*(1-2*(n-10994)/8248748)|0}px monospace`},[t,e-o],i))},Uo=()=>Gt.space?6:3,Xo=(t,e)=>{const n=$(se.position,t);Y(n)>e&&z(t,N(n,Uo()))},Yo=Kt(1);var Go=()=>{let t;const e=Uo(),n=Yo();if(X(n)>.5&&(se.target=null),null!==se.target){const n=$(se.target,se.position);X(n)<3&&(se.target=null),t=N(n,e)}else t=N(n,e);const o=q(se.position,t);qo(o)&&o[0]<se.miasma&&!se.dialog.length&&a(se.position,...o),a(xo,...se.position),Xo(Do,20+Date.now()%300/30),Xo(Eo,45+Date.now()%300/30),Xo(Ao,70+Date.now()%300/30),Xo(Co,90+Date.now()%300/30);const i=se.position[0]-We[0];Math.abs(i)>.2*Ft&&(We[0]+=i-F(i)*Ft*.2),a(We,...q(se.position,[0,-100]))},No={init:()=>{Le.push(_e),se.logic=(t=>{Go(),Wo(),Gt.click&&!se.dialog.length&&(se.target=Ye(Gt.mousePosition))})},dismiss:()=>{}};const Vo=()=>{Oe(No)},Jo={textBaseline:`middle`,style:Qt,font:"24px Arial Black, Gadget, sans-serif",horizontalAlign:!0},Ko={geometry:rt([0,0],0,Ft,Ot),render(){1!==Gt.space&&1!==Gt.return||Vo(),Bt(`#00f`,[0,0],Ft,Ot,0),It(Jo,[0,0],`A L T E R`),It(Jo,[0,-24],Wt),It({style:Qt,font:Zt},[-28,51],`new game`),Date.now()%600>400&&Ht(`white`,[-42,48],[-5,3,5,0,-5,-3])},interact:{onMouseDown:Vo}};let Qo=0,Zo=0;const ti=()=>{const t=ct.getImageData(0,0,Ft,Ot),e=t.data;let n=-1;for(;++n<e.length;)e[n]=75*(e[n]/75|0);ct.putImageData(t,0,0)};Oe({init:()=>{Le.push(Ko),se.logic=null},dismiss:()=>{}}),(t=>{let e=!0;requestAnimationFrame(function n(){Qo=Math.min(16,Date.now()-Zo),e&&t(Qo),Zo=Date.now(),requestAnimationFrame(n)})})(t=>{pt(),se.logic&&se.logic(),Se(t),Vt(),ti()})}();
