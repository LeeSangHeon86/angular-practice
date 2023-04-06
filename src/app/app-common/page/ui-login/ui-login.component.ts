import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {
    loginIdValidator,
    passwordValidator,
} from '../../../util/util-function/user-login';

@Component({
    selector: 'app-ui-login',
    templateUrl: './ui-login.component.html',
    styleUrls: ['./ui-login.component.scss'],
})
export class UiLoginComponent implements OnInit {
    loginForm = this.formBuilder.group({
        loginId: ['', [Validators.required, loginIdValidator]],
        password: ['', [Validators.required, passwordValidator]],
    });

    get loginId() {
        return this.loginForm.get('loginId');
    }

    get password() {
        return this.loginForm.get('password');
    }

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit(): void {}

    clearInput(type: string): void {
        if (type === 'loginId') {
            this.loginId?.setValue('');
        } else {
            this.password?.setValue('');
        }
    }

    onSubmit(): void {
        if (this.loginForm.valid) {
            alert(
                `
                로그인 성공
                아이디 : ${this.loginForm.value.loginId}
                비밀번호 : ${this.loginForm.value.password}
                `
            );
        }
    }
}
