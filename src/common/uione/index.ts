export interface UserAccount {
    id?: string,
    username?: string,
    token?: string
}
class s {
    private static _c: any;
    private static _user: UserAccount | null | undefined;
    static _sessionStorageAllowed = true;

    static setConfig(c: any): void {
        return s._c = c;
    }
    static getConfig(): any {
        return s._c;
    }
    static user(profile?: string): UserAccount | null | undefined {
        let u = s._user;
        if (!u) {
            if (s._sessionStorageAllowed) {
                try {
                    const authService = sessionStorage.getItem('authService');
                    if (authService) {
                        s._user = JSON.parse(authService);
                        u = s._user;
                    }
                } catch (err) {
                    s._sessionStorageAllowed = false;
                }
            }
        }
        return u;
    }
    static token(profile?: string): string | undefined {
        const u = s.user(profile);
        return (!u ? undefined : u.token);
    }
}
interface Headers {
    [key: string]: any;
}
interface Params {
    [key: string]: any;
}
export function options(params:Params): { headers?: Headers, params?: Params } {
    const t = s.token();
    if (t) {
        return {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'Authorization': 'Bearer ' + t
            },
            params: params
        };
    } else {
        return {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
            },
            params: params
        }
    }
}
export const storage = s;