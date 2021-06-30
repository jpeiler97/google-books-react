const router = require("express").Router();
const bookListController = require("../../controllers/bookListController");

router.route("/")
  .get(bookListController.findAll)
  .post(bookListController.create);

router
  .route("/:id")
  .delete(bookListController.remove);

module.exports = router;