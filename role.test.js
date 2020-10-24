var roleTest = {

    /** @param {Creep} creep **/
    run: function(creep) {
        creep.say('hi')
        //creep.move(LEFT)
        console.log(creep.moveTo('752b07741a4a643'))
        if(creep.room.controller) {
    if(creep.reserveController(creep.room.controller) == ERR_NOT_IN_RANGE) {
        creep.moveTo(creep.room.controller);
    }
}
    }
    };

module.exports = roleTest;