const express=require("express");
const controller=require("./../Controller/studentController");

const router= express.Router();
// const { PasswordManager } = require('../Services/passwordencripted'); 

// app.get('/user/:userId/password', async (req, res) => {
//         try {
//             const userId = req.params.userId;
//             const encryptedPassword = await PasswordManager.getPasswordAndEncrypt(userId);
//             res.json({ encryptedPassword });
//         } catch (error) {
            
//             console.error('Error:', error);
//             res.status(500).json({ error: 'An error occurred' });
//         }
//     });
router.route("/students")
        .get(controller.getAllstudents)
        .post(controller.insertStudent)
        .patch(controller.updateStudent)
        .delete(controller.deleteStudentById)

router.get("/students/:id",controller.getStudentById);

module.exports=router;

