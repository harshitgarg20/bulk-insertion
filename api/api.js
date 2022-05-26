const express = require('express');
const router = express.Router();
const _ = require('lodash');
const db = require("../connection");
const { v4: uuidv4 } = require('uuid');
const chunk = require('lodash.chunk');
const moment = require('moment-timezone');
router.post('/dataSubmit', (req, res) => {
    for (let i = 0; i < 1; i++) {
        // let currentTime = moment().format('LTS');
        // let campaign_days = req.body.campaign_days;
        // let result = moment(`${currentTime}`, ["h:mm A"]).format("HH:mm");
        // let CampaignStartDateTimeWithoutUtc = (campaign_days[0].camp_date === "" && campaign_days[0].camp_time === "") ? `${campaign_days[0].camp_date = moment(new Date()).format('YYYY-MM-DD')} ${campaign_days[0].camp_time = result}:00` : `${moment(campaign_days[0].camp_date).format('YYYY-MM-DD')} ${campaign_days[0].camp_time}:00`;
        // let CampaignStartDateTime = moment.tz(CampaignStartDateTimeWithoutUtc, "au/east").format();
        const newKey = [{
            "_id": uuidv4(),
            "firstName": "Harshit",
            "lastName": "Garg",
            "email": `harshit.garg@capanicus.com`,
            "phone": `+918077582430`,
            "leadStatusId": "",
            "leadSourceId": "",
            "tabs": [],
            "leadSource_campaignId": "",
            "tagId": [{}, {}],
            "leadOwnerId": "",
            "businessId": "2463a68b-c399-40dc-ae61-48147fbd6c6e",
            "companyName": "gdgd",
            "branchId": "fcb63bc4-7cee-4dbe-be2a-311ee7c43e09",
            "phone_number_secondary": "",
            "email_secondary": "",
            "address_line_a": "",
            "address_line_b": "",
            "city": "",
            "state": "",
            "zip": "",
            "country": "AU",
            "company_role": "",
            "customField": [
                [],
                []
            ],
            "createdBy": "8f0ce835-ee1c-49eb-8b5a-2201548dd60e",
            "lead_type": "",
            "isActive": true,
            "people_data_sync": "",
            "last_activity_type": "",
            "jobTitle": "",
            "StatusName": "",
            "StatusEmail": []

            // "campaignType": "TEXT_CAMPAIGN",
            // "branchId": "fcb63bc4-7cee-4dbe-be2a-311ee7c43e09",
            // "name": "Test campaign",
            // "template": [
            //     {
            //         "template_id": "d9268ea8-55d8-4a8c-88cc-3e7bedf3d6dc",
            //         "delay_value": "1",
            //         "delay": "hours"
            //     },
            //     {
            //         "template_id": "d9268ea8-55d8-4a8c-88cc-3e7bedf3d6dc",
            //         "delay_value": "1",
            //         "delay": "day"
            //     }, {
            //         "template_id": "d9268ea8-55d8-4a8c-88cc-3e7bedf3d6dc",
            //         "delay_value": "2",
            //         "delay": "day"
            //     }, {
            //         "template_id": "d9268ea8-55d8-4a8c-88cc-3e7bedf3d6dc",
            //         "delay_value": "2",
            //         "delay": "day"
            //     },
            // ],
            // "campaignSubType": "Status Drip",
            // "days": "0",
            // "minutes": "0",
            // "hours": "0",
            // "campaign_action": [],
            // "webhook": "",
            // "status": "",
            // "trigger_act": false,
            // "send_email_to": "",
            // "campaign_days": [
            //     {
            //         "camp_date": "",
            //         "camp_time": ""
            //     }
            // ],
            // "lead_status": [],
            // "lead_owner": "",
            // "lead_source": [],
            // "action_result": [
            //     {
            //         "campaign_action": [
            //             "Sent"
            //         ],
            //         "webhook": "",
            //         "stop_texting": false,
            //         "status": "",
            //         "trigger_act": false,
            //         "send_email_to": ""
            //     }
            // ],
            // "tag_name": [],
            // "send_during_bussiness_hours": false,
            // "send_text_lead_owner": false,
            // "out_going_teams": [],
            // "leadAgeFilter": false,
            // "daysFrom": "2022-04-19T05:31:58.472Z",
            // "daysTo": "2022-04-19T05:31:58.472Z",
            // "campaign_did_number": 17076057890,
            // "forward_to_secondary_contact_setting": {
            //     "one_fails": true,
            //     "send_to_both": false
            // },
            // "completed_status": "new",
            // "account_code": makeRandomPassword(8),
            // "editUniqueId": makeRandomPassword(16),
            // "active_status": true,
            // "isActive": true,
            // "CampaignStartDateTime": CampaignStartDateTime,
            // "businessId": "2463a68b-c399-40dc-ae61-48147fbd6c6e",
            // "dbName": "Harshit_fcb63bc4-7cee-4dbe-be2a-311ee7c43e09"
        }]
        // db.collection('leads').createIndex({ branchId: 1, bussinessId: 1, isActive: 1, _id: 1 });
        // db.collection('leads').insertMany(newKey);
        //db.collection('campaigns').createIndex({ completed_status: 1, isActive: 1, active_status: 1, campaignType: 1 });
        db.collection('leads').insertMany(newKey);
    }
    res.send("Data is inserted")
})


router.get('/getName', async (req, res) => {
    const campaign = db.collection("campaigns");
    const result = campaign.find();
    res.send(result);
})

module.exports = router;

const makeRandomPassword = (length) => {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}