import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';

// Tarea:
import { ContadorModule } from './contador/contador.module';

import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
