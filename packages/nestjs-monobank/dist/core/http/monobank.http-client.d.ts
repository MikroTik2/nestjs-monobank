import { Dispatcher } from 'undici';
import { type MonobankModuleOptions } from '../../common/interfaces';
export declare class MonobankHttpClient {
    private readonly config;
    constructor(config: MonobankModuleOptions);
    request<T>(options: {
        method: Dispatcher.HttpMethod;
        url: string;
        data?: any;
        params?: any;
    }): Promise<T>;
    get<T>(url: string, params?: any): Promise<T>;
    post<T>(url: string, data?: any): Promise<T>;
    delete<T>(url: string, params?: any): Promise<T>;
    private buildUrl;
}
