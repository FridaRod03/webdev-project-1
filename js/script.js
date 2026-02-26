const textarea = document.querySelector("textarea");
const charCount = document.getElementById("charCount");
const tweetButton = document.getElementById("tweetButton");

function updateCharacterCount() {
    const maxLength = 160;
    const currentLength = textarea.value.length;
    const remaining = maxLength - currentLength;

    charCount.textContent = remaining + " characters remaining";

    if (remaining < 0 || currentLength === 0) {
        tweetButton.disabled = true;
        charCount.style.color = "red";
    } else {
        tweetButton.disabled = false;
        charCount.style.color = "#555";
    }
}

textarea.addEventListener("input", updateCharacterCount);