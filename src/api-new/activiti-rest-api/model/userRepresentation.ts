/*!
* @license
* Copyright 2018 Alfresco Software, Ltd.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

import { DateAlfresco } from '../../content-rest-api/model/dateAlfresco';
import { GroupRepresentation } from './groupRepresentation';
import { LightAppRepresentation } from './lightAppRepresentation';

export class UserRepresentation {
    apps?: LightAppRepresentation[];
    capabilities?: string[];
    company?: string;
    created?: DateAlfresco;
    email?: string;
    externalId?: string;
    firstName?: string;
    fullname?: string;
    groups?: GroupRepresentation[];
    id?: number;
    lastName?: string;
    lastUpdate?: DateAlfresco;
    latestSyncTimeStamp?: DateAlfresco;
    password?: string;
    pictureId?: number;
    primaryGroup?: GroupRepresentation;
    status?: string;
    tenantId?: number;
    tenantName?: string;
    tenantPictureId?: number;
    type?: string;

    constructor(input?: any) {

        if (input) {
            Object.assign(this, input);
            if (input.apps) {
                this.apps = input.apps.map((item: any) => {
                    return new LightAppRepresentation(item);
                });
            }
            this.created = input.created ? new DateAlfresco(input.created) : undefined;
            if (input.groups) {
                this.groups = input.groups.map((item: any) => {
                    return new GroupRepresentation(item);
                });
            }
            this.lastUpdate = input.lastUpdate ? new DateAlfresco(input.lastUpdate) : undefined;
            this.latestSyncTimeStamp = input.latestSyncTimeStamp ? new DateAlfresco(input.latestSyncTimeStamp) : undefined;
            this.primaryGroup = input.primaryGroup ? new GroupRepresentation(input.primaryGroup) : undefined;
        }
    }

}
