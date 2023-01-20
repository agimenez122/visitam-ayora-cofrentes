import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'reserve',
    loadChildren: () => import('./reserve/reserve.module').then( m => m.ReservePageModule)
  },
  {
    path: 'event',
    loadChildren: () => import('./event/event.module').then( m => m.EventPageModule)
  },
  {
    path: 'promotion',
    loadChildren: () => import('./promotion/promotion.module').then( m => m.PromotionPageModule)
  },
  {
    path: 'idioma',
    loadChildren: () => import('./idioma/idioma.module').then( m => m.IdiomaPageModule)
  },
  {
    path: 'shop',
    loadChildren: () => import('./shop/shop.module').then( m => m.ShopPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'restaurant',
    loadChildren: () => import('./restaurant/restaurant.module').then( m => m.RestaurantPageModule)
  },
  {
    path: 'audios',
    loadChildren: () => import('./audios/audios.module').then( m => m.AudiosPageModule)
  },
  {
    path: 'chirel',
    loadChildren: () => import('./assut/assut.module').then( m => m.AssutPageModule)
  },
  {
    path: 'casas-rio',
    loadChildren: () => import('./assut/assut.module').then( m => m.AssutPageModule)
  },
  {
    path: 'volcan',
    loadChildren: () => import('./assut/assut.module').then( m => m.AssutPageModule)
  },
  {
    path: 'salinas',
    loadChildren: () => import('./assut/assut.module').then( m => m.AssutPageModule)
  },
  {
    path: 'ermita-castillo',
    loadChildren: () => import('./assut/assut.module').then( m => m.AssutPageModule)
  },




  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'reserve',
    loadChildren: () => import('./reserve/reserve.module').then( m => m.ReservePageModule)
  },
  {
    path: 'event',
    loadChildren: () => import('./event/event.module').then( m => m.EventPageModule)
  },
  {
    path: 'promotion',
    loadChildren: () => import('./promotion/promotion.module').then( m => m.PromotionPageModule)
  },
  {
    path: 'idioma',
    loadChildren: () => import('./idioma/idioma.module').then( m => m.IdiomaPageModule)
  },
  {
    path: 'shop',
    loadChildren: () => import('./shop/shop.module').then( m => m.ShopPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'restaurant',
    loadChildren: () => import('./restaurant/restaurant.module').then( m => m.RestaurantPageModule)
  },
  {
    path: 'audios',
    loadChildren: () => import('./audios/audios.module').then( m => m.AudiosPageModule)
  },
  {
    path: 'compuertas',
    loadChildren: () => import('./assut/assut.module').then( m => m.AssutPageModule)
  },
  {
    path: 'assut',
    loadChildren: () => import('./assut/assut.module').then( m => m.AssutPageModule)
  },
  {
    path: 'iglesia',
    loadChildren: () => import('./assut/assut.module').then( m => m.AssutPageModule)
  },
  {
    path: 'poblat',
    loadChildren: () => import('./assut/assut.module').then( m => m.AssutPageModule)
  },
  {
    path: 'maera',
    loadChildren: () => import('./assut/assut.module').then( m => m.AssutPageModule)
  },
  {
    path: 'moriscos',
    loadChildren: () => import('./assut/assut.module').then( m => m.AssutPageModule)
  },
  {
    path: 'creueta',
    loadChildren: () => import('./assut/assut.module').then( m => m.AssutPageModule)
  },
  {
    path: 'torre',
    loadChildren: () => import('./assut/assut.module').then( m => m.AssutPageModule)
  },
  {
    path: 'ermita',
    loadChildren: () => import('./assut/assut.module').then( m => m.AssutPageModule)
  },
  {
    path: 'poblat',
    loadChildren: () => import('./assut/assut.module').then( m => m.AssutPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),TranslateModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
