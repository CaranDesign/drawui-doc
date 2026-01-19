import { getRandomColor } from '@/app/lib/GetRandomColor';
import { DrawuiButton, FillStyles, RadiusToken, SizeToken } from '@carandesign/drawui';

export default function ShowButtonProperties() {
   

   type ButtonVariant = {
      size: SizeToken;
      radius?: RadiusToken;
      color?: string;
      fillStyle: FillStyles;
   };

   const buttonVariants: ButtonVariant[] = [
      { size: "sm", color: getRandomColor(), radius: "sm",   fillStyle: "cross-hatch" },
      { size: "md", color: getRandomColor(), radius: "md",   fillStyle: "dashed" },
      { size: "lg", color: getRandomColor(), radius: "lg",   fillStyle: "dots" },
      { size: "xl", color: getRandomColor(), radius: "full", fillStyle: "hachure" },
      { size: "sm", color: getRandomColor(), radius: "sm",   fillStyle: "solid" },
      { size: "md", color: getRandomColor(), radius: "md",   fillStyle: "sunburst" },
      { size: "md", color: getRandomColor(), radius: "lg",   fillStyle: "zigzag" },
      { size: "sm", color: getRandomColor(), radius: "full", fillStyle: "zigzag-line" },
   ];

   
  return (
   <div className="flex flex-wrap gap-2 items-center justify-center">
      {buttonVariants.map((btn, i) => (
         <DrawuiButton
            key={i}
            size={btn.size}
            backgroundColor={btn.color}
            fillStyle={btn.fillStyle}
         >
            {btn.size.toUpperCase()} Button
         </DrawuiButton>
      ))}
   </div>        
  )
}
