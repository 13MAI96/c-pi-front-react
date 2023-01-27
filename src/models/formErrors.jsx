class FormErrors{
    validator = ""
    message = ""
    validate = (input) => {
        return this.validator.test(input) ? undefined : this.message
    }

    constructor(validator, message){
        this.validator = validator
        this.message = message
    }
}

export default FormErrors;