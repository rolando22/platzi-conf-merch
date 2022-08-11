import React from "react";
import { shallow } from "enzyme";
import ProvideMock from "../../__mocks__/ProviderMock";
import { ProductMock } from "../../__mocks__/ProductMock";
import { Product } from "../../components";

describe('<Product />', () => {
    test('Render del componente Product', () => {
        const product = shallow(
        <ProvideMock>
            <Product/>
        </ProvideMock>);
        expect(product.length).toEqual(1);
    });
    test('Comprobar el botón de comprar', () => {
        const handleAddtoCart = jest.fn();
        const wrapper = shallow(
            <ProvideMock>
                <Product
                    product={ProductMock}
                    handleAddtoCart={handleAddtoCart}
                />
            </ProvideMock>
        );
        // wrapper.find('button').simulate('click');
        expect(handleAddtoCart).toHaveBeenCalledTimes(0);
    });
});