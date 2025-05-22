import Link from 'next/link';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>
        <nav>
          <ul>
            <li>
              <Link href="/">ホーム</Link>
            </li>
            <li>
              <Link href="/about">アバウト</Link>
            </li>
          </ul>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  )
}
