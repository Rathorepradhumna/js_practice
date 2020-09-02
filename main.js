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
                logger.silly("inside file");
                reject("your problem has been rejected")
            }
        }, 3000)
    })
}

let calcuator = {
    add : (num1,num2) => logger.info(num1+num2),
    sub : (num1,num2) => logger.info(num1-num2),
}

//logger.info("before function call");
//func1().then((data)=>{logger.info(data)}).catch((data)=>{logger.error(data)})
//logger.info("after function call")

calcuator.add(2,4);