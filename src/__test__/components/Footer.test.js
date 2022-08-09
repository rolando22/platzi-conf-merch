import React from "react";
import { mount, shallow } from "enzyme";
import { Footer } from "../../components";

describe('<Footer />', () => {
    const footer = shallow(<Footer />);

    test('Render del componente Footer', () => {
        expect(footer.length).toEqual(1);
    });
    test('Render del título', () => {
        expect(footer.find('.Footer-title').text()).toEqual('Platzi Conf Merch');
    });
});