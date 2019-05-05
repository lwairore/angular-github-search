import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OtherUsersComponent } from './other-users/other-users.component';
import { MyDetailsComponent } from './my-details/my-details.component';

const routes: Routes = [
  { path: 'search', component: OtherUsersComponent },
  { path: 'landingpage', component: MyDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
