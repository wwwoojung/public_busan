import { useEffect } from "react";
import { Link } from "react-router-dom";

const AllList = ({ data }) => {
    const { kakao } = window;

    const getMap = () => {
        var mapContainer = document.getElementById('map'), // 지도를 표시할 div  
            mapOption = {
                center: new kakao.maps.LatLng(data[4]?.LAT, data[4]?.LNG), // 지도의 중심좌표
                level: 7 // 지도의 확대 레벨
            };

        var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

        var positions = data.map(it => {
            return {
                title: it.MAIN_TITLE,
                latlng: new kakao.maps.LatLng(it.LAT, it.LNG)
            }
        });

        console.log(positions);

        // 마커 이미지의 이미지 주소입니다
        var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

        for (var i = 0; i < positions.length; i++) {

            // 마커 이미지의 이미지 크기 입니다
            var imageSize = new kakao.maps.Size(24, 35);

            // 마커 이미지를 생성합니다    
            var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

            // 마커를 생성합니다
            var marker = new kakao.maps.Marker({
                map: map, // 마커를 표시할 지도
                position: positions[i].latlng, // 마커를 표시할 위치
                title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                image: markerImage // 마커 이미지 
            });
        }
    }

    useEffect(() => {
        // data.length > 0 && getMap(); // ?를 사용하지 않으면 옆의 식 사용
        getMap();
    }, [data])
    return (
        <>
            <ul className="default_list">
                {
                    data.map((it, idx) => {
                        return (
                            <li>
                                <Link to={`/${it.TITLE}`}>
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

export default AllList;