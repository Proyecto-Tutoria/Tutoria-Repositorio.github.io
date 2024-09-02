import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
<<<<<<< HEAD
=======
import { ProfileComponent } from './pages/profile/profile.component';
>>>>>>> cc6528f0a5e33410ad11caa4a7c308e560300411

import { UxComponent } from './pages/ux/ux.component';
import { ArComponent } from './pages/ar/ar.component';
import { VideoComponent } from './pages/video/video.component';
import { UpdateComponent } from './pages/update/update.component';
import { PhotographyComponent } from './pages/photography/photography.component';
import { IllustrationComponent } from './pages/illustration/illustration.component';
import { DocumentationComponent } from './pages/documentation/documentation.component';
import { GraphicDesignComponent } from './pages/graphic-design/graphic-design.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin/ux', component: UxComponent },
  { path: 'admin/ar', component: ArComponent },
  { path: 'admin/videos', component: VideoComponent },
  { path: 'admin/updates', component: UpdateComponent },
  { path: 'admin/photography', component: PhotographyComponent },
  { path: 'admin/illustration', component: IllustrationComponent },
  { path: 'admin/documentation', component: DocumentationComponent },
  { path: 'admin/graphic-design', component: GraphicDesignComponent },
<<<<<<< HEAD
=======
  { path: 'profile', component: ProfileComponent },
  { path: '', redirectTo: '/profile', pathMatch: 'full' }
>>>>>>> cc6528f0a5e33410ad11caa4a7c308e560300411
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
<<<<<<< HEAD
=======

>>>>>>> cc6528f0a5e33410ad11caa4a7c308e560300411
