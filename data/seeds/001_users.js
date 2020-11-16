
const bcrypt = require('bcryptjs')

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').delete()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, firstname: 'Skelator', lastname: 'beets', email:'Skelator@greyskull.com', password:  bcrypt.hashSync('battlecat')},
      
      ])
    })
}

//still will need to add bcrypt