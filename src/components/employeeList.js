import React, {Component} from "react";
import {Text, View, FlatList} from "react-native";
import {fetchEmployees} from "../actions";
import {connect} from "react-redux";
import _ from "lodash";
import ListItem from "./listItem";

class EmployeeList extends Component {
  componentWillMount() {
    this.props.fetchEmployees();
  }

  renderItem({ item }) {
    return <ListItem employee={item} />
  }

  render() {
    return (
      <FlatList
      data={this.props.employees}
      renderItem={this.renderItem}
      keyExtractor={(item, index) => index}
      />
    )
  }
}


const mapStateToProps = state => {
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid };
  });

  return { employees };
};

export default connect(mapStateToProps, { fetchEmployees })(EmployeeList);
