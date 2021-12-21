export const renderImages = name => {
  switch (name) {
    case 'Luke Skywalker':
      return require('../images/Luke.jpg');
    case 'C-3PO':
      return require('../images/C-3PO.jpg');
    case 'R2-D2':
      return require('../images/R2-D2.jpg');
    case 'Darth Vader':
      return require('../images/DarthVader.jpg');
    case 'Leia Organa':
      return require('../images/LeiaOrgana.jpg');
    case 'Owen Lars':
      return require('../images/OwenLars.jpg');
    case 'Beru Whitesun lars':
      return require('../images/BeruWhitesunlars.jpg');
    case 'R5-D4':
      return require('../images/R5-D4.jpg');
    case 'Biggs Darklighter':
      return require('../images/BiggsDarklighter.jpg');
    case 'Obi-Wan Kenobi':
      return require('../images/Obi-WanKenobi.jpg');
    case 'CR90 corvette':
      return require('../images/CR90corvette.png');
    case 'Imperial I-class Star Destroyer':
      return require('../images/StarDestroyer.jpg');
    case 'Sentinel-class landing craft':
      return require('../images/Sentinel-classLandingCraft.jpg');
    case 'DS-1 Orbital Battle Station':
      return require('../images/DS-1OrbitalBattleStation.png');
    case 'YT-1300 light freighter':
      return require('../images/YT-1300LightFreighter.png');
    case 'BTL Y-wing':
      return require('../images/BTLY-wing.jpg');
    case 'T-65 X-wing':
      return require('../images/T-65X-wing.jpg');
    case 'Twin Ion Engine Advanced x1':
      return require('../images/TwinIonEngineAdvanced.png');
    case 'Executor-class star dreadnought':
      return require('../images/Executor-class.png');
    case 'GR-75 medium transport':
      return require('../images/GR-75MediumTransport.jpg');
    case 'A New Hope':
      return require('../images/ANewHope.jpg');
    case 'The Empire Strikes Back':
      return require('../images/TheEmpireStrikesBack.jpg');
    case 'Return of the Jedi':
      return require('../images/ReturnOfTheJedi.jpg');
    case 'The Phantom Menace':
      return require('../images/ThePhantomMenace.jpg');
    case 'Attack of the Clones':
      return require('../images/AttackClones.jpg');
    case 'Revenge of the Sith':
      return require('../images/RevengeSith.jpg');
    case 'Sand Crawler':
      return require('../images/SandCrawler.png');
    case 'T-16 skyhopper':
      return require('../images/T-16skyhopper.png');
    case 'X-34 landspeeder':
      return require('../images/X-34landspeeder.jpg');
    case 'TIE/LN starfighter':
      return require('../images/TIELNstarfighter.jpg');
    case 'Snowspeeder':
      return require('../images/Snowspeeder.png');
    case 'TIE bomber':
      return require('../images/TIEbomber.png');
    case 'AT-AT':
      return require('../images/AT-AT.jpg');
    case 'AT-ST':
      return require('../images/AT-ST.jpg');
    case 'Storm IV Twin-Pod cloud car':
      return require('../images/Storm.png');
    case 'Sail barge':
      return require('../images/Sailbarge.jpg');
    case 'Human':
      return require('../images/Human.png');
    case 'Droid':
      return require('../images/Droid.jpg');
    case 'Wookie':
      return require('../images/Wookie.jpg');
    case 'Rodian':
      return require('../images/Rodian.jpg');
    case 'Hutt':
      return require('../images/Hutt.jpg');
    case 'Yoda\'s species':
      return require('../images/Yoda.png');
    case 'Trandoshan':
      return require('../images/Trandoshan.jpg');
    case 'Mon Calamari':
      return require('../images/Mon.jpg');
    case 'Ewok':
      return require('../images/Ewok.jpg');
    case 'Sullustan':
      return require('../images/Sullustan.jpg');

    default:
      return require('../images/Default.png');
  }
};
