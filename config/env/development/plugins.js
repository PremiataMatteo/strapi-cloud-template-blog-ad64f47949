/**
 * @param {{ env: any }} params
 */
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
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  settings: {
    sizeLimit: 209715200,
    allowedTypes: ['image/jpeg', 'image/png', 'image/jpg', 'video/mp4'],
    responsiveDimensions: true,
  },
});
