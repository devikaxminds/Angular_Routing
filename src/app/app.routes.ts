import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { AuthGuard } from './auth.guard';
import { BasicPipesComponent } from './basic-pipes/basic-pipes.component';
import { ApiDemoComponent } from './api-demo/api-demo.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'edit-profile', component: EditProfileComponent, canActivate: [AuthGuard] },
  { path: 'basic-pipes', component: BasicPipesComponent },
  { path: 'api-demo', component: ApiDemoComponent },
  { path: 'reactive-form', component: ReactiveFormComponent },
  { path: '**', component: NotFoundComponent }
];