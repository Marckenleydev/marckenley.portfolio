import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Marckenley Dorsainvil",
  "jobTitle": "Full-Stack Developer",
  "url": "https://www.marcshowcase.com",
  "sameAs": [
    "https://github.com/Marckenleydev",
    "https://www.linkedin.com/in/marckenley-dorsainvil",
    "https://twitter.com/yourprofile"
  ],
  "worksFor": {
    "@type": "Organization",
    "name": "Comnerds Web Technology and Design Tic. Ltd. Şti."
  },
  "alumniOf": {
    "@type": "CollegeOrUniversity",
    "name": "Istanbul Aydin University"
  },
  "description": "Experienced Full-Stack Developer skilled in Java (Spring Boot), Node.js (TypeScript, JavaScript), and React, specializing in building scalable and robust web applications.",
  "knowsAbout": [
    "Java", "Spring Boot", "MongoDB", "React", "AWS", "Microservices","NodeJS", "JavaScript", "TypeScript", 
  ]
};

export const metadata: Metadata = {
  title: "Marckenley's Portfolio",
  description: "Spring Boot & Next.js Portfolio",
  keywords: "Full-Stack Developer, Java, Spring Boot, React, MongoDB, AWS,NodeJS, JavaScript,Typescript",
  robots: "index, follow",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="spring-boot-img.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
