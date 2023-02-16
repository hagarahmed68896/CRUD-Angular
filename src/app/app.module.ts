import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AddComponent } from './components/add/add.component';
import { DetailsComponent } from './components/details/details.component';
import { UpdateComponent } from './components/update/update.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';


const routes:Routes= [{path: '', component: HomeComponent},
{path: 'home', component: HomeComponent}, 
{path: 'users/:id', component: DetailsComponent},
{path: 'update/:id', component: UpdateComponent},
{path: 'add', component: AddComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddComponent,
    DetailsComponent,
    UpdateComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
