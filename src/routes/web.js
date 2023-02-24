import express from "express";
import homeController from '../controller/homeController.js';
import admin from '../controller/adminController';
import multer from 'multer';
import path from 'path';
// var appRoot = require('app-root-path');
import appRoot from 'app-root-path';
let router = express.Router();

const initWebRoute = (app) => {
   

    router.get("/", homeController.getHomepage);
    router.get('/users', homeController.getUserPage);

    router.get('/users/manage/doctor', admin.getManageDoctor);
    router.get('/users/manage/doctor/create', admin.getCreateDoctor);
    // router.post('/admin/doctor/create', admin.postCreateDoctor);
    // router.get('/users/doctor/edit/:id', admin.getEditDoctor);
    // router.put('/admin/doctor/update-without-file', admin.putUpdateDoctorWithoutFile);
    // router.put('/admin/doctor/update', admin.putUpdateDoctor);

    router.get('/users/manage/clinic', admin.getManageClinic);
    router.get('/users/manage/clinic/create', admin.getCreateClinic);
    // router.post('/admin/clinic/create', admin.postCreateClinic);
    // router.post('/admin/clinic/create-without-file', admin.postCreateClinicWithoutFile);


    return app.use('/', router)
}


export default initWebRoute;
