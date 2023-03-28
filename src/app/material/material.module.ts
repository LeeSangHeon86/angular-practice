import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

const MaterialComponent = [MatButtonModule, MatIconModule];

@NgModule({
    declarations: [],
    imports: [CommonModule, ...MaterialComponent],
    exports: [...MaterialComponent],
})
export class MaterialModule {}
