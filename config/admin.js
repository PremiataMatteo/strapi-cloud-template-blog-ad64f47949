module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
  preview: {
    enabled: true,
    config: {
      allowedOrigins: env("CLIENT_URL"),
      async handler(uid, { documentId, locale, status }) {
        const document = await strapi.documents(uid).findOne({ documentId });

        // Costruisci l'URL in base allo status
        if (status === "draft") {
          return `${env("CLIENT_URL")}/api/preview?secret=${env('STRAPI_PREVIEW_SECRET')}&documentId=${documentId}&locale=${locale}&status=${status}`;
        }

        // Pubblicato → URL diretto
        const slug = document?.slug ?? documentId;
        return `${env("CLIENT_URL")}/${slug}`;
      },
    },
  },
});
