export class Via {
    constructor(uid, pass, passNew, emailOld, passEmailOld, emailNew, passEmailNew, isChangePass, isLogOut, isChangeMail, is2Fa) {
      this.uid = uid;

      this.pass = pass;

      this.passNew = passNew;

      this.emailOld = emailOld;

      this.passEmailOld = passEmailOld;

      this.qRcode2Fa;

      this.emailNew = emailNew;

      this.passEmailNew = passEmailNew;

      this.cookie;

      this.token;

      this.isChangePass = isChangePass;

      this.isLogOut = isLogOut;

      this.isChangeMail = isChangeMail;

      this.is2Fa = is2Fa;
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
  }