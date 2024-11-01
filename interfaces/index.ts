// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export type TCarousel = {
  __typename: string;
  bannerOverlineTxt: string;
  bannerTitle: string;
  bannerSubTitle: null;
  bannerBody: string;
  bannerSectionAllignment: string;
  bannerTextColor: string;
  bannerLinkCollection: {
    items: [
      {
        linkText: string;
        linkId: null;
        linkUrl: string;
        linkStyle: string;
        linkClass: null;
        linkNewWindow: false;
      },
    ];
  };
  bannerBgImgDsktp: {
    title: string;
    url: string;
  };
  bannerBgImgMob: {
    title: string;
    url: string;
  };
};

export type TUSP = {
  __typename: string;
  introText: {
    json: {
      nodeType: string;
      data: {};
      content: [
        {
          nodeType: string;
          data: {};
          content: [
            {
              nodeType: string;
              value: string;
              marks: [];
              data: {};
            },
          ];
        },
        {
          nodeType: string;
          data: {};
          content: [
            {
              nodeType: string;
              value: string;
              marks: [];
              data: {};
            },
          ];
        },
      ];
    };
  };
  counter1Prefix: string;
  counter1Suffix: string;
  counter1Text: string;
  counter2Prefix: string;
  counter2Suffix: string;
  counter2Text: string;
  counter3Prefix: string;
  counter3Suffix: string;
  counter3Text: string;
};
