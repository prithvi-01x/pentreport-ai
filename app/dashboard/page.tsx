import { redirect } from 'next/navigation';
import { supabase } from '@/lib/supabase';

export default async function DashboardPage() {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect('/login');
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-950">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-white mb-4">Dashboard</h1>
        <p className="text-gray-400 text-lg">Coming Soon</p>
      </div>
    </div>
  );
}
