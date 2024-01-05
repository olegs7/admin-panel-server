import { model,Schema } from 'mongoose'

const productSchema = new Schema({
	file:{
		type:String,
		default:'',
	},
	name:{
		type:String,
		required: true,
	},
	price:{
		type:String,
		required: true,
	},
	description:{
		type:String,
		required: true,
	}
})

export default model('product',productSchema)
