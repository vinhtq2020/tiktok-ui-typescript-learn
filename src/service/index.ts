import axios from "axios";
import { HttpRequest } from "../common/axios-core";
import { storage } from "../common/uione";

import { UserClient, UserService } from "./user";
export * from './user'
export interface Config {
    user_url:string;
}
const http = new HttpRequest(axios);
class ApplicationContext{
    userService?:UserService;
    constructor(){
        this.getConfig = this.getConfig.bind(this);
        this.getUserService = this.getUserService.bind(this);
    }
    getConfig():Config{
        return storage.getConfig();
    }
    getUserService():UserService{
        if(!this.userService){
            const c = this.getConfig();            
            this.userService = new UserClient(http, c.user_url);
        }
        return this.userService;
    }
}

export const context = new ApplicationContext();
export function useUser():UserService{
    return context.getUserService();
}