
import BucketLister from './BucketLister';
import {listBuckets} from '../../shared/buckets';
import {Amplify, withSSRContext} from "aws-amplify";
import awsExports from "../../src/aws-exports";

Amplify.configure({ ...awsExports, ssr: true });

/**
 * Embeds a non-page-or-template server component to check S3 bucket listing - note,
 * this is not able to be built right now without the ts-expect-error typechecker relaxation
 * comment below.
 * @constructor
 */
export default function Page(props: any) {
  const {user} = props;
  return (
    <div>
      { user }
      {/*<BucketLister buckets={buckets}></BucketLister>*/}
    </div>
  );
}

export const getServerSideProps = async ({ req } : any) => {
  const { Auth } = withSSRContext(req);
  const user = await Auth.currentAuthenticatedUser();
  // const bucketList = await listBuckets();
  return {
    user: user.username,
    // buckets: bucketList
  };
}

