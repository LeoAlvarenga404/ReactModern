import { ContainerStudyCards } from "../components/ContainerStudyCards";
import { Sidebar } from "../components/Sidebar";

export function Home() {

  return (
    <div className="min-h-screen bg-zinc-900 flex">
        <Sidebar />
        <div className="p-10">
          <ContainerStudyCards/>
        </div>
    </div>
    
  );
}









