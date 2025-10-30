import { getPageConfig } from '@/data/get-page-data';
import { AdminPanel } from './admin-panel';

const Page = () => {
  const pageData = getPageConfig();

  return <AdminPanel initialData={pageData} />;
};

export default Page;
