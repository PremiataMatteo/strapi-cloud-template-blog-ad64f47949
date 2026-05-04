import type { Schema, Struct } from '@strapi/strapi';

export interface HeroHeroTag extends Struct.ComponentSchema {
  collectionName: 'components_hero_hero_tags';
  info: {
    displayName: 'Hero String';
  };
  attributes: {
    firstText: Schema.Attribute.String;
    secondText: Schema.Attribute.String;
  };
}

export interface Home3DVideo extends Struct.ComponentSchema {
  collectionName: 'components_home_3d_videos';
  info: {
    displayName: '3d Video';
  };
  attributes: {
    block_ref_id: Schema.Attribute.String;
    Text1: Schema.Attribute.String & Schema.Attribute.Required;
    Text2: Schema.Attribute.String & Schema.Attribute.Required;
    Text3: Schema.Attribute.String & Schema.Attribute.Required;
    Title: Schema.Attribute.Text & Schema.Attribute.Required;
    Video_3d: Schema.Attribute.Component<'shared.video', false>;
  };
}

export interface HomeHero extends Struct.ComponentSchema {
  collectionName: 'components_home_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    bottomLeft: Schema.Attribute.Component<'hero.hero-tag', false>;
    bottomRight: Schema.Attribute.Component<'hero.hero-tag', false>;
    discover_more: Schema.Attribute.String;
    Title: Schema.Attribute.Component<'hero.hero-tag', false> &
      Schema.Attribute.Required;
    titlePrefix: Schema.Attribute.Component<'hero.hero-tag', false>;
    titleSuffix: Schema.Attribute.Component<'hero.hero-tag', false>;
    topLeft: Schema.Attribute.Component<'hero.hero-tag', false>;
    topRight: Schema.Attribute.Component<'hero.hero-tag', false>;
  };
}

export interface SharedImage extends Struct.ComponentSchema {
  collectionName: 'components_shared_images';
  info: {
    displayName: 'Image';
  };
  attributes: {
    Alt: Schema.Attribute.String & Schema.Attribute.Required;
    Media: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    Media_Mobile: Schema.Attribute.Media<'images' | 'files'>;
  };
}

export interface SharedProduct extends Struct.ComponentSchema {
  collectionName: 'components_shared_products';
  info: {
    displayName: 'Product';
  };
  attributes: {
    handle: Schema.Attribute.String & Schema.Attribute.Required;
    Image: Schema.Attribute.Component<'shared.image', false>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedVideo extends Struct.ComponentSchema {
  collectionName: 'components_shared_videos';
  info: {
    displayName: 'Video';
  };
  attributes: {
    Poster: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    Video_Desktop: Schema.Attribute.Media<'videos' | 'files'> &
      Schema.Attribute.Required;
    Video_Mobile: Schema.Attribute.Media<'files' | 'videos'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'hero.hero-tag': HeroHeroTag;
      'home.3d-video': Home3DVideo;
      'home.hero': HomeHero;
      'shared.image': SharedImage;
      'shared.product': SharedProduct;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.video': SharedVideo;
    }
  }
}
