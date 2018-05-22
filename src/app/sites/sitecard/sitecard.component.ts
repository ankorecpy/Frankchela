import { Component, OnInit, Input } from '@angular/core';

import { Site } from '../shared/site.model';
//import { MatIconModule, MatIconRegistry } from '@angular/material';

@Component({
  selector: 'sitecard',
  templateUrl: './sitecard.component.html',
  styleUrls: ['./sitecard.component.css']
})
export class SitecardComponent implements OnInit {

  @Input() private site: Site;

  constructor() { }

  ngOnInit() {
  }

}
