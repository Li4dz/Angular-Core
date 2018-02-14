import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { AuthGuard } from "./security";
import { LoginComponent } from "./components/login/login.component";


const routes: Routes = [
    // { path : '',            loadChildren : './components/layout/layout.module#LayoutModule', canActivate : [ AuthGuard] },
    { path : '',            redirectTo : 'home', pathMatch : 'full'},
    { path : 'home',        loadChildren : './components/home/home.module#HomeModule'},
    { path : 'login' ,      loadChildren : './components/login/login.module#LoginModule' },
    // { path : 'dashboard',   loadChildren : './components/layout/dashboard/dashboard.module#DashboardModule'},
    
    { path : '**',          redirectTo : 'home'},

];

@NgModule({
    imports : [ RouterModule.forRoot(routes)],
    exports : [ RouterModule ]
})

export class AppRoutingModule { }

