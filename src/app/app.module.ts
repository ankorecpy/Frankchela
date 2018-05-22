import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SitecardComponent } from './sites/sitecard/sitecard.component';
import { SitesComponent } from './sites//sites.component';

import { SiteService } from './sites/shared/site.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SitecardComponent,
    SitesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [SiteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
