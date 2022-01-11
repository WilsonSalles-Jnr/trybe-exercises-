const firstPromise = require('./exercicio1');

const RANDONFY = Math.floor(Math.random() * 100 + 1);
firstPromise(1,1,1).then(result=> result).catch(err=>err)