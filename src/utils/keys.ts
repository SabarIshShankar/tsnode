export const keys = <O extends Record<K, unknown>, K extends keyof O>(obj: O) =>
  obj ? (Object.keys(obj) as K[]) : ([] as K[]);
