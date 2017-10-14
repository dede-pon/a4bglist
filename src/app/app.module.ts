import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BgListComponent } from './components/bg-list/bg-list.component';
import { BgComponent } from './components/bg/bg.component';
import { BgDetailComponent } from './components/bg-detail/bg-detail.component';
import { BgSearchComponent } from './components/bg-search/bg-search.component';
import { BgCollectionComponent } from './components/bg-collection/bg-collection.component';
import { BgTreeComponent } from './components/bg-tree/bg-tree.component';
import { BgDashboardComponent } from './components/bg-dashboard/bg-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    BgListComponent,
    BgComponent,
    BgDetailComponent,
    BgSearchComponent,
    BgCollectionComponent,
    BgTreeComponent,
    BgDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
