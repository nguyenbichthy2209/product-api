const express = require('express');
const router = express.Router();

const {
  createProduct,
  getAllProducts,
  getProductByPid,
  updateProduct,
  deleteProduct
} = require('../controllers/productController');

// Thêm sản phẩm
router.post('/', createProduct);

// Lấy tất cả sản phẩm
router.get('/', getAllProducts);

// Lấy một sản phẩm theo pid
router.get('/:pid', getProductByPid);

// Cập nhật sản phẩm theo pid
router.put('/:pid', updateProduct);

// Xóa sản phẩm theo pid
router.delete('/:pid', deleteProduct);

module.exports = router;