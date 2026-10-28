export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning={true} className="dark">
      <body className="dark">{children}</body>
    </html>
  );
}
