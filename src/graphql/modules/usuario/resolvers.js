module.exports = {
    Query:{
        usuarios: async (obj, args, context) => await context.usuarioService.usuarios(),
    },
    Mutation:{
        criarUsuario: async (_,{data}, {usuarioService}) => await usuarioService.criarUsuario(data),
        atualizarUsuario: async (_,{id, data}, {usuarioService}) => await usuarioService.atualizarUsuario(id,data),
        deletarUsuario: async (_,{filtro}, {usuarioService}) => await usuarioService.deletarUsuario(filtro)

    } 
}