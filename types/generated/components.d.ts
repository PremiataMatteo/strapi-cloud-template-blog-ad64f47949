import type { Schema, Struct } from '@strapi/strapi';

export interface HeroHeroSliding extends Struct.ComponentSchema {
  collectionName: 'components_hero_hero_slidings';
  info: {
    displayName: 'HeroSliding';
  };
  attributes: {
    direction: Schema.Attribute.Enumeration<['top', 'bottom']>;
    text: Schema.Attribute.String;
  };
}

export interface HeroHeroTag extends Struct.ComponentSchema {
  collectionName: 'components_hero_hero_tags';
  info: {
    displayName: 'HeroTag';
  };
  attributes: {
    hasMarker: Schema.Attribute.Boolean;
    position: Schema.Attribute.Enumeration<['left', 'right']>;
    textDown: Schema.Attribute.String;
    textUp: Schema.Attribute.String;
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
    firstTitle: Schema.Attribute.Component<'hero.hero-sliding', false>;
    secondTitle: Schema.Attribute.Component<'hero.hero-sliding', false>;
    titlePrefix: Schema.Attribute.Component<'hero.hero-tag', false>;
    titleSuffix: Schema.Attribute.Component<'hero.hero-tag', false>;
    topLeft: Schema.Attribute.Component<'hero.hero-tag', false>;
    topRight: Schema.Attribute.Component<'hero.hero-tag', false>;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'hero.hero-sliding': HeroHeroSliding;
      'hero.hero-tag': HeroHeroTag;
      'home.hero': HomeHero;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
