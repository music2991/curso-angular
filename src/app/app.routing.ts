import { ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import our components:
import { EmployeeComponent }    from './employee/employee.component';
import { FruitComponent }       from './fruit/fruit.component';
import { HomeComponent }        from './home/home.component';
import { ContactComponent }     from './contact/contact.component';
import { NotFoundComponent }    from './404/404.component';
import { CarComponent }         from './cars/car.component';
import { MyTemplateComponent }    from './templates/my_template.component'

const appRoutes: Routes = [ 
    { path: '',             component: HomeComponent },
    { path: 'employee',     component: EmployeeComponent },
    { path: 'fruit',        component: FruitComponent },
    { path: 'home',         component: HomeComponent },
    { path: 'contact',      component: ContactComponent },
    { path: 'contact/:page',component: ContactComponent },
    { path: 'cars',         component: CarComponent},
    { path: 'template',     component: MyTemplateComponent},
    { path: '**',           component: NotFoundComponent }
];

export const appRoutingProviders: any[] = []; 
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes)