import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { chkEngAndNumPass } from '../util-string/check-login';

export const loginIdValidator: ValidatorFn = (
    control: AbstractControl
): ValidationErrors | null => {
    // 영문과 숫자만 입력 가능
    if (!chkEngAndNumPass(control.value)) {
        return { engAndNum: true };
    }

    return null;
};

export const passwordValidator: ValidatorFn = (
    control: AbstractControl
): ValidationErrors | null => {
    // 영문과 숫자만 입력 가능
    if (!chkEngAndNumPass(control.value)) {
        return { engAndNum: true };
    }

    return null;
};
