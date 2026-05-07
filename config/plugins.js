module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        baseUrl: env('LINODE_PUBLIC_URL'),
        s3Options: {
          credentials: {
            accessKeyId: env('LINODE_ACCESS_KEY'),
            secretAccessKey: env('LINODE_SECRET_KEY'),
          },
          region: env('LINODE_REGION'),
          endpoint: env('LINODE_ENDPOINT'),
          forcePathStyle: true,
          params: {
            Bucket: env('LINODE_BUCKET'),
            ACL: undefined,
          },
        },
      },
     security: {
        sizeLimit: 100 * 1024 * 1024,
        allowedTypes: [
          "image/jpeg",
          "image/png",
          "image/svg+xml",
          "image/webp",
          "video/mp4",
          "video/quicktime",
          "video/x-msvideo"
        ],
      },
      // -------------------------------------------------------
    },
  },
});
