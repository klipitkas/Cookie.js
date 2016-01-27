var Cookie = function( name ) {

    this.name = name;

    if (this.name == null || ! isNaN(this.name))
        throw "Please enter a valid existing or new cookie name.";

    var cookies = document.cookie.split(";");

    for ( var i=0 ; i < cookies.length ; i++ ) {
        if ( cookies[i].split("=")[0].trim().toLowerCase() === 
            name.trim().toLowerCase() ) {
            this.value = cookies[i].split("=")[1];
        }
    }

    return this.value || undefined;
};

Cookie.prototype.setValue = function( value ) {
    
    if (this.name == null)
        throw "Please set a valid cookie name before assigning a value.";

    if (typeof value !== "string" && typeof value !== "number")
        throw "Invalid type of value, please enter either " +
              "a string or a number value.";

    document.cookie = this.name + "=" + value + "; path=/";

    return value;
};

Cookie.prototype.getValue = function() {

    if (this.name == null)
        throw "Please set a valid cookie name before obtaining a value.";

    var cookies = document.cookie.split(";");

    for ( var i=0 ; i < cookies.length ; i++ ) {
        if ( cookies[i].split("=")[0].trim().toLowerCase() === 
            name.trim().toLowerCase() ) {
            this.value = cookies[i].split("=")[1];
        }
    }

    return this.value || undefined;
};

Cookie.prototype.toArray = function( splitChar ) {

    if (this.name == null)
        throw "Please set a valid cookie name before obtaining a value.";

    if (splitChar == null)
        throw "Please enter a valid character that will be used to " +
              "split the elements of the array that will be returned!";

    var cookies = document.cookie.split(";");

    for ( var i=0 ; i < cookies.length ; i++ ) {
        if ( cookies[i].split("=")[0].trim().toLowerCase() === 
            name.trim().toLowerCase() ) {
            this.value = cookies[i].split("=")[1];
        }
    }

    return this.value.split(splitChar) || undefined;
}
