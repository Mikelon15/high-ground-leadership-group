const AWS = require('aws-sdk');
const s3 = new AWS.S3();
AWS.config.update({ region: 'us-west-1' });

function createEmailBody(fileContents) {
    return `
        <!DOCTYPE html>
            <html>
            <head>
                <style>
                    .high-ground-leadership-container {
                        font-family: Arial, sans-serif;
                        background-color: white;
                        color: #353535;
                        border: solid #a3a3a3 2px;
                        border-radius: 20px;
                        box-shadow: #aeaeae 0px 0px 4px 1px;
                        max-width: 400px;
                        margin: 10px;
                        padding-bottom: 15px;    
                    }
                    .high-ground-leadership-container > div {
                        font-size: 14px;
                        border-radius: 0 0 20px 20px;
                        border-radius: 8px;
                        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
                    }
                    .high-ground-leadership-container > div > .header {
                        font-size: 16px;
                        padding: 12px;
                        border-radius: 20px 20px 0 0;
                        background-color: #fafad2;
                    }
                    .high-ground-leadership-container > div > .content {
                        background-color: white;
                        padding: 10px 10px 0px 10px;
                    }
                    .high-ground-leadership-container > div > .content > .email,.phone,.message,.date {
                        margin: 5px 0;
                    }
                    .high-ground-leadership-container > div > .content > .message {
                        margin: 5px 0;
                    }
                    .high-ground-leadership-container > div > .content > .button {
                        text-align: center;
                        text-decoration: none;
                        display: inline-block;
                        font-size: 14px;
                        margin: 0;
                        border-radius: 25px;
                        color: #261f00;
                        background-color: #fafad2;
                        border: 2px solid #b0b000;
                        padding: 5px 30px;
                    }
                    .high-ground-leadership-container > div > .content > .button:hover {
                        background-color: #f5f5c6;
                    }
                    .high-ground-leadership-image {
                        font-family: Arial, sans-serif;
                        width: auto;
                        max-height: 75px;
                        padding: 10px 20px;
                        background-color: white;
                    }
                </style>
            </head>
            <body>
                <div style="display: flex;">
                    <h1 style="padding-left: 20px; padding-top: 20px; margin: 0; text-transform: uppercase;">You recieved new messages</h1>
                    <img src="https://hgleaderships.s3.us-west-1.amazonaws.com/bg_logo.png" alt="" class="high-ground-leadership-image">
                </div>
                ${fileContents.map(rawContent => JSON.parse(rawContent)).map((content) => `
                <div class="high-ground-leadership-container">
                    <div>
                        <div class="header"><span class="title">From: <b>${content.name}</b></span></div>
                        <div class="content">
                            <p class="date">${content.dateTime}</p>
                            <p class="email">Email: <b>${content.email}</b></p>
                            ${content.phoneNumber ? `<p class="phone">Phone: <b>${content.phoneNumber}</b></p>` : '' }
                            <p>
                                Message:<br>
                                ${content.message}
                            </p>
                            <a href="mailto:${content.email}" class="button">Reply</a>
                        </div>
                    </div>
                </div>
                `).join('')}
            </body>
        </html>
    `
}

exports.handler = async (event) => {
    const ses = new AWS.SES({ apiVersion: '2010-12-01' });

    const bucketName = 'hgleadership-contact-us';
    const prefix = 'formData/';

    try {
        // List all objects in the "formData" directory
        const listObjectsOutput = await s3.listObjectsV2({
            Bucket: bucketName,
            Prefix: prefix
        }).promise();

        // Ensure objects are found
        if (!listObjectsOutput.Contents || listObjectsOutput.Contents.length === 0) {
            console.log('No objects found in:', prefix);
            return {
                statusCode: 404,
                body: JSON.stringify({ message: 'No objects found' })
            };
        }

        // Read all objects in the "formData" directory
        const readPromises = listObjectsOutput.Contents.map(async (object) => {
            const getObjectOutput = await s3.getObject({
                Bucket: bucketName,
                Key: object.Key
            }).promise();
            // Assuming the file is a text file, adjust if necessary
            return getObjectOutput.Body.toString('utf-8');
        });

        // Wait for all reads to complete
        const fileContents = await Promise.all(readPromises);

        const d = new Date();
        const date = `${[d.getMonth()+1, d.getDate(), d.getFullYear()].join('/')}`
        const time = `${[d.getHours() > 12 ? d.getHours() % 12 : d.getHours(), d.getMinutes() < 10 ? `0${d.getMinutes()}`: d.getMinutes()].join(':')} ${d.getHours() > 12 ? 'PM' : 'AM'}`;
    
        const emailBody = createEmailBody(fileContents)
        const params = {
            Source: 'ContactUs.DoNotReply.MiguelGutz@gmail.com',
            Destination: { ToAddresses: ['MiguelGutz95@gmail.com'] },
            Message: {
                Body: {
                    Html: { 
                    Charset: 'UTF-8',
                    Data: emailBody 
                } },
                Subject: { Data: `You have new messages! High Ground Leadership ${date} ${time}` }
            }
        };

        const data = await ses.sendEmail(params).promise();
        console.log("Email sent:", data.MessageId);

        // / Prepare object deletion parameters
        const deleteParams = {
            Bucket: bucketName,
            Delete: {
                Objects: listObjectsOutput.Contents.map(({ Key }) => ({ Key }))
            }
        };

        // Delete objects in the directory
        await s3.deleteObjects(deleteParams).promise();
        console.log("Files deleted successfully.");


    } catch (error) {
        console.error("Email failed:", error);
        return { statusCode: 500, body: 'Email failed!' };
    }
};