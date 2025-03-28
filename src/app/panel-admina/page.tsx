import { getPageConfig } from "@/data/get-page-data";
import AdminPanel from "@/components/admin/AdminPanel";

export default async function Page() {
  const pageData = await getPageConfig();

  return <AdminPanel initialData={pageData} />;
}
