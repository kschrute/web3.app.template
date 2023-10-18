export type NullableKeys<T> = {
  [P in keyof T]-? : Extract<T[P], null | undefined> extends never ? never: P
}[keyof T]

// works without strictNullChecks
// export type NullableKeys<T> = {
//   [P in keyof T]-?:  Pick<T,P> extends Required<Pick<T, P>> ? never: P
// }[keyof T]

export type ExtractNullable<T> = {
  [P in NullableKeys<T>]: NonNullable<T[P]>
}
