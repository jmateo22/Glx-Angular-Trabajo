import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkshopDetailView } from './view/workshop-detail/workshop-detail.view';
import { WorkshopListView } from './view/workshop-list/workshop-list.view';

const routes: Routes = [
  { path: '', redirectTo: 'talleres', pathMatch: 'full' },
  { path: 'talleres', component: WorkshopListView },
  { path: 'talleres/:idTaller', component: WorkshopDetailView },
  {
    path: 'ingresar',
    loadChildren: () =>
      import('./features/auth/auth.module').then((m) => m.AuthModule),
  },
  {path:'**', redirectTo:'talleres'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
