export class Via {

    id = null;

    uid = null;

    pass = null;

    passNew = null;

    emailOld = null;

    passEmailOld = null;

    qRcode2Fa = null;

    emailNew = null;

    passEmailNew = null;

    cookie = null;

    token = null;

    isChangePass = null;

    isLogOut = null;

    isChangeMail = null;

    is2Fa = null;

    constructor(object){
        this.id = object.id;
        this.uid = object.uid;
        this.pass = object.pass;
        this.passNew = object.passNew;
        this.emailOld = object.emailOld;
        this.passEmailOld = object.passEmailOld;
        this.emailNew = object.emailNew;
        this.passEmailNew = object.passEmailNew;
        this.qRcode2Fa = object.qRcode2Fa;
        this.isChangePass = object.isChangePass;
        this.isLogOut = object.isLogOut;
        this.isChangeMail = object.isChangeMail;
        this.is2Fa = object.is2Fa;
    }

    set setId(id){
        this.id = id;
    }

    set setUid(uid){
        this.uid = uid;
    }

    set setPass(pass) {
        this.pass = pass;
    }

    set setPassNew(passNew) {
        this.passNew = passNew;
    }

    set setPassEmailOld(passEmailOld) {
        this.passEmailOld = passEmailOld;
    }

    set setQRcode2Fa(qRcode2Fa) {
        this.qRcode2Fa = qRcode2Fa;
    }

    set setCookie(cookie) {
        this.cookie = cookie;
    }

    set setToken(token) {
        this.token = token;
    }

    set setIsChangePass(isChangePass) {
        this.isChangePass = isChangePass;
    }

    set setIsLogOut(isLogOut) {
        this.isLogOut = isLogOut;
    }

    set setIsChangeMail(isChangeMail) {
        this.isChangeMail = isChangeMail;
    }

    set setIs2Fa(is2Fa) {
        this.is2Fa = is2Fa;
    }

    fromJsonStr(jsonStr) {
        JSON.parse(jsonStr);
    }

    formObject = (object) =>{
        this.id = object.id;
        this.uid = object.uid;
        this.pass = object.pass;
        this.passNew = object.passNew;
        this.emailOld = object.emailOld;
        this.passEmailOld = object.passEmailOld;
        this.emailNew = object.emailNew;
        this.passEmailNew = object.passEmailNew;
        this.qRcode2Fa = object.qRcode2Fa;
        this.isChangePass = object.isChangePass;
        this.isLogOut = object.isLogOut;
        this.isChangeMail = object.isChangeMail;
        this.is2Fa = object.is2Fa;
    }

    toJsonObject = () => {
        return {
          id: this.id,
          uid: this.uid,
          pass: this.pass,
          passNew: this.passNew,
        };
    }
}