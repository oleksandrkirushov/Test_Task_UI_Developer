import { Component, OnInit } from '@angular/core';
import { ExternalData } from '../external-data.services';

@Component({
  selector: 'app-web-services',
  templateUrl: './web-services.component.html',
  styleUrls: ['./web-services.component.scss'],
  providers: [ExternalData]
})
export class WebServicesComponent implements OnInit {

    mapApps: any = [];

    constructor(private webServicesData: ExternalData) {}

    ngOnInit(): void {
        this.webServicesData.getWebServices().subscribe((data: any) => {
             this.mapApps = data["data"];
        });
    }

}
