import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Our components
import { AppComponent }       from './app.component';
import { FruitComponent }     from './fruit/fruit.component';
import { EmployeeComponent }  from './employee/employee.component'
import { HomeComponent }      from './home/home.component';
import { ContactComponent }   from './contact/contact.component';
import { NotFoundComponent }  from './404/404.component';
import { CarComponent}        from './cars/car.component';

// Routing:
//import { AppRoutingModule } from './app-routing.module';
import { routing, appRoutingProviders } from './app.routing';

// Custom pipes:
import { ConverterPipe } from './pipes/converter.pipe';

// Services
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FruitComponent,
    EmployeeComponent,
    HomeComponent,
    ContactComponent,
    CarComponent,
    NotFoundComponent,
    ConverterPipe  
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule,
    FormsModule,
    routing,
    HttpClientModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
