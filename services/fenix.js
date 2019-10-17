const axios = require('axios')

const request = function(path){
    const base = 'https://fenix.tecnico.ulisboa.pt/api/fenix/v1'
    return (await axios.get(base + path)).data
}

module.exports.getSpace = function(space){
    return request('/spaces/' + space)
}

module.exports.getSpaceEvents = function(space, day){ // Day must be dd/MM/yyyy
    return request('/spaces/' + space + '?day=' + day)
}