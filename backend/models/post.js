let connection = require('../config/db')
let moment = require('../config/moment')

class Post {

    constructor (row) {
      this.row = row
    }
  
    get id () {
      return this.row.id
    }
  
    get content () {
      return this.row.content
    }
  
    get created_at () {
      return moment(this.row.created_at)
    }
  
    static create (content, cb) {
      connection.query('INSERT INTO post SET content = ?, created_at = ?', [content, new Date()], (err, result) => {
        if (err) throw err
        cb(result)
      })
    }
  
    static all (cb) {
      connection.query('SELECT * FROM post', (err, rows) => {
        if (err) throw err
        cb(rows.map((row) => new Post(row)))
      })
    }
  
    static find (id, cb) {
      connection.query('SELECT * FROM post WHERE id = ? LIMIT 1', [id], (err, rows) => {
        if (err) throw err
        cb(new Post(rows[0]))
      })
    }
  
  }
  
  module.exports = Post