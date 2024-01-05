import product from '../models/products.js'
import fileService from '../fileService.js'

class ProductController {
	async getAll(req,res){
		try {
			const products = await product.find()
				res.json(products)
		} catch(e) {
				res.status(500).json(e)
		}	
	}

	async getOne(req,res){
		try {
			const id = req.params.id
				if(!id){
					res.status(400).json({message:'no Id'})
				}
			const productId = await product.findById(id)
				res.json(productId)
		} catch(e) {
			res.status(500).json(e)
		}
	}

	async create(req,res){
		try {
			const {name,price,description} = req.body
				if(req.files === null){
					const newProduct = await product.create({name,price,description})
						res.json(newProduct)
				} else {
					const fileName = await fileService.saveProductFile(req.files.file)		
					const newProduct = await product.create({name,price,description,file:fileName})
						res.json(newProduct)
				}
			} catch(e) {
				res.status(500).json(e)
		}	
	}

	async update(req,res){
		try {
			const id = req.params.id
			const {name,price,description} = req.body
				if(!id){
					res.status(400).json({message:'no Id'})
				}
				if(req.files === null){				
					const update = await product.findByIdAndUpdate(id,{name,price,description})
						res.json(update)
				} else {
					const fileName = await fileService.saveProductFile(req.files.file)
					const update = await product.findByIdAndUpdate(id,{name,price,description,file:fileName},{new:true})
						res.json(update)
				}		
		} catch(e) {
			res.status(500).json(e)
		}
	}

	async delete(req,res){
		try {
			const id = req.params.id
			if(!id){
					res.status(400).json({message:'no Id'})
				}
			const dltProduct = await product.findByIdAndDelete(id)
				res.json(dltProduct)
		} catch(e) {
				res.status(500).json(e)
		}	
	}
	
}

export default new ProductController();