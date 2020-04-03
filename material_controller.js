

// RESTful API
//CRUD OPERATIONS

//CREATE

const api_post_material = (req, res, next) => {
    let data = req.body;
    res.send(JSON.stringify(data));

};

// READ
const api_get_materials = (req, res, next)=> {
    console.log('api_materials');
    res.send(JSON.stringify([]));
};
    
    app.get("/api/materials", material_controller.api_get_materials);

//UPDATE

//DELETE

//exports
module.exports.api_post_material = api_post_material;
module.exports.api_get_materials = api_get_materials;
