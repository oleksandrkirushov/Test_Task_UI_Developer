import { Component, OnInit } from '@angular/core';
import { TrinetixServices } from '../tinetix-serv.service';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
    providers: [TrinetixServices],
})
export class MainComponent {
    services: any = [];
    constructor(private trinetixService: TrinetixServices) {}

    ngOnInit() {
        // this.services=this.trinetixService.services
        this.trinetixService.getTrinetixServ().subscribe((data:any) => {
        this.services=data["trinetixServList"]
        });
    }
}
