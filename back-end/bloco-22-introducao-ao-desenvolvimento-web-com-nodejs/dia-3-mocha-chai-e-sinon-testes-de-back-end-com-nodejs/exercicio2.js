const fs = require('fs').promises;

const leArquivo = (arquivo) => {
  return fs.readFile(arquivo, 'utf-8')
    .then(response => response)
    .catch(_e => null)
};

module.exports = leArquivo;