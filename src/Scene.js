import React, {useState} from "react"; 
import Options from "./options"; 
import Clip from "./clip"; 
import styling from "./styles/Scene.module.css"
import clips from './clips.json'; // import the JSON file

const credit = {
    color: "#b0a795",
    position: "fixed",
    marginLeft: "75%", 
    marginTop: "2%",
    marginBottom: 0
  }

// array of random movies; 
const movieNames = ['Guardians of the Galaxy Vol. 3', 'Transformers: Rise of the Beasts', 'Fast X', 'Knights of the Zodiac', 'The Darkest Minds', 'Sound of Freedom', 'San Andreas',
 'John Wick: Chapter 4', 'Insidious: The Last Key', 
 'It´s pursuing time', "The Terminal", "Hateful Eight", 
 'Sheroes', 'The Super Mario Bros. Movie', 'Barbie', 'Elemental', 'A Good Day to Die Hard', 'The Conjuring: The Devil Made Me Do It', 'Insidious: The Red Door', 'War of the Worlds: The Attack', 'Mission: Impossible - Dead Reckoning Part One', 'Extraction 2', 'My Fault', "Mortal Kombat Legends: Scorpion's Revenge", 'Skinamarink', 'The Little Mermaid', 'The Out-Laws', 'The Flash', 'Gantz:O', 'Mortal Kombat Legends: Battle of the Realms', 'Avatar: The Way of Water', 
 'Shadow Master', 'Run Rabbit Run', 'Cold Eyes', 'Evil Dead Rise', 'The Black Demon', 'The Wrath of Becky', 'Bed Rest', 'Hypnotic', "The Pope's Exorcist", 'Detective vs. Sleuths', 'Puss in Boots 1', 'Little Bone Lodge', 'Sisu', 'Ant-Man and the Wasp: Quantumania', "Guy Ritchie's The Covenant", 'Nimona', 'iNumber Number: Jozi Gold', 'Eradication', 'Scooby-Doo! The Mystery Begins', 'Indiana Jones and the Dial of Destiny', 'Creed III', 'Shazam! Fury of the Gods', 'Through My Window: Across the Sea', 'The Lorax', 'Encanto', 'Heaven in Hell', 'Warhorse One', 'Oppenheimer', 'Black Clover: Sword of the Wizard King', 'Los bastardos', 'It', 'Gold Brick', 'Scream VI', 'Spider-Man: No Way Home', 'PAW Patrol: The Movie', 'The Angry Black Girl and Her Monster', 'Suzume', 'Ghosted', "Scooby-Doo! and the Witch's Ghost", 'The Initiated', 'Garfield', 'Black Panther: Wakanda Forever', 'Seasons', 'The Mount 2', "Accident Man: Hitman's Holiday", 'Black Adam', 'No Hard Feelings', 'Fate/strange Fake -Whispers of Dawn-', 'To Catch a Killer', 'Asteroid City', 'Ambush', 'Miraculous: Ladybug & Cat Noir, The Movie', 'Real Steel', 'Sword Art Online the Movie -Progressive- Scherzo of Deep Night',
  'Crater', 'The Godfather 2', 'Cocaine Bear', 'The Wandering Earth II', 'Fear the Invisible Man', 'Big Top Scooby-Doo!', '65', 'M3GAN', 'Two Night Stand', 'The Mother', 'Bugaw', 'Ruby Gillman, Teenage Kraken', 'Norm of the North: Keys to the Kingdom', 'Oppressive Torture', 'Insidious', 'Project Wolf Hunting', 'Operation Seawolf', 'Justice League: Throne of Atlantis', "Creed I", "Friends with Benefits", "About Time", "Crazy Stupid Love", "No Strings Attached", 
 'Meg 2: The Trench', 'Plane', 'The Batman', 'Titanic', 'Six Swedish Girls at a Pump', 'The Tank', "Lucy", 
  'Monster Hunter: Legends of the Guild', 'Fall', 'Fury', 'Jurassic World Dominion', 'Mission: Impossible', 'Dungeons & Dragons: Honor Among Thieves', 'Thor: Love and Thunder', 'Return of Punch and Judy', 'Ryo', "Mother's Day", "Gabriel's Redemption: Part I", 'Tayuan', 'Sonic the Hedgehog 2', 'The Last Kingdom: Seven Kings Must Die', "Harry Potter and the Philosopher's Stone", 'The Chronicles of Narnia: The Lion, the Witch and the Wardrobe', 'Racetime', 'The Best Man', 'Harry Potter and the Half-Blood Prince', 'The Three Musketeers', 'Prey', 'Blade', 'Harry Potter and the Chamber of Secrets', 'My Fairy Troublemaker', 'Meet the Robinsons', 
'The Devil Conspiracy', 'Winnie the Pooh: Blood and Honey', 'Mission: Impossible - Fallout', 'Deadpool', 'The Machine', 'Insidious: Chapter 2', 'Harry Potter and the Order of the Phoenix', 'Sniper: The White Raven', 'Terrifier 2', 'Turning Red', 'Infinity Pool', 'Big Mommas: Like Father, Like Son', 'Lullaby', 'The Whale', 'Island of the Dolls', 'Harry Potter and the Goblet of Fire', 'Harry Potter and the Deathly Hallows: Part 2', 'After Ever Happy', 'Insidious: Chapter 3', 'Homefront', 'Luck', 'The Meg', 'Making It Up', 'The Little Mermaid', 'Prey for the Devil', 'Stars at Noon', 'Murder Mystery 2', 'Avatar', 'Marvel Rising: Chasing Ghosts', 'Blood & Gold', 'Sinbad: Legend of the Seven Seas', 'Transformers: Age of Extinction', 'Exploits of a Young Don Juan', 'Doctor Strange in the Multiverse of Madness', 
'After Everything', 'AKA', 'Renfield', 'Dragon Ball Super: Super Hero', 'Harry Potter and the Deathly Hallows: Part 1', 'A Quiet Place Part II', 'LEGO Frozen Northern Lights', "Eyes Wide Shut", "The Departed", "Scarface", 
'Little Man', "Flamin' Hot", 'Harry Potter and the Prisoner of Azkaban', 'Mummies', 'Baby Face', 
'Dumbo', 'Mission: Impossible - Rogue Nation', 'Attack on Titan', 'Sing 2', 'Nefarious', 'Hacksaw Ridge', 'Encanto at the Hollywood Bowl', 'Kandahar', 'American Carnage', 'Beautiful Breasts Serenade: Erotic Fair Skin', 'Deadpool 2', 'Unknown: Killer Robots', 
'Beautiful Disaster', 'Deathstroke: Knights & Dragons - The Movie', 'Hotel Transylvania: Transformania', 'After', 'The Avengers', 'Iron Man: Rise of Technovore', 'Eternal 831', 'Extras For Chasing The Dragon', 'Cruella', 'The Next 365 Days', 'Memento', 'The Gigolo', "Zack Snyder's Justice League", 'Black Emanuelle', 'Raped by an Angel', 'Bird Box Barcelona', 'Fist of the Condor', 'Ip Man: The Awakening', 'Eden', "Demon Slayer: Kimetsu no Yaiba Sibling's Bond", '99 Moons', 'Hawaiian Vacation', 'X', 'Mission: Impossible - Ghost Protocol', 'Knock at the Cabin', 'Instead of Husband', 'After We Fell', 'The Blind Side', 'Marvel Rising: Playing with Fire', 'Transformers: The Last Knight', 'Play Dead', 'Tangled', 'Mafia Mamma', 'Extraction', 'Minions: The Rise of Gru', 'Tin & Tina', 'Drunken Fist', 'Spider-Man', 'Monsters, Inc.', 'The Communion Girl', 'Sound of Freedom', 'The Woman King', 'Sanctuary', 
'After We Collided', 'Wheatfield', 'Iron Man 2', 'Stand by Me Doraemon', 'The Godfather', 'Marvel Rising: Battle of the Bands', 'Troll', 'Coraline', 'Empire of Lust', 'Youthful Older Sister', 'Peter Pan & Wendy', 'Shotgun Wedding', 'Avengers: Endgame', "Big Momma's House", 'Frozen', 'Iron Man', 'Craving', 'The Suicide Squad', "Big Momma's House 2", '20th Century Girl', '365 Days: This Day', 'The Amazing Spider-Man 2', 'The School Teacher', "Gabriel's Inferno: Part IV", 'Spider-Man: Homecoming', 'Toy Story 3', 'Shrek', 'Six Swedish Girls in Alps', 'To Be Twenty', 'Prizefighter: The Life of Jem Belcher', 'The Conjuring', 'One Day as a Lion', 'Alice in Wonderland', 'Smile', 'Battle for Saipan', 'Fifty Shades of Grey', 'Big Hero 6', 'Scream', 'Ride On', 'The Quintessential Quintuplets Movie', 'Venom: Let There Be Carnage', 'Inside Out', 'It Chapter Two', 'The Nun', 
'The Lion King', 'Dune', 'John Wick: Chapter 3 - Parabellum', 'Mission: Impossible - Dead Reckoning Part Two', 'Uncharted', 'Two Witches', 'Shark Side of the Moon', 'The Secret Kingdom', 'The Nun II', 'The Matrix', 'Mavka: The Forest Song', 'JUNG_E', 'Beast', 'Coco', 'Mission: Impossible III', 'Graphic Desires', 'Jagged Mind', 'John Wick: Chapter 2', 'Horseplay', 'Blue Jean', 'Raiders of the Lost Ark', 'Boonie Bears: Back to Earth', 'The Amazing Spider-Man', 'Zootopia', "Pirates of the Caribbean: At World's End", 'Terminator Genisys', 'Za gyakutai: Nyotai ikedori-hen', 'Bullet Train', 'Supercell', 'Transfusion', 'Woman with Pierced Nipples', "Roald Dahl's Matilda the Musical", 'Shark Bait', 'A Deadly Mistake', 'All Quiet on the Western Front', 'Top Gun', 'Avengers: Age of Ultron', 'The Maze Runner', 'Sex and Zen II', 'Fantastic Beasts: The Secrets of Dumbledore', 'R.I.P.D. 2: Rise of the Damned', 'Fifty Shades Freed', 'Luca', 'Project X', 'The Exorcism of God', 'The Conjuring 2', 'The Shawshank Redemption', 
'Brothers', 'Pirates of the Caribbean: On Stranger Tides', 'A Place to Fight For', 'Me Before You', "Are You There God? It's Me, Margaret.", "Five Nights at Freddy's", 'Blue Beetle', 'A Frozen Rooster', 'Tennet', 'The Perfect Find', 'The Ghosts of Monday', 'Captain America: Civil War', 'Spirited Away', 'Hex', 'A Street Cat Named Bob', 'Cinderella', 'The Hunger Games: Mockingjay - Part 1', 'Barbie', 'Baise-moi', 'Dumbo', 'Eternals', 'The Sensuous Nurse', 'Young Sister-In-Law 2', 'The Enforcer', 'Two Sinners and a Mule', 'Cloudy Mountain', 'Home for Rent', 'Indiana Jones and the Last Crusade', 'Frivolous Lola', 'Your Name.', 'Beau Is Afraid', 'Ice Age', 'Pirates Down the Street II: The Ninjas from Across', 'Nymphomaniac: Vol. II', 'Through My Window', 'Grotesque', 'Gifted', 'Hunt', 'Mulan', 'Ted 1', 'The Ice Age Adventures of Buck Wild',
  'Mari(dos)', 'Japanese Mom 2', 'Fast & Furious Presents: Hobbs & Shaw', 'The Lorax', 'Scooby-Doo', 'Frozen II', 'Jujutsu Kaisen 0', 'Boyka: Undisputed IV', '1917', 'Mission: Impossible II', 'White Chicks', 'The Rape', 'The Boss Baby: Family Business', 'The Princess and the Frog', 'The Exorcist', 'Godzilla vs. Kong', 'Babylon', 'Spider-Man: Far From Home', 'Toy Story 2', 'La Usurpadora: The Musical', 'Spider-Man 3', 'Beauty and the Beast', 'A Go! Go! Cory Carson Halloween', 'The Lord of the Rings: The Fellowship of the Ring', 'About My Father', 'Miraculous World: New York, United HeroeZ', 'Snag', "The Emperor's New Groove", 'Guardians of the Galaxy', 'Moonfall', 'Black Widow', 'Chupa', 'Polite Society', 'Violent Night', 'Sick of Myself', 'Huesera: The Bone Woman', 'Assassin Club', 'The Japanese Wife Next Door: Part 2', 'A Man Called Otto', "World's Best", 'To Me, the One Who Loved You', 'Perfect Addiction', 'Madrid, 1987', 'Medieval', 'The Hobbit: The Battle of the Five Armies', 'Three Swedish Girls in Upper Bavaria', 
 'My Name Is Vendetta', 'Jeepers Creepers: Reborn', 'Scary Movie', 'Free Guy', "Pirates of the Caribbean: Dead Man's Chest", 'Shrek 2', 'The Northman', 'Hidden Strike', 'Star Wars', 'Up', 'The Boss Baby: Christmas Bonus', 'Finding Nemo', 'Eight Legged Freaks','Sonic the Hedgehog', 'Project Gemini', 'The Lair', 'RRR', 'Grown Ups 2', 'Greenland', 'The Guardians of the Galaxy Holiday Special', 'Hocus Pocus 2', "Howl's Moving Castle", 'All Ladies Do It', 'The Hangover', 'Creed II', 'Die Hart', 'Cinderella', 'Iron Man 3', 'Athena', 'Taxi Driver', 'High School Lynching', 'The Lost City', 'How to Train Your Dragon: The Hidden World', 'Disenchanted', 'Snow White and the Seven Dwarfs', 'A Quiet Place', 'Raya and the Last Dragon', 'DC League of Super-Pets', 'Simple Passion', 'Chappie', 'Terminator: Dark Fate', 'The Haunting of Hell Hole Mine', 'Logan', 'The Ledge', 'Black Panther', 'Inglourious Basterds', 'Morbius', 'Thor', 'The Raffle', 'Female Boss Hooker', 
 'Jungle', 'Play Catch', 'Everything Everywhere All at Once', 'Asterix & Obelix: The Middle Kingdom', 'Love Again', 
 'Fullmetal Alchemist: The Final Alchemy', 'Clifford the Big Red Dog', 'The Silencing', 'Terrifier', 'Furious 7', 'World War Z', 'Flower and Snake 4: White Uniform Rope Slave', 'Grown Ups', 'The Equalizer', 'The Bad Guys', 'Teenage Mutant Ninja Turtles', 'The Offering', 'Parasite', 'The Social Network']

