import { Injectable } from '@angular/core';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { RequestModel } from '../models/request.model';

@Injectable({
    providedIn: 'root'
})
export class DefaultRequestService {
    constructor(
        private http: HttpClient
    ) { }

    /**
     * Cria uma requisição HTTP do tipo GET.
     * @param config Dados de configuração da requisição.
     */
    makeGet<T>(config = new RequestModel()): Observable<T> {
        let request: Observable<T>;
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

        const httpOptions = { headers, params: this.getParams(config.params), responseType: undefined };

        request = this.http.get<T>(config.url, httpOptions);

        return request;
    }

    private getParams(params: any[]): HttpParams {
        let httpParams = new HttpParams();

        for (const param of params) {
            httpParams = httpParams.set(param.key, param.value);
        }

        return httpParams;
    }
}
