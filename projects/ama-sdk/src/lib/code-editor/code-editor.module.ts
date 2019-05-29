 /*!
 * @license
 * Copyright 2019 Alfresco, Inc. and/or its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MonacoEditorModule } from 'ngx-monaco-editor';

import { CodeEditorComponent } from './components/code-editor/code-editor.component';
import { connectorSchema } from '../schemas/connector.schema';
import {
    connectorModelUri,
    formModelUri,
    uiModelUri,
    dataModelUri,
    extensionsModelUri,
    decisionTablesModelUri,
    processesModelUri
} from '../helpers/utils/models-uri';
import { formSchema } from '../schemas/form.schema';
import { uiSchema } from '../schemas/ui.schema';
import { dataSchema } from '../schemas/data.schema';
import { extensionsSchema } from '../schemas/extensions.schema';

export function onMonacoLoad() {
    monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
        validate: true,
        schemas: this._schemas
    });
}

const editorConfig = {
    baseUrl: './assets',
    _schemas: [{
        uri: 'connectorSchema',
        fileMatch: [connectorModelUri],
        schema: connectorSchema
    }, {
        uri: 'formSchema',
        fileMatch: [formModelUri],
        schema: formSchema
    }, {
        uri: 'uiSchema',
        fileMatch: [uiModelUri],
        schema: uiSchema
    }, {
        uri: 'dataSchema',
        fileMatch: [dataModelUri],
        schema: dataSchema
    }, {
        uri: 'extensionsSchema',
        fileMatch: [extensionsModelUri],
        schema: extensionsSchema
    }, {
        uri: 'decisionTablesSchema',
        fileMatch: [decisionTablesModelUri],
    },
    {
        uri: 'processesSchema',
        fileMatch: [processesModelUri],
    }],
    onMonacoLoad
};

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MonacoEditorModule.forRoot(editorConfig)
    ],
    declarations: [CodeEditorComponent],
    exports: [
        CommonModule,
        FormsModule,
        MonacoEditorModule,
        CodeEditorComponent
    ]
})
export class CodeEditorModule {}
