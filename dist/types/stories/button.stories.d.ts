import type { StoryObj } from "@storybook/react-vite";
declare const meta: {
    title: string;
    component: import("react").ForwardRefExoticComponent<import("../types").ButtonProps & import("react").RefAttributes<HTMLButtonElement>>;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {
        variant: {
            control: "select";
            options: string[];
        };
        size: {
            control: "select";
            options: string[];
        };
        fullWidth: {
            control: "boolean";
        };
        disabled: {
            control: "boolean";
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
export declare const Secondary: Story;
export declare const Outline: Story;
export declare const Ghost: Story;
export declare const Danger: Story;
export declare const Small: Story;
export declare const Large: Story;
export declare const FullWidth: Story;
export declare const Disabled: Story;
