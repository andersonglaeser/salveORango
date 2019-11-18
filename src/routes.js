import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Init from '~/pages/Init';
import Login from '~/pages/Login';

const Routes = createAppContainer(
    createSwitchNavigator(
        {
            Init,
            Login,
        },
        {
            initialRouteName: 'Init',
        },
    ),
);

export default Routes;
