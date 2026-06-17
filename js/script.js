
document.addEventListener('DOMContentLoaded', () => {
    
    const swiper = new Swiper('.swiper_portfolio', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true   
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 24,
            },
            1024: {
                slidesPerView: 2,
                spaceBetween: 30,
            }
        }
    });
    // 스크롤 애니메이션을 적용할 요소들 선택
    const revealElements = document.querySelectorAll('.reveal_element_ptf');

    const observerOptions = {
        root: null, // 브라우저 뷰포트 기준
        rootMargin: '0px 0px -100px 0px', // 요소가 화면 하단에서 100px 정도 들어왔을 때 실행
        threshold: 0.1 // 요소의 10%가 보이기 시작할 때
    };

    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 화면에 노출되면 active_reveal_ptf 클래스 추가
                entry.target.classList.add('active_reveal_ptf');
                // 한 번 나타난 후에는 감시를 해제하여 성능 최적화 (원치 않으면 주석 처리)
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(revealCallback, observerOptions);

    revealElements.forEach(element => {
        observer.observe(element);
    });

});

