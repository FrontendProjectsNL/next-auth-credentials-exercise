import { authoptions } from '@/app/api/auth/[...nextauth]/authoptions';
import NextAuth from 'next-auth/next';

const handler = NextAuth(authoptions);

export { handler as GET, handler as POST };
