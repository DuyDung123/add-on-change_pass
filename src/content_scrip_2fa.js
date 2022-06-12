import { Job_GetCode2Fa } from "./job/Job_GetCode2Fa";

const faCode = new Job_GetCode2Fa;
(async() => {
    faCode.getCode2Fa();
 })();