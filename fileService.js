import path from 'path'

class FileService {
	saveUserFile(file){
		const fileName = file.name
		const filePath = path.resolve('img-user',fileName)
			file.mv(filePath)
		return fileName
	}
	
	saveProductFile(file){
		const fileName = file.name
		const filePath = path.resolve('img-product',fileName)
			file.mv(filePath)
		return fileName
	}
}

export default new FileService();