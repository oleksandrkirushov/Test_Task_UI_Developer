import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TrinetixServices {
    constructor(private http: HttpClient) {}

    getTrinetixServ() {
        return this.http.get('assets/trinetix-serv.json');
    }
}
