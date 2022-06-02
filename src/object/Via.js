export class Via {

    uid = null

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

    constructor() {
    }

    set setPassNew(passNew) {
        this.passNew = passNew;
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

    toJsonObject = () => {
        return {
          name: this.name,
          id: this.id,
          status: this.status,
          timeStart: this.timeStart,
          timeContinue: this.timeContinue,
          timeEnd: this.timeEnd,
          data: this.data,
          steps: this.steps.map((item) => item.toJsonObject()),
          stepIndex: this.stepIndex,
        };
    }
}