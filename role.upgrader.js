var roleUpgrader = {

    /** @param {Creep} creep **/
    run: function(creep) {

        if(creep.memory.upgrading && creep.store[RESOURCE_ENERGY] == 0) {
            creep.memory.upgrading = false;
            creep.say('🔄 harvest');
        }
        if(!creep.memory.upgrading && creep.store.getFreeCapacity() == 0) {
            creep.memory.upgrading = true;
            creep.say('⚡ upgrade');
        }

        if(creep.memory.upgrading) {
            if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.room.controller, {visualizePathStyle: {stroke: '#ffffff'}});
            }
        }
        
        else {
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
            
            if(creep.withdraw(sources[sourceChoice],'energy',100) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[sourceChoice], {visualizePathStyle: {stroke: '#ffaa00'}});
            }
        
        }
        if(creep.ticksToLive <= 20){
            creep.say('☠️');
        }
    }
};

module.exports = roleUpgrader;