import { getPageConfig } from '@/data/get-page-data';
import { AdminPanel } from './admin-panel';

export const dynamic = 'force-dynamic';

const Page = async () => {
  const pageData = await getPageConfig();

  return <AdminPanel initialData={pageData} />;
};

export default Page;
