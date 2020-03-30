import React from "react";
import { Helmet } from 'react-helmet'
const TITLE = 'Ulterior Motive | Code Snippets'

const CodeSnippets = () => {
    return(
        <div>
            <Helmet>
                <title>{ TITLE }</title>
            </Helmet>
            <h1>Code Snippets</h1>
        </div>
    );
}

export default CodeSnippets;