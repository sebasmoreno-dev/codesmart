import { Router } from 'express';
import { YourController } from '../controllers/index';

const router = Router();

// Define your routes here
router.get('/your-endpoint', YourController.yourMethod);
router.post('/your-endpoint', YourController.yourMethod);
router.put('/your-endpoint/:id', YourController.yourMethod);
router.delete('/your-endpoint/:id', YourController.yourMethod);

export default (app) => {
    app.use('/api', router);
};