import '@/style/globals.css'
import { font } from '@/style/font'

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <body className={`h-screen ${font.variable}`}>{children}</body>
        </html>
    )
}
