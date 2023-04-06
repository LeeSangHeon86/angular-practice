/**
 * 영문 + 숫자 조합인지 확인, 4자리 이상
 * 영문 과 숫자가 각각 최소한 하나씩 들어가 있어야 한다.
 * @param str
 */
export const chkEngAndNumPass = (str: string): boolean => {
    const regExp = /^(?=.*[a-zA-Z])(?=.*[0-9]).{4,}$/;
    return regExp.test(str);
};
