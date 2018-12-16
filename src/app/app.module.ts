import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoMaterialModule } from '../material-modules';
import { FavoriteAnalysisComponent } from './pages/favorite-analysis/favorite-analysis.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { TutorialComponent } from './common/tutorial/tutorial.component';


@NgModule({
  declarations: [
    AppComponent,
    FavoriteAnalysisComponent,
    NotFoundComponent,
    HomeComponent,
    TutorialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DemoMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
