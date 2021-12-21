import R from '../resources/R';

export const logTheEvent = (level, message, object) => {
  console.log(level, message, object);
  customAxios.post(R.url.logs + '?key=' + R.logKey, {level, message, object: JSON.stringify(object)})
      .then((resp) => {console.log(resp)})
      .catch((error) => {
      console.log('logTheEventError', error.response);
  });
};
