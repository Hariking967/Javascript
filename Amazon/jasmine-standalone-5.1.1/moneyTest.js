import {formatCurrency} from '../scripts/utils/money.js';

describe('test suite: formatCurrency', () => {
    it('converst cents to dollars',() => {
        expect(formatCurrency(2095)).toEqual('20.95');
    });

    it('works with 0',() => {
        expect(formatCurrency(2095)).toEqual('20.95');
    });

    it('converst cents to dollars',() => {
        expect(formatCurrency(2095)).toEqual('20.95');
    });
});