!function(e,t,n,r,i){function a(e){var t=new u(16);return e&&(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t}function f(e){return e||(e=a()),e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function l(e,t,n){n||(n=e);var r=e[0],i=e[1],s=e[2],o=e[3],u=e[4],a=e[5],f=e[6],l=e[7],c=e[8],h=e[9],p=e[10],d=e[11],v=e[12],m=e[13],g=e[14],y=e[15],b=t[0],w=t[1],E=t[2],S=t[3];return n[0]=b*r+w*u+E*c+S*v,n[1]=b*i+w*a+E*h+S*m,n[2]=b*s+w*f+E*p+S*g,n[3]=b*o+w*l+E*d+S*y,b=t[4],w=t[5],E=t[6],S=t[7],n[4]=b*r+w*u+E*c+S*v,n[5]=b*i+w*a+E*h+S*m,n[6]=b*s+w*f+E*p+S*g,n[7]=b*o+w*l+E*d+S*y,b=t[8],w=t[9],E=t[10],S=t[11],n[8]=b*r+w*u+E*c+S*v,n[9]=b*i+w*a+E*h+S*m,n[10]=b*s+w*f+E*p+S*g,n[11]=b*o+w*l+E*d+S*y,b=t[12],w=t[13],E=t[14],S=t[15],n[12]=b*r+w*u+E*c+S*v,n[13]=b*i+w*a+E*h+S*m,n[14]=b*s+w*f+E*p+S*g,n[15]=b*o+w*l+E*d+S*y,n}function c(e,t,n){n||(n=t);var r=t[0],i=t[1],s=t[2];return n[0]=e[0]*r+e[4]*i+e[8]*s+e[12],n[1]=e[1]*r+e[5]*i+e[9]*s+e[13],n[2]=e[2]*r+e[6]*i+e[10]*s+e[14],n}function h(e,t,n){var r=t[0],i=t[1],s=t[2],o,u,a,f,l,c,h,p,d,v,m,g;return!n||e===n?(e[12]=e[0]*r+e[4]*i+e[8]*s+e[12],e[13]=e[1]*r+e[5]*i+e[9]*s+e[13],e[14]=e[2]*r+e[6]*i+e[10]*s+e[14],e[15]=e[3]*r+e[7]*i+e[11]*s+e[15],e):(o=e[0],u=e[1],a=e[2],f=e[3],l=e[4],c=e[5],h=e[6],p=e[7],d=e[8],v=e[9],m=e[10],g=e[11],n[0]=o,n[1]=u,n[2]=a,n[3]=f,n[4]=l,n[5]=c,n[6]=h,n[7]=p,n[8]=d,n[9]=v,n[10]=m,n[11]=g,n[12]=o*r+l*i+d*s+e[12],n[13]=u*r+c*i+v*s+e[13],n[14]=a*r+h*i+m*s+e[14],n[15]=f*r+p*i+g*s+e[15],n)}function p(e,t,n){var r=t[0],i=t[1],s=t[2];return!n||e===n?(e[0]*=r,e[1]*=r,e[2]*=r,e[3]*=r,e[4]*=i,e[5]*=i,e[6]*=i,e[7]*=i,e[8]*=s,e[9]*=s,e[10]*=s,e[11]*=s,e):(n[0]=e[0]*r,n[1]=e[1]*r,n[2]=e[2]*r,n[3]=e[3]*r,n[4]=e[4]*i,n[5]=e[5]*i,n[6]=e[6]*i,n[7]=e[7]*i,n[8]=e[8]*s,n[9]=e[9]*s,n[10]=e[10]*s,n[11]=e[11]*s,n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15],n)}function d(e,t,n){var r=Math.sin(t),i=Math.cos(t),s=e[0],o=e[1],u=e[2],a=e[3],f=e[8],l=e[9],c=e[10],h=e[11];return n?e!==n&&(n[4]=e[4],n[5]=e[5],n[6]=e[6],n[7]=e[7],n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15]):n=e,n[0]=s*i+f*-r,n[1]=o*i+l*-r,n[2]=u*i+c*-r,n[3]=a*i+h*-r,n[8]=s*r+f*i,n[9]=o*r+l*i,n[10]=u*r+c*i,n[11]=a*r+h*i,n}function v(e,t,n,r,i,s,o){o||(o=a());var u=t-e,f=r-n,l=s-i;return o[0]=i*2/u,o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=i*2/f,o[6]=0,o[7]=0,o[8]=(t+e)/u,o[9]=(r+n)/f,o[10]=-(s+i)/l,o[11]=-1,o[12]=0,o[13]=0,o[14]=-(s*i*2)/l,o[15]=0,o}function m(e,t,n,r,i){var s=n*Math.tan(e*Math.PI/360),o=s*t;return v(-o,o,-s,s,n,r,i)}function g(e,t,n,r){r||(r=a());var i,s,o,u,l,c,h,p,d,v,m=e[0],g=e[1],y=e[2],b=n[0],w=n[1],E=n[2],S=t[0],x=t[1],T=t[2];return m===S&&g===x&&y===T?f(r):(h=m-S,p=g-x,d=y-T,v=1/Math.sqrt(h*h+p*p+d*d),h*=v,p*=v,d*=v,i=w*d-E*p,s=E*h-b*d,o=b*p-w*h,v=Math.sqrt(i*i+s*s+o*o),v?(v=1/v,i*=v,s*=v,o*=v):(i=0,s=0,o=0),u=p*o-d*s,l=d*i-h*o,c=h*s-p*i,v=Math.sqrt(u*u+l*l+c*c),v?(v=1/v,u*=v,l*=v,c*=v):(u=0,l=0,c=0),r[0]=i,r[1]=u,r[2]=h,r[3]=0,r[4]=s,r[5]=l,r[6]=p,r[7]=0,r[8]=o,r[9]=c,r[10]=d,r[11]=0,r[12]=-(i*m+s*g+o*y),r[13]=-(u*m+l*g+c*y),r[14]=-(h*m+p*g+d*y),r[15]=1,r)}function y(e,t,n){return!n||e===n?(e[0]-=t[0],e[1]-=t[1],e[2]-=t[2],e):(n[0]=e[0]-t[0],n[1]=e[1]-t[1],n[2]=e[2]-t[2],n)}function b(e,t){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function w(e){var t=new u(3);return e?(t[0]=e[0],t[1]=e[1],t[2]=e[2]):t[0]=t[1]=t[2]=0,t}function E(e,t,n){return!n||e===n?(e[0]+=t[0],e[1]+=t[1],e[2]+=t[2],e):(n[0]=e[0]+t[0],n[1]=e[1]+t[1],n[2]=e[2]+t[2],n)}function S(e,t,n){return!n||e===n?(e[0]*=t,e[1]*=t,e[2]*=t,e):(n[0]=e[0]*t,n[1]=e[1]*t,n[2]=e[2]*t,n)}function x(e,t){t||(t=e);var n=e[0],r=e[1],i=e[2],s=Math.sqrt(n*n+r*r+i*i);return s?s===1?(t[0]=n,t[1]=r,t[2]=i,t):(s=1/s,t[0]=n*s,t[1]=r*s,t[2]=i*s,t):(t[0]=0,t[1]=0,t[2]=0,t)}function T(e,t,n){n||(n=e);var r=e[0],i=e[1],s=e[2],o=t[0],u=t[1],a=t[2];return n[0]=i*a-s*u,n[1]=s*o-r*a,n[2]=r*u-i*o,n}function N(e){var t=e[0],n=e[1],r=e[2];return Math.sqrt(t*t+n*n+r*r)}function C(e,t,n){n||(n=t);var r=t[0],i=t[1],s=t[2],o=e[0],u=e[1],a=e[2],f=e[3],l=f*r+u*s-a*i,c=f*i+a*r-o*s,h=f*s+o*i-u*r,p=-o*r-u*i-a*s;return n[0]=l*f+p*-o+c*-a-h*-u,n[1]=c*f+p*-u+h*-o-l*-a,n[2]=h*f+p*-a+l*-u-c*-o,n}function k(e,t,n){n||(n=new u(4));var r=e*.5,i=Math.sin(r);return n[3]=Math.cos(r),n[0]=i*t[0],n[1]=i*t[1],n[2]=i*t[2],n}function L(e){"use strict";var t=65535,n=r||Array,i=new n(4096),s=362436,o=2654435769;i[0]=e,i[1]=e+o,i[2]=e+o+o;for(var u=3;u<4096;u++)i[u]=i[u-3]^i[u-2]^o^u;var a=4095;this.next=function(){var e,n=18782,r,o=4294967294;a=a+1&4095,e=n*i[a]+s,s=e>>32,r=e+s,r<s&&(r++,s++);var u=i[a]=o-r;return u<0?-u%t:u%t}}function A(e){"use strict";function f(e){var t=[];for(var n=e;n--;){t[n]=[];for(var r=e;r--;){t[n][r]=[];for(var i=e;i--;)t[n][r][i]=0}}return t}function l(e,t,n){var r=t[0],i=t[1],s=t[2];e[r][i][s]=n}function c(e,t,n){var r=n[0],i=n[1],s=n[2];return r<0||i<0||s<0||r>=t||i>=t||s>=t?-1:e[r][i][s]}function h(e){return e===-1?-1:[1,0,3,2,5,4][e]}function p(e){return e.slice(0)}function d(e,t){var n=a[t],r=p(e);return r[0]+=n[0],r[1]+=n[1],r[2]+=n[2],r}function v(e,t,n){return n===0?e:v(d(e,t),t,n-1)}function m(e,t,n,r,i){if(i<2)return!0;var s=d(n,r),o=c(e,t,s);return o!==0?!1:m(e,t,s,r,i-1)}function g(e,t,n,r,i){if(i<2)return!0;var s=d(n,r);return c(e,t,s)!==0?!1:(l(e,s,4),m(e,t,s,r,i-1))}function y(e,n,r,i,s,o,u,a,f){var p=r===1&&f?3:1,d=e.next()%6,b=3+e.next()%(a-3);if(r===0)return!0;if(i>=t)return!1;if(d===s||d===h(s))return y(e,n,r,i,s,o,u,a,f);if(!m(u,a,n,d,b))return y(e,n,r,i+1,s,o,u,a,f);var w=v(n,d,b),E=c(u,a,w);if(E===-1)return y(e,n,r,i+1,s,o,u,a,f);g(u,a,n,d,b),l(u,w,p);var S=v(n,d,b-1);return o.push(S),y(e,S,r-1,0,h(d),o,u,a,f)}function b(e){var t=16,n=new L(e),r=2+n.next()%3,i=[t/2|0,t/2|0,t/2|0],s=f(t);l(s,i,2);var o=7-r,u=[],a=[],h=y(n,i,r,0,-1,u,s,t,!1);for(var p=0;p!==r;p++){var d=n.next()%u.length,v=u[d];for(var m=0;m!==d+1;m++)a.push(u[m]);u=[],h=h&&y(n,v,r,0,-1,u,s,t,p===r-1)}for(var m=0;m!==d;m++)a.push(u[m]);return h?{startingPosition:{x:i[0],y:i[0],z:i[0]},getObject:function(e,n,r){return c(s,t,[e,n,r])},path:a,dimension:t}:b(e+1)}var t=16,n=0,r=1,i=2,s=3,o=4,u=5,a=[];return a[n]=[1,0,0],a[r]=[-1,0,0],a[i]=[0,1,0],a[s]=[0,-1,0],a[o]=[0,0,1],a[u]=[0,0,-1],b(e)}function _(e){function r(){n=2}function i(){switch(n){case 0:n=1;break;case 1:break;case 2:break;case 3:n=4;break;case 4:}}function s(){switch(n){case 0:break;case 1:break;case 2:n=3;break;case 3:break;case 4:n=3}}function o(){switch(n){case 0:break;case 1:n=0;break;case 2:break;case 3:break;case 4:n=3}}var t=this,n=0;t.position=e,t.getFace=function(){return n},t.view=i,t.unview=o,t.touch=r,t.leave=s,t.reset=function(){n=0}}function Tn(){var e=rn;b(Yt,e),S(e,nn),E(e,Zt),g(e,Zt,en,tn)}function Nn(e){var t=k(e,en);C(t,Yt),Tn()}function Cn(e){var t=rn,n=x(T(en,Yt,t)),r=k(e,n);C(r,Yt),x(T(Yt,n,en)),Tn()}function kn(){_t(I),_t(j),Ft(4.5),Tt(0,0,0,0),Jt(0,0,gt.width,gt.height),ut=Ct(),wt(P,ut),St(P,Z.rawData,W),at=Ct(),wt(P,at),St(P,et.rawData,W),ft=Ct(),wt(P,ft),St(P,nt.rawData,W),it=Ct(),wt(P,it),St(P,rt.rawData,W)}function Ln(e){try{On(e),Mn(e),s.requestGameFrame(Ln)}catch(t){}}function On(e){s.keys.wasReleased(s.keys.codes.p)&&(ht=!ht);if(Qt.poke||s.keys.wasPressed(s.keys.codes.space)){var t=An(Yt);tt.tap(e,t)}if(Qt.drag){var n=Qt.dragDirection.x*2*Math.PI/gt.width,r=Qt.dragDirection.y*2*Math.PI/gt.height;Nn(n),Cn(r)}(s.keys.isDown(s.keys.codes.left)||s.keys.isDown(s.keys.codes.a))&&Nn(e.delta*Math.PI),(s.keys.isDown(s.keys.codes.right)||s.keys.isDown(s.keys.codes.d))&&Nn(-e.delta*Math.PI),(s.keys.isDown(s.keys.codes.up)||s.keys.isDown(s.keys.codes.w))&&Cn(e.delta*Math.PI),(s.keys.isDown(s.keys.codes.down)||s.keys.isDown(s.keys.codes.s))&&Cn(-e.delta*Math.PI),tt.isWinning()&&zn(),Qt.update(),tt.tick(e)}function Mn(e){Ot(I),Hn(st),_t(I),xt(F),pt&&(_n(st),Dn(st),Pn(st,e))}function _n(e){Vt(e);var t=jt(e,"uModelviewprojection"),n=jt(e,"uTexture"),r=jt(e,"uTextureOffset"),i=Pt(e,"aVertex"),s=Pt(e,"aTextureuv"),o=rn;wt(P,ut),$t(i,4,q,!1,Z.stride,Z.voffset),Dt(i),s!==-1&&($t(s,4,q,!1,Z.stride,Z.toffset),Dt(s)),n&&(Et(X,on),Wt(n,0));for(var u=0;u!=gn.length;u++){var a=gn[u];if(r)switch(a.getFace()){case 0:Kt(r,0,0);break;case 1:Kt(r,.3125,0);break;case 2:Kt(r,.3125,.3125);break;case 3:Kt(r,0,.3125);break;case 4:Kt(r,.625,0)}l(Gt,tn,o),h(o,a.position),Xt(t,!1,o),Mt(Q,0,Z.numVertices)}}function Dn(e){Vt(e);var t=jt(e,"uModelviewprojection"),n=jt(e,"uTexture"),r=Pt(e,"aVertex"),i=Pt(e,"aTextureuv"),s=rn;wt(P,at),$t(r,4,q,!1,et.stride,et.voffset),Dt(r),i!==-1&&($t(i,4,q,!1,et.stride,et.toffset),Dt(i)),n&&(Et(X,an),Wt(n,0)),l(Gt,tn,s),h(s,tt.position),tt.size!==1&&p(s,[tt.size,tt.size,tt.size]),Xt(t,!1,s),Mt(Q,0,et.numVertices)}function Pn(e,t){Vt(e);var n=jt(e,"uModelviewprojection"),r=jt(e,"uTexture"),i=Pt(e,"aVertex"),s=Pt(e,"aTextureuv"),o=rn;wt(P,it),$t(i,4,q,!1,rt.stride,rt.voffset),Dt(i),s!==-1&&($t(s,4,q,!1,rt.stride,rt.toffset),Dt(s)),r&&(Et(X,fn),Wt(r,0)),l(Gt,tn,o),h(o,yn),d(o,t.total),Xt(n,!1,o),Mt(Q,0,rt.numVertices)}function Hn(e){Vt(e);var t=jt(e,"uModelviewprojection"),n=jt(e,"uTexture"),r=Pt(e,"aVertex"),i=Pt(e,"aTextureuv"),s=jt(e,"uTextureOffset"),o=rn;wt(P,ft),$t(r,4,q,!1,nt.stride,nt.voffset),Dt(r),$t(i,4,q,!1,nt.stride,nt.toffset),Dt(i),Et(X,un),Wt(n,0);var u=b(Yt,sn);S(u,nn),l(Gt,tn,o),h(o,Zt),h(o,u),Xt(t,!1,o),Kt(s,0,0),Mt(Q,0,nt.numVertices)}function Bn(e,t){Vt(e);var n=Pt(e,"aVertex"),r=jt(e,"uModelviewprojection"),i=rn;wt(P,pathBuffer),$t(n,3,q,!1,0,0),Dt(n),l(Gt,tn,i),Xt(r,!1,i);for(var s=0;s!==ct.path.length-1;s++)Mt(R,s,2)}function jn(e,t){Et(X,t),qt(G,!0),Ut(X,0,z,z,Y,e),zt(X,V,U),zt(X,$,U)}function Fn(e){var t=At();return jn(e,t),Et(X,null),t}function In(e,t,n,r,i,s,o){n=n||0,r=r||0,i=i||t.width,s=s||t.height,o=o||255;var u=t.getContext("2d"),a=u.getImageData(n,r,i,s),f=Math.random,l=a.data,c=l.length,h=0;while(h<c)e===1?(l[h+0]=f()*256|0,l[h+1]=0,l[h+2]=0,l[h+3]=o):(l[h+0]=0,l[h+1]=f()*256|0,l[h+2]=0,l[h+3]=o),h+=4;return u.putImageData(a,n,r),t}function qn(t,n){var r=e.createElement("canvas");return r.width=t,r.height=n,r}function Rn(e,t){var n=In(t,qn(e.width,e.height)),r=e.getContext("2d");r.save();for(var i=4;i<=n.width;i*=2){var s=Math.random()*(n.width-i)|0,o=Math.random()*(n.height-i)|0;r.globalAlpha=4/i,r.drawImage(n,s,o,i,i,0,0,e.width,e.height)}return r.restore(),e}function zn(){var e=Un.shift();if(!e){pt=!1;return}ct=A(e),gn=[];for(var t=0;t!==16;t++)for(var n=0;n!==16;n++)for(var r=0;r!==16;r++){var i=ct.getObject(t,n,r);i===1?gn.push(new _(w([t,n,r]))):i===3&&(yn[0]=t,yn[1]=n,yn[2]=r)}Zt[0]=ct.startingPosition.x,Zt[1]=ct.startingPosition.x,Zt[2]=ct.startingPosition.x,tt=new M({x:Zt[0],y:Zt[1],z:Zt[2]},gn,yn,ct.dimension),b(Zt,Yt),Yt[0]=0,Yt[1]=0,Yt[2]=1,Tn()}var s={};(function(e){"use strict";function n(e){var n,r,i;for(n=0;r=t[n++];){i=e.getContext(r,{alpha:!1,preserveDrawingBuffer:!0});if(i)return i}return null}var t=["experimental-webgl","webgl","moz-webgl","webkit-3d"];e.createContext=n})(s),function(n){"use strict";function a(){for(var e=0;e!==r;e++)u[e]=0,o[e]=0}function f(){for(var e=0;e!==r;e++)u[e]=o[e]}function l(e){return o[e]!==0}function c(e){return o[e]===0}function h(e){return o[e]!==0&&u[e]===0}function p(e){return o[e]===0&&u[e]!==0}var r=256,s=i||Array,o=new s(r),u=new s(r);a(),e.addEventListener("keydown",function(e){var t=e.keyCode;t<r&&(o[t]=1)},!1),e.addEventListener("keyup",function(e){var t=e.keyCode;t<r&&(o[t]=0)},!1),t.addEventListener("blur",function(){a()},!1);var d={backspace:8,tab:9,enter:13,shift:16,ctrl:17,alt:18,pause:19,capslock:20,escape:27,space:32,pageUp:33,pageDown:34,end:35,home:36,left:37,up:38,right:39,down:40,insert:45,"delete":46,num0:48,num1:49,num2:50,num3:51,num4:52,num5:53,num6:54,num7:55,num8:56,num9:57,a:65,b:66,c:67,d:68,e:69,f:70,g:71,h:72,i:73,j:74,k:75,l:76,m:77,n:78,o:79,p:80,q:81,r:82,s:83,t:84,u:85,v:86,w:87,x:88,y:89,z:90,windowKeyLeft:91,windowKeyRight:92,select:93,numpad0:96,numpad1:97,numpad2:98,numpad3:99,numpad4:100,numpad5:101,numpad6:102,numpad7:103,numpad8:104,numpad9:105,multiply:106,add:107,subtract:109,decimalPoint:110,divide:111,f1:112,f2:113,f3:114,f4:115,f5:116,f6:117,f7:118,f8:119,f9:120,f10:121,f11:122,f12:123,numlock:144,scrolllock:145,semicolon:186,equals:187,comma:188,dash:189,period:190,slash:191,graveAccent:192,openBracket:219,backSlash:220,closeBraket:221,quote:222};n.keys={codes:d,update:f,isDown:l,isUp:c,wasPressed:h,wasReleased:p}}(s),function(e){"use strict";function u(){i=-1,o.total=0,o.frame=0}function a(t){function n(){var n=Date.now();i===-1&&(s=n,i=n,o.frame=0);var r=(n-s)/1e3;o.delta=r,o.total+=r,t(o),o.frame++,s=n,e.keys.update()}r(n)}var n,r,i,s,o;n=t,r=n.requestAnimationFrame||n.webkitRequestAnimationFrame||n.mozRequestAnimationFrame||n.oRequestAnimationFrame||n.msRequestAnimationFrame||function(e){n.setTimeout(e,16)},i=-1,s=0,o={total:0,delta:0,frame:0,reset:u},e.requestGameFrame=a}(s),function(e){"use strict";function a(e){var a=e.split("\n"),f="",l=0,c=[],h=[],p=[],d=[],v=[],m=[],g=0,y={v:function(e){if(!e||e.length!=3)throw new Error("Can't accept Vertic without 3 components. LINE:"+f);var t=Number(e[0]),n=Number(e[1]),r=Number(e[2]);c.push(t,n,r)},vn:function(e){if(!e||e.length!=3)throw new Error("Can't accept Normal without 3 components. LINE:"+l);var t=Number(e[0]),n=Number(e[1]),r=Number(e[2]);h.push(t,n,r)},vt:function(e){if(!e||e.length<2)throw new Error("Can't accept Texture with less than 2 components. LINE:"+l);var t=Number(e[0]),n=Number(e[1]);p.push(t,n)},f:function P(e){if(!e||e.length<3)throw new Error("Can't accept Face with less than 3 components. LINE:"+l);if(e.length>3){for(var t=e.length-1;t!==1;t--)P([e[0],e[t-1],e[t]]);return}g++;for(var n=0;n!==3;n++){var r=e[n].split("/"),i=parseInt(r[0],10)-1,s=parseInt(r[1],10)-1,t=parseInt(r[2],10)-1;d.push(i),isNaN(s)||m.push(s),isNaN(t)||v.push(t)}}};for(l=0;l!=a.length;){f=a[l++].trim();var b=f.split(u),w=b.shift();w in y&&y[w](b)}var E=t;if(p.length!==0||m.length!==0){E|=i;if(d.length!==m.length)throw new Error("Texture indice don't match Vertic indice.")}if(h.length!==0||v.length!==0){E|=r;if(d.length!==v.length)throw new Error("Normal indice don't match Vertic indice.")}var S=0,x=0,T=0,N=0,C=0,k=0;switch(E){case t:C=4;break;case i:C=6,T=4*o;break;case r:C=8,N=4*o;break;case s:C=10,T=4*o,N=6*o;break;default:throw new Error("Schema broken.")}S=g*3*C;var L=new n(S),A=0,O=0,M=0,_=0;for(var D=0;D!=d.length;D++)O=3*d[D],L[A++]=c[O++],L[A++]=c[O++],L[A++]=c[O],L[A++]=1,E&i&&(M=2*m[D],L[A++]=p[M++],L[A++]=p[M]),E&r&&(_=3*v[D],L[A++]=h[_++],L[A++]=h[_++],L[A++]=h[_],L[A++]=0);return{stride:C*o,schema:E,voffset:x,toffset:T,noffset:N,rawData:L,numVertices:g*3}}var t=0,r=1,i=2,s=r|i,o=4,u=/[\t\r\n ]+/g;e.obj={},e.obj.parse=a,e.obj.SCHEMA_V=t,e.obj.SCHEMA_VN=r,e.obj.SCHEMA_VT=i,e.obj.SCHEMA_VTN=r|i}(s),function(e){"use strict";function t(e){return e=e.toLowerCase(),e==="application/json"?2:e==="text/html"?7:e.indexOf("javascript")!==-1?3:e.indexOf("xml")!==-1?4:e.indexOf("image")!==-1?5:1}function n(n,r,i,s){function o(){if(a)return;if(f.readyState===2||f.readyState===3){u=t(f.getResponseHeader("content-type")),r.toLowerCase().lastIndexOf(".json")+5===r.length?u=2:r.toLowerCase().lastIndexOf(".obj")+4===r.length&&(u=6);if(u===5){a=!0,f.abort();var o=new Image;o.onload=function(){i(n,o)},o.onerror=function(){s(r,"Loading image failed.")},o.src=r;return}}if(f.readyState===4){var l=f.status;if(l>=200&&l<=299||l===304||l===0)if(u===4)i(n,f.responseXML);else if(u===2)try{i(n,JSON.parse(f.responseText))}catch(c){s(r,c)}else if(u===6)try{i(n,e.obj.parse(f.responseText))}catch(c){s(r,c)}else i(n,f.responseText);else s(r,l||0)}}var u=0,a=!1,f=new XMLHttpRequest;f.onreadystatechange=o,f.open("GET",r,!0),f.send(null)}function r(){}function i(e){if(!e)throw new Error("Passed nothing in loadFiles");var t=e.files||{},i=e.update||r,s=e.finished||r,o=e.error||r,u=0,a=0,f=Object.create(null),l=function(e,t){a++,f[e]=t,i(e,a/u),a===u&&s(f)},c=function(e,t){l=r,c=r,o(e,t)};if(t instanceof Array){u=t.length;for(var h=0,p;p=t[h++];)n(p,p,l,c)}else{var d=Object.keys(t);u=d.length;for(var h=0,v;v=d[h++];)t.hasOwnProperty(v)&&n(v,t[v],l,c)}}e.loadmanager={},e.loadmanager.loadFiles=i}(s),function(e){"use strict";function t(e,t){var n=["#define VERTEX\n","#define FRAGMENT\n"],r="#line 0\n",i=[e.createShader(e.VERTEX_SHADER),e.createShader(e.FRAGMENT_SHADER)],s=e.createProgram(),o=null,u="";for(var a=0;a!=n.length;a++){o=i[a],e.shaderSource(o,n[a]+r+t),e.compileShader(o);if(u=e.getShaderInfoLog(o))throw new Error(u);e.attachShader(s,o)}return e.linkProgram(s),(u=e.getProgramInfoLog(s))&&console.error(u),s}e.shader={},e.shader.compileProgram=t}(s);var o=function(e){"use strict";function r(){switch(u){case 0:u=1;break;case 1:break;case 2:n.poke=!1,u=0;break;case 3:break;default:}}function i(){switch(u){case 0:break;case 1:n.poke=!0,u=2;break;case 2:case 3:n.drag=n.poke=!1,u=0;break;default:}}function s(){switch(u){case 0:break;case 1:break;case 2:n.poke=!1,u=0;break;case 3:break;default:}}function o(){switch(u){case 0:break;case 1:var e=f-c,t=l-h;Math.sqrt(e*e+t*t)>3&&(n.dragDirection.x=e,n.dragDirection.y=t,n.drag=!0,u=3);break;case 2:n.poke=!1,u=0;break;case 3:var e=f-c,t=l-h;n.dragDirection.x=e,n.dragDirection.y=t;break;default:}}var n=this,u=0,a=!1,f=0,l=0,c=0,h=0;e.onmousedown=r,e.onmouseup=e.onmouseout=t.onblur=i,e.onmousemove=function(e){f=c,l=h,c=e.clientX,h=e.clientY,o()},n.update=s,n.drag=!1,n.poke=!1,n.dragDirection={x:0,y:0}},u=n,O=function(){function n(n){return n===-1?t:e[n]}function r(e){return e===-1?-1:[1,0,3,2,5,4][e]}function i(e){return n(r(e))}function s(e){var t=w(e);x(t);for(var r=0;r!==6;r++){var i=n(r);if(t[0]===i[0]&&t[1]===i[1]&&t[2]===i[2])return r}if(t[0]===0&&t[1]===0&&t[2]===0)return-1}var e=[w([1,0,0]),w([-1,0,0]),w([0,1,0]),w([0,-1,0]),w([0,0,1]),w([0,0,-1])],t=w([0,0,0]);return{getVector:n,getOppositeDirection:r,getOppositeVector:i,getDirectionBasedOnVector:s}}(),M=function(){function t(t,n,r,i){"use strict";function c(){for(var e=0;e!==n.length;e++){var r=n[e];r.reset()}b(f,t.position),o=0,t.size=1,p(t.position,-1)}function h(e,t,n){var r=e[0],s=e[1],o=e[2];if(r<0||r>=i||s<0||s>=i||o<0||o>=i)return;var u=v(r,s,o);if(u){n?u.view():u.unview();return}var a=O.getVector(t);h([r+a[0],s+a[1],o+a[2]],t,n)}function p(e,n){for(var r=0;r!==6;r++){if(r===n)continue;var i=O.getVector(r),s=w(t.position);E(s,i),h(e,r,!0)}}function d(e,n){for(var r=0;r!==6;r++){if(r===n)continue;var i=O.getVector(r),s=w(t.position);E(s,i),h(e,r,!1)}}function v(e,t,r){for(var i=0,s=n.length;i!==s;i++){var o=n[i],u=o.position;if(u[0]===e&&u[1]===t&&u[2]===r)return o}return null}var s=8,o=0,u=w(),a=w(),f=w(t.position),l=0;this.tick=function(n){switch(o){case 0:break;case 2:t.size-=n.delta*.5;if(t.size<0){c();return};case 1:E(t.position,S(u,n.delta*s,e)),l+=n.delta*s,l>=1&&o!==2&&(b(E(a,u,e),t.position),p(t.position,O.getDirectionBasedOnVector(u)),o=0,l=0,this.tap(n,u));break;default:}},this.tap=function(e,n){switch(o){case 1:case 2:break;case 0:var s=Math.round(t.position[0]+n[0]),f=Math.round(t.position[1]+n[1]),c=Math.round(t.position[2]+n[2]);if(s===r[0]&&f===r[1]&&c===r[2]){t.winning=!0;return}if(s<0||s>=i||f<0||f>=i||c<0||c>=i){o=2,d(t.position,O.getDirectionBasedOnVector(u));return}var h=v(s,f,c);if(h){h.touch(),t.lastCube&&t.lastCube!==h&&t.lastCube.leave(),t.lastCube=h;return}t.lastCube&&t.lastCube!==h&&t.lastCube.leave(),t.lastCube=h,b(n,u),b(t.position,a),l=0,d(t.position,O.getDirectionBasedOnVector(u)),o=1;break;default:}},p(t.position,-1)}var e=w();return function(e,n,r,i){this.position=w([e.x,e.y,e.z]),this.size=1,this.lastCube=null;var s=new t(this,n,r,i);this.tap=function(e,t){s.tap(e,t)},this.tick=function(e){s.tick(e)},this.winning=!1;var o=this;this.isWinning=function(){return o.winning}}}(),D;!function(){"use strict";function t(e,t){this.x=e,this.y=t,this.toString=function(){return"["+e+", "+t+"]"}}D=function(){function i(e,n,r){if(n<0)switch(e){case 0:return i(1,r,-n-1);case 1:return i(5,-n-1,15-r);case 2:return i(1,n+16,r);case 3:return i(2,n+16,r);case 4:return i(1,15-r,16+n);case 5:return i(1,-n-1,15-r);default:throw new RangeError}if(r<0)switch(e){case 0:return i(5,n,16+r);case 1:return i(0,-r-1,n);case 2:return i(0,n,16+r);case 3:return i(0,16+r,15-n);case 4:return i(2,n,16+r);case 5:return i(4,n,16+r);default:throw new RangeError}if(n>=16)switch(e){case 0:return i(3,15-r,n-16);case 1:return i(2,n-16,r);case 2:return i(3,n-16,r);case 3:return i(5,31-n,15-r);case 4:return i(3,r,31-n);case 5:return i(3,31-n,15-r);default:throw new RangeError}if(r>=16)switch(e){case 0:return i(2,n,r-16);case 1:return i(4,r-16,15-n);case 2:return i(4,n,r-16);case 3:return i(4,31-r,n);case 4:return i(5,n,r-16);case 5:return i(0,n,r-16);default:throw new RangeError}switch(e){case 0:return new t(n+16,r);case 1:return new t(n,r+16);case 2:return new t(n+16,r+16);case 3:return new t(n+32,r+16);case 4:return new t(n+16,r+32);case 5:return new t(n+16,r+48);default:throw new RangeError}}var n=e.createElement("canvas");n.width=n.height=64;var r=n.getContext("2d");this.getCanvasCoordinate=i,this.canvas=n,this.ctx=r}}();var P=34962,H=33071,B=16384,j=2884,F=256,I=2929,q=5126,R=1,U=9728,z=6408,W=35044,X=3553,V=10240,$=10241,J=10242,K=10243,Q=4,G=37440,Y=5121,Z,et,tt,nt,rt,it,st,ot,ut,at,ft,lt,ct,ht=!1,pt=!0,dt=new D,vt="#FF0000",mt=0,gt=e.getElementsByTagName("canvas")[0],yt=s.createContext(gt);if(!yt){location="http://get.webgl.org";return}var bt=yt.attachShader.bind(yt),wt=yt.bindBuffer.bind(yt),Et=yt.bindTexture.bind(yt),St=yt.bufferData.bind(yt),xt=yt.clear.bind(yt),Tt=yt.clearColor.bind(yt),Nt=yt.compileShader.bind(yt),Ct=yt.createBuffer.bind(yt),kt=yt.createProgram.bind(yt),Lt=yt.createShader.bind(yt),At=yt.createTexture.bind(yt),Ot=yt.disable.bind(yt),Mt=yt.drawArrays.bind(yt),_t=yt.enable.bind(yt),Dt=yt.enableVertexAttribArray.bind(yt),Pt=yt.getAttribLocation.bind(yt),Ht=yt.getProgramInfoLog.bind(yt),Bt=yt.getShaderInfoLog.bind(yt),jt=yt.getUniformLocation.bind(yt),Ft=yt.lineWidth.bind(yt),It=yt.linkProgram.bind(yt),qt=yt.pixelStorei.bind(yt),Rt=yt.shaderSource.bind(yt),Ut=yt.texImage2D.bind(yt),zt=yt.texParameteri.bind(yt),Wt=yt.uniform1i.bind(yt),Xt=yt.uniformMatrix4fv.bind(yt),Vt=yt.useProgram.bind(yt),$t=yt.vertexAttribPointer.bind(yt),Jt=yt.viewport.bind(yt),Kt=yt.uniform2f.bind(yt),Qt=new o(gt),Gt=m(75,gt.width/gt.height,.1,1e3),Yt=w(),Zt=w(),en=w([0,1,0]),tn=f(),nn=15;gt.onmousewheel=function(e){var t=e.wheelDelta;t>0&&(nn-=.5),t<0&&(nn+=.5),nn=Math.min(20,Math.max(10,nn)),Tn()};var rn=a(),sn=w(),on=null,un=null,an=null,fn=null,ln=w([1,0,0]),cn=w([0,1,0]),hn=w([0,0,1]),pn=0,dn=0,vn=0,mn=[w([0,0,0]),w([1,0,0]),w([0,1,0]),w([0,0,1]),w([0,0,-1]),w([0,-1,0]),w([-1,0,0])],gn=[],yn=w(),bn=!1,wn=null,En=!1,Sn=null,xn={x:0,y:0},An=function(){var e=w([-1,0,0]),t=w([0,-1,0]),n=w([0,0,-1]),r=[ln,e,cn,t,hn,n],i=w(),s=w();return function(e){b(e,i),x(i);var t=99999,n=-1;for(var o=0;o!==6;o++){var u=r[o];y(i,u,s);var a=N(s);t>a&&(t=a,n=o)}return r[[1,0,3,2,5,4][n]]}}(),Un=[15905,26470,43162,62220,11365,10170,61515,54975,35340,14145,8364];s.loadmanager.loadFiles({files:["cube.obj","sphere.obj","diffuse.shader","faces.gif","skybox.obj","border.shader","heart.obj"],error:function(e,t){},finished:function(t){Z=t["cube.obj"],nt=t["skybox.obj"],et=t["sphere.obj"],rt=t["heart.obj"],st=s.shader.compileProgram(yt,t["diffuse.shader"]),ot=s.shader.compileProgram(yt,t["border.shader"]),on=Fn(t["faces.gif"]),un=Fn(dt.canvas);var n=e.createElement("canvas");n.width=n.height=8,an=Fn(Rn(n,2)),fn=Fn(Rn(n,1));var r=10,i=new Int32Array(r),o=new Int32Array(r),u=new Int32Array(r),a=new Int32Array(r);for(var f=0;f!==r;f++)i[f]=Math.random()*16|0,o[f]=Math.random()*16|0,u[f]=Math.random()*2|0,a[f]=Math.random()*6|0;var l=255,c=!1;mt=setInterval(function(){if(c)return;dt.ctx.beginPath(),dt.ctx.fillStyle="#000000",dt.ctx.globalAlpha=.2,dt.ctx.rect(0,0,64,64),dt.ctx.fill(),dt.ctx.globalAlpha=1;for(var e=0;e!==r;e++){var t=i[e],n=o[e],f=u[e],h=a[e],p=dt.getCanvasCoordinate(h,t,n);dt.ctx.beginPath(),dt.ctx.fillStyle=vt,dt.ctx.rect(p.x,p.y,1,1),dt.ctx.fill(),f?i[e]++:o[e]++}jn(dt.canvas,un),pt||(l===0&&(clearInterval(mt),yt.clearColor(0,0,0,0),yt.clear(B),s=0,c=!0),vt="#"+l.toString(16)+"0000",l-=5,l<0&&(l=0))},100),zn(),s.requestGameFrame(Ln),kn(),Nn(.785),Cn(-0.785)}})}(document,this,Float32Array||Array,Uint32Array||Array,Uint8Array||Array);