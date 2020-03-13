// Angular
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Components
import { DashboardComponent } from './components/dashboard/dashboard.component';

const MODULE_IMPORTS = [BrowserModule, BrowserAnimationsModule];

const COMPONENTS = [DashboardComponent];

const homeRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'dashboard',
    component: DashboardComponent
  }
]);

@NgModule({
  imports: [MODULE_IMPORTS, homeRouting],
  declarations: [COMPONENTS],
  entryComponents: [COMPONENTS],
  exports: [COMPONENTS, MODULE_IMPORTS]
})
export class DashboardModule {}
