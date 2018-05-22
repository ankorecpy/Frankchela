import { Component, OnInit } from '@angular/core';
import { SitesComponent } from '../sites/sites.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = "Frankchela";

  constructor() { }

  ngOnInit() {
  }

}
