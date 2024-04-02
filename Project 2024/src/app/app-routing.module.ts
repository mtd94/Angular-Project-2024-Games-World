import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ErrorComponent } from './core/error/error.component';
import { CatalogComponent } from './games/catalog/catalog.component';
import { CreateGameComponent } from './games/create-game/create-game.component';
import { GameDetailsComponent } from './games/game-details/game-details.component';
import { GameEditComponent } from './games/game-edit/game-edit.component';
import { AuthActivate } from './core/guards/auth.activate';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'auth',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },

  {path: 'catalog', component: CatalogComponent},
  {path: 'create-game', component: CreateGameComponent,canActivate:[AuthActivate]},
  {path: 'game-details/:gameId', component: GameDetailsComponent},
  {path: 'game-edit/:gameId', component: GameEditComponent,canActivate:[AuthActivate]},
  {path: 'search', component: SearchComponent},
  { path: 'error', component: ErrorComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
