import type { AppProps } from "next/app";
import { AppCaeqThemeProvider } from "@/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppCaeqThemeProvider>
      <Component {...pageProps} />
    </AppCaeqThemeProvider>
  );
}
