import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Mayur Kamble | Automation Test Engineer', description: 'Portfolio of Mayur Kamble — Automation Test Engineer specializing in Python, HIL, web/API automation, CAN/J1939 and AI-assisted testing.' };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}