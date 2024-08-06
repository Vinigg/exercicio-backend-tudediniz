const AtividadeNaoEcontradaError = require('../../errors/AtividadeNaoEncontradaError')
const UsuarioNaoEncontradoError = require('../../errors/UsuarioNaoEncontradoError')

module.exports = (error) =>{
    if(error.originalError instanceof AtividadeNaoEcontradaError) {
        return new Error(error.message)
    }
    if(error.originalError instanceof UsuarioNaoEncontradoError) {
        return new Error(error.message)
    }
    return error
}