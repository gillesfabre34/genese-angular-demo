import { HttpMethod } from './httpMethod';

export class Endpoint {
    path: string;
    method: HttpMethod;
    dto?: any;
}
