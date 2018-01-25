import { Component } from '@angular/core';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { IpAddressService } from './ip-address.service';
import { MessageService } from './message.service';
import { HeroService } from './hero.service';

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
    url = 'http://angularorange.io/json/httpclientdata.json';

    constructor(private messageService: MessageService, private heroService: HeroService) { }

    ngOnInit() {
        // this.http.get(this.url)
        //     .subscribe(data => {
        //         console.log('DATA: ' + data);
        //     });
        //this.ipAddressService.getIpAddress();
        this.heroService.getHeroes();

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
