class UsuarioNaoEncontradoError extends Error {
    constructor(message,...args) {
        super(message, ...args)

        this.message = message
        this.name = 'UsuarioNaoEncontradoError'
    }
}

module.exports = UsuarioNaoEncontradoError