import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class App extends Component {
    render() {
        return (
            <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">To Do List</div>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <input type="text"
                                        className="form-control"
                                        rows="5"
                                        placeholder="Create a new task"
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary">
                                    Create 
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}