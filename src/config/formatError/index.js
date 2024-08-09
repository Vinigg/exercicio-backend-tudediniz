const AtividadeNaoEcontradaError = require('../../errors/AtividadeNaoEncontradaError')
const CampoVazioError = require('../../errors/CampoVazioError')
const UsuarioNaoEncontradoError = require('../../errors/UsuarioNaoEncontradoError')

module.exports = (error) =>{
    if(error.originalError instanceof AtividadeNaoEcontradaError) {
        return new Error(error.message)
    }
    if(error.originalError instanceof UsuarioNaoEncontradoError) {
        return new Error(error.message)
    }
    if(error.originalError instanceof CampoVazioError) {
        return new Error(error.message)
    }
    if (error.originalError.message.endsWith(('was not provided.'))) {
        return new Error('Campo vazio no formato!')
    }
    return error
}