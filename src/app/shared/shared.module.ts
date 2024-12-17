import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar/navbar.component';
import { NavbarRoutingModule } from './shared-routing.module';

import { MenubarModule } from 'primeng/menubar'; // Para la barra de navegación
import { ButtonModule } from 'primeng/button';  // Para los botones pButton
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    NavbarRoutingModule,
    MenubarModule,
    ButtonModule
  ],
  exports: [NavbarComponent, FooterComponent]  // Este módulo puede ser usado en otros módulos para mostrar la barra de navegación
})
export class NavbarModule { }
