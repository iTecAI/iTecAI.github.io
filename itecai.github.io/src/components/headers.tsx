import {
    ActionIcon,
    Anchor,
    Badge,
    Box,
    Group,
    Image,
    Paper,
    Popover,
    Stack,
    Text,
    Title,
    Tooltip,
} from "@mantine/core";
import * as data from "../data/about.json";
import "../styles/header.scss";
import { IconMessage } from "@tabler/icons-react";
import { ReactNode, useEffect, useMemo, useState } from "react";
import { DynamicIcon } from "./icons";
import { CodeHighlight } from "@mantine/code-highlight";

export function CodeSummary() {
    const [selectedContact, setSelectedContact] = useState<[string, string]>([
        data.header.contact[0].label,
        data.header.contact[0].value,
    ]);
    useEffect(() => {
        const interval = setInterval(() => {
            const choice = Math.round(
                Math.random() * (data.header.contact.length - 1)
            );
            setSelectedContact([
                data.header.contact[choice].label,
                data.header.contact[choice].value,
            ]);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const code = useMemo(() => {
        return `from typing import Literal

class Developer:
    def __init__(self):
        self.name: str = "${data.header.name}"
        self.pronouns: str = "${data.header.pronouns}"
        self.descriptors: list[str] = ["${data.header.summary_tags.join(
            '", "'
        )}"]
        self.skills: dict[str, list[str]] = {
            "languages": ["${data.header.skills.languages.join('", "')}"],
            "tools": ["${data.header.skills.tools.join('", "')}"],
            "platforms": ["${data.header.skills.platforms.join('", "')}"]
        }

    def contact_me_at(self, contact: Literal["${selectedContact[0]}"]) -> str:
        return "${selectedContact[1]}"
`;
    }, [selectedContact]);
    return (
        <CodeHighlight
            withCopyButton={false}
            className="code-summary"
            language="python"
            code={code}
        />
    );
}

export function ContactOverlay({
    children,
}: {
    children?: ReactNode | ReactNode[];
}) {
    return (
        <Popover position="bottom-end" withArrow arrowOffset={20}>
            <Popover.Target>{children}</Popover.Target>
            <Popover.Dropdown className="contact-overlay" w={320}>
                <Stack gap="sm">
                    {data.header.contact.map((entry, index) => (
                        <Paper
                            p="sm"
                            className="contact-entry"
                            radius="sm"
                            key={index}
                        >
                            <Group justify="space-between" align="center">
                                <DynamicIcon
                                    icon={entry.icon as any}
                                    size={26}
                                />
                                <Stack gap={2} justify="center" align="end">
                                    {entry.href ? (
                                        <Anchor href={entry.href}>
                                            {entry.value}
                                        </Anchor>
                                    ) : (
                                        <Text>{entry.value}</Text>
                                    )}
                                    <Text size="sm" c="dimmed">
                                        {entry.label}
                                    </Text>
                                </Stack>
                            </Group>
                        </Paper>
                    ))}
                </Stack>
            </Popover.Dropdown>
        </Popover>
    );
}

export function ExpandedHeader() {
    return (
        <Box className="header expanded">
            <CodeSummary />
            <Group justify="end" gap="lg" className="self-info" wrap="nowrap">
                <Stack
                    gap="md"
                    justify="center"
                    className="info-text"
                    align="end"
                >
                    <Stack gap={0} align="end">
                        <Title order={1}>{data.header.name}</Title>
                        <Text c="dimmed">{data.header.pronouns}</Text>
                    </Stack>
                    <Group gap="sm" maw={240} justify="end">
                        {data.header.summary_tags
                            .sort((a, b) => b.length - a.length)
                            .map((text, index) => (
                                <Badge variant="dot" size="md" key={index}>
                                    {text}
                                </Badge>
                            ))}
                    </Group>
                </Stack>
                <Box className="info-image">
                    <Image radius="xl" src={data.header.profile_image} />
                    <ContactOverlay>
                        <Tooltip label="Contact Me" color="dark" withArrow>
                            <ActionIcon
                                size="xl"
                                radius="xl"
                                className="contact-action"
                            >
                                <IconMessage size={20} />
                            </ActionIcon>
                        </Tooltip>
                    </ContactOverlay>
                </Box>
            </Group>
        </Box>
    );
}

export function CollapsedHeader() {
    return (
        <Box className="header collapsed">
            <Group justify="space-between" h={60}>
                <Group gap="sm" className="self-info" pl="md">
                    <Image
                        radius="xl"
                        src={data.header.profile_image}
                        className="info-image"
                    />
                    <Stack
                        gap={0}
                        justify="center"
                        className="info-text"
                        align="start"
                    >
                        <Text>{data.header.name}</Text>
                        <Text c="dimmed" size="sm">
                            {data.header.pronouns}
                        </Text>
                    </Stack>
                </Group>
                <ContactOverlay>
                    <Tooltip
                        label="Contact Me"
                        color="dark"
                        withArrow
                        position="left"
                    >
                        <ActionIcon
                            size="xl"
                            radius="xl"
                            className="contact-action"
                        >
                            <IconMessage size={20} />
                        </ActionIcon>
                    </Tooltip>
                </ContactOverlay>
            </Group>
        </Box>
    );
}
