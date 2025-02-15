import { Component } from '@angular/core';
import { SHARED_IMPORTS } from '../shared-imports';

@Component({
  selector: 'app-photo-component',
  standalone: true,
  imports: [SHARED_IMPORTS],
  templateUrl: './photo.component.html',
  styleUrl: './photo.component.css'
})
export class PhotoComponentComponent {

}