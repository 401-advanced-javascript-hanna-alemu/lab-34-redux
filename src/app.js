import React from 'react';

import { connect } from 'react-redux';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
        this.state.artist = '';

    }

    handleChange = (event) => {
        const {value} = event.target;
        this.setState({ artist: value });
    };
    
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.createNewArtist( this.state.artist );
    };

    render() {
        return (
            <>
                <form onSubmit={ this.handleSubmit }>

                {
                    this.props.artists.map((artist, key) => 

                        <li key={key} name={ artist.id } onClick={ event => {

                            this.props.updateArtist({ id: artist.id, name: this.state.value })

                        }}> 
                         {artist.name} <button type='button' onClick={ event => {

                            this.props.deleteArtist( artist.id)}}> Delete artist
                           
                            </button>

                             </li>
                    )}

                    <input 
                    type='text'
                    value={this.state.artist}
                    onChange={this.handleChange}
                    placeholder='Enter your favorite artist'
                    />

                    <button type='submit'> Create an artist </button>
                </form>
            </>
        );
    }
}
    const readState = (state) => {
        return {
            artists: state.artists,
        }
    };

    const sendActionsToStore = (dispatch) => {
        return {
            createNewArtist : ( artistName ) => {
                dispatch({
                    type: 'ARTIST_CREATE',
                    payload: artistName,
                });
            },
            deleteArtist : ( artist )=> {
                dispatch({ 
                    type: 'ARTIST_DELETE',
                    payload: artist,
                });
            },
            updateArtist : ( artist ) => {
                dispatch({
                    type: 'ARTIST_UPDATE',
                    payload : artist,
                })
            }
        };
    };

export default connect(readState, sendActionsToStore)(App);
