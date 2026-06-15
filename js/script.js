/**
 * 박종광 포트폴리오 메인 스크립트 인터랙션 엔진
 * * - Swiper Slider 인스턴스 초기화 및 루프 처리
 * - 마우스 호버 시 일시 정지 활성화 (pauseOnMouseEnter)
 */
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

});