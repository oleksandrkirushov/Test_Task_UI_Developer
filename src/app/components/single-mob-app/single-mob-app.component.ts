import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-mob-app',
  templateUrl: './single-mob-app.component.html',
  styleUrls: ['./single-mob-app.component.scss']
})
export class SingleMobAppComponent {
    @Input() mobApp:any;
}
