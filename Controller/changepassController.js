const PasswordManager=require("../Services/passwordencripted")
module.exports.changePassword = async (req, res, next) => {
    try {

      const { _id,currentPassword, newPassword } = req.body;

      const teacher = await Teacher.findById({_id});
      if (!teacher) {
        throw new Error('Teacher not found');
      }

      await PasswordManager.compare(currentPassword, teacher.password);
      teacher.password = newPassword;
      const updatedUser = await teacher.save();

      res.status(200).json({
        success: true,
        message: 'Password updated!',
        data: updatedUser
      });
    } catch (err) {
      next(err);
    }
};