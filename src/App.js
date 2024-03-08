import axios from "axios";
import { useEffect, useState } from "react";
import Gugun from "./Gugun";
import { Link, Route, Routes } from "react-router-dom";
import Itm from "./Itm";
import AllList from "./AllList";

import './reset.scss';
import './font.scss';
import './common.scss';
import './style.scss';
import Search from "./Search";
import SearchResult from "./SearchResult";
import Header from "./Header";

const App = () => {
    const [data, setData] = useState([]);
    const [gugunNmae, setGugunName] = useState([]);

    const getData = async () => {
        const r = await axios.get('https://apis.data.go.kr/6260000/FoodService/getFoodKr?serviceKey=vDXiE4PDrEr%2FNAke1d0akkkh1RABncvXqYeEddlbejCCK05mDmRKVhaW3rMukYwxkMSWqrQ6xu5BrBOdbr0CpA%3D%3D&pageNo=1&numOfRows=260&resultType=json')
        const d = await r.data.getFoodKr.item;
        setData(d);
        const GG = r.data.getFoodKr.item.map(it => it.GUGUN_NM);
        const GG_LIST = [...new Set(GG)];
        setGugunName(GG_LIST);
    }


    useEffect(() => {
        getData();
    }, []);


    return (
        <div>
            <Header />
            <div id="map" style={{ height: '500px', margin: '0 0 0 0' }}></div>
            <div className="search_box">
                <Search />
                <nav className="gnb">
                    <ul>
                        {
                            gugunNmae.map(it => {
                                return (
                                    <li><Link to={`/gu/${it}`}>{it}</Link></li>
                                )
                            })
                        }
                    </ul>
                </nav>
            </div>

            <Routes>
                <Route path="/" element={<AllList data={data} />} />
                <Route path="/search" element={<SearchResult data={data} />} />
                <Route path="/gu/:gugun" element={<Gugun data={data} />} />
                <Route path="/:itm" element={<Itm data={data} />} />
            </Routes>
        </div>
    )
}

export default App;