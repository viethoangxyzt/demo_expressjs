import db from '../models';

const Sequelize = require('sequelize');
const Op = Sequelize.Op;

let getInfoDoctors = () => {
    // return new Promise((async (resolve, reject) => {
    //     try {
    //         let doctors = await db.User.findAll({
    //             where: { roleId: 2 },
    //             include: [
    //                 { model: db.Doctor_User, required: false },
    //                 { model: db.Patient, required: false, where: { statusId: 1 } }
    //             ]
    //         });
    //         await Promise.all(doctors.map(async (doctor) => {
    //             if (doctor.Doctor_User) {
    //                 let clinic = await helper.getClinicById(doctor.Doctor_User.clinicId);
    //                 let specialization = await helper.getSpecializationById(doctor.Doctor_User.specializationId);
    //                 let countBooking = doctor.Patients.length;
    //                 doctor.setDataValue('clinicName', clinic.name);
    //                 doctor.setDataValue('specializationName', specialization.name);
    //                 doctor.setDataValue('countBooking', countBooking);
    //             } else {
    //                 doctor.setDataValue('clinicName', "null");
    //                 doctor.setDataValue('specializationName', "null");
    //                 doctor.setDataValue('countBooking', 0);
    //             }
    //             return doctor;
    //         }));
    //         resolve(doctors);
    //     } catch (e) {
    //         reject(e);
    //     }

    // }));
};


module.exports = {
    getInfoDoctors: getInfoDoctors,
}
