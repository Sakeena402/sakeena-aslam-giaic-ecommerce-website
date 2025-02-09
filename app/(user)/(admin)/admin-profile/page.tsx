'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const AdminProfile = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (!session) {
    router.push('/signin'); // Redirect to sign-in page if not logged in
    return null;
  }

  if (session.user?.role !== 'admin') {
    router.push('/'); // Redirect to home or a forbidden page if the user is not an admin
    return null;
  }

  return (
    <div>
      <h1>Admin Profile</h1>
      <p>Welcome, {session.user?.name}</p>
      <p>Email: {session.user?.email}</p>
    </div>
  );
};

export default AdminProfile;
