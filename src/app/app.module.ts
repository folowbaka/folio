import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MatButtonModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatCardModule, MatDividerModule} from '@angular/material';
import {RouterModule, Routes} from '@angular/router';
import { MyselfComponent } from './myself/myself.component';

const appRoutes: Routes = [
  { path: '',
    component : AppComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    MyselfComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- debugging purposes only
    ),
    MatCardModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
