import Products, {
	IProduct,
	IProductDocument,
} from './products.model';
import mongoose from '../../database';

const createProduct = async (product: IProduct) => {
	return Products.create(product);
};

const createProducts = async (products: IProduct[]) => {
  return Products.insertMany(products);
}

const getProducts = async () => {
	return Products.find();
};

const getProduct = async (
	query: mongoose.FilterQuery<IProductDocument>,
	options: mongoose.QueryOptions = { lean: true },
) => {
	return Products.findOne(query, {}, options);
};

const updateProduct = async (
	query: mongoose.FilterQuery<IProductDocument>,
	update: mongoose.UpdateQuery<IProductDocument>,
	options: mongoose.QueryOptions = { new: true },
) => {
	return Products.findOneAndUpdate(query, update, options);
};

const deleteProduct = async (
	query: mongoose.FilterQuery<IProductDocument>,
) => {
	return Products.deleteOne(query);
};

export default {
  createProduct,
  createProducts,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
};
