import { Button } from "@/components/ui/button";
import AppBarChart from "@/components/AppBarChart";
import AppAreaChart from "@/components/AppAreaChart";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 2xl:grid-cols-5 gap-4">
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 "><AppBarChart /></div>
      <div className="bg-primary-foreground p-4 rounded-lg ">Boxes</div>
      <div className="bg-primary-foreground p-4 rounded-lg ">Boxes</div>
      <div className="bg-primary-foreground p-4 rounded-lg ">Boxes</div>
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2"><AppAreaChart /></div>
      <div className="bg-primary-foreground p-4 rounded-lg ">Boxes</div>
    </div>
  );
}
