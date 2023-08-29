'use client';

import React from 'react';
import Link from 'next/link';

const Dashboard = () => {
  return (
    <div>
      Dashboard
      <Link href="/dashboard/login">Login</Link>
    </div>
  );
};

export default Dashboard;
