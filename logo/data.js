var bulk = db.collection('ClPromoCodeMaster').initializeOrderedBulkOp(),
    i = 0;

async.whilst(
  function() { return i < 1000000; },
  function(callback) {
    var token = strNpm.generate();
    var now = moment().format('YYYYMMDD hhmmss');
    var doc = {
      id:token,
      Discount_strId:"pending",
      Promotion_strCode:token,
      Promotion_strStatus:"I",
      Promotion_dtmGeneratedDate:now,
      User_strLogin:"test",
      Promotion_strMode:"S",
      Promotion_dtmValidFrom:"pending",
      Promotion_dtmValidTill:"pending",
      LastModified_dtmStamp:now
    };

    bulk.insert(doc);
    i++;

    // Drain every 1000
    if ( i % 1000 == 0 ) {
      bulk.execute(function(err,response){
        bulk = db.collection('ClPromoCodeMaster').initializeOrderedBulkOp();
        callback(err);
      });
    } else {
        callback();
    }

  },
  function(err) {
    if (err) throw err;
    console.log("done");
  }
);



// var data = [];
// data = getApi;
// console.log('data>>>>>>>>>>>>>>>>', data);
//var url = "https://api.publicapis.org/entries";
// async function getApi() {
//     const response = await fetch(url);
//     var data = await response.json();
//     console.log("data>>>>>>", data);
//     return data;
// }
// console.log(data);