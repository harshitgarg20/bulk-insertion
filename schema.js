const mongoose = require("mongoose");

var mongoData = mongoose.Schema({
    id: {
        type: String
    },
    Discount_strId: {
        type: String
    },
    Promotion_strCode: {
        type: String
    },
    Promotion_strStatus: {
        type: String,
    },
    Promotion_dtmGeneratedDate: {
        type: Date,
        default: Date.now
    },
    User_strLogin: {
        type: String
    },
    Promotion_strMode: {
        type: String
    },
    Promotion_dtmValidFrom: {
        type: String
    },
    Promotion_dtmValidTill: {
        type: String
    },
    LastModified_dtmStamp: {
        type: Date,
        default: Date.now
    }
});

exports.module = mongoose.model("Register", mongoData);
