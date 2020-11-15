  
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('plants').delete()
    .then(function () {
      // Inserts seed entries
      return knex('plants').insert([
        { id: 1, user_id: 1, name: 'Agave', species: 'succulent', water_schedule: '2020-12-31 11:00', frequency: 1, last_watered: '2020-11-1', image_url: 'https://cdn.pixabay.com/photo/2017/04/25/22/28/despaired-2261021__480.jpg' },
        { id: 2, user_id: 1, name: 'Cactus', species: 'succulent', water_schedule: '2020-12-30 09:50', frequency: 3, last_watered: '2020-11-1', image_url: 'https://cdn.pixabay.com/photo/2017/07/25/22/54/office-2539844__480.jpg' },
        { id: 3, user_id: 2, name: 'Jeff', species: 'succulent', water_schedule: '2020-12-31 12:00', frequency: 1, last_watered: '2020-11-1', image_url: 'https://cdn.pixabay.com/photo/2016/07/20/00/06/cactus-1529343__480.jpg' },
        { id: 4, user_id: 2, name: 'Dwight', species: 'succulent', water_schedule: '2021-01-01 10:40', frequency: 3, last_watered: '2020-11-1', image_url: 'https://cdn.pixabay.com/photo/2020/07/24/16/37/cactus-5434469__480.jpg' },
        { id: 5, user_id: 3, name: 'Shrute', species: 'succulent', water_schedule: '2020-12-05 16:00', frequency: 1, last_watered: '2020-11-1', image_url: 'https://cdn.pixabay.com/photo/2015/11/26/00/01/cactus-1063094_1280.jpg' },
        
      ])
    })
}