import React from 'react'
import renderer from 'react-test-renderer';
import { ProductTitle, ProductCard } from '../../src/components';


const product1 = {
    id: '1',
    title: 'Coffee Mug - Card',
    img: './coffee-mug.png'
}

// const product2 = {
//     id: '2',
//     title: 'Cafeee normal',
//     img: './coffee-mug.png'
// }

describe('ProductTitle', () => { 
    
    test('debe de mostrar el componente correctaent con el titulo personalizado', () => {
        
        const wrapper = renderer.create(
            <ProductTitle title='Custom Product' />
        )

        expect(wrapper.toJSON()).toMatchSnapshot();

    })

    test('debe de mostrar el componente con el nombre del producto', () => { 

        const wrapper = renderer.create(
            <ProductCard product={ product1 } >
                {
                    () => (
                        <ProductTitle  title='es un texto'/>
                    )
                }
            </ProductCard>
        )

        expect(wrapper.toJSON()).toMatchSnapshot();
        
    })
})