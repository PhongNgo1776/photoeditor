import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { AppComponent }         from './app.component';
import { MessageService }       from './message.service';
import { IpAddressService }       from './ip-address.service';
import { FileSelectDirective } from 'ng2-file-upload';
import { ImageCropperComponent } from './image-cropper/image-cropper.component';
import { Http, HttpModule } from '@angular/http';
import { HeroService } from './hero.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    ImageCropperComponent,
    FileSelectDirective,
  ],
  providers: [ HeroService, MessageService] ,
  bootstrap: [ AppComponent ],
})
export class AppModule { }
