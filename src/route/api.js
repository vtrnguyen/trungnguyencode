import express from "express";
import APIController from '../controller/APIController';
let router = express.Router();

const initAPIRoute = (app) => {
    router.get('/users', APIController.getAllUsers); // METHOD GET => Read DATA
    router.post('/create-user', APIController.createNewUser); // METHOD POST => CREATE DATA
    router.put('/update-user', APIController.updateUser); // METHOD PUT -> UPDATE DATA
    router.delete('/delete-user/:id', APIController.deleteUser); // METHOD DELETE -> DELETE DATA
    
    return app.use('/api/v1/', router);
}

export default initAPIRoute;