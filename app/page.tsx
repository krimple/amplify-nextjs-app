import styles from "../styles/Home.module.css";
import { listBuckets } from "../shared/buckets";

export default async function Home() {
  const bucketList = await listBuckets();

  const buckets = (bucketList?.Buckets || []).map((b, i) => (
    <tr key={i}>
      <td>{b.Name}</td>
      <td>{b.CreationDate?.toLocaleDateString()}</td>
    </tr>
  ));

  return (
    <div className={styles.container}>
      <table>
        <thead>
          <tr>
            <th>Bucket</th>
            <th>Creation Date</th>
          </tr>
        </thead>
        <tbody>{buckets}</tbody>
      </table>
    </div>
  );
}
