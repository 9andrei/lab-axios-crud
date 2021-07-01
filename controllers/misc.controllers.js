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
      .catch((error) => {
        console.log(error)
      })
  };

  module.exports.createDrag = (req, res, next) => {
    res.render("new-drag")
  }

  module.exports.doCreateDrag = (req, res, next) => {
    if (!req.body.name || req.body.name.length < 2) {
      res.render('new-drag', {
        drag: { name: req.body.name },
        error: "Introduce a valid name"
      })
    } else {
      http.post("/drags", req.body)
      .then(() => {
        res.redirect("/drags")
      })
      .catch((e) => console.log(e))
    }
  }