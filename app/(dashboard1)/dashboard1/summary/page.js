import DashboardComps from "../_components/dashboard-comps";

export const metadata = {
  title: "Summary",
  description: "Authentication forms built using the components.",
};

export default function Summary() {
  return (
    <main className="h-full ">
      <DashboardComps title={"Summary"} />
    </main>
  );
}
