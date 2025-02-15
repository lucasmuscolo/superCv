import { Component } from '@angular/core';
import { SHARED_IMPORTS } from '../shared-imports';

@Component({
  selector: 'app-photo-component',
  standalone: true,
  imports: [SHARED_IMPORTS],
  templateUrl: './photo-component.component.html',
  styleUrls: ['./photo-component.component.css']
})
export class PhotoComponentComponent {
  // Tu lógica aquí
}