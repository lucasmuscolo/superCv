import { Component } from '@angular/core';
import { SHARED_IMPORTS } from '../shared-imports';
import { Experience } from '../interfaces/experience';

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
  experiences: Experience[] = [
    {
      startDate: new Date('2022-01-01'),
      endDate: new Date('2023-01-01'),
      company: 'Company 2',
      position: 'Developer',
      description: 'Description of role and responsibilities'
    },
    {
      startDate: new Date('2021-01-01'),
      endDate: new Date('2022-01-01'),
      company: 'Company 1',
      position: 'Piloto F1',
      description: 'Correr como un campeor... rruuuum ruuuum ruuuuum'
    },
    {
      startDate: new Date('2023-01-01'),
      endDate: new Date('2024-01-01'),
      company: 'Company 3',
      position: 'Developer',
      description: 'Description of role and responsibilities'
    },
    // Add more experiences as needed
  ];

}
