import { Link } from 'react-router-dom'
const Nav = () => {
    return (
        <nav className="py-[20px] w-full d-flex justify-center items-center fixed top-0 bg-gray-800 z-20">
            <ul className="text-white flex justify-center items-center gap-14">
                <li>
                    <Link to={'/UsersCompany'}>
                        User
                    </Link>
                </li>
                <li>
                    <Link to={'/PostsCompany'}>
                        Post
                    </Link>
                </li>
                <li>
                    <Link to={'/AboutUs'}>
                        About Us
                    </Link>
                </li>

            </ul>
        </nav>
    )
}

export default Nav