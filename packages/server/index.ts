import express from 'express'
import type { Request, Response } from 'express'
import dotenv from 'dotenv'

dotenv.config()
const app = express()

const port = process.env.PORT || 4000



app.get("/", (req: Request,res: Response)=> {
res.send("Hello World!!")
})

app.get("/api/hello", (req: Request,res: Response)=> {
res.json({message: "Hello World!!"})
})

app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`)
})