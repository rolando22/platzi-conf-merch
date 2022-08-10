import React from "react";
import { shallow } from "enzyme";
import ProviderMock from "../../__mocks__/ProviderMock";
import { Header } from "../../components";

describe('<Header />', () => {
    const header = shallow(
        <ProviderMock>
            <Header />
        </ProviderMock>
    );

    test('Render del componente Header', () => {
        expect(header.length).toEqual(1);
    });
    test('Render del título', () => {
        // expect(header.find('.Header-title').text()).toEqual('PlatziConf Merch');
        expect(header.find('.Header-title'));
    });
});