(function() {
    
    // Create the builder with one param
    // Param has the min. length of password
    $.fn.buildPassword = function(minPassword)
    {
        // save the current password
        var result = "";

        // params to create the password
        var params = ["1234567890", 
                      "abcdefghijklmnopqrstuvwxyz", 
                      "ABCDEFGHIJKLMNOPQRSTUVWXYZ", 
                      "!\"§$%&/()=]["];
                    
        // Shuffle the password
        params.sort(function() 
        { 
            return 0.5 - Math.random() 
        });

        // check the length of the password with the parameter
        // break the condition is false
        while(result.length < minPassword)
        {
            
            for(j = 0; j < params.length; j++)
            {
                // find a sign from the string
                // set it to result
                result += params[j].substr(
                          Math.floor(
                              (Math.random() * params[j].length) + 1), 1);
            }
        }
    // output the string
    return this.html(result.substr(0, minPassword));
    };
}(jQuery));
