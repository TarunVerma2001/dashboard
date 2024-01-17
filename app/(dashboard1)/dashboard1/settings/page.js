import DashboardComps from "../_components/dashboard-comps";

export const metadata = {
  title: "Settings",
  description: "Authentication forms built using the components.",
};

export default function Settings() {
  return (
    <main className="h-full ">
      <DashboardComps title={"Settings"} />
    </main>
  );
}
