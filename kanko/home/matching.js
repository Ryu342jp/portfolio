document.addEventListener("DOMContentLoaded", function() {
    const arrivalTimeSelect = document.getElementById("arrival-time");
    const departureTimeSelect = document.getElementById("departure-time");
    const activitiesSelect = document.getElementById("activities");
    const searchButton = document.getElementById("search-button");

    function redirectToPage() {
        const arrivalTime = arrivalTimeSelect.value;
        const departureTime = departureTimeSelect.value;
        const selectedActivity = activitiesSelect.value;

        let link = ""; // リンクを初期化

        // 条件分岐でリンクを設定
        if (arrivalTime === "8" && departureTime === "7" && selectedActivity === "歴史的観光地") {
            link = "../course/historical/07and09to16/model1.html";// この条件に合致するページへのリンク
			
        } else if (arrivalTime === "9" && departureTime === "7" && selectedActivity === "アクティビティ") {
            link = "リンク2";// 別の条件に合致するページへのリンク
        } else if (arrivalTime === "10" && departureTime === "19" && selectedActivity === "郷土料理を食べたい") {
            link = "リンク3"; // 別の条件に合致するページへのリンク
        } else {
            link = "デフォルトリンク"; // 上記条件に合致しない場合のデフォルトリンク
        }
		
		window.location.href = link;
    }

    searchButton.addEventListener("click", redirectToPage);
});
//ナビゲーションの設定
document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navbarMenu = document.querySelector(".navbar-menu");

    menuToggle.addEventListener("click", function() {
        navbarMenu.classList.toggle("active");
    });
});