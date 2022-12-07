
import BucketLister from './BucketLister';
import {listBuckets} from '../../shared/buckets';

/**
 * Embeds a non-page-or-template server component to check S3 bucket listing - note,
 * this is not able to be built right now without the ts-expect-error typechecker relaxation
 * comment below.
 * @constructor
 */
export default function Page(props: any) {
  const {buckets} = props;
  return (
    <div>
      <BucketLister buckets={buckets}></BucketLister>
    </div>
  );
}

Page.getInitialProps = async () => {
  const bucketList = await listBuckets();
  return {
    buckets: bucketList
  };
}
