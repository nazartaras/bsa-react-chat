import React, { Component } from "react";
import { connect } from 'react-redux';
import UserItem from './UserItem';
import * as actions from './actions';
import PropTypes from 'prop-types';
import Loading from "../Loading/Loading";

class UserList extends Component {
	constructor(props) {
		super(props);
		this.onEdit = this.onEdit.bind(this);
		this.onDelete = this.onDelete.bind(this);
		this.onAdd = this.onAdd.bind(this);
	}

	componentDidMount() {
		this.props.fetchUsers();
	}

	onEdit(id) {
		this.props.history.push(`/adminPage/user/${id}`);
	}

	onDelete(id) {
		this.props.deleteUser(id);
	}

	onAdd() {
		this.props.history.push('/adminPage/user');
	}

	render() {
		return this.props.currUserType==="admin"?(this.props.isLoading?<Loading/>:
			<div className="row">
				<div className="list-group col-10">
					{
						this.props.users.map(user => {
							return (
								<UserItem
									key={user.id}
									id={user.id}
									name={user.name}
									surname={user.surname}
									email={user.email}
									onEdit={this.onEdit}
									onDelete={this.onDelete}
								/>
							);
						})
					}
				</div>
				<div className="col-2">
					<button
						className="btn btn-success"
						onClick={this.onAdd}
						style={{ margin: "5px" }}
					>
						Add user
					</button>
				</div>
			</div>):<div>YOU ARE NOT ADMIN</div>
	}
}

UserList.propTypes = {
    userData: PropTypes.object
};

const mapStateToProps = (state) => {
	return {
		users: state.users.users,
		isLoading: state.users.isLoading,
		currUserType:state.login.userType
	}
};

const mapDispatchToProps = {
	...actions
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);