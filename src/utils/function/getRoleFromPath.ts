export const getRoleFromPath = (pathname?: string): "student" | "admin" | "unknown" => {

    const segments = (pathname || '').split("/");

    // Ensure the path follows the "/dashboard/{role}" format
    if (segments.length > 2 && segments[1] === "dashboard") {
        const role = segments[2];
        if (role === "student" || role === "admin") {
            return role as "student" | "admin";
        }
    }

    return "unknown"; // Default case
};
