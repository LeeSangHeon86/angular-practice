import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-ui-login-act1',
    templateUrl: './ui-login-act1.component.html',
    styleUrls: ['./ui-login-act1.component.scss'],
})
export class UiLoginAct1Component implements OnInit {
    /* FormControl 연습용 */

    // 반응형 폼
    loginIdForm = new FormControl('');

    // 템플릿 기반 폼
    passwordForm = '';

    constructor() {}

    ngOnInit(): void {}
}
