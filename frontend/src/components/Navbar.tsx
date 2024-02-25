import { Link, useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isLoggedInSelector, authState } from "../atom/authState";

const Navbar = () => {
    const navigate = useNavigate();
    const setAuthState = useSetRecoilState(authState);
    const isLoggedIn = useRecoilValue(isLoggedInSelector);

    const logout = () => {
        sessionStorage.removeItem('accessToken');
        setAuthState({
            isLogged: false,
            accessToken: null
        });
        navigate('/');
    };

    return (
        <nav className="bg-gray-800">
            <div className="mx-auto px-2 sm:px-6 lg:px-8">
                <div className="flex h-16 text-white items-center justify-between">
                    <Link to="/" className="text-4xl font-bold hover:cursor-pointer">dotDEV</Link>
                    {isLoggedIn ? (
                        <div>
                            <button onClick={logout} className="bg-white text-gray-800 font-bold border-2 px-4 py-1 text-xl mx-2 hover:cursor-pointer">Log Out</button>
                        </div>
                    ) : (
                        <div>
                            <Link to="/login" className="bg-white text-gray-800 font-bold border-2 px-4 py-1 text-xl mx-2 hover:cursor-pointer">Log In</Link>
                            <Link to="/signup" className="font-bold border-2 px-4 py-1 text-xl mx-2 hover:cursor-pointer">Sign Up</Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
