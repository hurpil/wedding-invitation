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
            * 지하철 이용시
            <br />
            3호선, 수인분당선 <b>수서역</b> 하차
            <br />→ 수서역 1번 출구 앞 셔틀버스 운행
            <br />→ 예식 1시간 전부터 10분 간격 운행
            <br />하얀색 유리 건물입니다
          </div>
          <div />
          <div className="content">
            * 버스 이용 시 (<b>수서역</b> 방면 → 식물관PH)
            <br />→ <b>수서역1번출구</b> 승차
            <br />
            - 간선(파랑): 333, 402, 361, 461, 401
            - 지선(초록): 강남03, 3413, 3426, 4425
            <br />
            반드시 <b>태화기독교사회복지관</b> 하차
            <br />→ 횡단보도를 건너 왼쪽으로 도보 100m 이동
            <br />→ 교차로에서 오른쪽으로 꺾어 도보 100m 이동
            <br />이하 위와 동일합니다.
            <br />
            <br />
            * 버스 이용 시 (<b>일원역</b> 방면 → 식물관PH)
            <br />→ <b>일원본동주민센터</b> 승차
            <br />
            - 간선(파랑): 401, 361, 461, 402, 333
            - 지선(초록): 4425, 3413, 3426
            <br />
            반드시 <b>수서119안전센터앞</b> 하차
            <br />→ 횡단보도를 건너 왼쪽으로 도보 100m 이동
            <br />이하 위와 동일합니다.
          </div>
        </div>
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <CarIcon className="transportation-icon" />
          </div>
          <div className="heading">자가용</div>
          <div />
          <div className="content">
            네이버 지도, 카카오 네비, 티맵 등 이용
            <br />
            <b>서울대학교 연구공원 웨딩홀</b> 검색
            <br />
            - 주차 요금은 무료입니다.
            <br />
            (주차장 이용 시 웨딩홀과 바로 연결)
          </div>
          <div />
          <div className="content">
            <b>
              ※ 서울대학교 정, 후문을 통과할 경우 통행료가 발생하므로
              유의바랍니다. 낙성대 방향으로 이용해주세요.
            </b>
          </div>
        </div>
      </LazyDiv>
    </>
  )
}
