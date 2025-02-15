import { Component } from '@angular/core';
import { SHARED_IMPORTS } from '../shared-imports';

@Component({
  selector: 'app-experience-component',
  standalone: true,
  imports: [SHARED_IMPORTS],
  templateUrl: './experience-component.component.html',
  styleUrl: './experience-component.component.css'
})
export class ExperienceComponentComponent {
  tituloExperiencia1:string = 'Experiencia 1';
  tituloExperiencia2:string = 'Experiencia 2';
  tituloExperiencia3:string = 'Experiencia 3';
  textoExperiencia:string =  'Alguna experiencia en algun trabajo, este texto es para probar el componenete a ver como se comporta';
  collapsed: boolean = true;
}
