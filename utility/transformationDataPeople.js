import {Path} from 'react-native-svg';

export const transformationDataPeople = value => {
  switch (value) {
    case 'male':
      return 'Мужской';
    case 'blue':
      return 'Синий';
    case 'blond':
      return 'Белый';
    case 'fair':
      return 'Фентези';
    case 'gold':
      return 'Золотой';
    case 'white, blue':
      return 'Белый, синий';
    case 'red':
      return 'Красный';
    case 'yellow':
      return 'Желтый';
    case 'white':
      return 'Белый';
    case 'brown':
      return 'Коричневый';
    case 'female':
      return 'Женский';
    case 'light':
      return 'Светлый';
    case 'brown, grey':
      return 'Коричневый, серый';
    case 'white, red':
      return 'Белый, красный';
    case 'black':
      return 'Черный';
    case 'auburn, white':
      return 'Каштановый, белый';
    case 'blue-gray':
      return 'Серо-голубой';
    case 'blue, green, yellow, brown, golden, red':
      return 'Синий, зеленый, желтный, коричневый, золотой, красный';
    case 'yellow, red':
      return 'Желто-красный';
    case 'brown, green, yellow':
      return 'Коричневый, зеленый, желтый';
    case 'yellow, orange':
      return 'Желто-оранжевый';
    case 'orange, brown':
      return 'Оранжево-коричневый';
    case 'blonde, brown, black, red':
      return 'Белый, коричневый, черный, красный';
    case 'black, brown':
      return 'Черно-коричневый';
    case 'brown, white':
      return 'Коричнево-белый';
    case 'white, brown, black':
      return 'Белый, коричневый, черный';
    case 'unknown':
      return 'н/a';
    case 'mammal':
      return 'Млекопитающее';
    case 'artificial':
      return 'Искусственный';
    case 'sentient':
      return 'Разумный';
    case 'gastropod':
      return 'Брюхоногие моллюски';
    case 'reptile':
      return 'Рептилия';
    case 'amphibian':
      return 'Амфибия';
    case 'sentient':
      return 'Разумный';
    case 'reptilian':
      return 'Рептилоид';

    default:
      Path;

      return 'н/а';
  }
};
