 class BadRequest extends Error{
    code = 402;
    constructor(message){
        super(message);
        this.name = message;
    }
    
}
 class InternalServerError extends Error{
    code = 500;
    constructor(message){
        super(message);
        this.name = message;
    }
    
}

module.exports = {
    BadRequest,InternalServerError
    
}