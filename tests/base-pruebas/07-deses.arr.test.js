import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr"

describe('Pruebas en 07-deses-arr', () => {
    test('Debe de retorar un String y un numero', () => { 
        const [letters, numbers] = retornaArreglo();

        //Validamos que recibamos los datos que queremos ver
        expect(letters).toBe('ABC');
        expect(numbers).toBe(123);

        //Validamos el tipo de datos de las variables
        expect(typeof letters).toBe("string");
        expect(typeof numbers).toBe("number");

        //Validamos que recibamos cualquier texto, esto es para cuando no debemos validar que deba recibir un texto en concreto.
        expect(letters).toEqual(expect.any(String));
    })
})