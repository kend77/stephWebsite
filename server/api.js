const express = require('express')
const api = express.Router()
const fs = require('fs')

const promisifiedReadDir = (folder) => {
  return new Promise((resolve, reject) => {
    const filePath = `client/public/images/${folder}`
    fs.readdir(filePath, 'utf-8', (err, data) => {
      if(err) reject(err)
      resolve(data)
    })
  })
}

api.get('/:folder', (req, res, next) => {
    promisifiedReadDir(req.params.folder)
      .then((results) => {
        res.send(results.filter(result => result !== '.DS_Store'))
      })

})


module.exports = api
