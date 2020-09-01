const logger = require('./logger.js');
const { Logform } = require('winston');
const { resolve } = require('path');

function func1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error = true;
            if (!error) {
                resolve("your problem has been resolved");

            }
            else {
                reject("your problem has been rejected")
            }
        }, 3000)
    })
}
func1().then((data)=>{logger.info(data)}).catch((data)=>{logger.info(data)})