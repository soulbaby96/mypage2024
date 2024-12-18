let count = 0; // เอาไว้นับคะแนน ถ้าหากตอบถูก

// การตอบ ต้องเรียงตอบจากข้อ 1 ไปข้อ 2 เท่านั้น และ ถ้ากดซ้ำไปซ้ำมา จะบวกคะแนนขึ้นเรื่อยๆ ถ้าตอบถูก

function checkAnswer(answer) {
    const result = document.getElementById('result');
    if (answer === 'a') {
        result.textContent = "ถูกต้อง PIM ย่อมาจาก PIM";
        result.style.color = 'green';
        count=1; // count = count + 1 ทุกครั้งที่มีการกด จะกดบวกไปทีล่ะ 1
    } else {
        result.textContent = "Incorrect! Try again.";
        result.style.color = 'red';
    }
}

function checkAnswer2(answer) {
    const result = document.getElementById('result2');
    const result3 = document.getElementById('result3');
    if (answer === 'd') {
        result.textContent = "ถูกต้อง PIM ก่อตั้งขึ้นเมื่อปี 2550";
        result.style.color = 'green';
        count++; // + คะแนนเพิ่มขึ้น 1 คะแนน ถ้ากดถูก
    } else {
        result.textContent = "Incorrect! Try again.";
        result.style.color = 'red';
    }
    result3.textContent = "คุณได้ทั้งหมด " + count + " คะแนน";
    count = 0;
}