import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { BlocComponent } from "./admin/contenu/bloc.component";
import { MainComponent } from "./main/main.component";
import { AdminMainComponent } from "./admin/admin/adminmain.component";
import { ContenuComponent } from "./admin/contenu/contenu.component";
import { AjouterContenuComponent } from "./admin/contenu/ajouter-contenu/ajouter-contenu.component";
import { ModifierContenuComponent } from "./admin/contenu/modifier-contenu/modifier-contenu.component";
import { LoginComponent } from "./login/login.component";
import { ArticleComponent } from "./main/article/article.component";
import { AllArticlesComponent } from "./main/all-articles/all-articles.component";

const routes: Routes = [
  { path: "", component: MainComponent },
  { path: "article/:id", component: ArticleComponent },
  { path: "allarticles/:id", component: AllArticlesComponent },
  { path: "login", component: LoginComponent },
  { path: "admin", component: AdminMainComponent },
  { path: "bloc", component: BlocComponent },
  { path: "contenu", component: ContenuComponent },
  { path: "contenu/ajouter", component: AjouterContenuComponent },
  { path: "contenu/modifier/:id", component: ModifierContenuComponent }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
