
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model NutritionalPlan
 * 
 */
export type NutritionalPlan = $Result.DefaultSelection<Prisma.$NutritionalPlanPayload>
/**
 * Model PlanMeal
 * 
 */
export type PlanMeal = $Result.DefaultSelection<Prisma.$PlanMealPayload>
/**
 * Model MealRegistration
 * 
 */
export type MealRegistration = $Result.DefaultSelection<Prisma.$MealRegistrationPayload>
/**
 * Model DailyScore
 * 
 */
export type DailyScore = $Result.DefaultSelection<Prisma.$DailyScorePayload>
/**
 * Model UserGamification
 * 
 */
export type UserGamification = $Result.DefaultSelection<Prisma.$UserGamificationPayload>
/**
 * Model Challenge
 * 
 */
export type Challenge = $Result.DefaultSelection<Prisma.$ChallengePayload>
/**
 * Model ChallengeParticipant
 * 
 */
export type ChallengeParticipant = $Result.DefaultSelection<Prisma.$ChallengeParticipantPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.nutritionalPlan`: Exposes CRUD operations for the **NutritionalPlan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NutritionalPlans
    * const nutritionalPlans = await prisma.nutritionalPlan.findMany()
    * ```
    */
  get nutritionalPlan(): Prisma.NutritionalPlanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.planMeal`: Exposes CRUD operations for the **PlanMeal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlanMeals
    * const planMeals = await prisma.planMeal.findMany()
    * ```
    */
  get planMeal(): Prisma.PlanMealDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mealRegistration`: Exposes CRUD operations for the **MealRegistration** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MealRegistrations
    * const mealRegistrations = await prisma.mealRegistration.findMany()
    * ```
    */
  get mealRegistration(): Prisma.MealRegistrationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dailyScore`: Exposes CRUD operations for the **DailyScore** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DailyScores
    * const dailyScores = await prisma.dailyScore.findMany()
    * ```
    */
  get dailyScore(): Prisma.DailyScoreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userGamification`: Exposes CRUD operations for the **UserGamification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserGamifications
    * const userGamifications = await prisma.userGamification.findMany()
    * ```
    */
  get userGamification(): Prisma.UserGamificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.challenge`: Exposes CRUD operations for the **Challenge** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Challenges
    * const challenges = await prisma.challenge.findMany()
    * ```
    */
  get challenge(): Prisma.ChallengeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.challengeParticipant`: Exposes CRUD operations for the **ChallengeParticipant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChallengeParticipants
    * const challengeParticipants = await prisma.challengeParticipant.findMany()
    * ```
    */
  get challengeParticipant(): Prisma.ChallengeParticipantDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.0.0
   * Query Engine version: 0c19ccc313cf9911a90d99d2ac2eb0280c76c513
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    NutritionalPlan: 'NutritionalPlan',
    PlanMeal: 'PlanMeal',
    MealRegistration: 'MealRegistration',
    DailyScore: 'DailyScore',
    UserGamification: 'UserGamification',
    Challenge: 'Challenge',
    ChallengeParticipant: 'ChallengeParticipant'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "nutritionalPlan" | "planMeal" | "mealRegistration" | "dailyScore" | "userGamification" | "challenge" | "challengeParticipant"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      NutritionalPlan: {
        payload: Prisma.$NutritionalPlanPayload<ExtArgs>
        fields: Prisma.NutritionalPlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NutritionalPlanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NutritionalPlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NutritionalPlanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NutritionalPlanPayload>
          }
          findFirst: {
            args: Prisma.NutritionalPlanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NutritionalPlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NutritionalPlanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NutritionalPlanPayload>
          }
          findMany: {
            args: Prisma.NutritionalPlanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NutritionalPlanPayload>[]
          }
          create: {
            args: Prisma.NutritionalPlanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NutritionalPlanPayload>
          }
          createMany: {
            args: Prisma.NutritionalPlanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NutritionalPlanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NutritionalPlanPayload>[]
          }
          delete: {
            args: Prisma.NutritionalPlanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NutritionalPlanPayload>
          }
          update: {
            args: Prisma.NutritionalPlanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NutritionalPlanPayload>
          }
          deleteMany: {
            args: Prisma.NutritionalPlanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NutritionalPlanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NutritionalPlanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NutritionalPlanPayload>[]
          }
          upsert: {
            args: Prisma.NutritionalPlanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NutritionalPlanPayload>
          }
          aggregate: {
            args: Prisma.NutritionalPlanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNutritionalPlan>
          }
          groupBy: {
            args: Prisma.NutritionalPlanGroupByArgs<ExtArgs>
            result: $Utils.Optional<NutritionalPlanGroupByOutputType>[]
          }
          count: {
            args: Prisma.NutritionalPlanCountArgs<ExtArgs>
            result: $Utils.Optional<NutritionalPlanCountAggregateOutputType> | number
          }
        }
      }
      PlanMeal: {
        payload: Prisma.$PlanMealPayload<ExtArgs>
        fields: Prisma.PlanMealFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlanMealFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanMealPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlanMealFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanMealPayload>
          }
          findFirst: {
            args: Prisma.PlanMealFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanMealPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlanMealFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanMealPayload>
          }
          findMany: {
            args: Prisma.PlanMealFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanMealPayload>[]
          }
          create: {
            args: Prisma.PlanMealCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanMealPayload>
          }
          createMany: {
            args: Prisma.PlanMealCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlanMealCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanMealPayload>[]
          }
          delete: {
            args: Prisma.PlanMealDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanMealPayload>
          }
          update: {
            args: Prisma.PlanMealUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanMealPayload>
          }
          deleteMany: {
            args: Prisma.PlanMealDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlanMealUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlanMealUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanMealPayload>[]
          }
          upsert: {
            args: Prisma.PlanMealUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanMealPayload>
          }
          aggregate: {
            args: Prisma.PlanMealAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlanMeal>
          }
          groupBy: {
            args: Prisma.PlanMealGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlanMealGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlanMealCountArgs<ExtArgs>
            result: $Utils.Optional<PlanMealCountAggregateOutputType> | number
          }
        }
      }
      MealRegistration: {
        payload: Prisma.$MealRegistrationPayload<ExtArgs>
        fields: Prisma.MealRegistrationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MealRegistrationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealRegistrationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MealRegistrationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealRegistrationPayload>
          }
          findFirst: {
            args: Prisma.MealRegistrationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealRegistrationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MealRegistrationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealRegistrationPayload>
          }
          findMany: {
            args: Prisma.MealRegistrationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealRegistrationPayload>[]
          }
          create: {
            args: Prisma.MealRegistrationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealRegistrationPayload>
          }
          createMany: {
            args: Prisma.MealRegistrationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MealRegistrationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealRegistrationPayload>[]
          }
          delete: {
            args: Prisma.MealRegistrationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealRegistrationPayload>
          }
          update: {
            args: Prisma.MealRegistrationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealRegistrationPayload>
          }
          deleteMany: {
            args: Prisma.MealRegistrationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MealRegistrationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MealRegistrationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealRegistrationPayload>[]
          }
          upsert: {
            args: Prisma.MealRegistrationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealRegistrationPayload>
          }
          aggregate: {
            args: Prisma.MealRegistrationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMealRegistration>
          }
          groupBy: {
            args: Prisma.MealRegistrationGroupByArgs<ExtArgs>
            result: $Utils.Optional<MealRegistrationGroupByOutputType>[]
          }
          count: {
            args: Prisma.MealRegistrationCountArgs<ExtArgs>
            result: $Utils.Optional<MealRegistrationCountAggregateOutputType> | number
          }
        }
      }
      DailyScore: {
        payload: Prisma.$DailyScorePayload<ExtArgs>
        fields: Prisma.DailyScoreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DailyScoreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyScorePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DailyScoreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyScorePayload>
          }
          findFirst: {
            args: Prisma.DailyScoreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyScorePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DailyScoreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyScorePayload>
          }
          findMany: {
            args: Prisma.DailyScoreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyScorePayload>[]
          }
          create: {
            args: Prisma.DailyScoreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyScorePayload>
          }
          createMany: {
            args: Prisma.DailyScoreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DailyScoreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyScorePayload>[]
          }
          delete: {
            args: Prisma.DailyScoreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyScorePayload>
          }
          update: {
            args: Prisma.DailyScoreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyScorePayload>
          }
          deleteMany: {
            args: Prisma.DailyScoreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DailyScoreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DailyScoreUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyScorePayload>[]
          }
          upsert: {
            args: Prisma.DailyScoreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyScorePayload>
          }
          aggregate: {
            args: Prisma.DailyScoreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDailyScore>
          }
          groupBy: {
            args: Prisma.DailyScoreGroupByArgs<ExtArgs>
            result: $Utils.Optional<DailyScoreGroupByOutputType>[]
          }
          count: {
            args: Prisma.DailyScoreCountArgs<ExtArgs>
            result: $Utils.Optional<DailyScoreCountAggregateOutputType> | number
          }
        }
      }
      UserGamification: {
        payload: Prisma.$UserGamificationPayload<ExtArgs>
        fields: Prisma.UserGamificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserGamificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGamificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserGamificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGamificationPayload>
          }
          findFirst: {
            args: Prisma.UserGamificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGamificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserGamificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGamificationPayload>
          }
          findMany: {
            args: Prisma.UserGamificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGamificationPayload>[]
          }
          create: {
            args: Prisma.UserGamificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGamificationPayload>
          }
          createMany: {
            args: Prisma.UserGamificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserGamificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGamificationPayload>[]
          }
          delete: {
            args: Prisma.UserGamificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGamificationPayload>
          }
          update: {
            args: Prisma.UserGamificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGamificationPayload>
          }
          deleteMany: {
            args: Prisma.UserGamificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserGamificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserGamificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGamificationPayload>[]
          }
          upsert: {
            args: Prisma.UserGamificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGamificationPayload>
          }
          aggregate: {
            args: Prisma.UserGamificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserGamification>
          }
          groupBy: {
            args: Prisma.UserGamificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGamificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserGamificationCountArgs<ExtArgs>
            result: $Utils.Optional<UserGamificationCountAggregateOutputType> | number
          }
        }
      }
      Challenge: {
        payload: Prisma.$ChallengePayload<ExtArgs>
        fields: Prisma.ChallengeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChallengeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChallengeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>
          }
          findFirst: {
            args: Prisma.ChallengeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChallengeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>
          }
          findMany: {
            args: Prisma.ChallengeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>[]
          }
          create: {
            args: Prisma.ChallengeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>
          }
          createMany: {
            args: Prisma.ChallengeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChallengeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>[]
          }
          delete: {
            args: Prisma.ChallengeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>
          }
          update: {
            args: Prisma.ChallengeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>
          }
          deleteMany: {
            args: Prisma.ChallengeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChallengeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChallengeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>[]
          }
          upsert: {
            args: Prisma.ChallengeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>
          }
          aggregate: {
            args: Prisma.ChallengeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChallenge>
          }
          groupBy: {
            args: Prisma.ChallengeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChallengeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChallengeCountArgs<ExtArgs>
            result: $Utils.Optional<ChallengeCountAggregateOutputType> | number
          }
        }
      }
      ChallengeParticipant: {
        payload: Prisma.$ChallengeParticipantPayload<ExtArgs>
        fields: Prisma.ChallengeParticipantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChallengeParticipantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengeParticipantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChallengeParticipantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengeParticipantPayload>
          }
          findFirst: {
            args: Prisma.ChallengeParticipantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengeParticipantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChallengeParticipantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengeParticipantPayload>
          }
          findMany: {
            args: Prisma.ChallengeParticipantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengeParticipantPayload>[]
          }
          create: {
            args: Prisma.ChallengeParticipantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengeParticipantPayload>
          }
          createMany: {
            args: Prisma.ChallengeParticipantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChallengeParticipantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengeParticipantPayload>[]
          }
          delete: {
            args: Prisma.ChallengeParticipantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengeParticipantPayload>
          }
          update: {
            args: Prisma.ChallengeParticipantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengeParticipantPayload>
          }
          deleteMany: {
            args: Prisma.ChallengeParticipantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChallengeParticipantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChallengeParticipantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengeParticipantPayload>[]
          }
          upsert: {
            args: Prisma.ChallengeParticipantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengeParticipantPayload>
          }
          aggregate: {
            args: Prisma.ChallengeParticipantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChallengeParticipant>
          }
          groupBy: {
            args: Prisma.ChallengeParticipantGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChallengeParticipantGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChallengeParticipantCountArgs<ExtArgs>
            result: $Utils.Optional<ChallengeParticipantCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    nutritionalPlan?: NutritionalPlanOmit
    planMeal?: PlanMealOmit
    mealRegistration?: MealRegistrationOmit
    dailyScore?: DailyScoreOmit
    userGamification?: UserGamificationOmit
    challenge?: ChallengeOmit
    challengeParticipant?: ChallengeParticipantOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    nutritional_plans: number
    meal_registrations: number
    daily_scores: number
    challenges_created: number
    challenge_participations: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    nutritional_plans?: boolean | UserCountOutputTypeCountNutritional_plansArgs
    meal_registrations?: boolean | UserCountOutputTypeCountMeal_registrationsArgs
    daily_scores?: boolean | UserCountOutputTypeCountDaily_scoresArgs
    challenges_created?: boolean | UserCountOutputTypeCountChallenges_createdArgs
    challenge_participations?: boolean | UserCountOutputTypeCountChallenge_participationsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNutritional_plansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NutritionalPlanWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMeal_registrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MealRegistrationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDaily_scoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyScoreWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChallenges_createdArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChallengeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChallenge_participationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChallengeParticipantWhereInput
  }


  /**
   * Count Type NutritionalPlanCountOutputType
   */

  export type NutritionalPlanCountOutputType = {
    meals: number
    meal_registrations: number
    daily_scores: number
  }

  export type NutritionalPlanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meals?: boolean | NutritionalPlanCountOutputTypeCountMealsArgs
    meal_registrations?: boolean | NutritionalPlanCountOutputTypeCountMeal_registrationsArgs
    daily_scores?: boolean | NutritionalPlanCountOutputTypeCountDaily_scoresArgs
  }

  // Custom InputTypes
  /**
   * NutritionalPlanCountOutputType without action
   */
  export type NutritionalPlanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NutritionalPlanCountOutputType
     */
    select?: NutritionalPlanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NutritionalPlanCountOutputType without action
   */
  export type NutritionalPlanCountOutputTypeCountMealsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlanMealWhereInput
  }

  /**
   * NutritionalPlanCountOutputType without action
   */
  export type NutritionalPlanCountOutputTypeCountMeal_registrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MealRegistrationWhereInput
  }

  /**
   * NutritionalPlanCountOutputType without action
   */
  export type NutritionalPlanCountOutputTypeCountDaily_scoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyScoreWhereInput
  }


  /**
   * Count Type ChallengeCountOutputType
   */

  export type ChallengeCountOutputType = {
    participants: number
  }

  export type ChallengeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participants?: boolean | ChallengeCountOutputTypeCountParticipantsArgs
  }

  // Custom InputTypes
  /**
   * ChallengeCountOutputType without action
   */
  export type ChallengeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeCountOutputType
     */
    select?: ChallengeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChallengeCountOutputType without action
   */
  export type ChallengeCountOutputTypeCountParticipantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChallengeParticipantWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password_hash: string | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password_hash: string | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password_hash: number
    name: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password_hash?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password_hash?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password_hash?: true
    name?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password_hash: string
    name: string | null
    created_at: Date
    updated_at: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password_hash?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
    nutritional_plans?: boolean | User$nutritional_plansArgs<ExtArgs>
    meal_registrations?: boolean | User$meal_registrationsArgs<ExtArgs>
    daily_scores?: boolean | User$daily_scoresArgs<ExtArgs>
    gamification?: boolean | User$gamificationArgs<ExtArgs>
    challenges_created?: boolean | User$challenges_createdArgs<ExtArgs>
    challenge_participations?: boolean | User$challenge_participationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password_hash?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password_hash?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password_hash?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password_hash" | "name" | "created_at" | "updated_at", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    nutritional_plans?: boolean | User$nutritional_plansArgs<ExtArgs>
    meal_registrations?: boolean | User$meal_registrationsArgs<ExtArgs>
    daily_scores?: boolean | User$daily_scoresArgs<ExtArgs>
    gamification?: boolean | User$gamificationArgs<ExtArgs>
    challenges_created?: boolean | User$challenges_createdArgs<ExtArgs>
    challenge_participations?: boolean | User$challenge_participationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      nutritional_plans: Prisma.$NutritionalPlanPayload<ExtArgs>[]
      meal_registrations: Prisma.$MealRegistrationPayload<ExtArgs>[]
      daily_scores: Prisma.$DailyScorePayload<ExtArgs>[]
      gamification: Prisma.$UserGamificationPayload<ExtArgs> | null
      challenges_created: Prisma.$ChallengePayload<ExtArgs>[]
      challenge_participations: Prisma.$ChallengeParticipantPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password_hash: string
      name: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    nutritional_plans<T extends User$nutritional_plansArgs<ExtArgs> = {}>(args?: Subset<T, User$nutritional_plansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NutritionalPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    meal_registrations<T extends User$meal_registrationsArgs<ExtArgs> = {}>(args?: Subset<T, User$meal_registrationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealRegistrationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    daily_scores<T extends User$daily_scoresArgs<ExtArgs> = {}>(args?: Subset<T, User$daily_scoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyScorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    gamification<T extends User$gamificationArgs<ExtArgs> = {}>(args?: Subset<T, User$gamificationArgs<ExtArgs>>): Prisma__UserGamificationClient<$Result.GetResult<Prisma.$UserGamificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    challenges_created<T extends User$challenges_createdArgs<ExtArgs> = {}>(args?: Subset<T, User$challenges_createdArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    challenge_participations<T extends User$challenge_participationsArgs<ExtArgs> = {}>(args?: Subset<T, User$challenge_participationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallengeParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password_hash: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly updated_at: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.nutritional_plans
   */
  export type User$nutritional_plansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NutritionalPlan
     */
    select?: NutritionalPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NutritionalPlan
     */
    omit?: NutritionalPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NutritionalPlanInclude<ExtArgs> | null
    where?: NutritionalPlanWhereInput
    orderBy?: NutritionalPlanOrderByWithRelationInput | NutritionalPlanOrderByWithRelationInput[]
    cursor?: NutritionalPlanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NutritionalPlanScalarFieldEnum | NutritionalPlanScalarFieldEnum[]
  }

  /**
   * User.meal_registrations
   */
  export type User$meal_registrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealRegistration
     */
    select?: MealRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealRegistration
     */
    omit?: MealRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealRegistrationInclude<ExtArgs> | null
    where?: MealRegistrationWhereInput
    orderBy?: MealRegistrationOrderByWithRelationInput | MealRegistrationOrderByWithRelationInput[]
    cursor?: MealRegistrationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MealRegistrationScalarFieldEnum | MealRegistrationScalarFieldEnum[]
  }

  /**
   * User.daily_scores
   */
  export type User$daily_scoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyScore
     */
    select?: DailyScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyScore
     */
    omit?: DailyScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyScoreInclude<ExtArgs> | null
    where?: DailyScoreWhereInput
    orderBy?: DailyScoreOrderByWithRelationInput | DailyScoreOrderByWithRelationInput[]
    cursor?: DailyScoreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DailyScoreScalarFieldEnum | DailyScoreScalarFieldEnum[]
  }

  /**
   * User.gamification
   */
  export type User$gamificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGamification
     */
    select?: UserGamificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGamification
     */
    omit?: UserGamificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGamificationInclude<ExtArgs> | null
    where?: UserGamificationWhereInput
  }

  /**
   * User.challenges_created
   */
  export type User$challenges_createdArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    where?: ChallengeWhereInput
    orderBy?: ChallengeOrderByWithRelationInput | ChallengeOrderByWithRelationInput[]
    cursor?: ChallengeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChallengeScalarFieldEnum | ChallengeScalarFieldEnum[]
  }

  /**
   * User.challenge_participations
   */
  export type User$challenge_participationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeParticipant
     */
    select?: ChallengeParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeParticipant
     */
    omit?: ChallengeParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeParticipantInclude<ExtArgs> | null
    where?: ChallengeParticipantWhereInput
    orderBy?: ChallengeParticipantOrderByWithRelationInput | ChallengeParticipantOrderByWithRelationInput[]
    cursor?: ChallengeParticipantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChallengeParticipantScalarFieldEnum | ChallengeParticipantScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model NutritionalPlan
   */

  export type AggregateNutritionalPlan = {
    _count: NutritionalPlanCountAggregateOutputType | null
    _avg: NutritionalPlanAvgAggregateOutputType | null
    _sum: NutritionalPlanSumAggregateOutputType | null
    _min: NutritionalPlanMinAggregateOutputType | null
    _max: NutritionalPlanMaxAggregateOutputType | null
  }

  export type NutritionalPlanAvgAggregateOutputType = {
    id: number | null
    daily_calories: number | null
  }

  export type NutritionalPlanSumAggregateOutputType = {
    id: number | null
    daily_calories: number | null
  }

  export type NutritionalPlanMinAggregateOutputType = {
    id: number | null
    user_id: string | null
    name: string | null
    daily_calories: number | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type NutritionalPlanMaxAggregateOutputType = {
    id: number | null
    user_id: string | null
    name: string | null
    daily_calories: number | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type NutritionalPlanCountAggregateOutputType = {
    id: number
    user_id: number
    name: number
    daily_calories: number
    is_active: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type NutritionalPlanAvgAggregateInputType = {
    id?: true
    daily_calories?: true
  }

  export type NutritionalPlanSumAggregateInputType = {
    id?: true
    daily_calories?: true
  }

  export type NutritionalPlanMinAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    daily_calories?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type NutritionalPlanMaxAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    daily_calories?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type NutritionalPlanCountAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    daily_calories?: true
    is_active?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type NutritionalPlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NutritionalPlan to aggregate.
     */
    where?: NutritionalPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NutritionalPlans to fetch.
     */
    orderBy?: NutritionalPlanOrderByWithRelationInput | NutritionalPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NutritionalPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NutritionalPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NutritionalPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NutritionalPlans
    **/
    _count?: true | NutritionalPlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NutritionalPlanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NutritionalPlanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NutritionalPlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NutritionalPlanMaxAggregateInputType
  }

  export type GetNutritionalPlanAggregateType<T extends NutritionalPlanAggregateArgs> = {
        [P in keyof T & keyof AggregateNutritionalPlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNutritionalPlan[P]>
      : GetScalarType<T[P], AggregateNutritionalPlan[P]>
  }




  export type NutritionalPlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NutritionalPlanWhereInput
    orderBy?: NutritionalPlanOrderByWithAggregationInput | NutritionalPlanOrderByWithAggregationInput[]
    by: NutritionalPlanScalarFieldEnum[] | NutritionalPlanScalarFieldEnum
    having?: NutritionalPlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NutritionalPlanCountAggregateInputType | true
    _avg?: NutritionalPlanAvgAggregateInputType
    _sum?: NutritionalPlanSumAggregateInputType
    _min?: NutritionalPlanMinAggregateInputType
    _max?: NutritionalPlanMaxAggregateInputType
  }

  export type NutritionalPlanGroupByOutputType = {
    id: number
    user_id: string
    name: string
    daily_calories: number
    is_active: boolean
    created_at: Date
    updated_at: Date
    _count: NutritionalPlanCountAggregateOutputType | null
    _avg: NutritionalPlanAvgAggregateOutputType | null
    _sum: NutritionalPlanSumAggregateOutputType | null
    _min: NutritionalPlanMinAggregateOutputType | null
    _max: NutritionalPlanMaxAggregateOutputType | null
  }

  type GetNutritionalPlanGroupByPayload<T extends NutritionalPlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NutritionalPlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NutritionalPlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NutritionalPlanGroupByOutputType[P]>
            : GetScalarType<T[P], NutritionalPlanGroupByOutputType[P]>
        }
      >
    >


  export type NutritionalPlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    name?: boolean
    daily_calories?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    meals?: boolean | NutritionalPlan$mealsArgs<ExtArgs>
    meal_registrations?: boolean | NutritionalPlan$meal_registrationsArgs<ExtArgs>
    daily_scores?: boolean | NutritionalPlan$daily_scoresArgs<ExtArgs>
    _count?: boolean | NutritionalPlanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nutritionalPlan"]>

  export type NutritionalPlanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    name?: boolean
    daily_calories?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nutritionalPlan"]>

  export type NutritionalPlanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    name?: boolean
    daily_calories?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nutritionalPlan"]>

  export type NutritionalPlanSelectScalar = {
    id?: boolean
    user_id?: boolean
    name?: boolean
    daily_calories?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type NutritionalPlanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "name" | "daily_calories" | "is_active" | "created_at" | "updated_at", ExtArgs["result"]["nutritionalPlan"]>
  export type NutritionalPlanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    meals?: boolean | NutritionalPlan$mealsArgs<ExtArgs>
    meal_registrations?: boolean | NutritionalPlan$meal_registrationsArgs<ExtArgs>
    daily_scores?: boolean | NutritionalPlan$daily_scoresArgs<ExtArgs>
    _count?: boolean | NutritionalPlanCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type NutritionalPlanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NutritionalPlanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NutritionalPlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NutritionalPlan"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      meals: Prisma.$PlanMealPayload<ExtArgs>[]
      meal_registrations: Prisma.$MealRegistrationPayload<ExtArgs>[]
      daily_scores: Prisma.$DailyScorePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: string
      name: string
      daily_calories: number
      is_active: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["nutritionalPlan"]>
    composites: {}
  }

  type NutritionalPlanGetPayload<S extends boolean | null | undefined | NutritionalPlanDefaultArgs> = $Result.GetResult<Prisma.$NutritionalPlanPayload, S>

  type NutritionalPlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NutritionalPlanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NutritionalPlanCountAggregateInputType | true
    }

  export interface NutritionalPlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NutritionalPlan'], meta: { name: 'NutritionalPlan' } }
    /**
     * Find zero or one NutritionalPlan that matches the filter.
     * @param {NutritionalPlanFindUniqueArgs} args - Arguments to find a NutritionalPlan
     * @example
     * // Get one NutritionalPlan
     * const nutritionalPlan = await prisma.nutritionalPlan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NutritionalPlanFindUniqueArgs>(args: SelectSubset<T, NutritionalPlanFindUniqueArgs<ExtArgs>>): Prisma__NutritionalPlanClient<$Result.GetResult<Prisma.$NutritionalPlanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NutritionalPlan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NutritionalPlanFindUniqueOrThrowArgs} args - Arguments to find a NutritionalPlan
     * @example
     * // Get one NutritionalPlan
     * const nutritionalPlan = await prisma.nutritionalPlan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NutritionalPlanFindUniqueOrThrowArgs>(args: SelectSubset<T, NutritionalPlanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NutritionalPlanClient<$Result.GetResult<Prisma.$NutritionalPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NutritionalPlan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NutritionalPlanFindFirstArgs} args - Arguments to find a NutritionalPlan
     * @example
     * // Get one NutritionalPlan
     * const nutritionalPlan = await prisma.nutritionalPlan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NutritionalPlanFindFirstArgs>(args?: SelectSubset<T, NutritionalPlanFindFirstArgs<ExtArgs>>): Prisma__NutritionalPlanClient<$Result.GetResult<Prisma.$NutritionalPlanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NutritionalPlan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NutritionalPlanFindFirstOrThrowArgs} args - Arguments to find a NutritionalPlan
     * @example
     * // Get one NutritionalPlan
     * const nutritionalPlan = await prisma.nutritionalPlan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NutritionalPlanFindFirstOrThrowArgs>(args?: SelectSubset<T, NutritionalPlanFindFirstOrThrowArgs<ExtArgs>>): Prisma__NutritionalPlanClient<$Result.GetResult<Prisma.$NutritionalPlanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NutritionalPlans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NutritionalPlanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NutritionalPlans
     * const nutritionalPlans = await prisma.nutritionalPlan.findMany()
     * 
     * // Get first 10 NutritionalPlans
     * const nutritionalPlans = await prisma.nutritionalPlan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const nutritionalPlanWithIdOnly = await prisma.nutritionalPlan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NutritionalPlanFindManyArgs>(args?: SelectSubset<T, NutritionalPlanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NutritionalPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NutritionalPlan.
     * @param {NutritionalPlanCreateArgs} args - Arguments to create a NutritionalPlan.
     * @example
     * // Create one NutritionalPlan
     * const NutritionalPlan = await prisma.nutritionalPlan.create({
     *   data: {
     *     // ... data to create a NutritionalPlan
     *   }
     * })
     * 
     */
    create<T extends NutritionalPlanCreateArgs>(args: SelectSubset<T, NutritionalPlanCreateArgs<ExtArgs>>): Prisma__NutritionalPlanClient<$Result.GetResult<Prisma.$NutritionalPlanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NutritionalPlans.
     * @param {NutritionalPlanCreateManyArgs} args - Arguments to create many NutritionalPlans.
     * @example
     * // Create many NutritionalPlans
     * const nutritionalPlan = await prisma.nutritionalPlan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NutritionalPlanCreateManyArgs>(args?: SelectSubset<T, NutritionalPlanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NutritionalPlans and returns the data saved in the database.
     * @param {NutritionalPlanCreateManyAndReturnArgs} args - Arguments to create many NutritionalPlans.
     * @example
     * // Create many NutritionalPlans
     * const nutritionalPlan = await prisma.nutritionalPlan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NutritionalPlans and only return the `id`
     * const nutritionalPlanWithIdOnly = await prisma.nutritionalPlan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NutritionalPlanCreateManyAndReturnArgs>(args?: SelectSubset<T, NutritionalPlanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NutritionalPlanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NutritionalPlan.
     * @param {NutritionalPlanDeleteArgs} args - Arguments to delete one NutritionalPlan.
     * @example
     * // Delete one NutritionalPlan
     * const NutritionalPlan = await prisma.nutritionalPlan.delete({
     *   where: {
     *     // ... filter to delete one NutritionalPlan
     *   }
     * })
     * 
     */
    delete<T extends NutritionalPlanDeleteArgs>(args: SelectSubset<T, NutritionalPlanDeleteArgs<ExtArgs>>): Prisma__NutritionalPlanClient<$Result.GetResult<Prisma.$NutritionalPlanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NutritionalPlan.
     * @param {NutritionalPlanUpdateArgs} args - Arguments to update one NutritionalPlan.
     * @example
     * // Update one NutritionalPlan
     * const nutritionalPlan = await prisma.nutritionalPlan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NutritionalPlanUpdateArgs>(args: SelectSubset<T, NutritionalPlanUpdateArgs<ExtArgs>>): Prisma__NutritionalPlanClient<$Result.GetResult<Prisma.$NutritionalPlanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NutritionalPlans.
     * @param {NutritionalPlanDeleteManyArgs} args - Arguments to filter NutritionalPlans to delete.
     * @example
     * // Delete a few NutritionalPlans
     * const { count } = await prisma.nutritionalPlan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NutritionalPlanDeleteManyArgs>(args?: SelectSubset<T, NutritionalPlanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NutritionalPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NutritionalPlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NutritionalPlans
     * const nutritionalPlan = await prisma.nutritionalPlan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NutritionalPlanUpdateManyArgs>(args: SelectSubset<T, NutritionalPlanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NutritionalPlans and returns the data updated in the database.
     * @param {NutritionalPlanUpdateManyAndReturnArgs} args - Arguments to update many NutritionalPlans.
     * @example
     * // Update many NutritionalPlans
     * const nutritionalPlan = await prisma.nutritionalPlan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NutritionalPlans and only return the `id`
     * const nutritionalPlanWithIdOnly = await prisma.nutritionalPlan.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NutritionalPlanUpdateManyAndReturnArgs>(args: SelectSubset<T, NutritionalPlanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NutritionalPlanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NutritionalPlan.
     * @param {NutritionalPlanUpsertArgs} args - Arguments to update or create a NutritionalPlan.
     * @example
     * // Update or create a NutritionalPlan
     * const nutritionalPlan = await prisma.nutritionalPlan.upsert({
     *   create: {
     *     // ... data to create a NutritionalPlan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NutritionalPlan we want to update
     *   }
     * })
     */
    upsert<T extends NutritionalPlanUpsertArgs>(args: SelectSubset<T, NutritionalPlanUpsertArgs<ExtArgs>>): Prisma__NutritionalPlanClient<$Result.GetResult<Prisma.$NutritionalPlanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NutritionalPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NutritionalPlanCountArgs} args - Arguments to filter NutritionalPlans to count.
     * @example
     * // Count the number of NutritionalPlans
     * const count = await prisma.nutritionalPlan.count({
     *   where: {
     *     // ... the filter for the NutritionalPlans we want to count
     *   }
     * })
    **/
    count<T extends NutritionalPlanCountArgs>(
      args?: Subset<T, NutritionalPlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NutritionalPlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NutritionalPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NutritionalPlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NutritionalPlanAggregateArgs>(args: Subset<T, NutritionalPlanAggregateArgs>): Prisma.PrismaPromise<GetNutritionalPlanAggregateType<T>>

    /**
     * Group by NutritionalPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NutritionalPlanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NutritionalPlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NutritionalPlanGroupByArgs['orderBy'] }
        : { orderBy?: NutritionalPlanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NutritionalPlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNutritionalPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NutritionalPlan model
   */
  readonly fields: NutritionalPlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NutritionalPlan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NutritionalPlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    meals<T extends NutritionalPlan$mealsArgs<ExtArgs> = {}>(args?: Subset<T, NutritionalPlan$mealsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanMealPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    meal_registrations<T extends NutritionalPlan$meal_registrationsArgs<ExtArgs> = {}>(args?: Subset<T, NutritionalPlan$meal_registrationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealRegistrationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    daily_scores<T extends NutritionalPlan$daily_scoresArgs<ExtArgs> = {}>(args?: Subset<T, NutritionalPlan$daily_scoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyScorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NutritionalPlan model
   */
  interface NutritionalPlanFieldRefs {
    readonly id: FieldRef<"NutritionalPlan", 'Int'>
    readonly user_id: FieldRef<"NutritionalPlan", 'String'>
    readonly name: FieldRef<"NutritionalPlan", 'String'>
    readonly daily_calories: FieldRef<"NutritionalPlan", 'Int'>
    readonly is_active: FieldRef<"NutritionalPlan", 'Boolean'>
    readonly created_at: FieldRef<"NutritionalPlan", 'DateTime'>
    readonly updated_at: FieldRef<"NutritionalPlan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NutritionalPlan findUnique
   */
  export type NutritionalPlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NutritionalPlan
     */
    select?: NutritionalPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NutritionalPlan
     */
    omit?: NutritionalPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NutritionalPlanInclude<ExtArgs> | null
    /**
     * Filter, which NutritionalPlan to fetch.
     */
    where: NutritionalPlanWhereUniqueInput
  }

  /**
   * NutritionalPlan findUniqueOrThrow
   */
  export type NutritionalPlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NutritionalPlan
     */
    select?: NutritionalPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NutritionalPlan
     */
    omit?: NutritionalPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NutritionalPlanInclude<ExtArgs> | null
    /**
     * Filter, which NutritionalPlan to fetch.
     */
    where: NutritionalPlanWhereUniqueInput
  }

  /**
   * NutritionalPlan findFirst
   */
  export type NutritionalPlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NutritionalPlan
     */
    select?: NutritionalPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NutritionalPlan
     */
    omit?: NutritionalPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NutritionalPlanInclude<ExtArgs> | null
    /**
     * Filter, which NutritionalPlan to fetch.
     */
    where?: NutritionalPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NutritionalPlans to fetch.
     */
    orderBy?: NutritionalPlanOrderByWithRelationInput | NutritionalPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NutritionalPlans.
     */
    cursor?: NutritionalPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NutritionalPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NutritionalPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NutritionalPlans.
     */
    distinct?: NutritionalPlanScalarFieldEnum | NutritionalPlanScalarFieldEnum[]
  }

  /**
   * NutritionalPlan findFirstOrThrow
   */
  export type NutritionalPlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NutritionalPlan
     */
    select?: NutritionalPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NutritionalPlan
     */
    omit?: NutritionalPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NutritionalPlanInclude<ExtArgs> | null
    /**
     * Filter, which NutritionalPlan to fetch.
     */
    where?: NutritionalPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NutritionalPlans to fetch.
     */
    orderBy?: NutritionalPlanOrderByWithRelationInput | NutritionalPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NutritionalPlans.
     */
    cursor?: NutritionalPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NutritionalPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NutritionalPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NutritionalPlans.
     */
    distinct?: NutritionalPlanScalarFieldEnum | NutritionalPlanScalarFieldEnum[]
  }

  /**
   * NutritionalPlan findMany
   */
  export type NutritionalPlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NutritionalPlan
     */
    select?: NutritionalPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NutritionalPlan
     */
    omit?: NutritionalPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NutritionalPlanInclude<ExtArgs> | null
    /**
     * Filter, which NutritionalPlans to fetch.
     */
    where?: NutritionalPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NutritionalPlans to fetch.
     */
    orderBy?: NutritionalPlanOrderByWithRelationInput | NutritionalPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NutritionalPlans.
     */
    cursor?: NutritionalPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NutritionalPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NutritionalPlans.
     */
    skip?: number
    distinct?: NutritionalPlanScalarFieldEnum | NutritionalPlanScalarFieldEnum[]
  }

  /**
   * NutritionalPlan create
   */
  export type NutritionalPlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NutritionalPlan
     */
    select?: NutritionalPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NutritionalPlan
     */
    omit?: NutritionalPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NutritionalPlanInclude<ExtArgs> | null
    /**
     * The data needed to create a NutritionalPlan.
     */
    data: XOR<NutritionalPlanCreateInput, NutritionalPlanUncheckedCreateInput>
  }

  /**
   * NutritionalPlan createMany
   */
  export type NutritionalPlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NutritionalPlans.
     */
    data: NutritionalPlanCreateManyInput | NutritionalPlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NutritionalPlan createManyAndReturn
   */
  export type NutritionalPlanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NutritionalPlan
     */
    select?: NutritionalPlanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NutritionalPlan
     */
    omit?: NutritionalPlanOmit<ExtArgs> | null
    /**
     * The data used to create many NutritionalPlans.
     */
    data: NutritionalPlanCreateManyInput | NutritionalPlanCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NutritionalPlanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * NutritionalPlan update
   */
  export type NutritionalPlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NutritionalPlan
     */
    select?: NutritionalPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NutritionalPlan
     */
    omit?: NutritionalPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NutritionalPlanInclude<ExtArgs> | null
    /**
     * The data needed to update a NutritionalPlan.
     */
    data: XOR<NutritionalPlanUpdateInput, NutritionalPlanUncheckedUpdateInput>
    /**
     * Choose, which NutritionalPlan to update.
     */
    where: NutritionalPlanWhereUniqueInput
  }

  /**
   * NutritionalPlan updateMany
   */
  export type NutritionalPlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NutritionalPlans.
     */
    data: XOR<NutritionalPlanUpdateManyMutationInput, NutritionalPlanUncheckedUpdateManyInput>
    /**
     * Filter which NutritionalPlans to update
     */
    where?: NutritionalPlanWhereInput
    /**
     * Limit how many NutritionalPlans to update.
     */
    limit?: number
  }

  /**
   * NutritionalPlan updateManyAndReturn
   */
  export type NutritionalPlanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NutritionalPlan
     */
    select?: NutritionalPlanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NutritionalPlan
     */
    omit?: NutritionalPlanOmit<ExtArgs> | null
    /**
     * The data used to update NutritionalPlans.
     */
    data: XOR<NutritionalPlanUpdateManyMutationInput, NutritionalPlanUncheckedUpdateManyInput>
    /**
     * Filter which NutritionalPlans to update
     */
    where?: NutritionalPlanWhereInput
    /**
     * Limit how many NutritionalPlans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NutritionalPlanIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * NutritionalPlan upsert
   */
  export type NutritionalPlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NutritionalPlan
     */
    select?: NutritionalPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NutritionalPlan
     */
    omit?: NutritionalPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NutritionalPlanInclude<ExtArgs> | null
    /**
     * The filter to search for the NutritionalPlan to update in case it exists.
     */
    where: NutritionalPlanWhereUniqueInput
    /**
     * In case the NutritionalPlan found by the `where` argument doesn't exist, create a new NutritionalPlan with this data.
     */
    create: XOR<NutritionalPlanCreateInput, NutritionalPlanUncheckedCreateInput>
    /**
     * In case the NutritionalPlan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NutritionalPlanUpdateInput, NutritionalPlanUncheckedUpdateInput>
  }

  /**
   * NutritionalPlan delete
   */
  export type NutritionalPlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NutritionalPlan
     */
    select?: NutritionalPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NutritionalPlan
     */
    omit?: NutritionalPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NutritionalPlanInclude<ExtArgs> | null
    /**
     * Filter which NutritionalPlan to delete.
     */
    where: NutritionalPlanWhereUniqueInput
  }

  /**
   * NutritionalPlan deleteMany
   */
  export type NutritionalPlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NutritionalPlans to delete
     */
    where?: NutritionalPlanWhereInput
    /**
     * Limit how many NutritionalPlans to delete.
     */
    limit?: number
  }

  /**
   * NutritionalPlan.meals
   */
  export type NutritionalPlan$mealsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanMeal
     */
    select?: PlanMealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanMeal
     */
    omit?: PlanMealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanMealInclude<ExtArgs> | null
    where?: PlanMealWhereInput
    orderBy?: PlanMealOrderByWithRelationInput | PlanMealOrderByWithRelationInput[]
    cursor?: PlanMealWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlanMealScalarFieldEnum | PlanMealScalarFieldEnum[]
  }

  /**
   * NutritionalPlan.meal_registrations
   */
  export type NutritionalPlan$meal_registrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealRegistration
     */
    select?: MealRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealRegistration
     */
    omit?: MealRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealRegistrationInclude<ExtArgs> | null
    where?: MealRegistrationWhereInput
    orderBy?: MealRegistrationOrderByWithRelationInput | MealRegistrationOrderByWithRelationInput[]
    cursor?: MealRegistrationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MealRegistrationScalarFieldEnum | MealRegistrationScalarFieldEnum[]
  }

  /**
   * NutritionalPlan.daily_scores
   */
  export type NutritionalPlan$daily_scoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyScore
     */
    select?: DailyScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyScore
     */
    omit?: DailyScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyScoreInclude<ExtArgs> | null
    where?: DailyScoreWhereInput
    orderBy?: DailyScoreOrderByWithRelationInput | DailyScoreOrderByWithRelationInput[]
    cursor?: DailyScoreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DailyScoreScalarFieldEnum | DailyScoreScalarFieldEnum[]
  }

  /**
   * NutritionalPlan without action
   */
  export type NutritionalPlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NutritionalPlan
     */
    select?: NutritionalPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NutritionalPlan
     */
    omit?: NutritionalPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NutritionalPlanInclude<ExtArgs> | null
  }


  /**
   * Model PlanMeal
   */

  export type AggregatePlanMeal = {
    _count: PlanMealCountAggregateOutputType | null
    _avg: PlanMealAvgAggregateOutputType | null
    _sum: PlanMealSumAggregateOutputType | null
    _min: PlanMealMinAggregateOutputType | null
    _max: PlanMealMaxAggregateOutputType | null
  }

  export type PlanMealAvgAggregateOutputType = {
    id: number | null
    plan_id: number | null
    target_calories: number | null
  }

  export type PlanMealSumAggregateOutputType = {
    id: number | null
    plan_id: number | null
    target_calories: number | null
  }

  export type PlanMealMinAggregateOutputType = {
    id: number | null
    plan_id: number | null
    meal_name: string | null
    suggested_time: string | null
    target_calories: number | null
    allowed_foods: string | null
    notes: string | null
  }

  export type PlanMealMaxAggregateOutputType = {
    id: number | null
    plan_id: number | null
    meal_name: string | null
    suggested_time: string | null
    target_calories: number | null
    allowed_foods: string | null
    notes: string | null
  }

  export type PlanMealCountAggregateOutputType = {
    id: number
    plan_id: number
    meal_name: number
    suggested_time: number
    target_calories: number
    allowed_foods: number
    notes: number
    _all: number
  }


  export type PlanMealAvgAggregateInputType = {
    id?: true
    plan_id?: true
    target_calories?: true
  }

  export type PlanMealSumAggregateInputType = {
    id?: true
    plan_id?: true
    target_calories?: true
  }

  export type PlanMealMinAggregateInputType = {
    id?: true
    plan_id?: true
    meal_name?: true
    suggested_time?: true
    target_calories?: true
    allowed_foods?: true
    notes?: true
  }

  export type PlanMealMaxAggregateInputType = {
    id?: true
    plan_id?: true
    meal_name?: true
    suggested_time?: true
    target_calories?: true
    allowed_foods?: true
    notes?: true
  }

  export type PlanMealCountAggregateInputType = {
    id?: true
    plan_id?: true
    meal_name?: true
    suggested_time?: true
    target_calories?: true
    allowed_foods?: true
    notes?: true
    _all?: true
  }

  export type PlanMealAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlanMeal to aggregate.
     */
    where?: PlanMealWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlanMeals to fetch.
     */
    orderBy?: PlanMealOrderByWithRelationInput | PlanMealOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlanMealWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlanMeals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlanMeals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlanMeals
    **/
    _count?: true | PlanMealCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlanMealAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlanMealSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlanMealMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlanMealMaxAggregateInputType
  }

  export type GetPlanMealAggregateType<T extends PlanMealAggregateArgs> = {
        [P in keyof T & keyof AggregatePlanMeal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlanMeal[P]>
      : GetScalarType<T[P], AggregatePlanMeal[P]>
  }




  export type PlanMealGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlanMealWhereInput
    orderBy?: PlanMealOrderByWithAggregationInput | PlanMealOrderByWithAggregationInput[]
    by: PlanMealScalarFieldEnum[] | PlanMealScalarFieldEnum
    having?: PlanMealScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlanMealCountAggregateInputType | true
    _avg?: PlanMealAvgAggregateInputType
    _sum?: PlanMealSumAggregateInputType
    _min?: PlanMealMinAggregateInputType
    _max?: PlanMealMaxAggregateInputType
  }

  export type PlanMealGroupByOutputType = {
    id: number
    plan_id: number
    meal_name: string
    suggested_time: string | null
    target_calories: number | null
    allowed_foods: string | null
    notes: string | null
    _count: PlanMealCountAggregateOutputType | null
    _avg: PlanMealAvgAggregateOutputType | null
    _sum: PlanMealSumAggregateOutputType | null
    _min: PlanMealMinAggregateOutputType | null
    _max: PlanMealMaxAggregateOutputType | null
  }

  type GetPlanMealGroupByPayload<T extends PlanMealGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlanMealGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlanMealGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlanMealGroupByOutputType[P]>
            : GetScalarType<T[P], PlanMealGroupByOutputType[P]>
        }
      >
    >


  export type PlanMealSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    plan_id?: boolean
    meal_name?: boolean
    suggested_time?: boolean
    target_calories?: boolean
    allowed_foods?: boolean
    notes?: boolean
    plan?: boolean | NutritionalPlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["planMeal"]>

  export type PlanMealSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    plan_id?: boolean
    meal_name?: boolean
    suggested_time?: boolean
    target_calories?: boolean
    allowed_foods?: boolean
    notes?: boolean
    plan?: boolean | NutritionalPlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["planMeal"]>

  export type PlanMealSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    plan_id?: boolean
    meal_name?: boolean
    suggested_time?: boolean
    target_calories?: boolean
    allowed_foods?: boolean
    notes?: boolean
    plan?: boolean | NutritionalPlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["planMeal"]>

  export type PlanMealSelectScalar = {
    id?: boolean
    plan_id?: boolean
    meal_name?: boolean
    suggested_time?: boolean
    target_calories?: boolean
    allowed_foods?: boolean
    notes?: boolean
  }

  export type PlanMealOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "plan_id" | "meal_name" | "suggested_time" | "target_calories" | "allowed_foods" | "notes", ExtArgs["result"]["planMeal"]>
  export type PlanMealInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | NutritionalPlanDefaultArgs<ExtArgs>
  }
  export type PlanMealIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | NutritionalPlanDefaultArgs<ExtArgs>
  }
  export type PlanMealIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | NutritionalPlanDefaultArgs<ExtArgs>
  }

  export type $PlanMealPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlanMeal"
    objects: {
      plan: Prisma.$NutritionalPlanPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      plan_id: number
      meal_name: string
      suggested_time: string | null
      target_calories: number | null
      allowed_foods: string | null
      notes: string | null
    }, ExtArgs["result"]["planMeal"]>
    composites: {}
  }

  type PlanMealGetPayload<S extends boolean | null | undefined | PlanMealDefaultArgs> = $Result.GetResult<Prisma.$PlanMealPayload, S>

  type PlanMealCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlanMealFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlanMealCountAggregateInputType | true
    }

  export interface PlanMealDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlanMeal'], meta: { name: 'PlanMeal' } }
    /**
     * Find zero or one PlanMeal that matches the filter.
     * @param {PlanMealFindUniqueArgs} args - Arguments to find a PlanMeal
     * @example
     * // Get one PlanMeal
     * const planMeal = await prisma.planMeal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlanMealFindUniqueArgs>(args: SelectSubset<T, PlanMealFindUniqueArgs<ExtArgs>>): Prisma__PlanMealClient<$Result.GetResult<Prisma.$PlanMealPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PlanMeal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlanMealFindUniqueOrThrowArgs} args - Arguments to find a PlanMeal
     * @example
     * // Get one PlanMeal
     * const planMeal = await prisma.planMeal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlanMealFindUniqueOrThrowArgs>(args: SelectSubset<T, PlanMealFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlanMealClient<$Result.GetResult<Prisma.$PlanMealPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlanMeal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanMealFindFirstArgs} args - Arguments to find a PlanMeal
     * @example
     * // Get one PlanMeal
     * const planMeal = await prisma.planMeal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlanMealFindFirstArgs>(args?: SelectSubset<T, PlanMealFindFirstArgs<ExtArgs>>): Prisma__PlanMealClient<$Result.GetResult<Prisma.$PlanMealPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlanMeal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanMealFindFirstOrThrowArgs} args - Arguments to find a PlanMeal
     * @example
     * // Get one PlanMeal
     * const planMeal = await prisma.planMeal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlanMealFindFirstOrThrowArgs>(args?: SelectSubset<T, PlanMealFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlanMealClient<$Result.GetResult<Prisma.$PlanMealPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PlanMeals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanMealFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlanMeals
     * const planMeals = await prisma.planMeal.findMany()
     * 
     * // Get first 10 PlanMeals
     * const planMeals = await prisma.planMeal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const planMealWithIdOnly = await prisma.planMeal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlanMealFindManyArgs>(args?: SelectSubset<T, PlanMealFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanMealPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PlanMeal.
     * @param {PlanMealCreateArgs} args - Arguments to create a PlanMeal.
     * @example
     * // Create one PlanMeal
     * const PlanMeal = await prisma.planMeal.create({
     *   data: {
     *     // ... data to create a PlanMeal
     *   }
     * })
     * 
     */
    create<T extends PlanMealCreateArgs>(args: SelectSubset<T, PlanMealCreateArgs<ExtArgs>>): Prisma__PlanMealClient<$Result.GetResult<Prisma.$PlanMealPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PlanMeals.
     * @param {PlanMealCreateManyArgs} args - Arguments to create many PlanMeals.
     * @example
     * // Create many PlanMeals
     * const planMeal = await prisma.planMeal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlanMealCreateManyArgs>(args?: SelectSubset<T, PlanMealCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PlanMeals and returns the data saved in the database.
     * @param {PlanMealCreateManyAndReturnArgs} args - Arguments to create many PlanMeals.
     * @example
     * // Create many PlanMeals
     * const planMeal = await prisma.planMeal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PlanMeals and only return the `id`
     * const planMealWithIdOnly = await prisma.planMeal.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlanMealCreateManyAndReturnArgs>(args?: SelectSubset<T, PlanMealCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanMealPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PlanMeal.
     * @param {PlanMealDeleteArgs} args - Arguments to delete one PlanMeal.
     * @example
     * // Delete one PlanMeal
     * const PlanMeal = await prisma.planMeal.delete({
     *   where: {
     *     // ... filter to delete one PlanMeal
     *   }
     * })
     * 
     */
    delete<T extends PlanMealDeleteArgs>(args: SelectSubset<T, PlanMealDeleteArgs<ExtArgs>>): Prisma__PlanMealClient<$Result.GetResult<Prisma.$PlanMealPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PlanMeal.
     * @param {PlanMealUpdateArgs} args - Arguments to update one PlanMeal.
     * @example
     * // Update one PlanMeal
     * const planMeal = await prisma.planMeal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlanMealUpdateArgs>(args: SelectSubset<T, PlanMealUpdateArgs<ExtArgs>>): Prisma__PlanMealClient<$Result.GetResult<Prisma.$PlanMealPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PlanMeals.
     * @param {PlanMealDeleteManyArgs} args - Arguments to filter PlanMeals to delete.
     * @example
     * // Delete a few PlanMeals
     * const { count } = await prisma.planMeal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlanMealDeleteManyArgs>(args?: SelectSubset<T, PlanMealDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlanMeals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanMealUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlanMeals
     * const planMeal = await prisma.planMeal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlanMealUpdateManyArgs>(args: SelectSubset<T, PlanMealUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlanMeals and returns the data updated in the database.
     * @param {PlanMealUpdateManyAndReturnArgs} args - Arguments to update many PlanMeals.
     * @example
     * // Update many PlanMeals
     * const planMeal = await prisma.planMeal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PlanMeals and only return the `id`
     * const planMealWithIdOnly = await prisma.planMeal.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlanMealUpdateManyAndReturnArgs>(args: SelectSubset<T, PlanMealUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanMealPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PlanMeal.
     * @param {PlanMealUpsertArgs} args - Arguments to update or create a PlanMeal.
     * @example
     * // Update or create a PlanMeal
     * const planMeal = await prisma.planMeal.upsert({
     *   create: {
     *     // ... data to create a PlanMeal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlanMeal we want to update
     *   }
     * })
     */
    upsert<T extends PlanMealUpsertArgs>(args: SelectSubset<T, PlanMealUpsertArgs<ExtArgs>>): Prisma__PlanMealClient<$Result.GetResult<Prisma.$PlanMealPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PlanMeals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanMealCountArgs} args - Arguments to filter PlanMeals to count.
     * @example
     * // Count the number of PlanMeals
     * const count = await prisma.planMeal.count({
     *   where: {
     *     // ... the filter for the PlanMeals we want to count
     *   }
     * })
    **/
    count<T extends PlanMealCountArgs>(
      args?: Subset<T, PlanMealCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlanMealCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlanMeal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanMealAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlanMealAggregateArgs>(args: Subset<T, PlanMealAggregateArgs>): Prisma.PrismaPromise<GetPlanMealAggregateType<T>>

    /**
     * Group by PlanMeal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanMealGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlanMealGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlanMealGroupByArgs['orderBy'] }
        : { orderBy?: PlanMealGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlanMealGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlanMealGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlanMeal model
   */
  readonly fields: PlanMealFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlanMeal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlanMealClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    plan<T extends NutritionalPlanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NutritionalPlanDefaultArgs<ExtArgs>>): Prisma__NutritionalPlanClient<$Result.GetResult<Prisma.$NutritionalPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PlanMeal model
   */
  interface PlanMealFieldRefs {
    readonly id: FieldRef<"PlanMeal", 'Int'>
    readonly plan_id: FieldRef<"PlanMeal", 'Int'>
    readonly meal_name: FieldRef<"PlanMeal", 'String'>
    readonly suggested_time: FieldRef<"PlanMeal", 'String'>
    readonly target_calories: FieldRef<"PlanMeal", 'Int'>
    readonly allowed_foods: FieldRef<"PlanMeal", 'String'>
    readonly notes: FieldRef<"PlanMeal", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PlanMeal findUnique
   */
  export type PlanMealFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanMeal
     */
    select?: PlanMealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanMeal
     */
    omit?: PlanMealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanMealInclude<ExtArgs> | null
    /**
     * Filter, which PlanMeal to fetch.
     */
    where: PlanMealWhereUniqueInput
  }

  /**
   * PlanMeal findUniqueOrThrow
   */
  export type PlanMealFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanMeal
     */
    select?: PlanMealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanMeal
     */
    omit?: PlanMealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanMealInclude<ExtArgs> | null
    /**
     * Filter, which PlanMeal to fetch.
     */
    where: PlanMealWhereUniqueInput
  }

  /**
   * PlanMeal findFirst
   */
  export type PlanMealFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanMeal
     */
    select?: PlanMealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanMeal
     */
    omit?: PlanMealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanMealInclude<ExtArgs> | null
    /**
     * Filter, which PlanMeal to fetch.
     */
    where?: PlanMealWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlanMeals to fetch.
     */
    orderBy?: PlanMealOrderByWithRelationInput | PlanMealOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlanMeals.
     */
    cursor?: PlanMealWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlanMeals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlanMeals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlanMeals.
     */
    distinct?: PlanMealScalarFieldEnum | PlanMealScalarFieldEnum[]
  }

  /**
   * PlanMeal findFirstOrThrow
   */
  export type PlanMealFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanMeal
     */
    select?: PlanMealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanMeal
     */
    omit?: PlanMealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanMealInclude<ExtArgs> | null
    /**
     * Filter, which PlanMeal to fetch.
     */
    where?: PlanMealWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlanMeals to fetch.
     */
    orderBy?: PlanMealOrderByWithRelationInput | PlanMealOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlanMeals.
     */
    cursor?: PlanMealWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlanMeals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlanMeals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlanMeals.
     */
    distinct?: PlanMealScalarFieldEnum | PlanMealScalarFieldEnum[]
  }

  /**
   * PlanMeal findMany
   */
  export type PlanMealFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanMeal
     */
    select?: PlanMealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanMeal
     */
    omit?: PlanMealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanMealInclude<ExtArgs> | null
    /**
     * Filter, which PlanMeals to fetch.
     */
    where?: PlanMealWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlanMeals to fetch.
     */
    orderBy?: PlanMealOrderByWithRelationInput | PlanMealOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlanMeals.
     */
    cursor?: PlanMealWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlanMeals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlanMeals.
     */
    skip?: number
    distinct?: PlanMealScalarFieldEnum | PlanMealScalarFieldEnum[]
  }

  /**
   * PlanMeal create
   */
  export type PlanMealCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanMeal
     */
    select?: PlanMealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanMeal
     */
    omit?: PlanMealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanMealInclude<ExtArgs> | null
    /**
     * The data needed to create a PlanMeal.
     */
    data: XOR<PlanMealCreateInput, PlanMealUncheckedCreateInput>
  }

  /**
   * PlanMeal createMany
   */
  export type PlanMealCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlanMeals.
     */
    data: PlanMealCreateManyInput | PlanMealCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlanMeal createManyAndReturn
   */
  export type PlanMealCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanMeal
     */
    select?: PlanMealSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlanMeal
     */
    omit?: PlanMealOmit<ExtArgs> | null
    /**
     * The data used to create many PlanMeals.
     */
    data: PlanMealCreateManyInput | PlanMealCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanMealIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlanMeal update
   */
  export type PlanMealUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanMeal
     */
    select?: PlanMealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanMeal
     */
    omit?: PlanMealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanMealInclude<ExtArgs> | null
    /**
     * The data needed to update a PlanMeal.
     */
    data: XOR<PlanMealUpdateInput, PlanMealUncheckedUpdateInput>
    /**
     * Choose, which PlanMeal to update.
     */
    where: PlanMealWhereUniqueInput
  }

  /**
   * PlanMeal updateMany
   */
  export type PlanMealUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlanMeals.
     */
    data: XOR<PlanMealUpdateManyMutationInput, PlanMealUncheckedUpdateManyInput>
    /**
     * Filter which PlanMeals to update
     */
    where?: PlanMealWhereInput
    /**
     * Limit how many PlanMeals to update.
     */
    limit?: number
  }

  /**
   * PlanMeal updateManyAndReturn
   */
  export type PlanMealUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanMeal
     */
    select?: PlanMealSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlanMeal
     */
    omit?: PlanMealOmit<ExtArgs> | null
    /**
     * The data used to update PlanMeals.
     */
    data: XOR<PlanMealUpdateManyMutationInput, PlanMealUncheckedUpdateManyInput>
    /**
     * Filter which PlanMeals to update
     */
    where?: PlanMealWhereInput
    /**
     * Limit how many PlanMeals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanMealIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlanMeal upsert
   */
  export type PlanMealUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanMeal
     */
    select?: PlanMealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanMeal
     */
    omit?: PlanMealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanMealInclude<ExtArgs> | null
    /**
     * The filter to search for the PlanMeal to update in case it exists.
     */
    where: PlanMealWhereUniqueInput
    /**
     * In case the PlanMeal found by the `where` argument doesn't exist, create a new PlanMeal with this data.
     */
    create: XOR<PlanMealCreateInput, PlanMealUncheckedCreateInput>
    /**
     * In case the PlanMeal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlanMealUpdateInput, PlanMealUncheckedUpdateInput>
  }

  /**
   * PlanMeal delete
   */
  export type PlanMealDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanMeal
     */
    select?: PlanMealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanMeal
     */
    omit?: PlanMealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanMealInclude<ExtArgs> | null
    /**
     * Filter which PlanMeal to delete.
     */
    where: PlanMealWhereUniqueInput
  }

  /**
   * PlanMeal deleteMany
   */
  export type PlanMealDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlanMeals to delete
     */
    where?: PlanMealWhereInput
    /**
     * Limit how many PlanMeals to delete.
     */
    limit?: number
  }

  /**
   * PlanMeal without action
   */
  export type PlanMealDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanMeal
     */
    select?: PlanMealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanMeal
     */
    omit?: PlanMealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanMealInclude<ExtArgs> | null
  }


  /**
   * Model MealRegistration
   */

  export type AggregateMealRegistration = {
    _count: MealRegistrationCountAggregateOutputType | null
    _avg: MealRegistrationAvgAggregateOutputType | null
    _sum: MealRegistrationSumAggregateOutputType | null
    _min: MealRegistrationMinAggregateOutputType | null
    _max: MealRegistrationMaxAggregateOutputType | null
  }

  export type MealRegistrationAvgAggregateOutputType = {
    id: number | null
    plan_id: number | null
    estimated_calories: number | null
    estimated_protein: number | null
    estimated_carbs: number | null
    estimated_fats: number | null
    meal_score: number | null
  }

  export type MealRegistrationSumAggregateOutputType = {
    id: number | null
    plan_id: number | null
    estimated_calories: number | null
    estimated_protein: number | null
    estimated_carbs: number | null
    estimated_fats: number | null
    meal_score: number | null
  }

  export type MealRegistrationMinAggregateOutputType = {
    id: number | null
    user_id: string | null
    plan_id: number | null
    meal_name: string | null
    photo_url: string | null
    estimated_calories: number | null
    estimated_protein: number | null
    estimated_carbs: number | null
    estimated_fats: number | null
    meal_score: number | null
    ai_message: string | null
    registered_at: Date | null
  }

  export type MealRegistrationMaxAggregateOutputType = {
    id: number | null
    user_id: string | null
    plan_id: number | null
    meal_name: string | null
    photo_url: string | null
    estimated_calories: number | null
    estimated_protein: number | null
    estimated_carbs: number | null
    estimated_fats: number | null
    meal_score: number | null
    ai_message: string | null
    registered_at: Date | null
  }

  export type MealRegistrationCountAggregateOutputType = {
    id: number
    user_id: number
    plan_id: number
    meal_name: number
    photo_url: number
    ai_analysis: number
    detected_foods: number
    estimated_calories: number
    estimated_protein: number
    estimated_carbs: number
    estimated_fats: number
    meal_score: number
    adherence_tags: number
    ai_message: number
    registered_at: number
    _all: number
  }


  export type MealRegistrationAvgAggregateInputType = {
    id?: true
    plan_id?: true
    estimated_calories?: true
    estimated_protein?: true
    estimated_carbs?: true
    estimated_fats?: true
    meal_score?: true
  }

  export type MealRegistrationSumAggregateInputType = {
    id?: true
    plan_id?: true
    estimated_calories?: true
    estimated_protein?: true
    estimated_carbs?: true
    estimated_fats?: true
    meal_score?: true
  }

  export type MealRegistrationMinAggregateInputType = {
    id?: true
    user_id?: true
    plan_id?: true
    meal_name?: true
    photo_url?: true
    estimated_calories?: true
    estimated_protein?: true
    estimated_carbs?: true
    estimated_fats?: true
    meal_score?: true
    ai_message?: true
    registered_at?: true
  }

  export type MealRegistrationMaxAggregateInputType = {
    id?: true
    user_id?: true
    plan_id?: true
    meal_name?: true
    photo_url?: true
    estimated_calories?: true
    estimated_protein?: true
    estimated_carbs?: true
    estimated_fats?: true
    meal_score?: true
    ai_message?: true
    registered_at?: true
  }

  export type MealRegistrationCountAggregateInputType = {
    id?: true
    user_id?: true
    plan_id?: true
    meal_name?: true
    photo_url?: true
    ai_analysis?: true
    detected_foods?: true
    estimated_calories?: true
    estimated_protein?: true
    estimated_carbs?: true
    estimated_fats?: true
    meal_score?: true
    adherence_tags?: true
    ai_message?: true
    registered_at?: true
    _all?: true
  }

  export type MealRegistrationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MealRegistration to aggregate.
     */
    where?: MealRegistrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MealRegistrations to fetch.
     */
    orderBy?: MealRegistrationOrderByWithRelationInput | MealRegistrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MealRegistrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MealRegistrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MealRegistrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MealRegistrations
    **/
    _count?: true | MealRegistrationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MealRegistrationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MealRegistrationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MealRegistrationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MealRegistrationMaxAggregateInputType
  }

  export type GetMealRegistrationAggregateType<T extends MealRegistrationAggregateArgs> = {
        [P in keyof T & keyof AggregateMealRegistration]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMealRegistration[P]>
      : GetScalarType<T[P], AggregateMealRegistration[P]>
  }




  export type MealRegistrationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MealRegistrationWhereInput
    orderBy?: MealRegistrationOrderByWithAggregationInput | MealRegistrationOrderByWithAggregationInput[]
    by: MealRegistrationScalarFieldEnum[] | MealRegistrationScalarFieldEnum
    having?: MealRegistrationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MealRegistrationCountAggregateInputType | true
    _avg?: MealRegistrationAvgAggregateInputType
    _sum?: MealRegistrationSumAggregateInputType
    _min?: MealRegistrationMinAggregateInputType
    _max?: MealRegistrationMaxAggregateInputType
  }

  export type MealRegistrationGroupByOutputType = {
    id: number
    user_id: string
    plan_id: number | null
    meal_name: string
    photo_url: string
    ai_analysis: JsonValue | null
    detected_foods: JsonValue | null
    estimated_calories: number | null
    estimated_protein: number | null
    estimated_carbs: number | null
    estimated_fats: number | null
    meal_score: number | null
    adherence_tags: JsonValue | null
    ai_message: string | null
    registered_at: Date
    _count: MealRegistrationCountAggregateOutputType | null
    _avg: MealRegistrationAvgAggregateOutputType | null
    _sum: MealRegistrationSumAggregateOutputType | null
    _min: MealRegistrationMinAggregateOutputType | null
    _max: MealRegistrationMaxAggregateOutputType | null
  }

  type GetMealRegistrationGroupByPayload<T extends MealRegistrationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MealRegistrationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MealRegistrationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MealRegistrationGroupByOutputType[P]>
            : GetScalarType<T[P], MealRegistrationGroupByOutputType[P]>
        }
      >
    >


  export type MealRegistrationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    plan_id?: boolean
    meal_name?: boolean
    photo_url?: boolean
    ai_analysis?: boolean
    detected_foods?: boolean
    estimated_calories?: boolean
    estimated_protein?: boolean
    estimated_carbs?: boolean
    estimated_fats?: boolean
    meal_score?: boolean
    adherence_tags?: boolean
    ai_message?: boolean
    registered_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    plan?: boolean | MealRegistration$planArgs<ExtArgs>
  }, ExtArgs["result"]["mealRegistration"]>

  export type MealRegistrationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    plan_id?: boolean
    meal_name?: boolean
    photo_url?: boolean
    ai_analysis?: boolean
    detected_foods?: boolean
    estimated_calories?: boolean
    estimated_protein?: boolean
    estimated_carbs?: boolean
    estimated_fats?: boolean
    meal_score?: boolean
    adherence_tags?: boolean
    ai_message?: boolean
    registered_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    plan?: boolean | MealRegistration$planArgs<ExtArgs>
  }, ExtArgs["result"]["mealRegistration"]>

  export type MealRegistrationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    plan_id?: boolean
    meal_name?: boolean
    photo_url?: boolean
    ai_analysis?: boolean
    detected_foods?: boolean
    estimated_calories?: boolean
    estimated_protein?: boolean
    estimated_carbs?: boolean
    estimated_fats?: boolean
    meal_score?: boolean
    adherence_tags?: boolean
    ai_message?: boolean
    registered_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    plan?: boolean | MealRegistration$planArgs<ExtArgs>
  }, ExtArgs["result"]["mealRegistration"]>

  export type MealRegistrationSelectScalar = {
    id?: boolean
    user_id?: boolean
    plan_id?: boolean
    meal_name?: boolean
    photo_url?: boolean
    ai_analysis?: boolean
    detected_foods?: boolean
    estimated_calories?: boolean
    estimated_protein?: boolean
    estimated_carbs?: boolean
    estimated_fats?: boolean
    meal_score?: boolean
    adherence_tags?: boolean
    ai_message?: boolean
    registered_at?: boolean
  }

  export type MealRegistrationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "plan_id" | "meal_name" | "photo_url" | "ai_analysis" | "detected_foods" | "estimated_calories" | "estimated_protein" | "estimated_carbs" | "estimated_fats" | "meal_score" | "adherence_tags" | "ai_message" | "registered_at", ExtArgs["result"]["mealRegistration"]>
  export type MealRegistrationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    plan?: boolean | MealRegistration$planArgs<ExtArgs>
  }
  export type MealRegistrationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    plan?: boolean | MealRegistration$planArgs<ExtArgs>
  }
  export type MealRegistrationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    plan?: boolean | MealRegistration$planArgs<ExtArgs>
  }

  export type $MealRegistrationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MealRegistration"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      plan: Prisma.$NutritionalPlanPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: string
      plan_id: number | null
      meal_name: string
      photo_url: string
      ai_analysis: Prisma.JsonValue | null
      detected_foods: Prisma.JsonValue | null
      estimated_calories: number | null
      estimated_protein: number | null
      estimated_carbs: number | null
      estimated_fats: number | null
      meal_score: number | null
      adherence_tags: Prisma.JsonValue | null
      ai_message: string | null
      registered_at: Date
    }, ExtArgs["result"]["mealRegistration"]>
    composites: {}
  }

  type MealRegistrationGetPayload<S extends boolean | null | undefined | MealRegistrationDefaultArgs> = $Result.GetResult<Prisma.$MealRegistrationPayload, S>

  type MealRegistrationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MealRegistrationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MealRegistrationCountAggregateInputType | true
    }

  export interface MealRegistrationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MealRegistration'], meta: { name: 'MealRegistration' } }
    /**
     * Find zero or one MealRegistration that matches the filter.
     * @param {MealRegistrationFindUniqueArgs} args - Arguments to find a MealRegistration
     * @example
     * // Get one MealRegistration
     * const mealRegistration = await prisma.mealRegistration.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MealRegistrationFindUniqueArgs>(args: SelectSubset<T, MealRegistrationFindUniqueArgs<ExtArgs>>): Prisma__MealRegistrationClient<$Result.GetResult<Prisma.$MealRegistrationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MealRegistration that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MealRegistrationFindUniqueOrThrowArgs} args - Arguments to find a MealRegistration
     * @example
     * // Get one MealRegistration
     * const mealRegistration = await prisma.mealRegistration.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MealRegistrationFindUniqueOrThrowArgs>(args: SelectSubset<T, MealRegistrationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MealRegistrationClient<$Result.GetResult<Prisma.$MealRegistrationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MealRegistration that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealRegistrationFindFirstArgs} args - Arguments to find a MealRegistration
     * @example
     * // Get one MealRegistration
     * const mealRegistration = await prisma.mealRegistration.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MealRegistrationFindFirstArgs>(args?: SelectSubset<T, MealRegistrationFindFirstArgs<ExtArgs>>): Prisma__MealRegistrationClient<$Result.GetResult<Prisma.$MealRegistrationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MealRegistration that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealRegistrationFindFirstOrThrowArgs} args - Arguments to find a MealRegistration
     * @example
     * // Get one MealRegistration
     * const mealRegistration = await prisma.mealRegistration.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MealRegistrationFindFirstOrThrowArgs>(args?: SelectSubset<T, MealRegistrationFindFirstOrThrowArgs<ExtArgs>>): Prisma__MealRegistrationClient<$Result.GetResult<Prisma.$MealRegistrationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MealRegistrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealRegistrationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MealRegistrations
     * const mealRegistrations = await prisma.mealRegistration.findMany()
     * 
     * // Get first 10 MealRegistrations
     * const mealRegistrations = await prisma.mealRegistration.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mealRegistrationWithIdOnly = await prisma.mealRegistration.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MealRegistrationFindManyArgs>(args?: SelectSubset<T, MealRegistrationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealRegistrationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MealRegistration.
     * @param {MealRegistrationCreateArgs} args - Arguments to create a MealRegistration.
     * @example
     * // Create one MealRegistration
     * const MealRegistration = await prisma.mealRegistration.create({
     *   data: {
     *     // ... data to create a MealRegistration
     *   }
     * })
     * 
     */
    create<T extends MealRegistrationCreateArgs>(args: SelectSubset<T, MealRegistrationCreateArgs<ExtArgs>>): Prisma__MealRegistrationClient<$Result.GetResult<Prisma.$MealRegistrationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MealRegistrations.
     * @param {MealRegistrationCreateManyArgs} args - Arguments to create many MealRegistrations.
     * @example
     * // Create many MealRegistrations
     * const mealRegistration = await prisma.mealRegistration.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MealRegistrationCreateManyArgs>(args?: SelectSubset<T, MealRegistrationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MealRegistrations and returns the data saved in the database.
     * @param {MealRegistrationCreateManyAndReturnArgs} args - Arguments to create many MealRegistrations.
     * @example
     * // Create many MealRegistrations
     * const mealRegistration = await prisma.mealRegistration.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MealRegistrations and only return the `id`
     * const mealRegistrationWithIdOnly = await prisma.mealRegistration.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MealRegistrationCreateManyAndReturnArgs>(args?: SelectSubset<T, MealRegistrationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealRegistrationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MealRegistration.
     * @param {MealRegistrationDeleteArgs} args - Arguments to delete one MealRegistration.
     * @example
     * // Delete one MealRegistration
     * const MealRegistration = await prisma.mealRegistration.delete({
     *   where: {
     *     // ... filter to delete one MealRegistration
     *   }
     * })
     * 
     */
    delete<T extends MealRegistrationDeleteArgs>(args: SelectSubset<T, MealRegistrationDeleteArgs<ExtArgs>>): Prisma__MealRegistrationClient<$Result.GetResult<Prisma.$MealRegistrationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MealRegistration.
     * @param {MealRegistrationUpdateArgs} args - Arguments to update one MealRegistration.
     * @example
     * // Update one MealRegistration
     * const mealRegistration = await prisma.mealRegistration.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MealRegistrationUpdateArgs>(args: SelectSubset<T, MealRegistrationUpdateArgs<ExtArgs>>): Prisma__MealRegistrationClient<$Result.GetResult<Prisma.$MealRegistrationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MealRegistrations.
     * @param {MealRegistrationDeleteManyArgs} args - Arguments to filter MealRegistrations to delete.
     * @example
     * // Delete a few MealRegistrations
     * const { count } = await prisma.mealRegistration.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MealRegistrationDeleteManyArgs>(args?: SelectSubset<T, MealRegistrationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MealRegistrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealRegistrationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MealRegistrations
     * const mealRegistration = await prisma.mealRegistration.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MealRegistrationUpdateManyArgs>(args: SelectSubset<T, MealRegistrationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MealRegistrations and returns the data updated in the database.
     * @param {MealRegistrationUpdateManyAndReturnArgs} args - Arguments to update many MealRegistrations.
     * @example
     * // Update many MealRegistrations
     * const mealRegistration = await prisma.mealRegistration.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MealRegistrations and only return the `id`
     * const mealRegistrationWithIdOnly = await prisma.mealRegistration.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MealRegistrationUpdateManyAndReturnArgs>(args: SelectSubset<T, MealRegistrationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealRegistrationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MealRegistration.
     * @param {MealRegistrationUpsertArgs} args - Arguments to update or create a MealRegistration.
     * @example
     * // Update or create a MealRegistration
     * const mealRegistration = await prisma.mealRegistration.upsert({
     *   create: {
     *     // ... data to create a MealRegistration
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MealRegistration we want to update
     *   }
     * })
     */
    upsert<T extends MealRegistrationUpsertArgs>(args: SelectSubset<T, MealRegistrationUpsertArgs<ExtArgs>>): Prisma__MealRegistrationClient<$Result.GetResult<Prisma.$MealRegistrationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MealRegistrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealRegistrationCountArgs} args - Arguments to filter MealRegistrations to count.
     * @example
     * // Count the number of MealRegistrations
     * const count = await prisma.mealRegistration.count({
     *   where: {
     *     // ... the filter for the MealRegistrations we want to count
     *   }
     * })
    **/
    count<T extends MealRegistrationCountArgs>(
      args?: Subset<T, MealRegistrationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MealRegistrationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MealRegistration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealRegistrationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MealRegistrationAggregateArgs>(args: Subset<T, MealRegistrationAggregateArgs>): Prisma.PrismaPromise<GetMealRegistrationAggregateType<T>>

    /**
     * Group by MealRegistration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealRegistrationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MealRegistrationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MealRegistrationGroupByArgs['orderBy'] }
        : { orderBy?: MealRegistrationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MealRegistrationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMealRegistrationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MealRegistration model
   */
  readonly fields: MealRegistrationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MealRegistration.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MealRegistrationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    plan<T extends MealRegistration$planArgs<ExtArgs> = {}>(args?: Subset<T, MealRegistration$planArgs<ExtArgs>>): Prisma__NutritionalPlanClient<$Result.GetResult<Prisma.$NutritionalPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MealRegistration model
   */
  interface MealRegistrationFieldRefs {
    readonly id: FieldRef<"MealRegistration", 'Int'>
    readonly user_id: FieldRef<"MealRegistration", 'String'>
    readonly plan_id: FieldRef<"MealRegistration", 'Int'>
    readonly meal_name: FieldRef<"MealRegistration", 'String'>
    readonly photo_url: FieldRef<"MealRegistration", 'String'>
    readonly ai_analysis: FieldRef<"MealRegistration", 'Json'>
    readonly detected_foods: FieldRef<"MealRegistration", 'Json'>
    readonly estimated_calories: FieldRef<"MealRegistration", 'Float'>
    readonly estimated_protein: FieldRef<"MealRegistration", 'Float'>
    readonly estimated_carbs: FieldRef<"MealRegistration", 'Float'>
    readonly estimated_fats: FieldRef<"MealRegistration", 'Float'>
    readonly meal_score: FieldRef<"MealRegistration", 'Int'>
    readonly adherence_tags: FieldRef<"MealRegistration", 'Json'>
    readonly ai_message: FieldRef<"MealRegistration", 'String'>
    readonly registered_at: FieldRef<"MealRegistration", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MealRegistration findUnique
   */
  export type MealRegistrationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealRegistration
     */
    select?: MealRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealRegistration
     */
    omit?: MealRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealRegistrationInclude<ExtArgs> | null
    /**
     * Filter, which MealRegistration to fetch.
     */
    where: MealRegistrationWhereUniqueInput
  }

  /**
   * MealRegistration findUniqueOrThrow
   */
  export type MealRegistrationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealRegistration
     */
    select?: MealRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealRegistration
     */
    omit?: MealRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealRegistrationInclude<ExtArgs> | null
    /**
     * Filter, which MealRegistration to fetch.
     */
    where: MealRegistrationWhereUniqueInput
  }

  /**
   * MealRegistration findFirst
   */
  export type MealRegistrationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealRegistration
     */
    select?: MealRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealRegistration
     */
    omit?: MealRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealRegistrationInclude<ExtArgs> | null
    /**
     * Filter, which MealRegistration to fetch.
     */
    where?: MealRegistrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MealRegistrations to fetch.
     */
    orderBy?: MealRegistrationOrderByWithRelationInput | MealRegistrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MealRegistrations.
     */
    cursor?: MealRegistrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MealRegistrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MealRegistrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MealRegistrations.
     */
    distinct?: MealRegistrationScalarFieldEnum | MealRegistrationScalarFieldEnum[]
  }

  /**
   * MealRegistration findFirstOrThrow
   */
  export type MealRegistrationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealRegistration
     */
    select?: MealRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealRegistration
     */
    omit?: MealRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealRegistrationInclude<ExtArgs> | null
    /**
     * Filter, which MealRegistration to fetch.
     */
    where?: MealRegistrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MealRegistrations to fetch.
     */
    orderBy?: MealRegistrationOrderByWithRelationInput | MealRegistrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MealRegistrations.
     */
    cursor?: MealRegistrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MealRegistrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MealRegistrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MealRegistrations.
     */
    distinct?: MealRegistrationScalarFieldEnum | MealRegistrationScalarFieldEnum[]
  }

  /**
   * MealRegistration findMany
   */
  export type MealRegistrationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealRegistration
     */
    select?: MealRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealRegistration
     */
    omit?: MealRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealRegistrationInclude<ExtArgs> | null
    /**
     * Filter, which MealRegistrations to fetch.
     */
    where?: MealRegistrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MealRegistrations to fetch.
     */
    orderBy?: MealRegistrationOrderByWithRelationInput | MealRegistrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MealRegistrations.
     */
    cursor?: MealRegistrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MealRegistrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MealRegistrations.
     */
    skip?: number
    distinct?: MealRegistrationScalarFieldEnum | MealRegistrationScalarFieldEnum[]
  }

  /**
   * MealRegistration create
   */
  export type MealRegistrationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealRegistration
     */
    select?: MealRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealRegistration
     */
    omit?: MealRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealRegistrationInclude<ExtArgs> | null
    /**
     * The data needed to create a MealRegistration.
     */
    data: XOR<MealRegistrationCreateInput, MealRegistrationUncheckedCreateInput>
  }

  /**
   * MealRegistration createMany
   */
  export type MealRegistrationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MealRegistrations.
     */
    data: MealRegistrationCreateManyInput | MealRegistrationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MealRegistration createManyAndReturn
   */
  export type MealRegistrationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealRegistration
     */
    select?: MealRegistrationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MealRegistration
     */
    omit?: MealRegistrationOmit<ExtArgs> | null
    /**
     * The data used to create many MealRegistrations.
     */
    data: MealRegistrationCreateManyInput | MealRegistrationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealRegistrationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MealRegistration update
   */
  export type MealRegistrationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealRegistration
     */
    select?: MealRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealRegistration
     */
    omit?: MealRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealRegistrationInclude<ExtArgs> | null
    /**
     * The data needed to update a MealRegistration.
     */
    data: XOR<MealRegistrationUpdateInput, MealRegistrationUncheckedUpdateInput>
    /**
     * Choose, which MealRegistration to update.
     */
    where: MealRegistrationWhereUniqueInput
  }

  /**
   * MealRegistration updateMany
   */
  export type MealRegistrationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MealRegistrations.
     */
    data: XOR<MealRegistrationUpdateManyMutationInput, MealRegistrationUncheckedUpdateManyInput>
    /**
     * Filter which MealRegistrations to update
     */
    where?: MealRegistrationWhereInput
    /**
     * Limit how many MealRegistrations to update.
     */
    limit?: number
  }

  /**
   * MealRegistration updateManyAndReturn
   */
  export type MealRegistrationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealRegistration
     */
    select?: MealRegistrationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MealRegistration
     */
    omit?: MealRegistrationOmit<ExtArgs> | null
    /**
     * The data used to update MealRegistrations.
     */
    data: XOR<MealRegistrationUpdateManyMutationInput, MealRegistrationUncheckedUpdateManyInput>
    /**
     * Filter which MealRegistrations to update
     */
    where?: MealRegistrationWhereInput
    /**
     * Limit how many MealRegistrations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealRegistrationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MealRegistration upsert
   */
  export type MealRegistrationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealRegistration
     */
    select?: MealRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealRegistration
     */
    omit?: MealRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealRegistrationInclude<ExtArgs> | null
    /**
     * The filter to search for the MealRegistration to update in case it exists.
     */
    where: MealRegistrationWhereUniqueInput
    /**
     * In case the MealRegistration found by the `where` argument doesn't exist, create a new MealRegistration with this data.
     */
    create: XOR<MealRegistrationCreateInput, MealRegistrationUncheckedCreateInput>
    /**
     * In case the MealRegistration was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MealRegistrationUpdateInput, MealRegistrationUncheckedUpdateInput>
  }

  /**
   * MealRegistration delete
   */
  export type MealRegistrationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealRegistration
     */
    select?: MealRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealRegistration
     */
    omit?: MealRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealRegistrationInclude<ExtArgs> | null
    /**
     * Filter which MealRegistration to delete.
     */
    where: MealRegistrationWhereUniqueInput
  }

  /**
   * MealRegistration deleteMany
   */
  export type MealRegistrationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MealRegistrations to delete
     */
    where?: MealRegistrationWhereInput
    /**
     * Limit how many MealRegistrations to delete.
     */
    limit?: number
  }

  /**
   * MealRegistration.plan
   */
  export type MealRegistration$planArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NutritionalPlan
     */
    select?: NutritionalPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NutritionalPlan
     */
    omit?: NutritionalPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NutritionalPlanInclude<ExtArgs> | null
    where?: NutritionalPlanWhereInput
  }

  /**
   * MealRegistration without action
   */
  export type MealRegistrationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealRegistration
     */
    select?: MealRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealRegistration
     */
    omit?: MealRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealRegistrationInclude<ExtArgs> | null
  }


  /**
   * Model DailyScore
   */

  export type AggregateDailyScore = {
    _count: DailyScoreCountAggregateOutputType | null
    _avg: DailyScoreAvgAggregateOutputType | null
    _sum: DailyScoreSumAggregateOutputType | null
    _min: DailyScoreMinAggregateOutputType | null
    _max: DailyScoreMaxAggregateOutputType | null
  }

  export type DailyScoreAvgAggregateOutputType = {
    id: number | null
    plan_id: number | null
    total_calories: number | null
    target_calories: number | null
    average_meal_score: number | null
    daily_score: number | null
    streak_days: number | null
  }

  export type DailyScoreSumAggregateOutputType = {
    id: number | null
    plan_id: number | null
    total_calories: number | null
    target_calories: number | null
    average_meal_score: number | null
    daily_score: number | null
    streak_days: number | null
  }

  export type DailyScoreMinAggregateOutputType = {
    id: number | null
    user_id: string | null
    plan_id: number | null
    date: Date | null
    total_calories: number | null
    target_calories: number | null
    average_meal_score: number | null
    daily_score: number | null
    streak_days: number | null
    status: string | null
    created_at: Date | null
  }

  export type DailyScoreMaxAggregateOutputType = {
    id: number | null
    user_id: string | null
    plan_id: number | null
    date: Date | null
    total_calories: number | null
    target_calories: number | null
    average_meal_score: number | null
    daily_score: number | null
    streak_days: number | null
    status: string | null
    created_at: Date | null
  }

  export type DailyScoreCountAggregateOutputType = {
    id: number
    user_id: number
    plan_id: number
    date: number
    total_calories: number
    target_calories: number
    average_meal_score: number
    daily_score: number
    streak_days: number
    status: number
    created_at: number
    _all: number
  }


  export type DailyScoreAvgAggregateInputType = {
    id?: true
    plan_id?: true
    total_calories?: true
    target_calories?: true
    average_meal_score?: true
    daily_score?: true
    streak_days?: true
  }

  export type DailyScoreSumAggregateInputType = {
    id?: true
    plan_id?: true
    total_calories?: true
    target_calories?: true
    average_meal_score?: true
    daily_score?: true
    streak_days?: true
  }

  export type DailyScoreMinAggregateInputType = {
    id?: true
    user_id?: true
    plan_id?: true
    date?: true
    total_calories?: true
    target_calories?: true
    average_meal_score?: true
    daily_score?: true
    streak_days?: true
    status?: true
    created_at?: true
  }

  export type DailyScoreMaxAggregateInputType = {
    id?: true
    user_id?: true
    plan_id?: true
    date?: true
    total_calories?: true
    target_calories?: true
    average_meal_score?: true
    daily_score?: true
    streak_days?: true
    status?: true
    created_at?: true
  }

  export type DailyScoreCountAggregateInputType = {
    id?: true
    user_id?: true
    plan_id?: true
    date?: true
    total_calories?: true
    target_calories?: true
    average_meal_score?: true
    daily_score?: true
    streak_days?: true
    status?: true
    created_at?: true
    _all?: true
  }

  export type DailyScoreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyScore to aggregate.
     */
    where?: DailyScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyScores to fetch.
     */
    orderBy?: DailyScoreOrderByWithRelationInput | DailyScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DailyScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DailyScores
    **/
    _count?: true | DailyScoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DailyScoreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DailyScoreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DailyScoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DailyScoreMaxAggregateInputType
  }

  export type GetDailyScoreAggregateType<T extends DailyScoreAggregateArgs> = {
        [P in keyof T & keyof AggregateDailyScore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDailyScore[P]>
      : GetScalarType<T[P], AggregateDailyScore[P]>
  }




  export type DailyScoreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyScoreWhereInput
    orderBy?: DailyScoreOrderByWithAggregationInput | DailyScoreOrderByWithAggregationInput[]
    by: DailyScoreScalarFieldEnum[] | DailyScoreScalarFieldEnum
    having?: DailyScoreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DailyScoreCountAggregateInputType | true
    _avg?: DailyScoreAvgAggregateInputType
    _sum?: DailyScoreSumAggregateInputType
    _min?: DailyScoreMinAggregateInputType
    _max?: DailyScoreMaxAggregateInputType
  }

  export type DailyScoreGroupByOutputType = {
    id: number
    user_id: string
    plan_id: number | null
    date: Date
    total_calories: number | null
    target_calories: number | null
    average_meal_score: number | null
    daily_score: number | null
    streak_days: number | null
    status: string | null
    created_at: Date
    _count: DailyScoreCountAggregateOutputType | null
    _avg: DailyScoreAvgAggregateOutputType | null
    _sum: DailyScoreSumAggregateOutputType | null
    _min: DailyScoreMinAggregateOutputType | null
    _max: DailyScoreMaxAggregateOutputType | null
  }

  type GetDailyScoreGroupByPayload<T extends DailyScoreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DailyScoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DailyScoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DailyScoreGroupByOutputType[P]>
            : GetScalarType<T[P], DailyScoreGroupByOutputType[P]>
        }
      >
    >


  export type DailyScoreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    plan_id?: boolean
    date?: boolean
    total_calories?: boolean
    target_calories?: boolean
    average_meal_score?: boolean
    daily_score?: boolean
    streak_days?: boolean
    status?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    plan?: boolean | DailyScore$planArgs<ExtArgs>
  }, ExtArgs["result"]["dailyScore"]>

  export type DailyScoreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    plan_id?: boolean
    date?: boolean
    total_calories?: boolean
    target_calories?: boolean
    average_meal_score?: boolean
    daily_score?: boolean
    streak_days?: boolean
    status?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    plan?: boolean | DailyScore$planArgs<ExtArgs>
  }, ExtArgs["result"]["dailyScore"]>

  export type DailyScoreSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    plan_id?: boolean
    date?: boolean
    total_calories?: boolean
    target_calories?: boolean
    average_meal_score?: boolean
    daily_score?: boolean
    streak_days?: boolean
    status?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    plan?: boolean | DailyScore$planArgs<ExtArgs>
  }, ExtArgs["result"]["dailyScore"]>

  export type DailyScoreSelectScalar = {
    id?: boolean
    user_id?: boolean
    plan_id?: boolean
    date?: boolean
    total_calories?: boolean
    target_calories?: boolean
    average_meal_score?: boolean
    daily_score?: boolean
    streak_days?: boolean
    status?: boolean
    created_at?: boolean
  }

  export type DailyScoreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "plan_id" | "date" | "total_calories" | "target_calories" | "average_meal_score" | "daily_score" | "streak_days" | "status" | "created_at", ExtArgs["result"]["dailyScore"]>
  export type DailyScoreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    plan?: boolean | DailyScore$planArgs<ExtArgs>
  }
  export type DailyScoreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    plan?: boolean | DailyScore$planArgs<ExtArgs>
  }
  export type DailyScoreIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    plan?: boolean | DailyScore$planArgs<ExtArgs>
  }

  export type $DailyScorePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DailyScore"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      plan: Prisma.$NutritionalPlanPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: string
      plan_id: number | null
      date: Date
      total_calories: number | null
      target_calories: number | null
      average_meal_score: number | null
      daily_score: number | null
      streak_days: number | null
      status: string | null
      created_at: Date
    }, ExtArgs["result"]["dailyScore"]>
    composites: {}
  }

  type DailyScoreGetPayload<S extends boolean | null | undefined | DailyScoreDefaultArgs> = $Result.GetResult<Prisma.$DailyScorePayload, S>

  type DailyScoreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DailyScoreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DailyScoreCountAggregateInputType | true
    }

  export interface DailyScoreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DailyScore'], meta: { name: 'DailyScore' } }
    /**
     * Find zero or one DailyScore that matches the filter.
     * @param {DailyScoreFindUniqueArgs} args - Arguments to find a DailyScore
     * @example
     * // Get one DailyScore
     * const dailyScore = await prisma.dailyScore.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DailyScoreFindUniqueArgs>(args: SelectSubset<T, DailyScoreFindUniqueArgs<ExtArgs>>): Prisma__DailyScoreClient<$Result.GetResult<Prisma.$DailyScorePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DailyScore that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DailyScoreFindUniqueOrThrowArgs} args - Arguments to find a DailyScore
     * @example
     * // Get one DailyScore
     * const dailyScore = await prisma.dailyScore.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DailyScoreFindUniqueOrThrowArgs>(args: SelectSubset<T, DailyScoreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DailyScoreClient<$Result.GetResult<Prisma.$DailyScorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyScore that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyScoreFindFirstArgs} args - Arguments to find a DailyScore
     * @example
     * // Get one DailyScore
     * const dailyScore = await prisma.dailyScore.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DailyScoreFindFirstArgs>(args?: SelectSubset<T, DailyScoreFindFirstArgs<ExtArgs>>): Prisma__DailyScoreClient<$Result.GetResult<Prisma.$DailyScorePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyScore that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyScoreFindFirstOrThrowArgs} args - Arguments to find a DailyScore
     * @example
     * // Get one DailyScore
     * const dailyScore = await prisma.dailyScore.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DailyScoreFindFirstOrThrowArgs>(args?: SelectSubset<T, DailyScoreFindFirstOrThrowArgs<ExtArgs>>): Prisma__DailyScoreClient<$Result.GetResult<Prisma.$DailyScorePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DailyScores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyScoreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DailyScores
     * const dailyScores = await prisma.dailyScore.findMany()
     * 
     * // Get first 10 DailyScores
     * const dailyScores = await prisma.dailyScore.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dailyScoreWithIdOnly = await prisma.dailyScore.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DailyScoreFindManyArgs>(args?: SelectSubset<T, DailyScoreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyScorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DailyScore.
     * @param {DailyScoreCreateArgs} args - Arguments to create a DailyScore.
     * @example
     * // Create one DailyScore
     * const DailyScore = await prisma.dailyScore.create({
     *   data: {
     *     // ... data to create a DailyScore
     *   }
     * })
     * 
     */
    create<T extends DailyScoreCreateArgs>(args: SelectSubset<T, DailyScoreCreateArgs<ExtArgs>>): Prisma__DailyScoreClient<$Result.GetResult<Prisma.$DailyScorePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DailyScores.
     * @param {DailyScoreCreateManyArgs} args - Arguments to create many DailyScores.
     * @example
     * // Create many DailyScores
     * const dailyScore = await prisma.dailyScore.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DailyScoreCreateManyArgs>(args?: SelectSubset<T, DailyScoreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DailyScores and returns the data saved in the database.
     * @param {DailyScoreCreateManyAndReturnArgs} args - Arguments to create many DailyScores.
     * @example
     * // Create many DailyScores
     * const dailyScore = await prisma.dailyScore.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DailyScores and only return the `id`
     * const dailyScoreWithIdOnly = await prisma.dailyScore.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DailyScoreCreateManyAndReturnArgs>(args?: SelectSubset<T, DailyScoreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyScorePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DailyScore.
     * @param {DailyScoreDeleteArgs} args - Arguments to delete one DailyScore.
     * @example
     * // Delete one DailyScore
     * const DailyScore = await prisma.dailyScore.delete({
     *   where: {
     *     // ... filter to delete one DailyScore
     *   }
     * })
     * 
     */
    delete<T extends DailyScoreDeleteArgs>(args: SelectSubset<T, DailyScoreDeleteArgs<ExtArgs>>): Prisma__DailyScoreClient<$Result.GetResult<Prisma.$DailyScorePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DailyScore.
     * @param {DailyScoreUpdateArgs} args - Arguments to update one DailyScore.
     * @example
     * // Update one DailyScore
     * const dailyScore = await prisma.dailyScore.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DailyScoreUpdateArgs>(args: SelectSubset<T, DailyScoreUpdateArgs<ExtArgs>>): Prisma__DailyScoreClient<$Result.GetResult<Prisma.$DailyScorePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DailyScores.
     * @param {DailyScoreDeleteManyArgs} args - Arguments to filter DailyScores to delete.
     * @example
     * // Delete a few DailyScores
     * const { count } = await prisma.dailyScore.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DailyScoreDeleteManyArgs>(args?: SelectSubset<T, DailyScoreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyScores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyScoreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DailyScores
     * const dailyScore = await prisma.dailyScore.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DailyScoreUpdateManyArgs>(args: SelectSubset<T, DailyScoreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyScores and returns the data updated in the database.
     * @param {DailyScoreUpdateManyAndReturnArgs} args - Arguments to update many DailyScores.
     * @example
     * // Update many DailyScores
     * const dailyScore = await prisma.dailyScore.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DailyScores and only return the `id`
     * const dailyScoreWithIdOnly = await prisma.dailyScore.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DailyScoreUpdateManyAndReturnArgs>(args: SelectSubset<T, DailyScoreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyScorePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DailyScore.
     * @param {DailyScoreUpsertArgs} args - Arguments to update or create a DailyScore.
     * @example
     * // Update or create a DailyScore
     * const dailyScore = await prisma.dailyScore.upsert({
     *   create: {
     *     // ... data to create a DailyScore
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DailyScore we want to update
     *   }
     * })
     */
    upsert<T extends DailyScoreUpsertArgs>(args: SelectSubset<T, DailyScoreUpsertArgs<ExtArgs>>): Prisma__DailyScoreClient<$Result.GetResult<Prisma.$DailyScorePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DailyScores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyScoreCountArgs} args - Arguments to filter DailyScores to count.
     * @example
     * // Count the number of DailyScores
     * const count = await prisma.dailyScore.count({
     *   where: {
     *     // ... the filter for the DailyScores we want to count
     *   }
     * })
    **/
    count<T extends DailyScoreCountArgs>(
      args?: Subset<T, DailyScoreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DailyScoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DailyScore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyScoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DailyScoreAggregateArgs>(args: Subset<T, DailyScoreAggregateArgs>): Prisma.PrismaPromise<GetDailyScoreAggregateType<T>>

    /**
     * Group by DailyScore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyScoreGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DailyScoreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DailyScoreGroupByArgs['orderBy'] }
        : { orderBy?: DailyScoreGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DailyScoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDailyScoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DailyScore model
   */
  readonly fields: DailyScoreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DailyScore.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DailyScoreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    plan<T extends DailyScore$planArgs<ExtArgs> = {}>(args?: Subset<T, DailyScore$planArgs<ExtArgs>>): Prisma__NutritionalPlanClient<$Result.GetResult<Prisma.$NutritionalPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DailyScore model
   */
  interface DailyScoreFieldRefs {
    readonly id: FieldRef<"DailyScore", 'Int'>
    readonly user_id: FieldRef<"DailyScore", 'String'>
    readonly plan_id: FieldRef<"DailyScore", 'Int'>
    readonly date: FieldRef<"DailyScore", 'DateTime'>
    readonly total_calories: FieldRef<"DailyScore", 'Float'>
    readonly target_calories: FieldRef<"DailyScore", 'Int'>
    readonly average_meal_score: FieldRef<"DailyScore", 'Int'>
    readonly daily_score: FieldRef<"DailyScore", 'Int'>
    readonly streak_days: FieldRef<"DailyScore", 'Int'>
    readonly status: FieldRef<"DailyScore", 'String'>
    readonly created_at: FieldRef<"DailyScore", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DailyScore findUnique
   */
  export type DailyScoreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyScore
     */
    select?: DailyScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyScore
     */
    omit?: DailyScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyScoreInclude<ExtArgs> | null
    /**
     * Filter, which DailyScore to fetch.
     */
    where: DailyScoreWhereUniqueInput
  }

  /**
   * DailyScore findUniqueOrThrow
   */
  export type DailyScoreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyScore
     */
    select?: DailyScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyScore
     */
    omit?: DailyScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyScoreInclude<ExtArgs> | null
    /**
     * Filter, which DailyScore to fetch.
     */
    where: DailyScoreWhereUniqueInput
  }

  /**
   * DailyScore findFirst
   */
  export type DailyScoreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyScore
     */
    select?: DailyScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyScore
     */
    omit?: DailyScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyScoreInclude<ExtArgs> | null
    /**
     * Filter, which DailyScore to fetch.
     */
    where?: DailyScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyScores to fetch.
     */
    orderBy?: DailyScoreOrderByWithRelationInput | DailyScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyScores.
     */
    cursor?: DailyScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyScores.
     */
    distinct?: DailyScoreScalarFieldEnum | DailyScoreScalarFieldEnum[]
  }

  /**
   * DailyScore findFirstOrThrow
   */
  export type DailyScoreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyScore
     */
    select?: DailyScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyScore
     */
    omit?: DailyScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyScoreInclude<ExtArgs> | null
    /**
     * Filter, which DailyScore to fetch.
     */
    where?: DailyScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyScores to fetch.
     */
    orderBy?: DailyScoreOrderByWithRelationInput | DailyScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyScores.
     */
    cursor?: DailyScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyScores.
     */
    distinct?: DailyScoreScalarFieldEnum | DailyScoreScalarFieldEnum[]
  }

  /**
   * DailyScore findMany
   */
  export type DailyScoreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyScore
     */
    select?: DailyScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyScore
     */
    omit?: DailyScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyScoreInclude<ExtArgs> | null
    /**
     * Filter, which DailyScores to fetch.
     */
    where?: DailyScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyScores to fetch.
     */
    orderBy?: DailyScoreOrderByWithRelationInput | DailyScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DailyScores.
     */
    cursor?: DailyScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyScores.
     */
    skip?: number
    distinct?: DailyScoreScalarFieldEnum | DailyScoreScalarFieldEnum[]
  }

  /**
   * DailyScore create
   */
  export type DailyScoreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyScore
     */
    select?: DailyScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyScore
     */
    omit?: DailyScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyScoreInclude<ExtArgs> | null
    /**
     * The data needed to create a DailyScore.
     */
    data: XOR<DailyScoreCreateInput, DailyScoreUncheckedCreateInput>
  }

  /**
   * DailyScore createMany
   */
  export type DailyScoreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DailyScores.
     */
    data: DailyScoreCreateManyInput | DailyScoreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DailyScore createManyAndReturn
   */
  export type DailyScoreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyScore
     */
    select?: DailyScoreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DailyScore
     */
    omit?: DailyScoreOmit<ExtArgs> | null
    /**
     * The data used to create many DailyScores.
     */
    data: DailyScoreCreateManyInput | DailyScoreCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyScoreIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DailyScore update
   */
  export type DailyScoreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyScore
     */
    select?: DailyScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyScore
     */
    omit?: DailyScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyScoreInclude<ExtArgs> | null
    /**
     * The data needed to update a DailyScore.
     */
    data: XOR<DailyScoreUpdateInput, DailyScoreUncheckedUpdateInput>
    /**
     * Choose, which DailyScore to update.
     */
    where: DailyScoreWhereUniqueInput
  }

  /**
   * DailyScore updateMany
   */
  export type DailyScoreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DailyScores.
     */
    data: XOR<DailyScoreUpdateManyMutationInput, DailyScoreUncheckedUpdateManyInput>
    /**
     * Filter which DailyScores to update
     */
    where?: DailyScoreWhereInput
    /**
     * Limit how many DailyScores to update.
     */
    limit?: number
  }

  /**
   * DailyScore updateManyAndReturn
   */
  export type DailyScoreUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyScore
     */
    select?: DailyScoreSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DailyScore
     */
    omit?: DailyScoreOmit<ExtArgs> | null
    /**
     * The data used to update DailyScores.
     */
    data: XOR<DailyScoreUpdateManyMutationInput, DailyScoreUncheckedUpdateManyInput>
    /**
     * Filter which DailyScores to update
     */
    where?: DailyScoreWhereInput
    /**
     * Limit how many DailyScores to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyScoreIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DailyScore upsert
   */
  export type DailyScoreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyScore
     */
    select?: DailyScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyScore
     */
    omit?: DailyScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyScoreInclude<ExtArgs> | null
    /**
     * The filter to search for the DailyScore to update in case it exists.
     */
    where: DailyScoreWhereUniqueInput
    /**
     * In case the DailyScore found by the `where` argument doesn't exist, create a new DailyScore with this data.
     */
    create: XOR<DailyScoreCreateInput, DailyScoreUncheckedCreateInput>
    /**
     * In case the DailyScore was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DailyScoreUpdateInput, DailyScoreUncheckedUpdateInput>
  }

  /**
   * DailyScore delete
   */
  export type DailyScoreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyScore
     */
    select?: DailyScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyScore
     */
    omit?: DailyScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyScoreInclude<ExtArgs> | null
    /**
     * Filter which DailyScore to delete.
     */
    where: DailyScoreWhereUniqueInput
  }

  /**
   * DailyScore deleteMany
   */
  export type DailyScoreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyScores to delete
     */
    where?: DailyScoreWhereInput
    /**
     * Limit how many DailyScores to delete.
     */
    limit?: number
  }

  /**
   * DailyScore.plan
   */
  export type DailyScore$planArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NutritionalPlan
     */
    select?: NutritionalPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NutritionalPlan
     */
    omit?: NutritionalPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NutritionalPlanInclude<ExtArgs> | null
    where?: NutritionalPlanWhereInput
  }

  /**
   * DailyScore without action
   */
  export type DailyScoreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyScore
     */
    select?: DailyScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyScore
     */
    omit?: DailyScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyScoreInclude<ExtArgs> | null
  }


  /**
   * Model UserGamification
   */

  export type AggregateUserGamification = {
    _count: UserGamificationCountAggregateOutputType | null
    _avg: UserGamificationAvgAggregateOutputType | null
    _sum: UserGamificationSumAggregateOutputType | null
    _min: UserGamificationMinAggregateOutputType | null
    _max: UserGamificationMaxAggregateOutputType | null
  }

  export type UserGamificationAvgAggregateOutputType = {
    id: number | null
    total_xp: number | null
    current_level: number | null
    total_meals_registered: number | null
    current_streak: number | null
    longest_streak: number | null
  }

  export type UserGamificationSumAggregateOutputType = {
    id: number | null
    total_xp: number | null
    current_level: number | null
    total_meals_registered: number | null
    current_streak: number | null
    longest_streak: number | null
  }

  export type UserGamificationMinAggregateOutputType = {
    id: number | null
    user_id: string | null
    total_xp: number | null
    current_level: number | null
    total_meals_registered: number | null
    current_streak: number | null
    longest_streak: number | null
    updated_at: Date | null
  }

  export type UserGamificationMaxAggregateOutputType = {
    id: number | null
    user_id: string | null
    total_xp: number | null
    current_level: number | null
    total_meals_registered: number | null
    current_streak: number | null
    longest_streak: number | null
    updated_at: Date | null
  }

  export type UserGamificationCountAggregateOutputType = {
    id: number
    user_id: number
    total_xp: number
    current_level: number
    total_meals_registered: number
    current_streak: number
    longest_streak: number
    badges: number
    updated_at: number
    _all: number
  }


  export type UserGamificationAvgAggregateInputType = {
    id?: true
    total_xp?: true
    current_level?: true
    total_meals_registered?: true
    current_streak?: true
    longest_streak?: true
  }

  export type UserGamificationSumAggregateInputType = {
    id?: true
    total_xp?: true
    current_level?: true
    total_meals_registered?: true
    current_streak?: true
    longest_streak?: true
  }

  export type UserGamificationMinAggregateInputType = {
    id?: true
    user_id?: true
    total_xp?: true
    current_level?: true
    total_meals_registered?: true
    current_streak?: true
    longest_streak?: true
    updated_at?: true
  }

  export type UserGamificationMaxAggregateInputType = {
    id?: true
    user_id?: true
    total_xp?: true
    current_level?: true
    total_meals_registered?: true
    current_streak?: true
    longest_streak?: true
    updated_at?: true
  }

  export type UserGamificationCountAggregateInputType = {
    id?: true
    user_id?: true
    total_xp?: true
    current_level?: true
    total_meals_registered?: true
    current_streak?: true
    longest_streak?: true
    badges?: true
    updated_at?: true
    _all?: true
  }

  export type UserGamificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserGamification to aggregate.
     */
    where?: UserGamificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserGamifications to fetch.
     */
    orderBy?: UserGamificationOrderByWithRelationInput | UserGamificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserGamificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserGamifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserGamifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserGamifications
    **/
    _count?: true | UserGamificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserGamificationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserGamificationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserGamificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserGamificationMaxAggregateInputType
  }

  export type GetUserGamificationAggregateType<T extends UserGamificationAggregateArgs> = {
        [P in keyof T & keyof AggregateUserGamification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserGamification[P]>
      : GetScalarType<T[P], AggregateUserGamification[P]>
  }




  export type UserGamificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserGamificationWhereInput
    orderBy?: UserGamificationOrderByWithAggregationInput | UserGamificationOrderByWithAggregationInput[]
    by: UserGamificationScalarFieldEnum[] | UserGamificationScalarFieldEnum
    having?: UserGamificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserGamificationCountAggregateInputType | true
    _avg?: UserGamificationAvgAggregateInputType
    _sum?: UserGamificationSumAggregateInputType
    _min?: UserGamificationMinAggregateInputType
    _max?: UserGamificationMaxAggregateInputType
  }

  export type UserGamificationGroupByOutputType = {
    id: number
    user_id: string
    total_xp: number
    current_level: number
    total_meals_registered: number
    current_streak: number
    longest_streak: number
    badges: JsonValue | null
    updated_at: Date
    _count: UserGamificationCountAggregateOutputType | null
    _avg: UserGamificationAvgAggregateOutputType | null
    _sum: UserGamificationSumAggregateOutputType | null
    _min: UserGamificationMinAggregateOutputType | null
    _max: UserGamificationMaxAggregateOutputType | null
  }

  type GetUserGamificationGroupByPayload<T extends UserGamificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGamificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGamificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGamificationGroupByOutputType[P]>
            : GetScalarType<T[P], UserGamificationGroupByOutputType[P]>
        }
      >
    >


  export type UserGamificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    total_xp?: boolean
    current_level?: boolean
    total_meals_registered?: boolean
    current_streak?: boolean
    longest_streak?: boolean
    badges?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userGamification"]>

  export type UserGamificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    total_xp?: boolean
    current_level?: boolean
    total_meals_registered?: boolean
    current_streak?: boolean
    longest_streak?: boolean
    badges?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userGamification"]>

  export type UserGamificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    total_xp?: boolean
    current_level?: boolean
    total_meals_registered?: boolean
    current_streak?: boolean
    longest_streak?: boolean
    badges?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userGamification"]>

  export type UserGamificationSelectScalar = {
    id?: boolean
    user_id?: boolean
    total_xp?: boolean
    current_level?: boolean
    total_meals_registered?: boolean
    current_streak?: boolean
    longest_streak?: boolean
    badges?: boolean
    updated_at?: boolean
  }

  export type UserGamificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "total_xp" | "current_level" | "total_meals_registered" | "current_streak" | "longest_streak" | "badges" | "updated_at", ExtArgs["result"]["userGamification"]>
  export type UserGamificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserGamificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserGamificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserGamificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserGamification"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: string
      total_xp: number
      current_level: number
      total_meals_registered: number
      current_streak: number
      longest_streak: number
      badges: Prisma.JsonValue | null
      updated_at: Date
    }, ExtArgs["result"]["userGamification"]>
    composites: {}
  }

  type UserGamificationGetPayload<S extends boolean | null | undefined | UserGamificationDefaultArgs> = $Result.GetResult<Prisma.$UserGamificationPayload, S>

  type UserGamificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserGamificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserGamificationCountAggregateInputType | true
    }

  export interface UserGamificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserGamification'], meta: { name: 'UserGamification' } }
    /**
     * Find zero or one UserGamification that matches the filter.
     * @param {UserGamificationFindUniqueArgs} args - Arguments to find a UserGamification
     * @example
     * // Get one UserGamification
     * const userGamification = await prisma.userGamification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserGamificationFindUniqueArgs>(args: SelectSubset<T, UserGamificationFindUniqueArgs<ExtArgs>>): Prisma__UserGamificationClient<$Result.GetResult<Prisma.$UserGamificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserGamification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserGamificationFindUniqueOrThrowArgs} args - Arguments to find a UserGamification
     * @example
     * // Get one UserGamification
     * const userGamification = await prisma.userGamification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserGamificationFindUniqueOrThrowArgs>(args: SelectSubset<T, UserGamificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserGamificationClient<$Result.GetResult<Prisma.$UserGamificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserGamification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGamificationFindFirstArgs} args - Arguments to find a UserGamification
     * @example
     * // Get one UserGamification
     * const userGamification = await prisma.userGamification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserGamificationFindFirstArgs>(args?: SelectSubset<T, UserGamificationFindFirstArgs<ExtArgs>>): Prisma__UserGamificationClient<$Result.GetResult<Prisma.$UserGamificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserGamification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGamificationFindFirstOrThrowArgs} args - Arguments to find a UserGamification
     * @example
     * // Get one UserGamification
     * const userGamification = await prisma.userGamification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserGamificationFindFirstOrThrowArgs>(args?: SelectSubset<T, UserGamificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserGamificationClient<$Result.GetResult<Prisma.$UserGamificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserGamifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGamificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserGamifications
     * const userGamifications = await prisma.userGamification.findMany()
     * 
     * // Get first 10 UserGamifications
     * const userGamifications = await prisma.userGamification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userGamificationWithIdOnly = await prisma.userGamification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserGamificationFindManyArgs>(args?: SelectSubset<T, UserGamificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserGamificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserGamification.
     * @param {UserGamificationCreateArgs} args - Arguments to create a UserGamification.
     * @example
     * // Create one UserGamification
     * const UserGamification = await prisma.userGamification.create({
     *   data: {
     *     // ... data to create a UserGamification
     *   }
     * })
     * 
     */
    create<T extends UserGamificationCreateArgs>(args: SelectSubset<T, UserGamificationCreateArgs<ExtArgs>>): Prisma__UserGamificationClient<$Result.GetResult<Prisma.$UserGamificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserGamifications.
     * @param {UserGamificationCreateManyArgs} args - Arguments to create many UserGamifications.
     * @example
     * // Create many UserGamifications
     * const userGamification = await prisma.userGamification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserGamificationCreateManyArgs>(args?: SelectSubset<T, UserGamificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserGamifications and returns the data saved in the database.
     * @param {UserGamificationCreateManyAndReturnArgs} args - Arguments to create many UserGamifications.
     * @example
     * // Create many UserGamifications
     * const userGamification = await prisma.userGamification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserGamifications and only return the `id`
     * const userGamificationWithIdOnly = await prisma.userGamification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserGamificationCreateManyAndReturnArgs>(args?: SelectSubset<T, UserGamificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserGamificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserGamification.
     * @param {UserGamificationDeleteArgs} args - Arguments to delete one UserGamification.
     * @example
     * // Delete one UserGamification
     * const UserGamification = await prisma.userGamification.delete({
     *   where: {
     *     // ... filter to delete one UserGamification
     *   }
     * })
     * 
     */
    delete<T extends UserGamificationDeleteArgs>(args: SelectSubset<T, UserGamificationDeleteArgs<ExtArgs>>): Prisma__UserGamificationClient<$Result.GetResult<Prisma.$UserGamificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserGamification.
     * @param {UserGamificationUpdateArgs} args - Arguments to update one UserGamification.
     * @example
     * // Update one UserGamification
     * const userGamification = await prisma.userGamification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserGamificationUpdateArgs>(args: SelectSubset<T, UserGamificationUpdateArgs<ExtArgs>>): Prisma__UserGamificationClient<$Result.GetResult<Prisma.$UserGamificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserGamifications.
     * @param {UserGamificationDeleteManyArgs} args - Arguments to filter UserGamifications to delete.
     * @example
     * // Delete a few UserGamifications
     * const { count } = await prisma.userGamification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserGamificationDeleteManyArgs>(args?: SelectSubset<T, UserGamificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserGamifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGamificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserGamifications
     * const userGamification = await prisma.userGamification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserGamificationUpdateManyArgs>(args: SelectSubset<T, UserGamificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserGamifications and returns the data updated in the database.
     * @param {UserGamificationUpdateManyAndReturnArgs} args - Arguments to update many UserGamifications.
     * @example
     * // Update many UserGamifications
     * const userGamification = await prisma.userGamification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserGamifications and only return the `id`
     * const userGamificationWithIdOnly = await prisma.userGamification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserGamificationUpdateManyAndReturnArgs>(args: SelectSubset<T, UserGamificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserGamificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserGamification.
     * @param {UserGamificationUpsertArgs} args - Arguments to update or create a UserGamification.
     * @example
     * // Update or create a UserGamification
     * const userGamification = await prisma.userGamification.upsert({
     *   create: {
     *     // ... data to create a UserGamification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserGamification we want to update
     *   }
     * })
     */
    upsert<T extends UserGamificationUpsertArgs>(args: SelectSubset<T, UserGamificationUpsertArgs<ExtArgs>>): Prisma__UserGamificationClient<$Result.GetResult<Prisma.$UserGamificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserGamifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGamificationCountArgs} args - Arguments to filter UserGamifications to count.
     * @example
     * // Count the number of UserGamifications
     * const count = await prisma.userGamification.count({
     *   where: {
     *     // ... the filter for the UserGamifications we want to count
     *   }
     * })
    **/
    count<T extends UserGamificationCountArgs>(
      args?: Subset<T, UserGamificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserGamificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserGamification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGamificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserGamificationAggregateArgs>(args: Subset<T, UserGamificationAggregateArgs>): Prisma.PrismaPromise<GetUserGamificationAggregateType<T>>

    /**
     * Group by UserGamification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGamificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGamificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGamificationGroupByArgs['orderBy'] }
        : { orderBy?: UserGamificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGamificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGamificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserGamification model
   */
  readonly fields: UserGamificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserGamification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserGamificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserGamification model
   */
  interface UserGamificationFieldRefs {
    readonly id: FieldRef<"UserGamification", 'Int'>
    readonly user_id: FieldRef<"UserGamification", 'String'>
    readonly total_xp: FieldRef<"UserGamification", 'Int'>
    readonly current_level: FieldRef<"UserGamification", 'Int'>
    readonly total_meals_registered: FieldRef<"UserGamification", 'Int'>
    readonly current_streak: FieldRef<"UserGamification", 'Int'>
    readonly longest_streak: FieldRef<"UserGamification", 'Int'>
    readonly badges: FieldRef<"UserGamification", 'Json'>
    readonly updated_at: FieldRef<"UserGamification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserGamification findUnique
   */
  export type UserGamificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGamification
     */
    select?: UserGamificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGamification
     */
    omit?: UserGamificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGamificationInclude<ExtArgs> | null
    /**
     * Filter, which UserGamification to fetch.
     */
    where: UserGamificationWhereUniqueInput
  }

  /**
   * UserGamification findUniqueOrThrow
   */
  export type UserGamificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGamification
     */
    select?: UserGamificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGamification
     */
    omit?: UserGamificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGamificationInclude<ExtArgs> | null
    /**
     * Filter, which UserGamification to fetch.
     */
    where: UserGamificationWhereUniqueInput
  }

  /**
   * UserGamification findFirst
   */
  export type UserGamificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGamification
     */
    select?: UserGamificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGamification
     */
    omit?: UserGamificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGamificationInclude<ExtArgs> | null
    /**
     * Filter, which UserGamification to fetch.
     */
    where?: UserGamificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserGamifications to fetch.
     */
    orderBy?: UserGamificationOrderByWithRelationInput | UserGamificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserGamifications.
     */
    cursor?: UserGamificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserGamifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserGamifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserGamifications.
     */
    distinct?: UserGamificationScalarFieldEnum | UserGamificationScalarFieldEnum[]
  }

  /**
   * UserGamification findFirstOrThrow
   */
  export type UserGamificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGamification
     */
    select?: UserGamificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGamification
     */
    omit?: UserGamificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGamificationInclude<ExtArgs> | null
    /**
     * Filter, which UserGamification to fetch.
     */
    where?: UserGamificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserGamifications to fetch.
     */
    orderBy?: UserGamificationOrderByWithRelationInput | UserGamificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserGamifications.
     */
    cursor?: UserGamificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserGamifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserGamifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserGamifications.
     */
    distinct?: UserGamificationScalarFieldEnum | UserGamificationScalarFieldEnum[]
  }

  /**
   * UserGamification findMany
   */
  export type UserGamificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGamification
     */
    select?: UserGamificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGamification
     */
    omit?: UserGamificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGamificationInclude<ExtArgs> | null
    /**
     * Filter, which UserGamifications to fetch.
     */
    where?: UserGamificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserGamifications to fetch.
     */
    orderBy?: UserGamificationOrderByWithRelationInput | UserGamificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserGamifications.
     */
    cursor?: UserGamificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserGamifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserGamifications.
     */
    skip?: number
    distinct?: UserGamificationScalarFieldEnum | UserGamificationScalarFieldEnum[]
  }

  /**
   * UserGamification create
   */
  export type UserGamificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGamification
     */
    select?: UserGamificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGamification
     */
    omit?: UserGamificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGamificationInclude<ExtArgs> | null
    /**
     * The data needed to create a UserGamification.
     */
    data: XOR<UserGamificationCreateInput, UserGamificationUncheckedCreateInput>
  }

  /**
   * UserGamification createMany
   */
  export type UserGamificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserGamifications.
     */
    data: UserGamificationCreateManyInput | UserGamificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserGamification createManyAndReturn
   */
  export type UserGamificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGamification
     */
    select?: UserGamificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserGamification
     */
    omit?: UserGamificationOmit<ExtArgs> | null
    /**
     * The data used to create many UserGamifications.
     */
    data: UserGamificationCreateManyInput | UserGamificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGamificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserGamification update
   */
  export type UserGamificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGamification
     */
    select?: UserGamificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGamification
     */
    omit?: UserGamificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGamificationInclude<ExtArgs> | null
    /**
     * The data needed to update a UserGamification.
     */
    data: XOR<UserGamificationUpdateInput, UserGamificationUncheckedUpdateInput>
    /**
     * Choose, which UserGamification to update.
     */
    where: UserGamificationWhereUniqueInput
  }

  /**
   * UserGamification updateMany
   */
  export type UserGamificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserGamifications.
     */
    data: XOR<UserGamificationUpdateManyMutationInput, UserGamificationUncheckedUpdateManyInput>
    /**
     * Filter which UserGamifications to update
     */
    where?: UserGamificationWhereInput
    /**
     * Limit how many UserGamifications to update.
     */
    limit?: number
  }

  /**
   * UserGamification updateManyAndReturn
   */
  export type UserGamificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGamification
     */
    select?: UserGamificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserGamification
     */
    omit?: UserGamificationOmit<ExtArgs> | null
    /**
     * The data used to update UserGamifications.
     */
    data: XOR<UserGamificationUpdateManyMutationInput, UserGamificationUncheckedUpdateManyInput>
    /**
     * Filter which UserGamifications to update
     */
    where?: UserGamificationWhereInput
    /**
     * Limit how many UserGamifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGamificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserGamification upsert
   */
  export type UserGamificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGamification
     */
    select?: UserGamificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGamification
     */
    omit?: UserGamificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGamificationInclude<ExtArgs> | null
    /**
     * The filter to search for the UserGamification to update in case it exists.
     */
    where: UserGamificationWhereUniqueInput
    /**
     * In case the UserGamification found by the `where` argument doesn't exist, create a new UserGamification with this data.
     */
    create: XOR<UserGamificationCreateInput, UserGamificationUncheckedCreateInput>
    /**
     * In case the UserGamification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserGamificationUpdateInput, UserGamificationUncheckedUpdateInput>
  }

  /**
   * UserGamification delete
   */
  export type UserGamificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGamification
     */
    select?: UserGamificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGamification
     */
    omit?: UserGamificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGamificationInclude<ExtArgs> | null
    /**
     * Filter which UserGamification to delete.
     */
    where: UserGamificationWhereUniqueInput
  }

  /**
   * UserGamification deleteMany
   */
  export type UserGamificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserGamifications to delete
     */
    where?: UserGamificationWhereInput
    /**
     * Limit how many UserGamifications to delete.
     */
    limit?: number
  }

  /**
   * UserGamification without action
   */
  export type UserGamificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGamification
     */
    select?: UserGamificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGamification
     */
    omit?: UserGamificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGamificationInclude<ExtArgs> | null
  }


  /**
   * Model Challenge
   */

  export type AggregateChallenge = {
    _count: ChallengeCountAggregateOutputType | null
    _avg: ChallengeAvgAggregateOutputType | null
    _sum: ChallengeSumAggregateOutputType | null
    _min: ChallengeMinAggregateOutputType | null
    _max: ChallengeMaxAggregateOutputType | null
  }

  export type ChallengeAvgAggregateOutputType = {
    id: number | null
    duration_days: number | null
    min_score: number | null
  }

  export type ChallengeSumAggregateOutputType = {
    id: number | null
    duration_days: number | null
    min_score: number | null
  }

  export type ChallengeMinAggregateOutputType = {
    id: number | null
    creator_id: string | null
    name: string | null
    description: string | null
    duration_days: number | null
    min_score: number | null
    invite_code: string | null
    start_date: Date | null
    end_date: Date | null
    created_at: Date | null
  }

  export type ChallengeMaxAggregateOutputType = {
    id: number | null
    creator_id: string | null
    name: string | null
    description: string | null
    duration_days: number | null
    min_score: number | null
    invite_code: string | null
    start_date: Date | null
    end_date: Date | null
    created_at: Date | null
  }

  export type ChallengeCountAggregateOutputType = {
    id: number
    creator_id: number
    name: number
    description: number
    duration_days: number
    min_score: number
    invite_code: number
    start_date: number
    end_date: number
    created_at: number
    _all: number
  }


  export type ChallengeAvgAggregateInputType = {
    id?: true
    duration_days?: true
    min_score?: true
  }

  export type ChallengeSumAggregateInputType = {
    id?: true
    duration_days?: true
    min_score?: true
  }

  export type ChallengeMinAggregateInputType = {
    id?: true
    creator_id?: true
    name?: true
    description?: true
    duration_days?: true
    min_score?: true
    invite_code?: true
    start_date?: true
    end_date?: true
    created_at?: true
  }

  export type ChallengeMaxAggregateInputType = {
    id?: true
    creator_id?: true
    name?: true
    description?: true
    duration_days?: true
    min_score?: true
    invite_code?: true
    start_date?: true
    end_date?: true
    created_at?: true
  }

  export type ChallengeCountAggregateInputType = {
    id?: true
    creator_id?: true
    name?: true
    description?: true
    duration_days?: true
    min_score?: true
    invite_code?: true
    start_date?: true
    end_date?: true
    created_at?: true
    _all?: true
  }

  export type ChallengeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Challenge to aggregate.
     */
    where?: ChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Challenges to fetch.
     */
    orderBy?: ChallengeOrderByWithRelationInput | ChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Challenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Challenges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Challenges
    **/
    _count?: true | ChallengeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChallengeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChallengeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChallengeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChallengeMaxAggregateInputType
  }

  export type GetChallengeAggregateType<T extends ChallengeAggregateArgs> = {
        [P in keyof T & keyof AggregateChallenge]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChallenge[P]>
      : GetScalarType<T[P], AggregateChallenge[P]>
  }




  export type ChallengeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChallengeWhereInput
    orderBy?: ChallengeOrderByWithAggregationInput | ChallengeOrderByWithAggregationInput[]
    by: ChallengeScalarFieldEnum[] | ChallengeScalarFieldEnum
    having?: ChallengeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChallengeCountAggregateInputType | true
    _avg?: ChallengeAvgAggregateInputType
    _sum?: ChallengeSumAggregateInputType
    _min?: ChallengeMinAggregateInputType
    _max?: ChallengeMaxAggregateInputType
  }

  export type ChallengeGroupByOutputType = {
    id: number
    creator_id: string
    name: string
    description: string | null
    duration_days: number
    min_score: number
    invite_code: string
    start_date: Date | null
    end_date: Date | null
    created_at: Date
    _count: ChallengeCountAggregateOutputType | null
    _avg: ChallengeAvgAggregateOutputType | null
    _sum: ChallengeSumAggregateOutputType | null
    _min: ChallengeMinAggregateOutputType | null
    _max: ChallengeMaxAggregateOutputType | null
  }

  type GetChallengeGroupByPayload<T extends ChallengeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChallengeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChallengeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChallengeGroupByOutputType[P]>
            : GetScalarType<T[P], ChallengeGroupByOutputType[P]>
        }
      >
    >


  export type ChallengeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    creator_id?: boolean
    name?: boolean
    description?: boolean
    duration_days?: boolean
    min_score?: boolean
    invite_code?: boolean
    start_date?: boolean
    end_date?: boolean
    created_at?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
    participants?: boolean | Challenge$participantsArgs<ExtArgs>
    _count?: boolean | ChallengeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["challenge"]>

  export type ChallengeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    creator_id?: boolean
    name?: boolean
    description?: boolean
    duration_days?: boolean
    min_score?: boolean
    invite_code?: boolean
    start_date?: boolean
    end_date?: boolean
    created_at?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["challenge"]>

  export type ChallengeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    creator_id?: boolean
    name?: boolean
    description?: boolean
    duration_days?: boolean
    min_score?: boolean
    invite_code?: boolean
    start_date?: boolean
    end_date?: boolean
    created_at?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["challenge"]>

  export type ChallengeSelectScalar = {
    id?: boolean
    creator_id?: boolean
    name?: boolean
    description?: boolean
    duration_days?: boolean
    min_score?: boolean
    invite_code?: boolean
    start_date?: boolean
    end_date?: boolean
    created_at?: boolean
  }

  export type ChallengeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "creator_id" | "name" | "description" | "duration_days" | "min_score" | "invite_code" | "start_date" | "end_date" | "created_at", ExtArgs["result"]["challenge"]>
  export type ChallengeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
    participants?: boolean | Challenge$participantsArgs<ExtArgs>
    _count?: boolean | ChallengeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChallengeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ChallengeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ChallengePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Challenge"
    objects: {
      creator: Prisma.$UserPayload<ExtArgs>
      participants: Prisma.$ChallengeParticipantPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      creator_id: string
      name: string
      description: string | null
      duration_days: number
      min_score: number
      invite_code: string
      start_date: Date | null
      end_date: Date | null
      created_at: Date
    }, ExtArgs["result"]["challenge"]>
    composites: {}
  }

  type ChallengeGetPayload<S extends boolean | null | undefined | ChallengeDefaultArgs> = $Result.GetResult<Prisma.$ChallengePayload, S>

  type ChallengeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChallengeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChallengeCountAggregateInputType | true
    }

  export interface ChallengeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Challenge'], meta: { name: 'Challenge' } }
    /**
     * Find zero or one Challenge that matches the filter.
     * @param {ChallengeFindUniqueArgs} args - Arguments to find a Challenge
     * @example
     * // Get one Challenge
     * const challenge = await prisma.challenge.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChallengeFindUniqueArgs>(args: SelectSubset<T, ChallengeFindUniqueArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Challenge that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChallengeFindUniqueOrThrowArgs} args - Arguments to find a Challenge
     * @example
     * // Get one Challenge
     * const challenge = await prisma.challenge.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChallengeFindUniqueOrThrowArgs>(args: SelectSubset<T, ChallengeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Challenge that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeFindFirstArgs} args - Arguments to find a Challenge
     * @example
     * // Get one Challenge
     * const challenge = await prisma.challenge.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChallengeFindFirstArgs>(args?: SelectSubset<T, ChallengeFindFirstArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Challenge that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeFindFirstOrThrowArgs} args - Arguments to find a Challenge
     * @example
     * // Get one Challenge
     * const challenge = await prisma.challenge.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChallengeFindFirstOrThrowArgs>(args?: SelectSubset<T, ChallengeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Challenges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Challenges
     * const challenges = await prisma.challenge.findMany()
     * 
     * // Get first 10 Challenges
     * const challenges = await prisma.challenge.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const challengeWithIdOnly = await prisma.challenge.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChallengeFindManyArgs>(args?: SelectSubset<T, ChallengeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Challenge.
     * @param {ChallengeCreateArgs} args - Arguments to create a Challenge.
     * @example
     * // Create one Challenge
     * const Challenge = await prisma.challenge.create({
     *   data: {
     *     // ... data to create a Challenge
     *   }
     * })
     * 
     */
    create<T extends ChallengeCreateArgs>(args: SelectSubset<T, ChallengeCreateArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Challenges.
     * @param {ChallengeCreateManyArgs} args - Arguments to create many Challenges.
     * @example
     * // Create many Challenges
     * const challenge = await prisma.challenge.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChallengeCreateManyArgs>(args?: SelectSubset<T, ChallengeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Challenges and returns the data saved in the database.
     * @param {ChallengeCreateManyAndReturnArgs} args - Arguments to create many Challenges.
     * @example
     * // Create many Challenges
     * const challenge = await prisma.challenge.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Challenges and only return the `id`
     * const challengeWithIdOnly = await prisma.challenge.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChallengeCreateManyAndReturnArgs>(args?: SelectSubset<T, ChallengeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Challenge.
     * @param {ChallengeDeleteArgs} args - Arguments to delete one Challenge.
     * @example
     * // Delete one Challenge
     * const Challenge = await prisma.challenge.delete({
     *   where: {
     *     // ... filter to delete one Challenge
     *   }
     * })
     * 
     */
    delete<T extends ChallengeDeleteArgs>(args: SelectSubset<T, ChallengeDeleteArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Challenge.
     * @param {ChallengeUpdateArgs} args - Arguments to update one Challenge.
     * @example
     * // Update one Challenge
     * const challenge = await prisma.challenge.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChallengeUpdateArgs>(args: SelectSubset<T, ChallengeUpdateArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Challenges.
     * @param {ChallengeDeleteManyArgs} args - Arguments to filter Challenges to delete.
     * @example
     * // Delete a few Challenges
     * const { count } = await prisma.challenge.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChallengeDeleteManyArgs>(args?: SelectSubset<T, ChallengeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Challenges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Challenges
     * const challenge = await prisma.challenge.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChallengeUpdateManyArgs>(args: SelectSubset<T, ChallengeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Challenges and returns the data updated in the database.
     * @param {ChallengeUpdateManyAndReturnArgs} args - Arguments to update many Challenges.
     * @example
     * // Update many Challenges
     * const challenge = await prisma.challenge.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Challenges and only return the `id`
     * const challengeWithIdOnly = await prisma.challenge.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChallengeUpdateManyAndReturnArgs>(args: SelectSubset<T, ChallengeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Challenge.
     * @param {ChallengeUpsertArgs} args - Arguments to update or create a Challenge.
     * @example
     * // Update or create a Challenge
     * const challenge = await prisma.challenge.upsert({
     *   create: {
     *     // ... data to create a Challenge
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Challenge we want to update
     *   }
     * })
     */
    upsert<T extends ChallengeUpsertArgs>(args: SelectSubset<T, ChallengeUpsertArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Challenges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeCountArgs} args - Arguments to filter Challenges to count.
     * @example
     * // Count the number of Challenges
     * const count = await prisma.challenge.count({
     *   where: {
     *     // ... the filter for the Challenges we want to count
     *   }
     * })
    **/
    count<T extends ChallengeCountArgs>(
      args?: Subset<T, ChallengeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChallengeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Challenge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChallengeAggregateArgs>(args: Subset<T, ChallengeAggregateArgs>): Prisma.PrismaPromise<GetChallengeAggregateType<T>>

    /**
     * Group by Challenge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChallengeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChallengeGroupByArgs['orderBy'] }
        : { orderBy?: ChallengeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChallengeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChallengeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Challenge model
   */
  readonly fields: ChallengeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Challenge.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChallengeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    participants<T extends Challenge$participantsArgs<ExtArgs> = {}>(args?: Subset<T, Challenge$participantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallengeParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Challenge model
   */
  interface ChallengeFieldRefs {
    readonly id: FieldRef<"Challenge", 'Int'>
    readonly creator_id: FieldRef<"Challenge", 'String'>
    readonly name: FieldRef<"Challenge", 'String'>
    readonly description: FieldRef<"Challenge", 'String'>
    readonly duration_days: FieldRef<"Challenge", 'Int'>
    readonly min_score: FieldRef<"Challenge", 'Int'>
    readonly invite_code: FieldRef<"Challenge", 'String'>
    readonly start_date: FieldRef<"Challenge", 'DateTime'>
    readonly end_date: FieldRef<"Challenge", 'DateTime'>
    readonly created_at: FieldRef<"Challenge", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Challenge findUnique
   */
  export type ChallengeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * Filter, which Challenge to fetch.
     */
    where: ChallengeWhereUniqueInput
  }

  /**
   * Challenge findUniqueOrThrow
   */
  export type ChallengeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * Filter, which Challenge to fetch.
     */
    where: ChallengeWhereUniqueInput
  }

  /**
   * Challenge findFirst
   */
  export type ChallengeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * Filter, which Challenge to fetch.
     */
    where?: ChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Challenges to fetch.
     */
    orderBy?: ChallengeOrderByWithRelationInput | ChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Challenges.
     */
    cursor?: ChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Challenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Challenges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Challenges.
     */
    distinct?: ChallengeScalarFieldEnum | ChallengeScalarFieldEnum[]
  }

  /**
   * Challenge findFirstOrThrow
   */
  export type ChallengeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * Filter, which Challenge to fetch.
     */
    where?: ChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Challenges to fetch.
     */
    orderBy?: ChallengeOrderByWithRelationInput | ChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Challenges.
     */
    cursor?: ChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Challenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Challenges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Challenges.
     */
    distinct?: ChallengeScalarFieldEnum | ChallengeScalarFieldEnum[]
  }

  /**
   * Challenge findMany
   */
  export type ChallengeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * Filter, which Challenges to fetch.
     */
    where?: ChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Challenges to fetch.
     */
    orderBy?: ChallengeOrderByWithRelationInput | ChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Challenges.
     */
    cursor?: ChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Challenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Challenges.
     */
    skip?: number
    distinct?: ChallengeScalarFieldEnum | ChallengeScalarFieldEnum[]
  }

  /**
   * Challenge create
   */
  export type ChallengeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * The data needed to create a Challenge.
     */
    data: XOR<ChallengeCreateInput, ChallengeUncheckedCreateInput>
  }

  /**
   * Challenge createMany
   */
  export type ChallengeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Challenges.
     */
    data: ChallengeCreateManyInput | ChallengeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Challenge createManyAndReturn
   */
  export type ChallengeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * The data used to create many Challenges.
     */
    data: ChallengeCreateManyInput | ChallengeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Challenge update
   */
  export type ChallengeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * The data needed to update a Challenge.
     */
    data: XOR<ChallengeUpdateInput, ChallengeUncheckedUpdateInput>
    /**
     * Choose, which Challenge to update.
     */
    where: ChallengeWhereUniqueInput
  }

  /**
   * Challenge updateMany
   */
  export type ChallengeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Challenges.
     */
    data: XOR<ChallengeUpdateManyMutationInput, ChallengeUncheckedUpdateManyInput>
    /**
     * Filter which Challenges to update
     */
    where?: ChallengeWhereInput
    /**
     * Limit how many Challenges to update.
     */
    limit?: number
  }

  /**
   * Challenge updateManyAndReturn
   */
  export type ChallengeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * The data used to update Challenges.
     */
    data: XOR<ChallengeUpdateManyMutationInput, ChallengeUncheckedUpdateManyInput>
    /**
     * Filter which Challenges to update
     */
    where?: ChallengeWhereInput
    /**
     * Limit how many Challenges to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Challenge upsert
   */
  export type ChallengeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * The filter to search for the Challenge to update in case it exists.
     */
    where: ChallengeWhereUniqueInput
    /**
     * In case the Challenge found by the `where` argument doesn't exist, create a new Challenge with this data.
     */
    create: XOR<ChallengeCreateInput, ChallengeUncheckedCreateInput>
    /**
     * In case the Challenge was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChallengeUpdateInput, ChallengeUncheckedUpdateInput>
  }

  /**
   * Challenge delete
   */
  export type ChallengeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * Filter which Challenge to delete.
     */
    where: ChallengeWhereUniqueInput
  }

  /**
   * Challenge deleteMany
   */
  export type ChallengeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Challenges to delete
     */
    where?: ChallengeWhereInput
    /**
     * Limit how many Challenges to delete.
     */
    limit?: number
  }

  /**
   * Challenge.participants
   */
  export type Challenge$participantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeParticipant
     */
    select?: ChallengeParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeParticipant
     */
    omit?: ChallengeParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeParticipantInclude<ExtArgs> | null
    where?: ChallengeParticipantWhereInput
    orderBy?: ChallengeParticipantOrderByWithRelationInput | ChallengeParticipantOrderByWithRelationInput[]
    cursor?: ChallengeParticipantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChallengeParticipantScalarFieldEnum | ChallengeParticipantScalarFieldEnum[]
  }

  /**
   * Challenge without action
   */
  export type ChallengeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
  }


  /**
   * Model ChallengeParticipant
   */

  export type AggregateChallengeParticipant = {
    _count: ChallengeParticipantCountAggregateOutputType | null
    _avg: ChallengeParticipantAvgAggregateOutputType | null
    _sum: ChallengeParticipantSumAggregateOutputType | null
    _min: ChallengeParticipantMinAggregateOutputType | null
    _max: ChallengeParticipantMaxAggregateOutputType | null
  }

  export type ChallengeParticipantAvgAggregateOutputType = {
    id: number | null
    challenge_id: number | null
    average_score: number | null
    current_streak: number | null
  }

  export type ChallengeParticipantSumAggregateOutputType = {
    id: number | null
    challenge_id: number | null
    average_score: number | null
    current_streak: number | null
  }

  export type ChallengeParticipantMinAggregateOutputType = {
    id: number | null
    challenge_id: number | null
    user_id: string | null
    average_score: number | null
    current_streak: number | null
    joined_at: Date | null
  }

  export type ChallengeParticipantMaxAggregateOutputType = {
    id: number | null
    challenge_id: number | null
    user_id: string | null
    average_score: number | null
    current_streak: number | null
    joined_at: Date | null
  }

  export type ChallengeParticipantCountAggregateOutputType = {
    id: number
    challenge_id: number
    user_id: number
    average_score: number
    current_streak: number
    badges_earned: number
    joined_at: number
    _all: number
  }


  export type ChallengeParticipantAvgAggregateInputType = {
    id?: true
    challenge_id?: true
    average_score?: true
    current_streak?: true
  }

  export type ChallengeParticipantSumAggregateInputType = {
    id?: true
    challenge_id?: true
    average_score?: true
    current_streak?: true
  }

  export type ChallengeParticipantMinAggregateInputType = {
    id?: true
    challenge_id?: true
    user_id?: true
    average_score?: true
    current_streak?: true
    joined_at?: true
  }

  export type ChallengeParticipantMaxAggregateInputType = {
    id?: true
    challenge_id?: true
    user_id?: true
    average_score?: true
    current_streak?: true
    joined_at?: true
  }

  export type ChallengeParticipantCountAggregateInputType = {
    id?: true
    challenge_id?: true
    user_id?: true
    average_score?: true
    current_streak?: true
    badges_earned?: true
    joined_at?: true
    _all?: true
  }

  export type ChallengeParticipantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChallengeParticipant to aggregate.
     */
    where?: ChallengeParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChallengeParticipants to fetch.
     */
    orderBy?: ChallengeParticipantOrderByWithRelationInput | ChallengeParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChallengeParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChallengeParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChallengeParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChallengeParticipants
    **/
    _count?: true | ChallengeParticipantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChallengeParticipantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChallengeParticipantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChallengeParticipantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChallengeParticipantMaxAggregateInputType
  }

  export type GetChallengeParticipantAggregateType<T extends ChallengeParticipantAggregateArgs> = {
        [P in keyof T & keyof AggregateChallengeParticipant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChallengeParticipant[P]>
      : GetScalarType<T[P], AggregateChallengeParticipant[P]>
  }




  export type ChallengeParticipantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChallengeParticipantWhereInput
    orderBy?: ChallengeParticipantOrderByWithAggregationInput | ChallengeParticipantOrderByWithAggregationInput[]
    by: ChallengeParticipantScalarFieldEnum[] | ChallengeParticipantScalarFieldEnum
    having?: ChallengeParticipantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChallengeParticipantCountAggregateInputType | true
    _avg?: ChallengeParticipantAvgAggregateInputType
    _sum?: ChallengeParticipantSumAggregateInputType
    _min?: ChallengeParticipantMinAggregateInputType
    _max?: ChallengeParticipantMaxAggregateInputType
  }

  export type ChallengeParticipantGroupByOutputType = {
    id: number
    challenge_id: number
    user_id: string
    average_score: number | null
    current_streak: number | null
    badges_earned: JsonValue | null
    joined_at: Date
    _count: ChallengeParticipantCountAggregateOutputType | null
    _avg: ChallengeParticipantAvgAggregateOutputType | null
    _sum: ChallengeParticipantSumAggregateOutputType | null
    _min: ChallengeParticipantMinAggregateOutputType | null
    _max: ChallengeParticipantMaxAggregateOutputType | null
  }

  type GetChallengeParticipantGroupByPayload<T extends ChallengeParticipantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChallengeParticipantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChallengeParticipantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChallengeParticipantGroupByOutputType[P]>
            : GetScalarType<T[P], ChallengeParticipantGroupByOutputType[P]>
        }
      >
    >


  export type ChallengeParticipantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    challenge_id?: boolean
    user_id?: boolean
    average_score?: boolean
    current_streak?: boolean
    badges_earned?: boolean
    joined_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["challengeParticipant"]>

  export type ChallengeParticipantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    challenge_id?: boolean
    user_id?: boolean
    average_score?: boolean
    current_streak?: boolean
    badges_earned?: boolean
    joined_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["challengeParticipant"]>

  export type ChallengeParticipantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    challenge_id?: boolean
    user_id?: boolean
    average_score?: boolean
    current_streak?: boolean
    badges_earned?: boolean
    joined_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["challengeParticipant"]>

  export type ChallengeParticipantSelectScalar = {
    id?: boolean
    challenge_id?: boolean
    user_id?: boolean
    average_score?: boolean
    current_streak?: boolean
    badges_earned?: boolean
    joined_at?: boolean
  }

  export type ChallengeParticipantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "challenge_id" | "user_id" | "average_score" | "current_streak" | "badges_earned" | "joined_at", ExtArgs["result"]["challengeParticipant"]>
  export type ChallengeParticipantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
  }
  export type ChallengeParticipantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
  }
  export type ChallengeParticipantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
  }

  export type $ChallengeParticipantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChallengeParticipant"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      challenge: Prisma.$ChallengePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      challenge_id: number
      user_id: string
      average_score: number | null
      current_streak: number | null
      badges_earned: Prisma.JsonValue | null
      joined_at: Date
    }, ExtArgs["result"]["challengeParticipant"]>
    composites: {}
  }

  type ChallengeParticipantGetPayload<S extends boolean | null | undefined | ChallengeParticipantDefaultArgs> = $Result.GetResult<Prisma.$ChallengeParticipantPayload, S>

  type ChallengeParticipantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChallengeParticipantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChallengeParticipantCountAggregateInputType | true
    }

  export interface ChallengeParticipantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChallengeParticipant'], meta: { name: 'ChallengeParticipant' } }
    /**
     * Find zero or one ChallengeParticipant that matches the filter.
     * @param {ChallengeParticipantFindUniqueArgs} args - Arguments to find a ChallengeParticipant
     * @example
     * // Get one ChallengeParticipant
     * const challengeParticipant = await prisma.challengeParticipant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChallengeParticipantFindUniqueArgs>(args: SelectSubset<T, ChallengeParticipantFindUniqueArgs<ExtArgs>>): Prisma__ChallengeParticipantClient<$Result.GetResult<Prisma.$ChallengeParticipantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChallengeParticipant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChallengeParticipantFindUniqueOrThrowArgs} args - Arguments to find a ChallengeParticipant
     * @example
     * // Get one ChallengeParticipant
     * const challengeParticipant = await prisma.challengeParticipant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChallengeParticipantFindUniqueOrThrowArgs>(args: SelectSubset<T, ChallengeParticipantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChallengeParticipantClient<$Result.GetResult<Prisma.$ChallengeParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChallengeParticipant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeParticipantFindFirstArgs} args - Arguments to find a ChallengeParticipant
     * @example
     * // Get one ChallengeParticipant
     * const challengeParticipant = await prisma.challengeParticipant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChallengeParticipantFindFirstArgs>(args?: SelectSubset<T, ChallengeParticipantFindFirstArgs<ExtArgs>>): Prisma__ChallengeParticipantClient<$Result.GetResult<Prisma.$ChallengeParticipantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChallengeParticipant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeParticipantFindFirstOrThrowArgs} args - Arguments to find a ChallengeParticipant
     * @example
     * // Get one ChallengeParticipant
     * const challengeParticipant = await prisma.challengeParticipant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChallengeParticipantFindFirstOrThrowArgs>(args?: SelectSubset<T, ChallengeParticipantFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChallengeParticipantClient<$Result.GetResult<Prisma.$ChallengeParticipantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChallengeParticipants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeParticipantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChallengeParticipants
     * const challengeParticipants = await prisma.challengeParticipant.findMany()
     * 
     * // Get first 10 ChallengeParticipants
     * const challengeParticipants = await prisma.challengeParticipant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const challengeParticipantWithIdOnly = await prisma.challengeParticipant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChallengeParticipantFindManyArgs>(args?: SelectSubset<T, ChallengeParticipantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallengeParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChallengeParticipant.
     * @param {ChallengeParticipantCreateArgs} args - Arguments to create a ChallengeParticipant.
     * @example
     * // Create one ChallengeParticipant
     * const ChallengeParticipant = await prisma.challengeParticipant.create({
     *   data: {
     *     // ... data to create a ChallengeParticipant
     *   }
     * })
     * 
     */
    create<T extends ChallengeParticipantCreateArgs>(args: SelectSubset<T, ChallengeParticipantCreateArgs<ExtArgs>>): Prisma__ChallengeParticipantClient<$Result.GetResult<Prisma.$ChallengeParticipantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChallengeParticipants.
     * @param {ChallengeParticipantCreateManyArgs} args - Arguments to create many ChallengeParticipants.
     * @example
     * // Create many ChallengeParticipants
     * const challengeParticipant = await prisma.challengeParticipant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChallengeParticipantCreateManyArgs>(args?: SelectSubset<T, ChallengeParticipantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChallengeParticipants and returns the data saved in the database.
     * @param {ChallengeParticipantCreateManyAndReturnArgs} args - Arguments to create many ChallengeParticipants.
     * @example
     * // Create many ChallengeParticipants
     * const challengeParticipant = await prisma.challengeParticipant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChallengeParticipants and only return the `id`
     * const challengeParticipantWithIdOnly = await prisma.challengeParticipant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChallengeParticipantCreateManyAndReturnArgs>(args?: SelectSubset<T, ChallengeParticipantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallengeParticipantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChallengeParticipant.
     * @param {ChallengeParticipantDeleteArgs} args - Arguments to delete one ChallengeParticipant.
     * @example
     * // Delete one ChallengeParticipant
     * const ChallengeParticipant = await prisma.challengeParticipant.delete({
     *   where: {
     *     // ... filter to delete one ChallengeParticipant
     *   }
     * })
     * 
     */
    delete<T extends ChallengeParticipantDeleteArgs>(args: SelectSubset<T, ChallengeParticipantDeleteArgs<ExtArgs>>): Prisma__ChallengeParticipantClient<$Result.GetResult<Prisma.$ChallengeParticipantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChallengeParticipant.
     * @param {ChallengeParticipantUpdateArgs} args - Arguments to update one ChallengeParticipant.
     * @example
     * // Update one ChallengeParticipant
     * const challengeParticipant = await prisma.challengeParticipant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChallengeParticipantUpdateArgs>(args: SelectSubset<T, ChallengeParticipantUpdateArgs<ExtArgs>>): Prisma__ChallengeParticipantClient<$Result.GetResult<Prisma.$ChallengeParticipantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChallengeParticipants.
     * @param {ChallengeParticipantDeleteManyArgs} args - Arguments to filter ChallengeParticipants to delete.
     * @example
     * // Delete a few ChallengeParticipants
     * const { count } = await prisma.challengeParticipant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChallengeParticipantDeleteManyArgs>(args?: SelectSubset<T, ChallengeParticipantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChallengeParticipants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeParticipantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChallengeParticipants
     * const challengeParticipant = await prisma.challengeParticipant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChallengeParticipantUpdateManyArgs>(args: SelectSubset<T, ChallengeParticipantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChallengeParticipants and returns the data updated in the database.
     * @param {ChallengeParticipantUpdateManyAndReturnArgs} args - Arguments to update many ChallengeParticipants.
     * @example
     * // Update many ChallengeParticipants
     * const challengeParticipant = await prisma.challengeParticipant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChallengeParticipants and only return the `id`
     * const challengeParticipantWithIdOnly = await prisma.challengeParticipant.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChallengeParticipantUpdateManyAndReturnArgs>(args: SelectSubset<T, ChallengeParticipantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallengeParticipantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChallengeParticipant.
     * @param {ChallengeParticipantUpsertArgs} args - Arguments to update or create a ChallengeParticipant.
     * @example
     * // Update or create a ChallengeParticipant
     * const challengeParticipant = await prisma.challengeParticipant.upsert({
     *   create: {
     *     // ... data to create a ChallengeParticipant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChallengeParticipant we want to update
     *   }
     * })
     */
    upsert<T extends ChallengeParticipantUpsertArgs>(args: SelectSubset<T, ChallengeParticipantUpsertArgs<ExtArgs>>): Prisma__ChallengeParticipantClient<$Result.GetResult<Prisma.$ChallengeParticipantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChallengeParticipants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeParticipantCountArgs} args - Arguments to filter ChallengeParticipants to count.
     * @example
     * // Count the number of ChallengeParticipants
     * const count = await prisma.challengeParticipant.count({
     *   where: {
     *     // ... the filter for the ChallengeParticipants we want to count
     *   }
     * })
    **/
    count<T extends ChallengeParticipantCountArgs>(
      args?: Subset<T, ChallengeParticipantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChallengeParticipantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChallengeParticipant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeParticipantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChallengeParticipantAggregateArgs>(args: Subset<T, ChallengeParticipantAggregateArgs>): Prisma.PrismaPromise<GetChallengeParticipantAggregateType<T>>

    /**
     * Group by ChallengeParticipant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeParticipantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChallengeParticipantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChallengeParticipantGroupByArgs['orderBy'] }
        : { orderBy?: ChallengeParticipantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChallengeParticipantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChallengeParticipantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChallengeParticipant model
   */
  readonly fields: ChallengeParticipantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChallengeParticipant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChallengeParticipantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    challenge<T extends ChallengeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChallengeDefaultArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ChallengeParticipant model
   */
  interface ChallengeParticipantFieldRefs {
    readonly id: FieldRef<"ChallengeParticipant", 'Int'>
    readonly challenge_id: FieldRef<"ChallengeParticipant", 'Int'>
    readonly user_id: FieldRef<"ChallengeParticipant", 'String'>
    readonly average_score: FieldRef<"ChallengeParticipant", 'Float'>
    readonly current_streak: FieldRef<"ChallengeParticipant", 'Int'>
    readonly badges_earned: FieldRef<"ChallengeParticipant", 'Json'>
    readonly joined_at: FieldRef<"ChallengeParticipant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChallengeParticipant findUnique
   */
  export type ChallengeParticipantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeParticipant
     */
    select?: ChallengeParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeParticipant
     */
    omit?: ChallengeParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeParticipantInclude<ExtArgs> | null
    /**
     * Filter, which ChallengeParticipant to fetch.
     */
    where: ChallengeParticipantWhereUniqueInput
  }

  /**
   * ChallengeParticipant findUniqueOrThrow
   */
  export type ChallengeParticipantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeParticipant
     */
    select?: ChallengeParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeParticipant
     */
    omit?: ChallengeParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeParticipantInclude<ExtArgs> | null
    /**
     * Filter, which ChallengeParticipant to fetch.
     */
    where: ChallengeParticipantWhereUniqueInput
  }

  /**
   * ChallengeParticipant findFirst
   */
  export type ChallengeParticipantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeParticipant
     */
    select?: ChallengeParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeParticipant
     */
    omit?: ChallengeParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeParticipantInclude<ExtArgs> | null
    /**
     * Filter, which ChallengeParticipant to fetch.
     */
    where?: ChallengeParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChallengeParticipants to fetch.
     */
    orderBy?: ChallengeParticipantOrderByWithRelationInput | ChallengeParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChallengeParticipants.
     */
    cursor?: ChallengeParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChallengeParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChallengeParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChallengeParticipants.
     */
    distinct?: ChallengeParticipantScalarFieldEnum | ChallengeParticipantScalarFieldEnum[]
  }

  /**
   * ChallengeParticipant findFirstOrThrow
   */
  export type ChallengeParticipantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeParticipant
     */
    select?: ChallengeParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeParticipant
     */
    omit?: ChallengeParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeParticipantInclude<ExtArgs> | null
    /**
     * Filter, which ChallengeParticipant to fetch.
     */
    where?: ChallengeParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChallengeParticipants to fetch.
     */
    orderBy?: ChallengeParticipantOrderByWithRelationInput | ChallengeParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChallengeParticipants.
     */
    cursor?: ChallengeParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChallengeParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChallengeParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChallengeParticipants.
     */
    distinct?: ChallengeParticipantScalarFieldEnum | ChallengeParticipantScalarFieldEnum[]
  }

  /**
   * ChallengeParticipant findMany
   */
  export type ChallengeParticipantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeParticipant
     */
    select?: ChallengeParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeParticipant
     */
    omit?: ChallengeParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeParticipantInclude<ExtArgs> | null
    /**
     * Filter, which ChallengeParticipants to fetch.
     */
    where?: ChallengeParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChallengeParticipants to fetch.
     */
    orderBy?: ChallengeParticipantOrderByWithRelationInput | ChallengeParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChallengeParticipants.
     */
    cursor?: ChallengeParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChallengeParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChallengeParticipants.
     */
    skip?: number
    distinct?: ChallengeParticipantScalarFieldEnum | ChallengeParticipantScalarFieldEnum[]
  }

  /**
   * ChallengeParticipant create
   */
  export type ChallengeParticipantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeParticipant
     */
    select?: ChallengeParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeParticipant
     */
    omit?: ChallengeParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeParticipantInclude<ExtArgs> | null
    /**
     * The data needed to create a ChallengeParticipant.
     */
    data: XOR<ChallengeParticipantCreateInput, ChallengeParticipantUncheckedCreateInput>
  }

  /**
   * ChallengeParticipant createMany
   */
  export type ChallengeParticipantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChallengeParticipants.
     */
    data: ChallengeParticipantCreateManyInput | ChallengeParticipantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChallengeParticipant createManyAndReturn
   */
  export type ChallengeParticipantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeParticipant
     */
    select?: ChallengeParticipantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeParticipant
     */
    omit?: ChallengeParticipantOmit<ExtArgs> | null
    /**
     * The data used to create many ChallengeParticipants.
     */
    data: ChallengeParticipantCreateManyInput | ChallengeParticipantCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeParticipantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChallengeParticipant update
   */
  export type ChallengeParticipantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeParticipant
     */
    select?: ChallengeParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeParticipant
     */
    omit?: ChallengeParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeParticipantInclude<ExtArgs> | null
    /**
     * The data needed to update a ChallengeParticipant.
     */
    data: XOR<ChallengeParticipantUpdateInput, ChallengeParticipantUncheckedUpdateInput>
    /**
     * Choose, which ChallengeParticipant to update.
     */
    where: ChallengeParticipantWhereUniqueInput
  }

  /**
   * ChallengeParticipant updateMany
   */
  export type ChallengeParticipantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChallengeParticipants.
     */
    data: XOR<ChallengeParticipantUpdateManyMutationInput, ChallengeParticipantUncheckedUpdateManyInput>
    /**
     * Filter which ChallengeParticipants to update
     */
    where?: ChallengeParticipantWhereInput
    /**
     * Limit how many ChallengeParticipants to update.
     */
    limit?: number
  }

  /**
   * ChallengeParticipant updateManyAndReturn
   */
  export type ChallengeParticipantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeParticipant
     */
    select?: ChallengeParticipantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeParticipant
     */
    omit?: ChallengeParticipantOmit<ExtArgs> | null
    /**
     * The data used to update ChallengeParticipants.
     */
    data: XOR<ChallengeParticipantUpdateManyMutationInput, ChallengeParticipantUncheckedUpdateManyInput>
    /**
     * Filter which ChallengeParticipants to update
     */
    where?: ChallengeParticipantWhereInput
    /**
     * Limit how many ChallengeParticipants to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeParticipantIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChallengeParticipant upsert
   */
  export type ChallengeParticipantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeParticipant
     */
    select?: ChallengeParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeParticipant
     */
    omit?: ChallengeParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeParticipantInclude<ExtArgs> | null
    /**
     * The filter to search for the ChallengeParticipant to update in case it exists.
     */
    where: ChallengeParticipantWhereUniqueInput
    /**
     * In case the ChallengeParticipant found by the `where` argument doesn't exist, create a new ChallengeParticipant with this data.
     */
    create: XOR<ChallengeParticipantCreateInput, ChallengeParticipantUncheckedCreateInput>
    /**
     * In case the ChallengeParticipant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChallengeParticipantUpdateInput, ChallengeParticipantUncheckedUpdateInput>
  }

  /**
   * ChallengeParticipant delete
   */
  export type ChallengeParticipantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeParticipant
     */
    select?: ChallengeParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeParticipant
     */
    omit?: ChallengeParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeParticipantInclude<ExtArgs> | null
    /**
     * Filter which ChallengeParticipant to delete.
     */
    where: ChallengeParticipantWhereUniqueInput
  }

  /**
   * ChallengeParticipant deleteMany
   */
  export type ChallengeParticipantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChallengeParticipants to delete
     */
    where?: ChallengeParticipantWhereInput
    /**
     * Limit how many ChallengeParticipants to delete.
     */
    limit?: number
  }

  /**
   * ChallengeParticipant without action
   */
  export type ChallengeParticipantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeParticipant
     */
    select?: ChallengeParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeParticipant
     */
    omit?: ChallengeParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeParticipantInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password_hash: 'password_hash',
    name: 'name',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const NutritionalPlanScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    name: 'name',
    daily_calories: 'daily_calories',
    is_active: 'is_active',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type NutritionalPlanScalarFieldEnum = (typeof NutritionalPlanScalarFieldEnum)[keyof typeof NutritionalPlanScalarFieldEnum]


  export const PlanMealScalarFieldEnum: {
    id: 'id',
    plan_id: 'plan_id',
    meal_name: 'meal_name',
    suggested_time: 'suggested_time',
    target_calories: 'target_calories',
    allowed_foods: 'allowed_foods',
    notes: 'notes'
  };

  export type PlanMealScalarFieldEnum = (typeof PlanMealScalarFieldEnum)[keyof typeof PlanMealScalarFieldEnum]


  export const MealRegistrationScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    plan_id: 'plan_id',
    meal_name: 'meal_name',
    photo_url: 'photo_url',
    ai_analysis: 'ai_analysis',
    detected_foods: 'detected_foods',
    estimated_calories: 'estimated_calories',
    estimated_protein: 'estimated_protein',
    estimated_carbs: 'estimated_carbs',
    estimated_fats: 'estimated_fats',
    meal_score: 'meal_score',
    adherence_tags: 'adherence_tags',
    ai_message: 'ai_message',
    registered_at: 'registered_at'
  };

  export type MealRegistrationScalarFieldEnum = (typeof MealRegistrationScalarFieldEnum)[keyof typeof MealRegistrationScalarFieldEnum]


  export const DailyScoreScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    plan_id: 'plan_id',
    date: 'date',
    total_calories: 'total_calories',
    target_calories: 'target_calories',
    average_meal_score: 'average_meal_score',
    daily_score: 'daily_score',
    streak_days: 'streak_days',
    status: 'status',
    created_at: 'created_at'
  };

  export type DailyScoreScalarFieldEnum = (typeof DailyScoreScalarFieldEnum)[keyof typeof DailyScoreScalarFieldEnum]


  export const UserGamificationScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    total_xp: 'total_xp',
    current_level: 'current_level',
    total_meals_registered: 'total_meals_registered',
    current_streak: 'current_streak',
    longest_streak: 'longest_streak',
    badges: 'badges',
    updated_at: 'updated_at'
  };

  export type UserGamificationScalarFieldEnum = (typeof UserGamificationScalarFieldEnum)[keyof typeof UserGamificationScalarFieldEnum]


  export const ChallengeScalarFieldEnum: {
    id: 'id',
    creator_id: 'creator_id',
    name: 'name',
    description: 'description',
    duration_days: 'duration_days',
    min_score: 'min_score',
    invite_code: 'invite_code',
    start_date: 'start_date',
    end_date: 'end_date',
    created_at: 'created_at'
  };

  export type ChallengeScalarFieldEnum = (typeof ChallengeScalarFieldEnum)[keyof typeof ChallengeScalarFieldEnum]


  export const ChallengeParticipantScalarFieldEnum: {
    id: 'id',
    challenge_id: 'challenge_id',
    user_id: 'user_id',
    average_score: 'average_score',
    current_streak: 'current_streak',
    badges_earned: 'badges_earned',
    joined_at: 'joined_at'
  };

  export type ChallengeParticipantScalarFieldEnum = (typeof ChallengeParticipantScalarFieldEnum)[keyof typeof ChallengeParticipantScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password_hash?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    nutritional_plans?: NutritionalPlanListRelationFilter
    meal_registrations?: MealRegistrationListRelationFilter
    daily_scores?: DailyScoreListRelationFilter
    gamification?: XOR<UserGamificationNullableScalarRelationFilter, UserGamificationWhereInput> | null
    challenges_created?: ChallengeListRelationFilter
    challenge_participations?: ChallengeParticipantListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    name?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    nutritional_plans?: NutritionalPlanOrderByRelationAggregateInput
    meal_registrations?: MealRegistrationOrderByRelationAggregateInput
    daily_scores?: DailyScoreOrderByRelationAggregateInput
    gamification?: UserGamificationOrderByWithRelationInput
    challenges_created?: ChallengeOrderByRelationAggregateInput
    challenge_participations?: ChallengeParticipantOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password_hash?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    nutritional_plans?: NutritionalPlanListRelationFilter
    meal_registrations?: MealRegistrationListRelationFilter
    daily_scores?: DailyScoreListRelationFilter
    gamification?: XOR<UserGamificationNullableScalarRelationFilter, UserGamificationWhereInput> | null
    challenges_created?: ChallengeListRelationFilter
    challenge_participations?: ChallengeParticipantListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    name?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password_hash?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type NutritionalPlanWhereInput = {
    AND?: NutritionalPlanWhereInput | NutritionalPlanWhereInput[]
    OR?: NutritionalPlanWhereInput[]
    NOT?: NutritionalPlanWhereInput | NutritionalPlanWhereInput[]
    id?: IntFilter<"NutritionalPlan"> | number
    user_id?: StringFilter<"NutritionalPlan"> | string
    name?: StringFilter<"NutritionalPlan"> | string
    daily_calories?: IntFilter<"NutritionalPlan"> | number
    is_active?: BoolFilter<"NutritionalPlan"> | boolean
    created_at?: DateTimeFilter<"NutritionalPlan"> | Date | string
    updated_at?: DateTimeFilter<"NutritionalPlan"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    meals?: PlanMealListRelationFilter
    meal_registrations?: MealRegistrationListRelationFilter
    daily_scores?: DailyScoreListRelationFilter
  }

  export type NutritionalPlanOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    daily_calories?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: UserOrderByWithRelationInput
    meals?: PlanMealOrderByRelationAggregateInput
    meal_registrations?: MealRegistrationOrderByRelationAggregateInput
    daily_scores?: DailyScoreOrderByRelationAggregateInput
  }

  export type NutritionalPlanWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NutritionalPlanWhereInput | NutritionalPlanWhereInput[]
    OR?: NutritionalPlanWhereInput[]
    NOT?: NutritionalPlanWhereInput | NutritionalPlanWhereInput[]
    user_id?: StringFilter<"NutritionalPlan"> | string
    name?: StringFilter<"NutritionalPlan"> | string
    daily_calories?: IntFilter<"NutritionalPlan"> | number
    is_active?: BoolFilter<"NutritionalPlan"> | boolean
    created_at?: DateTimeFilter<"NutritionalPlan"> | Date | string
    updated_at?: DateTimeFilter<"NutritionalPlan"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    meals?: PlanMealListRelationFilter
    meal_registrations?: MealRegistrationListRelationFilter
    daily_scores?: DailyScoreListRelationFilter
  }, "id">

  export type NutritionalPlanOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    daily_calories?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: NutritionalPlanCountOrderByAggregateInput
    _avg?: NutritionalPlanAvgOrderByAggregateInput
    _max?: NutritionalPlanMaxOrderByAggregateInput
    _min?: NutritionalPlanMinOrderByAggregateInput
    _sum?: NutritionalPlanSumOrderByAggregateInput
  }

  export type NutritionalPlanScalarWhereWithAggregatesInput = {
    AND?: NutritionalPlanScalarWhereWithAggregatesInput | NutritionalPlanScalarWhereWithAggregatesInput[]
    OR?: NutritionalPlanScalarWhereWithAggregatesInput[]
    NOT?: NutritionalPlanScalarWhereWithAggregatesInput | NutritionalPlanScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"NutritionalPlan"> | number
    user_id?: StringWithAggregatesFilter<"NutritionalPlan"> | string
    name?: StringWithAggregatesFilter<"NutritionalPlan"> | string
    daily_calories?: IntWithAggregatesFilter<"NutritionalPlan"> | number
    is_active?: BoolWithAggregatesFilter<"NutritionalPlan"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"NutritionalPlan"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"NutritionalPlan"> | Date | string
  }

  export type PlanMealWhereInput = {
    AND?: PlanMealWhereInput | PlanMealWhereInput[]
    OR?: PlanMealWhereInput[]
    NOT?: PlanMealWhereInput | PlanMealWhereInput[]
    id?: IntFilter<"PlanMeal"> | number
    plan_id?: IntFilter<"PlanMeal"> | number
    meal_name?: StringFilter<"PlanMeal"> | string
    suggested_time?: StringNullableFilter<"PlanMeal"> | string | null
    target_calories?: IntNullableFilter<"PlanMeal"> | number | null
    allowed_foods?: StringNullableFilter<"PlanMeal"> | string | null
    notes?: StringNullableFilter<"PlanMeal"> | string | null
    plan?: XOR<NutritionalPlanScalarRelationFilter, NutritionalPlanWhereInput>
  }

  export type PlanMealOrderByWithRelationInput = {
    id?: SortOrder
    plan_id?: SortOrder
    meal_name?: SortOrder
    suggested_time?: SortOrderInput | SortOrder
    target_calories?: SortOrderInput | SortOrder
    allowed_foods?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    plan?: NutritionalPlanOrderByWithRelationInput
  }

  export type PlanMealWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PlanMealWhereInput | PlanMealWhereInput[]
    OR?: PlanMealWhereInput[]
    NOT?: PlanMealWhereInput | PlanMealWhereInput[]
    plan_id?: IntFilter<"PlanMeal"> | number
    meal_name?: StringFilter<"PlanMeal"> | string
    suggested_time?: StringNullableFilter<"PlanMeal"> | string | null
    target_calories?: IntNullableFilter<"PlanMeal"> | number | null
    allowed_foods?: StringNullableFilter<"PlanMeal"> | string | null
    notes?: StringNullableFilter<"PlanMeal"> | string | null
    plan?: XOR<NutritionalPlanScalarRelationFilter, NutritionalPlanWhereInput>
  }, "id">

  export type PlanMealOrderByWithAggregationInput = {
    id?: SortOrder
    plan_id?: SortOrder
    meal_name?: SortOrder
    suggested_time?: SortOrderInput | SortOrder
    target_calories?: SortOrderInput | SortOrder
    allowed_foods?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    _count?: PlanMealCountOrderByAggregateInput
    _avg?: PlanMealAvgOrderByAggregateInput
    _max?: PlanMealMaxOrderByAggregateInput
    _min?: PlanMealMinOrderByAggregateInput
    _sum?: PlanMealSumOrderByAggregateInput
  }

  export type PlanMealScalarWhereWithAggregatesInput = {
    AND?: PlanMealScalarWhereWithAggregatesInput | PlanMealScalarWhereWithAggregatesInput[]
    OR?: PlanMealScalarWhereWithAggregatesInput[]
    NOT?: PlanMealScalarWhereWithAggregatesInput | PlanMealScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PlanMeal"> | number
    plan_id?: IntWithAggregatesFilter<"PlanMeal"> | number
    meal_name?: StringWithAggregatesFilter<"PlanMeal"> | string
    suggested_time?: StringNullableWithAggregatesFilter<"PlanMeal"> | string | null
    target_calories?: IntNullableWithAggregatesFilter<"PlanMeal"> | number | null
    allowed_foods?: StringNullableWithAggregatesFilter<"PlanMeal"> | string | null
    notes?: StringNullableWithAggregatesFilter<"PlanMeal"> | string | null
  }

  export type MealRegistrationWhereInput = {
    AND?: MealRegistrationWhereInput | MealRegistrationWhereInput[]
    OR?: MealRegistrationWhereInput[]
    NOT?: MealRegistrationWhereInput | MealRegistrationWhereInput[]
    id?: IntFilter<"MealRegistration"> | number
    user_id?: StringFilter<"MealRegistration"> | string
    plan_id?: IntNullableFilter<"MealRegistration"> | number | null
    meal_name?: StringFilter<"MealRegistration"> | string
    photo_url?: StringFilter<"MealRegistration"> | string
    ai_analysis?: JsonNullableFilter<"MealRegistration">
    detected_foods?: JsonNullableFilter<"MealRegistration">
    estimated_calories?: FloatNullableFilter<"MealRegistration"> | number | null
    estimated_protein?: FloatNullableFilter<"MealRegistration"> | number | null
    estimated_carbs?: FloatNullableFilter<"MealRegistration"> | number | null
    estimated_fats?: FloatNullableFilter<"MealRegistration"> | number | null
    meal_score?: IntNullableFilter<"MealRegistration"> | number | null
    adherence_tags?: JsonNullableFilter<"MealRegistration">
    ai_message?: StringNullableFilter<"MealRegistration"> | string | null
    registered_at?: DateTimeFilter<"MealRegistration"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    plan?: XOR<NutritionalPlanNullableScalarRelationFilter, NutritionalPlanWhereInput> | null
  }

  export type MealRegistrationOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    plan_id?: SortOrderInput | SortOrder
    meal_name?: SortOrder
    photo_url?: SortOrder
    ai_analysis?: SortOrderInput | SortOrder
    detected_foods?: SortOrderInput | SortOrder
    estimated_calories?: SortOrderInput | SortOrder
    estimated_protein?: SortOrderInput | SortOrder
    estimated_carbs?: SortOrderInput | SortOrder
    estimated_fats?: SortOrderInput | SortOrder
    meal_score?: SortOrderInput | SortOrder
    adherence_tags?: SortOrderInput | SortOrder
    ai_message?: SortOrderInput | SortOrder
    registered_at?: SortOrder
    user?: UserOrderByWithRelationInput
    plan?: NutritionalPlanOrderByWithRelationInput
  }

  export type MealRegistrationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MealRegistrationWhereInput | MealRegistrationWhereInput[]
    OR?: MealRegistrationWhereInput[]
    NOT?: MealRegistrationWhereInput | MealRegistrationWhereInput[]
    user_id?: StringFilter<"MealRegistration"> | string
    plan_id?: IntNullableFilter<"MealRegistration"> | number | null
    meal_name?: StringFilter<"MealRegistration"> | string
    photo_url?: StringFilter<"MealRegistration"> | string
    ai_analysis?: JsonNullableFilter<"MealRegistration">
    detected_foods?: JsonNullableFilter<"MealRegistration">
    estimated_calories?: FloatNullableFilter<"MealRegistration"> | number | null
    estimated_protein?: FloatNullableFilter<"MealRegistration"> | number | null
    estimated_carbs?: FloatNullableFilter<"MealRegistration"> | number | null
    estimated_fats?: FloatNullableFilter<"MealRegistration"> | number | null
    meal_score?: IntNullableFilter<"MealRegistration"> | number | null
    adherence_tags?: JsonNullableFilter<"MealRegistration">
    ai_message?: StringNullableFilter<"MealRegistration"> | string | null
    registered_at?: DateTimeFilter<"MealRegistration"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    plan?: XOR<NutritionalPlanNullableScalarRelationFilter, NutritionalPlanWhereInput> | null
  }, "id">

  export type MealRegistrationOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    plan_id?: SortOrderInput | SortOrder
    meal_name?: SortOrder
    photo_url?: SortOrder
    ai_analysis?: SortOrderInput | SortOrder
    detected_foods?: SortOrderInput | SortOrder
    estimated_calories?: SortOrderInput | SortOrder
    estimated_protein?: SortOrderInput | SortOrder
    estimated_carbs?: SortOrderInput | SortOrder
    estimated_fats?: SortOrderInput | SortOrder
    meal_score?: SortOrderInput | SortOrder
    adherence_tags?: SortOrderInput | SortOrder
    ai_message?: SortOrderInput | SortOrder
    registered_at?: SortOrder
    _count?: MealRegistrationCountOrderByAggregateInput
    _avg?: MealRegistrationAvgOrderByAggregateInput
    _max?: MealRegistrationMaxOrderByAggregateInput
    _min?: MealRegistrationMinOrderByAggregateInput
    _sum?: MealRegistrationSumOrderByAggregateInput
  }

  export type MealRegistrationScalarWhereWithAggregatesInput = {
    AND?: MealRegistrationScalarWhereWithAggregatesInput | MealRegistrationScalarWhereWithAggregatesInput[]
    OR?: MealRegistrationScalarWhereWithAggregatesInput[]
    NOT?: MealRegistrationScalarWhereWithAggregatesInput | MealRegistrationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MealRegistration"> | number
    user_id?: StringWithAggregatesFilter<"MealRegistration"> | string
    plan_id?: IntNullableWithAggregatesFilter<"MealRegistration"> | number | null
    meal_name?: StringWithAggregatesFilter<"MealRegistration"> | string
    photo_url?: StringWithAggregatesFilter<"MealRegistration"> | string
    ai_analysis?: JsonNullableWithAggregatesFilter<"MealRegistration">
    detected_foods?: JsonNullableWithAggregatesFilter<"MealRegistration">
    estimated_calories?: FloatNullableWithAggregatesFilter<"MealRegistration"> | number | null
    estimated_protein?: FloatNullableWithAggregatesFilter<"MealRegistration"> | number | null
    estimated_carbs?: FloatNullableWithAggregatesFilter<"MealRegistration"> | number | null
    estimated_fats?: FloatNullableWithAggregatesFilter<"MealRegistration"> | number | null
    meal_score?: IntNullableWithAggregatesFilter<"MealRegistration"> | number | null
    adherence_tags?: JsonNullableWithAggregatesFilter<"MealRegistration">
    ai_message?: StringNullableWithAggregatesFilter<"MealRegistration"> | string | null
    registered_at?: DateTimeWithAggregatesFilter<"MealRegistration"> | Date | string
  }

  export type DailyScoreWhereInput = {
    AND?: DailyScoreWhereInput | DailyScoreWhereInput[]
    OR?: DailyScoreWhereInput[]
    NOT?: DailyScoreWhereInput | DailyScoreWhereInput[]
    id?: IntFilter<"DailyScore"> | number
    user_id?: StringFilter<"DailyScore"> | string
    plan_id?: IntNullableFilter<"DailyScore"> | number | null
    date?: DateTimeFilter<"DailyScore"> | Date | string
    total_calories?: FloatNullableFilter<"DailyScore"> | number | null
    target_calories?: IntNullableFilter<"DailyScore"> | number | null
    average_meal_score?: IntNullableFilter<"DailyScore"> | number | null
    daily_score?: IntNullableFilter<"DailyScore"> | number | null
    streak_days?: IntNullableFilter<"DailyScore"> | number | null
    status?: StringNullableFilter<"DailyScore"> | string | null
    created_at?: DateTimeFilter<"DailyScore"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    plan?: XOR<NutritionalPlanNullableScalarRelationFilter, NutritionalPlanWhereInput> | null
  }

  export type DailyScoreOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    plan_id?: SortOrderInput | SortOrder
    date?: SortOrder
    total_calories?: SortOrderInput | SortOrder
    target_calories?: SortOrderInput | SortOrder
    average_meal_score?: SortOrderInput | SortOrder
    daily_score?: SortOrderInput | SortOrder
    streak_days?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    created_at?: SortOrder
    user?: UserOrderByWithRelationInput
    plan?: NutritionalPlanOrderByWithRelationInput
  }

  export type DailyScoreWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    user_id_date?: DailyScoreUser_idDateCompoundUniqueInput
    AND?: DailyScoreWhereInput | DailyScoreWhereInput[]
    OR?: DailyScoreWhereInput[]
    NOT?: DailyScoreWhereInput | DailyScoreWhereInput[]
    user_id?: StringFilter<"DailyScore"> | string
    plan_id?: IntNullableFilter<"DailyScore"> | number | null
    date?: DateTimeFilter<"DailyScore"> | Date | string
    total_calories?: FloatNullableFilter<"DailyScore"> | number | null
    target_calories?: IntNullableFilter<"DailyScore"> | number | null
    average_meal_score?: IntNullableFilter<"DailyScore"> | number | null
    daily_score?: IntNullableFilter<"DailyScore"> | number | null
    streak_days?: IntNullableFilter<"DailyScore"> | number | null
    status?: StringNullableFilter<"DailyScore"> | string | null
    created_at?: DateTimeFilter<"DailyScore"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    plan?: XOR<NutritionalPlanNullableScalarRelationFilter, NutritionalPlanWhereInput> | null
  }, "id" | "user_id_date">

  export type DailyScoreOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    plan_id?: SortOrderInput | SortOrder
    date?: SortOrder
    total_calories?: SortOrderInput | SortOrder
    target_calories?: SortOrderInput | SortOrder
    average_meal_score?: SortOrderInput | SortOrder
    daily_score?: SortOrderInput | SortOrder
    streak_days?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: DailyScoreCountOrderByAggregateInput
    _avg?: DailyScoreAvgOrderByAggregateInput
    _max?: DailyScoreMaxOrderByAggregateInput
    _min?: DailyScoreMinOrderByAggregateInput
    _sum?: DailyScoreSumOrderByAggregateInput
  }

  export type DailyScoreScalarWhereWithAggregatesInput = {
    AND?: DailyScoreScalarWhereWithAggregatesInput | DailyScoreScalarWhereWithAggregatesInput[]
    OR?: DailyScoreScalarWhereWithAggregatesInput[]
    NOT?: DailyScoreScalarWhereWithAggregatesInput | DailyScoreScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DailyScore"> | number
    user_id?: StringWithAggregatesFilter<"DailyScore"> | string
    plan_id?: IntNullableWithAggregatesFilter<"DailyScore"> | number | null
    date?: DateTimeWithAggregatesFilter<"DailyScore"> | Date | string
    total_calories?: FloatNullableWithAggregatesFilter<"DailyScore"> | number | null
    target_calories?: IntNullableWithAggregatesFilter<"DailyScore"> | number | null
    average_meal_score?: IntNullableWithAggregatesFilter<"DailyScore"> | number | null
    daily_score?: IntNullableWithAggregatesFilter<"DailyScore"> | number | null
    streak_days?: IntNullableWithAggregatesFilter<"DailyScore"> | number | null
    status?: StringNullableWithAggregatesFilter<"DailyScore"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"DailyScore"> | Date | string
  }

  export type UserGamificationWhereInput = {
    AND?: UserGamificationWhereInput | UserGamificationWhereInput[]
    OR?: UserGamificationWhereInput[]
    NOT?: UserGamificationWhereInput | UserGamificationWhereInput[]
    id?: IntFilter<"UserGamification"> | number
    user_id?: StringFilter<"UserGamification"> | string
    total_xp?: IntFilter<"UserGamification"> | number
    current_level?: IntFilter<"UserGamification"> | number
    total_meals_registered?: IntFilter<"UserGamification"> | number
    current_streak?: IntFilter<"UserGamification"> | number
    longest_streak?: IntFilter<"UserGamification"> | number
    badges?: JsonNullableFilter<"UserGamification">
    updated_at?: DateTimeFilter<"UserGamification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserGamificationOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    total_xp?: SortOrder
    current_level?: SortOrder
    total_meals_registered?: SortOrder
    current_streak?: SortOrder
    longest_streak?: SortOrder
    badges?: SortOrderInput | SortOrder
    updated_at?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserGamificationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    user_id?: string
    AND?: UserGamificationWhereInput | UserGamificationWhereInput[]
    OR?: UserGamificationWhereInput[]
    NOT?: UserGamificationWhereInput | UserGamificationWhereInput[]
    total_xp?: IntFilter<"UserGamification"> | number
    current_level?: IntFilter<"UserGamification"> | number
    total_meals_registered?: IntFilter<"UserGamification"> | number
    current_streak?: IntFilter<"UserGamification"> | number
    longest_streak?: IntFilter<"UserGamification"> | number
    badges?: JsonNullableFilter<"UserGamification">
    updated_at?: DateTimeFilter<"UserGamification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "user_id">

  export type UserGamificationOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    total_xp?: SortOrder
    current_level?: SortOrder
    total_meals_registered?: SortOrder
    current_streak?: SortOrder
    longest_streak?: SortOrder
    badges?: SortOrderInput | SortOrder
    updated_at?: SortOrder
    _count?: UserGamificationCountOrderByAggregateInput
    _avg?: UserGamificationAvgOrderByAggregateInput
    _max?: UserGamificationMaxOrderByAggregateInput
    _min?: UserGamificationMinOrderByAggregateInput
    _sum?: UserGamificationSumOrderByAggregateInput
  }

  export type UserGamificationScalarWhereWithAggregatesInput = {
    AND?: UserGamificationScalarWhereWithAggregatesInput | UserGamificationScalarWhereWithAggregatesInput[]
    OR?: UserGamificationScalarWhereWithAggregatesInput[]
    NOT?: UserGamificationScalarWhereWithAggregatesInput | UserGamificationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserGamification"> | number
    user_id?: StringWithAggregatesFilter<"UserGamification"> | string
    total_xp?: IntWithAggregatesFilter<"UserGamification"> | number
    current_level?: IntWithAggregatesFilter<"UserGamification"> | number
    total_meals_registered?: IntWithAggregatesFilter<"UserGamification"> | number
    current_streak?: IntWithAggregatesFilter<"UserGamification"> | number
    longest_streak?: IntWithAggregatesFilter<"UserGamification"> | number
    badges?: JsonNullableWithAggregatesFilter<"UserGamification">
    updated_at?: DateTimeWithAggregatesFilter<"UserGamification"> | Date | string
  }

  export type ChallengeWhereInput = {
    AND?: ChallengeWhereInput | ChallengeWhereInput[]
    OR?: ChallengeWhereInput[]
    NOT?: ChallengeWhereInput | ChallengeWhereInput[]
    id?: IntFilter<"Challenge"> | number
    creator_id?: StringFilter<"Challenge"> | string
    name?: StringFilter<"Challenge"> | string
    description?: StringNullableFilter<"Challenge"> | string | null
    duration_days?: IntFilter<"Challenge"> | number
    min_score?: IntFilter<"Challenge"> | number
    invite_code?: StringFilter<"Challenge"> | string
    start_date?: DateTimeNullableFilter<"Challenge"> | Date | string | null
    end_date?: DateTimeNullableFilter<"Challenge"> | Date | string | null
    created_at?: DateTimeFilter<"Challenge"> | Date | string
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    participants?: ChallengeParticipantListRelationFilter
  }

  export type ChallengeOrderByWithRelationInput = {
    id?: SortOrder
    creator_id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    duration_days?: SortOrder
    min_score?: SortOrder
    invite_code?: SortOrder
    start_date?: SortOrderInput | SortOrder
    end_date?: SortOrderInput | SortOrder
    created_at?: SortOrder
    creator?: UserOrderByWithRelationInput
    participants?: ChallengeParticipantOrderByRelationAggregateInput
  }

  export type ChallengeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    invite_code?: string
    AND?: ChallengeWhereInput | ChallengeWhereInput[]
    OR?: ChallengeWhereInput[]
    NOT?: ChallengeWhereInput | ChallengeWhereInput[]
    creator_id?: StringFilter<"Challenge"> | string
    name?: StringFilter<"Challenge"> | string
    description?: StringNullableFilter<"Challenge"> | string | null
    duration_days?: IntFilter<"Challenge"> | number
    min_score?: IntFilter<"Challenge"> | number
    start_date?: DateTimeNullableFilter<"Challenge"> | Date | string | null
    end_date?: DateTimeNullableFilter<"Challenge"> | Date | string | null
    created_at?: DateTimeFilter<"Challenge"> | Date | string
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    participants?: ChallengeParticipantListRelationFilter
  }, "id" | "invite_code">

  export type ChallengeOrderByWithAggregationInput = {
    id?: SortOrder
    creator_id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    duration_days?: SortOrder
    min_score?: SortOrder
    invite_code?: SortOrder
    start_date?: SortOrderInput | SortOrder
    end_date?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: ChallengeCountOrderByAggregateInput
    _avg?: ChallengeAvgOrderByAggregateInput
    _max?: ChallengeMaxOrderByAggregateInput
    _min?: ChallengeMinOrderByAggregateInput
    _sum?: ChallengeSumOrderByAggregateInput
  }

  export type ChallengeScalarWhereWithAggregatesInput = {
    AND?: ChallengeScalarWhereWithAggregatesInput | ChallengeScalarWhereWithAggregatesInput[]
    OR?: ChallengeScalarWhereWithAggregatesInput[]
    NOT?: ChallengeScalarWhereWithAggregatesInput | ChallengeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Challenge"> | number
    creator_id?: StringWithAggregatesFilter<"Challenge"> | string
    name?: StringWithAggregatesFilter<"Challenge"> | string
    description?: StringNullableWithAggregatesFilter<"Challenge"> | string | null
    duration_days?: IntWithAggregatesFilter<"Challenge"> | number
    min_score?: IntWithAggregatesFilter<"Challenge"> | number
    invite_code?: StringWithAggregatesFilter<"Challenge"> | string
    start_date?: DateTimeNullableWithAggregatesFilter<"Challenge"> | Date | string | null
    end_date?: DateTimeNullableWithAggregatesFilter<"Challenge"> | Date | string | null
    created_at?: DateTimeWithAggregatesFilter<"Challenge"> | Date | string
  }

  export type ChallengeParticipantWhereInput = {
    AND?: ChallengeParticipantWhereInput | ChallengeParticipantWhereInput[]
    OR?: ChallengeParticipantWhereInput[]
    NOT?: ChallengeParticipantWhereInput | ChallengeParticipantWhereInput[]
    id?: IntFilter<"ChallengeParticipant"> | number
    challenge_id?: IntFilter<"ChallengeParticipant"> | number
    user_id?: StringFilter<"ChallengeParticipant"> | string
    average_score?: FloatNullableFilter<"ChallengeParticipant"> | number | null
    current_streak?: IntNullableFilter<"ChallengeParticipant"> | number | null
    badges_earned?: JsonNullableFilter<"ChallengeParticipant">
    joined_at?: DateTimeFilter<"ChallengeParticipant"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    challenge?: XOR<ChallengeScalarRelationFilter, ChallengeWhereInput>
  }

  export type ChallengeParticipantOrderByWithRelationInput = {
    id?: SortOrder
    challenge_id?: SortOrder
    user_id?: SortOrder
    average_score?: SortOrderInput | SortOrder
    current_streak?: SortOrderInput | SortOrder
    badges_earned?: SortOrderInput | SortOrder
    joined_at?: SortOrder
    user?: UserOrderByWithRelationInput
    challenge?: ChallengeOrderByWithRelationInput
  }

  export type ChallengeParticipantWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    challenge_id_user_id?: ChallengeParticipantChallenge_idUser_idCompoundUniqueInput
    AND?: ChallengeParticipantWhereInput | ChallengeParticipantWhereInput[]
    OR?: ChallengeParticipantWhereInput[]
    NOT?: ChallengeParticipantWhereInput | ChallengeParticipantWhereInput[]
    challenge_id?: IntFilter<"ChallengeParticipant"> | number
    user_id?: StringFilter<"ChallengeParticipant"> | string
    average_score?: FloatNullableFilter<"ChallengeParticipant"> | number | null
    current_streak?: IntNullableFilter<"ChallengeParticipant"> | number | null
    badges_earned?: JsonNullableFilter<"ChallengeParticipant">
    joined_at?: DateTimeFilter<"ChallengeParticipant"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    challenge?: XOR<ChallengeScalarRelationFilter, ChallengeWhereInput>
  }, "id" | "challenge_id_user_id">

  export type ChallengeParticipantOrderByWithAggregationInput = {
    id?: SortOrder
    challenge_id?: SortOrder
    user_id?: SortOrder
    average_score?: SortOrderInput | SortOrder
    current_streak?: SortOrderInput | SortOrder
    badges_earned?: SortOrderInput | SortOrder
    joined_at?: SortOrder
    _count?: ChallengeParticipantCountOrderByAggregateInput
    _avg?: ChallengeParticipantAvgOrderByAggregateInput
    _max?: ChallengeParticipantMaxOrderByAggregateInput
    _min?: ChallengeParticipantMinOrderByAggregateInput
    _sum?: ChallengeParticipantSumOrderByAggregateInput
  }

  export type ChallengeParticipantScalarWhereWithAggregatesInput = {
    AND?: ChallengeParticipantScalarWhereWithAggregatesInput | ChallengeParticipantScalarWhereWithAggregatesInput[]
    OR?: ChallengeParticipantScalarWhereWithAggregatesInput[]
    NOT?: ChallengeParticipantScalarWhereWithAggregatesInput | ChallengeParticipantScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ChallengeParticipant"> | number
    challenge_id?: IntWithAggregatesFilter<"ChallengeParticipant"> | number
    user_id?: StringWithAggregatesFilter<"ChallengeParticipant"> | string
    average_score?: FloatNullableWithAggregatesFilter<"ChallengeParticipant"> | number | null
    current_streak?: IntNullableWithAggregatesFilter<"ChallengeParticipant"> | number | null
    badges_earned?: JsonNullableWithAggregatesFilter<"ChallengeParticipant">
    joined_at?: DateTimeWithAggregatesFilter<"ChallengeParticipant"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password_hash: string
    name?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    nutritional_plans?: NutritionalPlanCreateNestedManyWithoutUserInput
    meal_registrations?: MealRegistrationCreateNestedManyWithoutUserInput
    daily_scores?: DailyScoreCreateNestedManyWithoutUserInput
    gamification?: UserGamificationCreateNestedOneWithoutUserInput
    challenges_created?: ChallengeCreateNestedManyWithoutCreatorInput
    challenge_participations?: ChallengeParticipantCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password_hash: string
    name?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    nutritional_plans?: NutritionalPlanUncheckedCreateNestedManyWithoutUserInput
    meal_registrations?: MealRegistrationUncheckedCreateNestedManyWithoutUserInput
    daily_scores?: DailyScoreUncheckedCreateNestedManyWithoutUserInput
    gamification?: UserGamificationUncheckedCreateNestedOneWithoutUserInput
    challenges_created?: ChallengeUncheckedCreateNestedManyWithoutCreatorInput
    challenge_participations?: ChallengeParticipantUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    nutritional_plans?: NutritionalPlanUpdateManyWithoutUserNestedInput
    meal_registrations?: MealRegistrationUpdateManyWithoutUserNestedInput
    daily_scores?: DailyScoreUpdateManyWithoutUserNestedInput
    gamification?: UserGamificationUpdateOneWithoutUserNestedInput
    challenges_created?: ChallengeUpdateManyWithoutCreatorNestedInput
    challenge_participations?: ChallengeParticipantUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    nutritional_plans?: NutritionalPlanUncheckedUpdateManyWithoutUserNestedInput
    meal_registrations?: MealRegistrationUncheckedUpdateManyWithoutUserNestedInput
    daily_scores?: DailyScoreUncheckedUpdateManyWithoutUserNestedInput
    gamification?: UserGamificationUncheckedUpdateOneWithoutUserNestedInput
    challenges_created?: ChallengeUncheckedUpdateManyWithoutCreatorNestedInput
    challenge_participations?: ChallengeParticipantUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password_hash: string
    name?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NutritionalPlanCreateInput = {
    name: string
    daily_calories: number
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutNutritional_plansInput
    meals?: PlanMealCreateNestedManyWithoutPlanInput
    meal_registrations?: MealRegistrationCreateNestedManyWithoutPlanInput
    daily_scores?: DailyScoreCreateNestedManyWithoutPlanInput
  }

  export type NutritionalPlanUncheckedCreateInput = {
    id?: number
    user_id: string
    name: string
    daily_calories: number
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    meals?: PlanMealUncheckedCreateNestedManyWithoutPlanInput
    meal_registrations?: MealRegistrationUncheckedCreateNestedManyWithoutPlanInput
    daily_scores?: DailyScoreUncheckedCreateNestedManyWithoutPlanInput
  }

  export type NutritionalPlanUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    daily_calories?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNutritional_plansNestedInput
    meals?: PlanMealUpdateManyWithoutPlanNestedInput
    meal_registrations?: MealRegistrationUpdateManyWithoutPlanNestedInput
    daily_scores?: DailyScoreUpdateManyWithoutPlanNestedInput
  }

  export type NutritionalPlanUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    daily_calories?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    meals?: PlanMealUncheckedUpdateManyWithoutPlanNestedInput
    meal_registrations?: MealRegistrationUncheckedUpdateManyWithoutPlanNestedInput
    daily_scores?: DailyScoreUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type NutritionalPlanCreateManyInput = {
    id?: number
    user_id: string
    name: string
    daily_calories: number
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type NutritionalPlanUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    daily_calories?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NutritionalPlanUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    daily_calories?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanMealCreateInput = {
    meal_name: string
    suggested_time?: string | null
    target_calories?: number | null
    allowed_foods?: string | null
    notes?: string | null
    plan: NutritionalPlanCreateNestedOneWithoutMealsInput
  }

  export type PlanMealUncheckedCreateInput = {
    id?: number
    plan_id: number
    meal_name: string
    suggested_time?: string | null
    target_calories?: number | null
    allowed_foods?: string | null
    notes?: string | null
  }

  export type PlanMealUpdateInput = {
    meal_name?: StringFieldUpdateOperationsInput | string
    suggested_time?: NullableStringFieldUpdateOperationsInput | string | null
    target_calories?: NullableIntFieldUpdateOperationsInput | number | null
    allowed_foods?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: NutritionalPlanUpdateOneRequiredWithoutMealsNestedInput
  }

  export type PlanMealUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    plan_id?: IntFieldUpdateOperationsInput | number
    meal_name?: StringFieldUpdateOperationsInput | string
    suggested_time?: NullableStringFieldUpdateOperationsInput | string | null
    target_calories?: NullableIntFieldUpdateOperationsInput | number | null
    allowed_foods?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlanMealCreateManyInput = {
    id?: number
    plan_id: number
    meal_name: string
    suggested_time?: string | null
    target_calories?: number | null
    allowed_foods?: string | null
    notes?: string | null
  }

  export type PlanMealUpdateManyMutationInput = {
    meal_name?: StringFieldUpdateOperationsInput | string
    suggested_time?: NullableStringFieldUpdateOperationsInput | string | null
    target_calories?: NullableIntFieldUpdateOperationsInput | number | null
    allowed_foods?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlanMealUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    plan_id?: IntFieldUpdateOperationsInput | number
    meal_name?: StringFieldUpdateOperationsInput | string
    suggested_time?: NullableStringFieldUpdateOperationsInput | string | null
    target_calories?: NullableIntFieldUpdateOperationsInput | number | null
    allowed_foods?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MealRegistrationCreateInput = {
    meal_name: string
    photo_url: string
    ai_analysis?: NullableJsonNullValueInput | InputJsonValue
    detected_foods?: NullableJsonNullValueInput | InputJsonValue
    estimated_calories?: number | null
    estimated_protein?: number | null
    estimated_carbs?: number | null
    estimated_fats?: number | null
    meal_score?: number | null
    adherence_tags?: NullableJsonNullValueInput | InputJsonValue
    ai_message?: string | null
    registered_at?: Date | string
    user: UserCreateNestedOneWithoutMeal_registrationsInput
    plan?: NutritionalPlanCreateNestedOneWithoutMeal_registrationsInput
  }

  export type MealRegistrationUncheckedCreateInput = {
    id?: number
    user_id: string
    plan_id?: number | null
    meal_name: string
    photo_url: string
    ai_analysis?: NullableJsonNullValueInput | InputJsonValue
    detected_foods?: NullableJsonNullValueInput | InputJsonValue
    estimated_calories?: number | null
    estimated_protein?: number | null
    estimated_carbs?: number | null
    estimated_fats?: number | null
    meal_score?: number | null
    adherence_tags?: NullableJsonNullValueInput | InputJsonValue
    ai_message?: string | null
    registered_at?: Date | string
  }

  export type MealRegistrationUpdateInput = {
    meal_name?: StringFieldUpdateOperationsInput | string
    photo_url?: StringFieldUpdateOperationsInput | string
    ai_analysis?: NullableJsonNullValueInput | InputJsonValue
    detected_foods?: NullableJsonNullValueInput | InputJsonValue
    estimated_calories?: NullableFloatFieldUpdateOperationsInput | number | null
    estimated_protein?: NullableFloatFieldUpdateOperationsInput | number | null
    estimated_carbs?: NullableFloatFieldUpdateOperationsInput | number | null
    estimated_fats?: NullableFloatFieldUpdateOperationsInput | number | null
    meal_score?: NullableIntFieldUpdateOperationsInput | number | null
    adherence_tags?: NullableJsonNullValueInput | InputJsonValue
    ai_message?: NullableStringFieldUpdateOperationsInput | string | null
    registered_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMeal_registrationsNestedInput
    plan?: NutritionalPlanUpdateOneWithoutMeal_registrationsNestedInput
  }

  export type MealRegistrationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    plan_id?: NullableIntFieldUpdateOperationsInput | number | null
    meal_name?: StringFieldUpdateOperationsInput | string
    photo_url?: StringFieldUpdateOperationsInput | string
    ai_analysis?: NullableJsonNullValueInput | InputJsonValue
    detected_foods?: NullableJsonNullValueInput | InputJsonValue
    estimated_calories?: NullableFloatFieldUpdateOperationsInput | number | null
    estimated_protein?: NullableFloatFieldUpdateOperationsInput | number | null
    estimated_carbs?: NullableFloatFieldUpdateOperationsInput | number | null
    estimated_fats?: NullableFloatFieldUpdateOperationsInput | number | null
    meal_score?: NullableIntFieldUpdateOperationsInput | number | null
    adherence_tags?: NullableJsonNullValueInput | InputJsonValue
    ai_message?: NullableStringFieldUpdateOperationsInput | string | null
    registered_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MealRegistrationCreateManyInput = {
    id?: number
    user_id: string
    plan_id?: number | null
    meal_name: string
    photo_url: string
    ai_analysis?: NullableJsonNullValueInput | InputJsonValue
    detected_foods?: NullableJsonNullValueInput | InputJsonValue
    estimated_calories?: number | null
    estimated_protein?: number | null
    estimated_carbs?: number | null
    estimated_fats?: number | null
    meal_score?: number | null
    adherence_tags?: NullableJsonNullValueInput | InputJsonValue
    ai_message?: string | null
    registered_at?: Date | string
  }

  export type MealRegistrationUpdateManyMutationInput = {
    meal_name?: StringFieldUpdateOperationsInput | string
    photo_url?: StringFieldUpdateOperationsInput | string
    ai_analysis?: NullableJsonNullValueInput | InputJsonValue
    detected_foods?: NullableJsonNullValueInput | InputJsonValue
    estimated_calories?: NullableFloatFieldUpdateOperationsInput | number | null
    estimated_protein?: NullableFloatFieldUpdateOperationsInput | number | null
    estimated_carbs?: NullableFloatFieldUpdateOperationsInput | number | null
    estimated_fats?: NullableFloatFieldUpdateOperationsInput | number | null
    meal_score?: NullableIntFieldUpdateOperationsInput | number | null
    adherence_tags?: NullableJsonNullValueInput | InputJsonValue
    ai_message?: NullableStringFieldUpdateOperationsInput | string | null
    registered_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MealRegistrationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    plan_id?: NullableIntFieldUpdateOperationsInput | number | null
    meal_name?: StringFieldUpdateOperationsInput | string
    photo_url?: StringFieldUpdateOperationsInput | string
    ai_analysis?: NullableJsonNullValueInput | InputJsonValue
    detected_foods?: NullableJsonNullValueInput | InputJsonValue
    estimated_calories?: NullableFloatFieldUpdateOperationsInput | number | null
    estimated_protein?: NullableFloatFieldUpdateOperationsInput | number | null
    estimated_carbs?: NullableFloatFieldUpdateOperationsInput | number | null
    estimated_fats?: NullableFloatFieldUpdateOperationsInput | number | null
    meal_score?: NullableIntFieldUpdateOperationsInput | number | null
    adherence_tags?: NullableJsonNullValueInput | InputJsonValue
    ai_message?: NullableStringFieldUpdateOperationsInput | string | null
    registered_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyScoreCreateInput = {
    date: Date | string
    total_calories?: number | null
    target_calories?: number | null
    average_meal_score?: number | null
    daily_score?: number | null
    streak_days?: number | null
    status?: string | null
    created_at?: Date | string
    user: UserCreateNestedOneWithoutDaily_scoresInput
    plan?: NutritionalPlanCreateNestedOneWithoutDaily_scoresInput
  }

  export type DailyScoreUncheckedCreateInput = {
    id?: number
    user_id: string
    plan_id?: number | null
    date: Date | string
    total_calories?: number | null
    target_calories?: number | null
    average_meal_score?: number | null
    daily_score?: number | null
    streak_days?: number | null
    status?: string | null
    created_at?: Date | string
  }

  export type DailyScoreUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    total_calories?: NullableFloatFieldUpdateOperationsInput | number | null
    target_calories?: NullableIntFieldUpdateOperationsInput | number | null
    average_meal_score?: NullableIntFieldUpdateOperationsInput | number | null
    daily_score?: NullableIntFieldUpdateOperationsInput | number | null
    streak_days?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDaily_scoresNestedInput
    plan?: NutritionalPlanUpdateOneWithoutDaily_scoresNestedInput
  }

  export type DailyScoreUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    plan_id?: NullableIntFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    total_calories?: NullableFloatFieldUpdateOperationsInput | number | null
    target_calories?: NullableIntFieldUpdateOperationsInput | number | null
    average_meal_score?: NullableIntFieldUpdateOperationsInput | number | null
    daily_score?: NullableIntFieldUpdateOperationsInput | number | null
    streak_days?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyScoreCreateManyInput = {
    id?: number
    user_id: string
    plan_id?: number | null
    date: Date | string
    total_calories?: number | null
    target_calories?: number | null
    average_meal_score?: number | null
    daily_score?: number | null
    streak_days?: number | null
    status?: string | null
    created_at?: Date | string
  }

  export type DailyScoreUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    total_calories?: NullableFloatFieldUpdateOperationsInput | number | null
    target_calories?: NullableIntFieldUpdateOperationsInput | number | null
    average_meal_score?: NullableIntFieldUpdateOperationsInput | number | null
    daily_score?: NullableIntFieldUpdateOperationsInput | number | null
    streak_days?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyScoreUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    plan_id?: NullableIntFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    total_calories?: NullableFloatFieldUpdateOperationsInput | number | null
    target_calories?: NullableIntFieldUpdateOperationsInput | number | null
    average_meal_score?: NullableIntFieldUpdateOperationsInput | number | null
    daily_score?: NullableIntFieldUpdateOperationsInput | number | null
    streak_days?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserGamificationCreateInput = {
    total_xp?: number
    current_level?: number
    total_meals_registered?: number
    current_streak?: number
    longest_streak?: number
    badges?: NullableJsonNullValueInput | InputJsonValue
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutGamificationInput
  }

  export type UserGamificationUncheckedCreateInput = {
    id?: number
    user_id: string
    total_xp?: number
    current_level?: number
    total_meals_registered?: number
    current_streak?: number
    longest_streak?: number
    badges?: NullableJsonNullValueInput | InputJsonValue
    updated_at?: Date | string
  }

  export type UserGamificationUpdateInput = {
    total_xp?: IntFieldUpdateOperationsInput | number
    current_level?: IntFieldUpdateOperationsInput | number
    total_meals_registered?: IntFieldUpdateOperationsInput | number
    current_streak?: IntFieldUpdateOperationsInput | number
    longest_streak?: IntFieldUpdateOperationsInput | number
    badges?: NullableJsonNullValueInput | InputJsonValue
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutGamificationNestedInput
  }

  export type UserGamificationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    total_xp?: IntFieldUpdateOperationsInput | number
    current_level?: IntFieldUpdateOperationsInput | number
    total_meals_registered?: IntFieldUpdateOperationsInput | number
    current_streak?: IntFieldUpdateOperationsInput | number
    longest_streak?: IntFieldUpdateOperationsInput | number
    badges?: NullableJsonNullValueInput | InputJsonValue
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserGamificationCreateManyInput = {
    id?: number
    user_id: string
    total_xp?: number
    current_level?: number
    total_meals_registered?: number
    current_streak?: number
    longest_streak?: number
    badges?: NullableJsonNullValueInput | InputJsonValue
    updated_at?: Date | string
  }

  export type UserGamificationUpdateManyMutationInput = {
    total_xp?: IntFieldUpdateOperationsInput | number
    current_level?: IntFieldUpdateOperationsInput | number
    total_meals_registered?: IntFieldUpdateOperationsInput | number
    current_streak?: IntFieldUpdateOperationsInput | number
    longest_streak?: IntFieldUpdateOperationsInput | number
    badges?: NullableJsonNullValueInput | InputJsonValue
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserGamificationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    total_xp?: IntFieldUpdateOperationsInput | number
    current_level?: IntFieldUpdateOperationsInput | number
    total_meals_registered?: IntFieldUpdateOperationsInput | number
    current_streak?: IntFieldUpdateOperationsInput | number
    longest_streak?: IntFieldUpdateOperationsInput | number
    badges?: NullableJsonNullValueInput | InputJsonValue
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChallengeCreateInput = {
    name: string
    description?: string | null
    duration_days: number
    min_score?: number
    invite_code: string
    start_date?: Date | string | null
    end_date?: Date | string | null
    created_at?: Date | string
    creator: UserCreateNestedOneWithoutChallenges_createdInput
    participants?: ChallengeParticipantCreateNestedManyWithoutChallengeInput
  }

  export type ChallengeUncheckedCreateInput = {
    id?: number
    creator_id: string
    name: string
    description?: string | null
    duration_days: number
    min_score?: number
    invite_code: string
    start_date?: Date | string | null
    end_date?: Date | string | null
    created_at?: Date | string
    participants?: ChallengeParticipantUncheckedCreateNestedManyWithoutChallengeInput
  }

  export type ChallengeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration_days?: IntFieldUpdateOperationsInput | number
    min_score?: IntFieldUpdateOperationsInput | number
    invite_code?: StringFieldUpdateOperationsInput | string
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutChallenges_createdNestedInput
    participants?: ChallengeParticipantUpdateManyWithoutChallengeNestedInput
  }

  export type ChallengeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    creator_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration_days?: IntFieldUpdateOperationsInput | number
    min_score?: IntFieldUpdateOperationsInput | number
    invite_code?: StringFieldUpdateOperationsInput | string
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: ChallengeParticipantUncheckedUpdateManyWithoutChallengeNestedInput
  }

  export type ChallengeCreateManyInput = {
    id?: number
    creator_id: string
    name: string
    description?: string | null
    duration_days: number
    min_score?: number
    invite_code: string
    start_date?: Date | string | null
    end_date?: Date | string | null
    created_at?: Date | string
  }

  export type ChallengeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration_days?: IntFieldUpdateOperationsInput | number
    min_score?: IntFieldUpdateOperationsInput | number
    invite_code?: StringFieldUpdateOperationsInput | string
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChallengeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    creator_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration_days?: IntFieldUpdateOperationsInput | number
    min_score?: IntFieldUpdateOperationsInput | number
    invite_code?: StringFieldUpdateOperationsInput | string
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChallengeParticipantCreateInput = {
    average_score?: number | null
    current_streak?: number | null
    badges_earned?: NullableJsonNullValueInput | InputJsonValue
    joined_at?: Date | string
    user: UserCreateNestedOneWithoutChallenge_participationsInput
    challenge: ChallengeCreateNestedOneWithoutParticipantsInput
  }

  export type ChallengeParticipantUncheckedCreateInput = {
    id?: number
    challenge_id: number
    user_id: string
    average_score?: number | null
    current_streak?: number | null
    badges_earned?: NullableJsonNullValueInput | InputJsonValue
    joined_at?: Date | string
  }

  export type ChallengeParticipantUpdateInput = {
    average_score?: NullableFloatFieldUpdateOperationsInput | number | null
    current_streak?: NullableIntFieldUpdateOperationsInput | number | null
    badges_earned?: NullableJsonNullValueInput | InputJsonValue
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutChallenge_participationsNestedInput
    challenge?: ChallengeUpdateOneRequiredWithoutParticipantsNestedInput
  }

  export type ChallengeParticipantUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    challenge_id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    average_score?: NullableFloatFieldUpdateOperationsInput | number | null
    current_streak?: NullableIntFieldUpdateOperationsInput | number | null
    badges_earned?: NullableJsonNullValueInput | InputJsonValue
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChallengeParticipantCreateManyInput = {
    id?: number
    challenge_id: number
    user_id: string
    average_score?: number | null
    current_streak?: number | null
    badges_earned?: NullableJsonNullValueInput | InputJsonValue
    joined_at?: Date | string
  }

  export type ChallengeParticipantUpdateManyMutationInput = {
    average_score?: NullableFloatFieldUpdateOperationsInput | number | null
    current_streak?: NullableIntFieldUpdateOperationsInput | number | null
    badges_earned?: NullableJsonNullValueInput | InputJsonValue
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChallengeParticipantUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    challenge_id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    average_score?: NullableFloatFieldUpdateOperationsInput | number | null
    current_streak?: NullableIntFieldUpdateOperationsInput | number | null
    badges_earned?: NullableJsonNullValueInput | InputJsonValue
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NutritionalPlanListRelationFilter = {
    every?: NutritionalPlanWhereInput
    some?: NutritionalPlanWhereInput
    none?: NutritionalPlanWhereInput
  }

  export type MealRegistrationListRelationFilter = {
    every?: MealRegistrationWhereInput
    some?: MealRegistrationWhereInput
    none?: MealRegistrationWhereInput
  }

  export type DailyScoreListRelationFilter = {
    every?: DailyScoreWhereInput
    some?: DailyScoreWhereInput
    none?: DailyScoreWhereInput
  }

  export type UserGamificationNullableScalarRelationFilter = {
    is?: UserGamificationWhereInput | null
    isNot?: UserGamificationWhereInput | null
  }

  export type ChallengeListRelationFilter = {
    every?: ChallengeWhereInput
    some?: ChallengeWhereInput
    none?: ChallengeWhereInput
  }

  export type ChallengeParticipantListRelationFilter = {
    every?: ChallengeParticipantWhereInput
    some?: ChallengeParticipantWhereInput
    none?: ChallengeParticipantWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type NutritionalPlanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MealRegistrationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DailyScoreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChallengeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChallengeParticipantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PlanMealListRelationFilter = {
    every?: PlanMealWhereInput
    some?: PlanMealWhereInput
    none?: PlanMealWhereInput
  }

  export type PlanMealOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NutritionalPlanCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    daily_calories?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type NutritionalPlanAvgOrderByAggregateInput = {
    id?: SortOrder
    daily_calories?: SortOrder
  }

  export type NutritionalPlanMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    daily_calories?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type NutritionalPlanMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    daily_calories?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type NutritionalPlanSumOrderByAggregateInput = {
    id?: SortOrder
    daily_calories?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NutritionalPlanScalarRelationFilter = {
    is?: NutritionalPlanWhereInput
    isNot?: NutritionalPlanWhereInput
  }

  export type PlanMealCountOrderByAggregateInput = {
    id?: SortOrder
    plan_id?: SortOrder
    meal_name?: SortOrder
    suggested_time?: SortOrder
    target_calories?: SortOrder
    allowed_foods?: SortOrder
    notes?: SortOrder
  }

  export type PlanMealAvgOrderByAggregateInput = {
    id?: SortOrder
    plan_id?: SortOrder
    target_calories?: SortOrder
  }

  export type PlanMealMaxOrderByAggregateInput = {
    id?: SortOrder
    plan_id?: SortOrder
    meal_name?: SortOrder
    suggested_time?: SortOrder
    target_calories?: SortOrder
    allowed_foods?: SortOrder
    notes?: SortOrder
  }

  export type PlanMealMinOrderByAggregateInput = {
    id?: SortOrder
    plan_id?: SortOrder
    meal_name?: SortOrder
    suggested_time?: SortOrder
    target_calories?: SortOrder
    allowed_foods?: SortOrder
    notes?: SortOrder
  }

  export type PlanMealSumOrderByAggregateInput = {
    id?: SortOrder
    plan_id?: SortOrder
    target_calories?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NutritionalPlanNullableScalarRelationFilter = {
    is?: NutritionalPlanWhereInput | null
    isNot?: NutritionalPlanWhereInput | null
  }

  export type MealRegistrationCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    plan_id?: SortOrder
    meal_name?: SortOrder
    photo_url?: SortOrder
    ai_analysis?: SortOrder
    detected_foods?: SortOrder
    estimated_calories?: SortOrder
    estimated_protein?: SortOrder
    estimated_carbs?: SortOrder
    estimated_fats?: SortOrder
    meal_score?: SortOrder
    adherence_tags?: SortOrder
    ai_message?: SortOrder
    registered_at?: SortOrder
  }

  export type MealRegistrationAvgOrderByAggregateInput = {
    id?: SortOrder
    plan_id?: SortOrder
    estimated_calories?: SortOrder
    estimated_protein?: SortOrder
    estimated_carbs?: SortOrder
    estimated_fats?: SortOrder
    meal_score?: SortOrder
  }

  export type MealRegistrationMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    plan_id?: SortOrder
    meal_name?: SortOrder
    photo_url?: SortOrder
    estimated_calories?: SortOrder
    estimated_protein?: SortOrder
    estimated_carbs?: SortOrder
    estimated_fats?: SortOrder
    meal_score?: SortOrder
    ai_message?: SortOrder
    registered_at?: SortOrder
  }

  export type MealRegistrationMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    plan_id?: SortOrder
    meal_name?: SortOrder
    photo_url?: SortOrder
    estimated_calories?: SortOrder
    estimated_protein?: SortOrder
    estimated_carbs?: SortOrder
    estimated_fats?: SortOrder
    meal_score?: SortOrder
    ai_message?: SortOrder
    registered_at?: SortOrder
  }

  export type MealRegistrationSumOrderByAggregateInput = {
    id?: SortOrder
    plan_id?: SortOrder
    estimated_calories?: SortOrder
    estimated_protein?: SortOrder
    estimated_carbs?: SortOrder
    estimated_fats?: SortOrder
    meal_score?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type DailyScoreUser_idDateCompoundUniqueInput = {
    user_id: string
    date: Date | string
  }

  export type DailyScoreCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    plan_id?: SortOrder
    date?: SortOrder
    total_calories?: SortOrder
    target_calories?: SortOrder
    average_meal_score?: SortOrder
    daily_score?: SortOrder
    streak_days?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type DailyScoreAvgOrderByAggregateInput = {
    id?: SortOrder
    plan_id?: SortOrder
    total_calories?: SortOrder
    target_calories?: SortOrder
    average_meal_score?: SortOrder
    daily_score?: SortOrder
    streak_days?: SortOrder
  }

  export type DailyScoreMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    plan_id?: SortOrder
    date?: SortOrder
    total_calories?: SortOrder
    target_calories?: SortOrder
    average_meal_score?: SortOrder
    daily_score?: SortOrder
    streak_days?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type DailyScoreMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    plan_id?: SortOrder
    date?: SortOrder
    total_calories?: SortOrder
    target_calories?: SortOrder
    average_meal_score?: SortOrder
    daily_score?: SortOrder
    streak_days?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type DailyScoreSumOrderByAggregateInput = {
    id?: SortOrder
    plan_id?: SortOrder
    total_calories?: SortOrder
    target_calories?: SortOrder
    average_meal_score?: SortOrder
    daily_score?: SortOrder
    streak_days?: SortOrder
  }

  export type UserGamificationCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    total_xp?: SortOrder
    current_level?: SortOrder
    total_meals_registered?: SortOrder
    current_streak?: SortOrder
    longest_streak?: SortOrder
    badges?: SortOrder
    updated_at?: SortOrder
  }

  export type UserGamificationAvgOrderByAggregateInput = {
    id?: SortOrder
    total_xp?: SortOrder
    current_level?: SortOrder
    total_meals_registered?: SortOrder
    current_streak?: SortOrder
    longest_streak?: SortOrder
  }

  export type UserGamificationMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    total_xp?: SortOrder
    current_level?: SortOrder
    total_meals_registered?: SortOrder
    current_streak?: SortOrder
    longest_streak?: SortOrder
    updated_at?: SortOrder
  }

  export type UserGamificationMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    total_xp?: SortOrder
    current_level?: SortOrder
    total_meals_registered?: SortOrder
    current_streak?: SortOrder
    longest_streak?: SortOrder
    updated_at?: SortOrder
  }

  export type UserGamificationSumOrderByAggregateInput = {
    id?: SortOrder
    total_xp?: SortOrder
    current_level?: SortOrder
    total_meals_registered?: SortOrder
    current_streak?: SortOrder
    longest_streak?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ChallengeCountOrderByAggregateInput = {
    id?: SortOrder
    creator_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    duration_days?: SortOrder
    min_score?: SortOrder
    invite_code?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    created_at?: SortOrder
  }

  export type ChallengeAvgOrderByAggregateInput = {
    id?: SortOrder
    duration_days?: SortOrder
    min_score?: SortOrder
  }

  export type ChallengeMaxOrderByAggregateInput = {
    id?: SortOrder
    creator_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    duration_days?: SortOrder
    min_score?: SortOrder
    invite_code?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    created_at?: SortOrder
  }

  export type ChallengeMinOrderByAggregateInput = {
    id?: SortOrder
    creator_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    duration_days?: SortOrder
    min_score?: SortOrder
    invite_code?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    created_at?: SortOrder
  }

  export type ChallengeSumOrderByAggregateInput = {
    id?: SortOrder
    duration_days?: SortOrder
    min_score?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ChallengeScalarRelationFilter = {
    is?: ChallengeWhereInput
    isNot?: ChallengeWhereInput
  }

  export type ChallengeParticipantChallenge_idUser_idCompoundUniqueInput = {
    challenge_id: number
    user_id: string
  }

  export type ChallengeParticipantCountOrderByAggregateInput = {
    id?: SortOrder
    challenge_id?: SortOrder
    user_id?: SortOrder
    average_score?: SortOrder
    current_streak?: SortOrder
    badges_earned?: SortOrder
    joined_at?: SortOrder
  }

  export type ChallengeParticipantAvgOrderByAggregateInput = {
    id?: SortOrder
    challenge_id?: SortOrder
    average_score?: SortOrder
    current_streak?: SortOrder
  }

  export type ChallengeParticipantMaxOrderByAggregateInput = {
    id?: SortOrder
    challenge_id?: SortOrder
    user_id?: SortOrder
    average_score?: SortOrder
    current_streak?: SortOrder
    joined_at?: SortOrder
  }

  export type ChallengeParticipantMinOrderByAggregateInput = {
    id?: SortOrder
    challenge_id?: SortOrder
    user_id?: SortOrder
    average_score?: SortOrder
    current_streak?: SortOrder
    joined_at?: SortOrder
  }

  export type ChallengeParticipantSumOrderByAggregateInput = {
    id?: SortOrder
    challenge_id?: SortOrder
    average_score?: SortOrder
    current_streak?: SortOrder
  }

  export type NutritionalPlanCreateNestedManyWithoutUserInput = {
    create?: XOR<NutritionalPlanCreateWithoutUserInput, NutritionalPlanUncheckedCreateWithoutUserInput> | NutritionalPlanCreateWithoutUserInput[] | NutritionalPlanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NutritionalPlanCreateOrConnectWithoutUserInput | NutritionalPlanCreateOrConnectWithoutUserInput[]
    createMany?: NutritionalPlanCreateManyUserInputEnvelope
    connect?: NutritionalPlanWhereUniqueInput | NutritionalPlanWhereUniqueInput[]
  }

  export type MealRegistrationCreateNestedManyWithoutUserInput = {
    create?: XOR<MealRegistrationCreateWithoutUserInput, MealRegistrationUncheckedCreateWithoutUserInput> | MealRegistrationCreateWithoutUserInput[] | MealRegistrationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MealRegistrationCreateOrConnectWithoutUserInput | MealRegistrationCreateOrConnectWithoutUserInput[]
    createMany?: MealRegistrationCreateManyUserInputEnvelope
    connect?: MealRegistrationWhereUniqueInput | MealRegistrationWhereUniqueInput[]
  }

  export type DailyScoreCreateNestedManyWithoutUserInput = {
    create?: XOR<DailyScoreCreateWithoutUserInput, DailyScoreUncheckedCreateWithoutUserInput> | DailyScoreCreateWithoutUserInput[] | DailyScoreUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyScoreCreateOrConnectWithoutUserInput | DailyScoreCreateOrConnectWithoutUserInput[]
    createMany?: DailyScoreCreateManyUserInputEnvelope
    connect?: DailyScoreWhereUniqueInput | DailyScoreWhereUniqueInput[]
  }

  export type UserGamificationCreateNestedOneWithoutUserInput = {
    create?: XOR<UserGamificationCreateWithoutUserInput, UserGamificationUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserGamificationCreateOrConnectWithoutUserInput
    connect?: UserGamificationWhereUniqueInput
  }

  export type ChallengeCreateNestedManyWithoutCreatorInput = {
    create?: XOR<ChallengeCreateWithoutCreatorInput, ChallengeUncheckedCreateWithoutCreatorInput> | ChallengeCreateWithoutCreatorInput[] | ChallengeUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ChallengeCreateOrConnectWithoutCreatorInput | ChallengeCreateOrConnectWithoutCreatorInput[]
    createMany?: ChallengeCreateManyCreatorInputEnvelope
    connect?: ChallengeWhereUniqueInput | ChallengeWhereUniqueInput[]
  }

  export type ChallengeParticipantCreateNestedManyWithoutUserInput = {
    create?: XOR<ChallengeParticipantCreateWithoutUserInput, ChallengeParticipantUncheckedCreateWithoutUserInput> | ChallengeParticipantCreateWithoutUserInput[] | ChallengeParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChallengeParticipantCreateOrConnectWithoutUserInput | ChallengeParticipantCreateOrConnectWithoutUserInput[]
    createMany?: ChallengeParticipantCreateManyUserInputEnvelope
    connect?: ChallengeParticipantWhereUniqueInput | ChallengeParticipantWhereUniqueInput[]
  }

  export type NutritionalPlanUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NutritionalPlanCreateWithoutUserInput, NutritionalPlanUncheckedCreateWithoutUserInput> | NutritionalPlanCreateWithoutUserInput[] | NutritionalPlanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NutritionalPlanCreateOrConnectWithoutUserInput | NutritionalPlanCreateOrConnectWithoutUserInput[]
    createMany?: NutritionalPlanCreateManyUserInputEnvelope
    connect?: NutritionalPlanWhereUniqueInput | NutritionalPlanWhereUniqueInput[]
  }

  export type MealRegistrationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MealRegistrationCreateWithoutUserInput, MealRegistrationUncheckedCreateWithoutUserInput> | MealRegistrationCreateWithoutUserInput[] | MealRegistrationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MealRegistrationCreateOrConnectWithoutUserInput | MealRegistrationCreateOrConnectWithoutUserInput[]
    createMany?: MealRegistrationCreateManyUserInputEnvelope
    connect?: MealRegistrationWhereUniqueInput | MealRegistrationWhereUniqueInput[]
  }

  export type DailyScoreUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DailyScoreCreateWithoutUserInput, DailyScoreUncheckedCreateWithoutUserInput> | DailyScoreCreateWithoutUserInput[] | DailyScoreUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyScoreCreateOrConnectWithoutUserInput | DailyScoreCreateOrConnectWithoutUserInput[]
    createMany?: DailyScoreCreateManyUserInputEnvelope
    connect?: DailyScoreWhereUniqueInput | DailyScoreWhereUniqueInput[]
  }

  export type UserGamificationUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserGamificationCreateWithoutUserInput, UserGamificationUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserGamificationCreateOrConnectWithoutUserInput
    connect?: UserGamificationWhereUniqueInput
  }

  export type ChallengeUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<ChallengeCreateWithoutCreatorInput, ChallengeUncheckedCreateWithoutCreatorInput> | ChallengeCreateWithoutCreatorInput[] | ChallengeUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ChallengeCreateOrConnectWithoutCreatorInput | ChallengeCreateOrConnectWithoutCreatorInput[]
    createMany?: ChallengeCreateManyCreatorInputEnvelope
    connect?: ChallengeWhereUniqueInput | ChallengeWhereUniqueInput[]
  }

  export type ChallengeParticipantUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ChallengeParticipantCreateWithoutUserInput, ChallengeParticipantUncheckedCreateWithoutUserInput> | ChallengeParticipantCreateWithoutUserInput[] | ChallengeParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChallengeParticipantCreateOrConnectWithoutUserInput | ChallengeParticipantCreateOrConnectWithoutUserInput[]
    createMany?: ChallengeParticipantCreateManyUserInputEnvelope
    connect?: ChallengeParticipantWhereUniqueInput | ChallengeParticipantWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NutritionalPlanUpdateManyWithoutUserNestedInput = {
    create?: XOR<NutritionalPlanCreateWithoutUserInput, NutritionalPlanUncheckedCreateWithoutUserInput> | NutritionalPlanCreateWithoutUserInput[] | NutritionalPlanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NutritionalPlanCreateOrConnectWithoutUserInput | NutritionalPlanCreateOrConnectWithoutUserInput[]
    upsert?: NutritionalPlanUpsertWithWhereUniqueWithoutUserInput | NutritionalPlanUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NutritionalPlanCreateManyUserInputEnvelope
    set?: NutritionalPlanWhereUniqueInput | NutritionalPlanWhereUniqueInput[]
    disconnect?: NutritionalPlanWhereUniqueInput | NutritionalPlanWhereUniqueInput[]
    delete?: NutritionalPlanWhereUniqueInput | NutritionalPlanWhereUniqueInput[]
    connect?: NutritionalPlanWhereUniqueInput | NutritionalPlanWhereUniqueInput[]
    update?: NutritionalPlanUpdateWithWhereUniqueWithoutUserInput | NutritionalPlanUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NutritionalPlanUpdateManyWithWhereWithoutUserInput | NutritionalPlanUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NutritionalPlanScalarWhereInput | NutritionalPlanScalarWhereInput[]
  }

  export type MealRegistrationUpdateManyWithoutUserNestedInput = {
    create?: XOR<MealRegistrationCreateWithoutUserInput, MealRegistrationUncheckedCreateWithoutUserInput> | MealRegistrationCreateWithoutUserInput[] | MealRegistrationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MealRegistrationCreateOrConnectWithoutUserInput | MealRegistrationCreateOrConnectWithoutUserInput[]
    upsert?: MealRegistrationUpsertWithWhereUniqueWithoutUserInput | MealRegistrationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MealRegistrationCreateManyUserInputEnvelope
    set?: MealRegistrationWhereUniqueInput | MealRegistrationWhereUniqueInput[]
    disconnect?: MealRegistrationWhereUniqueInput | MealRegistrationWhereUniqueInput[]
    delete?: MealRegistrationWhereUniqueInput | MealRegistrationWhereUniqueInput[]
    connect?: MealRegistrationWhereUniqueInput | MealRegistrationWhereUniqueInput[]
    update?: MealRegistrationUpdateWithWhereUniqueWithoutUserInput | MealRegistrationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MealRegistrationUpdateManyWithWhereWithoutUserInput | MealRegistrationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MealRegistrationScalarWhereInput | MealRegistrationScalarWhereInput[]
  }

  export type DailyScoreUpdateManyWithoutUserNestedInput = {
    create?: XOR<DailyScoreCreateWithoutUserInput, DailyScoreUncheckedCreateWithoutUserInput> | DailyScoreCreateWithoutUserInput[] | DailyScoreUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyScoreCreateOrConnectWithoutUserInput | DailyScoreCreateOrConnectWithoutUserInput[]
    upsert?: DailyScoreUpsertWithWhereUniqueWithoutUserInput | DailyScoreUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DailyScoreCreateManyUserInputEnvelope
    set?: DailyScoreWhereUniqueInput | DailyScoreWhereUniqueInput[]
    disconnect?: DailyScoreWhereUniqueInput | DailyScoreWhereUniqueInput[]
    delete?: DailyScoreWhereUniqueInput | DailyScoreWhereUniqueInput[]
    connect?: DailyScoreWhereUniqueInput | DailyScoreWhereUniqueInput[]
    update?: DailyScoreUpdateWithWhereUniqueWithoutUserInput | DailyScoreUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DailyScoreUpdateManyWithWhereWithoutUserInput | DailyScoreUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DailyScoreScalarWhereInput | DailyScoreScalarWhereInput[]
  }

  export type UserGamificationUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserGamificationCreateWithoutUserInput, UserGamificationUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserGamificationCreateOrConnectWithoutUserInput
    upsert?: UserGamificationUpsertWithoutUserInput
    disconnect?: UserGamificationWhereInput | boolean
    delete?: UserGamificationWhereInput | boolean
    connect?: UserGamificationWhereUniqueInput
    update?: XOR<XOR<UserGamificationUpdateToOneWithWhereWithoutUserInput, UserGamificationUpdateWithoutUserInput>, UserGamificationUncheckedUpdateWithoutUserInput>
  }

  export type ChallengeUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<ChallengeCreateWithoutCreatorInput, ChallengeUncheckedCreateWithoutCreatorInput> | ChallengeCreateWithoutCreatorInput[] | ChallengeUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ChallengeCreateOrConnectWithoutCreatorInput | ChallengeCreateOrConnectWithoutCreatorInput[]
    upsert?: ChallengeUpsertWithWhereUniqueWithoutCreatorInput | ChallengeUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: ChallengeCreateManyCreatorInputEnvelope
    set?: ChallengeWhereUniqueInput | ChallengeWhereUniqueInput[]
    disconnect?: ChallengeWhereUniqueInput | ChallengeWhereUniqueInput[]
    delete?: ChallengeWhereUniqueInput | ChallengeWhereUniqueInput[]
    connect?: ChallengeWhereUniqueInput | ChallengeWhereUniqueInput[]
    update?: ChallengeUpdateWithWhereUniqueWithoutCreatorInput | ChallengeUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: ChallengeUpdateManyWithWhereWithoutCreatorInput | ChallengeUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: ChallengeScalarWhereInput | ChallengeScalarWhereInput[]
  }

  export type ChallengeParticipantUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChallengeParticipantCreateWithoutUserInput, ChallengeParticipantUncheckedCreateWithoutUserInput> | ChallengeParticipantCreateWithoutUserInput[] | ChallengeParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChallengeParticipantCreateOrConnectWithoutUserInput | ChallengeParticipantCreateOrConnectWithoutUserInput[]
    upsert?: ChallengeParticipantUpsertWithWhereUniqueWithoutUserInput | ChallengeParticipantUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChallengeParticipantCreateManyUserInputEnvelope
    set?: ChallengeParticipantWhereUniqueInput | ChallengeParticipantWhereUniqueInput[]
    disconnect?: ChallengeParticipantWhereUniqueInput | ChallengeParticipantWhereUniqueInput[]
    delete?: ChallengeParticipantWhereUniqueInput | ChallengeParticipantWhereUniqueInput[]
    connect?: ChallengeParticipantWhereUniqueInput | ChallengeParticipantWhereUniqueInput[]
    update?: ChallengeParticipantUpdateWithWhereUniqueWithoutUserInput | ChallengeParticipantUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChallengeParticipantUpdateManyWithWhereWithoutUserInput | ChallengeParticipantUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChallengeParticipantScalarWhereInput | ChallengeParticipantScalarWhereInput[]
  }

  export type NutritionalPlanUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NutritionalPlanCreateWithoutUserInput, NutritionalPlanUncheckedCreateWithoutUserInput> | NutritionalPlanCreateWithoutUserInput[] | NutritionalPlanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NutritionalPlanCreateOrConnectWithoutUserInput | NutritionalPlanCreateOrConnectWithoutUserInput[]
    upsert?: NutritionalPlanUpsertWithWhereUniqueWithoutUserInput | NutritionalPlanUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NutritionalPlanCreateManyUserInputEnvelope
    set?: NutritionalPlanWhereUniqueInput | NutritionalPlanWhereUniqueInput[]
    disconnect?: NutritionalPlanWhereUniqueInput | NutritionalPlanWhereUniqueInput[]
    delete?: NutritionalPlanWhereUniqueInput | NutritionalPlanWhereUniqueInput[]
    connect?: NutritionalPlanWhereUniqueInput | NutritionalPlanWhereUniqueInput[]
    update?: NutritionalPlanUpdateWithWhereUniqueWithoutUserInput | NutritionalPlanUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NutritionalPlanUpdateManyWithWhereWithoutUserInput | NutritionalPlanUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NutritionalPlanScalarWhereInput | NutritionalPlanScalarWhereInput[]
  }

  export type MealRegistrationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MealRegistrationCreateWithoutUserInput, MealRegistrationUncheckedCreateWithoutUserInput> | MealRegistrationCreateWithoutUserInput[] | MealRegistrationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MealRegistrationCreateOrConnectWithoutUserInput | MealRegistrationCreateOrConnectWithoutUserInput[]
    upsert?: MealRegistrationUpsertWithWhereUniqueWithoutUserInput | MealRegistrationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MealRegistrationCreateManyUserInputEnvelope
    set?: MealRegistrationWhereUniqueInput | MealRegistrationWhereUniqueInput[]
    disconnect?: MealRegistrationWhereUniqueInput | MealRegistrationWhereUniqueInput[]
    delete?: MealRegistrationWhereUniqueInput | MealRegistrationWhereUniqueInput[]
    connect?: MealRegistrationWhereUniqueInput | MealRegistrationWhereUniqueInput[]
    update?: MealRegistrationUpdateWithWhereUniqueWithoutUserInput | MealRegistrationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MealRegistrationUpdateManyWithWhereWithoutUserInput | MealRegistrationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MealRegistrationScalarWhereInput | MealRegistrationScalarWhereInput[]
  }

  export type DailyScoreUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DailyScoreCreateWithoutUserInput, DailyScoreUncheckedCreateWithoutUserInput> | DailyScoreCreateWithoutUserInput[] | DailyScoreUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyScoreCreateOrConnectWithoutUserInput | DailyScoreCreateOrConnectWithoutUserInput[]
    upsert?: DailyScoreUpsertWithWhereUniqueWithoutUserInput | DailyScoreUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DailyScoreCreateManyUserInputEnvelope
    set?: DailyScoreWhereUniqueInput | DailyScoreWhereUniqueInput[]
    disconnect?: DailyScoreWhereUniqueInput | DailyScoreWhereUniqueInput[]
    delete?: DailyScoreWhereUniqueInput | DailyScoreWhereUniqueInput[]
    connect?: DailyScoreWhereUniqueInput | DailyScoreWhereUniqueInput[]
    update?: DailyScoreUpdateWithWhereUniqueWithoutUserInput | DailyScoreUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DailyScoreUpdateManyWithWhereWithoutUserInput | DailyScoreUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DailyScoreScalarWhereInput | DailyScoreScalarWhereInput[]
  }

  export type UserGamificationUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserGamificationCreateWithoutUserInput, UserGamificationUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserGamificationCreateOrConnectWithoutUserInput
    upsert?: UserGamificationUpsertWithoutUserInput
    disconnect?: UserGamificationWhereInput | boolean
    delete?: UserGamificationWhereInput | boolean
    connect?: UserGamificationWhereUniqueInput
    update?: XOR<XOR<UserGamificationUpdateToOneWithWhereWithoutUserInput, UserGamificationUpdateWithoutUserInput>, UserGamificationUncheckedUpdateWithoutUserInput>
  }

  export type ChallengeUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<ChallengeCreateWithoutCreatorInput, ChallengeUncheckedCreateWithoutCreatorInput> | ChallengeCreateWithoutCreatorInput[] | ChallengeUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ChallengeCreateOrConnectWithoutCreatorInput | ChallengeCreateOrConnectWithoutCreatorInput[]
    upsert?: ChallengeUpsertWithWhereUniqueWithoutCreatorInput | ChallengeUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: ChallengeCreateManyCreatorInputEnvelope
    set?: ChallengeWhereUniqueInput | ChallengeWhereUniqueInput[]
    disconnect?: ChallengeWhereUniqueInput | ChallengeWhereUniqueInput[]
    delete?: ChallengeWhereUniqueInput | ChallengeWhereUniqueInput[]
    connect?: ChallengeWhereUniqueInput | ChallengeWhereUniqueInput[]
    update?: ChallengeUpdateWithWhereUniqueWithoutCreatorInput | ChallengeUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: ChallengeUpdateManyWithWhereWithoutCreatorInput | ChallengeUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: ChallengeScalarWhereInput | ChallengeScalarWhereInput[]
  }

  export type ChallengeParticipantUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChallengeParticipantCreateWithoutUserInput, ChallengeParticipantUncheckedCreateWithoutUserInput> | ChallengeParticipantCreateWithoutUserInput[] | ChallengeParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChallengeParticipantCreateOrConnectWithoutUserInput | ChallengeParticipantCreateOrConnectWithoutUserInput[]
    upsert?: ChallengeParticipantUpsertWithWhereUniqueWithoutUserInput | ChallengeParticipantUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChallengeParticipantCreateManyUserInputEnvelope
    set?: ChallengeParticipantWhereUniqueInput | ChallengeParticipantWhereUniqueInput[]
    disconnect?: ChallengeParticipantWhereUniqueInput | ChallengeParticipantWhereUniqueInput[]
    delete?: ChallengeParticipantWhereUniqueInput | ChallengeParticipantWhereUniqueInput[]
    connect?: ChallengeParticipantWhereUniqueInput | ChallengeParticipantWhereUniqueInput[]
    update?: ChallengeParticipantUpdateWithWhereUniqueWithoutUserInput | ChallengeParticipantUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChallengeParticipantUpdateManyWithWhereWithoutUserInput | ChallengeParticipantUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChallengeParticipantScalarWhereInput | ChallengeParticipantScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutNutritional_plansInput = {
    create?: XOR<UserCreateWithoutNutritional_plansInput, UserUncheckedCreateWithoutNutritional_plansInput>
    connectOrCreate?: UserCreateOrConnectWithoutNutritional_plansInput
    connect?: UserWhereUniqueInput
  }

  export type PlanMealCreateNestedManyWithoutPlanInput = {
    create?: XOR<PlanMealCreateWithoutPlanInput, PlanMealUncheckedCreateWithoutPlanInput> | PlanMealCreateWithoutPlanInput[] | PlanMealUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: PlanMealCreateOrConnectWithoutPlanInput | PlanMealCreateOrConnectWithoutPlanInput[]
    createMany?: PlanMealCreateManyPlanInputEnvelope
    connect?: PlanMealWhereUniqueInput | PlanMealWhereUniqueInput[]
  }

  export type MealRegistrationCreateNestedManyWithoutPlanInput = {
    create?: XOR<MealRegistrationCreateWithoutPlanInput, MealRegistrationUncheckedCreateWithoutPlanInput> | MealRegistrationCreateWithoutPlanInput[] | MealRegistrationUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: MealRegistrationCreateOrConnectWithoutPlanInput | MealRegistrationCreateOrConnectWithoutPlanInput[]
    createMany?: MealRegistrationCreateManyPlanInputEnvelope
    connect?: MealRegistrationWhereUniqueInput | MealRegistrationWhereUniqueInput[]
  }

  export type DailyScoreCreateNestedManyWithoutPlanInput = {
    create?: XOR<DailyScoreCreateWithoutPlanInput, DailyScoreUncheckedCreateWithoutPlanInput> | DailyScoreCreateWithoutPlanInput[] | DailyScoreUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: DailyScoreCreateOrConnectWithoutPlanInput | DailyScoreCreateOrConnectWithoutPlanInput[]
    createMany?: DailyScoreCreateManyPlanInputEnvelope
    connect?: DailyScoreWhereUniqueInput | DailyScoreWhereUniqueInput[]
  }

  export type PlanMealUncheckedCreateNestedManyWithoutPlanInput = {
    create?: XOR<PlanMealCreateWithoutPlanInput, PlanMealUncheckedCreateWithoutPlanInput> | PlanMealCreateWithoutPlanInput[] | PlanMealUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: PlanMealCreateOrConnectWithoutPlanInput | PlanMealCreateOrConnectWithoutPlanInput[]
    createMany?: PlanMealCreateManyPlanInputEnvelope
    connect?: PlanMealWhereUniqueInput | PlanMealWhereUniqueInput[]
  }

  export type MealRegistrationUncheckedCreateNestedManyWithoutPlanInput = {
    create?: XOR<MealRegistrationCreateWithoutPlanInput, MealRegistrationUncheckedCreateWithoutPlanInput> | MealRegistrationCreateWithoutPlanInput[] | MealRegistrationUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: MealRegistrationCreateOrConnectWithoutPlanInput | MealRegistrationCreateOrConnectWithoutPlanInput[]
    createMany?: MealRegistrationCreateManyPlanInputEnvelope
    connect?: MealRegistrationWhereUniqueInput | MealRegistrationWhereUniqueInput[]
  }

  export type DailyScoreUncheckedCreateNestedManyWithoutPlanInput = {
    create?: XOR<DailyScoreCreateWithoutPlanInput, DailyScoreUncheckedCreateWithoutPlanInput> | DailyScoreCreateWithoutPlanInput[] | DailyScoreUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: DailyScoreCreateOrConnectWithoutPlanInput | DailyScoreCreateOrConnectWithoutPlanInput[]
    createMany?: DailyScoreCreateManyPlanInputEnvelope
    connect?: DailyScoreWhereUniqueInput | DailyScoreWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutNutritional_plansNestedInput = {
    create?: XOR<UserCreateWithoutNutritional_plansInput, UserUncheckedCreateWithoutNutritional_plansInput>
    connectOrCreate?: UserCreateOrConnectWithoutNutritional_plansInput
    upsert?: UserUpsertWithoutNutritional_plansInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNutritional_plansInput, UserUpdateWithoutNutritional_plansInput>, UserUncheckedUpdateWithoutNutritional_plansInput>
  }

  export type PlanMealUpdateManyWithoutPlanNestedInput = {
    create?: XOR<PlanMealCreateWithoutPlanInput, PlanMealUncheckedCreateWithoutPlanInput> | PlanMealCreateWithoutPlanInput[] | PlanMealUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: PlanMealCreateOrConnectWithoutPlanInput | PlanMealCreateOrConnectWithoutPlanInput[]
    upsert?: PlanMealUpsertWithWhereUniqueWithoutPlanInput | PlanMealUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: PlanMealCreateManyPlanInputEnvelope
    set?: PlanMealWhereUniqueInput | PlanMealWhereUniqueInput[]
    disconnect?: PlanMealWhereUniqueInput | PlanMealWhereUniqueInput[]
    delete?: PlanMealWhereUniqueInput | PlanMealWhereUniqueInput[]
    connect?: PlanMealWhereUniqueInput | PlanMealWhereUniqueInput[]
    update?: PlanMealUpdateWithWhereUniqueWithoutPlanInput | PlanMealUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: PlanMealUpdateManyWithWhereWithoutPlanInput | PlanMealUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: PlanMealScalarWhereInput | PlanMealScalarWhereInput[]
  }

  export type MealRegistrationUpdateManyWithoutPlanNestedInput = {
    create?: XOR<MealRegistrationCreateWithoutPlanInput, MealRegistrationUncheckedCreateWithoutPlanInput> | MealRegistrationCreateWithoutPlanInput[] | MealRegistrationUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: MealRegistrationCreateOrConnectWithoutPlanInput | MealRegistrationCreateOrConnectWithoutPlanInput[]
    upsert?: MealRegistrationUpsertWithWhereUniqueWithoutPlanInput | MealRegistrationUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: MealRegistrationCreateManyPlanInputEnvelope
    set?: MealRegistrationWhereUniqueInput | MealRegistrationWhereUniqueInput[]
    disconnect?: MealRegistrationWhereUniqueInput | MealRegistrationWhereUniqueInput[]
    delete?: MealRegistrationWhereUniqueInput | MealRegistrationWhereUniqueInput[]
    connect?: MealRegistrationWhereUniqueInput | MealRegistrationWhereUniqueInput[]
    update?: MealRegistrationUpdateWithWhereUniqueWithoutPlanInput | MealRegistrationUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: MealRegistrationUpdateManyWithWhereWithoutPlanInput | MealRegistrationUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: MealRegistrationScalarWhereInput | MealRegistrationScalarWhereInput[]
  }

  export type DailyScoreUpdateManyWithoutPlanNestedInput = {
    create?: XOR<DailyScoreCreateWithoutPlanInput, DailyScoreUncheckedCreateWithoutPlanInput> | DailyScoreCreateWithoutPlanInput[] | DailyScoreUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: DailyScoreCreateOrConnectWithoutPlanInput | DailyScoreCreateOrConnectWithoutPlanInput[]
    upsert?: DailyScoreUpsertWithWhereUniqueWithoutPlanInput | DailyScoreUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: DailyScoreCreateManyPlanInputEnvelope
    set?: DailyScoreWhereUniqueInput | DailyScoreWhereUniqueInput[]
    disconnect?: DailyScoreWhereUniqueInput | DailyScoreWhereUniqueInput[]
    delete?: DailyScoreWhereUniqueInput | DailyScoreWhereUniqueInput[]
    connect?: DailyScoreWhereUniqueInput | DailyScoreWhereUniqueInput[]
    update?: DailyScoreUpdateWithWhereUniqueWithoutPlanInput | DailyScoreUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: DailyScoreUpdateManyWithWhereWithoutPlanInput | DailyScoreUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: DailyScoreScalarWhereInput | DailyScoreScalarWhereInput[]
  }

  export type PlanMealUncheckedUpdateManyWithoutPlanNestedInput = {
    create?: XOR<PlanMealCreateWithoutPlanInput, PlanMealUncheckedCreateWithoutPlanInput> | PlanMealCreateWithoutPlanInput[] | PlanMealUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: PlanMealCreateOrConnectWithoutPlanInput | PlanMealCreateOrConnectWithoutPlanInput[]
    upsert?: PlanMealUpsertWithWhereUniqueWithoutPlanInput | PlanMealUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: PlanMealCreateManyPlanInputEnvelope
    set?: PlanMealWhereUniqueInput | PlanMealWhereUniqueInput[]
    disconnect?: PlanMealWhereUniqueInput | PlanMealWhereUniqueInput[]
    delete?: PlanMealWhereUniqueInput | PlanMealWhereUniqueInput[]
    connect?: PlanMealWhereUniqueInput | PlanMealWhereUniqueInput[]
    update?: PlanMealUpdateWithWhereUniqueWithoutPlanInput | PlanMealUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: PlanMealUpdateManyWithWhereWithoutPlanInput | PlanMealUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: PlanMealScalarWhereInput | PlanMealScalarWhereInput[]
  }

  export type MealRegistrationUncheckedUpdateManyWithoutPlanNestedInput = {
    create?: XOR<MealRegistrationCreateWithoutPlanInput, MealRegistrationUncheckedCreateWithoutPlanInput> | MealRegistrationCreateWithoutPlanInput[] | MealRegistrationUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: MealRegistrationCreateOrConnectWithoutPlanInput | MealRegistrationCreateOrConnectWithoutPlanInput[]
    upsert?: MealRegistrationUpsertWithWhereUniqueWithoutPlanInput | MealRegistrationUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: MealRegistrationCreateManyPlanInputEnvelope
    set?: MealRegistrationWhereUniqueInput | MealRegistrationWhereUniqueInput[]
    disconnect?: MealRegistrationWhereUniqueInput | MealRegistrationWhereUniqueInput[]
    delete?: MealRegistrationWhereUniqueInput | MealRegistrationWhereUniqueInput[]
    connect?: MealRegistrationWhereUniqueInput | MealRegistrationWhereUniqueInput[]
    update?: MealRegistrationUpdateWithWhereUniqueWithoutPlanInput | MealRegistrationUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: MealRegistrationUpdateManyWithWhereWithoutPlanInput | MealRegistrationUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: MealRegistrationScalarWhereInput | MealRegistrationScalarWhereInput[]
  }

  export type DailyScoreUncheckedUpdateManyWithoutPlanNestedInput = {
    create?: XOR<DailyScoreCreateWithoutPlanInput, DailyScoreUncheckedCreateWithoutPlanInput> | DailyScoreCreateWithoutPlanInput[] | DailyScoreUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: DailyScoreCreateOrConnectWithoutPlanInput | DailyScoreCreateOrConnectWithoutPlanInput[]
    upsert?: DailyScoreUpsertWithWhereUniqueWithoutPlanInput | DailyScoreUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: DailyScoreCreateManyPlanInputEnvelope
    set?: DailyScoreWhereUniqueInput | DailyScoreWhereUniqueInput[]
    disconnect?: DailyScoreWhereUniqueInput | DailyScoreWhereUniqueInput[]
    delete?: DailyScoreWhereUniqueInput | DailyScoreWhereUniqueInput[]
    connect?: DailyScoreWhereUniqueInput | DailyScoreWhereUniqueInput[]
    update?: DailyScoreUpdateWithWhereUniqueWithoutPlanInput | DailyScoreUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: DailyScoreUpdateManyWithWhereWithoutPlanInput | DailyScoreUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: DailyScoreScalarWhereInput | DailyScoreScalarWhereInput[]
  }

  export type NutritionalPlanCreateNestedOneWithoutMealsInput = {
    create?: XOR<NutritionalPlanCreateWithoutMealsInput, NutritionalPlanUncheckedCreateWithoutMealsInput>
    connectOrCreate?: NutritionalPlanCreateOrConnectWithoutMealsInput
    connect?: NutritionalPlanWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NutritionalPlanUpdateOneRequiredWithoutMealsNestedInput = {
    create?: XOR<NutritionalPlanCreateWithoutMealsInput, NutritionalPlanUncheckedCreateWithoutMealsInput>
    connectOrCreate?: NutritionalPlanCreateOrConnectWithoutMealsInput
    upsert?: NutritionalPlanUpsertWithoutMealsInput
    connect?: NutritionalPlanWhereUniqueInput
    update?: XOR<XOR<NutritionalPlanUpdateToOneWithWhereWithoutMealsInput, NutritionalPlanUpdateWithoutMealsInput>, NutritionalPlanUncheckedUpdateWithoutMealsInput>
  }

  export type UserCreateNestedOneWithoutMeal_registrationsInput = {
    create?: XOR<UserCreateWithoutMeal_registrationsInput, UserUncheckedCreateWithoutMeal_registrationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMeal_registrationsInput
    connect?: UserWhereUniqueInput
  }

  export type NutritionalPlanCreateNestedOneWithoutMeal_registrationsInput = {
    create?: XOR<NutritionalPlanCreateWithoutMeal_registrationsInput, NutritionalPlanUncheckedCreateWithoutMeal_registrationsInput>
    connectOrCreate?: NutritionalPlanCreateOrConnectWithoutMeal_registrationsInput
    connect?: NutritionalPlanWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutMeal_registrationsNestedInput = {
    create?: XOR<UserCreateWithoutMeal_registrationsInput, UserUncheckedCreateWithoutMeal_registrationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMeal_registrationsInput
    upsert?: UserUpsertWithoutMeal_registrationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMeal_registrationsInput, UserUpdateWithoutMeal_registrationsInput>, UserUncheckedUpdateWithoutMeal_registrationsInput>
  }

  export type NutritionalPlanUpdateOneWithoutMeal_registrationsNestedInput = {
    create?: XOR<NutritionalPlanCreateWithoutMeal_registrationsInput, NutritionalPlanUncheckedCreateWithoutMeal_registrationsInput>
    connectOrCreate?: NutritionalPlanCreateOrConnectWithoutMeal_registrationsInput
    upsert?: NutritionalPlanUpsertWithoutMeal_registrationsInput
    disconnect?: NutritionalPlanWhereInput | boolean
    delete?: NutritionalPlanWhereInput | boolean
    connect?: NutritionalPlanWhereUniqueInput
    update?: XOR<XOR<NutritionalPlanUpdateToOneWithWhereWithoutMeal_registrationsInput, NutritionalPlanUpdateWithoutMeal_registrationsInput>, NutritionalPlanUncheckedUpdateWithoutMeal_registrationsInput>
  }

  export type UserCreateNestedOneWithoutDaily_scoresInput = {
    create?: XOR<UserCreateWithoutDaily_scoresInput, UserUncheckedCreateWithoutDaily_scoresInput>
    connectOrCreate?: UserCreateOrConnectWithoutDaily_scoresInput
    connect?: UserWhereUniqueInput
  }

  export type NutritionalPlanCreateNestedOneWithoutDaily_scoresInput = {
    create?: XOR<NutritionalPlanCreateWithoutDaily_scoresInput, NutritionalPlanUncheckedCreateWithoutDaily_scoresInput>
    connectOrCreate?: NutritionalPlanCreateOrConnectWithoutDaily_scoresInput
    connect?: NutritionalPlanWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutDaily_scoresNestedInput = {
    create?: XOR<UserCreateWithoutDaily_scoresInput, UserUncheckedCreateWithoutDaily_scoresInput>
    connectOrCreate?: UserCreateOrConnectWithoutDaily_scoresInput
    upsert?: UserUpsertWithoutDaily_scoresInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDaily_scoresInput, UserUpdateWithoutDaily_scoresInput>, UserUncheckedUpdateWithoutDaily_scoresInput>
  }

  export type NutritionalPlanUpdateOneWithoutDaily_scoresNestedInput = {
    create?: XOR<NutritionalPlanCreateWithoutDaily_scoresInput, NutritionalPlanUncheckedCreateWithoutDaily_scoresInput>
    connectOrCreate?: NutritionalPlanCreateOrConnectWithoutDaily_scoresInput
    upsert?: NutritionalPlanUpsertWithoutDaily_scoresInput
    disconnect?: NutritionalPlanWhereInput | boolean
    delete?: NutritionalPlanWhereInput | boolean
    connect?: NutritionalPlanWhereUniqueInput
    update?: XOR<XOR<NutritionalPlanUpdateToOneWithWhereWithoutDaily_scoresInput, NutritionalPlanUpdateWithoutDaily_scoresInput>, NutritionalPlanUncheckedUpdateWithoutDaily_scoresInput>
  }

  export type UserCreateNestedOneWithoutGamificationInput = {
    create?: XOR<UserCreateWithoutGamificationInput, UserUncheckedCreateWithoutGamificationInput>
    connectOrCreate?: UserCreateOrConnectWithoutGamificationInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutGamificationNestedInput = {
    create?: XOR<UserCreateWithoutGamificationInput, UserUncheckedCreateWithoutGamificationInput>
    connectOrCreate?: UserCreateOrConnectWithoutGamificationInput
    upsert?: UserUpsertWithoutGamificationInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGamificationInput, UserUpdateWithoutGamificationInput>, UserUncheckedUpdateWithoutGamificationInput>
  }

  export type UserCreateNestedOneWithoutChallenges_createdInput = {
    create?: XOR<UserCreateWithoutChallenges_createdInput, UserUncheckedCreateWithoutChallenges_createdInput>
    connectOrCreate?: UserCreateOrConnectWithoutChallenges_createdInput
    connect?: UserWhereUniqueInput
  }

  export type ChallengeParticipantCreateNestedManyWithoutChallengeInput = {
    create?: XOR<ChallengeParticipantCreateWithoutChallengeInput, ChallengeParticipantUncheckedCreateWithoutChallengeInput> | ChallengeParticipantCreateWithoutChallengeInput[] | ChallengeParticipantUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: ChallengeParticipantCreateOrConnectWithoutChallengeInput | ChallengeParticipantCreateOrConnectWithoutChallengeInput[]
    createMany?: ChallengeParticipantCreateManyChallengeInputEnvelope
    connect?: ChallengeParticipantWhereUniqueInput | ChallengeParticipantWhereUniqueInput[]
  }

  export type ChallengeParticipantUncheckedCreateNestedManyWithoutChallengeInput = {
    create?: XOR<ChallengeParticipantCreateWithoutChallengeInput, ChallengeParticipantUncheckedCreateWithoutChallengeInput> | ChallengeParticipantCreateWithoutChallengeInput[] | ChallengeParticipantUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: ChallengeParticipantCreateOrConnectWithoutChallengeInput | ChallengeParticipantCreateOrConnectWithoutChallengeInput[]
    createMany?: ChallengeParticipantCreateManyChallengeInputEnvelope
    connect?: ChallengeParticipantWhereUniqueInput | ChallengeParticipantWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutChallenges_createdNestedInput = {
    create?: XOR<UserCreateWithoutChallenges_createdInput, UserUncheckedCreateWithoutChallenges_createdInput>
    connectOrCreate?: UserCreateOrConnectWithoutChallenges_createdInput
    upsert?: UserUpsertWithoutChallenges_createdInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChallenges_createdInput, UserUpdateWithoutChallenges_createdInput>, UserUncheckedUpdateWithoutChallenges_createdInput>
  }

  export type ChallengeParticipantUpdateManyWithoutChallengeNestedInput = {
    create?: XOR<ChallengeParticipantCreateWithoutChallengeInput, ChallengeParticipantUncheckedCreateWithoutChallengeInput> | ChallengeParticipantCreateWithoutChallengeInput[] | ChallengeParticipantUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: ChallengeParticipantCreateOrConnectWithoutChallengeInput | ChallengeParticipantCreateOrConnectWithoutChallengeInput[]
    upsert?: ChallengeParticipantUpsertWithWhereUniqueWithoutChallengeInput | ChallengeParticipantUpsertWithWhereUniqueWithoutChallengeInput[]
    createMany?: ChallengeParticipantCreateManyChallengeInputEnvelope
    set?: ChallengeParticipantWhereUniqueInput | ChallengeParticipantWhereUniqueInput[]
    disconnect?: ChallengeParticipantWhereUniqueInput | ChallengeParticipantWhereUniqueInput[]
    delete?: ChallengeParticipantWhereUniqueInput | ChallengeParticipantWhereUniqueInput[]
    connect?: ChallengeParticipantWhereUniqueInput | ChallengeParticipantWhereUniqueInput[]
    update?: ChallengeParticipantUpdateWithWhereUniqueWithoutChallengeInput | ChallengeParticipantUpdateWithWhereUniqueWithoutChallengeInput[]
    updateMany?: ChallengeParticipantUpdateManyWithWhereWithoutChallengeInput | ChallengeParticipantUpdateManyWithWhereWithoutChallengeInput[]
    deleteMany?: ChallengeParticipantScalarWhereInput | ChallengeParticipantScalarWhereInput[]
  }

  export type ChallengeParticipantUncheckedUpdateManyWithoutChallengeNestedInput = {
    create?: XOR<ChallengeParticipantCreateWithoutChallengeInput, ChallengeParticipantUncheckedCreateWithoutChallengeInput> | ChallengeParticipantCreateWithoutChallengeInput[] | ChallengeParticipantUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: ChallengeParticipantCreateOrConnectWithoutChallengeInput | ChallengeParticipantCreateOrConnectWithoutChallengeInput[]
    upsert?: ChallengeParticipantUpsertWithWhereUniqueWithoutChallengeInput | ChallengeParticipantUpsertWithWhereUniqueWithoutChallengeInput[]
    createMany?: ChallengeParticipantCreateManyChallengeInputEnvelope
    set?: ChallengeParticipantWhereUniqueInput | ChallengeParticipantWhereUniqueInput[]
    disconnect?: ChallengeParticipantWhereUniqueInput | ChallengeParticipantWhereUniqueInput[]
    delete?: ChallengeParticipantWhereUniqueInput | ChallengeParticipantWhereUniqueInput[]
    connect?: ChallengeParticipantWhereUniqueInput | ChallengeParticipantWhereUniqueInput[]
    update?: ChallengeParticipantUpdateWithWhereUniqueWithoutChallengeInput | ChallengeParticipantUpdateWithWhereUniqueWithoutChallengeInput[]
    updateMany?: ChallengeParticipantUpdateManyWithWhereWithoutChallengeInput | ChallengeParticipantUpdateManyWithWhereWithoutChallengeInput[]
    deleteMany?: ChallengeParticipantScalarWhereInput | ChallengeParticipantScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutChallenge_participationsInput = {
    create?: XOR<UserCreateWithoutChallenge_participationsInput, UserUncheckedCreateWithoutChallenge_participationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutChallenge_participationsInput
    connect?: UserWhereUniqueInput
  }

  export type ChallengeCreateNestedOneWithoutParticipantsInput = {
    create?: XOR<ChallengeCreateWithoutParticipantsInput, ChallengeUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: ChallengeCreateOrConnectWithoutParticipantsInput
    connect?: ChallengeWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutChallenge_participationsNestedInput = {
    create?: XOR<UserCreateWithoutChallenge_participationsInput, UserUncheckedCreateWithoutChallenge_participationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutChallenge_participationsInput
    upsert?: UserUpsertWithoutChallenge_participationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChallenge_participationsInput, UserUpdateWithoutChallenge_participationsInput>, UserUncheckedUpdateWithoutChallenge_participationsInput>
  }

  export type ChallengeUpdateOneRequiredWithoutParticipantsNestedInput = {
    create?: XOR<ChallengeCreateWithoutParticipantsInput, ChallengeUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: ChallengeCreateOrConnectWithoutParticipantsInput
    upsert?: ChallengeUpsertWithoutParticipantsInput
    connect?: ChallengeWhereUniqueInput
    update?: XOR<XOR<ChallengeUpdateToOneWithWhereWithoutParticipantsInput, ChallengeUpdateWithoutParticipantsInput>, ChallengeUncheckedUpdateWithoutParticipantsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NutritionalPlanCreateWithoutUserInput = {
    name: string
    daily_calories: number
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    meals?: PlanMealCreateNestedManyWithoutPlanInput
    meal_registrations?: MealRegistrationCreateNestedManyWithoutPlanInput
    daily_scores?: DailyScoreCreateNestedManyWithoutPlanInput
  }

  export type NutritionalPlanUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    daily_calories: number
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    meals?: PlanMealUncheckedCreateNestedManyWithoutPlanInput
    meal_registrations?: MealRegistrationUncheckedCreateNestedManyWithoutPlanInput
    daily_scores?: DailyScoreUncheckedCreateNestedManyWithoutPlanInput
  }

  export type NutritionalPlanCreateOrConnectWithoutUserInput = {
    where: NutritionalPlanWhereUniqueInput
    create: XOR<NutritionalPlanCreateWithoutUserInput, NutritionalPlanUncheckedCreateWithoutUserInput>
  }

  export type NutritionalPlanCreateManyUserInputEnvelope = {
    data: NutritionalPlanCreateManyUserInput | NutritionalPlanCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MealRegistrationCreateWithoutUserInput = {
    meal_name: string
    photo_url: string
    ai_analysis?: NullableJsonNullValueInput | InputJsonValue
    detected_foods?: NullableJsonNullValueInput | InputJsonValue
    estimated_calories?: number | null
    estimated_protein?: number | null
    estimated_carbs?: number | null
    estimated_fats?: number | null
    meal_score?: number | null
    adherence_tags?: NullableJsonNullValueInput | InputJsonValue
    ai_message?: string | null
    registered_at?: Date | string
    plan?: NutritionalPlanCreateNestedOneWithoutMeal_registrationsInput
  }

  export type MealRegistrationUncheckedCreateWithoutUserInput = {
    id?: number
    plan_id?: number | null
    meal_name: string
    photo_url: string
    ai_analysis?: NullableJsonNullValueInput | InputJsonValue
    detected_foods?: NullableJsonNullValueInput | InputJsonValue
    estimated_calories?: number | null
    estimated_protein?: number | null
    estimated_carbs?: number | null
    estimated_fats?: number | null
    meal_score?: number | null
    adherence_tags?: NullableJsonNullValueInput | InputJsonValue
    ai_message?: string | null
    registered_at?: Date | string
  }

  export type MealRegistrationCreateOrConnectWithoutUserInput = {
    where: MealRegistrationWhereUniqueInput
    create: XOR<MealRegistrationCreateWithoutUserInput, MealRegistrationUncheckedCreateWithoutUserInput>
  }

  export type MealRegistrationCreateManyUserInputEnvelope = {
    data: MealRegistrationCreateManyUserInput | MealRegistrationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DailyScoreCreateWithoutUserInput = {
    date: Date | string
    total_calories?: number | null
    target_calories?: number | null
    average_meal_score?: number | null
    daily_score?: number | null
    streak_days?: number | null
    status?: string | null
    created_at?: Date | string
    plan?: NutritionalPlanCreateNestedOneWithoutDaily_scoresInput
  }

  export type DailyScoreUncheckedCreateWithoutUserInput = {
    id?: number
    plan_id?: number | null
    date: Date | string
    total_calories?: number | null
    target_calories?: number | null
    average_meal_score?: number | null
    daily_score?: number | null
    streak_days?: number | null
    status?: string | null
    created_at?: Date | string
  }

  export type DailyScoreCreateOrConnectWithoutUserInput = {
    where: DailyScoreWhereUniqueInput
    create: XOR<DailyScoreCreateWithoutUserInput, DailyScoreUncheckedCreateWithoutUserInput>
  }

  export type DailyScoreCreateManyUserInputEnvelope = {
    data: DailyScoreCreateManyUserInput | DailyScoreCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserGamificationCreateWithoutUserInput = {
    total_xp?: number
    current_level?: number
    total_meals_registered?: number
    current_streak?: number
    longest_streak?: number
    badges?: NullableJsonNullValueInput | InputJsonValue
    updated_at?: Date | string
  }

  export type UserGamificationUncheckedCreateWithoutUserInput = {
    id?: number
    total_xp?: number
    current_level?: number
    total_meals_registered?: number
    current_streak?: number
    longest_streak?: number
    badges?: NullableJsonNullValueInput | InputJsonValue
    updated_at?: Date | string
  }

  export type UserGamificationCreateOrConnectWithoutUserInput = {
    where: UserGamificationWhereUniqueInput
    create: XOR<UserGamificationCreateWithoutUserInput, UserGamificationUncheckedCreateWithoutUserInput>
  }

  export type ChallengeCreateWithoutCreatorInput = {
    name: string
    description?: string | null
    duration_days: number
    min_score?: number
    invite_code: string
    start_date?: Date | string | null
    end_date?: Date | string | null
    created_at?: Date | string
    participants?: ChallengeParticipantCreateNestedManyWithoutChallengeInput
  }

  export type ChallengeUncheckedCreateWithoutCreatorInput = {
    id?: number
    name: string
    description?: string | null
    duration_days: number
    min_score?: number
    invite_code: string
    start_date?: Date | string | null
    end_date?: Date | string | null
    created_at?: Date | string
    participants?: ChallengeParticipantUncheckedCreateNestedManyWithoutChallengeInput
  }

  export type ChallengeCreateOrConnectWithoutCreatorInput = {
    where: ChallengeWhereUniqueInput
    create: XOR<ChallengeCreateWithoutCreatorInput, ChallengeUncheckedCreateWithoutCreatorInput>
  }

  export type ChallengeCreateManyCreatorInputEnvelope = {
    data: ChallengeCreateManyCreatorInput | ChallengeCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type ChallengeParticipantCreateWithoutUserInput = {
    average_score?: number | null
    current_streak?: number | null
    badges_earned?: NullableJsonNullValueInput | InputJsonValue
    joined_at?: Date | string
    challenge: ChallengeCreateNestedOneWithoutParticipantsInput
  }

  export type ChallengeParticipantUncheckedCreateWithoutUserInput = {
    id?: number
    challenge_id: number
    average_score?: number | null
    current_streak?: number | null
    badges_earned?: NullableJsonNullValueInput | InputJsonValue
    joined_at?: Date | string
  }

  export type ChallengeParticipantCreateOrConnectWithoutUserInput = {
    where: ChallengeParticipantWhereUniqueInput
    create: XOR<ChallengeParticipantCreateWithoutUserInput, ChallengeParticipantUncheckedCreateWithoutUserInput>
  }

  export type ChallengeParticipantCreateManyUserInputEnvelope = {
    data: ChallengeParticipantCreateManyUserInput | ChallengeParticipantCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NutritionalPlanUpsertWithWhereUniqueWithoutUserInput = {
    where: NutritionalPlanWhereUniqueInput
    update: XOR<NutritionalPlanUpdateWithoutUserInput, NutritionalPlanUncheckedUpdateWithoutUserInput>
    create: XOR<NutritionalPlanCreateWithoutUserInput, NutritionalPlanUncheckedCreateWithoutUserInput>
  }

  export type NutritionalPlanUpdateWithWhereUniqueWithoutUserInput = {
    where: NutritionalPlanWhereUniqueInput
    data: XOR<NutritionalPlanUpdateWithoutUserInput, NutritionalPlanUncheckedUpdateWithoutUserInput>
  }

  export type NutritionalPlanUpdateManyWithWhereWithoutUserInput = {
    where: NutritionalPlanScalarWhereInput
    data: XOR<NutritionalPlanUpdateManyMutationInput, NutritionalPlanUncheckedUpdateManyWithoutUserInput>
  }

  export type NutritionalPlanScalarWhereInput = {
    AND?: NutritionalPlanScalarWhereInput | NutritionalPlanScalarWhereInput[]
    OR?: NutritionalPlanScalarWhereInput[]
    NOT?: NutritionalPlanScalarWhereInput | NutritionalPlanScalarWhereInput[]
    id?: IntFilter<"NutritionalPlan"> | number
    user_id?: StringFilter<"NutritionalPlan"> | string
    name?: StringFilter<"NutritionalPlan"> | string
    daily_calories?: IntFilter<"NutritionalPlan"> | number
    is_active?: BoolFilter<"NutritionalPlan"> | boolean
    created_at?: DateTimeFilter<"NutritionalPlan"> | Date | string
    updated_at?: DateTimeFilter<"NutritionalPlan"> | Date | string
  }

  export type MealRegistrationUpsertWithWhereUniqueWithoutUserInput = {
    where: MealRegistrationWhereUniqueInput
    update: XOR<MealRegistrationUpdateWithoutUserInput, MealRegistrationUncheckedUpdateWithoutUserInput>
    create: XOR<MealRegistrationCreateWithoutUserInput, MealRegistrationUncheckedCreateWithoutUserInput>
  }

  export type MealRegistrationUpdateWithWhereUniqueWithoutUserInput = {
    where: MealRegistrationWhereUniqueInput
    data: XOR<MealRegistrationUpdateWithoutUserInput, MealRegistrationUncheckedUpdateWithoutUserInput>
  }

  export type MealRegistrationUpdateManyWithWhereWithoutUserInput = {
    where: MealRegistrationScalarWhereInput
    data: XOR<MealRegistrationUpdateManyMutationInput, MealRegistrationUncheckedUpdateManyWithoutUserInput>
  }

  export type MealRegistrationScalarWhereInput = {
    AND?: MealRegistrationScalarWhereInput | MealRegistrationScalarWhereInput[]
    OR?: MealRegistrationScalarWhereInput[]
    NOT?: MealRegistrationScalarWhereInput | MealRegistrationScalarWhereInput[]
    id?: IntFilter<"MealRegistration"> | number
    user_id?: StringFilter<"MealRegistration"> | string
    plan_id?: IntNullableFilter<"MealRegistration"> | number | null
    meal_name?: StringFilter<"MealRegistration"> | string
    photo_url?: StringFilter<"MealRegistration"> | string
    ai_analysis?: JsonNullableFilter<"MealRegistration">
    detected_foods?: JsonNullableFilter<"MealRegistration">
    estimated_calories?: FloatNullableFilter<"MealRegistration"> | number | null
    estimated_protein?: FloatNullableFilter<"MealRegistration"> | number | null
    estimated_carbs?: FloatNullableFilter<"MealRegistration"> | number | null
    estimated_fats?: FloatNullableFilter<"MealRegistration"> | number | null
    meal_score?: IntNullableFilter<"MealRegistration"> | number | null
    adherence_tags?: JsonNullableFilter<"MealRegistration">
    ai_message?: StringNullableFilter<"MealRegistration"> | string | null
    registered_at?: DateTimeFilter<"MealRegistration"> | Date | string
  }

  export type DailyScoreUpsertWithWhereUniqueWithoutUserInput = {
    where: DailyScoreWhereUniqueInput
    update: XOR<DailyScoreUpdateWithoutUserInput, DailyScoreUncheckedUpdateWithoutUserInput>
    create: XOR<DailyScoreCreateWithoutUserInput, DailyScoreUncheckedCreateWithoutUserInput>
  }

  export type DailyScoreUpdateWithWhereUniqueWithoutUserInput = {
    where: DailyScoreWhereUniqueInput
    data: XOR<DailyScoreUpdateWithoutUserInput, DailyScoreUncheckedUpdateWithoutUserInput>
  }

  export type DailyScoreUpdateManyWithWhereWithoutUserInput = {
    where: DailyScoreScalarWhereInput
    data: XOR<DailyScoreUpdateManyMutationInput, DailyScoreUncheckedUpdateManyWithoutUserInput>
  }

  export type DailyScoreScalarWhereInput = {
    AND?: DailyScoreScalarWhereInput | DailyScoreScalarWhereInput[]
    OR?: DailyScoreScalarWhereInput[]
    NOT?: DailyScoreScalarWhereInput | DailyScoreScalarWhereInput[]
    id?: IntFilter<"DailyScore"> | number
    user_id?: StringFilter<"DailyScore"> | string
    plan_id?: IntNullableFilter<"DailyScore"> | number | null
    date?: DateTimeFilter<"DailyScore"> | Date | string
    total_calories?: FloatNullableFilter<"DailyScore"> | number | null
    target_calories?: IntNullableFilter<"DailyScore"> | number | null
    average_meal_score?: IntNullableFilter<"DailyScore"> | number | null
    daily_score?: IntNullableFilter<"DailyScore"> | number | null
    streak_days?: IntNullableFilter<"DailyScore"> | number | null
    status?: StringNullableFilter<"DailyScore"> | string | null
    created_at?: DateTimeFilter<"DailyScore"> | Date | string
  }

  export type UserGamificationUpsertWithoutUserInput = {
    update: XOR<UserGamificationUpdateWithoutUserInput, UserGamificationUncheckedUpdateWithoutUserInput>
    create: XOR<UserGamificationCreateWithoutUserInput, UserGamificationUncheckedCreateWithoutUserInput>
    where?: UserGamificationWhereInput
  }

  export type UserGamificationUpdateToOneWithWhereWithoutUserInput = {
    where?: UserGamificationWhereInput
    data: XOR<UserGamificationUpdateWithoutUserInput, UserGamificationUncheckedUpdateWithoutUserInput>
  }

  export type UserGamificationUpdateWithoutUserInput = {
    total_xp?: IntFieldUpdateOperationsInput | number
    current_level?: IntFieldUpdateOperationsInput | number
    total_meals_registered?: IntFieldUpdateOperationsInput | number
    current_streak?: IntFieldUpdateOperationsInput | number
    longest_streak?: IntFieldUpdateOperationsInput | number
    badges?: NullableJsonNullValueInput | InputJsonValue
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserGamificationUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    total_xp?: IntFieldUpdateOperationsInput | number
    current_level?: IntFieldUpdateOperationsInput | number
    total_meals_registered?: IntFieldUpdateOperationsInput | number
    current_streak?: IntFieldUpdateOperationsInput | number
    longest_streak?: IntFieldUpdateOperationsInput | number
    badges?: NullableJsonNullValueInput | InputJsonValue
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChallengeUpsertWithWhereUniqueWithoutCreatorInput = {
    where: ChallengeWhereUniqueInput
    update: XOR<ChallengeUpdateWithoutCreatorInput, ChallengeUncheckedUpdateWithoutCreatorInput>
    create: XOR<ChallengeCreateWithoutCreatorInput, ChallengeUncheckedCreateWithoutCreatorInput>
  }

  export type ChallengeUpdateWithWhereUniqueWithoutCreatorInput = {
    where: ChallengeWhereUniqueInput
    data: XOR<ChallengeUpdateWithoutCreatorInput, ChallengeUncheckedUpdateWithoutCreatorInput>
  }

  export type ChallengeUpdateManyWithWhereWithoutCreatorInput = {
    where: ChallengeScalarWhereInput
    data: XOR<ChallengeUpdateManyMutationInput, ChallengeUncheckedUpdateManyWithoutCreatorInput>
  }

  export type ChallengeScalarWhereInput = {
    AND?: ChallengeScalarWhereInput | ChallengeScalarWhereInput[]
    OR?: ChallengeScalarWhereInput[]
    NOT?: ChallengeScalarWhereInput | ChallengeScalarWhereInput[]
    id?: IntFilter<"Challenge"> | number
    creator_id?: StringFilter<"Challenge"> | string
    name?: StringFilter<"Challenge"> | string
    description?: StringNullableFilter<"Challenge"> | string | null
    duration_days?: IntFilter<"Challenge"> | number
    min_score?: IntFilter<"Challenge"> | number
    invite_code?: StringFilter<"Challenge"> | string
    start_date?: DateTimeNullableFilter<"Challenge"> | Date | string | null
    end_date?: DateTimeNullableFilter<"Challenge"> | Date | string | null
    created_at?: DateTimeFilter<"Challenge"> | Date | string
  }

  export type ChallengeParticipantUpsertWithWhereUniqueWithoutUserInput = {
    where: ChallengeParticipantWhereUniqueInput
    update: XOR<ChallengeParticipantUpdateWithoutUserInput, ChallengeParticipantUncheckedUpdateWithoutUserInput>
    create: XOR<ChallengeParticipantCreateWithoutUserInput, ChallengeParticipantUncheckedCreateWithoutUserInput>
  }

  export type ChallengeParticipantUpdateWithWhereUniqueWithoutUserInput = {
    where: ChallengeParticipantWhereUniqueInput
    data: XOR<ChallengeParticipantUpdateWithoutUserInput, ChallengeParticipantUncheckedUpdateWithoutUserInput>
  }

  export type ChallengeParticipantUpdateManyWithWhereWithoutUserInput = {
    where: ChallengeParticipantScalarWhereInput
    data: XOR<ChallengeParticipantUpdateManyMutationInput, ChallengeParticipantUncheckedUpdateManyWithoutUserInput>
  }

  export type ChallengeParticipantScalarWhereInput = {
    AND?: ChallengeParticipantScalarWhereInput | ChallengeParticipantScalarWhereInput[]
    OR?: ChallengeParticipantScalarWhereInput[]
    NOT?: ChallengeParticipantScalarWhereInput | ChallengeParticipantScalarWhereInput[]
    id?: IntFilter<"ChallengeParticipant"> | number
    challenge_id?: IntFilter<"ChallengeParticipant"> | number
    user_id?: StringFilter<"ChallengeParticipant"> | string
    average_score?: FloatNullableFilter<"ChallengeParticipant"> | number | null
    current_streak?: IntNullableFilter<"ChallengeParticipant"> | number | null
    badges_earned?: JsonNullableFilter<"ChallengeParticipant">
    joined_at?: DateTimeFilter<"ChallengeParticipant"> | Date | string
  }

  export type UserCreateWithoutNutritional_plansInput = {
    id?: string
    email: string
    password_hash: string
    name?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    meal_registrations?: MealRegistrationCreateNestedManyWithoutUserInput
    daily_scores?: DailyScoreCreateNestedManyWithoutUserInput
    gamification?: UserGamificationCreateNestedOneWithoutUserInput
    challenges_created?: ChallengeCreateNestedManyWithoutCreatorInput
    challenge_participations?: ChallengeParticipantCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNutritional_plansInput = {
    id?: string
    email: string
    password_hash: string
    name?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    meal_registrations?: MealRegistrationUncheckedCreateNestedManyWithoutUserInput
    daily_scores?: DailyScoreUncheckedCreateNestedManyWithoutUserInput
    gamification?: UserGamificationUncheckedCreateNestedOneWithoutUserInput
    challenges_created?: ChallengeUncheckedCreateNestedManyWithoutCreatorInput
    challenge_participations?: ChallengeParticipantUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNutritional_plansInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNutritional_plansInput, UserUncheckedCreateWithoutNutritional_plansInput>
  }

  export type PlanMealCreateWithoutPlanInput = {
    meal_name: string
    suggested_time?: string | null
    target_calories?: number | null
    allowed_foods?: string | null
    notes?: string | null
  }

  export type PlanMealUncheckedCreateWithoutPlanInput = {
    id?: number
    meal_name: string
    suggested_time?: string | null
    target_calories?: number | null
    allowed_foods?: string | null
    notes?: string | null
  }

  export type PlanMealCreateOrConnectWithoutPlanInput = {
    where: PlanMealWhereUniqueInput
    create: XOR<PlanMealCreateWithoutPlanInput, PlanMealUncheckedCreateWithoutPlanInput>
  }

  export type PlanMealCreateManyPlanInputEnvelope = {
    data: PlanMealCreateManyPlanInput | PlanMealCreateManyPlanInput[]
    skipDuplicates?: boolean
  }

  export type MealRegistrationCreateWithoutPlanInput = {
    meal_name: string
    photo_url: string
    ai_analysis?: NullableJsonNullValueInput | InputJsonValue
    detected_foods?: NullableJsonNullValueInput | InputJsonValue
    estimated_calories?: number | null
    estimated_protein?: number | null
    estimated_carbs?: number | null
    estimated_fats?: number | null
    meal_score?: number | null
    adherence_tags?: NullableJsonNullValueInput | InputJsonValue
    ai_message?: string | null
    registered_at?: Date | string
    user: UserCreateNestedOneWithoutMeal_registrationsInput
  }

  export type MealRegistrationUncheckedCreateWithoutPlanInput = {
    id?: number
    user_id: string
    meal_name: string
    photo_url: string
    ai_analysis?: NullableJsonNullValueInput | InputJsonValue
    detected_foods?: NullableJsonNullValueInput | InputJsonValue
    estimated_calories?: number | null
    estimated_protein?: number | null
    estimated_carbs?: number | null
    estimated_fats?: number | null
    meal_score?: number | null
    adherence_tags?: NullableJsonNullValueInput | InputJsonValue
    ai_message?: string | null
    registered_at?: Date | string
  }

  export type MealRegistrationCreateOrConnectWithoutPlanInput = {
    where: MealRegistrationWhereUniqueInput
    create: XOR<MealRegistrationCreateWithoutPlanInput, MealRegistrationUncheckedCreateWithoutPlanInput>
  }

  export type MealRegistrationCreateManyPlanInputEnvelope = {
    data: MealRegistrationCreateManyPlanInput | MealRegistrationCreateManyPlanInput[]
    skipDuplicates?: boolean
  }

  export type DailyScoreCreateWithoutPlanInput = {
    date: Date | string
    total_calories?: number | null
    target_calories?: number | null
    average_meal_score?: number | null
    daily_score?: number | null
    streak_days?: number | null
    status?: string | null
    created_at?: Date | string
    user: UserCreateNestedOneWithoutDaily_scoresInput
  }

  export type DailyScoreUncheckedCreateWithoutPlanInput = {
    id?: number
    user_id: string
    date: Date | string
    total_calories?: number | null
    target_calories?: number | null
    average_meal_score?: number | null
    daily_score?: number | null
    streak_days?: number | null
    status?: string | null
    created_at?: Date | string
  }

  export type DailyScoreCreateOrConnectWithoutPlanInput = {
    where: DailyScoreWhereUniqueInput
    create: XOR<DailyScoreCreateWithoutPlanInput, DailyScoreUncheckedCreateWithoutPlanInput>
  }

  export type DailyScoreCreateManyPlanInputEnvelope = {
    data: DailyScoreCreateManyPlanInput | DailyScoreCreateManyPlanInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutNutritional_plansInput = {
    update: XOR<UserUpdateWithoutNutritional_plansInput, UserUncheckedUpdateWithoutNutritional_plansInput>
    create: XOR<UserCreateWithoutNutritional_plansInput, UserUncheckedCreateWithoutNutritional_plansInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNutritional_plansInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNutritional_plansInput, UserUncheckedUpdateWithoutNutritional_plansInput>
  }

  export type UserUpdateWithoutNutritional_plansInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    meal_registrations?: MealRegistrationUpdateManyWithoutUserNestedInput
    daily_scores?: DailyScoreUpdateManyWithoutUserNestedInput
    gamification?: UserGamificationUpdateOneWithoutUserNestedInput
    challenges_created?: ChallengeUpdateManyWithoutCreatorNestedInput
    challenge_participations?: ChallengeParticipantUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNutritional_plansInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    meal_registrations?: MealRegistrationUncheckedUpdateManyWithoutUserNestedInput
    daily_scores?: DailyScoreUncheckedUpdateManyWithoutUserNestedInput
    gamification?: UserGamificationUncheckedUpdateOneWithoutUserNestedInput
    challenges_created?: ChallengeUncheckedUpdateManyWithoutCreatorNestedInput
    challenge_participations?: ChallengeParticipantUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PlanMealUpsertWithWhereUniqueWithoutPlanInput = {
    where: PlanMealWhereUniqueInput
    update: XOR<PlanMealUpdateWithoutPlanInput, PlanMealUncheckedUpdateWithoutPlanInput>
    create: XOR<PlanMealCreateWithoutPlanInput, PlanMealUncheckedCreateWithoutPlanInput>
  }

  export type PlanMealUpdateWithWhereUniqueWithoutPlanInput = {
    where: PlanMealWhereUniqueInput
    data: XOR<PlanMealUpdateWithoutPlanInput, PlanMealUncheckedUpdateWithoutPlanInput>
  }

  export type PlanMealUpdateManyWithWhereWithoutPlanInput = {
    where: PlanMealScalarWhereInput
    data: XOR<PlanMealUpdateManyMutationInput, PlanMealUncheckedUpdateManyWithoutPlanInput>
  }

  export type PlanMealScalarWhereInput = {
    AND?: PlanMealScalarWhereInput | PlanMealScalarWhereInput[]
    OR?: PlanMealScalarWhereInput[]
    NOT?: PlanMealScalarWhereInput | PlanMealScalarWhereInput[]
    id?: IntFilter<"PlanMeal"> | number
    plan_id?: IntFilter<"PlanMeal"> | number
    meal_name?: StringFilter<"PlanMeal"> | string
    suggested_time?: StringNullableFilter<"PlanMeal"> | string | null
    target_calories?: IntNullableFilter<"PlanMeal"> | number | null
    allowed_foods?: StringNullableFilter<"PlanMeal"> | string | null
    notes?: StringNullableFilter<"PlanMeal"> | string | null
  }

  export type MealRegistrationUpsertWithWhereUniqueWithoutPlanInput = {
    where: MealRegistrationWhereUniqueInput
    update: XOR<MealRegistrationUpdateWithoutPlanInput, MealRegistrationUncheckedUpdateWithoutPlanInput>
    create: XOR<MealRegistrationCreateWithoutPlanInput, MealRegistrationUncheckedCreateWithoutPlanInput>
  }

  export type MealRegistrationUpdateWithWhereUniqueWithoutPlanInput = {
    where: MealRegistrationWhereUniqueInput
    data: XOR<MealRegistrationUpdateWithoutPlanInput, MealRegistrationUncheckedUpdateWithoutPlanInput>
  }

  export type MealRegistrationUpdateManyWithWhereWithoutPlanInput = {
    where: MealRegistrationScalarWhereInput
    data: XOR<MealRegistrationUpdateManyMutationInput, MealRegistrationUncheckedUpdateManyWithoutPlanInput>
  }

  export type DailyScoreUpsertWithWhereUniqueWithoutPlanInput = {
    where: DailyScoreWhereUniqueInput
    update: XOR<DailyScoreUpdateWithoutPlanInput, DailyScoreUncheckedUpdateWithoutPlanInput>
    create: XOR<DailyScoreCreateWithoutPlanInput, DailyScoreUncheckedCreateWithoutPlanInput>
  }

  export type DailyScoreUpdateWithWhereUniqueWithoutPlanInput = {
    where: DailyScoreWhereUniqueInput
    data: XOR<DailyScoreUpdateWithoutPlanInput, DailyScoreUncheckedUpdateWithoutPlanInput>
  }

  export type DailyScoreUpdateManyWithWhereWithoutPlanInput = {
    where: DailyScoreScalarWhereInput
    data: XOR<DailyScoreUpdateManyMutationInput, DailyScoreUncheckedUpdateManyWithoutPlanInput>
  }

  export type NutritionalPlanCreateWithoutMealsInput = {
    name: string
    daily_calories: number
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutNutritional_plansInput
    meal_registrations?: MealRegistrationCreateNestedManyWithoutPlanInput
    daily_scores?: DailyScoreCreateNestedManyWithoutPlanInput
  }

  export type NutritionalPlanUncheckedCreateWithoutMealsInput = {
    id?: number
    user_id: string
    name: string
    daily_calories: number
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    meal_registrations?: MealRegistrationUncheckedCreateNestedManyWithoutPlanInput
    daily_scores?: DailyScoreUncheckedCreateNestedManyWithoutPlanInput
  }

  export type NutritionalPlanCreateOrConnectWithoutMealsInput = {
    where: NutritionalPlanWhereUniqueInput
    create: XOR<NutritionalPlanCreateWithoutMealsInput, NutritionalPlanUncheckedCreateWithoutMealsInput>
  }

  export type NutritionalPlanUpsertWithoutMealsInput = {
    update: XOR<NutritionalPlanUpdateWithoutMealsInput, NutritionalPlanUncheckedUpdateWithoutMealsInput>
    create: XOR<NutritionalPlanCreateWithoutMealsInput, NutritionalPlanUncheckedCreateWithoutMealsInput>
    where?: NutritionalPlanWhereInput
  }

  export type NutritionalPlanUpdateToOneWithWhereWithoutMealsInput = {
    where?: NutritionalPlanWhereInput
    data: XOR<NutritionalPlanUpdateWithoutMealsInput, NutritionalPlanUncheckedUpdateWithoutMealsInput>
  }

  export type NutritionalPlanUpdateWithoutMealsInput = {
    name?: StringFieldUpdateOperationsInput | string
    daily_calories?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNutritional_plansNestedInput
    meal_registrations?: MealRegistrationUpdateManyWithoutPlanNestedInput
    daily_scores?: DailyScoreUpdateManyWithoutPlanNestedInput
  }

  export type NutritionalPlanUncheckedUpdateWithoutMealsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    daily_calories?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    meal_registrations?: MealRegistrationUncheckedUpdateManyWithoutPlanNestedInput
    daily_scores?: DailyScoreUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type UserCreateWithoutMeal_registrationsInput = {
    id?: string
    email: string
    password_hash: string
    name?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    nutritional_plans?: NutritionalPlanCreateNestedManyWithoutUserInput
    daily_scores?: DailyScoreCreateNestedManyWithoutUserInput
    gamification?: UserGamificationCreateNestedOneWithoutUserInput
    challenges_created?: ChallengeCreateNestedManyWithoutCreatorInput
    challenge_participations?: ChallengeParticipantCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMeal_registrationsInput = {
    id?: string
    email: string
    password_hash: string
    name?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    nutritional_plans?: NutritionalPlanUncheckedCreateNestedManyWithoutUserInput
    daily_scores?: DailyScoreUncheckedCreateNestedManyWithoutUserInput
    gamification?: UserGamificationUncheckedCreateNestedOneWithoutUserInput
    challenges_created?: ChallengeUncheckedCreateNestedManyWithoutCreatorInput
    challenge_participations?: ChallengeParticipantUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMeal_registrationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMeal_registrationsInput, UserUncheckedCreateWithoutMeal_registrationsInput>
  }

  export type NutritionalPlanCreateWithoutMeal_registrationsInput = {
    name: string
    daily_calories: number
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutNutritional_plansInput
    meals?: PlanMealCreateNestedManyWithoutPlanInput
    daily_scores?: DailyScoreCreateNestedManyWithoutPlanInput
  }

  export type NutritionalPlanUncheckedCreateWithoutMeal_registrationsInput = {
    id?: number
    user_id: string
    name: string
    daily_calories: number
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    meals?: PlanMealUncheckedCreateNestedManyWithoutPlanInput
    daily_scores?: DailyScoreUncheckedCreateNestedManyWithoutPlanInput
  }

  export type NutritionalPlanCreateOrConnectWithoutMeal_registrationsInput = {
    where: NutritionalPlanWhereUniqueInput
    create: XOR<NutritionalPlanCreateWithoutMeal_registrationsInput, NutritionalPlanUncheckedCreateWithoutMeal_registrationsInput>
  }

  export type UserUpsertWithoutMeal_registrationsInput = {
    update: XOR<UserUpdateWithoutMeal_registrationsInput, UserUncheckedUpdateWithoutMeal_registrationsInput>
    create: XOR<UserCreateWithoutMeal_registrationsInput, UserUncheckedCreateWithoutMeal_registrationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMeal_registrationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMeal_registrationsInput, UserUncheckedUpdateWithoutMeal_registrationsInput>
  }

  export type UserUpdateWithoutMeal_registrationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    nutritional_plans?: NutritionalPlanUpdateManyWithoutUserNestedInput
    daily_scores?: DailyScoreUpdateManyWithoutUserNestedInput
    gamification?: UserGamificationUpdateOneWithoutUserNestedInput
    challenges_created?: ChallengeUpdateManyWithoutCreatorNestedInput
    challenge_participations?: ChallengeParticipantUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMeal_registrationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    nutritional_plans?: NutritionalPlanUncheckedUpdateManyWithoutUserNestedInput
    daily_scores?: DailyScoreUncheckedUpdateManyWithoutUserNestedInput
    gamification?: UserGamificationUncheckedUpdateOneWithoutUserNestedInput
    challenges_created?: ChallengeUncheckedUpdateManyWithoutCreatorNestedInput
    challenge_participations?: ChallengeParticipantUncheckedUpdateManyWithoutUserNestedInput
  }

  export type NutritionalPlanUpsertWithoutMeal_registrationsInput = {
    update: XOR<NutritionalPlanUpdateWithoutMeal_registrationsInput, NutritionalPlanUncheckedUpdateWithoutMeal_registrationsInput>
    create: XOR<NutritionalPlanCreateWithoutMeal_registrationsInput, NutritionalPlanUncheckedCreateWithoutMeal_registrationsInput>
    where?: NutritionalPlanWhereInput
  }

  export type NutritionalPlanUpdateToOneWithWhereWithoutMeal_registrationsInput = {
    where?: NutritionalPlanWhereInput
    data: XOR<NutritionalPlanUpdateWithoutMeal_registrationsInput, NutritionalPlanUncheckedUpdateWithoutMeal_registrationsInput>
  }

  export type NutritionalPlanUpdateWithoutMeal_registrationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    daily_calories?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNutritional_plansNestedInput
    meals?: PlanMealUpdateManyWithoutPlanNestedInput
    daily_scores?: DailyScoreUpdateManyWithoutPlanNestedInput
  }

  export type NutritionalPlanUncheckedUpdateWithoutMeal_registrationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    daily_calories?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    meals?: PlanMealUncheckedUpdateManyWithoutPlanNestedInput
    daily_scores?: DailyScoreUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type UserCreateWithoutDaily_scoresInput = {
    id?: string
    email: string
    password_hash: string
    name?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    nutritional_plans?: NutritionalPlanCreateNestedManyWithoutUserInput
    meal_registrations?: MealRegistrationCreateNestedManyWithoutUserInput
    gamification?: UserGamificationCreateNestedOneWithoutUserInput
    challenges_created?: ChallengeCreateNestedManyWithoutCreatorInput
    challenge_participations?: ChallengeParticipantCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDaily_scoresInput = {
    id?: string
    email: string
    password_hash: string
    name?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    nutritional_plans?: NutritionalPlanUncheckedCreateNestedManyWithoutUserInput
    meal_registrations?: MealRegistrationUncheckedCreateNestedManyWithoutUserInput
    gamification?: UserGamificationUncheckedCreateNestedOneWithoutUserInput
    challenges_created?: ChallengeUncheckedCreateNestedManyWithoutCreatorInput
    challenge_participations?: ChallengeParticipantUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDaily_scoresInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDaily_scoresInput, UserUncheckedCreateWithoutDaily_scoresInput>
  }

  export type NutritionalPlanCreateWithoutDaily_scoresInput = {
    name: string
    daily_calories: number
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutNutritional_plansInput
    meals?: PlanMealCreateNestedManyWithoutPlanInput
    meal_registrations?: MealRegistrationCreateNestedManyWithoutPlanInput
  }

  export type NutritionalPlanUncheckedCreateWithoutDaily_scoresInput = {
    id?: number
    user_id: string
    name: string
    daily_calories: number
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    meals?: PlanMealUncheckedCreateNestedManyWithoutPlanInput
    meal_registrations?: MealRegistrationUncheckedCreateNestedManyWithoutPlanInput
  }

  export type NutritionalPlanCreateOrConnectWithoutDaily_scoresInput = {
    where: NutritionalPlanWhereUniqueInput
    create: XOR<NutritionalPlanCreateWithoutDaily_scoresInput, NutritionalPlanUncheckedCreateWithoutDaily_scoresInput>
  }

  export type UserUpsertWithoutDaily_scoresInput = {
    update: XOR<UserUpdateWithoutDaily_scoresInput, UserUncheckedUpdateWithoutDaily_scoresInput>
    create: XOR<UserCreateWithoutDaily_scoresInput, UserUncheckedCreateWithoutDaily_scoresInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDaily_scoresInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDaily_scoresInput, UserUncheckedUpdateWithoutDaily_scoresInput>
  }

  export type UserUpdateWithoutDaily_scoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    nutritional_plans?: NutritionalPlanUpdateManyWithoutUserNestedInput
    meal_registrations?: MealRegistrationUpdateManyWithoutUserNestedInput
    gamification?: UserGamificationUpdateOneWithoutUserNestedInput
    challenges_created?: ChallengeUpdateManyWithoutCreatorNestedInput
    challenge_participations?: ChallengeParticipantUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDaily_scoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    nutritional_plans?: NutritionalPlanUncheckedUpdateManyWithoutUserNestedInput
    meal_registrations?: MealRegistrationUncheckedUpdateManyWithoutUserNestedInput
    gamification?: UserGamificationUncheckedUpdateOneWithoutUserNestedInput
    challenges_created?: ChallengeUncheckedUpdateManyWithoutCreatorNestedInput
    challenge_participations?: ChallengeParticipantUncheckedUpdateManyWithoutUserNestedInput
  }

  export type NutritionalPlanUpsertWithoutDaily_scoresInput = {
    update: XOR<NutritionalPlanUpdateWithoutDaily_scoresInput, NutritionalPlanUncheckedUpdateWithoutDaily_scoresInput>
    create: XOR<NutritionalPlanCreateWithoutDaily_scoresInput, NutritionalPlanUncheckedCreateWithoutDaily_scoresInput>
    where?: NutritionalPlanWhereInput
  }

  export type NutritionalPlanUpdateToOneWithWhereWithoutDaily_scoresInput = {
    where?: NutritionalPlanWhereInput
    data: XOR<NutritionalPlanUpdateWithoutDaily_scoresInput, NutritionalPlanUncheckedUpdateWithoutDaily_scoresInput>
  }

  export type NutritionalPlanUpdateWithoutDaily_scoresInput = {
    name?: StringFieldUpdateOperationsInput | string
    daily_calories?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNutritional_plansNestedInput
    meals?: PlanMealUpdateManyWithoutPlanNestedInput
    meal_registrations?: MealRegistrationUpdateManyWithoutPlanNestedInput
  }

  export type NutritionalPlanUncheckedUpdateWithoutDaily_scoresInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    daily_calories?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    meals?: PlanMealUncheckedUpdateManyWithoutPlanNestedInput
    meal_registrations?: MealRegistrationUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type UserCreateWithoutGamificationInput = {
    id?: string
    email: string
    password_hash: string
    name?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    nutritional_plans?: NutritionalPlanCreateNestedManyWithoutUserInput
    meal_registrations?: MealRegistrationCreateNestedManyWithoutUserInput
    daily_scores?: DailyScoreCreateNestedManyWithoutUserInput
    challenges_created?: ChallengeCreateNestedManyWithoutCreatorInput
    challenge_participations?: ChallengeParticipantCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGamificationInput = {
    id?: string
    email: string
    password_hash: string
    name?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    nutritional_plans?: NutritionalPlanUncheckedCreateNestedManyWithoutUserInput
    meal_registrations?: MealRegistrationUncheckedCreateNestedManyWithoutUserInput
    daily_scores?: DailyScoreUncheckedCreateNestedManyWithoutUserInput
    challenges_created?: ChallengeUncheckedCreateNestedManyWithoutCreatorInput
    challenge_participations?: ChallengeParticipantUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGamificationInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGamificationInput, UserUncheckedCreateWithoutGamificationInput>
  }

  export type UserUpsertWithoutGamificationInput = {
    update: XOR<UserUpdateWithoutGamificationInput, UserUncheckedUpdateWithoutGamificationInput>
    create: XOR<UserCreateWithoutGamificationInput, UserUncheckedCreateWithoutGamificationInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGamificationInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGamificationInput, UserUncheckedUpdateWithoutGamificationInput>
  }

  export type UserUpdateWithoutGamificationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    nutritional_plans?: NutritionalPlanUpdateManyWithoutUserNestedInput
    meal_registrations?: MealRegistrationUpdateManyWithoutUserNestedInput
    daily_scores?: DailyScoreUpdateManyWithoutUserNestedInput
    challenges_created?: ChallengeUpdateManyWithoutCreatorNestedInput
    challenge_participations?: ChallengeParticipantUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGamificationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    nutritional_plans?: NutritionalPlanUncheckedUpdateManyWithoutUserNestedInput
    meal_registrations?: MealRegistrationUncheckedUpdateManyWithoutUserNestedInput
    daily_scores?: DailyScoreUncheckedUpdateManyWithoutUserNestedInput
    challenges_created?: ChallengeUncheckedUpdateManyWithoutCreatorNestedInput
    challenge_participations?: ChallengeParticipantUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutChallenges_createdInput = {
    id?: string
    email: string
    password_hash: string
    name?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    nutritional_plans?: NutritionalPlanCreateNestedManyWithoutUserInput
    meal_registrations?: MealRegistrationCreateNestedManyWithoutUserInput
    daily_scores?: DailyScoreCreateNestedManyWithoutUserInput
    gamification?: UserGamificationCreateNestedOneWithoutUserInput
    challenge_participations?: ChallengeParticipantCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutChallenges_createdInput = {
    id?: string
    email: string
    password_hash: string
    name?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    nutritional_plans?: NutritionalPlanUncheckedCreateNestedManyWithoutUserInput
    meal_registrations?: MealRegistrationUncheckedCreateNestedManyWithoutUserInput
    daily_scores?: DailyScoreUncheckedCreateNestedManyWithoutUserInput
    gamification?: UserGamificationUncheckedCreateNestedOneWithoutUserInput
    challenge_participations?: ChallengeParticipantUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutChallenges_createdInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChallenges_createdInput, UserUncheckedCreateWithoutChallenges_createdInput>
  }

  export type ChallengeParticipantCreateWithoutChallengeInput = {
    average_score?: number | null
    current_streak?: number | null
    badges_earned?: NullableJsonNullValueInput | InputJsonValue
    joined_at?: Date | string
    user: UserCreateNestedOneWithoutChallenge_participationsInput
  }

  export type ChallengeParticipantUncheckedCreateWithoutChallengeInput = {
    id?: number
    user_id: string
    average_score?: number | null
    current_streak?: number | null
    badges_earned?: NullableJsonNullValueInput | InputJsonValue
    joined_at?: Date | string
  }

  export type ChallengeParticipantCreateOrConnectWithoutChallengeInput = {
    where: ChallengeParticipantWhereUniqueInput
    create: XOR<ChallengeParticipantCreateWithoutChallengeInput, ChallengeParticipantUncheckedCreateWithoutChallengeInput>
  }

  export type ChallengeParticipantCreateManyChallengeInputEnvelope = {
    data: ChallengeParticipantCreateManyChallengeInput | ChallengeParticipantCreateManyChallengeInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutChallenges_createdInput = {
    update: XOR<UserUpdateWithoutChallenges_createdInput, UserUncheckedUpdateWithoutChallenges_createdInput>
    create: XOR<UserCreateWithoutChallenges_createdInput, UserUncheckedCreateWithoutChallenges_createdInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChallenges_createdInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChallenges_createdInput, UserUncheckedUpdateWithoutChallenges_createdInput>
  }

  export type UserUpdateWithoutChallenges_createdInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    nutritional_plans?: NutritionalPlanUpdateManyWithoutUserNestedInput
    meal_registrations?: MealRegistrationUpdateManyWithoutUserNestedInput
    daily_scores?: DailyScoreUpdateManyWithoutUserNestedInput
    gamification?: UserGamificationUpdateOneWithoutUserNestedInput
    challenge_participations?: ChallengeParticipantUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutChallenges_createdInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    nutritional_plans?: NutritionalPlanUncheckedUpdateManyWithoutUserNestedInput
    meal_registrations?: MealRegistrationUncheckedUpdateManyWithoutUserNestedInput
    daily_scores?: DailyScoreUncheckedUpdateManyWithoutUserNestedInput
    gamification?: UserGamificationUncheckedUpdateOneWithoutUserNestedInput
    challenge_participations?: ChallengeParticipantUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ChallengeParticipantUpsertWithWhereUniqueWithoutChallengeInput = {
    where: ChallengeParticipantWhereUniqueInput
    update: XOR<ChallengeParticipantUpdateWithoutChallengeInput, ChallengeParticipantUncheckedUpdateWithoutChallengeInput>
    create: XOR<ChallengeParticipantCreateWithoutChallengeInput, ChallengeParticipantUncheckedCreateWithoutChallengeInput>
  }

  export type ChallengeParticipantUpdateWithWhereUniqueWithoutChallengeInput = {
    where: ChallengeParticipantWhereUniqueInput
    data: XOR<ChallengeParticipantUpdateWithoutChallengeInput, ChallengeParticipantUncheckedUpdateWithoutChallengeInput>
  }

  export type ChallengeParticipantUpdateManyWithWhereWithoutChallengeInput = {
    where: ChallengeParticipantScalarWhereInput
    data: XOR<ChallengeParticipantUpdateManyMutationInput, ChallengeParticipantUncheckedUpdateManyWithoutChallengeInput>
  }

  export type UserCreateWithoutChallenge_participationsInput = {
    id?: string
    email: string
    password_hash: string
    name?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    nutritional_plans?: NutritionalPlanCreateNestedManyWithoutUserInput
    meal_registrations?: MealRegistrationCreateNestedManyWithoutUserInput
    daily_scores?: DailyScoreCreateNestedManyWithoutUserInput
    gamification?: UserGamificationCreateNestedOneWithoutUserInput
    challenges_created?: ChallengeCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutChallenge_participationsInput = {
    id?: string
    email: string
    password_hash: string
    name?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    nutritional_plans?: NutritionalPlanUncheckedCreateNestedManyWithoutUserInput
    meal_registrations?: MealRegistrationUncheckedCreateNestedManyWithoutUserInput
    daily_scores?: DailyScoreUncheckedCreateNestedManyWithoutUserInput
    gamification?: UserGamificationUncheckedCreateNestedOneWithoutUserInput
    challenges_created?: ChallengeUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutChallenge_participationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChallenge_participationsInput, UserUncheckedCreateWithoutChallenge_participationsInput>
  }

  export type ChallengeCreateWithoutParticipantsInput = {
    name: string
    description?: string | null
    duration_days: number
    min_score?: number
    invite_code: string
    start_date?: Date | string | null
    end_date?: Date | string | null
    created_at?: Date | string
    creator: UserCreateNestedOneWithoutChallenges_createdInput
  }

  export type ChallengeUncheckedCreateWithoutParticipantsInput = {
    id?: number
    creator_id: string
    name: string
    description?: string | null
    duration_days: number
    min_score?: number
    invite_code: string
    start_date?: Date | string | null
    end_date?: Date | string | null
    created_at?: Date | string
  }

  export type ChallengeCreateOrConnectWithoutParticipantsInput = {
    where: ChallengeWhereUniqueInput
    create: XOR<ChallengeCreateWithoutParticipantsInput, ChallengeUncheckedCreateWithoutParticipantsInput>
  }

  export type UserUpsertWithoutChallenge_participationsInput = {
    update: XOR<UserUpdateWithoutChallenge_participationsInput, UserUncheckedUpdateWithoutChallenge_participationsInput>
    create: XOR<UserCreateWithoutChallenge_participationsInput, UserUncheckedCreateWithoutChallenge_participationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChallenge_participationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChallenge_participationsInput, UserUncheckedUpdateWithoutChallenge_participationsInput>
  }

  export type UserUpdateWithoutChallenge_participationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    nutritional_plans?: NutritionalPlanUpdateManyWithoutUserNestedInput
    meal_registrations?: MealRegistrationUpdateManyWithoutUserNestedInput
    daily_scores?: DailyScoreUpdateManyWithoutUserNestedInput
    gamification?: UserGamificationUpdateOneWithoutUserNestedInput
    challenges_created?: ChallengeUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutChallenge_participationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    nutritional_plans?: NutritionalPlanUncheckedUpdateManyWithoutUserNestedInput
    meal_registrations?: MealRegistrationUncheckedUpdateManyWithoutUserNestedInput
    daily_scores?: DailyScoreUncheckedUpdateManyWithoutUserNestedInput
    gamification?: UserGamificationUncheckedUpdateOneWithoutUserNestedInput
    challenges_created?: ChallengeUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type ChallengeUpsertWithoutParticipantsInput = {
    update: XOR<ChallengeUpdateWithoutParticipantsInput, ChallengeUncheckedUpdateWithoutParticipantsInput>
    create: XOR<ChallengeCreateWithoutParticipantsInput, ChallengeUncheckedCreateWithoutParticipantsInput>
    where?: ChallengeWhereInput
  }

  export type ChallengeUpdateToOneWithWhereWithoutParticipantsInput = {
    where?: ChallengeWhereInput
    data: XOR<ChallengeUpdateWithoutParticipantsInput, ChallengeUncheckedUpdateWithoutParticipantsInput>
  }

  export type ChallengeUpdateWithoutParticipantsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration_days?: IntFieldUpdateOperationsInput | number
    min_score?: IntFieldUpdateOperationsInput | number
    invite_code?: StringFieldUpdateOperationsInput | string
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutChallenges_createdNestedInput
  }

  export type ChallengeUncheckedUpdateWithoutParticipantsInput = {
    id?: IntFieldUpdateOperationsInput | number
    creator_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration_days?: IntFieldUpdateOperationsInput | number
    min_score?: IntFieldUpdateOperationsInput | number
    invite_code?: StringFieldUpdateOperationsInput | string
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NutritionalPlanCreateManyUserInput = {
    id?: number
    name: string
    daily_calories: number
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type MealRegistrationCreateManyUserInput = {
    id?: number
    plan_id?: number | null
    meal_name: string
    photo_url: string
    ai_analysis?: NullableJsonNullValueInput | InputJsonValue
    detected_foods?: NullableJsonNullValueInput | InputJsonValue
    estimated_calories?: number | null
    estimated_protein?: number | null
    estimated_carbs?: number | null
    estimated_fats?: number | null
    meal_score?: number | null
    adherence_tags?: NullableJsonNullValueInput | InputJsonValue
    ai_message?: string | null
    registered_at?: Date | string
  }

  export type DailyScoreCreateManyUserInput = {
    id?: number
    plan_id?: number | null
    date: Date | string
    total_calories?: number | null
    target_calories?: number | null
    average_meal_score?: number | null
    daily_score?: number | null
    streak_days?: number | null
    status?: string | null
    created_at?: Date | string
  }

  export type ChallengeCreateManyCreatorInput = {
    id?: number
    name: string
    description?: string | null
    duration_days: number
    min_score?: number
    invite_code: string
    start_date?: Date | string | null
    end_date?: Date | string | null
    created_at?: Date | string
  }

  export type ChallengeParticipantCreateManyUserInput = {
    id?: number
    challenge_id: number
    average_score?: number | null
    current_streak?: number | null
    badges_earned?: NullableJsonNullValueInput | InputJsonValue
    joined_at?: Date | string
  }

  export type NutritionalPlanUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    daily_calories?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    meals?: PlanMealUpdateManyWithoutPlanNestedInput
    meal_registrations?: MealRegistrationUpdateManyWithoutPlanNestedInput
    daily_scores?: DailyScoreUpdateManyWithoutPlanNestedInput
  }

  export type NutritionalPlanUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    daily_calories?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    meals?: PlanMealUncheckedUpdateManyWithoutPlanNestedInput
    meal_registrations?: MealRegistrationUncheckedUpdateManyWithoutPlanNestedInput
    daily_scores?: DailyScoreUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type NutritionalPlanUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    daily_calories?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MealRegistrationUpdateWithoutUserInput = {
    meal_name?: StringFieldUpdateOperationsInput | string
    photo_url?: StringFieldUpdateOperationsInput | string
    ai_analysis?: NullableJsonNullValueInput | InputJsonValue
    detected_foods?: NullableJsonNullValueInput | InputJsonValue
    estimated_calories?: NullableFloatFieldUpdateOperationsInput | number | null
    estimated_protein?: NullableFloatFieldUpdateOperationsInput | number | null
    estimated_carbs?: NullableFloatFieldUpdateOperationsInput | number | null
    estimated_fats?: NullableFloatFieldUpdateOperationsInput | number | null
    meal_score?: NullableIntFieldUpdateOperationsInput | number | null
    adherence_tags?: NullableJsonNullValueInput | InputJsonValue
    ai_message?: NullableStringFieldUpdateOperationsInput | string | null
    registered_at?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: NutritionalPlanUpdateOneWithoutMeal_registrationsNestedInput
  }

  export type MealRegistrationUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    plan_id?: NullableIntFieldUpdateOperationsInput | number | null
    meal_name?: StringFieldUpdateOperationsInput | string
    photo_url?: StringFieldUpdateOperationsInput | string
    ai_analysis?: NullableJsonNullValueInput | InputJsonValue
    detected_foods?: NullableJsonNullValueInput | InputJsonValue
    estimated_calories?: NullableFloatFieldUpdateOperationsInput | number | null
    estimated_protein?: NullableFloatFieldUpdateOperationsInput | number | null
    estimated_carbs?: NullableFloatFieldUpdateOperationsInput | number | null
    estimated_fats?: NullableFloatFieldUpdateOperationsInput | number | null
    meal_score?: NullableIntFieldUpdateOperationsInput | number | null
    adherence_tags?: NullableJsonNullValueInput | InputJsonValue
    ai_message?: NullableStringFieldUpdateOperationsInput | string | null
    registered_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MealRegistrationUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    plan_id?: NullableIntFieldUpdateOperationsInput | number | null
    meal_name?: StringFieldUpdateOperationsInput | string
    photo_url?: StringFieldUpdateOperationsInput | string
    ai_analysis?: NullableJsonNullValueInput | InputJsonValue
    detected_foods?: NullableJsonNullValueInput | InputJsonValue
    estimated_calories?: NullableFloatFieldUpdateOperationsInput | number | null
    estimated_protein?: NullableFloatFieldUpdateOperationsInput | number | null
    estimated_carbs?: NullableFloatFieldUpdateOperationsInput | number | null
    estimated_fats?: NullableFloatFieldUpdateOperationsInput | number | null
    meal_score?: NullableIntFieldUpdateOperationsInput | number | null
    adherence_tags?: NullableJsonNullValueInput | InputJsonValue
    ai_message?: NullableStringFieldUpdateOperationsInput | string | null
    registered_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyScoreUpdateWithoutUserInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    total_calories?: NullableFloatFieldUpdateOperationsInput | number | null
    target_calories?: NullableIntFieldUpdateOperationsInput | number | null
    average_meal_score?: NullableIntFieldUpdateOperationsInput | number | null
    daily_score?: NullableIntFieldUpdateOperationsInput | number | null
    streak_days?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: NutritionalPlanUpdateOneWithoutDaily_scoresNestedInput
  }

  export type DailyScoreUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    plan_id?: NullableIntFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    total_calories?: NullableFloatFieldUpdateOperationsInput | number | null
    target_calories?: NullableIntFieldUpdateOperationsInput | number | null
    average_meal_score?: NullableIntFieldUpdateOperationsInput | number | null
    daily_score?: NullableIntFieldUpdateOperationsInput | number | null
    streak_days?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyScoreUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    plan_id?: NullableIntFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    total_calories?: NullableFloatFieldUpdateOperationsInput | number | null
    target_calories?: NullableIntFieldUpdateOperationsInput | number | null
    average_meal_score?: NullableIntFieldUpdateOperationsInput | number | null
    daily_score?: NullableIntFieldUpdateOperationsInput | number | null
    streak_days?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChallengeUpdateWithoutCreatorInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration_days?: IntFieldUpdateOperationsInput | number
    min_score?: IntFieldUpdateOperationsInput | number
    invite_code?: StringFieldUpdateOperationsInput | string
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: ChallengeParticipantUpdateManyWithoutChallengeNestedInput
  }

  export type ChallengeUncheckedUpdateWithoutCreatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration_days?: IntFieldUpdateOperationsInput | number
    min_score?: IntFieldUpdateOperationsInput | number
    invite_code?: StringFieldUpdateOperationsInput | string
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: ChallengeParticipantUncheckedUpdateManyWithoutChallengeNestedInput
  }

  export type ChallengeUncheckedUpdateManyWithoutCreatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration_days?: IntFieldUpdateOperationsInput | number
    min_score?: IntFieldUpdateOperationsInput | number
    invite_code?: StringFieldUpdateOperationsInput | string
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChallengeParticipantUpdateWithoutUserInput = {
    average_score?: NullableFloatFieldUpdateOperationsInput | number | null
    current_streak?: NullableIntFieldUpdateOperationsInput | number | null
    badges_earned?: NullableJsonNullValueInput | InputJsonValue
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    challenge?: ChallengeUpdateOneRequiredWithoutParticipantsNestedInput
  }

  export type ChallengeParticipantUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    challenge_id?: IntFieldUpdateOperationsInput | number
    average_score?: NullableFloatFieldUpdateOperationsInput | number | null
    current_streak?: NullableIntFieldUpdateOperationsInput | number | null
    badges_earned?: NullableJsonNullValueInput | InputJsonValue
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChallengeParticipantUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    challenge_id?: IntFieldUpdateOperationsInput | number
    average_score?: NullableFloatFieldUpdateOperationsInput | number | null
    current_streak?: NullableIntFieldUpdateOperationsInput | number | null
    badges_earned?: NullableJsonNullValueInput | InputJsonValue
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanMealCreateManyPlanInput = {
    id?: number
    meal_name: string
    suggested_time?: string | null
    target_calories?: number | null
    allowed_foods?: string | null
    notes?: string | null
  }

  export type MealRegistrationCreateManyPlanInput = {
    id?: number
    user_id: string
    meal_name: string
    photo_url: string
    ai_analysis?: NullableJsonNullValueInput | InputJsonValue
    detected_foods?: NullableJsonNullValueInput | InputJsonValue
    estimated_calories?: number | null
    estimated_protein?: number | null
    estimated_carbs?: number | null
    estimated_fats?: number | null
    meal_score?: number | null
    adherence_tags?: NullableJsonNullValueInput | InputJsonValue
    ai_message?: string | null
    registered_at?: Date | string
  }

  export type DailyScoreCreateManyPlanInput = {
    id?: number
    user_id: string
    date: Date | string
    total_calories?: number | null
    target_calories?: number | null
    average_meal_score?: number | null
    daily_score?: number | null
    streak_days?: number | null
    status?: string | null
    created_at?: Date | string
  }

  export type PlanMealUpdateWithoutPlanInput = {
    meal_name?: StringFieldUpdateOperationsInput | string
    suggested_time?: NullableStringFieldUpdateOperationsInput | string | null
    target_calories?: NullableIntFieldUpdateOperationsInput | number | null
    allowed_foods?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlanMealUncheckedUpdateWithoutPlanInput = {
    id?: IntFieldUpdateOperationsInput | number
    meal_name?: StringFieldUpdateOperationsInput | string
    suggested_time?: NullableStringFieldUpdateOperationsInput | string | null
    target_calories?: NullableIntFieldUpdateOperationsInput | number | null
    allowed_foods?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlanMealUncheckedUpdateManyWithoutPlanInput = {
    id?: IntFieldUpdateOperationsInput | number
    meal_name?: StringFieldUpdateOperationsInput | string
    suggested_time?: NullableStringFieldUpdateOperationsInput | string | null
    target_calories?: NullableIntFieldUpdateOperationsInput | number | null
    allowed_foods?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MealRegistrationUpdateWithoutPlanInput = {
    meal_name?: StringFieldUpdateOperationsInput | string
    photo_url?: StringFieldUpdateOperationsInput | string
    ai_analysis?: NullableJsonNullValueInput | InputJsonValue
    detected_foods?: NullableJsonNullValueInput | InputJsonValue
    estimated_calories?: NullableFloatFieldUpdateOperationsInput | number | null
    estimated_protein?: NullableFloatFieldUpdateOperationsInput | number | null
    estimated_carbs?: NullableFloatFieldUpdateOperationsInput | number | null
    estimated_fats?: NullableFloatFieldUpdateOperationsInput | number | null
    meal_score?: NullableIntFieldUpdateOperationsInput | number | null
    adherence_tags?: NullableJsonNullValueInput | InputJsonValue
    ai_message?: NullableStringFieldUpdateOperationsInput | string | null
    registered_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMeal_registrationsNestedInput
  }

  export type MealRegistrationUncheckedUpdateWithoutPlanInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    meal_name?: StringFieldUpdateOperationsInput | string
    photo_url?: StringFieldUpdateOperationsInput | string
    ai_analysis?: NullableJsonNullValueInput | InputJsonValue
    detected_foods?: NullableJsonNullValueInput | InputJsonValue
    estimated_calories?: NullableFloatFieldUpdateOperationsInput | number | null
    estimated_protein?: NullableFloatFieldUpdateOperationsInput | number | null
    estimated_carbs?: NullableFloatFieldUpdateOperationsInput | number | null
    estimated_fats?: NullableFloatFieldUpdateOperationsInput | number | null
    meal_score?: NullableIntFieldUpdateOperationsInput | number | null
    adherence_tags?: NullableJsonNullValueInput | InputJsonValue
    ai_message?: NullableStringFieldUpdateOperationsInput | string | null
    registered_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MealRegistrationUncheckedUpdateManyWithoutPlanInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    meal_name?: StringFieldUpdateOperationsInput | string
    photo_url?: StringFieldUpdateOperationsInput | string
    ai_analysis?: NullableJsonNullValueInput | InputJsonValue
    detected_foods?: NullableJsonNullValueInput | InputJsonValue
    estimated_calories?: NullableFloatFieldUpdateOperationsInput | number | null
    estimated_protein?: NullableFloatFieldUpdateOperationsInput | number | null
    estimated_carbs?: NullableFloatFieldUpdateOperationsInput | number | null
    estimated_fats?: NullableFloatFieldUpdateOperationsInput | number | null
    meal_score?: NullableIntFieldUpdateOperationsInput | number | null
    adherence_tags?: NullableJsonNullValueInput | InputJsonValue
    ai_message?: NullableStringFieldUpdateOperationsInput | string | null
    registered_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyScoreUpdateWithoutPlanInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    total_calories?: NullableFloatFieldUpdateOperationsInput | number | null
    target_calories?: NullableIntFieldUpdateOperationsInput | number | null
    average_meal_score?: NullableIntFieldUpdateOperationsInput | number | null
    daily_score?: NullableIntFieldUpdateOperationsInput | number | null
    streak_days?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDaily_scoresNestedInput
  }

  export type DailyScoreUncheckedUpdateWithoutPlanInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    total_calories?: NullableFloatFieldUpdateOperationsInput | number | null
    target_calories?: NullableIntFieldUpdateOperationsInput | number | null
    average_meal_score?: NullableIntFieldUpdateOperationsInput | number | null
    daily_score?: NullableIntFieldUpdateOperationsInput | number | null
    streak_days?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyScoreUncheckedUpdateManyWithoutPlanInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    total_calories?: NullableFloatFieldUpdateOperationsInput | number | null
    target_calories?: NullableIntFieldUpdateOperationsInput | number | null
    average_meal_score?: NullableIntFieldUpdateOperationsInput | number | null
    daily_score?: NullableIntFieldUpdateOperationsInput | number | null
    streak_days?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChallengeParticipantCreateManyChallengeInput = {
    id?: number
    user_id: string
    average_score?: number | null
    current_streak?: number | null
    badges_earned?: NullableJsonNullValueInput | InputJsonValue
    joined_at?: Date | string
  }

  export type ChallengeParticipantUpdateWithoutChallengeInput = {
    average_score?: NullableFloatFieldUpdateOperationsInput | number | null
    current_streak?: NullableIntFieldUpdateOperationsInput | number | null
    badges_earned?: NullableJsonNullValueInput | InputJsonValue
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutChallenge_participationsNestedInput
  }

  export type ChallengeParticipantUncheckedUpdateWithoutChallengeInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    average_score?: NullableFloatFieldUpdateOperationsInput | number | null
    current_streak?: NullableIntFieldUpdateOperationsInput | number | null
    badges_earned?: NullableJsonNullValueInput | InputJsonValue
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChallengeParticipantUncheckedUpdateManyWithoutChallengeInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    average_score?: NullableFloatFieldUpdateOperationsInput | number | null
    current_streak?: NullableIntFieldUpdateOperationsInput | number | null
    badges_earned?: NullableJsonNullValueInput | InputJsonValue
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}