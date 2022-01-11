const fs = require('fs').promises;
const sinon = require('sinon');
const { expect } = require('chai');

const leArquivo = require('./exercicio2');

const CONTENT = 'Ola teste';


  describe('Teste da função leArquivo:', () => {

    describe("|| ARQUIVO EXISTENTE ||", () => {

      before(() => { sinon.stub(fs,'readFile').resolves(CONTENT) });

      after(() => { fs.readFile.restore() });
  
      it('- verifica se é um texto', async () => {
        const retorno = await leArquivo('./arquivo.txt')
        expect(retorno).to.be.an("string")
      })
  
      it('- verifica se é retornado o conteudo', async () => {
        const retorno = await leArquivo('./arquivo.txt')
        expect(retorno).to.be.eq(CONTENT)
      })

    })

    describe("|| ARQUIVO INEXISTENTE ||", () => {

      it('- verifica se é retornado null ao não encontrar o arquivo', async () => {
      const retorno = await leArquivo('./arquivoMacarrao.txt')
      expect(retorno).to.be.null
      })

    })

  })