import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ShopBar from "./ShopBar";

describe('Shop status bar', () => {
  it('Call onClick when checkout button is clicked', () => {
    const user = userEvent.setup();
    const onClickMock = jest.fn();
    render(<ShopBar onClick={onClickMock} />);
    const button = screen.getByRole('button');

    user.click(button);

    expect(onClickMock).toHaveBeenCalled();
  });
});