import uuid from 'uuid';

export default ( state =[], {type, payload })=> {

    switch( type ) {
        case 'ARTIST_CREATE':
           const artist = {
               id: uuid(),
               timestamp: new Date(),
               name: payload,
           } 
        
           return [...state, artist];

        case 'ARTIST_UPDATE':
            return state.map( artist => artist.id === payload.id ? { ...artist, ...payload } : artist) ;
        //break;

        case 'ARTIST_DELETE':
            return state.filter( artist => artist.id === payload ? false : true );

        default: 

        return state;
    }

};

