import { Component, OnInit } from '@angular/core';
import { ExternalData } from '../external-data.services';

@Component({
    selector: 'app-mob-apps',
    templateUrl: './mob-apps.component.html',
    styleUrls: ['./mob-apps.component.scss'],
    providers: [ExternalData],
})
export class MobAppsComponent implements OnInit {
    mapApps: any = [];

    constructor(private mobilAppsData: ExternalData) {}

    ngOnInit(): void {
        this.mobilAppsData.getMobileApps().subscribe((data: any) => {
             this.mapApps = data["data"];
        });
    }
}
