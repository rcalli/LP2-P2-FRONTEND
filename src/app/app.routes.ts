import { Routes } from '@angular/router';



import { EscuelaFormComponent } from './escuela-form/escuela-form.component';

export const routes: Routes = [
    {
        path : '',
        component: EscuelaFormComponent,
        title:"pagina de inicio"
    },

    {
        path : '**',
        redirectTo: '',
        pathMatch:"full"
    },
];
