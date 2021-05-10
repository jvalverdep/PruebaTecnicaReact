"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function assertString(input) {
    if (typeof input === 'string')
        return;
    else
        throw new Error('The Input must be a string!');
}
exports.assertString = assertString;
function assertNumber(input, errorString) {
    console.log(typeof input);
    if (typeof input === 'number')
        return;
    else
        throw new Error(errorString ? errorString : 'The Input must be a number!');
}
exports.assertNumber = assertNumber;
function assert(input, errorString) {
    if (!input)
        throw new Error(errorString ? errorString : 'Not a truthy value');
}
exports.assert = assert;
//# sourceMappingURL=custom.asserts.js.map