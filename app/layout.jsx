import GlobalNav from "@components/GlobalNav";
import ReduxProvider from "@components/ReduxProvider";
import "@styles/globals.css";

export const metadata = {
  title: "lws book store ",
  description: "lws redux batch-2 book store, module 8 assignment ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <ReduxProvider> */}
        <GlobalNav />
        {children}
        {/* </ReduxProvider> */}
      </body>
    </html>
  );
}
