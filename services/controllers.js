const fenix = require('./fenix')

module.exports.getCampi = async function(){
    return await fenix.getSpace('')
}

module.exports.getCampus = async function(campus){
    return await fenix.getSpace(campus)
}

module.exports.getBuildings = async function(campus){
    return (await fenix.getSpace(campus)).containedSpaces
}

module.exports.getDay = async function(room, day){
    return (await fenix.getSpace(id)).containedSpaces
}