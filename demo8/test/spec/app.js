describe('Demo', function() {
    'use strict';

    // mock the demo module
    // unit tests are supposed to test individual things, but javascript
    // is so dependent on different elements, so use 'mock' to create
    // a mock version of each element
    beforeEach(angular.mock.module('Demo'));

    // test capitalize filter
    it('capitalize filter should calitalize first letter in a string', function() {
        // Need to reference a filter by nameFilter, not just the name.
        inject(function(capitalizeFilter) {
            expect(capitalizeFilter('test')).not.toBe('test');
            expect(capitalizeFilter('test')).toBe('Test');
        });
    });

    // test daffy filter
    it('daffy filter should replace every s with th', function() {
        inject(function(daffyFilter) {
            expect(daffyFilter('see')).not.toBe('see');
            expect(daffyFilter('sassy')).toBe('thaththy');
        });
    });

    // test daffy filter
    it('elmer filter should replace every r with w', function() {
        inject(function(elmerFilter) {
            expect(elmerFilter('read')).not.toBe('read');
            expect(elmerFilter('roar')).toBe('woaw');
        });
    });

    // test reverseDaffy filter
    it('reverseDaffy filter should replace every s with th and then reverse the entire string', function() {
        inject(function(reverseDaffyFilter) {
            expect(reverseDaffyFilter('see')).not.toBe('see');
            expect(reverseDaffyFilter('sassy')).toBe('yhthtaht');
        });
    });

    // test reverseElmer filter
    it('reverseElmer filter should replace every r with w and then reverse the entire string', function() {
        inject(function(reverseElmerFilter) {
            expect(reverseElmerFilter('rare')).not.toBe('rare');
            expect(reverseElmerFilter('ruby on rails')).toBe('sliaw no ybuw');
        });
    });

});
