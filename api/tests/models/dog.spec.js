const { Breed } = require("../../src/db")
const { expect } = require('chai');

describe('Model Testing', function() {
 
  describe('Dog model', function () {
    beforeEach(async function() {
      await Breed.sync({ force: true });
    });
    describe('Validations', function () {
      it('No deberia crearse sin los datos completos', function(done) {
         Breed.create({
          name: 'Rofo',
         })
          .then(() => done('No debería haberse creado'))
          .catch(() => done());
      });
      it('No deberia crearse sin los datos completos', function(done) {
        Breed.create({
          height: 'ARG',
        })
        .then(() => done('No deberia haberse creado'))
        .catch(() => done());
      });
    });
  })
})
