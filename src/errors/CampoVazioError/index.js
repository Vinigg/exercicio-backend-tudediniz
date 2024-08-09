class CampoVazioError extends Error {
    constructor(message,...args) {
        super(message, ...args)

        this.message = message
        this.name = 'CampoVazioError'
    }
}

module.exports = CampoVazioError