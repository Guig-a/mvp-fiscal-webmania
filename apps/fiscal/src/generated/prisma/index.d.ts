
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Emitter
 * 
 */
export type Emitter = $Result.DefaultSelection<Prisma.$EmitterPayload>
/**
 * Model FiscalProfile
 * 
 */
export type FiscalProfile = $Result.DefaultSelection<Prisma.$FiscalProfilePayload>
/**
 * Model FiscalRule
 * 
 */
export type FiscalRule = $Result.DefaultSelection<Prisma.$FiscalRulePayload>
/**
 * Model Invoice
 * 
 */
export type Invoice = $Result.DefaultSelection<Prisma.$InvoicePayload>
/**
 * Model InvoiceEvent
 * 
 */
export type InvoiceEvent = $Result.DefaultSelection<Prisma.$InvoiceEventPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Environment: {
  HOMOLOGACAO: 'HOMOLOGACAO',
  PRODUCAO: 'PRODUCAO'
};

export type Environment = (typeof Environment)[keyof typeof Environment]


export const InvoiceType: {
  NFE: 'NFE'
};

export type InvoiceType = (typeof InvoiceType)[keyof typeof InvoiceType]


export const InvoiceStatus: {
  PENDING: 'PENDING',
  PROCESSING: 'PROCESSING',
  AUTHORIZED: 'AUTHORIZED',
  REJECTED: 'REJECTED',
  ERROR: 'ERROR',
  CANCELLED: 'CANCELLED'
};

export type InvoiceStatus = (typeof InvoiceStatus)[keyof typeof InvoiceStatus]


export const InvoiceEventType: {
  CREATED: 'CREATED',
  ENQUEUED: 'ENQUEUED',
  WORKER_STARTED: 'WORKER_STARTED',
  WORKER_FINISHED: 'WORKER_FINISHED',
  RESULT_RECEIVED: 'RESULT_RECEIVED',
  PROCESSING: 'PROCESSING',
  AUTHORIZED: 'AUTHORIZED',
  REJECTED: 'REJECTED',
  ERROR: 'ERROR',
  WEBHOOK_SENT: 'WEBHOOK_SENT',
  WEBHOOK_FAILED: 'WEBHOOK_FAILED',
  CANCEL_REQUESTED: 'CANCEL_REQUESTED',
  CANCELLED: 'CANCELLED',
  CHECK_STATUS_ENQUEUED: 'CHECK_STATUS_ENQUEUED',
  PROVIDER_CALLBACK_RECEIVED: 'PROVIDER_CALLBACK_RECEIVED'
};

export type InvoiceEventType = (typeof InvoiceEventType)[keyof typeof InvoiceEventType]


export const Operation: {
  VENDA: 'VENDA'
};

export type Operation = (typeof Operation)[keyof typeof Operation]

}

export type Environment = $Enums.Environment

export const Environment: typeof $Enums.Environment

export type InvoiceType = $Enums.InvoiceType

export const InvoiceType: typeof $Enums.InvoiceType

export type InvoiceStatus = $Enums.InvoiceStatus

export const InvoiceStatus: typeof $Enums.InvoiceStatus

export type InvoiceEventType = $Enums.InvoiceEventType

export const InvoiceEventType: typeof $Enums.InvoiceEventType

export type Operation = $Enums.Operation

