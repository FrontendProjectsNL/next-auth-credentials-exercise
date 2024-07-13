import LogoutComponent from '@/components/logout-component';
import { authoptions } from '@/app/api/auth/[...nextauth]/authoptions';
import { getServerSession } from 'next-auth';
import Image from 'next/image';
import Signin from './(auth)/signin/page';

export default async function Home() {
  const session = await getServerSession(authoptions);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {session ? (
        <LogoutComponent />
      ) : (
        <div>
          <p>You're NOT legged in!</p> <Signin />
        </div>
      )}
    </main>
  );
}
