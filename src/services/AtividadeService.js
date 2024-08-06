const db = require('../db')
const AtividadeNaoEcontradaError = require('../errors/AtividadeNaoEncontradaError')

class AtividadeService {
    constructor(service){
        this.service = service
    }
    atividade = async (id)=> {
        const atividadeProcurada = await (this.service('atividades').where({id}).first())
        if(atividadeProcurada != null){return atividadeProcurada}
        throw new AtividadeNaoEcontradaError('Atividade nao encontrada')
    }
    
    atividades =  async ()=> await this.service('atividades')

    criarAtividade = async (data) => await (await this.service('atividades').insert(data).returning('*'))[0]

    atualizarAtividade = async (id, data) => {        
            const atividadeProcurada =  await(await this.service('atividades').where({id}).update(data).returning('*'))[0]
            if(atividadeProcurada != null){
                return atividadeProcurada
            }
            throw new AtividadeNaoEcontradaError('Atividade não encontrada!')
        }

    deletarAtividade = async (filtro) => {
        if (filtro.id) {
            return await this.service('atividades').where({id: filtro.id}).delete();
        }
        throw new AtividadeNaoEcontradaError('Necessário informar id!')
    }
}

module.exports = new AtividadeService(db);