import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { UxComponent } from './pages/ux/ux.component';
import { ArComponent } from './pages/ar/ar.component';
import { VideoComponent } from './pages/video/video.component';
import { UpdateComponent } from './pages/update/update.component';
import { PhotographyComponent } from './pages/photography/photography.component';
import { IllustrationComponent } from './pages/illustration/illustration.component';
import { DocumentationComponent } from './pages/documentation/documentation.component';
import { GraphicDesignComponent } from './pages/graphic-design/graphic-design.component';
import { ViewUserComponent } from './components/view-user/view-user.component';
import { AddUserComponent } from './components/add-user/add-user.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'view', component: ViewUserComponent },
  { path: 'add', component: AddUserComponent },
  { path: 'update/:id', component: UpdateUserComponent },
  
  { path: 'admin/ux', component: UxComponent },
  { path: 'admin/ar', component: ArComponent },
  { path: 'admin/videos', component: VideoComponent },
  { path: 'admin/updates', component: UpdateComponent },
  { path: 'admin/photography', component: PhotographyComponent },
  { path: 'admin/illustration', component: IllustrationComponent },
  { path: 'admin/documentation', component: DocumentationComponent },
  { path: 'admin/graphic-design', component: GraphicDesignComponent },
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
