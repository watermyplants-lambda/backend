const db = require('../../data/config')


module.exports = {
  find,
  findBy,
  findUserById,
  add,
  update,
  remove
}

function find() {
  return db('users')
}

function findBy(filter) {
  return db('users')
    .where(filter)
}

function findUserById(id) {
  return db('users')
    .where({ id })
    .first()
}

function add(user) {
  return db.insert(user)
  .into('users')
}

function update(id, changes) {
  return db('users')
    .where({ id })
    .update(changes)
}

function remove(id) {
  return db('users')
      .where('id', id)
      .del()
}