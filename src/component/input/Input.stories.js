import React from "react";
import Input from "./Input";

export default {
  title: "Form/Input",
  component: Input,
};

export const Small = () => <Input variant="small" />;
export const medium = () => <Input variant="medium" />;
export const large = () => <Input variant="large" />;

Small.storyName = 'Small input'
