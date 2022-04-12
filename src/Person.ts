import { PersonTypeEnum } from './PersonTypeEnum'

export abstract class Person {
    constructor(
        protected id: number,
        protected name: string,
        protected type: PersonTypeEnum
    ) {}

    getId(): number {
        return this.id
    }

    getName(): string {
        return this.name
    }

    getType(): PersonTypeEnum {
        return this.type
    }

    abstract getDoc(): void
}
