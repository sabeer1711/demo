import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { ServerDummyComponent } from './server_dummy/server_dummy.component';
import {FormsModule} from '@angular/forms';

import {HeaderComponent} from './header/header.component'

import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { GameControlComponent } from './game-control/game-control.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
<<<<<<< HEAD
=======
import { BasicHighlightDirectives } from './basic-highlight/basic-highlight-directive';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
import { UnlessDirective } from './unless.directive';
import { DropdownDirective } from './shared/dropdown.directive';
import { ServerComponent } from './servers/server/server.component';

import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { LoggingService } from './logging.service';
import { AccountService } from './account.service';

import { InactiveUsersComponent } from './inactive-users/inactive-users.component';
import { CounterService } from './counter.service';
import { ActiveUsersComponent } from './active-users/active-users.component';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServersService } from './servers/servers.service';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app.routing.module';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import {ServerResolver} from './servers/server/server-resolver.service';
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate-guard.service';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';







>>>>>>> ceb2996a07cc2f325d227d908594bb0aa758a596
@NgModule({
  declarations: [
    AppComponent,
    BasicHighlightDirectives,
   ServerDummyComponent,
    ServersComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    CockpitComponent,
    ServerElementComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    RecipeItemComponent,
    BetterHighlightDirective,
    UnlessDirective,
    DropdownDirective,
    AccountComponent,
    NewAccountComponent,
    ActiveUsersComponent,
    InactiveUsersComponent,
    HomeComponent,
    UserComponent,
    UsersComponent,
    ServerComponent,
    EditServerComponent,
    ServersComponent,
    PageNotFoundComponent,
    ErrorPageComponent,
    RecipeStartComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [LoggingService,AccountService,CounterService,ShoppingListService,ServersService,AuthGuard,AuthService,ServerResolver,CanDeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
