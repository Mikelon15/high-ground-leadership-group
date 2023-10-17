const AWS = require('aws-sdk');
const s3 = new AWS.S3();

const createDOMPurify = require('dompurify');
const { JSDOM } = require('jsdom');

const window = new JSDOM('').window;
const DOMPurify = createDOMPurify(window);

const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

function validateEmail(email) {
    return emailRegex.test(email);
}

function formatPhoneNumber(phoneNumberString) {
    let match = phoneNumberString.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
        return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }
    return undefined;
}

exports.handler = async (event) => {
    try {
        const body = JSON.parse(event.body); // assuming input is in JSON format

        const { message, email, name, phoneNumber} = body;
        
        const d = new Date();
        const date = `${[d.getMonth()+1, d.getDate(), d.getFullYear()].join('/')}`;
        const time = `${[d.getHours() > 12 ? d.getHours() % 12 : d.getHours(), d.getMinutes()].join(':')} ${d.getHours() > 12 ? 'PM' : 'AM'}`;

        // Optional: Perform validation here
        if (!message || !email || !name) {
            return { statusCode: 400, body: JSON.stringify({ error: "Incomplete form data" }) };
        }

        let numbersOnly = phoneNumber ? phoneNumber.replace(/\D/g, "") : '';

        // Checking if the resulting string has exactly 10 numbers
        if (numbersOnly.length !== 10  && !numbersOnly === '') {
            return { statusCode: 400, body: JSON.stringify({ error: "Invalid phone number" }) };
        }
        
        if (!validateEmail(email)) {
            return { statusCode: 400, body: JSON.stringify({ error: "Invalid email" }) };
        }

        const formData = JSON.stringify({ 
            name: DOMPurify.sanitize(name),
            dateTime: `${date} ${time}`,
            email: `${email}`,
            phoneNumber: formatPhoneNumber(numbersOnly),
            message: DOMPurify.sanitize(message)
        });
        
        const params = {
            Bucket: 'hgleadership-contact-us',
            Key: `formData/${Date.now()}.json`, 
            Body: formData,
            ContentType: 'application/json'
        };

        await s3.putObject(params).promise();

        return { statusCode: 200 };
    } catch (error) {
        console.error(error);
        return { statusCode: 500, body: JSON.stringify({ error: "Internal Server Error" }) };
    }
};
