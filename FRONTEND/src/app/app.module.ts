import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; // Importa ReactiveFormsModule aquí


const routes: Routes = [
  { path: '', component: HomeComponent }, // Ruta para la página de inicio
  { path: 'add-user', component: AddUserComponent }, // Ruta para agregar usuarios
  { path: 'update-user/:id', component: UpdateUserComponent }, // Ruta para actualizar usuarios
  { path: 'view-users', component: ViewUserComponent }, // Ruta para ver usuarios
  // Puedes agregar más rutas según sea necesario
];



// dashboard components
import { LayoutComponent } from './dashboard/layout/layout.component';
import { TopBarComponent } from './dashboard/top-bar/top-bar.component';
import { OverlayComponent } from './dashboard/overlay/overlay.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar/sidebar.component';
import { SidebarItemComponent } from './dashboard/sidebar/sidebar-item/sidebar-item.component';
import { SidebarItemsComponent } from './dashboard/sidebar/sidebar-items/sidebar-items.component';
import { SidebarHeaderComponent } from './dashboard/sidebar/sidebar-header/sidebar-header.component';
import { SidebarItemSectionComponent } from './dashboard/sidebar/sidebar-item-section/sidebar-item-section.component';

// pages
import { UxComponent } from './pages/ux/ux.component';
import { ArComponent } from './pages/ar/ar.component';
import { HomeComponent } from './pages/home/home.component';
import { VideoComponent } from './pages/video/video.component';
import { UpdateComponent } from './pages/update/update.component';
import { PhotographyComponent } from './pages/photography/photography.component';
import { IllustrationComponent } from './pages/illustration/illustration.component';
import { DocumentationComponent } from './pages/documentation/documentation.component';
import { GraphicDesignComponent } from './pages/graphic-design/graphic-design.component';


// icons
import { ArIconComponent } from './dashboard/icons/ar-icon/ar-icon.component';
import { UxIconComponent } from './dashboard/icons/ux-icon/ux-icon.component';
import { DocIconComponent } from './dashboard/icons/doc-icon/doc-icon.component';
import { AppsIconComponent } from './dashboard/icons/apps-icon/apps-icon.component';
import { VideoIconComponent } from './dashboard/icons/video-icon/video-icon.component';
import { UpdatesIconComponent } from './dashboard/icons/updates-icon/updates-icon.component';
import { PhotographyIconComponent } from './dashboard/icons/photography-icon/photography-icon.component';
import { IllustrationIconComponent } from './dashboard/icons/illustration-icon/illustration-icon.component';
import { GraphicDesignIconComponent } from './dashboard/icons/graphic-design-icon/graphic-design-icon.component';

// others
import { DocComponent } from './components/docs/doc/doc.component';
import { ContentComponent } from './components/content/content.component';
import { SnippetComponent } from './components/docs/snippet/snippet.component';
import { FolderIconComponent } from './components/docs/icons/folder-icon/folder-icon.component';
import { AngularIconComponent } from './components/docs/icons/angular-icon/angular-icon.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { ViewUserComponent } from './components/view-user/view-user.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,

    // dashboard
    LayoutComponent,
    TopBarComponent,
    OverlayComponent,
    SidebarComponent,
    SidebarItemComponent,
    SidebarItemsComponent,
    SidebarHeaderComponent,
    SidebarItemSectionComponent,

    // pages
    UxComponent,
    ArComponent,
    HomeComponent,
    VideoComponent,
    UpdateComponent,
    PhotographyComponent,
    IllustrationComponent,
    GraphicDesignComponent,
    DocumentationComponent,

    // icons
    ArIconComponent,
    UxIconComponent,
    DocIconComponent,
    AppsIconComponent,
    VideoIconComponent,
    UpdatesIconComponent,
    PhotographyIconComponent,
    IllustrationIconComponent,
    GraphicDesignIconComponent,

    // others
    DocComponent,
    SnippetComponent,
    ContentComponent,
    FolderIconComponent,
    AngularIconComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  
    FormsModule, // Agrega FormsModule a los imports
    ReactiveFormsModule, // Agrega ReactiveFormsModule a los imports si usas formularios reactivos
    HttpClientModule,
    RouterModule,
    RouterModule.forRoot(routes),
    CommonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
