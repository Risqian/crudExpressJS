const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/EmployeeDB', { useNewUrlParser: true }, (err) => {
    if (!err) {
        console.log('MongoDB berhasil disambungkan.!')
    }
    else {
        console.log('Error MongoDB : ' + err)
    }
});

require('./employee.model');