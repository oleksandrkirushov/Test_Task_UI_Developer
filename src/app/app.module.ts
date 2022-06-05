import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { MenuComponent } from './components/menu/menu.component';
import { SubMenuComponent } from './components/sub-menu/sub-menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { FooterMenuComponent } from './components/footer-menu/footer-menu.component';
import { SocialComponent } from './components/social/social.component';
import { MainComponent } from './components/main/main.component';
import { ServicesComponent } from './components/services/services.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    MenuComponent,
    SubMenuComponent,
    FooterComponent,
    FooterMenuComponent,
    SocialComponent,
    MainComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
