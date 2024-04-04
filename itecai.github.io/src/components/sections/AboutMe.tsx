import {
    Divider,
    List,
    ListItem,
    Paper,
    Stack,
    Text,
    Title,
} from "@mantine/core";

export function AboutMe() {
    return (
        <Stack gap="md" p="md" className="section about-section">
            <Paper
                radius="sm"
                p="md"
                withBorder
                className="subsection about who-i-am"
            >
                <Stack gap="xs">
                    <Title ff="monospace" fw={400} order={1}>
                        Who I Am
                    </Title>
                    <Divider />
                    <Text>
                        Hi there! I'm Dax, a queer software engineer, writer,
                        and player of various TTRPGs. My main areas of expertise
                        lie in full-stack development & data science, though I'm
                        also fairly experienced in database management, system
                        administration, and robotics. I'm currently a student @
                        RIT, in the process of getting a Computer Science degree
                        and a minor in Creative Writing.
                    </Text>
                </Stack>
            </Paper>
            <Paper
                radius="sm"
                p="md"
                withBorder
                className="subsection about passions"
            >
                <Stack gap="xs">
                    <Title ff="monospace" fw={400} order={1}>
                        Passions
                    </Title>
                    <Divider />
                    <Text fw={600}>What I'd Love To Work On</Text>
                    <List>
                        <ListItem>Full-stack development projects</ListItem>
                        <ListItem>Computational research</ListItem>
                        <ListItem>Peer-to-peer networking</ListItem>
                        <ListItem>FOSS applications</ListItem>
                        <ListItem>Non-profit software</ListItem>
                    </List>
                    <Text fw={600}>What I'd Love To Talk About</Text>
                    <List>
                        <ListItem>Liberal activism</ListItem>
                        <ListItem>Queer theory</ListItem>
                        <ListItem>Nuclear fusion</ListItem>
                        <ListItem>TTRPGs</ListItem>
                        <ListItem>Weird programming facts</ListItem>
                        <ListItem>Public transit</ListItem>
                    </List>
                </Stack>
            </Paper>
        </Stack>
    );
}
