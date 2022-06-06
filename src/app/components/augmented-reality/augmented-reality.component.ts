import { Component, OnInit } from '@angular/core';
import { ExternalData } from '../external-data.services';

@Component({
    selector: 'app-augmented-reality',
    templateUrl: './augmented-reality.component.html',
    styleUrls: ['./augmented-reality.component.scss'],
    providers: [ExternalData],
})
export class AugmentedRealityComponent implements OnInit {
    mapApps: any = [];

    constructor(private augmentedRealityData: ExternalData) {}

    ngOnInit(): void {
        this.augmentedRealityData.getAugmentedReality().subscribe((data: any) => {
            this.mapApps = data['data'];
        });
    }
}
