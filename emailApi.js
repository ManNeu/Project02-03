var API_KEY = '494b0b9d4b789286a57b9695e6395664-2af183ba-ab260be5';
var DOMAIN = 'sandboxc6208f881182493ab93a720f37d7df0d.mailgun.org';
var mailgun = require('mailgun-js')({ apiKey: API_KEY, domain: DOMAIN });

const data = {
    from: 'Manish <mrnish.are@gmail.com>',
    to: 'mrnish.are@gmail.com',
    subject: 'Hello',
    text: 'Testing'
};

mailgun.messages().send(data, (error, body) => {
    if (error) {
        console.log(error)
    }

    console.log(body);
});