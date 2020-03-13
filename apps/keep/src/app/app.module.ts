// Angular
import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Modules
import { AuthenticationModule } from './authentication/authentication.module';
import { DashboardModule } from './dashboard/dashboard.module';

// Components
import { AppComponent } from './app.component';

const redirectRouting: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
];

const rootRouting: ModuleWithProviders = RouterModule.forRoot(redirectRouting, {
  useHash: true
});

@NgModule({
  declarations: [AppComponent],
  imports: [
    AuthenticationModule.forRoot(),
    BrowserModule,
    DashboardModule,
    rootRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
