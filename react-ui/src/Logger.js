module.exports = {
    log: function (logMessage) {
        console.error("Indebtd log: " + logMessage);
    },

    error: function (errorMessage, stackTrace) {
        console.error("Indebtd error: " + errorMessage + "\nStack trace:\n" + stackTrace + "\n");
    }
};
