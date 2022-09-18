import JsonToFile from "../utils/JsontoFile.js"

//get req
export const getAllActivities = (req,res)=> {
    res.json (
        "send all activities from srvr to frontend"
    )
}
//post req
export const pushAllActivities = (req,res)=> {
    res.json (
        req.body
    )
    JsonToFile (req.body)
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