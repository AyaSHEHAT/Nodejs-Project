const Student = require("./../Model/schemaChildren")
exports.getAllstudents = (req, res, next) => {
    Student.find({})
        .then((data) => {
            res.status(200).json(data);
        })
        .catch(error => next(error))
}

exports.getStudentById = (req, res, next) => {
    Student.findOne({
            _id: req.params.id
        })
        .then(data => {
            if (!data)
                throw new Error("id doesn't Exists");

            res.status(200).json(data);

        })
        .catch(error => next(error))
}

exports.getAllstudents = (req, res, next) => {
    Student.find({})
        .then((data) => {
            res.status(200).json(data);
        })
        .catch(error => next(error));
};

exports.insertStudent = (req, res, next) => {
    // creat object from student schema
    const object = new Student(req.body);
    // const object = new Student(re);

    object.save()
        .then((data) => {
            res.status(201).json({
                message: "added"
            });
        })
        .catch(error => next(error))

}

exports.updateStudent = (request, response, next) => {
    const stdId = request.body._id;
    const newData = request.body;
    Student.findByIdAndUpdate(stdId, newData, {
            new: true
        })
        .then(updatedStd => {
            if (!updatedStd) {
                throw new Error('student not found');
            }
            response.json({
                message: "student data updated successfully"
            });
        })
        .catch(error => next(error));
}

exports.deleteStudentById = (req, res, next) => {
    try {
        const deletedStd = Student.findByIdAndDelete(req.body._id);
        if (!deletedStd) {
            return res.status(404).json({
                error: "student not found"
            });
        }
        res.status(200).json({
            message: "Delete Successfuly"});
    } catch (error) {
        next(error);
    }
    
}
