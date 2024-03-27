import { AppShell, ScrollAreaAutosize, Skeleton, Stack } from "@mantine/core";
import { useHeadroom } from "@mantine/hooks";
import "../styles/shell.scss";
import { CollapsedHeader, ExpandedHeader } from "./headers";

export function SiteShell() {
    const pinned = useHeadroom({ fixedAt: 240 });
    return (
        <AppShell
            header={{ height: pinned ? 360 : 60, offset: false }}
            padding="sm"
            className="site-shell"
        >
            <AppShell.Header className="site-header">
                {pinned ? <ExpandedHeader /> : <CollapsedHeader />}
            </AppShell.Header>
            <AppShell.Main className="site-main">
                <ScrollAreaAutosize>
                    <Stack gap="sm">
                        {new Array(50).fill(0).map((_, i) => (
                            <Skeleton animate={false} key={i} height={20} />
                        ))}
                    </Stack>
                </ScrollAreaAutosize>
            </AppShell.Main>
        </AppShell>
    );
}
