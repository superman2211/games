window.onload=function(){if(!window.requestAnimationFrame){window.requestAnimationFrame=["webkit","moz","o","ms"].reduce(function(i,t){return i||window[t+"RequestAnimationFrame"]},null)||function(i){window.setTimeout(i,1000/60)}}var n;var k;var l=false;var e=function(i){return document.querySelector(i)};var g=function(i){return document.querySelectorAll(i)};function d(i){e("#shadow").style.visibility="visible";e("#shadow").style.opacity="";var u=e(".active");var v=e("#"+i);var t=e("#dialog");if(u){t.style.opacity="0";setTimeout(function(){v.classList.add("active");if(u){u.classList.remove("active")}t.style.opacity="1";t.style.visibility="visible"},250)}else{v.classList.add("active");t.style.opacity="1";t.style.visibility="visible"}}var b=[0,0,0,0,0].map(function(){return"<svg viewBox='0 0 94 90'><polygon points='47,0 76,90 0,34 94,34 17,90'></polygon></svg>"}).join("");function p(u){var t=document.createElement(u[0]);if(u[1]){for(var i in u[1]){t.setAttribute(i,u[1][i])}}if(typeof(u[2])=="string"){t.innerHTML=u[2]}else{if(u[2]){u[2].forEach(function(v){t.appendChild(p(v))})}}return t}function q(t,i){while(t&&t.tagName!=i){t=t.parentElement}return t}function j(w,y,i){var v=h(w);if(v.time<y){return}localStorage.setItem("score-level-"+w,JSON.stringify({time:y,stars:i}));var t=e("tr[data-id='"+w+"']");var u=t.children[1];u.className="stars star-"+i;var x=t.children[2];x.innerHTML=r(y)}function r(i){if(!i||i==Infinity){return"---"}return i.toFixed(2)+"s"}function h(i){return JSON.parse(localStorage.getItem("score-level-"+i))||{stars:null,time:Infinity}}function s(u){a.stop();var t=e("#shadow");var i=e("#dialog");t.style.opacity="1";i.style.opacity="0";setTimeout(function(){var w=e(".active");if(w){w.classList.remove("active")}t.style.opacity="0";n=a.setLevel(Time.getLevel(u));a.step();a.render();var x=3;e("#time-display").style.visibility="visible";e("#time-display").innerHTML=x.toString();var v=setInterval(function(){e("#time-display").innerHTML=(--x).toString();if(!x){clearInterval(v);a.start();l=true;e("#time-display").classList.add("playing")}},1000);setTimeout(function(){t.style.visibility="hidden";i.style.visibility="hidden"},500)},500)}var a=new Time.GameView(e("canvas"));a.setLevel(Time.getDemoLevel());a.addRenderObject({render:function(){if(l){e("#time-display").innerHTML=Time.getTime().toFixed(2)+"s"}}});a.gameOverCallback=function(v,u,i){if(!n){return}if(v){j(n.id,u,i);e("#after-game .score .stars").className="stars star-"+i;e("#after-game .score .time").innerHTML=r(u)}e("#after-game .score").style.display=v?"":"none";e("#after-game .level-name").innerHTML=n.name;e("#after-game .message").innerHTML=v?"Level finished!":"You lost! Better luck next time!";if(n.id+1>k){e("#btnNext").setAttribute("disabled","disabled")}else{e("#btnNext").removeAttribute("disabled")}var t=h(n.id);e("#after-game .highscore .stars").className="stars star-"+t.stars;e("#after-game .highscore .time").innerHTML=r(t.time);l=false;e("#time-display").style.visibility="";e("#time-display").classList.remove("playing");d("after-game")};document.body.addEventListener("click",function(t){var u=t.target;if(u.tagName!="BUTTON"){return}var i=u.getAttribute("data-goto");if(i){d(i)}});e("#btnReplay").addEventListener("click",function(){s(n.id)});e("#btnNext").addEventListener("click",function(){s(n.id+1)});var o=e("#levels-list tbody");var f=Time.getLevels();f.map(function(t){var i=h(t.id);return p(["tr",{"data-id":t.id},[["td",{},t.name],["td",{"class":"stars star-"+i.stars}],["td",{},r(i.time)]]])}).forEach(function(i){o.appendChild(i)});k=f.length;var c=g(".stars");for(var m=0;m<c.length;m++){c[m].innerHTML=b}o.addEventListener("click",function(i){var t=q(i.target,"TR");if(!t){return}s(parseInt(t.getAttribute("data-id")))});a.start()};