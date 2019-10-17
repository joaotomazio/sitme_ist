const fenix = require('./fenix')

module.exports.getCampi = function(){
    return fenix.getSpace('')
}

module.exports.getCampus = function(campus){
    return fenix.getSpace(campus)
}

module.exports.getBuildings = function(campus){
    return fenix.getSpace(campus).containedSpaces
}

module.exports.getRoom = function(room){
    return fenix.getSpace(room)
}

module.exports.getDay = function(room, day){
    return fenix.getSpaceEvents(room, day).events
}