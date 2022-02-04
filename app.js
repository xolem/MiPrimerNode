const express = require('express')
const app = express()

const port = process.env.PORT || 3000;



//motor de plantillas

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");



//Midelware
app.use(express.static(__dirname + "/public"))




//rutas
app.get('/', (req,res)=>{
    res.render("index",{titulo: "mi titulo dinamico"})
})

app.get('/servicios', (req,res)=> {
    res.render("servicios",{tituloServicios: "mensaje dinamico de servicios"})
})

//pagina de error 
app.use((req,res)=>{
    res.status(404).render("404",{
        titulo: 404,
        descripcion: "Titulo del sitio web"
    })
})


app.listen(port, ()=>{
    console.log('servidor a su servicio', port);
})