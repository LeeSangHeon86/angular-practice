import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-form-checkbox',
    templateUrl: './form-checkbox.component.html',
    styleUrls: ['./form-checkbox.component.scss'],
})
export class FormCheckboxComponent implements OnInit {
    @Input() active = false;
    @Input() label = '';
    @Output() activeChange = new EventEmitter<boolean>();

    constructor() {}

    ngOnInit(): void {}

    clickCheckBox(): void {
        this.active = !this.active;
        this.activeChange.emit(this.active);
    }
}
