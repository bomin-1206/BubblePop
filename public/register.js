$(()=>{
    $('#submitBtn').on('click', ()=>{
        const userId = $('#userId').val();
        const password = $('#password').val();
        const passwordcheck = $('#passwordcheck').val();
        
        if(userId === ''){
            const targets = ["userId", "password", "passwordcheck"]
            targets.forEach(it => $(`#${it}`).val(''))
            alert('아이디는 필수 항목입니다.');
            return;
        }
        if(password!=passwordcheck){
            const targets = ["password", "passwordcheck"].forEach(it => $(`#${it}`).val(''))
            alert('비밀번호가 일치하지 않습니다.');
            return;
        }
            
        const data = {
            userId:userId,
            password:password
        }
        $.ajax({
            url:'/register',
            type:'post',
            contentType:'application/json',
            data:JSON.stringify(data)
        })
        // 나중에 이렇게 쓴 이유 설명
        .done((response)=>{
            location.replace('/login')
            console.log(response);
            alert(response.result);
        })
        .fail((request, status, err)=>{
            location.replace('/register')
            const msg = JSON.parse(request.responseText);
            alert(msg.boom);
        });
    });
});