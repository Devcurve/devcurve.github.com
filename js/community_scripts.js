window.addEventListener('DOMContentLoaded', (event) => {
    var slider = document.getElementById("slider");
    var leftControl = document.getElementById("leftControl");
    var rightControl = document.getElementById("rightControl");
    var scrollAmount = 0;

    leftControl.onclick = function() {
        scrollAmount -= slider.offsetWidth / 5;  // Scroll 20% of the visible width
        if (scrollAmount < 0) { // Prevent scrolling beyond the first item
            scrollAmount = 0;
        }
        slider.scrollTo({
            top: 0,
            left: scrollAmount,
            behavior: 'smooth'
        });
    };

    rightControl.onclick = function() {
        scrollAmount += slider.offsetWidth / 5;  // Scroll 20% of the visible width
        slider.scrollTo({
            top: 0,
            left: scrollAmount,
            behavior: 'smooth'
        });
    };
});


// post 정보를 담고 있는 객체 배열
let posts = [
    {
        title: "Post 1",
        description: "Description for post 1...",
        price: "$50",
        recommendations: "10",
        imgSrc: "https://via.placeholder.com/150"
    },
    {
        title: "Post 2",
        description: "Description for post 2...",
        price: "$50",
        recommendations: "10",
        imgSrc: "https://via.placeholder.com/150"
    },
    {
        title: "Post 3",
        description: "Description for post 3...",
        price: "$50",
        recommendations: "10",
        imgSrc: "https://via.placeholder.com/150"
    },
    {
        title: "Post 4",
        description: "Description for post 4...",
        price: "$50",
        recommendations: "10",
        imgSrc: "https://via.placeholder.com/150"
    },
    {
        title: "Post 5",
        description: "Description for post 5...",
        price: "$50",
        recommendations: "10",
        imgSrc: "https://via.placeholder.com/150"
    },
    {
        title: "Post 6",
        description: "Description for post 6...",
        price: "$50",
        recommendations: "10",
        imgSrc: "https://via.placeholder.com/150"
    },
    // ... add more posts as needed
];

// 템플릿 함수
function createPostHTML(post) {
    return `
        <div class="post">
            <img src="${post.imgSrc}" alt="Post Image">
            <div class="post-content">
                <h2>${post.title}</h2>
                <p>${post.description}</p>
                <div class="post-description">
                    <img class="stars" src="../img/community/star-solid.svg" alt="Full Star" width="20" height="20">
                    <img class="stars" src="../img/community/star-solid.svg" alt="Full Star" width="20" height="20">
                    <img class="stars" src="../img/community/star-solid.svg" alt="Half Star" width="20" height="20">
                    <img class="stars" src="../img/community/star-regular.svg" alt="Empty Star" width="20" height="20">
                    <img class="stars" src="../img/community/star-regular.svg" alt="Empty Star" width="20" height="20">
                </div>
                <p>Price: ${post.price}</p>
                <p>Recommendations: ${post.recommendations}</p>
            </div>
        </div>
    `;
}

// post-container에 post를 추가
let postContainer = document.getElementById('post-container');

posts.forEach(post => {
    let postHTML = createPostHTML(post);
    postContainer.innerHTML += postHTML;
});