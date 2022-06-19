import { AxiosInstance } from "axios";
export interface Headers {
    [key: string]: any
}
export interface Params{
    [key:string]:any
}
export class HttpRequest {
    constructor(private axios: AxiosInstance, private getHttpOptions?: () => { headers?: Headers, params?:Params }) { }
    private getOptions(params?:Params): { headers?: Headers,params?:Params} {
        if (this.getHttpOptions) {
            return this.getHttpOptions();
        } else {
            const httpOptions = {
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8'
                },
                params:params
            };
            
            return httpOptions;
        }
    }

    get<T>(url: string, options?: { headers?: Headers, params?:Params }): Promise<T> { 
                       
        return Promise.resolve(this.axios.get<T>(url, options ? options : this.getOptions()).then(({ data }) => data));
    }
}
