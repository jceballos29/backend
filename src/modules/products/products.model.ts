import mongoose from '../../database';

export interface IProduct {
	name: string;
	price: number;
	stock: number;
	sales: number;
}

export interface IProductDocument
	extends IProduct,
		mongoose.Document {
	createdAt: Date;
	updatedAt: Date;
}

const productSchema = new mongoose.Schema<IProductDocument>(
	{
		name: {
			type: String,
			required: true,
		},
		price: {
			type: Number,
			required: true,
		},
		stock: {
			type: Number,
			required: true,
		},
		sales: {
			type: Number,
			required: true,
		},
	},
	{
		timestamps: true,
		versionKey: false,
	},
);

const Product = mongoose.model<IProductDocument>(
	'Product',
	productSchema,
);

export default Product;
