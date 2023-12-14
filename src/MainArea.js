
import { useEffect, useRef, useState } from 'react';
import hljs from 'highlight.js';
import 'highlightjs-line-numbers.js';

const MainArea = ({ attributes }) => {
    const { language, code, theme, lineNumbers, clipBoard } = attributes;
    const codeString = `${code}`;
    const codeRef = useRef(null);
    const [key, setKey] = useState(0);
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        if (codeRef.current) {
            hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'));
            hljs.highlightBlock(codeRef.current);
            window.hljs.lineNumbersBlock(codeRef.current);

            // Toggle line number visibility
            const lineNumbersElements = codeRef.current.querySelectorAll('.hljs-ln-n');
            lineNumbersElements.forEach(element => {
                element.style.display = lineNumbers ? 'block' : 'none';
            });
        }
    }, [language, code, key, lineNumbers]);

    // Update the key whenever code changes to force re-render and re-highlight
    useEffect(() => {
        setKey(prevKey => prevKey + 1);
    }, [code]);

    function handleCopy() {
        const text = codeRef.current.innerText;
        // const normalizedText = text.replace(/\n\s*\n/g, '\n').trim();
        const normalizedText = text
            // Replace tabs and multiple spaces with a single space for each line
            .replace(/\t/g, ' ')
            .replace(/ {2,}/g, ' ')
            .trim();
        navigator.clipboard.writeText(normalizedText);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 2000);
    }

    return <div className={`theme ${theme}`}>
        <pre>
            <code ref={codeRef} key={key} className={`language-${language} hljs`}>
                {codeString}
            </code>
        </pre>
        {clipBoard && <button className={`bchClickToCopy ${copied ? 'disable' : ''}`} onClick={handleCopy} disabled={copied}>Copy</button>}
    </div >
};

export default MainArea;

