const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
ALIVE_IMG:process.env.ALIVE_IMG || "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhcVpfk_aT08grGKsCMbpdWPRDv7bb9kK1dqBAmSSMDUBn5YOfBV_f5HKJbMHULgpxRkZVCF2cfIhj5gtsia86l0qbKjc-VydZsIXH_J_oCeiobNHPhO4bnqJUS1IgrqvD_jG1VbcZ2kJA/s1600/1480_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS9zdG9yYWdlL3VwbG9hZHMvdmlldy80Y2NjNjJhNjY2Zjg0MDYyOWFkNmIzY2Q0ZTIwY2E5ZC5qcGc%253D.jpg",
ALIVE_MSG:process.env.ALIVE_MSG || "welcome to the new wold",
};
