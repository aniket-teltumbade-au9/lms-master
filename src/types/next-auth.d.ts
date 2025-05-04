import "next-auth";

declare module "next-auth" {
    interface Session {
        user: {
            id: string;
            email: string;
            role?: string;
            isProfileSet?: boolean;
        };
    }

    interface User {
        id: string;
        email: string;
        role?: string;
        isProfileSet?: boolean;
    }

    interface JWT {
        user: {
            id: string;
            email: string;
            role?: string;
            isProfileSet?: boolean;
        };
    }
}
