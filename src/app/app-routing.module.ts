import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule'},
  { path: 'agua', loadChildren: './agua/agua.module#AguaPageModule' },
  { path: 'dieta', loadChildren: './dieta/dieta.module#DietaPageModule' },
  { path: 'atividade-fisica', loadChildren: './atividade-fisica/atividade-fisica.module#AtividadeFisicaPageModule' },
  { path: 'suplementacao', loadChildren: './suplementacao/suplementacao.module#SuplementacaoPageModule' },
  { path: 'treino', loadChildren: './treino/treino.module#TreinoPageModule' },
  { path: 'agua-page', loadChildren: './agua-page/agua-page.module#AguaPagePageModule' },  { path: 'editar-perfil', loadChildren: './editar-perfil/editar-perfil.module#EditarPerfilPageModule' },

  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
