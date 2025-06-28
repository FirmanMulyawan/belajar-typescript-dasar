// interface
// - interface adalah cara lain melakukan deklarasi data selain menggunakan type
// - interface bisa dikembangkan dengan mudah dibanding dengan type
// - oleh karena itu, kebanyakan untuk type data yang kompleks, kebanyakan programmer
// typescript akan menggunakan interface dibandingkan menggunakan type

export interface Seller {
    id: number;
    name: string;
    address?: string;
    readonly nib: string;
    readonly npwp: string;
}