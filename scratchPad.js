for(var creep in Game.creeps){console.log(Game.creeps[creep].moveTo(15,33))}
for(var creep in Game.creeps){console.log(Game.creeps[creep].pos)}
for(var creep in Game.creeps){console.log(Game.creeps[creep].room.find(FIND_STRUCTURES))}

var roads = creep.room.find(FIND_STRUCTURES, {
    filter: (structure) => structure.structureType == STRUCTURE_ROAD
})

Game.creeps['Repairer25941'].pos
Game.creeps['Repairer25941'].room.find(FIND_STRUCTURES, {filter: (structure) => structure.structureType == STRUCTURE_ROAD})

Game.creeps['Test33836'].claimController(Game.creeps['Test33836'].room.controller)
Game.creeps['Test33836'].moveTo(Game.creeps['Test33836'].room.controller)

for(var roomy in Game.rooms){console.log(roomy)}

for(var element in Game.rooms['W2N5']){console.log(element)}

//Gives list of all things at a location.  Terrain appears to be a constant.
for(var element of Game.rooms['W2N5'].lookAt(13,39)){console.log(element['type'])}

//Check for terrain walls and creeps.  If they equal 9, then the object is surrounded and cannot be accessed.

//Find all elements surrounding the resource
for(var element of Game.rooms['W2N5'].lookAtArea(38,12,40,14,true)){console.log(element['type'])}

//Count the walls.  Note the source itself also has a wall, so minus one wall.
var blockerCount = -1;
for(var element of Game.rooms['W2N5'].lookAtArea(38,12,40,14,true)){
    if(element['terrain'] == 'wall'){
        blockerCount += 1;
        console.log(blockerCount);
    };
}

//Count the creeps
var blockerCount = -1;
for(var element of Game.rooms['W2N5'].lookAtArea(38,12,40,14,true)){
    if(element['terrain'] == 'wall'){
        blockerCount += 1;
    };
    if(element['type'] == 'creep'){
        blockerCount += 1;
    };
    console.log(blockerCount);
}

var blockerCount = -1;
for(var element of Game.rooms['W2N5'].lookAtArea(38,12,40,14,true)){
    if(element['terrain'] == 'wall'){
        blockerCount += 1;
    };
    if(element['type'] == 'creep'){
        blockerCount += 1;
        console.log(element['creep'].name)
    };
    
}

var sources = creep.room.find(FIND_SOURCES);
sources[0].pos;
var sources = Game.creeps['Harvester77930'].room.find(FIND_SOURCES); sources[0].pos;

//worked
for(var element of Game.rooms['W2N5'].lookAtArea(38,12,40,14,true)){     console.log(element['type']);     if(element['terrain'] == 'wall'){         console.log('sup')     }; }

//don't take creep when working
var creep = Game.creeps['Upgrader88488'];
var sources = Game.creeps['Upgrader88488'].room.find(FIND_SOURCES); 
sources[0].pos.roomName;
var sourceChoice = 0;
var sourceRoom = sources[sourceChoice].pos.roomName;
var sources = creep.room.find(FIND_SOURCES);
var sourceChoice = 0;
var blockerCount = -1;
var sourceTop = sources[sourceChoice].pos.y - 1;
var sourceBottom = sources[sourceChoice].pos.y + 1;
var sourceLeft = sources[sourceChoice].pos.x - 1;
var sourceRight = sources[sourceChoice].pos.x + 1;
var sourceRoom = sources[sourceChoice].pos.roomName;
console.log(Game.rooms[sourceRoom].lookAtArea(sourceTop,sourceLeft,sourceBottom,sourceRight,true));
for(var element of Game.rooms[sourceRoom].lookAtArea(sourceTop,sourceLeft,sourceBottom,sourceRight,true)){
    if(element['terrain'] == 'wall'){
        blockerCount += 1;
    };
    if(element['type'] == 'creep'){
        blockerCount += 1;
    };
    console.log(blockerCount);
}

var creep = Game.creeps['Upgrader91693'];
var targets = creep.room.find(FIND_STRUCTURES, {
    filter: (structure) => {
        return (structure.structureType == STRUCTURE_EXTENSION || structure.structureType == STRUCTURE_SPAWN || structure.structureType == STRUCTURE_CONTAINER || structure.structureType == STRUCTURE_TOWER) &&
            structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
    }
});
creep.pos.getRangeTo(targets[0].pos);

//For emails
game.notify

var creep = Game.creeps['Harvester107875'];
var sources = creep.room.find(FIND_SOURCES);
sources[0].energy;



var creep = Game.creeps['Upgrader115558'];
var sources = creep.room.find(FIND_STRUCTURES, {
    filter: (structure) => {
        return (structure.structureType == STRUCTURE_CONTAINER);
    }
});
var sourceChoice = 0;
for(var element in sources){
    if(sources[element].store[RESOURCE_ENERGY] >= 100){
        sourceChoice = element;
        console.log(sourceChoice)
    };
}