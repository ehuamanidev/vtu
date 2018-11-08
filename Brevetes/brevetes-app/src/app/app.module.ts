import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './main/app.component';
import { InicioComponent } from './inicio/inicio.component';
import { RequisitoComponent } from './requisito/requisito.component';
import { routing } from './app.routing';
import { RouterComponent } from './router/router.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    RequisitoComponent,
    RouterComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [RouterComponent]
})
export class AppModule { }
