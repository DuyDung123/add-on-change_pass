export const BASE_URL_M_FB = "https://m.facebook.com/";
export const BASE_URL_FB = "https://www.facebook.com/";
export const BASE_URL_2FA = "https://gauth.apps.gbraad.nl/";
export const BASE_SERVER = "http://127.0.0.1:5001/";
export const BASE_TEST = "http://160.251.123.218/api/get-mercari-category/74";
export const BASE_HOST_MAIL = "https://outlook.live.com/owa/?nlp=1";
export const BASE_MAIL_GOOGLE = "https://accounts.google.com/signin/v2/identifier";

export const CHANGE_PASS_SUCCESS = 2;
export const CHANGE_PASS_ERROR = 3;

export const CHANGE_MAIL_SUCCESS = 2;
export const CHANGE_MAIL_ERROR = 3;

export const CHANGE_LOGOUT_SUCCESS = 2;
export const CHANGE_LOGOUT_ERROR = 3;

export const CHANGE_2FA_SUCCESS = 2;
export const CHANGE_2FA_ERROR = 3;

export class FB{

    constructor(){}

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
