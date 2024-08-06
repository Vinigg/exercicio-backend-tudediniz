const AtividadeService = require('../../services/AtividadeService')
const UsuarioService = require('../../services/UsuarioService')


module.exports = () => ({
    atividadeService: AtividadeService,
    usuarioService: UsuarioService,
})