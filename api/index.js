const axios = require('axios');

const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { Temperament, Breed } = require('./src/db.js');


// Syncing all the models at once.
conn.sync({ force: false }).then(() => {

  let tempsObj = {};
  axios.get(`https://api.thedogapi.com/v1/breeds`)
    .then(response => {
      response.data?.forEach(breed => {
        let temps = breed.temperament?.split(', '); // ["Alert", "Calm", "Intelligent"]
        temps?.forEach(t => {

          Temperament.findOrCreate({ where: { name: t } })
            .then((t) => {
              let arrayTemp = tempsObj[breed.id] || [];
              arrayTemp.push(t[0].dataValues.id);
              tempsObj = {
                ...tempsObj,
                [breed.id]: arrayTemp
              }
            })
        });
      })

    })
    .then(() => console.log('temperaments created'))
    .then(() => {
      axios.get('https://api.thedogapi.com/v1/breeds')
        .then((response) => {
          Breed.bulkCreate(response.data.map(breed => ({
            name: breed.name,
            weight: breed.weight.metric,
            height: breed.height.metric,
            life_span: breed.life_span,
            image: breed.image.url,
            apiId: breed.id
          })))
            .then((breeds) => {
              breeds.forEach((b) => {
                b.addTemperament(tempsObj[b.dataValues.apiId]);
              })
            })
            .then(() => console.log('breeds created'))
        })
    })
    .catch(err => console.error(err));



  server.listen(process.env.PORT, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
})

