import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
   { path: '', component: AppComponent },
   { path: 'task', loadChildren: () => import(`./Task/task.module`).then(m => m.TaskModule) },
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
