import { HttpRequest } from '../../common/axios-core';
import {  UserService } from './user';

export * from './user'

export class UserClient implements UserService {
    constructor(protected http: HttpRequest, protected url: string) {

    }
    search(params:any): Promise<any> {        
        return this.http.get<any>(this.url+'/search',{params:params});
    }
}