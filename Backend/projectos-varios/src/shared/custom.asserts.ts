export function assertString(input: any): asserts input is string {
  if (typeof input === 'string') return;
  else throw new Error('The Input must be a string!');
}

export function assertNumber(
  input: any,
  errorString?: string,
): asserts input is number {
  console.log(typeof input);
  if (typeof input === 'number') return;
  else
    throw new Error(errorString ? errorString : 'The Input must be a number!');
}

export function assert(input: any, errorString?: string): asserts input {
  if (!input) throw new Error(errorString ? errorString : 'Not a truthy value');
}
