import localFont from "next/font/local";
import "./globals.css";

import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import ThemeProvider  from "@/lib/ThemeProvider";
import ThemeSwitcher from "@/components/ThemeSwitcher";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "LogiSmart",
  description: "LogiSmart - AI Powered Inventory Management System and smart Logistics & Supply Chain Management System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          
        >
        <SidebarProvider  style={{
    "--sidebar-width": "15rem",
    "--sidebar-width-mobile": "20rem",
  }}>
          <AppSidebar collapsible="icon" className="bg-white "/>
          <SidebarTrigger />
          <ThemeSwitcher className="mb-5"/> 
          

          {children}
        </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
