import { getDate } from './getDate'

describe('getDate function', () => {
    it('null input', () => {
        const result = getDate(null);
        expect(result).toEqual('1 января, чт, 1970 год');
    });

    it('empty input', () => {
        const input = ''
        const result = getDate(input);
        expect(result).toEqual('NaN undefined, undefined, NaN год');
    });

    it('valid input', () => {
        const input = 1544356800000
        const result = getDate(input);
        expect(result).toEqual('9 декабря, вс, 2018 год');
    })
});