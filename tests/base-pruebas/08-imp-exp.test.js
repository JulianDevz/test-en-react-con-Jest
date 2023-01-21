import { getHeroeById, getHeroesByOwner } from '../../src/base-pruebas/08-imp-exp';

describe('Prueba de 08-imp-exp', () => {

    test('getHeroeById debe retornar un heroe por id', () => {

        const id = 1;
        const hero = getHeroeById(id);
    
        expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
    })

    test('getHeroeById debe retornar undefined si no existe el id', () => {

        const id = 100;
        const hero = getHeroeById(id);
    
        //Evaluamos que el resultado de hero sea undefined o null
        expect(hero).toBeFalsy();
    })

    test('getHeroesByOwner debe retornar los heroes de DC', () => {

        const owner = 'DC';
        const herosDC = getHeroesByOwner(owner);
        // console.log(herosDC);

        expect(herosDC).toHaveLength(3);
        expect(herosDC).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
        ]);
    })

    test('getHeroesByOwner debe retornar los heroes de Marvel', () => {

        const owner = 'Marvel';
        const herosDC = getHeroesByOwner(owner);
        // console.log(herosDC);

        expect(herosDC).toHaveLength(2);
        expect(herosDC).toEqual([
            { id: 2, name: 'Spiderman', owner: 'Marvel' },
            { id: 5, name: 'Wolverine', owner: 'Marvel' }
        ]);
    })
})