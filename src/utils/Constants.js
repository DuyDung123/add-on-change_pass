export const BASE_URL_M_FB = "https://m.facebook.com/";
export const BASE_URL_FB = "https://www.facebook.com/";
export const BASE_URL_2FA = "https://gauth.apps.gbraad.nl/";
export const BASE_SERVER = "http://localhost:5001/";
export const BASE_TEST = "http://160.251.123.218/api/get-mercari-category/74";
export const BASE_HOST_MAIL = "https://outlook.live.com/owa/?nlp=1";
export const BASE_MAIL_GOOGLE = "https://accounts.google.com/signin/v2/identifier";


// data storage
export const VIA = "data";
export const CODE2FA = "code2Fa";
export const STEP = "step";
export const CODEEMAIL = "codeEmail";

export class FB {

    constructor() { }

    CHANGE_PASS_WAIT = 1;
    CHANGE_PASS_SUCCESS = 2;
    CHANGE_PASS_ERROR = 3;

    CHANGE_MAIL_WAIT = 1;
    CHANGE_MAIL_SUCCESS = 2;
    CHANGE_MAIL_ERROR = 3;

    LOGOUT_WAIT = 1;
    LOGOUT_SUCCESS = 2;
    LOGOUT_ERROR = 3;

    CHANGE_2FA_WAIT = 1;
    CHANGE_2FA_SUCCESS = 2;
    CHANGE_2FA_ERROR = 3;

    BASE_URL_M_FB = "https://m.facebook.com/";
    URL_SAVE_DEVICE = "https://m.facebook.com/login/save-device";
    URL_SETTING = "https://m.facebook.com/settings/?entry_point=bookmark";
    URL_SETTING_2 = "https://m.facebook.com/?soft=bookmarks";
    URL_SECURITY_PASSWORD = "https://m.facebook.com/settings/security/password/";
    URL_LOG_OUT_DEVICE = "https://m.facebook.com/settings/security_login/sessions/";
    URL_CHANGE_MAIL = "https://m.facebook.com/ntdelegatescreen/?params=%7B%22entry-point%22%3A%22settings%22%7D&path=%2Fcontacts%2Fmanagement%2F";
    URL_2FA = "https://m.facebook.com/security/2fac/setup/intro/metadata/?source=1";
    URL_CONFRIM_MAIL = "https://m.facebook.com/entercode.php";
}
