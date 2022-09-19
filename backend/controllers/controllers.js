import JsonToFile from "../utils/JsontoFile.js";
import { theSchema } from "../models/ActivitiesSchema.js";

//get req
export const getAllActivities = (req,res)=> {
    res.json (
        "send all activities from srvr to frontend"
    )
}
//post req
export const pushAllActivities = async(req,res)=> {
    let activities = await theSchema.create (req.body[0]);
    // console.log(req.body);

    res.status(200).json({activities})
    // res.json (
    //     {activities}
    // )
    console.log(activities);
    // JsonToFile (req.body)
}
//get with qurey 
export const getActivity = (req,res)=> {
    res.json (
        {id: req.params.id}
    )
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