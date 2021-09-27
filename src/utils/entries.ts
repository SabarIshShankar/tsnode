type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];

export const entries = <V, O extends Record<K, V>, K extends keyof O>(
  obj: O
): Entries<O> => (obj ? Object.entries(obj) : []) as Entries<O>;
