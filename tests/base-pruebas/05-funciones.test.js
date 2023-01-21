import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones"

describe('Pruebas en 05-funciones', () => { 

    test('getUser debe retornar un objeto', () => { 

        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        //Para comparar 2 objetos debemos usar toStrictEqual, ya que si usamos tobe nos dira que no son iguales ya que los objetos aunque tengan el mismo contenido estaran en 2 lugares distintos de memoria
        expect(testUser).toStrictEqual(user)

    })

    test('getUsuarioActivo debe retornar un objeto', () => { 
        const name = "Julian";
        const usuario = getUsuarioActivo(name);
        expect(usuario).toStrictEqual({
            uid: 'ABC567',
            username: name
        });
    })
})