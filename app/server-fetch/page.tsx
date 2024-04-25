import client from '@/apollo/client';
import { GET_ALL_HOME_PAGE_BANNERS } from '@/apollo/query';
import React from 'react';

// Server

export default async function ServerFetch() {
  const data = await getData();

  const collection = data?.homePageBannersCollection?.items;

  return (
    <div className="flex h-[500px] flex-col items-center justify-center ">
      <div className="flex flex-col gap-4">
        {collection?.map((list: any, index: any) => {
          return (
            <div className="flex flex-col">
              data {index.toString()}
              <p>{list?.heading}</p>
              <p>{list?.subheading}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

async function getData() {
  const { data } = await client.query({
    query: GET_ALL_HOME_PAGE_BANNERS
    // fetchPolicy: "cache-first"
    // fetchPolicy: "cache-only"
    // fetchPolicy: "no-cache"
    // fetchPolicy: "network-only"
    // fetchPolicy: "standby"
  });

  return data;
}
