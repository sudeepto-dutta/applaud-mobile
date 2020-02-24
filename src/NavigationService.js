import {CommonActions} from '@react-navigation/native';

let navigator;

function setTopLevelNavigator(navigatorRef) {
  navigator = navigatorRef;
}

//Need to remove below method as we wont be using passing parms to screen instead we will use state to populate screens
const navigateWithParams = (routeName, params) => {
  navigator.dispatch(
    CommonActions.navigate({
      routeName,
      params,
    }),
  );
};

const navigate = routeName => {
  navigator.dispatch(
    CommonActions.navigate({
      routeName,
    }),
  );
};
// add other navigation functions that you need and export them

const back = () => {
  navigator.dispatch(CommonActions.back());
};

export default {
  navigate,
  navigateWithParams,
  setTopLevelNavigator,
  back,
};
