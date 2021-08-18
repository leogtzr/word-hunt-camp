import React from 'react';
import './Definitions.css';

const Definitions = ({ word, category, meanings, lightMode }) => {
    return (
        <div className="meanings">

            {
                meanings[0] && word && category === "en" && (
                    <audio style={{backgroundColor: '#fff', borderRadius: 10}} src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio} controls>
                        Your browser doesn't support audio.
                    </audio>
                )
            }

            {
                word === "" ? <span className='subTitle'>Start by typing a word in Search</span> : (
                    meanings.map((meaning) => (
                        // console.log(meaning)
                        meaning.meanings.map(item => (
                            item.definitions.map((def) => (
                                <div className='singleMean' style={{backgroundColor: lightMode? "#3b5360" :"white", color: lightMode ? 'white' : 'black'}}>
                                    <b>
                                        {def.definition}
                                    </b>
                                    <hr style={{backgroundColor: 'black', width: '100%'}}/>
                                    {
                                        def.example && (
                                            <span>
                                                <b>Example: {def.example}</b>
                                            </span>
                                        )
                                    }

                                    {
                                        def.synonyms && def.synonyms.length > 0 && (
                                            <span>
                                                <b>Synonyms: </b>{def.synonyms.map((s) => `${s}, `)}
                                            </span>
                                        )
                                    }
                                </div>
                            ))
                        ))
                    ))
                )
            }
        </div>
    );
}

export default Definitions;