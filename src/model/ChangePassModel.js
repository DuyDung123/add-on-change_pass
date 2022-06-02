import { Via } from "../object/Via";
export class ChangePassModel {
    constructor(){}

    login = (via) => {
        via.toJsonObject();
    }
}