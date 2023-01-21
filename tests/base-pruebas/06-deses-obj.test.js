import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe('Pruebas en 06-deses-obj', () => { 

    test('UsContext debe retornar un objeto', () => {
        
        const datos = {
            clave: "JulianDevz",
            edad : 23
        }

        let contexto = usContext(datos);

        expect(contexto).toStrictEqual({
            nombreClave: datos.clave,
            anios: datos.edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        });

    })

})