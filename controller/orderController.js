import user from '../models/users.js'
import product from '../models/products.js'

class OrderController{
	async getOne(req,res){
		// const userId = req.query.user
		const userId = req.params.id
		const findUser = await user.findOne({_id:userId},{products:1})
	}

	async create(req,res){
		const userId = req.body.userId
		const productId = req.params.id
		const addProduct = await user.findOneAndUpdate({_id:userId},{$push:{products:productId}})
		const findUser = await user.findOne({_id:userId},{products:1})
		const quantity = findUser.products.filter(i => i.toString() === productId)
		res.json(quantity)
	}

	async delete(req,res){
		const userId = req.query.user	
		const productId = req.params.id	
		const deleteProduct = await user.findOneAndUpdate({_id:userId},{$pull:{products:productId}})
		const findUser = await user.findOne({_id:userId},{products:1})
		const quantity = findUser.products.filter(i => i.toString() === productId)
		res.json(quantity)
	}
}

export default new OrderController();