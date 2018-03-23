import React from 'react';
import { Stack, Scene, Router, Actions } from 'react-native-router-flux';
import LogInForm from './components/LogInForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
    return (
        <Router>
            <Stack key="root" hideNavBar>
                <Scene key="auth">
                    <Scene
                        key="logIn"
                        component={LogInForm}
                        title="Please LogIn"
                        initial
                    />
                </Scene>

                <Scene key="main">
                    <Scene
                        key="employeeList"
                        component={EmployeeList}
                        title="Employees"
                        rightTitle="Add"
                        onRight={() => Actions.employeeCreate()}
                        initial
                    />
                    <Scene
                        key="employeeCreate"
                        component={EmployeeCreate}
                        title="Create Employee"
                    />
                    <Scene
                        key="employeeEdit"
                        component={EmployeeEdit}
                        title="Edit Employee"
                    />
                </Scene>
            </Stack>
        </Router>
    );
};

export default RouterComponent;
