import { Link, useSearchParams } from "react-router-dom";

const SearchResult = ({ data }) => {
    const [query] = useSearchParams();
    const r = query.get('q');

    const searchResult = data.filter(it => it.MAIN_TITLE.includes(r) || it.ITEMCNTNTS.includes(r));
    console.log(searchResult);

    return (
        <>
            <ul className="default_list">
                {
                    searchResult.map((it, idx) => {
                        return (
                            <li>
                                <Link to={`/${it.MAIN_TITLE}`}>
                                    {idx + 1}
                                    <img src={it.MAIN_IMG_NORMAL} alt="" />
                                    {it.TITLE}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default SearchResult;