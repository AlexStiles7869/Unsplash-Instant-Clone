import { Component } from '@angular/core';

@Component({
  selector: 'app-async-photo',
  templateUrl: './async-photo.component.html',
  styleUrls: ['./async-photo.component.less']
})
export class AsyncPhotoComponent {
    activeClasses: Array<string> = ['animate'];
}
