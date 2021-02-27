var Mta = require('mta-gtfs');
const https = require('https');
const GtfsRealtimeBindings = require('mta-gtfs-realtime-bindings');
const rp = require('request-promise');

var mta = new Mta({
  key: '9ac3VJhKl45JHzOxR67mC6CHsyXGBqsNb8S8kXb0', // only needed for mta.schedule() method
  feed_id: 1                  // optional, default = 1
});

var mtaController = {
  getMta: getMta,
};


function findFromList(list, keyword) {
    return list.filter((el) => search(el, keyword));
}

function search(el, keyword) {
    const type = Array.isArray(el) ? 'array' : typeof el;
    const searchFunc = getFuncByType(type);

    return searchFunc(el, keyword);
}

function getFuncByType(type) {
    const match = {
        'string': searchInText,
        'number': searchInText,
        'boolean': searchInText,
        'array': searchInArray,
        'object': searchInObject,
    };

    if (typeof match[type] !== 'undefined') {
        return match[type];
    } else {
        throw new Error(`Unknown element type "${type}"`);
    }
}

function searchInText(text, keyword) {
    return (text.toString().indexOf(keyword) !== -1);
}

function searchInObject(obj, keyword) {
    return searchInArray(Object.values(obj), keyword);
}

function searchInArray(arr, keyword) {
    return arr.find((el) => search(el, keyword)) !== undefined;
}


function getMta(req, res) {
  rp({
    method: 'GET',
    url: 'https://api-endpoint.mta.info/Dataservice/mtagtfsfeeds/nyct%2Fgtfs',
    encoding: null,
    headers :{'x-api-key' : '9ac3VJhKl45JHzOxR67mC6CHsyXGBqsNb8S8kXb0'}
}).then((buf) => {
    const feed = GtfsRealtimeBindings.transit_realtime.FeedMessage.decode(buf);
   const bigObj = feed

   console.log(findFromList(bigObj, '230S'));

   

    res.send(bigObj)
}).catch(e => console.log('this is e', e));
 

}

function getById(id) {
  return companyDao
    .companyCheck(name)
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
}

function addEmail(req, res) {
  if (req.body.timestamp != undefined) {
    let businessId, storeEmail, vars, email;

    if (req.body["X-Mailgun-Variables"]) {
      vars = JSON.parse(req.body["X-Mailgun-Variables"]);
    }

    email = {
      mail_id: req.body["Message-Id"],
      mail_to: req.body.To,
      mail_from: req.body.From,
      mail_cc: req.body.Cc,
      subject: req.body.Subject,
      plain: req.body["body-plain"],
      html: req.body["body-html"],
    };

    if (vars) {
      businessId = vars.businessId;
      email.business_id = vars.businessId;
      email.bucket = "Sent";
      email.status = "delivered";
      res.send(email);
    } else {
      const references = req.body.References.split(" ")[0];

      const mailById = getById(references);

      mailById.then((r) => {
        businessId = r.data[0].business_id ? r.data[0].business_id : "";
        email.business_id = businessId;
        email.bucket = "Inbox";
        email.status = "unread";
      });
    }

    emailDao
      .addEmail(email)
      .then((data) => {
        res.send(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

module.exports = mtaController;


