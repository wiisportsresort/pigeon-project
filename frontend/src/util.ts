export function assert<T>(value?: T): T {
  return (value as unknown) as T;
}
