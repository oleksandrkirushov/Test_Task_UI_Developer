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
import { AllServicesComponent } from './components/all-services/all-services.component';
import { RouterModule } from '@angular/router';
import { MobAppsComponent } from './components/mob-apps/mob-apps.component';
import { SingleMobAppComponent } from './components/single-mob-app/single-mob-app.component';
import { WebServicesComponent } from './components/web-services/web-services.component';
import { AugmentedRealityComponent } from './components/augmented-reality/augmented-reality.component';

const routes = [{ path: '', component: AllServicesComponent },
    { path: 'all-services', component: AllServicesComponent },
    { path: 'mobile-app', component: MobAppsComponent },
    { path: 'web-services', component: WebServicesComponent },
    { path: 'augmented-reality', component: AugmentedRealityComponent },
];

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
        ServicesComponent,
        AllServicesComponent,
        MobAppsComponent,
        SingleMobAppComponent,
        WebServicesComponent,
        AugmentedRealityComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        RouterModule.forRoot(routes),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
