import React, { useEffect, useState } from 'react';

function ThoughtFetcher() {


    let [advice, setadvice] = useState('');

    useEffect(() => {
        let url = 'https://api.adviceslip.com/advice';
        let fetchData = async () => {
            try {
                let response = await fetch(url);
                let finalJson = await response.json();
                let adviceString = finalJson?.slip?.advice;
                console.log(adviceString);
                setadvice(adviceString);
            } catch (error) {
                console.log('error', error.cause);
            }
        }

        fetchData()
    })
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Thought of the moment</h5>
                    <p className="card-text">{advice}</p>
                </div>
            </div>
        </>


    )

}

export default ThoughtFetcher
