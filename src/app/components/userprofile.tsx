import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import React from 'react'

async function Userprofile() {
    const user = await getServerSession(authOptions);
  const userName = user?.user.name;
  const username = user?.user.username;
  return (
    <div className='justify justify-center items-start top-[115px]'>
      {userName}
      {username}
    </div>
  );
}

export default Userprofile