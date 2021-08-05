import AppLoading from "expo-app-loading";
import React, { ReactElement, ReactNode } from "react";
import { 
    useFonts,
    CutiveMono_400Regular } from '@expo-google-fonts/cutive-mono'

type AppBootstrapProps = {
    children: ReactNode;
};

export default function AppBootstrap({ children }: AppBootstrapProps): ReactElement {
    const [fontLoaded] = useFonts({
        CutiveMono_400Regular 
    });
    return fontLoaded ? <>{children}</> : <AppLoading />;
}
