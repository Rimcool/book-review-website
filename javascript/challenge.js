document.addEventListener("DOMContentLoaded", () => {
    loadChallenges();
    loadComments();
});

function loadChallenges() {
    const challenges = [
        { title: "📚 Read 5 Mystery Books", goal: "5 Books" },
        { title: "💪 30-Day Workout Challenge", goal: "30 Days" },
        { title: "✍️ Write a Short Story", goal: "1 Story" },
        { title: "📅 Daily Productivity Streak", goal: "21 Days" }
    ];
    
    const challengeContainer = document.getElementById("challenges-list");
    challengeContainer.innerHTML = "";

    challenges.forEach((challenge, index) => {
        const challengeCard = `
            <div class="col-md-6">
                <div class="card p-3 mb-3">
                    <h5>${challenge.title}</h5>
                    <p>Goal: ${challenge.goal}</p>
                    <button class="btn btn-success" onclick="joinChallenge(${index})">Join</button>
                </div>
            </div>
        `;
        challengeContainer.innerHTML += challengeCard;
    });
}

function joinChallenge(index) {
    alert(`You've joined Challenge #${index + 1}!`);
}

function postComment() {
    const commentBox = document.getElementById("discussion-box");
    const discussionSection = document.getElementById("discussion-section");

    if (commentBox.value.trim() !== "") {
        const newComment = document.createElement("div");
        newComment.classList.add("comment");
        newComment.innerHTML = `<strong>User:</strong> ${commentBox.value}`;
        discussionSection.appendChild(newComment);
        saveComment(commentBox.value);
        commentBox.value = "";
    }
}

function saveComment(comment) {
    let comments = JSON.parse(localStorage.getItem("comments")) || [];
    comments.push(comment);
    localStorage.setItem("comments", JSON.stringify(comments));
}

function loadComments() {
    const discussionSection = document.getElementById("discussion-section");
    const comments = JSON.parse(localStorage.getItem("comments")) || [];

    comments.forEach(comment => {
        const savedComment = document.createElement("div");
        savedComment.classList.add("comment");
        savedComment.innerHTML = `<strong>User:</strong> ${comment}`;
        discussionSection.appendChild(savedComment);
    });
}
