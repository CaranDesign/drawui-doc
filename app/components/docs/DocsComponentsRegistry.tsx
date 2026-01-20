// src/docs/componentRegistry.tsx
'use client'

import React from 'react';
import { 
   DrawuiCollapse,
   DrawuiDivider,
  DrawuiInput,
  IconBell, 
  IconHome, 
  IconMinus, 
  IconPlus, 
  IconSearch, 
  IconSettings, 
} from '@carandesign/drawui';
import type { DrawuiTheme, StrokeWeight, RadiusToken, SizeToken, FillStyles } from '@carandesign/drawui';
import { DrawuiButton, DrawuiCard, DrawuiIconButton, IconUser } from '@carandesign/drawui';
import { getRandomColor } from '@/app/lib/GetRandomColor';
import ShowDivider from '../home/ShowDivider';
import ShowCollapse from '../home/ShowCollapse';
import ShowIcon from '../home/ShowIcon';

// ============================================
// GETTING STARTED DEMOS
// ============================================

const IntroDemo: React.FC = () => {
  return (
    <div className='flex gap-5 flex-wrap'>
      <DrawuiButton size="md">Sketchy Button</DrawuiButton>
      <DrawuiCard
        width={250}
        header={<h4 className='p-2'>Card Title</h4>}
        footer={<h4 className='p-2'>Card Footer</h4>}
      >
        <p className='p-2'>A hand-drawn card component</p>
      </DrawuiCard>
    </div>
  );
};


// ============================================
// THEMING DEMOS
// ============================================

const DefaultThemeDisplay: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <pre style={{ 
        backgroundColor: '#f5f5f5', 
        padding: '16px', 
        borderRadius: '8px',
        overflow: 'auto'
      }}>
{`{
  stroke: {
    thin: { color: "#333", width: 1.5 },
    medium: { color: "#333", width: 2.5 },
    thick: { color: "#333", width: 4 },
  },
  roughness: {
    roughness: 3,
    bowing: 2,
  },
  fill: {
    background: "#ccccccff",
  },
  radius: {
    none: 0,
    sm: 6,
    md: 10,
    lg: 16,
    full: 30,
  },
  buttonSize: {
    sm: { width: 100, height: 40, fontSize: 12 },
    md: { width: 130, height: 50, fontSize: 15 },
    lg: { width: 150, height: 60, fontSize: 18 },
    xl: { width: 170, height: 70, fontSize: 20 },
  },
  inputSize: {
    sm: { height: 32, fontSize: 12, paddingX: 8 },
    md: { height: 40, fontSize: 14, paddingX: 12 },
    lg: { height: 48, fontSize: 16, paddingX: 16 },
    xl: { height: 48, fontSize: 16, paddingX: 16 },
  },
}`}
      </pre>
    </div>
  );
};


export const QuickStartDemo: React.FC = () => (
  <div style={{ display: 'flex', gap: 12 }}>
    <DrawuiButton>Click me!</DrawuiButton>
  </div>
);

