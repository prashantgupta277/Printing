import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
// import { ReflectiveInjector } from '@angular/core';
import { Http, Response, RequestMethod, RequestOptions } from '@angular/http';

@Injectable()
/**
 * This class provides the helper method to execute Web API request.
 */
export class HttpHelper {
    /**
     * Constructor
     * @param _http: inject http object
     */
    constructor(private _http: Http) {}
    /**
     * Executes the post request with given uri parameters and header values.
     * @param url: The reqeust URI.
     * @param data: The reqeust object.
     * @param args: The request argument.
     */

    post(url: string, data: any, requestOptions: RequestOptions, enableAPILog ? : boolean, actionName ? : string): Observable < any > {

        // Add default header
        requestOptions.headers.append('Content-Type', 'application/json');
        requestOptions.headers.append('Accept', 'application/json');

        // Add reqeust method
        requestOptions.method = RequestMethod.Post;

        return this._http.post(url, JSON.stringify(data), requestOptions)
            .map((res: Response) => {
                return res.json();
            })
    }
    postFrom(url: string, data: any, requestOptions: RequestOptions, enableAPILog ? : boolean, actionName ? : string): Observable < any > {

        // Add default header
        // requestOptions.headers.append('Content-Type', 'application/json');
        // requestOptions.headers.append('Accept', 'application/json');

        // Add reqeust method
        requestOptions.method = RequestMethod.Post;

        return this._http.post(url, data, requestOptions)
            .map((res: Response) => {
                return res.json();
            })
    }
    put(url: string, data: any, requestOptions: RequestOptions, enableAPILog ? : boolean, actionName ? : string): Observable < any > {
        // Add default header
        requestOptions.headers.append('Content-Type', 'application/json');
        requestOptions.headers.append('Accept', 'application/json');

        // Add reqeust method
        requestOptions.method = RequestMethod.Put;

        // Call server API
        return this._http.put(url, JSON.stringify(data), requestOptions)
            .map((res: Response) => {
                return res.json();
            })
    }
    get(url: string, requestOptions: RequestOptions, enableAPILog ? : boolean, actionName ? : string): Observable < any > {

        // Add default header
        requestOptions.headers.append('Content-Type', 'application/json');
        requestOptions.headers.append('Accept', 'application/json');

        // Add reqeust method
        requestOptions.method = RequestMethod.Get;

        return this._http.get(url)
            .map((res: Response) => {
                return res.json();
            })
    }
}