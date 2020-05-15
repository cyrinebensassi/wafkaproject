import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LayoutComponent } from './home/layout/layout.component';


const routes: Routes = [
  { path: "", component: LoginComponent },
  {
    path: "home", component: HomeComponent,
    children: [
      { path: "", component: LayoutComponent },
      { path: 'customers', loadChildren: () => import('./home/users/users.module').then(m => m.UsersModule) },
      { path: 'products', loadChildren: () => import('./home/products/products.module').then(m => m.ProductsModule) },

    ]
  },
  { path: "register", component: RegisterComponent },
  { path: "forgotpassword", component: ForgotPasswordComponent },


  { path: "**", component: ErrorComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
