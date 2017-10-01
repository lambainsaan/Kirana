import { Routes } from '@angular/router';

import { ItemsComponent } from '../items/items.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { ItemdetailComponent } from '../itemdetail/itemdetail.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'menu', component: ItemsComponent },
    { path: 'contactus',     component: ContactComponent },
    { path: 'itemdetail/:id',     component: ItemdetailComponent },
];
