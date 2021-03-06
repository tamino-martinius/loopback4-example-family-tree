// Copyright IBM Corp. 2018. All Rights Reserved.
// Node module: family-tree
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import { Filter, Where } from '@loopback/repository';
import { Person } from '../models';
import { PersonRepository } from '../repositories';
export declare class PersonController {
    personRepository: PersonRepository;
    constructor(personRepository: PersonRepository);
    create(person: Person): Promise<Person>;
    count(where?: Where): Promise<number>;
    find(filter?: Filter): Promise<Person[]>;
    updateAll(person: Person, where?: Where): Promise<number>;
    findById(id: number): Promise<Person>;
    updateById(id: number, person: Person): Promise<void>;
    deleteById(id: number): Promise<void>;
}
