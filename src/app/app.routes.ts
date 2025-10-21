import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { BasicPipesComponent } from './basic-pipes/basic-pipes.component';
import { ApiDemoComponent } from './api-demo/api-demo.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './auth.guard';
import { UnsavedChangesGuard } from './unsaved-changes.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'about', component: AboutComponent, canActivate: [AuthGuard] },
  { path: 'edit-profile', component: EditProfileComponent, canActivate: [AuthGuard], canDeactivate: [UnsavedChangesGuard] },
  { path: 'basic-pipes', component: BasicPipesComponent, canActivate: [AuthGuard] },
  { path: 'api-demo', component: ApiDemoComponent, canActivate: [AuthGuard] },
  { path: '**', component: NotFoundComponent } // Wildcard route for 404 page
];
