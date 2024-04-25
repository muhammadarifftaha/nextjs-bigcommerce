export interface ContentfulBanners {
  heading: string;
  subheading: string;
  text: string;
  order: number;
  backgroundImage: {
    metadata: {
      tags: string[];
    };
    sys: {
      space: {
        sys: {
          type: string;
          linkType: string;
          id: string;
        };
      };
      id: string;
      type: string;
      createdAt: string;
      updatedAt: string;
      environment: {
        sys: {
          id: string;
          type: string;
          linkType: string;
        };
      };
      revision: 1;
      locale: string;
    };
    fields: {
      title: string;
      description: string;
      file: {
        url: string;
        details: {
          size: number;
          image: {
            width: number;
            height: number;
          };
        };
        fileName: string;
        contentType: string;
      };
    };
  };
  label: string;
  linkType: string;
  product: string;
}
