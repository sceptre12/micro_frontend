
    export type RemoteKeys = 'login' | 'login/button';
    type PackageType<T> = T extends 'login/button' ? typeof import('login/button') :T extends 'login' ? typeof import('login') :any;