import { IconFiles } from "../../assets/icons";

interface Props {
    iconName: string
    width?: number
    height?: number
    color?: string
}

// props: {iconName: string} example: LEFT_ARROW_ICON
export default ({ iconName, width = 24, height = 24, color }: Props) => {
    const I = IconFiles[`${iconName}`];
    return (
        <I width={width} height={height} />
    );
};