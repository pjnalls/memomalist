// https://stackoverflow.com/a/69044541

function fibonacci(n: number): number {
  const map: Map<number, number> = new Map<number, number>([[0, 0]]);

  function fib(n: number): number {
    if (map.has(n)) return map.get(n) as number;
    if (n < 3) return 1;

    map.set(n, fib(n - 1) + fib(n - 2));
    return map.get(n) as number;
  }

  return fib(n);
}
