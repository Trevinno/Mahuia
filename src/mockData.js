const arte = [
    {
        titulo: 'La creatividad ',
        autor: 'Frida Khalo',
        autorID: '0001',
        categoria: 'Surrealismo',
        url: 'https://2.bp.blogspot.com/-fLC5dtHseVs/U13xB9BKP1I/AAAAAAAAABo/pghXm9eneE8/s1600/Salvador+Dali+-+The+Endless+Enigma+.JPG'
    },
    {
        titulo: 'Purificacion',
        autor: 'Diego Rivera',
        autorID: '0002',
        categoria: 'Surrealismo',
        url: 'https://tvazteca.brightspotcdn.com/dims4/default/ddd6529/2147483647/strip/true/crop/1200x816+0+0/resize/968x658!/format/jpg/quality/80/?url=https%3A%2F%2Ftvazteca.brightspotcdn.com%2F95%2F1b%2F3a03779c656969a2342aae371de8%2F0'
    },
    {
        titulo: 'Mujeres con Flores',
        autor: 'Frida Khalo',
        autorID: '0001',
        categoria: 'Impresionismo',
        url: 'https://1.bp.blogspot.com/-yxh-Irb855Q/WwNR4JYhBWI/AAAAAAAAFUs/_iy3tquSoiMS4q5g6rA0_MozNIMHqKXAQCLcBGAs/s640/flores-de-mexico-high.jpg'
    },
    {
        titulo: 'El Esplendor ',
        autor: 'Diego Rivera',
        autorID: '0002',
        categoria: 'Impresionismo',
        url: 'https://i.pinimg.com/originals/6e/ff/b3/6effb326db23f0933e0237597d6292a8.jpg'
    },
    {
        titulo: 'Arco',
        autor: 'Frida Khalo',
        autorID: '0001',
        categoria: 'Impresionismo',
        url: 'https://i.pinimg.com/originals/17/70/81/177081d58bb93ccfe4c81090ad34a139.jpg'
    },
    {
        titulo: 'Indio Zapoteca',
        autor: 'Diego Rivera',
        autorID: '0002',
        categoria: 'Surrealismo',
        url: 'https://tvazteca.brightspotcdn.com/dims4/default/de6fb1d/2147483647/strip/true/crop/1300x912+0+0/resize/968x679!/format/jpg/quality/80/?url=https%3A%2F%2Ftvazteca.brightspotcdn.com%2Fb5%2F9a%2Fe5d714db0bb2a21f57177bc06dab%2F0'
    },
    {
        titulo: 'Xolotl',
        autor: 'Frida Khalo',
        autorID: '0001',
        categoria: 'POP',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIRYOoPv6HyzzAqNUhZ1B5ffEpnQKrpgLcTg&usqp=CAU'
    },


]

const artistas = [
    {
        _id: '0001',
        nombre: 'Frida Khalo',
        biografia: 'Estas es mi biografia. Estas es mi biografia. Estas es mi biografia. Estas es mi biografia. Estas es mi biografia. Estas es mi biografia. Estas es mi biografia. ',
        edad: 31,
        ubicacion: 'Ciudad de Mexico, Mexico',
        visitas: 20,
        url: 'https://1.bp.blogspot.com/-hXfBKJTfm7A/UVS1CT9rfuI/AAAAAAAA1y8/UJ-uUxOEHT0/s1600/1.bmp'
    }, 
    {
        _id: '0002',
        nombre: 'Diego Rivera',
        biografia: 'Estas es mi biografia. Estas es mi biografia. Estas es mi biografia. Estas es mi biografia. Estas es mi biografia. Estas es mi biografia. Estas es mi biografia. ',
        edad: 52,
        ubicacion: 'Guanajuato, Mexico',
        visitas: 13,
        url: 'https://solovelypopup.com/wp-content/uploads/2018/05/0b8530cf4deca84c4e36d3aad8ab7d2c.jpg'
    }

]


export const getArte = () => {
    return arte
}

export const getArtistas = () => {
    return artistas
}

export const getArteDeArtista = (id) => {
    return arte.filter( art => art.autorID == id)
}

export const getArtista = (id) => {
    for (let artista of artistas) {
        if (artista._id == id) {
            return artista
        }
    }
}