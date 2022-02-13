const PUBLIC_URL = process.env.PUBLIC_URL;

export const redirect = (props, page) => {
  switch (page) {
    case 1:
      props.history.push(PUBLIC_URL + "/");
      break;
    case 2:
      props.history.push(PUBLIC_URL + "/question2");
      break;
    default:
  }
};
