import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { appInterceptorProvider } from './app.interceptor';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { CatalogComponent } from './games/catalog/catalog.component';
import { CreateGameComponent } from './games/create-game/create-game.component';
import { FormsModule } from '@angular/forms';
import { GameDetailsComponent } from './games/game-details/game-details.component';
import { GameEditComponent } from './games/game-edit/game-edit.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    AuthenticateComponent,
    CatalogComponent,
    CreateGameComponent,
    GameDetailsComponent,
    GameEditComponent,
    SearchComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [appInterceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
