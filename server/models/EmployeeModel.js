import mongoose from "mongoose";

const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: String,
        required: true,
    },
    department: {
        type: String,
        required: true,
    },
    profileImage: {
        type: String,
    },
    salary: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
    updatedAt: {
        type: Date,
        default: new Date(),
    },
});

const EmployeeModel = mongoose.model("employees", EmployeeSchema);

// Export as default for ES modules
export default EmployeeModel;
