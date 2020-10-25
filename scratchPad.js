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



//worked
for(var element of Game.rooms['W2N5'].lookAtArea(38,12,40,14,true)){     console.log(element['type'])     if(element['terrain'] == 'wall'){         console.log('sup')     }; }