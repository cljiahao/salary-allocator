import GoalsTable from "@/components/calculator/goals";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Overview",
};

export default async function Page() {
  return (
    <main>
      <h1 className="mb-4 text-xl md:text-2xl">Dashboard</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <GoalsTable />
        Form
      </div>
    </main>
  );
}
