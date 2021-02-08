$(document).ready(function(){

    $('#juso').click(function(){

        new daum.Postcode({
            oncomplete: function(data) {
                // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

                // 각 주소의 노출 규칙에 따라 주소를 조합한다.
                // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
                var addr = ''; // 주소 변수
                var extraAddr = ''; // 참고항목 변수

                //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
                if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
                    addr = data.roadAddress;
                } else { // 사용자가 지번 주소를 선택했을 경우(J)
                    addr = data.jibunAddress;
                }

                // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
                if(data.userSelectedType === 'R'){
                    // 법정동명이 있을 경우 추가한다. (법정리는 제외)
                    // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
                    if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                        extraAddr += data.bname;
                    }
                    // 건물명이 있고, 공동주택일 경우 추가한다.
                    if(data.buildingName !== '' && data.apartment === 'Y'){
                        extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                    }
                    // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
                    if(extraAddr !== ''){
                        extraAddr = ' (' + extraAddr + ')';
                    }
                    // 조합된 참고항목을 해당 필드에 넣는다.
                    
                
                } else {
                    
                }

                // 우편번호와 주소 정보를 해당 필드에 넣는다.
               
                document.getElementById("addrMain").value = addr;
                
               

                //주소 검색이 완료된 후 변하는 css 목록
                $('#addrMain').css('color', 'black');
                $('#addrSub').css('color', 'black');

                // 커서를 상세주소 필드로 이동한다.
                document.getElementById("addrSub").focus();





                







                // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분입니다.
                // 예제를 참고하여 다양한 활용법을 확인해 보세요.
                // http://postcode.map.daum.net/guide  api주소 
            }
        }).open();



    });


    $('.tab_menu li:nth-child(1)').click(function(){
        $('.tab_menu li:nth-child(2)').removeClass("on")
        $('.tab_menu li:nth-child(1)').addClass("on")
        $('#viewBeforeList').css('display', 'block')
        $('#viewAfterList').css('display', 'none')
    });

    $('.tab_menu li:nth-child(2)').click(function(){
        $('.tab_menu li:nth-child(1)').removeClass("on")
        $('.tab_menu li:nth-child(2)').addClass("on")
        $('#viewBeforeList').css('display', 'none')
        $('#viewAfterList').css('display', 'block')
    });


    $('.cont_after').hover(   // background 색상 마우스 hover 됐을 때 변경 해주기
        function(){
            $(this).addClass("hover")
        },
        function(){
            $(this).removeClass("hover")
        }
    );

    $('.list_after .cont_after .desc_after').click(function(){     
        
        var _index = $('.list_after li .cont_after .desc_after').index(this);
        
        a = _index + 1
        $('.list_after li:nth-child('+ a + ') .cont_after .desc_after .desc').toggle();
        $('.list_after li:nth-child('+ a + ') .cont_after .desc_after .view').toggle();
        $('.list_after li:nth-child('+ a + ') .cont_after .btn_after .btn').toggle();
        
    });
        




});