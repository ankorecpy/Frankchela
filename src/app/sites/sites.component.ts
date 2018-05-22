import { Component } from '@angular/core';

import { SitecardComponent } from './sitecard/sitecard.component';
import { Site } from './shared/site.model';
import { SiteService } from './shared/site.service';

@Component ({
    selector: 'sites',
    templateUrl: './sites.component.html',
    styleUrls: ['./sites.component.css']
})
export class SitesComponent {
    
    private listSites: Site[];

    constructor (public service: SiteService) {
        this.listSites = this.service.getSites();
    }

}


