const express = require('express');
const port = process.env.PORT || 8080; // ympäristömuuttuja, jos ensimmäienn on tyhjä, poimii jälkimmäisen
const app = express(); // alustetaan 

const body_parser = require('body-parser');// otetaan käyttöön body parserit

app.use(body_parser.json()); // otetaan käyttöön req.body.name
app.use(body_parser.urlencoded({
    extended:true
})); // josapp.user url:iin on koodattu dataa, niin material/id

app.use( (req, res, next)=>{
    console.log(req.method, ' ', req.path);
    next();
} ); // GET /api/materials


// RESTful API
//CRUD OPERATIONS

//CREATE
app.post("/api/materil", material_controller.api_post_material);

//api.domain.com/materials
// READ
app.get("/api/materials", material_controller.api_get_materials);

//UPDATE

//DELETE

app.listen(port); // kuuntelee porttia