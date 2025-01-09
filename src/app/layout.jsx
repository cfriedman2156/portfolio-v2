import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata = {
  title: 'Chase Friedman',
  description: 'About Chase Friedman: web developer, content creator, spinal cord injury survivor.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
      {/* <script src="https://kit.fontawesome.com/df6c925d3f.js" crossorigin="anonymous"></script> */}
    </html>
  )
}
