import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class ExternalData {
    constructor(private httpExternalData: HttpClient) {}

    getMobileApps() {
        return this.httpExternalData.get(
            'https://api.giphy.com/v1/gifs/trending?api_key=jRfm1eOkIA2CdOd25ahwGR0IepZtvTmx&limit=6&offset=0&rating=g'
        );
    }

    getWebServices() {
        return this.httpExternalData.get(
            'https://api.giphy.com/v1/gifs/trending?api_key=jRfm1eOkIA2CdOd25ahwGR0IepZtvTmx&limit=6&offset=8&rating=g'
        );
    }

    getAugmentedReality() {
        return this.httpExternalData.get(
            'https://api.giphy.com/v1/gifs/trending?api_key=jRfm1eOkIA2CdOd25ahwGR0IepZtvTmx&limit=6&offset=16&rating=g'
        );
    }
}
