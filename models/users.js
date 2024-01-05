import { model,Schema } from 'mongoose'

const userSchema = new Schema({
	file:{
		type:String,
		default:'',
	},
	name:{
		type:String,
		required: true,
	},
	email:{
		type:String,
		required: true,
		unique: true
	},
	phone:{
		type:String,
		required: true,
	},
	products:[{
		type: Schema.Types.ObjectId,
		ref: 'product',
	}]
})

export default model('user',userSchema)