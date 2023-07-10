import { Inject, Injectable } from '@angular/core';
import { BUILD_ENV } from '../shared/config/build-config';

@Injectable({
    providedIn: 'root',
})
export class BuildService {
    buildType = ''; // "BASIC", "PROD", "EXP"

    constructor(@Inject(BUILD_ENV) private buildEnv: string) {
        this.buildType = this.buildEnv;
    }
}
