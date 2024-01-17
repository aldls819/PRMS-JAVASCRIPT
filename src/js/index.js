import "../style/index.scss";
import { getCurrentAsset } from "../api/get-current-asset";

//요소를 가지고 있는 변수는 앞에 $ 를 붙이자
const $currentAssetValue = document.querySelector(".current-asset-value");

let loading = false;

//초기화 함수
const initCurrentAsset = async () => {
  //loading true
  loading = true;
  try {
    const { price } = await getCurrentAsset();
    console.log($currentAssetValue);
  } catch (err) {
    alert("현재 자산을 조회하는데 실패했습니다.");
  }
  //loading false
  loading = false;
  //성공 실패 feedback 처리
};

initCurrentAsset();
