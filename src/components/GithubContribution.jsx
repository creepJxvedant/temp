import GitHubCalendar from "react-github-calendar";

function GitHubContribution() {
  return (
      <div className="relative w-[100vw] h-[100vh] flex items-center justify-center github-contribution">
            <div className="bg-[#374151] shadow-lg rounded-lg p-6 w-[90%] md:w-[70%] lg:w-[80%]">
              <h2 className="text-3xl font-bold text-white mb-6 text-center">
                GitHub Contributions
              </h2>
            <GitHubCalendar
  username="creepjxvedant"
  blockSize={16}
  blockMargin={4}
  fontSize={16}
theme={{
  dark: ['#111827', '#1e293b', '#334155', '#0f766e', '#2dd4bf']
}}







/>

            </div>
          </div>
  )
  }

  export default GitHubContribution;