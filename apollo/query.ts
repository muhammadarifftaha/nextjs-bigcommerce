import { DocumentNode, gql } from '@apollo/client';

// convert all to camelCase and remove spacing for all content
// Example: Home Page Banners -> homePageBanners

// This graphql will only query a single entry
// id is required

export const HOME_PAGE_BANNERS: DocumentNode = gql`
  query {
    homePageBanners(id: "7EaPTVIWWe0qKcst6hPe2g") {
      heading
      subheading
    }
  }
`;

// This graphql will only query all single entry
// Wrap the variables with a collection
// Add the word collection at the end of the content to query all
// GetAllHomePageBanners can be anything

export const GET_ALL_HOME_PAGE_BANNERS: DocumentNode = gql`
  query GetAllHomePageBanners {
    homePageBannersCollection {
      items {
        heading
        subheading
      }
    }
  }
`;