const DrawuiInputPropsTable: React.FC = () => {
  return (
    <div className='max-w-md sm:max-w-full overflow-x-scroll'>
      <table className='table-auto'>
        <thead>
          <tr style={{ borderBottom: '2px solid #333' }}>
            <th className="p-3 text-left">Prop</th>
            <th className="p-3 text-left">Type</th>
            <th className="p-3 text-left">Default</th>
            <th className="p-3 text-left">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr className='border-b-1 border-gray-300'>
            <td className="p-3">strokeWeight</td>
            <td className="p-3">thin | medium | thick</td>
            <td className="p-3">medium</td>
            <td className="p-3">Border thickness of the sketchy outline</td>
          </tr>

          <tr className='border-b-1 border-gray-300'>
            <td className="p-3">radius</td>
            <td className="p-3">none | sm | md | lg | full</td>
            <td className="p-3">md</td>
            <td className="p-3">Corner roundness of the input shape</td>
          </tr>

          <tr className='border-b-1 border-gray-300'>
            <td className="p-3">inputSize</td>
            <td className="p-3">sm | md | lg | xl</td>
            <td className="p-3">md</td>
            <td className="p-3">Controls height, font size and horizontal padding</td>
          </tr>

          <tr className='border-b-1 border-gray-300'>
            <td className="p-3">backgroundColor</td>
            <td className="p-3">string</td>
            <td className="p-3">theme.fill.background</td>
            <td className="p-3">Input background fill color</td>
          </tr>

          <tr className='border-b-1 border-gray-300'>
            <td className="p-3">fillStyle</td>
            <td className="p-3">FillStyles</td>
            <td className="p-3">undefined</td>
            <td className="p-3">Rough.js fill pattern used inside the input</td>
          </tr>

          <tr className='border-b-1 border-gray-300'>
            <td className="p-3">className</td>
            <td className="p-3">string</td>
            <td className="p-3">undefined</td>
            <td className="p-3">Custom CSS class applied to the wrapper</td>
          </tr>

          <tr className='border-b-1 border-gray-300'>
            <td className="p-3">style</td>
            <td className="p-3">React.CSSProperties</td>
            <td className="p-3">undefined</td>
            <td className="p-3">Inline styles for the input wrapper</td>
          </tr>

          <tr className='border-b-1 border-gray-300'>
            <td className="p-3">…input props</td>
            <td className="p-3">React.InputHTMLAttributes</td>
            <td className="p-3">-</td>
            <td className="p-3">All native HTML input attributes are supported</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};


const StrokeTokensTable: React.FC = () => {
  const strokes: StrokeWeight[] = ['thin', 'medium', 'thick'];
  
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse', margin: '20px 0' }}>
      <thead>
        <tr style={{ borderBottom: '2px solid #333' }}>
          <th className="p-3 text-left">Token</th>
          <th className="p-3 text-left">Width</th>
          <th className="p-3 text-left">Color</th>
          <th className="p-3 text-left">Preview</th>
        </tr>
      </thead>
      <tbody>
        {strokes.map((weight) => (
          <tr key={weight} className='border-b-1 border-gray-300'>
            <td className="p-3">{weight}</td>
            <td className="p-3">
              {weight === 'thin' && '1.5px'}
              {weight === 'medium' && '2.5px'}
              {weight === 'thick' && '4px'}
            </td>
            <td className="p-3">#333</td>
            <td className="p-3">
              <DrawuiButton size="sm" strokeWeight={weight}>Button</DrawuiButton>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const RoughnessTokensTable: React.FC = () => {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse', margin: '20px 0' }}>
      <thead>
        <tr style={{ borderBottom: '2px solid #333' }}>
          <th className="p-3 text-left">Property</th>
          <th className="p-3 text-left">Default Value</th>
          <th className="p-3 text-left">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr className='border-b-1 border-gray-300'>
          <td className="p-3">roughness</td>
          <td className="p-3">3</td>
          <td className="p-3">Controls line irregularity</td>
        </tr>
        <tr className='border-b-1 border-gray-300'>
          <td className="p-3">bowing</td>
          <td className="p-3">2</td>
          <td className="p-3">Controls line curvature</td>
        </tr>
      </tbody>
    </table>
  );
};

const RadiusTokensTable: React.FC = () => {
  const radii: RadiusToken[] = ['none', 'sm', 'md', 'lg', 'full'];
  const values = { none: 0, sm: 6, md: 10, lg: 16, full: 30 };
  
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse', margin: '20px 0' }}>
      <thead>
        <tr style={{ borderBottom: '2px solid #333' }}>
          <th className="p-3 text-left">Token</th>
          <th className="p-3 text-left">Value (px)</th>
          <th className="p-3 text-left">Preview</th>
        </tr>
      </thead>
      <tbody>
        {radii.map((radius) => (
          <tr key={radius} className='border-b-1 border-gray-300'>
            <td className="p-3">{radius}</td>
            <td className="p-3">{values[radius]}</td>
            <td className="p-3">
              <DrawuiButton size="sm" radius={radius}>Button</DrawuiButton>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const SizeTokensTable: React.FC = () => {
  const sizes: SizeToken[] = ['sm', 'md', 'lg', 'xl'];
  
  return (
    <div style={{ margin: '20px 0' }}>
      <h4>Button Sizes</h4>
     <div className='max-w-md sm:max-w-full overflow-x-scroll'>
        <table className='table-auto'>
          <thead>
            <tr style={{ borderBottom: '2px solid #333' }}>
              <th className='p-3 text-left'>Token</th>
              <th className='p-3 text-left'>Width</th>
              <th className='p-3 text-left'>Height</th>
              <th className='p-3 text-left'>Font Size</th>
              <th className='p-3 text-left'>Preview</th>
            </tr>
          </thead>
          <tbody>
            {sizes.map((size) => (
              <tr key={size} className='border-b-1 border-gray-300'>
                <td className="p-3">{size}</td>
                <td className="p-3">
                  {size === 'sm' && '100px'}
                  {size === 'md' && '130px'}
                  {size === 'lg' && '150px'}
                  {size === 'xl' && '170px'}
                </td>
                <td className="p-3">
                  {size === 'sm' && '40px'}
                  {size === 'md' && '50px'}
                  {size === 'lg' && '60px'}
                  {size === 'xl' && '70px'}
                </td>
                <td className="p-3">
                  {size === 'sm' && '12px'}
                  {size === 'md' && '15px'}
                  {size === 'lg' && '18px'}
                  {size === 'xl' && '20px'}
                </td>
                <td className="p-3">
                  <DrawuiButton size={size}>Button</DrawuiButton>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
     </div>

      <h4>Input Sizes</h4>
      <div className='max-w-md sm:max-w-full overflow-x-scroll'>
        <table className='table-auto'>
          <thead>
            <tr style={{ borderBottom: '2px solid #333' }}>
              <th className="p-3 text-left">Token</th>
              <th className="p-3 text-left">Height</th>
              <th className="p-3 text-left">Font Size</th>
              <th className="p-3 text-left">Padding X</th>
            </tr>
          </thead>
          <tbody>
            {sizes.map((size) => (
              <tr key={size} className='border-b-1 border-gray-300'>
                <td className="p-3">{size}</td>
                <td className="p-3">
                  {size === 'sm' && '32px'}
                  {size === 'md' && '40px'}
                  {size === 'lg' && '48px'}
                  {size === 'xl' && '48px'}
                </td>
                <td className="p-3">
                  {size === 'sm' && '12px'}
                  {size === 'md' && '14px'}
                  {size === 'lg' && '16px'}
                  {size === 'xl' && '16px'}
                </td>
                <td className="p-3">
                  {size === 'sm' && '8px'}
                  {size === 'md' && '12px'}
                  {size === 'lg' && '16px'}
                  {size === 'xl' && '16px'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const FillStylesDemo: React.FC = () => {
  const fillStyles: FillStyles[] = [
    'hachure', 'solid', 'zigzag', 'cross-hatch', 
    'dots', 'sunburst', 'dashed', 'zigzag-line'
  ];
  
  return (
    <div style={{ padding: '20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '16px' }}>
      {fillStyles.map((style) => (
        <div key={style} className='text-center'>
          <DrawuiButton size="md" fillStyle={style}>
            Button
          </DrawuiButton>
          <p style={{ marginTop: '8px', fontSize: '12px' }}>{style}</p>
        </div>
      ))}
    </div>
  );
};

// ============================================
// BUTTON COMPONENT DEMOS
// ============================================

const ButtonDemo: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <DrawuiButton size="md" onClick={() => alert('Button clicked!')}>
        Click Me!
      </DrawuiButton>
    </div>
  );
};

const ButtonPropsTable: React.FC = () => {
  return (
    <div className='max-w-md sm:max-w-full overflow-x-scroll'>
      <table className='table-auto'>
        <thead>
          <tr style={{ borderBottom: '2px solid #333' }}>
            <th className='p-3 text-left'>Prop</th>
            <th className='p-3 text-left'>Type</th>
            <th className='p-3 text-left'>Default</th>
            <th className='p-3 text-left'>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr className='border-b-1 border-gray-300'>
            <td className="p-3">strokeWeight</td>
            <td className="p-3">thin | medium | thick</td>
            <td className="p-3">medium</td>
            <td className="p-3">Border thickness</td>
          </tr>
          <tr className='border-b-1 border-gray-300'>
            <td className="p-3">radius</td>
            <td className="p-3">none | sm | md | lg | full</td>
            <td className="p-3">md</td>
            <td className="p-3">Corner roundness</td>
          </tr>
          <tr className='border-b-1 border-gray-300'>
            <td className="p-3">size</td>
            <td className="p-3">sm | md | lg | xl</td>
            <td className="p-3">sm</td>
            <td className="p-3">Button size</td>
          </tr>
          <tr className='border-b-1 border-gray-300'>
            <td className="p-3">backgroundColor</td>
            <td className="p-3">string</td>
            <td className="p-3">theme.fill.background</td>
            <td className="p-3">Background color</td>
          </tr>
          <tr className='border-b-1 border-gray-300'>
            <td className="p-3">fillStyle</td>
            <td className="p-3">FillStyles</td>
            <td className="p-3">undefined</td>
            <td className="p-3">Rough.js fill pattern</td>
          </tr>
          <tr className='border-b-1 border-gray-300'>
            <td className="p-3">children</td>
            <td className="p-3">React.ReactNode</td>
            <td className="p-3">-</td>
            <td className="p-3">Button content</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const ButtonExamples: React.FC = () => {
  return (
    <div className='flex gap-5 flex-wrap'>
      <div className='flex flex-col items-center gap-2'>
        <h4>Default Button</h4>
        <DrawuiButton>Default</DrawuiButton>
      </div>
      
      <div className='flex flex-col items-center gap-2'>
        <h4>Custom Background</h4>
        <DrawuiButton backgroundColor={getRandomColor()}>Red Button</DrawuiButton>
      </div>
      
      <div className='flex flex-col items-center gap-2'>
        <h4>With Fill Style</h4>
        <DrawuiButton fillStyle="zigzag" backgroundColor={getRandomColor()}>
          Zigzag Fill
        </DrawuiButton>
      </div>
    </div>
  );
};

const ButtonSizesDemo: React.FC = () => {
  const sizes: SizeToken[] = ['sm', 'md', 'lg', 'xl'];
  
  return (
    <div className='flex flex-wrap gap-5 items-end'>
      {sizes.map((size) => (
        <DrawuiButton key={size} size={size}>
          {size.toUpperCase()}
        </DrawuiButton>
      ))}
    </div>
  );
};

const ButtonStrokeDemo: React.FC = () => {
  const strokes: StrokeWeight[] = ['thin', 'medium', 'thick'];
  
  return (
    <div style={{ padding: '20px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      {strokes.map((weight) => (
        <DrawuiButton key={weight} strokeWeight={weight} size="md">
          {weight}
        </DrawuiButton>
      ))}
    </div>
  );
};

const ButtonRadiusDemo: React.FC = () => {
  const radii: RadiusToken[] = ['none', 'sm', 'md', 'lg', 'full'];
  
  return (
    <div style={{ padding: '20px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      {radii.map((radius) => (
        <DrawuiButton key={radius} radius={radius} size="md">
          {radius}
        </DrawuiButton>
      ))}
    </div>
  );
};

const ButtonFillDemo: React.FC = () => {
  const fills: FillStyles[] = ['hachure', 'solid', 'zigzag', 'cross-hatch','dashed','dots','sunburst','zigzag-line'];
  
  return (
    <div style={{ padding: '20px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      {fills.map((fill) => (
        <DrawuiButton key={fill} fillStyle={fill} size="md" backgroundColor="#95e1d3">
          {fill}
        </DrawuiButton>
      ))}
    </div>
  );
};

// ============================================
// ICON BUTTON DEMOS
// ============================================

const IconButtonDemo: React.FC = () => {
  return (
    <div style={{ padding: '20px', display: 'flex', gap: '12px' }}>
      <DrawuiIconButton icon={<IconSearch />}/>
    </div>
  );
};

const IconButtonPropsTable: React.FC = () => {
  return (
    <div className='max-w-md sm:max-w-full overflow-x-scroll'>
      <table  className='table-auto'>
        <thead>
          <tr style={{ borderBottom: '2px solid #333' }}>
            <th className="p-3 text-left">Prop</th>
            <th className="p-3 text-left">Type</th>
            <th className="p-3 text-left">Default</th>
            <th className="p-3 text-left">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr className='border-b-1 border-gray-300'>
            <td className="p-3">strokeWeight</td>
            <td className="p-3">thin | medium | thick</td>
            <td className="p-3">medium</td>
            <td className="p-3">Border thickness</td>
          </tr>
          <tr className='border-b-1 border-gray-300'>
            <td className="p-3">radius</td>
            <td className="p-3">none | sm | md | lg | full</td>
            <td className="p-3">md</td>
            <td className="p-3">Corner roundness</td>
          </tr>
          <tr className='border-b-1 border-gray-300'>
            <td className="p-3">backgroundColor</td>
            <td className="p-3">string</td>
            <td className="p-3">theme.fill.background</td>
            <td className="p-3">Background color</td>
          </tr>
          <tr className='border-b-1 border-gray-300'>
            <td className="p-3">fillStyle</td>
            <td className="p-3">FillStyles</td>
            <td className="p-3">undefined</td>
            <td className="p-3">Rough.js fill pattern</td>
          </tr>
          <tr className='border-b-1 border-gray-300'>
            <td className="p-3">children</td>
            <td className="p-3">React.ReactNode</td>
            <td className="p-3">-</td>
            <td className="p-3">Icon component</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const IconButtonExamples: React.FC = () => {
  return (
    <div className='flex gap-3 flex-wrap'>
      <div className='flex flex-col items-center gap-2'>
        <h4>With Different Icons</h4>
        <div className='flex gap-2'>
          <DrawuiIconButton icon={<IconBell />}></DrawuiIconButton>
        </div>
      </div>
      
      <div className='flex flex-col items-center gap-2'>
        <h4>Custom Colors and Size</h4>
        <div className='flex flex-col items-center gap-2'>
          <DrawuiIconButton
            backgroundColor={getRandomColor()}
            icon={<IconSearch />}
            size='lg'
          />
        </div>
      </div>
    </div>
  );
};

const InputExamples: React.FC = () => {
  return (
    <DrawuiInput placeholder='Coming Soon' inputSize={'lg'}/>
  )
}

// ============================================
// CARD DEMOS
// ============================================

const CardPropsTable: React.FC = () => {
  return (
    <div className='max-w-md sm:max-w-full overflow-x-scroll'>
      <table className='table-auto'>
        <thead>
          <tr style={{ borderBottom: '2px solid #333' }}>
            <th className="p-3 text-left">Prop</th>
            <th className="p-3 text-left">Type</th>
            <th className="p-3 text-left">Default</th>
            <th className="p-3 text-left">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-3">width</td>
            <td className="p-3">number</td>
            <td className="p-3">200</td>
            <td className="p-3">Card width in px</td>
          </tr>
          <tr>
            <td className="p-3">height</td>
            <td className="p-3">number</td>
            <td className="p-3">undefined</td>
            <td className="p-3">height in px optional, default inherited from content (children)</td>
          </tr>
          <tr>
            <td className="p-3">header</td>
            <td className="p-3">ReactNode</td>
            <td className="p-3">undefined</td>
            <td className="p-3">Optional header content</td>
          </tr>
          <tr>
            <td className="p-3">footer</td>
            <td className="p-3">ReactNode</td>
            <td className="p-3">undefined</td>
            <td className="p-3">Optional footer content</td>
          </tr>
          <tr>
            <td className="p-3">backgroundColor</td>
            <td className="p-3">string</td>
            <td className="p-3">theme.fill.background</td>
            <td className="p-3">Card background color</td>
          </tr>
        </tbody>
      </table>
   </div>
  );
};

const CardExamples: React.FC = () => {
  return (
    <div style={{ padding: '20px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <DrawuiCard
        width={220}
        height={120}
        backgroundColor={getRandomColor()}
        fillStyle='zigzag-line'
      >
        <div className='p-2'>220x120</div>
      </DrawuiCard>

      <DrawuiCard
        width={220}
        header={<h4 className='p-2'>Header</h4>}
        footer={<h4 className='p-2'><DrawuiButton>Action!</DrawuiButton></h4>}
        backgroundColor='transparent'
      >
       <div className='p-2 h-30'> Dynamic Height from content</div>
      </DrawuiCard>

      <DrawuiCard
        width={220}
        height={120}
        backgroundColor={getRandomColor()}
      >
        <p className='p-7'>Custom Color</p>
      </DrawuiCard>
    </div>
  );
};


const DividerDemo: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <p>Above divider</p>
      <DrawuiDivider />
      <p>Below divider</p>
    </div>
  );
};

const DividerPropsTable: React.FC = () => {
  return (
    <div className='max-w-md sm:max-w-full overflow-x-scroll'>
        <table className='table-auto'>
          <thead>
            <tr style={{ borderBottom: '2px solid #333' }}>
              <th className="p-3 text-left">Prop</th>
              <th className="p-3 text-left">Type</th>
              <th className="p-3 text-left">Default</th>
              <th className="p-3 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3">strokeWeight</td>
              <td className="p-3">thin | medium | thick</td>
              <td className="p-3">thin</td>
              <td className="p-3">Divider thickness</td>
            </tr>
            <tr>
              <td className="p-3">width</td>
              <td className="p-3">number</td>
              <td className="p-3">undefined</td>
              <td className="p-3">Define width in px of the divider</td>
            </tr>
            <tr>
              <td className="p-3">vertical</td>
              <td className="p-3"></td>
              <td className="p-3">undefined</td>
              <td className="p-3">With vertical props width become height</td>
            </tr>
          </tbody>
        </table>
    </div>
  );
};

const DividerExample: React.FC = () => {
  return (
    <ShowDivider/>
  )
}

const CollapseDemo: React.FC = () => {
  return (
      <DrawuiCollapse header={<span className='px-5'>Click to expand</span>}>
       <div className='mt-3'>
          <DrawuiCard>
            <p className='p-5'>This is the expandable content with a Card</p>
          </DrawuiCard>
       </div>
      </DrawuiCollapse>
  );
};

const CollapseExamples: React.FC = () => {
  return (
    <ShowCollapse/>
  )
}

const CollapsePropsTable: React.FC = () => {
  return (
    <div className='max-w-md sm:max-w-full overflow-x-scroll'>
      <table className='table-auto'>
        <thead>
          <tr style={{ borderBottom: '2px solid #333' }}>
            <th className="p-3 text-left">Prop</th>
            <th className="p-3 text-left">Type</th>
            <th className="p-3 text-left">Default</th>
            <th className="p-3 text-left">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-3">header</td>
            <td className="p-3">ReactNode</td>
            <td className="p-3">-</td>
            <td className="p-3">Collapse header title</td>
          </tr>
          <tr>
            <td className="p-3">children</td>
            <td className="p-3">ReactNode</td>
            <td className="p-3">-</td>
            <td className="p-3">Collapsible content</td>
          </tr>
          <tr>
            <td className="p-3">width</td>
            <td className="p-3">number</td>
            <td className="p-3">-</td>
            <td className="p-3">Width of the collapsable item in px</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const IconsGallery: React.FC = () => {
  return <ShowIcon/>
}


export const componentRegistry = {
  QuickStartDemo: QuickStartDemo,
  IntroDemo: IntroDemo,
  DefaultThemeDisplay: DefaultThemeDisplay,
  StrokeTokensTable: StrokeTokensTable,
  RoughnessTokensTable: RoughnessTokensTable,
  RadiusTokensTable: RadiusTokensTable,
  SizeTokensTable: SizeTokensTable,
  FillStylesDemo: FillStylesDemo,
  ButtonDemo: ButtonDemo,
  ButtonPropsTable: ButtonPropsTable,
  ButtonExamples: ButtonExamples,
  ButtonSizesDemo: ButtonSizesDemo,
  ButtonStrokeDemo: ButtonStrokeDemo,
  ButtonRadiusDemo: ButtonRadiusDemo,
  ButtonFillDemo: ButtonFillDemo,
  IconButtonDemo: IconButtonDemo,
  IconButtonPropsTable: IconButtonPropsTable,
  IconButtonExamples: IconButtonExamples,
  InputExamples:InputExamples,
  CardExamples: CardExamples,
  CardPropsTable: CardPropsTable,
  DividerDemo: DividerDemo,
  DividerPropsTable: DividerPropsTable,
  DividerExample:DividerExample,
  CollapseDemo: CollapseDemo,
  DrawuiInputPropsTable: DrawuiInputPropsTable,
  CollapseExamples: CollapseExamples,
  CollapsePropsTable: CollapsePropsTable,
  IconsGallery:IconsGallery,
};

