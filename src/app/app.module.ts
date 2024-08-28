import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';

import { MatIconModule } from '@angular/material/icon';
import { Ind1Component } from './ind1/ind1.component';
import { Ind2Component } from './ind2/ind2.component';
import { Ind3Component } from './ind3/ind3.component';
import { SocketIoModule } from 'ngx-socket-io'; 
import { SocketIoConfig } from 'ngx-socket-io';

const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };

@NgModule({
  declarations: [
    AppComponent,MenuComponent,HomeComponent, Ind1Component, Ind2Component, Ind3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,RouterModule.forRoot([
      {
        path:'',component:HomeComponent,
      }
    ]),
    MatIconModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
