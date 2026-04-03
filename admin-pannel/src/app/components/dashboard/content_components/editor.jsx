"use client"
import dynamic from 'next/dynamic';
import { useMemo, useRef, useState } from "react";

const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

export default function Editor({ data, onChange }) {
    const editor = useRef(null);
    const [content, setContent] = useState(data);

    const config = useMemo(
        () => ({
            readonly: false,
            placeholder: 'Start typing...',
            toolbarAdaptive: false,
            toolbarSticky: false,
            toolbarButtonSize: 'middle',
            buttons: [
                 "source",'bold', 'italic', 'underline', '|',
                'align', 
                {
                    name: "paragraph",
                    iconURL: "https://cdn1.iconfinder.com/data/icons/bootstrap-vol-3/16/paragraph-256.png",
                    tooltip: "Format Block",
                    list: {
                      p: "Normal Text",
                      h1: "Heading 1",
                      h2: "Heading 2",
                      h3: "Heading 3",
                      h4: "Heading 4",
                      h5: "Heading 5",
                      h6: "Heading 6",
                    },
                  },'|',
                'ol','ul','indent', 'outdent','link', '|',
                'undo', 'redo','|',
                'table'
            ],
            extraButtons: [
                {
                    name: 'embed',
                    iconURL: 'https://cdn4.iconfinder.com/data/icons/social-media-flat-7/64/Social-media_Youtube-512.png', // Example icon, replace with your own if needed
                    tooltip: 'Embed Link',
                    exec: function (editor) {
                        const url = prompt("Enter the embed link URL:");
                        if (url) {
                            editor.selection.insertHTML(url);
                        }
                    }
                }
            ],
            table: {
                useExtraClasses: false,
                allowCellSelection: true,
                selectionActiveClassName: 'jodit_table_selection',
                selectionDisableClassName: 'jodit_table_selection_disable',
                allowDragResize: true
            },
            defaultInsert: 'thead'
        }),
        []
    );

    return (
        <JoditEditor
            ref={editor}
            value={content}
            config={config}
            tabIndex={1}
            onBlur={(newContent) => setContent(newContent)} // Updates the content when the editor loses focus
            onChange={(newContent) => onChange(newContent)} // Calls the onChange function passed as a prop
        />
    );
}
