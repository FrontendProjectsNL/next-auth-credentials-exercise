import CredentialsProvider from 'next-auth/providers/credentials';
import prisma from './db';
import * as bcrypt from 'bcrypt';

export const authoptions = {
  session: {
    strategy: 'jwt',
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },

  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Credentials',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: {
          label: 'Username',
          type: 'text',
          placeholder: 'your email',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        const user = await prisma.user.findUnique({
          where: {
            email: credentials?.username,
          },
        });

        console.log('======>>>>>>>>> user is: ', user);

        if (!user) throw new Error("username or password isn't correct");

        if (!credentials?.password)
          throw new Error('Please provide your password!');
        if (!credentials?.username)
          throw new Error('Please provide your username');

        if (!user?.verification) throw new Error('Email not verified!');

        const isPasswordCorrect = await bcrypt.compare(
          credentials?.password,
          user?.password
        );

        if (!isPasswordCorrect) throw new Error('Password not correct!');

        const { password, ...userWithoutPassword } = user;
        return userWithoutPassword;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.user = user as User;
      console.log('========>>>> token: ', token);
      return token;
    },

    async session({ token, session }) {
      session.user = token.user;
      console.log('========>>>> session: ', session);
      return session;
    },
  },
};
