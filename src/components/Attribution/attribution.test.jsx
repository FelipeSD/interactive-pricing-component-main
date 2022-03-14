import { render } from '@testing-library/react';
import React from 'react';
import Attribution from '.';

describe('attribution', () => {
    it('should render', () => {
        const {getByText} = render(<Attribution name="Felipe" />);

        expect(getByText('Felipe')).toBeInTheDocument();
    });
});