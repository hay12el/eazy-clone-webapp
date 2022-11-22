const cron = require("node-cron");

const task = cron.schedule('0 36 13 * * *', ()=>{
    console.log("task scheduled to run every day at 13:36");
});

module.exports = task;