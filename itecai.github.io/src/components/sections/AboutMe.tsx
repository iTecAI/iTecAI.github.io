import { Divider, Paper, Stack, Text, Title } from "@mantine/core";
import * as data from "../../data/about.json";

export function AboutMe() {
    return (
        <Stack gap="md" p="md" className="section about-section">
            <Paper radius="sm" p="md" withBorder>
                <Title ff="monospace" fw={400} order={1}>
                    TL;DR
                </Title>
                <Divider />
                <Text></Text>
            </Paper>
        </Stack>
    );
}
