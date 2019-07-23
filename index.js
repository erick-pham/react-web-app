// const { oauth2_v2, google } = require('googleapis');
// const jwtGoogle = require('./jwt.json')
// //console.log(jwtGoogle)

// const main = async () => {
//   try {
//    new google.auth.OAuth2()
//     const auth = await google.auth.getClient('form-management-244204-969b116b59e0.json')
//     console.log(auth)
//   } catch (error) {
//     console.log(error)
//   }

// }

// main();
// var http = require('http');
// http.createServer(async function (req, res) {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   try {

//     const auth = await google.auth.getClient('form-management-244204-969b116b59e0.json')
//     console.log(auth)
//   } catch (error) {
//     console.log(error)
//   }
//   res.end('Hello World\n');
// }).listen(80, "127.0.0.1");
// console.log('Server running at http://127.0.0.1:80/')
const fs = require('fs');
const readline = require('readline');
const { google } = require('googleapis');

// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/script.projects'];
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const TOKEN_PATH = 'token.json';
const token = require('./token.json');
const credentials = require('./credentials.json');
const { client_secret, client_id, redirect_uris } = credentials.installed;

// console.log(token)
const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);
oAuth2Client.setCredentials(token);

oAuth2Client.refreshToken(token.refresh_token).then((rs) => {
  console.log(rs)

}).catch((e) => {
  console.log(e)
})


// Load client secrets from a local file.
// fs.readFile('credentials.json', (err, content) => {
//   if (err) return console.log('Error loading client secret file:', err);
//   // Authorize a client with credentials, then call the Google Apps Script API.
//   authorize(JSON.parse(content), callAppsScript);
// });

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
function authorize(credentials, callback) {
  const { client_secret, client_id, redirect_uris } = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(
    client_id, client_secret, redirect_uris[0]);

  // Check if we have previously stored a token.
  fs.readFile(TOKEN_PATH, (err, token) => {
    if (err) return getAccessToken(oAuth2Client, callback);
    oAuth2Client.setCredentials(JSON.parse(token));
    callback(oAuth2Client);
  });
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback for the authorized client.
 */
function getAccessToken(oAuth2Client, callback) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
  console.log('Authorize this app by visiting this url:', authUrl);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question('Enter the code from that page here: ', (code) => {
    rl.close();
    oAuth2Client.getToken(code, (err, token) => {
      if (err) return console.error('Error retrieving access token', err);
      oAuth2Client.setCredentials(token);
      // Store the token to disk for later program executions
      fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
        if (err) return console.error(err);
        console.log('Token stored to', TOKEN_PATH);
      });
      callback(oAuth2Client);
    });
  });
}

/**
 * Creates a new script project, upload a file, and log the script's URL.
 * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
 */
function callAppsScript(auth) {
  const script = google.script({ version: 'v1', auth });
  script.projects.create({
    resource: {
      title: 'My Script',
    },
  }, (err, res) => {
    if (err) return console.log(`The API create method returned an error: ${err}`);
    script.projects.updateContent({
      scriptId: res.data.scriptId,
      auth,
      resource: {
        files: [{
          name: 'hello',
          type: 'SERVER_JS',
          source: 'function helloWorld() {\n  console.log("Hello, world!");\n}',
        }, {
          name: 'appsscript',
          type: 'JSON',
          source: '{\"timeZone\":\"America/New_York\",\"exceptionLogging\":' +
            '\"CLOUD\"}',
        }],
      },
    }, {}, (err, res) => {
      if (err) return console.log(`The API updateContent method returned an error: ${err}`);
      console.log(`https://script.google.com/d/${res.data.scriptId}/edit`);
    });
  });
}
