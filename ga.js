// GA4初期化
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());

// GA4の計測IDを指定
gtag('config', 'YOUR_GA4_MEASUREMENT_ID', {
    'send_page_view': false  // 自動でのページビュー送信をオフにする
});

let isLoggedIn = false;  // ログイン状態のフラグ
let userName = null;

// ページが読み込まれた際にpage_viewイベントを送信
function sendPageView() {
    gtag('event', 'page_view', {
        'member_status': isLoggedIn ? '会員' : '非会員'
    });
}
