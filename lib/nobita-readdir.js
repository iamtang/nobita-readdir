const fs = require('fs');
const path = require('path');
const pwd = process.cwd();

module.exports = (filePath) => {
  // 读取文件夹
  const readdir = (filePath) => {
    let data = [];
    const isExists = fs.existsSync(path.resolve(pwd, filePath));
    if(isExists){
      data = fs.readdirSync(path.resolve(pwd, filePath));
    }
    
    data.map((i) => {
      let newfilePath = path.resolve(pwd, `${filePath}/${i}`.replace('//', '/'));
      if (i.indexOf('.') == -1) {
        readdir(newfilePath);
      } else {
        controllersArr.push(newfilePath);
      }
    });
  };

  let controllersArr = [];
  readdir(filePath);

  return controllersArr;
}