import Link from "next/link";
interface Props {
    href: string;
    children: React.ReactNode | React.ReactNode[] | string;
}
export default function LinkButton({ href, children }: Props) {
    return (
        <Link
            href={href}
            className="bg-[#FFFFFF05] border border-[#E5E7EB] rounded-[0.5rem] px-4 py-2 text-white hover:bg-opacity-20 transition duration-300"
        >
            {children}
        </Link>
    );
}
