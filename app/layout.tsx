import '@styles/globals.css';

export const metadata = {
  title: 'Nosdajhia',
  description: 'AI propmts to everyone',
};
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
