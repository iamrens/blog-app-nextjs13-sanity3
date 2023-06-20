"use client"

import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";
import { ReactNode } from "react";

type LayoutProps = {
    children: ReactNode;
  };

const Provider = ({children}: LayoutProps) => {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])
    
    if (!mounted) {
        return <>{children}</>
    }
  

  return (
    <ThemeProvider attribute="class">{children}</ThemeProvider>
  )
}

export default Provider