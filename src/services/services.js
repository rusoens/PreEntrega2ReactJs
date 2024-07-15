const juguetes = [
    {
        id: 1,
        tipo: 'imagen' ,
        titulo: 'Goku' ,
        ubicacion: '../img/content/Goku.jpg' ,
        alt: 'Muñeco de Goku' ,
        descripcion: 'Muñeco de Goku' ,
        tema: '#dragonball #Goku' ,
        megusta: 641,
        precio:  8283,
        clase: 'dragonball' ,
        },
        
        {
        id: 2,
        tipo: 'imagen' ,
        titulo: 'Vegetta' ,
        ubicacion: '../img/content/Vegetta.jpg' ,
        alt: 'Muñeco de Vegetta' ,
        descripcion: 'Muñeco de Vegetta' ,
        tema: '#dragonball #Vegetta' ,
        megusta: 965,
        precio:  7708,
        clase: 'dragonball' ,
        },
        
        {
        id: 3,
        tipo: 'imagen' ,
        titulo: 'Freezer' ,
        ubicacion: '../img/content/Freezer.jpg' ,
        alt: 'Muñeco de Freezer' ,
        descripcion: 'Muñeco de Freezer' ,
        tema: '#dragonball #Freezer' ,
        megusta: 580,
        precio:  5625,
        clase: 'dragonball' ,
        },
        
        {
        id: 4,
        tipo: 'imagen' ,
        titulo: 'Gohan' ,
        ubicacion: '../img/content/Gohan.jpg' ,
        alt: 'Muñeco de Gohan' ,
        descripcion: 'Muñeco de Gohan' ,
        tema: '#dragonball #Gohan' ,
        megusta: 789,
        precio:  7294,
        clase: 'dragonball' ,
        },
        
        {
        id: 5,
        tipo: 'imagen' ,
        titulo: 'Piccolo' ,
        ubicacion: '../img/content/Piccolo.jpg' ,
        alt: 'Muñeco de Piccolo' ,
        descripcion: 'Muñeco de Piccolo' ,
        tema: '#dragonball #Piccolo' ,
        megusta: 278,
        precio:  7220,
        clase: 'dragonball' ,
        },
        
        {
        id: 6,
        tipo: 'imagen' ,
        titulo: 'Stan' ,
        ubicacion: '../img/content/Stan.jpg' ,
        alt: 'Muñeco de Stan' ,
        descripcion: 'Muñeco de Stan' ,
        tema: '#southpark #Stan' ,
        megusta: 837,
        precio:  5383,
        clase: 'southpark' ,
        },
        
        {
        id: 7,
        tipo: 'imagen' ,
        titulo: 'Kyle' ,
        ubicacion: '../img/content/Kyle.jpg' ,
        alt: 'Muñeco de Kyle' ,
        descripcion: 'Muñeco de Kyle' ,
        tema: '#southpark #Kyle' ,
        megusta: 806,
        precio:  1090,
        clase: 'southpark' ,
        },
        
        {
        id: 8,
        tipo: 'imagen' ,
        titulo: 'Cartman' ,
        ubicacion: '../img/content/Cartman.jpg' ,
        alt: 'Muñeco de Cartman' ,
        descripcion: 'Muñeco de Cartman' ,
        tema: '#southpark #Cartman' ,
        megusta: 281,
        precio:  1375,
        clase: 'southpark' ,
        },
        
        {
        id: 9,
        tipo: 'imagen' ,
        titulo: 'Kenny' ,
        ubicacion: '../img/content/Kenny.jpg' ,
        alt: 'Muñeco de Kenny' ,
        descripcion: 'Muñeco de Kenny' ,
        tema: '#southpark #Kenny' ,
        megusta: 978,
        precio:  2873,
        clase: 'southpark' ,
        },
        
        {
        id: 10,
        tipo: 'imagen' ,
        titulo: 'Butters' ,
        ubicacion: '../img/content/Butters.jpg' ,
        alt: 'Muñeco de Butters' ,
        descripcion: 'Muñeco de Butters' ,
        tema: '#southpark #Butters' ,
        megusta: 681,
        precio:  1826,
        clase: 'southpark' ,
        },
        
        {
        id: 11,
        tipo: 'imagen' ,
        titulo: 'Seiya' ,
        ubicacion: '../img/content/Seiya.jpg' ,
        alt: 'Muñeco de Seiya' ,
        descripcion: 'Muñeco de Seiya' ,
        tema: '#saintseiya #Seiya' ,
        megusta: 850,
        precio:  1686,
        clase: 'saintseiya' ,
        },
        
        {
        id: 12,
        tipo: 'imagen' ,
        titulo: 'Shiryu' ,
        ubicacion: '../img/content/Shiryu.jpg' ,
        alt: 'Muñeco de Shiryu' ,
        descripcion: 'Muñeco de Shiryu' ,
        tema: '#saintseiya #Shiryu' ,
        megusta: 569,
        precio:  5232,
        clase: 'saintseiya' ,
        },
        
        {
        id: 13,
        tipo: 'imagen' ,
        titulo: 'Hyoga' ,
        ubicacion: '../img/content/Hyoga.jpg' ,
        alt: 'Muñeco de Hyoga' ,
        descripcion: 'Muñeco de Hyoga' ,
        tema: '#saintseiya #Hyoga' ,
        megusta: 732,
        precio:  5507,
        clase: 'saintseiya' ,
        },
        
        {
        id: 14,
        tipo: 'imagen' ,
        titulo: 'Shun' ,
        ubicacion: '../img/content/Shun.jpg' ,
        alt: 'Muñeco de Shun' ,
        descripcion: 'Muñeco de Shun' ,
        tema: '#saintseiya #Shun' ,
        megusta: 494,
        precio:  3350,
        clase: 'saintseiya' ,
        },
        
        {
        id: 15,
        tipo: 'imagen' ,
        titulo: 'Ikki' ,
        ubicacion: '../img/content/Ikki.jpg' ,
        alt: 'Muñeco de Ikki' ,
        descripcion: 'Muñeco de Ikki' ,
        tema: '#saintseiya #Ikki' ,
        megusta: 439,
        precio:  9928,
        clase: 'saintseiya' ,
        },
];



// getProduct
export const getJuguete = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const product = juguetes.find((p) => p.id === parseInt(id));
            if (product) {
                resolve(product);

            } else {

                reject("No existe 😕");
            }
        }, 1000);
    });
};

export const getJuguetes = (clase) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const productsFiltered = clase
                ? juguetes.filter((product) => product.clase === clase)
                : juguetes;

            resolve(productsFiltered);
        }, 1000);
    });
};