import express from 'express';
import {
  createFeedback,
  getAllFeedbacks,
  getFeedback,
  getFeedbackSummary,
} from '../controllers/feedbackController.js';

const router = express.Router();

// Summary route must come before /:id
router.get('/summary', getFeedbackSummary);

router.post('/', createFeedback);
router.get('/', getAllFeedbacks);
router.get('/:id', getFeedback);

export default router;