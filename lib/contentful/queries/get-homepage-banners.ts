import { ContentfulBanners } from '@/types/contentful';
import contentfulClient from '..';

export default async function getHomepageBanners() {
  console.log('getHomepageBanners');
  const entries = await contentfulClient
    .getEntries({
      content_type: 'homePageBanners'
    })
    .then((response) => response.items.map((item) => item.fields))
    .catch((err) => console.error(err));
  return entries as unknown as ContentfulBanners[];
}
