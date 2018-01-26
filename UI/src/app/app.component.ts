import { Component } from '@angular/core';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { IpAddressService } from './ip-address.service';
import { MessageService } from './message.service';

const BACKEND_URL = 'http://localhost:3000';
const FRONTEND_URL = 'http://localhost:4200/';
const UPLOAD_PATH = 'assets/uploads/';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public uploader: FileUploader = new FileUploader({ url: BACKEND_URL, itemAlias: 'photo' });
    title = 'Upload or drop your photo and make it beautiful :)';
    responseJson: any;
    href = '';

    constructor(private messageService: MessageService, private ipAddressService: IpAddressService) { }

    ngOnInit() {
        this.ipAddressService.getClientIpAddress().subscribe(response => {
            
        });

        this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
        this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
            console.log(JSON.stringify(response));
            this.responseJson = JSON.parse(response);
            this.href = FRONTEND_URL + this.responseJson.path;

        };
    }

    imageChangedEvent: any = '';
    croppedImage: any = '';

    fileChangeEvent(event: any): void {
        this.imageChangedEvent = event;
    }
    imageCropped(image: string) {
        this.croppedImage = image;

    }
}
