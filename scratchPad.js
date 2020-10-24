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