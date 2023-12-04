export const metadata = {
  title: "Games (By Zach)",
  description:
    "A micro-service site showing recent game releases fetched from rawg's api.",
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
export default RootLayout;
