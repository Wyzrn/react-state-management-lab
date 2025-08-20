import React, { useState } from 'react';

function App() {
  // State variables
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [zombieFighters, setZombieFighters] = useState([
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
  ]);

  // Calculate total strength and agility
  const totalStrength = team.reduce((sum, fighter) => sum + fighter.strength, 0);
  const totalAgility = team.reduce((sum, fighter) => sum + fighter.agility, 0);

  // Function to add a fighter to the team
  const handleAddFighter = (fighter) => {
    if (money >= fighter.price) {
      setTeam([...team, fighter]);
      setZombieFighters(zombieFighters.filter((f) => f.id !== fighter.id));
      setMoney(money - fighter.price);
    } else {
      console.log('Not enough money');
    }
  };

  // Function to remove a fighter from the team
  const handleRemoveFighter = (fighter) => {
    setTeam(team.filter((f) => f.id !== fighter.id));
    setZombieFighters([...zombieFighters, fighter]);
    setMoney(money + fighter.price);
  };

  // Inline styles
  const styles = {
    app: {
      fontFamily: 'Arial, sans-serif',
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
    },
    heading: {
      textAlign: 'center',
    },
    fightersList: {
      listStyle: 'none',
      padding: 0,
      display: 'flex',
      flexWrap: 'wrap',
      gap: '20px',
    },
    fighterCard: {
      border: '1px solid #ccc',
      padding: '10px',
      width: '200px',
      textAlign: 'center',
      borderRadius: '5px',
    },
    fighterImage: {
      width: '100%',
      height: 'auto',
      borderRadius: '5px',
    },
    addButton: {
      backgroundColor: '#4CAF50',
      color: 'white',
      border: 'none',
      padding: '8px 16px',
      cursor: 'pointer',
      borderRadius: '5px',
      marginTop: '10px',
    },
    removeButton: {
      backgroundColor: '#f44336',
      color: 'white',
      border: 'none',
      padding: '8px 16px',
      cursor: 'pointer',
      borderRadius: '5px',
      marginTop: '10px',
    },
  };

  return (
    <div style={styles.app}>
      <h1 style={styles.heading}>Zombie Apocalypse Team Builder</h1>
      <h2 style={styles.heading}>Available Money: ${money}</h2>
      
      <h3 style={styles.heading}>Available Fighters</h3>
      <ul style={styles.fightersList}>
        {zombieFighters.map((fighter) => (
          <li key={fighter.id} style={styles.fighterCard}>
            <img style={styles.fighterImage} src={fighter.img} alt={fighter.name} />
            <h4>{fighter.name}</h4>
            <p>Price: ${fighter.price}</p>
            <p>Strength: {fighter.strength}</p>
            <p>Agility: {fighter.agility}</p>
            <button style={styles.addButton} onClick={() => handleAddFighter(fighter)}>
              Add
            </button>
          </li>
        ))}
      </ul>

      <h3 style={styles.heading}>Your Team</h3>
      {team.length === 0 ? (
        <p>Pick some team members!</p>
      ) : (
        <ul style={styles.fightersList}>
          {team.map((fighter) => (
            <li key={fighter.id} style={styles.fighterCard}>
              <img style={styles.fighterImage} src={fighter.img} alt={fighter.name} />
              <h4>{fighter.name}</h4>
              <p>Price: ${fighter.price}</p>
              <p>Strength: {fighter.strength}</p>
              <p>Agility: {fighter.agility}</p>
              <button style={styles.removeButton} onClick={() => handleRemoveFighter(fighter)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}

      <h3 style={styles.heading}>Team Stats</h3>
      <p>Total Strength: {totalStrength}</p>
      <p>Total Agility: {totalAgility}</p>
    </div>
  );
}

export default App;