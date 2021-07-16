import "./Dashboard.css";
import React from "react";
import * as Actions from '../Action/ActionView';
import { useSelector,useDispatch } from "react-redux";

const Dashboard = () => {
  const dispatch=useDispatch();
  const viewsState=useSelector(state=>state.ReducerView);
  React.useEffect(()=>{
    dispatch(Actions.getDashboardData())
  },[])
  console.log('check dashboard data', viewsState.dashboardData);
  const dashboardDataView=[];
  viewsState.dashboardData.map((item,index)=>{
    dashboardDataView.push(
        <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.gender}</td>
            <td>{item.email}</td>
            <td>{item.phoneNo}</td>
        </tr>
    )
  })
  return (
    <div>
        {viewsState.isLoading?<div>Loadning ...</div>:<div/>}
        {!viewsState.isLoading?
        <table>
            <thead>
                <tr>
                    <th>{"Id"}</th>
                    <th>{"Name"}</th>
                    <th>{"Age"}</th>
                    <th>{"Gender"}</th>
                    <th>{"Email"}</th>
                    <th>{"Phone No"}</th>
                </tr>
            </thead>
            <tbody>
                {dashboardDataView}
            </tbody>
        </table>:<div/>}
    </div>
  );
};

export default Dashboard;
