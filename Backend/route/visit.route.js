// routes/visitRoutes.js
import express from 'express';
import { logVisit, getVisitHistory } from '../controller/visit.controller.js';

const router = express.Router();

router.post('/log', logVisit);
router.get('/history', getVisitHistory);

export default router;

