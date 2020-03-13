// Angular
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Models
import { AuthenticationData } from '../models/authentication.model';

@Component({
  selector: 'keep-login-form',
  templateUrl: './login-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthenticationLoginComponent {
  @Input()
  error: string | null = null;

  @Output()
  login = new EventEmitter<AuthenticationData>();

  authenticationForm: FormGroup = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(private formBuilder: FormBuilder) {}
}
