const db = require('../db')
const AtividadeNaoEcontradaError = require('../errors/AtividadeNaoEncontradaError')
const CampoVazioError = require('../errors/CampoVazioError')

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

    criarAtividade = async (data) => {
        if (data.descricao && data.titulo && (data.cor.length == 7) && data.user_id) {
            return (await this.service('atividades').insert(data).returning('*'))[0]
        }else{
            throw new CampoVazioError('Campo vazio!')
        }
        
    }

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