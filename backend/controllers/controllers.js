import { theSchema } from "../models/ActivitiesSchema.js";

//get req
export const getAllActivities = async (req,res)=> {
    try {
        let activities = await theSchema.find ({});
        res.status(200).json({...activities});
        !activities && res.status(404).json({msg: "No activities found stored in the MongoDB"});
    } catch (error) {
        res.status(500).json({msg: error});
    }
}

//post req
export const pushAllActivities = async (req,res)=> {
    try {
        let activities = req.body;
        await theSchema.create ([...activities.activity]);
        console.log("Data uploaded successfully...");

    } catch (error) {
        res.status(500).json({msg: error});
    }


}
//get with qurey "get activity by id"
export const getActivity = async(req,res)=> {
    try {
        let activity = await theSchema.findOne({_id:req.params.id});
        res.status(200).json({activity});
    } catch (error) {
        res.status(500).json({msg: error});
    }
}
//patch req
export const updateAllActivities = (req,res)=> {
    res.send (
        "activities list has been updated"
    )
}
//delete req
export const deleteAllActivities = (req,res)=> {
    res.send (
        "delete req for the activity list"
    )
}