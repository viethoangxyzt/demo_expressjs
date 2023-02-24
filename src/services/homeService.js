import db from "./../models";
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

require('dotenv').config();

let getClinics = () => {
    return new Promise((async (resolve, reject) => {
        try {
            let clinics = await db.Clinic.findAll();
            resolve(clinics);
        } catch (e) {
            reject(e);
        }
    }));
};


module.exports = {
    getClinics: getClinics,
}