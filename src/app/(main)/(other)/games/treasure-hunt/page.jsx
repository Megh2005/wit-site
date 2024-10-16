import React from 'react';
import Link from 'next/link';

const games = [
    { name: 'Hunt 1', status: 'Active', targetCoins: 100, route: '/games/treasure-hunt/hunt-1' },
    { name: 'Hunt 2', status: 'Closed', targetCoins: 200, route: '/games/treasure-hunt/hunt-1' },
    { name: 'Hunt 3', status: 'Active', targetCoins: 150, route: '/games/treasure-hunt/hunt-1' },
    { name: 'Hunt 4', status: 'Closed', targetCoins: 250, route: '/games/treasure-hunt/hunt-1' },
    { name: 'Hunt 5', status: 'Active', targetCoins: 300, route: '/games/treasure-hunt/hunt-1' },
];

const TreasureHuntPage = () => {
    return (
        <div className="container mx-auto p-4 h-screen">
            {games.map((game, index) => (
                <Link key={index} href={game.route}>
                    <div 
                        className="bg-white shadow-2xl p-8 px-[-4vw] mb-4 rounded-lg flex flex-col items-center cursor-pointer transition-transform transform hover:scale-105 border-4 border-blue-700"
                        style={{
                            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.8)', 
                        }}
                    >
                        <h2 className="text-3xl text-emerald-600 font-bold mb-2 text-center">{game.name}</h2>
                        <div className="flex text-sm justify-between px-[-2rem] font-semibold gap-6">
                            <p className="text-gray-700 text-lg">Status: {game.status}</p>
                        <p className="text-gray-700 text-lg">Target Coins: {game.targetCoins}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default TreasureHuntPage;
