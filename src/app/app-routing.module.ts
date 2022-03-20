import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { MainPageComponent } from './main-page/main-page.component';
import { TipsComponent } from './tips/tips.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'tips', component: TipsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
