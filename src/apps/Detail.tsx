import React from "react";
interface IUser {
    emp_no: string,
    first_name: string,
    last_name: string,
    birth_date:string,
    gender: string,
    hire_date: string,
};
interface DetailProps {
    user: IUser
}

class Detail extends React.Component<DetailProps> {
    render() {
        const {user} = this.props;

        return <>
           <div>
            <ol>
                <li>Number: {user.emp_no}</li>
                <li>Last name: {user.last_name}</li>
                <li>Name:  {user.first_name} </li>
                <li>Gender:  {user.gender} </li>
                <li>Birthday: {user.birth_date}</li>
                <li>Hire date: {user.hire_date}</li>
            </ol>
            </div>
        </>;
    }
}

export default Detail;