export const Operation: typeof $Enums.Operation

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Emitters
 * const emitters = await prisma.emitter.findMany()
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
   * // Fetch zero or more Emitters
   * const emitters = await prisma.emitter.findMany()
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
   * `prisma.emitter`: Exposes CRUD operations for the **Emitter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Emitters
    * const emitters = await prisma.emitter.findMany()
    * ```
    */
  get emitter(): Prisma.EmitterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fiscalProfile`: Exposes CRUD operations for the **FiscalProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FiscalProfiles
    * const fiscalProfiles = await prisma.fiscalProfile.findMany()
    * ```
    */
  get fiscalProfile(): Prisma.FiscalProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fiscalRule`: Exposes CRUD operations for the **FiscalRule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FiscalRules
    * const fiscalRules = await prisma.fiscalRule.findMany()
    * ```
    */
  get fiscalRule(): Prisma.FiscalRuleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.invoice`: Exposes CRUD operations for the **Invoice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invoices
    * const invoices = await prisma.invoice.findMany()
    * ```
    */
  get invoice(): Prisma.InvoiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.invoiceEvent`: Exposes CRUD operations for the **InvoiceEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InvoiceEvents
    * const invoiceEvents = await prisma.invoiceEvent.findMany()
    * ```
    */
  get invoiceEvent(): Prisma.InvoiceEventDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
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
    Emitter: 'Emitter',
    FiscalProfile: 'FiscalProfile',
    FiscalRule: 'FiscalRule',
    Invoice: 'Invoice',
    InvoiceEvent: 'InvoiceEvent'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "emitter" | "fiscalProfile" | "fiscalRule" | "invoice" | "invoiceEvent"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Emitter: {
        payload: Prisma.$EmitterPayload<ExtArgs>
        fields: Prisma.EmitterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmitterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmitterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmitterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmitterPayload>
          }
          findFirst: {
            args: Prisma.EmitterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmitterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmitterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmitterPayload>
          }
          findMany: {
            args: Prisma.EmitterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmitterPayload>[]
          }
          create: {
            args: Prisma.EmitterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmitterPayload>
          }
          createMany: {
            args: Prisma.EmitterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmitterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmitterPayload>[]
          }
          delete: {
            args: Prisma.EmitterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmitterPayload>
          }
          update: {
            args: Prisma.EmitterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmitterPayload>
          }
          deleteMany: {
            args: Prisma.EmitterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmitterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmitterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmitterPayload>[]
          }
          upsert: {
            args: Prisma.EmitterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmitterPayload>
          }
          aggregate: {
            args: Prisma.EmitterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmitter>
          }
          groupBy: {
            args: Prisma.EmitterGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmitterGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmitterCountArgs<ExtArgs>
            result: $Utils.Optional<EmitterCountAggregateOutputType> | number
          }
        }
      }
      FiscalProfile: {
        payload: Prisma.$FiscalProfilePayload<ExtArgs>
        fields: Prisma.FiscalProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FiscalProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FiscalProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FiscalProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FiscalProfilePayload>
          }
          findFirst: {
            args: Prisma.FiscalProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FiscalProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FiscalProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FiscalProfilePayload>
          }
          findMany: {
            args: Prisma.FiscalProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FiscalProfilePayload>[]
          }
          create: {
            args: Prisma.FiscalProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FiscalProfilePayload>
          }
          createMany: {
            args: Prisma.FiscalProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FiscalProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FiscalProfilePayload>[]
          }
          delete: {
            args: Prisma.FiscalProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FiscalProfilePayload>
          }
          update: {
            args: Prisma.FiscalProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FiscalProfilePayload>
          }
          deleteMany: {
            args: Prisma.FiscalProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FiscalProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FiscalProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FiscalProfilePayload>[]
          }
          upsert: {
            args: Prisma.FiscalProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FiscalProfilePayload>
          }
          aggregate: {
            args: Prisma.FiscalProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFiscalProfile>
          }
          groupBy: {
            args: Prisma.FiscalProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<FiscalProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.FiscalProfileCountArgs<ExtArgs>
            result: $Utils.Optional<FiscalProfileCountAggregateOutputType> | number
          }
        }
      }
      FiscalRule: {
        payload: Prisma.$FiscalRulePayload<ExtArgs>
        fields: Prisma.FiscalRuleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FiscalRuleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FiscalRulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FiscalRuleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FiscalRulePayload>
          }
          findFirst: {
            args: Prisma.FiscalRuleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FiscalRulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FiscalRuleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FiscalRulePayload>
          }
          findMany: {
            args: Prisma.FiscalRuleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FiscalRulePayload>[]
          }
          create: {
            args: Prisma.FiscalRuleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FiscalRulePayload>
          }
          createMany: {
            args: Prisma.FiscalRuleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FiscalRuleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FiscalRulePayload>[]
          }
          delete: {
            args: Prisma.FiscalRuleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FiscalRulePayload>
          }
          update: {
            args: Prisma.FiscalRuleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FiscalRulePayload>
          }
          deleteMany: {
            args: Prisma.FiscalRuleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FiscalRuleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FiscalRuleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FiscalRulePayload>[]
          }
          upsert: {
            args: Prisma.FiscalRuleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FiscalRulePayload>
          }
          aggregate: {
            args: Prisma.FiscalRuleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFiscalRule>
          }
          groupBy: {
            args: Prisma.FiscalRuleGroupByArgs<ExtArgs>
            result: $Utils.Optional<FiscalRuleGroupByOutputType>[]
          }
          count: {
            args: Prisma.FiscalRuleCountArgs<ExtArgs>
            result: $Utils.Optional<FiscalRuleCountAggregateOutputType> | number
          }
        }
      }
      Invoice: {
        payload: Prisma.$InvoicePayload<ExtArgs>
        fields: Prisma.InvoiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvoiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvoiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          findFirst: {
            args: Prisma.InvoiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvoiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          findMany: {
            args: Prisma.InvoiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          create: {
            args: Prisma.InvoiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          createMany: {
            args: Prisma.InvoiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InvoiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          delete: {
            args: Prisma.InvoiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          update: {
            args: Prisma.InvoiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          deleteMany: {
            args: Prisma.InvoiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvoiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InvoiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          upsert: {
            args: Prisma.InvoiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          aggregate: {
            args: Prisma.InvoiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvoice>
          }
          groupBy: {
            args: Prisma.InvoiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvoiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvoiceCountArgs<ExtArgs>
            result: $Utils.Optional<InvoiceCountAggregateOutputType> | number
          }
        }
      }
      InvoiceEvent: {
        payload: Prisma.$InvoiceEventPayload<ExtArgs>
        fields: Prisma.InvoiceEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvoiceEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvoiceEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceEventPayload>
          }
          findFirst: {
            args: Prisma.InvoiceEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvoiceEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceEventPayload>
          }
          findMany: {
            args: Prisma.InvoiceEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceEventPayload>[]
          }
          create: {
            args: Prisma.InvoiceEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceEventPayload>
          }
          createMany: {
            args: Prisma.InvoiceEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InvoiceEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceEventPayload>[]
          }
          delete: {
            args: Prisma.InvoiceEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceEventPayload>
          }
          update: {
            args: Prisma.InvoiceEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceEventPayload>
          }
          deleteMany: {
            args: Prisma.InvoiceEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvoiceEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InvoiceEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceEventPayload>[]
          }
          upsert: {
            args: Prisma.InvoiceEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceEventPayload>
          }
          aggregate: {
            args: Prisma.InvoiceEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvoiceEvent>
          }
          groupBy: {
            args: Prisma.InvoiceEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvoiceEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvoiceEventCountArgs<ExtArgs>
            result: $Utils.Optional<InvoiceEventCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    emitter?: EmitterOmit
    fiscalProfile?: FiscalProfileOmit
    fiscalRule?: FiscalRuleOmit
    invoice?: InvoiceOmit
    invoiceEvent?: InvoiceEventOmit
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
   * Count Type EmitterCountOutputType
   */

  export type EmitterCountOutputType = {
    invoices: number
  }

  export type EmitterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoices?: boolean | EmitterCountOutputTypeCountInvoicesArgs
  }

  // Custom InputTypes
  /**
   * EmitterCountOutputType without action
   */
  export type EmitterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmitterCountOutputType
     */
    select?: EmitterCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmitterCountOutputType without action
   */
  export type EmitterCountOutputTypeCountInvoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceWhereInput
  }


  /**
   * Count Type FiscalProfileCountOutputType
   */

  export type FiscalProfileCountOutputType = {
    rules: number
  }

  export type FiscalProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rules?: boolean | FiscalProfileCountOutputTypeCountRulesArgs
  }

  // Custom InputTypes
  /**
   * FiscalProfileCountOutputType without action
   */
  export type FiscalProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FiscalProfileCountOutputType
     */
    select?: FiscalProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FiscalProfileCountOutputType without action
   */
  export type FiscalProfileCountOutputTypeCountRulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FiscalRuleWhereInput
  }


  /**
   * Count Type InvoiceCountOutputType
   */

  export type InvoiceCountOutputType = {
    events: number
  }

  export type InvoiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | InvoiceCountOutputTypeCountEventsArgs
  }

  // Custom InputTypes
  /**
   * InvoiceCountOutputType without action
   */
  export type InvoiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceCountOutputType
     */
    select?: InvoiceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InvoiceCountOutputType without action
   */
  export type InvoiceCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceEventWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Emitter
   */

  export type AggregateEmitter = {
    _count: EmitterCountAggregateOutputType | null
    _avg: EmitterAvgAggregateOutputType | null
    _sum: EmitterSumAggregateOutputType | null
    _min: EmitterMinAggregateOutputType | null
    _max: EmitterMaxAggregateOutputType | null
  }

  export type EmitterAvgAggregateOutputType = {
    crt: number | null
    series: number | null
  }

  export type EmitterSumAggregateOutputType = {
    crt: number | null
    series: number | null
  }

  export type EmitterMinAggregateOutputType = {
    id: string | null
    workspaceId: string | null
    cnpj: string | null
    legalName: string | null
    tradeName: string | null
    ie: string | null
    im: string | null
    crt: number | null
    uf: string | null
    environment: $Enums.Environment | null
    series: number | null
    credentialRef: string | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmitterMaxAggregateOutputType = {
    id: string | null
    workspaceId: string | null
    cnpj: string | null
    legalName: string | null
    tradeName: string | null
    ie: string | null
    im: string | null
    crt: number | null
    uf: string | null
    environment: $Enums.Environment | null
    series: number | null
    credentialRef: string | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmitterCountAggregateOutputType = {
    id: number
    workspaceId: number
    cnpj: number
    legalName: number
    tradeName: number
    ie: number
    im: number
    crt: number
    uf: number
    address: number
    environment: number
    series: number
    credentialRef: number
    active: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EmitterAvgAggregateInputType = {
    crt?: true
    series?: true
  }

  export type EmitterSumAggregateInputType = {
    crt?: true
    series?: true
  }

  export type EmitterMinAggregateInputType = {
    id?: true
    workspaceId?: true
    cnpj?: true
    legalName?: true
    tradeName?: true
    ie?: true
    im?: true
    crt?: true
    uf?: true
    environment?: true
    series?: true
    credentialRef?: true
    active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmitterMaxAggregateInputType = {
    id?: true
    workspaceId?: true
    cnpj?: true
    legalName?: true
    tradeName?: true
    ie?: true
    im?: true
    crt?: true
    uf?: true
    environment?: true
    series?: true
    credentialRef?: true
    active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmitterCountAggregateInputType = {
    id?: true
    workspaceId?: true
    cnpj?: true
    legalName?: true
    tradeName?: true
    ie?: true
    im?: true
    crt?: true
    uf?: true
    address?: true
    environment?: true
    series?: true
    credentialRef?: true
    active?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EmitterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Emitter to aggregate.
     */
    where?: EmitterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Emitters to fetch.
     */
    orderBy?: EmitterOrderByWithRelationInput | EmitterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmitterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Emitters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Emitters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Emitters
    **/
    _count?: true | EmitterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmitterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmitterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmitterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmitterMaxAggregateInputType
  }

  export type GetEmitterAggregateType<T extends EmitterAggregateArgs> = {
        [P in keyof T & keyof AggregateEmitter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmitter[P]>
      : GetScalarType<T[P], AggregateEmitter[P]>
  }




  export type EmitterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmitterWhereInput
    orderBy?: EmitterOrderByWithAggregationInput | EmitterOrderByWithAggregationInput[]
    by: EmitterScalarFieldEnum[] | EmitterScalarFieldEnum
    having?: EmitterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmitterCountAggregateInputType | true
    _avg?: EmitterAvgAggregateInputType
    _sum?: EmitterSumAggregateInputType
    _min?: EmitterMinAggregateInputType
    _max?: EmitterMaxAggregateInputType
  }

  export type EmitterGroupByOutputType = {
    id: string
    workspaceId: string
    cnpj: string
    legalName: string
    tradeName: string | null
    ie: string | null
    im: string | null
    crt: number
    uf: string
    address: JsonValue
    environment: $Enums.Environment
    series: number
    credentialRef: string
    active: boolean
    createdAt: Date
    updatedAt: Date
    _count: EmitterCountAggregateOutputType | null
    _avg: EmitterAvgAggregateOutputType | null
    _sum: EmitterSumAggregateOutputType | null
    _min: EmitterMinAggregateOutputType | null
    _max: EmitterMaxAggregateOutputType | null
  }

  type GetEmitterGroupByPayload<T extends EmitterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmitterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmitterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmitterGroupByOutputType[P]>
            : GetScalarType<T[P], EmitterGroupByOutputType[P]>
        }
      >
    >


  export type EmitterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspaceId?: boolean
    cnpj?: boolean
    legalName?: boolean
    tradeName?: boolean
    ie?: boolean
    im?: boolean
    crt?: boolean
    uf?: boolean
    address?: boolean
    environment?: boolean
    series?: boolean
    credentialRef?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    invoices?: boolean | Emitter$invoicesArgs<ExtArgs>
    _count?: boolean | EmitterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emitter"]>

  export type EmitterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspaceId?: boolean
    cnpj?: boolean
    legalName?: boolean
    tradeName?: boolean
    ie?: boolean
    im?: boolean
    crt?: boolean
    uf?: boolean
    address?: boolean
    environment?: boolean
    series?: boolean
    credentialRef?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["emitter"]>

  export type EmitterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspaceId?: boolean
    cnpj?: boolean
    legalName?: boolean
    tradeName?: boolean
    ie?: boolean
    im?: boolean
    crt?: boolean
    uf?: boolean
    address?: boolean
    environment?: boolean
    series?: boolean
    credentialRef?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["emitter"]>

  export type EmitterSelectScalar = {
    id?: boolean
    workspaceId?: boolean
    cnpj?: boolean
    legalName?: boolean
    tradeName?: boolean
    ie?: boolean
    im?: boolean
    crt?: boolean
    uf?: boolean
    address?: boolean
    environment?: boolean
    series?: boolean
    credentialRef?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EmitterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workspaceId" | "cnpj" | "legalName" | "tradeName" | "ie" | "im" | "crt" | "uf" | "address" | "environment" | "series" | "credentialRef" | "active" | "createdAt" | "updatedAt", ExtArgs["result"]["emitter"]>
  export type EmitterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoices?: boolean | Emitter$invoicesArgs<ExtArgs>
    _count?: boolean | EmitterCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EmitterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EmitterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EmitterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Emitter"
    objects: {
      invoices: Prisma.$InvoicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workspaceId: string
      cnpj: string
      legalName: string
      tradeName: string | null
      ie: string | null
      im: string | null
      crt: number
      uf: string
      address: Prisma.JsonValue
      environment: $Enums.Environment
      series: number
      credentialRef: string
      active: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["emitter"]>
    composites: {}
  }

  type EmitterGetPayload<S extends boolean | null | undefined | EmitterDefaultArgs> = $Result.GetResult<Prisma.$EmitterPayload, S>

  type EmitterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmitterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmitterCountAggregateInputType | true
    }

  export interface EmitterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Emitter'], meta: { name: 'Emitter' } }
    /**
     * Find zero or one Emitter that matches the filter.
     * @param {EmitterFindUniqueArgs} args - Arguments to find a Emitter
     * @example
     * // Get one Emitter
     * const emitter = await prisma.emitter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmitterFindUniqueArgs>(args: SelectSubset<T, EmitterFindUniqueArgs<ExtArgs>>): Prisma__EmitterClient<$Result.GetResult<Prisma.$EmitterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Emitter that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmitterFindUniqueOrThrowArgs} args - Arguments to find a Emitter
     * @example
     * // Get one Emitter
     * const emitter = await prisma.emitter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmitterFindUniqueOrThrowArgs>(args: SelectSubset<T, EmitterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmitterClient<$Result.GetResult<Prisma.$EmitterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Emitter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmitterFindFirstArgs} args - Arguments to find a Emitter
     * @example
     * // Get one Emitter
     * const emitter = await prisma.emitter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmitterFindFirstArgs>(args?: SelectSubset<T, EmitterFindFirstArgs<ExtArgs>>): Prisma__EmitterClient<$Result.GetResult<Prisma.$EmitterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Emitter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmitterFindFirstOrThrowArgs} args - Arguments to find a Emitter
     * @example
     * // Get one Emitter
     * const emitter = await prisma.emitter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmitterFindFirstOrThrowArgs>(args?: SelectSubset<T, EmitterFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmitterClient<$Result.GetResult<Prisma.$EmitterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Emitters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmitterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Emitters
     * const emitters = await prisma.emitter.findMany()
     * 
     * // Get first 10 Emitters
     * const emitters = await prisma.emitter.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const emitterWithIdOnly = await prisma.emitter.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmitterFindManyArgs>(args?: SelectSubset<T, EmitterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmitterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Emitter.
     * @param {EmitterCreateArgs} args - Arguments to create a Emitter.
     * @example
     * // Create one Emitter
     * const Emitter = await prisma.emitter.create({
     *   data: {
     *     // ... data to create a Emitter
     *   }
     * })
     * 
     */
    create<T extends EmitterCreateArgs>(args: SelectSubset<T, EmitterCreateArgs<ExtArgs>>): Prisma__EmitterClient<$Result.GetResult<Prisma.$EmitterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Emitters.
     * @param {EmitterCreateManyArgs} args - Arguments to create many Emitters.
     * @example
     * // Create many Emitters
     * const emitter = await prisma.emitter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmitterCreateManyArgs>(args?: SelectSubset<T, EmitterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Emitters and returns the data saved in the database.
     * @param {EmitterCreateManyAndReturnArgs} args - Arguments to create many Emitters.
     * @example
     * // Create many Emitters
     * const emitter = await prisma.emitter.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Emitters and only return the `id`
     * const emitterWithIdOnly = await prisma.emitter.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmitterCreateManyAndReturnArgs>(args?: SelectSubset<T, EmitterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmitterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Emitter.
     * @param {EmitterDeleteArgs} args - Arguments to delete one Emitter.
     * @example
     * // Delete one Emitter
     * const Emitter = await prisma.emitter.delete({
     *   where: {
     *     // ... filter to delete one Emitter
     *   }
     * })
     * 
     */
    delete<T extends EmitterDeleteArgs>(args: SelectSubset<T, EmitterDeleteArgs<ExtArgs>>): Prisma__EmitterClient<$Result.GetResult<Prisma.$EmitterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Emitter.
     * @param {EmitterUpdateArgs} args - Arguments to update one Emitter.
     * @example
     * // Update one Emitter
     * const emitter = await prisma.emitter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmitterUpdateArgs>(args: SelectSubset<T, EmitterUpdateArgs<ExtArgs>>): Prisma__EmitterClient<$Result.GetResult<Prisma.$EmitterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Emitters.
     * @param {EmitterDeleteManyArgs} args - Arguments to filter Emitters to delete.
     * @example
     * // Delete a few Emitters
     * const { count } = await prisma.emitter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmitterDeleteManyArgs>(args?: SelectSubset<T, EmitterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Emitters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmitterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Emitters
     * const emitter = await prisma.emitter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmitterUpdateManyArgs>(args: SelectSubset<T, EmitterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Emitters and returns the data updated in the database.
     * @param {EmitterUpdateManyAndReturnArgs} args - Arguments to update many Emitters.
     * @example
     * // Update many Emitters
     * const emitter = await prisma.emitter.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Emitters and only return the `id`
     * const emitterWithIdOnly = await prisma.emitter.updateManyAndReturn({
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
    updateManyAndReturn<T extends EmitterUpdateManyAndReturnArgs>(args: SelectSubset<T, EmitterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmitterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Emitter.
     * @param {EmitterUpsertArgs} args - Arguments to update or create a Emitter.
     * @example
     * // Update or create a Emitter
     * const emitter = await prisma.emitter.upsert({
     *   create: {
     *     // ... data to create a Emitter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Emitter we want to update
     *   }
     * })
     */
    upsert<T extends EmitterUpsertArgs>(args: SelectSubset<T, EmitterUpsertArgs<ExtArgs>>): Prisma__EmitterClient<$Result.GetResult<Prisma.$EmitterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Emitters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmitterCountArgs} args - Arguments to filter Emitters to count.
     * @example
     * // Count the number of Emitters
     * const count = await prisma.emitter.count({
     *   where: {
     *     // ... the filter for the Emitters we want to count
     *   }
     * })
    **/
    count<T extends EmitterCountArgs>(
      args?: Subset<T, EmitterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmitterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Emitter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmitterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmitterAggregateArgs>(args: Subset<T, EmitterAggregateArgs>): Prisma.PrismaPromise<GetEmitterAggregateType<T>>

    /**
     * Group by Emitter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmitterGroupByArgs} args - Group by arguments.
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
      T extends EmitterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmitterGroupByArgs['orderBy'] }
        : { orderBy?: EmitterGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmitterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmitterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Emitter model
   */
  readonly fields: EmitterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Emitter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmitterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    invoices<T extends Emitter$invoicesArgs<ExtArgs> = {}>(args?: Subset<T, Emitter$invoicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Emitter model
   */
  interface EmitterFieldRefs {
    readonly id: FieldRef<"Emitter", 'String'>
    readonly workspaceId: FieldRef<"Emitter", 'String'>
    readonly cnpj: FieldRef<"Emitter", 'String'>
    readonly legalName: FieldRef<"Emitter", 'String'>
    readonly tradeName: FieldRef<"Emitter", 'String'>
    readonly ie: FieldRef<"Emitter", 'String'>
    readonly im: FieldRef<"Emitter", 'String'>
    readonly crt: FieldRef<"Emitter", 'Int'>
    readonly uf: FieldRef<"Emitter", 'String'>
    readonly address: FieldRef<"Emitter", 'Json'>
    readonly environment: FieldRef<"Emitter", 'Environment'>
    readonly series: FieldRef<"Emitter", 'Int'>
    readonly credentialRef: FieldRef<"Emitter", 'String'>
    readonly active: FieldRef<"Emitter", 'Boolean'>
    readonly createdAt: FieldRef<"Emitter", 'DateTime'>
    readonly updatedAt: FieldRef<"Emitter", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Emitter findUnique
   */
  export type EmitterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emitter
     */
    select?: EmitterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emitter
     */
    omit?: EmitterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmitterInclude<ExtArgs> | null
    /**
     * Filter, which Emitter to fetch.
     */
    where: EmitterWhereUniqueInput
  }

  /**
   * Emitter findUniqueOrThrow
   */
  export type EmitterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emitter
     */
    select?: EmitterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emitter
     */
    omit?: EmitterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmitterInclude<ExtArgs> | null
    /**
     * Filter, which Emitter to fetch.
     */
    where: EmitterWhereUniqueInput
  }

  /**
   * Emitter findFirst
   */
  export type EmitterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emitter
     */
    select?: EmitterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emitter
     */
    omit?: EmitterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmitterInclude<ExtArgs> | null
    /**
     * Filter, which Emitter to fetch.
     */
    where?: EmitterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Emitters to fetch.
     */
    orderBy?: EmitterOrderByWithRelationInput | EmitterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Emitters.
     */
    cursor?: EmitterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Emitters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Emitters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Emitters.
     */
    distinct?: EmitterScalarFieldEnum | EmitterScalarFieldEnum[]
  }

  /**
   * Emitter findFirstOrThrow
   */
  export type EmitterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emitter
     */
    select?: EmitterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emitter
     */
    omit?: EmitterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmitterInclude<ExtArgs> | null
    /**
     * Filter, which Emitter to fetch.
     */
    where?: EmitterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Emitters to fetch.
     */
    orderBy?: EmitterOrderByWithRelationInput | EmitterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Emitters.
     */
    cursor?: EmitterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Emitters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Emitters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Emitters.
     */
    distinct?: EmitterScalarFieldEnum | EmitterScalarFieldEnum[]
  }

  /**
   * Emitter findMany
   */
  export type EmitterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emitter
     */
    select?: EmitterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emitter
     */
    omit?: EmitterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmitterInclude<ExtArgs> | null
    /**
     * Filter, which Emitters to fetch.
     */
    where?: EmitterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Emitters to fetch.
     */
    orderBy?: EmitterOrderByWithRelationInput | EmitterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Emitters.
     */
    cursor?: EmitterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Emitters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Emitters.
     */
    skip?: number
    distinct?: EmitterScalarFieldEnum | EmitterScalarFieldEnum[]
  }

  /**
   * Emitter create
   */
  export type EmitterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emitter
     */
    select?: EmitterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emitter
     */
    omit?: EmitterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmitterInclude<ExtArgs> | null
    /**
     * The data needed to create a Emitter.
     */
    data: XOR<EmitterCreateInput, EmitterUncheckedCreateInput>
  }

  /**
   * Emitter createMany
   */
  export type EmitterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Emitters.
     */
    data: EmitterCreateManyInput | EmitterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Emitter createManyAndReturn
   */
  export type EmitterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emitter
     */
    select?: EmitterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Emitter
     */
    omit?: EmitterOmit<ExtArgs> | null
    /**
     * The data used to create many Emitters.
     */
    data: EmitterCreateManyInput | EmitterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Emitter update
   */
  export type EmitterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emitter
     */
    select?: EmitterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emitter
     */
    omit?: EmitterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmitterInclude<ExtArgs> | null
    /**
     * The data needed to update a Emitter.
     */
    data: XOR<EmitterUpdateInput, EmitterUncheckedUpdateInput>
    /**
     * Choose, which Emitter to update.
     */
    where: EmitterWhereUniqueInput
  }

  /**
   * Emitter updateMany
   */
  export type EmitterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Emitters.
     */
    data: XOR<EmitterUpdateManyMutationInput, EmitterUncheckedUpdateManyInput>
    /**
     * Filter which Emitters to update
     */
    where?: EmitterWhereInput
    /**
     * Limit how many Emitters to update.
     */
    limit?: number
  }

  /**
   * Emitter updateManyAndReturn
   */
  export type EmitterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emitter
     */
    select?: EmitterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Emitter
     */
    omit?: EmitterOmit<ExtArgs> | null
    /**
     * The data used to update Emitters.
     */
    data: XOR<EmitterUpdateManyMutationInput, EmitterUncheckedUpdateManyInput>
    /**
     * Filter which Emitters to update
     */
    where?: EmitterWhereInput
    /**
     * Limit how many Emitters to update.
     */
    limit?: number
  }

  /**
   * Emitter upsert
   */
  export type EmitterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emitter
     */
    select?: EmitterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emitter
     */
    omit?: EmitterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmitterInclude<ExtArgs> | null
    /**
     * The filter to search for the Emitter to update in case it exists.
     */
    where: EmitterWhereUniqueInput
    /**
     * In case the Emitter found by the `where` argument doesn't exist, create a new Emitter with this data.
     */
    create: XOR<EmitterCreateInput, EmitterUncheckedCreateInput>
    /**
     * In case the Emitter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmitterUpdateInput, EmitterUncheckedUpdateInput>
  }

  /**
   * Emitter delete
   */
  export type EmitterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emitter
     */
    select?: EmitterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emitter
     */
    omit?: EmitterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmitterInclude<ExtArgs> | null
    /**
     * Filter which Emitter to delete.
     */
    where: EmitterWhereUniqueInput
  }

  /**
   * Emitter deleteMany
   */
  export type EmitterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Emitters to delete
     */
    where?: EmitterWhereInput
    /**
     * Limit how many Emitters to delete.
     */
    limit?: number
  }

  /**
   * Emitter.invoices
   */
  export type Emitter$invoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    where?: InvoiceWhereInput
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    cursor?: InvoiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Emitter without action
   */
  export type EmitterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emitter
     */
    select?: EmitterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emitter
     */
    omit?: EmitterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmitterInclude<ExtArgs> | null
  }


  /**
   * Model FiscalProfile
   */

  export type AggregateFiscalProfile = {
    _count: FiscalProfileCountAggregateOutputType | null
    _min: FiscalProfileMinAggregateOutputType | null
    _max: FiscalProfileMaxAggregateOutputType | null
  }

  export type FiscalProfileMinAggregateOutputType = {
    id: string | null
    workspaceId: string | null
    name: string | null
    description: string | null
    active: boolean | null
  }

  export type FiscalProfileMaxAggregateOutputType = {
    id: string | null
    workspaceId: string | null
    name: string | null
    description: string | null
    active: boolean | null
  }

  export type FiscalProfileCountAggregateOutputType = {
    id: number
    workspaceId: number
    name: number
    description: number
    active: number
    _all: number
  }


  export type FiscalProfileMinAggregateInputType = {
    id?: true
    workspaceId?: true
    name?: true
    description?: true
    active?: true
  }

  export type FiscalProfileMaxAggregateInputType = {
    id?: true
    workspaceId?: true
    name?: true
    description?: true
    active?: true
  }

  export type FiscalProfileCountAggregateInputType = {
    id?: true
    workspaceId?: true
    name?: true
    description?: true
    active?: true
    _all?: true
  }

  export type FiscalProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FiscalProfile to aggregate.
     */
    where?: FiscalProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FiscalProfiles to fetch.
     */
    orderBy?: FiscalProfileOrderByWithRelationInput | FiscalProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FiscalProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FiscalProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FiscalProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FiscalProfiles
    **/
    _count?: true | FiscalProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FiscalProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FiscalProfileMaxAggregateInputType
  }

  export type GetFiscalProfileAggregateType<T extends FiscalProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateFiscalProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFiscalProfile[P]>
      : GetScalarType<T[P], AggregateFiscalProfile[P]>
  }




  export type FiscalProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FiscalProfileWhereInput
    orderBy?: FiscalProfileOrderByWithAggregationInput | FiscalProfileOrderByWithAggregationInput[]
    by: FiscalProfileScalarFieldEnum[] | FiscalProfileScalarFieldEnum
    having?: FiscalProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FiscalProfileCountAggregateInputType | true
    _min?: FiscalProfileMinAggregateInputType
    _max?: FiscalProfileMaxAggregateInputType
  }

  export type FiscalProfileGroupByOutputType = {
    id: string
    workspaceId: string
    name: string
    description: string | null
    active: boolean
    _count: FiscalProfileCountAggregateOutputType | null
    _min: FiscalProfileMinAggregateOutputType | null
    _max: FiscalProfileMaxAggregateOutputType | null
  }

  type GetFiscalProfileGroupByPayload<T extends FiscalProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FiscalProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FiscalProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FiscalProfileGroupByOutputType[P]>
            : GetScalarType<T[P], FiscalProfileGroupByOutputType[P]>
        }
      >
    >


  export type FiscalProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspaceId?: boolean
    name?: boolean
    description?: boolean
    active?: boolean
    rules?: boolean | FiscalProfile$rulesArgs<ExtArgs>
    _count?: boolean | FiscalProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fiscalProfile"]>

  export type FiscalProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspaceId?: boolean
    name?: boolean
    description?: boolean
    active?: boolean
  }, ExtArgs["result"]["fiscalProfile"]>

  export type FiscalProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspaceId?: boolean
    name?: boolean
    description?: boolean
    active?: boolean
  }, ExtArgs["result"]["fiscalProfile"]>

  export type FiscalProfileSelectScalar = {
    id?: boolean
    workspaceId?: boolean
    name?: boolean
    description?: boolean
    active?: boolean
  }

  export type FiscalProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workspaceId" | "name" | "description" | "active", ExtArgs["result"]["fiscalProfile"]>
  export type FiscalProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rules?: boolean | FiscalProfile$rulesArgs<ExtArgs>
    _count?: boolean | FiscalProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FiscalProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FiscalProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FiscalProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FiscalProfile"
    objects: {
      rules: Prisma.$FiscalRulePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workspaceId: string
      name: string
      description: string | null
      active: boolean
    }, ExtArgs["result"]["fiscalProfile"]>
    composites: {}
  }

  type FiscalProfileGetPayload<S extends boolean | null | undefined | FiscalProfileDefaultArgs> = $Result.GetResult<Prisma.$FiscalProfilePayload, S>

  type FiscalProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FiscalProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FiscalProfileCountAggregateInputType | true
    }

  export interface FiscalProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FiscalProfile'], meta: { name: 'FiscalProfile' } }
    /**
     * Find zero or one FiscalProfile that matches the filter.
     * @param {FiscalProfileFindUniqueArgs} args - Arguments to find a FiscalProfile
     * @example
     * // Get one FiscalProfile
     * const fiscalProfile = await prisma.fiscalProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FiscalProfileFindUniqueArgs>(args: SelectSubset<T, FiscalProfileFindUniqueArgs<ExtArgs>>): Prisma__FiscalProfileClient<$Result.GetResult<Prisma.$FiscalProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FiscalProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FiscalProfileFindUniqueOrThrowArgs} args - Arguments to find a FiscalProfile
     * @example
     * // Get one FiscalProfile
     * const fiscalProfile = await prisma.fiscalProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FiscalProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, FiscalProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FiscalProfileClient<$Result.GetResult<Prisma.$FiscalProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FiscalProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FiscalProfileFindFirstArgs} args - Arguments to find a FiscalProfile
     * @example
     * // Get one FiscalProfile
     * const fiscalProfile = await prisma.fiscalProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FiscalProfileFindFirstArgs>(args?: SelectSubset<T, FiscalProfileFindFirstArgs<ExtArgs>>): Prisma__FiscalProfileClient<$Result.GetResult<Prisma.$FiscalProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FiscalProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FiscalProfileFindFirstOrThrowArgs} args - Arguments to find a FiscalProfile
     * @example
     * // Get one FiscalProfile
     * const fiscalProfile = await prisma.fiscalProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FiscalProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, FiscalProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__FiscalProfileClient<$Result.GetResult<Prisma.$FiscalProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FiscalProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FiscalProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FiscalProfiles
     * const fiscalProfiles = await prisma.fiscalProfile.findMany()
     * 
     * // Get first 10 FiscalProfiles
     * const fiscalProfiles = await prisma.fiscalProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fiscalProfileWithIdOnly = await prisma.fiscalProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FiscalProfileFindManyArgs>(args?: SelectSubset<T, FiscalProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FiscalProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FiscalProfile.
     * @param {FiscalProfileCreateArgs} args - Arguments to create a FiscalProfile.
     * @example
     * // Create one FiscalProfile
     * const FiscalProfile = await prisma.fiscalProfile.create({
     *   data: {
     *     // ... data to create a FiscalProfile
     *   }
     * })
     * 
     */
    create<T extends FiscalProfileCreateArgs>(args: SelectSubset<T, FiscalProfileCreateArgs<ExtArgs>>): Prisma__FiscalProfileClient<$Result.GetResult<Prisma.$FiscalProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FiscalProfiles.
     * @param {FiscalProfileCreateManyArgs} args - Arguments to create many FiscalProfiles.
     * @example
     * // Create many FiscalProfiles
     * const fiscalProfile = await prisma.fiscalProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FiscalProfileCreateManyArgs>(args?: SelectSubset<T, FiscalProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FiscalProfiles and returns the data saved in the database.
     * @param {FiscalProfileCreateManyAndReturnArgs} args - Arguments to create many FiscalProfiles.
     * @example
     * // Create many FiscalProfiles
     * const fiscalProfile = await prisma.fiscalProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FiscalProfiles and only return the `id`
     * const fiscalProfileWithIdOnly = await prisma.fiscalProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FiscalProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, FiscalProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FiscalProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FiscalProfile.
     * @param {FiscalProfileDeleteArgs} args - Arguments to delete one FiscalProfile.
     * @example
     * // Delete one FiscalProfile
     * const FiscalProfile = await prisma.fiscalProfile.delete({
     *   where: {
     *     // ... filter to delete one FiscalProfile
     *   }
     * })
     * 
     */
    delete<T extends FiscalProfileDeleteArgs>(args: SelectSubset<T, FiscalProfileDeleteArgs<ExtArgs>>): Prisma__FiscalProfileClient<$Result.GetResult<Prisma.$FiscalProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FiscalProfile.
     * @param {FiscalProfileUpdateArgs} args - Arguments to update one FiscalProfile.
     * @example
     * // Update one FiscalProfile
     * const fiscalProfile = await prisma.fiscalProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FiscalProfileUpdateArgs>(args: SelectSubset<T, FiscalProfileUpdateArgs<ExtArgs>>): Prisma__FiscalProfileClient<$Result.GetResult<Prisma.$FiscalProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FiscalProfiles.
     * @param {FiscalProfileDeleteManyArgs} args - Arguments to filter FiscalProfiles to delete.
     * @example
     * // Delete a few FiscalProfiles
     * const { count } = await prisma.fiscalProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FiscalProfileDeleteManyArgs>(args?: SelectSubset<T, FiscalProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FiscalProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FiscalProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FiscalProfiles
     * const fiscalProfile = await prisma.fiscalProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FiscalProfileUpdateManyArgs>(args: SelectSubset<T, FiscalProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FiscalProfiles and returns the data updated in the database.
     * @param {FiscalProfileUpdateManyAndReturnArgs} args - Arguments to update many FiscalProfiles.
     * @example
     * // Update many FiscalProfiles
     * const fiscalProfile = await prisma.fiscalProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FiscalProfiles and only return the `id`
     * const fiscalProfileWithIdOnly = await prisma.fiscalProfile.updateManyAndReturn({
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
    updateManyAndReturn<T extends FiscalProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, FiscalProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FiscalProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FiscalProfile.
     * @param {FiscalProfileUpsertArgs} args - Arguments to update or create a FiscalProfile.
     * @example
     * // Update or create a FiscalProfile
     * const fiscalProfile = await prisma.fiscalProfile.upsert({
     *   create: {
     *     // ... data to create a FiscalProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FiscalProfile we want to update
     *   }
     * })
     */
    upsert<T extends FiscalProfileUpsertArgs>(args: SelectSubset<T, FiscalProfileUpsertArgs<ExtArgs>>): Prisma__FiscalProfileClient<$Result.GetResult<Prisma.$FiscalProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FiscalProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FiscalProfileCountArgs} args - Arguments to filter FiscalProfiles to count.
     * @example
     * // Count the number of FiscalProfiles
     * const count = await prisma.fiscalProfile.count({
     *   where: {
     *     // ... the filter for the FiscalProfiles we want to count
     *   }
     * })
    **/
    count<T extends FiscalProfileCountArgs>(
      args?: Subset<T, FiscalProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FiscalProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FiscalProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FiscalProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FiscalProfileAggregateArgs>(args: Subset<T, FiscalProfileAggregateArgs>): Prisma.PrismaPromise<GetFiscalProfileAggregateType<T>>

    /**
     * Group by FiscalProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FiscalProfileGroupByArgs} args - Group by arguments.
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
      T extends FiscalProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FiscalProfileGroupByArgs['orderBy'] }
        : { orderBy?: FiscalProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FiscalProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFiscalProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FiscalProfile model
   */
  readonly fields: FiscalProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FiscalProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FiscalProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rules<T extends FiscalProfile$rulesArgs<ExtArgs> = {}>(args?: Subset<T, FiscalProfile$rulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FiscalRulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the FiscalProfile model
   */
  interface FiscalProfileFieldRefs {
    readonly id: FieldRef<"FiscalProfile", 'String'>
    readonly workspaceId: FieldRef<"FiscalProfile", 'String'>
    readonly name: FieldRef<"FiscalProfile", 'String'>
    readonly description: FieldRef<"FiscalProfile", 'String'>
    readonly active: FieldRef<"FiscalProfile", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * FiscalProfile findUnique
   */
  export type FiscalProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FiscalProfile
     */
    select?: FiscalProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FiscalProfile
     */
    omit?: FiscalProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FiscalProfileInclude<ExtArgs> | null
    /**
     * Filter, which FiscalProfile to fetch.
     */
    where: FiscalProfileWhereUniqueInput
  }

  /**
   * FiscalProfile findUniqueOrThrow
   */
  export type FiscalProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FiscalProfile
     */
    select?: FiscalProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FiscalProfile
     */
    omit?: FiscalProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FiscalProfileInclude<ExtArgs> | null
    /**
     * Filter, which FiscalProfile to fetch.
     */
    where: FiscalProfileWhereUniqueInput
  }

  /**
   * FiscalProfile findFirst
   */
  export type FiscalProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FiscalProfile
     */
    select?: FiscalProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FiscalProfile
     */
    omit?: FiscalProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FiscalProfileInclude<ExtArgs> | null
    /**
     * Filter, which FiscalProfile to fetch.
     */
    where?: FiscalProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FiscalProfiles to fetch.
     */
    orderBy?: FiscalProfileOrderByWithRelationInput | FiscalProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FiscalProfiles.
     */
    cursor?: FiscalProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FiscalProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FiscalProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FiscalProfiles.
     */
    distinct?: FiscalProfileScalarFieldEnum | FiscalProfileScalarFieldEnum[]
  }

  /**
   * FiscalProfile findFirstOrThrow
   */
  export type FiscalProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FiscalProfile
     */
    select?: FiscalProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FiscalProfile
     */
    omit?: FiscalProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FiscalProfileInclude<ExtArgs> | null
    /**
     * Filter, which FiscalProfile to fetch.
     */
    where?: FiscalProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FiscalProfiles to fetch.
     */
    orderBy?: FiscalProfileOrderByWithRelationInput | FiscalProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FiscalProfiles.
     */
    cursor?: FiscalProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FiscalProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FiscalProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FiscalProfiles.
     */
    distinct?: FiscalProfileScalarFieldEnum | FiscalProfileScalarFieldEnum[]
  }

  /**
   * FiscalProfile findMany
   */
  export type FiscalProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FiscalProfile
     */
    select?: FiscalProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FiscalProfile
     */
    omit?: FiscalProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FiscalProfileInclude<ExtArgs> | null
    /**
     * Filter, which FiscalProfiles to fetch.
     */
    where?: FiscalProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FiscalProfiles to fetch.
     */
    orderBy?: FiscalProfileOrderByWithRelationInput | FiscalProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FiscalProfiles.
     */
    cursor?: FiscalProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FiscalProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FiscalProfiles.
     */
    skip?: number
    distinct?: FiscalProfileScalarFieldEnum | FiscalProfileScalarFieldEnum[]
  }

  /**
   * FiscalProfile create
   */
  export type FiscalProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FiscalProfile
     */
    select?: FiscalProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FiscalProfile
     */
    omit?: FiscalProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FiscalProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a FiscalProfile.
     */
    data: XOR<FiscalProfileCreateInput, FiscalProfileUncheckedCreateInput>
  }

  /**
   * FiscalProfile createMany
   */
  export type FiscalProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FiscalProfiles.
     */
    data: FiscalProfileCreateManyInput | FiscalProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FiscalProfile createManyAndReturn
   */
  export type FiscalProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FiscalProfile
     */
    select?: FiscalProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FiscalProfile
     */
    omit?: FiscalProfileOmit<ExtArgs> | null
    /**
     * The data used to create many FiscalProfiles.
     */
    data: FiscalProfileCreateManyInput | FiscalProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FiscalProfile update
   */
  export type FiscalProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FiscalProfile
     */
    select?: FiscalProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FiscalProfile
     */
    omit?: FiscalProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FiscalProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a FiscalProfile.
     */
    data: XOR<FiscalProfileUpdateInput, FiscalProfileUncheckedUpdateInput>
    /**
     * Choose, which FiscalProfile to update.
     */
    where: FiscalProfileWhereUniqueInput
  }

  /**
   * FiscalProfile updateMany
   */
  export type FiscalProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FiscalProfiles.
     */
    data: XOR<FiscalProfileUpdateManyMutationInput, FiscalProfileUncheckedUpdateManyInput>
    /**
     * Filter which FiscalProfiles to update
     */
    where?: FiscalProfileWhereInput
    /**
     * Limit how many FiscalProfiles to update.
     */
    limit?: number
  }

  /**
   * FiscalProfile updateManyAndReturn
   */
  export type FiscalProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FiscalProfile
     */
    select?: FiscalProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FiscalProfile
     */
    omit?: FiscalProfileOmit<ExtArgs> | null
    /**
     * The data used to update FiscalProfiles.
     */
    data: XOR<FiscalProfileUpdateManyMutationInput, FiscalProfileUncheckedUpdateManyInput>
    /**
     * Filter which FiscalProfiles to update
     */
    where?: FiscalProfileWhereInput
    /**
     * Limit how many FiscalProfiles to update.
     */
    limit?: number
  }

  /**
   * FiscalProfile upsert
   */
  export type FiscalProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FiscalProfile
     */
    select?: FiscalProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FiscalProfile
     */
    omit?: FiscalProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FiscalProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the FiscalProfile to update in case it exists.
     */
    where: FiscalProfileWhereUniqueInput
    /**
     * In case the FiscalProfile found by the `where` argument doesn't exist, create a new FiscalProfile with this data.
     */
    create: XOR<FiscalProfileCreateInput, FiscalProfileUncheckedCreateInput>
    /**
     * In case the FiscalProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FiscalProfileUpdateInput, FiscalProfileUncheckedUpdateInput>
  }

  /**
   * FiscalProfile delete
   */
  export type FiscalProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FiscalProfile
     */
    select?: FiscalProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FiscalProfile
     */
    omit?: FiscalProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FiscalProfileInclude<ExtArgs> | null
    /**
     * Filter which FiscalProfile to delete.
     */
    where: FiscalProfileWhereUniqueInput
  }

  /**
   * FiscalProfile deleteMany
   */
  export type FiscalProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FiscalProfiles to delete
     */
    where?: FiscalProfileWhereInput
    /**
     * Limit how many FiscalProfiles to delete.
     */
    limit?: number
  }

  /**
   * FiscalProfile.rules
   */
  export type FiscalProfile$rulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FiscalRule
     */
    select?: FiscalRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FiscalRule
     */
    omit?: FiscalRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FiscalRuleInclude<ExtArgs> | null
    where?: FiscalRuleWhereInput
    orderBy?: FiscalRuleOrderByWithRelationInput | FiscalRuleOrderByWithRelationInput[]
    cursor?: FiscalRuleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FiscalRuleScalarFieldEnum | FiscalRuleScalarFieldEnum[]
  }

  /**
   * FiscalProfile without action
   */
  export type FiscalProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FiscalProfile
     */
    select?: FiscalProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FiscalProfile
     */
    omit?: FiscalProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FiscalProfileInclude<ExtArgs> | null
  }


  /**
   * Model FiscalRule
   */

  export type AggregateFiscalRule = {
    _count: FiscalRuleCountAggregateOutputType | null
    _min: FiscalRuleMinAggregateOutputType | null
    _max: FiscalRuleMaxAggregateOutputType | null
  }

  export type FiscalRuleMinAggregateOutputType = {
    id: string | null
    profileId: string | null
    operation: $Enums.Operation | null
    ufOrigin: string | null
    ufDestination: string | null
    cfop: string | null
    taxCode: string | null
    createdAt: Date | null
  }

  export type FiscalRuleMaxAggregateOutputType = {
    id: string | null
    profileId: string | null
    operation: $Enums.Operation | null
    ufOrigin: string | null
    ufDestination: string | null
    cfop: string | null
    taxCode: string | null
    createdAt: Date | null
  }

  export type FiscalRuleCountAggregateOutputType = {
    id: number
    profileId: number
    operation: number
    ufOrigin: number
    ufDestination: number
    cfop: number
    taxCode: number
    taxes: number
    createdAt: number
    _all: number
  }


  export type FiscalRuleMinAggregateInputType = {
    id?: true
    profileId?: true
    operation?: true
    ufOrigin?: true
    ufDestination?: true
    cfop?: true
    taxCode?: true
    createdAt?: true
  }

  export type FiscalRuleMaxAggregateInputType = {
    id?: true
    profileId?: true
    operation?: true
    ufOrigin?: true
    ufDestination?: true
    cfop?: true
    taxCode?: true
    createdAt?: true
  }

  export type FiscalRuleCountAggregateInputType = {
    id?: true
    profileId?: true
    operation?: true
    ufOrigin?: true
    ufDestination?: true
    cfop?: true
    taxCode?: true
    taxes?: true
    createdAt?: true
    _all?: true
  }

  export type FiscalRuleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FiscalRule to aggregate.
     */
    where?: FiscalRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FiscalRules to fetch.
     */
    orderBy?: FiscalRuleOrderByWithRelationInput | FiscalRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FiscalRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FiscalRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FiscalRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FiscalRules
    **/
    _count?: true | FiscalRuleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FiscalRuleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FiscalRuleMaxAggregateInputType
  }

  export type GetFiscalRuleAggregateType<T extends FiscalRuleAggregateArgs> = {
        [P in keyof T & keyof AggregateFiscalRule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFiscalRule[P]>
      : GetScalarType<T[P], AggregateFiscalRule[P]>
  }




  export type FiscalRuleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FiscalRuleWhereInput
    orderBy?: FiscalRuleOrderByWithAggregationInput | FiscalRuleOrderByWithAggregationInput[]
    by: FiscalRuleScalarFieldEnum[] | FiscalRuleScalarFieldEnum
    having?: FiscalRuleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FiscalRuleCountAggregateInputType | true
    _min?: FiscalRuleMinAggregateInputType
    _max?: FiscalRuleMaxAggregateInputType
  }

  export type FiscalRuleGroupByOutputType = {
    id: string
    profileId: string
    operation: $Enums.Operation
    ufOrigin: string | null
    ufDestination: string | null
    cfop: string
    taxCode: string
    taxes: JsonValue | null
    createdAt: Date
    _count: FiscalRuleCountAggregateOutputType | null
    _min: FiscalRuleMinAggregateOutputType | null
    _max: FiscalRuleMaxAggregateOutputType | null
  }

  type GetFiscalRuleGroupByPayload<T extends FiscalRuleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FiscalRuleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FiscalRuleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FiscalRuleGroupByOutputType[P]>
            : GetScalarType<T[P], FiscalRuleGroupByOutputType[P]>
        }
      >
    >


  export type FiscalRuleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profileId?: boolean
    operation?: boolean
    ufOrigin?: boolean
    ufDestination?: boolean
    cfop?: boolean
    taxCode?: boolean
    taxes?: boolean
    createdAt?: boolean
    profile?: boolean | FiscalProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fiscalRule"]>

  export type FiscalRuleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profileId?: boolean
    operation?: boolean
    ufOrigin?: boolean
    ufDestination?: boolean
    cfop?: boolean
    taxCode?: boolean
    taxes?: boolean
    createdAt?: boolean
    profile?: boolean | FiscalProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fiscalRule"]>

  export type FiscalRuleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profileId?: boolean
    operation?: boolean
    ufOrigin?: boolean
    ufDestination?: boolean
    cfop?: boolean
    taxCode?: boolean
    taxes?: boolean
    createdAt?: boolean
    profile?: boolean | FiscalProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fiscalRule"]>

  export type FiscalRuleSelectScalar = {
    id?: boolean
    profileId?: boolean
    operation?: boolean
    ufOrigin?: boolean
    ufDestination?: boolean
    cfop?: boolean
    taxCode?: boolean
    taxes?: boolean
    createdAt?: boolean
  }

  export type FiscalRuleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "profileId" | "operation" | "ufOrigin" | "ufDestination" | "cfop" | "taxCode" | "taxes" | "createdAt", ExtArgs["result"]["fiscalRule"]>
  export type FiscalRuleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | FiscalProfileDefaultArgs<ExtArgs>
  }
  export type FiscalRuleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | FiscalProfileDefaultArgs<ExtArgs>
  }
  export type FiscalRuleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | FiscalProfileDefaultArgs<ExtArgs>
  }

  export type $FiscalRulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FiscalRule"
    objects: {
      profile: Prisma.$FiscalProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      profileId: string
      operation: $Enums.Operation
      ufOrigin: string | null
      ufDestination: string | null
      cfop: string
      taxCode: string
      taxes: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["fiscalRule"]>
    composites: {}
  }

  type FiscalRuleGetPayload<S extends boolean | null | undefined | FiscalRuleDefaultArgs> = $Result.GetResult<Prisma.$FiscalRulePayload, S>

  type FiscalRuleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FiscalRuleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FiscalRuleCountAggregateInputType | true
    }

  export interface FiscalRuleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FiscalRule'], meta: { name: 'FiscalRule' } }
    /**
     * Find zero or one FiscalRule that matches the filter.
     * @param {FiscalRuleFindUniqueArgs} args - Arguments to find a FiscalRule
     * @example
     * // Get one FiscalRule
     * const fiscalRule = await prisma.fiscalRule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FiscalRuleFindUniqueArgs>(args: SelectSubset<T, FiscalRuleFindUniqueArgs<ExtArgs>>): Prisma__FiscalRuleClient<$Result.GetResult<Prisma.$FiscalRulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FiscalRule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FiscalRuleFindUniqueOrThrowArgs} args - Arguments to find a FiscalRule
     * @example
     * // Get one FiscalRule
     * const fiscalRule = await prisma.fiscalRule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FiscalRuleFindUniqueOrThrowArgs>(args: SelectSubset<T, FiscalRuleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FiscalRuleClient<$Result.GetResult<Prisma.$FiscalRulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FiscalRule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FiscalRuleFindFirstArgs} args - Arguments to find a FiscalRule
     * @example
     * // Get one FiscalRule
     * const fiscalRule = await prisma.fiscalRule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FiscalRuleFindFirstArgs>(args?: SelectSubset<T, FiscalRuleFindFirstArgs<ExtArgs>>): Prisma__FiscalRuleClient<$Result.GetResult<Prisma.$FiscalRulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FiscalRule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FiscalRuleFindFirstOrThrowArgs} args - Arguments to find a FiscalRule
     * @example
     * // Get one FiscalRule
     * const fiscalRule = await prisma.fiscalRule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FiscalRuleFindFirstOrThrowArgs>(args?: SelectSubset<T, FiscalRuleFindFirstOrThrowArgs<ExtArgs>>): Prisma__FiscalRuleClient<$Result.GetResult<Prisma.$FiscalRulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FiscalRules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FiscalRuleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FiscalRules
     * const fiscalRules = await prisma.fiscalRule.findMany()
     * 
     * // Get first 10 FiscalRules
     * const fiscalRules = await prisma.fiscalRule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fiscalRuleWithIdOnly = await prisma.fiscalRule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FiscalRuleFindManyArgs>(args?: SelectSubset<T, FiscalRuleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FiscalRulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FiscalRule.
     * @param {FiscalRuleCreateArgs} args - Arguments to create a FiscalRule.
     * @example
     * // Create one FiscalRule
     * const FiscalRule = await prisma.fiscalRule.create({
     *   data: {
     *     // ... data to create a FiscalRule
     *   }
     * })
     * 
     */
    create<T extends FiscalRuleCreateArgs>(args: SelectSubset<T, FiscalRuleCreateArgs<ExtArgs>>): Prisma__FiscalRuleClient<$Result.GetResult<Prisma.$FiscalRulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FiscalRules.
     * @param {FiscalRuleCreateManyArgs} args - Arguments to create many FiscalRules.
     * @example
     * // Create many FiscalRules
     * const fiscalRule = await prisma.fiscalRule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FiscalRuleCreateManyArgs>(args?: SelectSubset<T, FiscalRuleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FiscalRules and returns the data saved in the database.
     * @param {FiscalRuleCreateManyAndReturnArgs} args - Arguments to create many FiscalRules.
     * @example
     * // Create many FiscalRules
     * const fiscalRule = await prisma.fiscalRule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FiscalRules and only return the `id`
     * const fiscalRuleWithIdOnly = await prisma.fiscalRule.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FiscalRuleCreateManyAndReturnArgs>(args?: SelectSubset<T, FiscalRuleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FiscalRulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FiscalRule.
     * @param {FiscalRuleDeleteArgs} args - Arguments to delete one FiscalRule.
     * @example
     * // Delete one FiscalRule
     * const FiscalRule = await prisma.fiscalRule.delete({
     *   where: {
     *     // ... filter to delete one FiscalRule
     *   }
     * })
     * 
     */
    delete<T extends FiscalRuleDeleteArgs>(args: SelectSubset<T, FiscalRuleDeleteArgs<ExtArgs>>): Prisma__FiscalRuleClient<$Result.GetResult<Prisma.$FiscalRulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FiscalRule.
     * @param {FiscalRuleUpdateArgs} args - Arguments to update one FiscalRule.
     * @example
     * // Update one FiscalRule
     * const fiscalRule = await prisma.fiscalRule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FiscalRuleUpdateArgs>(args: SelectSubset<T, FiscalRuleUpdateArgs<ExtArgs>>): Prisma__FiscalRuleClient<$Result.GetResult<Prisma.$FiscalRulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FiscalRules.
     * @param {FiscalRuleDeleteManyArgs} args - Arguments to filter FiscalRules to delete.
     * @example
     * // Delete a few FiscalRules
     * const { count } = await prisma.fiscalRule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FiscalRuleDeleteManyArgs>(args?: SelectSubset<T, FiscalRuleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FiscalRules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FiscalRuleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FiscalRules
     * const fiscalRule = await prisma.fiscalRule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FiscalRuleUpdateManyArgs>(args: SelectSubset<T, FiscalRuleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FiscalRules and returns the data updated in the database.
     * @param {FiscalRuleUpdateManyAndReturnArgs} args - Arguments to update many FiscalRules.
     * @example
     * // Update many FiscalRules
     * const fiscalRule = await prisma.fiscalRule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FiscalRules and only return the `id`
     * const fiscalRuleWithIdOnly = await prisma.fiscalRule.updateManyAndReturn({
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
    updateManyAndReturn<T extends FiscalRuleUpdateManyAndReturnArgs>(args: SelectSubset<T, FiscalRuleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FiscalRulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FiscalRule.
     * @param {FiscalRuleUpsertArgs} args - Arguments to update or create a FiscalRule.
     * @example
     * // Update or create a FiscalRule
     * const fiscalRule = await prisma.fiscalRule.upsert({
     *   create: {
     *     // ... data to create a FiscalRule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FiscalRule we want to update
     *   }
     * })
     */
    upsert<T extends FiscalRuleUpsertArgs>(args: SelectSubset<T, FiscalRuleUpsertArgs<ExtArgs>>): Prisma__FiscalRuleClient<$Result.GetResult<Prisma.$FiscalRulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FiscalRules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FiscalRuleCountArgs} args - Arguments to filter FiscalRules to count.
     * @example
     * // Count the number of FiscalRules
     * const count = await prisma.fiscalRule.count({
     *   where: {
     *     // ... the filter for the FiscalRules we want to count
     *   }
     * })
    **/
    count<T extends FiscalRuleCountArgs>(
      args?: Subset<T, FiscalRuleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FiscalRuleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FiscalRule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FiscalRuleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FiscalRuleAggregateArgs>(args: Subset<T, FiscalRuleAggregateArgs>): Prisma.PrismaPromise<GetFiscalRuleAggregateType<T>>

    /**
     * Group by FiscalRule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FiscalRuleGroupByArgs} args - Group by arguments.
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
      T extends FiscalRuleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FiscalRuleGroupByArgs['orderBy'] }
        : { orderBy?: FiscalRuleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FiscalRuleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFiscalRuleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FiscalRule model
   */
  readonly fields: FiscalRuleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FiscalRule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FiscalRuleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends FiscalProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FiscalProfileDefaultArgs<ExtArgs>>): Prisma__FiscalProfileClient<$Result.GetResult<Prisma.$FiscalProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the FiscalRule model
   */
  interface FiscalRuleFieldRefs {
    readonly id: FieldRef<"FiscalRule", 'String'>
    readonly profileId: FieldRef<"FiscalRule", 'String'>
    readonly operation: FieldRef<"FiscalRule", 'Operation'>
    readonly ufOrigin: FieldRef<"FiscalRule", 'String'>
    readonly ufDestination: FieldRef<"FiscalRule", 'String'>
    readonly cfop: FieldRef<"FiscalRule", 'String'>
    readonly taxCode: FieldRef<"FiscalRule", 'String'>
    readonly taxes: FieldRef<"FiscalRule", 'Json'>
    readonly createdAt: FieldRef<"FiscalRule", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FiscalRule findUnique
   */
  export type FiscalRuleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FiscalRule
     */
    select?: FiscalRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FiscalRule
     */
    omit?: FiscalRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FiscalRuleInclude<ExtArgs> | null
    /**
     * Filter, which FiscalRule to fetch.
     */
    where: FiscalRuleWhereUniqueInput
  }

  /**
   * FiscalRule findUniqueOrThrow
   */
  export type FiscalRuleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FiscalRule
     */
    select?: FiscalRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FiscalRule
     */
    omit?: FiscalRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FiscalRuleInclude<ExtArgs> | null
    /**
     * Filter, which FiscalRule to fetch.
     */
    where: FiscalRuleWhereUniqueInput
  }

  /**
   * FiscalRule findFirst
   */
  export type FiscalRuleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FiscalRule
     */
    select?: FiscalRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FiscalRule
     */
    omit?: FiscalRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FiscalRuleInclude<ExtArgs> | null
    /**
     * Filter, which FiscalRule to fetch.
     */
    where?: FiscalRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FiscalRules to fetch.
     */
    orderBy?: FiscalRuleOrderByWithRelationInput | FiscalRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FiscalRules.
     */
    cursor?: FiscalRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FiscalRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FiscalRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FiscalRules.
     */
    distinct?: FiscalRuleScalarFieldEnum | FiscalRuleScalarFieldEnum[]
  }

  /**
   * FiscalRule findFirstOrThrow
   */
  export type FiscalRuleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FiscalRule
     */
    select?: FiscalRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FiscalRule
     */
    omit?: FiscalRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FiscalRuleInclude<ExtArgs> | null
    /**
     * Filter, which FiscalRule to fetch.
     */
    where?: FiscalRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FiscalRules to fetch.
     */
    orderBy?: FiscalRuleOrderByWithRelationInput | FiscalRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FiscalRules.
     */
    cursor?: FiscalRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FiscalRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FiscalRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FiscalRules.
     */
    distinct?: FiscalRuleScalarFieldEnum | FiscalRuleScalarFieldEnum[]
  }

  /**
   * FiscalRule findMany
   */
  export type FiscalRuleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FiscalRule
     */
    select?: FiscalRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FiscalRule
     */
    omit?: FiscalRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FiscalRuleInclude<ExtArgs> | null
    /**
     * Filter, which FiscalRules to fetch.
     */
    where?: FiscalRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FiscalRules to fetch.
     */
    orderBy?: FiscalRuleOrderByWithRelationInput | FiscalRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FiscalRules.
     */
    cursor?: FiscalRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FiscalRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FiscalRules.
     */
    skip?: number
    distinct?: FiscalRuleScalarFieldEnum | FiscalRuleScalarFieldEnum[]
  }

  /**
   * FiscalRule create
   */
  export type FiscalRuleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FiscalRule
     */
    select?: FiscalRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FiscalRule
     */
    omit?: FiscalRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FiscalRuleInclude<ExtArgs> | null
    /**
     * The data needed to create a FiscalRule.
     */
    data: XOR<FiscalRuleCreateInput, FiscalRuleUncheckedCreateInput>
  }

  /**
   * FiscalRule createMany
   */
  export type FiscalRuleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FiscalRules.
     */
    data: FiscalRuleCreateManyInput | FiscalRuleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FiscalRule createManyAndReturn
   */
  export type FiscalRuleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FiscalRule
     */
    select?: FiscalRuleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FiscalRule
     */
    omit?: FiscalRuleOmit<ExtArgs> | null
    /**
     * The data used to create many FiscalRules.
     */
    data: FiscalRuleCreateManyInput | FiscalRuleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FiscalRuleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FiscalRule update
   */
  export type FiscalRuleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FiscalRule
     */
    select?: FiscalRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FiscalRule
     */
    omit?: FiscalRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FiscalRuleInclude<ExtArgs> | null
    /**
     * The data needed to update a FiscalRule.
     */
    data: XOR<FiscalRuleUpdateInput, FiscalRuleUncheckedUpdateInput>
    /**
     * Choose, which FiscalRule to update.
     */
    where: FiscalRuleWhereUniqueInput
  }

  /**
   * FiscalRule updateMany
   */
  export type FiscalRuleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FiscalRules.
     */
    data: XOR<FiscalRuleUpdateManyMutationInput, FiscalRuleUncheckedUpdateManyInput>
    /**
     * Filter which FiscalRules to update
     */
    where?: FiscalRuleWhereInput
    /**
     * Limit how many FiscalRules to update.
     */
    limit?: number
  }

  /**
   * FiscalRule updateManyAndReturn
   */
  export type FiscalRuleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FiscalRule
     */
    select?: FiscalRuleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FiscalRule
     */
    omit?: FiscalRuleOmit<ExtArgs> | null
    /**
     * The data used to update FiscalRules.
     */
    data: XOR<FiscalRuleUpdateManyMutationInput, FiscalRuleUncheckedUpdateManyInput>
    /**
     * Filter which FiscalRules to update
     */
    where?: FiscalRuleWhereInput
    /**
     * Limit how many FiscalRules to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FiscalRuleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FiscalRule upsert
   */
  export type FiscalRuleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FiscalRule
     */
    select?: FiscalRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FiscalRule
     */
    omit?: FiscalRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FiscalRuleInclude<ExtArgs> | null
    /**
     * The filter to search for the FiscalRule to update in case it exists.
     */
    where: FiscalRuleWhereUniqueInput
    /**
     * In case the FiscalRule found by the `where` argument doesn't exist, create a new FiscalRule with this data.
     */
    create: XOR<FiscalRuleCreateInput, FiscalRuleUncheckedCreateInput>
    /**
     * In case the FiscalRule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FiscalRuleUpdateInput, FiscalRuleUncheckedUpdateInput>
  }

  /**
   * FiscalRule delete
   */
  export type FiscalRuleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FiscalRule
     */
    select?: FiscalRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FiscalRule
     */
    omit?: FiscalRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FiscalRuleInclude<ExtArgs> | null
    /**
     * Filter which FiscalRule to delete.
     */
    where: FiscalRuleWhereUniqueInput
  }

  /**
   * FiscalRule deleteMany
   */
  export type FiscalRuleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FiscalRules to delete
     */
    where?: FiscalRuleWhereInput
    /**
     * Limit how many FiscalRules to delete.
     */
    limit?: number
  }

  /**
   * FiscalRule without action
   */
  export type FiscalRuleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FiscalRule
     */
    select?: FiscalRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FiscalRule
     */
    omit?: FiscalRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FiscalRuleInclude<ExtArgs> | null
  }


  /**
   * Model Invoice
   */

  export type AggregateInvoice = {
    _count: InvoiceCountAggregateOutputType | null
    _avg: InvoiceAvgAggregateOutputType | null
    _sum: InvoiceSumAggregateOutputType | null
    _min: InvoiceMinAggregateOutputType | null
    _max: InvoiceMaxAggregateOutputType | null
  }

  export type InvoiceAvgAggregateOutputType = {
    purpose: number | null
    totalValue: Decimal | null
    number: number | null
    series: number | null
    checkCount: number | null
  }

  export type InvoiceSumAggregateOutputType = {
    purpose: number | null
    totalValue: Decimal | null
    number: number | null
    series: number | null
    checkCount: number | null
  }

  export type InvoiceMinAggregateOutputType = {
    id: string | null
    workspaceId: string | null
    emitterId: string | null
    type: $Enums.InvoiceType | null
    status: $Enums.InvoiceStatus | null
    idempotencyKey: string | null
    requestHash: string | null
    originType: string | null
    originId: string | null
    operation: $Enums.Operation | null
    purpose: number | null
    totalValue: Decimal | null
    number: number | null
    series: number | null
    accessKey: string | null
    protocol: string | null
    environment: $Enums.Environment | null
    providerRef: string | null
    s3XmlKey: string | null
    s3PdfKey: string | null
    rejectionCode: string | null
    rejectionMessage: string | null
    referencedKey: string | null
    authorizedAt: Date | null
    processingAt: Date | null
    lastCheckedAt: Date | null
    checkCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InvoiceMaxAggregateOutputType = {
    id: string | null
    workspaceId: string | null
    emitterId: string | null
    type: $Enums.InvoiceType | null
    status: $Enums.InvoiceStatus | null
    idempotencyKey: string | null
    requestHash: string | null
    originType: string | null
    originId: string | null
    operation: $Enums.Operation | null
    purpose: number | null
    totalValue: Decimal | null
    number: number | null
    series: number | null
    accessKey: string | null
    protocol: string | null
    environment: $Enums.Environment | null
    providerRef: string | null
    s3XmlKey: string | null
    s3PdfKey: string | null
    rejectionCode: string | null
    rejectionMessage: string | null
    referencedKey: string | null
    authorizedAt: Date | null
    processingAt: Date | null
    lastCheckedAt: Date | null
    checkCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InvoiceCountAggregateOutputType = {
    id: number
    workspaceId: number
    emitterId: number
    type: number
    status: number
    idempotencyKey: number
    requestHash: number
    originType: number
    originId: number
    operation: number
    purpose: number
    requestPayload: number
    resolvedItems: number
    totalValue: number
    number: number
    series: number
    accessKey: number
    protocol: number
    environment: number
    providerRef: number
    s3XmlKey: number
    s3PdfKey: number
    rejectionCode: number
    rejectionMessage: number
    referencedKey: number
    authorizedAt: number
    processingAt: number
    lastCheckedAt: number
    checkCount: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InvoiceAvgAggregateInputType = {
    purpose?: true
    totalValue?: true
    number?: true
    series?: true
    checkCount?: true
  }

  export type InvoiceSumAggregateInputType = {
    purpose?: true
    totalValue?: true
    number?: true
    series?: true
    checkCount?: true
  }

  export type InvoiceMinAggregateInputType = {
    id?: true
    workspaceId?: true
    emitterId?: true
    type?: true
    status?: true
    idempotencyKey?: true
    requestHash?: true
    originType?: true
    originId?: true
    operation?: true
    purpose?: true
    totalValue?: true
    number?: true
    series?: true
    accessKey?: true
    protocol?: true
    environment?: true
    providerRef?: true
    s3XmlKey?: true
    s3PdfKey?: true
    rejectionCode?: true
    rejectionMessage?: true
    referencedKey?: true
    authorizedAt?: true
    processingAt?: true
    lastCheckedAt?: true
    checkCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InvoiceMaxAggregateInputType = {
    id?: true
    workspaceId?: true
    emitterId?: true
    type?: true
    status?: true
    idempotencyKey?: true
    requestHash?: true
    originType?: true
    originId?: true
    operation?: true
    purpose?: true
    totalValue?: true
    number?: true
    series?: true
    accessKey?: true
    protocol?: true
    environment?: true
    providerRef?: true
    s3XmlKey?: true
    s3PdfKey?: true
    rejectionCode?: true
    rejectionMessage?: true
    referencedKey?: true
    authorizedAt?: true
    processingAt?: true
    lastCheckedAt?: true
    checkCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InvoiceCountAggregateInputType = {
    id?: true
    workspaceId?: true
    emitterId?: true
    type?: true
    status?: true
    idempotencyKey?: true
    requestHash?: true
    originType?: true
    originId?: true
    operation?: true
    purpose?: true
    requestPayload?: true
    resolvedItems?: true
    totalValue?: true
    number?: true
    series?: true
    accessKey?: true
    protocol?: true
    environment?: true
    providerRef?: true
    s3XmlKey?: true
    s3PdfKey?: true
    rejectionCode?: true
    rejectionMessage?: true
    referencedKey?: true
    authorizedAt?: true
    processingAt?: true
    lastCheckedAt?: true
    checkCount?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InvoiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invoice to aggregate.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Invoices
    **/
    _count?: true | InvoiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvoiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvoiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvoiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvoiceMaxAggregateInputType
  }

  export type GetInvoiceAggregateType<T extends InvoiceAggregateArgs> = {
        [P in keyof T & keyof AggregateInvoice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvoice[P]>
      : GetScalarType<T[P], AggregateInvoice[P]>
  }




  export type InvoiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceWhereInput
    orderBy?: InvoiceOrderByWithAggregationInput | InvoiceOrderByWithAggregationInput[]
    by: InvoiceScalarFieldEnum[] | InvoiceScalarFieldEnum
    having?: InvoiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvoiceCountAggregateInputType | true
    _avg?: InvoiceAvgAggregateInputType
    _sum?: InvoiceSumAggregateInputType
    _min?: InvoiceMinAggregateInputType
    _max?: InvoiceMaxAggregateInputType
  }

  export type InvoiceGroupByOutputType = {
    id: string
    workspaceId: string
    emitterId: string
    type: $Enums.InvoiceType
    status: $Enums.InvoiceStatus
    idempotencyKey: string
    requestHash: string
    originType: string | null
    originId: string | null
    operation: $Enums.Operation
    purpose: number
    requestPayload: JsonValue
    resolvedItems: JsonValue
    totalValue: Decimal
    number: number | null
    series: number | null
    accessKey: string | null
    protocol: string | null
    environment: $Enums.Environment
    providerRef: string | null
    s3XmlKey: string | null
    s3PdfKey: string | null
    rejectionCode: string | null
    rejectionMessage: string | null
    referencedKey: string | null
    authorizedAt: Date | null
    processingAt: Date | null
    lastCheckedAt: Date | null
    checkCount: number
    createdAt: Date
    updatedAt: Date
    _count: InvoiceCountAggregateOutputType | null
    _avg: InvoiceAvgAggregateOutputType | null
    _sum: InvoiceSumAggregateOutputType | null
    _min: InvoiceMinAggregateOutputType | null
    _max: InvoiceMaxAggregateOutputType | null
  }

  type GetInvoiceGroupByPayload<T extends InvoiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvoiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvoiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvoiceGroupByOutputType[P]>
            : GetScalarType<T[P], InvoiceGroupByOutputType[P]>
        }
      >
    >


  export type InvoiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspaceId?: boolean
    emitterId?: boolean
    type?: boolean
    status?: boolean
    idempotencyKey?: boolean
    requestHash?: boolean
    originType?: boolean
    originId?: boolean
    operation?: boolean
    purpose?: boolean
    requestPayload?: boolean
    resolvedItems?: boolean
    totalValue?: boolean
    number?: boolean
    series?: boolean
    accessKey?: boolean
    protocol?: boolean
    environment?: boolean
    providerRef?: boolean
    s3XmlKey?: boolean
    s3PdfKey?: boolean
    rejectionCode?: boolean
    rejectionMessage?: boolean
    referencedKey?: boolean
    authorizedAt?: boolean
    processingAt?: boolean
    lastCheckedAt?: boolean
    checkCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    emitter?: boolean | EmitterDefaultArgs<ExtArgs>
    events?: boolean | Invoice$eventsArgs<ExtArgs>
    _count?: boolean | InvoiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspaceId?: boolean
    emitterId?: boolean
    type?: boolean
    status?: boolean
    idempotencyKey?: boolean
    requestHash?: boolean
    originType?: boolean
    originId?: boolean
    operation?: boolean
    purpose?: boolean
    requestPayload?: boolean
    resolvedItems?: boolean
    totalValue?: boolean
    number?: boolean
    series?: boolean
    accessKey?: boolean
    protocol?: boolean
    environment?: boolean
    providerRef?: boolean
    s3XmlKey?: boolean
    s3PdfKey?: boolean
    rejectionCode?: boolean
    rejectionMessage?: boolean
    referencedKey?: boolean
    authorizedAt?: boolean
    processingAt?: boolean
    lastCheckedAt?: boolean
    checkCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    emitter?: boolean | EmitterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspaceId?: boolean
    emitterId?: boolean
    type?: boolean
    status?: boolean
    idempotencyKey?: boolean
    requestHash?: boolean
    originType?: boolean
    originId?: boolean
    operation?: boolean
    purpose?: boolean
    requestPayload?: boolean
    resolvedItems?: boolean
    totalValue?: boolean
    number?: boolean
    series?: boolean
    accessKey?: boolean
    protocol?: boolean
    environment?: boolean
    providerRef?: boolean
    s3XmlKey?: boolean
    s3PdfKey?: boolean
    rejectionCode?: boolean
    rejectionMessage?: boolean
    referencedKey?: boolean
    authorizedAt?: boolean
    processingAt?: boolean
    lastCheckedAt?: boolean
    checkCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    emitter?: boolean | EmitterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectScalar = {
    id?: boolean
    workspaceId?: boolean
    emitterId?: boolean
    type?: boolean
    status?: boolean
    idempotencyKey?: boolean
    requestHash?: boolean
    originType?: boolean
    originId?: boolean
    operation?: boolean
    purpose?: boolean
    requestPayload?: boolean
    resolvedItems?: boolean
    totalValue?: boolean
    number?: boolean
    series?: boolean
    accessKey?: boolean
    protocol?: boolean
    environment?: boolean
    providerRef?: boolean
    s3XmlKey?: boolean
    s3PdfKey?: boolean
    rejectionCode?: boolean
    rejectionMessage?: boolean
    referencedKey?: boolean
    authorizedAt?: boolean
    processingAt?: boolean
    lastCheckedAt?: boolean
    checkCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InvoiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workspaceId" | "emitterId" | "type" | "status" | "idempotencyKey" | "requestHash" | "originType" | "originId" | "operation" | "purpose" | "requestPayload" | "resolvedItems" | "totalValue" | "number" | "series" | "accessKey" | "protocol" | "environment" | "providerRef" | "s3XmlKey" | "s3PdfKey" | "rejectionCode" | "rejectionMessage" | "referencedKey" | "authorizedAt" | "processingAt" | "lastCheckedAt" | "checkCount" | "createdAt" | "updatedAt", ExtArgs["result"]["invoice"]>
  export type InvoiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    emitter?: boolean | EmitterDefaultArgs<ExtArgs>
    events?: boolean | Invoice$eventsArgs<ExtArgs>
    _count?: boolean | InvoiceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InvoiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    emitter?: boolean | EmitterDefaultArgs<ExtArgs>
  }
  export type InvoiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    emitter?: boolean | EmitterDefaultArgs<ExtArgs>
  }

  export type $InvoicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Invoice"
    objects: {
      emitter: Prisma.$EmitterPayload<ExtArgs>
      events: Prisma.$InvoiceEventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workspaceId: string
      emitterId: string
      type: $Enums.InvoiceType
      status: $Enums.InvoiceStatus
      idempotencyKey: string
      requestHash: string
      originType: string | null
      originId: string | null
      operation: $Enums.Operation
      purpose: number
      requestPayload: Prisma.JsonValue
      resolvedItems: Prisma.JsonValue
      totalValue: Prisma.Decimal
      number: number | null
      series: number | null
      accessKey: string | null
      protocol: string | null
      environment: $Enums.Environment
      providerRef: string | null
      s3XmlKey: string | null
      s3PdfKey: string | null
      rejectionCode: string | null
      rejectionMessage: string | null
      referencedKey: string | null
      authorizedAt: Date | null
      processingAt: Date | null
      lastCheckedAt: Date | null
      checkCount: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["invoice"]>
    composites: {}
  }

  type InvoiceGetPayload<S extends boolean | null | undefined | InvoiceDefaultArgs> = $Result.GetResult<Prisma.$InvoicePayload, S>

  type InvoiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InvoiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvoiceCountAggregateInputType | true
    }

  export interface InvoiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Invoice'], meta: { name: 'Invoice' } }
    /**
     * Find zero or one Invoice that matches the filter.
     * @param {InvoiceFindUniqueArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvoiceFindUniqueArgs>(args: SelectSubset<T, InvoiceFindUniqueArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Invoice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InvoiceFindUniqueOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvoiceFindUniqueOrThrowArgs>(args: SelectSubset<T, InvoiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invoice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindFirstArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvoiceFindFirstArgs>(args?: SelectSubset<T, InvoiceFindFirstArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invoice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindFirstOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvoiceFindFirstOrThrowArgs>(args?: SelectSubset<T, InvoiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Invoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invoices
     * const invoices = await prisma.invoice.findMany()
     * 
     * // Get first 10 Invoices
     * const invoices = await prisma.invoice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invoiceWithIdOnly = await prisma.invoice.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InvoiceFindManyArgs>(args?: SelectSubset<T, InvoiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Invoice.
     * @param {InvoiceCreateArgs} args - Arguments to create a Invoice.
     * @example
     * // Create one Invoice
     * const Invoice = await prisma.invoice.create({
     *   data: {
     *     // ... data to create a Invoice
     *   }
     * })
     * 
     */
    create<T extends InvoiceCreateArgs>(args: SelectSubset<T, InvoiceCreateArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Invoices.
     * @param {InvoiceCreateManyArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoice = await prisma.invoice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvoiceCreateManyArgs>(args?: SelectSubset<T, InvoiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Invoices and returns the data saved in the database.
     * @param {InvoiceCreateManyAndReturnArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoice = await prisma.invoice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Invoices and only return the `id`
     * const invoiceWithIdOnly = await prisma.invoice.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InvoiceCreateManyAndReturnArgs>(args?: SelectSubset<T, InvoiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Invoice.
     * @param {InvoiceDeleteArgs} args - Arguments to delete one Invoice.
     * @example
     * // Delete one Invoice
     * const Invoice = await prisma.invoice.delete({
     *   where: {
     *     // ... filter to delete one Invoice
     *   }
     * })
     * 
     */
    delete<T extends InvoiceDeleteArgs>(args: SelectSubset<T, InvoiceDeleteArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Invoice.
     * @param {InvoiceUpdateArgs} args - Arguments to update one Invoice.
     * @example
     * // Update one Invoice
     * const invoice = await prisma.invoice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvoiceUpdateArgs>(args: SelectSubset<T, InvoiceUpdateArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Invoices.
     * @param {InvoiceDeleteManyArgs} args - Arguments to filter Invoices to delete.
     * @example
     * // Delete a few Invoices
     * const { count } = await prisma.invoice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvoiceDeleteManyArgs>(args?: SelectSubset<T, InvoiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invoices
     * const invoice = await prisma.invoice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvoiceUpdateManyArgs>(args: SelectSubset<T, InvoiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoices and returns the data updated in the database.
     * @param {InvoiceUpdateManyAndReturnArgs} args - Arguments to update many Invoices.
     * @example
     * // Update many Invoices
     * const invoice = await prisma.invoice.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Invoices and only return the `id`
     * const invoiceWithIdOnly = await prisma.invoice.updateManyAndReturn({
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
    updateManyAndReturn<T extends InvoiceUpdateManyAndReturnArgs>(args: SelectSubset<T, InvoiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Invoice.
     * @param {InvoiceUpsertArgs} args - Arguments to update or create a Invoice.
     * @example
     * // Update or create a Invoice
     * const invoice = await prisma.invoice.upsert({
     *   create: {
     *     // ... data to create a Invoice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invoice we want to update
     *   }
     * })
     */
    upsert<T extends InvoiceUpsertArgs>(args: SelectSubset<T, InvoiceUpsertArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceCountArgs} args - Arguments to filter Invoices to count.
     * @example
     * // Count the number of Invoices
     * const count = await prisma.invoice.count({
     *   where: {
     *     // ... the filter for the Invoices we want to count
     *   }
     * })
    **/
    count<T extends InvoiceCountArgs>(
      args?: Subset<T, InvoiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvoiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InvoiceAggregateArgs>(args: Subset<T, InvoiceAggregateArgs>): Prisma.PrismaPromise<GetInvoiceAggregateType<T>>

    /**
     * Group by Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceGroupByArgs} args - Group by arguments.
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
      T extends InvoiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvoiceGroupByArgs['orderBy'] }
        : { orderBy?: InvoiceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InvoiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Invoice model
   */
  readonly fields: InvoiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Invoice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvoiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    emitter<T extends EmitterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmitterDefaultArgs<ExtArgs>>): Prisma__EmitterClient<$Result.GetResult<Prisma.$EmitterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    events<T extends Invoice$eventsArgs<ExtArgs> = {}>(args?: Subset<T, Invoice$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoiceEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Invoice model
   */
  interface InvoiceFieldRefs {
    readonly id: FieldRef<"Invoice", 'String'>
    readonly workspaceId: FieldRef<"Invoice", 'String'>
    readonly emitterId: FieldRef<"Invoice", 'String'>
    readonly type: FieldRef<"Invoice", 'InvoiceType'>
    readonly status: FieldRef<"Invoice", 'InvoiceStatus'>
    readonly idempotencyKey: FieldRef<"Invoice", 'String'>
    readonly requestHash: FieldRef<"Invoice", 'String'>
    readonly originType: FieldRef<"Invoice", 'String'>
    readonly originId: FieldRef<"Invoice", 'String'>
    readonly operation: FieldRef<"Invoice", 'Operation'>
    readonly purpose: FieldRef<"Invoice", 'Int'>
    readonly requestPayload: FieldRef<"Invoice", 'Json'>
    readonly resolvedItems: FieldRef<"Invoice", 'Json'>
    readonly totalValue: FieldRef<"Invoice", 'Decimal'>
    readonly number: FieldRef<"Invoice", 'Int'>
    readonly series: FieldRef<"Invoice", 'Int'>
    readonly accessKey: FieldRef<"Invoice", 'String'>
    readonly protocol: FieldRef<"Invoice", 'String'>
    readonly environment: FieldRef<"Invoice", 'Environment'>
    readonly providerRef: FieldRef<"Invoice", 'String'>
    readonly s3XmlKey: FieldRef<"Invoice", 'String'>
    readonly s3PdfKey: FieldRef<"Invoice", 'String'>
    readonly rejectionCode: FieldRef<"Invoice", 'String'>
    readonly rejectionMessage: FieldRef<"Invoice", 'String'>
    readonly referencedKey: FieldRef<"Invoice", 'String'>
    readonly authorizedAt: FieldRef<"Invoice", 'DateTime'>
    readonly processingAt: FieldRef<"Invoice", 'DateTime'>
    readonly lastCheckedAt: FieldRef<"Invoice", 'DateTime'>
    readonly checkCount: FieldRef<"Invoice", 'Int'>
    readonly createdAt: FieldRef<"Invoice", 'DateTime'>
    readonly updatedAt: FieldRef<"Invoice", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Invoice findUnique
   */
  export type InvoiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice findUniqueOrThrow
   */
  export type InvoiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice findFirst
   */
  export type InvoiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invoices.
     */
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice findFirstOrThrow
   */
  export type InvoiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invoices.
     */
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice findMany
   */
  export type InvoiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoices to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice create
   */
  export type InvoiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The data needed to create a Invoice.
     */
    data: XOR<InvoiceCreateInput, InvoiceUncheckedCreateInput>
  }

  /**
   * Invoice createMany
   */
  export type InvoiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Invoices.
     */
    data: InvoiceCreateManyInput | InvoiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Invoice createManyAndReturn
   */
  export type InvoiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * The data used to create many Invoices.
     */
    data: InvoiceCreateManyInput | InvoiceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invoice update
   */
  export type InvoiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The data needed to update a Invoice.
     */
    data: XOR<InvoiceUpdateInput, InvoiceUncheckedUpdateInput>
    /**
     * Choose, which Invoice to update.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice updateMany
   */
  export type InvoiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Invoices.
     */
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyInput>
    /**
     * Filter which Invoices to update
     */
    where?: InvoiceWhereInput
    /**
     * Limit how many Invoices to update.
     */
    limit?: number
  }

  /**
   * Invoice updateManyAndReturn
   */
  export type InvoiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * The data used to update Invoices.
     */
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyInput>
    /**
     * Filter which Invoices to update
     */
    where?: InvoiceWhereInput
    /**
     * Limit how many Invoices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invoice upsert
   */
  export type InvoiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The filter to search for the Invoice to update in case it exists.
     */
    where: InvoiceWhereUniqueInput
    /**
     * In case the Invoice found by the `where` argument doesn't exist, create a new Invoice with this data.
     */
    create: XOR<InvoiceCreateInput, InvoiceUncheckedCreateInput>
    /**
     * In case the Invoice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvoiceUpdateInput, InvoiceUncheckedUpdateInput>
  }

  /**
   * Invoice delete
   */
  export type InvoiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter which Invoice to delete.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice deleteMany
   */
  export type InvoiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invoices to delete
     */
    where?: InvoiceWhereInput
    /**
     * Limit how many Invoices to delete.
     */
    limit?: number
  }

  /**
   * Invoice.events
   */
  export type Invoice$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceEvent
     */
    select?: InvoiceEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceEvent
     */
    omit?: InvoiceEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceEventInclude<ExtArgs> | null
    where?: InvoiceEventWhereInput
    orderBy?: InvoiceEventOrderByWithRelationInput | InvoiceEventOrderByWithRelationInput[]
    cursor?: InvoiceEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvoiceEventScalarFieldEnum | InvoiceEventScalarFieldEnum[]
  }

  /**
   * Invoice without action
   */
  export type InvoiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
  }


  /**
   * Model InvoiceEvent
   */

  export type AggregateInvoiceEvent = {
    _count: InvoiceEventCountAggregateOutputType | null
    _min: InvoiceEventMinAggregateOutputType | null
    _max: InvoiceEventMaxAggregateOutputType | null
  }

  export type InvoiceEventMinAggregateOutputType = {
    id: string | null
    invoiceId: string | null
    type: $Enums.InvoiceEventType | null
    occurredAt: Date | null
  }

  export type InvoiceEventMaxAggregateOutputType = {
    id: string | null
    invoiceId: string | null
    type: $Enums.InvoiceEventType | null
    occurredAt: Date | null
  }

  export type InvoiceEventCountAggregateOutputType = {
    id: number
    invoiceId: number
    type: number
    payload: number
    occurredAt: number
    _all: number
  }


  export type InvoiceEventMinAggregateInputType = {
    id?: true
    invoiceId?: true
    type?: true
    occurredAt?: true
  }

  export type InvoiceEventMaxAggregateInputType = {
    id?: true
    invoiceId?: true
    type?: true
    occurredAt?: true
  }

  export type InvoiceEventCountAggregateInputType = {
    id?: true
    invoiceId?: true
    type?: true
    payload?: true
    occurredAt?: true
    _all?: true
  }

  export type InvoiceEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InvoiceEvent to aggregate.
     */
    where?: InvoiceEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvoiceEvents to fetch.
     */
    orderBy?: InvoiceEventOrderByWithRelationInput | InvoiceEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvoiceEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvoiceEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvoiceEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InvoiceEvents
    **/
    _count?: true | InvoiceEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvoiceEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvoiceEventMaxAggregateInputType
  }

  export type GetInvoiceEventAggregateType<T extends InvoiceEventAggregateArgs> = {
        [P in keyof T & keyof AggregateInvoiceEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvoiceEvent[P]>
      : GetScalarType<T[P], AggregateInvoiceEvent[P]>
  }




  export type InvoiceEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceEventWhereInput
    orderBy?: InvoiceEventOrderByWithAggregationInput | InvoiceEventOrderByWithAggregationInput[]
    by: InvoiceEventScalarFieldEnum[] | InvoiceEventScalarFieldEnum
    having?: InvoiceEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvoiceEventCountAggregateInputType | true
    _min?: InvoiceEventMinAggregateInputType
    _max?: InvoiceEventMaxAggregateInputType
  }

  export type InvoiceEventGroupByOutputType = {
    id: string
    invoiceId: string
    type: $Enums.InvoiceEventType
    payload: JsonValue
    occurredAt: Date
    _count: InvoiceEventCountAggregateOutputType | null
    _min: InvoiceEventMinAggregateOutputType | null
    _max: InvoiceEventMaxAggregateOutputType | null
  }

  type GetInvoiceEventGroupByPayload<T extends InvoiceEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvoiceEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvoiceEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvoiceEventGroupByOutputType[P]>
            : GetScalarType<T[P], InvoiceEventGroupByOutputType[P]>
        }
      >
    >


  export type InvoiceEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoiceId?: boolean
    type?: boolean
    payload?: boolean
    occurredAt?: boolean
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoiceEvent"]>

  export type InvoiceEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoiceId?: boolean
    type?: boolean
    payload?: boolean
    occurredAt?: boolean
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoiceEvent"]>

  export type InvoiceEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoiceId?: boolean
    type?: boolean
    payload?: boolean
    occurredAt?: boolean
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoiceEvent"]>

  export type InvoiceEventSelectScalar = {
    id?: boolean
    invoiceId?: boolean
    type?: boolean
    payload?: boolean
    occurredAt?: boolean
  }

  export type InvoiceEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "invoiceId" | "type" | "payload" | "occurredAt", ExtArgs["result"]["invoiceEvent"]>
  export type InvoiceEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
  }
  export type InvoiceEventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
  }
  export type InvoiceEventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
  }

  export type $InvoiceEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InvoiceEvent"
    objects: {
      invoice: Prisma.$InvoicePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      invoiceId: string
      type: $Enums.InvoiceEventType
      payload: Prisma.JsonValue
      occurredAt: Date
    }, ExtArgs["result"]["invoiceEvent"]>
    composites: {}
  }

  type InvoiceEventGetPayload<S extends boolean | null | undefined | InvoiceEventDefaultArgs> = $Result.GetResult<Prisma.$InvoiceEventPayload, S>

  type InvoiceEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InvoiceEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvoiceEventCountAggregateInputType | true
    }

  export interface InvoiceEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InvoiceEvent'], meta: { name: 'InvoiceEvent' } }
    /**
     * Find zero or one InvoiceEvent that matches the filter.
     * @param {InvoiceEventFindUniqueArgs} args - Arguments to find a InvoiceEvent
     * @example
     * // Get one InvoiceEvent
     * const invoiceEvent = await prisma.invoiceEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvoiceEventFindUniqueArgs>(args: SelectSubset<T, InvoiceEventFindUniqueArgs<ExtArgs>>): Prisma__InvoiceEventClient<$Result.GetResult<Prisma.$InvoiceEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InvoiceEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InvoiceEventFindUniqueOrThrowArgs} args - Arguments to find a InvoiceEvent
     * @example
     * // Get one InvoiceEvent
     * const invoiceEvent = await prisma.invoiceEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvoiceEventFindUniqueOrThrowArgs>(args: SelectSubset<T, InvoiceEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvoiceEventClient<$Result.GetResult<Prisma.$InvoiceEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InvoiceEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceEventFindFirstArgs} args - Arguments to find a InvoiceEvent
     * @example
     * // Get one InvoiceEvent
     * const invoiceEvent = await prisma.invoiceEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvoiceEventFindFirstArgs>(args?: SelectSubset<T, InvoiceEventFindFirstArgs<ExtArgs>>): Prisma__InvoiceEventClient<$Result.GetResult<Prisma.$InvoiceEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InvoiceEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceEventFindFirstOrThrowArgs} args - Arguments to find a InvoiceEvent
     * @example
     * // Get one InvoiceEvent
     * const invoiceEvent = await prisma.invoiceEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvoiceEventFindFirstOrThrowArgs>(args?: SelectSubset<T, InvoiceEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvoiceEventClient<$Result.GetResult<Prisma.$InvoiceEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InvoiceEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InvoiceEvents
     * const invoiceEvents = await prisma.invoiceEvent.findMany()
     * 
     * // Get first 10 InvoiceEvents
     * const invoiceEvents = await prisma.invoiceEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invoiceEventWithIdOnly = await prisma.invoiceEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InvoiceEventFindManyArgs>(args?: SelectSubset<T, InvoiceEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoiceEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InvoiceEvent.
     * @param {InvoiceEventCreateArgs} args - Arguments to create a InvoiceEvent.
     * @example
     * // Create one InvoiceEvent
     * const InvoiceEvent = await prisma.invoiceEvent.create({
     *   data: {
     *     // ... data to create a InvoiceEvent
     *   }
     * })
     * 
     */
    create<T extends InvoiceEventCreateArgs>(args: SelectSubset<T, InvoiceEventCreateArgs<ExtArgs>>): Prisma__InvoiceEventClient<$Result.GetResult<Prisma.$InvoiceEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InvoiceEvents.
     * @param {InvoiceEventCreateManyArgs} args - Arguments to create many InvoiceEvents.
     * @example
     * // Create many InvoiceEvents
     * const invoiceEvent = await prisma.invoiceEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvoiceEventCreateManyArgs>(args?: SelectSubset<T, InvoiceEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InvoiceEvents and returns the data saved in the database.
     * @param {InvoiceEventCreateManyAndReturnArgs} args - Arguments to create many InvoiceEvents.
     * @example
     * // Create many InvoiceEvents
     * const invoiceEvent = await prisma.invoiceEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InvoiceEvents and only return the `id`
     * const invoiceEventWithIdOnly = await prisma.invoiceEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InvoiceEventCreateManyAndReturnArgs>(args?: SelectSubset<T, InvoiceEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoiceEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InvoiceEvent.
     * @param {InvoiceEventDeleteArgs} args - Arguments to delete one InvoiceEvent.
     * @example
     * // Delete one InvoiceEvent
     * const InvoiceEvent = await prisma.invoiceEvent.delete({
     *   where: {
     *     // ... filter to delete one InvoiceEvent
     *   }
     * })
     * 
     */
    delete<T extends InvoiceEventDeleteArgs>(args: SelectSubset<T, InvoiceEventDeleteArgs<ExtArgs>>): Prisma__InvoiceEventClient<$Result.GetResult<Prisma.$InvoiceEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InvoiceEvent.
     * @param {InvoiceEventUpdateArgs} args - Arguments to update one InvoiceEvent.
     * @example
     * // Update one InvoiceEvent
     * const invoiceEvent = await prisma.invoiceEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvoiceEventUpdateArgs>(args: SelectSubset<T, InvoiceEventUpdateArgs<ExtArgs>>): Prisma__InvoiceEventClient<$Result.GetResult<Prisma.$InvoiceEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InvoiceEvents.
     * @param {InvoiceEventDeleteManyArgs} args - Arguments to filter InvoiceEvents to delete.
     * @example
     * // Delete a few InvoiceEvents
     * const { count } = await prisma.invoiceEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvoiceEventDeleteManyArgs>(args?: SelectSubset<T, InvoiceEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InvoiceEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InvoiceEvents
     * const invoiceEvent = await prisma.invoiceEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvoiceEventUpdateManyArgs>(args: SelectSubset<T, InvoiceEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InvoiceEvents and returns the data updated in the database.
     * @param {InvoiceEventUpdateManyAndReturnArgs} args - Arguments to update many InvoiceEvents.
     * @example
     * // Update many InvoiceEvents
     * const invoiceEvent = await prisma.invoiceEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InvoiceEvents and only return the `id`
     * const invoiceEventWithIdOnly = await prisma.invoiceEvent.updateManyAndReturn({
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
    updateManyAndReturn<T extends InvoiceEventUpdateManyAndReturnArgs>(args: SelectSubset<T, InvoiceEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoiceEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InvoiceEvent.
     * @param {InvoiceEventUpsertArgs} args - Arguments to update or create a InvoiceEvent.
     * @example
     * // Update or create a InvoiceEvent
     * const invoiceEvent = await prisma.invoiceEvent.upsert({
     *   create: {
     *     // ... data to create a InvoiceEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InvoiceEvent we want to update
     *   }
     * })
     */
    upsert<T extends InvoiceEventUpsertArgs>(args: SelectSubset<T, InvoiceEventUpsertArgs<ExtArgs>>): Prisma__InvoiceEventClient<$Result.GetResult<Prisma.$InvoiceEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InvoiceEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceEventCountArgs} args - Arguments to filter InvoiceEvents to count.
     * @example
     * // Count the number of InvoiceEvents
     * const count = await prisma.invoiceEvent.count({
     *   where: {
     *     // ... the filter for the InvoiceEvents we want to count
     *   }
     * })
    **/
    count<T extends InvoiceEventCountArgs>(
      args?: Subset<T, InvoiceEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvoiceEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InvoiceEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InvoiceEventAggregateArgs>(args: Subset<T, InvoiceEventAggregateArgs>): Prisma.PrismaPromise<GetInvoiceEventAggregateType<T>>

    /**
     * Group by InvoiceEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceEventGroupByArgs} args - Group by arguments.
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
      T extends InvoiceEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvoiceEventGroupByArgs['orderBy'] }
        : { orderBy?: InvoiceEventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InvoiceEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoiceEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InvoiceEvent model
   */
  readonly fields: InvoiceEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InvoiceEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvoiceEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    invoice<T extends InvoiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InvoiceDefaultArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the InvoiceEvent model
   */
  interface InvoiceEventFieldRefs {
    readonly id: FieldRef<"InvoiceEvent", 'String'>
    readonly invoiceId: FieldRef<"InvoiceEvent", 'String'>
    readonly type: FieldRef<"InvoiceEvent", 'InvoiceEventType'>
    readonly payload: FieldRef<"InvoiceEvent", 'Json'>
    readonly occurredAt: FieldRef<"InvoiceEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InvoiceEvent findUnique
   */
  export type InvoiceEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceEvent
     */
    select?: InvoiceEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceEvent
     */
    omit?: InvoiceEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceEventInclude<ExtArgs> | null
    /**
     * Filter, which InvoiceEvent to fetch.
     */
    where: InvoiceEventWhereUniqueInput
  }

  /**
   * InvoiceEvent findUniqueOrThrow
   */
  export type InvoiceEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceEvent
     */
    select?: InvoiceEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceEvent
     */
    omit?: InvoiceEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceEventInclude<ExtArgs> | null
    /**
     * Filter, which InvoiceEvent to fetch.
     */
    where: InvoiceEventWhereUniqueInput
  }

  /**
   * InvoiceEvent findFirst
   */
  export type InvoiceEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceEvent
     */
    select?: InvoiceEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceEvent
     */
    omit?: InvoiceEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceEventInclude<ExtArgs> | null
    /**
     * Filter, which InvoiceEvent to fetch.
     */
    where?: InvoiceEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvoiceEvents to fetch.
     */
    orderBy?: InvoiceEventOrderByWithRelationInput | InvoiceEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InvoiceEvents.
     */
    cursor?: InvoiceEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvoiceEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvoiceEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InvoiceEvents.
     */
    distinct?: InvoiceEventScalarFieldEnum | InvoiceEventScalarFieldEnum[]
  }

  /**
   * InvoiceEvent findFirstOrThrow
   */
  export type InvoiceEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceEvent
     */
    select?: InvoiceEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceEvent
     */
    omit?: InvoiceEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceEventInclude<ExtArgs> | null
    /**
     * Filter, which InvoiceEvent to fetch.
     */
    where?: InvoiceEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvoiceEvents to fetch.
     */
    orderBy?: InvoiceEventOrderByWithRelationInput | InvoiceEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InvoiceEvents.
     */
    cursor?: InvoiceEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvoiceEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvoiceEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InvoiceEvents.
     */
    distinct?: InvoiceEventScalarFieldEnum | InvoiceEventScalarFieldEnum[]
  }

  /**
   * InvoiceEvent findMany
   */
  export type InvoiceEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceEvent
     */
    select?: InvoiceEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceEvent
     */
    omit?: InvoiceEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceEventInclude<ExtArgs> | null
    /**
     * Filter, which InvoiceEvents to fetch.
     */
    where?: InvoiceEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvoiceEvents to fetch.
     */
    orderBy?: InvoiceEventOrderByWithRelationInput | InvoiceEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InvoiceEvents.
     */
    cursor?: InvoiceEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvoiceEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvoiceEvents.
     */
    skip?: number
    distinct?: InvoiceEventScalarFieldEnum | InvoiceEventScalarFieldEnum[]
  }

  /**
   * InvoiceEvent create
   */
  export type InvoiceEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceEvent
     */
    select?: InvoiceEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceEvent
     */
    omit?: InvoiceEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceEventInclude<ExtArgs> | null
    /**
     * The data needed to create a InvoiceEvent.
     */
    data: XOR<InvoiceEventCreateInput, InvoiceEventUncheckedCreateInput>
  }

  /**
   * InvoiceEvent createMany
   */
  export type InvoiceEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InvoiceEvents.
     */
    data: InvoiceEventCreateManyInput | InvoiceEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InvoiceEvent createManyAndReturn
   */
  export type InvoiceEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceEvent
     */
    select?: InvoiceEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceEvent
     */
    omit?: InvoiceEventOmit<ExtArgs> | null
    /**
     * The data used to create many InvoiceEvents.
     */
    data: InvoiceEventCreateManyInput | InvoiceEventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceEventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InvoiceEvent update
   */
  export type InvoiceEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceEvent
     */
    select?: InvoiceEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceEvent
     */
    omit?: InvoiceEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceEventInclude<ExtArgs> | null
    /**
     * The data needed to update a InvoiceEvent.
     */
    data: XOR<InvoiceEventUpdateInput, InvoiceEventUncheckedUpdateInput>
    /**
     * Choose, which InvoiceEvent to update.
     */
    where: InvoiceEventWhereUniqueInput
  }

  /**
   * InvoiceEvent updateMany
   */
  export type InvoiceEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InvoiceEvents.
     */
    data: XOR<InvoiceEventUpdateManyMutationInput, InvoiceEventUncheckedUpdateManyInput>
    /**
     * Filter which InvoiceEvents to update
     */
    where?: InvoiceEventWhereInput
    /**
     * Limit how many InvoiceEvents to update.
     */
    limit?: number
  }

  /**
   * InvoiceEvent updateManyAndReturn
   */
  export type InvoiceEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceEvent
     */
    select?: InvoiceEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceEvent
     */
    omit?: InvoiceEventOmit<ExtArgs> | null
    /**
     * The data used to update InvoiceEvents.
     */
    data: XOR<InvoiceEventUpdateManyMutationInput, InvoiceEventUncheckedUpdateManyInput>
    /**
     * Filter which InvoiceEvents to update
     */
    where?: InvoiceEventWhereInput
    /**
     * Limit how many InvoiceEvents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceEventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * InvoiceEvent upsert
   */
  export type InvoiceEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceEvent
     */
    select?: InvoiceEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceEvent
     */
    omit?: InvoiceEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceEventInclude<ExtArgs> | null
    /**
     * The filter to search for the InvoiceEvent to update in case it exists.
     */
    where: InvoiceEventWhereUniqueInput
    /**
     * In case the InvoiceEvent found by the `where` argument doesn't exist, create a new InvoiceEvent with this data.
     */
    create: XOR<InvoiceEventCreateInput, InvoiceEventUncheckedCreateInput>
    /**
     * In case the InvoiceEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvoiceEventUpdateInput, InvoiceEventUncheckedUpdateInput>
  }

  /**
   * InvoiceEvent delete
   */
  export type InvoiceEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceEvent
     */
    select?: InvoiceEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceEvent
     */
    omit?: InvoiceEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceEventInclude<ExtArgs> | null
    /**
     * Filter which InvoiceEvent to delete.
     */
    where: InvoiceEventWhereUniqueInput
  }

  /**
   * InvoiceEvent deleteMany
   */
  export type InvoiceEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InvoiceEvents to delete
     */
    where?: InvoiceEventWhereInput
    /**
     * Limit how many InvoiceEvents to delete.
     */
    limit?: number
  }

  /**
   * InvoiceEvent without action
   */
  export type InvoiceEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceEvent
     */
    select?: InvoiceEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceEvent
     */
    omit?: InvoiceEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceEventInclude<ExtArgs> | null
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


  export const EmitterScalarFieldEnum: {
    id: 'id',
    workspaceId: 'workspaceId',
    cnpj: 'cnpj',
    legalName: 'legalName',
    tradeName: 'tradeName',
    ie: 'ie',
    im: 'im',
    crt: 'crt',
    uf: 'uf',
    address: 'address',
    environment: 'environment',
    series: 'series',
    credentialRef: 'credentialRef',
    active: 'active',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EmitterScalarFieldEnum = (typeof EmitterScalarFieldEnum)[keyof typeof EmitterScalarFieldEnum]


  export const FiscalProfileScalarFieldEnum: {
    id: 'id',
    workspaceId: 'workspaceId',
    name: 'name',
    description: 'description',
    active: 'active'
  };

  export type FiscalProfileScalarFieldEnum = (typeof FiscalProfileScalarFieldEnum)[keyof typeof FiscalProfileScalarFieldEnum]


  export const FiscalRuleScalarFieldEnum: {
    id: 'id',
    profileId: 'profileId',
    operation: 'operation',
    ufOrigin: 'ufOrigin',
    ufDestination: 'ufDestination',
    cfop: 'cfop',
    taxCode: 'taxCode',
    taxes: 'taxes',
    createdAt: 'createdAt'
  };

  export type FiscalRuleScalarFieldEnum = (typeof FiscalRuleScalarFieldEnum)[keyof typeof FiscalRuleScalarFieldEnum]


  export const InvoiceScalarFieldEnum: {
    id: 'id',
    workspaceId: 'workspaceId',
    emitterId: 'emitterId',
    type: 'type',
    status: 'status',
    idempotencyKey: 'idempotencyKey',
    requestHash: 'requestHash',
    originType: 'originType',
    originId: 'originId',
    operation: 'operation',
    purpose: 'purpose',
    requestPayload: 'requestPayload',
    resolvedItems: 'resolvedItems',
    totalValue: 'totalValue',
    number: 'number',
    series: 'series',
    accessKey: 'accessKey',
    protocol: 'protocol',
    environment: 'environment',
    providerRef: 'providerRef',
    s3XmlKey: 's3XmlKey',
    s3PdfKey: 's3PdfKey',
    rejectionCode: 'rejectionCode',
    rejectionMessage: 'rejectionMessage',
    referencedKey: 'referencedKey',
    authorizedAt: 'authorizedAt',
    processingAt: 'processingAt',
    lastCheckedAt: 'lastCheckedAt',
    checkCount: 'checkCount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InvoiceScalarFieldEnum = (typeof InvoiceScalarFieldEnum)[keyof typeof InvoiceScalarFieldEnum]


  export const InvoiceEventScalarFieldEnum: {
    id: 'id',
    invoiceId: 'invoiceId',
    type: 'type',
    payload: 'payload',
    occurredAt: 'occurredAt'
  };

  export type InvoiceEventScalarFieldEnum = (typeof InvoiceEventScalarFieldEnum)[keyof typeof InvoiceEventScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Environment'
   */
  export type EnumEnvironmentFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Environment'>
    


  /**
   * Reference to a field of type 'Environment[]'
   */
  export type ListEnumEnvironmentFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Environment[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Operation'
   */
  export type EnumOperationFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Operation'>
    


  /**
   * Reference to a field of type 'Operation[]'
   */
  export type ListEnumOperationFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Operation[]'>
    


  /**
   * Reference to a field of type 'InvoiceType'
   */
  export type EnumInvoiceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InvoiceType'>
    


  /**
   * Reference to a field of type 'InvoiceType[]'
   */
  export type ListEnumInvoiceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InvoiceType[]'>
    


  /**
   * Reference to a field of type 'InvoiceStatus'
   */
  export type EnumInvoiceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InvoiceStatus'>
    


  /**
   * Reference to a field of type 'InvoiceStatus[]'
   */
  export type ListEnumInvoiceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InvoiceStatus[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'InvoiceEventType'
   */
  export type EnumInvoiceEventTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InvoiceEventType'>
    


  /**
   * Reference to a field of type 'InvoiceEventType[]'
   */
  export type ListEnumInvoiceEventTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InvoiceEventType[]'>
    


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


  export type EmitterWhereInput = {
    AND?: EmitterWhereInput | EmitterWhereInput[]
    OR?: EmitterWhereInput[]
    NOT?: EmitterWhereInput | EmitterWhereInput[]
    id?: UuidFilter<"Emitter"> | string
    workspaceId?: StringFilter<"Emitter"> | string
    cnpj?: StringFilter<"Emitter"> | string
    legalName?: StringFilter<"Emitter"> | string
    tradeName?: StringNullableFilter<"Emitter"> | string | null
    ie?: StringNullableFilter<"Emitter"> | string | null
    im?: StringNullableFilter<"Emitter"> | string | null
    crt?: IntFilter<"Emitter"> | number
    uf?: StringFilter<"Emitter"> | string
    address?: JsonFilter<"Emitter">
    environment?: EnumEnvironmentFilter<"Emitter"> | $Enums.Environment
    series?: IntFilter<"Emitter"> | number
    credentialRef?: StringFilter<"Emitter"> | string
    active?: BoolFilter<"Emitter"> | boolean
    createdAt?: DateTimeFilter<"Emitter"> | Date | string
    updatedAt?: DateTimeFilter<"Emitter"> | Date | string
    invoices?: InvoiceListRelationFilter
  }

  export type EmitterOrderByWithRelationInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    cnpj?: SortOrder
    legalName?: SortOrder
    tradeName?: SortOrderInput | SortOrder
    ie?: SortOrderInput | SortOrder
    im?: SortOrderInput | SortOrder
    crt?: SortOrder
    uf?: SortOrder
    address?: SortOrder
    environment?: SortOrder
    series?: SortOrder
    credentialRef?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    invoices?: InvoiceOrderByRelationAggregateInput
  }

  export type EmitterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    cnpj_environment?: EmitterCnpjEnvironmentCompoundUniqueInput
    AND?: EmitterWhereInput | EmitterWhereInput[]
    OR?: EmitterWhereInput[]
    NOT?: EmitterWhereInput | EmitterWhereInput[]
    workspaceId?: StringFilter<"Emitter"> | string
    cnpj?: StringFilter<"Emitter"> | string
    legalName?: StringFilter<"Emitter"> | string
    tradeName?: StringNullableFilter<"Emitter"> | string | null
    ie?: StringNullableFilter<"Emitter"> | string | null
    im?: StringNullableFilter<"Emitter"> | string | null
    crt?: IntFilter<"Emitter"> | number
    uf?: StringFilter<"Emitter"> | string
    address?: JsonFilter<"Emitter">
    environment?: EnumEnvironmentFilter<"Emitter"> | $Enums.Environment
    series?: IntFilter<"Emitter"> | number
    credentialRef?: StringFilter<"Emitter"> | string
    active?: BoolFilter<"Emitter"> | boolean
    createdAt?: DateTimeFilter<"Emitter"> | Date | string
    updatedAt?: DateTimeFilter<"Emitter"> | Date | string
    invoices?: InvoiceListRelationFilter
  }, "id" | "cnpj_environment">

  export type EmitterOrderByWithAggregationInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    cnpj?: SortOrder
    legalName?: SortOrder
    tradeName?: SortOrderInput | SortOrder
    ie?: SortOrderInput | SortOrder
    im?: SortOrderInput | SortOrder
    crt?: SortOrder
    uf?: SortOrder
    address?: SortOrder
    environment?: SortOrder
    series?: SortOrder
    credentialRef?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EmitterCountOrderByAggregateInput
    _avg?: EmitterAvgOrderByAggregateInput
    _max?: EmitterMaxOrderByAggregateInput
    _min?: EmitterMinOrderByAggregateInput
    _sum?: EmitterSumOrderByAggregateInput
  }

  export type EmitterScalarWhereWithAggregatesInput = {
    AND?: EmitterScalarWhereWithAggregatesInput | EmitterScalarWhereWithAggregatesInput[]
    OR?: EmitterScalarWhereWithAggregatesInput[]
    NOT?: EmitterScalarWhereWithAggregatesInput | EmitterScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Emitter"> | string
    workspaceId?: StringWithAggregatesFilter<"Emitter"> | string
    cnpj?: StringWithAggregatesFilter<"Emitter"> | string
    legalName?: StringWithAggregatesFilter<"Emitter"> | string
    tradeName?: StringNullableWithAggregatesFilter<"Emitter"> | string | null
    ie?: StringNullableWithAggregatesFilter<"Emitter"> | string | null
    im?: StringNullableWithAggregatesFilter<"Emitter"> | string | null
    crt?: IntWithAggregatesFilter<"Emitter"> | number
    uf?: StringWithAggregatesFilter<"Emitter"> | string
    address?: JsonWithAggregatesFilter<"Emitter">
    environment?: EnumEnvironmentWithAggregatesFilter<"Emitter"> | $Enums.Environment
    series?: IntWithAggregatesFilter<"Emitter"> | number
    credentialRef?: StringWithAggregatesFilter<"Emitter"> | string
    active?: BoolWithAggregatesFilter<"Emitter"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Emitter"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Emitter"> | Date | string
  }

  export type FiscalProfileWhereInput = {
    AND?: FiscalProfileWhereInput | FiscalProfileWhereInput[]
    OR?: FiscalProfileWhereInput[]
    NOT?: FiscalProfileWhereInput | FiscalProfileWhereInput[]
    id?: UuidFilter<"FiscalProfile"> | string
    workspaceId?: StringFilter<"FiscalProfile"> | string
    name?: StringFilter<"FiscalProfile"> | string
    description?: StringNullableFilter<"FiscalProfile"> | string | null
    active?: BoolFilter<"FiscalProfile"> | boolean
    rules?: FiscalRuleListRelationFilter
  }

  export type FiscalProfileOrderByWithRelationInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    active?: SortOrder
    rules?: FiscalRuleOrderByRelationAggregateInput
  }

  export type FiscalProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    workspaceId_name?: FiscalProfileWorkspaceIdNameCompoundUniqueInput
    AND?: FiscalProfileWhereInput | FiscalProfileWhereInput[]
    OR?: FiscalProfileWhereInput[]
    NOT?: FiscalProfileWhereInput | FiscalProfileWhereInput[]
    workspaceId?: StringFilter<"FiscalProfile"> | string
    name?: StringFilter<"FiscalProfile"> | string
    description?: StringNullableFilter<"FiscalProfile"> | string | null
    active?: BoolFilter<"FiscalProfile"> | boolean
    rules?: FiscalRuleListRelationFilter
  }, "id" | "workspaceId_name">

  export type FiscalProfileOrderByWithAggregationInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    active?: SortOrder
    _count?: FiscalProfileCountOrderByAggregateInput
    _max?: FiscalProfileMaxOrderByAggregateInput
    _min?: FiscalProfileMinOrderByAggregateInput
  }

  export type FiscalProfileScalarWhereWithAggregatesInput = {
    AND?: FiscalProfileScalarWhereWithAggregatesInput | FiscalProfileScalarWhereWithAggregatesInput[]
    OR?: FiscalProfileScalarWhereWithAggregatesInput[]
    NOT?: FiscalProfileScalarWhereWithAggregatesInput | FiscalProfileScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"FiscalProfile"> | string
    workspaceId?: StringWithAggregatesFilter<"FiscalProfile"> | string
    name?: StringWithAggregatesFilter<"FiscalProfile"> | string
    description?: StringNullableWithAggregatesFilter<"FiscalProfile"> | string | null
    active?: BoolWithAggregatesFilter<"FiscalProfile"> | boolean
  }

  export type FiscalRuleWhereInput = {
    AND?: FiscalRuleWhereInput | FiscalRuleWhereInput[]
    OR?: FiscalRuleWhereInput[]
    NOT?: FiscalRuleWhereInput | FiscalRuleWhereInput[]
    id?: UuidFilter<"FiscalRule"> | string
    profileId?: UuidFilter<"FiscalRule"> | string
    operation?: EnumOperationFilter<"FiscalRule"> | $Enums.Operation
    ufOrigin?: StringNullableFilter<"FiscalRule"> | string | null
    ufDestination?: StringNullableFilter<"FiscalRule"> | string | null
    cfop?: StringFilter<"FiscalRule"> | string
    taxCode?: StringFilter<"FiscalRule"> | string
    taxes?: JsonNullableFilter<"FiscalRule">
    createdAt?: DateTimeFilter<"FiscalRule"> | Date | string
    profile?: XOR<FiscalProfileScalarRelationFilter, FiscalProfileWhereInput>
  }

  export type FiscalRuleOrderByWithRelationInput = {
    id?: SortOrder
    profileId?: SortOrder
    operation?: SortOrder
    ufOrigin?: SortOrderInput | SortOrder
    ufDestination?: SortOrderInput | SortOrder
    cfop?: SortOrder
    taxCode?: SortOrder
    taxes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    profile?: FiscalProfileOrderByWithRelationInput
  }

  export type FiscalRuleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    profileId_operation_ufOrigin_ufDestination?: FiscalRuleProfileIdOperationUfOriginUfDestinationCompoundUniqueInput
    AND?: FiscalRuleWhereInput | FiscalRuleWhereInput[]
    OR?: FiscalRuleWhereInput[]
    NOT?: FiscalRuleWhereInput | FiscalRuleWhereInput[]
    profileId?: UuidFilter<"FiscalRule"> | string
    operation?: EnumOperationFilter<"FiscalRule"> | $Enums.Operation
    ufOrigin?: StringNullableFilter<"FiscalRule"> | string | null
    ufDestination?: StringNullableFilter<"FiscalRule"> | string | null
    cfop?: StringFilter<"FiscalRule"> | string
    taxCode?: StringFilter<"FiscalRule"> | string
    taxes?: JsonNullableFilter<"FiscalRule">
    createdAt?: DateTimeFilter<"FiscalRule"> | Date | string
    profile?: XOR<FiscalProfileScalarRelationFilter, FiscalProfileWhereInput>
  }, "id" | "profileId_operation_ufOrigin_ufDestination">

  export type FiscalRuleOrderByWithAggregationInput = {
    id?: SortOrder
    profileId?: SortOrder
    operation?: SortOrder
    ufOrigin?: SortOrderInput | SortOrder
    ufDestination?: SortOrderInput | SortOrder
    cfop?: SortOrder
    taxCode?: SortOrder
    taxes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: FiscalRuleCountOrderByAggregateInput
    _max?: FiscalRuleMaxOrderByAggregateInput
    _min?: FiscalRuleMinOrderByAggregateInput
  }

  export type FiscalRuleScalarWhereWithAggregatesInput = {
    AND?: FiscalRuleScalarWhereWithAggregatesInput | FiscalRuleScalarWhereWithAggregatesInput[]
    OR?: FiscalRuleScalarWhereWithAggregatesInput[]
    NOT?: FiscalRuleScalarWhereWithAggregatesInput | FiscalRuleScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"FiscalRule"> | string
    profileId?: UuidWithAggregatesFilter<"FiscalRule"> | string
    operation?: EnumOperationWithAggregatesFilter<"FiscalRule"> | $Enums.Operation
    ufOrigin?: StringNullableWithAggregatesFilter<"FiscalRule"> | string | null
    ufDestination?: StringNullableWithAggregatesFilter<"FiscalRule"> | string | null
    cfop?: StringWithAggregatesFilter<"FiscalRule"> | string
    taxCode?: StringWithAggregatesFilter<"FiscalRule"> | string
    taxes?: JsonNullableWithAggregatesFilter<"FiscalRule">
    createdAt?: DateTimeWithAggregatesFilter<"FiscalRule"> | Date | string
  }

  export type InvoiceWhereInput = {
    AND?: InvoiceWhereInput | InvoiceWhereInput[]
    OR?: InvoiceWhereInput[]
    NOT?: InvoiceWhereInput | InvoiceWhereInput[]
    id?: UuidFilter<"Invoice"> | string
    workspaceId?: StringFilter<"Invoice"> | string
    emitterId?: UuidFilter<"Invoice"> | string
    type?: EnumInvoiceTypeFilter<"Invoice"> | $Enums.InvoiceType
    status?: EnumInvoiceStatusFilter<"Invoice"> | $Enums.InvoiceStatus
    idempotencyKey?: StringFilter<"Invoice"> | string
    requestHash?: StringFilter<"Invoice"> | string
    originType?: StringNullableFilter<"Invoice"> | string | null
    originId?: StringNullableFilter<"Invoice"> | string | null
    operation?: EnumOperationFilter<"Invoice"> | $Enums.Operation
    purpose?: IntFilter<"Invoice"> | number
    requestPayload?: JsonFilter<"Invoice">
    resolvedItems?: JsonFilter<"Invoice">
    totalValue?: DecimalFilter<"Invoice"> | Decimal | DecimalJsLike | number | string
    number?: IntNullableFilter<"Invoice"> | number | null
    series?: IntNullableFilter<"Invoice"> | number | null
    accessKey?: StringNullableFilter<"Invoice"> | string | null
    protocol?: StringNullableFilter<"Invoice"> | string | null
    environment?: EnumEnvironmentFilter<"Invoice"> | $Enums.Environment
    providerRef?: StringNullableFilter<"Invoice"> | string | null
    s3XmlKey?: StringNullableFilter<"Invoice"> | string | null
    s3PdfKey?: StringNullableFilter<"Invoice"> | string | null
    rejectionCode?: StringNullableFilter<"Invoice"> | string | null
    rejectionMessage?: StringNullableFilter<"Invoice"> | string | null
    referencedKey?: StringNullableFilter<"Invoice"> | string | null
    authorizedAt?: DateTimeNullableFilter<"Invoice"> | Date | string | null
    processingAt?: DateTimeNullableFilter<"Invoice"> | Date | string | null
    lastCheckedAt?: DateTimeNullableFilter<"Invoice"> | Date | string | null
    checkCount?: IntFilter<"Invoice"> | number
    createdAt?: DateTimeFilter<"Invoice"> | Date | string
    updatedAt?: DateTimeFilter<"Invoice"> | Date | string
    emitter?: XOR<EmitterScalarRelationFilter, EmitterWhereInput>
    events?: InvoiceEventListRelationFilter
  }

  export type InvoiceOrderByWithRelationInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    emitterId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    idempotencyKey?: SortOrder
    requestHash?: SortOrder
    originType?: SortOrderInput | SortOrder
    originId?: SortOrderInput | SortOrder
    operation?: SortOrder
    purpose?: SortOrder
    requestPayload?: SortOrder
    resolvedItems?: SortOrder
    totalValue?: SortOrder
    number?: SortOrderInput | SortOrder
    series?: SortOrderInput | SortOrder
    accessKey?: SortOrderInput | SortOrder
    protocol?: SortOrderInput | SortOrder
    environment?: SortOrder
    providerRef?: SortOrderInput | SortOrder
    s3XmlKey?: SortOrderInput | SortOrder
    s3PdfKey?: SortOrderInput | SortOrder
    rejectionCode?: SortOrderInput | SortOrder
    rejectionMessage?: SortOrderInput | SortOrder
    referencedKey?: SortOrderInput | SortOrder
    authorizedAt?: SortOrderInput | SortOrder
    processingAt?: SortOrderInput | SortOrder
    lastCheckedAt?: SortOrderInput | SortOrder
    checkCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    emitter?: EmitterOrderByWithRelationInput
    events?: InvoiceEventOrderByRelationAggregateInput
  }

  export type InvoiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    accessKey?: string
    emitterId_idempotencyKey?: InvoiceEmitterIdIdempotencyKeyCompoundUniqueInput
    AND?: InvoiceWhereInput | InvoiceWhereInput[]
    OR?: InvoiceWhereInput[]
    NOT?: InvoiceWhereInput | InvoiceWhereInput[]
    workspaceId?: StringFilter<"Invoice"> | string
    emitterId?: UuidFilter<"Invoice"> | string
    type?: EnumInvoiceTypeFilter<"Invoice"> | $Enums.InvoiceType
    status?: EnumInvoiceStatusFilter<"Invoice"> | $Enums.InvoiceStatus
    idempotencyKey?: StringFilter<"Invoice"> | string
    requestHash?: StringFilter<"Invoice"> | string
    originType?: StringNullableFilter<"Invoice"> | string | null
    originId?: StringNullableFilter<"Invoice"> | string | null
    operation?: EnumOperationFilter<"Invoice"> | $Enums.Operation
    purpose?: IntFilter<"Invoice"> | number
    requestPayload?: JsonFilter<"Invoice">
    resolvedItems?: JsonFilter<"Invoice">
    totalValue?: DecimalFilter<"Invoice"> | Decimal | DecimalJsLike | number | string
    number?: IntNullableFilter<"Invoice"> | number | null
    series?: IntNullableFilter<"Invoice"> | number | null
    protocol?: StringNullableFilter<"Invoice"> | string | null
    environment?: EnumEnvironmentFilter<"Invoice"> | $Enums.Environment
    providerRef?: StringNullableFilter<"Invoice"> | string | null
    s3XmlKey?: StringNullableFilter<"Invoice"> | string | null
    s3PdfKey?: StringNullableFilter<"Invoice"> | string | null
    rejectionCode?: StringNullableFilter<"Invoice"> | string | null
    rejectionMessage?: StringNullableFilter<"Invoice"> | string | null
    referencedKey?: StringNullableFilter<"Invoice"> | string | null
    authorizedAt?: DateTimeNullableFilter<"Invoice"> | Date | string | null
    processingAt?: DateTimeNullableFilter<"Invoice"> | Date | string | null
    lastCheckedAt?: DateTimeNullableFilter<"Invoice"> | Date | string | null
    checkCount?: IntFilter<"Invoice"> | number
    createdAt?: DateTimeFilter<"Invoice"> | Date | string
    updatedAt?: DateTimeFilter<"Invoice"> | Date | string
    emitter?: XOR<EmitterScalarRelationFilter, EmitterWhereInput>
    events?: InvoiceEventListRelationFilter
  }, "id" | "accessKey" | "emitterId_idempotencyKey">

  export type InvoiceOrderByWithAggregationInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    emitterId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    idempotencyKey?: SortOrder
    requestHash?: SortOrder
    originType?: SortOrderInput | SortOrder
    originId?: SortOrderInput | SortOrder
    operation?: SortOrder
    purpose?: SortOrder
    requestPayload?: SortOrder
    resolvedItems?: SortOrder
    totalValue?: SortOrder
    number?: SortOrderInput | SortOrder
    series?: SortOrderInput | SortOrder
    accessKey?: SortOrderInput | SortOrder
    protocol?: SortOrderInput | SortOrder
    environment?: SortOrder
    providerRef?: SortOrderInput | SortOrder
    s3XmlKey?: SortOrderInput | SortOrder
    s3PdfKey?: SortOrderInput | SortOrder
    rejectionCode?: SortOrderInput | SortOrder
    rejectionMessage?: SortOrderInput | SortOrder
    referencedKey?: SortOrderInput | SortOrder
    authorizedAt?: SortOrderInput | SortOrder
    processingAt?: SortOrderInput | SortOrder
    lastCheckedAt?: SortOrderInput | SortOrder
    checkCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InvoiceCountOrderByAggregateInput
    _avg?: InvoiceAvgOrderByAggregateInput
    _max?: InvoiceMaxOrderByAggregateInput
    _min?: InvoiceMinOrderByAggregateInput
    _sum?: InvoiceSumOrderByAggregateInput
  }

  export type InvoiceScalarWhereWithAggregatesInput = {
    AND?: InvoiceScalarWhereWithAggregatesInput | InvoiceScalarWhereWithAggregatesInput[]
    OR?: InvoiceScalarWhereWithAggregatesInput[]
    NOT?: InvoiceScalarWhereWithAggregatesInput | InvoiceScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Invoice"> | string
    workspaceId?: StringWithAggregatesFilter<"Invoice"> | string
    emitterId?: UuidWithAggregatesFilter<"Invoice"> | string
    type?: EnumInvoiceTypeWithAggregatesFilter<"Invoice"> | $Enums.InvoiceType
    status?: EnumInvoiceStatusWithAggregatesFilter<"Invoice"> | $Enums.InvoiceStatus
    idempotencyKey?: StringWithAggregatesFilter<"Invoice"> | string
    requestHash?: StringWithAggregatesFilter<"Invoice"> | string
    originType?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    originId?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    operation?: EnumOperationWithAggregatesFilter<"Invoice"> | $Enums.Operation
    purpose?: IntWithAggregatesFilter<"Invoice"> | number
    requestPayload?: JsonWithAggregatesFilter<"Invoice">
    resolvedItems?: JsonWithAggregatesFilter<"Invoice">
    totalValue?: DecimalWithAggregatesFilter<"Invoice"> | Decimal | DecimalJsLike | number | string
    number?: IntNullableWithAggregatesFilter<"Invoice"> | number | null
    series?: IntNullableWithAggregatesFilter<"Invoice"> | number | null
    accessKey?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    protocol?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    environment?: EnumEnvironmentWithAggregatesFilter<"Invoice"> | $Enums.Environment
    providerRef?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    s3XmlKey?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    s3PdfKey?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    rejectionCode?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    rejectionMessage?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    referencedKey?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    authorizedAt?: DateTimeNullableWithAggregatesFilter<"Invoice"> | Date | string | null
    processingAt?: DateTimeNullableWithAggregatesFilter<"Invoice"> | Date | string | null
    lastCheckedAt?: DateTimeNullableWithAggregatesFilter<"Invoice"> | Date | string | null
    checkCount?: IntWithAggregatesFilter<"Invoice"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Invoice"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Invoice"> | Date | string
  }

  export type InvoiceEventWhereInput = {
    AND?: InvoiceEventWhereInput | InvoiceEventWhereInput[]
    OR?: InvoiceEventWhereInput[]
    NOT?: InvoiceEventWhereInput | InvoiceEventWhereInput[]
    id?: UuidFilter<"InvoiceEvent"> | string
    invoiceId?: UuidFilter<"InvoiceEvent"> | string
    type?: EnumInvoiceEventTypeFilter<"InvoiceEvent"> | $Enums.InvoiceEventType
    payload?: JsonFilter<"InvoiceEvent">
    occurredAt?: DateTimeFilter<"InvoiceEvent"> | Date | string
    invoice?: XOR<InvoiceScalarRelationFilter, InvoiceWhereInput>
  }

  export type InvoiceEventOrderByWithRelationInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    type?: SortOrder
    payload?: SortOrder
    occurredAt?: SortOrder
    invoice?: InvoiceOrderByWithRelationInput
  }

  export type InvoiceEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InvoiceEventWhereInput | InvoiceEventWhereInput[]
    OR?: InvoiceEventWhereInput[]
    NOT?: InvoiceEventWhereInput | InvoiceEventWhereInput[]
    invoiceId?: UuidFilter<"InvoiceEvent"> | string
    type?: EnumInvoiceEventTypeFilter<"InvoiceEvent"> | $Enums.InvoiceEventType
    payload?: JsonFilter<"InvoiceEvent">
    occurredAt?: DateTimeFilter<"InvoiceEvent"> | Date | string
    invoice?: XOR<InvoiceScalarRelationFilter, InvoiceWhereInput>
  }, "id">

  export type InvoiceEventOrderByWithAggregationInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    type?: SortOrder
    payload?: SortOrder
    occurredAt?: SortOrder
    _count?: InvoiceEventCountOrderByAggregateInput
    _max?: InvoiceEventMaxOrderByAggregateInput
    _min?: InvoiceEventMinOrderByAggregateInput
  }

  export type InvoiceEventScalarWhereWithAggregatesInput = {
    AND?: InvoiceEventScalarWhereWithAggregatesInput | InvoiceEventScalarWhereWithAggregatesInput[]
    OR?: InvoiceEventScalarWhereWithAggregatesInput[]
    NOT?: InvoiceEventScalarWhereWithAggregatesInput | InvoiceEventScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"InvoiceEvent"> | string
    invoiceId?: UuidWithAggregatesFilter<"InvoiceEvent"> | string
    type?: EnumInvoiceEventTypeWithAggregatesFilter<"InvoiceEvent"> | $Enums.InvoiceEventType
    payload?: JsonWithAggregatesFilter<"InvoiceEvent">
    occurredAt?: DateTimeWithAggregatesFilter<"InvoiceEvent"> | Date | string
  }

  export type EmitterCreateInput = {
    id?: string
    workspaceId: string
    cnpj: string
    legalName: string
    tradeName?: string | null
    ie?: string | null
    im?: string | null
    crt: number
    uf: string
    address: JsonNullValueInput | InputJsonValue
    environment: $Enums.Environment
    series?: number
    credentialRef: string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    invoices?: InvoiceCreateNestedManyWithoutEmitterInput
  }

  export type EmitterUncheckedCreateInput = {
    id?: string
    workspaceId: string
    cnpj: string
    legalName: string
    tradeName?: string | null
    ie?: string | null
    im?: string | null
    crt: number
    uf: string
    address: JsonNullValueInput | InputJsonValue
    environment: $Enums.Environment
    series?: number
    credentialRef: string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    invoices?: InvoiceUncheckedCreateNestedManyWithoutEmitterInput
  }

  export type EmitterUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    legalName?: StringFieldUpdateOperationsInput | string
    tradeName?: NullableStringFieldUpdateOperationsInput | string | null
    ie?: NullableStringFieldUpdateOperationsInput | string | null
    im?: NullableStringFieldUpdateOperationsInput | string | null
    crt?: IntFieldUpdateOperationsInput | number
    uf?: StringFieldUpdateOperationsInput | string
    address?: JsonNullValueInput | InputJsonValue
    environment?: EnumEnvironmentFieldUpdateOperationsInput | $Enums.Environment
    series?: IntFieldUpdateOperationsInput | number
    credentialRef?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoices?: InvoiceUpdateManyWithoutEmitterNestedInput
  }

  export type EmitterUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    legalName?: StringFieldUpdateOperationsInput | string
    tradeName?: NullableStringFieldUpdateOperationsInput | string | null
    ie?: NullableStringFieldUpdateOperationsInput | string | null
    im?: NullableStringFieldUpdateOperationsInput | string | null
    crt?: IntFieldUpdateOperationsInput | number
    uf?: StringFieldUpdateOperationsInput | string
    address?: JsonNullValueInput | InputJsonValue
    environment?: EnumEnvironmentFieldUpdateOperationsInput | $Enums.Environment
    series?: IntFieldUpdateOperationsInput | number
    credentialRef?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoices?: InvoiceUncheckedUpdateManyWithoutEmitterNestedInput
  }

  export type EmitterCreateManyInput = {
    id?: string
    workspaceId: string
    cnpj: string
    legalName: string
    tradeName?: string | null
    ie?: string | null
    im?: string | null
    crt: number
    uf: string
    address: JsonNullValueInput | InputJsonValue
    environment: $Enums.Environment
    series?: number
    credentialRef: string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmitterUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    legalName?: StringFieldUpdateOperationsInput | string
    tradeName?: NullableStringFieldUpdateOperationsInput | string | null
    ie?: NullableStringFieldUpdateOperationsInput | string | null
    im?: NullableStringFieldUpdateOperationsInput | string | null
    crt?: IntFieldUpdateOperationsInput | number
    uf?: StringFieldUpdateOperationsInput | string
    address?: JsonNullValueInput | InputJsonValue
    environment?: EnumEnvironmentFieldUpdateOperationsInput | $Enums.Environment
    series?: IntFieldUpdateOperationsInput | number
    credentialRef?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmitterUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    legalName?: StringFieldUpdateOperationsInput | string
    tradeName?: NullableStringFieldUpdateOperationsInput | string | null
    ie?: NullableStringFieldUpdateOperationsInput | string | null
    im?: NullableStringFieldUpdateOperationsInput | string | null
    crt?: IntFieldUpdateOperationsInput | number
    uf?: StringFieldUpdateOperationsInput | string
    address?: JsonNullValueInput | InputJsonValue
    environment?: EnumEnvironmentFieldUpdateOperationsInput | $Enums.Environment
    series?: IntFieldUpdateOperationsInput | number
    credentialRef?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FiscalProfileCreateInput = {
    id?: string
    workspaceId: string
    name: string
    description?: string | null
    active?: boolean
    rules?: FiscalRuleCreateNestedManyWithoutProfileInput
  }

  export type FiscalProfileUncheckedCreateInput = {
    id?: string
    workspaceId: string
    name: string
    description?: string | null
    active?: boolean
    rules?: FiscalRuleUncheckedCreateNestedManyWithoutProfileInput
  }

  export type FiscalProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    rules?: FiscalRuleUpdateManyWithoutProfileNestedInput
  }

  export type FiscalProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    rules?: FiscalRuleUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type FiscalProfileCreateManyInput = {
    id?: string
    workspaceId: string
    name: string
    description?: string | null
    active?: boolean
  }

  export type FiscalProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FiscalProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FiscalRuleCreateInput = {
    id?: string
    operation: $Enums.Operation
    ufOrigin?: string | null
    ufDestination?: string | null
    cfop: string
    taxCode: string
    taxes?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    profile: FiscalProfileCreateNestedOneWithoutRulesInput
  }

  export type FiscalRuleUncheckedCreateInput = {
    id?: string
    profileId: string
    operation: $Enums.Operation
    ufOrigin?: string | null
    ufDestination?: string | null
    cfop: string
    taxCode: string
    taxes?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type FiscalRuleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    operation?: EnumOperationFieldUpdateOperationsInput | $Enums.Operation
    ufOrigin?: NullableStringFieldUpdateOperationsInput | string | null
    ufDestination?: NullableStringFieldUpdateOperationsInput | string | null
    cfop?: StringFieldUpdateOperationsInput | string
    taxCode?: StringFieldUpdateOperationsInput | string
    taxes?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: FiscalProfileUpdateOneRequiredWithoutRulesNestedInput
  }

  export type FiscalRuleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    operation?: EnumOperationFieldUpdateOperationsInput | $Enums.Operation
    ufOrigin?: NullableStringFieldUpdateOperationsInput | string | null
    ufDestination?: NullableStringFieldUpdateOperationsInput | string | null
    cfop?: StringFieldUpdateOperationsInput | string
    taxCode?: StringFieldUpdateOperationsInput | string
    taxes?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FiscalRuleCreateManyInput = {
    id?: string
    profileId: string
    operation: $Enums.Operation
    ufOrigin?: string | null
    ufDestination?: string | null
    cfop: string
    taxCode: string
    taxes?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type FiscalRuleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    operation?: EnumOperationFieldUpdateOperationsInput | $Enums.Operation
    ufOrigin?: NullableStringFieldUpdateOperationsInput | string | null
    ufDestination?: NullableStringFieldUpdateOperationsInput | string | null
    cfop?: StringFieldUpdateOperationsInput | string
    taxCode?: StringFieldUpdateOperationsInput | string
    taxes?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FiscalRuleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    operation?: EnumOperationFieldUpdateOperationsInput | $Enums.Operation
    ufOrigin?: NullableStringFieldUpdateOperationsInput | string | null
    ufDestination?: NullableStringFieldUpdateOperationsInput | string | null
    cfop?: StringFieldUpdateOperationsInput | string
    taxCode?: StringFieldUpdateOperationsInput | string
    taxes?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceCreateInput = {
    id?: string
    workspaceId: string
    type?: $Enums.InvoiceType
    status?: $Enums.InvoiceStatus
    idempotencyKey: string
    requestHash: string
    originType?: string | null
    originId?: string | null
    operation: $Enums.Operation
    purpose: number
    requestPayload: JsonNullValueInput | InputJsonValue
    resolvedItems: JsonNullValueInput | InputJsonValue
    totalValue: Decimal | DecimalJsLike | number | string
    number?: number | null
    series?: number | null
    accessKey?: string | null
    protocol?: string | null
    environment: $Enums.Environment
    providerRef?: string | null
    s3XmlKey?: string | null
    s3PdfKey?: string | null
    rejectionCode?: string | null
    rejectionMessage?: string | null
    referencedKey?: string | null
    authorizedAt?: Date | string | null
    processingAt?: Date | string | null
    lastCheckedAt?: Date | string | null
    checkCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    emitter: EmitterCreateNestedOneWithoutInvoicesInput
    events?: InvoiceEventCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceUncheckedCreateInput = {
    id?: string
    workspaceId: string
    emitterId: string
    type?: $Enums.InvoiceType
    status?: $Enums.InvoiceStatus
    idempotencyKey: string
    requestHash: string
    originType?: string | null
    originId?: string | null
    operation: $Enums.Operation
    purpose: number
    requestPayload: JsonNullValueInput | InputJsonValue
    resolvedItems: JsonNullValueInput | InputJsonValue
    totalValue: Decimal | DecimalJsLike | number | string
    number?: number | null
    series?: number | null
    accessKey?: string | null
    protocol?: string | null
    environment: $Enums.Environment
    providerRef?: string | null
    s3XmlKey?: string | null
    s3PdfKey?: string | null
    rejectionCode?: string | null
    rejectionMessage?: string | null
    referencedKey?: string | null
    authorizedAt?: Date | string | null
    processingAt?: Date | string | null
    lastCheckedAt?: Date | string | null
    checkCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: InvoiceEventUncheckedCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    type?: EnumInvoiceTypeFieldUpdateOperationsInput | $Enums.InvoiceType
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    idempotencyKey?: StringFieldUpdateOperationsInput | string
    requestHash?: StringFieldUpdateOperationsInput | string
    originType?: NullableStringFieldUpdateOperationsInput | string | null
    originId?: NullableStringFieldUpdateOperationsInput | string | null
    operation?: EnumOperationFieldUpdateOperationsInput | $Enums.Operation
    purpose?: IntFieldUpdateOperationsInput | number
    requestPayload?: JsonNullValueInput | InputJsonValue
    resolvedItems?: JsonNullValueInput | InputJsonValue
    totalValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    number?: NullableIntFieldUpdateOperationsInput | number | null
    series?: NullableIntFieldUpdateOperationsInput | number | null
    accessKey?: NullableStringFieldUpdateOperationsInput | string | null
    protocol?: NullableStringFieldUpdateOperationsInput | string | null
    environment?: EnumEnvironmentFieldUpdateOperationsInput | $Enums.Environment
    providerRef?: NullableStringFieldUpdateOperationsInput | string | null
    s3XmlKey?: NullableStringFieldUpdateOperationsInput | string | null
    s3PdfKey?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionCode?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionMessage?: NullableStringFieldUpdateOperationsInput | string | null
    referencedKey?: NullableStringFieldUpdateOperationsInput | string | null
    authorizedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processingAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastCheckedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emitter?: EmitterUpdateOneRequiredWithoutInvoicesNestedInput
    events?: InvoiceEventUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    emitterId?: StringFieldUpdateOperationsInput | string
    type?: EnumInvoiceTypeFieldUpdateOperationsInput | $Enums.InvoiceType
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    idempotencyKey?: StringFieldUpdateOperationsInput | string
    requestHash?: StringFieldUpdateOperationsInput | string
    originType?: NullableStringFieldUpdateOperationsInput | string | null
    originId?: NullableStringFieldUpdateOperationsInput | string | null
    operation?: EnumOperationFieldUpdateOperationsInput | $Enums.Operation
    purpose?: IntFieldUpdateOperationsInput | number
    requestPayload?: JsonNullValueInput | InputJsonValue
    resolvedItems?: JsonNullValueInput | InputJsonValue
    totalValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    number?: NullableIntFieldUpdateOperationsInput | number | null
    series?: NullableIntFieldUpdateOperationsInput | number | null
    accessKey?: NullableStringFieldUpdateOperationsInput | string | null
    protocol?: NullableStringFieldUpdateOperationsInput | string | null
    environment?: EnumEnvironmentFieldUpdateOperationsInput | $Enums.Environment
    providerRef?: NullableStringFieldUpdateOperationsInput | string | null
    s3XmlKey?: NullableStringFieldUpdateOperationsInput | string | null
    s3PdfKey?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionCode?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionMessage?: NullableStringFieldUpdateOperationsInput | string | null
    referencedKey?: NullableStringFieldUpdateOperationsInput | string | null
    authorizedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processingAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastCheckedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: InvoiceEventUncheckedUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceCreateManyInput = {
    id?: string
    workspaceId: string
    emitterId: string
    type?: $Enums.InvoiceType
    status?: $Enums.InvoiceStatus
    idempotencyKey: string
    requestHash: string
    originType?: string | null
    originId?: string | null
    operation: $Enums.Operation
    purpose: number
    requestPayload: JsonNullValueInput | InputJsonValue
    resolvedItems: JsonNullValueInput | InputJsonValue
    totalValue: Decimal | DecimalJsLike | number | string
    number?: number | null
    series?: number | null
    accessKey?: string | null
    protocol?: string | null
    environment: $Enums.Environment
    providerRef?: string | null
    s3XmlKey?: string | null
    s3PdfKey?: string | null
    rejectionCode?: string | null
    rejectionMessage?: string | null
    referencedKey?: string | null
    authorizedAt?: Date | string | null
    processingAt?: Date | string | null
    lastCheckedAt?: Date | string | null
    checkCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    type?: EnumInvoiceTypeFieldUpdateOperationsInput | $Enums.InvoiceType
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    idempotencyKey?: StringFieldUpdateOperationsInput | string
    requestHash?: StringFieldUpdateOperationsInput | string
    originType?: NullableStringFieldUpdateOperationsInput | string | null
    originId?: NullableStringFieldUpdateOperationsInput | string | null
    operation?: EnumOperationFieldUpdateOperationsInput | $Enums.Operation
    purpose?: IntFieldUpdateOperationsInput | number
    requestPayload?: JsonNullValueInput | InputJsonValue
    resolvedItems?: JsonNullValueInput | InputJsonValue
    totalValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    number?: NullableIntFieldUpdateOperationsInput | number | null
    series?: NullableIntFieldUpdateOperationsInput | number | null
    accessKey?: NullableStringFieldUpdateOperationsInput | string | null
    protocol?: NullableStringFieldUpdateOperationsInput | string | null
    environment?: EnumEnvironmentFieldUpdateOperationsInput | $Enums.Environment
    providerRef?: NullableStringFieldUpdateOperationsInput | string | null
    s3XmlKey?: NullableStringFieldUpdateOperationsInput | string | null
    s3PdfKey?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionCode?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionMessage?: NullableStringFieldUpdateOperationsInput | string | null
    referencedKey?: NullableStringFieldUpdateOperationsInput | string | null
    authorizedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processingAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastCheckedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    emitterId?: StringFieldUpdateOperationsInput | string
    type?: EnumInvoiceTypeFieldUpdateOperationsInput | $Enums.InvoiceType
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    idempotencyKey?: StringFieldUpdateOperationsInput | string
    requestHash?: StringFieldUpdateOperationsInput | string
    originType?: NullableStringFieldUpdateOperationsInput | string | null
    originId?: NullableStringFieldUpdateOperationsInput | string | null
    operation?: EnumOperationFieldUpdateOperationsInput | $Enums.Operation
    purpose?: IntFieldUpdateOperationsInput | number
    requestPayload?: JsonNullValueInput | InputJsonValue
    resolvedItems?: JsonNullValueInput | InputJsonValue
    totalValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    number?: NullableIntFieldUpdateOperationsInput | number | null
    series?: NullableIntFieldUpdateOperationsInput | number | null
    accessKey?: NullableStringFieldUpdateOperationsInput | string | null
    protocol?: NullableStringFieldUpdateOperationsInput | string | null
    environment?: EnumEnvironmentFieldUpdateOperationsInput | $Enums.Environment
    providerRef?: NullableStringFieldUpdateOperationsInput | string | null
    s3XmlKey?: NullableStringFieldUpdateOperationsInput | string | null
    s3PdfKey?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionCode?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionMessage?: NullableStringFieldUpdateOperationsInput | string | null
    referencedKey?: NullableStringFieldUpdateOperationsInput | string | null
    authorizedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processingAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastCheckedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceEventCreateInput = {
    id?: string
    type: $Enums.InvoiceEventType
    payload: JsonNullValueInput | InputJsonValue
    occurredAt?: Date | string
    invoice: InvoiceCreateNestedOneWithoutEventsInput
  }

  export type InvoiceEventUncheckedCreateInput = {
    id?: string
    invoiceId: string
    type: $Enums.InvoiceEventType
    payload: JsonNullValueInput | InputJsonValue
    occurredAt?: Date | string
  }

  export type InvoiceEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumInvoiceEventTypeFieldUpdateOperationsInput | $Enums.InvoiceEventType
    payload?: JsonNullValueInput | InputJsonValue
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoice?: InvoiceUpdateOneRequiredWithoutEventsNestedInput
  }

  export type InvoiceEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceId?: StringFieldUpdateOperationsInput | string
    type?: EnumInvoiceEventTypeFieldUpdateOperationsInput | $Enums.InvoiceEventType
    payload?: JsonNullValueInput | InputJsonValue
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceEventCreateManyInput = {
    id?: string
    invoiceId: string
    type: $Enums.InvoiceEventType
    payload: JsonNullValueInput | InputJsonValue
    occurredAt?: Date | string
  }

  export type InvoiceEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumInvoiceEventTypeFieldUpdateOperationsInput | $Enums.InvoiceEventType
    payload?: JsonNullValueInput | InputJsonValue
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceId?: StringFieldUpdateOperationsInput | string
    type?: EnumInvoiceEventTypeFieldUpdateOperationsInput | $Enums.InvoiceEventType
    payload?: JsonNullValueInput | InputJsonValue
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
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
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
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

  export type EnumEnvironmentFilter<$PrismaModel = never> = {
    equals?: $Enums.Environment | EnumEnvironmentFieldRefInput<$PrismaModel>
    in?: $Enums.Environment[] | ListEnumEnvironmentFieldRefInput<$PrismaModel>
    notIn?: $Enums.Environment[] | ListEnumEnvironmentFieldRefInput<$PrismaModel>
    not?: NestedEnumEnvironmentFilter<$PrismaModel> | $Enums.Environment
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type InvoiceListRelationFilter = {
    every?: InvoiceWhereInput
    some?: InvoiceWhereInput
    none?: InvoiceWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type InvoiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmitterCnpjEnvironmentCompoundUniqueInput = {
    cnpj: string
    environment: $Enums.Environment
  }

  export type EmitterCountOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    cnpj?: SortOrder
    legalName?: SortOrder
    tradeName?: SortOrder
    ie?: SortOrder
    im?: SortOrder
    crt?: SortOrder
    uf?: SortOrder
    address?: SortOrder
    environment?: SortOrder
    series?: SortOrder
    credentialRef?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmitterAvgOrderByAggregateInput = {
    crt?: SortOrder
    series?: SortOrder
  }

  export type EmitterMaxOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    cnpj?: SortOrder
    legalName?: SortOrder
    tradeName?: SortOrder
    ie?: SortOrder
    im?: SortOrder
    crt?: SortOrder
    uf?: SortOrder
    environment?: SortOrder
    series?: SortOrder
    credentialRef?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmitterMinOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    cnpj?: SortOrder
    legalName?: SortOrder
    tradeName?: SortOrder
    ie?: SortOrder
    im?: SortOrder
    crt?: SortOrder
    uf?: SortOrder
    environment?: SortOrder
    series?: SortOrder
    credentialRef?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmitterSumOrderByAggregateInput = {
    crt?: SortOrder
    series?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
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
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type EnumEnvironmentWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Environment | EnumEnvironmentFieldRefInput<$PrismaModel>
    in?: $Enums.Environment[] | ListEnumEnvironmentFieldRefInput<$PrismaModel>
    notIn?: $Enums.Environment[] | ListEnumEnvironmentFieldRefInput<$PrismaModel>
    not?: NestedEnumEnvironmentWithAggregatesFilter<$PrismaModel> | $Enums.Environment
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEnvironmentFilter<$PrismaModel>
    _max?: NestedEnumEnvironmentFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type FiscalRuleListRelationFilter = {
    every?: FiscalRuleWhereInput
    some?: FiscalRuleWhereInput
    none?: FiscalRuleWhereInput
  }

  export type FiscalRuleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FiscalProfileWorkspaceIdNameCompoundUniqueInput = {
    workspaceId: string
    name: string
  }

  export type FiscalProfileCountOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    active?: SortOrder
  }

  export type FiscalProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    active?: SortOrder
  }

  export type FiscalProfileMinOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    active?: SortOrder
  }

  export type EnumOperationFilter<$PrismaModel = never> = {
    equals?: $Enums.Operation | EnumOperationFieldRefInput<$PrismaModel>
    in?: $Enums.Operation[] | ListEnumOperationFieldRefInput<$PrismaModel>
    notIn?: $Enums.Operation[] | ListEnumOperationFieldRefInput<$PrismaModel>
    not?: NestedEnumOperationFilter<$PrismaModel> | $Enums.Operation
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

  export type FiscalProfileScalarRelationFilter = {
    is?: FiscalProfileWhereInput
    isNot?: FiscalProfileWhereInput
  }

  export type FiscalRuleProfileIdOperationUfOriginUfDestinationCompoundUniqueInput = {
    profileId: string
    operation: $Enums.Operation
    ufOrigin: string
    ufDestination: string
  }

  export type FiscalRuleCountOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
    operation?: SortOrder
    ufOrigin?: SortOrder
    ufDestination?: SortOrder
    cfop?: SortOrder
    taxCode?: SortOrder
    taxes?: SortOrder
    createdAt?: SortOrder
  }

  export type FiscalRuleMaxOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
    operation?: SortOrder
    ufOrigin?: SortOrder
    ufDestination?: SortOrder
    cfop?: SortOrder
    taxCode?: SortOrder
    createdAt?: SortOrder
  }

  export type FiscalRuleMinOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
    operation?: SortOrder
    ufOrigin?: SortOrder
    ufDestination?: SortOrder
    cfop?: SortOrder
    taxCode?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumOperationWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Operation | EnumOperationFieldRefInput<$PrismaModel>
    in?: $Enums.Operation[] | ListEnumOperationFieldRefInput<$PrismaModel>
    notIn?: $Enums.Operation[] | ListEnumOperationFieldRefInput<$PrismaModel>
    not?: NestedEnumOperationWithAggregatesFilter<$PrismaModel> | $Enums.Operation
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOperationFilter<$PrismaModel>
    _max?: NestedEnumOperationFilter<$PrismaModel>
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

  export type EnumInvoiceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.InvoiceType | EnumInvoiceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InvoiceType[] | ListEnumInvoiceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvoiceType[] | ListEnumInvoiceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumInvoiceTypeFilter<$PrismaModel> | $Enums.InvoiceType
  }

  export type EnumInvoiceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InvoiceStatus | EnumInvoiceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInvoiceStatusFilter<$PrismaModel> | $Enums.InvoiceStatus
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
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

  export type EmitterScalarRelationFilter = {
    is?: EmitterWhereInput
    isNot?: EmitterWhereInput
  }

  export type InvoiceEventListRelationFilter = {
    every?: InvoiceEventWhereInput
    some?: InvoiceEventWhereInput
    none?: InvoiceEventWhereInput
  }

  export type InvoiceEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InvoiceEmitterIdIdempotencyKeyCompoundUniqueInput = {
    emitterId: string
    idempotencyKey: string
  }

  export type InvoiceCountOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    emitterId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    idempotencyKey?: SortOrder
    requestHash?: SortOrder
    originType?: SortOrder
    originId?: SortOrder
    operation?: SortOrder
    purpose?: SortOrder
    requestPayload?: SortOrder
    resolvedItems?: SortOrder
    totalValue?: SortOrder
    number?: SortOrder
    series?: SortOrder
    accessKey?: SortOrder
    protocol?: SortOrder
    environment?: SortOrder
    providerRef?: SortOrder
    s3XmlKey?: SortOrder
    s3PdfKey?: SortOrder
    rejectionCode?: SortOrder
    rejectionMessage?: SortOrder
    referencedKey?: SortOrder
    authorizedAt?: SortOrder
    processingAt?: SortOrder
    lastCheckedAt?: SortOrder
    checkCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvoiceAvgOrderByAggregateInput = {
    purpose?: SortOrder
    totalValue?: SortOrder
    number?: SortOrder
    series?: SortOrder
    checkCount?: SortOrder
  }

  export type InvoiceMaxOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    emitterId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    idempotencyKey?: SortOrder
    requestHash?: SortOrder
    originType?: SortOrder
    originId?: SortOrder
    operation?: SortOrder
    purpose?: SortOrder
    totalValue?: SortOrder
    number?: SortOrder
    series?: SortOrder
    accessKey?: SortOrder
    protocol?: SortOrder
    environment?: SortOrder
    providerRef?: SortOrder
    s3XmlKey?: SortOrder
    s3PdfKey?: SortOrder
    rejectionCode?: SortOrder
    rejectionMessage?: SortOrder
    referencedKey?: SortOrder
    authorizedAt?: SortOrder
    processingAt?: SortOrder
    lastCheckedAt?: SortOrder
    checkCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvoiceMinOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    emitterId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    idempotencyKey?: SortOrder
    requestHash?: SortOrder
    originType?: SortOrder
    originId?: SortOrder
    operation?: SortOrder
    purpose?: SortOrder
    totalValue?: SortOrder
    number?: SortOrder
    series?: SortOrder
    accessKey?: SortOrder
    protocol?: SortOrder
    environment?: SortOrder
    providerRef?: SortOrder
    s3XmlKey?: SortOrder
    s3PdfKey?: SortOrder
    rejectionCode?: SortOrder
    rejectionMessage?: SortOrder
    referencedKey?: SortOrder
    authorizedAt?: SortOrder
    processingAt?: SortOrder
    lastCheckedAt?: SortOrder
    checkCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvoiceSumOrderByAggregateInput = {
    purpose?: SortOrder
    totalValue?: SortOrder
    number?: SortOrder
    series?: SortOrder
    checkCount?: SortOrder
  }

  export type EnumInvoiceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InvoiceType | EnumInvoiceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InvoiceType[] | ListEnumInvoiceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvoiceType[] | ListEnumInvoiceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumInvoiceTypeWithAggregatesFilter<$PrismaModel> | $Enums.InvoiceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInvoiceTypeFilter<$PrismaModel>
    _max?: NestedEnumInvoiceTypeFilter<$PrismaModel>
  }

  export type EnumInvoiceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InvoiceStatus | EnumInvoiceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInvoiceStatusWithAggregatesFilter<$PrismaModel> | $Enums.InvoiceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInvoiceStatusFilter<$PrismaModel>
    _max?: NestedEnumInvoiceStatusFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
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

  export type EnumInvoiceEventTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.InvoiceEventType | EnumInvoiceEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InvoiceEventType[] | ListEnumInvoiceEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvoiceEventType[] | ListEnumInvoiceEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumInvoiceEventTypeFilter<$PrismaModel> | $Enums.InvoiceEventType
  }

  export type InvoiceScalarRelationFilter = {
    is?: InvoiceWhereInput
    isNot?: InvoiceWhereInput
  }

  export type InvoiceEventCountOrderByAggregateInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    type?: SortOrder
    payload?: SortOrder
    occurredAt?: SortOrder
  }

  export type InvoiceEventMaxOrderByAggregateInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    type?: SortOrder
    occurredAt?: SortOrder
  }

  export type InvoiceEventMinOrderByAggregateInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    type?: SortOrder
    occurredAt?: SortOrder
  }

  export type EnumInvoiceEventTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InvoiceEventType | EnumInvoiceEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InvoiceEventType[] | ListEnumInvoiceEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvoiceEventType[] | ListEnumInvoiceEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumInvoiceEventTypeWithAggregatesFilter<$PrismaModel> | $Enums.InvoiceEventType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInvoiceEventTypeFilter<$PrismaModel>
    _max?: NestedEnumInvoiceEventTypeFilter<$PrismaModel>
  }

  export type InvoiceCreateNestedManyWithoutEmitterInput = {
    create?: XOR<InvoiceCreateWithoutEmitterInput, InvoiceUncheckedCreateWithoutEmitterInput> | InvoiceCreateWithoutEmitterInput[] | InvoiceUncheckedCreateWithoutEmitterInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutEmitterInput | InvoiceCreateOrConnectWithoutEmitterInput[]
    createMany?: InvoiceCreateManyEmitterInputEnvelope
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
  }

  export type InvoiceUncheckedCreateNestedManyWithoutEmitterInput = {
    create?: XOR<InvoiceCreateWithoutEmitterInput, InvoiceUncheckedCreateWithoutEmitterInput> | InvoiceCreateWithoutEmitterInput[] | InvoiceUncheckedCreateWithoutEmitterInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutEmitterInput | InvoiceCreateOrConnectWithoutEmitterInput[]
    createMany?: InvoiceCreateManyEmitterInputEnvelope
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumEnvironmentFieldUpdateOperationsInput = {
    set?: $Enums.Environment
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type InvoiceUpdateManyWithoutEmitterNestedInput = {
    create?: XOR<InvoiceCreateWithoutEmitterInput, InvoiceUncheckedCreateWithoutEmitterInput> | InvoiceCreateWithoutEmitterInput[] | InvoiceUncheckedCreateWithoutEmitterInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutEmitterInput | InvoiceCreateOrConnectWithoutEmitterInput[]
    upsert?: InvoiceUpsertWithWhereUniqueWithoutEmitterInput | InvoiceUpsertWithWhereUniqueWithoutEmitterInput[]
    createMany?: InvoiceCreateManyEmitterInputEnvelope
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    update?: InvoiceUpdateWithWhereUniqueWithoutEmitterInput | InvoiceUpdateWithWhereUniqueWithoutEmitterInput[]
    updateMany?: InvoiceUpdateManyWithWhereWithoutEmitterInput | InvoiceUpdateManyWithWhereWithoutEmitterInput[]
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
  }

  export type InvoiceUncheckedUpdateManyWithoutEmitterNestedInput = {
    create?: XOR<InvoiceCreateWithoutEmitterInput, InvoiceUncheckedCreateWithoutEmitterInput> | InvoiceCreateWithoutEmitterInput[] | InvoiceUncheckedCreateWithoutEmitterInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutEmitterInput | InvoiceCreateOrConnectWithoutEmitterInput[]
    upsert?: InvoiceUpsertWithWhereUniqueWithoutEmitterInput | InvoiceUpsertWithWhereUniqueWithoutEmitterInput[]
    createMany?: InvoiceCreateManyEmitterInputEnvelope
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    update?: InvoiceUpdateWithWhereUniqueWithoutEmitterInput | InvoiceUpdateWithWhereUniqueWithoutEmitterInput[]
    updateMany?: InvoiceUpdateManyWithWhereWithoutEmitterInput | InvoiceUpdateManyWithWhereWithoutEmitterInput[]
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
  }

  export type FiscalRuleCreateNestedManyWithoutProfileInput = {
    create?: XOR<FiscalRuleCreateWithoutProfileInput, FiscalRuleUncheckedCreateWithoutProfileInput> | FiscalRuleCreateWithoutProfileInput[] | FiscalRuleUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: FiscalRuleCreateOrConnectWithoutProfileInput | FiscalRuleCreateOrConnectWithoutProfileInput[]
    createMany?: FiscalRuleCreateManyProfileInputEnvelope
    connect?: FiscalRuleWhereUniqueInput | FiscalRuleWhereUniqueInput[]
  }

  export type FiscalRuleUncheckedCreateNestedManyWithoutProfileInput = {
    create?: XOR<FiscalRuleCreateWithoutProfileInput, FiscalRuleUncheckedCreateWithoutProfileInput> | FiscalRuleCreateWithoutProfileInput[] | FiscalRuleUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: FiscalRuleCreateOrConnectWithoutProfileInput | FiscalRuleCreateOrConnectWithoutProfileInput[]
    createMany?: FiscalRuleCreateManyProfileInputEnvelope
    connect?: FiscalRuleWhereUniqueInput | FiscalRuleWhereUniqueInput[]
  }

  export type FiscalRuleUpdateManyWithoutProfileNestedInput = {
    create?: XOR<FiscalRuleCreateWithoutProfileInput, FiscalRuleUncheckedCreateWithoutProfileInput> | FiscalRuleCreateWithoutProfileInput[] | FiscalRuleUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: FiscalRuleCreateOrConnectWithoutProfileInput | FiscalRuleCreateOrConnectWithoutProfileInput[]
    upsert?: FiscalRuleUpsertWithWhereUniqueWithoutProfileInput | FiscalRuleUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: FiscalRuleCreateManyProfileInputEnvelope
    set?: FiscalRuleWhereUniqueInput | FiscalRuleWhereUniqueInput[]
    disconnect?: FiscalRuleWhereUniqueInput | FiscalRuleWhereUniqueInput[]
    delete?: FiscalRuleWhereUniqueInput | FiscalRuleWhereUniqueInput[]
    connect?: FiscalRuleWhereUniqueInput | FiscalRuleWhereUniqueInput[]
    update?: FiscalRuleUpdateWithWhereUniqueWithoutProfileInput | FiscalRuleUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: FiscalRuleUpdateManyWithWhereWithoutProfileInput | FiscalRuleUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: FiscalRuleScalarWhereInput | FiscalRuleScalarWhereInput[]
  }

  export type FiscalRuleUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: XOR<FiscalRuleCreateWithoutProfileInput, FiscalRuleUncheckedCreateWithoutProfileInput> | FiscalRuleCreateWithoutProfileInput[] | FiscalRuleUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: FiscalRuleCreateOrConnectWithoutProfileInput | FiscalRuleCreateOrConnectWithoutProfileInput[]
    upsert?: FiscalRuleUpsertWithWhereUniqueWithoutProfileInput | FiscalRuleUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: FiscalRuleCreateManyProfileInputEnvelope
    set?: FiscalRuleWhereUniqueInput | FiscalRuleWhereUniqueInput[]
    disconnect?: FiscalRuleWhereUniqueInput | FiscalRuleWhereUniqueInput[]
    delete?: FiscalRuleWhereUniqueInput | FiscalRuleWhereUniqueInput[]
    connect?: FiscalRuleWhereUniqueInput | FiscalRuleWhereUniqueInput[]
    update?: FiscalRuleUpdateWithWhereUniqueWithoutProfileInput | FiscalRuleUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: FiscalRuleUpdateManyWithWhereWithoutProfileInput | FiscalRuleUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: FiscalRuleScalarWhereInput | FiscalRuleScalarWhereInput[]
  }

  export type FiscalProfileCreateNestedOneWithoutRulesInput = {
    create?: XOR<FiscalProfileCreateWithoutRulesInput, FiscalProfileUncheckedCreateWithoutRulesInput>
    connectOrCreate?: FiscalProfileCreateOrConnectWithoutRulesInput
    connect?: FiscalProfileWhereUniqueInput
  }

  export type EnumOperationFieldUpdateOperationsInput = {
    set?: $Enums.Operation
  }

  export type FiscalProfileUpdateOneRequiredWithoutRulesNestedInput = {
    create?: XOR<FiscalProfileCreateWithoutRulesInput, FiscalProfileUncheckedCreateWithoutRulesInput>
    connectOrCreate?: FiscalProfileCreateOrConnectWithoutRulesInput
    upsert?: FiscalProfileUpsertWithoutRulesInput
    connect?: FiscalProfileWhereUniqueInput
    update?: XOR<XOR<FiscalProfileUpdateToOneWithWhereWithoutRulesInput, FiscalProfileUpdateWithoutRulesInput>, FiscalProfileUncheckedUpdateWithoutRulesInput>
  }

  export type EmitterCreateNestedOneWithoutInvoicesInput = {
    create?: XOR<EmitterCreateWithoutInvoicesInput, EmitterUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: EmitterCreateOrConnectWithoutInvoicesInput
    connect?: EmitterWhereUniqueInput
  }

  export type InvoiceEventCreateNestedManyWithoutInvoiceInput = {
    create?: XOR<InvoiceEventCreateWithoutInvoiceInput, InvoiceEventUncheckedCreateWithoutInvoiceInput> | InvoiceEventCreateWithoutInvoiceInput[] | InvoiceEventUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: InvoiceEventCreateOrConnectWithoutInvoiceInput | InvoiceEventCreateOrConnectWithoutInvoiceInput[]
    createMany?: InvoiceEventCreateManyInvoiceInputEnvelope
    connect?: InvoiceEventWhereUniqueInput | InvoiceEventWhereUniqueInput[]
  }

  export type InvoiceEventUncheckedCreateNestedManyWithoutInvoiceInput = {
    create?: XOR<InvoiceEventCreateWithoutInvoiceInput, InvoiceEventUncheckedCreateWithoutInvoiceInput> | InvoiceEventCreateWithoutInvoiceInput[] | InvoiceEventUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: InvoiceEventCreateOrConnectWithoutInvoiceInput | InvoiceEventCreateOrConnectWithoutInvoiceInput[]
    createMany?: InvoiceEventCreateManyInvoiceInputEnvelope
    connect?: InvoiceEventWhereUniqueInput | InvoiceEventWhereUniqueInput[]
  }

  export type EnumInvoiceTypeFieldUpdateOperationsInput = {
    set?: $Enums.InvoiceType
  }

  export type EnumInvoiceStatusFieldUpdateOperationsInput = {
    set?: $Enums.InvoiceStatus
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EmitterUpdateOneRequiredWithoutInvoicesNestedInput = {
    create?: XOR<EmitterCreateWithoutInvoicesInput, EmitterUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: EmitterCreateOrConnectWithoutInvoicesInput
    upsert?: EmitterUpsertWithoutInvoicesInput
    connect?: EmitterWhereUniqueInput
    update?: XOR<XOR<EmitterUpdateToOneWithWhereWithoutInvoicesInput, EmitterUpdateWithoutInvoicesInput>, EmitterUncheckedUpdateWithoutInvoicesInput>
  }

  export type InvoiceEventUpdateManyWithoutInvoiceNestedInput = {
    create?: XOR<InvoiceEventCreateWithoutInvoiceInput, InvoiceEventUncheckedCreateWithoutInvoiceInput> | InvoiceEventCreateWithoutInvoiceInput[] | InvoiceEventUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: InvoiceEventCreateOrConnectWithoutInvoiceInput | InvoiceEventCreateOrConnectWithoutInvoiceInput[]
    upsert?: InvoiceEventUpsertWithWhereUniqueWithoutInvoiceInput | InvoiceEventUpsertWithWhereUniqueWithoutInvoiceInput[]
    createMany?: InvoiceEventCreateManyInvoiceInputEnvelope
    set?: InvoiceEventWhereUniqueInput | InvoiceEventWhereUniqueInput[]
    disconnect?: InvoiceEventWhereUniqueInput | InvoiceEventWhereUniqueInput[]
    delete?: InvoiceEventWhereUniqueInput | InvoiceEventWhereUniqueInput[]
    connect?: InvoiceEventWhereUniqueInput | InvoiceEventWhereUniqueInput[]
    update?: InvoiceEventUpdateWithWhereUniqueWithoutInvoiceInput | InvoiceEventUpdateWithWhereUniqueWithoutInvoiceInput[]
    updateMany?: InvoiceEventUpdateManyWithWhereWithoutInvoiceInput | InvoiceEventUpdateManyWithWhereWithoutInvoiceInput[]
    deleteMany?: InvoiceEventScalarWhereInput | InvoiceEventScalarWhereInput[]
  }

  export type InvoiceEventUncheckedUpdateManyWithoutInvoiceNestedInput = {
    create?: XOR<InvoiceEventCreateWithoutInvoiceInput, InvoiceEventUncheckedCreateWithoutInvoiceInput> | InvoiceEventCreateWithoutInvoiceInput[] | InvoiceEventUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: InvoiceEventCreateOrConnectWithoutInvoiceInput | InvoiceEventCreateOrConnectWithoutInvoiceInput[]
    upsert?: InvoiceEventUpsertWithWhereUniqueWithoutInvoiceInput | InvoiceEventUpsertWithWhereUniqueWithoutInvoiceInput[]
    createMany?: InvoiceEventCreateManyInvoiceInputEnvelope
    set?: InvoiceEventWhereUniqueInput | InvoiceEventWhereUniqueInput[]
    disconnect?: InvoiceEventWhereUniqueInput | InvoiceEventWhereUniqueInput[]
    delete?: InvoiceEventWhereUniqueInput | InvoiceEventWhereUniqueInput[]
    connect?: InvoiceEventWhereUniqueInput | InvoiceEventWhereUniqueInput[]
    update?: InvoiceEventUpdateWithWhereUniqueWithoutInvoiceInput | InvoiceEventUpdateWithWhereUniqueWithoutInvoiceInput[]
    updateMany?: InvoiceEventUpdateManyWithWhereWithoutInvoiceInput | InvoiceEventUpdateManyWithWhereWithoutInvoiceInput[]
    deleteMany?: InvoiceEventScalarWhereInput | InvoiceEventScalarWhereInput[]
  }

  export type InvoiceCreateNestedOneWithoutEventsInput = {
    create?: XOR<InvoiceCreateWithoutEventsInput, InvoiceUncheckedCreateWithoutEventsInput>
    connectOrCreate?: InvoiceCreateOrConnectWithoutEventsInput
    connect?: InvoiceWhereUniqueInput
  }

  export type EnumInvoiceEventTypeFieldUpdateOperationsInput = {
    set?: $Enums.InvoiceEventType
  }

  export type InvoiceUpdateOneRequiredWithoutEventsNestedInput = {
    create?: XOR<InvoiceCreateWithoutEventsInput, InvoiceUncheckedCreateWithoutEventsInput>
    connectOrCreate?: InvoiceCreateOrConnectWithoutEventsInput
    upsert?: InvoiceUpsertWithoutEventsInput
    connect?: InvoiceWhereUniqueInput
    update?: XOR<XOR<InvoiceUpdateToOneWithWhereWithoutEventsInput, InvoiceUpdateWithoutEventsInput>, InvoiceUncheckedUpdateWithoutEventsInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type NestedEnumEnvironmentFilter<$PrismaModel = never> = {
    equals?: $Enums.Environment | EnumEnvironmentFieldRefInput<$PrismaModel>
    in?: $Enums.Environment[] | ListEnumEnvironmentFieldRefInput<$PrismaModel>
    notIn?: $Enums.Environment[] | ListEnumEnvironmentFieldRefInput<$PrismaModel>
    not?: NestedEnumEnvironmentFilter<$PrismaModel> | $Enums.Environment
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
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

  export type NestedEnumEnvironmentWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Environment | EnumEnvironmentFieldRefInput<$PrismaModel>
    in?: $Enums.Environment[] | ListEnumEnvironmentFieldRefInput<$PrismaModel>
    notIn?: $Enums.Environment[] | ListEnumEnvironmentFieldRefInput<$PrismaModel>
    not?: NestedEnumEnvironmentWithAggregatesFilter<$PrismaModel> | $Enums.Environment
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEnvironmentFilter<$PrismaModel>
    _max?: NestedEnumEnvironmentFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumOperationFilter<$PrismaModel = never> = {
    equals?: $Enums.Operation | EnumOperationFieldRefInput<$PrismaModel>
    in?: $Enums.Operation[] | ListEnumOperationFieldRefInput<$PrismaModel>
    notIn?: $Enums.Operation[] | ListEnumOperationFieldRefInput<$PrismaModel>
    not?: NestedEnumOperationFilter<$PrismaModel> | $Enums.Operation
  }

  export type NestedEnumOperationWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Operation | EnumOperationFieldRefInput<$PrismaModel>
    in?: $Enums.Operation[] | ListEnumOperationFieldRefInput<$PrismaModel>
    notIn?: $Enums.Operation[] | ListEnumOperationFieldRefInput<$PrismaModel>
    not?: NestedEnumOperationWithAggregatesFilter<$PrismaModel> | $Enums.Operation
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOperationFilter<$PrismaModel>
    _max?: NestedEnumOperationFilter<$PrismaModel>
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

  export type NestedEnumInvoiceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.InvoiceType | EnumInvoiceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InvoiceType[] | ListEnumInvoiceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvoiceType[] | ListEnumInvoiceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumInvoiceTypeFilter<$PrismaModel> | $Enums.InvoiceType
  }

  export type NestedEnumInvoiceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InvoiceStatus | EnumInvoiceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInvoiceStatusFilter<$PrismaModel> | $Enums.InvoiceStatus
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
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

  export type NestedEnumInvoiceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InvoiceType | EnumInvoiceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InvoiceType[] | ListEnumInvoiceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvoiceType[] | ListEnumInvoiceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumInvoiceTypeWithAggregatesFilter<$PrismaModel> | $Enums.InvoiceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInvoiceTypeFilter<$PrismaModel>
    _max?: NestedEnumInvoiceTypeFilter<$PrismaModel>
  }

  export type NestedEnumInvoiceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InvoiceStatus | EnumInvoiceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInvoiceStatusWithAggregatesFilter<$PrismaModel> | $Enums.InvoiceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInvoiceStatusFilter<$PrismaModel>
    _max?: NestedEnumInvoiceStatusFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
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

  export type NestedEnumInvoiceEventTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.InvoiceEventType | EnumInvoiceEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InvoiceEventType[] | ListEnumInvoiceEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvoiceEventType[] | ListEnumInvoiceEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumInvoiceEventTypeFilter<$PrismaModel> | $Enums.InvoiceEventType
  }

  export type NestedEnumInvoiceEventTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InvoiceEventType | EnumInvoiceEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InvoiceEventType[] | ListEnumInvoiceEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvoiceEventType[] | ListEnumInvoiceEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumInvoiceEventTypeWithAggregatesFilter<$PrismaModel> | $Enums.InvoiceEventType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInvoiceEventTypeFilter<$PrismaModel>
    _max?: NestedEnumInvoiceEventTypeFilter<$PrismaModel>
  }

  export type InvoiceCreateWithoutEmitterInput = {
    id?: string
    workspaceId: string
    type?: $Enums.InvoiceType
    status?: $Enums.InvoiceStatus
    idempotencyKey: string
    requestHash: string
    originType?: string | null
    originId?: string | null
    operation: $Enums.Operation
    purpose: number
    requestPayload: JsonNullValueInput | InputJsonValue
    resolvedItems: JsonNullValueInput | InputJsonValue
    totalValue: Decimal | DecimalJsLike | number | string
    number?: number | null
    series?: number | null
    accessKey?: string | null
    protocol?: string | null
    environment: $Enums.Environment
    providerRef?: string | null
    s3XmlKey?: string | null
    s3PdfKey?: string | null
    rejectionCode?: string | null
    rejectionMessage?: string | null
    referencedKey?: string | null
    authorizedAt?: Date | string | null
    processingAt?: Date | string | null
    lastCheckedAt?: Date | string | null
    checkCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: InvoiceEventCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceUncheckedCreateWithoutEmitterInput = {
    id?: string
    workspaceId: string
    type?: $Enums.InvoiceType
    status?: $Enums.InvoiceStatus
    idempotencyKey: string
    requestHash: string
    originType?: string | null
    originId?: string | null
    operation: $Enums.Operation
    purpose: number
    requestPayload: JsonNullValueInput | InputJsonValue
    resolvedItems: JsonNullValueInput | InputJsonValue
    totalValue: Decimal | DecimalJsLike | number | string
    number?: number | null
    series?: number | null
    accessKey?: string | null
    protocol?: string | null
    environment: $Enums.Environment
    providerRef?: string | null
    s3XmlKey?: string | null
    s3PdfKey?: string | null
    rejectionCode?: string | null
    rejectionMessage?: string | null
    referencedKey?: string | null
    authorizedAt?: Date | string | null
    processingAt?: Date | string | null
    lastCheckedAt?: Date | string | null
    checkCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: InvoiceEventUncheckedCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceCreateOrConnectWithoutEmitterInput = {
    where: InvoiceWhereUniqueInput
    create: XOR<InvoiceCreateWithoutEmitterInput, InvoiceUncheckedCreateWithoutEmitterInput>
  }

  export type InvoiceCreateManyEmitterInputEnvelope = {
    data: InvoiceCreateManyEmitterInput | InvoiceCreateManyEmitterInput[]
    skipDuplicates?: boolean
  }

  export type InvoiceUpsertWithWhereUniqueWithoutEmitterInput = {
    where: InvoiceWhereUniqueInput
    update: XOR<InvoiceUpdateWithoutEmitterInput, InvoiceUncheckedUpdateWithoutEmitterInput>
    create: XOR<InvoiceCreateWithoutEmitterInput, InvoiceUncheckedCreateWithoutEmitterInput>
  }

  export type InvoiceUpdateWithWhereUniqueWithoutEmitterInput = {
    where: InvoiceWhereUniqueInput
    data: XOR<InvoiceUpdateWithoutEmitterInput, InvoiceUncheckedUpdateWithoutEmitterInput>
  }

  export type InvoiceUpdateManyWithWhereWithoutEmitterInput = {
    where: InvoiceScalarWhereInput
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyWithoutEmitterInput>
  }

  export type InvoiceScalarWhereInput = {
    AND?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
    OR?: InvoiceScalarWhereInput[]
    NOT?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
    id?: UuidFilter<"Invoice"> | string
    workspaceId?: StringFilter<"Invoice"> | string
    emitterId?: UuidFilter<"Invoice"> | string
    type?: EnumInvoiceTypeFilter<"Invoice"> | $Enums.InvoiceType
    status?: EnumInvoiceStatusFilter<"Invoice"> | $Enums.InvoiceStatus
    idempotencyKey?: StringFilter<"Invoice"> | string
    requestHash?: StringFilter<"Invoice"> | string
    originType?: StringNullableFilter<"Invoice"> | string | null
    originId?: StringNullableFilter<"Invoice"> | string | null
    operation?: EnumOperationFilter<"Invoice"> | $Enums.Operation
    purpose?: IntFilter<"Invoice"> | number
    requestPayload?: JsonFilter<"Invoice">
    resolvedItems?: JsonFilter<"Invoice">
    totalValue?: DecimalFilter<"Invoice"> | Decimal | DecimalJsLike | number | string
    number?: IntNullableFilter<"Invoice"> | number | null
    series?: IntNullableFilter<"Invoice"> | number | null
    accessKey?: StringNullableFilter<"Invoice"> | string | null
    protocol?: StringNullableFilter<"Invoice"> | string | null
    environment?: EnumEnvironmentFilter<"Invoice"> | $Enums.Environment
    providerRef?: StringNullableFilter<"Invoice"> | string | null
    s3XmlKey?: StringNullableFilter<"Invoice"> | string | null
    s3PdfKey?: StringNullableFilter<"Invoice"> | string | null
    rejectionCode?: StringNullableFilter<"Invoice"> | string | null
    rejectionMessage?: StringNullableFilter<"Invoice"> | string | null
    referencedKey?: StringNullableFilter<"Invoice"> | string | null
    authorizedAt?: DateTimeNullableFilter<"Invoice"> | Date | string | null
    processingAt?: DateTimeNullableFilter<"Invoice"> | Date | string | null
    lastCheckedAt?: DateTimeNullableFilter<"Invoice"> | Date | string | null
    checkCount?: IntFilter<"Invoice"> | number
    createdAt?: DateTimeFilter<"Invoice"> | Date | string
    updatedAt?: DateTimeFilter<"Invoice"> | Date | string
  }

  export type FiscalRuleCreateWithoutProfileInput = {
    id?: string
    operation: $Enums.Operation
    ufOrigin?: string | null
    ufDestination?: string | null
    cfop: string
    taxCode: string
    taxes?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type FiscalRuleUncheckedCreateWithoutProfileInput = {
    id?: string
    operation: $Enums.Operation
    ufOrigin?: string | null
    ufDestination?: string | null
    cfop: string
    taxCode: string
    taxes?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type FiscalRuleCreateOrConnectWithoutProfileInput = {
    where: FiscalRuleWhereUniqueInput
    create: XOR<FiscalRuleCreateWithoutProfileInput, FiscalRuleUncheckedCreateWithoutProfileInput>
  }

  export type FiscalRuleCreateManyProfileInputEnvelope = {
    data: FiscalRuleCreateManyProfileInput | FiscalRuleCreateManyProfileInput[]
    skipDuplicates?: boolean
  }

  export type FiscalRuleUpsertWithWhereUniqueWithoutProfileInput = {
    where: FiscalRuleWhereUniqueInput
    update: XOR<FiscalRuleUpdateWithoutProfileInput, FiscalRuleUncheckedUpdateWithoutProfileInput>
    create: XOR<FiscalRuleCreateWithoutProfileInput, FiscalRuleUncheckedCreateWithoutProfileInput>
  }

  export type FiscalRuleUpdateWithWhereUniqueWithoutProfileInput = {
    where: FiscalRuleWhereUniqueInput
    data: XOR<FiscalRuleUpdateWithoutProfileInput, FiscalRuleUncheckedUpdateWithoutProfileInput>
  }

  export type FiscalRuleUpdateManyWithWhereWithoutProfileInput = {
    where: FiscalRuleScalarWhereInput
    data: XOR<FiscalRuleUpdateManyMutationInput, FiscalRuleUncheckedUpdateManyWithoutProfileInput>
  }

  export type FiscalRuleScalarWhereInput = {
    AND?: FiscalRuleScalarWhereInput | FiscalRuleScalarWhereInput[]
    OR?: FiscalRuleScalarWhereInput[]
    NOT?: FiscalRuleScalarWhereInput | FiscalRuleScalarWhereInput[]
    id?: UuidFilter<"FiscalRule"> | string
    profileId?: UuidFilter<"FiscalRule"> | string
    operation?: EnumOperationFilter<"FiscalRule"> | $Enums.Operation
    ufOrigin?: StringNullableFilter<"FiscalRule"> | string | null
    ufDestination?: StringNullableFilter<"FiscalRule"> | string | null
    cfop?: StringFilter<"FiscalRule"> | string
    taxCode?: StringFilter<"FiscalRule"> | string
    taxes?: JsonNullableFilter<"FiscalRule">
    createdAt?: DateTimeFilter<"FiscalRule"> | Date | string
  }

  export type FiscalProfileCreateWithoutRulesInput = {
    id?: string
    workspaceId: string
    name: string
    description?: string | null
    active?: boolean
  }

  export type FiscalProfileUncheckedCreateWithoutRulesInput = {
    id?: string
    workspaceId: string
    name: string
    description?: string | null
    active?: boolean
  }

  export type FiscalProfileCreateOrConnectWithoutRulesInput = {
    where: FiscalProfileWhereUniqueInput
    create: XOR<FiscalProfileCreateWithoutRulesInput, FiscalProfileUncheckedCreateWithoutRulesInput>
  }

  export type FiscalProfileUpsertWithoutRulesInput = {
    update: XOR<FiscalProfileUpdateWithoutRulesInput, FiscalProfileUncheckedUpdateWithoutRulesInput>
    create: XOR<FiscalProfileCreateWithoutRulesInput, FiscalProfileUncheckedCreateWithoutRulesInput>
    where?: FiscalProfileWhereInput
  }

  export type FiscalProfileUpdateToOneWithWhereWithoutRulesInput = {
    where?: FiscalProfileWhereInput
    data: XOR<FiscalProfileUpdateWithoutRulesInput, FiscalProfileUncheckedUpdateWithoutRulesInput>
  }

  export type FiscalProfileUpdateWithoutRulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FiscalProfileUncheckedUpdateWithoutRulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EmitterCreateWithoutInvoicesInput = {
    id?: string
    workspaceId: string
    cnpj: string
    legalName: string
    tradeName?: string | null
    ie?: string | null
    im?: string | null
    crt: number
    uf: string
    address: JsonNullValueInput | InputJsonValue
    environment: $Enums.Environment
    series?: number
    credentialRef: string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmitterUncheckedCreateWithoutInvoicesInput = {
    id?: string
    workspaceId: string
    cnpj: string
    legalName: string
    tradeName?: string | null
    ie?: string | null
    im?: string | null
    crt: number
    uf: string
    address: JsonNullValueInput | InputJsonValue
    environment: $Enums.Environment
    series?: number
    credentialRef: string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmitterCreateOrConnectWithoutInvoicesInput = {
    where: EmitterWhereUniqueInput
    create: XOR<EmitterCreateWithoutInvoicesInput, EmitterUncheckedCreateWithoutInvoicesInput>
  }

  export type InvoiceEventCreateWithoutInvoiceInput = {
    id?: string
    type: $Enums.InvoiceEventType
    payload: JsonNullValueInput | InputJsonValue
    occurredAt?: Date | string
  }

  export type InvoiceEventUncheckedCreateWithoutInvoiceInput = {
    id?: string
    type: $Enums.InvoiceEventType
    payload: JsonNullValueInput | InputJsonValue
    occurredAt?: Date | string
  }

  export type InvoiceEventCreateOrConnectWithoutInvoiceInput = {
    where: InvoiceEventWhereUniqueInput
    create: XOR<InvoiceEventCreateWithoutInvoiceInput, InvoiceEventUncheckedCreateWithoutInvoiceInput>
  }

  export type InvoiceEventCreateManyInvoiceInputEnvelope = {
    data: InvoiceEventCreateManyInvoiceInput | InvoiceEventCreateManyInvoiceInput[]
    skipDuplicates?: boolean
  }

  export type EmitterUpsertWithoutInvoicesInput = {
    update: XOR<EmitterUpdateWithoutInvoicesInput, EmitterUncheckedUpdateWithoutInvoicesInput>
    create: XOR<EmitterCreateWithoutInvoicesInput, EmitterUncheckedCreateWithoutInvoicesInput>
    where?: EmitterWhereInput
  }

  export type EmitterUpdateToOneWithWhereWithoutInvoicesInput = {
    where?: EmitterWhereInput
    data: XOR<EmitterUpdateWithoutInvoicesInput, EmitterUncheckedUpdateWithoutInvoicesInput>
  }

  export type EmitterUpdateWithoutInvoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    legalName?: StringFieldUpdateOperationsInput | string
    tradeName?: NullableStringFieldUpdateOperationsInput | string | null
    ie?: NullableStringFieldUpdateOperationsInput | string | null
    im?: NullableStringFieldUpdateOperationsInput | string | null
    crt?: IntFieldUpdateOperationsInput | number
    uf?: StringFieldUpdateOperationsInput | string
    address?: JsonNullValueInput | InputJsonValue
    environment?: EnumEnvironmentFieldUpdateOperationsInput | $Enums.Environment
    series?: IntFieldUpdateOperationsInput | number
    credentialRef?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmitterUncheckedUpdateWithoutInvoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    legalName?: StringFieldUpdateOperationsInput | string
    tradeName?: NullableStringFieldUpdateOperationsInput | string | null
    ie?: NullableStringFieldUpdateOperationsInput | string | null
    im?: NullableStringFieldUpdateOperationsInput | string | null
    crt?: IntFieldUpdateOperationsInput | number
    uf?: StringFieldUpdateOperationsInput | string
    address?: JsonNullValueInput | InputJsonValue
    environment?: EnumEnvironmentFieldUpdateOperationsInput | $Enums.Environment
    series?: IntFieldUpdateOperationsInput | number
    credentialRef?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceEventUpsertWithWhereUniqueWithoutInvoiceInput = {
    where: InvoiceEventWhereUniqueInput
    update: XOR<InvoiceEventUpdateWithoutInvoiceInput, InvoiceEventUncheckedUpdateWithoutInvoiceInput>
    create: XOR<InvoiceEventCreateWithoutInvoiceInput, InvoiceEventUncheckedCreateWithoutInvoiceInput>
  }

  export type InvoiceEventUpdateWithWhereUniqueWithoutInvoiceInput = {
    where: InvoiceEventWhereUniqueInput
    data: XOR<InvoiceEventUpdateWithoutInvoiceInput, InvoiceEventUncheckedUpdateWithoutInvoiceInput>
  }

  export type InvoiceEventUpdateManyWithWhereWithoutInvoiceInput = {
    where: InvoiceEventScalarWhereInput
    data: XOR<InvoiceEventUpdateManyMutationInput, InvoiceEventUncheckedUpdateManyWithoutInvoiceInput>
  }

  export type InvoiceEventScalarWhereInput = {
    AND?: InvoiceEventScalarWhereInput | InvoiceEventScalarWhereInput[]
    OR?: InvoiceEventScalarWhereInput[]
    NOT?: InvoiceEventScalarWhereInput | InvoiceEventScalarWhereInput[]
    id?: UuidFilter<"InvoiceEvent"> | string
    invoiceId?: UuidFilter<"InvoiceEvent"> | string
    type?: EnumInvoiceEventTypeFilter<"InvoiceEvent"> | $Enums.InvoiceEventType
    payload?: JsonFilter<"InvoiceEvent">
    occurredAt?: DateTimeFilter<"InvoiceEvent"> | Date | string
  }

  export type InvoiceCreateWithoutEventsInput = {
    id?: string
    workspaceId: string
    type?: $Enums.InvoiceType
    status?: $Enums.InvoiceStatus
    idempotencyKey: string
    requestHash: string
    originType?: string | null
    originId?: string | null
    operation: $Enums.Operation
    purpose: number
    requestPayload: JsonNullValueInput | InputJsonValue
    resolvedItems: JsonNullValueInput | InputJsonValue
    totalValue: Decimal | DecimalJsLike | number | string
    number?: number | null
    series?: number | null
    accessKey?: string | null
    protocol?: string | null
    environment: $Enums.Environment
    providerRef?: string | null
    s3XmlKey?: string | null
    s3PdfKey?: string | null
    rejectionCode?: string | null
    rejectionMessage?: string | null
    referencedKey?: string | null
    authorizedAt?: Date | string | null
    processingAt?: Date | string | null
    lastCheckedAt?: Date | string | null
    checkCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    emitter: EmitterCreateNestedOneWithoutInvoicesInput
  }

  export type InvoiceUncheckedCreateWithoutEventsInput = {
    id?: string
    workspaceId: string
    emitterId: string
    type?: $Enums.InvoiceType
    status?: $Enums.InvoiceStatus
    idempotencyKey: string
    requestHash: string
    originType?: string | null
    originId?: string | null
    operation: $Enums.Operation
    purpose: number
    requestPayload: JsonNullValueInput | InputJsonValue
    resolvedItems: JsonNullValueInput | InputJsonValue
    totalValue: Decimal | DecimalJsLike | number | string
    number?: number | null
    series?: number | null
    accessKey?: string | null
    protocol?: string | null
    environment: $Enums.Environment
    providerRef?: string | null
    s3XmlKey?: string | null
    s3PdfKey?: string | null
    rejectionCode?: string | null
    rejectionMessage?: string | null
    referencedKey?: string | null
    authorizedAt?: Date | string | null
    processingAt?: Date | string | null
    lastCheckedAt?: Date | string | null
    checkCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoiceCreateOrConnectWithoutEventsInput = {
    where: InvoiceWhereUniqueInput
    create: XOR<InvoiceCreateWithoutEventsInput, InvoiceUncheckedCreateWithoutEventsInput>
  }

  export type InvoiceUpsertWithoutEventsInput = {
    update: XOR<InvoiceUpdateWithoutEventsInput, InvoiceUncheckedUpdateWithoutEventsInput>
    create: XOR<InvoiceCreateWithoutEventsInput, InvoiceUncheckedCreateWithoutEventsInput>
    where?: InvoiceWhereInput
  }

  export type InvoiceUpdateToOneWithWhereWithoutEventsInput = {
    where?: InvoiceWhereInput
    data: XOR<InvoiceUpdateWithoutEventsInput, InvoiceUncheckedUpdateWithoutEventsInput>
  }

  export type InvoiceUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    type?: EnumInvoiceTypeFieldUpdateOperationsInput | $Enums.InvoiceType
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    idempotencyKey?: StringFieldUpdateOperationsInput | string
    requestHash?: StringFieldUpdateOperationsInput | string
    originType?: NullableStringFieldUpdateOperationsInput | string | null
    originId?: NullableStringFieldUpdateOperationsInput | string | null
    operation?: EnumOperationFieldUpdateOperationsInput | $Enums.Operation
    purpose?: IntFieldUpdateOperationsInput | number
    requestPayload?: JsonNullValueInput | InputJsonValue
    resolvedItems?: JsonNullValueInput | InputJsonValue
    totalValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    number?: NullableIntFieldUpdateOperationsInput | number | null
    series?: NullableIntFieldUpdateOperationsInput | number | null
    accessKey?: NullableStringFieldUpdateOperationsInput | string | null
    protocol?: NullableStringFieldUpdateOperationsInput | string | null
    environment?: EnumEnvironmentFieldUpdateOperationsInput | $Enums.Environment
    providerRef?: NullableStringFieldUpdateOperationsInput | string | null
    s3XmlKey?: NullableStringFieldUpdateOperationsInput | string | null
    s3PdfKey?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionCode?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionMessage?: NullableStringFieldUpdateOperationsInput | string | null
    referencedKey?: NullableStringFieldUpdateOperationsInput | string | null
    authorizedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processingAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastCheckedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emitter?: EmitterUpdateOneRequiredWithoutInvoicesNestedInput
  }

  export type InvoiceUncheckedUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    emitterId?: StringFieldUpdateOperationsInput | string
    type?: EnumInvoiceTypeFieldUpdateOperationsInput | $Enums.InvoiceType
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    idempotencyKey?: StringFieldUpdateOperationsInput | string
    requestHash?: StringFieldUpdateOperationsInput | string
    originType?: NullableStringFieldUpdateOperationsInput | string | null
    originId?: NullableStringFieldUpdateOperationsInput | string | null
    operation?: EnumOperationFieldUpdateOperationsInput | $Enums.Operation
    purpose?: IntFieldUpdateOperationsInput | number
    requestPayload?: JsonNullValueInput | InputJsonValue
    resolvedItems?: JsonNullValueInput | InputJsonValue
    totalValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    number?: NullableIntFieldUpdateOperationsInput | number | null
    series?: NullableIntFieldUpdateOperationsInput | number | null
    accessKey?: NullableStringFieldUpdateOperationsInput | string | null
    protocol?: NullableStringFieldUpdateOperationsInput | string | null
    environment?: EnumEnvironmentFieldUpdateOperationsInput | $Enums.Environment
    providerRef?: NullableStringFieldUpdateOperationsInput | string | null
    s3XmlKey?: NullableStringFieldUpdateOperationsInput | string | null
    s3PdfKey?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionCode?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionMessage?: NullableStringFieldUpdateOperationsInput | string | null
    referencedKey?: NullableStringFieldUpdateOperationsInput | string | null
    authorizedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processingAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastCheckedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceCreateManyEmitterInput = {
    id?: string
    workspaceId: string
    type?: $Enums.InvoiceType
    status?: $Enums.InvoiceStatus
    idempotencyKey: string
    requestHash: string
    originType?: string | null
    originId?: string | null
    operation: $Enums.Operation
    purpose: number
    requestPayload: JsonNullValueInput | InputJsonValue
    resolvedItems: JsonNullValueInput | InputJsonValue
    totalValue: Decimal | DecimalJsLike | number | string
    number?: number | null
    series?: number | null
    accessKey?: string | null
    protocol?: string | null
    environment: $Enums.Environment
    providerRef?: string | null
    s3XmlKey?: string | null
    s3PdfKey?: string | null
    rejectionCode?: string | null
    rejectionMessage?: string | null
    referencedKey?: string | null
    authorizedAt?: Date | string | null
    processingAt?: Date | string | null
    lastCheckedAt?: Date | string | null
    checkCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoiceUpdateWithoutEmitterInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    type?: EnumInvoiceTypeFieldUpdateOperationsInput | $Enums.InvoiceType
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    idempotencyKey?: StringFieldUpdateOperationsInput | string
    requestHash?: StringFieldUpdateOperationsInput | string
    originType?: NullableStringFieldUpdateOperationsInput | string | null
    originId?: NullableStringFieldUpdateOperationsInput | string | null
    operation?: EnumOperationFieldUpdateOperationsInput | $Enums.Operation
    purpose?: IntFieldUpdateOperationsInput | number
    requestPayload?: JsonNullValueInput | InputJsonValue
    resolvedItems?: JsonNullValueInput | InputJsonValue
    totalValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    number?: NullableIntFieldUpdateOperationsInput | number | null
    series?: NullableIntFieldUpdateOperationsInput | number | null
    accessKey?: NullableStringFieldUpdateOperationsInput | string | null
    protocol?: NullableStringFieldUpdateOperationsInput | string | null
    environment?: EnumEnvironmentFieldUpdateOperationsInput | $Enums.Environment
    providerRef?: NullableStringFieldUpdateOperationsInput | string | null
    s3XmlKey?: NullableStringFieldUpdateOperationsInput | string | null
    s3PdfKey?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionCode?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionMessage?: NullableStringFieldUpdateOperationsInput | string | null
    referencedKey?: NullableStringFieldUpdateOperationsInput | string | null
    authorizedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processingAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastCheckedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: InvoiceEventUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateWithoutEmitterInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    type?: EnumInvoiceTypeFieldUpdateOperationsInput | $Enums.InvoiceType
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    idempotencyKey?: StringFieldUpdateOperationsInput | string
    requestHash?: StringFieldUpdateOperationsInput | string
    originType?: NullableStringFieldUpdateOperationsInput | string | null
    originId?: NullableStringFieldUpdateOperationsInput | string | null
    operation?: EnumOperationFieldUpdateOperationsInput | $Enums.Operation
    purpose?: IntFieldUpdateOperationsInput | number
    requestPayload?: JsonNullValueInput | InputJsonValue
    resolvedItems?: JsonNullValueInput | InputJsonValue
    totalValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    number?: NullableIntFieldUpdateOperationsInput | number | null
    series?: NullableIntFieldUpdateOperationsInput | number | null
    accessKey?: NullableStringFieldUpdateOperationsInput | string | null
    protocol?: NullableStringFieldUpdateOperationsInput | string | null
    environment?: EnumEnvironmentFieldUpdateOperationsInput | $Enums.Environment
    providerRef?: NullableStringFieldUpdateOperationsInput | string | null
    s3XmlKey?: NullableStringFieldUpdateOperationsInput | string | null
    s3PdfKey?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionCode?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionMessage?: NullableStringFieldUpdateOperationsInput | string | null
    referencedKey?: NullableStringFieldUpdateOperationsInput | string | null
    authorizedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processingAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastCheckedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: InvoiceEventUncheckedUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateManyWithoutEmitterInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    type?: EnumInvoiceTypeFieldUpdateOperationsInput | $Enums.InvoiceType
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    idempotencyKey?: StringFieldUpdateOperationsInput | string
    requestHash?: StringFieldUpdateOperationsInput | string
    originType?: NullableStringFieldUpdateOperationsInput | string | null
    originId?: NullableStringFieldUpdateOperationsInput | string | null
    operation?: EnumOperationFieldUpdateOperationsInput | $Enums.Operation
    purpose?: IntFieldUpdateOperationsInput | number
    requestPayload?: JsonNullValueInput | InputJsonValue
    resolvedItems?: JsonNullValueInput | InputJsonValue
    totalValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    number?: NullableIntFieldUpdateOperationsInput | number | null
    series?: NullableIntFieldUpdateOperationsInput | number | null
    accessKey?: NullableStringFieldUpdateOperationsInput | string | null
    protocol?: NullableStringFieldUpdateOperationsInput | string | null
    environment?: EnumEnvironmentFieldUpdateOperationsInput | $Enums.Environment
    providerRef?: NullableStringFieldUpdateOperationsInput | string | null
    s3XmlKey?: NullableStringFieldUpdateOperationsInput | string | null
    s3PdfKey?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionCode?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionMessage?: NullableStringFieldUpdateOperationsInput | string | null
    referencedKey?: NullableStringFieldUpdateOperationsInput | string | null
    authorizedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processingAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastCheckedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FiscalRuleCreateManyProfileInput = {
    id?: string
    operation: $Enums.Operation
    ufOrigin?: string | null
    ufDestination?: string | null
    cfop: string
    taxCode: string
    taxes?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type FiscalRuleUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    operation?: EnumOperationFieldUpdateOperationsInput | $Enums.Operation
    ufOrigin?: NullableStringFieldUpdateOperationsInput | string | null
    ufDestination?: NullableStringFieldUpdateOperationsInput | string | null
    cfop?: StringFieldUpdateOperationsInput | string
    taxCode?: StringFieldUpdateOperationsInput | string
    taxes?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FiscalRuleUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    operation?: EnumOperationFieldUpdateOperationsInput | $Enums.Operation
    ufOrigin?: NullableStringFieldUpdateOperationsInput | string | null
    ufDestination?: NullableStringFieldUpdateOperationsInput | string | null
    cfop?: StringFieldUpdateOperationsInput | string
    taxCode?: StringFieldUpdateOperationsInput | string
    taxes?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FiscalRuleUncheckedUpdateManyWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    operation?: EnumOperationFieldUpdateOperationsInput | $Enums.Operation
    ufOrigin?: NullableStringFieldUpdateOperationsInput | string | null
    ufDestination?: NullableStringFieldUpdateOperationsInput | string | null
    cfop?: StringFieldUpdateOperationsInput | string
    taxCode?: StringFieldUpdateOperationsInput | string
    taxes?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceEventCreateManyInvoiceInput = {
    id?: string
    type: $Enums.InvoiceEventType
    payload: JsonNullValueInput | InputJsonValue
    occurredAt?: Date | string
  }

  export type InvoiceEventUpdateWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumInvoiceEventTypeFieldUpdateOperationsInput | $Enums.InvoiceEventType
    payload?: JsonNullValueInput | InputJsonValue
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceEventUncheckedUpdateWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumInvoiceEventTypeFieldUpdateOperationsInput | $Enums.InvoiceEventType
    payload?: JsonNullValueInput | InputJsonValue
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceEventUncheckedUpdateManyWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumInvoiceEventTypeFieldUpdateOperationsInput | $Enums.InvoiceEventType
    payload?: JsonNullValueInput | InputJsonValue
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
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