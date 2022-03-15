import React from 'react'
import renderer from 'react-test-renderer';
import { ProductCard, ProductImage } from '../../src/components';


const product1 = {
    id: '1',
    title: 'Coffee Mug - Card',
    img: './coffee-mug.png'
}

describe('Productimage', () => { 
    
    test('debe de mostrar el componente correctaent con la url de la imagen personalizado', () => {
        
        const wrapper = renderer.create(
            <ProductImage img='http://images.jpg' />
        )

        expect(wrapper.toJSON()).toMatchSnapshot();

    })

    test('debe de mostrar el componente con la imagen por defecto', () => { 

        const wrapper = renderer.create(
            <ProductCard product={ product1 } >
                {
                    () => (
                        <ProductImage />
                    )
                }
            </ProductCard>
        )

        expect(wrapper.toJSON()).toMatchSnapshot();
        
    })
})