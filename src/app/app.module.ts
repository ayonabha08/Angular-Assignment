import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { FruitMgrComponent } from './Components/fruit-mgr/fruit-mgr.component';
import { ViewComponent } from './Components/view/view.component';
import { AddNewComponent } from './Components/add-new/add-new.component';
import { EditComponent } from './Components/edit/edit.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes:Routes = [
  //{path:"Home",component: FruitMgrComponent},
  {path: 'Fruits/All', component: FruitMgrComponent},
  {path: 'Fruits/Add', component: AddNewComponent},
  {path: 'Fruits/edit/:id', component: EditComponent},
  {path: 'Fruits/view/:id', component: ViewComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FruitMgrComponent,
    ViewComponent,
    AddNewComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
