function Game(t){this.debug=!0,this.initialised=!1,this.info=!1,this.time=0,this.timepassed=0,this.canvas=document.getElementById("canvas"),this.context=this.canvas.getContext("2d"),this.canvas.width=document.body.clientWidth-10,this.canvas.height=document.body.clientHeight-10,this.mouse=utils.captureMouse(this.canvas),this.camera=new Camera(this),this.level=new Level(this),this.player=new Player(this),this.game_started=!1,this.ship_wait_time=0,this.messages=[],this.state={_current:0,PLANET:0,UNIVERSE:1,UNIVERSE_VIEW:2},this.universe=[],this.current_world=null,this.num_worlds=10,document.getElementById("ui").style.display="none",document.getElementById("menu").style.display="none",document.getElementById("build_menu").style.display="none",this.start_world=null}Game.prototype.generateUniverse=function(t){for(var e=[],s=0;s<t;s++)e.push(new Asteroid(s,this));return e},Game.prototype.playGame=function(t){document.getElementById("titlescreen").style.display="none",document.getElementById("ui").style.display="block",document.getElementById("menu").style.display="block",document.getElementById("build_menu").style.display="block",Game.game_started=!0,Game.Init(30)},Game.prototype.Init=function(t){this.initialised=!1,this.fps=t||25,this.timeSinceLastFrame=(new Date).getTime(),this.timeBetweenFrames=1/t,this.night_time=!0,this.game_objects=[],this.camera.Init(),this.universe=this.generateUniverse(this.num_worlds);for(var e=0;e<this.universe.length;e++)this.universe[e].sim.Init();this.current_world=this.universe[0],this.current_world.sim.P=1,this.current_world.sim.store=1e3,this.current_world.sim.M=2500+Math.floor(180+150*Math.random())*this.current_world.sim.P,this.current_world.discovered=!0,this.current_world.colonised=!0,this.level.Init(),this.player.Init("pink",void 0,200),this.camera.Set(this.level),this.cargo_ship=new Ship(this),this.cargo_ship.Init(),document.getElementById("world-id").innerHTML=this.current_world.id,1==this.game_started&&(this.cargo_ship.drawSellMenu(),document.getElementById("menu").style.display="block"),this.initialised=!0},Game.prototype.keydown=function(t){this.initialised&&(this.player.keydown(t),this.camera.keydown(t))},Game.prototype.keyup=function(t){this.initialised&&(this.player.keyup(t),this.camera.keyup(t))},Game.prototype.GameOver=function(){},Game.prototype.addMessage=function(t,e){this.messages.push(t+": "+e),console.log("Message",e)},Game.prototype.ProcessMessages=function(){if(this.messages.length==[])this.drawAlert("Nothing to report.");else for(var t=0;t<this.messages.length;t++)this.drawAlert(this.messages[t]),this.time&&(this.messages.length<=1?this.messages=[]:this.messages.splice(t,1))},Game.prototype.drawAlert=function(t){var e='<span id="mymessage" class="title">'+t+"</span>";document.getElementById("alert_text").innerHTML=e},Game.prototype.Resize=function(){var t=window.innerHeight,e=window.innerWidth;if(t>e)this.ratio=this.canvas.height/this.canvas.width,this.ratio*e;else{this.ratio=this.canvas.width/this.canvas.height;this.ratio}},Game.prototype.Timer=function(t){return this.timepassed>=2?(this.timepassed=0,!0):(this.timepassed+=t,!1)},Game.prototype.getLift=function(){this.state._current==this.state.PLANET&&(this.state._current=this.state.UNIVERSE)},Game.prototype.showStarMap=function(){this.state._current==this.state.PLANET?(this.state._current=this.state.UNIVERSE_VIEW,document.getElementById("get-lift").innerHTML="Back",this.start_world=this.current_world):this.state._current==this.state.UNIVERSE_VIEW&&(this.state._current=this.state.PLANET,document.getElementById("get-lift").innerHTML="Star map",this.current_world=this.start_world)},Game.prototype.increaseSale=function(t){var e=0;switch(t){case"ore":e=100;break;case"food":e=10;break;case"worker":e=1;break;case"water":e=10}this.cargo_ship.supply[t].bought+e<=this.cargo_ship.supply[t].total+this.cargo_ship.supply[t].bought&&(this.cargo_ship.supply[t].total-=e,this.cargo_ship.supply[t].bought+=e,document.getElementById(t+"saletotal").innerHTML=parseInt(this.cargo_ship.supply[t].bought),document.getElementById("total"+t).innerHTML=parseInt(this.cargo_ship.supply[t].total))},Game.prototype.decreaseSale=function(t){var e=0;switch(t){case"ore":e=100;break;case"food":e=10;break;case"worker":e=1}this.cargo_ship.supply[t].bought-e>=0&&(this.cargo_ship.supply[t].total+=e,this.cargo_ship.supply[t].bought-=e,document.getElementById(t+"saletotal").innerHTML=this.cargo_ship.supply[t].bought,document.getElementById("total"+t).innerHTML=this.cargo_ship.supply[t].total)},Game.prototype.Sell=function(t="ore"){this.current_world.sim.M+=this.cargo_ship.supply[t].bought*this.cargo_ship.supply[t].cost,this.current_world.sim.store-=this.cargo_ship.supply[t].bought,this.cargo_ship.supply[t].bought=0,document.getElementById(t+"saletotal").innerHTML=this.cargo_ship.supply[t].bought,document.getElementById("profit").innerHTML=this.cargo_ship.supply[t].bought*this.cargo_ship.supply[t].cost,this.cargo_ship.drawSellMenu()},Game.prototype.Purchase=function(t){this.current_world.sim.M-=this.cargo_ship.supply[t].bought*this.cargo_ship.supply[t].cost,this.current_world.sim[t]+=this.cargo_ship.supply[t].bought,this.cargo_ship.supply[t].bought=0,document.getElementById(t+"saletotal").innerHTML=this.cargo_ship.supply[t].bought,document.getElementById("profit").innerHTML=this.cargo_ship.supply[t].bought*this.cargo_ship.supply[t].cost,this.cargo_ship.drawSellMenu()},Game.prototype.getMouseCollision=function(t,e){var s=e.x-t.x,i=e.y-t.y;return dist=Math.sqrt(s*s+i*i),dist<25},Game.prototype.update=function(){if(this.initialised){var t=(new Date).getTime();if(this.dt=(t-this.timeSinceLastFrame)/1e3,this.timeSinceLastFrame=t,this.time=this.Timer(this.dt),this.current_world.id!=this.cargo_ship.current_world.id?document.getElementById("menu").style.display="none":document.getElementById("menu").style.display="block",this.time){for(var e=0;e<this.universe.length;e++)this.universe[e].sim.update(),this.universe[e].sim.day+=this.universe[e].sim.day_speed,this.universe[e].sim.day>=365&&(this.universe[e].sim.year+=1,Game.addMessage("MineCorp","You survived another year! (^__^)/"));this.ship_wait_time>=2&&1==this.cargo_ship.show&&Game.addMessage("MINECORP CARGO SHIP","Cargo ship leaving soon...!"),this.ship_wait_time>=3&&1==this.cargo_ship.show&&(this.cargo_ship.leave(),this.ship_wait_time=0,Game.addMessage("MINECORP CARGO SHIP","Cargo ship has left for asteroid "+this.cargo_ship.current_world.id)),this.ship_wait_time>=4&&0==this.cargo_ship.show&&Game.addMessage("MINECORP CARGO SHIP","Cargo ship arriving shortly...!"),this.ship_wait_time>=5&&0==this.cargo_ship.show&&(this.cargo_ship.arrive(),this.cargo_ship.drawSellMenu(),this.ship_wait_time=0,Game.addMessage("MINECORP CARGO SHIP","Cargo ship orbiting!")),this.ship_wait_time+=this.current_world.sim.day_speed,this.ProcessMessages(),document.getElementById("day").innerHTML=parseInt(this.current_world.sim.day),document.getElementById("year").innerHTML=this.current_world.sim.year}if(this.state._current==this.state.UNIVERSE)for(var s=0;s<this.universe.length;s++){var i=this.universe[s];1==(r=this.getMouseCollision(this.mouse,i))&&(1==this.mouse.clicked?(this.mouse.clicked=!1,this.current_world=i,this.state._current=this.state.PLANET,document.getElementById("world-id").innerHTML=this.current_world.id,this.player.y=-100,this.cargo_ship.Init(),this.cargo_ship.current_world.id=i.id):r=!1),i.collision=r}if(this.state._current==this.state.UNIVERSE_VIEW)for(s=0;s<this.universe.length;s++){var r;i=this.universe[s];1==(r=this.getMouseCollision(this.mouse,i))&&(1==this.mouse.clicked?(this.mouse.clicked=!1,this.current_world=i):r=!1),i.collision=r}this.level.update(this.dt),this.player.update(this.dt),this.cargo_ship.update(this.dt),this.camera.update(this.dt)}},Game.prototype.draw=function(t){this.initialised&&(this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.level.starfield.draw(this.dt,this.context,this.camera.xScroll,this.camera.yScroll),this.current_world.sim.draw(this.dt,this.context,this.camera.xScroll,this.camera.yScroll),this.state._current==this.state.PLANET?(this.level.draw(this.dt,this.context,this.camera.xScroll,this.camera.yScroll),this.player.draw(this.dt,this.context,this.camera.xScroll,this.camera.yScroll)):this.drawUniverse(this.dt,this.context,this.camera.xScroll,this.camera.yScroll),this.cargo_ship.draw(this.dt,this.context,this.camera.xScroll,this.camera.yScroll))},Game.prototype.drawUniverse=function(t,e,s,i){e.fillStyle="rgba(255,255,255,0.2)",e.fillRect(0,0,this.canvas.width,this.canvas.height);for(var r=0;r<this.universe.length;r++){var a=this.universe[r];0==a.destroyed&&(a.id==this.current_world.id?(e.fillStyle="rgba(255, 255, 0, 1)",e.fillRect(a.x,a.y,16,16),e.fillText("Home",a.x+16,a.y)):e.fillText("Asteroid "+a.id,a.x+16,a.y),a.colonised&&(e.fillStyle="green",e.beginPath(),e.arc(a.x+8,a.y+8,a.starSize,0,2*Math.PI,!0),e.closePath(),e.fill()),e.save(),e.fillStyle="rgba(255,255,255,1)",e.beginPath(),e.arc(a.x+8,a.y+8,a.starsize,0,2*Math.PI,!0),e.closePath(),e.fill(),e.restore())}};