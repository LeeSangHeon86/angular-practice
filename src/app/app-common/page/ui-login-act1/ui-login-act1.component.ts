import { Component, OnInit } from '@angular/core';
import {
    FormArray,
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
} from '@angular/forms';

@Component({
    selector: 'app-ui-login-act1',
    templateUrl: './ui-login-act1.component.html',
    styleUrls: ['./ui-login-act1.component.scss'],
})
export class UiLoginAct1Component implements OnInit {
    /* FormControl 연습용 */

    loginIdPwForm = this.formBuilder.nonNullable.group({
        loginId: ['', [Validators.required]],
        password: [''],
        address: this.formBuilder.group({
            street: [''],
            city: [''],
            state: [''],
            zip: [''],
        }),
        aliases: this.formBuilder.array([this.formBuilder.control('')]),
    });

    get aliases() {
        return this.loginIdPwForm.get('aliases') as FormArray;
    }

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit(): void {}

    addAlias(): void {
        this.aliases.push(new FormControl(''));
    }

    onSubmit(): void {
        console.log('this.loginIdPwForm.controls', this.loginIdPwForm.controls);

        if (this.loginIdPwForm.valid) {
            alert(
                ` 로그인 성공
              아이디 : ${this.loginIdPwForm.value.loginId}
              비밀번호 : ${this.loginIdPwForm.value.password}
                `
            );
            console.log('this.loginIdPwForm.value', this.loginIdPwForm.value);
        }
    }
}
