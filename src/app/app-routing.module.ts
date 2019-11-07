import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },

  { path: 'movie-display', loadChildren: './movie-display/movie-display.module#MovieDisplayPageModule' },
  { path: 'mov/:title', loadChildren: './movieinfo/movieinfo.module#MovieinfoPageModule' },
  { path: 'moviedetails/:title', loadChildren: './moviedetails/moviedetails.module#MoviedetailsPageModule' },
  { path: ':id/:name', loadChildren: './subcategory/subcategory.module#SubcategoryPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
