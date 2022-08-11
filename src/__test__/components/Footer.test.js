import React from "react";
import { shallow } from "enzyme";
import { create } from "react-test-renderer";
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

describe('Footer Snapshot', () => {
    test('Comprobar la UI del componente Footer', () => {
        const footer = create(<Footer />);
        expect(footer.toJSON()).toMatchSnapshot();
    });
});