import { Component, OnInit, ElementRef, Input, ViewChild, } from '@angular/core';

import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { Http, Response } from '@angular/http';
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import * as FileSaver from 'file-saver';

const BACKEND_URL = 'http://localhost:3000';
const FRONTEND_URL = 'http://localhost:4200/';
const UPLOAD_PATH = 'assets/uploads/';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    public uploader: FileUploader = new FileUploader({ url: BACKEND_URL, itemAlias: 'photo' });
    title = 'Upload or drop your photo and make it beautiful :)';
    responseJson: any;
    href = '';

    ngOnInit() {
        this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
        this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
            console.log(JSON.stringify( response ));
            this.responseJson = JSON.parse(response);
            this.href = FRONTEND_URL + this.responseJson.path;
            
        };
    }

    imageChangedEvent: any = '';
    croppedImage: any = '';
    
    fileChangeEvent(event: any): void {
        console.log('upload');
        this.imageChangedEvent = event;
        console.log('upload:' + JSON.stringify(event))   ;
    }
    imageCropped(image: string) {
        console.log('xrop');
        this.croppedImage = image;
    }

//    asdf-----------------------------

// data: any;
// cropperSettings: CropperSettings;

 
// @ViewChild('cropper', undefined)
// cropper:ImageCropperComponent;
 
// constructor() {
//     this.cropperSettings = new CropperSettings();
//     this.cropperSettings.noFileInput = true;
//     this.data = {};
// }
 
// fileChangeListener($event) {
//     var image:any = new Image();
//     var file:File = $event.target.files[0];
//     var myReader:FileReader = new FileReader();
//     var that = this;
//     myReader.onloadend = function (loadEvent:any) {
//         image.src = loadEvent.target.result;
//         that.cropper.setImage(image);
 
//     };
 
//     myReader.readAsDataURL(file);
// }









}
