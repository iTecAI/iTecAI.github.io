import { MantineProvider, createTheme } from "@mantine/core";
import { SiteShell } from "./components/shell";

export default function App() {
    return (
        <MantineProvider
            defaultColorScheme="dark"
            theme={createTheme({ primaryColor: "grape" })}
        >
            <SiteShell />
        </MantineProvider>
    );
}
