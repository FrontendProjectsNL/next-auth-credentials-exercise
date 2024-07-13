import LogoutComponent from '@/components/logout-component';
import { authoptions } from '@/lib/authoptions';
import { getServerSession } from 'next-auth';
import Image from 'next/image';

export default async function Home() {
  const session = await getServerSession(authoptions);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {session ? <LogoutComponent /> : "You're NOT legged in!"}
    </main>
  );
}
