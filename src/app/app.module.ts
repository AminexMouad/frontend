import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BlocComponent } from "./admin/contenu/bloc.component";
import { MainComponent } from "./main/main.component";
import { ContenuComponent } from "./admin/contenu/contenu.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { CKEditorModule } from "@ckeditor/ckeditor5-angular";
import { AjouterContenuComponent } from "./admin/contenu/ajouter-contenu/ajouter-contenu.component";
import { ModifierContenuComponent } from "./admin/contenu/modifier-contenu/modifier-contenu.component";
import { AdminMainComponent } from "./admin/admin/adminmain.component";
import { LoginComponent } from "./login/login.component";
import { HeaderComponent } from "./main/header/header.component";
import { BannerComponent } from "./main/banner/banner.component";
import { ArticleComponent } from "./main/article/article.component";
import { AllArticlesComponent } from './main/all-articles/all-articles.component';

@NgModule({
  declarations: [
    AppComponent,
    BlocComponent,
    MainComponent,
    AdminMainComponent,
    ContenuComponent,
    SidebarComponent,
    AjouterContenuComponent,
    ModifierContenuComponent,
    LoginComponent,
    HeaderComponent,
    BannerComponent,
    ArticleComponent,
    AllArticlesComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    CKEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
