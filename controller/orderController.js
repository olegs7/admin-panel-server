import user from '../models/users.js'
import product from '../models/products.js'

class OrderController{
	async getOne(req,res){
		const userProducts = await user.find({})
	}

	async create(req,res){
		const userId = req.body.userId
		const productId = req.params.id
		const addProduct = await user.findOneAndUpdate({_id:userId},{$push:{products:productId}})
	}

	async delete(req,res){
		const userId = req.query.user	
		const productId = req.params.id	
		const deleteProduct = await user.findOneAndUpdate({_id:userId},{$pull:{products:productId}})
	}
}

export default new OrderController();