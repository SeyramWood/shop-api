const { Router } = require("express");

const {
  createProduct,
  getSingleProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

const {verifyToken} = require('../middlewares/verifyToken')

const productRouter = Router();

productRouter.route("/").get(verifyToken, getAllProducts).post(createProduct);

productRouter
  .route("/:productId")
  .get(getSingleProduct)
  .patch(updateProduct)
  .delete(deleteProduct);

module.exports = productRouter;
