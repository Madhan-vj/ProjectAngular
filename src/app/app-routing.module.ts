import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { CreateComponent } from "./create/create.component";

const routes: Routes = [
  { path: "", component: CreateComponent },
  // {
  //   path: "admin",
  //   children: [
  //     {
  //       path: "create-product",
  //       component: CreateComponent
  //     },
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
