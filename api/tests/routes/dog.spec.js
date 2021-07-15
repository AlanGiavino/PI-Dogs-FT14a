/* eslint-disable import/no-extraneous-dependencies */
// const { expect } = require('chai');
// const session = require('supertest-session');
// const app = require('../../src/app.js');
// const { Breed, conn } = require('../../src/db.js');

// const agent = session(app);
// const dog = {
//   id: 25,
//   name: 'Pug',
//   height: '5 - 10',
//   weight: '5 - 10'

// };

// describe('Dogs routes', () => {
//   before(() => conn.authenticate()
//   .catch((err) => {
//     console.error('Unable to connect to the database:', err);
//   }));
//   beforeEach(() => Breed.sync({ force: true })
//     .then(() => Breed.create(dog)));
//   describe('GET /dogs', () => {
//     it('should get 200', () =>
//       agent.get('/dogs').expect(200)
//     );
//   });
// });
