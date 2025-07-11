// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let post = "동대문구 우동 맛집";
  let [글제목, 글제목변경] = useState([
    "50대 대학생 시장 추천",
    "20대 대학생 음식 추천",
    "40대 대학생 컨텐츠 추천",
  ]);
  let [좋아요, 좋아요변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState([false, false, false]);
  let [num, num변경] = useState(1);
  let [입력값, 입력값변경] = useState("");

  // function 함수1() {
  //   좋아요 = 좋아요 + 1;
  // }

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: "red", fontSize: "14px" }}>ReactBlog</h4>
      </div>

      {/* <button
        onClick={() => {
          let sortedList = [...글제목];
          sortedList.sort();
          글제목변경(sortedList);
        }}
      >
        가나다 정렬
      </button>

      <button
        onClick={() => {
          let copy = [...글제목]; //화살표 새걸로 바꿔주세요
          copy[0] = "여자 코트 추천";
          글제목변경(copy);
        }}
      >
        글수정
      </button>
      <div className="list">
        <h4>
          {글제목[0]}
          <span
            onClick={() => {
              좋아요변경(좋아요 + 1);
            }}
          >
            👍
          </span>
          {좋아요}
        </h4>
        <p>7월 9일</p>
      </div>

      <div className="list">
        <h4
          onClick={() => {
            {
              modal == true ? setModal(false) : setModal(true);
            }
          }}
        >
          {글제목[2]}
        </h4>
        <p>7월 9일</p>
      </div> */}

      {글제목.map(function (a, i) {
        return (
          <div className="list">
            <h4
              onClick={() => {
                modal == true ? setModal(false) : setModal(true);
                num변경(i);
              }}
            >
              {글제목[i]}
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  let copyLike = [...좋아요];
                  copyLike[i] = copyLike[i] + 1;
                  좋아요 = [...copyLike];
                  좋아요변경(좋아요);
                }}
              >
                👍
              </span>
              {좋아요[i]}
            </h4>
            <p>시장 추천 내용</p>
            <button
              style={{ backgroundColor: "gray" }}
              onClick={() => {
                let copy = [...글제목];
                copy.splice(i, 1);
                글제목변경(copy);
              }}
            >
              삭제
            </button>
          </div>
        );
      })}

      <input
        onChange={(e) => {
          입력값변경(e.target.value);
        }}
      />
      <button
        style={{ backgroundColor: "gray" }}
        onClick={() => {
          let copy = [...글제목];
          copy.unshift(입력값);
          글제목변경(copy);
        }}
      >
        글발행
      </button>

      {
        //조건식 ? 참일때 : 거짓일때
        modal == true ? (
          <Modal
            color={"yellow"}
            글제목={글제목}
            글수정={
              <button
                onClick={() => {
                  let copy = [...글제목]; //화살표 새걸로 바꿔주세요
                  copy[0] = "여자 코트 추천";
                  글제목변경(copy);
                }}
              >
                글수정
              </button>
            }
            순서={num}
          />
        ) : null
      }
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal" style={{ background: props.color }}>
      <h4>{props.글제목[props.순서]}</h4>
      <p>날짜1</p>
      <p>상세내용</p>
      {props.글수정}
    </div>
  );
}

class Modal2 extends React.Component {
  constructor() {
    super();
  }
  render() {
    return <div>안녕</div>;
  }
}

export default App;
