import user from '../models/users.js'
import product from '../models/products.js'
import fileService from '../fileService.js'

class UserController {
	 login(req,res){
	 	const { email,password } = req.body
			if(email && password){
				res.json()
			}
	}

	async getAll(req,res){
		try {
			const users = await user.find()
				res.json(users)
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
			const userId = await user.findById(id)
				res.json(userId)
		} catch(e) {
			res.status(500).json(e)
		}
	}

	async create(req,res){
		try {
			const {name,email,phone,product} = req.body
				if(req.files === null){
					const newUser = await user.create({name,email,phone})
						res.json(newUser)
				} else {
					const fileName = await fileService.saveUserFile(req.files.file)		
					const newUser = await user.create({name,email,phone,file:fileName})
						res.json(newUser)
				}
			} catch(e) {
				res.status(500).json(e)
		}	
	}

	async update(req,res){
		try {
			const id = req.params.id
			const {file,name,email,phone} = req.body
				if(!id){
					res.status(400).json({message:'no Id'})
				}
				if(req.files === null){				
					const update = await user.findByIdAndUpdate(id,{file,name,email,phone})
						res.json(update)
				} else {
					const fileName = await fileService.saveUserFile(req.files.file)
					const update = await user.findByIdAndUpdate(id,{name,email,phone,file:fileName},{new:true})
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
			const dltUser = await user.findByIdAndDelete(id)
				res.json(dltUser)
		} catch(e) {
				res.status(500).json(e)
		}	
	}
	
}

export default new UserController();