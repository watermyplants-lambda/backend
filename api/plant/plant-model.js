const db = require('../../data/config')


module.exports = {
  find,
  findBy,
  findPlantById,
  findPlantsByUser,
  add,
  update,
  remove,
  myPlantId
}

function find() {
  return db('plants')
}

function findBy(filter) {
  return db('plants')
    .where(filter)
    
}

function findById(filter) {
    console.log(`-- comment model inside findBy --`)
    console.log(filter)

    return db("plants")
        .where(filter)
        .orderBy("id")
}

function findPlantById(id) {
  return db('plants')
    .where({ id })
    .first()
}

function findPlantsByUser(userId) {
  return db('users')
    .join('plants', 'users.id', 'plants.user_id')
    .select('plants.id', 'plants.name', 'plants.species', 'plants.water_schedule', 'plants.frequency', 'plants.last_watered', 'plants.image_url')
    .where('users.id', userId)
}

async function add(plant) {
    try {
        const [id] = await db("plants").insert(plant, "id")

        return findPlantById(id)
    } catch (error) {
        throw error
    }
}

function update(id, changes) {
  return db('plants')
    .where({ id })
    .update(changes)
}

function remove(id) {
  return db("plants")
      .where("id", id)
      .del()
}

function myPlantId(id) {
    return db('plants')
      .where({ id })
      .first();
  }