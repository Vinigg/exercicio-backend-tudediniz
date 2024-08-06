class AtividadeNaoEcontradaError extends Error {
    constructor(message,...args) {
        super(message, ...args)

        this.message = message
        this.name = 'AtividadeNaoEcontradaError'
    }
}

module.exports = AtividadeNaoEcontradaError