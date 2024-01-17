import axios from "axios";

/**
 *
 * @returns { price : number}
 */

//외부에서 사용 가능하게 하기 -> export
const getCurrentAsset = async () => {
  const { data } = await axios.get("http://localhost:5173/currnt-asset");
  return data;
};
