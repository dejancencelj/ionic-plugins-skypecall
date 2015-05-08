var SkypePlugin = {
    
    createEvent: function(username, successCallback, errorCallback) {
        cordova.exec(
            successCallback, // success callback function
            errorCallback, // error callback function
            'SkypePlugin', // mapped to our native Java class called "SkypePlugin"
            'startSkypeCall', // with this action name
            [{                  // and this array of custom arguments to create our entry
                "username": username,

            }]
        );
     },
    
   
    
};
module.exports = SkypePlugin;