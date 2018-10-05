import React from 'react';
import { Link } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom';
const generateBlocks = ({ blocks }) => {
    if (blocks) {
        return blocks.map((item) => {
            return (
                <Zoom left key={item.id}>
                    <div className={`item ${item.type}`}>
                        <div className="veil"></div>
                        <div className="image"
                            style={{ background: `url(/images/blocks/${item.image}) no-repeat` }}
                        ></div>
                        <div className="title">
                            <Link to={item.link}>{item.title}</Link>
                        </div>
                    </div>
                </Zoom>
            )
        })
    }
}

const Block = (props) => {
    return (
        <div className="home_block">
            {generateBlocks(props)}
        </div>
    );
};

export default Block;