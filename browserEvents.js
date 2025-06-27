window.forceBackToTopOnReload = () => {
    window.addEventListener("beforeunload", function () {
        // 警告は出さずにそのまま終了
        // ページのロード時に "/" にリダイレクトするよう、クエリやセッションと併用可能
        sessionStorage.setItem("redirectToTop", "true");
    });
};

window.redirectIfNeeded = () => {
    if (sessionStorage.getItem("redirectToTop") === "true") {
        sessionStorage.removeItem("redirectToTop");
        location.replace("/");  // Topへリダイレクト（履歴を残さない）
    }
};

// 戻るボタン押下の検知（popstateイベント）
window.onBackNavigation = (dotNetHelper) => {
    window.addEventListener('popstate', function (event) {
        dotNetHelper.invokeMethodAsync('HandleBackNavigation');
    });
};