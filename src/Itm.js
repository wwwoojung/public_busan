import { useEffect } from "react";
import { useParams } from "react-router-dom";
const Itm = ({ data }) => {
    const { itm } = useParams();
    const dataItm = data.find(it => it.MAIN_TITLE == itm);
    console.log(dataItm);

    const { kakao } = window;

    const getMap = () => {
        var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
            mapOption = {
                center: new kakao.maps.LatLng(dataItm.LAT, dataItm.LNG), // 지도의 중심좌표
                level: 3 // 지도의 확대 레벨
            };

        var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

        // 마커가 표시될 위치입니다 
        var markerPosition = new kakao.maps.LatLng(dataItm.LAT, dataItm.LNG);

        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
            position: markerPosition
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);
    }

    useEffect(() => {
        dataItm && getMap(); // ?를 사용하지 않으면 옆의 식 사용
    }, [dataItm])

    return (
        <>
            {
                dataItm &&
                <>
                    <section className="default_section itm_list">
                        <div className="default_title">
                            <h2>{dataItm?.MAIN_TITLE}</h2>
                        </div>
                        <div className="inner specific_itm">
                            <figure>
                                <img src={dataItm?.MAIN_IMG_NORMAL} alt="" />
                            </figure>
                            <table>
                                <tbody>
                                    <tr>
                                        <th>위치</th>
                                        <td>{dataItm.ADDR1}</td>
                                    </tr>
                                    <tr>
                                        <th>연락처</th>
                                        <td><a href={`tel:${dataItm.CNTCT_TEL}`}>{dataItm.CNTCT_TEL}</a></td>
                                    </tr>
                                    <tr>
                                        <th>설명</th>
                                        <td>{dataItm.ITEMCNTNTS}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>
                </>
            }
        </>
    )
}

export default Itm;