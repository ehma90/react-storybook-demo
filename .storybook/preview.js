import React from "react";
import Center from "../src/component/center/Center";
import { addDecorator } from "@storybook/react";

addDecorator(story => <Center>{story()}</Center>)


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: (a, b) =>
      a.id === b.id ? 0 : a.id.localeCompare(b.id, undefined, { numeric: true }),
  },
}