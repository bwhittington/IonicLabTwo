import { InstructorModel } from './instructor.model';

export const instructors: InstructorModel[] = [
    { id: 1, name: 'Gill Bates' },
    { id: 2, name: 'Allen Paul' },
    { id: 3, name: 'Uncle Martin Bob' },
    { id: 4, name: 'Steve Unemployed' },
    { id: 5, name: 'Gott Scuthrie' },
    { id: 6, name: 'Al Turning' },
    { id: 7, name: 'William Wright' },
    { id: 8, name: 'Zach Muckerberg' }];

export class InstructorServiceMock {
    // constructor() { }

    public getInstructors(): any {
        return [];
    }
}
