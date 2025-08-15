import GitHubCalendar from "react-github-calendar";

function GitHubContribution() {
  return (
      <div className="relative w-[100vw] h-[100vh] flex items-center justify-center">
            <div className="bg-white/35 shadow-lg rounded-lg p-6 w-[90%] md:w-[70%] lg:w-[80%]">
              <h2 className="text-3xl font-bold text-green-600 mb-6 text-center">
                GitHub Contributions
              </h2>
              <GitHubCalendar
                username="creepjxvedant"
                blockSize={16}
                blockMargin={4}
                color="#1e90ff"
                fontSize={16}
              />
            </div>
          </div>
  )
  }

  export default GitHubContribution;