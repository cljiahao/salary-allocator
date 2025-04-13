import Charts from "@/components/calculator/charts";
import InputForm from "@/components/calculator/input-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Overview",
};

export default async function Page() {
  return (
    <main className="flex h-full flex-col">
      <h1 className="flex pb-6 text-xl md:pb-10 md:text-3xl">
        Salary Allocation Calculator
      </h1>
      <div className="flex-1">
        <div className="hw-full grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          <InputForm className="lg:col-span-2" />
          <div className="grid grid-rows-2 gap-6 lg:col-span-3">
            <Charts />
            <Charts />
          </div>
        </div>
      </div>
    </main>
  );
}
