module.exports ={
    Atividade:{
        async usuario(atividade ,_, context){
            return await context.usuarioService.usuario(atividade.user_id)
        }
    },
    Query: {
        atividades: async (obj, args, context) => await context.atividadeService.atividades(),
        atividade: async (obj, {id}, context) => await context.atividadeService.atividade(id),
    },
    Mutation:{
        criarAtividade: async (_,{data}, {atividadeService}) => await atividadeService.criarAtividade(data),
        atualizarAtividade: async (_,{id, data}, {atividadeService}) => await atividadeService.atualizarAtividade(id,data),
        deletarAtividade: async (_,{filtro}, {atividadeService}) => await atividadeService.deletarAtividade(filtro)

    } 
}