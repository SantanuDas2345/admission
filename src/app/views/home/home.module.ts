import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from './student-list/student-list.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { SidebarComponent } from 'src/app/components/sidebar/sidebar.component';
import { NativeDateAdapter } from '@angular/material/core';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SettingsComponent } from './settings/settings.component';


const routes: Routes = [
  
   {
    path: 'home',
    component: HomeComponent,
    children: [
      
      {
        path: 'student-list',
        component: StudentListComponent
      },
      {
        path: 'settings',
        component: SettingsComponent
      },
      {
        path: '',
        redirectTo: 'student-list',
        pathMatch: 'full'
      },
      {
        path: '*',
        redirectTo: 'student-list',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];
@NgModule({
  declarations: [ StudentListComponent, HomeComponent, SidebarComponent, NavbarComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatSliderModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatListModule,
    MatToolbarModule
  ]
})
export class HomeModule { }
