import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagLayoutComponent } from './pag-layout/pag-layout.component';
import { BoloListComponent } from './bolo/bolo-list/bolo-list.component';
import { PaisesListComponent } from './paises/paises-list/paises-list.component';
import { TemplateDriveComponent } from './cadastros/template-drive/template-drive.component';
import { ModelDriveComponent } from './cadastros/model-drive/model-drive.component';

const routes: Routes = [{
  path: '',
  component: PagLayoutComponent,
  children: [
    { path: 'bolo', component: BoloListComponent },
    { path: 'paises', component: PaisesListComponent },
    { path: 'modelform', component: ModelDriveComponent },
    { path: 'adm', loadChildren: './admin/admin.module#AdminModule' },
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
