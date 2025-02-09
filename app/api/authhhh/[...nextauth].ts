import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { client } from "@/sanity/lib/client";

// Define the auth options
export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    // Custom JWT callback to handle user creation and session management
    async jwt({ token, user }) {
      try {
        // Fetch user from Sanity DB
        const userData = await client.fetch(
          `*[_type == "user" && email == $email][0]`,
          { email: user?.email }
        );

        // If user doesn't exist, create a new user in Sanity DB
        if (!userData) {
          await client.create({
            _type: "user",
            name: user?.name,
            email: user?.email,
            profileImage: user?.image,
            isAdmin: false, // Default to false, can be modified as needed
            status: "active",
          });
        }

        // Add the user data to the JWT token
        token.id = userData?._id;
        token.email = userData?.email;
        token.isAdmin = userData?.isAdmin;
      } catch (error) {
        console.error("Error fetching or creating user:", error);
        throw new Error("Failed to authenticate user");
      }

      return token;
    },

    // Manage the session callback
    async session({ session, token }) {
      // Attach the JWT token data to the session object
      session.id = token.id;
      session.email = token.email;
      session.isAdmin = token.isAdmin;
      return session;
    },
  },

  pages: {
    signIn: '/auth/signin', // Custom sign-in page, if desired
    error: '/auth/error', // Custom error page
    // Optionally you can add redirect URLs for other pages after login
  },

  secret: process.env.NEXTAUTH_SECRET, // Make sure to set your secret in the environment variables
};

// Export the GET and POST methods for NextAuth API
export const GET = (req: Request) => {
  return NextAuth(req, authOptions);
};

export const POST = (req: Request) => {
  return NextAuth(req, authOptions);
};
