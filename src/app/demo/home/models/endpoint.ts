import { HttpMethod } from './httpMethod';

export interface Endpoint {
    path: string;
    method: HttpMethod;
    dto?: any;
}
