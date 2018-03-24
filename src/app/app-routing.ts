import { NgModule } from '@angular/core';
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';
const routes: Routes = [
 { path: '', component: HomeComponent }, 
 { path: 'about', component: AboutComponent },
  { path: 'test', component:TestComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);


