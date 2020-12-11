// ハンバーガーメニュー　実行アニメーション
$(function(){
    $('.Toggle').click(function(){
        $(this).toggleClass('active');
        $('.header').toggleClass('active');
        $('body').toggleClass('bodyActive');
    });

    var lists = [
        {name: 'メロン', price: 4},
        {name: 'バナナ', price: 2},
        {name: 'スイカ', price: 3},
        {name: 'イチゴ', price: 1}
      ];

      lists.sort(function(a, b) {
        if (a.name > b.name) {
          return 1;
        } else {
          return -1;
        }
      })
       
      console.log(lists);
});