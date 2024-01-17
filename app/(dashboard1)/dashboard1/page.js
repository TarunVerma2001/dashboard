import DashboardComps from "./_components/dashboard-comps";

export const metadata = {
  title: "Dashboard 1",
  description: "Authentication forms built using the components.",
};

export default function Dashboard1() {
  return (
    <main className="h-full ">
      <DashboardComps title={"Dashboard"} />
    </main>
  );
}
