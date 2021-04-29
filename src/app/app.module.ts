import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClientesComponent } from './Components/clientes/clientes.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule}  from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CadastroComponent } from './Components/cadastro/cadastro.component';
import { MenuComponent } from './Components/menu/menu.component';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';

const routes = RouterModule.forRoot(
  [
    { path: 'cadastro', component: CadastroComponent },
    { path: 'clientes', component: ClientesComponent },  ]
)

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    CadastroComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    BrowserAnimationsModule,
    routes,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