// alternatives is a String array of movies. They are incorrect.
// In the clips folder, I created a json file to access their names easily. For this, I homebrewed jq and called, 
// ls | jq -R -s -c 'split("\n")[:-1]' > clips.json # on the terminal.
function Scene() {
    const [selectedClip, setSelectedClip] = useState("/clips/Ayla.mp4");
    const [usedClips, setUsedClips] = useState([]);
    const [unusedMovies, setUnusedMovies] = useState([
      "Braveheart",
      "Spartacus",
      "Citizen Kane",
      "Miracle in Cell No. 7",
    ]);
    const [correctindex, setCorrectIndex] = useState(1);
    const [clipsArray, setClipsArray] = useState(Object.values(clips));
    const [gameOver, setGameOver] = useState(false);
  
    function handleSelection() {
      if (gameOver) {
        return; 
      }
  
      const currentClip = selectedClip.replace("/clips/", "").replace(".mp4", "");
  
      const newUsedClips = [...usedClips, currentClip];
      const newClipsArray = clipsArray.filter(
        (clip) =>
          !newUsedClips.includes(clip.replace("/clips/", "").replace(".mp4", ""))
           && !currentClip.includes(clip.replace("/clips/", "").replace(".mp4", ""))
      );
      console.log(newUsedClips); 
      console.log(newClipsArray);
  
      if (newClipsArray.length === 0) {
        setGameOver(true);
        return;
      }
  
      let randomClip = newClipsArray[Math.floor(Math.random() * newClipsArray.length)];
  
      let tempMovies = [];
      for (let i = 0; i < 4; i++) {
        let temp = movieNames[Math.floor(Math.random() * movieNames.length)];
        while (tempMovies.includes(temp) || temp.includes(randomClip)) {
          temp = movieNames[Math.floor(Math.random() * movieNames.length)];
        }
        tempMovies.push(temp);
      }
  
      setUsedClips(newUsedClips);
      setSelectedClip(`/clips/${randomClip}`);
      setClipsArray(newClipsArray);
      setUnusedMovies(tempMovies);
      setCorrectIndex(Math.floor(Math.random() * 4));
    }

    if (gameOver) {
        return (<div className={styling.background}>
             <h1 className={styling.title}>Curtain Call</h1>
                 <h2 className={styling.ccall}>{"No After Credits... Go Home"}</h2>         
                 <p style={credit}>Created by Atilla Colak</p>
        </div>); 
    }
    else {
        return (
      <div className={styling.background}>
        <h1 className={styling.title}>Curtain Call</h1>
        {selectedClip && <Clip src={selectedClip} />}
        <br />
        {selectedClip && (
          <Options
            correctIndex={correctindex}
            alternatives={unusedMovies}
            name={selectedClip.replace(".mp4", "").replace("/clips/", "")}
            onClick={handleSelection}
          />
        )}
        <p style={credit}>Created by Atilla Colak</p>
      </div>
    );
    }
}
  
export default Scene; 
