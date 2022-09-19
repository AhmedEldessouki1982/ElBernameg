/* 
To write a JSON Object to a local file, following is a step-by-step guide :
1. Stringify JSON Object. UseJSON.stringify(jsonObject)  to convert JSON Object to JSON String.
2. Write the stringified object to file using fs.writeFile() function of Node FS module
*/

import fs from 'fs';
//this function take json format and save to file in the local disk
export default function JsonToFile (json) {
    var jsonContent = JSON.stringify(json);

    fs.writeFile("output.json", jsonContent, 'utf8', function (err) {
    if (err) 
    {
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
    }
 
    console.log("JSON file has been saved.");
    });
}