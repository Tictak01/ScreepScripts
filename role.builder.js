var roleBuilder = {

    /** @param {Creep} creep **/
    run: function(creep) {

        if(creep.memory.building && creep.store[RESOURCE_ENERGY] == 0) {
            creep.memory.building = false;
            creep.say('🔄 harvest');
        }
        if(!creep.memory.building && creep.store.getFreeCapacity() == 0) {
            creep.memory.building = true;
            creep.say('🚧 build');
        }

        if(creep.memory.building) {
            var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
            if(targets.length) {
                if(creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
            var roads = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => structure.structureType == STRUCTURE_ROAD
            })
            if(targets.length == 0) {
                for(var road of roads){
                    if(creep.pos.isEqualTo(road)){
                        creep.move(LEFT)
                    }
                        
                        
                }
                
            }
        }
        else {
            var sourceChoice = 0;
            var blockerCount = -1;
            var sources = creep.room.find(FIND_SOURCES);
            var sourceTop = sources[sourceChoice].pos.y - 1;
            var sourceBottom = sources[sourceChoice].pos.y + 1;
            var sourceLeft = sources[sourceChoice].pos.x - 1;
            var sourceRight = sources[sourceChoice].pos.x + 1;
            var sourceRoom = sources[sourceChoice].pos.roomName;
            //console.log(sourceRight);

            for(var element of Game.rooms[sourceRoom].lookAtArea(sourceTop,sourceLeft,sourceBottom,sourceRight,true)){
                if(element['terrain'] == 'wall'){
                    blockerCount += 1;
                };
                if(element['type'] == 'creep' && creep.name != element['creep'].name){
                    blockerCount += 1;
                };
                
            }
            //console.log(blockerCount);
            if(blockerCount >= 8){
                sourceChoice += 1;
            }
            if(sources[sourceChoice].energy <= 100 && sourceChoice == 0)
            {
                sourceChoice += 1;
            }
            if(sources[sourceChoice].energy <= 100 && sourceChoice == 1)
            {
                sourceChoice -= 1;
            }

            if(creep.harvest(sources[sourceChoice]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[sourceChoice], {visualizePathStyle: {stroke: '#ffaa00'}});
            }
        }
        if(creep.ticksToLive <= 20){
            creep.say('☠️');
        }
    }
};

module.exports = roleBuilder;