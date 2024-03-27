import { IconProps } from "@tabler/icons-react";
import * as Icons from "@tabler/icons-react";

export function DynamicIcon({
    icon,
    ...props
}: { icon: keyof Omit<typeof Icons, "Icon"> } & Partial<IconProps>) {
    const IconComponent: any = Icons[icon] ?? Icons.IconQuestionMark;
    return <IconComponent {...props} />;
}
