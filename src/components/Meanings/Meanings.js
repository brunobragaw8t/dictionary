import React from 'react';
import './Meanings.css';

const Meanings = ({word, meanings}) => {
  return (
    <div className="meanings">
        {word === "" ? (
          <h3 style={{textAlign: 'center'}}>Start by typing a word</h3>
        ) : (
          meanings.map(item => (
            item.meanings.map(item_meanings => (
              <div className="meanings-item">
                <h4 className="part-of-speech">{item_meanings.partOfSpeech}</h4>

                <ul className="definitions">
                  {item_meanings.definitions.map(definition => (
                    <li className="definitions-item">
                      {console.log(definition)}

                      <span className="definition">{definition.definition}</span>

                      {typeof definition.example !== 'undefined' ? (
                        <div class="details-item">
                          <b>Example:</b> {definition.example}
                        </div>
                      ) : (
                        <div class="details-item">
                          No examples found.
                        </div>
                      )}

                      {typeof definition.synonyms !== 'undefined' && definition.synonyms.length ? (
                        <div class="details-item">
                          <b>Synonyms:</b> {definition.synonyms.join(', ')}
                        </div>
                      ) : (
                        <div class="details-item">
                          No synonyms found.
                        </div>
                      )}

                      {typeof definition.antonyms !== 'undefined' && definition.antonyms.length ? (
                        <div class="details-item">
                          <b>Antonyms:</b> {definition.antonyms.join(', ')}
                        </div>
                      ) : (
                        <div class="details-item">
                          No antonyms found.
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))
          ))
        )}
    </div>
  );
}

export default Meanings
