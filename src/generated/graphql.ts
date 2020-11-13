import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
};



export type Block_Height = {
  hash?: Maybe<Scalars['Bytes']>;
  number?: Maybe<Scalars['Int']>;
};

/** Represents a lock on an operators bond, usually held by a keep the operator is collaterializing. */
export type Bond = {
  __typename?: 'Bond';
  id: Scalars['ID'];
  status: BondStatus;
  referenceID: Scalars['BigInt'];
  bondedAmount: Scalars['BigDecimal'];
  operator: Operator;
  holder: Scalars['Bytes'];
  keep: BondedEcdsaKeep;
};

export type BondReassignedEvent = Event & {
  __typename?: 'BondReassignedEvent';
  id: Scalars['ID'];
  submitter: Scalars['Bytes'];
  transactionHash: Scalars['String'];
  timestamp: Scalars['BigInt'];
  deposit?: Maybe<Deposit>;
  operator?: Maybe<Operator>;
};

export type BondReassignedEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  submitter?: Maybe<Scalars['Bytes']>;
  submitter_not?: Maybe<Scalars['Bytes']>;
  submitter_in?: Maybe<Array<Scalars['Bytes']>>;
  submitter_not_in?: Maybe<Array<Scalars['Bytes']>>;
  submitter_contains?: Maybe<Scalars['Bytes']>;
  submitter_not_contains?: Maybe<Scalars['Bytes']>;
  transactionHash?: Maybe<Scalars['String']>;
  transactionHash_not?: Maybe<Scalars['String']>;
  transactionHash_gt?: Maybe<Scalars['String']>;
  transactionHash_lt?: Maybe<Scalars['String']>;
  transactionHash_gte?: Maybe<Scalars['String']>;
  transactionHash_lte?: Maybe<Scalars['String']>;
  transactionHash_in?: Maybe<Array<Scalars['String']>>;
  transactionHash_not_in?: Maybe<Array<Scalars['String']>>;
  transactionHash_contains?: Maybe<Scalars['String']>;
  transactionHash_not_contains?: Maybe<Scalars['String']>;
  transactionHash_starts_with?: Maybe<Scalars['String']>;
  transactionHash_not_starts_with?: Maybe<Scalars['String']>;
  transactionHash_ends_with?: Maybe<Scalars['String']>;
  transactionHash_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  deposit?: Maybe<Scalars['String']>;
  deposit_not?: Maybe<Scalars['String']>;
  deposit_gt?: Maybe<Scalars['String']>;
  deposit_lt?: Maybe<Scalars['String']>;
  deposit_gte?: Maybe<Scalars['String']>;
  deposit_lte?: Maybe<Scalars['String']>;
  deposit_in?: Maybe<Array<Scalars['String']>>;
  deposit_not_in?: Maybe<Array<Scalars['String']>>;
  deposit_contains?: Maybe<Scalars['String']>;
  deposit_not_contains?: Maybe<Scalars['String']>;
  deposit_starts_with?: Maybe<Scalars['String']>;
  deposit_not_starts_with?: Maybe<Scalars['String']>;
  deposit_ends_with?: Maybe<Scalars['String']>;
  deposit_not_ends_with?: Maybe<Scalars['String']>;
  operator?: Maybe<Scalars['String']>;
  operator_not?: Maybe<Scalars['String']>;
  operator_gt?: Maybe<Scalars['String']>;
  operator_lt?: Maybe<Scalars['String']>;
  operator_gte?: Maybe<Scalars['String']>;
  operator_lte?: Maybe<Scalars['String']>;
  operator_in?: Maybe<Array<Scalars['String']>>;
  operator_not_in?: Maybe<Array<Scalars['String']>>;
  operator_contains?: Maybe<Scalars['String']>;
  operator_not_contains?: Maybe<Scalars['String']>;
  operator_starts_with?: Maybe<Scalars['String']>;
  operator_not_starts_with?: Maybe<Scalars['String']>;
  operator_ends_with?: Maybe<Scalars['String']>;
  operator_not_ends_with?: Maybe<Scalars['String']>;
};

export enum BondReassignedEvent_OrderBy {
  Id = 'id',
  Submitter = 'submitter',
  TransactionHash = 'transactionHash',
  Timestamp = 'timestamp',
  Deposit = 'deposit',
  Operator = 'operator'
}

export type BondSeizedEvent = Event & {
  __typename?: 'BondSeizedEvent';
  id: Scalars['ID'];
  submitter: Scalars['Bytes'];
  transactionHash: Scalars['String'];
  timestamp: Scalars['BigInt'];
  deposit?: Maybe<Deposit>;
  operator?: Maybe<Operator>;
};

export type BondSeizedEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  submitter?: Maybe<Scalars['Bytes']>;
  submitter_not?: Maybe<Scalars['Bytes']>;
  submitter_in?: Maybe<Array<Scalars['Bytes']>>;
  submitter_not_in?: Maybe<Array<Scalars['Bytes']>>;
  submitter_contains?: Maybe<Scalars['Bytes']>;
  submitter_not_contains?: Maybe<Scalars['Bytes']>;
  transactionHash?: Maybe<Scalars['String']>;
  transactionHash_not?: Maybe<Scalars['String']>;
  transactionHash_gt?: Maybe<Scalars['String']>;
  transactionHash_lt?: Maybe<Scalars['String']>;
  transactionHash_gte?: Maybe<Scalars['String']>;
  transactionHash_lte?: Maybe<Scalars['String']>;
  transactionHash_in?: Maybe<Array<Scalars['String']>>;
  transactionHash_not_in?: Maybe<Array<Scalars['String']>>;
  transactionHash_contains?: Maybe<Scalars['String']>;
  transactionHash_not_contains?: Maybe<Scalars['String']>;
  transactionHash_starts_with?: Maybe<Scalars['String']>;
  transactionHash_not_starts_with?: Maybe<Scalars['String']>;
  transactionHash_ends_with?: Maybe<Scalars['String']>;
  transactionHash_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  deposit?: Maybe<Scalars['String']>;
  deposit_not?: Maybe<Scalars['String']>;
  deposit_gt?: Maybe<Scalars['String']>;
  deposit_lt?: Maybe<Scalars['String']>;
  deposit_gte?: Maybe<Scalars['String']>;
  deposit_lte?: Maybe<Scalars['String']>;
  deposit_in?: Maybe<Array<Scalars['String']>>;
  deposit_not_in?: Maybe<Array<Scalars['String']>>;
  deposit_contains?: Maybe<Scalars['String']>;
  deposit_not_contains?: Maybe<Scalars['String']>;
  deposit_starts_with?: Maybe<Scalars['String']>;
  deposit_not_starts_with?: Maybe<Scalars['String']>;
  deposit_ends_with?: Maybe<Scalars['String']>;
  deposit_not_ends_with?: Maybe<Scalars['String']>;
  operator?: Maybe<Scalars['String']>;
  operator_not?: Maybe<Scalars['String']>;
  operator_gt?: Maybe<Scalars['String']>;
  operator_lt?: Maybe<Scalars['String']>;
  operator_gte?: Maybe<Scalars['String']>;
  operator_lte?: Maybe<Scalars['String']>;
  operator_in?: Maybe<Array<Scalars['String']>>;
  operator_not_in?: Maybe<Array<Scalars['String']>>;
  operator_contains?: Maybe<Scalars['String']>;
  operator_not_contains?: Maybe<Scalars['String']>;
  operator_starts_with?: Maybe<Scalars['String']>;
  operator_not_starts_with?: Maybe<Scalars['String']>;
  operator_ends_with?: Maybe<Scalars['String']>;
  operator_not_ends_with?: Maybe<Scalars['String']>;
};

export enum BondSeizedEvent_OrderBy {
  Id = 'id',
  Submitter = 'submitter',
  TransactionHash = 'transactionHash',
  Timestamp = 'timestamp',
  Deposit = 'deposit',
  Operator = 'operator'
}

export enum BondStatus {
  Active = 'ACTIVE',
  Released = 'RELEASED',
  Seized = 'SEIZED'
}

export type Bond_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  status?: Maybe<BondStatus>;
  status_not?: Maybe<BondStatus>;
  referenceID?: Maybe<Scalars['BigInt']>;
  referenceID_not?: Maybe<Scalars['BigInt']>;
  referenceID_gt?: Maybe<Scalars['BigInt']>;
  referenceID_lt?: Maybe<Scalars['BigInt']>;
  referenceID_gte?: Maybe<Scalars['BigInt']>;
  referenceID_lte?: Maybe<Scalars['BigInt']>;
  referenceID_in?: Maybe<Array<Scalars['BigInt']>>;
  referenceID_not_in?: Maybe<Array<Scalars['BigInt']>>;
  bondedAmount?: Maybe<Scalars['BigDecimal']>;
  bondedAmount_not?: Maybe<Scalars['BigDecimal']>;
  bondedAmount_gt?: Maybe<Scalars['BigDecimal']>;
  bondedAmount_lt?: Maybe<Scalars['BigDecimal']>;
  bondedAmount_gte?: Maybe<Scalars['BigDecimal']>;
  bondedAmount_lte?: Maybe<Scalars['BigDecimal']>;
  bondedAmount_in?: Maybe<Array<Scalars['BigDecimal']>>;
  bondedAmount_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  operator?: Maybe<Scalars['String']>;
  operator_not?: Maybe<Scalars['String']>;
  operator_gt?: Maybe<Scalars['String']>;
  operator_lt?: Maybe<Scalars['String']>;
  operator_gte?: Maybe<Scalars['String']>;
  operator_lte?: Maybe<Scalars['String']>;
  operator_in?: Maybe<Array<Scalars['String']>>;
  operator_not_in?: Maybe<Array<Scalars['String']>>;
  operator_contains?: Maybe<Scalars['String']>;
  operator_not_contains?: Maybe<Scalars['String']>;
  operator_starts_with?: Maybe<Scalars['String']>;
  operator_not_starts_with?: Maybe<Scalars['String']>;
  operator_ends_with?: Maybe<Scalars['String']>;
  operator_not_ends_with?: Maybe<Scalars['String']>;
  holder?: Maybe<Scalars['Bytes']>;
  holder_not?: Maybe<Scalars['Bytes']>;
  holder_in?: Maybe<Array<Scalars['Bytes']>>;
  holder_not_in?: Maybe<Array<Scalars['Bytes']>>;
  holder_contains?: Maybe<Scalars['Bytes']>;
  holder_not_contains?: Maybe<Scalars['Bytes']>;
  keep?: Maybe<Scalars['String']>;
  keep_not?: Maybe<Scalars['String']>;
  keep_gt?: Maybe<Scalars['String']>;
  keep_lt?: Maybe<Scalars['String']>;
  keep_gte?: Maybe<Scalars['String']>;
  keep_lte?: Maybe<Scalars['String']>;
  keep_in?: Maybe<Array<Scalars['String']>>;
  keep_not_in?: Maybe<Array<Scalars['String']>>;
  keep_contains?: Maybe<Scalars['String']>;
  keep_not_contains?: Maybe<Scalars['String']>;
  keep_starts_with?: Maybe<Scalars['String']>;
  keep_not_starts_with?: Maybe<Scalars['String']>;
  keep_ends_with?: Maybe<Scalars['String']>;
  keep_not_ends_with?: Maybe<Scalars['String']>;
};

export enum Bond_OrderBy {
  Id = 'id',
  Status = 'status',
  ReferenceId = 'referenceID',
  BondedAmount = 'bondedAmount',
  Operator = 'operator',
  Holder = 'holder',
  Keep = 'keep'
}

export type BondedEcdsaKeep = {
  __typename?: 'BondedECDSAKeep';
  id: Scalars['ID'];
  createdAt: Scalars['BigInt'];
  keepAddress: Scalars['Bytes'];
  deposit: Deposit;
  totalBondAmount?: Maybe<Scalars['BigInt']>;
  publicKey?: Maybe<Scalars['Bytes']>;
  status?: Maybe<BondedEcdsaKeepStatus>;
  honestThreshold?: Maybe<Scalars['Int']>;
  members: Array<Maybe<Operator>>;
  /** The ratio of backing ETH to lot size. This allows you to sort by collateralization-ratio. */
  etcToBtcRatio: Scalars['BigInt'];
  /** Which stakedrop interval this keep belongs to, if any. */
  stakedropInterval?: Maybe<StakedropInterval>;
  /** The nodes which have submitted their pubkey. */
  pubkeySubmissions: Array<Maybe<Operator>>;
};


export type BondedEcdsaKeepMembersArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Operator_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Operator_Filter>;
};


export type BondedEcdsaKeepPubkeySubmissionsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Operator_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Operator_Filter>;
};

export enum BondedEcdsaKeepStatus {
  Active = 'ACTIVE',
  Closed = 'CLOSED',
  Terminated = 'TERMINATED'
}

export type BondedEcdsaKeep_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  createdAt?: Maybe<Scalars['BigInt']>;
  createdAt_not?: Maybe<Scalars['BigInt']>;
  createdAt_gt?: Maybe<Scalars['BigInt']>;
  createdAt_lt?: Maybe<Scalars['BigInt']>;
  createdAt_gte?: Maybe<Scalars['BigInt']>;
  createdAt_lte?: Maybe<Scalars['BigInt']>;
  createdAt_in?: Maybe<Array<Scalars['BigInt']>>;
  createdAt_not_in?: Maybe<Array<Scalars['BigInt']>>;
  keepAddress?: Maybe<Scalars['Bytes']>;
  keepAddress_not?: Maybe<Scalars['Bytes']>;
  keepAddress_in?: Maybe<Array<Scalars['Bytes']>>;
  keepAddress_not_in?: Maybe<Array<Scalars['Bytes']>>;
  keepAddress_contains?: Maybe<Scalars['Bytes']>;
  keepAddress_not_contains?: Maybe<Scalars['Bytes']>;
  deposit?: Maybe<Scalars['String']>;
  deposit_not?: Maybe<Scalars['String']>;
  deposit_gt?: Maybe<Scalars['String']>;
  deposit_lt?: Maybe<Scalars['String']>;
  deposit_gte?: Maybe<Scalars['String']>;
  deposit_lte?: Maybe<Scalars['String']>;
  deposit_in?: Maybe<Array<Scalars['String']>>;
  deposit_not_in?: Maybe<Array<Scalars['String']>>;
  deposit_contains?: Maybe<Scalars['String']>;
  deposit_not_contains?: Maybe<Scalars['String']>;
  deposit_starts_with?: Maybe<Scalars['String']>;
  deposit_not_starts_with?: Maybe<Scalars['String']>;
  deposit_ends_with?: Maybe<Scalars['String']>;
  deposit_not_ends_with?: Maybe<Scalars['String']>;
  totalBondAmount?: Maybe<Scalars['BigInt']>;
  totalBondAmount_not?: Maybe<Scalars['BigInt']>;
  totalBondAmount_gt?: Maybe<Scalars['BigInt']>;
  totalBondAmount_lt?: Maybe<Scalars['BigInt']>;
  totalBondAmount_gte?: Maybe<Scalars['BigInt']>;
  totalBondAmount_lte?: Maybe<Scalars['BigInt']>;
  totalBondAmount_in?: Maybe<Array<Scalars['BigInt']>>;
  totalBondAmount_not_in?: Maybe<Array<Scalars['BigInt']>>;
  publicKey?: Maybe<Scalars['Bytes']>;
  publicKey_not?: Maybe<Scalars['Bytes']>;
  publicKey_in?: Maybe<Array<Scalars['Bytes']>>;
  publicKey_not_in?: Maybe<Array<Scalars['Bytes']>>;
  publicKey_contains?: Maybe<Scalars['Bytes']>;
  publicKey_not_contains?: Maybe<Scalars['Bytes']>;
  status?: Maybe<BondedEcdsaKeepStatus>;
  status_not?: Maybe<BondedEcdsaKeepStatus>;
  honestThreshold?: Maybe<Scalars['Int']>;
  honestThreshold_not?: Maybe<Scalars['Int']>;
  honestThreshold_gt?: Maybe<Scalars['Int']>;
  honestThreshold_lt?: Maybe<Scalars['Int']>;
  honestThreshold_gte?: Maybe<Scalars['Int']>;
  honestThreshold_lte?: Maybe<Scalars['Int']>;
  honestThreshold_in?: Maybe<Array<Scalars['Int']>>;
  honestThreshold_not_in?: Maybe<Array<Scalars['Int']>>;
  members?: Maybe<Array<Scalars['String']>>;
  members_not?: Maybe<Array<Scalars['String']>>;
  members_contains?: Maybe<Array<Scalars['String']>>;
  members_not_contains?: Maybe<Array<Scalars['String']>>;
  etcToBtcRatio?: Maybe<Scalars['BigInt']>;
  etcToBtcRatio_not?: Maybe<Scalars['BigInt']>;
  etcToBtcRatio_gt?: Maybe<Scalars['BigInt']>;
  etcToBtcRatio_lt?: Maybe<Scalars['BigInt']>;
  etcToBtcRatio_gte?: Maybe<Scalars['BigInt']>;
  etcToBtcRatio_lte?: Maybe<Scalars['BigInt']>;
  etcToBtcRatio_in?: Maybe<Array<Scalars['BigInt']>>;
  etcToBtcRatio_not_in?: Maybe<Array<Scalars['BigInt']>>;
  stakedropInterval?: Maybe<Scalars['String']>;
  stakedropInterval_not?: Maybe<Scalars['String']>;
  stakedropInterval_gt?: Maybe<Scalars['String']>;
  stakedropInterval_lt?: Maybe<Scalars['String']>;
  stakedropInterval_gte?: Maybe<Scalars['String']>;
  stakedropInterval_lte?: Maybe<Scalars['String']>;
  stakedropInterval_in?: Maybe<Array<Scalars['String']>>;
  stakedropInterval_not_in?: Maybe<Array<Scalars['String']>>;
  stakedropInterval_contains?: Maybe<Scalars['String']>;
  stakedropInterval_not_contains?: Maybe<Scalars['String']>;
  stakedropInterval_starts_with?: Maybe<Scalars['String']>;
  stakedropInterval_not_starts_with?: Maybe<Scalars['String']>;
  stakedropInterval_ends_with?: Maybe<Scalars['String']>;
  stakedropInterval_not_ends_with?: Maybe<Scalars['String']>;
  pubkeySubmissions?: Maybe<Array<Scalars['String']>>;
  pubkeySubmissions_not?: Maybe<Array<Scalars['String']>>;
  pubkeySubmissions_contains?: Maybe<Array<Scalars['String']>>;
  pubkeySubmissions_not_contains?: Maybe<Array<Scalars['String']>>;
};

export enum BondedEcdsaKeep_OrderBy {
  Id = 'id',
  CreatedAt = 'createdAt',
  KeepAddress = 'keepAddress',
  Deposit = 'deposit',
  TotalBondAmount = 'totalBondAmount',
  PublicKey = 'publicKey',
  Status = 'status',
  HonestThreshold = 'honestThreshold',
  Members = 'members',
  EtcToBtcRatio = 'etcToBtcRatio',
  StakedropInterval = 'stakedropInterval',
  PubkeySubmissions = 'pubkeySubmissions'
}


export type CourtesyCalledEvent = Event & {
  __typename?: 'CourtesyCalledEvent';
  id: Scalars['ID'];
  submitter: Scalars['Bytes'];
  transactionHash: Scalars['String'];
  timestamp: Scalars['BigInt'];
  deposit?: Maybe<Deposit>;
  operator?: Maybe<Operator>;
};

export type CourtesyCalledEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  submitter?: Maybe<Scalars['Bytes']>;
  submitter_not?: Maybe<Scalars['Bytes']>;
  submitter_in?: Maybe<Array<Scalars['Bytes']>>;
  submitter_not_in?: Maybe<Array<Scalars['Bytes']>>;
  submitter_contains?: Maybe<Scalars['Bytes']>;
  submitter_not_contains?: Maybe<Scalars['Bytes']>;
  transactionHash?: Maybe<Scalars['String']>;
  transactionHash_not?: Maybe<Scalars['String']>;
  transactionHash_gt?: Maybe<Scalars['String']>;
  transactionHash_lt?: Maybe<Scalars['String']>;
  transactionHash_gte?: Maybe<Scalars['String']>;
  transactionHash_lte?: Maybe<Scalars['String']>;
  transactionHash_in?: Maybe<Array<Scalars['String']>>;
  transactionHash_not_in?: Maybe<Array<Scalars['String']>>;
  transactionHash_contains?: Maybe<Scalars['String']>;
  transactionHash_not_contains?: Maybe<Scalars['String']>;
  transactionHash_starts_with?: Maybe<Scalars['String']>;
  transactionHash_not_starts_with?: Maybe<Scalars['String']>;
  transactionHash_ends_with?: Maybe<Scalars['String']>;
  transactionHash_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  deposit?: Maybe<Scalars['String']>;
  deposit_not?: Maybe<Scalars['String']>;
  deposit_gt?: Maybe<Scalars['String']>;
  deposit_lt?: Maybe<Scalars['String']>;
  deposit_gte?: Maybe<Scalars['String']>;
  deposit_lte?: Maybe<Scalars['String']>;
  deposit_in?: Maybe<Array<Scalars['String']>>;
  deposit_not_in?: Maybe<Array<Scalars['String']>>;
  deposit_contains?: Maybe<Scalars['String']>;
  deposit_not_contains?: Maybe<Scalars['String']>;
  deposit_starts_with?: Maybe<Scalars['String']>;
  deposit_not_starts_with?: Maybe<Scalars['String']>;
  deposit_ends_with?: Maybe<Scalars['String']>;
  deposit_not_ends_with?: Maybe<Scalars['String']>;
  operator?: Maybe<Scalars['String']>;
  operator_not?: Maybe<Scalars['String']>;
  operator_gt?: Maybe<Scalars['String']>;
  operator_lt?: Maybe<Scalars['String']>;
  operator_gte?: Maybe<Scalars['String']>;
  operator_lte?: Maybe<Scalars['String']>;
  operator_in?: Maybe<Array<Scalars['String']>>;
  operator_not_in?: Maybe<Array<Scalars['String']>>;
  operator_contains?: Maybe<Scalars['String']>;
  operator_not_contains?: Maybe<Scalars['String']>;
  operator_starts_with?: Maybe<Scalars['String']>;
  operator_not_starts_with?: Maybe<Scalars['String']>;
  operator_ends_with?: Maybe<Scalars['String']>;
  operator_not_ends_with?: Maybe<Scalars['String']>;
};

export enum CourtesyCalledEvent_OrderBy {
  Id = 'id',
  Submitter = 'submitter',
  TransactionHash = 'transactionHash',
  Timestamp = 'timestamp',
  Deposit = 'deposit',
  Operator = 'operator'
}

export type CreatedEvent = Event & {
  __typename?: 'CreatedEvent';
  id: Scalars['ID'];
  submitter: Scalars['Bytes'];
  transactionHash: Scalars['String'];
  timestamp: Scalars['BigInt'];
  deposit?: Maybe<Deposit>;
  operator?: Maybe<Operator>;
};

export type CreatedEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  submitter?: Maybe<Scalars['Bytes']>;
  submitter_not?: Maybe<Scalars['Bytes']>;
  submitter_in?: Maybe<Array<Scalars['Bytes']>>;
  submitter_not_in?: Maybe<Array<Scalars['Bytes']>>;
  submitter_contains?: Maybe<Scalars['Bytes']>;
  submitter_not_contains?: Maybe<Scalars['Bytes']>;
  transactionHash?: Maybe<Scalars['String']>;
  transactionHash_not?: Maybe<Scalars['String']>;
  transactionHash_gt?: Maybe<Scalars['String']>;
  transactionHash_lt?: Maybe<Scalars['String']>;
  transactionHash_gte?: Maybe<Scalars['String']>;
  transactionHash_lte?: Maybe<Scalars['String']>;
  transactionHash_in?: Maybe<Array<Scalars['String']>>;
  transactionHash_not_in?: Maybe<Array<Scalars['String']>>;
  transactionHash_contains?: Maybe<Scalars['String']>;
  transactionHash_not_contains?: Maybe<Scalars['String']>;
  transactionHash_starts_with?: Maybe<Scalars['String']>;
  transactionHash_not_starts_with?: Maybe<Scalars['String']>;
  transactionHash_ends_with?: Maybe<Scalars['String']>;
  transactionHash_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  deposit?: Maybe<Scalars['String']>;
  deposit_not?: Maybe<Scalars['String']>;
  deposit_gt?: Maybe<Scalars['String']>;
  deposit_lt?: Maybe<Scalars['String']>;
  deposit_gte?: Maybe<Scalars['String']>;
  deposit_lte?: Maybe<Scalars['String']>;
  deposit_in?: Maybe<Array<Scalars['String']>>;
  deposit_not_in?: Maybe<Array<Scalars['String']>>;
  deposit_contains?: Maybe<Scalars['String']>;
  deposit_not_contains?: Maybe<Scalars['String']>;
  deposit_starts_with?: Maybe<Scalars['String']>;
  deposit_not_starts_with?: Maybe<Scalars['String']>;
  deposit_ends_with?: Maybe<Scalars['String']>;
  deposit_not_ends_with?: Maybe<Scalars['String']>;
  operator?: Maybe<Scalars['String']>;
  operator_not?: Maybe<Scalars['String']>;
  operator_gt?: Maybe<Scalars['String']>;
  operator_lt?: Maybe<Scalars['String']>;
  operator_gte?: Maybe<Scalars['String']>;
  operator_lte?: Maybe<Scalars['String']>;
  operator_in?: Maybe<Array<Scalars['String']>>;
  operator_not_in?: Maybe<Array<Scalars['String']>>;
  operator_contains?: Maybe<Scalars['String']>;
  operator_not_contains?: Maybe<Scalars['String']>;
  operator_starts_with?: Maybe<Scalars['String']>;
  operator_not_starts_with?: Maybe<Scalars['String']>;
  operator_ends_with?: Maybe<Scalars['String']>;
  operator_not_ends_with?: Maybe<Scalars['String']>;
};

export enum CreatedEvent_OrderBy {
  Id = 'id',
  Submitter = 'submitter',
  TransactionHash = 'transactionHash',
  Timestamp = 'timestamp',
  Deposit = 'deposit',
  Operator = 'operator'
}

export type Deposit = {
  __typename?: 'Deposit';
  id: Scalars['ID'];
  /** An incrementing unique number for this deposit, starting at 1. */
  index: Scalars['Int'];
  tbtcSystem: Scalars['Bytes'];
  contractAddress: Scalars['Bytes'];
  tdtToken: TbtcDepositToken;
  currentState?: Maybe<DepositState>;
  /** Timestamp of when this deposit was created. */
  createdAt: Scalars['BigInt'];
  /** Timestamp of when this deposit was closed, either due to redemption, liquidation, or setup failure. */
  closedAt?: Maybe<Scalars['BigInt']>;
  /** Timestamp of the last state change of this deposit. Initialized to the same value as createdAt. */
  updatedAt: Scalars['BigInt'];
  /** Timestamp of when the deposit redemption was requested, if any. This includes the start of liquidation due to undercollateralization. It is not reset if liquidation starts due to withdrawal failure. It does not reset in case of a fee increase. */
  redemptionStartedAt?: Maybe<Scalars['BigInt']>;
  /** Start point of the internal timer which begins with a redemption request. It is initially the same as `redemptionStartedAt` in case of manual redemption, but is reset if there is a fee increase. It is not set or reset when we enter liquidation. */
  withdrawalRequestTimerStart?: Maybe<Scalars['BigInt']>;
  /** The timeout after which the current state can be notified, if any. This does not include non-timeout actions that are time-locked, such as courtesy calls or liquidation auctions. */
  currentStateTimesOutAt?: Maybe<Scalars['BigInt']>;
  owner: Scalars['Bytes'];
  failureReason?: Maybe<SetupFailedReason>;
  /** The address which created the deposit initially. In contrast to the owner, this cannot change. */
  creator: Scalars['Bytes'];
  /** The address which initiated the last action - initially the creator, then the redeemer. */
  lastActor: Scalars['Bytes'];
  keepAddress?: Maybe<Scalars['Bytes']>;
  lotSizeSatoshis: Scalars['BigInt'];
  initialCollateralizedPercent?: Maybe<Scalars['Int']>;
  undercollateralizedThresholdPercent?: Maybe<Scalars['Int']>;
  severelyUndercollateralizedThresholdPercent?: Maybe<Scalars['Int']>;
  signerFee?: Maybe<Scalars['BigInt']>;
  utxoSize?: Maybe<Scalars['BigInt']>;
  endOfTerm?: Maybe<Scalars['BigInt']>;
  bondedECDSAKeep?: Maybe<BondedEcdsaKeep>;
  /** The ratio of backing ETH to lot size. This allows you to sort by collateralization-ratio. */
  etcToBtcRatio: Scalars['BigInt'];
  depositLiquidation?: Maybe<DepositLiquidation>;
  depositRedemption?: Maybe<DepositRedemption>;
  depositSetup?: Maybe<DepositSetup>;
  /** True if the deposit state is LIQUIDATED, LIQUIDATION_IN_PROGRESS, FRAUD_LIQUIDATION_IN_PROGRESS or COURTESY_CALL. */
  filter_liquidationLikeState: Scalars['Boolean'];
  /** True if the deposit state is either liquidation like, or a signer setup failure. */
  filter_liquidationLikeOrSignerFailureState: Scalars['Boolean'];
  filter_activeLikeState: Scalars['Boolean'];
  filter_unmintedTDT: Scalars['Boolean'];
  filter_redeemableAsOf: Scalars['BigInt'];
};

export type DepositLiquidation = {
  __typename?: 'DepositLiquidation';
  id: Scalars['ID'];
  deposit: Deposit;
  initiateTxhash?: Maybe<Scalars['Bytes']>;
  courtesyCallTxhash?: Maybe<Scalars['Bytes']>;
  /** The time the deposited entered LIQUIDATION_IN_PROGRESS state. */
  liquidationInitiated?: Maybe<Scalars['BigInt']>;
  /** The last time a courtesy call was initiated, even if courtesy call state has been exited. */
  courtesyCallInitiatedAt?: Maybe<Scalars['BigInt']>;
  isLiquidated: Scalars['Boolean'];
  liquidatedAt?: Maybe<Scalars['BigInt']>;
  liquidationInitiator?: Maybe<Scalars['Bytes']>;
  cause?: Maybe<LiquidationCause>;
};

export type DepositLiquidation_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  deposit?: Maybe<Scalars['String']>;
  deposit_not?: Maybe<Scalars['String']>;
  deposit_gt?: Maybe<Scalars['String']>;
  deposit_lt?: Maybe<Scalars['String']>;
  deposit_gte?: Maybe<Scalars['String']>;
  deposit_lte?: Maybe<Scalars['String']>;
  deposit_in?: Maybe<Array<Scalars['String']>>;
  deposit_not_in?: Maybe<Array<Scalars['String']>>;
  deposit_contains?: Maybe<Scalars['String']>;
  deposit_not_contains?: Maybe<Scalars['String']>;
  deposit_starts_with?: Maybe<Scalars['String']>;
  deposit_not_starts_with?: Maybe<Scalars['String']>;
  deposit_ends_with?: Maybe<Scalars['String']>;
  deposit_not_ends_with?: Maybe<Scalars['String']>;
  initiateTxhash?: Maybe<Scalars['Bytes']>;
  initiateTxhash_not?: Maybe<Scalars['Bytes']>;
  initiateTxhash_in?: Maybe<Array<Scalars['Bytes']>>;
  initiateTxhash_not_in?: Maybe<Array<Scalars['Bytes']>>;
  initiateTxhash_contains?: Maybe<Scalars['Bytes']>;
  initiateTxhash_not_contains?: Maybe<Scalars['Bytes']>;
  courtesyCallTxhash?: Maybe<Scalars['Bytes']>;
  courtesyCallTxhash_not?: Maybe<Scalars['Bytes']>;
  courtesyCallTxhash_in?: Maybe<Array<Scalars['Bytes']>>;
  courtesyCallTxhash_not_in?: Maybe<Array<Scalars['Bytes']>>;
  courtesyCallTxhash_contains?: Maybe<Scalars['Bytes']>;
  courtesyCallTxhash_not_contains?: Maybe<Scalars['Bytes']>;
  liquidationInitiated?: Maybe<Scalars['BigInt']>;
  liquidationInitiated_not?: Maybe<Scalars['BigInt']>;
  liquidationInitiated_gt?: Maybe<Scalars['BigInt']>;
  liquidationInitiated_lt?: Maybe<Scalars['BigInt']>;
  liquidationInitiated_gte?: Maybe<Scalars['BigInt']>;
  liquidationInitiated_lte?: Maybe<Scalars['BigInt']>;
  liquidationInitiated_in?: Maybe<Array<Scalars['BigInt']>>;
  liquidationInitiated_not_in?: Maybe<Array<Scalars['BigInt']>>;
  courtesyCallInitiatedAt?: Maybe<Scalars['BigInt']>;
  courtesyCallInitiatedAt_not?: Maybe<Scalars['BigInt']>;
  courtesyCallInitiatedAt_gt?: Maybe<Scalars['BigInt']>;
  courtesyCallInitiatedAt_lt?: Maybe<Scalars['BigInt']>;
  courtesyCallInitiatedAt_gte?: Maybe<Scalars['BigInt']>;
  courtesyCallInitiatedAt_lte?: Maybe<Scalars['BigInt']>;
  courtesyCallInitiatedAt_in?: Maybe<Array<Scalars['BigInt']>>;
  courtesyCallInitiatedAt_not_in?: Maybe<Array<Scalars['BigInt']>>;
  isLiquidated?: Maybe<Scalars['Boolean']>;
  isLiquidated_not?: Maybe<Scalars['Boolean']>;
  isLiquidated_in?: Maybe<Array<Scalars['Boolean']>>;
  isLiquidated_not_in?: Maybe<Array<Scalars['Boolean']>>;
  liquidatedAt?: Maybe<Scalars['BigInt']>;
  liquidatedAt_not?: Maybe<Scalars['BigInt']>;
  liquidatedAt_gt?: Maybe<Scalars['BigInt']>;
  liquidatedAt_lt?: Maybe<Scalars['BigInt']>;
  liquidatedAt_gte?: Maybe<Scalars['BigInt']>;
  liquidatedAt_lte?: Maybe<Scalars['BigInt']>;
  liquidatedAt_in?: Maybe<Array<Scalars['BigInt']>>;
  liquidatedAt_not_in?: Maybe<Array<Scalars['BigInt']>>;
  liquidationInitiator?: Maybe<Scalars['Bytes']>;
  liquidationInitiator_not?: Maybe<Scalars['Bytes']>;
  liquidationInitiator_in?: Maybe<Array<Scalars['Bytes']>>;
  liquidationInitiator_not_in?: Maybe<Array<Scalars['Bytes']>>;
  liquidationInitiator_contains?: Maybe<Scalars['Bytes']>;
  liquidationInitiator_not_contains?: Maybe<Scalars['Bytes']>;
  cause?: Maybe<LiquidationCause>;
  cause_not?: Maybe<LiquidationCause>;
};

export enum DepositLiquidation_OrderBy {
  Id = 'id',
  Deposit = 'deposit',
  InitiateTxhash = 'initiateTxhash',
  CourtesyCallTxhash = 'courtesyCallTxhash',
  LiquidationInitiated = 'liquidationInitiated',
  CourtesyCallInitiatedAt = 'courtesyCallInitiatedAt',
  IsLiquidated = 'isLiquidated',
  LiquidatedAt = 'liquidatedAt',
  LiquidationInitiator = 'liquidationInitiator',
  Cause = 'cause'
}

export type DepositRedemption = {
  __typename?: 'DepositRedemption';
  id: Scalars['ID'];
  deposit: Deposit;
  redeemerOutputScript?: Maybe<Scalars['Bytes']>;
  requestedFee?: Maybe<Scalars['BigInt']>;
  latestRedemptionFee?: Maybe<Scalars['BigInt']>;
  withdrawalRequestAt?: Maybe<Scalars['BigInt']>;
  redeemedAt?: Maybe<Scalars['BigInt']>;
  lastRequestedDigest?: Maybe<Scalars['Bytes']>;
  outpoint?: Maybe<Scalars['Bytes']>;
  utxoSize?: Maybe<Scalars['BigInt']>;
  txid?: Maybe<Scalars['Bytes']>;
};

export type DepositRedemption_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  deposit?: Maybe<Scalars['String']>;
  deposit_not?: Maybe<Scalars['String']>;
  deposit_gt?: Maybe<Scalars['String']>;
  deposit_lt?: Maybe<Scalars['String']>;
  deposit_gte?: Maybe<Scalars['String']>;
  deposit_lte?: Maybe<Scalars['String']>;
  deposit_in?: Maybe<Array<Scalars['String']>>;
  deposit_not_in?: Maybe<Array<Scalars['String']>>;
  deposit_contains?: Maybe<Scalars['String']>;
  deposit_not_contains?: Maybe<Scalars['String']>;
  deposit_starts_with?: Maybe<Scalars['String']>;
  deposit_not_starts_with?: Maybe<Scalars['String']>;
  deposit_ends_with?: Maybe<Scalars['String']>;
  deposit_not_ends_with?: Maybe<Scalars['String']>;
  redeemerOutputScript?: Maybe<Scalars['Bytes']>;
  redeemerOutputScript_not?: Maybe<Scalars['Bytes']>;
  redeemerOutputScript_in?: Maybe<Array<Scalars['Bytes']>>;
  redeemerOutputScript_not_in?: Maybe<Array<Scalars['Bytes']>>;
  redeemerOutputScript_contains?: Maybe<Scalars['Bytes']>;
  redeemerOutputScript_not_contains?: Maybe<Scalars['Bytes']>;
  requestedFee?: Maybe<Scalars['BigInt']>;
  requestedFee_not?: Maybe<Scalars['BigInt']>;
  requestedFee_gt?: Maybe<Scalars['BigInt']>;
  requestedFee_lt?: Maybe<Scalars['BigInt']>;
  requestedFee_gte?: Maybe<Scalars['BigInt']>;
  requestedFee_lte?: Maybe<Scalars['BigInt']>;
  requestedFee_in?: Maybe<Array<Scalars['BigInt']>>;
  requestedFee_not_in?: Maybe<Array<Scalars['BigInt']>>;
  latestRedemptionFee?: Maybe<Scalars['BigInt']>;
  latestRedemptionFee_not?: Maybe<Scalars['BigInt']>;
  latestRedemptionFee_gt?: Maybe<Scalars['BigInt']>;
  latestRedemptionFee_lt?: Maybe<Scalars['BigInt']>;
  latestRedemptionFee_gte?: Maybe<Scalars['BigInt']>;
  latestRedemptionFee_lte?: Maybe<Scalars['BigInt']>;
  latestRedemptionFee_in?: Maybe<Array<Scalars['BigInt']>>;
  latestRedemptionFee_not_in?: Maybe<Array<Scalars['BigInt']>>;
  withdrawalRequestAt?: Maybe<Scalars['BigInt']>;
  withdrawalRequestAt_not?: Maybe<Scalars['BigInt']>;
  withdrawalRequestAt_gt?: Maybe<Scalars['BigInt']>;
  withdrawalRequestAt_lt?: Maybe<Scalars['BigInt']>;
  withdrawalRequestAt_gte?: Maybe<Scalars['BigInt']>;
  withdrawalRequestAt_lte?: Maybe<Scalars['BigInt']>;
  withdrawalRequestAt_in?: Maybe<Array<Scalars['BigInt']>>;
  withdrawalRequestAt_not_in?: Maybe<Array<Scalars['BigInt']>>;
  redeemedAt?: Maybe<Scalars['BigInt']>;
  redeemedAt_not?: Maybe<Scalars['BigInt']>;
  redeemedAt_gt?: Maybe<Scalars['BigInt']>;
  redeemedAt_lt?: Maybe<Scalars['BigInt']>;
  redeemedAt_gte?: Maybe<Scalars['BigInt']>;
  redeemedAt_lte?: Maybe<Scalars['BigInt']>;
  redeemedAt_in?: Maybe<Array<Scalars['BigInt']>>;
  redeemedAt_not_in?: Maybe<Array<Scalars['BigInt']>>;
  lastRequestedDigest?: Maybe<Scalars['Bytes']>;
  lastRequestedDigest_not?: Maybe<Scalars['Bytes']>;
  lastRequestedDigest_in?: Maybe<Array<Scalars['Bytes']>>;
  lastRequestedDigest_not_in?: Maybe<Array<Scalars['Bytes']>>;
  lastRequestedDigest_contains?: Maybe<Scalars['Bytes']>;
  lastRequestedDigest_not_contains?: Maybe<Scalars['Bytes']>;
  outpoint?: Maybe<Scalars['Bytes']>;
  outpoint_not?: Maybe<Scalars['Bytes']>;
  outpoint_in?: Maybe<Array<Scalars['Bytes']>>;
  outpoint_not_in?: Maybe<Array<Scalars['Bytes']>>;
  outpoint_contains?: Maybe<Scalars['Bytes']>;
  outpoint_not_contains?: Maybe<Scalars['Bytes']>;
  utxoSize?: Maybe<Scalars['BigInt']>;
  utxoSize_not?: Maybe<Scalars['BigInt']>;
  utxoSize_gt?: Maybe<Scalars['BigInt']>;
  utxoSize_lt?: Maybe<Scalars['BigInt']>;
  utxoSize_gte?: Maybe<Scalars['BigInt']>;
  utxoSize_lte?: Maybe<Scalars['BigInt']>;
  utxoSize_in?: Maybe<Array<Scalars['BigInt']>>;
  utxoSize_not_in?: Maybe<Array<Scalars['BigInt']>>;
  txid?: Maybe<Scalars['Bytes']>;
  txid_not?: Maybe<Scalars['Bytes']>;
  txid_in?: Maybe<Array<Scalars['Bytes']>>;
  txid_not_in?: Maybe<Array<Scalars['Bytes']>>;
  txid_contains?: Maybe<Scalars['Bytes']>;
  txid_not_contains?: Maybe<Scalars['Bytes']>;
};

export enum DepositRedemption_OrderBy {
  Id = 'id',
  Deposit = 'deposit',
  RedeemerOutputScript = 'redeemerOutputScript',
  RequestedFee = 'requestedFee',
  LatestRedemptionFee = 'latestRedemptionFee',
  WithdrawalRequestAt = 'withdrawalRequestAt',
  RedeemedAt = 'redeemedAt',
  LastRequestedDigest = 'lastRequestedDigest',
  Outpoint = 'outpoint',
  UtxoSize = 'utxoSize',
  Txid = 'txid'
}

export type DepositSetup = {
  __typename?: 'DepositSetup';
  id: Scalars['ID'];
  deposit: Deposit;
  failureReason?: Maybe<SetupFailedReason>;
  fundingProofTimerStartedAt?: Maybe<Scalars['BigInt']>;
};

export type DepositSetup_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  deposit?: Maybe<Scalars['String']>;
  deposit_not?: Maybe<Scalars['String']>;
  deposit_gt?: Maybe<Scalars['String']>;
  deposit_lt?: Maybe<Scalars['String']>;
  deposit_gte?: Maybe<Scalars['String']>;
  deposit_lte?: Maybe<Scalars['String']>;
  deposit_in?: Maybe<Array<Scalars['String']>>;
  deposit_not_in?: Maybe<Array<Scalars['String']>>;
  deposit_contains?: Maybe<Scalars['String']>;
  deposit_not_contains?: Maybe<Scalars['String']>;
  deposit_starts_with?: Maybe<Scalars['String']>;
  deposit_not_starts_with?: Maybe<Scalars['String']>;
  deposit_ends_with?: Maybe<Scalars['String']>;
  deposit_not_ends_with?: Maybe<Scalars['String']>;
  failureReason?: Maybe<SetupFailedReason>;
  failureReason_not?: Maybe<SetupFailedReason>;
  fundingProofTimerStartedAt?: Maybe<Scalars['BigInt']>;
  fundingProofTimerStartedAt_not?: Maybe<Scalars['BigInt']>;
  fundingProofTimerStartedAt_gt?: Maybe<Scalars['BigInt']>;
  fundingProofTimerStartedAt_lt?: Maybe<Scalars['BigInt']>;
  fundingProofTimerStartedAt_gte?: Maybe<Scalars['BigInt']>;
  fundingProofTimerStartedAt_lte?: Maybe<Scalars['BigInt']>;
  fundingProofTimerStartedAt_in?: Maybe<Array<Scalars['BigInt']>>;
  fundingProofTimerStartedAt_not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export enum DepositSetup_OrderBy {
  Id = 'id',
  Deposit = 'deposit',
  FailureReason = 'failureReason',
  FundingProofTimerStartedAt = 'fundingProofTimerStartedAt'
}

export enum DepositState {
  Start = 'START',
  AwaitingSignerSetup = 'AWAITING_SIGNER_SETUP',
  AwaitingBtcFundingProof = 'AWAITING_BTC_FUNDING_PROOF',
  FailedSetup = 'FAILED_SETUP',
  Active = 'ACTIVE',
  AwaitingWithdrawalSignature = 'AWAITING_WITHDRAWAL_SIGNATURE',
  AwaitingWithdrawalProof = 'AWAITING_WITHDRAWAL_PROOF',
  Redeemed = 'REDEEMED',
  CourtesyCall = 'COURTESY_CALL',
  FraudLiquidationInProgress = 'FRAUD_LIQUIDATION_IN_PROGRESS',
  LiquidationInProgress = 'LIQUIDATION_IN_PROGRESS',
  Liquidated = 'LIQUIDATED'
}

export type Deposit_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  index?: Maybe<Scalars['Int']>;
  index_not?: Maybe<Scalars['Int']>;
  index_gt?: Maybe<Scalars['Int']>;
  index_lt?: Maybe<Scalars['Int']>;
  index_gte?: Maybe<Scalars['Int']>;
  index_lte?: Maybe<Scalars['Int']>;
  index_in?: Maybe<Array<Scalars['Int']>>;
  index_not_in?: Maybe<Array<Scalars['Int']>>;
  tbtcSystem?: Maybe<Scalars['Bytes']>;
  tbtcSystem_not?: Maybe<Scalars['Bytes']>;
  tbtcSystem_in?: Maybe<Array<Scalars['Bytes']>>;
  tbtcSystem_not_in?: Maybe<Array<Scalars['Bytes']>>;
  tbtcSystem_contains?: Maybe<Scalars['Bytes']>;
  tbtcSystem_not_contains?: Maybe<Scalars['Bytes']>;
  contractAddress?: Maybe<Scalars['Bytes']>;
  contractAddress_not?: Maybe<Scalars['Bytes']>;
  contractAddress_in?: Maybe<Array<Scalars['Bytes']>>;
  contractAddress_not_in?: Maybe<Array<Scalars['Bytes']>>;
  contractAddress_contains?: Maybe<Scalars['Bytes']>;
  contractAddress_not_contains?: Maybe<Scalars['Bytes']>;
  tdtToken?: Maybe<Scalars['String']>;
  tdtToken_not?: Maybe<Scalars['String']>;
  tdtToken_gt?: Maybe<Scalars['String']>;
  tdtToken_lt?: Maybe<Scalars['String']>;
  tdtToken_gte?: Maybe<Scalars['String']>;
  tdtToken_lte?: Maybe<Scalars['String']>;
  tdtToken_in?: Maybe<Array<Scalars['String']>>;
  tdtToken_not_in?: Maybe<Array<Scalars['String']>>;
  tdtToken_contains?: Maybe<Scalars['String']>;
  tdtToken_not_contains?: Maybe<Scalars['String']>;
  tdtToken_starts_with?: Maybe<Scalars['String']>;
  tdtToken_not_starts_with?: Maybe<Scalars['String']>;
  tdtToken_ends_with?: Maybe<Scalars['String']>;
  tdtToken_not_ends_with?: Maybe<Scalars['String']>;
  currentState?: Maybe<DepositState>;
  currentState_not?: Maybe<DepositState>;
  createdAt?: Maybe<Scalars['BigInt']>;
  createdAt_not?: Maybe<Scalars['BigInt']>;
  createdAt_gt?: Maybe<Scalars['BigInt']>;
  createdAt_lt?: Maybe<Scalars['BigInt']>;
  createdAt_gte?: Maybe<Scalars['BigInt']>;
  createdAt_lte?: Maybe<Scalars['BigInt']>;
  createdAt_in?: Maybe<Array<Scalars['BigInt']>>;
  createdAt_not_in?: Maybe<Array<Scalars['BigInt']>>;
  closedAt?: Maybe<Scalars['BigInt']>;
  closedAt_not?: Maybe<Scalars['BigInt']>;
  closedAt_gt?: Maybe<Scalars['BigInt']>;
  closedAt_lt?: Maybe<Scalars['BigInt']>;
  closedAt_gte?: Maybe<Scalars['BigInt']>;
  closedAt_lte?: Maybe<Scalars['BigInt']>;
  closedAt_in?: Maybe<Array<Scalars['BigInt']>>;
  closedAt_not_in?: Maybe<Array<Scalars['BigInt']>>;
  updatedAt?: Maybe<Scalars['BigInt']>;
  updatedAt_not?: Maybe<Scalars['BigInt']>;
  updatedAt_gt?: Maybe<Scalars['BigInt']>;
  updatedAt_lt?: Maybe<Scalars['BigInt']>;
  updatedAt_gte?: Maybe<Scalars['BigInt']>;
  updatedAt_lte?: Maybe<Scalars['BigInt']>;
  updatedAt_in?: Maybe<Array<Scalars['BigInt']>>;
  updatedAt_not_in?: Maybe<Array<Scalars['BigInt']>>;
  redemptionStartedAt?: Maybe<Scalars['BigInt']>;
  redemptionStartedAt_not?: Maybe<Scalars['BigInt']>;
  redemptionStartedAt_gt?: Maybe<Scalars['BigInt']>;
  redemptionStartedAt_lt?: Maybe<Scalars['BigInt']>;
  redemptionStartedAt_gte?: Maybe<Scalars['BigInt']>;
  redemptionStartedAt_lte?: Maybe<Scalars['BigInt']>;
  redemptionStartedAt_in?: Maybe<Array<Scalars['BigInt']>>;
  redemptionStartedAt_not_in?: Maybe<Array<Scalars['BigInt']>>;
  withdrawalRequestTimerStart?: Maybe<Scalars['BigInt']>;
  withdrawalRequestTimerStart_not?: Maybe<Scalars['BigInt']>;
  withdrawalRequestTimerStart_gt?: Maybe<Scalars['BigInt']>;
  withdrawalRequestTimerStart_lt?: Maybe<Scalars['BigInt']>;
  withdrawalRequestTimerStart_gte?: Maybe<Scalars['BigInt']>;
  withdrawalRequestTimerStart_lte?: Maybe<Scalars['BigInt']>;
  withdrawalRequestTimerStart_in?: Maybe<Array<Scalars['BigInt']>>;
  withdrawalRequestTimerStart_not_in?: Maybe<Array<Scalars['BigInt']>>;
  currentStateTimesOutAt?: Maybe<Scalars['BigInt']>;
  currentStateTimesOutAt_not?: Maybe<Scalars['BigInt']>;
  currentStateTimesOutAt_gt?: Maybe<Scalars['BigInt']>;
  currentStateTimesOutAt_lt?: Maybe<Scalars['BigInt']>;
  currentStateTimesOutAt_gte?: Maybe<Scalars['BigInt']>;
  currentStateTimesOutAt_lte?: Maybe<Scalars['BigInt']>;
  currentStateTimesOutAt_in?: Maybe<Array<Scalars['BigInt']>>;
  currentStateTimesOutAt_not_in?: Maybe<Array<Scalars['BigInt']>>;
  owner?: Maybe<Scalars['Bytes']>;
  owner_not?: Maybe<Scalars['Bytes']>;
  owner_in?: Maybe<Array<Scalars['Bytes']>>;
  owner_not_in?: Maybe<Array<Scalars['Bytes']>>;
  owner_contains?: Maybe<Scalars['Bytes']>;
  owner_not_contains?: Maybe<Scalars['Bytes']>;
  failureReason?: Maybe<SetupFailedReason>;
  failureReason_not?: Maybe<SetupFailedReason>;
  creator?: Maybe<Scalars['Bytes']>;
  creator_not?: Maybe<Scalars['Bytes']>;
  creator_in?: Maybe<Array<Scalars['Bytes']>>;
  creator_not_in?: Maybe<Array<Scalars['Bytes']>>;
  creator_contains?: Maybe<Scalars['Bytes']>;
  creator_not_contains?: Maybe<Scalars['Bytes']>;
  lastActor?: Maybe<Scalars['Bytes']>;
  lastActor_not?: Maybe<Scalars['Bytes']>;
  lastActor_in?: Maybe<Array<Scalars['Bytes']>>;
  lastActor_not_in?: Maybe<Array<Scalars['Bytes']>>;
  lastActor_contains?: Maybe<Scalars['Bytes']>;
  lastActor_not_contains?: Maybe<Scalars['Bytes']>;
  keepAddress?: Maybe<Scalars['Bytes']>;
  keepAddress_not?: Maybe<Scalars['Bytes']>;
  keepAddress_in?: Maybe<Array<Scalars['Bytes']>>;
  keepAddress_not_in?: Maybe<Array<Scalars['Bytes']>>;
  keepAddress_contains?: Maybe<Scalars['Bytes']>;
  keepAddress_not_contains?: Maybe<Scalars['Bytes']>;
  lotSizeSatoshis?: Maybe<Scalars['BigInt']>;
  lotSizeSatoshis_not?: Maybe<Scalars['BigInt']>;
  lotSizeSatoshis_gt?: Maybe<Scalars['BigInt']>;
  lotSizeSatoshis_lt?: Maybe<Scalars['BigInt']>;
  lotSizeSatoshis_gte?: Maybe<Scalars['BigInt']>;
  lotSizeSatoshis_lte?: Maybe<Scalars['BigInt']>;
  lotSizeSatoshis_in?: Maybe<Array<Scalars['BigInt']>>;
  lotSizeSatoshis_not_in?: Maybe<Array<Scalars['BigInt']>>;
  initialCollateralizedPercent?: Maybe<Scalars['Int']>;
  initialCollateralizedPercent_not?: Maybe<Scalars['Int']>;
  initialCollateralizedPercent_gt?: Maybe<Scalars['Int']>;
  initialCollateralizedPercent_lt?: Maybe<Scalars['Int']>;
  initialCollateralizedPercent_gte?: Maybe<Scalars['Int']>;
  initialCollateralizedPercent_lte?: Maybe<Scalars['Int']>;
  initialCollateralizedPercent_in?: Maybe<Array<Scalars['Int']>>;
  initialCollateralizedPercent_not_in?: Maybe<Array<Scalars['Int']>>;
  undercollateralizedThresholdPercent?: Maybe<Scalars['Int']>;
  undercollateralizedThresholdPercent_not?: Maybe<Scalars['Int']>;
  undercollateralizedThresholdPercent_gt?: Maybe<Scalars['Int']>;
  undercollateralizedThresholdPercent_lt?: Maybe<Scalars['Int']>;
  undercollateralizedThresholdPercent_gte?: Maybe<Scalars['Int']>;
  undercollateralizedThresholdPercent_lte?: Maybe<Scalars['Int']>;
  undercollateralizedThresholdPercent_in?: Maybe<Array<Scalars['Int']>>;
  undercollateralizedThresholdPercent_not_in?: Maybe<Array<Scalars['Int']>>;
  severelyUndercollateralizedThresholdPercent?: Maybe<Scalars['Int']>;
  severelyUndercollateralizedThresholdPercent_not?: Maybe<Scalars['Int']>;
  severelyUndercollateralizedThresholdPercent_gt?: Maybe<Scalars['Int']>;
  severelyUndercollateralizedThresholdPercent_lt?: Maybe<Scalars['Int']>;
  severelyUndercollateralizedThresholdPercent_gte?: Maybe<Scalars['Int']>;
  severelyUndercollateralizedThresholdPercent_lte?: Maybe<Scalars['Int']>;
  severelyUndercollateralizedThresholdPercent_in?: Maybe<Array<Scalars['Int']>>;
  severelyUndercollateralizedThresholdPercent_not_in?: Maybe<Array<Scalars['Int']>>;
  signerFee?: Maybe<Scalars['BigInt']>;
  signerFee_not?: Maybe<Scalars['BigInt']>;
  signerFee_gt?: Maybe<Scalars['BigInt']>;
  signerFee_lt?: Maybe<Scalars['BigInt']>;
  signerFee_gte?: Maybe<Scalars['BigInt']>;
  signerFee_lte?: Maybe<Scalars['BigInt']>;
  signerFee_in?: Maybe<Array<Scalars['BigInt']>>;
  signerFee_not_in?: Maybe<Array<Scalars['BigInt']>>;
  utxoSize?: Maybe<Scalars['BigInt']>;
  utxoSize_not?: Maybe<Scalars['BigInt']>;
  utxoSize_gt?: Maybe<Scalars['BigInt']>;
  utxoSize_lt?: Maybe<Scalars['BigInt']>;
  utxoSize_gte?: Maybe<Scalars['BigInt']>;
  utxoSize_lte?: Maybe<Scalars['BigInt']>;
  utxoSize_in?: Maybe<Array<Scalars['BigInt']>>;
  utxoSize_not_in?: Maybe<Array<Scalars['BigInt']>>;
  endOfTerm?: Maybe<Scalars['BigInt']>;
  endOfTerm_not?: Maybe<Scalars['BigInt']>;
  endOfTerm_gt?: Maybe<Scalars['BigInt']>;
  endOfTerm_lt?: Maybe<Scalars['BigInt']>;
  endOfTerm_gte?: Maybe<Scalars['BigInt']>;
  endOfTerm_lte?: Maybe<Scalars['BigInt']>;
  endOfTerm_in?: Maybe<Array<Scalars['BigInt']>>;
  endOfTerm_not_in?: Maybe<Array<Scalars['BigInt']>>;
  bondedECDSAKeep?: Maybe<Scalars['String']>;
  bondedECDSAKeep_not?: Maybe<Scalars['String']>;
  bondedECDSAKeep_gt?: Maybe<Scalars['String']>;
  bondedECDSAKeep_lt?: Maybe<Scalars['String']>;
  bondedECDSAKeep_gte?: Maybe<Scalars['String']>;
  bondedECDSAKeep_lte?: Maybe<Scalars['String']>;
  bondedECDSAKeep_in?: Maybe<Array<Scalars['String']>>;
  bondedECDSAKeep_not_in?: Maybe<Array<Scalars['String']>>;
  bondedECDSAKeep_contains?: Maybe<Scalars['String']>;
  bondedECDSAKeep_not_contains?: Maybe<Scalars['String']>;
  bondedECDSAKeep_starts_with?: Maybe<Scalars['String']>;
  bondedECDSAKeep_not_starts_with?: Maybe<Scalars['String']>;
  bondedECDSAKeep_ends_with?: Maybe<Scalars['String']>;
  bondedECDSAKeep_not_ends_with?: Maybe<Scalars['String']>;
  etcToBtcRatio?: Maybe<Scalars['BigInt']>;
  etcToBtcRatio_not?: Maybe<Scalars['BigInt']>;
  etcToBtcRatio_gt?: Maybe<Scalars['BigInt']>;
  etcToBtcRatio_lt?: Maybe<Scalars['BigInt']>;
  etcToBtcRatio_gte?: Maybe<Scalars['BigInt']>;
  etcToBtcRatio_lte?: Maybe<Scalars['BigInt']>;
  etcToBtcRatio_in?: Maybe<Array<Scalars['BigInt']>>;
  etcToBtcRatio_not_in?: Maybe<Array<Scalars['BigInt']>>;
  depositLiquidation?: Maybe<Scalars['String']>;
  depositLiquidation_not?: Maybe<Scalars['String']>;
  depositLiquidation_gt?: Maybe<Scalars['String']>;
  depositLiquidation_lt?: Maybe<Scalars['String']>;
  depositLiquidation_gte?: Maybe<Scalars['String']>;
  depositLiquidation_lte?: Maybe<Scalars['String']>;
  depositLiquidation_in?: Maybe<Array<Scalars['String']>>;
  depositLiquidation_not_in?: Maybe<Array<Scalars['String']>>;
  depositLiquidation_contains?: Maybe<Scalars['String']>;
  depositLiquidation_not_contains?: Maybe<Scalars['String']>;
  depositLiquidation_starts_with?: Maybe<Scalars['String']>;
  depositLiquidation_not_starts_with?: Maybe<Scalars['String']>;
  depositLiquidation_ends_with?: Maybe<Scalars['String']>;
  depositLiquidation_not_ends_with?: Maybe<Scalars['String']>;
  depositRedemption?: Maybe<Scalars['String']>;
  depositRedemption_not?: Maybe<Scalars['String']>;
  depositRedemption_gt?: Maybe<Scalars['String']>;
  depositRedemption_lt?: Maybe<Scalars['String']>;
  depositRedemption_gte?: Maybe<Scalars['String']>;
  depositRedemption_lte?: Maybe<Scalars['String']>;
  depositRedemption_in?: Maybe<Array<Scalars['String']>>;
  depositRedemption_not_in?: Maybe<Array<Scalars['String']>>;
  depositRedemption_contains?: Maybe<Scalars['String']>;
  depositRedemption_not_contains?: Maybe<Scalars['String']>;
  depositRedemption_starts_with?: Maybe<Scalars['String']>;
  depositRedemption_not_starts_with?: Maybe<Scalars['String']>;
  depositRedemption_ends_with?: Maybe<Scalars['String']>;
  depositRedemption_not_ends_with?: Maybe<Scalars['String']>;
  filter_liquidationLikeState?: Maybe<Scalars['Boolean']>;
  filter_liquidationLikeState_not?: Maybe<Scalars['Boolean']>;
  filter_liquidationLikeState_in?: Maybe<Array<Scalars['Boolean']>>;
  filter_liquidationLikeState_not_in?: Maybe<Array<Scalars['Boolean']>>;
  filter_liquidationLikeOrSignerFailureState?: Maybe<Scalars['Boolean']>;
  filter_liquidationLikeOrSignerFailureState_not?: Maybe<Scalars['Boolean']>;
  filter_liquidationLikeOrSignerFailureState_in?: Maybe<Array<Scalars['Boolean']>>;
  filter_liquidationLikeOrSignerFailureState_not_in?: Maybe<Array<Scalars['Boolean']>>;
  filter_activeLikeState?: Maybe<Scalars['Boolean']>;
  filter_activeLikeState_not?: Maybe<Scalars['Boolean']>;
  filter_activeLikeState_in?: Maybe<Array<Scalars['Boolean']>>;
  filter_activeLikeState_not_in?: Maybe<Array<Scalars['Boolean']>>;
  filter_unmintedTDT?: Maybe<Scalars['Boolean']>;
  filter_unmintedTDT_not?: Maybe<Scalars['Boolean']>;
  filter_unmintedTDT_in?: Maybe<Array<Scalars['Boolean']>>;
  filter_unmintedTDT_not_in?: Maybe<Array<Scalars['Boolean']>>;
  filter_redeemableAsOf?: Maybe<Scalars['BigInt']>;
  filter_redeemableAsOf_not?: Maybe<Scalars['BigInt']>;
  filter_redeemableAsOf_gt?: Maybe<Scalars['BigInt']>;
  filter_redeemableAsOf_lt?: Maybe<Scalars['BigInt']>;
  filter_redeemableAsOf_gte?: Maybe<Scalars['BigInt']>;
  filter_redeemableAsOf_lte?: Maybe<Scalars['BigInt']>;
  filter_redeemableAsOf_in?: Maybe<Array<Scalars['BigInt']>>;
  filter_redeemableAsOf_not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export enum Deposit_OrderBy {
  Id = 'id',
  Index = 'index',
  TbtcSystem = 'tbtcSystem',
  ContractAddress = 'contractAddress',
  TdtToken = 'tdtToken',
  CurrentState = 'currentState',
  CreatedAt = 'createdAt',
  ClosedAt = 'closedAt',
  UpdatedAt = 'updatedAt',
  RedemptionStartedAt = 'redemptionStartedAt',
  WithdrawalRequestTimerStart = 'withdrawalRequestTimerStart',
  CurrentStateTimesOutAt = 'currentStateTimesOutAt',
  Owner = 'owner',
  FailureReason = 'failureReason',
  Creator = 'creator',
  LastActor = 'lastActor',
  KeepAddress = 'keepAddress',
  LotSizeSatoshis = 'lotSizeSatoshis',
  InitialCollateralizedPercent = 'initialCollateralizedPercent',
  UndercollateralizedThresholdPercent = 'undercollateralizedThresholdPercent',
  SeverelyUndercollateralizedThresholdPercent = 'severelyUndercollateralizedThresholdPercent',
  SignerFee = 'signerFee',
  UtxoSize = 'utxoSize',
  EndOfTerm = 'endOfTerm',
  BondedEcdsaKeep = 'bondedECDSAKeep',
  EtcToBtcRatio = 'etcToBtcRatio',
  DepositLiquidation = 'depositLiquidation',
  DepositRedemption = 'depositRedemption',
  DepositSetup = 'depositSetup',
  FilterLiquidationLikeState = 'filter_liquidationLikeState',
  FilterLiquidationLikeOrSignerFailureState = 'filter_liquidationLikeOrSignerFailureState',
  FilterActiveLikeState = 'filter_activeLikeState',
  FilterUnmintedTdt = 'filter_unmintedTDT',
  FilterRedeemableAsOf = 'filter_redeemableAsOf'
}

export type Event = {
  id: Scalars['ID'];
  submitter: Scalars['Bytes'];
  transactionHash: Scalars['String'];
  timestamp: Scalars['BigInt'];
  deposit?: Maybe<Deposit>;
  operator?: Maybe<Operator>;
};

export type Event_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  submitter?: Maybe<Scalars['Bytes']>;
  submitter_not?: Maybe<Scalars['Bytes']>;
  submitter_in?: Maybe<Array<Scalars['Bytes']>>;
  submitter_not_in?: Maybe<Array<Scalars['Bytes']>>;
  submitter_contains?: Maybe<Scalars['Bytes']>;
  submitter_not_contains?: Maybe<Scalars['Bytes']>;
  transactionHash?: Maybe<Scalars['String']>;
  transactionHash_not?: Maybe<Scalars['String']>;
  transactionHash_gt?: Maybe<Scalars['String']>;
  transactionHash_lt?: Maybe<Scalars['String']>;
  transactionHash_gte?: Maybe<Scalars['String']>;
  transactionHash_lte?: Maybe<Scalars['String']>;
  transactionHash_in?: Maybe<Array<Scalars['String']>>;
  transactionHash_not_in?: Maybe<Array<Scalars['String']>>;
  transactionHash_contains?: Maybe<Scalars['String']>;
  transactionHash_not_contains?: Maybe<Scalars['String']>;
  transactionHash_starts_with?: Maybe<Scalars['String']>;
  transactionHash_not_starts_with?: Maybe<Scalars['String']>;
  transactionHash_ends_with?: Maybe<Scalars['String']>;
  transactionHash_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  deposit?: Maybe<Scalars['String']>;
  deposit_not?: Maybe<Scalars['String']>;
  deposit_gt?: Maybe<Scalars['String']>;
  deposit_lt?: Maybe<Scalars['String']>;
  deposit_gte?: Maybe<Scalars['String']>;
  deposit_lte?: Maybe<Scalars['String']>;
  deposit_in?: Maybe<Array<Scalars['String']>>;
  deposit_not_in?: Maybe<Array<Scalars['String']>>;
  deposit_contains?: Maybe<Scalars['String']>;
  deposit_not_contains?: Maybe<Scalars['String']>;
  deposit_starts_with?: Maybe<Scalars['String']>;
  deposit_not_starts_with?: Maybe<Scalars['String']>;
  deposit_ends_with?: Maybe<Scalars['String']>;
  deposit_not_ends_with?: Maybe<Scalars['String']>;
  operator?: Maybe<Scalars['String']>;
  operator_not?: Maybe<Scalars['String']>;
  operator_gt?: Maybe<Scalars['String']>;
  operator_lt?: Maybe<Scalars['String']>;
  operator_gte?: Maybe<Scalars['String']>;
  operator_lte?: Maybe<Scalars['String']>;
  operator_in?: Maybe<Array<Scalars['String']>>;
  operator_not_in?: Maybe<Array<Scalars['String']>>;
  operator_contains?: Maybe<Scalars['String']>;
  operator_not_contains?: Maybe<Scalars['String']>;
  operator_starts_with?: Maybe<Scalars['String']>;
  operator_not_starts_with?: Maybe<Scalars['String']>;
  operator_ends_with?: Maybe<Scalars['String']>;
  operator_not_ends_with?: Maybe<Scalars['String']>;
};

export enum Event_OrderBy {
  Id = 'id',
  Submitter = 'submitter',
  TransactionHash = 'transactionHash',
  Timestamp = 'timestamp',
  Deposit = 'deposit',
  Operator = 'operator'
}

export type ExitedCourtesyCallEvent = Event & {
  __typename?: 'ExitedCourtesyCallEvent';
  id: Scalars['ID'];
  submitter: Scalars['Bytes'];
  transactionHash: Scalars['String'];
  timestamp: Scalars['BigInt'];
  deposit?: Maybe<Deposit>;
  operator?: Maybe<Operator>;
};

export type ExitedCourtesyCallEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  submitter?: Maybe<Scalars['Bytes']>;
  submitter_not?: Maybe<Scalars['Bytes']>;
  submitter_in?: Maybe<Array<Scalars['Bytes']>>;
  submitter_not_in?: Maybe<Array<Scalars['Bytes']>>;
  submitter_contains?: Maybe<Scalars['Bytes']>;
  submitter_not_contains?: Maybe<Scalars['Bytes']>;
  transactionHash?: Maybe<Scalars['String']>;
  transactionHash_not?: Maybe<Scalars['String']>;
  transactionHash_gt?: Maybe<Scalars['String']>;
  transactionHash_lt?: Maybe<Scalars['String']>;
  transactionHash_gte?: Maybe<Scalars['String']>;
  transactionHash_lte?: Maybe<Scalars['String']>;
  transactionHash_in?: Maybe<Array<Scalars['String']>>;
  transactionHash_not_in?: Maybe<Array<Scalars['String']>>;
  transactionHash_contains?: Maybe<Scalars['String']>;
  transactionHash_not_contains?: Maybe<Scalars['String']>;
  transactionHash_starts_with?: Maybe<Scalars['String']>;
  transactionHash_not_starts_with?: Maybe<Scalars['String']>;
  transactionHash_ends_with?: Maybe<Scalars['String']>;
  transactionHash_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  deposit?: Maybe<Scalars['String']>;
  deposit_not?: Maybe<Scalars['String']>;
  deposit_gt?: Maybe<Scalars['String']>;
  deposit_lt?: Maybe<Scalars['String']>;
  deposit_gte?: Maybe<Scalars['String']>;
  deposit_lte?: Maybe<Scalars['String']>;
  deposit_in?: Maybe<Array<Scalars['String']>>;
  deposit_not_in?: Maybe<Array<Scalars['String']>>;
  deposit_contains?: Maybe<Scalars['String']>;
  deposit_not_contains?: Maybe<Scalars['String']>;
  deposit_starts_with?: Maybe<Scalars['String']>;
  deposit_not_starts_with?: Maybe<Scalars['String']>;
  deposit_ends_with?: Maybe<Scalars['String']>;
  deposit_not_ends_with?: Maybe<Scalars['String']>;
  operator?: Maybe<Scalars['String']>;
  operator_not?: Maybe<Scalars['String']>;
  operator_gt?: Maybe<Scalars['String']>;
  operator_lt?: Maybe<Scalars['String']>;
  operator_gte?: Maybe<Scalars['String']>;
  operator_lte?: Maybe<Scalars['String']>;
  operator_in?: Maybe<Array<Scalars['String']>>;
  operator_not_in?: Maybe<Array<Scalars['String']>>;
  operator_contains?: Maybe<Scalars['String']>;
  operator_not_contains?: Maybe<Scalars['String']>;
  operator_starts_with?: Maybe<Scalars['String']>;
  operator_not_starts_with?: Maybe<Scalars['String']>;
  operator_ends_with?: Maybe<Scalars['String']>;
  operator_not_ends_with?: Maybe<Scalars['String']>;
};

export enum ExitedCourtesyCallEvent_OrderBy {
  Id = 'id',
  Submitter = 'submitter',
  TransactionHash = 'transactionHash',
  Timestamp = 'timestamp',
  Deposit = 'deposit',
  Operator = 'operator'
}

export type FundedEvent = Event & {
  __typename?: 'FundedEvent';
  id: Scalars['ID'];
  submitter: Scalars['Bytes'];
  transactionHash: Scalars['String'];
  timestamp: Scalars['BigInt'];
  deposit?: Maybe<Deposit>;
  operator?: Maybe<Operator>;
  tx: Scalars['Bytes'];
};

export type FundedEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  submitter?: Maybe<Scalars['Bytes']>;
  submitter_not?: Maybe<Scalars['Bytes']>;
  submitter_in?: Maybe<Array<Scalars['Bytes']>>;
  submitter_not_in?: Maybe<Array<Scalars['Bytes']>>;
  submitter_contains?: Maybe<Scalars['Bytes']>;
  submitter_not_contains?: Maybe<Scalars['Bytes']>;
  transactionHash?: Maybe<Scalars['String']>;
  transactionHash_not?: Maybe<Scalars['String']>;
  transactionHash_gt?: Maybe<Scalars['String']>;
  transactionHash_lt?: Maybe<Scalars['String']>;
  transactionHash_gte?: Maybe<Scalars['String']>;
  transactionHash_lte?: Maybe<Scalars['String']>;
  transactionHash_in?: Maybe<Array<Scalars['String']>>;
  transactionHash_not_in?: Maybe<Array<Scalars['String']>>;
  transactionHash_contains?: Maybe<Scalars['String']>;
  transactionHash_not_contains?: Maybe<Scalars['String']>;
  transactionHash_starts_with?: Maybe<Scalars['String']>;
  transactionHash_not_starts_with?: Maybe<Scalars['String']>;
  transactionHash_ends_with?: Maybe<Scalars['String']>;
  transactionHash_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  deposit?: Maybe<Scalars['String']>;
  deposit_not?: Maybe<Scalars['String']>;
  deposit_gt?: Maybe<Scalars['String']>;
  deposit_lt?: Maybe<Scalars['String']>;
  deposit_gte?: Maybe<Scalars['String']>;
  deposit_lte?: Maybe<Scalars['String']>;
  deposit_in?: Maybe<Array<Scalars['String']>>;
  deposit_not_in?: Maybe<Array<Scalars['String']>>;
  deposit_contains?: Maybe<Scalars['String']>;
  deposit_not_contains?: Maybe<Scalars['String']>;
  deposit_starts_with?: Maybe<Scalars['String']>;
  deposit_not_starts_with?: Maybe<Scalars['String']>;
  deposit_ends_with?: Maybe<Scalars['String']>;
  deposit_not_ends_with?: Maybe<Scalars['String']>;
  operator?: Maybe<Scalars['String']>;
  operator_not?: Maybe<Scalars['String']>;
  operator_gt?: Maybe<Scalars['String']>;
  operator_lt?: Maybe<Scalars['String']>;
  operator_gte?: Maybe<Scalars['String']>;
  operator_lte?: Maybe<Scalars['String']>;
  operator_in?: Maybe<Array<Scalars['String']>>;
  operator_not_in?: Maybe<Array<Scalars['String']>>;
  operator_contains?: Maybe<Scalars['String']>;
  operator_not_contains?: Maybe<Scalars['String']>;
  operator_starts_with?: Maybe<Scalars['String']>;
  operator_not_starts_with?: Maybe<Scalars['String']>;
  operator_ends_with?: Maybe<Scalars['String']>;
  operator_not_ends_with?: Maybe<Scalars['String']>;
  tx?: Maybe<Scalars['Bytes']>;
  tx_not?: Maybe<Scalars['Bytes']>;
  tx_in?: Maybe<Array<Scalars['Bytes']>>;
  tx_not_in?: Maybe<Array<Scalars['Bytes']>>;
  tx_contains?: Maybe<Scalars['Bytes']>;
  tx_not_contains?: Maybe<Scalars['Bytes']>;
};

export enum FundedEvent_OrderBy {
  Id = 'id',
  Submitter = 'submitter',
  TransactionHash = 'transactionHash',
  Timestamp = 'timestamp',
  Deposit = 'deposit',
  Operator = 'operator',
  Tx = 'tx'
}

export type GotRedemptionSignatureEvent = Event & {
  __typename?: 'GotRedemptionSignatureEvent';
  id: Scalars['ID'];
  submitter: Scalars['Bytes'];
  transactionHash: Scalars['String'];
  timestamp: Scalars['BigInt'];
  deposit?: Maybe<Deposit>;
  operator?: Maybe<Operator>;
};

export type GotRedemptionSignatureEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  submitter?: Maybe<Scalars['Bytes']>;
  submitter_not?: Maybe<Scalars['Bytes']>;
  submitter_in?: Maybe<Array<Scalars['Bytes']>>;
  submitter_not_in?: Maybe<Array<Scalars['Bytes']>>;
  submitter_contains?: Maybe<Scalars['Bytes']>;
  submitter_not_contains?: Maybe<Scalars['Bytes']>;
  transactionHash?: Maybe<Scalars['String']>;
  transactionHash_not?: Maybe<Scalars['String']>;
  transactionHash_gt?: Maybe<Scalars['String']>;
  transactionHash_lt?: Maybe<Scalars['String']>;
  transactionHash_gte?: Maybe<Scalars['String']>;
  transactionHash_lte?: Maybe<Scalars['String']>;
  transactionHash_in?: Maybe<Array<Scalars['String']>>;
  transactionHash_not_in?: Maybe<Array<Scalars['String']>>;
  transactionHash_contains?: Maybe<Scalars['String']>;
  transactionHash_not_contains?: Maybe<Scalars['String']>;
  transactionHash_starts_with?: Maybe<Scalars['String']>;
  transactionHash_not_starts_with?: Maybe<Scalars['String']>;
  transactionHash_ends_with?: Maybe<Scalars['String']>;
  transactionHash_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  deposit?: Maybe<Scalars['String']>;
  deposit_not?: Maybe<Scalars['String']>;
  deposit_gt?: Maybe<Scalars['String']>;
  deposit_lt?: Maybe<Scalars['String']>;
  deposit_gte?: Maybe<Scalars['String']>;
  deposit_lte?: Maybe<Scalars['String']>;
  deposit_in?: Maybe<Array<Scalars['String']>>;
  deposit_not_in?: Maybe<Array<Scalars['String']>>;
  deposit_contains?: Maybe<Scalars['String']>;
  deposit_not_contains?: Maybe<Scalars['String']>;
  deposit_starts_with?: Maybe<Scalars['String']>;
  deposit_not_starts_with?: Maybe<Scalars['String']>;
  deposit_ends_with?: Maybe<Scalars['String']>;
  deposit_not_ends_with?: Maybe<Scalars['String']>;
  operator?: Maybe<Scalars['String']>;
  operator_not?: Maybe<Scalars['String']>;
  operator_gt?: Maybe<Scalars['String']>;
  operator_lt?: Maybe<Scalars['String']>;
  operator_gte?: Maybe<Scalars['String']>;
  operator_lte?: Maybe<Scalars['String']>;
  operator_in?: Maybe<Array<Scalars['String']>>;
  operator_not_in?: Maybe<Array<Scalars['String']>>;
  operator_contains?: Maybe<Scalars['String']>;
  operator_not_contains?: Maybe<Scalars['String']>;
  operator_starts_with?: Maybe<Scalars['String']>;
  operator_not_starts_with?: Maybe<Scalars['String']>;
  operator_ends_with?: Maybe<Scalars['String']>;
  operator_not_ends_with?: Maybe<Scalars['String']>;
};

export enum GotRedemptionSignatureEvent_OrderBy {
  Id = 'id',
  Submitter = 'submitter',
  TransactionHash = 'transactionHash',
  Timestamp = 'timestamp',
  Deposit = 'deposit',
  Operator = 'operator'
}

export type Governance = {
  __typename?: 'Governance';
  id: Scalars['ID'];
  newDepositsAllowed: Scalars['Boolean'];
  signerFeeDivisor: Scalars['Int'];
  pendingSignerFeeDivisorChange?: Maybe<GovernanceChange>;
  lotSizes: Array<Scalars['BigInt']>;
  pendingLotSizeChange?: Maybe<GovernanceChange>;
  factorySelector: Scalars['Bytes'];
  fullyBackedFactory: Scalars['Bytes'];
  keepStakedFactory: Scalars['Bytes'];
  pendingFactoriesChange?: Maybe<GovernanceChange>;
  priceFeeds: Array<Scalars['Bytes']>;
  pendingPriceFeedAddition?: Maybe<GovernanceChange>;
  initialCollateralizedPercent: Scalars['Int'];
  severelyUndercollateralizedThresholdPercent: Scalars['Int'];
  undercollateralizedThresholdPercent: Scalars['Int'];
  pendingCollateralizationThresholdsChange?: Maybe<GovernanceChange>;
};

export type GovernanceChange = {
  __typename?: 'GovernanceChange';
  id: Scalars['ID'];
  type: GovernanceChangeType;
  requestedAt: Scalars['BigInt'];
  takesEffectAfter: Scalars['BigInt'];
  requestBlock: Scalars['BigInt'];
  requestTransactionHash: Scalars['String'];
  finalizeBlock?: Maybe<Scalars['BigInt']>;
  finalizeTransactionHash?: Maybe<Scalars['String']>;
  newLotSizes?: Maybe<Array<Scalars['BigInt']>>;
  newSignerFeeDivisor?: Maybe<Scalars['Int']>;
  newFactorySelector?: Maybe<Scalars['Bytes']>;
  newFullyBackedFactory?: Maybe<Scalars['Bytes']>;
  newKeepStakedFactory?: Maybe<Scalars['Bytes']>;
  newPriceFeed?: Maybe<Scalars['Bytes']>;
  newInitialCollateralizedPercent?: Maybe<Scalars['Int']>;
  newSeverelyUndercollateralizedThresholdPercent?: Maybe<Scalars['Int']>;
  newUndercollateralizedThresholdPercent?: Maybe<Scalars['Int']>;
  prevLotSizes?: Maybe<Array<Scalars['BigInt']>>;
  prevSignerFeeDivisor?: Maybe<Scalars['Int']>;
  prevFactorySelector?: Maybe<Scalars['Bytes']>;
  prevFullyBackedFactory?: Maybe<Scalars['Bytes']>;
  prevKeepStakedFactory?: Maybe<Scalars['Bytes']>;
  prevInitialCollateralizedPercent?: Maybe<Scalars['Int']>;
  prevSeverelyUndercollateralizedThresholdPercent?: Maybe<Scalars['Int']>;
  prevUndercollateralizedThresholdPercent?: Maybe<Scalars['Int']>;
};

export enum GovernanceChangeType {
  LotSizes = 'LOT_SIZES',
  SignerFeeDivisor = 'SIGNER_FEE_DIVISOR',
  KeepFactories = 'KEEP_FACTORIES',
  CollateralizationThresholds = 'COLLATERALIZATION_THRESHOLDS',
  EthBtcPriceFeedAddition = 'ETH_BTC_PRICE_FEED_ADDITION'
}

export type GovernanceChange_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  type?: Maybe<GovernanceChangeType>;
  type_not?: Maybe<GovernanceChangeType>;
  requestedAt?: Maybe<Scalars['BigInt']>;
  requestedAt_not?: Maybe<Scalars['BigInt']>;
  requestedAt_gt?: Maybe<Scalars['BigInt']>;
  requestedAt_lt?: Maybe<Scalars['BigInt']>;
  requestedAt_gte?: Maybe<Scalars['BigInt']>;
  requestedAt_lte?: Maybe<Scalars['BigInt']>;
  requestedAt_in?: Maybe<Array<Scalars['BigInt']>>;
  requestedAt_not_in?: Maybe<Array<Scalars['BigInt']>>;
  takesEffectAfter?: Maybe<Scalars['BigInt']>;
  takesEffectAfter_not?: Maybe<Scalars['BigInt']>;
  takesEffectAfter_gt?: Maybe<Scalars['BigInt']>;
  takesEffectAfter_lt?: Maybe<Scalars['BigInt']>;
  takesEffectAfter_gte?: Maybe<Scalars['BigInt']>;
  takesEffectAfter_lte?: Maybe<Scalars['BigInt']>;
  takesEffectAfter_in?: Maybe<Array<Scalars['BigInt']>>;
  takesEffectAfter_not_in?: Maybe<Array<Scalars['BigInt']>>;
  requestBlock?: Maybe<Scalars['BigInt']>;
  requestBlock_not?: Maybe<Scalars['BigInt']>;
  requestBlock_gt?: Maybe<Scalars['BigInt']>;
  requestBlock_lt?: Maybe<Scalars['BigInt']>;
  requestBlock_gte?: Maybe<Scalars['BigInt']>;
  requestBlock_lte?: Maybe<Scalars['BigInt']>;
  requestBlock_in?: Maybe<Array<Scalars['BigInt']>>;
  requestBlock_not_in?: Maybe<Array<Scalars['BigInt']>>;
  requestTransactionHash?: Maybe<Scalars['String']>;
  requestTransactionHash_not?: Maybe<Scalars['String']>;
  requestTransactionHash_gt?: Maybe<Scalars['String']>;
  requestTransactionHash_lt?: Maybe<Scalars['String']>;
  requestTransactionHash_gte?: Maybe<Scalars['String']>;
  requestTransactionHash_lte?: Maybe<Scalars['String']>;
  requestTransactionHash_in?: Maybe<Array<Scalars['String']>>;
  requestTransactionHash_not_in?: Maybe<Array<Scalars['String']>>;
  requestTransactionHash_contains?: Maybe<Scalars['String']>;
  requestTransactionHash_not_contains?: Maybe<Scalars['String']>;
  requestTransactionHash_starts_with?: Maybe<Scalars['String']>;
  requestTransactionHash_not_starts_with?: Maybe<Scalars['String']>;
  requestTransactionHash_ends_with?: Maybe<Scalars['String']>;
  requestTransactionHash_not_ends_with?: Maybe<Scalars['String']>;
  finalizeBlock?: Maybe<Scalars['BigInt']>;
  finalizeBlock_not?: Maybe<Scalars['BigInt']>;
  finalizeBlock_gt?: Maybe<Scalars['BigInt']>;
  finalizeBlock_lt?: Maybe<Scalars['BigInt']>;
  finalizeBlock_gte?: Maybe<Scalars['BigInt']>;
  finalizeBlock_lte?: Maybe<Scalars['BigInt']>;
  finalizeBlock_in?: Maybe<Array<Scalars['BigInt']>>;
  finalizeBlock_not_in?: Maybe<Array<Scalars['BigInt']>>;
  finalizeTransactionHash?: Maybe<Scalars['String']>;
  finalizeTransactionHash_not?: Maybe<Scalars['String']>;
  finalizeTransactionHash_gt?: Maybe<Scalars['String']>;
  finalizeTransactionHash_lt?: Maybe<Scalars['String']>;
  finalizeTransactionHash_gte?: Maybe<Scalars['String']>;
  finalizeTransactionHash_lte?: Maybe<Scalars['String']>;
  finalizeTransactionHash_in?: Maybe<Array<Scalars['String']>>;
  finalizeTransactionHash_not_in?: Maybe<Array<Scalars['String']>>;
  finalizeTransactionHash_contains?: Maybe<Scalars['String']>;
  finalizeTransactionHash_not_contains?: Maybe<Scalars['String']>;
  finalizeTransactionHash_starts_with?: Maybe<Scalars['String']>;
  finalizeTransactionHash_not_starts_with?: Maybe<Scalars['String']>;
  finalizeTransactionHash_ends_with?: Maybe<Scalars['String']>;
  finalizeTransactionHash_not_ends_with?: Maybe<Scalars['String']>;
  newLotSizes?: Maybe<Array<Scalars['BigInt']>>;
  newLotSizes_not?: Maybe<Array<Scalars['BigInt']>>;
  newLotSizes_contains?: Maybe<Array<Scalars['BigInt']>>;
  newLotSizes_not_contains?: Maybe<Array<Scalars['BigInt']>>;
  newSignerFeeDivisor?: Maybe<Scalars['Int']>;
  newSignerFeeDivisor_not?: Maybe<Scalars['Int']>;
  newSignerFeeDivisor_gt?: Maybe<Scalars['Int']>;
  newSignerFeeDivisor_lt?: Maybe<Scalars['Int']>;
  newSignerFeeDivisor_gte?: Maybe<Scalars['Int']>;
  newSignerFeeDivisor_lte?: Maybe<Scalars['Int']>;
  newSignerFeeDivisor_in?: Maybe<Array<Scalars['Int']>>;
  newSignerFeeDivisor_not_in?: Maybe<Array<Scalars['Int']>>;
  newFactorySelector?: Maybe<Scalars['Bytes']>;
  newFactorySelector_not?: Maybe<Scalars['Bytes']>;
  newFactorySelector_in?: Maybe<Array<Scalars['Bytes']>>;
  newFactorySelector_not_in?: Maybe<Array<Scalars['Bytes']>>;
  newFactorySelector_contains?: Maybe<Scalars['Bytes']>;
  newFactorySelector_not_contains?: Maybe<Scalars['Bytes']>;
  newFullyBackedFactory?: Maybe<Scalars['Bytes']>;
  newFullyBackedFactory_not?: Maybe<Scalars['Bytes']>;
  newFullyBackedFactory_in?: Maybe<Array<Scalars['Bytes']>>;
  newFullyBackedFactory_not_in?: Maybe<Array<Scalars['Bytes']>>;
  newFullyBackedFactory_contains?: Maybe<Scalars['Bytes']>;
  newFullyBackedFactory_not_contains?: Maybe<Scalars['Bytes']>;
  newKeepStakedFactory?: Maybe<Scalars['Bytes']>;
  newKeepStakedFactory_not?: Maybe<Scalars['Bytes']>;
  newKeepStakedFactory_in?: Maybe<Array<Scalars['Bytes']>>;
  newKeepStakedFactory_not_in?: Maybe<Array<Scalars['Bytes']>>;
  newKeepStakedFactory_contains?: Maybe<Scalars['Bytes']>;
  newKeepStakedFactory_not_contains?: Maybe<Scalars['Bytes']>;
  newPriceFeed?: Maybe<Scalars['Bytes']>;
  newPriceFeed_not?: Maybe<Scalars['Bytes']>;
  newPriceFeed_in?: Maybe<Array<Scalars['Bytes']>>;
  newPriceFeed_not_in?: Maybe<Array<Scalars['Bytes']>>;
  newPriceFeed_contains?: Maybe<Scalars['Bytes']>;
  newPriceFeed_not_contains?: Maybe<Scalars['Bytes']>;
  newInitialCollateralizedPercent?: Maybe<Scalars['Int']>;
  newInitialCollateralizedPercent_not?: Maybe<Scalars['Int']>;
  newInitialCollateralizedPercent_gt?: Maybe<Scalars['Int']>;
  newInitialCollateralizedPercent_lt?: Maybe<Scalars['Int']>;
  newInitialCollateralizedPercent_gte?: Maybe<Scalars['Int']>;
  newInitialCollateralizedPercent_lte?: Maybe<Scalars['Int']>;
  newInitialCollateralizedPercent_in?: Maybe<Array<Scalars['Int']>>;
  newInitialCollateralizedPercent_not_in?: Maybe<Array<Scalars['Int']>>;
  newSeverelyUndercollateralizedThresholdPercent?: Maybe<Scalars['Int']>;
  newSeverelyUndercollateralizedThresholdPercent_not?: Maybe<Scalars['Int']>;
  newSeverelyUndercollateralizedThresholdPercent_gt?: Maybe<Scalars['Int']>;
  newSeverelyUndercollateralizedThresholdPercent_lt?: Maybe<Scalars['Int']>;
  newSeverelyUndercollateralizedThresholdPercent_gte?: Maybe<Scalars['Int']>;
  newSeverelyUndercollateralizedThresholdPercent_lte?: Maybe<Scalars['Int']>;
  newSeverelyUndercollateralizedThresholdPercent_in?: Maybe<Array<Scalars['Int']>>;
  newSeverelyUndercollateralizedThresholdPercent_not_in?: Maybe<Array<Scalars['Int']>>;
  newUndercollateralizedThresholdPercent?: Maybe<Scalars['Int']>;
  newUndercollateralizedThresholdPercent_not?: Maybe<Scalars['Int']>;
  newUndercollateralizedThresholdPercent_gt?: Maybe<Scalars['Int']>;
  newUndercollateralizedThresholdPercent_lt?: Maybe<Scalars['Int']>;
  newUndercollateralizedThresholdPercent_gte?: Maybe<Scalars['Int']>;
  newUndercollateralizedThresholdPercent_lte?: Maybe<Scalars['Int']>;
  newUndercollateralizedThresholdPercent_in?: Maybe<Array<Scalars['Int']>>;
  newUndercollateralizedThresholdPercent_not_in?: Maybe<Array<Scalars['Int']>>;
  prevLotSizes?: Maybe<Array<Scalars['BigInt']>>;
  prevLotSizes_not?: Maybe<Array<Scalars['BigInt']>>;
  prevLotSizes_contains?: Maybe<Array<Scalars['BigInt']>>;
  prevLotSizes_not_contains?: Maybe<Array<Scalars['BigInt']>>;
  prevSignerFeeDivisor?: Maybe<Scalars['Int']>;
  prevSignerFeeDivisor_not?: Maybe<Scalars['Int']>;
  prevSignerFeeDivisor_gt?: Maybe<Scalars['Int']>;
  prevSignerFeeDivisor_lt?: Maybe<Scalars['Int']>;
  prevSignerFeeDivisor_gte?: Maybe<Scalars['Int']>;
  prevSignerFeeDivisor_lte?: Maybe<Scalars['Int']>;
  prevSignerFeeDivisor_in?: Maybe<Array<Scalars['Int']>>;
  prevSignerFeeDivisor_not_in?: Maybe<Array<Scalars['Int']>>;
  prevFactorySelector?: Maybe<Scalars['Bytes']>;
  prevFactorySelector_not?: Maybe<Scalars['Bytes']>;
  prevFactorySelector_in?: Maybe<Array<Scalars['Bytes']>>;
  prevFactorySelector_not_in?: Maybe<Array<Scalars['Bytes']>>;
  prevFactorySelector_contains?: Maybe<Scalars['Bytes']>;
  prevFactorySelector_not_contains?: Maybe<Scalars['Bytes']>;
  prevFullyBackedFactory?: Maybe<Scalars['Bytes']>;
  prevFullyBackedFactory_not?: Maybe<Scalars['Bytes']>;
  prevFullyBackedFactory_in?: Maybe<Array<Scalars['Bytes']>>;
  prevFullyBackedFactory_not_in?: Maybe<Array<Scalars['Bytes']>>;
  prevFullyBackedFactory_contains?: Maybe<Scalars['Bytes']>;
  prevFullyBackedFactory_not_contains?: Maybe<Scalars['Bytes']>;
  prevKeepStakedFactory?: Maybe<Scalars['Bytes']>;
  prevKeepStakedFactory_not?: Maybe<Scalars['Bytes']>;
  prevKeepStakedFactory_in?: Maybe<Array<Scalars['Bytes']>>;
  prevKeepStakedFactory_not_in?: Maybe<Array<Scalars['Bytes']>>;
  prevKeepStakedFactory_contains?: Maybe<Scalars['Bytes']>;
  prevKeepStakedFactory_not_contains?: Maybe<Scalars['Bytes']>;
  prevInitialCollateralizedPercent?: Maybe<Scalars['Int']>;
  prevInitialCollateralizedPercent_not?: Maybe<Scalars['Int']>;
  prevInitialCollateralizedPercent_gt?: Maybe<Scalars['Int']>;
  prevInitialCollateralizedPercent_lt?: Maybe<Scalars['Int']>;
  prevInitialCollateralizedPercent_gte?: Maybe<Scalars['Int']>;
  prevInitialCollateralizedPercent_lte?: Maybe<Scalars['Int']>;
  prevInitialCollateralizedPercent_in?: Maybe<Array<Scalars['Int']>>;
  prevInitialCollateralizedPercent_not_in?: Maybe<Array<Scalars['Int']>>;
  prevSeverelyUndercollateralizedThresholdPercent?: Maybe<Scalars['Int']>;
  prevSeverelyUndercollateralizedThresholdPercent_not?: Maybe<Scalars['Int']>;
  prevSeverelyUndercollateralizedThresholdPercent_gt?: Maybe<Scalars['Int']>;
  prevSeverelyUndercollateralizedThresholdPercent_lt?: Maybe<Scalars['Int']>;
  prevSeverelyUndercollateralizedThresholdPercent_gte?: Maybe<Scalars['Int']>;
  prevSeverelyUndercollateralizedThresholdPercent_lte?: Maybe<Scalars['Int']>;
  prevSeverelyUndercollateralizedThresholdPercent_in?: Maybe<Array<Scalars['Int']>>;
  prevSeverelyUndercollateralizedThresholdPercent_not_in?: Maybe<Array<Scalars['Int']>>;
  prevUndercollateralizedThresholdPercent?: Maybe<Scalars['Int']>;
  prevUndercollateralizedThresholdPercent_not?: Maybe<Scalars['Int']>;
  prevUndercollateralizedThresholdPercent_gt?: Maybe<Scalars['Int']>;
  prevUndercollateralizedThresholdPercent_lt?: Maybe<Scalars['Int']>;
  prevUndercollateralizedThresholdPercent_gte?: Maybe<Scalars['Int']>;
  prevUndercollateralizedThresholdPercent_lte?: Maybe<Scalars['Int']>;
  prevUndercollateralizedThresholdPercent_in?: Maybe<Array<Scalars['Int']>>;
  prevUndercollateralizedThresholdPercent_not_in?: Maybe<Array<Scalars['Int']>>;
};

export enum GovernanceChange_OrderBy {
  Id = 'id',
  Type = 'type',
  RequestedAt = 'requestedAt',
  TakesEffectAfter = 'takesEffectAfter',
  RequestBlock = 'requestBlock',
  RequestTransactionHash = 'requestTransactionHash',
  FinalizeBlock = 'finalizeBlock',
  FinalizeTransactionHash = 'finalizeTransactionHash',
  NewLotSizes = 'newLotSizes',
  NewSignerFeeDivisor = 'newSignerFeeDivisor',
  NewFactorySelector = 'newFactorySelector',
  NewFullyBackedFactory = 'newFullyBackedFactory',
  NewKeepStakedFactory = 'newKeepStakedFactory',
  NewPriceFeed = 'newPriceFeed',
  NewInitialCollateralizedPercent = 'newInitialCollateralizedPercent',
  NewSeverelyUndercollateralizedThresholdPercent = 'newSeverelyUndercollateralizedThresholdPercent',
  NewUndercollateralizedThresholdPercent = 'newUndercollateralizedThresholdPercent',
  PrevLotSizes = 'prevLotSizes',
  PrevSignerFeeDivisor = 'prevSignerFeeDivisor',
  PrevFactorySelector = 'prevFactorySelector',
  PrevFullyBackedFactory = 'prevFullyBackedFactory',
  PrevKeepStakedFactory = 'prevKeepStakedFactory',
  PrevInitialCollateralizedPercent = 'prevInitialCollateralizedPercent',
  PrevSeverelyUndercollateralizedThresholdPercent = 'prevSeverelyUndercollateralizedThresholdPercent',
  PrevUndercollateralizedThresholdPercent = 'prevUndercollateralizedThresholdPercent'
}

export type GovernanceLogEntry = {
  __typename?: 'GovernanceLogEntry';
  id: Scalars['ID'];
  timestamp: Scalars['BigInt'];
  submitter: Scalars['Bytes'];
  block: Scalars['BigInt'];
  transactionHash: Scalars['String'];
  isRequest: Scalars['Boolean'];
  change?: Maybe<GovernanceChange>;
};

export type GovernanceLogEntry_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  submitter?: Maybe<Scalars['Bytes']>;
  submitter_not?: Maybe<Scalars['Bytes']>;
  submitter_in?: Maybe<Array<Scalars['Bytes']>>;
  submitter_not_in?: Maybe<Array<Scalars['Bytes']>>;
  submitter_contains?: Maybe<Scalars['Bytes']>;
  submitter_not_contains?: Maybe<Scalars['Bytes']>;
  block?: Maybe<Scalars['BigInt']>;
  block_not?: Maybe<Scalars['BigInt']>;
  block_gt?: Maybe<Scalars['BigInt']>;
  block_lt?: Maybe<Scalars['BigInt']>;
  block_gte?: Maybe<Scalars['BigInt']>;
  block_lte?: Maybe<Scalars['BigInt']>;
  block_in?: Maybe<Array<Scalars['BigInt']>>;
  block_not_in?: Maybe<Array<Scalars['BigInt']>>;
  transactionHash?: Maybe<Scalars['String']>;
  transactionHash_not?: Maybe<Scalars['String']>;
  transactionHash_gt?: Maybe<Scalars['String']>;
  transactionHash_lt?: Maybe<Scalars['String']>;
  transactionHash_gte?: Maybe<Scalars['String']>;
  transactionHash_lte?: Maybe<Scalars['String']>;
  transactionHash_in?: Maybe<Array<Scalars['String']>>;
  transactionHash_not_in?: Maybe<Array<Scalars['String']>>;
  transactionHash_contains?: Maybe<Scalars['String']>;
  transactionHash_not_contains?: Maybe<Scalars['String']>;
  transactionHash_starts_with?: Maybe<Scalars['String']>;
  transactionHash_not_starts_with?: Maybe<Scalars['String']>;
  transactionHash_ends_with?: Maybe<Scalars['String']>;
  transactionHash_not_ends_with?: Maybe<Scalars['String']>;
  isRequest?: Maybe<Scalars['Boolean']>;
  isRequest_not?: Maybe<Scalars['Boolean']>;
  isRequest_in?: Maybe<Array<Scalars['Boolean']>>;
  isRequest_not_in?: Maybe<Array<Scalars['Boolean']>>;
  change?: Maybe<Scalars['String']>;
  change_not?: Maybe<Scalars['String']>;
  change_gt?: Maybe<Scalars['String']>;
  change_lt?: Maybe<Scalars['String']>;
  change_gte?: Maybe<Scalars['String']>;
  change_lte?: Maybe<Scalars['String']>;
  change_in?: Maybe<Array<Scalars['String']>>;
  change_not_in?: Maybe<Array<Scalars['String']>>;
  change_contains?: Maybe<Scalars['String']>;
  change_not_contains?: Maybe<Scalars['String']>;
  change_starts_with?: Maybe<Scalars['String']>;
  change_not_starts_with?: Maybe<Scalars['String']>;
  change_ends_with?: Maybe<Scalars['String']>;
  change_not_ends_with?: Maybe<Scalars['String']>;
};

export enum GovernanceLogEntry_OrderBy {
  Id = 'id',
  Timestamp = 'timestamp',
  Submitter = 'submitter',
  Block = 'block',
  TransactionHash = 'transactionHash',
  IsRequest = 'isRequest',
  Change = 'change'
}

export type Governance_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  newDepositsAllowed?: Maybe<Scalars['Boolean']>;
  newDepositsAllowed_not?: Maybe<Scalars['Boolean']>;
  newDepositsAllowed_in?: Maybe<Array<Scalars['Boolean']>>;
  newDepositsAllowed_not_in?: Maybe<Array<Scalars['Boolean']>>;
  signerFeeDivisor?: Maybe<Scalars['Int']>;
  signerFeeDivisor_not?: Maybe<Scalars['Int']>;
  signerFeeDivisor_gt?: Maybe<Scalars['Int']>;
  signerFeeDivisor_lt?: Maybe<Scalars['Int']>;
  signerFeeDivisor_gte?: Maybe<Scalars['Int']>;
  signerFeeDivisor_lte?: Maybe<Scalars['Int']>;
  signerFeeDivisor_in?: Maybe<Array<Scalars['Int']>>;
  signerFeeDivisor_not_in?: Maybe<Array<Scalars['Int']>>;
  pendingSignerFeeDivisorChange?: Maybe<Scalars['String']>;
  pendingSignerFeeDivisorChange_not?: Maybe<Scalars['String']>;
  pendingSignerFeeDivisorChange_gt?: Maybe<Scalars['String']>;
  pendingSignerFeeDivisorChange_lt?: Maybe<Scalars['String']>;
  pendingSignerFeeDivisorChange_gte?: Maybe<Scalars['String']>;
  pendingSignerFeeDivisorChange_lte?: Maybe<Scalars['String']>;
  pendingSignerFeeDivisorChange_in?: Maybe<Array<Scalars['String']>>;
  pendingSignerFeeDivisorChange_not_in?: Maybe<Array<Scalars['String']>>;
  pendingSignerFeeDivisorChange_contains?: Maybe<Scalars['String']>;
  pendingSignerFeeDivisorChange_not_contains?: Maybe<Scalars['String']>;
  pendingSignerFeeDivisorChange_starts_with?: Maybe<Scalars['String']>;
  pendingSignerFeeDivisorChange_not_starts_with?: Maybe<Scalars['String']>;
  pendingSignerFeeDivisorChange_ends_with?: Maybe<Scalars['String']>;
  pendingSignerFeeDivisorChange_not_ends_with?: Maybe<Scalars['String']>;
  lotSizes?: Maybe<Array<Scalars['BigInt']>>;
  lotSizes_not?: Maybe<Array<Scalars['BigInt']>>;
  lotSizes_contains?: Maybe<Array<Scalars['BigInt']>>;
  lotSizes_not_contains?: Maybe<Array<Scalars['BigInt']>>;
  pendingLotSizeChange?: Maybe<Scalars['String']>;
  pendingLotSizeChange_not?: Maybe<Scalars['String']>;
  pendingLotSizeChange_gt?: Maybe<Scalars['String']>;
  pendingLotSizeChange_lt?: Maybe<Scalars['String']>;
  pendingLotSizeChange_gte?: Maybe<Scalars['String']>;
  pendingLotSizeChange_lte?: Maybe<Scalars['String']>;
  pendingLotSizeChange_in?: Maybe<Array<Scalars['String']>>;
  pendingLotSizeChange_not_in?: Maybe<Array<Scalars['String']>>;
  pendingLotSizeChange_contains?: Maybe<Scalars['String']>;
  pendingLotSizeChange_not_contains?: Maybe<Scalars['String']>;
  pendingLotSizeChange_starts_with?: Maybe<Scalars['String']>;
  pendingLotSizeChange_not_starts_with?: Maybe<Scalars['String']>;
  pendingLotSizeChange_ends_with?: Maybe<Scalars['String']>;
  pendingLotSizeChange_not_ends_with?: Maybe<Scalars['String']>;
  factorySelector?: Maybe<Scalars['Bytes']>;
  factorySelector_not?: Maybe<Scalars['Bytes']>;
  factorySelector_in?: Maybe<Array<Scalars['Bytes']>>;
  factorySelector_not_in?: Maybe<Array<Scalars['Bytes']>>;
  factorySelector_contains?: Maybe<Scalars['Bytes']>;
  factorySelector_not_contains?: Maybe<Scalars['Bytes']>;
  fullyBackedFactory?: Maybe<Scalars['Bytes']>;
  fullyBackedFactory_not?: Maybe<Scalars['Bytes']>;
  fullyBackedFactory_in?: Maybe<Array<Scalars['Bytes']>>;
  fullyBackedFactory_not_in?: Maybe<Array<Scalars['Bytes']>>;
  fullyBackedFactory_contains?: Maybe<Scalars['Bytes']>;
  fullyBackedFactory_not_contains?: Maybe<Scalars['Bytes']>;
  keepStakedFactory?: Maybe<Scalars['Bytes']>;
  keepStakedFactory_not?: Maybe<Scalars['Bytes']>;
  keepStakedFactory_in?: Maybe<Array<Scalars['Bytes']>>;
  keepStakedFactory_not_in?: Maybe<Array<Scalars['Bytes']>>;
  keepStakedFactory_contains?: Maybe<Scalars['Bytes']>;
  keepStakedFactory_not_contains?: Maybe<Scalars['Bytes']>;
  pendingFactoriesChange?: Maybe<Scalars['String']>;
  pendingFactoriesChange_not?: Maybe<Scalars['String']>;
  pendingFactoriesChange_gt?: Maybe<Scalars['String']>;
  pendingFactoriesChange_lt?: Maybe<Scalars['String']>;
  pendingFactoriesChange_gte?: Maybe<Scalars['String']>;
  pendingFactoriesChange_lte?: Maybe<Scalars['String']>;
  pendingFactoriesChange_in?: Maybe<Array<Scalars['String']>>;
  pendingFactoriesChange_not_in?: Maybe<Array<Scalars['String']>>;
  pendingFactoriesChange_contains?: Maybe<Scalars['String']>;
  pendingFactoriesChange_not_contains?: Maybe<Scalars['String']>;
  pendingFactoriesChange_starts_with?: Maybe<Scalars['String']>;
  pendingFactoriesChange_not_starts_with?: Maybe<Scalars['String']>;
  pendingFactoriesChange_ends_with?: Maybe<Scalars['String']>;
  pendingFactoriesChange_not_ends_with?: Maybe<Scalars['String']>;
  priceFeeds?: Maybe<Array<Scalars['Bytes']>>;
  priceFeeds_not?: Maybe<Array<Scalars['Bytes']>>;
  priceFeeds_contains?: Maybe<Array<Scalars['Bytes']>>;
  priceFeeds_not_contains?: Maybe<Array<Scalars['Bytes']>>;
  pendingPriceFeedAddition?: Maybe<Scalars['String']>;
  pendingPriceFeedAddition_not?: Maybe<Scalars['String']>;
  pendingPriceFeedAddition_gt?: Maybe<Scalars['String']>;
  pendingPriceFeedAddition_lt?: Maybe<Scalars['String']>;
  pendingPriceFeedAddition_gte?: Maybe<Scalars['String']>;
  pendingPriceFeedAddition_lte?: Maybe<Scalars['String']>;
  pendingPriceFeedAddition_in?: Maybe<Array<Scalars['String']>>;
  pendingPriceFeedAddition_not_in?: Maybe<Array<Scalars['String']>>;
  pendingPriceFeedAddition_contains?: Maybe<Scalars['String']>;
  pendingPriceFeedAddition_not_contains?: Maybe<Scalars['String']>;
  pendingPriceFeedAddition_starts_with?: Maybe<Scalars['String']>;
  pendingPriceFeedAddition_not_starts_with?: Maybe<Scalars['String']>;
  pendingPriceFeedAddition_ends_with?: Maybe<Scalars['String']>;
  pendingPriceFeedAddition_not_ends_with?: Maybe<Scalars['String']>;
  initialCollateralizedPercent?: Maybe<Scalars['Int']>;
  initialCollateralizedPercent_not?: Maybe<Scalars['Int']>;
  initialCollateralizedPercent_gt?: Maybe<Scalars['Int']>;
  initialCollateralizedPercent_lt?: Maybe<Scalars['Int']>;
  initialCollateralizedPercent_gte?: Maybe<Scalars['Int']>;
  initialCollateralizedPercent_lte?: Maybe<Scalars['Int']>;
  initialCollateralizedPercent_in?: Maybe<Array<Scalars['Int']>>;
  initialCollateralizedPercent_not_in?: Maybe<Array<Scalars['Int']>>;
  severelyUndercollateralizedThresholdPercent?: Maybe<Scalars['Int']>;
  severelyUndercollateralizedThresholdPercent_not?: Maybe<Scalars['Int']>;
  severelyUndercollateralizedThresholdPercent_gt?: Maybe<Scalars['Int']>;
  severelyUndercollateralizedThresholdPercent_lt?: Maybe<Scalars['Int']>;
  severelyUndercollateralizedThresholdPercent_gte?: Maybe<Scalars['Int']>;
  severelyUndercollateralizedThresholdPercent_lte?: Maybe<Scalars['Int']>;
  severelyUndercollateralizedThresholdPercent_in?: Maybe<Array<Scalars['Int']>>;
  severelyUndercollateralizedThresholdPercent_not_in?: Maybe<Array<Scalars['Int']>>;
  undercollateralizedThresholdPercent?: Maybe<Scalars['Int']>;
  undercollateralizedThresholdPercent_not?: Maybe<Scalars['Int']>;
  undercollateralizedThresholdPercent_gt?: Maybe<Scalars['Int']>;
  undercollateralizedThresholdPercent_lt?: Maybe<Scalars['Int']>;
  undercollateralizedThresholdPercent_gte?: Maybe<Scalars['Int']>;
  undercollateralizedThresholdPercent_lte?: Maybe<Scalars['Int']>;
  undercollateralizedThresholdPercent_in?: Maybe<Array<Scalars['Int']>>;
  undercollateralizedThresholdPercent_not_in?: Maybe<Array<Scalars['Int']>>;
  pendingCollateralizationThresholdsChange?: Maybe<Scalars['String']>;
  pendingCollateralizationThresholdsChange_not?: Maybe<Scalars['String']>;
  pendingCollateralizationThresholdsChange_gt?: Maybe<Scalars['String']>;
  pendingCollateralizationThresholdsChange_lt?: Maybe<Scalars['String']>;
  pendingCollateralizationThresholdsChange_gte?: Maybe<Scalars['String']>;
  pendingCollateralizationThresholdsChange_lte?: Maybe<Scalars['String']>;
  pendingCollateralizationThresholdsChange_in?: Maybe<Array<Scalars['String']>>;
  pendingCollateralizationThresholdsChange_not_in?: Maybe<Array<Scalars['String']>>;
  pendingCollateralizationThresholdsChange_contains?: Maybe<Scalars['String']>;
  pendingCollateralizationThresholdsChange_not_contains?: Maybe<Scalars['String']>;
  pendingCollateralizationThresholdsChange_starts_with?: Maybe<Scalars['String']>;
  pendingCollateralizationThresholdsChange_not_starts_with?: Maybe<Scalars['String']>;
  pendingCollateralizationThresholdsChange_ends_with?: Maybe<Scalars['String']>;
  pendingCollateralizationThresholdsChange_not_ends_with?: Maybe<Scalars['String']>;
};

export enum Governance_OrderBy {
  Id = 'id',
  NewDepositsAllowed = 'newDepositsAllowed',
  SignerFeeDivisor = 'signerFeeDivisor',
  PendingSignerFeeDivisorChange = 'pendingSignerFeeDivisorChange',
  LotSizes = 'lotSizes',
  PendingLotSizeChange = 'pendingLotSizeChange',
  FactorySelector = 'factorySelector',
  FullyBackedFactory = 'fullyBackedFactory',
  KeepStakedFactory = 'keepStakedFactory',
  PendingFactoriesChange = 'pendingFactoriesChange',
  PriceFeeds = 'priceFeeds',
  PendingPriceFeedAddition = 'pendingPriceFeedAddition',
  InitialCollateralizedPercent = 'initialCollateralizedPercent',
  SeverelyUndercollateralizedThresholdPercent = 'severelyUndercollateralizedThresholdPercent',
  UndercollateralizedThresholdPercent = 'undercollateralizedThresholdPercent',
  PendingCollateralizationThresholdsChange = 'pendingCollateralizationThresholdsChange'
}

export type Grant = {
  __typename?: 'Grant';
  id: Scalars['ID'];
  grantManager: Scalars['Bytes'];
  grantee: Scalars['Bytes'];
  revokedAt: Scalars['BigInt'];
  revokedAmount: Scalars['BigInt'];
  revokedWithdrawn: Scalars['BigInt'];
  revocable: Scalars['Boolean'];
  amount: Scalars['BigInt'];
  duration: Scalars['BigInt'];
  start: Scalars['BigInt'];
  cliff: Scalars['BigInt'];
  withdrawn: Scalars['BigInt'];
  staked: Scalars['BigInt'];
  stakingPolicy: Scalars['Bytes'];
  transactionHash: Scalars['Bytes'];
  timestamp?: Maybe<Scalars['BigInt']>;
};

export type Grant_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  grantManager?: Maybe<Scalars['Bytes']>;
  grantManager_not?: Maybe<Scalars['Bytes']>;
  grantManager_in?: Maybe<Array<Scalars['Bytes']>>;
  grantManager_not_in?: Maybe<Array<Scalars['Bytes']>>;
  grantManager_contains?: Maybe<Scalars['Bytes']>;
  grantManager_not_contains?: Maybe<Scalars['Bytes']>;
  grantee?: Maybe<Scalars['Bytes']>;
  grantee_not?: Maybe<Scalars['Bytes']>;
  grantee_in?: Maybe<Array<Scalars['Bytes']>>;
  grantee_not_in?: Maybe<Array<Scalars['Bytes']>>;
  grantee_contains?: Maybe<Scalars['Bytes']>;
  grantee_not_contains?: Maybe<Scalars['Bytes']>;
  revokedAt?: Maybe<Scalars['BigInt']>;
  revokedAt_not?: Maybe<Scalars['BigInt']>;
  revokedAt_gt?: Maybe<Scalars['BigInt']>;
  revokedAt_lt?: Maybe<Scalars['BigInt']>;
  revokedAt_gte?: Maybe<Scalars['BigInt']>;
  revokedAt_lte?: Maybe<Scalars['BigInt']>;
  revokedAt_in?: Maybe<Array<Scalars['BigInt']>>;
  revokedAt_not_in?: Maybe<Array<Scalars['BigInt']>>;
  revokedAmount?: Maybe<Scalars['BigInt']>;
  revokedAmount_not?: Maybe<Scalars['BigInt']>;
  revokedAmount_gt?: Maybe<Scalars['BigInt']>;
  revokedAmount_lt?: Maybe<Scalars['BigInt']>;
  revokedAmount_gte?: Maybe<Scalars['BigInt']>;
  revokedAmount_lte?: Maybe<Scalars['BigInt']>;
  revokedAmount_in?: Maybe<Array<Scalars['BigInt']>>;
  revokedAmount_not_in?: Maybe<Array<Scalars['BigInt']>>;
  revokedWithdrawn?: Maybe<Scalars['BigInt']>;
  revokedWithdrawn_not?: Maybe<Scalars['BigInt']>;
  revokedWithdrawn_gt?: Maybe<Scalars['BigInt']>;
  revokedWithdrawn_lt?: Maybe<Scalars['BigInt']>;
  revokedWithdrawn_gte?: Maybe<Scalars['BigInt']>;
  revokedWithdrawn_lte?: Maybe<Scalars['BigInt']>;
  revokedWithdrawn_in?: Maybe<Array<Scalars['BigInt']>>;
  revokedWithdrawn_not_in?: Maybe<Array<Scalars['BigInt']>>;
  revocable?: Maybe<Scalars['Boolean']>;
  revocable_not?: Maybe<Scalars['Boolean']>;
  revocable_in?: Maybe<Array<Scalars['Boolean']>>;
  revocable_not_in?: Maybe<Array<Scalars['Boolean']>>;
  amount?: Maybe<Scalars['BigInt']>;
  amount_not?: Maybe<Scalars['BigInt']>;
  amount_gt?: Maybe<Scalars['BigInt']>;
  amount_lt?: Maybe<Scalars['BigInt']>;
  amount_gte?: Maybe<Scalars['BigInt']>;
  amount_lte?: Maybe<Scalars['BigInt']>;
  amount_in?: Maybe<Array<Scalars['BigInt']>>;
  amount_not_in?: Maybe<Array<Scalars['BigInt']>>;
  duration?: Maybe<Scalars['BigInt']>;
  duration_not?: Maybe<Scalars['BigInt']>;
  duration_gt?: Maybe<Scalars['BigInt']>;
  duration_lt?: Maybe<Scalars['BigInt']>;
  duration_gte?: Maybe<Scalars['BigInt']>;
  duration_lte?: Maybe<Scalars['BigInt']>;
  duration_in?: Maybe<Array<Scalars['BigInt']>>;
  duration_not_in?: Maybe<Array<Scalars['BigInt']>>;
  start?: Maybe<Scalars['BigInt']>;
  start_not?: Maybe<Scalars['BigInt']>;
  start_gt?: Maybe<Scalars['BigInt']>;
  start_lt?: Maybe<Scalars['BigInt']>;
  start_gte?: Maybe<Scalars['BigInt']>;
  start_lte?: Maybe<Scalars['BigInt']>;
  start_in?: Maybe<Array<Scalars['BigInt']>>;
  start_not_in?: Maybe<Array<Scalars['BigInt']>>;
  cliff?: Maybe<Scalars['BigInt']>;
  cliff_not?: Maybe<Scalars['BigInt']>;
  cliff_gt?: Maybe<Scalars['BigInt']>;
  cliff_lt?: Maybe<Scalars['BigInt']>;
  cliff_gte?: Maybe<Scalars['BigInt']>;
  cliff_lte?: Maybe<Scalars['BigInt']>;
  cliff_in?: Maybe<Array<Scalars['BigInt']>>;
  cliff_not_in?: Maybe<Array<Scalars['BigInt']>>;
  withdrawn?: Maybe<Scalars['BigInt']>;
  withdrawn_not?: Maybe<Scalars['BigInt']>;
  withdrawn_gt?: Maybe<Scalars['BigInt']>;
  withdrawn_lt?: Maybe<Scalars['BigInt']>;
  withdrawn_gte?: Maybe<Scalars['BigInt']>;
  withdrawn_lte?: Maybe<Scalars['BigInt']>;
  withdrawn_in?: Maybe<Array<Scalars['BigInt']>>;
  withdrawn_not_in?: Maybe<Array<Scalars['BigInt']>>;
  staked?: Maybe<Scalars['BigInt']>;
  staked_not?: Maybe<Scalars['BigInt']>;
  staked_gt?: Maybe<Scalars['BigInt']>;
  staked_lt?: Maybe<Scalars['BigInt']>;
  staked_gte?: Maybe<Scalars['BigInt']>;
  staked_lte?: Maybe<Scalars['BigInt']>;
  staked_in?: Maybe<Array<Scalars['BigInt']>>;
  staked_not_in?: Maybe<Array<Scalars['BigInt']>>;
  stakingPolicy?: Maybe<Scalars['Bytes']>;
  stakingPolicy_not?: Maybe<Scalars['Bytes']>;
  stakingPolicy_in?: Maybe<Array<Scalars['Bytes']>>;
  stakingPolicy_not_in?: Maybe<Array<Scalars['Bytes']>>;
  stakingPolicy_contains?: Maybe<Scalars['Bytes']>;
  stakingPolicy_not_contains?: Maybe<Scalars['Bytes']>;
  transactionHash?: Maybe<Scalars['Bytes']>;
  transactionHash_not?: Maybe<Scalars['Bytes']>;
  transactionHash_in?: Maybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: Maybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: Maybe<Scalars['Bytes']>;
  transactionHash_not_contains?: Maybe<Scalars['Bytes']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export enum Grant_OrderBy {
  Id = 'id',
  GrantManager = 'grantManager',
  Grantee = 'grantee',
  RevokedAt = 'revokedAt',
  RevokedAmount = 'revokedAmount',
  RevokedWithdrawn = 'revokedWithdrawn',
  Revocable = 'revocable',
  Amount = 'amount',
  Duration = 'duration',
  Start = 'start',
  Cliff = 'cliff',
  Withdrawn = 'withdrawn',
  Staked = 'staked',
  StakingPolicy = 'stakingPolicy',
  TransactionHash = 'transactionHash',
  Timestamp = 'timestamp'
}

export type LiquidatedEvent = Event & {
  __typename?: 'LiquidatedEvent';
  id: Scalars['ID'];
  submitter: Scalars['Bytes'];
  transactionHash: Scalars['String'];
  timestamp: Scalars['BigInt'];
  deposit?: Maybe<Deposit>;
  operator?: Maybe<Operator>;
};

export type LiquidatedEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  submitter?: Maybe<Scalars['Bytes']>;
  submitter_not?: Maybe<Scalars['Bytes']>;
  submitter_in?: Maybe<Array<Scalars['Bytes']>>;
  submitter_not_in?: Maybe<Array<Scalars['Bytes']>>;
  submitter_contains?: Maybe<Scalars['Bytes']>;
  submitter_not_contains?: Maybe<Scalars['Bytes']>;
  transactionHash?: Maybe<Scalars['String']>;
  transactionHash_not?: Maybe<Scalars['String']>;
  transactionHash_gt?: Maybe<Scalars['String']>;
  transactionHash_lt?: Maybe<Scalars['String']>;
  transactionHash_gte?: Maybe<Scalars['String']>;
  transactionHash_lte?: Maybe<Scalars['String']>;
  transactionHash_in?: Maybe<Array<Scalars['String']>>;
  transactionHash_not_in?: Maybe<Array<Scalars['String']>>;
  transactionHash_contains?: Maybe<Scalars['String']>;
  transactionHash_not_contains?: Maybe<Scalars['String']>;
  transactionHash_starts_with?: Maybe<Scalars['String']>;
  transactionHash_not_starts_with?: Maybe<Scalars['String']>;
  transactionHash_ends_with?: Maybe<Scalars['String']>;
  transactionHash_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  deposit?: Maybe<Scalars['String']>;
  deposit_not?: Maybe<Scalars['String']>;
  deposit_gt?: Maybe<Scalars['String']>;
  deposit_lt?: Maybe<Scalars['String']>;
  deposit_gte?: Maybe<Scalars['String']>;
  deposit_lte?: Maybe<Scalars['String']>;
  deposit_in?: Maybe<Array<Scalars['String']>>;
  deposit_not_in?: Maybe<Array<Scalars['String']>>;
  deposit_contains?: Maybe<Scalars['String']>;
  deposit_not_contains?: Maybe<Scalars['String']>;
  deposit_starts_with?: Maybe<Scalars['String']>;
  deposit_not_starts_with?: Maybe<Scalars['String']>;
  deposit_ends_with?: Maybe<Scalars['String']>;
  deposit_not_ends_with?: Maybe<Scalars['String']>;
  operator?: Maybe<Scalars['String']>;
  operator_not?: Maybe<Scalars['String']>;
  operator_gt?: Maybe<Scalars['String']>;
  operator_lt?: Maybe<Scalars['String']>;
  operator_gte?: Maybe<Scalars['String']>;
  operator_lte?: Maybe<Scalars['String']>;
  operator_in?: Maybe<Array<Scalars['String']>>;
  operator_not_in?: Maybe<Array<Scalars['String']>>;
  operator_contains?: Maybe<Scalars['String']>;
  operator_not_contains?: Maybe<Scalars['String']>;
  operator_starts_with?: Maybe<Scalars['String']>;
  operator_not_starts_with?: Maybe<Scalars['String']>;
  operator_ends_with?: Maybe<Scalars['String']>;
  operator_not_ends_with?: Maybe<Scalars['String']>;
};

export enum LiquidatedEvent_OrderBy {
  Id = 'id',
  Submitter = 'submitter',
  TransactionHash = 'transactionHash',
  Timestamp = 'timestamp',
  Deposit = 'deposit',
  Operator = 'operator'
}

/** The reason why a deposit enter liquidation. */
export enum LiquidationCause {
  Fraud = 'FRAUD',
  Undercollaterized = 'UNDERCOLLATERIZED',
  CourtesyCallExpired = 'COURTESY_CALL_EXPIRED',
  SignatureTimeout = 'SIGNATURE_TIMEOUT',
  ProofTimeout = 'PROOF_TIMEOUT'
}

/** A lock on an operator stake. This is usually held by a deposit/keep contract. */
export type Lock = {
  __typename?: 'Lock';
  id: Scalars['ID'];
  creator: Scalars['Bytes'];
  operator: Operator;
  until: Scalars['BigInt'];
};

export type Lock_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  creator?: Maybe<Scalars['Bytes']>;
  creator_not?: Maybe<Scalars['Bytes']>;
  creator_in?: Maybe<Array<Scalars['Bytes']>>;
  creator_not_in?: Maybe<Array<Scalars['Bytes']>>;
  creator_contains?: Maybe<Scalars['Bytes']>;
  creator_not_contains?: Maybe<Scalars['Bytes']>;
  operator?: Maybe<Scalars['String']>;
  operator_not?: Maybe<Scalars['String']>;
  operator_gt?: Maybe<Scalars['String']>;
  operator_lt?: Maybe<Scalars['String']>;
  operator_gte?: Maybe<Scalars['String']>;
  operator_lte?: Maybe<Scalars['String']>;
  operator_in?: Maybe<Array<Scalars['String']>>;
  operator_not_in?: Maybe<Array<Scalars['String']>>;
  operator_contains?: Maybe<Scalars['String']>;
  operator_not_contains?: Maybe<Scalars['String']>;
  operator_starts_with?: Maybe<Scalars['String']>;
  operator_not_starts_with?: Maybe<Scalars['String']>;
  operator_ends_with?: Maybe<Scalars['String']>;
  operator_not_ends_with?: Maybe<Scalars['String']>;
  until?: Maybe<Scalars['BigInt']>;
  until_not?: Maybe<Scalars['BigInt']>;
  until_gt?: Maybe<Scalars['BigInt']>;
  until_lt?: Maybe<Scalars['BigInt']>;
  until_gte?: Maybe<Scalars['BigInt']>;
  until_lte?: Maybe<Scalars['BigInt']>;
  until_in?: Maybe<Array<Scalars['BigInt']>>;
  until_not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export enum Lock_OrderBy {
  Id = 'id',
  Creator = 'creator',
  Operator = 'operator',
  Until = 'until'
}

/**
 * A node operator.
 * 
 * In Staking terms (https://docs.keep.network/random-beacon/staking/), there is an abstract role called the Staker,
 * representing owner, operator, beneficiary and authorizer. "Stakers are identified by their operator address", and
 * in our graph, through the Operator entity. Understand that in staking terms, only a single owner can delegate
 * their tokens to a particular owner, so the tokens staked always come from the samea address.
 */
export type Operator = {
  __typename?: 'Operator';
  id: Scalars['ID'];
  address: Scalars['Bytes'];
  /** When this operator had a stake delegated to them. This is like a createdAt, and the operation also assigns the beneficiary/authorizer roles. */
  stakedAt: Scalars['BigInt'];
  keeps?: Maybe<Array<BondedEcdsaKeep>>;
  bonds: Array<Bond>;
  locks: Array<Lock>;
  beaconGroupMemberships: Array<RandomBeaconGroupMembership>;
  owner?: Maybe<Scalars['Bytes']>;
  beneficiary?: Maybe<Scalars['Bytes']>;
  authorizer?: Maybe<Scalars['Bytes']>;
  bonded: Scalars['BigDecimal'];
  unboundAvailable: Scalars['BigDecimal'];
  totalKeepCount: Scalars['Int'];
  activeKeepCount: Scalars['Int'];
  beaconGroupCount: Scalars['Int'];
  stakedAmount: Scalars['BigDecimal'];
  /** Rewards generated by this operator in TBTC, for any work. */
  totalTBTCRewards: Scalars['BigInt'];
  /** Rewards generated by this operator in ETH, for any work. */
  totalETHRewards: Scalars['BigInt'];
  /** ETH Rewards generated by this operator for random beacon work. */
  totalBeaconRewards: Scalars['BigInt'];
  /** How often this operator was involved in a fault, attributable to them. */
  attributableFaultCount: Scalars['Int'];
  /** How often this operator was involved in a fault, attributable to them. */
  involvedInFaultCount: Scalars['Int'];
  /** How often this operator was involved in a fault, either attributable or not. */
  totalFaultCount: Scalars['Int'];
  /**
   * A list of timestamps, each representing the expiry date for a lock held on the stake.
   * We use this as a helper to be able to to calculate the maximum value, stakeLockExpiresAt.
   */
  stakeLockExpiryPoints?: Maybe<Array<Scalars['BigInt']>>;
  /** The time when the last lock on the operator's stake expires. This can change when a lock is released early, or a new lock is added. */
  stakeLockExpiresAt?: Maybe<Scalars['BigInt']>;
};


/**
 * A node operator.
 * 
 * In Staking terms (https://docs.keep.network/random-beacon/staking/), there is an abstract role called the Staker,
 * representing owner, operator, beneficiary and authorizer. "Stakers are identified by their operator address", and
 * in our graph, through the Operator entity. Understand that in staking terms, only a single owner can delegate
 * their tokens to a particular owner, so the tokens staked always come from the samea address.
 */
export type OperatorKeepsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<BondedEcdsaKeep_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<BondedEcdsaKeep_Filter>;
};


/**
 * A node operator.
 * 
 * In Staking terms (https://docs.keep.network/random-beacon/staking/), there is an abstract role called the Staker,
 * representing owner, operator, beneficiary and authorizer. "Stakers are identified by their operator address", and
 * in our graph, through the Operator entity. Understand that in staking terms, only a single owner can delegate
 * their tokens to a particular owner, so the tokens staked always come from the samea address.
 */
export type OperatorBondsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Bond_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Bond_Filter>;
};


/**
 * A node operator.
 * 
 * In Staking terms (https://docs.keep.network/random-beacon/staking/), there is an abstract role called the Staker,
 * representing owner, operator, beneficiary and authorizer. "Stakers are identified by their operator address", and
 * in our graph, through the Operator entity. Understand that in staking terms, only a single owner can delegate
 * their tokens to a particular owner, so the tokens staked always come from the samea address.
 */
export type OperatorLocksArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Lock_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Lock_Filter>;
};


/**
 * A node operator.
 * 
 * In Staking terms (https://docs.keep.network/random-beacon/staking/), there is an abstract role called the Staker,
 * representing owner, operator, beneficiary and authorizer. "Stakers are identified by their operator address", and
 * in our graph, through the Operator entity. Understand that in staking terms, only a single owner can delegate
 * their tokens to a particular owner, so the tokens staked always come from the samea address.
 */
export type OperatorBeaconGroupMembershipsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<RandomBeaconGroupMembership_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<RandomBeaconGroupMembership_Filter>;
};

export type OperatorStakedEvent = Event & {
  __typename?: 'OperatorStakedEvent';
  id: Scalars['ID'];
  submitter: Scalars['Bytes'];
  transactionHash: Scalars['String'];
  timestamp: Scalars['BigInt'];
  deposit?: Maybe<Deposit>;
  operator?: Maybe<Operator>;
};

export type OperatorStakedEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  submitter?: Maybe<Scalars['Bytes']>;
  submitter_not?: Maybe<Scalars['Bytes']>;
  submitter_in?: Maybe<Array<Scalars['Bytes']>>;
  submitter_not_in?: Maybe<Array<Scalars['Bytes']>>;
  submitter_contains?: Maybe<Scalars['Bytes']>;
  submitter_not_contains?: Maybe<Scalars['Bytes']>;
  transactionHash?: Maybe<Scalars['String']>;
  transactionHash_not?: Maybe<Scalars['String']>;
  transactionHash_gt?: Maybe<Scalars['String']>;
  transactionHash_lt?: Maybe<Scalars['String']>;
  transactionHash_gte?: Maybe<Scalars['String']>;
  transactionHash_lte?: Maybe<Scalars['String']>;
  transactionHash_in?: Maybe<Array<Scalars['String']>>;
  transactionHash_not_in?: Maybe<Array<Scalars['String']>>;
  transactionHash_contains?: Maybe<Scalars['String']>;
  transactionHash_not_contains?: Maybe<Scalars['String']>;
  transactionHash_starts_with?: Maybe<Scalars['String']>;
  transactionHash_not_starts_with?: Maybe<Scalars['String']>;
  transactionHash_ends_with?: Maybe<Scalars['String']>;
  transactionHash_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  deposit?: Maybe<Scalars['String']>;
  deposit_not?: Maybe<Scalars['String']>;
  deposit_gt?: Maybe<Scalars['String']>;
  deposit_lt?: Maybe<Scalars['String']>;
  deposit_gte?: Maybe<Scalars['String']>;
  deposit_lte?: Maybe<Scalars['String']>;
  deposit_in?: Maybe<Array<Scalars['String']>>;
  deposit_not_in?: Maybe<Array<Scalars['String']>>;
  deposit_contains?: Maybe<Scalars['String']>;
  deposit_not_contains?: Maybe<Scalars['String']>;
  deposit_starts_with?: Maybe<Scalars['String']>;
  deposit_not_starts_with?: Maybe<Scalars['String']>;
  deposit_ends_with?: Maybe<Scalars['String']>;
  deposit_not_ends_with?: Maybe<Scalars['String']>;
  operator?: Maybe<Scalars['String']>;
  operator_not?: Maybe<Scalars['String']>;
  operator_gt?: Maybe<Scalars['String']>;
  operator_lt?: Maybe<Scalars['String']>;
  operator_gte?: Maybe<Scalars['String']>;
  operator_lte?: Maybe<Scalars['String']>;
  operator_in?: Maybe<Array<Scalars['String']>>;
  operator_not_in?: Maybe<Array<Scalars['String']>>;
  operator_contains?: Maybe<Scalars['String']>;
  operator_not_contains?: Maybe<Scalars['String']>;
  operator_starts_with?: Maybe<Scalars['String']>;
  operator_not_starts_with?: Maybe<Scalars['String']>;
  operator_ends_with?: Maybe<Scalars['String']>;
  operator_not_ends_with?: Maybe<Scalars['String']>;
};

export enum OperatorStakedEvent_OrderBy {
  Id = 'id',
  Submitter = 'submitter',
  TransactionHash = 'transactionHash',
  Timestamp = 'timestamp',
  Deposit = 'deposit',
  Operator = 'operator'
}

export type Operator_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  address?: Maybe<Scalars['Bytes']>;
  address_not?: Maybe<Scalars['Bytes']>;
  address_in?: Maybe<Array<Scalars['Bytes']>>;
  address_not_in?: Maybe<Array<Scalars['Bytes']>>;
  address_contains?: Maybe<Scalars['Bytes']>;
  address_not_contains?: Maybe<Scalars['Bytes']>;
  stakedAt?: Maybe<Scalars['BigInt']>;
  stakedAt_not?: Maybe<Scalars['BigInt']>;
  stakedAt_gt?: Maybe<Scalars['BigInt']>;
  stakedAt_lt?: Maybe<Scalars['BigInt']>;
  stakedAt_gte?: Maybe<Scalars['BigInt']>;
  stakedAt_lte?: Maybe<Scalars['BigInt']>;
  stakedAt_in?: Maybe<Array<Scalars['BigInt']>>;
  stakedAt_not_in?: Maybe<Array<Scalars['BigInt']>>;
  owner?: Maybe<Scalars['Bytes']>;
  owner_not?: Maybe<Scalars['Bytes']>;
  owner_in?: Maybe<Array<Scalars['Bytes']>>;
  owner_not_in?: Maybe<Array<Scalars['Bytes']>>;
  owner_contains?: Maybe<Scalars['Bytes']>;
  owner_not_contains?: Maybe<Scalars['Bytes']>;
  beneficiary?: Maybe<Scalars['Bytes']>;
  beneficiary_not?: Maybe<Scalars['Bytes']>;
  beneficiary_in?: Maybe<Array<Scalars['Bytes']>>;
  beneficiary_not_in?: Maybe<Array<Scalars['Bytes']>>;
  beneficiary_contains?: Maybe<Scalars['Bytes']>;
  beneficiary_not_contains?: Maybe<Scalars['Bytes']>;
  authorizer?: Maybe<Scalars['Bytes']>;
  authorizer_not?: Maybe<Scalars['Bytes']>;
  authorizer_in?: Maybe<Array<Scalars['Bytes']>>;
  authorizer_not_in?: Maybe<Array<Scalars['Bytes']>>;
  authorizer_contains?: Maybe<Scalars['Bytes']>;
  authorizer_not_contains?: Maybe<Scalars['Bytes']>;
  bonded?: Maybe<Scalars['BigDecimal']>;
  bonded_not?: Maybe<Scalars['BigDecimal']>;
  bonded_gt?: Maybe<Scalars['BigDecimal']>;
  bonded_lt?: Maybe<Scalars['BigDecimal']>;
  bonded_gte?: Maybe<Scalars['BigDecimal']>;
  bonded_lte?: Maybe<Scalars['BigDecimal']>;
  bonded_in?: Maybe<Array<Scalars['BigDecimal']>>;
  bonded_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  unboundAvailable?: Maybe<Scalars['BigDecimal']>;
  unboundAvailable_not?: Maybe<Scalars['BigDecimal']>;
  unboundAvailable_gt?: Maybe<Scalars['BigDecimal']>;
  unboundAvailable_lt?: Maybe<Scalars['BigDecimal']>;
  unboundAvailable_gte?: Maybe<Scalars['BigDecimal']>;
  unboundAvailable_lte?: Maybe<Scalars['BigDecimal']>;
  unboundAvailable_in?: Maybe<Array<Scalars['BigDecimal']>>;
  unboundAvailable_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  totalKeepCount?: Maybe<Scalars['Int']>;
  totalKeepCount_not?: Maybe<Scalars['Int']>;
  totalKeepCount_gt?: Maybe<Scalars['Int']>;
  totalKeepCount_lt?: Maybe<Scalars['Int']>;
  totalKeepCount_gte?: Maybe<Scalars['Int']>;
  totalKeepCount_lte?: Maybe<Scalars['Int']>;
  totalKeepCount_in?: Maybe<Array<Scalars['Int']>>;
  totalKeepCount_not_in?: Maybe<Array<Scalars['Int']>>;
  activeKeepCount?: Maybe<Scalars['Int']>;
  activeKeepCount_not?: Maybe<Scalars['Int']>;
  activeKeepCount_gt?: Maybe<Scalars['Int']>;
  activeKeepCount_lt?: Maybe<Scalars['Int']>;
  activeKeepCount_gte?: Maybe<Scalars['Int']>;
  activeKeepCount_lte?: Maybe<Scalars['Int']>;
  activeKeepCount_in?: Maybe<Array<Scalars['Int']>>;
  activeKeepCount_not_in?: Maybe<Array<Scalars['Int']>>;
  beaconGroupCount?: Maybe<Scalars['Int']>;
  beaconGroupCount_not?: Maybe<Scalars['Int']>;
  beaconGroupCount_gt?: Maybe<Scalars['Int']>;
  beaconGroupCount_lt?: Maybe<Scalars['Int']>;
  beaconGroupCount_gte?: Maybe<Scalars['Int']>;
  beaconGroupCount_lte?: Maybe<Scalars['Int']>;
  beaconGroupCount_in?: Maybe<Array<Scalars['Int']>>;
  beaconGroupCount_not_in?: Maybe<Array<Scalars['Int']>>;
  stakedAmount?: Maybe<Scalars['BigDecimal']>;
  stakedAmount_not?: Maybe<Scalars['BigDecimal']>;
  stakedAmount_gt?: Maybe<Scalars['BigDecimal']>;
  stakedAmount_lt?: Maybe<Scalars['BigDecimal']>;
  stakedAmount_gte?: Maybe<Scalars['BigDecimal']>;
  stakedAmount_lte?: Maybe<Scalars['BigDecimal']>;
  stakedAmount_in?: Maybe<Array<Scalars['BigDecimal']>>;
  stakedAmount_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  totalTBTCRewards?: Maybe<Scalars['BigInt']>;
  totalTBTCRewards_not?: Maybe<Scalars['BigInt']>;
  totalTBTCRewards_gt?: Maybe<Scalars['BigInt']>;
  totalTBTCRewards_lt?: Maybe<Scalars['BigInt']>;
  totalTBTCRewards_gte?: Maybe<Scalars['BigInt']>;
  totalTBTCRewards_lte?: Maybe<Scalars['BigInt']>;
  totalTBTCRewards_in?: Maybe<Array<Scalars['BigInt']>>;
  totalTBTCRewards_not_in?: Maybe<Array<Scalars['BigInt']>>;
  totalETHRewards?: Maybe<Scalars['BigInt']>;
  totalETHRewards_not?: Maybe<Scalars['BigInt']>;
  totalETHRewards_gt?: Maybe<Scalars['BigInt']>;
  totalETHRewards_lt?: Maybe<Scalars['BigInt']>;
  totalETHRewards_gte?: Maybe<Scalars['BigInt']>;
  totalETHRewards_lte?: Maybe<Scalars['BigInt']>;
  totalETHRewards_in?: Maybe<Array<Scalars['BigInt']>>;
  totalETHRewards_not_in?: Maybe<Array<Scalars['BigInt']>>;
  totalBeaconRewards?: Maybe<Scalars['BigInt']>;
  totalBeaconRewards_not?: Maybe<Scalars['BigInt']>;
  totalBeaconRewards_gt?: Maybe<Scalars['BigInt']>;
  totalBeaconRewards_lt?: Maybe<Scalars['BigInt']>;
  totalBeaconRewards_gte?: Maybe<Scalars['BigInt']>;
  totalBeaconRewards_lte?: Maybe<Scalars['BigInt']>;
  totalBeaconRewards_in?: Maybe<Array<Scalars['BigInt']>>;
  totalBeaconRewards_not_in?: Maybe<Array<Scalars['BigInt']>>;
  attributableFaultCount?: Maybe<Scalars['Int']>;
  attributableFaultCount_not?: Maybe<Scalars['Int']>;
  attributableFaultCount_gt?: Maybe<Scalars['Int']>;
  attributableFaultCount_lt?: Maybe<Scalars['Int']>;
  attributableFaultCount_gte?: Maybe<Scalars['Int']>;
  attributableFaultCount_lte?: Maybe<Scalars['Int']>;
  attributableFaultCount_in?: Maybe<Array<Scalars['Int']>>;
  attributableFaultCount_not_in?: Maybe<Array<Scalars['Int']>>;
  involvedInFaultCount?: Maybe<Scalars['Int']>;
  involvedInFaultCount_not?: Maybe<Scalars['Int']>;
  involvedInFaultCount_gt?: Maybe<Scalars['Int']>;
  involvedInFaultCount_lt?: Maybe<Scalars['Int']>;
  involvedInFaultCount_gte?: Maybe<Scalars['Int']>;
  involvedInFaultCount_lte?: Maybe<Scalars['Int']>;
  involvedInFaultCount_in?: Maybe<Array<Scalars['Int']>>;
  involvedInFaultCount_not_in?: Maybe<Array<Scalars['Int']>>;
  totalFaultCount?: Maybe<Scalars['Int']>;
  totalFaultCount_not?: Maybe<Scalars['Int']>;
  totalFaultCount_gt?: Maybe<Scalars['Int']>;
  totalFaultCount_lt?: Maybe<Scalars['Int']>;
  totalFaultCount_gte?: Maybe<Scalars['Int']>;
  totalFaultCount_lte?: Maybe<Scalars['Int']>;
  totalFaultCount_in?: Maybe<Array<Scalars['Int']>>;
  totalFaultCount_not_in?: Maybe<Array<Scalars['Int']>>;
  stakeLockExpiryPoints?: Maybe<Array<Scalars['BigInt']>>;
  stakeLockExpiryPoints_not?: Maybe<Array<Scalars['BigInt']>>;
  stakeLockExpiryPoints_contains?: Maybe<Array<Scalars['BigInt']>>;
  stakeLockExpiryPoints_not_contains?: Maybe<Array<Scalars['BigInt']>>;
  stakeLockExpiresAt?: Maybe<Scalars['BigInt']>;
  stakeLockExpiresAt_not?: Maybe<Scalars['BigInt']>;
  stakeLockExpiresAt_gt?: Maybe<Scalars['BigInt']>;
  stakeLockExpiresAt_lt?: Maybe<Scalars['BigInt']>;
  stakeLockExpiresAt_gte?: Maybe<Scalars['BigInt']>;
  stakeLockExpiresAt_lte?: Maybe<Scalars['BigInt']>;
  stakeLockExpiresAt_in?: Maybe<Array<Scalars['BigInt']>>;
  stakeLockExpiresAt_not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export enum Operator_OrderBy {
  Id = 'id',
  Address = 'address',
  StakedAt = 'stakedAt',
  Keeps = 'keeps',
  Bonds = 'bonds',
  Locks = 'locks',
  BeaconGroupMemberships = 'beaconGroupMemberships',
  Owner = 'owner',
  Beneficiary = 'beneficiary',
  Authorizer = 'authorizer',
  Bonded = 'bonded',
  UnboundAvailable = 'unboundAvailable',
  TotalKeepCount = 'totalKeepCount',
  ActiveKeepCount = 'activeKeepCount',
  BeaconGroupCount = 'beaconGroupCount',
  StakedAmount = 'stakedAmount',
  TotalTbtcRewards = 'totalTBTCRewards',
  TotalEthRewards = 'totalETHRewards',
  TotalBeaconRewards = 'totalBeaconRewards',
  AttributableFaultCount = 'attributableFaultCount',
  InvolvedInFaultCount = 'involvedInFaultCount',
  TotalFaultCount = 'totalFaultCount',
  StakeLockExpiryPoints = 'stakeLockExpiryPoints',
  StakeLockExpiresAt = 'stakeLockExpiresAt'
}

export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type PriceFeed = {
  __typename?: 'PriceFeed';
  id: Scalars['ID'];
  val: Scalars['BigInt'];
  age: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
  blockNumber: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
};

export type PriceFeed_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  val?: Maybe<Scalars['BigInt']>;
  val_not?: Maybe<Scalars['BigInt']>;
  val_gt?: Maybe<Scalars['BigInt']>;
  val_lt?: Maybe<Scalars['BigInt']>;
  val_gte?: Maybe<Scalars['BigInt']>;
  val_lte?: Maybe<Scalars['BigInt']>;
  val_in?: Maybe<Array<Scalars['BigInt']>>;
  val_not_in?: Maybe<Array<Scalars['BigInt']>>;
  age?: Maybe<Scalars['BigInt']>;
  age_not?: Maybe<Scalars['BigInt']>;
  age_gt?: Maybe<Scalars['BigInt']>;
  age_lt?: Maybe<Scalars['BigInt']>;
  age_gte?: Maybe<Scalars['BigInt']>;
  age_lte?: Maybe<Scalars['BigInt']>;
  age_in?: Maybe<Array<Scalars['BigInt']>>;
  age_not_in?: Maybe<Array<Scalars['BigInt']>>;
  transactionHash?: Maybe<Scalars['Bytes']>;
  transactionHash_not?: Maybe<Scalars['Bytes']>;
  transactionHash_in?: Maybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: Maybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: Maybe<Scalars['Bytes']>;
  transactionHash_not_contains?: Maybe<Scalars['Bytes']>;
  blockNumber?: Maybe<Scalars['BigInt']>;
  blockNumber_not?: Maybe<Scalars['BigInt']>;
  blockNumber_gt?: Maybe<Scalars['BigInt']>;
  blockNumber_lt?: Maybe<Scalars['BigInt']>;
  blockNumber_gte?: Maybe<Scalars['BigInt']>;
  blockNumber_lte?: Maybe<Scalars['BigInt']>;
  blockNumber_in?: Maybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export enum PriceFeed_OrderBy {
  Id = 'id',
  Val = 'val',
  Age = 'age',
  TransactionHash = 'transactionHash',
  BlockNumber = 'blockNumber',
  Timestamp = 'timestamp'
}

export type Query = {
  __typename?: 'Query';
  tbtcdepositToken?: Maybe<TbtcDepositToken>;
  tbtcdepositTokens: Array<TbtcDepositToken>;
  stakedropInterval?: Maybe<StakedropInterval>;
  stakedropIntervals: Array<StakedropInterval>;
  createdEvent?: Maybe<CreatedEvent>;
  createdEvents: Array<CreatedEvent>;
  fundedEvent?: Maybe<FundedEvent>;
  fundedEvents: Array<FundedEvent>;
  registeredPubKeyEvent?: Maybe<RegisteredPubKeyEvent>;
  registeredPubKeyEvents: Array<RegisteredPubKeyEvent>;
  redeemedEvent?: Maybe<RedeemedEvent>;
  redeemedEvents: Array<RedeemedEvent>;
  gotRedemptionSignatureEvent?: Maybe<GotRedemptionSignatureEvent>;
  gotRedemptionSignatureEvents: Array<GotRedemptionSignatureEvent>;
  redemptionRequestedEvent?: Maybe<RedemptionRequestedEvent>;
  redemptionRequestedEvents: Array<RedemptionRequestedEvent>;
  redemptionFeeIncreasedEvent?: Maybe<RedemptionFeeIncreasedEvent>;
  redemptionFeeIncreasedEvents: Array<RedemptionFeeIncreasedEvent>;
  setupFailedEvent?: Maybe<SetupFailedEvent>;
  setupFailedEvents: Array<SetupFailedEvent>;
  liquidatedEvent?: Maybe<LiquidatedEvent>;
  liquidatedEvents: Array<LiquidatedEvent>;
  courtesyCalledEvent?: Maybe<CourtesyCalledEvent>;
  courtesyCalledEvents: Array<CourtesyCalledEvent>;
  exitedCourtesyCallEvent?: Maybe<ExitedCourtesyCallEvent>;
  exitedCourtesyCallEvents: Array<ExitedCourtesyCallEvent>;
  startedLiquidationEvent?: Maybe<StartedLiquidationEvent>;
  startedLiquidationEvents: Array<StartedLiquidationEvent>;
  deposit?: Maybe<Deposit>;
  deposits: Array<Deposit>;
  depositSetup?: Maybe<DepositSetup>;
  depositSetups: Array<DepositSetup>;
  depositLiquidation?: Maybe<DepositLiquidation>;
  depositLiquidations: Array<DepositLiquidation>;
  depositRedemption?: Maybe<DepositRedemption>;
  depositRedemptions: Array<DepositRedemption>;
  user?: Maybe<User>;
  users: Array<User>;
  operator?: Maybe<Operator>;
  operators: Array<Operator>;
  operatorStakedEvent?: Maybe<OperatorStakedEvent>;
  operatorStakedEvents: Array<OperatorStakedEvent>;
  tokensSlashedEvent?: Maybe<TokensSlashedEvent>;
  tokensSlashedEvents: Array<TokensSlashedEvent>;
  tokensSeizedEvent?: Maybe<TokensSeizedEvent>;
  tokensSeizedEvents: Array<TokensSeizedEvent>;
  undelegatedEvent?: Maybe<UndelegatedEvent>;
  undelegatedEvents: Array<UndelegatedEvent>;
  stakeOwnershipTransferredEvent?: Maybe<StakeOwnershipTransferredEvent>;
  stakeOwnershipTransferredEvents: Array<StakeOwnershipTransferredEvent>;
  topUpCompletedEvent?: Maybe<TopUpCompletedEvent>;
  topUpCompletedEvents: Array<TopUpCompletedEvent>;
  topUpInitiatedEvent?: Maybe<TopUpInitiatedEvent>;
  topUpInitiatedEvents: Array<TopUpInitiatedEvent>;
  bondReassignedEvent?: Maybe<BondReassignedEvent>;
  bondReassignedEvents: Array<BondReassignedEvent>;
  bondSeizedEvent?: Maybe<BondSeizedEvent>;
  bondSeizedEvents: Array<BondSeizedEvent>;
  unbondedValueDepositedEvent?: Maybe<UnbondedValueDepositedEvent>;
  unbondedValueDepositedEvents: Array<UnbondedValueDepositedEvent>;
  unbondedValueWithdrawnEvent?: Maybe<UnbondedValueWithdrawnEvent>;
  unbondedValueWithdrawnEvents: Array<UnbondedValueWithdrawnEvent>;
  lock?: Maybe<Lock>;
  locks: Array<Lock>;
  bond?: Maybe<Bond>;
  bonds: Array<Bond>;
  bondedECDSAKeep?: Maybe<BondedEcdsaKeep>;
  bondedECDSAKeeps: Array<BondedEcdsaKeep>;
  governanceLogEntry?: Maybe<GovernanceLogEntry>;
  governanceLogEntries: Array<GovernanceLogEntry>;
  governanceChange?: Maybe<GovernanceChange>;
  governanceChanges: Array<GovernanceChange>;
  governance?: Maybe<Governance>;
  governances: Array<Governance>;
  statsRecord?: Maybe<StatsRecord>;
  statsRecords: Array<StatsRecord>;
  statusRecord?: Maybe<StatusRecord>;
  statusRecords: Array<StatusRecord>;
  randomBeaconGroup?: Maybe<RandomBeaconGroup>;
  randomBeaconGroups: Array<RandomBeaconGroup>;
  relayEntry?: Maybe<RelayEntry>;
  relayEntries: Array<RelayEntry>;
  randomBeaconGroupMembership?: Maybe<RandomBeaconGroupMembership>;
  randomBeaconGroupMemberships: Array<RandomBeaconGroupMembership>;
  priceFeed?: Maybe<PriceFeed>;
  priceFeeds: Array<PriceFeed>;
  grant?: Maybe<Grant>;
  grants: Array<Grant>;
  stakingContractAuthorizedEvent?: Maybe<StakingContractAuthorizedEvent>;
  stakingContractAuthorizedEvents: Array<StakingContractAuthorizedEvent>;
  tokenGrantCreatedEvent?: Maybe<TokenGrantCreatedEvent>;
  tokenGrantCreatedEvents: Array<TokenGrantCreatedEvent>;
  tokenGrantWithdrawnEvent?: Maybe<TokenGrantWithdrawnEvent>;
  tokenGrantWithdrawnEvents: Array<TokenGrantWithdrawnEvent>;
  tokenGrantStakedEvent?: Maybe<TokenGrantStakedEvent>;
  tokenGrantStakedEvents: Array<TokenGrantStakedEvent>;
  tokenGrantRevokedEvent?: Maybe<TokenGrantRevokedEvent>;
  tokenGrantRevokedEvents: Array<TokenGrantRevokedEvent>;
  event?: Maybe<Event>;
  events: Array<Event>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type QueryTbtcdepositTokenArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryTbtcdepositTokensArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TbtcDepositToken_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<TbtcDepositToken_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryStakedropIntervalArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryStakedropIntervalsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<StakedropInterval_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<StakedropInterval_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryCreatedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryCreatedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<CreatedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<CreatedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryFundedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryFundedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<FundedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<FundedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryRegisteredPubKeyEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryRegisteredPubKeyEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<RegisteredPubKeyEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<RegisteredPubKeyEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryRedeemedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryRedeemedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<RedeemedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<RedeemedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryGotRedemptionSignatureEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryGotRedemptionSignatureEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<GotRedemptionSignatureEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<GotRedemptionSignatureEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryRedemptionRequestedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryRedemptionRequestedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<RedemptionRequestedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<RedemptionRequestedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryRedemptionFeeIncreasedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryRedemptionFeeIncreasedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<RedemptionFeeIncreasedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<RedemptionFeeIncreasedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QuerySetupFailedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QuerySetupFailedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<SetupFailedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<SetupFailedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryLiquidatedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryLiquidatedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<LiquidatedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<LiquidatedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryCourtesyCalledEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryCourtesyCalledEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<CourtesyCalledEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<CourtesyCalledEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryExitedCourtesyCallEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryExitedCourtesyCallEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ExitedCourtesyCallEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<ExitedCourtesyCallEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryStartedLiquidationEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryStartedLiquidationEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<StartedLiquidationEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<StartedLiquidationEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryDepositArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryDepositsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Deposit_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Deposit_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryDepositSetupArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryDepositSetupsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<DepositSetup_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<DepositSetup_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryDepositLiquidationArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryDepositLiquidationsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<DepositLiquidation_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<DepositLiquidation_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryDepositRedemptionArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryDepositRedemptionsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<DepositRedemption_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<DepositRedemption_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryUsersArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<User_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<User_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryOperatorArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryOperatorsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Operator_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Operator_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryOperatorStakedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryOperatorStakedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<OperatorStakedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<OperatorStakedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryTokensSlashedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryTokensSlashedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TokensSlashedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<TokensSlashedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryTokensSeizedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryTokensSeizedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TokensSeizedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<TokensSeizedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryUndelegatedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryUndelegatedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<UndelegatedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<UndelegatedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryStakeOwnershipTransferredEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryStakeOwnershipTransferredEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<StakeOwnershipTransferredEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<StakeOwnershipTransferredEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryTopUpCompletedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryTopUpCompletedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TopUpCompletedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<TopUpCompletedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryTopUpInitiatedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryTopUpInitiatedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TopUpInitiatedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<TopUpInitiatedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryBondReassignedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryBondReassignedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<BondReassignedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<BondReassignedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryBondSeizedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryBondSeizedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<BondSeizedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<BondSeizedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryUnbondedValueDepositedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryUnbondedValueDepositedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<UnbondedValueDepositedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<UnbondedValueDepositedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryUnbondedValueWithdrawnEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryUnbondedValueWithdrawnEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<UnbondedValueWithdrawnEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<UnbondedValueWithdrawnEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryLockArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryLocksArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Lock_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Lock_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryBondArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryBondsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Bond_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Bond_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryBondedEcdsaKeepArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryBondedEcdsaKeepsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<BondedEcdsaKeep_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<BondedEcdsaKeep_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryGovernanceLogEntryArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryGovernanceLogEntriesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<GovernanceLogEntry_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<GovernanceLogEntry_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryGovernanceChangeArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryGovernanceChangesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<GovernanceChange_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<GovernanceChange_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryGovernanceArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryGovernancesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Governance_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Governance_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryStatsRecordArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryStatsRecordsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<StatsRecord_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<StatsRecord_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryStatusRecordArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryStatusRecordsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<StatusRecord_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<StatusRecord_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryRandomBeaconGroupArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryRandomBeaconGroupsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<RandomBeaconGroup_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<RandomBeaconGroup_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryRelayEntryArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryRelayEntriesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<RelayEntry_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<RelayEntry_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryRandomBeaconGroupMembershipArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryRandomBeaconGroupMembershipsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<RandomBeaconGroupMembership_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<RandomBeaconGroupMembership_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryPriceFeedArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryPriceFeedsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PriceFeed_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PriceFeed_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryGrantArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryGrantsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Grant_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Grant_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryStakingContractAuthorizedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryStakingContractAuthorizedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<StakingContractAuthorizedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<StakingContractAuthorizedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryTokenGrantCreatedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryTokenGrantCreatedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TokenGrantCreatedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<TokenGrantCreatedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryTokenGrantWithdrawnEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryTokenGrantWithdrawnEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TokenGrantWithdrawnEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<TokenGrantWithdrawnEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryTokenGrantStakedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryTokenGrantStakedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TokenGrantStakedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<TokenGrantStakedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryTokenGrantRevokedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryTokenGrantRevokedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TokenGrantRevokedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<TokenGrantRevokedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Event_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Event_Filter>;
  block?: Maybe<Block_Height>;
};


export type Query_MetaArgs = {
  block?: Maybe<Block_Height>;
};

export type RandomBeaconGroup = {
  __typename?: 'RandomBeaconGroup';
  id: Scalars['ID'];
  pubKey: Scalars['Bytes'];
  createdAt: Scalars['BigInt'];
  /** A membership record for each unique member in the group. */
  memberships: Array<RandomBeaconGroupMembership>;
  /** The total number of slots. Since operators may appear multiple times, this is distinct from the unique number count of the group. */
  size: Scalars['Int'];
  /** How many unique operators are in this group - the number of membership records. */
  uniqueMemberCount: Scalars['Int'];
  rewardPerMember: Scalars['BigInt'];
  /** Which stakedrop interval this groups belongs to, if any. */
  stakedropInterval?: Maybe<StakedropInterval>;
  relayEntries: Array<RelayEntry>;
};


export type RandomBeaconGroupMembershipsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<RandomBeaconGroupMembership_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<RandomBeaconGroupMembership_Filter>;
};


export type RandomBeaconGroupRelayEntriesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<RelayEntry_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<RelayEntry_Filter>;
};

/** Represents the membership of an operator in a beacon group. */
export type RandomBeaconGroupMembership = {
  __typename?: 'RandomBeaconGroupMembership';
  id: Scalars['ID'];
  group: RandomBeaconGroup;
  operator: Operator;
  /** The same operator can fill multiple membership slots within a group. */
  count: Scalars['Int'];
  /** ETH reward amount (in wei) earned by this operator through membership in this group. */
  reward: Scalars['BigInt'];
  groupCreatedAt: Scalars['BigInt'];
};

export type RandomBeaconGroupMembership_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  group?: Maybe<Scalars['String']>;
  group_not?: Maybe<Scalars['String']>;
  group_gt?: Maybe<Scalars['String']>;
  group_lt?: Maybe<Scalars['String']>;
  group_gte?: Maybe<Scalars['String']>;
  group_lte?: Maybe<Scalars['String']>;
  group_in?: Maybe<Array<Scalars['String']>>;
  group_not_in?: Maybe<Array<Scalars['String']>>;
  group_contains?: Maybe<Scalars['String']>;
  group_not_contains?: Maybe<Scalars['String']>;
  group_starts_with?: Maybe<Scalars['String']>;
  group_not_starts_with?: Maybe<Scalars['String']>;
  group_ends_with?: Maybe<Scalars['String']>;
  group_not_ends_with?: Maybe<Scalars['String']>;
  operator?: Maybe<Scalars['String']>;
  operator_not?: Maybe<Scalars['String']>;
  operator_gt?: Maybe<Scalars['String']>;
  operator_lt?: Maybe<Scalars['String']>;
  operator_gte?: Maybe<Scalars['String']>;
  operator_lte?: Maybe<Scalars['String']>;
  operator_in?: Maybe<Array<Scalars['String']>>;
  operator_not_in?: Maybe<Array<Scalars['String']>>;
  operator_contains?: Maybe<Scalars['String']>;
  operator_not_contains?: Maybe<Scalars['String']>;
  operator_starts_with?: Maybe<Scalars['String']>;
  operator_not_starts_with?: Maybe<Scalars['String']>;
  operator_ends_with?: Maybe<Scalars['String']>;
  operator_not_ends_with?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['Int']>;
  count_not?: Maybe<Scalars['Int']>;
  count_gt?: Maybe<Scalars['Int']>;
  count_lt?: Maybe<Scalars['Int']>;
  count_gte?: Maybe<Scalars['Int']>;
  count_lte?: Maybe<Scalars['Int']>;
  count_in?: Maybe<Array<Scalars['Int']>>;
  count_not_in?: Maybe<Array<Scalars['Int']>>;
  reward?: Maybe<Scalars['BigInt']>;
  reward_not?: Maybe<Scalars['BigInt']>;
  reward_gt?: Maybe<Scalars['BigInt']>;
  reward_lt?: Maybe<Scalars['BigInt']>;
  reward_gte?: Maybe<Scalars['BigInt']>;
  reward_lte?: Maybe<Scalars['BigInt']>;
  reward_in?: Maybe<Array<Scalars['BigInt']>>;
  reward_not_in?: Maybe<Array<Scalars['BigInt']>>;
  groupCreatedAt?: Maybe<Scalars['BigInt']>;
  groupCreatedAt_not?: Maybe<Scalars['BigInt']>;
  groupCreatedAt_gt?: Maybe<Scalars['BigInt']>;
  groupCreatedAt_lt?: Maybe<Scalars['BigInt']>;
  groupCreatedAt_gte?: Maybe<Scalars['BigInt']>;
  groupCreatedAt_lte?: Maybe<Scalars['BigInt']>;
  groupCreatedAt_in?: Maybe<Array<Scalars['BigInt']>>;
  groupCreatedAt_not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export enum RandomBeaconGroupMembership_OrderBy {
  Id = 'id',
  Group = 'group',
  Operator = 'operator',
  Count = 'count',
  Reward = 'reward',
  GroupCreatedAt = 'groupCreatedAt'
}

export type RandomBeaconGroup_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  pubKey?: Maybe<Scalars['Bytes']>;
  pubKey_not?: Maybe<Scalars['Bytes']>;
  pubKey_in?: Maybe<Array<Scalars['Bytes']>>;
  pubKey_not_in?: Maybe<Array<Scalars['Bytes']>>;
  pubKey_contains?: Maybe<Scalars['Bytes']>;
  pubKey_not_contains?: Maybe<Scalars['Bytes']>;
  createdAt?: Maybe<Scalars['BigInt']>;
  createdAt_not?: Maybe<Scalars['BigInt']>;
  createdAt_gt?: Maybe<Scalars['BigInt']>;
  createdAt_lt?: Maybe<Scalars['BigInt']>;
  createdAt_gte?: Maybe<Scalars['BigInt']>;
  createdAt_lte?: Maybe<Scalars['BigInt']>;
  createdAt_in?: Maybe<Array<Scalars['BigInt']>>;
  createdAt_not_in?: Maybe<Array<Scalars['BigInt']>>;
  memberships?: Maybe<Array<Scalars['String']>>;
  memberships_not?: Maybe<Array<Scalars['String']>>;
  memberships_contains?: Maybe<Array<Scalars['String']>>;
  memberships_not_contains?: Maybe<Array<Scalars['String']>>;
  size?: Maybe<Scalars['Int']>;
  size_not?: Maybe<Scalars['Int']>;
  size_gt?: Maybe<Scalars['Int']>;
  size_lt?: Maybe<Scalars['Int']>;
  size_gte?: Maybe<Scalars['Int']>;
  size_lte?: Maybe<Scalars['Int']>;
  size_in?: Maybe<Array<Scalars['Int']>>;
  size_not_in?: Maybe<Array<Scalars['Int']>>;
  uniqueMemberCount?: Maybe<Scalars['Int']>;
  uniqueMemberCount_not?: Maybe<Scalars['Int']>;
  uniqueMemberCount_gt?: Maybe<Scalars['Int']>;
  uniqueMemberCount_lt?: Maybe<Scalars['Int']>;
  uniqueMemberCount_gte?: Maybe<Scalars['Int']>;
  uniqueMemberCount_lte?: Maybe<Scalars['Int']>;
  uniqueMemberCount_in?: Maybe<Array<Scalars['Int']>>;
  uniqueMemberCount_not_in?: Maybe<Array<Scalars['Int']>>;
  rewardPerMember?: Maybe<Scalars['BigInt']>;
  rewardPerMember_not?: Maybe<Scalars['BigInt']>;
  rewardPerMember_gt?: Maybe<Scalars['BigInt']>;
  rewardPerMember_lt?: Maybe<Scalars['BigInt']>;
  rewardPerMember_gte?: Maybe<Scalars['BigInt']>;
  rewardPerMember_lte?: Maybe<Scalars['BigInt']>;
  rewardPerMember_in?: Maybe<Array<Scalars['BigInt']>>;
  rewardPerMember_not_in?: Maybe<Array<Scalars['BigInt']>>;
  stakedropInterval?: Maybe<Scalars['String']>;
  stakedropInterval_not?: Maybe<Scalars['String']>;
  stakedropInterval_gt?: Maybe<Scalars['String']>;
  stakedropInterval_lt?: Maybe<Scalars['String']>;
  stakedropInterval_gte?: Maybe<Scalars['String']>;
  stakedropInterval_lte?: Maybe<Scalars['String']>;
  stakedropInterval_in?: Maybe<Array<Scalars['String']>>;
  stakedropInterval_not_in?: Maybe<Array<Scalars['String']>>;
  stakedropInterval_contains?: Maybe<Scalars['String']>;
  stakedropInterval_not_contains?: Maybe<Scalars['String']>;
  stakedropInterval_starts_with?: Maybe<Scalars['String']>;
  stakedropInterval_not_starts_with?: Maybe<Scalars['String']>;
  stakedropInterval_ends_with?: Maybe<Scalars['String']>;
  stakedropInterval_not_ends_with?: Maybe<Scalars['String']>;
};

export enum RandomBeaconGroup_OrderBy {
  Id = 'id',
  PubKey = 'pubKey',
  CreatedAt = 'createdAt',
  Memberships = 'memberships',
  Size = 'size',
  UniqueMemberCount = 'uniqueMemberCount',
  RewardPerMember = 'rewardPerMember',
  StakedropInterval = 'stakedropInterval',
  RelayEntries = 'relayEntries'
}

export type RedeemedEvent = Event & {
  __typename?: 'RedeemedEvent';
  id: Scalars['ID'];
  submitter: Scalars['Bytes'];
  transactionHash: Scalars['String'];
  timestamp: Scalars['BigInt'];
  deposit?: Maybe<Deposit>;
  operator?: Maybe<Operator>;
  tx: Scalars['Bytes'];
};

export type RedeemedEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  submitter?: Maybe<Scalars['Bytes']>;
  submitter_not?: Maybe<Scalars['Bytes']>;
  submitter_in?: Maybe<Array<Scalars['Bytes']>>;
  submitter_not_in?: Maybe<Array<Scalars['Bytes']>>;
  submitter_contains?: Maybe<Scalars['Bytes']>;
  submitter_not_contains?: Maybe<Scalars['Bytes']>;
  transactionHash?: Maybe<Scalars['String']>;
  transactionHash_not?: Maybe<Scalars['String']>;
  transactionHash_gt?: Maybe<Scalars['String']>;
  transactionHash_lt?: Maybe<Scalars['String']>;
  transactionHash_gte?: Maybe<Scalars['String']>;
  transactionHash_lte?: Maybe<Scalars['String']>;
  transactionHash_in?: Maybe<Array<Scalars['String']>>;
  transactionHash_not_in?: Maybe<Array<Scalars['String']>>;
  transactionHash_contains?: Maybe<Scalars['String']>;
  transactionHash_not_contains?: Maybe<Scalars['String']>;
  transactionHash_starts_with?: Maybe<Scalars['String']>;
  transactionHash_not_starts_with?: Maybe<Scalars['String']>;
  transactionHash_ends_with?: Maybe<Scalars['String']>;
  transactionHash_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  deposit?: Maybe<Scalars['String']>;
  deposit_not?: Maybe<Scalars['String']>;
  deposit_gt?: Maybe<Scalars['String']>;
  deposit_lt?: Maybe<Scalars['String']>;
  deposit_gte?: Maybe<Scalars['String']>;
  deposit_lte?: Maybe<Scalars['String']>;
  deposit_in?: Maybe<Array<Scalars['String']>>;
  deposit_not_in?: Maybe<Array<Scalars['String']>>;
  deposit_contains?: Maybe<Scalars['String']>;
  deposit_not_contains?: Maybe<Scalars['String']>;
  deposit_starts_with?: Maybe<Scalars['String']>;
  deposit_not_starts_with?: Maybe<Scalars['String']>;
  deposit_ends_with?: Maybe<Scalars['String']>;
  deposit_not_ends_with?: Maybe<Scalars['String']>;
  operator?: Maybe<Scalars['String']>;
  operator_not?: Maybe<Scalars['String']>;
  operator_gt?: Maybe<Scalars['String']>;
  operator_lt?: Maybe<Scalars['String']>;
  operator_gte?: Maybe<Scalars['String']>;
  operator_lte?: Maybe<Scalars['String']>;
  operator_in?: Maybe<Array<Scalars['String']>>;
  operator_not_in?: Maybe<Array<Scalars['String']>>;
  operator_contains?: Maybe<Scalars['String']>;
  operator_not_contains?: Maybe<Scalars['String']>;
  operator_starts_with?: Maybe<Scalars['String']>;
  operator_not_starts_with?: Maybe<Scalars['String']>;
  operator_ends_with?: Maybe<Scalars['String']>;
  operator_not_ends_with?: Maybe<Scalars['String']>;
  tx?: Maybe<Scalars['Bytes']>;
  tx_not?: Maybe<Scalars['Bytes']>;
  tx_in?: Maybe<Array<Scalars['Bytes']>>;
  tx_not_in?: Maybe<Array<Scalars['Bytes']>>;
  tx_contains?: Maybe<Scalars['Bytes']>;
  tx_not_contains?: Maybe<Scalars['Bytes']>;
};

export enum RedeemedEvent_OrderBy {
  Id = 'id',
  Submitter = 'submitter',
  TransactionHash = 'transactionHash',
  Timestamp = 'timestamp',
  Deposit = 'deposit',
  Operator = 'operator',
  Tx = 'tx'
}

/** If a Bitcoin fee increase is requested during the withdrawal process. */
export type RedemptionFeeIncreasedEvent = Event & {
  __typename?: 'RedemptionFeeIncreasedEvent';
  id: Scalars['ID'];
  submitter: Scalars['Bytes'];
  transactionHash: Scalars['String'];
  timestamp: Scalars['BigInt'];
  deposit?: Maybe<Deposit>;
  operator?: Maybe<Operator>;
  redeemerOutputScript: Scalars['Bytes'];
  requestedFee: Scalars['BigInt'];
  utxoValue: Scalars['BigInt'];
  utxoOutpoint: Scalars['Bytes'];
  redeemer: Scalars['Bytes'];
  sigHashDigest: Scalars['Bytes'];
};

export type RedemptionFeeIncreasedEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  submitter?: Maybe<Scalars['Bytes']>;
  submitter_not?: Maybe<Scalars['Bytes']>;
  submitter_in?: Maybe<Array<Scalars['Bytes']>>;
  submitter_not_in?: Maybe<Array<Scalars['Bytes']>>;
  submitter_contains?: Maybe<Scalars['Bytes']>;
  submitter_not_contains?: Maybe<Scalars['Bytes']>;
  transactionHash?: Maybe<Scalars['String']>;
  transactionHash_not?: Maybe<Scalars['String']>;
  transactionHash_gt?: Maybe<Scalars['String']>;
  transactionHash_lt?: Maybe<Scalars['String']>;
  transactionHash_gte?: Maybe<Scalars['String']>;
  transactionHash_lte?: Maybe<Scalars['String']>;
  transactionHash_in?: Maybe<Array<Scalars['String']>>;
  transactionHash_not_in?: Maybe<Array<Scalars['String']>>;
  transactionHash_contains?: Maybe<Scalars['String']>;
  transactionHash_not_contains?: Maybe<Scalars['String']>;
  transactionHash_starts_with?: Maybe<Scalars['String']>;
  transactionHash_not_starts_with?: Maybe<Scalars['String']>;
  transactionHash_ends_with?: Maybe<Scalars['String']>;
  transactionHash_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  deposit?: Maybe<Scalars['String']>;
  deposit_not?: Maybe<Scalars['String']>;
  deposit_gt?: Maybe<Scalars['String']>;
  deposit_lt?: Maybe<Scalars['String']>;
  deposit_gte?: Maybe<Scalars['String']>;
  deposit_lte?: Maybe<Scalars['String']>;
  deposit_in?: Maybe<Array<Scalars['String']>>;
  deposit_not_in?: Maybe<Array<Scalars['String']>>;
  deposit_contains?: Maybe<Scalars['String']>;
  deposit_not_contains?: Maybe<Scalars['String']>;
  deposit_starts_with?: Maybe<Scalars['String']>;
  deposit_not_starts_with?: Maybe<Scalars['String']>;
  deposit_ends_with?: Maybe<Scalars['String']>;
  deposit_not_ends_with?: Maybe<Scalars['String']>;
  operator?: Maybe<Scalars['String']>;
  operator_not?: Maybe<Scalars['String']>;
  operator_gt?: Maybe<Scalars['String']>;
  operator_lt?: Maybe<Scalars['String']>;
  operator_gte?: Maybe<Scalars['String']>;
  operator_lte?: Maybe<Scalars['String']>;
  operator_in?: Maybe<Array<Scalars['String']>>;
  operator_not_in?: Maybe<Array<Scalars['String']>>;
  operator_contains?: Maybe<Scalars['String']>;
  operator_not_contains?: Maybe<Scalars['String']>;
  operator_starts_with?: Maybe<Scalars['String']>;
  operator_not_starts_with?: Maybe<Scalars['String']>;
  operator_ends_with?: Maybe<Scalars['String']>;
  operator_not_ends_with?: Maybe<Scalars['String']>;
  redeemerOutputScript?: Maybe<Scalars['Bytes']>;
  redeemerOutputScript_not?: Maybe<Scalars['Bytes']>;
  redeemerOutputScript_in?: Maybe<Array<Scalars['Bytes']>>;
  redeemerOutputScript_not_in?: Maybe<Array<Scalars['Bytes']>>;
  redeemerOutputScript_contains?: Maybe<Scalars['Bytes']>;
  redeemerOutputScript_not_contains?: Maybe<Scalars['Bytes']>;
  requestedFee?: Maybe<Scalars['BigInt']>;
  requestedFee_not?: Maybe<Scalars['BigInt']>;
  requestedFee_gt?: Maybe<Scalars['BigInt']>;
  requestedFee_lt?: Maybe<Scalars['BigInt']>;
  requestedFee_gte?: Maybe<Scalars['BigInt']>;
  requestedFee_lte?: Maybe<Scalars['BigInt']>;
  requestedFee_in?: Maybe<Array<Scalars['BigInt']>>;
  requestedFee_not_in?: Maybe<Array<Scalars['BigInt']>>;
  utxoValue?: Maybe<Scalars['BigInt']>;
  utxoValue_not?: Maybe<Scalars['BigInt']>;
  utxoValue_gt?: Maybe<Scalars['BigInt']>;
  utxoValue_lt?: Maybe<Scalars['BigInt']>;
  utxoValue_gte?: Maybe<Scalars['BigInt']>;
  utxoValue_lte?: Maybe<Scalars['BigInt']>;
  utxoValue_in?: Maybe<Array<Scalars['BigInt']>>;
  utxoValue_not_in?: Maybe<Array<Scalars['BigInt']>>;
  utxoOutpoint?: Maybe<Scalars['Bytes']>;
  utxoOutpoint_not?: Maybe<Scalars['Bytes']>;
  utxoOutpoint_in?: Maybe<Array<Scalars['Bytes']>>;
  utxoOutpoint_not_in?: Maybe<Array<Scalars['Bytes']>>;
  utxoOutpoint_contains?: Maybe<Scalars['Bytes']>;
  utxoOutpoint_not_contains?: Maybe<Scalars['Bytes']>;
  redeemer?: Maybe<Scalars['Bytes']>;
  redeemer_not?: Maybe<Scalars['Bytes']>;
  redeemer_in?: Maybe<Array<Scalars['Bytes']>>;
  redeemer_not_in?: Maybe<Array<Scalars['Bytes']>>;
  redeemer_contains?: Maybe<Scalars['Bytes']>;
  redeemer_not_contains?: Maybe<Scalars['Bytes']>;
  sigHashDigest?: Maybe<Scalars['Bytes']>;
  sigHashDigest_not?: Maybe<Scalars['Bytes']>;
  sigHashDigest_in?: Maybe<Array<Scalars['Bytes']>>;
  sigHashDigest_not_in?: Maybe<Array<Scalars['Bytes']>>;
  sigHashDigest_contains?: Maybe<Scalars['Bytes']>;
  sigHashDigest_not_contains?: Maybe<Scalars['Bytes']>;
};

export enum RedemptionFeeIncreasedEvent_OrderBy {
  Id = 'id',
  Submitter = 'submitter',
  TransactionHash = 'transactionHash',
  Timestamp = 'timestamp',
  Deposit = 'deposit',
  Operator = 'operator',
  RedeemerOutputScript = 'redeemerOutputScript',
  RequestedFee = 'requestedFee',
  UtxoValue = 'utxoValue',
  UtxoOutpoint = 'utxoOutpoint',
  Redeemer = 'redeemer',
  SigHashDigest = 'sigHashDigest'
}

export type RedemptionRequestedEvent = Event & {
  __typename?: 'RedemptionRequestedEvent';
  id: Scalars['ID'];
  submitter: Scalars['Bytes'];
  transactionHash: Scalars['String'];
  timestamp: Scalars['BigInt'];
  deposit?: Maybe<Deposit>;
  operator?: Maybe<Operator>;
  redeemerOutputScript: Scalars['Bytes'];
  requestedFee: Scalars['BigInt'];
  utxoValue: Scalars['BigInt'];
  utxoOutpoint: Scalars['Bytes'];
  redeemer: Scalars['Bytes'];
  sigHashDigest: Scalars['Bytes'];
};

export type RedemptionRequestedEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  submitter?: Maybe<Scalars['Bytes']>;
  submitter_not?: Maybe<Scalars['Bytes']>;
  submitter_in?: Maybe<Array<Scalars['Bytes']>>;
  submitter_not_in?: Maybe<Array<Scalars['Bytes']>>;
  submitter_contains?: Maybe<Scalars['Bytes']>;
  submitter_not_contains?: Maybe<Scalars['Bytes']>;
  transactionHash?: Maybe<Scalars['String']>;
  transactionHash_not?: Maybe<Scalars['String']>;
  transactionHash_gt?: Maybe<Scalars['String']>;
  transactionHash_lt?: Maybe<Scalars['String']>;
  transactionHash_gte?: Maybe<Scalars['String']>;
  transactionHash_lte?: Maybe<Scalars['String']>;
  transactionHash_in?: Maybe<Array<Scalars['String']>>;
  transactionHash_not_in?: Maybe<Array<Scalars['String']>>;
  transactionHash_contains?: Maybe<Scalars['String']>;
  transactionHash_not_contains?: Maybe<Scalars['String']>;
  transactionHash_starts_with?: Maybe<Scalars['String']>;
  transactionHash_not_starts_with?: Maybe<Scalars['String']>;
  transactionHash_ends_with?: Maybe<Scalars['String']>;
  transactionHash_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  deposit?: Maybe<Scalars['String']>;
  deposit_not?: Maybe<Scalars['String']>;
  deposit_gt?: Maybe<Scalars['String']>;
  deposit_lt?: Maybe<Scalars['String']>;
  deposit_gte?: Maybe<Scalars['String']>;
  deposit_lte?: Maybe<Scalars['String']>;
  deposit_in?: Maybe<Array<Scalars['String']>>;
  deposit_not_in?: Maybe<Array<Scalars['String']>>;
  deposit_contains?: Maybe<Scalars['String']>;
  deposit_not_contains?: Maybe<Scalars['String']>;
  deposit_starts_with?: Maybe<Scalars['String']>;
  deposit_not_starts_with?: Maybe<Scalars['String']>;
  deposit_ends_with?: Maybe<Scalars['String']>;
  deposit_not_ends_with?: Maybe<Scalars['String']>;
  operator?: Maybe<Scalars['String']>;
  operator_not?: Maybe<Scalars['String']>;
  operator_gt?: Maybe<Scalars['String']>;
  operator_lt?: Maybe<Scalars['String']>;
  operator_gte?: Maybe<Scalars['String']>;
  operator_lte?: Maybe<Scalars['String']>;
  operator_in?: Maybe<Array<Scalars['String']>>;
  operator_not_in?: Maybe<Array<Scalars['String']>>;
  operator_contains?: Maybe<Scalars['String']>;
  operator_not_contains?: Maybe<Scalars['String']>;
  operator_starts_with?: Maybe<Scalars['String']>;
  operator_not_starts_with?: Maybe<Scalars['String']>;
  operator_ends_with?: Maybe<Scalars['String']>;
  operator_not_ends_with?: Maybe<Scalars['String']>;
  redeemerOutputScript?: Maybe<Scalars['Bytes']>;
  redeemerOutputScript_not?: Maybe<Scalars['Bytes']>;
  redeemerOutputScript_in?: Maybe<Array<Scalars['Bytes']>>;
  redeemerOutputScript_not_in?: Maybe<Array<Scalars['Bytes']>>;
  redeemerOutputScript_contains?: Maybe<Scalars['Bytes']>;
  redeemerOutputScript_not_contains?: Maybe<Scalars['Bytes']>;
  requestedFee?: Maybe<Scalars['BigInt']>;
  requestedFee_not?: Maybe<Scalars['BigInt']>;
  requestedFee_gt?: Maybe<Scalars['BigInt']>;
  requestedFee_lt?: Maybe<Scalars['BigInt']>;
  requestedFee_gte?: Maybe<Scalars['BigInt']>;
  requestedFee_lte?: Maybe<Scalars['BigInt']>;
  requestedFee_in?: Maybe<Array<Scalars['BigInt']>>;
  requestedFee_not_in?: Maybe<Array<Scalars['BigInt']>>;
  utxoValue?: Maybe<Scalars['BigInt']>;
  utxoValue_not?: Maybe<Scalars['BigInt']>;
  utxoValue_gt?: Maybe<Scalars['BigInt']>;
  utxoValue_lt?: Maybe<Scalars['BigInt']>;
  utxoValue_gte?: Maybe<Scalars['BigInt']>;
  utxoValue_lte?: Maybe<Scalars['BigInt']>;
  utxoValue_in?: Maybe<Array<Scalars['BigInt']>>;
  utxoValue_not_in?: Maybe<Array<Scalars['BigInt']>>;
  utxoOutpoint?: Maybe<Scalars['Bytes']>;
  utxoOutpoint_not?: Maybe<Scalars['Bytes']>;
  utxoOutpoint_in?: Maybe<Array<Scalars['Bytes']>>;
  utxoOutpoint_not_in?: Maybe<Array<Scalars['Bytes']>>;
  utxoOutpoint_contains?: Maybe<Scalars['Bytes']>;
  utxoOutpoint_not_contains?: Maybe<Scalars['Bytes']>;
  redeemer?: Maybe<Scalars['Bytes']>;
  redeemer_not?: Maybe<Scalars['Bytes']>;
  redeemer_in?: Maybe<Array<Scalars['Bytes']>>;
  redeemer_not_in?: Maybe<Array<Scalars['Bytes']>>;
  redeemer_contains?: Maybe<Scalars['Bytes']>;
  redeemer_not_contains?: Maybe<Scalars['Bytes']>;
  sigHashDigest?: Maybe<Scalars['Bytes']>;
  sigHashDigest_not?: Maybe<Scalars['Bytes']>;
  sigHashDigest_in?: Maybe<Array<Scalars['Bytes']>>;
  sigHashDigest_not_in?: Maybe<Array<Scalars['Bytes']>>;
  sigHashDigest_contains?: Maybe<Scalars['Bytes']>;
  sigHashDigest_not_contains?: Maybe<Scalars['Bytes']>;
};

export enum RedemptionRequestedEvent_OrderBy {
  Id = 'id',
  Submitter = 'submitter',
  TransactionHash = 'transactionHash',
  Timestamp = 'timestamp',
  Deposit = 'deposit',
  Operator = 'operator',
  RedeemerOutputScript = 'redeemerOutputScript',
  RequestedFee = 'requestedFee',
  UtxoValue = 'utxoValue',
  UtxoOutpoint = 'utxoOutpoint',
  Redeemer = 'redeemer',
  SigHashDigest = 'sigHashDigest'
}

export type RegisteredPubKeyEvent = Event & {
  __typename?: 'RegisteredPubKeyEvent';
  id: Scalars['ID'];
  submitter: Scalars['Bytes'];
  transactionHash: Scalars['String'];
  timestamp: Scalars['BigInt'];
  deposit?: Maybe<Deposit>;
  operator?: Maybe<Operator>;
  signingGroupPubkeyX: Scalars['Bytes'];
  signingGroupPubkeyY: Scalars['Bytes'];
};

export type RegisteredPubKeyEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  submitter?: Maybe<Scalars['Bytes']>;
  submitter_not?: Maybe<Scalars['Bytes']>;
  submitter_in?: Maybe<Array<Scalars['Bytes']>>;
  submitter_not_in?: Maybe<Array<Scalars['Bytes']>>;
  submitter_contains?: Maybe<Scalars['Bytes']>;
  submitter_not_contains?: Maybe<Scalars['Bytes']>;
  transactionHash?: Maybe<Scalars['String']>;
  transactionHash_not?: Maybe<Scalars['String']>;
  transactionHash_gt?: Maybe<Scalars['String']>;
  transactionHash_lt?: Maybe<Scalars['String']>;
  transactionHash_gte?: Maybe<Scalars['String']>;
  transactionHash_lte?: Maybe<Scalars['String']>;
  transactionHash_in?: Maybe<Array<Scalars['String']>>;
  transactionHash_not_in?: Maybe<Array<Scalars['String']>>;
  transactionHash_contains?: Maybe<Scalars['String']>;
  transactionHash_not_contains?: Maybe<Scalars['String']>;
  transactionHash_starts_with?: Maybe<Scalars['String']>;
  transactionHash_not_starts_with?: Maybe<Scalars['String']>;
  transactionHash_ends_with?: Maybe<Scalars['String']>;
  transactionHash_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  deposit?: Maybe<Scalars['String']>;
  deposit_not?: Maybe<Scalars['String']>;
  deposit_gt?: Maybe<Scalars['String']>;
  deposit_lt?: Maybe<Scalars['String']>;
  deposit_gte?: Maybe<Scalars['String']>;
  deposit_lte?: Maybe<Scalars['String']>;
  deposit_in?: Maybe<Array<Scalars['String']>>;
  deposit_not_in?: Maybe<Array<Scalars['String']>>;
  deposit_contains?: Maybe<Scalars['String']>;
  deposit_not_contains?: Maybe<Scalars['String']>;
  deposit_starts_with?: Maybe<Scalars['String']>;
  deposit_not_starts_with?: Maybe<Scalars['String']>;
  deposit_ends_with?: Maybe<Scalars['String']>;
  deposit_not_ends_with?: Maybe<Scalars['String']>;
  operator?: Maybe<Scalars['String']>;
  operator_not?: Maybe<Scalars['String']>;
  operator_gt?: Maybe<Scalars['String']>;
  operator_lt?: Maybe<Scalars['String']>;
  operator_gte?: Maybe<Scalars['String']>;
  operator_lte?: Maybe<Scalars['String']>;
  operator_in?: Maybe<Array<Scalars['String']>>;
  operator_not_in?: Maybe<Array<Scalars['String']>>;
  operator_contains?: Maybe<Scalars['String']>;
  operator_not_contains?: Maybe<Scalars['String']>;
  operator_starts_with?: Maybe<Scalars['String']>;
  operator_not_starts_with?: Maybe<Scalars['String']>;
  operator_ends_with?: Maybe<Scalars['String']>;
  operator_not_ends_with?: Maybe<Scalars['String']>;
  signingGroupPubkeyX?: Maybe<Scalars['Bytes']>;
  signingGroupPubkeyX_not?: Maybe<Scalars['Bytes']>;
  signingGroupPubkeyX_in?: Maybe<Array<Scalars['Bytes']>>;
  signingGroupPubkeyX_not_in?: Maybe<Array<Scalars['Bytes']>>;
  signingGroupPubkeyX_contains?: Maybe<Scalars['Bytes']>;
  signingGroupPubkeyX_not_contains?: Maybe<Scalars['Bytes']>;
  signingGroupPubkeyY?: Maybe<Scalars['Bytes']>;
  signingGroupPubkeyY_not?: Maybe<Scalars['Bytes']>;
  signingGroupPubkeyY_in?: Maybe<Array<Scalars['Bytes']>>;
  signingGroupPubkeyY_not_in?: Maybe<Array<Scalars['Bytes']>>;
  signingGroupPubkeyY_contains?: Maybe<Scalars['Bytes']>;
  signingGroupPubkeyY_not_contains?: Maybe<Scalars['Bytes']>;
};

export enum RegisteredPubKeyEvent_OrderBy {
  Id = 'id',
  Submitter = 'submitter',
  TransactionHash = 'transactionHash',
  Timestamp = 'timestamp',
  Deposit = 'deposit',
  Operator = 'operator',
  SigningGroupPubkeyX = 'signingGroupPubkeyX',
  SigningGroupPubkeyY = 'signingGroupPubkeyY'
}

export type RelayEntry = {
  __typename?: 'RelayEntry';
  id: Scalars['ID'];
  requestedAt: Scalars['BigInt'];
  requestedBy: Scalars['Bytes'];
  group: RandomBeaconGroup;
  requestId?: Maybe<Scalars['BigInt']>;
  value?: Maybe<Scalars['BigInt']>;
  generatedAt?: Maybe<Scalars['BigInt']>;
  rewardPerMember?: Maybe<Scalars['BigInt']>;
};

export type RelayEntry_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  requestedAt?: Maybe<Scalars['BigInt']>;
  requestedAt_not?: Maybe<Scalars['BigInt']>;
  requestedAt_gt?: Maybe<Scalars['BigInt']>;
  requestedAt_lt?: Maybe<Scalars['BigInt']>;
  requestedAt_gte?: Maybe<Scalars['BigInt']>;
  requestedAt_lte?: Maybe<Scalars['BigInt']>;
  requestedAt_in?: Maybe<Array<Scalars['BigInt']>>;
  requestedAt_not_in?: Maybe<Array<Scalars['BigInt']>>;
  requestedBy?: Maybe<Scalars['Bytes']>;
  requestedBy_not?: Maybe<Scalars['Bytes']>;
  requestedBy_in?: Maybe<Array<Scalars['Bytes']>>;
  requestedBy_not_in?: Maybe<Array<Scalars['Bytes']>>;
  requestedBy_contains?: Maybe<Scalars['Bytes']>;
  requestedBy_not_contains?: Maybe<Scalars['Bytes']>;
  group?: Maybe<Scalars['String']>;
  group_not?: Maybe<Scalars['String']>;
  group_gt?: Maybe<Scalars['String']>;
  group_lt?: Maybe<Scalars['String']>;
  group_gte?: Maybe<Scalars['String']>;
  group_lte?: Maybe<Scalars['String']>;
  group_in?: Maybe<Array<Scalars['String']>>;
  group_not_in?: Maybe<Array<Scalars['String']>>;
  group_contains?: Maybe<Scalars['String']>;
  group_not_contains?: Maybe<Scalars['String']>;
  group_starts_with?: Maybe<Scalars['String']>;
  group_not_starts_with?: Maybe<Scalars['String']>;
  group_ends_with?: Maybe<Scalars['String']>;
  group_not_ends_with?: Maybe<Scalars['String']>;
  requestId?: Maybe<Scalars['BigInt']>;
  requestId_not?: Maybe<Scalars['BigInt']>;
  requestId_gt?: Maybe<Scalars['BigInt']>;
  requestId_lt?: Maybe<Scalars['BigInt']>;
  requestId_gte?: Maybe<Scalars['BigInt']>;
  requestId_lte?: Maybe<Scalars['BigInt']>;
  requestId_in?: Maybe<Array<Scalars['BigInt']>>;
  requestId_not_in?: Maybe<Array<Scalars['BigInt']>>;
  value?: Maybe<Scalars['BigInt']>;
  value_not?: Maybe<Scalars['BigInt']>;
  value_gt?: Maybe<Scalars['BigInt']>;
  value_lt?: Maybe<Scalars['BigInt']>;
  value_gte?: Maybe<Scalars['BigInt']>;
  value_lte?: Maybe<Scalars['BigInt']>;
  value_in?: Maybe<Array<Scalars['BigInt']>>;
  value_not_in?: Maybe<Array<Scalars['BigInt']>>;
  generatedAt?: Maybe<Scalars['BigInt']>;
  generatedAt_not?: Maybe<Scalars['BigInt']>;
  generatedAt_gt?: Maybe<Scalars['BigInt']>;
  generatedAt_lt?: Maybe<Scalars['BigInt']>;
  generatedAt_gte?: Maybe<Scalars['BigInt']>;
  generatedAt_lte?: Maybe<Scalars['BigInt']>;
  generatedAt_in?: Maybe<Array<Scalars['BigInt']>>;
  generatedAt_not_in?: Maybe<Array<Scalars['BigInt']>>;
  rewardPerMember?: Maybe<Scalars['BigInt']>;
  rewardPerMember_not?: Maybe<Scalars['BigInt']>;
  rewardPerMember_gt?: Maybe<Scalars['BigInt']>;
  rewardPerMember_lt?: Maybe<Scalars['BigInt']>;
  rewardPerMember_gte?: Maybe<Scalars['BigInt']>;
  rewardPerMember_lte?: Maybe<Scalars['BigInt']>;
  rewardPerMember_in?: Maybe<Array<Scalars['BigInt']>>;
  rewardPerMember_not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export enum RelayEntry_OrderBy {
  Id = 'id',
  RequestedAt = 'requestedAt',
  RequestedBy = 'requestedBy',
  Group = 'group',
  RequestId = 'requestId',
  Value = 'value',
  GeneratedAt = 'generatedAt',
  RewardPerMember = 'rewardPerMember'
}

export type SetupFailedEvent = Event & {
  __typename?: 'SetupFailedEvent';
  id: Scalars['ID'];
  submitter: Scalars['Bytes'];
  transactionHash: Scalars['String'];
  timestamp: Scalars['BigInt'];
  deposit?: Maybe<Deposit>;
  operator?: Maybe<Operator>;
  /** The reason for the failure, based on which contract call caused the failure state to be entered. */
  reason?: Maybe<SetupFailedReason>;
};

export type SetupFailedEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  submitter?: Maybe<Scalars['Bytes']>;
  submitter_not?: Maybe<Scalars['Bytes']>;
  submitter_in?: Maybe<Array<Scalars['Bytes']>>;
  submitter_not_in?: Maybe<Array<Scalars['Bytes']>>;
  submitter_contains?: Maybe<Scalars['Bytes']>;
  submitter_not_contains?: Maybe<Scalars['Bytes']>;
  transactionHash?: Maybe<Scalars['String']>;
  transactionHash_not?: Maybe<Scalars['String']>;
  transactionHash_gt?: Maybe<Scalars['String']>;
  transactionHash_lt?: Maybe<Scalars['String']>;
  transactionHash_gte?: Maybe<Scalars['String']>;
  transactionHash_lte?: Maybe<Scalars['String']>;
  transactionHash_in?: Maybe<Array<Scalars['String']>>;
  transactionHash_not_in?: Maybe<Array<Scalars['String']>>;
  transactionHash_contains?: Maybe<Scalars['String']>;
  transactionHash_not_contains?: Maybe<Scalars['String']>;
  transactionHash_starts_with?: Maybe<Scalars['String']>;
  transactionHash_not_starts_with?: Maybe<Scalars['String']>;
  transactionHash_ends_with?: Maybe<Scalars['String']>;
  transactionHash_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  deposit?: Maybe<Scalars['String']>;
  deposit_not?: Maybe<Scalars['String']>;
  deposit_gt?: Maybe<Scalars['String']>;
  deposit_lt?: Maybe<Scalars['String']>;
  deposit_gte?: Maybe<Scalars['String']>;
  deposit_lte?: Maybe<Scalars['String']>;
  deposit_in?: Maybe<Array<Scalars['String']>>;
  deposit_not_in?: Maybe<Array<Scalars['String']>>;
  deposit_contains?: Maybe<Scalars['String']>;
  deposit_not_contains?: Maybe<Scalars['String']>;
  deposit_starts_with?: Maybe<Scalars['String']>;
  deposit_not_starts_with?: Maybe<Scalars['String']>;
  deposit_ends_with?: Maybe<Scalars['String']>;
  deposit_not_ends_with?: Maybe<Scalars['String']>;
  operator?: Maybe<Scalars['String']>;
  operator_not?: Maybe<Scalars['String']>;
  operator_gt?: Maybe<Scalars['String']>;
  operator_lt?: Maybe<Scalars['String']>;
  operator_gte?: Maybe<Scalars['String']>;
  operator_lte?: Maybe<Scalars['String']>;
  operator_in?: Maybe<Array<Scalars['String']>>;
  operator_not_in?: Maybe<Array<Scalars['String']>>;
  operator_contains?: Maybe<Scalars['String']>;
  operator_not_contains?: Maybe<Scalars['String']>;
  operator_starts_with?: Maybe<Scalars['String']>;
  operator_not_starts_with?: Maybe<Scalars['String']>;
  operator_ends_with?: Maybe<Scalars['String']>;
  operator_not_ends_with?: Maybe<Scalars['String']>;
  reason?: Maybe<SetupFailedReason>;
  reason_not?: Maybe<SetupFailedReason>;
};

export enum SetupFailedEvent_OrderBy {
  Id = 'id',
  Submitter = 'submitter',
  TransactionHash = 'transactionHash',
  Timestamp = 'timestamp',
  Deposit = 'deposit',
  Operator = 'operator',
  Reason = 'reason'
}

export enum SetupFailedReason {
  SignerSetupFailed = 'SIGNER_SETUP_FAILED',
  SignerSetupFailedDepositor = 'SIGNER_SETUP_FAILED_DEPOSITOR',
  FundingTimeout = 'FUNDING_TIMEOUT',
  FundingEcdsaFraud = 'FUNDING_ECDSA_FRAUD'
}

export type StakeOwnershipTransferredEvent = Event & {
  __typename?: 'StakeOwnershipTransferredEvent';
  id: Scalars['ID'];
  submitter: Scalars['Bytes'];
  transactionHash: Scalars['String'];
  timestamp: Scalars['BigInt'];
  deposit?: Maybe<Deposit>;
  operator?: Maybe<Operator>;
};

export type StakeOwnershipTransferredEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  submitter?: Maybe<Scalars['Bytes']>;
  submitter_not?: Maybe<Scalars['Bytes']>;
  submitter_in?: Maybe<Array<Scalars['Bytes']>>;
  submitter_not_in?: Maybe<Array<Scalars['Bytes']>>;
  submitter_contains?: Maybe<Scalars['Bytes']>;
  submitter_not_contains?: Maybe<Scalars['Bytes']>;
  transactionHash?: Maybe<Scalars['String']>;
  transactionHash_not?: Maybe<Scalars['String']>;
  transactionHash_gt?: Maybe<Scalars['String']>;
  transactionHash_lt?: Maybe<Scalars['String']>;
  transactionHash_gte?: Maybe<Scalars['String']>;
  transactionHash_lte?: Maybe<Scalars['String']>;
  transactionHash_in?: Maybe<Array<Scalars['String']>>;
  transactionHash_not_in?: Maybe<Array<Scalars['String']>>;
  transactionHash_contains?: Maybe<Scalars['String']>;
  transactionHash_not_contains?: Maybe<Scalars['String']>;
  transactionHash_starts_with?: Maybe<Scalars['String']>;
  transactionHash_not_starts_with?: Maybe<Scalars['String']>;
  transactionHash_ends_with?: Maybe<Scalars['String']>;
  transactionHash_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  deposit?: Maybe<Scalars['String']>;
  deposit_not?: Maybe<Scalars['String']>;
  deposit_gt?: Maybe<Scalars['String']>;
  deposit_lt?: Maybe<Scalars['String']>;
  deposit_gte?: Maybe<Scalars['String']>;
  deposit_lte?: Maybe<Scalars['String']>;
  deposit_in?: Maybe<Array<Scalars['String']>>;
  deposit_not_in?: Maybe<Array<Scalars['String']>>;
  deposit_contains?: Maybe<Scalars['String']>;
  deposit_not_contains?: Maybe<Scalars['String']>;
  deposit_starts_with?: Maybe<Scalars['String']>;
  deposit_not_starts_with?: Maybe<Scalars['String']>;
  deposit_ends_with?: Maybe<Scalars['String']>;
  deposit_not_ends_with?: Maybe<Scalars['String']>;
  operator?: Maybe<Scalars['String']>;
  operator_not?: Maybe<Scalars['String']>;
  operator_gt?: Maybe<Scalars['String']>;
  operator_lt?: Maybe<Scalars['String']>;
  operator_gte?: Maybe<Scalars['String']>;
  operator_lte?: Maybe<Scalars['String']>;
  operator_in?: Maybe<Array<Scalars['String']>>;
  operator_not_in?: Maybe<Array<Scalars['String']>>;
  operator_contains?: Maybe<Scalars['String']>;
  operator_not_contains?: Maybe<Scalars['String']>;
  operator_starts_with?: Maybe<Scalars['String']>;
  operator_not_starts_with?: Maybe<Scalars['String']>;
  operator_ends_with?: Maybe<Scalars['String']>;
  operator_not_ends_with?: Maybe<Scalars['String']>;
};

export enum StakeOwnershipTransferredEvent_OrderBy {
  Id = 'id',
  Submitter = 'submitter',
  TransactionHash = 'transactionHash',
  Timestamp = 'timestamp',
  Deposit = 'deposit',
  Operator = 'operator'
}

/**
 * A one-month interval in the stakedrop reward program.
 * 
 * The intervals of the Beacon and ECDSA reward programs are not the same (there is about a 14 day difference).
 * However, the number of intervals are the same, and the programs are otherwise aligned conceptually, so there
 * is only one entity representing the intervals for both reward programs.
 */
export type StakedropInterval = {
  __typename?: 'StakedropInterval';
  id: Scalars['ID'];
  /** Nunber of the interval, with the first interval being 1. */
  number: Scalars['Int'];
  ecdsaIntervalStart: Scalars['BigInt'];
  ecdsaIntervalEnd: Scalars['BigInt'];
  beaconIntervalStart: Scalars['BigInt'];
  beaconIntervalEnd: Scalars['BigInt'];
  keepCount: Scalars['Int'];
  beaconGroupCount: Scalars['Int'];
  allocationBeacon?: Maybe<Scalars['BigInt']>;
  allocationECDSA?: Maybe<Scalars['BigInt']>;
  /**
   * Keeps that fall into this interval, and are counted towards the allocated rewards. This includes terminated
   * keeps which are non-the-less not eligable for an reward.
   */
  keeps?: Maybe<Array<BondedEcdsaKeep>>;
};


/**
 * A one-month interval in the stakedrop reward program.
 * 
 * The intervals of the Beacon and ECDSA reward programs are not the same (there is about a 14 day difference).
 * However, the number of intervals are the same, and the programs are otherwise aligned conceptually, so there
 * is only one entity representing the intervals for both reward programs.
 */
export type StakedropIntervalKeepsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<BondedEcdsaKeep_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<BondedEcdsaKeep_Filter>;
};

export type StakedropInterval_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  number?: Maybe<Scalars['Int']>;
  number_not?: Maybe<Scalars['Int']>;
  number_gt?: Maybe<Scalars['Int']>;
  number_lt?: Maybe<Scalars['Int']>;
  number_gte?: Maybe<Scalars['Int']>;
  number_lte?: Maybe<Scalars['Int']>;
  number_in?: Maybe<Array<Scalars['Int']>>;
  number_not_in?: Maybe<Array<Scalars['Int']>>;
  ecdsaIntervalStart?: Maybe<Scalars['BigInt']>;
  ecdsaIntervalStart_not?: Maybe<Scalars['BigInt']>;
  ecdsaIntervalStart_gt?: Maybe<Scalars['BigInt']>;
  ecdsaIntervalStart_lt?: Maybe<Scalars['BigInt']>;
  ecdsaIntervalStart_gte?: Maybe<Scalars['BigInt']>;
  ecdsaIntervalStart_lte?: Maybe<Scalars['BigInt']>;
  ecdsaIntervalStart_in?: Maybe<Array<Scalars['BigInt']>>;
  ecdsaIntervalStart_not_in?: Maybe<Array<Scalars['BigInt']>>;
  ecdsaIntervalEnd?: Maybe<Scalars['BigInt']>;
  ecdsaIntervalEnd_not?: Maybe<Scalars['BigInt']>;
  ecdsaIntervalEnd_gt?: Maybe<Scalars['BigInt']>;
  ecdsaIntervalEnd_lt?: Maybe<Scalars['BigInt']>;
  ecdsaIntervalEnd_gte?: Maybe<Scalars['BigInt']>;
  ecdsaIntervalEnd_lte?: Maybe<Scalars['BigInt']>;
  ecdsaIntervalEnd_in?: Maybe<Array<Scalars['BigInt']>>;
  ecdsaIntervalEnd_not_in?: Maybe<Array<Scalars['BigInt']>>;
  beaconIntervalStart?: Maybe<Scalars['BigInt']>;
  beaconIntervalStart_not?: Maybe<Scalars['BigInt']>;
  beaconIntervalStart_gt?: Maybe<Scalars['BigInt']>;
  beaconIntervalStart_lt?: Maybe<Scalars['BigInt']>;
  beaconIntervalStart_gte?: Maybe<Scalars['BigInt']>;
  beaconIntervalStart_lte?: Maybe<Scalars['BigInt']>;
  beaconIntervalStart_in?: Maybe<Array<Scalars['BigInt']>>;
  beaconIntervalStart_not_in?: Maybe<Array<Scalars['BigInt']>>;
  beaconIntervalEnd?: Maybe<Scalars['BigInt']>;
  beaconIntervalEnd_not?: Maybe<Scalars['BigInt']>;
  beaconIntervalEnd_gt?: Maybe<Scalars['BigInt']>;
  beaconIntervalEnd_lt?: Maybe<Scalars['BigInt']>;
  beaconIntervalEnd_gte?: Maybe<Scalars['BigInt']>;
  beaconIntervalEnd_lte?: Maybe<Scalars['BigInt']>;
  beaconIntervalEnd_in?: Maybe<Array<Scalars['BigInt']>>;
  beaconIntervalEnd_not_in?: Maybe<Array<Scalars['BigInt']>>;
  keepCount?: Maybe<Scalars['Int']>;
  keepCount_not?: Maybe<Scalars['Int']>;
  keepCount_gt?: Maybe<Scalars['Int']>;
  keepCount_lt?: Maybe<Scalars['Int']>;
  keepCount_gte?: Maybe<Scalars['Int']>;
  keepCount_lte?: Maybe<Scalars['Int']>;
  keepCount_in?: Maybe<Array<Scalars['Int']>>;
  keepCount_not_in?: Maybe<Array<Scalars['Int']>>;
  beaconGroupCount?: Maybe<Scalars['Int']>;
  beaconGroupCount_not?: Maybe<Scalars['Int']>;
  beaconGroupCount_gt?: Maybe<Scalars['Int']>;
  beaconGroupCount_lt?: Maybe<Scalars['Int']>;
  beaconGroupCount_gte?: Maybe<Scalars['Int']>;
  beaconGroupCount_lte?: Maybe<Scalars['Int']>;
  beaconGroupCount_in?: Maybe<Array<Scalars['Int']>>;
  beaconGroupCount_not_in?: Maybe<Array<Scalars['Int']>>;
  allocationBeacon?: Maybe<Scalars['BigInt']>;
  allocationBeacon_not?: Maybe<Scalars['BigInt']>;
  allocationBeacon_gt?: Maybe<Scalars['BigInt']>;
  allocationBeacon_lt?: Maybe<Scalars['BigInt']>;
  allocationBeacon_gte?: Maybe<Scalars['BigInt']>;
  allocationBeacon_lte?: Maybe<Scalars['BigInt']>;
  allocationBeacon_in?: Maybe<Array<Scalars['BigInt']>>;
  allocationBeacon_not_in?: Maybe<Array<Scalars['BigInt']>>;
  allocationECDSA?: Maybe<Scalars['BigInt']>;
  allocationECDSA_not?: Maybe<Scalars['BigInt']>;
  allocationECDSA_gt?: Maybe<Scalars['BigInt']>;
  allocationECDSA_lt?: Maybe<Scalars['BigInt']>;
  allocationECDSA_gte?: Maybe<Scalars['BigInt']>;
  allocationECDSA_lte?: Maybe<Scalars['BigInt']>;
  allocationECDSA_in?: Maybe<Array<Scalars['BigInt']>>;
  allocationECDSA_not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export enum StakedropInterval_OrderBy {
  Id = 'id',
  Number = 'number',
  EcdsaIntervalStart = 'ecdsaIntervalStart',
  EcdsaIntervalEnd = 'ecdsaIntervalEnd',
  BeaconIntervalStart = 'beaconIntervalStart',
  BeaconIntervalEnd = 'beaconIntervalEnd',
  KeepCount = 'keepCount',
  BeaconGroupCount = 'beaconGroupCount',
  AllocationBeacon = 'allocationBeacon',
  AllocationEcdsa = 'allocationECDSA',
  Keeps = 'keeps'
}

export type StakingContractAuthorizedEvent = Event & {
  __typename?: 'StakingContractAuthorizedEvent';
  id: Scalars['ID'];
  submitter: Scalars['Bytes'];
  transactionHash: Scalars['String'];
  timestamp: Scalars['BigInt'];
  deposit?: Maybe<Deposit>;
  operator?: Maybe<Operator>;
  grantManager: Scalars['Bytes'];
  stakingContract: Scalars['Bytes'];
};

export type StakingContractAuthorizedEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  submitter?: Maybe<Scalars['Bytes']>;
  submitter_not?: Maybe<Scalars['Bytes']>;
  submitter_in?: Maybe<Array<Scalars['Bytes']>>;
  submitter_not_in?: Maybe<Array<Scalars['Bytes']>>;
  submitter_contains?: Maybe<Scalars['Bytes']>;
  submitter_not_contains?: Maybe<Scalars['Bytes']>;
  transactionHash?: Maybe<Scalars['String']>;
  transactionHash_not?: Maybe<Scalars['String']>;
  transactionHash_gt?: Maybe<Scalars['String']>;
  transactionHash_lt?: Maybe<Scalars['String']>;
  transactionHash_gte?: Maybe<Scalars['String']>;
  transactionHash_lte?: Maybe<Scalars['String']>;
  transactionHash_in?: Maybe<Array<Scalars['String']>>;
  transactionHash_not_in?: Maybe<Array<Scalars['String']>>;
  transactionHash_contains?: Maybe<Scalars['String']>;
  transactionHash_not_contains?: Maybe<Scalars['String']>;
  transactionHash_starts_with?: Maybe<Scalars['String']>;
  transactionHash_not_starts_with?: Maybe<Scalars['String']>;
  transactionHash_ends_with?: Maybe<Scalars['String']>;
  transactionHash_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  deposit?: Maybe<Scalars['String']>;
  deposit_not?: Maybe<Scalars['String']>;
  deposit_gt?: Maybe<Scalars['String']>;
  deposit_lt?: Maybe<Scalars['String']>;
  deposit_gte?: Maybe<Scalars['String']>;
  deposit_lte?: Maybe<Scalars['String']>;
  deposit_in?: Maybe<Array<Scalars['String']>>;
  deposit_not_in?: Maybe<Array<Scalars['String']>>;
  deposit_contains?: Maybe<Scalars['String']>;
  deposit_not_contains?: Maybe<Scalars['String']>;
  deposit_starts_with?: Maybe<Scalars['String']>;
  deposit_not_starts_with?: Maybe<Scalars['String']>;
  deposit_ends_with?: Maybe<Scalars['String']>;
  deposit_not_ends_with?: Maybe<Scalars['String']>;
  operator?: Maybe<Scalars['String']>;
  operator_not?: Maybe<Scalars['String']>;
  operator_gt?: Maybe<Scalars['String']>;
  operator_lt?: Maybe<Scalars['String']>;
  operator_gte?: Maybe<Scalars['String']>;
  operator_lte?: Maybe<Scalars['String']>;
  operator_in?: Maybe<Array<Scalars['String']>>;
  operator_not_in?: Maybe<Array<Scalars['String']>>;
  operator_contains?: Maybe<Scalars['String']>;
  operator_not_contains?: Maybe<Scalars['String']>;
  operator_starts_with?: Maybe<Scalars['String']>;
  operator_not_starts_with?: Maybe<Scalars['String']>;
  operator_ends_with?: Maybe<Scalars['String']>;
  operator_not_ends_with?: Maybe<Scalars['String']>;
  grantManager?: Maybe<Scalars['Bytes']>;
  grantManager_not?: Maybe<Scalars['Bytes']>;
  grantManager_in?: Maybe<Array<Scalars['Bytes']>>;
  grantManager_not_in?: Maybe<Array<Scalars['Bytes']>>;
  grantManager_contains?: Maybe<Scalars['Bytes']>;
  grantManager_not_contains?: Maybe<Scalars['Bytes']>;
  stakingContract?: Maybe<Scalars['Bytes']>;
  stakingContract_not?: Maybe<Scalars['Bytes']>;
  stakingContract_in?: Maybe<Array<Scalars['Bytes']>>;
  stakingContract_not_in?: Maybe<Array<Scalars['Bytes']>>;
  stakingContract_contains?: Maybe<Scalars['Bytes']>;
  stakingContract_not_contains?: Maybe<Scalars['Bytes']>;
};

export enum StakingContractAuthorizedEvent_OrderBy {
  Id = 'id',
  Submitter = 'submitter',
  TransactionHash = 'transactionHash',
  Timestamp = 'timestamp',
  Deposit = 'deposit',
  Operator = 'operator',
  GrantManager = 'grantManager',
  StakingContract = 'stakingContract'
}

export type StartedLiquidationEvent = Event & {
  __typename?: 'StartedLiquidationEvent';
  id: Scalars['ID'];
  submitter: Scalars['Bytes'];
  transactionHash: Scalars['String'];
  timestamp: Scalars['BigInt'];
  deposit?: Maybe<Deposit>;
  operator?: Maybe<Operator>;
  /** The cause of this deposit going into liquidation */
  cause?: Maybe<LiquidationCause>;
};

export type StartedLiquidationEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  submitter?: Maybe<Scalars['Bytes']>;
  submitter_not?: Maybe<Scalars['Bytes']>;
  submitter_in?: Maybe<Array<Scalars['Bytes']>>;
  submitter_not_in?: Maybe<Array<Scalars['Bytes']>>;
  submitter_contains?: Maybe<Scalars['Bytes']>;
  submitter_not_contains?: Maybe<Scalars['Bytes']>;
  transactionHash?: Maybe<Scalars['String']>;
  transactionHash_not?: Maybe<Scalars['String']>;
  transactionHash_gt?: Maybe<Scalars['String']>;
  transactionHash_lt?: Maybe<Scalars['String']>;
  transactionHash_gte?: Maybe<Scalars['String']>;
  transactionHash_lte?: Maybe<Scalars['String']>;
  transactionHash_in?: Maybe<Array<Scalars['String']>>;
  transactionHash_not_in?: Maybe<Array<Scalars['String']>>;
  transactionHash_contains?: Maybe<Scalars['String']>;
  transactionHash_not_contains?: Maybe<Scalars['String']>;
  transactionHash_starts_with?: Maybe<Scalars['String']>;
  transactionHash_not_starts_with?: Maybe<Scalars['String']>;
  transactionHash_ends_with?: Maybe<Scalars['String']>;
  transactionHash_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  deposit?: Maybe<Scalars['String']>;
  deposit_not?: Maybe<Scalars['String']>;
  deposit_gt?: Maybe<Scalars['String']>;
  deposit_lt?: Maybe<Scalars['String']>;
  deposit_gte?: Maybe<Scalars['String']>;
  deposit_lte?: Maybe<Scalars['String']>;
  deposit_in?: Maybe<Array<Scalars['String']>>;
  deposit_not_in?: Maybe<Array<Scalars['String']>>;
  deposit_contains?: Maybe<Scalars['String']>;
  deposit_not_contains?: Maybe<Scalars['String']>;
  deposit_starts_with?: Maybe<Scalars['String']>;
  deposit_not_starts_with?: Maybe<Scalars['String']>;
  deposit_ends_with?: Maybe<Scalars['String']>;
  deposit_not_ends_with?: Maybe<Scalars['String']>;
  operator?: Maybe<Scalars['String']>;
  operator_not?: Maybe<Scalars['String']>;
  operator_gt?: Maybe<Scalars['String']>;
  operator_lt?: Maybe<Scalars['String']>;
  operator_gte?: Maybe<Scalars['String']>;
  operator_lte?: Maybe<Scalars['String']>;
  operator_in?: Maybe<Array<Scalars['String']>>;
  operator_not_in?: Maybe<Array<Scalars['String']>>;
  operator_contains?: Maybe<Scalars['String']>;
  operator_not_contains?: Maybe<Scalars['String']>;
  operator_starts_with?: Maybe<Scalars['String']>;
  operator_not_starts_with?: Maybe<Scalars['String']>;
  operator_ends_with?: Maybe<Scalars['String']>;
  operator_not_ends_with?: Maybe<Scalars['String']>;
  cause?: Maybe<LiquidationCause>;
  cause_not?: Maybe<LiquidationCause>;
};

export enum StartedLiquidationEvent_OrderBy {
  Id = 'id',
  Submitter = 'submitter',
  TransactionHash = 'transactionHash',
  Timestamp = 'timestamp',
  Deposit = 'deposit',
  Operator = 'operator',
  Cause = 'cause'
}

/** Exposes some global system statistics. Only a single record with the id "current" is available. */
export type StatsRecord = {
  __typename?: 'StatsRecord';
  id: Scalars['ID'];
  /** Total number of deposits ever created, regardless of their current state. */
  depositCount: Scalars['Int'];
  availableToBeBonded: Scalars['BigDecimal'];
  totalBonded: Scalars['BigDecimal'];
  totalBondsSeized: Scalars['BigDecimal'];
  /** The total amount of BTC currently deposited, measured from funding proof received to redemption proof received. */
  btcUnderDeposit: Scalars['BigInt'];
  /** The total amount of BTC currently deposited, measured from funding proof received to redemption requested */
  btcInActiveDeposits: Scalars['BigInt'];
  /** Total number of grants ever created, regardless of their current state. */
  totalGrantCount: Scalars['Int'];
  /** Total amount of grants issued. */
  totalGrantIssued: Scalars['BigInt'];
};

export type StatsRecord_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  depositCount?: Maybe<Scalars['Int']>;
  depositCount_not?: Maybe<Scalars['Int']>;
  depositCount_gt?: Maybe<Scalars['Int']>;
  depositCount_lt?: Maybe<Scalars['Int']>;
  depositCount_gte?: Maybe<Scalars['Int']>;
  depositCount_lte?: Maybe<Scalars['Int']>;
  depositCount_in?: Maybe<Array<Scalars['Int']>>;
  depositCount_not_in?: Maybe<Array<Scalars['Int']>>;
  availableToBeBonded?: Maybe<Scalars['BigDecimal']>;
  availableToBeBonded_not?: Maybe<Scalars['BigDecimal']>;
  availableToBeBonded_gt?: Maybe<Scalars['BigDecimal']>;
  availableToBeBonded_lt?: Maybe<Scalars['BigDecimal']>;
  availableToBeBonded_gte?: Maybe<Scalars['BigDecimal']>;
  availableToBeBonded_lte?: Maybe<Scalars['BigDecimal']>;
  availableToBeBonded_in?: Maybe<Array<Scalars['BigDecimal']>>;
  availableToBeBonded_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  totalBonded?: Maybe<Scalars['BigDecimal']>;
  totalBonded_not?: Maybe<Scalars['BigDecimal']>;
  totalBonded_gt?: Maybe<Scalars['BigDecimal']>;
  totalBonded_lt?: Maybe<Scalars['BigDecimal']>;
  totalBonded_gte?: Maybe<Scalars['BigDecimal']>;
  totalBonded_lte?: Maybe<Scalars['BigDecimal']>;
  totalBonded_in?: Maybe<Array<Scalars['BigDecimal']>>;
  totalBonded_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  totalBondsSeized?: Maybe<Scalars['BigDecimal']>;
  totalBondsSeized_not?: Maybe<Scalars['BigDecimal']>;
  totalBondsSeized_gt?: Maybe<Scalars['BigDecimal']>;
  totalBondsSeized_lt?: Maybe<Scalars['BigDecimal']>;
  totalBondsSeized_gte?: Maybe<Scalars['BigDecimal']>;
  totalBondsSeized_lte?: Maybe<Scalars['BigDecimal']>;
  totalBondsSeized_in?: Maybe<Array<Scalars['BigDecimal']>>;
  totalBondsSeized_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  btcUnderDeposit?: Maybe<Scalars['BigInt']>;
  btcUnderDeposit_not?: Maybe<Scalars['BigInt']>;
  btcUnderDeposit_gt?: Maybe<Scalars['BigInt']>;
  btcUnderDeposit_lt?: Maybe<Scalars['BigInt']>;
  btcUnderDeposit_gte?: Maybe<Scalars['BigInt']>;
  btcUnderDeposit_lte?: Maybe<Scalars['BigInt']>;
  btcUnderDeposit_in?: Maybe<Array<Scalars['BigInt']>>;
  btcUnderDeposit_not_in?: Maybe<Array<Scalars['BigInt']>>;
  btcInActiveDeposits?: Maybe<Scalars['BigInt']>;
  btcInActiveDeposits_not?: Maybe<Scalars['BigInt']>;
  btcInActiveDeposits_gt?: Maybe<Scalars['BigInt']>;
  btcInActiveDeposits_lt?: Maybe<Scalars['BigInt']>;
  btcInActiveDeposits_gte?: Maybe<Scalars['BigInt']>;
  btcInActiveDeposits_lte?: Maybe<Scalars['BigInt']>;
  btcInActiveDeposits_in?: Maybe<Array<Scalars['BigInt']>>;
  btcInActiveDeposits_not_in?: Maybe<Array<Scalars['BigInt']>>;
  totalGrantCount?: Maybe<Scalars['Int']>;
  totalGrantCount_not?: Maybe<Scalars['Int']>;
  totalGrantCount_gt?: Maybe<Scalars['Int']>;
  totalGrantCount_lt?: Maybe<Scalars['Int']>;
  totalGrantCount_gte?: Maybe<Scalars['Int']>;
  totalGrantCount_lte?: Maybe<Scalars['Int']>;
  totalGrantCount_in?: Maybe<Array<Scalars['Int']>>;
  totalGrantCount_not_in?: Maybe<Array<Scalars['Int']>>;
  totalGrantIssued?: Maybe<Scalars['BigInt']>;
  totalGrantIssued_not?: Maybe<Scalars['BigInt']>;
  totalGrantIssued_gt?: Maybe<Scalars['BigInt']>;
  totalGrantIssued_lt?: Maybe<Scalars['BigInt']>;
  totalGrantIssued_gte?: Maybe<Scalars['BigInt']>;
  totalGrantIssued_lte?: Maybe<Scalars['BigInt']>;
  totalGrantIssued_in?: Maybe<Array<Scalars['BigInt']>>;
  totalGrantIssued_not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export enum StatsRecord_OrderBy {
  Id = 'id',
  DepositCount = 'depositCount',
  AvailableToBeBonded = 'availableToBeBonded',
  TotalBonded = 'totalBonded',
  TotalBondsSeized = 'totalBondsSeized',
  BtcUnderDeposit = 'btcUnderDeposit',
  BtcInActiveDeposits = 'btcInActiveDeposits',
  TotalGrantCount = 'totalGrantCount',
  TotalGrantIssued = 'totalGrantIssued'
}

/** Exposes some global system status data. Only a single record with the id "current" is available. */
export type StatusRecord = {
  __typename?: 'StatusRecord';
  id: Scalars['ID'];
  /** The currently requested RandomBeacon relay entry, if any. Only a single request can exist at a time. */
  currentRequestedRelayEntry?: Maybe<RelayEntry>;
  remainingStakedropBeaconAllocation: Scalars['BigInt'];
  remainingStakedropECDSAAllocation: Scalars['BigInt'];
};

export type StatusRecord_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  currentRequestedRelayEntry?: Maybe<Scalars['String']>;
  currentRequestedRelayEntry_not?: Maybe<Scalars['String']>;
  currentRequestedRelayEntry_gt?: Maybe<Scalars['String']>;
  currentRequestedRelayEntry_lt?: Maybe<Scalars['String']>;
  currentRequestedRelayEntry_gte?: Maybe<Scalars['String']>;
  currentRequestedRelayEntry_lte?: Maybe<Scalars['String']>;
  currentRequestedRelayEntry_in?: Maybe<Array<Scalars['String']>>;
  currentRequestedRelayEntry_not_in?: Maybe<Array<Scalars['String']>>;
  currentRequestedRelayEntry_contains?: Maybe<Scalars['String']>;
  currentRequestedRelayEntry_not_contains?: Maybe<Scalars['String']>;
  currentRequestedRelayEntry_starts_with?: Maybe<Scalars['String']>;
  currentRequestedRelayEntry_not_starts_with?: Maybe<Scalars['String']>;
  currentRequestedRelayEntry_ends_with?: Maybe<Scalars['String']>;
  currentRequestedRelayEntry_not_ends_with?: Maybe<Scalars['String']>;
  remainingStakedropBeaconAllocation?: Maybe<Scalars['BigInt']>;
  remainingStakedropBeaconAllocation_not?: Maybe<Scalars['BigInt']>;
  remainingStakedropBeaconAllocation_gt?: Maybe<Scalars['BigInt']>;
  remainingStakedropBeaconAllocation_lt?: Maybe<Scalars['BigInt']>;
  remainingStakedropBeaconAllocation_gte?: Maybe<Scalars['BigInt']>;
  remainingStakedropBeaconAllocation_lte?: Maybe<Scalars['BigInt']>;
  remainingStakedropBeaconAllocation_in?: Maybe<Array<Scalars['BigInt']>>;
  remainingStakedropBeaconAllocation_not_in?: Maybe<Array<Scalars['BigInt']>>;
  remainingStakedropECDSAAllocation?: Maybe<Scalars['BigInt']>;
  remainingStakedropECDSAAllocation_not?: Maybe<Scalars['BigInt']>;
  remainingStakedropECDSAAllocation_gt?: Maybe<Scalars['BigInt']>;
  remainingStakedropECDSAAllocation_lt?: Maybe<Scalars['BigInt']>;
  remainingStakedropECDSAAllocation_gte?: Maybe<Scalars['BigInt']>;
  remainingStakedropECDSAAllocation_lte?: Maybe<Scalars['BigInt']>;
  remainingStakedropECDSAAllocation_in?: Maybe<Array<Scalars['BigInt']>>;
  remainingStakedropECDSAAllocation_not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export enum StatusRecord_OrderBy {
  Id = 'id',
  CurrentRequestedRelayEntry = 'currentRequestedRelayEntry',
  RemainingStakedropBeaconAllocation = 'remainingStakedropBeaconAllocation',
  RemainingStakedropEcdsaAllocation = 'remainingStakedropECDSAAllocation'
}

export type Subscription = {
  __typename?: 'Subscription';
  tbtcdepositToken?: Maybe<TbtcDepositToken>;
  tbtcdepositTokens: Array<TbtcDepositToken>;
  stakedropInterval?: Maybe<StakedropInterval>;
  stakedropIntervals: Array<StakedropInterval>;
  createdEvent?: Maybe<CreatedEvent>;
  createdEvents: Array<CreatedEvent>;
  fundedEvent?: Maybe<FundedEvent>;
  fundedEvents: Array<FundedEvent>;
  registeredPubKeyEvent?: Maybe<RegisteredPubKeyEvent>;
  registeredPubKeyEvents: Array<RegisteredPubKeyEvent>;
  redeemedEvent?: Maybe<RedeemedEvent>;
  redeemedEvents: Array<RedeemedEvent>;
  gotRedemptionSignatureEvent?: Maybe<GotRedemptionSignatureEvent>;
  gotRedemptionSignatureEvents: Array<GotRedemptionSignatureEvent>;
  redemptionRequestedEvent?: Maybe<RedemptionRequestedEvent>;
  redemptionRequestedEvents: Array<RedemptionRequestedEvent>;
  redemptionFeeIncreasedEvent?: Maybe<RedemptionFeeIncreasedEvent>;
  redemptionFeeIncreasedEvents: Array<RedemptionFeeIncreasedEvent>;
  setupFailedEvent?: Maybe<SetupFailedEvent>;
  setupFailedEvents: Array<SetupFailedEvent>;
  liquidatedEvent?: Maybe<LiquidatedEvent>;
  liquidatedEvents: Array<LiquidatedEvent>;
  courtesyCalledEvent?: Maybe<CourtesyCalledEvent>;
  courtesyCalledEvents: Array<CourtesyCalledEvent>;
  exitedCourtesyCallEvent?: Maybe<ExitedCourtesyCallEvent>;
  exitedCourtesyCallEvents: Array<ExitedCourtesyCallEvent>;
  startedLiquidationEvent?: Maybe<StartedLiquidationEvent>;
  startedLiquidationEvents: Array<StartedLiquidationEvent>;
  deposit?: Maybe<Deposit>;
  deposits: Array<Deposit>;
  depositSetup?: Maybe<DepositSetup>;
  depositSetups: Array<DepositSetup>;
  depositLiquidation?: Maybe<DepositLiquidation>;
  depositLiquidations: Array<DepositLiquidation>;
  depositRedemption?: Maybe<DepositRedemption>;
  depositRedemptions: Array<DepositRedemption>;
  user?: Maybe<User>;
  users: Array<User>;
  operator?: Maybe<Operator>;
  operators: Array<Operator>;
  operatorStakedEvent?: Maybe<OperatorStakedEvent>;
  operatorStakedEvents: Array<OperatorStakedEvent>;
  tokensSlashedEvent?: Maybe<TokensSlashedEvent>;
  tokensSlashedEvents: Array<TokensSlashedEvent>;
  tokensSeizedEvent?: Maybe<TokensSeizedEvent>;
  tokensSeizedEvents: Array<TokensSeizedEvent>;
  undelegatedEvent?: Maybe<UndelegatedEvent>;
  undelegatedEvents: Array<UndelegatedEvent>;
  stakeOwnershipTransferredEvent?: Maybe<StakeOwnershipTransferredEvent>;
  stakeOwnershipTransferredEvents: Array<StakeOwnershipTransferredEvent>;
  topUpCompletedEvent?: Maybe<TopUpCompletedEvent>;
  topUpCompletedEvents: Array<TopUpCompletedEvent>;
  topUpInitiatedEvent?: Maybe<TopUpInitiatedEvent>;
  topUpInitiatedEvents: Array<TopUpInitiatedEvent>;
  bondReassignedEvent?: Maybe<BondReassignedEvent>;
  bondReassignedEvents: Array<BondReassignedEvent>;
  bondSeizedEvent?: Maybe<BondSeizedEvent>;
  bondSeizedEvents: Array<BondSeizedEvent>;
  unbondedValueDepositedEvent?: Maybe<UnbondedValueDepositedEvent>;
  unbondedValueDepositedEvents: Array<UnbondedValueDepositedEvent>;
  unbondedValueWithdrawnEvent?: Maybe<UnbondedValueWithdrawnEvent>;
  unbondedValueWithdrawnEvents: Array<UnbondedValueWithdrawnEvent>;
  lock?: Maybe<Lock>;
  locks: Array<Lock>;
  bond?: Maybe<Bond>;
  bonds: Array<Bond>;
  bondedECDSAKeep?: Maybe<BondedEcdsaKeep>;
  bondedECDSAKeeps: Array<BondedEcdsaKeep>;
  governanceLogEntry?: Maybe<GovernanceLogEntry>;
  governanceLogEntries: Array<GovernanceLogEntry>;
  governanceChange?: Maybe<GovernanceChange>;
  governanceChanges: Array<GovernanceChange>;
  governance?: Maybe<Governance>;
  governances: Array<Governance>;
  statsRecord?: Maybe<StatsRecord>;
  statsRecords: Array<StatsRecord>;
  statusRecord?: Maybe<StatusRecord>;
  statusRecords: Array<StatusRecord>;
  randomBeaconGroup?: Maybe<RandomBeaconGroup>;
  randomBeaconGroups: Array<RandomBeaconGroup>;
  relayEntry?: Maybe<RelayEntry>;
  relayEntries: Array<RelayEntry>;
  randomBeaconGroupMembership?: Maybe<RandomBeaconGroupMembership>;
  randomBeaconGroupMemberships: Array<RandomBeaconGroupMembership>;
  priceFeed?: Maybe<PriceFeed>;
  priceFeeds: Array<PriceFeed>;
  grant?: Maybe<Grant>;
  grants: Array<Grant>;
  stakingContractAuthorizedEvent?: Maybe<StakingContractAuthorizedEvent>;
  stakingContractAuthorizedEvents: Array<StakingContractAuthorizedEvent>;
  tokenGrantCreatedEvent?: Maybe<TokenGrantCreatedEvent>;
  tokenGrantCreatedEvents: Array<TokenGrantCreatedEvent>;
  tokenGrantWithdrawnEvent?: Maybe<TokenGrantWithdrawnEvent>;
  tokenGrantWithdrawnEvents: Array<TokenGrantWithdrawnEvent>;
  tokenGrantStakedEvent?: Maybe<TokenGrantStakedEvent>;
  tokenGrantStakedEvents: Array<TokenGrantStakedEvent>;
  tokenGrantRevokedEvent?: Maybe<TokenGrantRevokedEvent>;
  tokenGrantRevokedEvents: Array<TokenGrantRevokedEvent>;
  event?: Maybe<Event>;
  events: Array<Event>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type SubscriptionTbtcdepositTokenArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionTbtcdepositTokensArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TbtcDepositToken_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<TbtcDepositToken_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionStakedropIntervalArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionStakedropIntervalsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<StakedropInterval_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<StakedropInterval_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionCreatedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionCreatedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<CreatedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<CreatedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionFundedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionFundedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<FundedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<FundedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionRegisteredPubKeyEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionRegisteredPubKeyEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<RegisteredPubKeyEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<RegisteredPubKeyEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionRedeemedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionRedeemedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<RedeemedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<RedeemedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionGotRedemptionSignatureEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionGotRedemptionSignatureEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<GotRedemptionSignatureEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<GotRedemptionSignatureEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionRedemptionRequestedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionRedemptionRequestedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<RedemptionRequestedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<RedemptionRequestedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionRedemptionFeeIncreasedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionRedemptionFeeIncreasedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<RedemptionFeeIncreasedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<RedemptionFeeIncreasedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionSetupFailedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionSetupFailedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<SetupFailedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<SetupFailedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionLiquidatedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionLiquidatedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<LiquidatedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<LiquidatedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionCourtesyCalledEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionCourtesyCalledEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<CourtesyCalledEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<CourtesyCalledEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionExitedCourtesyCallEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionExitedCourtesyCallEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ExitedCourtesyCallEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<ExitedCourtesyCallEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionStartedLiquidationEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionStartedLiquidationEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<StartedLiquidationEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<StartedLiquidationEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionDepositArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionDepositsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Deposit_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Deposit_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionDepositSetupArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionDepositSetupsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<DepositSetup_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<DepositSetup_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionDepositLiquidationArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionDepositLiquidationsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<DepositLiquidation_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<DepositLiquidation_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionDepositRedemptionArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionDepositRedemptionsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<DepositRedemption_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<DepositRedemption_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionUserArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionUsersArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<User_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<User_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionOperatorArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionOperatorsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Operator_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Operator_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionOperatorStakedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionOperatorStakedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<OperatorStakedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<OperatorStakedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionTokensSlashedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionTokensSlashedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TokensSlashedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<TokensSlashedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionTokensSeizedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionTokensSeizedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TokensSeizedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<TokensSeizedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionUndelegatedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionUndelegatedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<UndelegatedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<UndelegatedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionStakeOwnershipTransferredEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionStakeOwnershipTransferredEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<StakeOwnershipTransferredEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<StakeOwnershipTransferredEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionTopUpCompletedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionTopUpCompletedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TopUpCompletedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<TopUpCompletedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionTopUpInitiatedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionTopUpInitiatedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TopUpInitiatedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<TopUpInitiatedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionBondReassignedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionBondReassignedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<BondReassignedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<BondReassignedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionBondSeizedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionBondSeizedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<BondSeizedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<BondSeizedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionUnbondedValueDepositedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionUnbondedValueDepositedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<UnbondedValueDepositedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<UnbondedValueDepositedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionUnbondedValueWithdrawnEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionUnbondedValueWithdrawnEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<UnbondedValueWithdrawnEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<UnbondedValueWithdrawnEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionLockArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionLocksArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Lock_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Lock_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionBondArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionBondsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Bond_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Bond_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionBondedEcdsaKeepArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionBondedEcdsaKeepsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<BondedEcdsaKeep_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<BondedEcdsaKeep_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionGovernanceLogEntryArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionGovernanceLogEntriesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<GovernanceLogEntry_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<GovernanceLogEntry_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionGovernanceChangeArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionGovernanceChangesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<GovernanceChange_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<GovernanceChange_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionGovernanceArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionGovernancesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Governance_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Governance_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionStatsRecordArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionStatsRecordsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<StatsRecord_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<StatsRecord_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionStatusRecordArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionStatusRecordsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<StatusRecord_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<StatusRecord_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionRandomBeaconGroupArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionRandomBeaconGroupsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<RandomBeaconGroup_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<RandomBeaconGroup_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionRelayEntryArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionRelayEntriesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<RelayEntry_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<RelayEntry_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionRandomBeaconGroupMembershipArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionRandomBeaconGroupMembershipsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<RandomBeaconGroupMembership_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<RandomBeaconGroupMembership_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionPriceFeedArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionPriceFeedsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PriceFeed_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PriceFeed_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionGrantArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionGrantsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Grant_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Grant_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionStakingContractAuthorizedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionStakingContractAuthorizedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<StakingContractAuthorizedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<StakingContractAuthorizedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionTokenGrantCreatedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionTokenGrantCreatedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TokenGrantCreatedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<TokenGrantCreatedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionTokenGrantWithdrawnEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionTokenGrantWithdrawnEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TokenGrantWithdrawnEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<TokenGrantWithdrawnEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionTokenGrantStakedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionTokenGrantStakedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TokenGrantStakedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<TokenGrantStakedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionTokenGrantRevokedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionTokenGrantRevokedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TokenGrantRevokedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<TokenGrantRevokedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Event_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Event_Filter>;
  block?: Maybe<Block_Height>;
};


export type Subscription_MetaArgs = {
  block?: Maybe<Block_Height>;
};

export type TbtcDepositToken = {
  __typename?: 'TBTCDepositToken';
  id: Scalars['ID'];
  deposit?: Maybe<Deposit>;
  tokenID: Scalars['BigInt'];
  owner: Scalars['Bytes'];
  mintedAt: Scalars['BigInt'];
  minter: Scalars['Bytes'];
};

export type TbtcDepositToken_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  deposit?: Maybe<Scalars['String']>;
  deposit_not?: Maybe<Scalars['String']>;
  deposit_gt?: Maybe<Scalars['String']>;
  deposit_lt?: Maybe<Scalars['String']>;
  deposit_gte?: Maybe<Scalars['String']>;
  deposit_lte?: Maybe<Scalars['String']>;
  deposit_in?: Maybe<Array<Scalars['String']>>;
  deposit_not_in?: Maybe<Array<Scalars['String']>>;
  deposit_contains?: Maybe<Scalars['String']>;
  deposit_not_contains?: Maybe<Scalars['String']>;
  deposit_starts_with?: Maybe<Scalars['String']>;
  deposit_not_starts_with?: Maybe<Scalars['String']>;
  deposit_ends_with?: Maybe<Scalars['String']>;
  deposit_not_ends_with?: Maybe<Scalars['String']>;
  tokenID?: Maybe<Scalars['BigInt']>;
  tokenID_not?: Maybe<Scalars['BigInt']>;
  tokenID_gt?: Maybe<Scalars['BigInt']>;
  tokenID_lt?: Maybe<Scalars['BigInt']>;
  tokenID_gte?: Maybe<Scalars['BigInt']>;
  tokenID_lte?: Maybe<Scalars['BigInt']>;
  tokenID_in?: Maybe<Array<Scalars['BigInt']>>;
  tokenID_not_in?: Maybe<Array<Scalars['BigInt']>>;
  owner?: Maybe<Scalars['Bytes']>;
  owner_not?: Maybe<Scalars['Bytes']>;
  owner_in?: Maybe<Array<Scalars['Bytes']>>;
  owner_not_in?: Maybe<Array<Scalars['Bytes']>>;
  owner_contains?: Maybe<Scalars['Bytes']>;
  owner_not_contains?: Maybe<Scalars['Bytes']>;
  mintedAt?: Maybe<Scalars['BigInt']>;
  mintedAt_not?: Maybe<Scalars['BigInt']>;
  mintedAt_gt?: Maybe<Scalars['BigInt']>;
  mintedAt_lt?: Maybe<Scalars['BigInt']>;
  mintedAt_gte?: Maybe<Scalars['BigInt']>;
  mintedAt_lte?: Maybe<Scalars['BigInt']>;
  mintedAt_in?: Maybe<Array<Scalars['BigInt']>>;
  mintedAt_not_in?: Maybe<Array<Scalars['BigInt']>>;
  minter?: Maybe<Scalars['Bytes']>;
  minter_not?: Maybe<Scalars['Bytes']>;
  minter_in?: Maybe<Array<Scalars['Bytes']>>;
  minter_not_in?: Maybe<Array<Scalars['Bytes']>>;
  minter_contains?: Maybe<Scalars['Bytes']>;
  minter_not_contains?: Maybe<Scalars['Bytes']>;
};

export enum TbtcDepositToken_OrderBy {
  Id = 'id',
  Deposit = 'deposit',
  TokenId = 'tokenID',
  Owner = 'owner',
  MintedAt = 'mintedAt',
  Minter = 'minter'
}

export type TokenGrantCreatedEvent = Event & {
  __typename?: 'TokenGrantCreatedEvent';
  id: Scalars['ID'];
  submitter: Scalars['Bytes'];
  transactionHash: Scalars['String'];
  timestamp: Scalars['BigInt'];
  deposit?: Maybe<Deposit>;
  operator?: Maybe<Operator>;
  grantID: Scalars['BigInt'];
};

export type TokenGrantCreatedEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  submitter?: Maybe<Scalars['Bytes']>;
  submitter_not?: Maybe<Scalars['Bytes']>;
  submitter_in?: Maybe<Array<Scalars['Bytes']>>;
  submitter_not_in?: Maybe<Array<Scalars['Bytes']>>;
  submitter_contains?: Maybe<Scalars['Bytes']>;
  submitter_not_contains?: Maybe<Scalars['Bytes']>;
  transactionHash?: Maybe<Scalars['String']>;
  transactionHash_not?: Maybe<Scalars['String']>;
  transactionHash_gt?: Maybe<Scalars['String']>;
  transactionHash_lt?: Maybe<Scalars['String']>;
  transactionHash_gte?: Maybe<Scalars['String']>;
  transactionHash_lte?: Maybe<Scalars['String']>;
  transactionHash_in?: Maybe<Array<Scalars['String']>>;
  transactionHash_not_in?: Maybe<Array<Scalars['String']>>;
  transactionHash_contains?: Maybe<Scalars['String']>;
  transactionHash_not_contains?: Maybe<Scalars['String']>;
  transactionHash_starts_with?: Maybe<Scalars['String']>;
  transactionHash_not_starts_with?: Maybe<Scalars['String']>;
  transactionHash_ends_with?: Maybe<Scalars['String']>;
  transactionHash_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  deposit?: Maybe<Scalars['String']>;
  deposit_not?: Maybe<Scalars['String']>;
  deposit_gt?: Maybe<Scalars['String']>;
  deposit_lt?: Maybe<Scalars['String']>;
  deposit_gte?: Maybe<Scalars['String']>;
  deposit_lte?: Maybe<Scalars['String']>;
  deposit_in?: Maybe<Array<Scalars['String']>>;
  deposit_not_in?: Maybe<Array<Scalars['String']>>;
  deposit_contains?: Maybe<Scalars['String']>;
  deposit_not_contains?: Maybe<Scalars['String']>;
  deposit_starts_with?: Maybe<Scalars['String']>;
  deposit_not_starts_with?: Maybe<Scalars['String']>;
  deposit_ends_with?: Maybe<Scalars['String']>;
  deposit_not_ends_with?: Maybe<Scalars['String']>;
  operator?: Maybe<Scalars['String']>;
  operator_not?: Maybe<Scalars['String']>;
  operator_gt?: Maybe<Scalars['String']>;
  operator_lt?: Maybe<Scalars['String']>;
  operator_gte?: Maybe<Scalars['String']>;
  operator_lte?: Maybe<Scalars['String']>;
  operator_in?: Maybe<Array<Scalars['String']>>;
  operator_not_in?: Maybe<Array<Scalars['String']>>;
  operator_contains?: Maybe<Scalars['String']>;
  operator_not_contains?: Maybe<Scalars['String']>;
  operator_starts_with?: Maybe<Scalars['String']>;
  operator_not_starts_with?: Maybe<Scalars['String']>;
  operator_ends_with?: Maybe<Scalars['String']>;
  operator_not_ends_with?: Maybe<Scalars['String']>;
  grantID?: Maybe<Scalars['BigInt']>;
  grantID_not?: Maybe<Scalars['BigInt']>;
  grantID_gt?: Maybe<Scalars['BigInt']>;
  grantID_lt?: Maybe<Scalars['BigInt']>;
  grantID_gte?: Maybe<Scalars['BigInt']>;
  grantID_lte?: Maybe<Scalars['BigInt']>;
  grantID_in?: Maybe<Array<Scalars['BigInt']>>;
  grantID_not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export enum TokenGrantCreatedEvent_OrderBy {
  Id = 'id',
  Submitter = 'submitter',
  TransactionHash = 'transactionHash',
  Timestamp = 'timestamp',
  Deposit = 'deposit',
  Operator = 'operator',
  GrantId = 'grantID'
}

export type TokenGrantRevokedEvent = Event & {
  __typename?: 'TokenGrantRevokedEvent';
  id: Scalars['ID'];
  submitter: Scalars['Bytes'];
  transactionHash: Scalars['String'];
  timestamp: Scalars['BigInt'];
  deposit?: Maybe<Deposit>;
  operator?: Maybe<Operator>;
  grantID: Scalars['BigInt'];
};

export type TokenGrantRevokedEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  submitter?: Maybe<Scalars['Bytes']>;
  submitter_not?: Maybe<Scalars['Bytes']>;
  submitter_in?: Maybe<Array<Scalars['Bytes']>>;
  submitter_not_in?: Maybe<Array<Scalars['Bytes']>>;
  submitter_contains?: Maybe<Scalars['Bytes']>;
  submitter_not_contains?: Maybe<Scalars['Bytes']>;
  transactionHash?: Maybe<Scalars['String']>;
  transactionHash_not?: Maybe<Scalars['String']>;
  transactionHash_gt?: Maybe<Scalars['String']>;
  transactionHash_lt?: Maybe<Scalars['String']>;
  transactionHash_gte?: Maybe<Scalars['String']>;
  transactionHash_lte?: Maybe<Scalars['String']>;
  transactionHash_in?: Maybe<Array<Scalars['String']>>;
  transactionHash_not_in?: Maybe<Array<Scalars['String']>>;
  transactionHash_contains?: Maybe<Scalars['String']>;
  transactionHash_not_contains?: Maybe<Scalars['String']>;
  transactionHash_starts_with?: Maybe<Scalars['String']>;
  transactionHash_not_starts_with?: Maybe<Scalars['String']>;
  transactionHash_ends_with?: Maybe<Scalars['String']>;
  transactionHash_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  deposit?: Maybe<Scalars['String']>;
  deposit_not?: Maybe<Scalars['String']>;
  deposit_gt?: Maybe<Scalars['String']>;
  deposit_lt?: Maybe<Scalars['String']>;
  deposit_gte?: Maybe<Scalars['String']>;
  deposit_lte?: Maybe<Scalars['String']>;
  deposit_in?: Maybe<Array<Scalars['String']>>;
  deposit_not_in?: Maybe<Array<Scalars['String']>>;
  deposit_contains?: Maybe<Scalars['String']>;
  deposit_not_contains?: Maybe<Scalars['String']>;
  deposit_starts_with?: Maybe<Scalars['String']>;
  deposit_not_starts_with?: Maybe<Scalars['String']>;
  deposit_ends_with?: Maybe<Scalars['String']>;
  deposit_not_ends_with?: Maybe<Scalars['String']>;
  operator?: Maybe<Scalars['String']>;
  operator_not?: Maybe<Scalars['String']>;
  operator_gt?: Maybe<Scalars['String']>;
  operator_lt?: Maybe<Scalars['String']>;
  operator_gte?: Maybe<Scalars['String']>;
  operator_lte?: Maybe<Scalars['String']>;
  operator_in?: Maybe<Array<Scalars['String']>>;
  operator_not_in?: Maybe<Array<Scalars['String']>>;
  operator_contains?: Maybe<Scalars['String']>;
  operator_not_contains?: Maybe<Scalars['String']>;
  operator_starts_with?: Maybe<Scalars['String']>;
  operator_not_starts_with?: Maybe<Scalars['String']>;
  operator_ends_with?: Maybe<Scalars['String']>;
  operator_not_ends_with?: Maybe<Scalars['String']>;
  grantID?: Maybe<Scalars['BigInt']>;
  grantID_not?: Maybe<Scalars['BigInt']>;
  grantID_gt?: Maybe<Scalars['BigInt']>;
  grantID_lt?: Maybe<Scalars['BigInt']>;
  grantID_gte?: Maybe<Scalars['BigInt']>;
  grantID_lte?: Maybe<Scalars['BigInt']>;
  grantID_in?: Maybe<Array<Scalars['BigInt']>>;
  grantID_not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export enum TokenGrantRevokedEvent_OrderBy {
  Id = 'id',
  Submitter = 'submitter',
  TransactionHash = 'transactionHash',
  Timestamp = 'timestamp',
  Deposit = 'deposit',
  Operator = 'operator',
  GrantId = 'grantID'
}

export type TokenGrantStakedEvent = Event & {
  __typename?: 'TokenGrantStakedEvent';
  id: Scalars['ID'];
  submitter: Scalars['Bytes'];
  transactionHash: Scalars['String'];
  timestamp: Scalars['BigInt'];
  deposit?: Maybe<Deposit>;
  operator?: Maybe<Operator>;
  grantID: Scalars['BigInt'];
  amount: Scalars['BigInt'];
};

export type TokenGrantStakedEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  submitter?: Maybe<Scalars['Bytes']>;
  submitter_not?: Maybe<Scalars['Bytes']>;
  submitter_in?: Maybe<Array<Scalars['Bytes']>>;
  submitter_not_in?: Maybe<Array<Scalars['Bytes']>>;
  submitter_contains?: Maybe<Scalars['Bytes']>;
  submitter_not_contains?: Maybe<Scalars['Bytes']>;
  transactionHash?: Maybe<Scalars['String']>;
  transactionHash_not?: Maybe<Scalars['String']>;
  transactionHash_gt?: Maybe<Scalars['String']>;
  transactionHash_lt?: Maybe<Scalars['String']>;
  transactionHash_gte?: Maybe<Scalars['String']>;
  transactionHash_lte?: Maybe<Scalars['String']>;
  transactionHash_in?: Maybe<Array<Scalars['String']>>;
  transactionHash_not_in?: Maybe<Array<Scalars['String']>>;
  transactionHash_contains?: Maybe<Scalars['String']>;
  transactionHash_not_contains?: Maybe<Scalars['String']>;
  transactionHash_starts_with?: Maybe<Scalars['String']>;
  transactionHash_not_starts_with?: Maybe<Scalars['String']>;
  transactionHash_ends_with?: Maybe<Scalars['String']>;
  transactionHash_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  deposit?: Maybe<Scalars['String']>;
  deposit_not?: Maybe<Scalars['String']>;
  deposit_gt?: Maybe<Scalars['String']>;
  deposit_lt?: Maybe<Scalars['String']>;
  deposit_gte?: Maybe<Scalars['String']>;
  deposit_lte?: Maybe<Scalars['String']>;
  deposit_in?: Maybe<Array<Scalars['String']>>;
  deposit_not_in?: Maybe<Array<Scalars['String']>>;
  deposit_contains?: Maybe<Scalars['String']>;
  deposit_not_contains?: Maybe<Scalars['String']>;
  deposit_starts_with?: Maybe<Scalars['String']>;
  deposit_not_starts_with?: Maybe<Scalars['String']>;
  deposit_ends_with?: Maybe<Scalars['String']>;
  deposit_not_ends_with?: Maybe<Scalars['String']>;
  operator?: Maybe<Scalars['String']>;
  operator_not?: Maybe<Scalars['String']>;
  operator_gt?: Maybe<Scalars['String']>;
  operator_lt?: Maybe<Scalars['String']>;
  operator_gte?: Maybe<Scalars['String']>;
  operator_lte?: Maybe<Scalars['String']>;
  operator_in?: Maybe<Array<Scalars['String']>>;
  operator_not_in?: Maybe<Array<Scalars['String']>>;
  operator_contains?: Maybe<Scalars['String']>;
  operator_not_contains?: Maybe<Scalars['String']>;
  operator_starts_with?: Maybe<Scalars['String']>;
  operator_not_starts_with?: Maybe<Scalars['String']>;
  operator_ends_with?: Maybe<Scalars['String']>;
  operator_not_ends_with?: Maybe<Scalars['String']>;
  grantID?: Maybe<Scalars['BigInt']>;
  grantID_not?: Maybe<Scalars['BigInt']>;
  grantID_gt?: Maybe<Scalars['BigInt']>;
  grantID_lt?: Maybe<Scalars['BigInt']>;
  grantID_gte?: Maybe<Scalars['BigInt']>;
  grantID_lte?: Maybe<Scalars['BigInt']>;
  grantID_in?: Maybe<Array<Scalars['BigInt']>>;
  grantID_not_in?: Maybe<Array<Scalars['BigInt']>>;
  amount?: Maybe<Scalars['BigInt']>;
  amount_not?: Maybe<Scalars['BigInt']>;
  amount_gt?: Maybe<Scalars['BigInt']>;
  amount_lt?: Maybe<Scalars['BigInt']>;
  amount_gte?: Maybe<Scalars['BigInt']>;
  amount_lte?: Maybe<Scalars['BigInt']>;
  amount_in?: Maybe<Array<Scalars['BigInt']>>;
  amount_not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export enum TokenGrantStakedEvent_OrderBy {
  Id = 'id',
  Submitter = 'submitter',
  TransactionHash = 'transactionHash',
  Timestamp = 'timestamp',
  Deposit = 'deposit',
  Operator = 'operator',
  GrantId = 'grantID',
  Amount = 'amount'
}

export type TokenGrantWithdrawnEvent = Event & {
  __typename?: 'TokenGrantWithdrawnEvent';
  id: Scalars['ID'];
  submitter: Scalars['Bytes'];
  transactionHash: Scalars['String'];
  timestamp: Scalars['BigInt'];
  deposit?: Maybe<Deposit>;
  operator?: Maybe<Operator>;
  grantID: Scalars['BigInt'];
  amount: Scalars['BigInt'];
};

export type TokenGrantWithdrawnEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  submitter?: Maybe<Scalars['Bytes']>;
  submitter_not?: Maybe<Scalars['Bytes']>;
  submitter_in?: Maybe<Array<Scalars['Bytes']>>;
  submitter_not_in?: Maybe<Array<Scalars['Bytes']>>;
  submitter_contains?: Maybe<Scalars['Bytes']>;
  submitter_not_contains?: Maybe<Scalars['Bytes']>;
  transactionHash?: Maybe<Scalars['String']>;
  transactionHash_not?: Maybe<Scalars['String']>;
  transactionHash_gt?: Maybe<Scalars['String']>;
  transactionHash_lt?: Maybe<Scalars['String']>;
  transactionHash_gte?: Maybe<Scalars['String']>;
  transactionHash_lte?: Maybe<Scalars['String']>;
  transactionHash_in?: Maybe<Array<Scalars['String']>>;
  transactionHash_not_in?: Maybe<Array<Scalars['String']>>;
  transactionHash_contains?: Maybe<Scalars['String']>;
  transactionHash_not_contains?: Maybe<Scalars['String']>;
  transactionHash_starts_with?: Maybe<Scalars['String']>;
  transactionHash_not_starts_with?: Maybe<Scalars['String']>;
  transactionHash_ends_with?: Maybe<Scalars['String']>;
  transactionHash_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  deposit?: Maybe<Scalars['String']>;
  deposit_not?: Maybe<Scalars['String']>;
  deposit_gt?: Maybe<Scalars['String']>;
  deposit_lt?: Maybe<Scalars['String']>;
  deposit_gte?: Maybe<Scalars['String']>;
  deposit_lte?: Maybe<Scalars['String']>;
  deposit_in?: Maybe<Array<Scalars['String']>>;
  deposit_not_in?: Maybe<Array<Scalars['String']>>;
  deposit_contains?: Maybe<Scalars['String']>;
  deposit_not_contains?: Maybe<Scalars['String']>;
  deposit_starts_with?: Maybe<Scalars['String']>;
  deposit_not_starts_with?: Maybe<Scalars['String']>;
  deposit_ends_with?: Maybe<Scalars['String']>;
  deposit_not_ends_with?: Maybe<Scalars['String']>;
  operator?: Maybe<Scalars['String']>;
  operator_not?: Maybe<Scalars['String']>;
  operator_gt?: Maybe<Scalars['String']>;
  operator_lt?: Maybe<Scalars['String']>;
  operator_gte?: Maybe<Scalars['String']>;
  operator_lte?: Maybe<Scalars['String']>;
  operator_in?: Maybe<Array<Scalars['String']>>;
  operator_not_in?: Maybe<Array<Scalars['String']>>;
  operator_contains?: Maybe<Scalars['String']>;
  operator_not_contains?: Maybe<Scalars['String']>;
  operator_starts_with?: Maybe<Scalars['String']>;
  operator_not_starts_with?: Maybe<Scalars['String']>;
  operator_ends_with?: Maybe<Scalars['String']>;
  operator_not_ends_with?: Maybe<Scalars['String']>;
  grantID?: Maybe<Scalars['BigInt']>;
  grantID_not?: Maybe<Scalars['BigInt']>;
  grantID_gt?: Maybe<Scalars['BigInt']>;
  grantID_lt?: Maybe<Scalars['BigInt']>;
  grantID_gte?: Maybe<Scalars['BigInt']>;
  grantID_lte?: Maybe<Scalars['BigInt']>;
  grantID_in?: Maybe<Array<Scalars['BigInt']>>;
  grantID_not_in?: Maybe<Array<Scalars['BigInt']>>;
  amount?: Maybe<Scalars['BigInt']>;
  amount_not?: Maybe<Scalars['BigInt']>;
  amount_gt?: Maybe<Scalars['BigInt']>;
  amount_lt?: Maybe<Scalars['BigInt']>;
  amount_gte?: Maybe<Scalars['BigInt']>;
  amount_lte?: Maybe<Scalars['BigInt']>;
  amount_in?: Maybe<Array<Scalars['BigInt']>>;
  amount_not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export enum TokenGrantWithdrawnEvent_OrderBy {
  Id = 'id',
  Submitter = 'submitter',
  TransactionHash = 'transactionHash',
  Timestamp = 'timestamp',
  Deposit = 'deposit',
  Operator = 'operator',
  GrantId = 'grantID',
  Amount = 'amount'
}

export type TokensSeizedEvent = Event & {
  __typename?: 'TokensSeizedEvent';
  id: Scalars['ID'];
  submitter: Scalars['Bytes'];
  transactionHash: Scalars['String'];
  timestamp: Scalars['BigInt'];
  deposit?: Maybe<Deposit>;
  operator?: Maybe<Operator>;
};

export type TokensSeizedEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  submitter?: Maybe<Scalars['Bytes']>;
  submitter_not?: Maybe<Scalars['Bytes']>;
  submitter_in?: Maybe<Array<Scalars['Bytes']>>;
  submitter_not_in?: Maybe<Array<Scalars['Bytes']>>;
  submitter_contains?: Maybe<Scalars['Bytes']>;
  submitter_not_contains?: Maybe<Scalars['Bytes']>;
  transactionHash?: Maybe<Scalars['String']>;
  transactionHash_not?: Maybe<Scalars['String']>;
  transactionHash_gt?: Maybe<Scalars['String']>;
  transactionHash_lt?: Maybe<Scalars['String']>;
  transactionHash_gte?: Maybe<Scalars['String']>;
  transactionHash_lte?: Maybe<Scalars['String']>;
  transactionHash_in?: Maybe<Array<Scalars['String']>>;
  transactionHash_not_in?: Maybe<Array<Scalars['String']>>;
  transactionHash_contains?: Maybe<Scalars['String']>;
  transactionHash_not_contains?: Maybe<Scalars['String']>;
  transactionHash_starts_with?: Maybe<Scalars['String']>;
  transactionHash_not_starts_with?: Maybe<Scalars['String']>;
  transactionHash_ends_with?: Maybe<Scalars['String']>;
  transactionHash_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  deposit?: Maybe<Scalars['String']>;
  deposit_not?: Maybe<Scalars['String']>;
  deposit_gt?: Maybe<Scalars['String']>;
  deposit_lt?: Maybe<Scalars['String']>;
  deposit_gte?: Maybe<Scalars['String']>;
  deposit_lte?: Maybe<Scalars['String']>;
  deposit_in?: Maybe<Array<Scalars['String']>>;
  deposit_not_in?: Maybe<Array<Scalars['String']>>;
  deposit_contains?: Maybe<Scalars['String']>;
  deposit_not_contains?: Maybe<Scalars['String']>;
  deposit_starts_with?: Maybe<Scalars['String']>;
  deposit_not_starts_with?: Maybe<Scalars['String']>;
  deposit_ends_with?: Maybe<Scalars['String']>;
  deposit_not_ends_with?: Maybe<Scalars['String']>;
  operator?: Maybe<Scalars['String']>;
  operator_not?: Maybe<Scalars['String']>;
  operator_gt?: Maybe<Scalars['String']>;
  operator_lt?: Maybe<Scalars['String']>;
  operator_gte?: Maybe<Scalars['String']>;
  operator_lte?: Maybe<Scalars['String']>;
  operator_in?: Maybe<Array<Scalars['String']>>;
  operator_not_in?: Maybe<Array<Scalars['String']>>;
  operator_contains?: Maybe<Scalars['String']>;
  operator_not_contains?: Maybe<Scalars['String']>;
  operator_starts_with?: Maybe<Scalars['String']>;
  operator_not_starts_with?: Maybe<Scalars['String']>;
  operator_ends_with?: Maybe<Scalars['String']>;
  operator_not_ends_with?: Maybe<Scalars['String']>;
};

export enum TokensSeizedEvent_OrderBy {
  Id = 'id',
  Submitter = 'submitter',
  TransactionHash = 'transactionHash',
  Timestamp = 'timestamp',
  Deposit = 'deposit',
  Operator = 'operator'
}

export type TokensSlashedEvent = Event & {
  __typename?: 'TokensSlashedEvent';
  id: Scalars['ID'];
  submitter: Scalars['Bytes'];
  transactionHash: Scalars['String'];
  timestamp: Scalars['BigInt'];
  deposit?: Maybe<Deposit>;
  operator?: Maybe<Operator>;
};

export type TokensSlashedEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  submitter?: Maybe<Scalars['Bytes']>;
  submitter_not?: Maybe<Scalars['Bytes']>;
  submitter_in?: Maybe<Array<Scalars['Bytes']>>;
  submitter_not_in?: Maybe<Array<Scalars['Bytes']>>;
  submitter_contains?: Maybe<Scalars['Bytes']>;
  submitter_not_contains?: Maybe<Scalars['Bytes']>;
  transactionHash?: Maybe<Scalars['String']>;
  transactionHash_not?: Maybe<Scalars['String']>;
  transactionHash_gt?: Maybe<Scalars['String']>;
  transactionHash_lt?: Maybe<Scalars['String']>;
  transactionHash_gte?: Maybe<Scalars['String']>;
  transactionHash_lte?: Maybe<Scalars['String']>;
  transactionHash_in?: Maybe<Array<Scalars['String']>>;
  transactionHash_not_in?: Maybe<Array<Scalars['String']>>;
  transactionHash_contains?: Maybe<Scalars['String']>;
  transactionHash_not_contains?: Maybe<Scalars['String']>;
  transactionHash_starts_with?: Maybe<Scalars['String']>;
  transactionHash_not_starts_with?: Maybe<Scalars['String']>;
  transactionHash_ends_with?: Maybe<Scalars['String']>;
  transactionHash_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  deposit?: Maybe<Scalars['String']>;
  deposit_not?: Maybe<Scalars['String']>;
  deposit_gt?: Maybe<Scalars['String']>;
  deposit_lt?: Maybe<Scalars['String']>;
  deposit_gte?: Maybe<Scalars['String']>;
  deposit_lte?: Maybe<Scalars['String']>;
  deposit_in?: Maybe<Array<Scalars['String']>>;
  deposit_not_in?: Maybe<Array<Scalars['String']>>;
  deposit_contains?: Maybe<Scalars['String']>;
  deposit_not_contains?: Maybe<Scalars['String']>;
  deposit_starts_with?: Maybe<Scalars['String']>;
  deposit_not_starts_with?: Maybe<Scalars['String']>;
  deposit_ends_with?: Maybe<Scalars['String']>;
  deposit_not_ends_with?: Maybe<Scalars['String']>;
  operator?: Maybe<Scalars['String']>;
  operator_not?: Maybe<Scalars['String']>;
  operator_gt?: Maybe<Scalars['String']>;
  operator_lt?: Maybe<Scalars['String']>;
  operator_gte?: Maybe<Scalars['String']>;
  operator_lte?: Maybe<Scalars['String']>;
  operator_in?: Maybe<Array<Scalars['String']>>;
  operator_not_in?: Maybe<Array<Scalars['String']>>;
  operator_contains?: Maybe<Scalars['String']>;
  operator_not_contains?: Maybe<Scalars['String']>;
  operator_starts_with?: Maybe<Scalars['String']>;
  operator_not_starts_with?: Maybe<Scalars['String']>;
  operator_ends_with?: Maybe<Scalars['String']>;
  operator_not_ends_with?: Maybe<Scalars['String']>;
};

export enum TokensSlashedEvent_OrderBy {
  Id = 'id',
  Submitter = 'submitter',
  TransactionHash = 'transactionHash',
  Timestamp = 'timestamp',
  Deposit = 'deposit',
  Operator = 'operator'
}

export type TopUpCompletedEvent = Event & {
  __typename?: 'TopUpCompletedEvent';
  id: Scalars['ID'];
  submitter: Scalars['Bytes'];
  transactionHash: Scalars['String'];
  timestamp: Scalars['BigInt'];
  deposit?: Maybe<Deposit>;
  operator?: Maybe<Operator>;
};

export type TopUpCompletedEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  submitter?: Maybe<Scalars['Bytes']>;
  submitter_not?: Maybe<Scalars['Bytes']>;
  submitter_in?: Maybe<Array<Scalars['Bytes']>>;
  submitter_not_in?: Maybe<Array<Scalars['Bytes']>>;
  submitter_contains?: Maybe<Scalars['Bytes']>;
  submitter_not_contains?: Maybe<Scalars['Bytes']>;
  transactionHash?: Maybe<Scalars['String']>;
  transactionHash_not?: Maybe<Scalars['String']>;
  transactionHash_gt?: Maybe<Scalars['String']>;
  transactionHash_lt?: Maybe<Scalars['String']>;
  transactionHash_gte?: Maybe<Scalars['String']>;
  transactionHash_lte?: Maybe<Scalars['String']>;
  transactionHash_in?: Maybe<Array<Scalars['String']>>;
  transactionHash_not_in?: Maybe<Array<Scalars['String']>>;
  transactionHash_contains?: Maybe<Scalars['String']>;
  transactionHash_not_contains?: Maybe<Scalars['String']>;
  transactionHash_starts_with?: Maybe<Scalars['String']>;
  transactionHash_not_starts_with?: Maybe<Scalars['String']>;
  transactionHash_ends_with?: Maybe<Scalars['String']>;
  transactionHash_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  deposit?: Maybe<Scalars['String']>;
  deposit_not?: Maybe<Scalars['String']>;
  deposit_gt?: Maybe<Scalars['String']>;
  deposit_lt?: Maybe<Scalars['String']>;
  deposit_gte?: Maybe<Scalars['String']>;
  deposit_lte?: Maybe<Scalars['String']>;
  deposit_in?: Maybe<Array<Scalars['String']>>;
  deposit_not_in?: Maybe<Array<Scalars['String']>>;
  deposit_contains?: Maybe<Scalars['String']>;
  deposit_not_contains?: Maybe<Scalars['String']>;
  deposit_starts_with?: Maybe<Scalars['String']>;
  deposit_not_starts_with?: Maybe<Scalars['String']>;
  deposit_ends_with?: Maybe<Scalars['String']>;
  deposit_not_ends_with?: Maybe<Scalars['String']>;
  operator?: Maybe<Scalars['String']>;
  operator_not?: Maybe<Scalars['String']>;
  operator_gt?: Maybe<Scalars['String']>;
  operator_lt?: Maybe<Scalars['String']>;
  operator_gte?: Maybe<Scalars['String']>;
  operator_lte?: Maybe<Scalars['String']>;
  operator_in?: Maybe<Array<Scalars['String']>>;
  operator_not_in?: Maybe<Array<Scalars['String']>>;
  operator_contains?: Maybe<Scalars['String']>;
  operator_not_contains?: Maybe<Scalars['String']>;
  operator_starts_with?: Maybe<Scalars['String']>;
  operator_not_starts_with?: Maybe<Scalars['String']>;
  operator_ends_with?: Maybe<Scalars['String']>;
  operator_not_ends_with?: Maybe<Scalars['String']>;
};

export enum TopUpCompletedEvent_OrderBy {
  Id = 'id',
  Submitter = 'submitter',
  TransactionHash = 'transactionHash',
  Timestamp = 'timestamp',
  Deposit = 'deposit',
  Operator = 'operator'
}

export type TopUpInitiatedEvent = Event & {
  __typename?: 'TopUpInitiatedEvent';
  id: Scalars['ID'];
  submitter: Scalars['Bytes'];
  transactionHash: Scalars['String'];
  timestamp: Scalars['BigInt'];
  deposit?: Maybe<Deposit>;
  operator?: Maybe<Operator>;
};

export type TopUpInitiatedEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  submitter?: Maybe<Scalars['Bytes']>;
  submitter_not?: Maybe<Scalars['Bytes']>;
  submitter_in?: Maybe<Array<Scalars['Bytes']>>;
  submitter_not_in?: Maybe<Array<Scalars['Bytes']>>;
  submitter_contains?: Maybe<Scalars['Bytes']>;
  submitter_not_contains?: Maybe<Scalars['Bytes']>;
  transactionHash?: Maybe<Scalars['String']>;
  transactionHash_not?: Maybe<Scalars['String']>;
  transactionHash_gt?: Maybe<Scalars['String']>;
  transactionHash_lt?: Maybe<Scalars['String']>;
  transactionHash_gte?: Maybe<Scalars['String']>;
  transactionHash_lte?: Maybe<Scalars['String']>;
  transactionHash_in?: Maybe<Array<Scalars['String']>>;
  transactionHash_not_in?: Maybe<Array<Scalars['String']>>;
  transactionHash_contains?: Maybe<Scalars['String']>;
  transactionHash_not_contains?: Maybe<Scalars['String']>;
  transactionHash_starts_with?: Maybe<Scalars['String']>;
  transactionHash_not_starts_with?: Maybe<Scalars['String']>;
  transactionHash_ends_with?: Maybe<Scalars['String']>;
  transactionHash_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  deposit?: Maybe<Scalars['String']>;
  deposit_not?: Maybe<Scalars['String']>;
  deposit_gt?: Maybe<Scalars['String']>;
  deposit_lt?: Maybe<Scalars['String']>;
  deposit_gte?: Maybe<Scalars['String']>;
  deposit_lte?: Maybe<Scalars['String']>;
  deposit_in?: Maybe<Array<Scalars['String']>>;
  deposit_not_in?: Maybe<Array<Scalars['String']>>;
  deposit_contains?: Maybe<Scalars['String']>;
  deposit_not_contains?: Maybe<Scalars['String']>;
  deposit_starts_with?: Maybe<Scalars['String']>;
  deposit_not_starts_with?: Maybe<Scalars['String']>;
  deposit_ends_with?: Maybe<Scalars['String']>;
  deposit_not_ends_with?: Maybe<Scalars['String']>;
  operator?: Maybe<Scalars['String']>;
  operator_not?: Maybe<Scalars['String']>;
  operator_gt?: Maybe<Scalars['String']>;
  operator_lt?: Maybe<Scalars['String']>;
  operator_gte?: Maybe<Scalars['String']>;
  operator_lte?: Maybe<Scalars['String']>;
  operator_in?: Maybe<Array<Scalars['String']>>;
  operator_not_in?: Maybe<Array<Scalars['String']>>;
  operator_contains?: Maybe<Scalars['String']>;
  operator_not_contains?: Maybe<Scalars['String']>;
  operator_starts_with?: Maybe<Scalars['String']>;
  operator_not_starts_with?: Maybe<Scalars['String']>;
  operator_ends_with?: Maybe<Scalars['String']>;
  operator_not_ends_with?: Maybe<Scalars['String']>;
};

export enum TopUpInitiatedEvent_OrderBy {
  Id = 'id',
  Submitter = 'submitter',
  TransactionHash = 'transactionHash',
  Timestamp = 'timestamp',
  Deposit = 'deposit',
  Operator = 'operator'
}

export type UnbondedValueDepositedEvent = Event & {
  __typename?: 'UnbondedValueDepositedEvent';
  id: Scalars['ID'];
  submitter: Scalars['Bytes'];
  transactionHash: Scalars['String'];
  timestamp: Scalars['BigInt'];
  deposit?: Maybe<Deposit>;
  operator?: Maybe<Operator>;
};

export type UnbondedValueDepositedEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  submitter?: Maybe<Scalars['Bytes']>;
  submitter_not?: Maybe<Scalars['Bytes']>;
  submitter_in?: Maybe<Array<Scalars['Bytes']>>;
  submitter_not_in?: Maybe<Array<Scalars['Bytes']>>;
  submitter_contains?: Maybe<Scalars['Bytes']>;
  submitter_not_contains?: Maybe<Scalars['Bytes']>;
  transactionHash?: Maybe<Scalars['String']>;
  transactionHash_not?: Maybe<Scalars['String']>;
  transactionHash_gt?: Maybe<Scalars['String']>;
  transactionHash_lt?: Maybe<Scalars['String']>;
  transactionHash_gte?: Maybe<Scalars['String']>;
  transactionHash_lte?: Maybe<Scalars['String']>;
  transactionHash_in?: Maybe<Array<Scalars['String']>>;
  transactionHash_not_in?: Maybe<Array<Scalars['String']>>;
  transactionHash_contains?: Maybe<Scalars['String']>;
  transactionHash_not_contains?: Maybe<Scalars['String']>;
  transactionHash_starts_with?: Maybe<Scalars['String']>;
  transactionHash_not_starts_with?: Maybe<Scalars['String']>;
  transactionHash_ends_with?: Maybe<Scalars['String']>;
  transactionHash_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  deposit?: Maybe<Scalars['String']>;
  deposit_not?: Maybe<Scalars['String']>;
  deposit_gt?: Maybe<Scalars['String']>;
  deposit_lt?: Maybe<Scalars['String']>;
  deposit_gte?: Maybe<Scalars['String']>;
  deposit_lte?: Maybe<Scalars['String']>;
  deposit_in?: Maybe<Array<Scalars['String']>>;
  deposit_not_in?: Maybe<Array<Scalars['String']>>;
  deposit_contains?: Maybe<Scalars['String']>;
  deposit_not_contains?: Maybe<Scalars['String']>;
  deposit_starts_with?: Maybe<Scalars['String']>;
  deposit_not_starts_with?: Maybe<Scalars['String']>;
  deposit_ends_with?: Maybe<Scalars['String']>;
  deposit_not_ends_with?: Maybe<Scalars['String']>;
  operator?: Maybe<Scalars['String']>;
  operator_not?: Maybe<Scalars['String']>;
  operator_gt?: Maybe<Scalars['String']>;
  operator_lt?: Maybe<Scalars['String']>;
  operator_gte?: Maybe<Scalars['String']>;
  operator_lte?: Maybe<Scalars['String']>;
  operator_in?: Maybe<Array<Scalars['String']>>;
  operator_not_in?: Maybe<Array<Scalars['String']>>;
  operator_contains?: Maybe<Scalars['String']>;
  operator_not_contains?: Maybe<Scalars['String']>;
  operator_starts_with?: Maybe<Scalars['String']>;
  operator_not_starts_with?: Maybe<Scalars['String']>;
  operator_ends_with?: Maybe<Scalars['String']>;
  operator_not_ends_with?: Maybe<Scalars['String']>;
};

export enum UnbondedValueDepositedEvent_OrderBy {
  Id = 'id',
  Submitter = 'submitter',
  TransactionHash = 'transactionHash',
  Timestamp = 'timestamp',
  Deposit = 'deposit',
  Operator = 'operator'
}

export type UnbondedValueWithdrawnEvent = Event & {
  __typename?: 'UnbondedValueWithdrawnEvent';
  id: Scalars['ID'];
  submitter: Scalars['Bytes'];
  transactionHash: Scalars['String'];
  timestamp: Scalars['BigInt'];
  deposit?: Maybe<Deposit>;
  operator?: Maybe<Operator>;
};

export type UnbondedValueWithdrawnEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  submitter?: Maybe<Scalars['Bytes']>;
  submitter_not?: Maybe<Scalars['Bytes']>;
  submitter_in?: Maybe<Array<Scalars['Bytes']>>;
  submitter_not_in?: Maybe<Array<Scalars['Bytes']>>;
  submitter_contains?: Maybe<Scalars['Bytes']>;
  submitter_not_contains?: Maybe<Scalars['Bytes']>;
  transactionHash?: Maybe<Scalars['String']>;
  transactionHash_not?: Maybe<Scalars['String']>;
  transactionHash_gt?: Maybe<Scalars['String']>;
  transactionHash_lt?: Maybe<Scalars['String']>;
  transactionHash_gte?: Maybe<Scalars['String']>;
  transactionHash_lte?: Maybe<Scalars['String']>;
  transactionHash_in?: Maybe<Array<Scalars['String']>>;
  transactionHash_not_in?: Maybe<Array<Scalars['String']>>;
  transactionHash_contains?: Maybe<Scalars['String']>;
  transactionHash_not_contains?: Maybe<Scalars['String']>;
  transactionHash_starts_with?: Maybe<Scalars['String']>;
  transactionHash_not_starts_with?: Maybe<Scalars['String']>;
  transactionHash_ends_with?: Maybe<Scalars['String']>;
  transactionHash_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  deposit?: Maybe<Scalars['String']>;
  deposit_not?: Maybe<Scalars['String']>;
  deposit_gt?: Maybe<Scalars['String']>;
  deposit_lt?: Maybe<Scalars['String']>;
  deposit_gte?: Maybe<Scalars['String']>;
  deposit_lte?: Maybe<Scalars['String']>;
  deposit_in?: Maybe<Array<Scalars['String']>>;
  deposit_not_in?: Maybe<Array<Scalars['String']>>;
  deposit_contains?: Maybe<Scalars['String']>;
  deposit_not_contains?: Maybe<Scalars['String']>;
  deposit_starts_with?: Maybe<Scalars['String']>;
  deposit_not_starts_with?: Maybe<Scalars['String']>;
  deposit_ends_with?: Maybe<Scalars['String']>;
  deposit_not_ends_with?: Maybe<Scalars['String']>;
  operator?: Maybe<Scalars['String']>;
  operator_not?: Maybe<Scalars['String']>;
  operator_gt?: Maybe<Scalars['String']>;
  operator_lt?: Maybe<Scalars['String']>;
  operator_gte?: Maybe<Scalars['String']>;
  operator_lte?: Maybe<Scalars['String']>;
  operator_in?: Maybe<Array<Scalars['String']>>;
  operator_not_in?: Maybe<Array<Scalars['String']>>;
  operator_contains?: Maybe<Scalars['String']>;
  operator_not_contains?: Maybe<Scalars['String']>;
  operator_starts_with?: Maybe<Scalars['String']>;
  operator_not_starts_with?: Maybe<Scalars['String']>;
  operator_ends_with?: Maybe<Scalars['String']>;
  operator_not_ends_with?: Maybe<Scalars['String']>;
};

export enum UnbondedValueWithdrawnEvent_OrderBy {
  Id = 'id',
  Submitter = 'submitter',
  TransactionHash = 'transactionHash',
  Timestamp = 'timestamp',
  Deposit = 'deposit',
  Operator = 'operator'
}

export type UndelegatedEvent = Event & {
  __typename?: 'UndelegatedEvent';
  id: Scalars['ID'];
  submitter: Scalars['Bytes'];
  transactionHash: Scalars['String'];
  timestamp: Scalars['BigInt'];
  deposit?: Maybe<Deposit>;
  operator?: Maybe<Operator>;
};

export type UndelegatedEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  submitter?: Maybe<Scalars['Bytes']>;
  submitter_not?: Maybe<Scalars['Bytes']>;
  submitter_in?: Maybe<Array<Scalars['Bytes']>>;
  submitter_not_in?: Maybe<Array<Scalars['Bytes']>>;
  submitter_contains?: Maybe<Scalars['Bytes']>;
  submitter_not_contains?: Maybe<Scalars['Bytes']>;
  transactionHash?: Maybe<Scalars['String']>;
  transactionHash_not?: Maybe<Scalars['String']>;
  transactionHash_gt?: Maybe<Scalars['String']>;
  transactionHash_lt?: Maybe<Scalars['String']>;
  transactionHash_gte?: Maybe<Scalars['String']>;
  transactionHash_lte?: Maybe<Scalars['String']>;
  transactionHash_in?: Maybe<Array<Scalars['String']>>;
  transactionHash_not_in?: Maybe<Array<Scalars['String']>>;
  transactionHash_contains?: Maybe<Scalars['String']>;
  transactionHash_not_contains?: Maybe<Scalars['String']>;
  transactionHash_starts_with?: Maybe<Scalars['String']>;
  transactionHash_not_starts_with?: Maybe<Scalars['String']>;
  transactionHash_ends_with?: Maybe<Scalars['String']>;
  transactionHash_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  deposit?: Maybe<Scalars['String']>;
  deposit_not?: Maybe<Scalars['String']>;
  deposit_gt?: Maybe<Scalars['String']>;
  deposit_lt?: Maybe<Scalars['String']>;
  deposit_gte?: Maybe<Scalars['String']>;
  deposit_lte?: Maybe<Scalars['String']>;
  deposit_in?: Maybe<Array<Scalars['String']>>;
  deposit_not_in?: Maybe<Array<Scalars['String']>>;
  deposit_contains?: Maybe<Scalars['String']>;
  deposit_not_contains?: Maybe<Scalars['String']>;
  deposit_starts_with?: Maybe<Scalars['String']>;
  deposit_not_starts_with?: Maybe<Scalars['String']>;
  deposit_ends_with?: Maybe<Scalars['String']>;
  deposit_not_ends_with?: Maybe<Scalars['String']>;
  operator?: Maybe<Scalars['String']>;
  operator_not?: Maybe<Scalars['String']>;
  operator_gt?: Maybe<Scalars['String']>;
  operator_lt?: Maybe<Scalars['String']>;
  operator_gte?: Maybe<Scalars['String']>;
  operator_lte?: Maybe<Scalars['String']>;
  operator_in?: Maybe<Array<Scalars['String']>>;
  operator_not_in?: Maybe<Array<Scalars['String']>>;
  operator_contains?: Maybe<Scalars['String']>;
  operator_not_contains?: Maybe<Scalars['String']>;
  operator_starts_with?: Maybe<Scalars['String']>;
  operator_not_starts_with?: Maybe<Scalars['String']>;
  operator_ends_with?: Maybe<Scalars['String']>;
  operator_not_ends_with?: Maybe<Scalars['String']>;
};

export enum UndelegatedEvent_OrderBy {
  Id = 'id',
  Submitter = 'submitter',
  TransactionHash = 'transactionHash',
  Timestamp = 'timestamp',
  Deposit = 'deposit',
  Operator = 'operator'
}

/** An actor using the minting and redeeming facilities. */
export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  address: Scalars['Bytes'];
  /** The number of deposits the user initiated. */
  numDepositsCreated: Scalars['Int'];
  /** The number of deposits the user initiated, then did not complete the funding process of. Excludes any deposits which failed due to signer issues. */
  numDepositsUnfunded: Scalars['Int'];
  /** The number of deposits the user requested to be redeemed. */
  numDepositsRedeemed: Scalars['Int'];
  /** The number of deposits the user requested to be redeemed, where the deposit was also created by them. */
  numOwnDepositsRedeemed: Scalars['Int'];
};

export type User_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  address?: Maybe<Scalars['Bytes']>;
  address_not?: Maybe<Scalars['Bytes']>;
  address_in?: Maybe<Array<Scalars['Bytes']>>;
  address_not_in?: Maybe<Array<Scalars['Bytes']>>;
  address_contains?: Maybe<Scalars['Bytes']>;
  address_not_contains?: Maybe<Scalars['Bytes']>;
  numDepositsCreated?: Maybe<Scalars['Int']>;
  numDepositsCreated_not?: Maybe<Scalars['Int']>;
  numDepositsCreated_gt?: Maybe<Scalars['Int']>;
  numDepositsCreated_lt?: Maybe<Scalars['Int']>;
  numDepositsCreated_gte?: Maybe<Scalars['Int']>;
  numDepositsCreated_lte?: Maybe<Scalars['Int']>;
  numDepositsCreated_in?: Maybe<Array<Scalars['Int']>>;
  numDepositsCreated_not_in?: Maybe<Array<Scalars['Int']>>;
  numDepositsUnfunded?: Maybe<Scalars['Int']>;
  numDepositsUnfunded_not?: Maybe<Scalars['Int']>;
  numDepositsUnfunded_gt?: Maybe<Scalars['Int']>;
  numDepositsUnfunded_lt?: Maybe<Scalars['Int']>;
  numDepositsUnfunded_gte?: Maybe<Scalars['Int']>;
  numDepositsUnfunded_lte?: Maybe<Scalars['Int']>;
  numDepositsUnfunded_in?: Maybe<Array<Scalars['Int']>>;
  numDepositsUnfunded_not_in?: Maybe<Array<Scalars['Int']>>;
  numDepositsRedeemed?: Maybe<Scalars['Int']>;
  numDepositsRedeemed_not?: Maybe<Scalars['Int']>;
  numDepositsRedeemed_gt?: Maybe<Scalars['Int']>;
  numDepositsRedeemed_lt?: Maybe<Scalars['Int']>;
  numDepositsRedeemed_gte?: Maybe<Scalars['Int']>;
  numDepositsRedeemed_lte?: Maybe<Scalars['Int']>;
  numDepositsRedeemed_in?: Maybe<Array<Scalars['Int']>>;
  numDepositsRedeemed_not_in?: Maybe<Array<Scalars['Int']>>;
  numOwnDepositsRedeemed?: Maybe<Scalars['Int']>;
  numOwnDepositsRedeemed_not?: Maybe<Scalars['Int']>;
  numOwnDepositsRedeemed_gt?: Maybe<Scalars['Int']>;
  numOwnDepositsRedeemed_lt?: Maybe<Scalars['Int']>;
  numOwnDepositsRedeemed_gte?: Maybe<Scalars['Int']>;
  numOwnDepositsRedeemed_lte?: Maybe<Scalars['Int']>;
  numOwnDepositsRedeemed_in?: Maybe<Array<Scalars['Int']>>;
  numOwnDepositsRedeemed_not_in?: Maybe<Array<Scalars['Int']>>;
};

export enum User_OrderBy {
  Id = 'id',
  Address = 'address',
  NumDepositsCreated = 'numDepositsCreated',
  NumDepositsUnfunded = 'numDepositsUnfunded',
  NumDepositsRedeemed = 'numDepositsRedeemed',
  NumOwnDepositsRedeemed = 'numOwnDepositsRedeemed'
}

export type _Block_ = {
  __typename?: '_Block_';
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  __typename?: '_Meta_';
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
};

export type WatchPriceSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type WatchPriceSubscription = (
  { __typename?: 'Subscription' }
  & { priceFeed?: Maybe<(
    { __typename?: 'PriceFeed' }
    & Pick<PriceFeed, 'val' | 'timestamp' | 'blockNumber' | 'transactionHash'>
  )> }
);

export type GetBlockPriceQueryVariables = Exact<{
  block?: Maybe<Block_Height>;
}>;


export type GetBlockPriceQuery = (
  { __typename?: 'Query' }
  & { priceFeed?: Maybe<(
    { __typename?: 'PriceFeed' }
    & Pick<PriceFeed, 'val' | 'timestamp' | 'blockNumber' | 'transactionHash'>
  )> }
);

export type GetRelayEntriesQueryVariables = Exact<{
  block?: Maybe<Block_Height>;
}>;


export type GetRelayEntriesQuery = (
  { __typename?: 'Query' }
  & { randomBeaconGroups: Array<(
    { __typename?: 'RandomBeaconGroup' }
    & Pick<RandomBeaconGroup, 'id' | 'pubKey' | 'createdAt' | 'uniqueMemberCount' | 'rewardPerMember'>
  )>, relayEntries: Array<(
    { __typename?: 'RelayEntry' }
    & Pick<RelayEntry, 'id' | 'requestId' | 'value' | 'requestedAt' | 'generatedAt' | 'rewardPerMember'>
    & { group: (
      { __typename?: 'RandomBeaconGroup' }
      & Pick<RandomBeaconGroup, 'id' | 'pubKey'>
    ) }
  )> }
);

export type GetDepositQueryVariables = Exact<{
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
}>;


export type GetDepositQuery = (
  { __typename?: 'Query' }
  & { deposit?: Maybe<(
    { __typename?: 'Deposit' }
    & Pick<Deposit, 'id' | 'contractAddress' | 'currentState' | 'createdAt' | 'keepAddress' | 'lotSizeSatoshis' | 'endOfTerm' | 'index' | 'currentStateTimesOutAt' | 'initialCollateralizedPercent' | 'undercollateralizedThresholdPercent' | 'severelyUndercollateralizedThresholdPercent'>
    & { tdtToken: (
      { __typename?: 'TBTCDepositToken' }
      & Pick<TbtcDepositToken, 'id' | 'tokenID' | 'owner' | 'minter'>
    ), bondedECDSAKeep?: Maybe<(
      { __typename?: 'BondedECDSAKeep' }
      & Pick<BondedEcdsaKeep, 'id' | 'keepAddress' | 'totalBondAmount' | 'publicKey' | 'status' | 'honestThreshold'>
      & { members: Array<Maybe<(
        { __typename?: 'Operator' }
        & Pick<Operator, 'id' | 'address'>
      )>> }
    )>, depositLiquidation?: Maybe<(
      { __typename?: 'DepositLiquidation' }
      & Pick<DepositLiquidation, 'cause'>
    )> }
    & NiceStateLabelFragment
  )> }
);

export type WatchDepositSubscriptionVariables = Exact<{
  id: Scalars['ID'];
}>;


export type WatchDepositSubscription = (
  { __typename?: 'Subscription' }
  & { deposit?: Maybe<(
    { __typename?: 'Deposit' }
    & Pick<Deposit, 'id' | 'currentState'>
  )> }
);

export type GetDepositLogsQueryVariables = Exact<{
  depositId: Scalars['String'];
  block?: Maybe<Block_Height>;
}>;


export type GetDepositLogsQuery = (
  { __typename?: 'Query' }
  & { events: Array<(
    { __typename: 'BondReassignedEvent' }
    & Pick<BondReassignedEvent, 'id' | 'transactionHash' | 'submitter' | 'timestamp'>
  ) | (
    { __typename: 'BondSeizedEvent' }
    & Pick<BondSeizedEvent, 'id' | 'transactionHash' | 'submitter' | 'timestamp'>
  ) | (
    { __typename: 'CourtesyCalledEvent' }
    & Pick<CourtesyCalledEvent, 'id' | 'transactionHash' | 'submitter' | 'timestamp'>
  ) | (
    { __typename: 'CreatedEvent' }
    & Pick<CreatedEvent, 'id' | 'transactionHash' | 'submitter' | 'timestamp'>
  ) | (
    { __typename: 'ExitedCourtesyCallEvent' }
    & Pick<ExitedCourtesyCallEvent, 'id' | 'transactionHash' | 'submitter' | 'timestamp'>
  ) | (
    { __typename: 'FundedEvent' }
    & Pick<FundedEvent, 'id' | 'transactionHash' | 'submitter' | 'timestamp'>
  ) | (
    { __typename: 'GotRedemptionSignatureEvent' }
    & Pick<GotRedemptionSignatureEvent, 'id' | 'transactionHash' | 'submitter' | 'timestamp'>
  ) | (
    { __typename: 'LiquidatedEvent' }
    & Pick<LiquidatedEvent, 'id' | 'transactionHash' | 'submitter' | 'timestamp'>
    & { deposit?: Maybe<(
      { __typename?: 'Deposit' }
      & AuctionDetailsFragment
    )> }
  ) | (
    { __typename: 'OperatorStakedEvent' }
    & Pick<OperatorStakedEvent, 'id' | 'transactionHash' | 'submitter' | 'timestamp'>
  ) | (
    { __typename: 'RedeemedEvent' }
    & Pick<RedeemedEvent, 'id' | 'transactionHash' | 'submitter' | 'timestamp'>
  ) | (
    { __typename: 'RedemptionFeeIncreasedEvent' }
    & Pick<RedemptionFeeIncreasedEvent, 'id' | 'transactionHash' | 'submitter' | 'timestamp'>
  ) | (
    { __typename: 'RedemptionRequestedEvent' }
    & Pick<RedemptionRequestedEvent, 'id' | 'transactionHash' | 'submitter' | 'timestamp'>
  ) | (
    { __typename: 'RegisteredPubKeyEvent' }
    & Pick<RegisteredPubKeyEvent, 'signingGroupPubkeyX' | 'signingGroupPubkeyY' | 'id' | 'transactionHash' | 'submitter' | 'timestamp'>
  ) | (
    { __typename: 'SetupFailedEvent' }
    & Pick<SetupFailedEvent, 'reason' | 'id' | 'transactionHash' | 'submitter' | 'timestamp'>
    & { deposit?: Maybe<(
      { __typename?: 'Deposit' }
      & { bondedECDSAKeep?: Maybe<(
        { __typename?: 'BondedECDSAKeep' }
        & { pubkeySubmissions: Array<Maybe<(
          { __typename?: 'Operator' }
          & Pick<Operator, 'address'>
        )>>, members: Array<Maybe<(
          { __typename?: 'Operator' }
          & Pick<Operator, 'address'>
        )>> }
      )> }
    )> }
  ) | (
    { __typename: 'StakeOwnershipTransferredEvent' }
    & Pick<StakeOwnershipTransferredEvent, 'id' | 'transactionHash' | 'submitter' | 'timestamp'>
  ) | (
    { __typename: 'StakingContractAuthorizedEvent' }
    & Pick<StakingContractAuthorizedEvent, 'id' | 'transactionHash' | 'submitter' | 'timestamp'>
  ) | (
    { __typename: 'StartedLiquidationEvent' }
    & Pick<StartedLiquidationEvent, 'cause' | 'id' | 'transactionHash' | 'submitter' | 'timestamp'>
  ) | (
    { __typename: 'TokenGrantCreatedEvent' }
    & Pick<TokenGrantCreatedEvent, 'id' | 'transactionHash' | 'submitter' | 'timestamp'>
  ) | (
    { __typename: 'TokenGrantRevokedEvent' }
    & Pick<TokenGrantRevokedEvent, 'id' | 'transactionHash' | 'submitter' | 'timestamp'>
  ) | (
    { __typename: 'TokenGrantStakedEvent' }
    & Pick<TokenGrantStakedEvent, 'id' | 'transactionHash' | 'submitter' | 'timestamp'>
  ) | (
    { __typename: 'TokenGrantWithdrawnEvent' }
    & Pick<TokenGrantWithdrawnEvent, 'id' | 'transactionHash' | 'submitter' | 'timestamp'>
  ) | (
    { __typename: 'TokensSeizedEvent' }
    & Pick<TokensSeizedEvent, 'id' | 'transactionHash' | 'submitter' | 'timestamp'>
  ) | (
    { __typename: 'TokensSlashedEvent' }
    & Pick<TokensSlashedEvent, 'id' | 'transactionHash' | 'submitter' | 'timestamp'>
  ) | (
    { __typename: 'TopUpCompletedEvent' }
    & Pick<TopUpCompletedEvent, 'id' | 'transactionHash' | 'submitter' | 'timestamp'>
  ) | (
    { __typename: 'TopUpInitiatedEvent' }
    & Pick<TopUpInitiatedEvent, 'id' | 'transactionHash' | 'submitter' | 'timestamp'>
  ) | (
    { __typename: 'UnbondedValueDepositedEvent' }
    & Pick<UnbondedValueDepositedEvent, 'id' | 'transactionHash' | 'submitter' | 'timestamp'>
  ) | (
    { __typename: 'UnbondedValueWithdrawnEvent' }
    & Pick<UnbondedValueWithdrawnEvent, 'id' | 'transactionHash' | 'submitter' | 'timestamp'>
  ) | (
    { __typename: 'UndelegatedEvent' }
    & Pick<UndelegatedEvent, 'id' | 'transactionHash' | 'submitter' | 'timestamp'>
  )> }
);

export type GetDepositsQueryVariables = Exact<{
  where?: Maybe<Deposit_Filter>;
  orderBy?: Maybe<Deposit_OrderBy>;
  skip?: Maybe<Scalars['Int']>;
  block?: Maybe<Block_Height>;
  orderDirection?: Maybe<OrderDirection>;
  perPage?: Maybe<Scalars['Int']>;
}>;


export type GetDepositsQuery = (
  { __typename?: 'Query' }
  & { deposits: Array<(
    { __typename?: 'Deposit' }
    & Pick<Deposit, 'id' | 'contractAddress' | 'lotSizeSatoshis' | 'currentState' | 'keepAddress' | 'updatedAt' | 'createdAt' | 'redemptionStartedAt' | 'currentStateTimesOutAt' | 'creator' | 'lastActor' | 'filter_redeemableAsOf' | 'undercollateralizedThresholdPercent' | 'severelyUndercollateralizedThresholdPercent'>
    & { tdtToken: (
      { __typename?: 'TBTCDepositToken' }
      & Pick<TbtcDepositToken, 'owner'>
    ), bondedECDSAKeep?: Maybe<(
      { __typename?: 'BondedECDSAKeep' }
      & Pick<BondedEcdsaKeep, 'id' | 'totalBondAmount' | 'publicKey'>
    )> }
    & NiceStateLabelFragment
  )>, stats?: Maybe<(
    { __typename?: 'StatsRecord' }
    & Pick<StatsRecord, 'depositCount'>
  )> }
);

export type GetGovernanceQueryVariables = Exact<{
  block?: Maybe<Block_Height>;
}>;


export type GetGovernanceQuery = (
  { __typename?: 'Query' }
  & { governance?: Maybe<(
    { __typename?: 'Governance' }
    & Pick<Governance, 'newDepositsAllowed' | 'lotSizes' | 'factorySelector' | 'fullyBackedFactory' | 'keepStakedFactory' | 'signerFeeDivisor' | 'initialCollateralizedPercent' | 'severelyUndercollateralizedThresholdPercent' | 'undercollateralizedThresholdPercent' | 'priceFeeds'>
    & { pendingLotSizeChange?: Maybe<(
      { __typename?: 'GovernanceChange' }
      & ChangeFragment
    )>, pendingFactoriesChange?: Maybe<(
      { __typename?: 'GovernanceChange' }
      & ChangeFragment
    )>, pendingSignerFeeDivisorChange?: Maybe<(
      { __typename?: 'GovernanceChange' }
      & ChangeFragment
    )> }
  )>, governanceLogEntries: Array<(
    { __typename?: 'GovernanceLogEntry' }
    & Pick<GovernanceLogEntry, 'id' | 'timestamp' | 'transactionHash' | 'submitter' | 'isRequest'>
    & { change?: Maybe<(
      { __typename?: 'GovernanceChange' }
      & ChangeFragment
    )> }
  )> }
);

export type ChangeFragment = (
  { __typename?: 'GovernanceChange' }
  & Pick<GovernanceChange, 'type' | 'requestedAt' | 'takesEffectAfter' | 'newLotSizes' | 'newFactorySelector' | 'newFullyBackedFactory' | 'newKeepStakedFactory'>
);

export type GetRandomBeaconGroupQueryVariables = Exact<{
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
}>;


export type GetRandomBeaconGroupQuery = (
  { __typename?: 'Query' }
  & { randomBeaconGroup?: Maybe<(
    { __typename?: 'RandomBeaconGroup' }
    & Pick<RandomBeaconGroup, 'id' | 'createdAt' | 'rewardPerMember'>
    & { memberships: Array<(
      { __typename?: 'RandomBeaconGroupMembership' }
      & Pick<RandomBeaconGroupMembership, 'id' | 'count' | 'reward'>
      & { operator: (
        { __typename?: 'Operator' }
        & Pick<Operator, 'address' | 'stakedAmount'>
      ) }
    )>, relayEntries: Array<(
      { __typename?: 'RelayEntry' }
      & Pick<RelayEntry, 'id' | 'requestId' | 'value' | 'requestedAt' | 'generatedAt' | 'rewardPerMember'>
      & { group: (
        { __typename?: 'RandomBeaconGroup' }
        & Pick<RandomBeaconGroup, 'id' | 'pubKey'>
      ) }
    )> }
  )> }
);

export type GetOperatorKeepsQueryVariables = Exact<{
  id: Scalars['ID'];
  orderBy?: Maybe<BondedEcdsaKeep_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  block?: Maybe<Block_Height>;
}>;


export type GetOperatorKeepsQuery = (
  { __typename?: 'Query' }
  & { operator?: Maybe<(
    { __typename?: 'Operator' }
    & { keeps?: Maybe<Array<(
      { __typename?: 'BondedECDSAKeep' }
      & Pick<BondedEcdsaKeep, 'id' | 'totalBondAmount'>
      & { deposit: (
        { __typename?: 'Deposit' }
        & Pick<Deposit, 'id' | 'contractAddress' | 'lotSizeSatoshis' | 'currentState' | 'keepAddress' | 'createdAt' | 'undercollateralizedThresholdPercent' | 'severelyUndercollateralizedThresholdPercent'>
        & { tdtToken: (
          { __typename?: 'TBTCDepositToken' }
          & Pick<TbtcDepositToken, 'owner'>
        ), bondedECDSAKeep?: Maybe<(
          { __typename?: 'BondedECDSAKeep' }
          & Pick<BondedEcdsaKeep, 'id' | 'totalBondAmount'>
        )> }
        & NiceStateLabelFragment
      ) }
    )>> }
  )> }
);

export type GetOperatorLogQueryVariables = Exact<{
  id: Scalars['String'];
  orderBy?: Maybe<BondedEcdsaKeep_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  block?: Maybe<Block_Height>;
}>;


export type GetOperatorLogQuery = (
  { __typename?: 'Query' }
  & { events: Array<(
    { __typename: 'BondReassignedEvent' }
    & Pick<BondReassignedEvent, 'id' | 'transactionHash' | 'submitter' | 'timestamp'>
  ) | (
    { __typename: 'BondSeizedEvent' }
    & Pick<BondSeizedEvent, 'id' | 'transactionHash' | 'submitter' | 'timestamp'>
  ) | (
    { __typename: 'CourtesyCalledEvent' }
    & Pick<CourtesyCalledEvent, 'id' | 'transactionHash' | 'submitter' | 'timestamp'>
  ) | (
    { __typename: 'CreatedEvent' }
    & Pick<CreatedEvent, 'id' | 'transactionHash' | 'submitter' | 'timestamp'>
  ) | (
    { __typename: 'ExitedCourtesyCallEvent' }
    & Pick<ExitedCourtesyCallEvent, 'id' | 'transactionHash' | 'submitter' | 'timestamp'>
  ) | (
    { __typename: 'FundedEvent' }
    & Pick<FundedEvent, 'id' | 'transactionHash' | 'submitter' | 'timestamp'>
  ) | (
    { __typename: 'GotRedemptionSignatureEvent' }
    & Pick<GotRedemptionSignatureEvent, 'id' | 'transactionHash' | 'submitter' | 'timestamp'>
  ) | (
    { __typename: 'LiquidatedEvent' }
    & Pick<LiquidatedEvent, 'id' | 'transactionHash' | 'submitter' | 'timestamp'>
  ) | (
    { __typename: 'OperatorStakedEvent' }
    & Pick<OperatorStakedEvent, 'id' | 'transactionHash' | 'submitter' | 'timestamp'>
  ) | (
    { __typename: 'RedeemedEvent' }
    & Pick<RedeemedEvent, 'id' | 'transactionHash' | 'submitter' | 'timestamp'>
  ) | (
    { __typename: 'RedemptionFeeIncreasedEvent' }
    & Pick<RedemptionFeeIncreasedEvent, 'id' | 'transactionHash' | 'submitter' | 'timestamp'>
  ) | (
    { __typename: 'RedemptionRequestedEvent' }
    & Pick<RedemptionRequestedEvent, 'id' | 'transactionHash' | 'submitter' | 'timestamp'>
  ) | (
    { __typename: 'RegisteredPubKeyEvent' }
    & Pick<RegisteredPubKeyEvent, 'id' | 'transactionHash' | 'submitter' | 'timestamp'>
  ) | (
    { __typename: 'SetupFailedEvent' }
    & Pick<SetupFailedEvent, 'id' | 'transactionHash' | 'submitter' | 'timestamp'>
  ) | (
    { __typename: 'StakeOwnershipTransferredEvent' }
    & Pick<StakeOwnershipTransferredEvent, 'id' | 'transactionHash' | 'submitter' | 'timestamp'>
  ) | (
    { __typename: 'StakingContractAuthorizedEvent' }
    & Pick<StakingContractAuthorizedEvent, 'id' | 'transactionHash' | 'submitter' | 'timestamp'>
  ) | (
    { __typename: 'StartedLiquidationEvent' }
    & Pick<StartedLiquidationEvent, 'id' | 'transactionHash' | 'submitter' | 'timestamp'>
  ) | (
    { __typename: 'TokenGrantCreatedEvent' }
    & Pick<TokenGrantCreatedEvent, 'id' | 'transactionHash' | 'submitter' | 'timestamp'>
  ) | (
    { __typename: 'TokenGrantRevokedEvent' }
    & Pick<TokenGrantRevokedEvent, 'id' | 'transactionHash' | 'submitter' | 'timestamp'>
  ) | (
    { __typename: 'TokenGrantStakedEvent' }
    & Pick<TokenGrantStakedEvent, 'id' | 'transactionHash' | 'submitter' | 'timestamp'>
  ) | (
    { __typename: 'TokenGrantWithdrawnEvent' }
    & Pick<TokenGrantWithdrawnEvent, 'id' | 'transactionHash' | 'submitter' | 'timestamp'>
  ) | (
    { __typename: 'TokensSeizedEvent' }
    & Pick<TokensSeizedEvent, 'id' | 'transactionHash' | 'submitter' | 'timestamp'>
  ) | (
    { __typename: 'TokensSlashedEvent' }
    & Pick<TokensSlashedEvent, 'id' | 'transactionHash' | 'submitter' | 'timestamp'>
  ) | (
    { __typename: 'TopUpCompletedEvent' }
    & Pick<TopUpCompletedEvent, 'id' | 'transactionHash' | 'submitter' | 'timestamp'>
  ) | (
    { __typename: 'TopUpInitiatedEvent' }
    & Pick<TopUpInitiatedEvent, 'id' | 'transactionHash' | 'submitter' | 'timestamp'>
  ) | (
    { __typename: 'UnbondedValueDepositedEvent' }
    & Pick<UnbondedValueDepositedEvent, 'id' | 'transactionHash' | 'submitter' | 'timestamp'>
  ) | (
    { __typename: 'UnbondedValueWithdrawnEvent' }
    & Pick<UnbondedValueWithdrawnEvent, 'id' | 'transactionHash' | 'submitter' | 'timestamp'>
  ) | (
    { __typename: 'UndelegatedEvent' }
    & Pick<UndelegatedEvent, 'id' | 'transactionHash' | 'submitter' | 'timestamp'>
  )> }
);

export type GetOperatorPropertiesQueryVariables = Exact<{
  id: Scalars['ID'];
  address: Scalars['Bytes'];
}>;


export type GetOperatorPropertiesQuery = (
  { __typename?: 'Query' }
  & { operator?: Maybe<(
    { __typename?: 'Operator' }
    & { locks: Array<(
      { __typename?: 'Lock' }
      & Pick<Lock, 'id' | 'until' | 'creator'>
      & { operator: (
        { __typename?: 'Operator' }
        & Pick<Operator, 'id'>
      ) }
    )> }
  )> }
);

export type GetOperatorQueryVariables = Exact<{
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
}>;


export type GetOperatorQuery = (
  { __typename?: 'Query' }
  & { operator?: Maybe<(
    { __typename?: 'Operator' }
    & Pick<Operator, 'id' | 'address' | 'bonded' | 'unboundAvailable' | 'stakedAmount' | 'totalFaultCount' | 'attributableFaultCount' | 'totalTBTCRewards'>
    & { beaconGroupMemberships: Array<(
      { __typename?: 'RandomBeaconGroupMembership' }
      & Pick<RandomBeaconGroupMembership, 'count' | 'reward'>
      & { group: (
        { __typename?: 'RandomBeaconGroup' }
        & Pick<RandomBeaconGroup, 'id' | 'pubKey' | 'createdAt'>
      ) }
    )> }
  )> }
);

export type GetOperatorsQueryVariables = Exact<{
  orderBy?: Maybe<Operator_OrderBy>;
  direction?: Maybe<OrderDirection>;
  block?: Maybe<Block_Height>;
}>;


export type GetOperatorsQuery = (
  { __typename?: 'Query' }
  & { operators: Array<(
    { __typename?: 'Operator' }
    & Pick<Operator, 'id' | 'address' | 'bonded' | 'stakedAt' | 'unboundAvailable' | 'totalKeepCount' | 'activeKeepCount' | 'stakedAmount' | 'totalFaultCount' | 'attributableFaultCount' | 'totalTBTCRewards' | 'totalETHRewards'>
  )>, stats?: Maybe<(
    { __typename?: 'StatsRecord' }
    & Pick<StatsRecord, 'availableToBeBonded' | 'totalBonded'>
  )> }
);

export type GetStakedropDataQueryVariables = Exact<{
  block?: Maybe<Block_Height>;
}>;


export type GetStakedropDataQuery = (
  { __typename?: 'Query' }
  & { stakedropIntervals: Array<(
    { __typename?: 'StakedropInterval' }
    & Pick<StakedropInterval, 'id' | 'number' | 'beaconIntervalStart' | 'beaconIntervalEnd' | 'ecdsaIntervalStart' | 'ecdsaIntervalEnd' | 'keepCount' | 'beaconGroupCount' | 'allocationECDSA' | 'allocationBeacon'>
  )> }
);

export type GetUsersQueryVariables = Exact<{
  orderBy?: Maybe<User_OrderBy>;
  direction?: Maybe<OrderDirection>;
  block?: Maybe<Block_Height>;
}>;


export type GetUsersQuery = (
  { __typename?: 'Query' }
  & { users: Array<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'address' | 'numDepositsCreated' | 'numDepositsUnfunded' | 'numDepositsRedeemed' | 'numOwnDepositsRedeemed'>
  )> }
);

export type NiceStateLabelFragment = (
  { __typename?: 'Deposit' }
  & Pick<Deposit, 'currentState' | 'currentStateTimesOutAt' | 'updatedAt'>
  & { bondedECDSAKeep?: Maybe<(
    { __typename?: 'BondedECDSAKeep' }
    & Pick<BondedEcdsaKeep, 'publicKey'>
  )>, depositSetup?: Maybe<(
    { __typename?: 'DepositSetup' }
    & Pick<DepositSetup, 'failureReason'>
  )> }
);

export type AuctionDetailsFragment = (
  { __typename?: 'Deposit' }
  & Pick<Deposit, 'initialCollateralizedPercent'>
  & { depositLiquidation?: Maybe<(
    { __typename?: 'DepositLiquidation' }
    & Pick<DepositLiquidation, 'liquidationInitiated' | 'liquidatedAt'>
  )>, bondedECDSAKeep?: Maybe<(
    { __typename?: 'BondedECDSAKeep' }
    & Pick<BondedEcdsaKeep, 'totalBondAmount'>
  )> }
);

export const ChangeFragmentDoc = gql`
    fragment Change on GovernanceChange {
  type
  requestedAt
  takesEffectAfter
  newLotSizes
  newFactorySelector
  newFullyBackedFactory
  newKeepStakedFactory
}
    `;
export const NiceStateLabelFragmentDoc = gql`
    fragment NiceStateLabel on Deposit {
  currentState
  bondedECDSAKeep {
    publicKey
  }
  depositSetup {
    failureReason
  }
  currentStateTimesOutAt
  updatedAt
}
    `;
export const AuctionDetailsFragmentDoc = gql`
    fragment AuctionDetails on Deposit {
  initialCollateralizedPercent
  depositLiquidation {
    liquidationInitiated
    liquidatedAt
  }
  bondedECDSAKeep {
    totalBondAmount
  }
}
    `;
export const WatchPriceDocument = gql`
    subscription WatchPrice {
  priceFeed(id: "0x81a679f98b63b3ddf2f17cb5619f4d6775b3c5ed") {
    val
    timestamp
    blockNumber
    transactionHash
  }
}
    `;

/**
 * __useWatchPriceSubscription__
 *
 * To run a query within a React component, call `useWatchPriceSubscription` and pass it any options that fit your needs.
 * When your component renders, `useWatchPriceSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWatchPriceSubscription({
 *   variables: {
 *   },
 * });
 */
export function useWatchPriceSubscription(baseOptions?: Apollo.SubscriptionHookOptions<WatchPriceSubscription, WatchPriceSubscriptionVariables>) {
        return Apollo.useSubscription<WatchPriceSubscription, WatchPriceSubscriptionVariables>(WatchPriceDocument, baseOptions);
      }
export type WatchPriceSubscriptionHookResult = ReturnType<typeof useWatchPriceSubscription>;
export type WatchPriceSubscriptionResult = Apollo.SubscriptionResult<WatchPriceSubscription>;
export const GetBlockPriceDocument = gql`
    query GetBlockPrice($block: Block_height) {
  priceFeed(id: "0x81a679f98b63b3ddf2f17cb5619f4d6775b3c5ed", block: $block) {
    val
    timestamp
    blockNumber
    transactionHash
  }
}
    `;

/**
 * __useGetBlockPriceQuery__
 *
 * To run a query within a React component, call `useGetBlockPriceQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBlockPriceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBlockPriceQuery({
 *   variables: {
 *      block: // value for 'block'
 *   },
 * });
 */
export function useGetBlockPriceQuery(baseOptions?: Apollo.QueryHookOptions<GetBlockPriceQuery, GetBlockPriceQueryVariables>) {
        return Apollo.useQuery<GetBlockPriceQuery, GetBlockPriceQueryVariables>(GetBlockPriceDocument, baseOptions);
      }
export function useGetBlockPriceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBlockPriceQuery, GetBlockPriceQueryVariables>) {
          return Apollo.useLazyQuery<GetBlockPriceQuery, GetBlockPriceQueryVariables>(GetBlockPriceDocument, baseOptions);
        }
export type GetBlockPriceQueryHookResult = ReturnType<typeof useGetBlockPriceQuery>;
export type GetBlockPriceLazyQueryHookResult = ReturnType<typeof useGetBlockPriceLazyQuery>;
export type GetBlockPriceQueryResult = Apollo.QueryResult<GetBlockPriceQuery, GetBlockPriceQueryVariables>;
export const GetRelayEntriesDocument = gql`
    query GetRelayEntries($block: Block_height) {
  randomBeaconGroups(first: 1000, orderBy: createdAt, orderDirection: desc, block: $block) {
    id
    pubKey
    createdAt
    uniqueMemberCount
    rewardPerMember
  }
  relayEntries(first: 1000, orderBy: requestedAt, orderDirection: desc, block: $block) {
    id
    requestId
    value
    requestedAt
    generatedAt
    rewardPerMember
    group {
      id
      pubKey
    }
  }
}
    `;

/**
 * __useGetRelayEntriesQuery__
 *
 * To run a query within a React component, call `useGetRelayEntriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRelayEntriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRelayEntriesQuery({
 *   variables: {
 *      block: // value for 'block'
 *   },
 * });
 */
export function useGetRelayEntriesQuery(baseOptions?: Apollo.QueryHookOptions<GetRelayEntriesQuery, GetRelayEntriesQueryVariables>) {
        return Apollo.useQuery<GetRelayEntriesQuery, GetRelayEntriesQueryVariables>(GetRelayEntriesDocument, baseOptions);
      }
export function useGetRelayEntriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRelayEntriesQuery, GetRelayEntriesQueryVariables>) {
          return Apollo.useLazyQuery<GetRelayEntriesQuery, GetRelayEntriesQueryVariables>(GetRelayEntriesDocument, baseOptions);
        }
export type GetRelayEntriesQueryHookResult = ReturnType<typeof useGetRelayEntriesQuery>;
export type GetRelayEntriesLazyQueryHookResult = ReturnType<typeof useGetRelayEntriesLazyQuery>;
export type GetRelayEntriesQueryResult = Apollo.QueryResult<GetRelayEntriesQuery, GetRelayEntriesQueryVariables>;
export const GetDepositDocument = gql`
    query GetDeposit($id: ID!, $block: Block_height) {
  deposit(id: $id, block: $block) {
    id
    contractAddress
    currentState
    createdAt
    keepAddress
    lotSizeSatoshis
    endOfTerm
    index
    currentStateTimesOutAt
    tdtToken {
      id
      tokenID
      owner
      minter
    }
    initialCollateralizedPercent
    undercollateralizedThresholdPercent
    severelyUndercollateralizedThresholdPercent
    bondedECDSAKeep {
      id
      keepAddress
      totalBondAmount
      publicKey
      status
      honestThreshold
      members {
        id
        address
      }
    }
    depositLiquidation {
      cause
    }
    ...NiceStateLabel
  }
}
    ${NiceStateLabelFragmentDoc}`;

/**
 * __useGetDepositQuery__
 *
 * To run a query within a React component, call `useGetDepositQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDepositQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDepositQuery({
 *   variables: {
 *      id: // value for 'id'
 *      block: // value for 'block'
 *   },
 * });
 */
export function useGetDepositQuery(baseOptions?: Apollo.QueryHookOptions<GetDepositQuery, GetDepositQueryVariables>) {
        return Apollo.useQuery<GetDepositQuery, GetDepositQueryVariables>(GetDepositDocument, baseOptions);
      }
export function useGetDepositLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDepositQuery, GetDepositQueryVariables>) {
          return Apollo.useLazyQuery<GetDepositQuery, GetDepositQueryVariables>(GetDepositDocument, baseOptions);
        }
export type GetDepositQueryHookResult = ReturnType<typeof useGetDepositQuery>;
export type GetDepositLazyQueryHookResult = ReturnType<typeof useGetDepositLazyQuery>;
export type GetDepositQueryResult = Apollo.QueryResult<GetDepositQuery, GetDepositQueryVariables>;
export const WatchDepositDocument = gql`
    subscription WatchDeposit($id: ID!) {
  deposit(id: $id) {
    id
    currentState
  }
}
    `;

/**
 * __useWatchDepositSubscription__
 *
 * To run a query within a React component, call `useWatchDepositSubscription` and pass it any options that fit your needs.
 * When your component renders, `useWatchDepositSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWatchDepositSubscription({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useWatchDepositSubscription(baseOptions?: Apollo.SubscriptionHookOptions<WatchDepositSubscription, WatchDepositSubscriptionVariables>) {
        return Apollo.useSubscription<WatchDepositSubscription, WatchDepositSubscriptionVariables>(WatchDepositDocument, baseOptions);
      }
export type WatchDepositSubscriptionHookResult = ReturnType<typeof useWatchDepositSubscription>;
export type WatchDepositSubscriptionResult = Apollo.SubscriptionResult<WatchDepositSubscription>;
export const GetDepositLogsDocument = gql`
    query GetDepositLogs($depositId: String!, $block: Block_height) {
  events(where: {deposit: $depositId}, orderBy: timestamp, orderDirection: desc, block: $block) {
    __typename
    id
    transactionHash
    submitter
    timestamp
    ... on RegisteredPubKeyEvent {
      signingGroupPubkeyX
      signingGroupPubkeyY
    }
    ... on StartedLiquidationEvent {
      cause
    }
    ... on LiquidatedEvent {
      deposit {
        ...AuctionDetails
      }
    }
    ... on SetupFailedEvent {
      reason
      deposit {
        bondedECDSAKeep {
          pubkeySubmissions {
            address
          }
          members {
            address
          }
        }
      }
    }
  }
}
    ${AuctionDetailsFragmentDoc}`;

/**
 * __useGetDepositLogsQuery__
 *
 * To run a query within a React component, call `useGetDepositLogsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDepositLogsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDepositLogsQuery({
 *   variables: {
 *      depositId: // value for 'depositId'
 *      block: // value for 'block'
 *   },
 * });
 */
export function useGetDepositLogsQuery(baseOptions?: Apollo.QueryHookOptions<GetDepositLogsQuery, GetDepositLogsQueryVariables>) {
        return Apollo.useQuery<GetDepositLogsQuery, GetDepositLogsQueryVariables>(GetDepositLogsDocument, baseOptions);
      }
export function useGetDepositLogsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDepositLogsQuery, GetDepositLogsQueryVariables>) {
          return Apollo.useLazyQuery<GetDepositLogsQuery, GetDepositLogsQueryVariables>(GetDepositLogsDocument, baseOptions);
        }
export type GetDepositLogsQueryHookResult = ReturnType<typeof useGetDepositLogsQuery>;
export type GetDepositLogsLazyQueryHookResult = ReturnType<typeof useGetDepositLogsLazyQuery>;
export type GetDepositLogsQueryResult = Apollo.QueryResult<GetDepositLogsQuery, GetDepositLogsQueryVariables>;
export const GetDepositsDocument = gql`
    query GetDeposits($where: Deposit_filter, $orderBy: Deposit_orderBy, $skip: Int, $block: Block_height, $orderDirection: OrderDirection, $perPage: Int) {
  deposits(first: $perPage, skip: $skip, orderBy: $orderBy, orderDirection: $orderDirection, where: $where, block: $block) {
    id
    contractAddress
    lotSizeSatoshis
    currentState
    keepAddress
    updatedAt
    createdAt
    redemptionStartedAt
    currentStateTimesOutAt
    creator
    lastActor
    tdtToken {
      owner
    }
    filter_redeemableAsOf
    undercollateralizedThresholdPercent
    severelyUndercollateralizedThresholdPercent
    bondedECDSAKeep {
      id
      totalBondAmount
      publicKey
    }
    ...NiceStateLabel
  }
  stats: statsRecord(id: "current", block: $block) {
    depositCount
  }
}
    ${NiceStateLabelFragmentDoc}`;

/**
 * __useGetDepositsQuery__
 *
 * To run a query within a React component, call `useGetDepositsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDepositsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDepositsQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      skip: // value for 'skip'
 *      block: // value for 'block'
 *      orderDirection: // value for 'orderDirection'
 *      perPage: // value for 'perPage'
 *   },
 * });
 */
export function useGetDepositsQuery(baseOptions?: Apollo.QueryHookOptions<GetDepositsQuery, GetDepositsQueryVariables>) {
        return Apollo.useQuery<GetDepositsQuery, GetDepositsQueryVariables>(GetDepositsDocument, baseOptions);
      }
export function useGetDepositsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDepositsQuery, GetDepositsQueryVariables>) {
          return Apollo.useLazyQuery<GetDepositsQuery, GetDepositsQueryVariables>(GetDepositsDocument, baseOptions);
        }
export type GetDepositsQueryHookResult = ReturnType<typeof useGetDepositsQuery>;
export type GetDepositsLazyQueryHookResult = ReturnType<typeof useGetDepositsLazyQuery>;
export type GetDepositsQueryResult = Apollo.QueryResult<GetDepositsQuery, GetDepositsQueryVariables>;
export const GetGovernanceDocument = gql`
    query GetGovernance($block: Block_height) {
  governance(id: "GOVERNANCE", block: $block) {
    newDepositsAllowed
    lotSizes
    pendingLotSizeChange {
      ...Change
    }
    factorySelector
    fullyBackedFactory
    keepStakedFactory
    pendingFactoriesChange {
      ...Change
    }
    signerFeeDivisor
    pendingSignerFeeDivisorChange {
      ...Change
    }
    initialCollateralizedPercent
    severelyUndercollateralizedThresholdPercent
    undercollateralizedThresholdPercent
    priceFeeds
  }
  governanceLogEntries(first: 300, orderBy: timestamp, orderDirection: desc, block: $block) {
    id
    timestamp
    transactionHash
    submitter
    isRequest
    change {
      ...Change
    }
  }
}
    ${ChangeFragmentDoc}`;

/**
 * __useGetGovernanceQuery__
 *
 * To run a query within a React component, call `useGetGovernanceQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGovernanceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGovernanceQuery({
 *   variables: {
 *      block: // value for 'block'
 *   },
 * });
 */
export function useGetGovernanceQuery(baseOptions?: Apollo.QueryHookOptions<GetGovernanceQuery, GetGovernanceQueryVariables>) {
        return Apollo.useQuery<GetGovernanceQuery, GetGovernanceQueryVariables>(GetGovernanceDocument, baseOptions);
      }
export function useGetGovernanceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetGovernanceQuery, GetGovernanceQueryVariables>) {
          return Apollo.useLazyQuery<GetGovernanceQuery, GetGovernanceQueryVariables>(GetGovernanceDocument, baseOptions);
        }
export type GetGovernanceQueryHookResult = ReturnType<typeof useGetGovernanceQuery>;
export type GetGovernanceLazyQueryHookResult = ReturnType<typeof useGetGovernanceLazyQuery>;
export type GetGovernanceQueryResult = Apollo.QueryResult<GetGovernanceQuery, GetGovernanceQueryVariables>;
export const GetRandomBeaconGroupDocument = gql`
    query GetRandomBeaconGroup($id: ID!, $block: Block_height) {
  randomBeaconGroup(id: $id, block: $block) {
    id
    createdAt
    rewardPerMember
    memberships(orderBy: count, orderDirection: desc) {
      id
      count
      reward
      operator {
        address
        stakedAmount
      }
    }
    relayEntries(first: 1000, orderBy: requestedAt, orderDirection: desc) {
      id
      requestId
      value
      requestedAt
      generatedAt
      rewardPerMember
      group {
        id
        pubKey
      }
    }
  }
}
    `;

/**
 * __useGetRandomBeaconGroupQuery__
 *
 * To run a query within a React component, call `useGetRandomBeaconGroupQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRandomBeaconGroupQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRandomBeaconGroupQuery({
 *   variables: {
 *      id: // value for 'id'
 *      block: // value for 'block'
 *   },
 * });
 */
export function useGetRandomBeaconGroupQuery(baseOptions?: Apollo.QueryHookOptions<GetRandomBeaconGroupQuery, GetRandomBeaconGroupQueryVariables>) {
        return Apollo.useQuery<GetRandomBeaconGroupQuery, GetRandomBeaconGroupQueryVariables>(GetRandomBeaconGroupDocument, baseOptions);
      }
export function useGetRandomBeaconGroupLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRandomBeaconGroupQuery, GetRandomBeaconGroupQueryVariables>) {
          return Apollo.useLazyQuery<GetRandomBeaconGroupQuery, GetRandomBeaconGroupQueryVariables>(GetRandomBeaconGroupDocument, baseOptions);
        }
export type GetRandomBeaconGroupQueryHookResult = ReturnType<typeof useGetRandomBeaconGroupQuery>;
export type GetRandomBeaconGroupLazyQueryHookResult = ReturnType<typeof useGetRandomBeaconGroupLazyQuery>;
export type GetRandomBeaconGroupQueryResult = Apollo.QueryResult<GetRandomBeaconGroupQuery, GetRandomBeaconGroupQueryVariables>;
export const GetOperatorKeepsDocument = gql`
    query GetOperatorKeeps($id: ID!, $orderBy: BondedECDSAKeep_orderBy, $orderDirection: OrderDirection, $block: Block_height) {
  operator(id: $id, block: $block) {
    keeps(first: 1000, orderBy: $orderBy, orderDirection: $orderDirection) {
      id
      totalBondAmount
      deposit {
        id
        contractAddress
        lotSizeSatoshis
        currentState
        keepAddress
        createdAt
        tdtToken {
          owner
        }
        undercollateralizedThresholdPercent
        severelyUndercollateralizedThresholdPercent
        bondedECDSAKeep {
          id
          totalBondAmount
        }
        ...NiceStateLabel
      }
    }
  }
}
    ${NiceStateLabelFragmentDoc}`;

/**
 * __useGetOperatorKeepsQuery__
 *
 * To run a query within a React component, call `useGetOperatorKeepsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOperatorKeepsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOperatorKeepsQuery({
 *   variables: {
 *      id: // value for 'id'
 *      orderBy: // value for 'orderBy'
 *      orderDirection: // value for 'orderDirection'
 *      block: // value for 'block'
 *   },
 * });
 */
export function useGetOperatorKeepsQuery(baseOptions?: Apollo.QueryHookOptions<GetOperatorKeepsQuery, GetOperatorKeepsQueryVariables>) {
        return Apollo.useQuery<GetOperatorKeepsQuery, GetOperatorKeepsQueryVariables>(GetOperatorKeepsDocument, baseOptions);
      }
export function useGetOperatorKeepsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOperatorKeepsQuery, GetOperatorKeepsQueryVariables>) {
          return Apollo.useLazyQuery<GetOperatorKeepsQuery, GetOperatorKeepsQueryVariables>(GetOperatorKeepsDocument, baseOptions);
        }
export type GetOperatorKeepsQueryHookResult = ReturnType<typeof useGetOperatorKeepsQuery>;
export type GetOperatorKeepsLazyQueryHookResult = ReturnType<typeof useGetOperatorKeepsLazyQuery>;
export type GetOperatorKeepsQueryResult = Apollo.QueryResult<GetOperatorKeepsQuery, GetOperatorKeepsQueryVariables>;
export const GetOperatorLogDocument = gql`
    query GetOperatorLog($id: String!, $orderBy: BondedECDSAKeep_orderBy, $orderDirection: OrderDirection, $block: Block_height) {
  events(where: {operator: $id}, orderBy: timestamp, orderDirection: desc, block: $block) {
    __typename
    id
    transactionHash
    submitter
    timestamp
  }
}
    `;

/**
 * __useGetOperatorLogQuery__
 *
 * To run a query within a React component, call `useGetOperatorLogQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOperatorLogQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOperatorLogQuery({
 *   variables: {
 *      id: // value for 'id'
 *      orderBy: // value for 'orderBy'
 *      orderDirection: // value for 'orderDirection'
 *      block: // value for 'block'
 *   },
 * });
 */
export function useGetOperatorLogQuery(baseOptions?: Apollo.QueryHookOptions<GetOperatorLogQuery, GetOperatorLogQueryVariables>) {
        return Apollo.useQuery<GetOperatorLogQuery, GetOperatorLogQueryVariables>(GetOperatorLogDocument, baseOptions);
      }
export function useGetOperatorLogLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOperatorLogQuery, GetOperatorLogQueryVariables>) {
          return Apollo.useLazyQuery<GetOperatorLogQuery, GetOperatorLogQueryVariables>(GetOperatorLogDocument, baseOptions);
        }
export type GetOperatorLogQueryHookResult = ReturnType<typeof useGetOperatorLogQuery>;
export type GetOperatorLogLazyQueryHookResult = ReturnType<typeof useGetOperatorLogLazyQuery>;
export type GetOperatorLogQueryResult = Apollo.QueryResult<GetOperatorLogQuery, GetOperatorLogQueryVariables>;
export const GetOperatorPropertiesDocument = gql`
    query GetOperatorProperties($id: ID!, $address: Bytes!) {
  operator(id: $id) {
    locks {
      id
      until
      creator
      operator {
        id
      }
    }
  }
}
    `;

/**
 * __useGetOperatorPropertiesQuery__
 *
 * To run a query within a React component, call `useGetOperatorPropertiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOperatorPropertiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOperatorPropertiesQuery({
 *   variables: {
 *      id: // value for 'id'
 *      address: // value for 'address'
 *   },
 * });
 */
export function useGetOperatorPropertiesQuery(baseOptions?: Apollo.QueryHookOptions<GetOperatorPropertiesQuery, GetOperatorPropertiesQueryVariables>) {
        return Apollo.useQuery<GetOperatorPropertiesQuery, GetOperatorPropertiesQueryVariables>(GetOperatorPropertiesDocument, baseOptions);
      }
export function useGetOperatorPropertiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOperatorPropertiesQuery, GetOperatorPropertiesQueryVariables>) {
          return Apollo.useLazyQuery<GetOperatorPropertiesQuery, GetOperatorPropertiesQueryVariables>(GetOperatorPropertiesDocument, baseOptions);
        }
export type GetOperatorPropertiesQueryHookResult = ReturnType<typeof useGetOperatorPropertiesQuery>;
export type GetOperatorPropertiesLazyQueryHookResult = ReturnType<typeof useGetOperatorPropertiesLazyQuery>;
export type GetOperatorPropertiesQueryResult = Apollo.QueryResult<GetOperatorPropertiesQuery, GetOperatorPropertiesQueryVariables>;
export const GetOperatorDocument = gql`
    query GetOperator($id: ID!, $block: Block_height) {
  operator(id: $id, block: $block) {
    id
    address
    bonded
    unboundAvailable
    stakedAmount
    totalFaultCount
    attributableFaultCount
    totalTBTCRewards
    beaconGroupMemberships(orderBy: groupCreatedAt, orderDirection: desc) {
      count
      reward
      group {
        id
        pubKey
        createdAt
      }
    }
  }
}
    `;

/**
 * __useGetOperatorQuery__
 *
 * To run a query within a React component, call `useGetOperatorQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOperatorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOperatorQuery({
 *   variables: {
 *      id: // value for 'id'
 *      block: // value for 'block'
 *   },
 * });
 */
export function useGetOperatorQuery(baseOptions?: Apollo.QueryHookOptions<GetOperatorQuery, GetOperatorQueryVariables>) {
        return Apollo.useQuery<GetOperatorQuery, GetOperatorQueryVariables>(GetOperatorDocument, baseOptions);
      }
export function useGetOperatorLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOperatorQuery, GetOperatorQueryVariables>) {
          return Apollo.useLazyQuery<GetOperatorQuery, GetOperatorQueryVariables>(GetOperatorDocument, baseOptions);
        }
export type GetOperatorQueryHookResult = ReturnType<typeof useGetOperatorQuery>;
export type GetOperatorLazyQueryHookResult = ReturnType<typeof useGetOperatorLazyQuery>;
export type GetOperatorQueryResult = Apollo.QueryResult<GetOperatorQuery, GetOperatorQueryVariables>;
export const GetOperatorsDocument = gql`
    query GetOperators($orderBy: Operator_orderBy, $direction: OrderDirection, $block: Block_height) {
  operators(first: 1000, orderBy: $orderBy, orderDirection: $direction, block: $block) {
    id
    address
    bonded
    stakedAt
    unboundAvailable
    totalKeepCount
    activeKeepCount
    stakedAmount
    totalFaultCount
    attributableFaultCount
    totalTBTCRewards
    totalETHRewards
  }
  stats: statsRecord(id: "current", block: $block) {
    availableToBeBonded
    totalBonded
  }
}
    `;

/**
 * __useGetOperatorsQuery__
 *
 * To run a query within a React component, call `useGetOperatorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOperatorsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOperatorsQuery({
 *   variables: {
 *      orderBy: // value for 'orderBy'
 *      direction: // value for 'direction'
 *      block: // value for 'block'
 *   },
 * });
 */
export function useGetOperatorsQuery(baseOptions?: Apollo.QueryHookOptions<GetOperatorsQuery, GetOperatorsQueryVariables>) {
        return Apollo.useQuery<GetOperatorsQuery, GetOperatorsQueryVariables>(GetOperatorsDocument, baseOptions);
      }
export function useGetOperatorsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOperatorsQuery, GetOperatorsQueryVariables>) {
          return Apollo.useLazyQuery<GetOperatorsQuery, GetOperatorsQueryVariables>(GetOperatorsDocument, baseOptions);
        }
export type GetOperatorsQueryHookResult = ReturnType<typeof useGetOperatorsQuery>;
export type GetOperatorsLazyQueryHookResult = ReturnType<typeof useGetOperatorsLazyQuery>;
export type GetOperatorsQueryResult = Apollo.QueryResult<GetOperatorsQuery, GetOperatorsQueryVariables>;
export const GetStakedropDataDocument = gql`
    query GetStakedropData($block: Block_height) {
  stakedropIntervals {
    id
    number
    beaconIntervalStart
    beaconIntervalEnd
    ecdsaIntervalStart
    ecdsaIntervalEnd
    keepCount
    beaconGroupCount
    allocationECDSA
    allocationBeacon
  }
}
    `;

/**
 * __useGetStakedropDataQuery__
 *
 * To run a query within a React component, call `useGetStakedropDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStakedropDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStakedropDataQuery({
 *   variables: {
 *      block: // value for 'block'
 *   },
 * });
 */
export function useGetStakedropDataQuery(baseOptions?: Apollo.QueryHookOptions<GetStakedropDataQuery, GetStakedropDataQueryVariables>) {
        return Apollo.useQuery<GetStakedropDataQuery, GetStakedropDataQueryVariables>(GetStakedropDataDocument, baseOptions);
      }
export function useGetStakedropDataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStakedropDataQuery, GetStakedropDataQueryVariables>) {
          return Apollo.useLazyQuery<GetStakedropDataQuery, GetStakedropDataQueryVariables>(GetStakedropDataDocument, baseOptions);
        }
export type GetStakedropDataQueryHookResult = ReturnType<typeof useGetStakedropDataQuery>;
export type GetStakedropDataLazyQueryHookResult = ReturnType<typeof useGetStakedropDataLazyQuery>;
export type GetStakedropDataQueryResult = Apollo.QueryResult<GetStakedropDataQuery, GetStakedropDataQueryVariables>;
export const GetUsersDocument = gql`
    query GetUsers($orderBy: User_orderBy, $direction: OrderDirection, $block: Block_height) {
  users(first: 1000, orderBy: $orderBy, orderDirection: $direction, block: $block) {
    id
    address
    numDepositsCreated
    numDepositsUnfunded
    numDepositsRedeemed
    numOwnDepositsRedeemed
  }
}
    `;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *      orderBy: // value for 'orderBy'
 *      direction: // value for 'direction'
 *      block: // value for 'block'
 *   },
 * });
 */
export function useGetUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
        return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, baseOptions);
      }
export function useGetUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, baseOptions);
        }
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersQueryResult = Apollo.QueryResult<GetUsersQuery, GetUsersQueryVariables>;