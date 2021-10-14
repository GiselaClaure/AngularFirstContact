export interface NetflixModel {
    nav:Nav,
    hero: Hero,
    films: Films,
}
export interface Nav {
    logo: Img;
    pageName: string;
}
export interface Img{
    src: string;
    alt: string;
}
export interface Hero {
    title: string;
    gallery:Img[];
}
export interface Films {
    title:string;
    gallery: Img[];
}




