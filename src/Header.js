import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <header id="Header">
                <h1>
                    <Link to={`/`}>
                        부산 맛집
                    </Link>
                </h1>
                <p>부산 곳곳에 숨겨진 다양한 맛집을 찾아보세요!</p>
            </header>
        </>
    )
}

export default Header;