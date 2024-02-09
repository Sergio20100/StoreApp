import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        loadComponent:()=>import("./domains/products/pages/list/list.component").then(module=>module.ListComponent)
    }
];
