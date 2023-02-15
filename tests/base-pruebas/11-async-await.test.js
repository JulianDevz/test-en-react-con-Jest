import { getImagen } from "../../src/base-pruebas/11-async-await"

describe('Pruebas en 11-async-await', () => {
    test('getImagen debe de retornar un URL de la imagen', async() => {
        const resp = await getImagen();
        // console.log(url);

        expect( typeof resp).toBe('string');

        //Para validar que la resp no llega podemos hacerlo de la siguiente forma
        // expect( resp ).toBe("No se encontro la imagen")
    })
})