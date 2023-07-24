import { SignInButton, SignOutButton, UserButton, useUser } from "@clerk/nextjs"
import Link from "next/link";

export const Header = () => {

    const user = useUser();

    return (
        <nav className="sticky top-4 bg-blue-300 border-gray-200 ml-4 mr-4 mt-4 rounded-full shadow-md">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="https://flowbite.com/" className="flex items-center">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">To do tracker</span>
                </a>

                <div className="md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-row items-center space-x-6">
                        <li>
                            <Link href="/" className="md:bg-transparent md:p-0 dark:text-white hover:text-blue-500" aria-current="page">Home</Link>
                        </li>

                        {user.isSignedIn ? 
                            <>
                                <li className="cursor-pointer text-white hover:text-blue-500">
                                    <Link href="/createPage">
                                        Create
                                    </Link>
                                </li>
                                <li className="cursor-pointer text-white">
                                    <UserButton />
                                </li>
                            </>
                            :
                            <li className="cursor-pointer text-white">
                                <SignInButton />
                            </li>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    ) 
}