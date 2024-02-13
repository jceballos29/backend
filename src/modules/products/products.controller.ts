import { Request, Response } from "express";
import productsService from "./products.service";
import { logger } from "../../utils/logger";

const createProduct = async (req: Request, res: Response) => {
  try {
    const product = await productsService.createProduct(req.body);
    res.status(201).json(product);
  } catch (error: any) {
    logger.error('Error creating product:', error);
    res.status(500).json({ error: error.message });
  }
};

const createProducts = async (req: Request, res: Response) => {
  logger.info('Creating products:', req);
  try {
    const products = await productsService.createProducts(req.body);
    res.status(201).json(products);
  } catch (error: any) {
    logger.error('Error creating products:', error);
    res.status(500).json({ error: error.message });
  }
}

const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await productsService.getProducts();
    res.status(200).json(products);
  } catch (error: any) {
    logger.error('Error getting products:', error);
    res.status(500).json({ error: error.message });
  }
};

const getProduct = async (req: Request, res: Response) => {
  try {
    const product = await productsService.getProduct({ _id: req.params.id });
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.status(200).json(product);
  } catch (error: any) {
    logger.error('Error getting product:', error);
    res.status(500).json({ error: error.message });
  }
};

const updateProduct = async (req: Request, res: Response) => {
  try {
    const product = await productsService.updateProduct(
      { _id: req.params.id },
      req.body,
    );
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.status(200).json(product);
  } catch (error: any) {
    logger.error('Error updating product:', error);
    res.status(500).json({ error: error.message });
  }
};

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const product = await productsService.deleteProduct({ _id: req.params.id });
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.status(200).json(product);
  } catch (error: any) {
    logger.error('Error deleting product:', error);
    res.status(500).json({ error: error.message });
  }
};

export default {
  createProduct,
  createProducts,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
};