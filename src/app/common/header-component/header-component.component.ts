import { Component } from '@angular/core';
import { SHARED_IMPORTS } from '../shared-imports';

@Component({
  selector: 'app-header-component',
  standalone: true,
  imports: [SHARED_IMPORTS],
  templateUrl: './header-component.component.html',
  styleUrl: './header-component.component.css'
})
export class HeaderComponentComponent {

}
