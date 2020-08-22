import React, {useState} from 'react';
import News from '../News';
import Instagram from '../Instagram';
import Nav from "../Nav";
import Favs from "../Favs";

const Main = ({ baseHue }) => {
    const [selected, setSelected] = useState('awesomeness');

    return (
        <div>
            <Nav setWhat={setSelected} whatWentDown={selected} baseHue={baseHue} />
            <main>
                {selected === 'news' && (
                    <News baseHue={baseHue} />
                )}
                {selected === 'instagram' && (
                    <Instagram />
                )}
                {selected === 'awesomeness' && (
                    <Favs />
                )}
            </main>
        </div>
    );
}

export default Main;
