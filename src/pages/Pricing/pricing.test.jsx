import React from 'react';
import {render} from "@testing-library/react";
import Pricing from "./index";

describe("Pricing page", () => {
    it("renders without crashing", () => {
        const {getByText} = render(<Pricing/>);
        expect(getByText("Monthly Billing")).toBeInTheDocument();
        expect(getByText("Yearly Billing")).toBeInTheDocument();
    });
});
