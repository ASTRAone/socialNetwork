import {Platform} from 'react-native';

export default class R {
  static server = {
    swapi: 'https://swapi.dev/api/',
  };

  static fonts = {};

  static url = {
    people: 'people/',
    technologies: 'starships/',
    films: 'films/',
    transport: 'vehicles/',
    variety: 'species/',
  };

  static string = {
    unexpectedErrorComponent: {
      unexpectedError: 'Непредвиденная ошибка',
      unexpectedErrorText:
        'Произошла непредвиденная ошибка, группа спасателей уже разбирается с этим. Пожалуйста попробуйте позже',
      refresh: 'Обновить',
    },
  };

  static colors = {
    gold: '#FFE300', /* label */
    black: '#00000',
    white: '#FFFFFF',
    dark10: '#1c1e22', /* footer/header */
    dark20: '#32383e', /* content */
    gray10: '#c8c8c8', /* title */
    gray30: '#a7a7a7', /* text/label */
    gray40: '#272b30', /* content */
  };
}
