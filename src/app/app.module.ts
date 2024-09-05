//UPDATE 11:47 1/09/2024
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
import { GraficosComponent } from './graficos/graficos.component';
import { PanelComponent } from './panel/panel.component';
import { InfoComponent } from './info/info.component';
import { ToastrModule } from 'ngx-toastr';
import {MatTooltipModule} from '@angular/material/tooltip';


const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };

@NgModule({
  declarations: [
    AppComponent,MenuComponent,HomeComponent, Ind1Component, Ind2Component, Ind3Component,GraficosComponent, PanelComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,RouterModule.forRoot([
      {
        path:'',component:InfoComponent
      },{
        path:'consumo',component:HomeComponent
      },{
        path:'panel',component:PanelComponent
      }
    ]),
    MatIconModule,
    SocketIoModule.forRoot(config),
    ToastrModule.forRoot(),MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
