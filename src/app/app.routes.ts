import { Routes } from '@angular/router';
import { Formulario } from './components/formulario/formulario';

export const routes: Routes = [

    {path: 'formulario', component: Formulario},
    {path: '', pathMatch: 'full', redirectTo: '/formulario'},
    

];
