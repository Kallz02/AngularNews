import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsviewComponent } from "./view/newsview/newsview.component";
import { AppComponent } from "./app.component";
import { MainviewComponent } from './view/mainview/mainview.component';


//The Routing IS Defined In This Module
const routes: Routes = [
  {path:'', redirectTo:'Home', pathMatch:'full'},
  {path:'Home', component:MainviewComponent},

  {path:'News', component:NewsviewComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
