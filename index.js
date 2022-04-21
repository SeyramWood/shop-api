const express = require('express')
const app = express()
const port = 4000
const {dbConnect} = require("./config/db.Connect")
const productRouter = require("./routes/products.router")
const authRouter = require("./routes/auth.router")

app.use('/auth', authRouter)
app.use("/products", productRouter)

const start = async ()=>{
    await dbConnect()
    app.listen(port, () => console.log(`Example app listening on port ${port}!`))
}


start()


