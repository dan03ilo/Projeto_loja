import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'pedidos',
    loadChildren: () => import('./pedidos/pedidos.module').then( m => m.PedidosPageModule)
  },
  {
    path: 'sair',
    loadChildren: () => import('./sair/sair.module').then( m => m.SairPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'politica',
    loadChildren: () => import('./politica/politica.module').then( m => m.PoliticaPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'efetuarpedido',
    loadChildren: () => import('./efetuarpedido/efetuarpedido.module').then( m => m.EfetuarpedidoPageModule)
  },
  {
    path: 'pagamento',
    loadChildren: () => import('./pagamento/pagamento.module').then( m => m.PagamentoPageModule)
  },
  {
    path: 'alterarfoto',
    loadChildren: () => import('./alterarfoto/alterarfoto.module').then( m => m.AlterarfotoPageModule)
  },
  {
    path: 'alterarsenha',
    loadChildren: () => import('./alterarsenha/alterarsenha.module').then( m => m.AlterarsenhaPageModule)
  },
  {
    path: 'politicamenu',
    loadChildren: () => import('./politicamenu/politicamenu.module').then( m => m.PoliticamenuPageModule)
  },
  {
    path: 'detalheproduto',
    loadChildren: () => import('./detalheproduto/detalheproduto.module').then( m => m.DetalheprodutoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
