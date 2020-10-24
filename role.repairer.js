var roleRepairer = {

    /** @param {Creep} creep **/
    run: function(creep) {
        if(creep.memory.repairing && creep.store[RESOURCE_ENERGY] == 0) {
            creep.memory.repairing = false;
            creep.say('🔄 reserves');
        }
        if(!creep.memory.repairing && creep.store.getFreeCapacity() == 0) {
            creep.memory.repairing = true;
            creep.say('⚒️ repair');
        }

        if(creep.memory.repairing) {
            //var targets = creep.room.find(FIND_STRUCTURES);
            var closestDamagedStructure = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => structure.hits < structure.hitsMax
            })
            if(closestDamagedStructure.length) {
                if(creep.repair(closestDamagedStructure[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(closestDamagedStructure[0], {visualizePathStyle: {stroke: '#ffabff'}});
                }
            }
            var roads = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => structure.structureType == STRUCTURE_ROAD
            })
            //console.log(roads)
            if(closestDamagedStructure.length == 0) {
                for(var road of roads){
                    //console.log(road)
                    if(creep.pos.isEqualTo(road)){
                        creep.move(LEFT)
                        
                    }
                    
                }
            }
            
        }
        if(!creep.memory.repairing) {
            var sources = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType == STRUCTURE_CONTAINER);
                }
            });
            if(creep.withdraw(sources[0],'energy',50) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#ffaa00'}});
            }
        }
    }
};

module.exports = roleRepairer;