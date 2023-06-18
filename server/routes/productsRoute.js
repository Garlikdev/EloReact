import express from "express"
import { getCategories } from "../controllers/productController.js"
const router = express.Router()
// Produkty
// @route /api/products
// router.get("/getproducts", productController.getProducts)
// router.post("/getproductbyid", verifyJWT, productController.getProductById)

// Kategorie
// @route /api/categories
router.get("/", getCategories)
// router.post("/getcategoriesbyid", verifyJWT, productController.getCategoriesById)

export default router
