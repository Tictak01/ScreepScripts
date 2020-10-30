var roleHarvester = {

    /** @param {Creep} creep **/
    run: function(creep) {

        if(creep.memory.harvesting && creep.store[RESOURCE_ENERGY] == 0) {
            creep.memory.harvesting = false;
            creep.say('🔄 harvest');
        }
        if(!creep.memory.harvesting && creep.store.getFreeCapacity() == 0) {
            creep.memory.harvesting = true;
            creep.say('deliver');
            creep.memory.atSource = 0;
            creep.memory.sourceChoice = 0;
        }

        var sourceChoice = 0;
        var blockerCount = -1;
        if(!creep.memory.harvesting) {
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
            
            if(creep.memory.atSource == 1 && creep.memory.sourceChoice == 1 && blockerCount < 8){
                sourceChoice += 1;
            }
            if(blockerCount >= 8){
                sourceChoice += 1;
                creep.memory.sourceChoice = 1
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
            else if(creep.harvest(sources[sourceChoice]) == OK) {
                creep.memory.atSource = 1;
            }
        }

        if(creep.memory.harvesting) {
            var targets = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType == STRUCTURE_EXTENSION || structure.structureType == STRUCTURE_SPAWN || structure.structureType == STRUCTURE_TOWER) &&
                        structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
                }
            });

            if(targets.length == 0){
                var targets = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_EXTENSION || structure.structureType == STRUCTURE_SPAWN || structure.structureType == STRUCTURE_TOWER || structure.structureType == STRUCTURE_STORAGE) &&
                            structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
                    }
                });
            }
            
            if(targets.length > 0) {
                var nearestNode = 0;
                var distance = creep.pos.getRangeTo(targets[0].pos);
                for(var target in targets){
                    if(creep.pos.getRangeTo(targets[target].pos) < distance){
                        distance = creep.pos.getRangeTo(targets[target].pos);
                        nearestNode = target;
                    }
                }
                
                if(creep.transfer(targets[nearestNode], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[nearestNode], {visualizePathStyle: {stroke: '#ffffff'}});
                    creep.memory.atSource = 0;
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


        
        if(creep.ticksToLive <= 20){
            creep.say('☠️');
        }
    }
};

module.exports = roleHarvester;