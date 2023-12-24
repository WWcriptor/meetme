// 저장된 일기 불러오기
window.onload = function() {
    let savedDiary = sessionStorage.getItem('diary');
    if (savedDiary) {
        document.getElementById('diary-output').innerText = savedDiary;
    }
};

// 일기 저장 함수
function saveDiary() {
    let diaryEntry = document.getElementById('diary-entry').value;
    if (diaryEntry) {
        sessionStorage.setItem('diary', diaryEntry);
        document.getElementById('diary-output').innerText = diaryEntry;
        alert('일기가 저장되었습니다!');
    } else {
        alert('일기를 입력해주세요.');
    }
}