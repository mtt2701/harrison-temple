import './globals.css'
import { UnifrakturCook} from 'next/font/google'
import Navbar from "./components/Navbar"

const inter = UnifrakturCook({ subsets: ['latin'], weight: "700" })

export const metadata = {
  title: 'Harrison Temple',
  description: 'Unofficial Home of (the) Harrison Temple',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`min-h-screen bg-white dark:bg-black ${inter.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}