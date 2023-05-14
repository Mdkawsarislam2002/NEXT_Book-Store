import GlobalNav from "@components/GlobalNav";
import ReduxProvider from "@Redux/ReduxProvidor";

//  styles
import "@styles/globals.css";
import "@styles/style.scss";
import Link from "next/link";

export const metadata = {
  title: "lws book store ",
  description: "lws redux batch-2 book store, module 8 assignment ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <GlobalNav />

          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
