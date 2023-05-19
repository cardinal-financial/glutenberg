import './bootstrap';
import React from 'react';
import ReactDOM from 'react-dom/client';

import IsolatedBlockEditor, {
    EditorLoaded,
    DocumentSection,
    ToolbarSlot, initializeEditor,
    // CollaborativeEditing
} from '@automattic/isolated-block-editor';

import '@automattic/isolated-block-editor/build-browser/isolated-block-editor.css';

const settings = {
    //
}

const root = ReactDOM.createRoot( document.querySelector( '#editor' ) );

root.render(
    <IsolatedBlockEditor
        settings={ settings }
        onSaveContent={ ( html ) => saveContent( html ) }
        onLoad={ ( parse ) => loadInitialContent( parse ) }
        onError={ () => document.location.reload() }
    >
    </IsolatedBlockEditor>
);

initializeEditor();
