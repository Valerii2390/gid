$(function() {
    $('.header__btn').on('click',
        function() {
            $('.header__btn, .menu, .header__list, .social__list, .header__item, .header__logo').toggleClass('active');
            $('.hero__inner').toggleClass('active');
            $('body').toggleClass('lock');

        });
});