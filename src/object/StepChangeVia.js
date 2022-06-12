export class StepChangeVia{
    //step
    WAIT = "wait";
    OK = "ok";
    ERROR = "error";

    isEmailChinh = null;

    isRemoveEmail = null;

    constructor(){
        this.isEmailChinh = this.WAIT;
        this.isRemoveEmail = this.WAIT;
    }

    formObject = (object) =>{
        this.isEmailChinh = object.isEmailChinh;
        this.isRemoveEmail = object.isRemoveEmail;
    }

    toJsonObject = () => {
        return {
            isEmailChinh: this.isEmailChinh,
            isRemoveEmail: this.isRemoveEmail,
        };
    }
}