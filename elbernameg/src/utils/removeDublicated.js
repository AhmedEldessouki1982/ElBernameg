//this function to remove or prevent posting dublicated activities into db

let testObj = {
	"0": {
		"_id": "63467716c861818aebc2eeed",
		"description": "Activity number 03",
		"disciplines": "elec",
		"scope": "esp",
		"Responsibility": "eldessouki",
		"timing": "09:00",
		"createdAt": "2022-10-12T07:43:31.643Z",
		"__v": 0
	},
	"1": {
		"_id": "63467716c861818aebc2eeee",
		"description": "Activity number 02",
		"disciplines": "elec",
		"scope": "esp",
		"Responsibility": "eldessouki",
		"timing": "09:00",
		"createdAt": "2022-10-12T08:10:50.086Z",
		"__v": 0
	},
	"2": {
		"_id": "63467716c861818aebc2eeef",
		"description": "Activity number 01",
		"disciplines": "elec",
		"scope": "esp",
		"Responsibility": "eldessouki",
		"timing": "09:00",
		"createdAt": "2022-10-12T08:10:54.055Z",
		"__v": 0
	},
	"3": {
		"_id": "63467727c861818aebc2eef5",
		"description": "Activity number 01",
		"disciplines": "elec",
		"scope": "esp",
		"Responsibility": "eldessouki",
		"timing": "09:00",
		"createdAt": "2022-10-12T08:10:54.055Z",
		"__v": 0
	},
	"4": {
		"_id": "63467727c861818aebc2eef4",
		"description": "Activity number 03",
		"disciplines": "elec",
		"scope": "esp",
		"Responsibility": "eldessouki",
		"timing": "09:00",
		"createdAt": "2022-10-12T07:43:31.643Z",
		"__v": 0
	}
}

let removeDublicated = (object) => {

}