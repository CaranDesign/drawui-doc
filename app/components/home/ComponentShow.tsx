import ShowButtonProperties from "./ShowButtonProperties";
import ShowIconButton from "./ShowIconButton";
import ShowCollapse from "./ShowCollapse";
import ShowDivider from "./ShowDivider";
import ShowButton from "./ShowButton";
import ShowCard from "./ShowCard";

export default function ComponentShow() {

 
  return (
    <div className="p-8">
      <h1 className="text-3xl text-center font-bold mb-8">Drawui Components</h1>

      <div className="flex flex-col gap-4 space-y-4 text-center items-center">
        
        Buttons Exmaples
        <ShowButton />
        
        In different Sizes, Colors and Fillings...
        <ShowButtonProperties />
        
        Icon Button
        <ShowIconButton/>
        
        Cards
        <ShowCard/>

        Collapse
        <ShowCollapse/>

        Divider
        <ShowDivider/>
      </div>
    </div>
  );
}
