import React, { useState } from 'react';
import Options from './Options';
import Message from './Message';
import { getSentence } from './api/gameApi';
import { translate } from './api/translate';

function App() {
  const [statement, setStatement] = useState('Click to Start');
  const [statementSpanish, setStatementSpanish] = useState('');
  const [harmless, setHarmless] = useState(true);
  const [delicate, setDelicate] = useState(true);
  const [offensive, setOffensive] = useState(true);

  const onBadgeClick = e => {
    const badge = e.target.id;
    switch (badge) {
      case 'harmless':
        setHarmless(!harmless);
        break;
      case 'delicate':
        setDelicate(!delicate);
        break;
      case 'offensive':
        setOffensive(!offensive);
        break;
    
      default:
        break;
    }
  };

  const fetchData = async () => {
    const data = await getSentence({ harmless, delicate, offensive });
    console.log(data);
    const translatedText = await translate(data.statement);
    setStatementSpanish(translatedText.results || 'Error');
    setStatement(data.statement || 'Error fetching data...');
    return data;
  };

  return (
    <div className="">
      <div className="">
        <Options harmless={harmless} offensive={offensive} delicate={delicate} onBadgeClick={onBadgeClick} />
        <br/>
        <hr/>
        <Message getMessage={fetchData} statement={statement} statementSpanish={statementSpanish} getStatement={fetchData} />
      </div>
    </div>
  );
}

export default App;
