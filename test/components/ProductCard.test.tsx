import React from 'react'
import renderer from 'react-test-renderer';
import { ProductCard } from '../../src/components';

const { act } = renderer;

const product1 = {
    id: '1',
    title: 'Coffee Mug - Card',
    img: './coffee-mug.png'
}

describe('ProductCard', () => { 
    
    test('debe de mostrar el componente correctaent con la url de la imagen personalizado', () => {
        
        const wrapper = renderer.create(
            <ProductCard product={product1}>
                {
                    
                    () => (
                        <h1>Product card</h1>
                    )
                }
            </ProductCard>
        )

        expect(wrapper.toJSON()).toMatchSnapshot();

    });

    test('debe de incrementar el contador', () => { 
        
        const wrapper = renderer.create(
            <ProductCard product={product1}>
                {
                    
                    ({count, increaseBy}) => (
                        <>
                            <h1>Product card</h1>
                            <span>{count}</span>
                            <button onClick={ () => increaseBy(1)} ></button>
                        </>
                    )
                }
            </ProductCard>
        )

        let tree = wrapper.toJSON();

        expect( tree ).toMatchSnapshot();
        
        act(()=> {
            (tree as any).children[2].props.onClick();
        })
        
        tree = wrapper.toJSON();

        expect( (tree as any).children[1].children[0] ).toBe('1');
    })

})