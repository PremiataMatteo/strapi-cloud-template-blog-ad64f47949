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
    Background: Schema.Attribute.Media<'images' | 'files'>;
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

export interface HomeHeroText extends Struct.ComponentSchema {
  collectionName: 'components_home_hero_texts';
  info: {
    displayName: 'HeroText';
  };
  attributes: {
    BgDesktop: Schema.Attribute.Media<'images' | 'files'>;
    BgMobile: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Body: Schema.Attribute.Blocks & Schema.Attribute.Required;
    Position: Schema.Attribute.Component<'shared.position', false>;
  };
}

export interface HomeKeyProducts extends Struct.ComponentSchema {
  collectionName: 'components_home_key_products';
  info: {
    displayName: 'KeyProducts';
  };
  attributes: {
    Mask: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    products: Schema.Attribute.Relation<'oneToMany', 'api::product.product'>;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeOutfitGallery extends Struct.ComponentSchema {
  collectionName: 'components_home_outfit_galleries';
  info: {
    displayName: 'Outfit Gallery';
  };
  attributes: {
    block_ref_id: Schema.Attribute.String & Schema.Attribute.Required;
    Description: Schema.Attribute.Blocks;
    galleryTitle: Schema.Attribute.String & Schema.Attribute.Required;
    looks: Schema.Attribute.Relation<'oneToMany', 'api::look.look'>;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeThreeCols extends Struct.ComponentSchema {
  collectionName: 'components_home_three_cols';
  info: {
    displayName: 'ThreeCols';
  };
  attributes: {
    Background: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    FirstText: Schema.Attribute.Blocks & Schema.Attribute.Required;
    Photos: Schema.Attribute.Component<'shared.photos', false> &
      Schema.Attribute.Required;
    SecondText: Schema.Attribute.Blocks & Schema.Attribute.Required;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeViewAll extends Struct.ComponentSchema {
  collectionName: 'components_home_view_alls';
  info: {
    displayName: 'ViewAll';
  };
  attributes: {
    collections: Schema.Attribute.Relation<
      'oneToMany',
      'api::collection.collection'
    >;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ProductProductDetails extends Struct.ComponentSchema {
  collectionName: 'components_product_product_details';
  info: {
    displayName: 'ProductDetails';
  };
  attributes: {
    Body: Schema.Attribute.Blocks;
    Gallery: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    Point: Schema.Attribute.Component<'shared.point', false> &
      Schema.Attribute.Required;
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

export interface SharedPhotos extends Struct.ComponentSchema {
  collectionName: 'components_shared_photos';
  info: {
    displayName: 'Photos';
  };
  attributes: {
    Image1: Schema.Attribute.Media<'files' | 'images', true> &
      Schema.Attribute.Required;
    Image2: Schema.Attribute.Media<'images' | 'files', true> &
      Schema.Attribute.Required;
    Image3: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
  };
}

export interface SharedPoint extends Struct.ComponentSchema {
  collectionName: 'components_shared_points';
  info: {
    displayName: 'Point';
  };
  attributes: {
    left: Schema.Attribute.Integer;
    top: Schema.Attribute.Integer;
  };
}

export interface SharedPosition extends Struct.ComponentSchema {
  collectionName: 'components_shared_positions';
  info: {
    displayName: 'Position';
  };
  attributes: {
    column: Schema.Attribute.Enumeration<['left', 'right', 'center']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'left'>;
    vertical: Schema.Attribute.Enumeration<['top', 'center', 'bottom']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'top'>;
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

export interface SharedSocial extends Struct.ComponentSchema {
  collectionName: 'components_shared_socials';
  info: {
    displayName: 'Social';
  };
  attributes: {
    fb: Schema.Attribute.String;
    ig: Schema.Attribute.String;
    ln: Schema.Attribute.String;
    yt: Schema.Attribute.String;
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
      'home.hero-text': HomeHeroText;
      'home.key-products': HomeKeyProducts;
      'home.outfit-gallery': HomeOutfitGallery;
      'home.three-cols': HomeThreeCols;
      'home.view-all': HomeViewAll;
      'product.product-details': ProductProductDetails;
      'shared.image': SharedImage;
      'shared.link': SharedLink;
      'shared.menu': SharedMenu;
      'shared.photos': SharedPhotos;
      'shared.point': SharedPoint;
      'shared.position': SharedPosition;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.social': SharedSocial;
      'shared.string': SharedString;
      'shared.video': SharedVideo;
    }
  }
}
