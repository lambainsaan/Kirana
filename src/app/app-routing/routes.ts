import { Routes } from '@angular/router';

import { ItemsComponent } from '../items/items.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'menu', component: ItemsComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];
