/**
 * OOP in TS.
 *
 * This is how to define a simple class with fields.
 */
class User {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string) {
        this.name = name;
    }
}

const firstUser = new User("Hojat");
console.log(firstUser.getName());

firstUser.setName("Hesam");
console.log(firstUser.getName());


/**
 * This is  how to define an abstract class.
 */
abstract class BaseApiClient {
    /**
     * Subclasses of this class should implement this function.
     */
    abstract fetch(req: any): Promise<any>;
}

/**
 * The class that extends an abstract class.
 */
class UsersClient extends BaseApiClient {
    fetch(req: any): Promise<any> {
        return Promise.resolve([]);
    }

}

const testClient = new UsersClient();
testClient.fetch({url: '/users'}).then(result =>
    console.log(result)
);
