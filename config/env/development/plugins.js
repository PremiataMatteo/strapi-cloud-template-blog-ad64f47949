module.exports = ({ env }) => ({
  'preview-button': {
    config: {
      contentTypes: [
        {
          uid: 'api::home.home', // Sostituisci con l'UID del tuo Content Type
          draft: {
            url: 'http://localhost:3000/api/preview',
            queryParam: {
              slug: '{slug}', // Prende lo slug dal campo del contenuto
              secret: env('STRAPI_PREVIEW_SECRET'),
            },
          },
          published: {
            url: 'http://localhost:3000/blog/{slug}',
          },
        },
      ],
    },
  },
});