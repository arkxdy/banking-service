import { Link } from "react-router-dom";

const ComingSoon = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center">
            <h1 className="text-5xl text-gray-900 font-bold mb-8 animate-pulse">
                Coming Soon
            </h1>
            <p className="text-gray-900 text-lg mb-8">
                We're working hard to bring you something amazing. Stay tuned!
            </p>
            <Link to={"/"} className="mt-4 inline-block rounded bg-red-500 px-4 py-2 font-semibold text-white hover:bg-red-600"> Go back to Home </Link>
        </div>
    )
}
export default ComingSoon;