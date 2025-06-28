// extending interface
// - interface bisa melanjutkan (extends) ke interface lain
// - secara otomatis attribute interface yang dilanjutkan dimiliki juga oleh interface tersebut
// - ini membuat kita lebih mudah ketika membuat tipe data yang kompleks

export interface Employee{
    id: string;
    name: string;
    division: string;
}

export interface Manager extends Employee{
    numberOfEmployees: number;
}