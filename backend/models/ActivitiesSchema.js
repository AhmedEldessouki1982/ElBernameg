import mongoose from 'mongoose';

let model = 
{
    description: String,
    disciplines: String,
    scope: String,
    Responsibility: String,
    timing: String,
};

let Activityschema = new mongoose.Schema (model);

export const theSchema = mongoose.model (
    'List-Of-All-Commissioning-Activities',
    Activityschema
);
