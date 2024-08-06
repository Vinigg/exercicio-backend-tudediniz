const db = require('../db')
const UsuarioNaoEncontradoError = require('../errors/UsuarioNaoEncontradoError')

class UsuarioService{
    constructor(service){
        this.service = service
    }
    async usuarios() {return await this.service('usuarios')}
    async usuario(id) {return await this.service('usuarios').where('id', id).first()}

    criarUsuario = async (data) => await (await this.service('usuarios').insert(data).returning('*'))[0]
    atualizarUsuario = async (id, data) => {        
        const usuarioProcurado =  await(await this.service('usuarios').where({id}).update(data).returning('*'))[0]
        if(usuarioProcurado != null){
            return usuarioProcurado
        }
        throw new UsuarioNaoEncontradoError('Usuario não encontrado!')
    }
    deletarUsuario = async (filtro) => {
        if (filtro.id) {
            return await this.service('usuarios').where({id: filtro.id}).delete();
        }
        throw new UsuarioNaoEncontradoError('Necessário informar id!')
    }
}

module.exports = new UsuarioService(db)