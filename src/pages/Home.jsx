import { ContainerStudyCards } from "../components/ContainerStudyCards";
import { Sidebar } from "../components/Sidebar";

export function Home() {

  return (
    <div className="w-full h-full bg-zinc-900 flex">
        <Sidebar />
        <div className="p-10">
          <ContainerStudyCards/>
        </div>
    </div>
    
  );
}









