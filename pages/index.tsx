import Link from 'next/link';

const Index = () => {
  return (
    <div>
      <p>Hello</p>
      <Link href={'/buckets'}>Buckets</Link>
    </div>
  );
}

export default Index;