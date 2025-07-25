import { useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
const routeRoles: Record<string, string[]> = {
    admin: ['admin', 'teacher'],
    student: ['student'],
}
export function SessionClient({ children }: React.PropsWithChildren) {
    const { data: session, status } = useSession();
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        if (status === "loading" || pathname === '/') return; // Wait until session is loaded

        const isAuthRoute = pathname.startsWith('/auth');

        const { id: userId, role } = session?.user ?? {};
        console.log(1)
        if (!userId && isAuthRoute) return
        console.log(2)
        // ✅ Authenticated user on /auth → Redirect to their dashboard
        if (userId && role && isAuthRoute) {
            router.replace(`/dashboard/${Object.keys(routeRoles).find((key) => routeRoles[key].includes(role))}/home`);
        }
        console.log(3)
        // ✅ Not authenticated or missing role and trying to access dashboard → Redirect to login
        if (!userId || !role) {
            const query = userId && !role ? '?setRole=true' : '';
            router.replace(`/auth/sign_in${query}`);
        }

    }, [session, status, pathname, router]);

    return React.cloneElement(children as React.ReactElement);
}
