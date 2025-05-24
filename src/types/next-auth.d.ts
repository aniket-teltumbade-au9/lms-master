// types/next-auth.d.ts
import "next-auth";

declare module "next-auth" {
    interface Session {
        user: {
            id: string;
            email: string;
            role?: string;
            name?: string;
            image?: string;
        };
    }

    interface User {
        id: string;
        email: string;
        role?: string;
        name?: string;
        image?: string;
    }

    interface JWT {
        id: string;
        email: string;
        role?: string;
        name?: string;
        image?: string;
    }
}
