document.addEventListener("DOMContentLoaded", function () {
  const searchButton = document.getElementById("search-btn");
  const usernameInput = document.getElementById("user-input");
  const easyProgressContainer = document.querySelector(".easy-progress");
  const mediumProgressContainer = document.querySelector(".medium-progress");
  const hardProgressContainer = document.querySelector(".hard-progress");
  const easyLabel = document.getElementById("easy-label");
  const mediumLabel = document.getElementById("medium-label");
  const hardLabel = document.getElementById("hard-label");
  const errorMsg = document.getElementById("error-msg");

  function updateProgress(solved, total, circle, label) {
    const degree = (solved / total) * 360;
circle.style.background = `conic-gradient(#8e2de2 ${degree}deg,rgb(28, 28, 28) ${degree}deg)`;
    label.textContent = `${solved}/${total}`;
  }

  async function fetchUserDetails(username) {
    try {
      searchButton.disabled = true;
      searchButton.textContent = "Searching...";
      errorMsg.textContent = "";

      const url = "http://localhost:3001/leetcode"; 
      const graphQL = {
        query: `
        query getUserStats($username: String!) {
          allQuestionsCount {
            difficulty
            count
          }
          matchedUser(username: $username) {
            submitStatsGlobal {
              acSubmissionNum {
                difficulty
                count
              }
            }
          }
        }`,
        variables: {
          username
        }
      };

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(graphQL)
      });

      if (!response.ok) {
        throw new Error("Unable to fetch user details");
      }

      const data = await response.json();
      const parsedData = data.data;

      if (!parsedData || !parsedData.matchedUser) {
        throw new Error("User not found");
      }

      const totalQuestions = parsedData.allQuestionsCount;
      const solvedQuestions = parsedData.matchedUser.submitStatsGlobal.acSubmissionNum;

      const getStats = (difficulty) => {
        const total = totalQuestions.find(q => q.difficulty === difficulty)?.count || 0;
        const solved = solvedQuestions.find(q => q.difficulty === difficulty)?.count || 0;
        return { total, solved };
      };

      const easy = getStats("Easy");
      const medium = getStats("Medium");
      const hard = getStats("Hard");

      updateProgress(easy.solved, easy.total, easyProgressContainer, easyLabel);
      updateProgress(medium.solved, medium.total, mediumProgressContainer, mediumLabel);
      updateProgress(hard.solved, hard.total, hardProgressContainer, hardLabel);
    } catch (error) {
      errorMsg.textContent = error.message;
    } finally {
      searchButton.disabled = false;
      searchButton.textContent = "Search";
    }
  }
  searchButton.addEventListener("click", () => {
    const username = usernameInput.value.trim();
    if (username) {
      fetchUserDetails(username);
    }
  });
});
