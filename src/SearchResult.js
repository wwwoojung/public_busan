import { Link, useSearchParams } from "react-router-dom";

const SearchResult = ({ data }) => {
    const [query] = useSearchParams();
    const r = query.get('q');

    const searchResult = data.filter(it => it.MAIN_TITLE.includes(r) || it.ITEMCNTNTS.includes(r));
    console.log(searchResult);

    return (
        <>
            <section className="default_section">
                <div className="inner search_result">
                    <p>"{r}" 검색 결과 총 {searchResult.length}개</p>
                </div>
                <ul className="default_list">
                    {
                        searchResult.map((it, idx) => {
                            return (
                                <li>
                                    <Link to={`/${it.MAIN_TITLE}`}>
                                        <img src={it.MAIN_IMG_NORMAL} alt="" />
                                        <strong>{it.MAIN_TITLE}</strong>
                                        <div className="default_button">
                                            자세히 보기
                                        </div>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </section>
        </>
    )
}

export default SearchResult;