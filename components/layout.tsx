export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <nav>
        <header>
        <h1>Wow</h1>
        </header>
      </nav>
      <hr/>
      <>
        { children }
      </>
    </>
  );
}