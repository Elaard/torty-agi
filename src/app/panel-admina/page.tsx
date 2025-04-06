import { getPageConfig } from '@/data/get-page-data';
import { AdminPanel } from './admin-panel';

const Page = async () => {
  const pageData = await getPageConfig('fetching from admin page');

  return <AdminPanel initialData={pageData} />;
};

export default Page;
