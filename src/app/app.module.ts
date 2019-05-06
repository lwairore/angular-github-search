import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { MyRepositoryComponent } from './my-repository/my-repository.component';
import { OtherUsersRepositoryComponent } from './other-users-repository/other-users-repository.component';



@NgModule({
  declarations: [
    AppComponent,
    routingComponents,   
    MyRepositoryComponent, OtherUsersRepositoryComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgProgressModule,
    NgProgressHttpModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
