function getCurrentDate() {
  const daysOfWeek = ['日', '月', '火', '水', '木', '金', '土'];
  const currentDate = new Date();

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const date = currentDate.getDate();
  const dayOfWeek = daysOfWeek[currentDate.getDay()];

  return `${year}年${month}月${date}日(${dayOfWeek})`;
}

window.addEventListener('load', function() {
  const currentDate = getCurrentDate();
  const dateElement = document.getElementById('current-date');
  dateElement.textContent = `日付： ${currentDate}`;
});
