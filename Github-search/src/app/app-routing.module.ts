import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OtherUsersComponent } from './other-users/other-users.component';
import { MyDetailsComponent } from './my-details/my-details.component';
import { MyRepositoryComponent } from './my-repository/my-repository.component';
import { OtherUsersRepositoryComponent } from './other-users-repository/other-users-repository.component';


const routes: Routes = [
  { path: 'landing_page', component: MyDetailsComponent },
  { path: 'search', component: OtherUsersComponent },
  
  { path: 'my_repos', component: MyRepositoryComponent },
  { path: 'other_repos', component: OtherUsersRepositoryComponent},
  {path:"",redirectTo:"/landing_page",pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ 
  OtherUsersComponent,
  MyDetailsComponent,
  OtherUsersRepositoryComponent,
]