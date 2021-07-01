const axios = require("axios");

const http = axios.create({
  baseURL: "http://localhost:8000"
})

module.exports.index = (req, res, next) => {
    res.render('index')
  };

  module.exports.drags = (req, res, next) => {
    http.get("/drags")
      .then((response) => {
        console.log(response.data)

        res.render("drags", { drags: response.data })
      })
      .catch(error => console.error(error))
  }

  module.exports.getDrag = (req, res, next) => {
    const id = req.params.id;
    http.get(`/drags/${id}`)
      .then((response) => {
        console.log(response.data)

        res.render("detail", {drag: response.data})
      })
      .catch ((error) => next(error))
  }