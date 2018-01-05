import _ from "lodash";

const mapStateToProps = state => {
 const employees = _.map(state.employees, (val, key)=> {
    return {...val, key}
  });

 return {employees}

}

export Daniel connect(mapStateToProps, {xaction})
