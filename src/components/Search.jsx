import React from 'react';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Search = () => {
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate("/searched/" + input);
    };

    return (
        <FormStyle onSubmit={submitHandler}>
            <div>
                <FaSearch></FaSearch>
                <input
                    type="text"
                    name="search"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
            </div>
        </FormStyle>
    );
};

const FormStyle = styled.form`
    margin: 0 20rem;
    
    div {
        position: relative;
        width: 100%;
    }

    input {
        width: 100%;
        border: none;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1.5rem;
        color: white;
        padding: 1rem 5rem;
        border: none;
        border-radius: 1rem;
        outline: none;
    }

    svg {
        position: absolute;
        top: 50%;
        left: 0;
        transform: translate(100%, -50%);
        color: white;
    }
`;

export default Search;