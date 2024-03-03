import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { FormUsuarioComponent } from './Components/form-usuario/form-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    FormUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskDirective
  ],
  providers: [provideNgxMask({})],
  bootstrap: [AppComponent]
})
export class AppModule { }
