const express = require ("express")
const dotenv = require ("dotenv")
const mongoose = require("mongoose")
const categorieRouter = require("./routes/categorie.route")
const scategorieRouter =require("./routes/scategorie.route")
const articleRouter =require("./routes/article.route")

//config dotenv 
dotenv.config()
const app=express()
app.use(express.json())

app.get("/",(req,res) => {
    res.send ("bienvenue dans notre site")
})

mongoose.connect(process.env.DATABASECLOUD)
.then(()=> console.log("connexion à la base de données réuissie"))
.catch(err => {console.log("erreur de connexion à la base de données",err)
process.exit()
})
app.use("/api/categories", categorieRouter)
app.use("/api/scategories", scategorieRouter)
app.use('/api/articles', articleRouter);



app.listen(process.env.PORT, () => { console.log(`Server is listening on port ${process.env.PORT}`); });

module.exports = app;

