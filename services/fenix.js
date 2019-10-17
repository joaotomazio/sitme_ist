const axios = require('axios')

const request = async (path) => {
    const base = 'https://fenix.tecnico.ulisboa.pt/api/fenix/v1'
    return (await axios.get(base + path)).data
}

module.exports.getSpace = (space) => {
    return request('/spaces/' + space)
}

module.exports.getSpaceEvents = (space, day) => { // Day must be dd/MM/yyyy
    return request('/spaces/' + space + '?day=' + day)
}