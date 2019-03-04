import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PictureListComponent } from './picture-list/picture-list.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from '@angular/common/http';
import { PictureElementComponent } from './picture-element/picture-element.component';
import { TagsListComponent } from './tags-list/tags-list.component';
import { TagComponent } from './tag/tag.component';

@NgModule({
  declarations: [
    AppComponent,
    PictureListComponent,
    LoginComponent,
    PictureElementComponent,
    TagsListComponent,
    TagComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
