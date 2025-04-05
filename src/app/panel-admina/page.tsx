import { getPageConfig } from '@/data/get-page-data';
import { AdminPanel } from './admin-panel';

// Add export const dynamic = 'force-dynamic' to ensure the page is not statically generated
export const dynamic = 'force-dynamic';

const Page = async () => {
  // Force refresh to always get the latest data in the admin panel
  const pageData = await getPageConfig(true);

  return <AdminPanel initialData={pageData} />;
};

export default Page;
