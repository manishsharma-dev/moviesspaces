import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component'
const routes: Routes = [
    {
        path:'',
        component: AdminComponent,
        children:[
            {
                path:'',redirectTo:'dashboard'
            },
            {
                path:'dashboard', loadChildren:'./dashboard/dashboard.module#dashboardModule'
            },
            {
                path:'category', loadChildren:'./category/category.module#categoryModule'
            },
            {
                path:'genre', loadChildren:'./genre/genre.module#genreModule'
            },
            {
                path:'users', loadChildren:'./users/users.module#usersModule'
            },
            {
                path:'login', loadChildren:'./admin-login/admin-login.module#adminLoginModule'
            },
            {
                path:'table-manager', loadChildren:'./table-manager/table-manager.module#tableManagerModule'
            }
        ]
    }
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class adminRoutingModule {

}
