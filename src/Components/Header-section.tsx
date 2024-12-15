import { Children } from "react";


interface HeadresctionProps {
    children: React.ReactNode;
    className?: string
  }


export default function Headersection({children, className}: HeadresctionProps) {
  return (
    <div>
<p className={`text-4xl font-semibold ${className}`}>
        {children}
       </p>
    </div>
  )
}
