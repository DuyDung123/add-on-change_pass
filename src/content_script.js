import { Job_ChangePass } from "./job/Job_ChangePassFB";

const fb = new Job_ChangePass;
(async() => {
    alert("hello");
    fb.changePass();
 })();