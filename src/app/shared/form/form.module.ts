import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormCheckboxComponent } from './form-checkbox/form-checkbox.component';

@NgModule({
    declarations: [FormCheckboxComponent],
    exports: [FormCheckboxComponent],
    imports: [CommonModule],
})
export class FormModule {}
