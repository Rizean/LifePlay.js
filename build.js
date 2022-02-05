const { resolve } = require('path');
const { readdir } = require('fs').promises;
const fork = require('child_process').fork;
const process = require( 'process' );

const LCERROR = '\x1b[31m%s\x1b[0m'; //red
const LCWARN = '\x1b[33m%s\x1b[0m'; //yellow
const LCINFO = '\x1b[36m%s\x1b[0m'; //cyan
const LCSUCCESS = '\x1b[32m%s\x1b[0m'; //green

const logger = class {
  static error(message, ...optionalParams) { console.error(LCERROR, message, ...optionalParams) }
  static warn(message, ...optionalParams) { console.warn(LCWARN, message, ...optionalParams) }
  static info(message, ...optionalParams) { console.info(LCINFO, message, ...optionalParams) }
  static success(message, ...optionalParams) { console.info(LCSUCCESS, message, ...optionalParams) }
}

async function* getFiles(dir) {
  const dirents = await readdir(dir, { withFileTypes: true });
  for (const dirent of dirents) {
    const res = resolve(dir, dirent.name);
    if (dirent.isDirectory()) {
      yield* getFiles(res);
    } else {
      yield res;
    }
  }
}
const getlpModFile = async (files) => {
    // search the lpmod file from the path
    for await (const file of getFiles(files)) {
      if(file.includes('.lpmod.js')){
          logger.info('Found lpmod file: ' + file);
          return file;
      }
    }
  }

try{
    const files = process.argv.pop();
getlpModFile(files).then((file)=>{
    const child=fork(file);
}).catch((err)=>{
    if(err.errno===-20){
        logger.warn('YOU NEED TO SPECIFY A DIRECTORY TO BUILD !');
        logger.info('example:  npm run build ./example')
    }else{
    logger.error(err);
    }
})

}catch(e){
    logger.error(e);
}