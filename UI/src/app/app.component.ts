import { Component, OnInit, ElementRef, Input } from '@angular/core';

import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { Http, Response } from '@angular/http';
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import { saveAs } from 'file-saver/FileSaver';

const URL = 'http://localhost:3000';
const UPLOAD_PATH = 'assets/uploads/';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    public uploader: FileUploader = new FileUploader({ url: URL, itemAlias: 'photo' });
    title = 'Upload or drop your photo and make it beautiful :)';
    responseJson: any;

    ngOnInit() {
        this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
        this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
            console.log(JSON.stringify(response));
            this.responseJson = JSON.parse(response);
        };
    }
    
    saveFile() {
        var blob = new Blob(["Hello, world!"], { type: "text/plain;charset=utf-8" });
        saveAs(blob, "hello world.txt");
    }


}
