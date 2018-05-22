import { Injectable } from '@angular/core'
import { Site } from './site.model';

@Injectable()
export class SiteService {

    private listSites: Site[];

    public constructor() {
        this.listSites = [];
        this.listSites.push(new Site("Finca Calima", 50, "Popayán", 450000, "COP", ["../../../images/Calima3.jpg", "../../../images/Calima1.jpg", "../../../images/Calima2.jpg", "../../../images/Calima4.jpg"]));        
        this.listSites.push(new Site("Finca Villeta", 30, "Popayán", 200000, "COP", ["../../../images/Villeta1.jpg", "../../../images/Villeta2.jpg", "../../../images/Villeta3.jpg", "../../../images/Villeta4.jpg"]));
        this.listSites.push(new Site("Estadero Melgar", 20, "Popayán", 580000, "COP", ["../../../images/Melgar1.jpg", "../../../images/Melgar2.jpg", "../../../images/Melgar3.jpg", "../../../images/Melgar4.jpg", "../../../images/Melgar5.jpg"]));
        this.listSites.push(new Site("Finca San Jerónimo", 40, "Popayán", 790000, "COP", ["../../../images/SanJeronimo1.jpg", "../../../images/SanJeronimo2.jpg", "../../../images/SanJeronimo3.jpg"]));
        this.listSites.push(new Site("El Cerrito", 40, "Popayán", 700000, "COP",  ["../../../images/ElCerrito1.jpg", "../../../images/ElCerrito2.jpg", "../../../images/ElCerrito3.jpg", "../../../images/ElCerrito4.jpg", "../../../images/ElCerrito5.jpg"]));
        this.listSites.push(new Site("Apilcala", 60, "Popayán", 850000, "COP",  ["../../../images/Apicala1.jpg", "../../../images/Apicala2.jpg", "../../../images/Apicala3.jpg", "../../../images/Apicala4.jpg"]));
    }

    public getSites(): Site[] {
        return this.listSites;
    }

}
