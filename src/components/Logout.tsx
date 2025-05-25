import { signOut } from 'next-auth/react';

function Logout() {
    const hSignOut = () => {
        const cnfrm = confirm("Are you sure you want to logout?");
        if (cnfrm) signOut()
    }
    return (
        <div className='w-full border-b border-[#FFFFFF10] pb-1'>
            <button onClick={hSignOut} className="w-full bg-yellow-500 text-blue-900 font-semibold py-2 rounded-lg">
                Logout
            </button>
        </div>
    )
}

export default Logout