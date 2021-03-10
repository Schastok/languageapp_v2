import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NavigationBar } from '@ionic-native/navigation-bar/ngx';
//import { NavigationBarColor } from '@ionic-plugin-navigation-bar-color';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HttpClientModule } from '@angular/common/http';
import { FlipModule } from 'ngx-flip';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { IonicStorageModule } from '@ionic/storage';



//import { SafePipe } from './safe.pipe';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, FlipModule, DragDropModule, IonicStorageModule.forRoot()],
  providers: [
    StatusBar,
    NavigationBar,
    //NavigationBarColor,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
