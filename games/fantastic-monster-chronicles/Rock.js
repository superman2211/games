var Rock=function(o,i){this.ctx=ctx,this.image=scaledMap,this.tileId=r_,this.width=tileSize,this.height=tileSize,this.x=o,this.y=i,this.collisionGroup=[],this.eggCollisionGroup=[]};Rock.prototype=new Sprite,Rock.prototype.constructor=Rock,Rock.prototype.addItemToCollisionGroup=function(o){this.collisionGroup.push(o)},Rock.prototype.addGroupToCollisionGroup=function(o){for(var i=0;i<o.length;i++)this.addItemToCollisionGroup(o[i])},Rock.prototype.addRocksToCollisionGroup=function(o){for(var i=0;i<o.length;i++){var t=o[i];(t.x!=this.x||t.y!=this.y)&&this.addItemToCollisionGroup(t)}},Rock.prototype.canMove=function(o,i){var t=this.newCollisionMask(this.x+o+5,this.y+i+5,this.width-10,this.height-10),s=this.collided(this.collisionGroup,t)||this.collided(this.eggCollisionGroup,t);return s?!1:(this.x+=o,this.y+=i,!0)};