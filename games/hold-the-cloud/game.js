function Cloud(a){this.image=cloudImage;this.x=0;this.y=$("sky").clientHeight/2-cloudHeight/2;this.hold=false;this.level=a}function $(a){return document.getElementById(a)}function getHTML(a){return $(a).innerHTML}function setHTML(a,b){$(a).innerHTML=b}function display(a,b){$(a).style.display=b}function hide(a){display(a,"none")}function keyEventHandler(a,b,c){var d;if(!a)a=window.event;if(a.keyCode)d=a.keyCode;else if(a.which)d=a.which;if(d==toHoldKeycode||b){cloud.hold=c}}function getMaxY(a){return-1}function getMinY(a){return $("sky").clientHeight-cloudHeight}function getSkyLevelHeight(a){return canvasHeight=canvasHeight-a/250}function setSkyHeight(a){$("sky").style.height=a+"px"}function randomFromInterval(a,b){return Math.floor(Math.random()*(b-a+1)+a)}function addPoints(a){setHTML("points",parseInt(getHTML("points"))+a)}function showPoints(a){if(getHTML("points-report")==""){display("points-report","inline");setHTML("points-report",a);setTimeout("setHTML('points-report', '')",600);setTimeout("hide('points-report')",600)}}function initialize(){hide("levels");setHTML("points",0);display("points","inline");display("points-label","inline");canvasHeight=canvasInitHeight;setSkyHeight(canvasInitHeight);startLevel(1)}function startLevel(a){playLevel=true;cloud=new Cloud(a);setHTML("level-number",a);var b=playTimePerLevel;timerId=setInterval(function(){b--;if(b<1){clearInterval(timerId);endLevel()}else{setHTML("level-timer","Hold on during "+b.toString()+" seconds!")}},1e3);updateGame()}function endLevel(){playLevel=false;setHTML("level-timer","Well done!");if(cloud.level==maxLevels){setHTML("level-timer","Congratulations! You win this time")}else{var a=cloud.level+1;var b=waitTimePerLevel;timerId=setInterval(function(){b--;if(b<1){clearInterval(timerId);startLevel(a)}else{setHTML("level-timer","Get ready! Level "+a+" starts in "+b.toString()+" seconds.");cloud=new Cloud(a);render()}},1e3)}}function updateGame(){processUserInput();render();if(playLevel)setTimeout(updateGame,24)}function processUserInput(){if(cloud.y<getMaxY(cloud.level)||cloud.y>getMinY(cloud.level)){gameOver()}else{if(cloud.hold){cloud.y=cloud.y-1+cloud.level/1e3;cloud.x=randomFromInterval(-3,3)}else{cloud.y=cloud.y+3;cloud.x=0}addPoints(getPointsFromAccuraty((cloud.y+cloudHeight/2)/2,canvasHeight/2))}}function getPointsFromAccuraty(a,b){var c=Math.round(a*100/b);for(rank in votes){if(c>=votes[rank].min&&c<=votes[rank].max){var d=votes[rank].points;if(d==5)showPoints("PERFECT!");return d}}}function render(){setSkyHeight(getSkyLevelHeight(cloud.level));context.clearRect(0,0,canvasWidth,canvasHeight);context.drawImage(cloud.image,cloud.x,cloud.y)}function gameOver(){playLevel=false;clearInterval(timerId);setHTML("level-timer","FAIL! Play one more time and try again ;-)");display("levels","block")}var maxLevels=13;var playTimePerLevel=13;var waitTimePerLevel=3;var toHoldKeycode=13;var canvasWidth=132;var canvasHeight=300;var canvasInitHeight=300;var canvas=$("cloud");var context=canvas.getContext("2d");var cloudImage=new Image;cloudImage.onload=function(){context.drawImage(cloudImage,0,$("sky").clientHeight/2-cloudHeight/2)};cloudImage.src="images/cloud.png";var cloudHeight=78;var votes=[{min:0,max:35,points:0},{min:36,max:44,points:1},{min:45,max:55,points:5},{min:56,max:84,points:1},{min:85,max:100,points:0}];var cloud;var timerId;var playLevel=false