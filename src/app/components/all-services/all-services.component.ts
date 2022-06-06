import { Component, OnInit } from '@angular/core';
import { TrinetixServices } from '../tinetix-serv.service';

@Component({
    selector: 'app-all-services',
    templateUrl: './all-services.component.html',
    styleUrls: ['./all-services.component.scss'],
    providers: [TrinetixServices],
})
export class AllServicesComponent implements OnInit {
    services: any = [];

    constructor(private trinetixService: TrinetixServices) {}

    ngOnInit() {
        this.trinetixService.getTrinetixServ().subscribe((data: any) => {
            this.services = data['trinetixServList'];
        });
    }
}
