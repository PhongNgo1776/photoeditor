import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FileSelectDirective } from 'ng2-file-upload';
import { AppComponent } from './app.component';
import { ImageCropperComponent } from 'app/image-cropper/image-cropper.component';
import { IpAddressService } from 'app/services/get-ip.service';

@NgModule({
  declarations: [
    AppComponent,
    FileSelectDirective,
    ImageCropperComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [IpAddressService],
  bootstrap: [AppComponent]
})
export class AppModule { }
