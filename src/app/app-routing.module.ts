import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavoriteAnalysisComponent} from './pages/favorite-analysis/favorite-analysis.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';
const routes: Routes = [
  { path : '', redirectTo: 'favorite-analysys', pathMatch: 'full'},
  { path : 'home' , component: HomeComponent},
  { path : 'favorite-analysys' , component: FavoriteAnalysisComponent},
  { path : '**' , component: NotFoundComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes , { useHash : true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
