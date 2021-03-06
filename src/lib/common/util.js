/* eslint-disable no-useless-escape */


function isProductionEnv() {
  return process.env.NODE_ENV === 'production';
}

function isTestEnv() {
  return process.env.NODE_ENV === 'test';
}

function showTheGatewayPspPicture() {
  if (isProductionEnv() === false) {
    const gatewayPsp = 'Welcome little stranger...\n'
      + '{} {}\n'
                                         + '!  !  ! II II !  !  !\n'
                         + '!  I__I__I_II II_I__I__I  !\n'
                      + 'I_/|__|__|_|| ||_|__|__|\_I\n'
                      + '! /|_/|  |  | || || |  |  |\_|\ !\n'
                   + '.--.        I//|  |  |  | || || |  |  |  |\\I        .--.\n'
       + '/-   \    ! /|/ |  |  |  | || || |  |  |  | \|\ !    /=   \\n'
      + '\=__ /    I//|  |  |  |  | || || |  |  |  |  |\\I    \-__ /\n'
      + '}  {  ! /|/ |  |  |  |  | || || |  |  |  |  | \|\ !  }  {\n'
        + '{____} I//|  |  |  |  |  | || || |  |  |  |  |  |\\I {____}\n'
      + '_!__!__|= |=/|/ |  |  |  |  |  | || || |  |  |  |  |  | \|\=|  |__!__!_\n'
+ '_I__I__|  ||/|__|__|__|__|__|__|_|| ||_|__|__|__|__|__|__|\||- |__I__I_\n'
+ '-|--|--|- ||-|--|--|--|--|--|--|-|| ||-|--|--|--|--|--|--|-||= |--|--|-\n'
+ '|  |  |  || |  |  |  |  |  |  | || || |  |  |  |  |  |  | ||  |  |  |\n'
 + '|  |  |= || |  |  |  |  |  |  | || || |  |  |  |  |  |  | ||= |  |  |\n'
 + '|  |  |- || |  |  |  |  |  |  | || || |  |  |  |  |  |  | ||= |  |  |\n'
 + '|  |  |- || |  |  |  |  |  |  | || || |  |  |  |  |  |  | ||- |  |  | \n'
 + '_|__|__|  ||_|__|__|__|__|__|__|_|| ||_|__|__|__|__|__|__|_||  |__|__|_\n'
+ '-|--|--|= ||-|--|--|--|--|--|--|-|| ||-|--|--|--|--|--|--|-||- |--|--|-\n'
+ '-|--|--|| |  |  |  |  |  |  | || || |  |  |  |  |  |  | ||= |  |  | \n'
+ '~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^~~~~~~~~~~~\n'
+ '';


    // eslint-disable-next-line no-console
    console.log(gatewayPsp);
  }
}

module.exports = {
  isProductionEnv,
  isTestEnv,
  showTheGatewayPspPicture,
};
