module.exports = ({ env }) => ({
  'preview-button': {
    config: {
      contentTypes: [
        {
          uid: 'api::home.home', // Sostituisci con l'UID del tuo Content Type
          draft: {
            url: `${env('CLIENT_URL')}/api/preview`,
            query: {
              locale: '{locale}',
              secret: env('STRAPI_PREVIEW_SECRET'),
            },
          },
          published: {
            url: `${env('CLIENT_URL')}/{locale}`,
          },
        },
      ],
    },
  },
});
