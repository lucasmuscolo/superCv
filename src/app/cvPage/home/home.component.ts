import { Component } from '@angular/core';
import { SHARED_IMPORTS } from '../../common/shared-imports';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SHARED_IMPORTS],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
