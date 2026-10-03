
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
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model FinancialEntry
 * 
 */
export type FinancialEntry = $Result.DefaultSelection<Prisma.$FinancialEntryPayload>
/**
 * Model NotaFiscalRef
 * 
 */
export type NotaFiscalRef = $Result.DefaultSelection<Prisma.$NotaFiscalRefPayload>
/**
 * Model FinancialEntryNota
 * 
 */
export type FinancialEntryNota = $Result.DefaultSelection<Prisma.$FinancialEntryNotaPayload>
/**
 * Model FiscalEventInbox
 * 
 */
export type FiscalEventInbox = $Result.DefaultSelection<Prisma.$FiscalEventInboxPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const EntryKind: {
  INCOME: 'INCOME',
  EXPENSE: 'EXPENSE'
};

export type EntryKind = (typeof EntryKind)[keyof typeof EntryKind]


export const EntryStatus: {
  OPEN: 'OPEN',
  PAID: 'PAID'
};

export type EntryStatus = (typeof EntryStatus)[keyof typeof EntryStatus]

}

export type EntryKind = $Enums.EntryKind

export const EntryKind: typeof $Enums.EntryKind

export type EntryStatus = $Enums.EntryStatus

export const EntryStatus: typeof $Enums.EntryStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Products
 * const products = await prisma.product.findMany()
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
   * // Fetch zero or more Products
   * const products = await prisma.product.findMany()
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
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.financialEntry`: Exposes CRUD operations for the **FinancialEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FinancialEntries
    * const financialEntries = await prisma.financialEntry.findMany()
    * ```
    */
  get financialEntry(): Prisma.FinancialEntryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notaFiscalRef`: Exposes CRUD operations for the **NotaFiscalRef** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NotaFiscalRefs
    * const notaFiscalRefs = await prisma.notaFiscalRef.findMany()
    * ```
    */
  get notaFiscalRef(): Prisma.NotaFiscalRefDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.financialEntryNota`: Exposes CRUD operations for the **FinancialEntryNota** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FinancialEntryNotas
    * const financialEntryNotas = await prisma.financialEntryNota.findMany()
    * ```
    */
  get financialEntryNota(): Prisma.FinancialEntryNotaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fiscalEventInbox`: Exposes CRUD operations for the **FiscalEventInbox** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FiscalEventInboxes
    * const fiscalEventInboxes = await prisma.fiscalEventInbox.findMany()
    * ```
    */
  get fiscalEventInbox(): Prisma.FiscalEventInboxDelegate<ExtArgs, ClientOptions>;
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
    Product: 'Product',
    FinancialEntry: 'FinancialEntry',
    NotaFiscalRef: 'NotaFiscalRef',
    FinancialEntryNota: 'FinancialEntryNota',
    FiscalEventInbox: 'FiscalEventInbox'
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
      modelProps: "product" | "financialEntry" | "notaFiscalRef" | "financialEntryNota" | "fiscalEventInbox"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      FinancialEntry: {
        payload: Prisma.$FinancialEntryPayload<ExtArgs>
        fields: Prisma.FinancialEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FinancialEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FinancialEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialEntryPayload>
          }
          findFirst: {
            args: Prisma.FinancialEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FinancialEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialEntryPayload>
          }
          findMany: {
            args: Prisma.FinancialEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialEntryPayload>[]
          }
          create: {
            args: Prisma.FinancialEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialEntryPayload>
          }
          createMany: {
            args: Prisma.FinancialEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FinancialEntryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialEntryPayload>[]
          }
          delete: {
            args: Prisma.FinancialEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialEntryPayload>
          }
          update: {
            args: Prisma.FinancialEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialEntryPayload>
          }
          deleteMany: {
            args: Prisma.FinancialEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FinancialEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FinancialEntryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialEntryPayload>[]
          }
          upsert: {
            args: Prisma.FinancialEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialEntryPayload>
          }
          aggregate: {
            args: Prisma.FinancialEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFinancialEntry>
          }
          groupBy: {
            args: Prisma.FinancialEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<FinancialEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.FinancialEntryCountArgs<ExtArgs>
            result: $Utils.Optional<FinancialEntryCountAggregateOutputType> | number
          }
        }
      }
      NotaFiscalRef: {
        payload: Prisma.$NotaFiscalRefPayload<ExtArgs>
        fields: Prisma.NotaFiscalRefFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotaFiscalRefFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotaFiscalRefPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotaFiscalRefFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotaFiscalRefPayload>
          }
          findFirst: {
            args: Prisma.NotaFiscalRefFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotaFiscalRefPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotaFiscalRefFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotaFiscalRefPayload>
          }
          findMany: {
            args: Prisma.NotaFiscalRefFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotaFiscalRefPayload>[]
          }
          create: {
            args: Prisma.NotaFiscalRefCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotaFiscalRefPayload>
          }
          createMany: {
            args: Prisma.NotaFiscalRefCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotaFiscalRefCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotaFiscalRefPayload>[]
          }
          delete: {
            args: Prisma.NotaFiscalRefDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotaFiscalRefPayload>
          }
          update: {
            args: Prisma.NotaFiscalRefUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotaFiscalRefPayload>
          }
          deleteMany: {
            args: Prisma.NotaFiscalRefDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotaFiscalRefUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotaFiscalRefUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotaFiscalRefPayload>[]
          }
          upsert: {
            args: Prisma.NotaFiscalRefUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotaFiscalRefPayload>
          }
          aggregate: {
            args: Prisma.NotaFiscalRefAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotaFiscalRef>
          }
          groupBy: {
            args: Prisma.NotaFiscalRefGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotaFiscalRefGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotaFiscalRefCountArgs<ExtArgs>
            result: $Utils.Optional<NotaFiscalRefCountAggregateOutputType> | number
          }
        }
      }
      FinancialEntryNota: {
        payload: Prisma.$FinancialEntryNotaPayload<ExtArgs>
        fields: Prisma.FinancialEntryNotaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FinancialEntryNotaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialEntryNotaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FinancialEntryNotaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialEntryNotaPayload>
          }
          findFirst: {
            args: Prisma.FinancialEntryNotaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialEntryNotaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FinancialEntryNotaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialEntryNotaPayload>
          }
          findMany: {
            args: Prisma.FinancialEntryNotaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialEntryNotaPayload>[]
          }
          create: {
            args: Prisma.FinancialEntryNotaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialEntryNotaPayload>
          }
          createMany: {
            args: Prisma.FinancialEntryNotaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FinancialEntryNotaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialEntryNotaPayload>[]
          }
          delete: {
            args: Prisma.FinancialEntryNotaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialEntryNotaPayload>
          }
          update: {
            args: Prisma.FinancialEntryNotaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialEntryNotaPayload>
          }
          deleteMany: {
            args: Prisma.FinancialEntryNotaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FinancialEntryNotaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FinancialEntryNotaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialEntryNotaPayload>[]
          }
          upsert: {
            args: Prisma.FinancialEntryNotaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialEntryNotaPayload>
          }
          aggregate: {
            args: Prisma.FinancialEntryNotaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFinancialEntryNota>
          }
          groupBy: {
            args: Prisma.FinancialEntryNotaGroupByArgs<ExtArgs>
            result: $Utils.Optional<FinancialEntryNotaGroupByOutputType>[]
          }
          count: {
            args: Prisma.FinancialEntryNotaCountArgs<ExtArgs>
            result: $Utils.Optional<FinancialEntryNotaCountAggregateOutputType> | number
          }
        }
      }
      FiscalEventInbox: {
        payload: Prisma.$FiscalEventInboxPayload<ExtArgs>
        fields: Prisma.FiscalEventInboxFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FiscalEventInboxFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FiscalEventInboxPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FiscalEventInboxFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FiscalEventInboxPayload>
          }
          findFirst: {
            args: Prisma.FiscalEventInboxFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FiscalEventInboxPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FiscalEventInboxFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FiscalEventInboxPayload>
          }
          findMany: {
            args: Prisma.FiscalEventInboxFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FiscalEventInboxPayload>[]
          }
          create: {
            args: Prisma.FiscalEventInboxCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FiscalEventInboxPayload>
          }
          createMany: {
            args: Prisma.FiscalEventInboxCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FiscalEventInboxCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FiscalEventInboxPayload>[]
          }
          delete: {
            args: Prisma.FiscalEventInboxDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FiscalEventInboxPayload>
          }
          update: {
            args: Prisma.FiscalEventInboxUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FiscalEventInboxPayload>
          }
          deleteMany: {
            args: Prisma.FiscalEventInboxDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FiscalEventInboxUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FiscalEventInboxUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FiscalEventInboxPayload>[]
          }
          upsert: {
            args: Prisma.FiscalEventInboxUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FiscalEventInboxPayload>
          }
          aggregate: {
            args: Prisma.FiscalEventInboxAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFiscalEventInbox>
          }
          groupBy: {
            args: Prisma.FiscalEventInboxGroupByArgs<ExtArgs>
            result: $Utils.Optional<FiscalEventInboxGroupByOutputType>[]
          }
          count: {
            args: Prisma.FiscalEventInboxCountArgs<ExtArgs>
            result: $Utils.Optional<FiscalEventInboxCountAggregateOutputType> | number
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
    product?: ProductOmit
    financialEntry?: FinancialEntryOmit
    notaFiscalRef?: NotaFiscalRefOmit
    financialEntryNota?: FinancialEntryNotaOmit
    fiscalEventInbox?: FiscalEventInboxOmit
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
   * Count Type FinancialEntryCountOutputType
   */

  export type FinancialEntryCountOutputType = {
    notas: number
  }

  export type FinancialEntryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notas?: boolean | FinancialEntryCountOutputTypeCountNotasArgs
  }

  // Custom InputTypes
  /**
   * FinancialEntryCountOutputType without action
   */
  export type FinancialEntryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialEntryCountOutputType
     */
    select?: FinancialEntryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FinancialEntryCountOutputType without action
   */
  export type FinancialEntryCountOutputTypeCountNotasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FinancialEntryNotaWhereInput
  }


  /**
   * Count Type NotaFiscalRefCountOutputType
   */

  export type NotaFiscalRefCountOutputType = {
    financialLinks: number
  }

  export type NotaFiscalRefCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    financialLinks?: boolean | NotaFiscalRefCountOutputTypeCountFinancialLinksArgs
  }

  // Custom InputTypes
  /**
   * NotaFiscalRefCountOutputType without action
   */
  export type NotaFiscalRefCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotaFiscalRefCountOutputType
     */
    select?: NotaFiscalRefCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NotaFiscalRefCountOutputType without action
   */
  export type NotaFiscalRefCountOutputTypeCountFinancialLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FinancialEntryNotaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    price: Decimal | null
    origin: number | null
  }

  export type ProductSumAggregateOutputType = {
    price: Decimal | null
    origin: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    workspaceId: string | null
    name: string | null
    unit: string | null
    price: Decimal | null
    ncm: string | null
    cest: string | null
    origin: number | null
    fiscalProfileId: string | null
    createdAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    workspaceId: string | null
    name: string | null
    unit: string | null
    price: Decimal | null
    ncm: string | null
    cest: string | null
    origin: number | null
    fiscalProfileId: string | null
    createdAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    workspaceId: number
    name: number
    unit: number
    price: number
    ncm: number
    cest: number
    origin: number
    fiscalProfileId: number
    createdAt: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    price?: true
    origin?: true
  }

  export type ProductSumAggregateInputType = {
    price?: true
    origin?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    workspaceId?: true
    name?: true
    unit?: true
    price?: true
    ncm?: true
    cest?: true
    origin?: true
    fiscalProfileId?: true
    createdAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    workspaceId?: true
    name?: true
    unit?: true
    price?: true
    ncm?: true
    cest?: true
    origin?: true
    fiscalProfileId?: true
    createdAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    workspaceId?: true
    name?: true
    unit?: true
    price?: true
    ncm?: true
    cest?: true
    origin?: true
    fiscalProfileId?: true
    createdAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: string
    workspaceId: string
    name: string
    unit: string
    price: Decimal
    ncm: string
    cest: string | null
    origin: number
    fiscalProfileId: string | null
    createdAt: Date
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspaceId?: boolean
    name?: boolean
    unit?: boolean
    price?: boolean
    ncm?: boolean
    cest?: boolean
    origin?: boolean
    fiscalProfileId?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspaceId?: boolean
    name?: boolean
    unit?: boolean
    price?: boolean
    ncm?: boolean
    cest?: boolean
    origin?: boolean
    fiscalProfileId?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspaceId?: boolean
    name?: boolean
    unit?: boolean
    price?: boolean
    ncm?: boolean
    cest?: boolean
    origin?: boolean
    fiscalProfileId?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    workspaceId?: boolean
    name?: boolean
    unit?: boolean
    price?: boolean
    ncm?: boolean
    cest?: boolean
    origin?: boolean
    fiscalProfileId?: boolean
    createdAt?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workspaceId" | "name" | "unit" | "price" | "ncm" | "cest" | "origin" | "fiscalProfileId" | "createdAt", ExtArgs["result"]["product"]>

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workspaceId: string
      name: string
      unit: string
      price: Prisma.Decimal
      ncm: string
      cest: string | null
      origin: number
      fiscalProfileId: string | null
      createdAt: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
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
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'String'>
    readonly workspaceId: FieldRef<"Product", 'String'>
    readonly name: FieldRef<"Product", 'String'>
    readonly unit: FieldRef<"Product", 'String'>
    readonly price: FieldRef<"Product", 'Decimal'>
    readonly ncm: FieldRef<"Product", 'String'>
    readonly cest: FieldRef<"Product", 'String'>
    readonly origin: FieldRef<"Product", 'Int'>
    readonly fiscalProfileId: FieldRef<"Product", 'String'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
  }


  /**
   * Model FinancialEntry
   */

  export type AggregateFinancialEntry = {
    _count: FinancialEntryCountAggregateOutputType | null
    _avg: FinancialEntryAvgAggregateOutputType | null
    _sum: FinancialEntrySumAggregateOutputType | null
    _min: FinancialEntryMinAggregateOutputType | null
    _max: FinancialEntryMaxAggregateOutputType | null
  }

  export type FinancialEntryAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type FinancialEntrySumAggregateOutputType = {
    amount: Decimal | null
  }

  export type FinancialEntryMinAggregateOutputType = {
    id: string | null
    workspaceId: string | null
    kind: $Enums.EntryKind | null
    description: string | null
    amount: Decimal | null
    dueDate: Date | null
    status: $Enums.EntryStatus | null
    createdAt: Date | null
  }

  export type FinancialEntryMaxAggregateOutputType = {
    id: string | null
    workspaceId: string | null
    kind: $Enums.EntryKind | null
    description: string | null
    amount: Decimal | null
    dueDate: Date | null
    status: $Enums.EntryStatus | null
    createdAt: Date | null
  }

  export type FinancialEntryCountAggregateOutputType = {
    id: number
    workspaceId: number
    kind: number
    description: number
    amount: number
    dueDate: number
    status: number
    createdAt: number
    _all: number
  }


  export type FinancialEntryAvgAggregateInputType = {
    amount?: true
  }

  export type FinancialEntrySumAggregateInputType = {
    amount?: true
  }

  export type FinancialEntryMinAggregateInputType = {
    id?: true
    workspaceId?: true
    kind?: true
    description?: true
    amount?: true
    dueDate?: true
    status?: true
    createdAt?: true
  }

  export type FinancialEntryMaxAggregateInputType = {
    id?: true
    workspaceId?: true
    kind?: true
    description?: true
    amount?: true
    dueDate?: true
    status?: true
    createdAt?: true
  }

  export type FinancialEntryCountAggregateInputType = {
    id?: true
    workspaceId?: true
    kind?: true
    description?: true
    amount?: true
    dueDate?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type FinancialEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FinancialEntry to aggregate.
     */
    where?: FinancialEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinancialEntries to fetch.
     */
    orderBy?: FinancialEntryOrderByWithRelationInput | FinancialEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FinancialEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinancialEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinancialEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FinancialEntries
    **/
    _count?: true | FinancialEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FinancialEntryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FinancialEntrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FinancialEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FinancialEntryMaxAggregateInputType
  }

  export type GetFinancialEntryAggregateType<T extends FinancialEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateFinancialEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFinancialEntry[P]>
      : GetScalarType<T[P], AggregateFinancialEntry[P]>
  }




  export type FinancialEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FinancialEntryWhereInput
    orderBy?: FinancialEntryOrderByWithAggregationInput | FinancialEntryOrderByWithAggregationInput[]
    by: FinancialEntryScalarFieldEnum[] | FinancialEntryScalarFieldEnum
    having?: FinancialEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FinancialEntryCountAggregateInputType | true
    _avg?: FinancialEntryAvgAggregateInputType
    _sum?: FinancialEntrySumAggregateInputType
    _min?: FinancialEntryMinAggregateInputType
    _max?: FinancialEntryMaxAggregateInputType
  }

  export type FinancialEntryGroupByOutputType = {
    id: string
    workspaceId: string
    kind: $Enums.EntryKind
    description: string
    amount: Decimal
    dueDate: Date
    status: $Enums.EntryStatus
    createdAt: Date
    _count: FinancialEntryCountAggregateOutputType | null
    _avg: FinancialEntryAvgAggregateOutputType | null
    _sum: FinancialEntrySumAggregateOutputType | null
    _min: FinancialEntryMinAggregateOutputType | null
    _max: FinancialEntryMaxAggregateOutputType | null
  }

  type GetFinancialEntryGroupByPayload<T extends FinancialEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FinancialEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FinancialEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FinancialEntryGroupByOutputType[P]>
            : GetScalarType<T[P], FinancialEntryGroupByOutputType[P]>
        }
      >
    >


  export type FinancialEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspaceId?: boolean
    kind?: boolean
    description?: boolean
    amount?: boolean
    dueDate?: boolean
    status?: boolean
    createdAt?: boolean
    notas?: boolean | FinancialEntry$notasArgs<ExtArgs>
    _count?: boolean | FinancialEntryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["financialEntry"]>

  export type FinancialEntrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspaceId?: boolean
    kind?: boolean
    description?: boolean
    amount?: boolean
    dueDate?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["financialEntry"]>

  export type FinancialEntrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspaceId?: boolean
    kind?: boolean
    description?: boolean
    amount?: boolean
    dueDate?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["financialEntry"]>

  export type FinancialEntrySelectScalar = {
    id?: boolean
    workspaceId?: boolean
    kind?: boolean
    description?: boolean
    amount?: boolean
    dueDate?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type FinancialEntryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workspaceId" | "kind" | "description" | "amount" | "dueDate" | "status" | "createdAt", ExtArgs["result"]["financialEntry"]>
  export type FinancialEntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notas?: boolean | FinancialEntry$notasArgs<ExtArgs>
    _count?: boolean | FinancialEntryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FinancialEntryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FinancialEntryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FinancialEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FinancialEntry"
    objects: {
      notas: Prisma.$FinancialEntryNotaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workspaceId: string
      kind: $Enums.EntryKind
      description: string
      amount: Prisma.Decimal
      dueDate: Date
      status: $Enums.EntryStatus
      createdAt: Date
    }, ExtArgs["result"]["financialEntry"]>
    composites: {}
  }

  type FinancialEntryGetPayload<S extends boolean | null | undefined | FinancialEntryDefaultArgs> = $Result.GetResult<Prisma.$FinancialEntryPayload, S>

  type FinancialEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FinancialEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FinancialEntryCountAggregateInputType | true
    }

  export interface FinancialEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FinancialEntry'], meta: { name: 'FinancialEntry' } }
    /**
     * Find zero or one FinancialEntry that matches the filter.
     * @param {FinancialEntryFindUniqueArgs} args - Arguments to find a FinancialEntry
     * @example
     * // Get one FinancialEntry
     * const financialEntry = await prisma.financialEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FinancialEntryFindUniqueArgs>(args: SelectSubset<T, FinancialEntryFindUniqueArgs<ExtArgs>>): Prisma__FinancialEntryClient<$Result.GetResult<Prisma.$FinancialEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FinancialEntry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FinancialEntryFindUniqueOrThrowArgs} args - Arguments to find a FinancialEntry
     * @example
     * // Get one FinancialEntry
     * const financialEntry = await prisma.financialEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FinancialEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, FinancialEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FinancialEntryClient<$Result.GetResult<Prisma.$FinancialEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FinancialEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialEntryFindFirstArgs} args - Arguments to find a FinancialEntry
     * @example
     * // Get one FinancialEntry
     * const financialEntry = await prisma.financialEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FinancialEntryFindFirstArgs>(args?: SelectSubset<T, FinancialEntryFindFirstArgs<ExtArgs>>): Prisma__FinancialEntryClient<$Result.GetResult<Prisma.$FinancialEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FinancialEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialEntryFindFirstOrThrowArgs} args - Arguments to find a FinancialEntry
     * @example
     * // Get one FinancialEntry
     * const financialEntry = await prisma.financialEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FinancialEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, FinancialEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__FinancialEntryClient<$Result.GetResult<Prisma.$FinancialEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FinancialEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FinancialEntries
     * const financialEntries = await prisma.financialEntry.findMany()
     * 
     * // Get first 10 FinancialEntries
     * const financialEntries = await prisma.financialEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const financialEntryWithIdOnly = await prisma.financialEntry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FinancialEntryFindManyArgs>(args?: SelectSubset<T, FinancialEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinancialEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FinancialEntry.
     * @param {FinancialEntryCreateArgs} args - Arguments to create a FinancialEntry.
     * @example
     * // Create one FinancialEntry
     * const FinancialEntry = await prisma.financialEntry.create({
     *   data: {
     *     // ... data to create a FinancialEntry
     *   }
     * })
     * 
     */
    create<T extends FinancialEntryCreateArgs>(args: SelectSubset<T, FinancialEntryCreateArgs<ExtArgs>>): Prisma__FinancialEntryClient<$Result.GetResult<Prisma.$FinancialEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FinancialEntries.
     * @param {FinancialEntryCreateManyArgs} args - Arguments to create many FinancialEntries.
     * @example
     * // Create many FinancialEntries
     * const financialEntry = await prisma.financialEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FinancialEntryCreateManyArgs>(args?: SelectSubset<T, FinancialEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FinancialEntries and returns the data saved in the database.
     * @param {FinancialEntryCreateManyAndReturnArgs} args - Arguments to create many FinancialEntries.
     * @example
     * // Create many FinancialEntries
     * const financialEntry = await prisma.financialEntry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FinancialEntries and only return the `id`
     * const financialEntryWithIdOnly = await prisma.financialEntry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FinancialEntryCreateManyAndReturnArgs>(args?: SelectSubset<T, FinancialEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinancialEntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FinancialEntry.
     * @param {FinancialEntryDeleteArgs} args - Arguments to delete one FinancialEntry.
     * @example
     * // Delete one FinancialEntry
     * const FinancialEntry = await prisma.financialEntry.delete({
     *   where: {
     *     // ... filter to delete one FinancialEntry
     *   }
     * })
     * 
     */
    delete<T extends FinancialEntryDeleteArgs>(args: SelectSubset<T, FinancialEntryDeleteArgs<ExtArgs>>): Prisma__FinancialEntryClient<$Result.GetResult<Prisma.$FinancialEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FinancialEntry.
     * @param {FinancialEntryUpdateArgs} args - Arguments to update one FinancialEntry.
     * @example
     * // Update one FinancialEntry
     * const financialEntry = await prisma.financialEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FinancialEntryUpdateArgs>(args: SelectSubset<T, FinancialEntryUpdateArgs<ExtArgs>>): Prisma__FinancialEntryClient<$Result.GetResult<Prisma.$FinancialEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FinancialEntries.
     * @param {FinancialEntryDeleteManyArgs} args - Arguments to filter FinancialEntries to delete.
     * @example
     * // Delete a few FinancialEntries
     * const { count } = await prisma.financialEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FinancialEntryDeleteManyArgs>(args?: SelectSubset<T, FinancialEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FinancialEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FinancialEntries
     * const financialEntry = await prisma.financialEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FinancialEntryUpdateManyArgs>(args: SelectSubset<T, FinancialEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FinancialEntries and returns the data updated in the database.
     * @param {FinancialEntryUpdateManyAndReturnArgs} args - Arguments to update many FinancialEntries.
     * @example
     * // Update many FinancialEntries
     * const financialEntry = await prisma.financialEntry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FinancialEntries and only return the `id`
     * const financialEntryWithIdOnly = await prisma.financialEntry.updateManyAndReturn({
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
    updateManyAndReturn<T extends FinancialEntryUpdateManyAndReturnArgs>(args: SelectSubset<T, FinancialEntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinancialEntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FinancialEntry.
     * @param {FinancialEntryUpsertArgs} args - Arguments to update or create a FinancialEntry.
     * @example
     * // Update or create a FinancialEntry
     * const financialEntry = await prisma.financialEntry.upsert({
     *   create: {
     *     // ... data to create a FinancialEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FinancialEntry we want to update
     *   }
     * })
     */
    upsert<T extends FinancialEntryUpsertArgs>(args: SelectSubset<T, FinancialEntryUpsertArgs<ExtArgs>>): Prisma__FinancialEntryClient<$Result.GetResult<Prisma.$FinancialEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FinancialEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialEntryCountArgs} args - Arguments to filter FinancialEntries to count.
     * @example
     * // Count the number of FinancialEntries
     * const count = await prisma.financialEntry.count({
     *   where: {
     *     // ... the filter for the FinancialEntries we want to count
     *   }
     * })
    **/
    count<T extends FinancialEntryCountArgs>(
      args?: Subset<T, FinancialEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FinancialEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FinancialEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FinancialEntryAggregateArgs>(args: Subset<T, FinancialEntryAggregateArgs>): Prisma.PrismaPromise<GetFinancialEntryAggregateType<T>>

    /**
     * Group by FinancialEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialEntryGroupByArgs} args - Group by arguments.
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
      T extends FinancialEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FinancialEntryGroupByArgs['orderBy'] }
        : { orderBy?: FinancialEntryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FinancialEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFinancialEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FinancialEntry model
   */
  readonly fields: FinancialEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FinancialEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FinancialEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    notas<T extends FinancialEntry$notasArgs<ExtArgs> = {}>(args?: Subset<T, FinancialEntry$notasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinancialEntryNotaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the FinancialEntry model
   */
  interface FinancialEntryFieldRefs {
    readonly id: FieldRef<"FinancialEntry", 'String'>
    readonly workspaceId: FieldRef<"FinancialEntry", 'String'>
    readonly kind: FieldRef<"FinancialEntry", 'EntryKind'>
    readonly description: FieldRef<"FinancialEntry", 'String'>
    readonly amount: FieldRef<"FinancialEntry", 'Decimal'>
    readonly dueDate: FieldRef<"FinancialEntry", 'DateTime'>
    readonly status: FieldRef<"FinancialEntry", 'EntryStatus'>
    readonly createdAt: FieldRef<"FinancialEntry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FinancialEntry findUnique
   */
  export type FinancialEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialEntry
     */
    select?: FinancialEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialEntry
     */
    omit?: FinancialEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialEntryInclude<ExtArgs> | null
    /**
     * Filter, which FinancialEntry to fetch.
     */
    where: FinancialEntryWhereUniqueInput
  }

  /**
   * FinancialEntry findUniqueOrThrow
   */
  export type FinancialEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialEntry
     */
    select?: FinancialEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialEntry
     */
    omit?: FinancialEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialEntryInclude<ExtArgs> | null
    /**
     * Filter, which FinancialEntry to fetch.
     */
    where: FinancialEntryWhereUniqueInput
  }

  /**
   * FinancialEntry findFirst
   */
  export type FinancialEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialEntry
     */
    select?: FinancialEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialEntry
     */
    omit?: FinancialEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialEntryInclude<ExtArgs> | null
    /**
     * Filter, which FinancialEntry to fetch.
     */
    where?: FinancialEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinancialEntries to fetch.
     */
    orderBy?: FinancialEntryOrderByWithRelationInput | FinancialEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FinancialEntries.
     */
    cursor?: FinancialEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinancialEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinancialEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FinancialEntries.
     */
    distinct?: FinancialEntryScalarFieldEnum | FinancialEntryScalarFieldEnum[]
  }

  /**
   * FinancialEntry findFirstOrThrow
   */
  export type FinancialEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialEntry
     */
    select?: FinancialEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialEntry
     */
    omit?: FinancialEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialEntryInclude<ExtArgs> | null
    /**
     * Filter, which FinancialEntry to fetch.
     */
    where?: FinancialEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinancialEntries to fetch.
     */
    orderBy?: FinancialEntryOrderByWithRelationInput | FinancialEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FinancialEntries.
     */
    cursor?: FinancialEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinancialEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinancialEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FinancialEntries.
     */
    distinct?: FinancialEntryScalarFieldEnum | FinancialEntryScalarFieldEnum[]
  }

  /**
   * FinancialEntry findMany
   */
  export type FinancialEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialEntry
     */
    select?: FinancialEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialEntry
     */
    omit?: FinancialEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialEntryInclude<ExtArgs> | null
    /**
     * Filter, which FinancialEntries to fetch.
     */
    where?: FinancialEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinancialEntries to fetch.
     */
    orderBy?: FinancialEntryOrderByWithRelationInput | FinancialEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FinancialEntries.
     */
    cursor?: FinancialEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinancialEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinancialEntries.
     */
    skip?: number
    distinct?: FinancialEntryScalarFieldEnum | FinancialEntryScalarFieldEnum[]
  }

  /**
   * FinancialEntry create
   */
  export type FinancialEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialEntry
     */
    select?: FinancialEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialEntry
     */
    omit?: FinancialEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialEntryInclude<ExtArgs> | null
    /**
     * The data needed to create a FinancialEntry.
     */
    data: XOR<FinancialEntryCreateInput, FinancialEntryUncheckedCreateInput>
  }

  /**
   * FinancialEntry createMany
   */
  export type FinancialEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FinancialEntries.
     */
    data: FinancialEntryCreateManyInput | FinancialEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FinancialEntry createManyAndReturn
   */
  export type FinancialEntryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialEntry
     */
    select?: FinancialEntrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialEntry
     */
    omit?: FinancialEntryOmit<ExtArgs> | null
    /**
     * The data used to create many FinancialEntries.
     */
    data: FinancialEntryCreateManyInput | FinancialEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FinancialEntry update
   */
  export type FinancialEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialEntry
     */
    select?: FinancialEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialEntry
     */
    omit?: FinancialEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialEntryInclude<ExtArgs> | null
    /**
     * The data needed to update a FinancialEntry.
     */
    data: XOR<FinancialEntryUpdateInput, FinancialEntryUncheckedUpdateInput>
    /**
     * Choose, which FinancialEntry to update.
     */
    where: FinancialEntryWhereUniqueInput
  }

  /**
   * FinancialEntry updateMany
   */
  export type FinancialEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FinancialEntries.
     */
    data: XOR<FinancialEntryUpdateManyMutationInput, FinancialEntryUncheckedUpdateManyInput>
    /**
     * Filter which FinancialEntries to update
     */
    where?: FinancialEntryWhereInput
    /**
     * Limit how many FinancialEntries to update.
     */
    limit?: number
  }

  /**
   * FinancialEntry updateManyAndReturn
   */
  export type FinancialEntryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialEntry
     */
    select?: FinancialEntrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialEntry
     */
    omit?: FinancialEntryOmit<ExtArgs> | null
    /**
     * The data used to update FinancialEntries.
     */
    data: XOR<FinancialEntryUpdateManyMutationInput, FinancialEntryUncheckedUpdateManyInput>
    /**
     * Filter which FinancialEntries to update
     */
    where?: FinancialEntryWhereInput
    /**
     * Limit how many FinancialEntries to update.
     */
    limit?: number
  }

  /**
   * FinancialEntry upsert
   */
  export type FinancialEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialEntry
     */
    select?: FinancialEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialEntry
     */
    omit?: FinancialEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialEntryInclude<ExtArgs> | null
    /**
     * The filter to search for the FinancialEntry to update in case it exists.
     */
    where: FinancialEntryWhereUniqueInput
    /**
     * In case the FinancialEntry found by the `where` argument doesn't exist, create a new FinancialEntry with this data.
     */
    create: XOR<FinancialEntryCreateInput, FinancialEntryUncheckedCreateInput>
    /**
     * In case the FinancialEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FinancialEntryUpdateInput, FinancialEntryUncheckedUpdateInput>
  }

  /**
   * FinancialEntry delete
   */
  export type FinancialEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialEntry
     */
    select?: FinancialEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialEntry
     */
    omit?: FinancialEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialEntryInclude<ExtArgs> | null
    /**
     * Filter which FinancialEntry to delete.
     */
    where: FinancialEntryWhereUniqueInput
  }

  /**
   * FinancialEntry deleteMany
   */
  export type FinancialEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FinancialEntries to delete
     */
    where?: FinancialEntryWhereInput
    /**
     * Limit how many FinancialEntries to delete.
     */
    limit?: number
  }

  /**
   * FinancialEntry.notas
   */
  export type FinancialEntry$notasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialEntryNota
     */
    select?: FinancialEntryNotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialEntryNota
     */
    omit?: FinancialEntryNotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialEntryNotaInclude<ExtArgs> | null
    where?: FinancialEntryNotaWhereInput
    orderBy?: FinancialEntryNotaOrderByWithRelationInput | FinancialEntryNotaOrderByWithRelationInput[]
    cursor?: FinancialEntryNotaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FinancialEntryNotaScalarFieldEnum | FinancialEntryNotaScalarFieldEnum[]
  }

  /**
   * FinancialEntry without action
   */
  export type FinancialEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialEntry
     */
    select?: FinancialEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialEntry
     */
    omit?: FinancialEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialEntryInclude<ExtArgs> | null
  }


  /**
   * Model NotaFiscalRef
   */

  export type AggregateNotaFiscalRef = {
    _count: NotaFiscalRefCountAggregateOutputType | null
    _avg: NotaFiscalRefAvgAggregateOutputType | null
    _sum: NotaFiscalRefSumAggregateOutputType | null
    _min: NotaFiscalRefMinAggregateOutputType | null
    _max: NotaFiscalRefMaxAggregateOutputType | null
  }

  export type NotaFiscalRefAvgAggregateOutputType = {
    number: number | null
    series: number | null
    totalValue: Decimal | null
  }

  export type NotaFiscalRefSumAggregateOutputType = {
    number: number | null
    series: number | null
    totalValue: Decimal | null
  }

  export type NotaFiscalRefMinAggregateOutputType = {
    id: string | null
    workspaceId: string | null
    fiscalInvoiceId: string | null
    emitterId: string | null
    emitterCnpj: string | null
    emitterName: string | null
    recipientName: string | null
    status: string | null
    number: number | null
    series: number | null
    accessKey: string | null
    totalValue: Decimal | null
    rejectionMessage: string | null
    authorizedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NotaFiscalRefMaxAggregateOutputType = {
    id: string | null
    workspaceId: string | null
    fiscalInvoiceId: string | null
    emitterId: string | null
    emitterCnpj: string | null
    emitterName: string | null
    recipientName: string | null
    status: string | null
    number: number | null
    series: number | null
    accessKey: string | null
    totalValue: Decimal | null
    rejectionMessage: string | null
    authorizedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NotaFiscalRefCountAggregateOutputType = {
    id: number
    workspaceId: number
    fiscalInvoiceId: number
    emitterId: number
    emitterCnpj: number
    emitterName: number
    recipientName: number
    status: number
    number: number
    series: number
    accessKey: number
    totalValue: number
    rejectionMessage: number
    authorizedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NotaFiscalRefAvgAggregateInputType = {
    number?: true
    series?: true
    totalValue?: true
  }

  export type NotaFiscalRefSumAggregateInputType = {
    number?: true
    series?: true
    totalValue?: true
  }

  export type NotaFiscalRefMinAggregateInputType = {
    id?: true
    workspaceId?: true
    fiscalInvoiceId?: true
    emitterId?: true
    emitterCnpj?: true
    emitterName?: true
    recipientName?: true
    status?: true
    number?: true
    series?: true
    accessKey?: true
    totalValue?: true
    rejectionMessage?: true
    authorizedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NotaFiscalRefMaxAggregateInputType = {
    id?: true
    workspaceId?: true
    fiscalInvoiceId?: true
    emitterId?: true
    emitterCnpj?: true
    emitterName?: true
    recipientName?: true
    status?: true
    number?: true
    series?: true
    accessKey?: true
    totalValue?: true
    rejectionMessage?: true
    authorizedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NotaFiscalRefCountAggregateInputType = {
    id?: true
    workspaceId?: true
    fiscalInvoiceId?: true
    emitterId?: true
    emitterCnpj?: true
    emitterName?: true
    recipientName?: true
    status?: true
    number?: true
    series?: true
    accessKey?: true
    totalValue?: true
    rejectionMessage?: true
    authorizedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NotaFiscalRefAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NotaFiscalRef to aggregate.
     */
    where?: NotaFiscalRefWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotaFiscalRefs to fetch.
     */
    orderBy?: NotaFiscalRefOrderByWithRelationInput | NotaFiscalRefOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotaFiscalRefWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotaFiscalRefs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotaFiscalRefs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NotaFiscalRefs
    **/
    _count?: true | NotaFiscalRefCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotaFiscalRefAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotaFiscalRefSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotaFiscalRefMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotaFiscalRefMaxAggregateInputType
  }

  export type GetNotaFiscalRefAggregateType<T extends NotaFiscalRefAggregateArgs> = {
        [P in keyof T & keyof AggregateNotaFiscalRef]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotaFiscalRef[P]>
      : GetScalarType<T[P], AggregateNotaFiscalRef[P]>
  }




  export type NotaFiscalRefGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotaFiscalRefWhereInput
    orderBy?: NotaFiscalRefOrderByWithAggregationInput | NotaFiscalRefOrderByWithAggregationInput[]
    by: NotaFiscalRefScalarFieldEnum[] | NotaFiscalRefScalarFieldEnum
    having?: NotaFiscalRefScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotaFiscalRefCountAggregateInputType | true
    _avg?: NotaFiscalRefAvgAggregateInputType
    _sum?: NotaFiscalRefSumAggregateInputType
    _min?: NotaFiscalRefMinAggregateInputType
    _max?: NotaFiscalRefMaxAggregateInputType
  }

  export type NotaFiscalRefGroupByOutputType = {
    id: string
    workspaceId: string
    fiscalInvoiceId: string
    emitterId: string
    emitterCnpj: string
    emitterName: string
    recipientName: string
    status: string
    number: number | null
    series: number | null
    accessKey: string | null
    totalValue: Decimal
    rejectionMessage: string | null
    authorizedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: NotaFiscalRefCountAggregateOutputType | null
    _avg: NotaFiscalRefAvgAggregateOutputType | null
    _sum: NotaFiscalRefSumAggregateOutputType | null
    _min: NotaFiscalRefMinAggregateOutputType | null
    _max: NotaFiscalRefMaxAggregateOutputType | null
  }

  type GetNotaFiscalRefGroupByPayload<T extends NotaFiscalRefGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotaFiscalRefGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotaFiscalRefGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotaFiscalRefGroupByOutputType[P]>
            : GetScalarType<T[P], NotaFiscalRefGroupByOutputType[P]>
        }
      >
    >


  export type NotaFiscalRefSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspaceId?: boolean
    fiscalInvoiceId?: boolean
    emitterId?: boolean
    emitterCnpj?: boolean
    emitterName?: boolean
    recipientName?: boolean
    status?: boolean
    number?: boolean
    series?: boolean
    accessKey?: boolean
    totalValue?: boolean
    rejectionMessage?: boolean
    authorizedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    financialLinks?: boolean | NotaFiscalRef$financialLinksArgs<ExtArgs>
    _count?: boolean | NotaFiscalRefCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notaFiscalRef"]>

  export type NotaFiscalRefSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspaceId?: boolean
    fiscalInvoiceId?: boolean
    emitterId?: boolean
    emitterCnpj?: boolean
    emitterName?: boolean
    recipientName?: boolean
    status?: boolean
    number?: boolean
    series?: boolean
    accessKey?: boolean
    totalValue?: boolean
    rejectionMessage?: boolean
    authorizedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["notaFiscalRef"]>

  export type NotaFiscalRefSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspaceId?: boolean
    fiscalInvoiceId?: boolean
    emitterId?: boolean
    emitterCnpj?: boolean
    emitterName?: boolean
    recipientName?: boolean
    status?: boolean
    number?: boolean
    series?: boolean
    accessKey?: boolean
    totalValue?: boolean
    rejectionMessage?: boolean
    authorizedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["notaFiscalRef"]>

  export type NotaFiscalRefSelectScalar = {
    id?: boolean
    workspaceId?: boolean
    fiscalInvoiceId?: boolean
    emitterId?: boolean
    emitterCnpj?: boolean
    emitterName?: boolean
    recipientName?: boolean
    status?: boolean
    number?: boolean
    series?: boolean
    accessKey?: boolean
    totalValue?: boolean
    rejectionMessage?: boolean
    authorizedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NotaFiscalRefOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workspaceId" | "fiscalInvoiceId" | "emitterId" | "emitterCnpj" | "emitterName" | "recipientName" | "status" | "number" | "series" | "accessKey" | "totalValue" | "rejectionMessage" | "authorizedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["notaFiscalRef"]>
  export type NotaFiscalRefInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    financialLinks?: boolean | NotaFiscalRef$financialLinksArgs<ExtArgs>
    _count?: boolean | NotaFiscalRefCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type NotaFiscalRefIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type NotaFiscalRefIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $NotaFiscalRefPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NotaFiscalRef"
    objects: {
      financialLinks: Prisma.$FinancialEntryNotaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workspaceId: string
      fiscalInvoiceId: string
      emitterId: string
      emitterCnpj: string
      emitterName: string
      recipientName: string
      status: string
      number: number | null
      series: number | null
      accessKey: string | null
      totalValue: Prisma.Decimal
      rejectionMessage: string | null
      authorizedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["notaFiscalRef"]>
    composites: {}
  }

  type NotaFiscalRefGetPayload<S extends boolean | null | undefined | NotaFiscalRefDefaultArgs> = $Result.GetResult<Prisma.$NotaFiscalRefPayload, S>

  type NotaFiscalRefCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotaFiscalRefFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotaFiscalRefCountAggregateInputType | true
    }

  export interface NotaFiscalRefDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NotaFiscalRef'], meta: { name: 'NotaFiscalRef' } }
    /**
     * Find zero or one NotaFiscalRef that matches the filter.
     * @param {NotaFiscalRefFindUniqueArgs} args - Arguments to find a NotaFiscalRef
     * @example
     * // Get one NotaFiscalRef
     * const notaFiscalRef = await prisma.notaFiscalRef.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotaFiscalRefFindUniqueArgs>(args: SelectSubset<T, NotaFiscalRefFindUniqueArgs<ExtArgs>>): Prisma__NotaFiscalRefClient<$Result.GetResult<Prisma.$NotaFiscalRefPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NotaFiscalRef that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotaFiscalRefFindUniqueOrThrowArgs} args - Arguments to find a NotaFiscalRef
     * @example
     * // Get one NotaFiscalRef
     * const notaFiscalRef = await prisma.notaFiscalRef.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotaFiscalRefFindUniqueOrThrowArgs>(args: SelectSubset<T, NotaFiscalRefFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotaFiscalRefClient<$Result.GetResult<Prisma.$NotaFiscalRefPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NotaFiscalRef that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotaFiscalRefFindFirstArgs} args - Arguments to find a NotaFiscalRef
     * @example
     * // Get one NotaFiscalRef
     * const notaFiscalRef = await prisma.notaFiscalRef.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotaFiscalRefFindFirstArgs>(args?: SelectSubset<T, NotaFiscalRefFindFirstArgs<ExtArgs>>): Prisma__NotaFiscalRefClient<$Result.GetResult<Prisma.$NotaFiscalRefPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NotaFiscalRef that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotaFiscalRefFindFirstOrThrowArgs} args - Arguments to find a NotaFiscalRef
     * @example
     * // Get one NotaFiscalRef
     * const notaFiscalRef = await prisma.notaFiscalRef.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotaFiscalRefFindFirstOrThrowArgs>(args?: SelectSubset<T, NotaFiscalRefFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotaFiscalRefClient<$Result.GetResult<Prisma.$NotaFiscalRefPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NotaFiscalRefs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotaFiscalRefFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NotaFiscalRefs
     * const notaFiscalRefs = await prisma.notaFiscalRef.findMany()
     * 
     * // Get first 10 NotaFiscalRefs
     * const notaFiscalRefs = await prisma.notaFiscalRef.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notaFiscalRefWithIdOnly = await prisma.notaFiscalRef.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotaFiscalRefFindManyArgs>(args?: SelectSubset<T, NotaFiscalRefFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotaFiscalRefPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NotaFiscalRef.
     * @param {NotaFiscalRefCreateArgs} args - Arguments to create a NotaFiscalRef.
     * @example
     * // Create one NotaFiscalRef
     * const NotaFiscalRef = await prisma.notaFiscalRef.create({
     *   data: {
     *     // ... data to create a NotaFiscalRef
     *   }
     * })
     * 
     */
    create<T extends NotaFiscalRefCreateArgs>(args: SelectSubset<T, NotaFiscalRefCreateArgs<ExtArgs>>): Prisma__NotaFiscalRefClient<$Result.GetResult<Prisma.$NotaFiscalRefPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NotaFiscalRefs.
     * @param {NotaFiscalRefCreateManyArgs} args - Arguments to create many NotaFiscalRefs.
     * @example
     * // Create many NotaFiscalRefs
     * const notaFiscalRef = await prisma.notaFiscalRef.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotaFiscalRefCreateManyArgs>(args?: SelectSubset<T, NotaFiscalRefCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NotaFiscalRefs and returns the data saved in the database.
     * @param {NotaFiscalRefCreateManyAndReturnArgs} args - Arguments to create many NotaFiscalRefs.
     * @example
     * // Create many NotaFiscalRefs
     * const notaFiscalRef = await prisma.notaFiscalRef.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NotaFiscalRefs and only return the `id`
     * const notaFiscalRefWithIdOnly = await prisma.notaFiscalRef.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotaFiscalRefCreateManyAndReturnArgs>(args?: SelectSubset<T, NotaFiscalRefCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotaFiscalRefPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NotaFiscalRef.
     * @param {NotaFiscalRefDeleteArgs} args - Arguments to delete one NotaFiscalRef.
     * @example
     * // Delete one NotaFiscalRef
     * const NotaFiscalRef = await prisma.notaFiscalRef.delete({
     *   where: {
     *     // ... filter to delete one NotaFiscalRef
     *   }
     * })
     * 
     */
    delete<T extends NotaFiscalRefDeleteArgs>(args: SelectSubset<T, NotaFiscalRefDeleteArgs<ExtArgs>>): Prisma__NotaFiscalRefClient<$Result.GetResult<Prisma.$NotaFiscalRefPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NotaFiscalRef.
     * @param {NotaFiscalRefUpdateArgs} args - Arguments to update one NotaFiscalRef.
     * @example
     * // Update one NotaFiscalRef
     * const notaFiscalRef = await prisma.notaFiscalRef.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotaFiscalRefUpdateArgs>(args: SelectSubset<T, NotaFiscalRefUpdateArgs<ExtArgs>>): Prisma__NotaFiscalRefClient<$Result.GetResult<Prisma.$NotaFiscalRefPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NotaFiscalRefs.
     * @param {NotaFiscalRefDeleteManyArgs} args - Arguments to filter NotaFiscalRefs to delete.
     * @example
     * // Delete a few NotaFiscalRefs
     * const { count } = await prisma.notaFiscalRef.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotaFiscalRefDeleteManyArgs>(args?: SelectSubset<T, NotaFiscalRefDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NotaFiscalRefs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotaFiscalRefUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NotaFiscalRefs
     * const notaFiscalRef = await prisma.notaFiscalRef.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotaFiscalRefUpdateManyArgs>(args: SelectSubset<T, NotaFiscalRefUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NotaFiscalRefs and returns the data updated in the database.
     * @param {NotaFiscalRefUpdateManyAndReturnArgs} args - Arguments to update many NotaFiscalRefs.
     * @example
     * // Update many NotaFiscalRefs
     * const notaFiscalRef = await prisma.notaFiscalRef.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NotaFiscalRefs and only return the `id`
     * const notaFiscalRefWithIdOnly = await prisma.notaFiscalRef.updateManyAndReturn({
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
    updateManyAndReturn<T extends NotaFiscalRefUpdateManyAndReturnArgs>(args: SelectSubset<T, NotaFiscalRefUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotaFiscalRefPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NotaFiscalRef.
     * @param {NotaFiscalRefUpsertArgs} args - Arguments to update or create a NotaFiscalRef.
     * @example
     * // Update or create a NotaFiscalRef
     * const notaFiscalRef = await prisma.notaFiscalRef.upsert({
     *   create: {
     *     // ... data to create a NotaFiscalRef
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NotaFiscalRef we want to update
     *   }
     * })
     */
    upsert<T extends NotaFiscalRefUpsertArgs>(args: SelectSubset<T, NotaFiscalRefUpsertArgs<ExtArgs>>): Prisma__NotaFiscalRefClient<$Result.GetResult<Prisma.$NotaFiscalRefPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NotaFiscalRefs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotaFiscalRefCountArgs} args - Arguments to filter NotaFiscalRefs to count.
     * @example
     * // Count the number of NotaFiscalRefs
     * const count = await prisma.notaFiscalRef.count({
     *   where: {
     *     // ... the filter for the NotaFiscalRefs we want to count
     *   }
     * })
    **/
    count<T extends NotaFiscalRefCountArgs>(
      args?: Subset<T, NotaFiscalRefCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotaFiscalRefCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NotaFiscalRef.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotaFiscalRefAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotaFiscalRefAggregateArgs>(args: Subset<T, NotaFiscalRefAggregateArgs>): Prisma.PrismaPromise<GetNotaFiscalRefAggregateType<T>>

    /**
     * Group by NotaFiscalRef.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotaFiscalRefGroupByArgs} args - Group by arguments.
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
      T extends NotaFiscalRefGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotaFiscalRefGroupByArgs['orderBy'] }
        : { orderBy?: NotaFiscalRefGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotaFiscalRefGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotaFiscalRefGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NotaFiscalRef model
   */
  readonly fields: NotaFiscalRefFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NotaFiscalRef.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotaFiscalRefClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    financialLinks<T extends NotaFiscalRef$financialLinksArgs<ExtArgs> = {}>(args?: Subset<T, NotaFiscalRef$financialLinksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinancialEntryNotaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the NotaFiscalRef model
   */
  interface NotaFiscalRefFieldRefs {
    readonly id: FieldRef<"NotaFiscalRef", 'String'>
    readonly workspaceId: FieldRef<"NotaFiscalRef", 'String'>
    readonly fiscalInvoiceId: FieldRef<"NotaFiscalRef", 'String'>
    readonly emitterId: FieldRef<"NotaFiscalRef", 'String'>
    readonly emitterCnpj: FieldRef<"NotaFiscalRef", 'String'>
    readonly emitterName: FieldRef<"NotaFiscalRef", 'String'>
    readonly recipientName: FieldRef<"NotaFiscalRef", 'String'>
    readonly status: FieldRef<"NotaFiscalRef", 'String'>
    readonly number: FieldRef<"NotaFiscalRef", 'Int'>
    readonly series: FieldRef<"NotaFiscalRef", 'Int'>
    readonly accessKey: FieldRef<"NotaFiscalRef", 'String'>
    readonly totalValue: FieldRef<"NotaFiscalRef", 'Decimal'>
    readonly rejectionMessage: FieldRef<"NotaFiscalRef", 'String'>
    readonly authorizedAt: FieldRef<"NotaFiscalRef", 'DateTime'>
    readonly createdAt: FieldRef<"NotaFiscalRef", 'DateTime'>
    readonly updatedAt: FieldRef<"NotaFiscalRef", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NotaFiscalRef findUnique
   */
  export type NotaFiscalRefFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotaFiscalRef
     */
    select?: NotaFiscalRefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotaFiscalRef
     */
    omit?: NotaFiscalRefOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotaFiscalRefInclude<ExtArgs> | null
    /**
     * Filter, which NotaFiscalRef to fetch.
     */
    where: NotaFiscalRefWhereUniqueInput
  }

  /**
   * NotaFiscalRef findUniqueOrThrow
   */
  export type NotaFiscalRefFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotaFiscalRef
     */
    select?: NotaFiscalRefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotaFiscalRef
     */
    omit?: NotaFiscalRefOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotaFiscalRefInclude<ExtArgs> | null
    /**
     * Filter, which NotaFiscalRef to fetch.
     */
    where: NotaFiscalRefWhereUniqueInput
  }

  /**
   * NotaFiscalRef findFirst
   */
  export type NotaFiscalRefFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotaFiscalRef
     */
    select?: NotaFiscalRefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotaFiscalRef
     */
    omit?: NotaFiscalRefOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotaFiscalRefInclude<ExtArgs> | null
    /**
     * Filter, which NotaFiscalRef to fetch.
     */
    where?: NotaFiscalRefWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotaFiscalRefs to fetch.
     */
    orderBy?: NotaFiscalRefOrderByWithRelationInput | NotaFiscalRefOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotaFiscalRefs.
     */
    cursor?: NotaFiscalRefWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotaFiscalRefs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotaFiscalRefs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotaFiscalRefs.
     */
    distinct?: NotaFiscalRefScalarFieldEnum | NotaFiscalRefScalarFieldEnum[]
  }

  /**
   * NotaFiscalRef findFirstOrThrow
   */
  export type NotaFiscalRefFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotaFiscalRef
     */
    select?: NotaFiscalRefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotaFiscalRef
     */
    omit?: NotaFiscalRefOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotaFiscalRefInclude<ExtArgs> | null
    /**
     * Filter, which NotaFiscalRef to fetch.
     */
    where?: NotaFiscalRefWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotaFiscalRefs to fetch.
     */
    orderBy?: NotaFiscalRefOrderByWithRelationInput | NotaFiscalRefOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotaFiscalRefs.
     */
    cursor?: NotaFiscalRefWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotaFiscalRefs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotaFiscalRefs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotaFiscalRefs.
     */
    distinct?: NotaFiscalRefScalarFieldEnum | NotaFiscalRefScalarFieldEnum[]
  }

  /**
   * NotaFiscalRef findMany
   */
  export type NotaFiscalRefFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotaFiscalRef
     */
    select?: NotaFiscalRefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotaFiscalRef
     */
    omit?: NotaFiscalRefOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotaFiscalRefInclude<ExtArgs> | null
    /**
     * Filter, which NotaFiscalRefs to fetch.
     */
    where?: NotaFiscalRefWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotaFiscalRefs to fetch.
     */
    orderBy?: NotaFiscalRefOrderByWithRelationInput | NotaFiscalRefOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NotaFiscalRefs.
     */
    cursor?: NotaFiscalRefWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotaFiscalRefs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotaFiscalRefs.
     */
    skip?: number
    distinct?: NotaFiscalRefScalarFieldEnum | NotaFiscalRefScalarFieldEnum[]
  }

  /**
   * NotaFiscalRef create
   */
  export type NotaFiscalRefCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotaFiscalRef
     */
    select?: NotaFiscalRefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotaFiscalRef
     */
    omit?: NotaFiscalRefOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotaFiscalRefInclude<ExtArgs> | null
    /**
     * The data needed to create a NotaFiscalRef.
     */
    data: XOR<NotaFiscalRefCreateInput, NotaFiscalRefUncheckedCreateInput>
  }

  /**
   * NotaFiscalRef createMany
   */
  export type NotaFiscalRefCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NotaFiscalRefs.
     */
    data: NotaFiscalRefCreateManyInput | NotaFiscalRefCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NotaFiscalRef createManyAndReturn
   */
  export type NotaFiscalRefCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotaFiscalRef
     */
    select?: NotaFiscalRefSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NotaFiscalRef
     */
    omit?: NotaFiscalRefOmit<ExtArgs> | null
    /**
     * The data used to create many NotaFiscalRefs.
     */
    data: NotaFiscalRefCreateManyInput | NotaFiscalRefCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NotaFiscalRef update
   */
  export type NotaFiscalRefUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotaFiscalRef
     */
    select?: NotaFiscalRefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotaFiscalRef
     */
    omit?: NotaFiscalRefOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotaFiscalRefInclude<ExtArgs> | null
    /**
     * The data needed to update a NotaFiscalRef.
     */
    data: XOR<NotaFiscalRefUpdateInput, NotaFiscalRefUncheckedUpdateInput>
    /**
     * Choose, which NotaFiscalRef to update.
     */
    where: NotaFiscalRefWhereUniqueInput
  }

  /**
   * NotaFiscalRef updateMany
   */
  export type NotaFiscalRefUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NotaFiscalRefs.
     */
    data: XOR<NotaFiscalRefUpdateManyMutationInput, NotaFiscalRefUncheckedUpdateManyInput>
    /**
     * Filter which NotaFiscalRefs to update
     */
    where?: NotaFiscalRefWhereInput
    /**
     * Limit how many NotaFiscalRefs to update.
     */
    limit?: number
  }

  /**
   * NotaFiscalRef updateManyAndReturn
   */
  export type NotaFiscalRefUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotaFiscalRef
     */
    select?: NotaFiscalRefSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NotaFiscalRef
     */
    omit?: NotaFiscalRefOmit<ExtArgs> | null
    /**
     * The data used to update NotaFiscalRefs.
     */
    data: XOR<NotaFiscalRefUpdateManyMutationInput, NotaFiscalRefUncheckedUpdateManyInput>
    /**
     * Filter which NotaFiscalRefs to update
     */
    where?: NotaFiscalRefWhereInput
    /**
     * Limit how many NotaFiscalRefs to update.
     */
    limit?: number
  }

  /**
   * NotaFiscalRef upsert
   */
  export type NotaFiscalRefUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotaFiscalRef
     */
    select?: NotaFiscalRefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotaFiscalRef
     */
    omit?: NotaFiscalRefOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotaFiscalRefInclude<ExtArgs> | null
    /**
     * The filter to search for the NotaFiscalRef to update in case it exists.
     */
    where: NotaFiscalRefWhereUniqueInput
    /**
     * In case the NotaFiscalRef found by the `where` argument doesn't exist, create a new NotaFiscalRef with this data.
     */
    create: XOR<NotaFiscalRefCreateInput, NotaFiscalRefUncheckedCreateInput>
    /**
     * In case the NotaFiscalRef was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotaFiscalRefUpdateInput, NotaFiscalRefUncheckedUpdateInput>
  }

  /**
   * NotaFiscalRef delete
   */
  export type NotaFiscalRefDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotaFiscalRef
     */
    select?: NotaFiscalRefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotaFiscalRef
     */
    omit?: NotaFiscalRefOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotaFiscalRefInclude<ExtArgs> | null
    /**
     * Filter which NotaFiscalRef to delete.
     */
    where: NotaFiscalRefWhereUniqueInput
  }

  /**
   * NotaFiscalRef deleteMany
   */
  export type NotaFiscalRefDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NotaFiscalRefs to delete
     */
    where?: NotaFiscalRefWhereInput
    /**
     * Limit how many NotaFiscalRefs to delete.
     */
    limit?: number
  }

  /**
   * NotaFiscalRef.financialLinks
   */
  export type NotaFiscalRef$financialLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialEntryNota
     */
    select?: FinancialEntryNotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialEntryNota
     */
    omit?: FinancialEntryNotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialEntryNotaInclude<ExtArgs> | null
    where?: FinancialEntryNotaWhereInput
    orderBy?: FinancialEntryNotaOrderByWithRelationInput | FinancialEntryNotaOrderByWithRelationInput[]
    cursor?: FinancialEntryNotaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FinancialEntryNotaScalarFieldEnum | FinancialEntryNotaScalarFieldEnum[]
  }

  /**
   * NotaFiscalRef without action
   */
  export type NotaFiscalRefDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotaFiscalRef
     */
    select?: NotaFiscalRefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotaFiscalRef
     */
    omit?: NotaFiscalRefOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotaFiscalRefInclude<ExtArgs> | null
  }


  /**
   * Model FinancialEntryNota
   */

  export type AggregateFinancialEntryNota = {
    _count: FinancialEntryNotaCountAggregateOutputType | null
    _min: FinancialEntryNotaMinAggregateOutputType | null
    _max: FinancialEntryNotaMaxAggregateOutputType | null
  }

  export type FinancialEntryNotaMinAggregateOutputType = {
    financialEntryId: string | null
    notaFiscalRefId: string | null
    createdAt: Date | null
  }

  export type FinancialEntryNotaMaxAggregateOutputType = {
    financialEntryId: string | null
    notaFiscalRefId: string | null
    createdAt: Date | null
  }

  export type FinancialEntryNotaCountAggregateOutputType = {
    financialEntryId: number
    notaFiscalRefId: number
    createdAt: number
    _all: number
  }


  export type FinancialEntryNotaMinAggregateInputType = {
    financialEntryId?: true
    notaFiscalRefId?: true
    createdAt?: true
  }

  export type FinancialEntryNotaMaxAggregateInputType = {
    financialEntryId?: true
    notaFiscalRefId?: true
    createdAt?: true
  }

  export type FinancialEntryNotaCountAggregateInputType = {
    financialEntryId?: true
    notaFiscalRefId?: true
    createdAt?: true
    _all?: true
  }

  export type FinancialEntryNotaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FinancialEntryNota to aggregate.
     */
    where?: FinancialEntryNotaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinancialEntryNotas to fetch.
     */
    orderBy?: FinancialEntryNotaOrderByWithRelationInput | FinancialEntryNotaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FinancialEntryNotaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinancialEntryNotas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinancialEntryNotas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FinancialEntryNotas
    **/
    _count?: true | FinancialEntryNotaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FinancialEntryNotaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FinancialEntryNotaMaxAggregateInputType
  }

  export type GetFinancialEntryNotaAggregateType<T extends FinancialEntryNotaAggregateArgs> = {
        [P in keyof T & keyof AggregateFinancialEntryNota]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFinancialEntryNota[P]>
      : GetScalarType<T[P], AggregateFinancialEntryNota[P]>
  }




  export type FinancialEntryNotaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FinancialEntryNotaWhereInput
    orderBy?: FinancialEntryNotaOrderByWithAggregationInput | FinancialEntryNotaOrderByWithAggregationInput[]
    by: FinancialEntryNotaScalarFieldEnum[] | FinancialEntryNotaScalarFieldEnum
    having?: FinancialEntryNotaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FinancialEntryNotaCountAggregateInputType | true
    _min?: FinancialEntryNotaMinAggregateInputType
    _max?: FinancialEntryNotaMaxAggregateInputType
  }

  export type FinancialEntryNotaGroupByOutputType = {
    financialEntryId: string
    notaFiscalRefId: string
    createdAt: Date
    _count: FinancialEntryNotaCountAggregateOutputType | null
    _min: FinancialEntryNotaMinAggregateOutputType | null
    _max: FinancialEntryNotaMaxAggregateOutputType | null
  }

  type GetFinancialEntryNotaGroupByPayload<T extends FinancialEntryNotaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FinancialEntryNotaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FinancialEntryNotaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FinancialEntryNotaGroupByOutputType[P]>
            : GetScalarType<T[P], FinancialEntryNotaGroupByOutputType[P]>
        }
      >
    >


  export type FinancialEntryNotaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    financialEntryId?: boolean
    notaFiscalRefId?: boolean
    createdAt?: boolean
    financialEntry?: boolean | FinancialEntryDefaultArgs<ExtArgs>
    notaFiscalRef?: boolean | NotaFiscalRefDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["financialEntryNota"]>

  export type FinancialEntryNotaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    financialEntryId?: boolean
    notaFiscalRefId?: boolean
    createdAt?: boolean
    financialEntry?: boolean | FinancialEntryDefaultArgs<ExtArgs>
    notaFiscalRef?: boolean | NotaFiscalRefDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["financialEntryNota"]>

  export type FinancialEntryNotaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    financialEntryId?: boolean
    notaFiscalRefId?: boolean
    createdAt?: boolean
    financialEntry?: boolean | FinancialEntryDefaultArgs<ExtArgs>
    notaFiscalRef?: boolean | NotaFiscalRefDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["financialEntryNota"]>

  export type FinancialEntryNotaSelectScalar = {
    financialEntryId?: boolean
    notaFiscalRefId?: boolean
    createdAt?: boolean
  }

  export type FinancialEntryNotaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"financialEntryId" | "notaFiscalRefId" | "createdAt", ExtArgs["result"]["financialEntryNota"]>
  export type FinancialEntryNotaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    financialEntry?: boolean | FinancialEntryDefaultArgs<ExtArgs>
    notaFiscalRef?: boolean | NotaFiscalRefDefaultArgs<ExtArgs>
  }
  export type FinancialEntryNotaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    financialEntry?: boolean | FinancialEntryDefaultArgs<ExtArgs>
    notaFiscalRef?: boolean | NotaFiscalRefDefaultArgs<ExtArgs>
  }
  export type FinancialEntryNotaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    financialEntry?: boolean | FinancialEntryDefaultArgs<ExtArgs>
    notaFiscalRef?: boolean | NotaFiscalRefDefaultArgs<ExtArgs>
  }

  export type $FinancialEntryNotaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FinancialEntryNota"
    objects: {
      financialEntry: Prisma.$FinancialEntryPayload<ExtArgs>
      notaFiscalRef: Prisma.$NotaFiscalRefPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      financialEntryId: string
      notaFiscalRefId: string
      createdAt: Date
    }, ExtArgs["result"]["financialEntryNota"]>
    composites: {}
  }

  type FinancialEntryNotaGetPayload<S extends boolean | null | undefined | FinancialEntryNotaDefaultArgs> = $Result.GetResult<Prisma.$FinancialEntryNotaPayload, S>

  type FinancialEntryNotaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FinancialEntryNotaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FinancialEntryNotaCountAggregateInputType | true
    }

  export interface FinancialEntryNotaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FinancialEntryNota'], meta: { name: 'FinancialEntryNota' } }
    /**
     * Find zero or one FinancialEntryNota that matches the filter.
     * @param {FinancialEntryNotaFindUniqueArgs} args - Arguments to find a FinancialEntryNota
     * @example
     * // Get one FinancialEntryNota
     * const financialEntryNota = await prisma.financialEntryNota.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FinancialEntryNotaFindUniqueArgs>(args: SelectSubset<T, FinancialEntryNotaFindUniqueArgs<ExtArgs>>): Prisma__FinancialEntryNotaClient<$Result.GetResult<Prisma.$FinancialEntryNotaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FinancialEntryNota that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FinancialEntryNotaFindUniqueOrThrowArgs} args - Arguments to find a FinancialEntryNota
     * @example
     * // Get one FinancialEntryNota
     * const financialEntryNota = await prisma.financialEntryNota.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FinancialEntryNotaFindUniqueOrThrowArgs>(args: SelectSubset<T, FinancialEntryNotaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FinancialEntryNotaClient<$Result.GetResult<Prisma.$FinancialEntryNotaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FinancialEntryNota that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialEntryNotaFindFirstArgs} args - Arguments to find a FinancialEntryNota
     * @example
     * // Get one FinancialEntryNota
     * const financialEntryNota = await prisma.financialEntryNota.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FinancialEntryNotaFindFirstArgs>(args?: SelectSubset<T, FinancialEntryNotaFindFirstArgs<ExtArgs>>): Prisma__FinancialEntryNotaClient<$Result.GetResult<Prisma.$FinancialEntryNotaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FinancialEntryNota that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialEntryNotaFindFirstOrThrowArgs} args - Arguments to find a FinancialEntryNota
     * @example
     * // Get one FinancialEntryNota
     * const financialEntryNota = await prisma.financialEntryNota.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FinancialEntryNotaFindFirstOrThrowArgs>(args?: SelectSubset<T, FinancialEntryNotaFindFirstOrThrowArgs<ExtArgs>>): Prisma__FinancialEntryNotaClient<$Result.GetResult<Prisma.$FinancialEntryNotaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FinancialEntryNotas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialEntryNotaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FinancialEntryNotas
     * const financialEntryNotas = await prisma.financialEntryNota.findMany()
     * 
     * // Get first 10 FinancialEntryNotas
     * const financialEntryNotas = await prisma.financialEntryNota.findMany({ take: 10 })
     * 
     * // Only select the `financialEntryId`
     * const financialEntryNotaWithFinancialEntryIdOnly = await prisma.financialEntryNota.findMany({ select: { financialEntryId: true } })
     * 
     */
    findMany<T extends FinancialEntryNotaFindManyArgs>(args?: SelectSubset<T, FinancialEntryNotaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinancialEntryNotaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FinancialEntryNota.
     * @param {FinancialEntryNotaCreateArgs} args - Arguments to create a FinancialEntryNota.
     * @example
     * // Create one FinancialEntryNota
     * const FinancialEntryNota = await prisma.financialEntryNota.create({
     *   data: {
     *     // ... data to create a FinancialEntryNota
     *   }
     * })
     * 
     */
    create<T extends FinancialEntryNotaCreateArgs>(args: SelectSubset<T, FinancialEntryNotaCreateArgs<ExtArgs>>): Prisma__FinancialEntryNotaClient<$Result.GetResult<Prisma.$FinancialEntryNotaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FinancialEntryNotas.
     * @param {FinancialEntryNotaCreateManyArgs} args - Arguments to create many FinancialEntryNotas.
     * @example
     * // Create many FinancialEntryNotas
     * const financialEntryNota = await prisma.financialEntryNota.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FinancialEntryNotaCreateManyArgs>(args?: SelectSubset<T, FinancialEntryNotaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FinancialEntryNotas and returns the data saved in the database.
     * @param {FinancialEntryNotaCreateManyAndReturnArgs} args - Arguments to create many FinancialEntryNotas.
     * @example
     * // Create many FinancialEntryNotas
     * const financialEntryNota = await prisma.financialEntryNota.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FinancialEntryNotas and only return the `financialEntryId`
     * const financialEntryNotaWithFinancialEntryIdOnly = await prisma.financialEntryNota.createManyAndReturn({
     *   select: { financialEntryId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FinancialEntryNotaCreateManyAndReturnArgs>(args?: SelectSubset<T, FinancialEntryNotaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinancialEntryNotaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FinancialEntryNota.
     * @param {FinancialEntryNotaDeleteArgs} args - Arguments to delete one FinancialEntryNota.
     * @example
     * // Delete one FinancialEntryNota
     * const FinancialEntryNota = await prisma.financialEntryNota.delete({
     *   where: {
     *     // ... filter to delete one FinancialEntryNota
     *   }
     * })
     * 
     */
    delete<T extends FinancialEntryNotaDeleteArgs>(args: SelectSubset<T, FinancialEntryNotaDeleteArgs<ExtArgs>>): Prisma__FinancialEntryNotaClient<$Result.GetResult<Prisma.$FinancialEntryNotaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FinancialEntryNota.
     * @param {FinancialEntryNotaUpdateArgs} args - Arguments to update one FinancialEntryNota.
     * @example
     * // Update one FinancialEntryNota
     * const financialEntryNota = await prisma.financialEntryNota.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FinancialEntryNotaUpdateArgs>(args: SelectSubset<T, FinancialEntryNotaUpdateArgs<ExtArgs>>): Prisma__FinancialEntryNotaClient<$Result.GetResult<Prisma.$FinancialEntryNotaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FinancialEntryNotas.
     * @param {FinancialEntryNotaDeleteManyArgs} args - Arguments to filter FinancialEntryNotas to delete.
     * @example
     * // Delete a few FinancialEntryNotas
     * const { count } = await prisma.financialEntryNota.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FinancialEntryNotaDeleteManyArgs>(args?: SelectSubset<T, FinancialEntryNotaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FinancialEntryNotas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialEntryNotaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FinancialEntryNotas
     * const financialEntryNota = await prisma.financialEntryNota.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FinancialEntryNotaUpdateManyArgs>(args: SelectSubset<T, FinancialEntryNotaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FinancialEntryNotas and returns the data updated in the database.
     * @param {FinancialEntryNotaUpdateManyAndReturnArgs} args - Arguments to update many FinancialEntryNotas.
     * @example
     * // Update many FinancialEntryNotas
     * const financialEntryNota = await prisma.financialEntryNota.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FinancialEntryNotas and only return the `financialEntryId`
     * const financialEntryNotaWithFinancialEntryIdOnly = await prisma.financialEntryNota.updateManyAndReturn({
     *   select: { financialEntryId: true },
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
    updateManyAndReturn<T extends FinancialEntryNotaUpdateManyAndReturnArgs>(args: SelectSubset<T, FinancialEntryNotaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinancialEntryNotaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FinancialEntryNota.
     * @param {FinancialEntryNotaUpsertArgs} args - Arguments to update or create a FinancialEntryNota.
     * @example
     * // Update or create a FinancialEntryNota
     * const financialEntryNota = await prisma.financialEntryNota.upsert({
     *   create: {
     *     // ... data to create a FinancialEntryNota
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FinancialEntryNota we want to update
     *   }
     * })
     */
    upsert<T extends FinancialEntryNotaUpsertArgs>(args: SelectSubset<T, FinancialEntryNotaUpsertArgs<ExtArgs>>): Prisma__FinancialEntryNotaClient<$Result.GetResult<Prisma.$FinancialEntryNotaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FinancialEntryNotas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialEntryNotaCountArgs} args - Arguments to filter FinancialEntryNotas to count.
     * @example
     * // Count the number of FinancialEntryNotas
     * const count = await prisma.financialEntryNota.count({
     *   where: {
     *     // ... the filter for the FinancialEntryNotas we want to count
     *   }
     * })
    **/
    count<T extends FinancialEntryNotaCountArgs>(
      args?: Subset<T, FinancialEntryNotaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FinancialEntryNotaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FinancialEntryNota.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialEntryNotaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FinancialEntryNotaAggregateArgs>(args: Subset<T, FinancialEntryNotaAggregateArgs>): Prisma.PrismaPromise<GetFinancialEntryNotaAggregateType<T>>

    /**
     * Group by FinancialEntryNota.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialEntryNotaGroupByArgs} args - Group by arguments.
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
      T extends FinancialEntryNotaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FinancialEntryNotaGroupByArgs['orderBy'] }
        : { orderBy?: FinancialEntryNotaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FinancialEntryNotaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFinancialEntryNotaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FinancialEntryNota model
   */
  readonly fields: FinancialEntryNotaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FinancialEntryNota.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FinancialEntryNotaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    financialEntry<T extends FinancialEntryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FinancialEntryDefaultArgs<ExtArgs>>): Prisma__FinancialEntryClient<$Result.GetResult<Prisma.$FinancialEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    notaFiscalRef<T extends NotaFiscalRefDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NotaFiscalRefDefaultArgs<ExtArgs>>): Prisma__NotaFiscalRefClient<$Result.GetResult<Prisma.$NotaFiscalRefPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the FinancialEntryNota model
   */
  interface FinancialEntryNotaFieldRefs {
    readonly financialEntryId: FieldRef<"FinancialEntryNota", 'String'>
    readonly notaFiscalRefId: FieldRef<"FinancialEntryNota", 'String'>
    readonly createdAt: FieldRef<"FinancialEntryNota", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FinancialEntryNota findUnique
   */
  export type FinancialEntryNotaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialEntryNota
     */
    select?: FinancialEntryNotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialEntryNota
     */
    omit?: FinancialEntryNotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialEntryNotaInclude<ExtArgs> | null
    /**
     * Filter, which FinancialEntryNota to fetch.
     */
    where: FinancialEntryNotaWhereUniqueInput
  }

  /**
   * FinancialEntryNota findUniqueOrThrow
   */
  export type FinancialEntryNotaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialEntryNota
     */
    select?: FinancialEntryNotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialEntryNota
     */
    omit?: FinancialEntryNotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialEntryNotaInclude<ExtArgs> | null
    /**
     * Filter, which FinancialEntryNota to fetch.
     */
    where: FinancialEntryNotaWhereUniqueInput
  }

  /**
   * FinancialEntryNota findFirst
   */
  export type FinancialEntryNotaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialEntryNota
     */
    select?: FinancialEntryNotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialEntryNota
     */
    omit?: FinancialEntryNotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialEntryNotaInclude<ExtArgs> | null
    /**
     * Filter, which FinancialEntryNota to fetch.
     */
    where?: FinancialEntryNotaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinancialEntryNotas to fetch.
     */
    orderBy?: FinancialEntryNotaOrderByWithRelationInput | FinancialEntryNotaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FinancialEntryNotas.
     */
    cursor?: FinancialEntryNotaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinancialEntryNotas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinancialEntryNotas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FinancialEntryNotas.
     */
    distinct?: FinancialEntryNotaScalarFieldEnum | FinancialEntryNotaScalarFieldEnum[]
  }

  /**
   * FinancialEntryNota findFirstOrThrow
   */
  export type FinancialEntryNotaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialEntryNota
     */
    select?: FinancialEntryNotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialEntryNota
     */
    omit?: FinancialEntryNotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialEntryNotaInclude<ExtArgs> | null
    /**
     * Filter, which FinancialEntryNota to fetch.
     */
    where?: FinancialEntryNotaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinancialEntryNotas to fetch.
     */
    orderBy?: FinancialEntryNotaOrderByWithRelationInput | FinancialEntryNotaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FinancialEntryNotas.
     */
    cursor?: FinancialEntryNotaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinancialEntryNotas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinancialEntryNotas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FinancialEntryNotas.
     */
    distinct?: FinancialEntryNotaScalarFieldEnum | FinancialEntryNotaScalarFieldEnum[]
  }

  /**
   * FinancialEntryNota findMany
   */
  export type FinancialEntryNotaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialEntryNota
     */
    select?: FinancialEntryNotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialEntryNota
     */
    omit?: FinancialEntryNotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialEntryNotaInclude<ExtArgs> | null
    /**
     * Filter, which FinancialEntryNotas to fetch.
     */
    where?: FinancialEntryNotaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinancialEntryNotas to fetch.
     */
    orderBy?: FinancialEntryNotaOrderByWithRelationInput | FinancialEntryNotaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FinancialEntryNotas.
     */
    cursor?: FinancialEntryNotaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinancialEntryNotas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinancialEntryNotas.
     */
    skip?: number
    distinct?: FinancialEntryNotaScalarFieldEnum | FinancialEntryNotaScalarFieldEnum[]
  }

  /**
   * FinancialEntryNota create
   */
  export type FinancialEntryNotaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialEntryNota
     */
    select?: FinancialEntryNotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialEntryNota
     */
    omit?: FinancialEntryNotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialEntryNotaInclude<ExtArgs> | null
    /**
     * The data needed to create a FinancialEntryNota.
     */
    data: XOR<FinancialEntryNotaCreateInput, FinancialEntryNotaUncheckedCreateInput>
  }

  /**
   * FinancialEntryNota createMany
   */
  export type FinancialEntryNotaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FinancialEntryNotas.
     */
    data: FinancialEntryNotaCreateManyInput | FinancialEntryNotaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FinancialEntryNota createManyAndReturn
   */
  export type FinancialEntryNotaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialEntryNota
     */
    select?: FinancialEntryNotaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialEntryNota
     */
    omit?: FinancialEntryNotaOmit<ExtArgs> | null
    /**
     * The data used to create many FinancialEntryNotas.
     */
    data: FinancialEntryNotaCreateManyInput | FinancialEntryNotaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialEntryNotaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FinancialEntryNota update
   */
  export type FinancialEntryNotaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialEntryNota
     */
    select?: FinancialEntryNotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialEntryNota
     */
    omit?: FinancialEntryNotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialEntryNotaInclude<ExtArgs> | null
    /**
     * The data needed to update a FinancialEntryNota.
     */
    data: XOR<FinancialEntryNotaUpdateInput, FinancialEntryNotaUncheckedUpdateInput>
    /**
     * Choose, which FinancialEntryNota to update.
     */
    where: FinancialEntryNotaWhereUniqueInput
  }

  /**
   * FinancialEntryNota updateMany
   */
  export type FinancialEntryNotaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FinancialEntryNotas.
     */
    data: XOR<FinancialEntryNotaUpdateManyMutationInput, FinancialEntryNotaUncheckedUpdateManyInput>
    /**
     * Filter which FinancialEntryNotas to update
     */
    where?: FinancialEntryNotaWhereInput
    /**
     * Limit how many FinancialEntryNotas to update.
     */
    limit?: number
  }

  /**
   * FinancialEntryNota updateManyAndReturn
   */
  export type FinancialEntryNotaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialEntryNota
     */
    select?: FinancialEntryNotaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialEntryNota
     */
    omit?: FinancialEntryNotaOmit<ExtArgs> | null
    /**
     * The data used to update FinancialEntryNotas.
     */
    data: XOR<FinancialEntryNotaUpdateManyMutationInput, FinancialEntryNotaUncheckedUpdateManyInput>
    /**
     * Filter which FinancialEntryNotas to update
     */
    where?: FinancialEntryNotaWhereInput
    /**
     * Limit how many FinancialEntryNotas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialEntryNotaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FinancialEntryNota upsert
   */
  export type FinancialEntryNotaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialEntryNota
     */
    select?: FinancialEntryNotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialEntryNota
     */
    omit?: FinancialEntryNotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialEntryNotaInclude<ExtArgs> | null
    /**
     * The filter to search for the FinancialEntryNota to update in case it exists.
     */
    where: FinancialEntryNotaWhereUniqueInput
    /**
     * In case the FinancialEntryNota found by the `where` argument doesn't exist, create a new FinancialEntryNota with this data.
     */
    create: XOR<FinancialEntryNotaCreateInput, FinancialEntryNotaUncheckedCreateInput>
    /**
     * In case the FinancialEntryNota was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FinancialEntryNotaUpdateInput, FinancialEntryNotaUncheckedUpdateInput>
  }

  /**
   * FinancialEntryNota delete
   */
  export type FinancialEntryNotaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialEntryNota
     */
    select?: FinancialEntryNotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialEntryNota
     */
    omit?: FinancialEntryNotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialEntryNotaInclude<ExtArgs> | null
    /**
     * Filter which FinancialEntryNota to delete.
     */
    where: FinancialEntryNotaWhereUniqueInput
  }

  /**
   * FinancialEntryNota deleteMany
   */
  export type FinancialEntryNotaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FinancialEntryNotas to delete
     */
    where?: FinancialEntryNotaWhereInput
    /**
     * Limit how many FinancialEntryNotas to delete.
     */
    limit?: number
  }

  /**
   * FinancialEntryNota without action
   */
  export type FinancialEntryNotaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialEntryNota
     */
    select?: FinancialEntryNotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialEntryNota
     */
    omit?: FinancialEntryNotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialEntryNotaInclude<ExtArgs> | null
  }


  /**
   * Model FiscalEventInbox
   */

  export type AggregateFiscalEventInbox = {
    _count: FiscalEventInboxCountAggregateOutputType | null
    _min: FiscalEventInboxMinAggregateOutputType | null
    _max: FiscalEventInboxMaxAggregateOutputType | null
  }

  export type FiscalEventInboxMinAggregateOutputType = {
    eventId: string | null
    receivedAt: Date | null
  }

  export type FiscalEventInboxMaxAggregateOutputType = {
    eventId: string | null
    receivedAt: Date | null
  }

  export type FiscalEventInboxCountAggregateOutputType = {
    eventId: number
    receivedAt: number
    _all: number
  }


  export type FiscalEventInboxMinAggregateInputType = {
    eventId?: true
    receivedAt?: true
  }

  export type FiscalEventInboxMaxAggregateInputType = {
    eventId?: true
    receivedAt?: true
  }

  export type FiscalEventInboxCountAggregateInputType = {
    eventId?: true
    receivedAt?: true
    _all?: true
  }

  export type FiscalEventInboxAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FiscalEventInbox to aggregate.
     */
    where?: FiscalEventInboxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FiscalEventInboxes to fetch.
     */
    orderBy?: FiscalEventInboxOrderByWithRelationInput | FiscalEventInboxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FiscalEventInboxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FiscalEventInboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FiscalEventInboxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FiscalEventInboxes
    **/
    _count?: true | FiscalEventInboxCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FiscalEventInboxMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FiscalEventInboxMaxAggregateInputType
  }

  export type GetFiscalEventInboxAggregateType<T extends FiscalEventInboxAggregateArgs> = {
        [P in keyof T & keyof AggregateFiscalEventInbox]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFiscalEventInbox[P]>
      : GetScalarType<T[P], AggregateFiscalEventInbox[P]>
  }




  export type FiscalEventInboxGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FiscalEventInboxWhereInput
    orderBy?: FiscalEventInboxOrderByWithAggregationInput | FiscalEventInboxOrderByWithAggregationInput[]
    by: FiscalEventInboxScalarFieldEnum[] | FiscalEventInboxScalarFieldEnum
    having?: FiscalEventInboxScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FiscalEventInboxCountAggregateInputType | true
    _min?: FiscalEventInboxMinAggregateInputType
    _max?: FiscalEventInboxMaxAggregateInputType
  }

  export type FiscalEventInboxGroupByOutputType = {
    eventId: string
    receivedAt: Date
    _count: FiscalEventInboxCountAggregateOutputType | null
    _min: FiscalEventInboxMinAggregateOutputType | null
    _max: FiscalEventInboxMaxAggregateOutputType | null
  }

  type GetFiscalEventInboxGroupByPayload<T extends FiscalEventInboxGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FiscalEventInboxGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FiscalEventInboxGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FiscalEventInboxGroupByOutputType[P]>
            : GetScalarType<T[P], FiscalEventInboxGroupByOutputType[P]>
        }
      >
    >


  export type FiscalEventInboxSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    eventId?: boolean
    receivedAt?: boolean
  }, ExtArgs["result"]["fiscalEventInbox"]>

  export type FiscalEventInboxSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    eventId?: boolean
    receivedAt?: boolean
  }, ExtArgs["result"]["fiscalEventInbox"]>

  export type FiscalEventInboxSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    eventId?: boolean
    receivedAt?: boolean
  }, ExtArgs["result"]["fiscalEventInbox"]>

  export type FiscalEventInboxSelectScalar = {
    eventId?: boolean
    receivedAt?: boolean
  }

  export type FiscalEventInboxOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"eventId" | "receivedAt", ExtArgs["result"]["fiscalEventInbox"]>

  export type $FiscalEventInboxPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FiscalEventInbox"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      eventId: string
      receivedAt: Date
    }, ExtArgs["result"]["fiscalEventInbox"]>
    composites: {}
  }

  type FiscalEventInboxGetPayload<S extends boolean | null | undefined | FiscalEventInboxDefaultArgs> = $Result.GetResult<Prisma.$FiscalEventInboxPayload, S>

  type FiscalEventInboxCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FiscalEventInboxFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FiscalEventInboxCountAggregateInputType | true
    }

  export interface FiscalEventInboxDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FiscalEventInbox'], meta: { name: 'FiscalEventInbox' } }
    /**
     * Find zero or one FiscalEventInbox that matches the filter.
     * @param {FiscalEventInboxFindUniqueArgs} args - Arguments to find a FiscalEventInbox
     * @example
     * // Get one FiscalEventInbox
     * const fiscalEventInbox = await prisma.fiscalEventInbox.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FiscalEventInboxFindUniqueArgs>(args: SelectSubset<T, FiscalEventInboxFindUniqueArgs<ExtArgs>>): Prisma__FiscalEventInboxClient<$Result.GetResult<Prisma.$FiscalEventInboxPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FiscalEventInbox that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FiscalEventInboxFindUniqueOrThrowArgs} args - Arguments to find a FiscalEventInbox
     * @example
     * // Get one FiscalEventInbox
     * const fiscalEventInbox = await prisma.fiscalEventInbox.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FiscalEventInboxFindUniqueOrThrowArgs>(args: SelectSubset<T, FiscalEventInboxFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FiscalEventInboxClient<$Result.GetResult<Prisma.$FiscalEventInboxPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FiscalEventInbox that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FiscalEventInboxFindFirstArgs} args - Arguments to find a FiscalEventInbox
     * @example
     * // Get one FiscalEventInbox
     * const fiscalEventInbox = await prisma.fiscalEventInbox.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FiscalEventInboxFindFirstArgs>(args?: SelectSubset<T, FiscalEventInboxFindFirstArgs<ExtArgs>>): Prisma__FiscalEventInboxClient<$Result.GetResult<Prisma.$FiscalEventInboxPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FiscalEventInbox that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FiscalEventInboxFindFirstOrThrowArgs} args - Arguments to find a FiscalEventInbox
     * @example
     * // Get one FiscalEventInbox
     * const fiscalEventInbox = await prisma.fiscalEventInbox.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FiscalEventInboxFindFirstOrThrowArgs>(args?: SelectSubset<T, FiscalEventInboxFindFirstOrThrowArgs<ExtArgs>>): Prisma__FiscalEventInboxClient<$Result.GetResult<Prisma.$FiscalEventInboxPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FiscalEventInboxes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FiscalEventInboxFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FiscalEventInboxes
     * const fiscalEventInboxes = await prisma.fiscalEventInbox.findMany()
     * 
     * // Get first 10 FiscalEventInboxes
     * const fiscalEventInboxes = await prisma.fiscalEventInbox.findMany({ take: 10 })
     * 
     * // Only select the `eventId`
     * const fiscalEventInboxWithEventIdOnly = await prisma.fiscalEventInbox.findMany({ select: { eventId: true } })
     * 
     */
    findMany<T extends FiscalEventInboxFindManyArgs>(args?: SelectSubset<T, FiscalEventInboxFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FiscalEventInboxPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FiscalEventInbox.
     * @param {FiscalEventInboxCreateArgs} args - Arguments to create a FiscalEventInbox.
     * @example
     * // Create one FiscalEventInbox
     * const FiscalEventInbox = await prisma.fiscalEventInbox.create({
     *   data: {
     *     // ... data to create a FiscalEventInbox
     *   }
     * })
     * 
     */
    create<T extends FiscalEventInboxCreateArgs>(args: SelectSubset<T, FiscalEventInboxCreateArgs<ExtArgs>>): Prisma__FiscalEventInboxClient<$Result.GetResult<Prisma.$FiscalEventInboxPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FiscalEventInboxes.
     * @param {FiscalEventInboxCreateManyArgs} args - Arguments to create many FiscalEventInboxes.
     * @example
     * // Create many FiscalEventInboxes
     * const fiscalEventInbox = await prisma.fiscalEventInbox.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FiscalEventInboxCreateManyArgs>(args?: SelectSubset<T, FiscalEventInboxCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FiscalEventInboxes and returns the data saved in the database.
     * @param {FiscalEventInboxCreateManyAndReturnArgs} args - Arguments to create many FiscalEventInboxes.
     * @example
     * // Create many FiscalEventInboxes
     * const fiscalEventInbox = await prisma.fiscalEventInbox.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FiscalEventInboxes and only return the `eventId`
     * const fiscalEventInboxWithEventIdOnly = await prisma.fiscalEventInbox.createManyAndReturn({
     *   select: { eventId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FiscalEventInboxCreateManyAndReturnArgs>(args?: SelectSubset<T, FiscalEventInboxCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FiscalEventInboxPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FiscalEventInbox.
     * @param {FiscalEventInboxDeleteArgs} args - Arguments to delete one FiscalEventInbox.
     * @example
     * // Delete one FiscalEventInbox
     * const FiscalEventInbox = await prisma.fiscalEventInbox.delete({
     *   where: {
     *     // ... filter to delete one FiscalEventInbox
     *   }
     * })
     * 
     */
    delete<T extends FiscalEventInboxDeleteArgs>(args: SelectSubset<T, FiscalEventInboxDeleteArgs<ExtArgs>>): Prisma__FiscalEventInboxClient<$Result.GetResult<Prisma.$FiscalEventInboxPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FiscalEventInbox.
     * @param {FiscalEventInboxUpdateArgs} args - Arguments to update one FiscalEventInbox.
     * @example
     * // Update one FiscalEventInbox
     * const fiscalEventInbox = await prisma.fiscalEventInbox.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FiscalEventInboxUpdateArgs>(args: SelectSubset<T, FiscalEventInboxUpdateArgs<ExtArgs>>): Prisma__FiscalEventInboxClient<$Result.GetResult<Prisma.$FiscalEventInboxPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FiscalEventInboxes.
     * @param {FiscalEventInboxDeleteManyArgs} args - Arguments to filter FiscalEventInboxes to delete.
     * @example
     * // Delete a few FiscalEventInboxes
     * const { count } = await prisma.fiscalEventInbox.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FiscalEventInboxDeleteManyArgs>(args?: SelectSubset<T, FiscalEventInboxDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FiscalEventInboxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FiscalEventInboxUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FiscalEventInboxes
     * const fiscalEventInbox = await prisma.fiscalEventInbox.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FiscalEventInboxUpdateManyArgs>(args: SelectSubset<T, FiscalEventInboxUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FiscalEventInboxes and returns the data updated in the database.
     * @param {FiscalEventInboxUpdateManyAndReturnArgs} args - Arguments to update many FiscalEventInboxes.
     * @example
     * // Update many FiscalEventInboxes
     * const fiscalEventInbox = await prisma.fiscalEventInbox.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FiscalEventInboxes and only return the `eventId`
     * const fiscalEventInboxWithEventIdOnly = await prisma.fiscalEventInbox.updateManyAndReturn({
     *   select: { eventId: true },
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
    updateManyAndReturn<T extends FiscalEventInboxUpdateManyAndReturnArgs>(args: SelectSubset<T, FiscalEventInboxUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FiscalEventInboxPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FiscalEventInbox.
     * @param {FiscalEventInboxUpsertArgs} args - Arguments to update or create a FiscalEventInbox.
     * @example
     * // Update or create a FiscalEventInbox
     * const fiscalEventInbox = await prisma.fiscalEventInbox.upsert({
     *   create: {
     *     // ... data to create a FiscalEventInbox
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FiscalEventInbox we want to update
     *   }
     * })
     */
    upsert<T extends FiscalEventInboxUpsertArgs>(args: SelectSubset<T, FiscalEventInboxUpsertArgs<ExtArgs>>): Prisma__FiscalEventInboxClient<$Result.GetResult<Prisma.$FiscalEventInboxPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FiscalEventInboxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FiscalEventInboxCountArgs} args - Arguments to filter FiscalEventInboxes to count.
     * @example
     * // Count the number of FiscalEventInboxes
     * const count = await prisma.fiscalEventInbox.count({
     *   where: {
     *     // ... the filter for the FiscalEventInboxes we want to count
     *   }
     * })
    **/
    count<T extends FiscalEventInboxCountArgs>(
      args?: Subset<T, FiscalEventInboxCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FiscalEventInboxCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FiscalEventInbox.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FiscalEventInboxAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FiscalEventInboxAggregateArgs>(args: Subset<T, FiscalEventInboxAggregateArgs>): Prisma.PrismaPromise<GetFiscalEventInboxAggregateType<T>>

    /**
     * Group by FiscalEventInbox.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FiscalEventInboxGroupByArgs} args - Group by arguments.
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
      T extends FiscalEventInboxGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FiscalEventInboxGroupByArgs['orderBy'] }
        : { orderBy?: FiscalEventInboxGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FiscalEventInboxGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFiscalEventInboxGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FiscalEventInbox model
   */
  readonly fields: FiscalEventInboxFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FiscalEventInbox.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FiscalEventInboxClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the FiscalEventInbox model
   */
  interface FiscalEventInboxFieldRefs {
    readonly eventId: FieldRef<"FiscalEventInbox", 'String'>
    readonly receivedAt: FieldRef<"FiscalEventInbox", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FiscalEventInbox findUnique
   */
  export type FiscalEventInboxFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FiscalEventInbox
     */
    select?: FiscalEventInboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FiscalEventInbox
     */
    omit?: FiscalEventInboxOmit<ExtArgs> | null
    /**
     * Filter, which FiscalEventInbox to fetch.
     */
    where: FiscalEventInboxWhereUniqueInput
  }

  /**
   * FiscalEventInbox findUniqueOrThrow
   */
  export type FiscalEventInboxFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FiscalEventInbox
     */
    select?: FiscalEventInboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FiscalEventInbox
     */
    omit?: FiscalEventInboxOmit<ExtArgs> | null
    /**
     * Filter, which FiscalEventInbox to fetch.
     */
    where: FiscalEventInboxWhereUniqueInput
  }

  /**
   * FiscalEventInbox findFirst
   */
  export type FiscalEventInboxFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FiscalEventInbox
     */
    select?: FiscalEventInboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FiscalEventInbox
     */
    omit?: FiscalEventInboxOmit<ExtArgs> | null
    /**
     * Filter, which FiscalEventInbox to fetch.
     */
    where?: FiscalEventInboxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FiscalEventInboxes to fetch.
     */
    orderBy?: FiscalEventInboxOrderByWithRelationInput | FiscalEventInboxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FiscalEventInboxes.
     */
    cursor?: FiscalEventInboxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FiscalEventInboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FiscalEventInboxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FiscalEventInboxes.
     */
    distinct?: FiscalEventInboxScalarFieldEnum | FiscalEventInboxScalarFieldEnum[]
  }

  /**
   * FiscalEventInbox findFirstOrThrow
   */
  export type FiscalEventInboxFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FiscalEventInbox
     */
    select?: FiscalEventInboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FiscalEventInbox
     */
    omit?: FiscalEventInboxOmit<ExtArgs> | null
    /**
     * Filter, which FiscalEventInbox to fetch.
     */
    where?: FiscalEventInboxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FiscalEventInboxes to fetch.
     */
    orderBy?: FiscalEventInboxOrderByWithRelationInput | FiscalEventInboxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FiscalEventInboxes.
     */
    cursor?: FiscalEventInboxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FiscalEventInboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FiscalEventInboxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FiscalEventInboxes.
     */
    distinct?: FiscalEventInboxScalarFieldEnum | FiscalEventInboxScalarFieldEnum[]
  }

  /**
   * FiscalEventInbox findMany
   */
  export type FiscalEventInboxFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FiscalEventInbox
     */
    select?: FiscalEventInboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FiscalEventInbox
     */
    omit?: FiscalEventInboxOmit<ExtArgs> | null
    /**
     * Filter, which FiscalEventInboxes to fetch.
     */
    where?: FiscalEventInboxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FiscalEventInboxes to fetch.
     */
    orderBy?: FiscalEventInboxOrderByWithRelationInput | FiscalEventInboxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FiscalEventInboxes.
     */
    cursor?: FiscalEventInboxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FiscalEventInboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FiscalEventInboxes.
     */
    skip?: number
    distinct?: FiscalEventInboxScalarFieldEnum | FiscalEventInboxScalarFieldEnum[]
  }

  /**
   * FiscalEventInbox create
   */
  export type FiscalEventInboxCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FiscalEventInbox
     */
    select?: FiscalEventInboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FiscalEventInbox
     */
    omit?: FiscalEventInboxOmit<ExtArgs> | null
    /**
     * The data needed to create a FiscalEventInbox.
     */
    data: XOR<FiscalEventInboxCreateInput, FiscalEventInboxUncheckedCreateInput>
  }

  /**
   * FiscalEventInbox createMany
   */
  export type FiscalEventInboxCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FiscalEventInboxes.
     */
    data: FiscalEventInboxCreateManyInput | FiscalEventInboxCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FiscalEventInbox createManyAndReturn
   */
  export type FiscalEventInboxCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FiscalEventInbox
     */
    select?: FiscalEventInboxSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FiscalEventInbox
     */
    omit?: FiscalEventInboxOmit<ExtArgs> | null
    /**
     * The data used to create many FiscalEventInboxes.
     */
    data: FiscalEventInboxCreateManyInput | FiscalEventInboxCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FiscalEventInbox update
   */
  export type FiscalEventInboxUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FiscalEventInbox
     */
    select?: FiscalEventInboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FiscalEventInbox
     */
    omit?: FiscalEventInboxOmit<ExtArgs> | null
    /**
     * The data needed to update a FiscalEventInbox.
     */
    data: XOR<FiscalEventInboxUpdateInput, FiscalEventInboxUncheckedUpdateInput>
    /**
     * Choose, which FiscalEventInbox to update.
     */
    where: FiscalEventInboxWhereUniqueInput
  }

  /**
   * FiscalEventInbox updateMany
   */
  export type FiscalEventInboxUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FiscalEventInboxes.
     */
    data: XOR<FiscalEventInboxUpdateManyMutationInput, FiscalEventInboxUncheckedUpdateManyInput>
    /**
     * Filter which FiscalEventInboxes to update
     */
    where?: FiscalEventInboxWhereInput
    /**
     * Limit how many FiscalEventInboxes to update.
     */
    limit?: number
  }

  /**
   * FiscalEventInbox updateManyAndReturn
   */
  export type FiscalEventInboxUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FiscalEventInbox
     */
    select?: FiscalEventInboxSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FiscalEventInbox
     */
    omit?: FiscalEventInboxOmit<ExtArgs> | null
    /**
     * The data used to update FiscalEventInboxes.
     */
    data: XOR<FiscalEventInboxUpdateManyMutationInput, FiscalEventInboxUncheckedUpdateManyInput>
    /**
     * Filter which FiscalEventInboxes to update
     */
    where?: FiscalEventInboxWhereInput
    /**
     * Limit how many FiscalEventInboxes to update.
     */
    limit?: number
  }

  /**
   * FiscalEventInbox upsert
   */
  export type FiscalEventInboxUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FiscalEventInbox
     */
    select?: FiscalEventInboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FiscalEventInbox
     */
    omit?: FiscalEventInboxOmit<ExtArgs> | null
    /**
     * The filter to search for the FiscalEventInbox to update in case it exists.
     */
    where: FiscalEventInboxWhereUniqueInput
    /**
     * In case the FiscalEventInbox found by the `where` argument doesn't exist, create a new FiscalEventInbox with this data.
     */
    create: XOR<FiscalEventInboxCreateInput, FiscalEventInboxUncheckedCreateInput>
    /**
     * In case the FiscalEventInbox was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FiscalEventInboxUpdateInput, FiscalEventInboxUncheckedUpdateInput>
  }

  /**
   * FiscalEventInbox delete
   */
  export type FiscalEventInboxDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FiscalEventInbox
     */
    select?: FiscalEventInboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FiscalEventInbox
     */
    omit?: FiscalEventInboxOmit<ExtArgs> | null
    /**
     * Filter which FiscalEventInbox to delete.
     */
    where: FiscalEventInboxWhereUniqueInput
  }

  /**
   * FiscalEventInbox deleteMany
   */
  export type FiscalEventInboxDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FiscalEventInboxes to delete
     */
    where?: FiscalEventInboxWhereInput
    /**
     * Limit how many FiscalEventInboxes to delete.
     */
    limit?: number
  }

  /**
   * FiscalEventInbox without action
   */
  export type FiscalEventInboxDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FiscalEventInbox
     */
    select?: FiscalEventInboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FiscalEventInbox
     */
    omit?: FiscalEventInboxOmit<ExtArgs> | null
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


  export const ProductScalarFieldEnum: {
    id: 'id',
    workspaceId: 'workspaceId',
    name: 'name',
    unit: 'unit',
    price: 'price',
    ncm: 'ncm',
    cest: 'cest',
    origin: 'origin',
    fiscalProfileId: 'fiscalProfileId',
    createdAt: 'createdAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const FinancialEntryScalarFieldEnum: {
    id: 'id',
    workspaceId: 'workspaceId',
    kind: 'kind',
    description: 'description',
    amount: 'amount',
    dueDate: 'dueDate',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type FinancialEntryScalarFieldEnum = (typeof FinancialEntryScalarFieldEnum)[keyof typeof FinancialEntryScalarFieldEnum]


  export const NotaFiscalRefScalarFieldEnum: {
    id: 'id',
    workspaceId: 'workspaceId',
    fiscalInvoiceId: 'fiscalInvoiceId',
    emitterId: 'emitterId',
    emitterCnpj: 'emitterCnpj',
    emitterName: 'emitterName',
    recipientName: 'recipientName',
    status: 'status',
    number: 'number',
    series: 'series',
    accessKey: 'accessKey',
    totalValue: 'totalValue',
    rejectionMessage: 'rejectionMessage',
    authorizedAt: 'authorizedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NotaFiscalRefScalarFieldEnum = (typeof NotaFiscalRefScalarFieldEnum)[keyof typeof NotaFiscalRefScalarFieldEnum]


  export const FinancialEntryNotaScalarFieldEnum: {
    financialEntryId: 'financialEntryId',
    notaFiscalRefId: 'notaFiscalRefId',
    createdAt: 'createdAt'
  };

  export type FinancialEntryNotaScalarFieldEnum = (typeof FinancialEntryNotaScalarFieldEnum)[keyof typeof FinancialEntryNotaScalarFieldEnum]


  export const FiscalEventInboxScalarFieldEnum: {
    eventId: 'eventId',
    receivedAt: 'receivedAt'
  };

  export type FiscalEventInboxScalarFieldEnum = (typeof FiscalEventInboxScalarFieldEnum)[keyof typeof FiscalEventInboxScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'EntryKind'
   */
  export type EnumEntryKindFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EntryKind'>
    


  /**
   * Reference to a field of type 'EntryKind[]'
   */
  export type ListEnumEntryKindFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EntryKind[]'>
    


  /**
   * Reference to a field of type 'EntryStatus'
   */
  export type EnumEntryStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EntryStatus'>
    


  /**
   * Reference to a field of type 'EntryStatus[]'
   */
  export type ListEnumEntryStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EntryStatus[]'>
    


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


  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: UuidFilter<"Product"> | string
    workspaceId?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    unit?: StringFilter<"Product"> | string
    price?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    ncm?: StringFilter<"Product"> | string
    cest?: StringNullableFilter<"Product"> | string | null
    origin?: IntFilter<"Product"> | number
    fiscalProfileId?: StringNullableFilter<"Product"> | string | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    name?: SortOrder
    unit?: SortOrder
    price?: SortOrder
    ncm?: SortOrder
    cest?: SortOrderInput | SortOrder
    origin?: SortOrder
    fiscalProfileId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    workspaceId?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    unit?: StringFilter<"Product"> | string
    price?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    ncm?: StringFilter<"Product"> | string
    cest?: StringNullableFilter<"Product"> | string | null
    origin?: IntFilter<"Product"> | number
    fiscalProfileId?: StringNullableFilter<"Product"> | string | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
  }, "id">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    name?: SortOrder
    unit?: SortOrder
    price?: SortOrder
    ncm?: SortOrder
    cest?: SortOrderInput | SortOrder
    origin?: SortOrder
    fiscalProfileId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Product"> | string
    workspaceId?: StringWithAggregatesFilter<"Product"> | string
    name?: StringWithAggregatesFilter<"Product"> | string
    unit?: StringWithAggregatesFilter<"Product"> | string
    price?: DecimalWithAggregatesFilter<"Product"> | Decimal | DecimalJsLike | number | string
    ncm?: StringWithAggregatesFilter<"Product"> | string
    cest?: StringNullableWithAggregatesFilter<"Product"> | string | null
    origin?: IntWithAggregatesFilter<"Product"> | number
    fiscalProfileId?: StringNullableWithAggregatesFilter<"Product"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type FinancialEntryWhereInput = {
    AND?: FinancialEntryWhereInput | FinancialEntryWhereInput[]
    OR?: FinancialEntryWhereInput[]
    NOT?: FinancialEntryWhereInput | FinancialEntryWhereInput[]
    id?: UuidFilter<"FinancialEntry"> | string
    workspaceId?: StringFilter<"FinancialEntry"> | string
    kind?: EnumEntryKindFilter<"FinancialEntry"> | $Enums.EntryKind
    description?: StringFilter<"FinancialEntry"> | string
    amount?: DecimalFilter<"FinancialEntry"> | Decimal | DecimalJsLike | number | string
    dueDate?: DateTimeFilter<"FinancialEntry"> | Date | string
    status?: EnumEntryStatusFilter<"FinancialEntry"> | $Enums.EntryStatus
    createdAt?: DateTimeFilter<"FinancialEntry"> | Date | string
    notas?: FinancialEntryNotaListRelationFilter
  }

  export type FinancialEntryOrderByWithRelationInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    kind?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    dueDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    notas?: FinancialEntryNotaOrderByRelationAggregateInput
  }

  export type FinancialEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FinancialEntryWhereInput | FinancialEntryWhereInput[]
    OR?: FinancialEntryWhereInput[]
    NOT?: FinancialEntryWhereInput | FinancialEntryWhereInput[]
    workspaceId?: StringFilter<"FinancialEntry"> | string
    kind?: EnumEntryKindFilter<"FinancialEntry"> | $Enums.EntryKind
    description?: StringFilter<"FinancialEntry"> | string
    amount?: DecimalFilter<"FinancialEntry"> | Decimal | DecimalJsLike | number | string
    dueDate?: DateTimeFilter<"FinancialEntry"> | Date | string
    status?: EnumEntryStatusFilter<"FinancialEntry"> | $Enums.EntryStatus
    createdAt?: DateTimeFilter<"FinancialEntry"> | Date | string
    notas?: FinancialEntryNotaListRelationFilter
  }, "id">

  export type FinancialEntryOrderByWithAggregationInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    kind?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    dueDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: FinancialEntryCountOrderByAggregateInput
    _avg?: FinancialEntryAvgOrderByAggregateInput
    _max?: FinancialEntryMaxOrderByAggregateInput
    _min?: FinancialEntryMinOrderByAggregateInput
    _sum?: FinancialEntrySumOrderByAggregateInput
  }

  export type FinancialEntryScalarWhereWithAggregatesInput = {
    AND?: FinancialEntryScalarWhereWithAggregatesInput | FinancialEntryScalarWhereWithAggregatesInput[]
    OR?: FinancialEntryScalarWhereWithAggregatesInput[]
    NOT?: FinancialEntryScalarWhereWithAggregatesInput | FinancialEntryScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"FinancialEntry"> | string
    workspaceId?: StringWithAggregatesFilter<"FinancialEntry"> | string
    kind?: EnumEntryKindWithAggregatesFilter<"FinancialEntry"> | $Enums.EntryKind
    description?: StringWithAggregatesFilter<"FinancialEntry"> | string
    amount?: DecimalWithAggregatesFilter<"FinancialEntry"> | Decimal | DecimalJsLike | number | string
    dueDate?: DateTimeWithAggregatesFilter<"FinancialEntry"> | Date | string
    status?: EnumEntryStatusWithAggregatesFilter<"FinancialEntry"> | $Enums.EntryStatus
    createdAt?: DateTimeWithAggregatesFilter<"FinancialEntry"> | Date | string
  }

  export type NotaFiscalRefWhereInput = {
    AND?: NotaFiscalRefWhereInput | NotaFiscalRefWhereInput[]
    OR?: NotaFiscalRefWhereInput[]
    NOT?: NotaFiscalRefWhereInput | NotaFiscalRefWhereInput[]
    id?: UuidFilter<"NotaFiscalRef"> | string
    workspaceId?: StringFilter<"NotaFiscalRef"> | string
    fiscalInvoiceId?: StringFilter<"NotaFiscalRef"> | string
    emitterId?: StringFilter<"NotaFiscalRef"> | string
    emitterCnpj?: StringFilter<"NotaFiscalRef"> | string
    emitterName?: StringFilter<"NotaFiscalRef"> | string
    recipientName?: StringFilter<"NotaFiscalRef"> | string
    status?: StringFilter<"NotaFiscalRef"> | string
    number?: IntNullableFilter<"NotaFiscalRef"> | number | null
    series?: IntNullableFilter<"NotaFiscalRef"> | number | null
    accessKey?: StringNullableFilter<"NotaFiscalRef"> | string | null
    totalValue?: DecimalFilter<"NotaFiscalRef"> | Decimal | DecimalJsLike | number | string
    rejectionMessage?: StringNullableFilter<"NotaFiscalRef"> | string | null
    authorizedAt?: DateTimeNullableFilter<"NotaFiscalRef"> | Date | string | null
    createdAt?: DateTimeFilter<"NotaFiscalRef"> | Date | string
    updatedAt?: DateTimeFilter<"NotaFiscalRef"> | Date | string
    financialLinks?: FinancialEntryNotaListRelationFilter
  }

  export type NotaFiscalRefOrderByWithRelationInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    fiscalInvoiceId?: SortOrder
    emitterId?: SortOrder
    emitterCnpj?: SortOrder
    emitterName?: SortOrder
    recipientName?: SortOrder
    status?: SortOrder
    number?: SortOrderInput | SortOrder
    series?: SortOrderInput | SortOrder
    accessKey?: SortOrderInput | SortOrder
    totalValue?: SortOrder
    rejectionMessage?: SortOrderInput | SortOrder
    authorizedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    financialLinks?: FinancialEntryNotaOrderByRelationAggregateInput
  }

  export type NotaFiscalRefWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    fiscalInvoiceId?: string
    AND?: NotaFiscalRefWhereInput | NotaFiscalRefWhereInput[]
    OR?: NotaFiscalRefWhereInput[]
    NOT?: NotaFiscalRefWhereInput | NotaFiscalRefWhereInput[]
    workspaceId?: StringFilter<"NotaFiscalRef"> | string
    emitterId?: StringFilter<"NotaFiscalRef"> | string
    emitterCnpj?: StringFilter<"NotaFiscalRef"> | string
    emitterName?: StringFilter<"NotaFiscalRef"> | string
    recipientName?: StringFilter<"NotaFiscalRef"> | string
    status?: StringFilter<"NotaFiscalRef"> | string
    number?: IntNullableFilter<"NotaFiscalRef"> | number | null
    series?: IntNullableFilter<"NotaFiscalRef"> | number | null
    accessKey?: StringNullableFilter<"NotaFiscalRef"> | string | null
    totalValue?: DecimalFilter<"NotaFiscalRef"> | Decimal | DecimalJsLike | number | string
    rejectionMessage?: StringNullableFilter<"NotaFiscalRef"> | string | null
    authorizedAt?: DateTimeNullableFilter<"NotaFiscalRef"> | Date | string | null
    createdAt?: DateTimeFilter<"NotaFiscalRef"> | Date | string
    updatedAt?: DateTimeFilter<"NotaFiscalRef"> | Date | string
    financialLinks?: FinancialEntryNotaListRelationFilter
  }, "id" | "fiscalInvoiceId">

  export type NotaFiscalRefOrderByWithAggregationInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    fiscalInvoiceId?: SortOrder
    emitterId?: SortOrder
    emitterCnpj?: SortOrder
    emitterName?: SortOrder
    recipientName?: SortOrder
    status?: SortOrder
    number?: SortOrderInput | SortOrder
    series?: SortOrderInput | SortOrder
    accessKey?: SortOrderInput | SortOrder
    totalValue?: SortOrder
    rejectionMessage?: SortOrderInput | SortOrder
    authorizedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NotaFiscalRefCountOrderByAggregateInput
    _avg?: NotaFiscalRefAvgOrderByAggregateInput
    _max?: NotaFiscalRefMaxOrderByAggregateInput
    _min?: NotaFiscalRefMinOrderByAggregateInput
    _sum?: NotaFiscalRefSumOrderByAggregateInput
  }

  export type NotaFiscalRefScalarWhereWithAggregatesInput = {
    AND?: NotaFiscalRefScalarWhereWithAggregatesInput | NotaFiscalRefScalarWhereWithAggregatesInput[]
    OR?: NotaFiscalRefScalarWhereWithAggregatesInput[]
    NOT?: NotaFiscalRefScalarWhereWithAggregatesInput | NotaFiscalRefScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"NotaFiscalRef"> | string
    workspaceId?: StringWithAggregatesFilter<"NotaFiscalRef"> | string
    fiscalInvoiceId?: StringWithAggregatesFilter<"NotaFiscalRef"> | string
    emitterId?: StringWithAggregatesFilter<"NotaFiscalRef"> | string
    emitterCnpj?: StringWithAggregatesFilter<"NotaFiscalRef"> | string
    emitterName?: StringWithAggregatesFilter<"NotaFiscalRef"> | string
    recipientName?: StringWithAggregatesFilter<"NotaFiscalRef"> | string
    status?: StringWithAggregatesFilter<"NotaFiscalRef"> | string
    number?: IntNullableWithAggregatesFilter<"NotaFiscalRef"> | number | null
    series?: IntNullableWithAggregatesFilter<"NotaFiscalRef"> | number | null
    accessKey?: StringNullableWithAggregatesFilter<"NotaFiscalRef"> | string | null
    totalValue?: DecimalWithAggregatesFilter<"NotaFiscalRef"> | Decimal | DecimalJsLike | number | string
    rejectionMessage?: StringNullableWithAggregatesFilter<"NotaFiscalRef"> | string | null
    authorizedAt?: DateTimeNullableWithAggregatesFilter<"NotaFiscalRef"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"NotaFiscalRef"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"NotaFiscalRef"> | Date | string
  }

  export type FinancialEntryNotaWhereInput = {
    AND?: FinancialEntryNotaWhereInput | FinancialEntryNotaWhereInput[]
    OR?: FinancialEntryNotaWhereInput[]
    NOT?: FinancialEntryNotaWhereInput | FinancialEntryNotaWhereInput[]
    financialEntryId?: UuidFilter<"FinancialEntryNota"> | string
    notaFiscalRefId?: UuidFilter<"FinancialEntryNota"> | string
    createdAt?: DateTimeFilter<"FinancialEntryNota"> | Date | string
    financialEntry?: XOR<FinancialEntryScalarRelationFilter, FinancialEntryWhereInput>
    notaFiscalRef?: XOR<NotaFiscalRefScalarRelationFilter, NotaFiscalRefWhereInput>
  }

  export type FinancialEntryNotaOrderByWithRelationInput = {
    financialEntryId?: SortOrder
    notaFiscalRefId?: SortOrder
    createdAt?: SortOrder
    financialEntry?: FinancialEntryOrderByWithRelationInput
    notaFiscalRef?: NotaFiscalRefOrderByWithRelationInput
  }

  export type FinancialEntryNotaWhereUniqueInput = Prisma.AtLeast<{
    financialEntryId_notaFiscalRefId?: FinancialEntryNotaFinancialEntryIdNotaFiscalRefIdCompoundUniqueInput
    AND?: FinancialEntryNotaWhereInput | FinancialEntryNotaWhereInput[]
    OR?: FinancialEntryNotaWhereInput[]
    NOT?: FinancialEntryNotaWhereInput | FinancialEntryNotaWhereInput[]
    financialEntryId?: UuidFilter<"FinancialEntryNota"> | string
    notaFiscalRefId?: UuidFilter<"FinancialEntryNota"> | string
    createdAt?: DateTimeFilter<"FinancialEntryNota"> | Date | string
    financialEntry?: XOR<FinancialEntryScalarRelationFilter, FinancialEntryWhereInput>
    notaFiscalRef?: XOR<NotaFiscalRefScalarRelationFilter, NotaFiscalRefWhereInput>
  }, "financialEntryId_notaFiscalRefId">

  export type FinancialEntryNotaOrderByWithAggregationInput = {
    financialEntryId?: SortOrder
    notaFiscalRefId?: SortOrder
    createdAt?: SortOrder
    _count?: FinancialEntryNotaCountOrderByAggregateInput
    _max?: FinancialEntryNotaMaxOrderByAggregateInput
    _min?: FinancialEntryNotaMinOrderByAggregateInput
  }

  export type FinancialEntryNotaScalarWhereWithAggregatesInput = {
    AND?: FinancialEntryNotaScalarWhereWithAggregatesInput | FinancialEntryNotaScalarWhereWithAggregatesInput[]
    OR?: FinancialEntryNotaScalarWhereWithAggregatesInput[]
    NOT?: FinancialEntryNotaScalarWhereWithAggregatesInput | FinancialEntryNotaScalarWhereWithAggregatesInput[]
    financialEntryId?: UuidWithAggregatesFilter<"FinancialEntryNota"> | string
    notaFiscalRefId?: UuidWithAggregatesFilter<"FinancialEntryNota"> | string
    createdAt?: DateTimeWithAggregatesFilter<"FinancialEntryNota"> | Date | string
  }

  export type FiscalEventInboxWhereInput = {
    AND?: FiscalEventInboxWhereInput | FiscalEventInboxWhereInput[]
    OR?: FiscalEventInboxWhereInput[]
    NOT?: FiscalEventInboxWhereInput | FiscalEventInboxWhereInput[]
    eventId?: StringFilter<"FiscalEventInbox"> | string
    receivedAt?: DateTimeFilter<"FiscalEventInbox"> | Date | string
  }

  export type FiscalEventInboxOrderByWithRelationInput = {
    eventId?: SortOrder
    receivedAt?: SortOrder
  }

  export type FiscalEventInboxWhereUniqueInput = Prisma.AtLeast<{
    eventId?: string
    AND?: FiscalEventInboxWhereInput | FiscalEventInboxWhereInput[]
    OR?: FiscalEventInboxWhereInput[]
    NOT?: FiscalEventInboxWhereInput | FiscalEventInboxWhereInput[]
    receivedAt?: DateTimeFilter<"FiscalEventInbox"> | Date | string
  }, "eventId">

  export type FiscalEventInboxOrderByWithAggregationInput = {
    eventId?: SortOrder
    receivedAt?: SortOrder
    _count?: FiscalEventInboxCountOrderByAggregateInput
    _max?: FiscalEventInboxMaxOrderByAggregateInput
    _min?: FiscalEventInboxMinOrderByAggregateInput
  }

  export type FiscalEventInboxScalarWhereWithAggregatesInput = {
    AND?: FiscalEventInboxScalarWhereWithAggregatesInput | FiscalEventInboxScalarWhereWithAggregatesInput[]
    OR?: FiscalEventInboxScalarWhereWithAggregatesInput[]
    NOT?: FiscalEventInboxScalarWhereWithAggregatesInput | FiscalEventInboxScalarWhereWithAggregatesInput[]
    eventId?: StringWithAggregatesFilter<"FiscalEventInbox"> | string
    receivedAt?: DateTimeWithAggregatesFilter<"FiscalEventInbox"> | Date | string
  }

  export type ProductCreateInput = {
    id?: string
    workspaceId: string
    name: string
    unit: string
    price: Decimal | DecimalJsLike | number | string
    ncm: string
    cest?: string | null
    origin: number
    fiscalProfileId?: string | null
    createdAt?: Date | string
  }

  export type ProductUncheckedCreateInput = {
    id?: string
    workspaceId: string
    name: string
    unit: string
    price: Decimal | DecimalJsLike | number | string
    ncm: string
    cest?: string | null
    origin: number
    fiscalProfileId?: string | null
    createdAt?: Date | string
  }

  export type ProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ncm?: StringFieldUpdateOperationsInput | string
    cest?: NullableStringFieldUpdateOperationsInput | string | null
    origin?: IntFieldUpdateOperationsInput | number
    fiscalProfileId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ncm?: StringFieldUpdateOperationsInput | string
    cest?: NullableStringFieldUpdateOperationsInput | string | null
    origin?: IntFieldUpdateOperationsInput | number
    fiscalProfileId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateManyInput = {
    id?: string
    workspaceId: string
    name: string
    unit: string
    price: Decimal | DecimalJsLike | number | string
    ncm: string
    cest?: string | null
    origin: number
    fiscalProfileId?: string | null
    createdAt?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ncm?: StringFieldUpdateOperationsInput | string
    cest?: NullableStringFieldUpdateOperationsInput | string | null
    origin?: IntFieldUpdateOperationsInput | number
    fiscalProfileId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ncm?: StringFieldUpdateOperationsInput | string
    cest?: NullableStringFieldUpdateOperationsInput | string | null
    origin?: IntFieldUpdateOperationsInput | number
    fiscalProfileId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinancialEntryCreateInput = {
    id?: string
    workspaceId: string
    kind: $Enums.EntryKind
    description: string
    amount: Decimal | DecimalJsLike | number | string
    dueDate: Date | string
    status?: $Enums.EntryStatus
    createdAt?: Date | string
    notas?: FinancialEntryNotaCreateNestedManyWithoutFinancialEntryInput
  }

  export type FinancialEntryUncheckedCreateInput = {
    id?: string
    workspaceId: string
    kind: $Enums.EntryKind
    description: string
    amount: Decimal | DecimalJsLike | number | string
    dueDate: Date | string
    status?: $Enums.EntryStatus
    createdAt?: Date | string
    notas?: FinancialEntryNotaUncheckedCreateNestedManyWithoutFinancialEntryInput
  }

  export type FinancialEntryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    kind?: EnumEntryKindFieldUpdateOperationsInput | $Enums.EntryKind
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumEntryStatusFieldUpdateOperationsInput | $Enums.EntryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notas?: FinancialEntryNotaUpdateManyWithoutFinancialEntryNestedInput
  }

  export type FinancialEntryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    kind?: EnumEntryKindFieldUpdateOperationsInput | $Enums.EntryKind
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumEntryStatusFieldUpdateOperationsInput | $Enums.EntryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notas?: FinancialEntryNotaUncheckedUpdateManyWithoutFinancialEntryNestedInput
  }

  export type FinancialEntryCreateManyInput = {
    id?: string
    workspaceId: string
    kind: $Enums.EntryKind
    description: string
    amount: Decimal | DecimalJsLike | number | string
    dueDate: Date | string
    status?: $Enums.EntryStatus
    createdAt?: Date | string
  }

  export type FinancialEntryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    kind?: EnumEntryKindFieldUpdateOperationsInput | $Enums.EntryKind
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumEntryStatusFieldUpdateOperationsInput | $Enums.EntryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinancialEntryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    kind?: EnumEntryKindFieldUpdateOperationsInput | $Enums.EntryKind
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumEntryStatusFieldUpdateOperationsInput | $Enums.EntryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotaFiscalRefCreateInput = {
    id?: string
    workspaceId: string
    fiscalInvoiceId: string
    emitterId: string
    emitterCnpj: string
    emitterName: string
    recipientName: string
    status: string
    number?: number | null
    series?: number | null
    accessKey?: string | null
    totalValue: Decimal | DecimalJsLike | number | string
    rejectionMessage?: string | null
    authorizedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    financialLinks?: FinancialEntryNotaCreateNestedManyWithoutNotaFiscalRefInput
  }

  export type NotaFiscalRefUncheckedCreateInput = {
    id?: string
    workspaceId: string
    fiscalInvoiceId: string
    emitterId: string
    emitterCnpj: string
    emitterName: string
    recipientName: string
    status: string
    number?: number | null
    series?: number | null
    accessKey?: string | null
    totalValue: Decimal | DecimalJsLike | number | string
    rejectionMessage?: string | null
    authorizedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    financialLinks?: FinancialEntryNotaUncheckedCreateNestedManyWithoutNotaFiscalRefInput
  }

  export type NotaFiscalRefUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    fiscalInvoiceId?: StringFieldUpdateOperationsInput | string
    emitterId?: StringFieldUpdateOperationsInput | string
    emitterCnpj?: StringFieldUpdateOperationsInput | string
    emitterName?: StringFieldUpdateOperationsInput | string
    recipientName?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    number?: NullableIntFieldUpdateOperationsInput | number | null
    series?: NullableIntFieldUpdateOperationsInput | number | null
    accessKey?: NullableStringFieldUpdateOperationsInput | string | null
    totalValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rejectionMessage?: NullableStringFieldUpdateOperationsInput | string | null
    authorizedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    financialLinks?: FinancialEntryNotaUpdateManyWithoutNotaFiscalRefNestedInput
  }

  export type NotaFiscalRefUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    fiscalInvoiceId?: StringFieldUpdateOperationsInput | string
    emitterId?: StringFieldUpdateOperationsInput | string
    emitterCnpj?: StringFieldUpdateOperationsInput | string
    emitterName?: StringFieldUpdateOperationsInput | string
    recipientName?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    number?: NullableIntFieldUpdateOperationsInput | number | null
    series?: NullableIntFieldUpdateOperationsInput | number | null
    accessKey?: NullableStringFieldUpdateOperationsInput | string | null
    totalValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rejectionMessage?: NullableStringFieldUpdateOperationsInput | string | null
    authorizedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    financialLinks?: FinancialEntryNotaUncheckedUpdateManyWithoutNotaFiscalRefNestedInput
  }

  export type NotaFiscalRefCreateManyInput = {
    id?: string
    workspaceId: string
    fiscalInvoiceId: string
    emitterId: string
    emitterCnpj: string
    emitterName: string
    recipientName: string
    status: string
    number?: number | null
    series?: number | null
    accessKey?: string | null
    totalValue: Decimal | DecimalJsLike | number | string
    rejectionMessage?: string | null
    authorizedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotaFiscalRefUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    fiscalInvoiceId?: StringFieldUpdateOperationsInput | string
    emitterId?: StringFieldUpdateOperationsInput | string
    emitterCnpj?: StringFieldUpdateOperationsInput | string
    emitterName?: StringFieldUpdateOperationsInput | string
    recipientName?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    number?: NullableIntFieldUpdateOperationsInput | number | null
    series?: NullableIntFieldUpdateOperationsInput | number | null
    accessKey?: NullableStringFieldUpdateOperationsInput | string | null
    totalValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rejectionMessage?: NullableStringFieldUpdateOperationsInput | string | null
    authorizedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotaFiscalRefUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    fiscalInvoiceId?: StringFieldUpdateOperationsInput | string
    emitterId?: StringFieldUpdateOperationsInput | string
    emitterCnpj?: StringFieldUpdateOperationsInput | string
    emitterName?: StringFieldUpdateOperationsInput | string
    recipientName?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    number?: NullableIntFieldUpdateOperationsInput | number | null
    series?: NullableIntFieldUpdateOperationsInput | number | null
    accessKey?: NullableStringFieldUpdateOperationsInput | string | null
    totalValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rejectionMessage?: NullableStringFieldUpdateOperationsInput | string | null
    authorizedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinancialEntryNotaCreateInput = {
    createdAt?: Date | string
    financialEntry: FinancialEntryCreateNestedOneWithoutNotasInput
    notaFiscalRef: NotaFiscalRefCreateNestedOneWithoutFinancialLinksInput
  }

  export type FinancialEntryNotaUncheckedCreateInput = {
    financialEntryId: string
    notaFiscalRefId: string
    createdAt?: Date | string
  }

  export type FinancialEntryNotaUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    financialEntry?: FinancialEntryUpdateOneRequiredWithoutNotasNestedInput
    notaFiscalRef?: NotaFiscalRefUpdateOneRequiredWithoutFinancialLinksNestedInput
  }

  export type FinancialEntryNotaUncheckedUpdateInput = {
    financialEntryId?: StringFieldUpdateOperationsInput | string
    notaFiscalRefId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinancialEntryNotaCreateManyInput = {
    financialEntryId: string
    notaFiscalRefId: string
    createdAt?: Date | string
  }

  export type FinancialEntryNotaUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinancialEntryNotaUncheckedUpdateManyInput = {
    financialEntryId?: StringFieldUpdateOperationsInput | string
    notaFiscalRefId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FiscalEventInboxCreateInput = {
    eventId: string
    receivedAt?: Date | string
  }

  export type FiscalEventInboxUncheckedCreateInput = {
    eventId: string
    receivedAt?: Date | string
  }

  export type FiscalEventInboxUpdateInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FiscalEventInboxUncheckedUpdateInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FiscalEventInboxCreateManyInput = {
    eventId: string
    receivedAt?: Date | string
  }

  export type FiscalEventInboxUpdateManyMutationInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FiscalEventInboxUncheckedUpdateManyInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    name?: SortOrder
    unit?: SortOrder
    price?: SortOrder
    ncm?: SortOrder
    cest?: SortOrder
    origin?: SortOrder
    fiscalProfileId?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    price?: SortOrder
    origin?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    name?: SortOrder
    unit?: SortOrder
    price?: SortOrder
    ncm?: SortOrder
    cest?: SortOrder
    origin?: SortOrder
    fiscalProfileId?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    name?: SortOrder
    unit?: SortOrder
    price?: SortOrder
    ncm?: SortOrder
    cest?: SortOrder
    origin?: SortOrder
    fiscalProfileId?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    price?: SortOrder
    origin?: SortOrder
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

  export type EnumEntryKindFilter<$PrismaModel = never> = {
    equals?: $Enums.EntryKind | EnumEntryKindFieldRefInput<$PrismaModel>
    in?: $Enums.EntryKind[] | ListEnumEntryKindFieldRefInput<$PrismaModel>
    notIn?: $Enums.EntryKind[] | ListEnumEntryKindFieldRefInput<$PrismaModel>
    not?: NestedEnumEntryKindFilter<$PrismaModel> | $Enums.EntryKind
  }

  export type EnumEntryStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EntryStatus | EnumEntryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EntryStatus[] | ListEnumEntryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EntryStatus[] | ListEnumEntryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEntryStatusFilter<$PrismaModel> | $Enums.EntryStatus
  }

  export type FinancialEntryNotaListRelationFilter = {
    every?: FinancialEntryNotaWhereInput
    some?: FinancialEntryNotaWhereInput
    none?: FinancialEntryNotaWhereInput
  }

  export type FinancialEntryNotaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FinancialEntryCountOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    kind?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    dueDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type FinancialEntryAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type FinancialEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    kind?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    dueDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type FinancialEntryMinOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    kind?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    dueDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type FinancialEntrySumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumEntryKindWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EntryKind | EnumEntryKindFieldRefInput<$PrismaModel>
    in?: $Enums.EntryKind[] | ListEnumEntryKindFieldRefInput<$PrismaModel>
    notIn?: $Enums.EntryKind[] | ListEnumEntryKindFieldRefInput<$PrismaModel>
    not?: NestedEnumEntryKindWithAggregatesFilter<$PrismaModel> | $Enums.EntryKind
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEntryKindFilter<$PrismaModel>
    _max?: NestedEnumEntryKindFilter<$PrismaModel>
  }

  export type EnumEntryStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EntryStatus | EnumEntryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EntryStatus[] | ListEnumEntryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EntryStatus[] | ListEnumEntryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEntryStatusWithAggregatesFilter<$PrismaModel> | $Enums.EntryStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEntryStatusFilter<$PrismaModel>
    _max?: NestedEnumEntryStatusFilter<$PrismaModel>
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

  export type NotaFiscalRefCountOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    fiscalInvoiceId?: SortOrder
    emitterId?: SortOrder
    emitterCnpj?: SortOrder
    emitterName?: SortOrder
    recipientName?: SortOrder
    status?: SortOrder
    number?: SortOrder
    series?: SortOrder
    accessKey?: SortOrder
    totalValue?: SortOrder
    rejectionMessage?: SortOrder
    authorizedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotaFiscalRefAvgOrderByAggregateInput = {
    number?: SortOrder
    series?: SortOrder
    totalValue?: SortOrder
  }

  export type NotaFiscalRefMaxOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    fiscalInvoiceId?: SortOrder
    emitterId?: SortOrder
    emitterCnpj?: SortOrder
    emitterName?: SortOrder
    recipientName?: SortOrder
    status?: SortOrder
    number?: SortOrder
    series?: SortOrder
    accessKey?: SortOrder
    totalValue?: SortOrder
    rejectionMessage?: SortOrder
    authorizedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotaFiscalRefMinOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    fiscalInvoiceId?: SortOrder
    emitterId?: SortOrder
    emitterCnpj?: SortOrder
    emitterName?: SortOrder
    recipientName?: SortOrder
    status?: SortOrder
    number?: SortOrder
    series?: SortOrder
    accessKey?: SortOrder
    totalValue?: SortOrder
    rejectionMessage?: SortOrder
    authorizedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotaFiscalRefSumOrderByAggregateInput = {
    number?: SortOrder
    series?: SortOrder
    totalValue?: SortOrder
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

  export type FinancialEntryScalarRelationFilter = {
    is?: FinancialEntryWhereInput
    isNot?: FinancialEntryWhereInput
  }

  export type NotaFiscalRefScalarRelationFilter = {
    is?: NotaFiscalRefWhereInput
    isNot?: NotaFiscalRefWhereInput
  }

  export type FinancialEntryNotaFinancialEntryIdNotaFiscalRefIdCompoundUniqueInput = {
    financialEntryId: string
    notaFiscalRefId: string
  }

  export type FinancialEntryNotaCountOrderByAggregateInput = {
    financialEntryId?: SortOrder
    notaFiscalRefId?: SortOrder
    createdAt?: SortOrder
  }

  export type FinancialEntryNotaMaxOrderByAggregateInput = {
    financialEntryId?: SortOrder
    notaFiscalRefId?: SortOrder
    createdAt?: SortOrder
  }

  export type FinancialEntryNotaMinOrderByAggregateInput = {
    financialEntryId?: SortOrder
    notaFiscalRefId?: SortOrder
    createdAt?: SortOrder
  }

  export type FiscalEventInboxCountOrderByAggregateInput = {
    eventId?: SortOrder
    receivedAt?: SortOrder
  }

  export type FiscalEventInboxMaxOrderByAggregateInput = {
    eventId?: SortOrder
    receivedAt?: SortOrder
  }

  export type FiscalEventInboxMinOrderByAggregateInput = {
    eventId?: SortOrder
    receivedAt?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
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

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FinancialEntryNotaCreateNestedManyWithoutFinancialEntryInput = {
    create?: XOR<FinancialEntryNotaCreateWithoutFinancialEntryInput, FinancialEntryNotaUncheckedCreateWithoutFinancialEntryInput> | FinancialEntryNotaCreateWithoutFinancialEntryInput[] | FinancialEntryNotaUncheckedCreateWithoutFinancialEntryInput[]
    connectOrCreate?: FinancialEntryNotaCreateOrConnectWithoutFinancialEntryInput | FinancialEntryNotaCreateOrConnectWithoutFinancialEntryInput[]
    createMany?: FinancialEntryNotaCreateManyFinancialEntryInputEnvelope
    connect?: FinancialEntryNotaWhereUniqueInput | FinancialEntryNotaWhereUniqueInput[]
  }

  export type FinancialEntryNotaUncheckedCreateNestedManyWithoutFinancialEntryInput = {
    create?: XOR<FinancialEntryNotaCreateWithoutFinancialEntryInput, FinancialEntryNotaUncheckedCreateWithoutFinancialEntryInput> | FinancialEntryNotaCreateWithoutFinancialEntryInput[] | FinancialEntryNotaUncheckedCreateWithoutFinancialEntryInput[]
    connectOrCreate?: FinancialEntryNotaCreateOrConnectWithoutFinancialEntryInput | FinancialEntryNotaCreateOrConnectWithoutFinancialEntryInput[]
    createMany?: FinancialEntryNotaCreateManyFinancialEntryInputEnvelope
    connect?: FinancialEntryNotaWhereUniqueInput | FinancialEntryNotaWhereUniqueInput[]
  }

  export type EnumEntryKindFieldUpdateOperationsInput = {
    set?: $Enums.EntryKind
  }

  export type EnumEntryStatusFieldUpdateOperationsInput = {
    set?: $Enums.EntryStatus
  }

  export type FinancialEntryNotaUpdateManyWithoutFinancialEntryNestedInput = {
    create?: XOR<FinancialEntryNotaCreateWithoutFinancialEntryInput, FinancialEntryNotaUncheckedCreateWithoutFinancialEntryInput> | FinancialEntryNotaCreateWithoutFinancialEntryInput[] | FinancialEntryNotaUncheckedCreateWithoutFinancialEntryInput[]
    connectOrCreate?: FinancialEntryNotaCreateOrConnectWithoutFinancialEntryInput | FinancialEntryNotaCreateOrConnectWithoutFinancialEntryInput[]
    upsert?: FinancialEntryNotaUpsertWithWhereUniqueWithoutFinancialEntryInput | FinancialEntryNotaUpsertWithWhereUniqueWithoutFinancialEntryInput[]
    createMany?: FinancialEntryNotaCreateManyFinancialEntryInputEnvelope
    set?: FinancialEntryNotaWhereUniqueInput | FinancialEntryNotaWhereUniqueInput[]
    disconnect?: FinancialEntryNotaWhereUniqueInput | FinancialEntryNotaWhereUniqueInput[]
    delete?: FinancialEntryNotaWhereUniqueInput | FinancialEntryNotaWhereUniqueInput[]
    connect?: FinancialEntryNotaWhereUniqueInput | FinancialEntryNotaWhereUniqueInput[]
    update?: FinancialEntryNotaUpdateWithWhereUniqueWithoutFinancialEntryInput | FinancialEntryNotaUpdateWithWhereUniqueWithoutFinancialEntryInput[]
    updateMany?: FinancialEntryNotaUpdateManyWithWhereWithoutFinancialEntryInput | FinancialEntryNotaUpdateManyWithWhereWithoutFinancialEntryInput[]
    deleteMany?: FinancialEntryNotaScalarWhereInput | FinancialEntryNotaScalarWhereInput[]
  }

  export type FinancialEntryNotaUncheckedUpdateManyWithoutFinancialEntryNestedInput = {
    create?: XOR<FinancialEntryNotaCreateWithoutFinancialEntryInput, FinancialEntryNotaUncheckedCreateWithoutFinancialEntryInput> | FinancialEntryNotaCreateWithoutFinancialEntryInput[] | FinancialEntryNotaUncheckedCreateWithoutFinancialEntryInput[]
    connectOrCreate?: FinancialEntryNotaCreateOrConnectWithoutFinancialEntryInput | FinancialEntryNotaCreateOrConnectWithoutFinancialEntryInput[]
    upsert?: FinancialEntryNotaUpsertWithWhereUniqueWithoutFinancialEntryInput | FinancialEntryNotaUpsertWithWhereUniqueWithoutFinancialEntryInput[]
    createMany?: FinancialEntryNotaCreateManyFinancialEntryInputEnvelope
    set?: FinancialEntryNotaWhereUniqueInput | FinancialEntryNotaWhereUniqueInput[]
    disconnect?: FinancialEntryNotaWhereUniqueInput | FinancialEntryNotaWhereUniqueInput[]
    delete?: FinancialEntryNotaWhereUniqueInput | FinancialEntryNotaWhereUniqueInput[]
    connect?: FinancialEntryNotaWhereUniqueInput | FinancialEntryNotaWhereUniqueInput[]
    update?: FinancialEntryNotaUpdateWithWhereUniqueWithoutFinancialEntryInput | FinancialEntryNotaUpdateWithWhereUniqueWithoutFinancialEntryInput[]
    updateMany?: FinancialEntryNotaUpdateManyWithWhereWithoutFinancialEntryInput | FinancialEntryNotaUpdateManyWithWhereWithoutFinancialEntryInput[]
    deleteMany?: FinancialEntryNotaScalarWhereInput | FinancialEntryNotaScalarWhereInput[]
  }

  export type FinancialEntryNotaCreateNestedManyWithoutNotaFiscalRefInput = {
    create?: XOR<FinancialEntryNotaCreateWithoutNotaFiscalRefInput, FinancialEntryNotaUncheckedCreateWithoutNotaFiscalRefInput> | FinancialEntryNotaCreateWithoutNotaFiscalRefInput[] | FinancialEntryNotaUncheckedCreateWithoutNotaFiscalRefInput[]
    connectOrCreate?: FinancialEntryNotaCreateOrConnectWithoutNotaFiscalRefInput | FinancialEntryNotaCreateOrConnectWithoutNotaFiscalRefInput[]
    createMany?: FinancialEntryNotaCreateManyNotaFiscalRefInputEnvelope
    connect?: FinancialEntryNotaWhereUniqueInput | FinancialEntryNotaWhereUniqueInput[]
  }

  export type FinancialEntryNotaUncheckedCreateNestedManyWithoutNotaFiscalRefInput = {
    create?: XOR<FinancialEntryNotaCreateWithoutNotaFiscalRefInput, FinancialEntryNotaUncheckedCreateWithoutNotaFiscalRefInput> | FinancialEntryNotaCreateWithoutNotaFiscalRefInput[] | FinancialEntryNotaUncheckedCreateWithoutNotaFiscalRefInput[]
    connectOrCreate?: FinancialEntryNotaCreateOrConnectWithoutNotaFiscalRefInput | FinancialEntryNotaCreateOrConnectWithoutNotaFiscalRefInput[]
    createMany?: FinancialEntryNotaCreateManyNotaFiscalRefInputEnvelope
    connect?: FinancialEntryNotaWhereUniqueInput | FinancialEntryNotaWhereUniqueInput[]
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

  export type FinancialEntryNotaUpdateManyWithoutNotaFiscalRefNestedInput = {
    create?: XOR<FinancialEntryNotaCreateWithoutNotaFiscalRefInput, FinancialEntryNotaUncheckedCreateWithoutNotaFiscalRefInput> | FinancialEntryNotaCreateWithoutNotaFiscalRefInput[] | FinancialEntryNotaUncheckedCreateWithoutNotaFiscalRefInput[]
    connectOrCreate?: FinancialEntryNotaCreateOrConnectWithoutNotaFiscalRefInput | FinancialEntryNotaCreateOrConnectWithoutNotaFiscalRefInput[]
    upsert?: FinancialEntryNotaUpsertWithWhereUniqueWithoutNotaFiscalRefInput | FinancialEntryNotaUpsertWithWhereUniqueWithoutNotaFiscalRefInput[]
    createMany?: FinancialEntryNotaCreateManyNotaFiscalRefInputEnvelope
    set?: FinancialEntryNotaWhereUniqueInput | FinancialEntryNotaWhereUniqueInput[]
    disconnect?: FinancialEntryNotaWhereUniqueInput | FinancialEntryNotaWhereUniqueInput[]
    delete?: FinancialEntryNotaWhereUniqueInput | FinancialEntryNotaWhereUniqueInput[]
    connect?: FinancialEntryNotaWhereUniqueInput | FinancialEntryNotaWhereUniqueInput[]
    update?: FinancialEntryNotaUpdateWithWhereUniqueWithoutNotaFiscalRefInput | FinancialEntryNotaUpdateWithWhereUniqueWithoutNotaFiscalRefInput[]
    updateMany?: FinancialEntryNotaUpdateManyWithWhereWithoutNotaFiscalRefInput | FinancialEntryNotaUpdateManyWithWhereWithoutNotaFiscalRefInput[]
    deleteMany?: FinancialEntryNotaScalarWhereInput | FinancialEntryNotaScalarWhereInput[]
  }

  export type FinancialEntryNotaUncheckedUpdateManyWithoutNotaFiscalRefNestedInput = {
    create?: XOR<FinancialEntryNotaCreateWithoutNotaFiscalRefInput, FinancialEntryNotaUncheckedCreateWithoutNotaFiscalRefInput> | FinancialEntryNotaCreateWithoutNotaFiscalRefInput[] | FinancialEntryNotaUncheckedCreateWithoutNotaFiscalRefInput[]
    connectOrCreate?: FinancialEntryNotaCreateOrConnectWithoutNotaFiscalRefInput | FinancialEntryNotaCreateOrConnectWithoutNotaFiscalRefInput[]
    upsert?: FinancialEntryNotaUpsertWithWhereUniqueWithoutNotaFiscalRefInput | FinancialEntryNotaUpsertWithWhereUniqueWithoutNotaFiscalRefInput[]
    createMany?: FinancialEntryNotaCreateManyNotaFiscalRefInputEnvelope
    set?: FinancialEntryNotaWhereUniqueInput | FinancialEntryNotaWhereUniqueInput[]
    disconnect?: FinancialEntryNotaWhereUniqueInput | FinancialEntryNotaWhereUniqueInput[]
    delete?: FinancialEntryNotaWhereUniqueInput | FinancialEntryNotaWhereUniqueInput[]
    connect?: FinancialEntryNotaWhereUniqueInput | FinancialEntryNotaWhereUniqueInput[]
    update?: FinancialEntryNotaUpdateWithWhereUniqueWithoutNotaFiscalRefInput | FinancialEntryNotaUpdateWithWhereUniqueWithoutNotaFiscalRefInput[]
    updateMany?: FinancialEntryNotaUpdateManyWithWhereWithoutNotaFiscalRefInput | FinancialEntryNotaUpdateManyWithWhereWithoutNotaFiscalRefInput[]
    deleteMany?: FinancialEntryNotaScalarWhereInput | FinancialEntryNotaScalarWhereInput[]
  }

  export type FinancialEntryCreateNestedOneWithoutNotasInput = {
    create?: XOR<FinancialEntryCreateWithoutNotasInput, FinancialEntryUncheckedCreateWithoutNotasInput>
    connectOrCreate?: FinancialEntryCreateOrConnectWithoutNotasInput
    connect?: FinancialEntryWhereUniqueInput
  }

  export type NotaFiscalRefCreateNestedOneWithoutFinancialLinksInput = {
    create?: XOR<NotaFiscalRefCreateWithoutFinancialLinksInput, NotaFiscalRefUncheckedCreateWithoutFinancialLinksInput>
    connectOrCreate?: NotaFiscalRefCreateOrConnectWithoutFinancialLinksInput
    connect?: NotaFiscalRefWhereUniqueInput
  }

  export type FinancialEntryUpdateOneRequiredWithoutNotasNestedInput = {
    create?: XOR<FinancialEntryCreateWithoutNotasInput, FinancialEntryUncheckedCreateWithoutNotasInput>
    connectOrCreate?: FinancialEntryCreateOrConnectWithoutNotasInput
    upsert?: FinancialEntryUpsertWithoutNotasInput
    connect?: FinancialEntryWhereUniqueInput
    update?: XOR<XOR<FinancialEntryUpdateToOneWithWhereWithoutNotasInput, FinancialEntryUpdateWithoutNotasInput>, FinancialEntryUncheckedUpdateWithoutNotasInput>
  }

  export type NotaFiscalRefUpdateOneRequiredWithoutFinancialLinksNestedInput = {
    create?: XOR<NotaFiscalRefCreateWithoutFinancialLinksInput, NotaFiscalRefUncheckedCreateWithoutFinancialLinksInput>
    connectOrCreate?: NotaFiscalRefCreateOrConnectWithoutFinancialLinksInput
    upsert?: NotaFiscalRefUpsertWithoutFinancialLinksInput
    connect?: NotaFiscalRefWhereUniqueInput
    update?: XOR<XOR<NotaFiscalRefUpdateToOneWithWhereWithoutFinancialLinksInput, NotaFiscalRefUpdateWithoutFinancialLinksInput>, NotaFiscalRefUncheckedUpdateWithoutFinancialLinksInput>
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

  export type NestedEnumEntryKindFilter<$PrismaModel = never> = {
    equals?: $Enums.EntryKind | EnumEntryKindFieldRefInput<$PrismaModel>
    in?: $Enums.EntryKind[] | ListEnumEntryKindFieldRefInput<$PrismaModel>
    notIn?: $Enums.EntryKind[] | ListEnumEntryKindFieldRefInput<$PrismaModel>
    not?: NestedEnumEntryKindFilter<$PrismaModel> | $Enums.EntryKind
  }

  export type NestedEnumEntryStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EntryStatus | EnumEntryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EntryStatus[] | ListEnumEntryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EntryStatus[] | ListEnumEntryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEntryStatusFilter<$PrismaModel> | $Enums.EntryStatus
  }

  export type NestedEnumEntryKindWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EntryKind | EnumEntryKindFieldRefInput<$PrismaModel>
    in?: $Enums.EntryKind[] | ListEnumEntryKindFieldRefInput<$PrismaModel>
    notIn?: $Enums.EntryKind[] | ListEnumEntryKindFieldRefInput<$PrismaModel>
    not?: NestedEnumEntryKindWithAggregatesFilter<$PrismaModel> | $Enums.EntryKind
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEntryKindFilter<$PrismaModel>
    _max?: NestedEnumEntryKindFilter<$PrismaModel>
  }

  export type NestedEnumEntryStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EntryStatus | EnumEntryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EntryStatus[] | ListEnumEntryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EntryStatus[] | ListEnumEntryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEntryStatusWithAggregatesFilter<$PrismaModel> | $Enums.EntryStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEntryStatusFilter<$PrismaModel>
    _max?: NestedEnumEntryStatusFilter<$PrismaModel>
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

  export type FinancialEntryNotaCreateWithoutFinancialEntryInput = {
    createdAt?: Date | string
    notaFiscalRef: NotaFiscalRefCreateNestedOneWithoutFinancialLinksInput
  }

  export type FinancialEntryNotaUncheckedCreateWithoutFinancialEntryInput = {
    notaFiscalRefId: string
    createdAt?: Date | string
  }

  export type FinancialEntryNotaCreateOrConnectWithoutFinancialEntryInput = {
    where: FinancialEntryNotaWhereUniqueInput
    create: XOR<FinancialEntryNotaCreateWithoutFinancialEntryInput, FinancialEntryNotaUncheckedCreateWithoutFinancialEntryInput>
  }

  export type FinancialEntryNotaCreateManyFinancialEntryInputEnvelope = {
    data: FinancialEntryNotaCreateManyFinancialEntryInput | FinancialEntryNotaCreateManyFinancialEntryInput[]
    skipDuplicates?: boolean
  }

  export type FinancialEntryNotaUpsertWithWhereUniqueWithoutFinancialEntryInput = {
    where: FinancialEntryNotaWhereUniqueInput
    update: XOR<FinancialEntryNotaUpdateWithoutFinancialEntryInput, FinancialEntryNotaUncheckedUpdateWithoutFinancialEntryInput>
    create: XOR<FinancialEntryNotaCreateWithoutFinancialEntryInput, FinancialEntryNotaUncheckedCreateWithoutFinancialEntryInput>
  }

  export type FinancialEntryNotaUpdateWithWhereUniqueWithoutFinancialEntryInput = {
    where: FinancialEntryNotaWhereUniqueInput
    data: XOR<FinancialEntryNotaUpdateWithoutFinancialEntryInput, FinancialEntryNotaUncheckedUpdateWithoutFinancialEntryInput>
  }

  export type FinancialEntryNotaUpdateManyWithWhereWithoutFinancialEntryInput = {
    where: FinancialEntryNotaScalarWhereInput
    data: XOR<FinancialEntryNotaUpdateManyMutationInput, FinancialEntryNotaUncheckedUpdateManyWithoutFinancialEntryInput>
  }

  export type FinancialEntryNotaScalarWhereInput = {
    AND?: FinancialEntryNotaScalarWhereInput | FinancialEntryNotaScalarWhereInput[]
    OR?: FinancialEntryNotaScalarWhereInput[]
    NOT?: FinancialEntryNotaScalarWhereInput | FinancialEntryNotaScalarWhereInput[]
    financialEntryId?: UuidFilter<"FinancialEntryNota"> | string
    notaFiscalRefId?: UuidFilter<"FinancialEntryNota"> | string
    createdAt?: DateTimeFilter<"FinancialEntryNota"> | Date | string
  }

  export type FinancialEntryNotaCreateWithoutNotaFiscalRefInput = {
    createdAt?: Date | string
    financialEntry: FinancialEntryCreateNestedOneWithoutNotasInput
  }

  export type FinancialEntryNotaUncheckedCreateWithoutNotaFiscalRefInput = {
    financialEntryId: string
    createdAt?: Date | string
  }

  export type FinancialEntryNotaCreateOrConnectWithoutNotaFiscalRefInput = {
    where: FinancialEntryNotaWhereUniqueInput
    create: XOR<FinancialEntryNotaCreateWithoutNotaFiscalRefInput, FinancialEntryNotaUncheckedCreateWithoutNotaFiscalRefInput>
  }

  export type FinancialEntryNotaCreateManyNotaFiscalRefInputEnvelope = {
    data: FinancialEntryNotaCreateManyNotaFiscalRefInput | FinancialEntryNotaCreateManyNotaFiscalRefInput[]
    skipDuplicates?: boolean
  }

  export type FinancialEntryNotaUpsertWithWhereUniqueWithoutNotaFiscalRefInput = {
    where: FinancialEntryNotaWhereUniqueInput
    update: XOR<FinancialEntryNotaUpdateWithoutNotaFiscalRefInput, FinancialEntryNotaUncheckedUpdateWithoutNotaFiscalRefInput>
    create: XOR<FinancialEntryNotaCreateWithoutNotaFiscalRefInput, FinancialEntryNotaUncheckedCreateWithoutNotaFiscalRefInput>
  }

  export type FinancialEntryNotaUpdateWithWhereUniqueWithoutNotaFiscalRefInput = {
    where: FinancialEntryNotaWhereUniqueInput
    data: XOR<FinancialEntryNotaUpdateWithoutNotaFiscalRefInput, FinancialEntryNotaUncheckedUpdateWithoutNotaFiscalRefInput>
  }

  export type FinancialEntryNotaUpdateManyWithWhereWithoutNotaFiscalRefInput = {
    where: FinancialEntryNotaScalarWhereInput
    data: XOR<FinancialEntryNotaUpdateManyMutationInput, FinancialEntryNotaUncheckedUpdateManyWithoutNotaFiscalRefInput>
  }

  export type FinancialEntryCreateWithoutNotasInput = {
    id?: string
    workspaceId: string
    kind: $Enums.EntryKind
    description: string
    amount: Decimal | DecimalJsLike | number | string
    dueDate: Date | string
    status?: $Enums.EntryStatus
    createdAt?: Date | string
  }

  export type FinancialEntryUncheckedCreateWithoutNotasInput = {
    id?: string
    workspaceId: string
    kind: $Enums.EntryKind
    description: string
    amount: Decimal | DecimalJsLike | number | string
    dueDate: Date | string
    status?: $Enums.EntryStatus
    createdAt?: Date | string
  }

  export type FinancialEntryCreateOrConnectWithoutNotasInput = {
    where: FinancialEntryWhereUniqueInput
    create: XOR<FinancialEntryCreateWithoutNotasInput, FinancialEntryUncheckedCreateWithoutNotasInput>
  }

  export type NotaFiscalRefCreateWithoutFinancialLinksInput = {
    id?: string
    workspaceId: string
    fiscalInvoiceId: string
    emitterId: string
    emitterCnpj: string
    emitterName: string
    recipientName: string
    status: string
    number?: number | null
    series?: number | null
    accessKey?: string | null
    totalValue: Decimal | DecimalJsLike | number | string
    rejectionMessage?: string | null
    authorizedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotaFiscalRefUncheckedCreateWithoutFinancialLinksInput = {
    id?: string
    workspaceId: string
    fiscalInvoiceId: string
    emitterId: string
    emitterCnpj: string
    emitterName: string
    recipientName: string
    status: string
    number?: number | null
    series?: number | null
    accessKey?: string | null
    totalValue: Decimal | DecimalJsLike | number | string
    rejectionMessage?: string | null
    authorizedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotaFiscalRefCreateOrConnectWithoutFinancialLinksInput = {
    where: NotaFiscalRefWhereUniqueInput
    create: XOR<NotaFiscalRefCreateWithoutFinancialLinksInput, NotaFiscalRefUncheckedCreateWithoutFinancialLinksInput>
  }

  export type FinancialEntryUpsertWithoutNotasInput = {
    update: XOR<FinancialEntryUpdateWithoutNotasInput, FinancialEntryUncheckedUpdateWithoutNotasInput>
    create: XOR<FinancialEntryCreateWithoutNotasInput, FinancialEntryUncheckedCreateWithoutNotasInput>
    where?: FinancialEntryWhereInput
  }

  export type FinancialEntryUpdateToOneWithWhereWithoutNotasInput = {
    where?: FinancialEntryWhereInput
    data: XOR<FinancialEntryUpdateWithoutNotasInput, FinancialEntryUncheckedUpdateWithoutNotasInput>
  }

  export type FinancialEntryUpdateWithoutNotasInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    kind?: EnumEntryKindFieldUpdateOperationsInput | $Enums.EntryKind
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumEntryStatusFieldUpdateOperationsInput | $Enums.EntryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinancialEntryUncheckedUpdateWithoutNotasInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    kind?: EnumEntryKindFieldUpdateOperationsInput | $Enums.EntryKind
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumEntryStatusFieldUpdateOperationsInput | $Enums.EntryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotaFiscalRefUpsertWithoutFinancialLinksInput = {
    update: XOR<NotaFiscalRefUpdateWithoutFinancialLinksInput, NotaFiscalRefUncheckedUpdateWithoutFinancialLinksInput>
    create: XOR<NotaFiscalRefCreateWithoutFinancialLinksInput, NotaFiscalRefUncheckedCreateWithoutFinancialLinksInput>
    where?: NotaFiscalRefWhereInput
  }

  export type NotaFiscalRefUpdateToOneWithWhereWithoutFinancialLinksInput = {
    where?: NotaFiscalRefWhereInput
    data: XOR<NotaFiscalRefUpdateWithoutFinancialLinksInput, NotaFiscalRefUncheckedUpdateWithoutFinancialLinksInput>
  }

  export type NotaFiscalRefUpdateWithoutFinancialLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    fiscalInvoiceId?: StringFieldUpdateOperationsInput | string
    emitterId?: StringFieldUpdateOperationsInput | string
    emitterCnpj?: StringFieldUpdateOperationsInput | string
    emitterName?: StringFieldUpdateOperationsInput | string
    recipientName?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    number?: NullableIntFieldUpdateOperationsInput | number | null
    series?: NullableIntFieldUpdateOperationsInput | number | null
    accessKey?: NullableStringFieldUpdateOperationsInput | string | null
    totalValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rejectionMessage?: NullableStringFieldUpdateOperationsInput | string | null
    authorizedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotaFiscalRefUncheckedUpdateWithoutFinancialLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    fiscalInvoiceId?: StringFieldUpdateOperationsInput | string
    emitterId?: StringFieldUpdateOperationsInput | string
    emitterCnpj?: StringFieldUpdateOperationsInput | string
    emitterName?: StringFieldUpdateOperationsInput | string
    recipientName?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    number?: NullableIntFieldUpdateOperationsInput | number | null
    series?: NullableIntFieldUpdateOperationsInput | number | null
    accessKey?: NullableStringFieldUpdateOperationsInput | string | null
    totalValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rejectionMessage?: NullableStringFieldUpdateOperationsInput | string | null
    authorizedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinancialEntryNotaCreateManyFinancialEntryInput = {
    notaFiscalRefId: string
    createdAt?: Date | string
  }

  export type FinancialEntryNotaUpdateWithoutFinancialEntryInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notaFiscalRef?: NotaFiscalRefUpdateOneRequiredWithoutFinancialLinksNestedInput
  }

  export type FinancialEntryNotaUncheckedUpdateWithoutFinancialEntryInput = {
    notaFiscalRefId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinancialEntryNotaUncheckedUpdateManyWithoutFinancialEntryInput = {
    notaFiscalRefId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinancialEntryNotaCreateManyNotaFiscalRefInput = {
    financialEntryId: string
    createdAt?: Date | string
  }

  export type FinancialEntryNotaUpdateWithoutNotaFiscalRefInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    financialEntry?: FinancialEntryUpdateOneRequiredWithoutNotasNestedInput
  }

  export type FinancialEntryNotaUncheckedUpdateWithoutNotaFiscalRefInput = {
    financialEntryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinancialEntryNotaUncheckedUpdateManyWithoutNotaFiscalRefInput = {
    financialEntryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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