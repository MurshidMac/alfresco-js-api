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

import { AuditCalculatedValueRepresentation } from './auditCalculatedValueRepresentation';
import { AuditDecisionRuleInfoRepresentation } from './auditDecisionRuleInfoRepresentation';

export class AuditDecisionInfoRepresentation {
    appliedRules?: AuditDecisionRuleInfoRepresentation[];
    calculatedValues?: AuditCalculatedValueRepresentation[];

    constructor(input?: any) {

        if (input) {
            Object.assign(this, input);
            if (input.appliedRules) {
                this.appliedRules = input.appliedRules.map((item: any) => {
                    return new AuditDecisionRuleInfoRepresentation(item);
                });
            }
            if (input.calculatedValues) {
                this.calculatedValues = input.calculatedValues.map((item: any) => {
                    return new AuditCalculatedValueRepresentation(item);
                });
            }
        }
    }

}
