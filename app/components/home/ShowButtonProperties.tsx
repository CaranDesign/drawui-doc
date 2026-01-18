import { DrawuiButton, RadiusToken, SizeToken } from '@carandesign/drawui';
import React from 'react'

export default function ShowButtonProperties() {
   

   type ButtonVariant = {
      size: SizeToken;
      radius?: RadiusToken;
      color?: string;
   };

     const buttonVariants: ButtonVariant[] = [
      { size: "sm", color: "#f87171", radius: "sm" },
      { size: "md", color: "#60a5fa", radius: "md" },
      { size: "lg", color: "#34d399", radius: "lg" },
      { size: "xl", color: "#facc15", radius: "full" },
     ];
   
  return (
    
<div className="flex flex-wrap gap-2 items-center justify-center">
   {buttonVariants.map((btn, i) => (
      <DrawuiButton
      key={i}
      size={btn.size}
      backgroundColor={btn.color}
      >
      {btn.size.toUpperCase()} Button
      </DrawuiButton>
   ))}
</div>
    
  )
}
