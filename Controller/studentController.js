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

exports.insertStudent = (req, res, next) => {
    // creat object from student schema
    const object = new Student(req.body);

    object.save()
        .then((data) => {
            res.status(201).json({
                message: "added",
                data
            });
        })
        .catch(error => next(error))

}

exports.updateStudent = (request, response, next) => {
    const stdId = request.body._id; 
    const newData = request.body;
    Student.findByIdAndUpdate(stdId, newData, { new: true })
        .then(updatedChild => {
            if (!updatedChild) {
                throw new Error('Child not found');
            }
            response.json({ message: "Child data updated successfully", data: updatedChild });
        })
        .catch(error => next(error));
}

exports.deleteStudent = (req, res, next) => {
    res.status(200).json({
        data: "deletedddd"
    });
}