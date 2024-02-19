const editBtn = document.querySelector(".edit");
const statement = document.querySelector(".statement .title");
const detail = document.querySelector(".statement .detail");
const updateTime = document.querySelector("#updateTime");

// console.log(updateTime);
// updateTime.innerHTML = `2023年3月`;
updateTime.innerHTML = getCurrentTime(); // 更新时间

editBtn.onclick = function () {
  if (document.designMode === "off") {
    document.designMode = "on";
    this.className = "btn2 onEdit";
    this.innerText = "退出编辑";
  } else {
    document.designMode = "off";
    this.className = "btn2 edit";
    this.innerText = "编辑";
  }
};

// statement.onclick = function () {
//   detail.classList.toggle('hidden');
// }

// import htmlToPdf from './utils/htmlToPdf'
// console.log(htmlToPdf);

function getCurrentTime() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1; // 月份从0开始，所以需要加1
  return `${year}年${month}月`;
}