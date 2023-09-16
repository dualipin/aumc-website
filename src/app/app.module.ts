import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageNotFoundComponent } from './pages/not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    PageNotFoundComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'contacto', loadComponent: () => import('./pages/contacto/contacto.component').then(c => c.ContactoComponent) },
      { path: 'servicios', loadComponent: () => import('./pages/servicios/servicios.component').then(c => c.ServiciosComponent) },
      { path: 'nosotros', loadComponent: () => import('./pages/nosotros/nosotros.component').then(c => c.NosotrosComponent) },
      { path: '**', component: PageNotFoundComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
