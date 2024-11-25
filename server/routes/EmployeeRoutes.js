import { Router } from 'express';
import {
  createEmployee,
  getAllEmployees,
  getEmployeeById,
  deleteEmployeeById,
  updateEmployeeById,
} from '../controllers/EmployeeController.js';
import { cloudinaryFileUploader } from '../middleware/FileUploader.js';

const router = Router();

router.get('/', getAllEmployees);
router.get('/:id', getEmployeeById);
router.delete('/:id', deleteEmployeeById);
router.put('/:id', cloudinaryFileUploader.single('profileImage'), updateEmployeeById);
router.post('/', cloudinaryFileUploader.single('profileImage'), createEmployee);

export default router;
