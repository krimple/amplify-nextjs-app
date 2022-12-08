import styles from "../../styles/Home.module.css";

export default function BucketLister(props: any) {
  const buckets = props.buckets;
  const bucketRows = buckets.map((b: any, i: number) => (
    <tr key={i}>
      <td>{b.name}</td>
      <td>{b.creationDate}</td>
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
        <tbody>{bucketRows}</tbody>
      </table>
    </div>
  );
}
