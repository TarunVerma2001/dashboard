import DashboardComps from "../_components/dashboard-comps";

export const metadata = {
  title: "Expenses",
  description: "Authentication forms built using the components.",
};

export default function Expenses() {
  return (
    <main className="h-full ">
      <DashboardComps title={"Expenses"} />
    </main>
  );
}
