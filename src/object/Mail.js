export class Mail{
    
    id = null;
    email = null
    password = null;

    constructor(){}

    formObject = (object) =>{
        this.id = object.id;
        this.email = object.password;
        this.password = object.password;
    }

    toJsonObject = () => {
        return {
          id: this.id,
          email: this.email,
          password: this.password,
        };
    }
}