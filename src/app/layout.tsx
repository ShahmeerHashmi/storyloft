
import "./globals.css";
import Navbar from "./Navbar/Navbar";
import { ClerkProvider} from "@clerk/nextjs";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   
    
  <ClerkProvider>
   <html lang="en">
      <body >
        
          
      
        
        <Navbar />
        {children}
        
      </body>
    </html>
    </ClerkProvider>
    
  );
}
