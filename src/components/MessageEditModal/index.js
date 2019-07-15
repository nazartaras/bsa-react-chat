import * as React from "react";
import { connect } from 'react-redux';
import * as actions from './actions';
import { editMessage } from '../Chat/actions'

class MessageEditModal extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            text:''
        };
        this.handleCancelClick = this.handleCancelClick.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSaveClick = this.handleSaveClick.bind(this);
        this.updateState = this.updateState.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.messageId !== this.props.messageId && nextProps.messageId!=='') {
            const mess = this.props.messages.find(el => el.id === nextProps.messageId);
            this.setState({
                text: mess.message
            });
        }
    }
    updateState(newText){
        this.setState({
            text: newText
        })
    }
    handleCancelClick(){
        this.props.hidePage();
    }
    handleInputChange(e){
        this.setState({
            text: e.target.value
        })
    }
    handleSaveClick(){
        this.props.editMessage({id:this.props.messageId, text: this.state.text});
        this.props.dropCurrentMessageId();
        this.props.hidePage();
        this.setState({
            text:''
        });
    }
    getUserPageContent() {
        return (
            <div className="modal" style={{ display: "block"}} tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content" style={{ padding: "5px" }}>
                        <div className="modal-header">
                            <h5 className="modal-title">Edit message</h5>
                        </div>
                        <div className="modal-body">
                            <div className="form-group row">
                                <label className="col-sm-3">Message:</label>
                                <input className="col-sm-9" onChange={this.handleInputChange} type='text' value={this.state.text}></input></div>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-danger" onClick={this.handleCancelClick} >Cancel</button>
                            <button className="btn btn-success" onClick={this.handleSaveClick} >Save</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    render() {
       
        const isShown = this.props.isShown;
        return isShown ? this.getUserPageContent() : null;
    }
}

const mapStateToProps = (state) => {
    return {
        messages: state.chat,
        isShown: state.messageEditModal.isShown,
        messageId: state.messageEditModal.messageId,
        text:state.messageEditModal.text
    }
};

const mapDispatchToProps = {
    ...actions,
    editMessage
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageEditModal);