import { ActionIcon, AppShell, Tabs } from "@mantine/core";
import { useDisclosure, useHeadroom } from "@mantine/hooks";
import "../styles/shell.scss";
import { CollapsedHeader, ExpandedHeader } from "./headers";
import {
    IconArticle,
    IconBriefcase,
    IconChevronCompactLeft,
    IconChevronCompactRight,
    IconInfoCircleFilled,
    IconTools,
} from "@tabler/icons-react";
import { useMemo, useState } from "react";
import { AboutMe } from "./sections/AboutMe";

export function SiteShell() {
    const pinned = useHeadroom({ fixedAt: 240 });
    const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
    const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);
    const [selected, setSelected] = useState<
        "about" | "projects" | "experience" | "articles"
    >("about");

    const RenderedSection = useMemo(() => {
        switch (selected) {
            case "about":
                return <AboutMe />;
            case "articles":
                return <></>;
            case "experience":
                return <></>;
            case "projects":
                return <></>;
        }
    }, [selected]);

    return (
        <AppShell
            header={{ height: pinned ? 360 : 60 }}
            navbar={{
                width: 300,
                breakpoint: "sm",
                collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
            }}
            padding="sm"
            className="site-shell"
        >
            <AppShell.Header className="site-header">
                {pinned ? <ExpandedHeader /> : <CollapsedHeader />}
            </AppShell.Header>
            <AppShell.Navbar className="site-nav">
                <ActionIcon
                    hiddenFrom="sm"
                    onClick={toggleMobile}
                    className="nav-expander"
                    variant="default"
                >
                    {mobileOpened ? (
                        <IconChevronCompactLeft />
                    ) : (
                        <IconChevronCompactRight />
                    )}
                </ActionIcon>
                <ActionIcon
                    visibleFrom="sm"
                    onClick={toggleDesktop}
                    className="nav-expander"
                    variant="default"
                >
                    {desktopOpened ? (
                        <IconChevronCompactLeft />
                    ) : (
                        <IconChevronCompactRight />
                    )}
                </ActionIcon>
                <Tabs
                    orientation="vertical"
                    value={selected}
                    onChange={(value) =>
                        value ? setSelected(value as any) : setSelected("about")
                    }
                    variant="pills"
                    p="sm"
                >
                    <Tabs.List w="100%">
                        <Tabs.Tab
                            value="about"
                            leftSection={<IconInfoCircleFilled />}
                        >
                            About Me
                        </Tabs.Tab>
                        <Tabs.Tab value="projects" leftSection={<IconTools />}>
                            Projects
                        </Tabs.Tab>
                        <Tabs.Tab
                            value="experience"
                            leftSection={<IconBriefcase />}
                        >
                            Experience
                        </Tabs.Tab>
                        <Tabs.Tab
                            value="articles"
                            leftSection={<IconArticle />}
                        >
                            Blog
                        </Tabs.Tab>
                    </Tabs.List>
                </Tabs>
            </AppShell.Navbar>
            <AppShell.Main className="site-main">
                {RenderedSection}
            </AppShell.Main>
        </AppShell>
    );
}
