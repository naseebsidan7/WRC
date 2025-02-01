import React from "react";

const Standings = () => {
  // Sample data (replace with your dynamic data if needed)
  const standings = [
    { pos: "1", team: "Toyota Gazoo Racing", played: 10, won: 6, lost: 0, draw: 4, ded: 0, points: 250, pct: 83.33 },
    { pos: "2", team: "Hyundai Shell Mobis", played: 10, won: 3, lost: 4, draw: 3, ded: 0, points: 180, pct: 60.00 },
    { pos: "3", team: "M-Sport Ford", played: 10, won: 1, lost: 6, draw: 3, ded: 0, points: 150, pct: 50.00 },
    { pos: "4", team: "Toyota Gazoo Junior", played: 10, won: 0, lost: 8, draw: 2, ded: 0, points: 120, pct: 40.00 },
    { pos: "5", team: "Hyundai N Racing", played: 10, won: 0, lost: 9, draw: 1, ded: 0, points: 90, pct: 30.00 },
    { pos: "6", team: "Alfa Romeo Racing", played: 9, won: 3, lost: 4, draw: 2, ded: 0, points: 170, pct: 56.67 },
    { pos: "7", team: "Citroën Total Abu Dhabi", played: 10, won: 2, lost: 5, draw: 3, ded: 0, points: 140, pct: 46.67 },
    { pos: "8", team: "Pirelli Racing", played: 9, won: 1, lost: 7, draw: 1, ded: 0, points: 100, pct: 33.33 },
    { pos: "9", team: "Ford M-Sport", played: 10, won: 1, lost: 8, draw: 1, ded: 0, points: 80, pct: 26.67 },
    { pos: "10", team: "Rally Team Sweden", played: 9, won: 0, lost: 8, draw: 1, ded: 0, points: 60, pct: 20.00 }
  ];

  // Slice the first 7 teams
  const topTeams = standings.slice(0, 7);

  return (
    <div className="dark:bg-black bg-white text-white py-8 px-4 " id="standings">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-4 text-black dark:text-white">
          <h2 className="text-2xl font-bold">STANDINGS</h2>
          <button className="px-4 py-2 border border-black dark:border-white rounded-full 
                   hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black 
                   transition">
          View All
        </button>

        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-separate border-spacing-y-2">
            <thead>
              <tr className="bg-gray-800 text-left">
                <th className="py-2 px-4">POS</th>
                <th className="py-2 px-4">TEAM</th>
                <th className="py-2 px-4">PLAYED</th>
                <th className="py-2 px-4">WON</th>
                <th className="py-2 px-4">LOST</th>
                <th className="py-2 px-4">DRAW</th>
                <th className="py-2 px-4">DED</th>
                <th className="py-2 px-4">POINTS</th>
                <th className="py-2 px-4">PCT</th>
              </tr>
            </thead>
            <tbody>
              {topTeams.map((team, index) => (
                <tr
                  key={index}
                  className={`bg-gray-900 hover:bg-gray-700 transition ${
                    index % 2 === 0 ? "bg-opacity-75" : "bg-opacity-50"
                  }`}
                >
                  <td className="py-2 px-4">{team.pos}</td>
                  <td className="py-2 px-4 flex items-center gap-2">
                    <img
                      src={`/flags/${team.team.toLowerCase().replace(" ", "_")}.png`}
                      alt=''
                      className="w-5 h-5"
                    />
                    {team.team}
                  </td>
                  <td className="py-2 px-4">{team.played}</td>
                  <td className="py-2 px-4">{team.won}</td>
                  <td className="py-2 px-4">{team.lost}</td>
                  <td className="py-2 px-4">{team.draw}</td>
                  <td className="py-2 px-4">{team.ded}</td>
                  <td className="py-2 px-4">{team.points}</td>
                  <td className="py-2 px-4">{team.pct.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Standings;
