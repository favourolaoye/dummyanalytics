const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');


const {format} = require('date-fns');
const{v4: uuid} = require('uuid');



const eventlogger = async(message) => {
   
    const LogItem = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`;
    const Item = `${LogItem}\t${uuid()}\t${message}\n`
    console.log(Item);

    try{
        if(!fs.existsSync(path.join(__dirname, 'logs'))){
            await fsPromises.mkdir(path.join(__dirname, 'logs'));
        }
        await fsPromises.appendFile(path.join(__dirname, 'logs', 'emitMsg.txt'), Item);
    }
    catch (err){
        console.log(err);
    }
}

module.exports = eventlogger;