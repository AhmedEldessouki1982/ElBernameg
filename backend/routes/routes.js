import express from 'express';
import { getAllActivities, pushAllActivities, getActivity, updateAllActivities, deleteAllActivities } from '../controllers/controllers.js';

export const userRoute = express.Router();

userRoute.route('/').get(getAllActivities).post(pushAllActivities);
userRoute.route('/:id').get(getActivity).patch(updateAllActivities).delete(deleteAllActivities);