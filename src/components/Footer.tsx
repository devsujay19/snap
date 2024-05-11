export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <>
            <footer className="rounded-lg shadow m-4 dark:bg-gray-800">
                <div className=" text-center w-full mx-auto max-w-screen-xl p-4">
                    <span className="text-sm text-center text-gray-500 dark:text-gray-400">© {year} <a href="https://github.com/devsujay19/snap" className="hover:underline">Snap</a>. All Rights Reserved.
                    </span>
                </div>
                <ul className="flex flex-wrap justify-center items-center pb-4 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a target="_blank" href="http://github.com/devsujay19/snap" className="hover:underline me-4 md:me-6">Source Code</a>
                    </li>
                    <li>
                        Hosted on <a target="_blank" href="http://vercel.com" className="hover:underline me-4 md:me-6">Vercel</a>
                    </li>
                </ul>
            </footer>
        </>
    );
};