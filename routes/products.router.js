const { Router } = require("express");

const {
  createProduct,
  getSingleProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

const productRouter = Router();

productRouter.route("/").get(getAllProducts).post(createProduct);

productRouter
  .route("/:productId")
  .get(getSingleProduct)
  .patch(updateProduct)
  .delete(deleteProduct);

module.exports = productRouter;
