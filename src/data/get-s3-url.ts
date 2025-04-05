import AWS from 'aws-sdk';

// Initialize S3 client with environment variables
// This is used server-side in the API route
const s3 = new AWS.S3({
  region: process.env.AWS_REGION!!,
  credentials: new AWS.Credentials(
    process.env.AWS_ACCESS_KEY_ID!!,
    process.env.AWS_SECRET_ACCESS_KEY!!
  )
});

export async function getPresignedUrl(bucket: string, key: string) {
  const params = {
    Bucket: bucket,
    Key: key,
    Expires: 60
  };

  try {
    const url = await s3.getSignedUrlPromise('getObject', params);
    return url;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to generate signed URL');
  }
}
