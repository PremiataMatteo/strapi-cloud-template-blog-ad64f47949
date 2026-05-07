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
    Body: Schema.Attribute.Blocks & Schema.Attribute.Required;
    highlightPrimary: Schema.Attribute.String & Schema.Attribute.Required;
    highlightSecondary: Schema.Attribute.String & Schema.Attribute.Required;
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

export interface HomeOutfitGallery extends Struct.ComponentSchema {
  collectionName: 'components_home_outfit_galleries';
  info: {
    displayName: 'Outfit Gallery';
  };
  attributes: {
    Description: Schema.Attribute.Blocks;
    looks: Schema.Attribute.Relation<'oneToMany', 'api::look.look'>;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
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

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.Required;
    Label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedMenu extends Struct.ComponentSchema {
  collectionName: 'components_shared_menus';
  info: {
    displayName: 'Menu';
  };
  attributes: {
    Links: Schema.Attribute.Component<'shared.link', true>;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
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
    h1: Schema.Attribute.String & Schema.Attribute.Required;
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
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

export interface SharedString extends Struct.ComponentSchema {
  collectionName: 'components_shared_strings';
  info: {
    displayName: 'String';
  };
  attributes: {
    Value: Schema.Attribute.String;
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
      'home.outfit-gallery': HomeOutfitGallery;
      'shared.image': SharedImage;
      'shared.link': SharedLink;
      'shared.menu': SharedMenu;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.string': SharedString;
      'shared.video': SharedVideo;
    }
  }
}
