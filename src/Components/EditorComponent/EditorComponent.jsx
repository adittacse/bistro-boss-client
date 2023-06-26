import React, {useEffect, useRef} from 'react';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import Table from '@editorjs/table';
import Quote from '@editorjs/quote';
import Marker from '@editorjs/marker';
import Delimiter from '@editorjs/delimiter';
import NestedList from '@editorjs/nested-list';
import Checklist from '@editorjs/checklist';
import LinkTool from '@editorjs/link';
import Embed from '@editorjs/embed';
import CodeTool from '@editorjs/code';
import RawTool from '@editorjs/raw';
import InlineCode from '@editorjs/inline-code';
import Paragraph from '@editorjs/paragraph';
import Undo from 'editorjs-undo';
import Underline from '@editorjs/underline';
import Strikethrough from '@sotaproject/strikethrough';
// import AlignmentTuneTool from 'editorjs-text-alignment-blocktune';
// import ColorPlugin from 'editorjs-text-color-plugin';
// const ColorPlugin = require('editorjs-text-color-plugin');
// require('editorjs-text-alignment-blocktune');


// npm i --save @editorjs/header
// npm i --save @editorjs/table
// npm i --save-dev @editorjs/quote
// npm i --save-dev @editorjs/marker
// npm i --save-dev @editorjs/delimiter
// npm i --save @editorjs/nested-list
// npm i --save-dev @editorjs/checklist
// npm i --save-dev @editorjs/link
// npm i --save @editorjs/embed
// npm i --save-dev @editorjs/code
// npm i --save-dev @editorjs/raw
// npm i --save-dev @editorjs/inline-code
// npm i --save-dev @editorjs/paragraph
// npm i --save editorjs-paragraph-with-alignment@3.x
// npm i --save @editorjs/underline
// npm i @sotaproject/strikethrough
// npm i --save-dev editorjs-text-color-plugin
// npm i --save editorjs-text-alignment-blocktune


const EditorComponent = () => {
    const ejInstance = useRef();
    // const Paragraph = require('editorjs-paragraph-with-alignment');
    // const ColorPlugin = require('editorjs-text-color-plugin');
    // const AlignmentTuneTool = require('editorjs-text-alignment-blocktune');
    
    const initEditor = () => {
        const editor = new EditorJS({
            holder: "editorjs",
            onReady: () => {
                const editor2 = ejInstance.current = editor;
                new Undo(editor2);
            },
            autofocus: true,
            onChange: async () => {
                let content = await editor.saver.save();
                console.log(content);
            },
            tools: {
                header: Header,
                paragraph: Paragraph,
                // paragraph: {
                //     class: Paragraph,
                //     inlineToolbar: true,
                // },
                table: Table,
                quote: Quote,
                marker: Marker,
                delimiter: Delimiter,
                nestedList: NestedList,
                checklist: Checklist,
                // linkTool: LinkTool,
                embed: Embed,
                code: CodeTool,
                raw: RawTool,
                inlineCode: InlineCode,
                underline: Underline,
                strikethrough: Strikethrough,
                // anyTuneName: AlignmentTuneTool,
                // Color: {
                //     class: ColorPlugin, // if load from CDN, please try: window.ColorPlugin
                //     config: {
                //         colorCollections: ['#EC7878','#9C27B0','#673AB7','#3F51B5','#0070FF','#03A9F4','#00BCD4','#4CAF50','#8BC34A','#CDDC39', '#FFF'],
                //         defaultColor: '#FF1300',
                //         type: 'text',
                //         customPicker: true // add a button to allow selecting any colour
                //     }
                // },
                // Marker: {
                //     class: ColorPlugin, // if load from CDN, please try: window.ColorPlugin
                //     config: {
                //         defaultColor: '#FFBF00',
                //         type: 'marker',
                //         icon: `<svg fill="#000000" height="200px" width="200px" version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M17.6,6L6.9,16.7c-0.2,0.2-0.3,0.4-0.3,0.6L6,23.9c0,0.3,0.1,0.6,0.3,0.8C6.5,24.9,6.7,25,7,25c0,0,0.1,0,0.1,0l6.6-0.6 c0.2,0,0.5-0.1,0.6-0.3L25,13.4L17.6,6z"></path> <path d="M26.4,12l1.4-1.4c1.2-1.2,1.1-3.1-0.1-4.3l-3-3c-0.6-0.6-1.3-0.9-2.2-0.9c-0.8,0-1.6,0.3-2.2,0.9L19,4.6L26.4,12z"></path> </g> <g> <path d="M28,29H4c-0.6,0-1-0.4-1-1s0.4-1,1-1h24c0.6,0,1,0.4,1,1S28.6,29,28,29z"></path> </g> </g></svg>`
                //     }
                // },
            }
        });
    }
    
    useEffect(() => {
        if (ejInstance.current === null) {
            initEditor();
        }
        return () => {
            ejInstance?.current?.destroy();
            ejInstance.current = null;
        }
    }, []);
    
    return <div id="editorjs"></div>;
};

export default EditorComponent;