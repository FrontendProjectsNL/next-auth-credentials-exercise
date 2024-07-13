import { authoptions } from '@/app/authoptions';
import NextAuth from 'next-auth/next';

const handler = NextAuth(authoptions);

export { handler as GET, handler as POST };
