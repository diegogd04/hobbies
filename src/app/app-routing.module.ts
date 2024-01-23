import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MusicaComponent } from './musica/musica.component';
import { PanelComponent } from './panel/panel.component';
import { FotosComponent } from './fotos/fotos.component';
import { VideosComponent } from './videos/videos.component';

const routes: Routes = [
  {
    path: 'panel',
    component: PanelComponent
  },
  {
    path: 'musica',
    component: MusicaComponent
  },
  {
    path: 'fotos',
    component: FotosComponent
  },
  {
    path: 'videos',
    component: VideosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
