import { S3Client, ListBucketsCommand } from '@aws-sdk/client-s3';

const s3Client = new S3Client({ apiVersion: '2006-03-01', region: 'us-east-2' });

export async function listBuckets() {
    const buckets = await s3Client.send(new ListBucketsCommand({}));
    return buckets;
}