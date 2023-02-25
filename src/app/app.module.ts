import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsyncPhotoComponent } from './async-photo/async-photo.component';
import { SettingsComponent } from './settings/settings.component';
import { PopoutComponent } from './popout/popout.component';

@NgModule({
  declarations: [
    AppComponent,
    AsyncPhotoComponent,
    SettingsComponent,
    PopoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
