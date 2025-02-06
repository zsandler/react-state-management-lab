import React, { useState } from 'react';
import './App.css'

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [zombieFighters, setZombieFighters] = useState(
    [
      {
        id: 1,
        name: 'Survivor',
        price: 12,
        strength: 6,
        agility: 4,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
      },
      {
        id: 2,
        name: 'Scavenger',
        price: 10,
        strength: 5,
        agility: 5,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
      },
      {
        id: 3,
        name: 'Shadow',
        price: 18,
        strength: 7,
        agility: 8,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
      },
      {
        id: 4,
        name: 'Tracker',
        price: 14,
        strength: 7,
        agility: 6,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
      },
      {
        id: 5,
        name: 'Sharpshooter',
        price: 20,
        strength: 6,
        agility: 8,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
      },
      {
        id: 6,
        name: 'Medic',
        price: 15,
        strength: 5,
        agility: 7,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
      },
      {
        id: 7,
        name: 'Engineer',
        price: 16,
        strength: 6,
        agility: 5,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
      },
      {
        id: 8,
        name: 'Brawler',
        price: 11,
        strength: 8,
        agility: 3,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
      },
      {
        id: 9,
        name: 'Infiltrator',
        price: 17,
        strength: 5,
        agility: 9,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
      },
      {
        id: 10,
        name: 'Leader',
        price: 22,
        strength: 7,
        agility: 6,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
      },
    ])

  const handleAddFighter = (newFighter) => {
    setTeam([...team, newFighter])
    setMoney(money - newFighter.price)

    const updatedZombieFighters = zombieFighters.filter(
      (fighter) => fighter.id !== newFighter.id)
    setZombieFighters(updatedZombieFighters)
  }

  const totalStrength = (fighters) => {
    return fighters.reduce((total, fighter) => total + fighter.strength, 0)
  }

  const totalAgility = (fighters) => {
    return fighters.reduce((total, fighter) => total + fighter.agility, 0)
  }

  return (
    <>
      {/* {money < zombieFighters.price ? console.log('Not enough money') : ''} */}
      <h2>Your Team</h2>
      {team.length === 0 ? <h4>Pick some team members!</h4> : ''}
      <h3>Total Team Strength: {totalStrength(team)}</h3>
      <h3>Total Team Agility: {totalAgility(team)}</h3>
      <p>Money remaining: {money}</p>
      <ul>
        {team.map((fighter, idx) => (
          <li key={idx}>
            <div>
              <h3>{fighter.name}</h3>
              <p>Price: {fighter.price}</p>
              <p>Strength: {fighter.strength}</p>
              <p>Agility: {fighter.agility}</p>
              <img src={fighter.img} alt={fighter.name} width="100" />
            </div>
          </li>
        ))}
      </ul>
      <hr />
      <h2>Zombie Fighters!</h2>

      <ul>
        {zombieFighters.map((zombieFighter, idx) => (
          <li key={idx}>
            <div>
              <h3>{zombieFighter.name}</h3>
              <p>Price: {zombieFighter.price}</p>
              <p>Strength: {zombieFighter.strength}</p>
              <p>Agility: {zombieFighter.agility}</p>
              <img src={zombieFighter.img} alt={zombieFighter.name} width="100" />
              <br />
              <button onClick={() => handleAddFighter(zombieFighter)}>
                Add {zombieFighter.name}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App
