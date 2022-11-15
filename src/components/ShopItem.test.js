import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ShopItem from "./ShopItem";

describe('Shopping Item', () => {
  it('calls onClick when button is clicked', () => {
    const user = userEvent.setup();
    const onClickMock = jest.fn();
    render(<ShopItem onClick={onClickMock} />);
    const button = screen.getByRole("button");

    user.click(button);

    expect(onClickMock).toHaveBeenCalled();
  });
});