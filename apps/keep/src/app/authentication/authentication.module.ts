// Angular
import { ModuleWithProviders, NgModule } from '@angular/core';

// Services
import { AuthenticationService } from './services/authentication.service';

const COMPONENTS = [];

const MODULE_IMPORTS = [];

@NgModule({
  declarations: [COMPONENTS],
  imports: [MODULE_IMPORTS],
  exports: [COMPONENTS, MODULE_IMPORTS]
})
export class RootAuthenticationModule {}

@NgModule({
  imports: [RootAuthenticationModule]
})
export class AuthenticationModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: RootAuthenticationModule,
      providers: [AuthenticationService]
    };
  }
}
