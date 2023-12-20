/**
 * An interface defines a contract.
 * Interfaces in TS can also have properties.
 */
interface Comparable<T> {
    compareTo(other: T): number
}

interface AppConfig {
    /**
     * Our interface has a property named "paths" which is of type object.
     */
    paths: {
        base: string;
    };
    /**
     * this interface also has an optional property named "maxRetryCount" which is of type number.
     */
    maxRetryCount?: number;

}

/**
 * In TS, you can define an instance that conforms to the contract
 * defined by an interface.
 */
const myAppConfig: AppConfig = {
    paths: {
        base: "/",
    }
}

console.log(myAppConfig.maxRetryCount);
console.log(myAppConfig.paths);
console.log(myAppConfig.paths.base);
