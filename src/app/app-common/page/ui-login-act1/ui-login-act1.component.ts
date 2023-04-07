import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-ui-login-act1',
    templateUrl: './ui-login-act1.component.html',
    styleUrls: ['./ui-login-act1.component.scss'],
})
export class UiLoginAct1Component implements OnInit {
    loginIdForm = new FormControl('');

    constructor() {}

    ngOnInit(): void {}
}
