// Outer
import '@/app/ui/global.css';
// Import the subset font
import {inter} from '@/app/ui/fonts'

// Root Layout
// Any UI you add to the root layout will be shared across all pages in your application. 
// You can use the root layout to modify your <html> and <body> tags, and add metadata 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <body>{children}</body> */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
