import React, { useState } from 'react';
import jsonData from './data.json';

const SearchBar = () => {

    const [searchInput, setSearchInput] = useState("");
    const [filteredTags, setFilteredTags] = useState([]);
    const allTags = jsonData.flatMap((feature) =>
        feature.elements.flatMap((scenario) => scenario.tags)
    );

    const handleChange = (e) => {
        setSearchInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchInput !== "") {
            // eslint-disable-next-line
            const filteredResult = allTags.filter((item) => {
                // eslint-disable-next-line
                return item.name.includes(searchInput);
            });
            setFilteredTags(filteredResult);
        } else {
            setFilteredTags([]);
        };
    };


    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text"
                    placeholder='Search Here'
                    onChange={handleChange}
                    value={searchInput} />
                <button type="submit" className="btn-searchbar">send</button>
            </form>
            <div>
                {filteredTags.length > 0 ? ( //ternary operator "if" condition
                    <ul>
                        {filteredTags.map((item, index) => (
                            <li key={index}>{item.name}</li>))}
                    </ul>) : (<div>No matching tags found.</div>)}
            </div>
        </>
    );
};

export default SearchBar;