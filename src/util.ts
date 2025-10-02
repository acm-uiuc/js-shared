
type ValueOf<T> = T[keyof T];

export type EnsureUniqueValues<T extends Record<string, string>> = {
    [K in keyof T]: ValueOf<T> extends T[K]
    ? T[K] extends ValueOf<Omit<T, K>>
    ? never
    : T[K]
    : T[K]
};