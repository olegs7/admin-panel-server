import express from 'express'
import mongoose from 'mongoose'
import fileUpload from 'express-fileupload'
import userRouter from './router/userRouter.js' 
import productRouter from './router/productRouter.js' 
import orderRouter from './router/orderRouter.js'  
import 'dotenv/config'

const PORT = process.env.PORT
const app = express()

app.use((req,res,next)=>{
	res.header('Access-Control-Allow-Origin','*')
	res.header('Access-Control-Allow-Methods','PATCH,PUT,DELETE')
	res.header('Access-Control-Allow-Headers','Content-Type,Accept')
	next()
})
app.use(fileUpload())
app.use(express.static('img-user'))
app.use(express.static('img-product'))
app.use(userRouter)
app.use(productRouter)
app.use(orderRouter)


async function appStart(){
	try {
		await app.listen(PORT,() => console.log('SERVER START ' + PORT))
					mongoose.connect(process.env.DB_CONN,{ useNewUrlParser:true, useUnifiedTopology:true })
					 .then((res) => console.log('connected to DB'))
				
	} catch(e) {
		console.log(e)
	}
}
appStart()

