
const {
    createLogger,
    format,
    transports,
    transport,
} = require("winston");

const logger = createLogger({
    transports: [
        new transports.File({
            filename: 'silly.log',
            level: 'silly',
            format: format.combine(format.timestamp(), format.json())
        }),
        new transports.File({
            filename: 'error.log',
            level: 'error',

        }),
        new transports.File({
            filename : 'info.log',
            level : 'info',
            format: format.combine(format.timestamp(), format.json())
        })
    ]
})
module.exports = logger;