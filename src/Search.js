import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
    const [input, setInput] = useState('');
    const [search, setSearch] = useState('');

    const navigate = useNavigate();

    const inputHandler = (e) => {
        const { value } = e.target;
        setInput(value);
    }

    const searchHandler = (e) => {
        e.preventDefault();
        setSearch(input);
        navigate(`/search?q=${input}`);
    }

    return (
        <>
            <div className="search">
                <div className="title">
                    <h2>내가 원하는 부산 맛집 찾기!</h2>
                    <p>
                        지역별, 키워드별로 내가 찾고 싶은 부산 맛집을 찾아보세요.<br />
                        우측에서 지역을 선택하시면 해당 지역의 맛집을 추천해드려요.
                    </p>
                </div>
                <form onSubmit={searchHandler}>
                    <input type="text" onChange={inputHandler} placeholder="맛집 키워드를 검색해보세요" />
                    <button>search</button>
                </form>
            </div>
        </>
    )
}

export default Search;