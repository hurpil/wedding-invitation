import { Map } from "./map"
import CarIcon from "../../icons/car-icon.svg?react"
import BusIcon from "../../icons/bus-icon.svg?react"
import { LazyDiv } from "../lazyDiv"
import { LOCATION, LOCATION_ADDRESS } from "../../const"

export const Location = () => {
  return (
    <>
      <LazyDiv className="card location">
        <h2 className="english">Location</h2>
        <div className="addr">
          {LOCATION}
          <div className="detail">{LOCATION_ADDRESS}</div>
        </div>
        <Map />
      </LazyDiv>

      <LazyDiv className="card location">
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <BusIcon className="transportation-icon" />
          </div>
          <div className="heading">대중교통</div>
          <div />
          <div className="content">
            <b>지하철 이용</b>
            <br />
            3호선, 수인분당선 <b>수서역</b> 하차
            <br />
            수서역(3호선) <b>1번 출구 앞</b> 셔틀버스 이용
            <br />
            예식 1시간 전부터 <b>10분 간격</b> 운행
            <br />
            하얀색 유리 건물 방향으로 오시면 됩니다
          </div>
          <div />
          <div className="content">
            <b>버스 이용 · 수서역 방면</b>
            <br />
            <b>수서역 1번 출구(3호선)</b> 승차
            <br />
            간선: 333, 361, 401, 402, 461
            <br />
            지선: 3413, 3426, 4425
            <br />
            마을버스: 강남03
            <br />
            <br />
            일반버스 이용 시 <b>태화기독교사회복지관</b> 하차
            <br />
            횡단보도 건너 왼쪽으로 100m 이동
            <br />
            교차로에서 오른쪽으로 100m 이동
            <br />
            <br />
            강남03 이용 시 <b>수서교회·수서동성당앞</b> 하차
            <br />
            하차 후 도보 100m 이동
            <br />
            <br />
            <b>버스 이용 · 일원역 방면</b>
            <br />
            <b>일원본동주민센터</b> 승차
            <br />
            간선: 333, 361, 401, 402, 461
            <br />
            지선: 3413, 3426, 4425
            <br />
            <b>수서119안전센터앞</b> 하차
            <br />
            횡단보도 건너 왼쪽으로 100m 이동
          </div>
        </div>

        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <CarIcon className="transportation-icon" />
          </div>
          <div className="heading">자가용</div>
          <div />
          <div className="content">
            네이버지도, 카카오내비, 티맵 이용
            <br />
            <b>수서역공영주차장 북측</b> 검색
            <br />
            수서역 1번 출구 앞 공영주차장
            <br />
            (서울 강남구 수서동 735)
            <br />
            <br />
            <b>주차 후</b>
            <br />
            수서역 1번 출구 앞 셔틀버스 이용
            <br />
            예식 1시간 전부터 <b>10~15분 간격</b> 운행
          </div>
          <div />
          <div className="content">
            <b>※ 수서 SRT 1번 출구가 아닙니다.</b>
            <br />
            ※ 식사 후 하객분들은 식물관 내 배치된 주차권을 가지고
            <br />
            셔틀버스를 탑승해주세요.
            <br />
            출차 시 식물관 주차요원에게 주차권을 제시해주세요.
          </div>
        </div>
      </LazyDiv>
    </>
  )
}