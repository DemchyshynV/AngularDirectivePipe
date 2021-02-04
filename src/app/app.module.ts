import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { UserTransfPipe } from './user-transf.pipe';
import { BoldDirective } from './bold.directive';

@NgModule({
  declarations: [
    AppComponent,
    UserTransfPipe,
    BoldDirective,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
