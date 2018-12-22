import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';


const appRoute: Routes = [
	{ path:'login', component: LoginComponent },
	{ path:'register', component: RegisterComponent },
	{ path:'**', component: NopagefoundComponent  }
];

export const routing= RouterModule.forRoot(appRoute, { useHash:true });