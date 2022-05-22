import express from "express";
import homeController from '../controller/homeController'

let router = express.Router();

const initWebRoute = (app) => {
  router.get('/', homeController.getHomepage);

  // router.get('/', (req, res) => {
  //   res.render('index.ejs')
  // });

  router.get('/about', (req, res) => {
    res.send(`I'm Mitkun`)
  });

  return app.use('/', router)
};

export default initWebRoute;