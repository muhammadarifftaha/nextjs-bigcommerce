'use client';

import { HOME_PAGE_BANNERS } from '@/apollo/query';
import { useQuery } from '@apollo/client';
import React from 'react';

// Client

export default function ClientFetch() {
  const { loading, error, data } = useQuery(HOME_PAGE_BANNERS);

  return (
    <div className="flex h-[500px] items-center justify-center">
      {loading ? (
        'Loading....'
      ) : (
        <div className="flex flex-col">
          <p>heading: {data?.homePageBanners?.heading}</p>
          <p>subheading: {data?.homePageBanners?.subheading}</p>
        </div>
      )}
    </div>
  );
}
