import { CommonModule } from '@angular/common';
import { EducationComponentComponent } from './education-component/education-component.component';
import { ExperienceComponentComponent } from './experience-component/experience-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { PhotoComponentComponent } from './photo-component/photo.component';
import { ProfileComponentComponent } from './profile-component/profile-component.component';
import { ProjectsComponentComponent } from './projects-component/projects-component.component';
import { SkillsComponentComponent } from './skills-component/skills-component.component';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { ImageModule } from 'primeng/image';
import { PanelModule } from 'primeng/panel';

export const SHARED_IMPORTS = [
  CommonModule,
  EducationComponentComponent,
  ExperienceComponentComponent,
  FooterComponentComponent,
  HeaderComponentComponent,
  PhotoComponentComponent,
  ProfileComponentComponent,
  ProjectsComponentComponent,
  SkillsComponentComponent,
  CardModule,
  DividerModule,
  ImageModule,
  PanelModule
];